r"""Draw 800 m buffers around every tram / premetro stop.

Reads  data/raw/delijn_tram_stops.geojson
Writes data/processed/stop_buffers_800m.geojson   one polygon per stop
       data/processed/tram_catchment_800m.geojson single dissolved polygon
       data/processed/line_catchments_800m.geojson one polygon per tram line

Buffering happens in EPSG:31370 (Belgian Lambert 72) so that 800 means
800 metres; everything is written back out in EPSG:4326 for the web map.

Run with the geospatial conda env:
    C:/anaconda/envs/geospatial/python.exe 02_buffer_stops.py
"""
from __future__ import annotations

import _env  # noqa: F401 - must precede pyproj/geopandas (PROJ path fix)

import geopandas as gpd
import pandas as pd

STOPS = _env.RAW / "delijn_tram_stops.geojson"
OUT_STOPS = _env.PROCESSED / "stop_buffers_800m.geojson"
OUT_UNION = _env.PROCESSED / "tram_catchment_800m.geojson"
OUT_LINES = _env.PROCESSED / "line_catchments_800m.geojson"


def main():
    stops = gpd.read_file(STOPS)
    print("{} stops read from {}".format(len(stops), STOPS.name))

    metric = stops.to_crs(_env.METRIC_CRS)

    # 1 -- per stop
    buffers = metric.copy()
    buffers["geometry"] = metric.geometry.buffer(_env.BUFFER_M)
    buffers["buffer_m"] = _env.BUFFER_M
    buffers.to_crs(4326).to_file(OUT_STOPS, driver="GeoJSON")
    print("{} stop buffers -> {}".format(len(buffers), OUT_STOPS.name))

    # 2 -- one dissolved catchment for the whole network
    union = gpd.GeoDataFrame(
        {"buffer_m": [_env.BUFFER_M], "stop_count": [len(buffers)]},
        geometry=[buffers.geometry.union_all()],
        crs=_env.METRIC_CRS,
    )
    union.to_crs(4326).to_file(OUT_UNION, driver="GeoJSON")
    print(
        "network catchment {:.1f} km2 -> {}".format(
            union.geometry.area.iloc[0] / 1e6, OUT_UNION.name
        )
    )

    # 3 -- one dissolved catchment per line (a stop can serve several lines,
    #      so explode the comma separated `lines` column first)
    exploded = buffers.assign(line=buffers["lines"].str.split(",")).explode("line")
    exploded["line"] = exploded["line"].str.strip()
    per_line = (
        exploded.dissolve(by="line", aggfunc={"stop_id": "count"})
        .rename(columns={"stop_id": "stop_count"})
        .reset_index()
    )
    per_line["buffer_m"] = _env.BUFFER_M
    per_line["area_km2"] = (per_line.geometry.area / 1e6).round(2)
    per_line.to_crs(4326).to_file(OUT_LINES, driver="GeoJSON")
    print("{} line catchments -> {}".format(len(per_line), OUT_LINES.name))

    with pd.option_context("display.max_rows", None):
        print(per_line[["line", "stop_count", "area_km2"]].to_string(index=False))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
