r"""Run the whole pipeline end to end with the geospatial conda env.

    C:/anaconda/envs/geospatial/python.exe scripts/run_all.py

Each step is independent and re-runnable; pass --from N to resume at a step.
"""
from __future__ import annotations

import argparse
import subprocess
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
STEPS = [
    ("01_fetch_delijn_stops.py", "De Lijn tram/premetro stops -> data/raw"),
    ("07_fetch_line_shapes.py", "tram line route geometry -> data/raw"),
    ("02_buffer_stops.py", "800 m buffers -> data/processed"),
    ("03_fetch_immoweb.py", "Immoweb rentals -> data/raw"),
    ("04_filter_listings.py", "spatial filter + line tagging -> data/processed"),
    ("06_fetch_noise_map.py", "Flemish noise map -> data/raw, reprojected -> web"),
    ("05_build_map.py", "folium map -> web/index.html"),
]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--from", dest="start", type=int, default=1)
    args = ap.parse_args()

    for i, (script, blurb) in enumerate(STEPS, start=1):
        if i < args.start:
            continue
        print("\n" + "=" * 70)
        print("[{}/{}] {}  --  {}".format(i, len(STEPS), script, blurb))
        print("=" * 70)
        rc = subprocess.call([sys.executable, str(HERE / script)], cwd=str(HERE))
        if rc != 0:
            print("\n! {} exited {}".format(script, rc), file=sys.stderr)
            return rc
    print("\nDone. Open web/index.html")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
