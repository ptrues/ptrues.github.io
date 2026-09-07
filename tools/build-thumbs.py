#!/usr/bin/env python3
"""Generate the downscaled WebP derivatives the projects grid serves.

The originals stay where they are: they remain the lightbox's top srcset
candidate and the link target. This only produces the smaller sizes, because
handing the browser a 3377x2722 PNG for a 502px slot costs a main-thread decode
big enough to drop frames while scrolling past it.

Re-runnable and idempotent: an output newer than its source is left alone. Pass
--force to rebuild everything.

The printed dimensions are the point of the script as much as the files are.
They go straight into the width/height attributes in projects/index.html, so a
declared size can never drift from the real one.

    python tools/build-thumbs.py [--force]
"""

import argparse
import os
import sys

from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_DIR = os.path.join(ROOT, "assets", "thumbs")

# (source relative to repo root, widths to emit, quality)
#
# 1200w covers the ~502px grid slot at 2x DPR with headroom. 2000w is the
# lightbox's middle step, so opening one does not pull the full-resolution file
# on an ordinary display.
#
# The two flat-colour maps carry fine hairlines and small type, which is where
# WebP's chroma handling shows first, so they get a higher quality.
SOURCES = [
    ("london-2026/assets/maps/map04-walkshed-hotels.png",      [1200],       88),
    ("stippenkaart-1941/data/stippenkaart-1941-georef.jpg",    [1200],       82),
    ("assets/Housing_Affordability_in_the_USA_simplified.png", [1200, 2000], 88),
    ("assets/plan_de_paris.jpg",                               [1200, 2000], 82),
    ("assets/Paris_Motorways.png",                             [1200, 2000], 88),
]


def out_path(src, width):
    stem = os.path.splitext(os.path.basename(src))[0]
    return os.path.join(OUT_DIR, "%s-%d.webp" % (stem, width))


def build(src, width, quality, force):
    abs_src = os.path.join(ROOT, src)
    abs_out = out_path(src, width)

    if not os.path.exists(abs_src):
        return None, "missing source"

    if (not force and os.path.exists(abs_out)
            and os.path.getmtime(abs_out) >= os.path.getmtime(abs_src)):
        with Image.open(abs_out) as im:
            return (im.width, im.height, os.path.getsize(abs_out)), "up to date"

    with Image.open(abs_src) as im:
        if im.width <= width:
            return None, "source narrower than target (%dpx), skipped" % im.width
        height = round(im.height * width / im.width)
        # Flatten alpha onto the same off-white the grid paints behind an image
        # so a transparent PNG does not come back with black fringing.
        if im.mode in ("RGBA", "LA", "P"):
            im = im.convert("RGBA")
            bg = Image.new("RGB", im.size, (247, 245, 244))
            bg.paste(im, mask=im.split()[-1])
            im = bg
        else:
            im = im.convert("RGB")
        im.resize((width, height), Image.LANCZOS).save(
            abs_out, "WEBP", quality=quality, method=6
        )

    with Image.open(abs_out) as im:
        return (im.width, im.height, os.path.getsize(abs_out)), "built"


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--force", action="store_true", help="rebuild even if current")
    args = ap.parse_args()

    os.makedirs(OUT_DIR, exist_ok=True)

    total_src = total_out = 0
    failures = []

    for src, widths, quality in SOURCES:
        abs_src = os.path.join(ROOT, src)
        src_bytes = os.path.getsize(abs_src) if os.path.exists(abs_src) else 0
        total_src += src_bytes
        print("\n%s  (%.2f MB)" % (src, src_bytes / 1048576))

        for width in widths:
            info, status = build(src, width, quality, args.force)
            rel = os.path.relpath(out_path(src, width), ROOT).replace("\\", "/")
            if info is None:
                print("  %-58s  %s" % (rel, status))
                failures.append((rel, status))
                continue
            w, h, size = info
            total_out += size
            print('  %-58s  width="%d" height="%d"  %6.1f KB  (%s)'
                  % (rel, w, h, size / 1024, status))

    print("\nsources %.2f MB  ->  derivatives %.2f MB"
          % (total_src / 1048576, total_out / 1048576))

    if failures:
        print("\n%d problem(s):" % len(failures))
        for rel, status in failures:
            print("  %s: %s" % (rel, status))
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
