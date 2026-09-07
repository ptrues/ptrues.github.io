r"""Pull Antwerp tram / premetro stops as points and write them to data/raw.

Two sources, tried in order:

1. De Lijn Open Data API (https://api.delijn.be/DLKernOpenData/api/v1).
   The official source, used whenever a subscription key is available (env var
   DELIJN_API_KEY, or --api-key). Keys are free but must be requested at
   https://data.delijn.be/ -- there is no anonymous access, the API answers 401
   without one.

2. OpenStreetMap via Overpass. OSM carries De Lijn's own route relations
   (operator="De Lijn", route=tram) with the public line number in `ref`, so it
   yields the same stop set plus the stop -> line mapping the map needs.

Both paths emit the same GeoJSON schema, one point per physical stop:

    stop_id, name, lines (comma separated), line_count, source

Usage:
    python 01_fetch_delijn_stops.py [--api-key KEY] [--source auto|delijn|osm]
"""
from __future__ import annotations

import argparse
import json
import os
import sys
import time
from collections import defaultdict

import _env
import requests

DELIJN_BASE = "https://api.delijn.be/DLKernOpenData/api/v1"
OVERPASS_MIRRORS = [
    "https://overpass-api.de/api/interpreter",
    "https://overpass.kumi.systems/api/interpreter",
    "https://overpass.private.coffee/api/interpreter",
]
OUT = _env.RAW / "delijn_tram_stops.geojson"
OUT_LINES = _env.RAW / "delijn_lines.json"

# De Lijn calls trams and the underground premetro sections alike "TRAM".
TRAM_MODES = {"TRAM", "METRO"}


# --------------------------------------------------------------------------- #
# source 1: De Lijn Open Data API
# --------------------------------------------------------------------------- #
def _delijn_get(path, key):
    r = requests.get(
        DELIJN_BASE + path,
        headers={"Ocp-Apim-Subscription-Key": key, "Accept": "application/json"},
        timeout=60,
    )
    r.raise_for_status()
    return r.json()


def fetch_delijn(key):
    entities = _delijn_get("/entiteiten", key)["entiteiten"]
    antwerp = next(e for e in entities if e["omschrijving"].lower().startswith("antwerp"))
    num = antwerp["entiteitnummer"]
    print("  entity {} = {}".format(num, antwerp["omschrijving"]))

    lines = _delijn_get("/entiteiten/{}/lijnen".format(num), key)["lijnen"]
    trams = [ln for ln in lines if str(ln.get("vervoermiddel", "")).upper() in TRAM_MODES]
    print("  {} tram/premetro lines of {} total".format(len(trams), len(lines)))

    stops = {}
    for ln in trams:
        ref = ln.get("lijnnummerPubliek") or ln["lijnnummer"]
        for direction in ("HEEN", "TERUG"):
            path = "/lijnen/{}/{}/lijnrichtingen/{}/haltes".format(
                num, ln["lijnnummer"], direction
            )
            try:
                haltes = _delijn_get(path, key).get("haltes", [])
            except requests.HTTPError as exc:
                if exc.response is not None and exc.response.status_code == 404:
                    continue
                raise
            for h in haltes:
                geo = h.get("geoCoordinaat") or {}
                if geo.get("latitude") is None:
                    continue
                sid = "{}-{}".format(h["entiteitnummer"], h["haltenummer"])
                rec = stops.setdefault(
                    sid,
                    {
                        "stop_id": sid,
                        "name": h.get("omschrijving") or h.get("omschrijvingLang"),
                        "lat": geo["latitude"],
                        "lon": geo["longitude"],
                        "lines": set(),
                        "source": "delijn-api",
                    },
                )
                rec["lines"].add(str(ref))
            time.sleep(0.1)  # be polite to the API
    return list(stops.values())


# --------------------------------------------------------------------------- #
# source 2: OpenStreetMap / Overpass (De Lijn route relations)
# --------------------------------------------------------------------------- #
OVERPASS_QUERY = """
[out:json][timeout:180];
rel({s},{w},{n},{e})["type"="route"]["route"~"^(tram|subway|light_rail)$"]->.r;
.r out body;
node(r.r);
out body;
"""


# Overpass rejects the default python-requests agent with 406, and rate-limits
# hard with 429, so identify ourselves and back off between mirrors.
UA = "antwerp-real-estate/1.0 (tram stop extract; contact: local script)"


def _overpass(query):
    last = None
    for attempt in range(9):
        url = OVERPASS_MIRRORS[attempt % len(OVERPASS_MIRRORS)]
        try:
            r = requests.post(
                url,
                data=query.encode("utf-8"),
                headers={"User-Agent": UA, "Content-Type": "text/plain; charset=utf-8"},
                timeout=200,
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
    nodes = {el["id"]: el for el in elements if el["type"] == "node"}
    relations = [
        el
        for el in elements
        if el["type"] == "relation"
        and el.get("tags", {}).get("ref")
        and "De Lijn" in (el["tags"].get("operator") or "De Lijn")
    ]
    print("  {} De Lijn route relations".format(len(relations)))

    # Route relations carry De Lijn's own line colour; keep it for the map.
    line_meta = {}
    for rel in relations:
        ref = rel["tags"]["ref"].strip()
        meta = line_meta.setdefault(ref, {"ref": ref, "colour": None, "network": None})
        meta["colour"] = meta["colour"] or rel["tags"].get("colour") or rel["tags"].get("color")
        meta["network"] = meta["network"] or rel["tags"].get("network")
    OUT_LINES.write_text(
        json.dumps(
            {r: line_meta[r] for r in sort_lines(line_meta)}, ensure_ascii=False, indent=1
        ),
        encoding="utf-8",
    )
    print("  line colours -> {}".format(OUT_LINES.name))

    lines_by_node = defaultdict(set)
    for rel in relations:
        ref = rel["tags"]["ref"].strip()
        for m in rel["members"]:
            if m["type"] == "node" and m["role"].startswith("stop"):
                lines_by_node[m["ref"]].add(ref)

    stops = []
    for node_id, refs in lines_by_node.items():
        node = nodes.get(node_id)
        if not node:
            continue
        tags = node.get("tags", {})
        stops.append(
            {
                "stop_id": "osm-{}".format(node_id),
                "name": tags.get("name") or tags.get("ref") or "(unnamed)",
                "lat": node["lat"],
                "lon": node["lon"],
                "lines": refs,
                "source": "osm-overpass",
            }
        )
    return stops


# --------------------------------------------------------------------------- #
def sort_lines(refs):
    """1, 2, 4 ... 24, A3, A9 -- numeric first, then lettered."""
    return sorted(refs, key=lambda r: (not r[:1].isdigit(), len(r), r))


def to_geojson(stops):
    features = []
    for st in sorted(stops, key=lambda s: (s["name"] or "", s["stop_id"])):
        refs = sort_lines(st["lines"])
        features.append(
            {
                "type": "Feature",
                "geometry": {"type": "Point", "coordinates": [st["lon"], st["lat"]]},
                "properties": {
                    "stop_id": st["stop_id"],
                    "name": st["name"],
                    "lines": ",".join(refs),
                    "line_count": len(refs),
                    "source": st["source"],
                },
            }
        )
    return {"type": "FeatureCollection", "features": features}


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--api-key", default=os.environ.get("DELIJN_API_KEY"))
    ap.add_argument("--source", choices=["auto", "delijn", "osm"], default="auto")
    args = ap.parse_args()

    if args.source == "delijn" and not args.api_key:
        print("! --source delijn needs DELIJN_API_KEY", file=sys.stderr)
        return 2

    stops = []
    if args.source in ("auto", "delijn") and args.api_key:
        print("De Lijn Open Data API ...")
        try:
            stops = fetch_delijn(args.api_key)
        except Exception as exc:  # noqa: BLE001 - fall through to OSM
            print("! De Lijn API failed: {}".format(exc), file=sys.stderr)
            if args.source == "delijn":
                return 1
    elif args.source != "osm":
        print("No DELIJN_API_KEY set -- De Lijn's API rejects anonymous calls.")

    if not stops and args.source != "delijn":
        print("OpenStreetMap / Overpass (De Lijn route relations) ...")
        stops = fetch_osm()

    if not stops:
        print("! no stops retrieved", file=sys.stderr)
        return 1

    gj = to_geojson(stops)
    OUT.write_text(json.dumps(gj, ensure_ascii=False, indent=1), encoding="utf-8")

    all_lines = sort_lines(
        {ln for f in gj["features"] for ln in f["properties"]["lines"].split(",")}
    )
    print("\n{} stops -> {}".format(len(gj["features"]), OUT))
    print("lines: " + ", ".join(all_lines))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
