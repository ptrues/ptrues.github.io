# Antwerp rentals within walking distance of a tram

Two-bedroom apartments to rent in Antwerp under €1,100/month, filtered to those
within an 800 m buffer of a De Lijn tram or premetro stop, on a map you can
filter by line.

Published at <https://prtruesdell.com/antwerp-rentals/>.

## Layout

This is the pipeline half of the project. It lives under `tools/` in the site
repo, which `.github/workflows/deploy.yml` prunes from the Pages artifact, so
nothing here is served.

```
tools/antwerp-rentals/
  data/raw/         as fetched, unmodified
  data/processed/   derived: buffers, spatial join, reprojected raster
  data/history/     append-only snapshots (see LIVE_DASHBOARD_PLAN.md)
  scripts/          the pipeline, numbered in run order

antwerp-rentals/    <- the published page; `_env.WEB` points here
  index.html            the shell: chrome, CSS, JS, no data
  data/network.json     stops, colours, routes, noise bounds
  data/listings.json    the apartments -- the only file a refresh rewrites
  noise_lden_2021.png, noise_bounds.json
```

`scripts/_env.py` is the only place that knows either path.

## Running it

Everything runs on the `geospatial` conda env:

```
C:/anaconda/envs/geospatial/python.exe tools/antwerp-rentals/scripts/run_all.py
```

Or a single step, e.g. `scripts/02_buffer_stops.py`. `run_all.py --from 4`
resumes partway. `03_fetch_immoweb.py --from-cache` rebuilds the listing
GeoJSON from the saved API pages without re-querying Immoweb.

### Looking at the result

The page fetches its data, and `fetch()` of a relative path is blocked under
`file://`, so opening `index.html` off disk shows a "could not load" panel
rather than a map. Serve the repo root instead:

```
python -m http.server 8000        # from the repo root, then
                                  # http://localhost:8000/antwerp-rentals/
```

For a copy that does work off disk — on a plane, or to mail to someone — build
`05_build_map.py --inline`, which bakes the data into `index-offline.html`.
That file is gitignored on purpose: an inlined page ignores `listings.json`, so
a published one would sit frozen at its snapshot and still look healthy.

### PROJ and the PostGIS conflict

This machine has PostgreSQL/PostGIS, which exports `PROJ_LIB` and `GDAL_DATA`
pointing at PostGIS' own PROJ 3.6 tree. pyproj in the conda env then fails with
`CRSError: ... no database context specified`. Every script imports `_env`
first, which repoints `PROJ_DATA` / `PROJ_LIB` / `GDAL_DATA` at the running
interpreter's own share directories. Keep that import above any
pyproj / geopandas / rasterio import.

## The pipeline

| Step | Does | Writes |
|---|---|---|
| `01_fetch_delijn_stops.py` | Tram/premetro stops as points | `raw/delijn_tram_stops.geojson`, `raw/delijn_lines.json` |
| `07_fetch_line_shapes.py` | Route geometry per line | `raw/delijn_line_shapes.geojson` |
| `02_buffer_stops.py` | 800 m buffers, in EPSG:31370 | `processed/stop_buffers_800m.geojson`, `tram_catchment_800m.geojson`, `line_catchments_800m.geojson` |
| `03_fetch_immoweb.py` | Rental listings as points | `raw/immoweb_rentals.geojson`, `raw/immoweb_pages.json` |
| `04_filter_listings.py` | Keeps listings inside a buffer, tags them with reachable lines | `processed/apartments_near_tram.geojson` |
| `06_fetch_noise_map.py` | Flemish road-noise rasters, composited and reprojected | `raw/noise_lden_2021_31370.tif`, `processed/..._3857.tif`, `antwerp-rentals/noise_lden_2021.png` |
| `05_build_map.py` | The web map | `antwerp-rentals/index.html`, `antwerp-rentals/data/network.json`, `antwerp-rentals/data/listings.json` |

Current run: 310 stops on 12 lines → 148 listings matching the attribute
filters → **109 within 800 m of a stop**, €450–€1,100, median €995.

## Data sources and the decisions behind them

**Tram stops — De Lijn, via OpenStreetMap.** `01` calls De Lijn's Open Data API
(`api.delijn.be/DLKernOpenData/api/v1`) whenever `DELIJN_API_KEY` is set. There
is no anonymous access — the API answers 401 without a key, and keys are free
but must be requested at <https://data.delijn.be/>. With no key present the
script falls back to OSM via Overpass, which carries De Lijn's own route
relations (`operator=De Lijn`, `route=tram`) with the public line number in
`ref`, giving both the stops and the stop→line mapping. **The current data came
from the OSM fallback.** Set the key and re-run `01` to source it from De Lijn
directly; the output schema is identical.

The live network is lines 1, 2, 4, 6, 7, 8, 10, 11, 12, 24, A3 and A9. Lines 3,
5 and 9 no longer exist; A3 and A9 stand in their place.

**Line geometry — OpenStreetMap.** `07` reads the same De Lijn route relations
`01` uses for the stops, and merges each relation's member ways — the track
itself, skipping members with a stop or platform role — into one geometry per
line. Geometry is simplified to 3 m in Lambert 72 before it goes back to
lon/lat for the web map.

**Listings — Immoweb.** No documented public API, but the search page is backed
by a JSON endpoint that answers plain GETs
(`/en/search-results/apartment/for-rent`, with `X-Requested-With:
XMLHttpRequest`). Each result carries latitude/longitude, `bedroomCount` and
`monthlyRentalPrice`.

*Where the filters go:* the endpoint understands the attribute filters natively
(`minBedroomCount`, `maxBedroomCount`, `maxPrice`, `postalCodes`), so bedrooms
and rent are applied **before** the call — that turns ~400 Antwerp apartments
into 154 and keeps paging short. It has no polygon predicate, so the 800 m test
is applied **after**, in `04`, against the buffers. The postcode list in `03` is
deliberately generous; the spatial filter does the real trimming.

**Noise — Mercator Vlaanderen WMS.** Road traffic noise for 2021, as Lden.
These layers advertise only CRS:84 and EPSG:31370 — not the EPSG:3857 a Leaflet
WMS layer requests — so `06` downloads in native Lambert 72 and reprojects
locally to Web Mercator.

*Why two layers.* `hh:hh_agglo_weg_lden_2021_c` is the agglomeration map: blanket
coverage, but only inside the agglomeration polygon, which for Antwerp is the
city municipality and nothing more. Measured against the OSM `admin_level=8`
boundary, **99.8% of its pixels fall inside the city**; Mortsel, Borsbeek,
Boechout, Wijnegem, Wommelgem, Edegem and Schoten are blank, and with them the
tram walksheds that only reach into those municipalities. `06` therefore
composites `hh:hh_weg_aan_lden_2021_c` — major and supplementary roads, all of
Flanders — underneath it, which fills the motorway and N-road corridors through
those places.

That takes the tram catchment from 62.9% covered to 68.9%, the walksheds with no
data at all from 17 of 310 to none, and the listings with nothing within 300 m
from 7 to 1. It is **not** seamless data: inside the city a blank pixel means
below the 55 dB Lden contour, outside it means unmapped. `06` measures the two
separately and records them in `antwerp-rentals/noise_bounds.json` — `coverage.full_area` vs
`coverage.corridor_only`, plus each layer's `role` and `extent`.

Pass `--layers` for a different stack, bottom-to-top, or `--layer` for a single
one (`--layer hh:hh_agglo_weg_lden_2021_c` reproduces the old behaviour). Rail,
air and industry equivalents are on the same service (`hh_agglo_spoor_*`,
`hh_agglo_lucht_*`, `hh_agglo_industrie_*`), each with an `lnight` variant.

**Aerial basemap — Esri World Imagery**, not Google: Google's tile endpoints
are not licensed for use outside their own APIs.

## The map

- **Line filter** — bullets in the blade across the top, in the network's real
  line colours. Selecting a line draws its full route geometry and its stops,
  and shows every listing that can reach it. The left-hand control flips
  between select all and deselect all.
- **Rent** is encoded in the marker fill: pale steel cheapest, dark dearest, so
  more ink means more money. Position on the ramp comes from the rent's *rank*,
  not its raw value — these rents pile up between €950 and €1,100 with a thin
  tail to €450, and a linear domain would push nine listings in ten into the
  same near-black. No legend, by design; the figure appears on hover.
- **Click a listing** for the sidebar: a photo carousel, rent, address, the
  facts, the lines within 800 m, and a link to the listing. Photos are
  hot-linked from Immoweb's CDN — nothing is copied locally.
- **Bottom left** switches basemap and toggles the noise overlay with an
  opacity slider.
- Esc closes the sidebar; arrow keys move through photos.

Line colours come from `_env.LINE_COLOURS` first, falling back to the `colour`
tag on each line's OSM route relation (used for 1, 11, A3, A9).

## Caveats

- Listing coordinates are Immoweb's own and are sometimes the street or block
  rather than the building, so `nearest_stop_m` is indicative, not survey grade.
- Distances are straight-line within the 800 m buffer, not walking routes.
- Immoweb returns some listings on more than one page; `03` de-duplicates by id
  (154 results → 148 unique).
- The noise overlay is two datasets composited, not one survey. Coverage is
  blanket inside the City of Antwerp and corridor-only outside it; see above.
- The listing snapshot is static. Re-run `03`–`05` to refresh.
