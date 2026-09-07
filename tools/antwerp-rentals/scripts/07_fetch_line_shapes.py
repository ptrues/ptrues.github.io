r"""Pull the route geometry of each tram / premetro line, so the map can show
where a line actually goes, not just where it stops.

Source: OpenStreetMap via Overpass. The De Lijn route relations already used for
the stops carry their full way geometry, which merges into one line per route.

Emits GeoJSON, one MultiLineString per line:

    line, colour, source, length_km

Usage:
    python 07_fetch_line_shapes.py
"""
from __future__ import annotations

import json
import sys
import time
from collections import defaultdict

import _env  # noqa: F401 - must precede pyproj/geopandas (PROJ path fix)

import geopandas as gpd
import requests
from shapely.geometry import LineString, MultiLineString
from shapely.ops import linemerge, unary_union

OVERPASS_MIRRORS = [
    "https://overpass-api.de/api/interpreter",
    "https://overpass.kumi.systems/api/interpreter",
    "https://overpass.private.coffee/api/interpreter",
]
UA = "antwerp-real-estate/1.0 (tram route geometry)"

LINES_META = _env.RAW / "delijn_lines.json"
OUT = _env.RAW / "delijn_line_shapes.geojson"

SIMPLIFY_M = 3.0


def sort_lines(refs):
    return sorted(refs, key=lambda r: (not r[:1].isdigit(), len(r), r))


OVERPASS_QUERY = """
[out:json][timeout:240];
rel({s},{w},{n},{e})["type"="route"]["route"~"^(tram|subway|light_rail)$"]->.r;
.r out body;
way(r.r);
out geom;
"""


def _overpass(query):
    last = None
    for attempt in range(9):
        url = OVERPASS_MIRRORS[attempt % len(OVERPASS_MIRRORS)]
        try:
            r = requests.post(
                url,
                data=query.encode("utf-8"),
                headers={"User-Agent": UA, "Content-Type": "text/plain; charset=utf-8"},
                timeout=260,
            )
            if r.status_code == 200 and r.text.lstrip().startswith("{"):
                return r.json()
            last = "{} -> HTTP {}".format(url, r.status_code)
        except requests.RequestException as exc:
            last = "{} -> {}".format(url, exc)
        wait = min(60, 5 * (attempt + 1))
        print("  retry in {}s ({})".format(wait, last))
        time.sleep(wait)
    raise RuntimeError("Overpass unavailable: " + str(last))


def fetch_osm():
    south, west, north, east = _env.ANTWERP_BBOX
    data = _overpass(OVERPASS_QUERY.format(s=south, w=west, n=north, e=east))
    elements = data["elements"]
    ways = {
        el["id"]: el
        for el in elements
        if el["type"] == "way" and el.get("geometry")
    }
    relations = [
        el
        for el in elements
        if el["type"] == "relation"
        and el.get("tags", {}).get("ref")
        and "De Lijn" in (el["tags"].get("operator") or "De Lijn")
    ]
    print("  {} route relations, {} ways with geometry".format(
        len(relations), len(ways)
    ))

    geoms = defaultdict(list)
    for rel in relations:
        ref = rel["tags"]["ref"].strip()
        for member in rel["members"]:
            # role "" is the track itself; stops/platforms carry a role
            if member["type"] != "way" or member.get("role"):
                continue
            way = ways.get(member["ref"])
            if not way:
                continue
            coords = [(p["lon"], p["lat"]) for p in way["geometry"]]
            if len(coords) >= 2:
                geoms[ref].append(LineString(coords))
    return geoms, "osm-overpass"


# --------------------------------------------------------------------------- #
def main():
    print("OpenStreetMap / Overpass (De Lijn route relations) ...")
    geoms, source = fetch_osm()

    if not geoms:
        print("! no route geometry retrieved", file=sys.stderr)
        return 1

    colours = {}
    if LINES_META.exists():
        colours = {
            ref: (meta or {}).get("colour")
            for ref, meta in json.loads(LINES_META.read_text(encoding="utf-8")).items()
        }

    records = []
    for ref in sort_lines(geoms):
        # merge the two directions and the individual track segments into one
        merged = linemerge(unary_union(geoms[ref]))
        if isinstance(merged, LineString):
            merged = MultiLineString([merged])
        records.append(
            {
                "line": ref,
                "colour": _env.LINE_COLOURS.get(ref) or colours.get(ref),
                "source": source,
                "geometry": merged,
            }
        )

    gdf = gpd.GeoDataFrame(records, geometry="geometry", crs=4326)
    metric = gdf.to_crs(_env.METRIC_CRS)
    gdf["length_km"] = (metric.length / 1000).round(2)
    # simplify in metres, then back to lon/lat for the web map
    gdf["geometry"] = metric.geometry.simplify(SIMPLIFY_M).to_crs(4326)

    gdf.to_file(OUT, driver="GeoJSON")
    print("\n{} lines -> {}  ({:.1f} MB)".format(
        len(gdf), OUT, OUT.stat().st_size / 1e6
    ))
    print(gdf[["line", "length_km"]].to_string(index=False))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
