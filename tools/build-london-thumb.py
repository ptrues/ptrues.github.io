#!/usr/bin/env python3
"""Annotate the London pleasant-attributes map into a grid thumbnail.

The projects grid used the desktop map04 render, which packs six labelled
callouts into a 502px slot: legible at full size, mush at thumbnail size. Its
mobile sibling is cleaner but the subject is wrong -- a scatter of hotel prices
does not say what the story is about.

map06 does. It is the walkshed quality map: tree cover, open green space and
listed buildings inside one 800m circle, which is the analysis the piece is
actually built on. The mobile render carries it with almost no type, and the
bold perimeter circle gives the arrow something unambiguous to point at.

So: crop the key off the bottom, then add a heavy arrow onto the perimeter and
a banner naming what the circle is. The banner borrows the map's own callout
grammar (cream fill, ochre rule, letter-spaced mono) at several times the size,
so it reads as the loudest label on the map rather than as something stapled on
afterwards.

Nothing here touches the article's own maps. The source PNG is read-only and
the output lands beside the other derivatives from build-thumbs.py.

    python tools/build-london-thumb.py [--out-dir DIR] [--preview]
"""

import argparse
import math
import os
import sys

from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
# A Queensway render, not the Ealing Common one FIG 06 publishes. Queensway
# has 272 listed buildings to Ealing's 22, which makes a poor figure -- the
# dots merge -- and a far better thumbnail, because that density is legible as
# texture at 502px where 22 scattered dots are not. It lives here rather than
# in london-2026/assets/maps/ because the article never loads it.
SRC = os.path.join(ROOT, "assets", "thumbs", "src",
                   "map06-queensway-nolabel-mobile.png")

# The hand-cropped source is 880x965: the key (TREES / OPEN GREEN SPACE /
# LISTED BUILDINGS) is already gone, but its divider rule survives at rows
# 959-960, so trim to where the key's background starts. The scale bar and the
# CARTO/OSM attribution sit above that inside the map and stay -- the basemap
# licence requires the credit.
CROP = (0, 0, 880, 956)

# The 800m walkshed ring, from a least-squares fit to the dark ring pixels
# (residual rms 1.8px). ARROW_TIP is derived from it, so the arrow keeps
# landing on the perimeter if the ring is ever re-measured.
CIRCLE_CX, CIRCLE_CY, CIRCLE_R = 439.4, 478.0, 326.7
TARGET_DEG = 40        # where on the ring to point: up and to the right
TIP_GAP = 9            # the whole arrow stays outside the ring. The stroke is
                       # ~2.5px either side of the fitted radius, so this
                       # clears its outer edge without drifting off it

# From the article's own palette. Ochre is the map's marker colour; ink is its
# label text.
OCHRE = (162, 94, 27)        # #A25E1B
OCHRE_DARK = (138, 90, 34)   # #8A5A22
CREAM = (250, 248, 243)      # #FAF8F3
INK = (32, 25, 19)           # #201913

LABEL_LINES = ["QUALITY WALKSHED"]

# Plate geometry, in source-crop pixels. One line, not two: the ring starts at
# y=151 and is wide almost immediately, so any two-line plate big enough to
# read would have to sit on the upper-left arc -- covering the exact line the
# arrow is pointing at. A single-line banner fits in the clear strip above it.
PLATE = (48, 18, 700, 146)
PLATE_PAD = 26
TRACKING = 0.10        # extra letter spacing, as a fraction of the em

# Quadratic Bezier from under the plate to the station, so the arrow hooks
# right before coming back down -- a straight line from the plate would run
# through the EUR79 callout. The tip stops a little short of STATION: an
# arrowhead landing on the ring hides the thing it is pointing at.
# Down out of the banner's right end into the ring. The control point sits out
# past the start so the shaft bows right before turning back in, and so the
# tangent at the tip runs roughly along the ring's inward normal -- an arrow
# arriving parallel to the arc reads as pointing past it rather than at it.
ARROW_START = (742, 104)
ARROW_CTRL = (840, 180)
ARROW_TIP = None       # derived from the circle; see resolve_tip()
ARROW_W_START = 28     # tail width
ARROW_W_END = 15       # width where the head begins
ARROW_HEAD_LEN = 62
ARROW_HEAD_W = 58

SS = 4                 # supersampling factor for the vector overlay

# Mono, bold, in rough order of how close it lands to the Source Code Pro the
# map's own labels use.
FONT_CANDIDATES = [
    "consolab.ttf",
    "SourceCodePro-Bold.ttf",
    "DejaVuSansMono-Bold.ttf",
    "cour.ttf",
    "arialbd.ttf",
]


def load_font(size):
    for name in FONT_CANDIDATES:
        try:
            return ImageFont.truetype(name, size), name
        except OSError:
            continue
    raise SystemExit("no usable bold font found; tried %s"
                     % ", ".join(FONT_CANDIDATES))


def text_width(draw, text, font, tracking):
    """Width of `text` once drawn character by character with tracking."""
    if not text:
        return 0
    total = sum(draw.textlength(ch, font=font) for ch in text)
    return total + tracking * (len(text) - 1)


def draw_tracked(draw, xy, text, font, fill, tracking):
    x, y = xy
    for ch in text:
        draw.text((x, y), ch, font=font, fill=fill)
        x += draw.textlength(ch, font=font) + tracking


def fit_font(draw, lines, box_w, box_h, tracking_ratio):
    """Largest size at which every line fits the plate's inner box."""
    size = 8
    best = None
    while size < 200:
        font, name = load_font(size)
        tracking = tracking_ratio * size
        widest = max(text_width(draw, ln, font, tracking) for ln in lines)
        asc, desc = font.getmetrics()
        line_h = (asc + desc) * 1.12
        if widest > box_w or line_h * len(lines) > box_h:
            break
        best = (font, name, tracking, line_h)
        size += 1
    if best is None:
        raise SystemExit("plate too small for the label")
    return best


def resolve_tip():
    """Point TIP_GAP outside the ring at TARGET_DEG, measured up from east."""
    t = math.radians(TARGET_DEG)
    d = CIRCLE_R + TIP_GAP
    return (CIRCLE_CX + d * math.cos(t), CIRCLE_CY - d * math.sin(t))


def bezier(t, p0, p1, p2):
    u = 1.0 - t
    return (u * u * p0[0] + 2 * u * t * p1[0] + t * t * p2[0],
            u * u * p0[1] + 2 * u * t * p1[1] + t * t * p2[1])


def bezier_tangent(t, p0, p1, p2):
    u = 1.0 - t
    return (2 * u * (p1[0] - p0[0]) + 2 * t * (p2[0] - p1[0]),
            2 * u * (p1[1] - p0[1]) + 2 * t * (p2[1] - p1[1]))


def normalize(v):
    mag = (v[0] ** 2 + v[1] ** 2) ** 0.5
    return (v[0] / mag, v[1] / mag) if mag else (0.0, 0.0)


def arrow_polygon(start, ctrl, tip, w_start, w_end, head_len, head_w, scale):
    """Tapered shaft along the curve, plus a triangular head at the tip.

    The shaft stops `head_len` short of the tip so the head is not sitting on
    top of shaft it has to cover.
    """
    # Walk the curve to find the parameter that leaves head_len of arc length.
    steps = 400
    pts = [bezier(i / steps, start, ctrl, tip) for i in range(steps + 1)]
    arc = [0.0]
    for a, b in zip(pts, pts[1:]):
        arc.append(arc[-1] + ((b[0] - a[0]) ** 2 + (b[1] - a[1]) ** 2) ** 0.5)
    target = max(arc[-1] - head_len, arc[-1] * 0.15)
    cut = next(i for i, d in enumerate(arc) if d >= target)
    t_cut = cut / steps

    left, right = [], []
    for i in range(cut + 1):
        t = i / steps
        p = pts[i]
        d = normalize(bezier_tangent(t, start, ctrl, tip))
        n = (-d[1], d[0])
        half = (w_start + (w_end - w_start) * (t / t_cut if t_cut else 1)) / 2
        left.append(((p[0] + n[0] * half) * scale, (p[1] + n[1] * half) * scale))
        right.append(((p[0] - n[0] * half) * scale, (p[1] - n[1] * half) * scale))

    neck = pts[cut]
    d = normalize(bezier_tangent(t_cut, start, ctrl, tip))
    n = (-d[1], d[0])
    head = [
        ((neck[0] + n[0] * head_w / 2) * scale, (neck[1] + n[1] * head_w / 2) * scale),
        (tip[0] * scale, tip[1] * scale),
        ((neck[0] - n[0] * head_w / 2) * scale, (neck[1] - n[1] * head_w / 2) * scale),
    ]
    return left + list(reversed(right)), head


def build(out_dir, preview, src=None):
    src = src or SRC
    if not os.path.exists(src):
        raise SystemExit("missing source: %s" % src)

    base = Image.open(src).convert("RGBA").crop(CROP)
    w, h = base.size

    overlay = Image.new("RGBA", (w * SS, h * SS), (0, 0, 0, 0))
    od = ImageDraw.Draw(overlay)

    tip = ARROW_TIP or resolve_tip()
    shaft, head = arrow_polygon(ARROW_START, ARROW_CTRL, tip,
                                ARROW_W_START, ARROW_W_END,
                                ARROW_HEAD_LEN, ARROW_HEAD_W, SS)
    # Cream casing first, so the arrow stays readable over the dark station
    # ring and the road hairlines it crosses.
    od.polygon(shaft, fill=CREAM + (255,), outline=CREAM + (255,), width=5 * SS)
    od.polygon(head, fill=CREAM + (255,), outline=CREAM + (255,), width=5 * SS)
    od.polygon(shaft, fill=OCHRE + (255,))
    od.polygon(head, fill=OCHRE + (255,))

    x0, y0, x1, y1 = [v * SS for v in PLATE]
    od.rectangle((x0, y0, x1, y1), fill=CREAM + (255,),
                 outline=OCHRE + (255,), width=4 * SS)

    inner_w = (x1 - x0) - 2 * PLATE_PAD * SS
    inner_h = (y1 - y0) - 2 * PLATE_PAD * SS
    font, font_name, tracking, line_h = fit_font(
        od, LABEL_LINES, inner_w, inner_h, TRACKING)

    ty = y0 + ((y1 - y0) - line_h * len(LABEL_LINES)) / 2
    for line in LABEL_LINES:
        tw = text_width(od, line, font, tracking)
        draw_tracked(od, (x0 + ((x1 - x0) - tw) / 2, ty), line, font,
                     INK + (255,), tracking)
        ty += line_h

    overlay = overlay.resize((w, h), Image.LANCZOS)
    out = Image.alpha_composite(base, overlay).convert("RGB")

    os.makedirs(out_dir, exist_ok=True)
    # Named for its real width, like build-thumbs.py's output. The crop is
    # 880px wide, so there is no 1200px of detail to resample up to, and
    # calling it -1200 would promise the grid a resolution it does not have.
    # 880px still covers the ~502px slot at better than 1.5x.
    webp = os.path.join(out_dir, "london-2026-thumb-880.webp")
    out.save(webp, "WEBP", quality=88, method=6)
    print('%s  width="%d" height="%d"  %.1f KB  (font: %s)'
          % (os.path.relpath(webp, ROOT).replace("\\", "/"),
             out.width, out.height, os.path.getsize(webp) / 1024, font_name))

    if preview:
        png = os.path.join(out_dir, "london-2026-thumb-preview.png")
        out.save(png)
        print("%s  (preview)" % os.path.relpath(png, ROOT).replace("\\", "/"))
    return 0


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--out-dir", default=os.path.join(ROOT, "assets", "thumbs"))
    ap.add_argument("--preview", action="store_true",
                    help="also write a lossless PNG for eyeballing")
    ap.add_argument("--src", default=None,
                    help="read this render instead of the checked-in source")
    args = ap.parse_args()
    return build(args.out_dir, args.preview, args.src)


if __name__ == "__main__":
    sys.exit(main())
