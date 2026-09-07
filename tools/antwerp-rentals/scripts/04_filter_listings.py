r"""Keep the listings that sit inside an 800 m tram-stop buffer, and tag them
with the lines they can reach.

Reads  data/raw/immoweb_rentals.geojson
       data/processed/stop_buffers_800m.geojson
Writes data/processed/apartments_near_tram.geojson

The attribute filters (2 bedrooms, <= EUR 1100/month) were already applied
server-side in 03_fetch_immoweb.py; they are re-asserted here so the output is
correct even if that script is re-run with different arguments.

Distances are measured in EPSG:31370, so nearest_stop_m is real metres.
"""
from __future__ import annotations

import argparse

import _env  # noqa: F401 - must precede pyproj/geopandas (PROJ path fix)
import _publish

import geopandas as gpd
import pandas as pd

LISTINGS = _env.RAW / "immoweb_rentals.geojson"
BUFFERS = _env.PROCESSED / "stop_buffers_800m.geojson"
STOPS = _env.RAW / "delijn_tram_stops.geojson"
OUT = _env.PROCESSED / "apartments_near_tram.geojson"


def sort_lines(refs):
    return sorted(refs, key=lambda r: (not r[:1].isdigit(), len(r), r))


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--max-price", type=int, default=1100)
    ap.add_argument("--bedrooms", type=int, default=2)
    ap.add_argument(
        "--force",
        action="store_true",
        help="publish even if the count collapses against the previous run",
    )
    args = ap.parse_args()

    try:
        return run(args)
    except Exception as exc:                      # noqa: BLE001
        # Same reasoning as 03: this runs unattended, so a failure has to leave
        # a status.json behind or the page cannot tell anyone it is stale.
        return _publish.fail(exc)


def run(args):
    listings = gpd.read_file(LISTINGS).to_crs(_env.METRIC_CRS)
    buffers = gpd.read_file(BUFFERS).to_crs(_env.METRIC_CRS)
    stops = gpd.read_file(STOPS).to_crs(_env.METRIC_CRS)
    print("{} listings, {} stop buffers".format(len(listings), len(buffers)))

    # --- attribute filters (re-asserted) ---------------------------------- #
    before = len(listings)
    listings = listings[
        (listings["bedrooms"] == args.bedrooms)
        & (listings["rent_eur"].notna())
        & (listings["rent_eur"] <= args.max_price)
    ].copy()
    print("{} listings pass {} bed / <= EUR {} ({} dropped)".format(
        len(listings), args.bedrooms, args.max_price, before - len(listings)
    ))

    # --- spatial filter: inside any 800 m stop buffer ---------------------- #
    hit = gpd.sjoin(
        listings,
        buffers[["stop_id", "name", "lines", "geometry"]].rename(
            columns={"name": "stop_name", "lines": "stop_lines"}
        ),
        how="inner",
        predicate="within",
    )
    print("{} listing/stop pairs within {} m".format(len(hit), _env.BUFFER_M))

    # true point-to-point distance to each matched stop
    stop_geom = stops.set_index("stop_id").geometry
    hit["stop_dist_m"] = [
        round(geom.distance(stop_geom.loc[sid]))
        for geom, sid in zip(hit.geometry, hit["stop_id"])
    ]

    agg = []
    for listing_id, grp in hit.groupby(hit.index):
        grp = grp.sort_values("stop_dist_m")
        lines = sort_lines(
            {ln.strip() for row in grp["stop_lines"] for ln in row.split(",")}
        )
        nearest = grp.iloc[0]
        agg.append(
            {
                "index": listing_id,
                "lines": ",".join(lines),
                "line_count": len(lines),
                "nearest_stop": nearest["stop_name"],
                "nearest_stop_m": int(nearest["stop_dist_m"]),
                "stop_count": len(grp),
                "stops": ", ".join(
                    dict.fromkeys(grp["stop_name"].tolist())  # dedupe, keep order
                ),
            }
        )
    summary = pd.DataFrame(agg).set_index("index")

    out = listings.join(summary, how="inner")
    out = out.sort_values(["rent_eur", "nearest_stop_m"])
    print("{} listings within {} m of a tram stop".format(len(out), _env.BUFFER_M))

    # Same collapse guard as 03. 03's floor protects against a truncated
    # fetch; this one catches a break on the spatial side -- a buffers file
    # rebuilt wrong, or a CRS mishap that drops most of the join.
    _publish.check_collapse(OUT, len(out), force=args.force)
    tmp = OUT.with_suffix(".tmp.geojson")
    # layer= is not optional: the GeoJSON driver derives the file's "name"
    # member from the filename, so without it the temp name is what ends up
    # published.
    out.to_crs(4326).to_file(tmp, driver="GeoJSON", layer=OUT.stem)
    tmp.replace(OUT)
    _publish.write_status(within_800m=len(out))
    print("-> {}".format(OUT))

    per_line = (
        out.assign(line=out["lines"].str.split(","))
        .explode("line")
        .groupby("line")
        .agg(listings=("id", "count"), median_rent=("rent_eur", "median"))
        .reindex(sort_lines(
            {ln for row in out["lines"] for ln in row.split(",")}
        ))
    )
    print("\nlistings reachable per line:")
    print(per_line.to_string())
    print("\nrent EUR {}-{}, median {:.0f}".format(
        int(out["rent_eur"].min()), int(out["rent_eur"].max()), out["rent_eur"].median()
    ))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
