r"""Shared bootstrap: paths + PROJ/GDAL isolation.

This machine has PostgreSQL/PostGIS on it, which exports PROJ_LIB and GDAL_DATA
pointing at PostGIS' own PROJ 3.6 tree (C:\PostgreSQL\15\...). pyproj inside the
conda `geospatial` env then fails with:

    CRSError: Invalid projection: EPSG:4326: (Internal Proj Error:
    proj_create: no database context specified)

because it looks for proj.db where PostGIS put a different one. Importing this
module BEFORE pyproj/geopandas repoints PROJ_DATA / PROJ_LIB / GDAL_DATA at the
conda env's own share directories, so the PostGIS variables are ignored.
"""
from __future__ import annotations

import os
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent   # tools/antwerp-rentals
SITE = ROOT.parent.parent                       # repo root (the Pages site)
DATA = ROOT / "data"
RAW = DATA / "raw"
PROCESSED = DATA / "processed"
HISTORY = DATA / "history"

# The published page. Everything under ROOT is pipeline-only and is pruned from
# the Pages artifact by .github/workflows/deploy.yml; only WEB is served.
WEB = SITE / "antwerp-rentals"
WEB_DATA = WEB / "data"

# Written by 03 (and topped up by 04) rather than by 05, because a run that
# fails never reaches 05 -- and a failed run is exactly when the page most
# needs to be able to say so.
STATUS_JSON = WEB_DATA / "status.json"

for _d in (RAW, PROCESSED, HISTORY, WEB, WEB_DATA):
    _d.mkdir(parents=True, exist_ok=True)


def _fix_proj() -> None:
    """Point PROJ/GDAL at the running interpreter's own data dirs."""
    prefix = Path(sys.prefix)
    candidates = [
        prefix / "Library" / "share" / "proj",   # conda on Windows
        prefix / "share" / "proj",               # conda on POSIX
    ]
    for proj_dir in candidates:
        if (proj_dir / "proj.db").exists():
            os.environ["PROJ_DATA"] = str(proj_dir)
            os.environ["PROJ_LIB"] = str(proj_dir)
            break
    else:
        print("! warning: no proj.db found under", prefix, file=sys.stderr)

    for gdal_dir in (prefix / "Library" / "share" / "gdal", prefix / "share" / "gdal"):
        if gdal_dir.is_dir():
            os.environ["GDAL_DATA"] = str(gdal_dir)
            break

    # PostGIS also sets CURL_CA_BUNDLE to its own cert bundle; keep it only if real.
    ca = os.environ.get("CURL_CA_BUNDLE")
    if ca and not Path(ca).exists():
        os.environ.pop("CURL_CA_BUNDLE", None)


_fix_proj()

if "pyproj" in sys.modules:  # imported too late to help
    print("! warning: pyproj was imported before scripts._env", file=sys.stderr)


# Antwerp tram/premetro network bounding box (lat/lon), wide enough to cover the
# suburban ends of the network: Wijnegem, Deurne, Mortsel/Boechout, Hoboken, Ekeren.
ANTWERP_BBOX = (51.100, 4.280, 51.330, 4.560)  # south, west, north, east

BUFFER_M = 800
METRIC_CRS = "EPSG:31370"  # Belgian Lambert 72 -- metre units

# Antwerp tram line colours.
#
# Primary source: the Wikipedia Antwerp tram module
# https://en.wikipedia.org/wiki/Module:Adjacent_stations/Antwerp_tram
# Lines 3, 5 and 9 in that table are not in the network any more -- OSM now
# carries A3 and A9 in their place -- so they are kept here only as a reference.
# Anything not listed falls back to the `colour` tag on the line's OSM route
# relation, captured by 01_fetch_delijn_stops.py into data/raw/delijn_lines.json.
LINE_COLOURS = {
    "2": "#008000",
    "3": "#FFFF00",
    "4": "#80A0FF",
    "5": "#990000",
    "6": "#FF00FF",
    "7": "#0000A0",
    "8": "#FF80C0",
    "9": "#FF8000",
    "10": "#ADFF2F",
    "12": "#FF0000",
    "24": "#FF80C0",
}
