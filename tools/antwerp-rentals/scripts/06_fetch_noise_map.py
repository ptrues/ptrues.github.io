r"""Download the Flemish strategic noise map and reproject it for the web map.

Source: Mercator Vlaanderen public WMS
    https://www.mercator.vlaanderen.be/raadpleegdienstenmercatorpubliek/ows

Two families of road-noise layer live there, and they cover different ground:

  hh:hh_agglo_weg_lden_2021_c   the *agglomeration* map -- blanket coverage, but
                                only inside the agglomeration polygons. For
                                Antwerp that polygon is the City of Antwerp
                                municipality and nothing else: 99.8% of the
                                layer's pixels over this extent fall inside the
                                OSM admin_level=8 boundary. Mortsel, Borsbeek,
                                Boechout, Wijnegem, Wommelgem, Edegem and
                                Schoten are blank, and so are the 17 tram
                                walksheds that reach only into them.

  hh:hh_weg_aan_lden_2021_c     the *major and supplementary roads* map -- all of
                                Flanders, but only corridors around roads
                                carrying more than 3 million vehicle passages a
                                year. It fills the motorway and N-road corridors
                                through those municipalities and nothing between
                                them.

So the default composites the second under the first. That is deliberately not
seamless data: inside the agglomeration a blank pixel means "below the 55 dB Lden
contour", outside it means "not mapped at all". The two are measured separately
and written to noise_bounds.json (coverage.full_area vs coverage.corridor_only,
plus a per-layer `role` and `extent`) so the distinction stays on record.

Pass --layers to change the stack (bottom-to-top), or --layer for a single one:

    --layer hh:hh_agglo_weg_lden_2021_c     the agglomeration map on its own
    --layers hh:hh_agglo_spoor_lden_2021_c  rail instead of road

Rail, air and industry equivalents are on the same service (hh_agglo_spoor_*,
hh_agglo_lucht_*, hh_agglo_industrie_*), each with an lnight variant.

Why download instead of pointing Leaflet at the WMS: these layers advertise only
CRS:84 and EPSG:31370, not the EPSG:3857 that a Leaflet WMS layer asks for. So
the raster is fetched in its native Belgian Lambert 72, saved to data/raw, and
reprojected locally to Web Mercator, which is what the browser can place.

Reads  data/processed/tram_catchment_800m.geojson  (for the extent)
Writes data/raw/noise_lden_2021_31370.tif        native CRS, as downloaded
       data/processed/noise_lden_2021_3857.tif   reprojected
       web/noise_lden_2021.png                   + bounds and provenance in
                                                   noise_bounds.json

Run with the geospatial conda env:
    C:/anaconda/envs/geospatial/python.exe 06_fetch_noise_map.py
"""
from __future__ import annotations

import argparse
import json
import math

import _env  # noqa: F401 - must precede pyproj/rasterio (PROJ path fix)

import geopandas as gpd
import numpy as np
import rasterio
import requests
from PIL import Image
from rasterio.crs import CRS
from rasterio.transform import from_bounds
from rasterio.warp import Resampling, calculate_default_transform, reproject

WMS = "https://www.mercator.vlaanderen.be/raadpleegdienstenmercatorpubliek/ows"

# Bottom-to-top: the corridor layer is drawn first, the agglomeration map over it.
LAYERS = [
    "hh:hh_weg_aan_lden_2021_c",
    "hh:hh_agglo_weg_lden_2021_c",
]

# What each layer actually covers. `role` drives the caveat shown on the map:
# a "full-area" layer is blanket within its own polygon, a "corridor" layer only
# follows qualifying roads. Anything unlisted is assumed full-area.
LAYER_META = {
    "hh:hh_agglo_weg_lden_2021_c": {
        "title": "Road traffic, Lden 2021, inside the large agglomerations",
        "role": "full-area",
        "extent": "The agglomeration polygons only (Antwerpen, Brugge, Gent, "
                  "Leuven). For Antwerp that is the city municipality.",
    },
    "hh:hh_agglo_weg_lnight_2021_c": {
        "title": "Road traffic, Lnight 2021, inside the large agglomerations",
        "role": "full-area",
        "extent": "The agglomeration polygons only.",
    },
    "hh:hh_weg_aan_lden_2021_c": {
        "title": "Road traffic, Lden 2021, major and supplementary roads",
        "role": "corridor",
        "extent": "Corridors along roads carrying more than 3 million vehicle "
                  "passages a year, plus supplementary links, across Flanders.",
    },
    "hh:hh_weg_lden_2021_c": {
        "title": "Road traffic, Lden 2021, major roads",
        "role": "corridor",
        "extent": "Corridors along roads carrying more than 3 million vehicle "
                  "passages a year, across Flanders.",
    },
}

CATCHMENT = _env.PROCESSED / "tram_catchment_800m.geojson"
RAW_TIF = _env.RAW / "noise_lden_2021_31370.tif"
WARPED_TIF = _env.PROCESSED / "noise_lden_2021_3857.tif"
PNG = _env.WEB / "noise_lden_2021.png"
BOUNDS_JSON = _env.WEB / "noise_bounds.json"

HEADERS = {"User-Agent": "antwerp-real-estate/1.0 (noise map extract)"}


def meta_for(layer):
    """Coverage description for a layer, with a neutral fallback."""
    return LAYER_META.get(layer, {
        "title": layer,
        "role": "full-area",
        "extent": "Not described in LAYER_META; extent unverified.",
    })


def get_tile(layer, bbox, width, height):
    """One GetMap in EPSG:31370.

    WMS 1.1.1 is used deliberately: in 1.3.0 the axis order of a projected CRS
    follows the EPSG registry and is easy to get backwards, while 1.1.1 is
    always minx,miny,maxx,maxy.
    """
    params = {
        "SERVICE": "WMS",
        "VERSION": "1.1.1",
        "REQUEST": "GetMap",
        "LAYERS": layer,
        "STYLES": "",
        "SRS": "EPSG:31370",
        "BBOX": ",".join("{:.3f}".format(v) for v in bbox),
        "WIDTH": width,
        "HEIGHT": height,
        "FORMAT": "image/png",
        "TRANSPARENT": "TRUE",
    }
    r = requests.get(WMS, params=params, headers=HEADERS, timeout=180)
    r.raise_for_status()
    if not r.headers.get("Content-Type", "").startswith("image"):
        raise RuntimeError("WMS returned {}:\n{}".format(
            r.headers.get("Content-Type"), r.text[:600]
        ))
    import io

    return np.array(Image.open(io.BytesIO(r.content)).convert("RGBA"))


def fetch_layer(layer, minx, maxy, width, height, resolution, tile_px):
    """One layer over the whole extent, stitched from tile_px-sized GetMaps."""
    cols = int(math.ceil(width / tile_px))
    rows = int(math.ceil(height / tile_px))
    canvas = np.zeros((height, width, 4), dtype=np.uint8)
    print("  {} -- {} x {} tiles".format(layer, cols, rows))

    for ty in range(rows):
        for tx in range(cols):
            x0, y0 = tx * tile_px, ty * tile_px
            tw = min(tile_px, width - x0)
            th = min(tile_px, height - y0)
            bbox = (
                minx + x0 * resolution,
                maxy - (y0 + th) * resolution,
                minx + (x0 + tw) * resolution,
                maxy - y0 * resolution,
            )
            canvas[y0:y0 + th, x0:x0 + tw] = get_tile(layer, bbox, tw, th)
            print("    tile {},{} -> {}x{}".format(tx, ty, tw, th))
    return canvas


def over(base, top):
    """Alpha-composite `top` on to `base`; both uint8 RGBA, same shape.

    Done in float on unpremultiplied colour, so a semi-transparent contour fill
    blends with what is under it instead of replacing it.
    """
    ta = top[:, :, 3:4].astype(np.float32) / 255.0
    ba = base[:, :, 3:4].astype(np.float32) / 255.0
    out_a = ta + ba * (1.0 - ta)
    rgb = (top[:, :, :3].astype(np.float32) * ta
           + base[:, :, :3].astype(np.float32) * ba * (1.0 - ta))
    rgb = np.where(out_a > 0, rgb / np.maximum(out_a, 1e-6), 0.0)

    out = np.empty_like(base)
    out[:, :, :3] = np.clip(rgb, 0, 255).astype(np.uint8)
    out[:, :, 3] = np.clip(out_a[:, :, 0] * 255.0, 0, 255).astype(np.uint8)
    return out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--layers", default=",".join(LAYERS),
                    help="comma-separated WMS layers, bottom-to-top")
    ap.add_argument("--layer", help="shorthand for a single-layer --layers")
    ap.add_argument("--resolution", type=float, default=8.0, help="metres per pixel")
    ap.add_argument("--margin", type=float, default=1500.0, help="metres around catchment")
    ap.add_argument("--tile-px", type=int, default=1600, help="max pixels per WMS request")
    args = ap.parse_args()

    stack = [args.layer] if args.layer else [
        s.strip() for s in args.layers.split(",") if s.strip()
    ]
    if not stack:
        raise SystemExit("! no layers given")

    catchment = gpd.read_file(CATCHMENT).to_crs(_env.METRIC_CRS)
    minx, miny, maxx, maxy = catchment.total_bounds
    minx, miny = minx - args.margin, miny - args.margin
    maxx, maxy = maxx + args.margin, maxy + args.margin

    width = int(math.ceil((maxx - minx) / args.resolution))
    height = int(math.ceil((maxy - miny) / args.resolution))
    # snap the extent to whole pixels so the transform is exact
    maxx = minx + width * args.resolution
    miny = maxy - height * args.resolution
    print("extent {:.0f},{:.0f} .. {:.0f},{:.0f} (EPSG:31370)".format(minx, miny, maxx, maxy))
    print("raster {} x {} px at {} m/px".format(width, height, args.resolution))
    print("compositing {} layer(s), bottom-to-top:".format(len(stack)))

    canvas = np.zeros((height, width, 4), dtype=np.uint8)
    masks = {}
    for layer in stack:
        got = fetch_layer(layer, minx, maxy, width, height, args.resolution, args.tile_px)
        masks[layer] = got[:, :, 3] > 0
        share = float(masks[layer].mean())
        print("  -> {:.1%} of the raster covered by this layer".format(share))
        if share == 0:
            print("  ! warning: {} returned nothing over this extent".format(layer))
        canvas = over(canvas, got)

    covered = canvas[:, :, 3] > 0
    print("{:.1%} of the raster carries noise data".format(covered.mean()))
    if not covered.any():
        raise SystemExit("! the WMS returned an entirely empty image")

    # Which of those pixels exist only because of a corridor layer? That is the
    # ground the agglomeration map never covered, and what the caveat is about.
    full_mask = np.zeros_like(covered)
    for layer in stack:
        if meta_for(layer)["role"] == "full-area":
            full_mask |= masks[layer]
    corridor_only = covered & ~full_mask
    if len(stack) > 1:
        print("  {:.1%} full-area, {:.1%} corridor-only".format(
            full_mask.mean(), corridor_only.mean()))

    # --- save as downloaded, in the native CRS -------------------------- #
    transform = from_bounds(minx, miny, maxx, maxy, width, height)
    profile = {
        "driver": "GTiff",
        "height": height,
        "width": width,
        "count": 4,
        "dtype": "uint8",
        "crs": CRS.from_epsg(31370),
        "transform": transform,
        "compress": "deflate",
        "photometric": "RGB",
        "alpha": "unspecified",
    }
    with rasterio.open(RAW_TIF, "w", **profile) as dst:
        for b in range(4):
            dst.write(canvas[:, :, b], b + 1)
    print("-> {}".format(RAW_TIF))

    # --- reproject to Web Mercator for the browser ----------------------- #
    with rasterio.open(RAW_TIF) as src:
        dst_crs = CRS.from_epsg(3857)
        dst_transform, dst_w, dst_h = calculate_default_transform(
            src.crs, dst_crs, src.width, src.height, *src.bounds
        )
        out_profile = src.profile.copy()
        out_profile.update(
            crs=dst_crs, transform=dst_transform, width=dst_w, height=dst_h
        )
        warped = np.zeros((4, dst_h, dst_w), dtype=np.uint8)
        for b in range(4):
            reproject(
                source=rasterio.band(src, b + 1),
                destination=warped[b],
                src_transform=src.transform,
                src_crs=src.crs,
                dst_transform=dst_transform,
                dst_crs=dst_crs,
                resampling=Resampling.nearest,  # contour classes, not continuous
            )
        with rasterio.open(WARPED_TIF, "w", **out_profile) as dst:
            dst.write(warped)
    print("-> {}  ({} x {})".format(WARPED_TIF, dst_w, dst_h))

    # --- PNG + lat/lon bounds for L.imageOverlay ------------------------- #
    # The image is in Web Mercator and Leaflet draws it into a Web Mercator
    # viewport, so stretching it across the lat/lon of its own corners is exact.
    Image.fromarray(np.transpose(warped, (1, 2, 0)), "RGBA").save(
        PNG, optimize=True
    )
    with rasterio.open(WARPED_TIF) as ds:
        west, south, east, north = ds.bounds
        lon_w, lat_s = rasterio.warp.transform(dst_crs, CRS.from_epsg(4326), [west], [south])
        lon_e, lat_n = rasterio.warp.transform(dst_crs, CRS.from_epsg(4326), [east], [north])
    bounds = [[lat_s[0], lon_w[0]], [lat_n[0], lon_e[0]]]

    BOUNDS_JSON.write_text(
        json.dumps(
            {
                # `layer` is the topmost one, kept so anything still reading the
                # old single-layer key resolves to the dominant source.
                "layer": stack[-1],
                "layers": [
                    dict(name=l, coverage=round(float(masks[l].mean()), 4), **meta_for(l))
                    for l in stack
                ],
                "composite": len(stack) > 1,
                "coverage": {
                    "total": round(float(covered.mean()), 4),
                    "full_area": round(float(full_mask.mean()), 4),
                    "corridor_only": round(float(corridor_only.mean()), 4),
                },
                "source": WMS,
                "crs_native": "EPSG:31370",
                "bounds": bounds,
                "png": PNG.name,
            },
            indent=1,
        ),
        encoding="utf-8",
    )
    print("-> {}  ({:.1f} MB)".format(PNG, PNG.stat().st_size / 1e6))
    print("bounds {}".format(bounds))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
