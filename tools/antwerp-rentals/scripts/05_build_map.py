r"""Render the filtered listings to a folium map.

Reads  data/processed/apartments_near_tram.geojson
       data/raw/delijn_tram_stops.geojson
       data/raw/delijn_lines.json
Writes antwerp-rentals/index.html        the shell: chrome, CSS, JS, no data
       antwerp-rentals/data/network.json  stops, colours, routes, noise bounds
       antwerp-rentals/data/listings.json the apartments

The split is what makes a refresh cheap: network.json changes only when
01/07/02/06 are re-run, so a daily refresh rewrites listings.json alone and the
247 KB shell is never regenerated. The page fetches both at load.

`--inline` writes a single self-contained page to index-offline.html instead,
with the data baked back in, because fetch() of a relative path is blocked
under file://. It is deliberately a different filename: an inlined page
committed over index.html would ignore listings.json and freeze the dashboard
at that snapshot without any visible error.

folium supplies the Leaflet scaffold and the OSM Standard basemap; the marker
layer, the per-line filter and the detail sidebar are added as custom CSS/JS
injected into the same document.

Design notes
------------
The page is a plate, not a dashboard: a sidebar carrying every word and every
control, and a framed map beside it. It tells one story -- two beds under
EUR 1100, walkable to a tram that reaches her work, on a quiet street -- so
there are no summary figures, no charts and no listings table.

The central move is that road noise is the *ground* rather than an overlay. The
city is drawn dark and quiet and the traffic corridors glow through it, which is
what makes the question legible at a glance: put your dot in the dark, near a
line. Getting there needs the raster inverted before it is recoloured, because
the Flemish Lden palette runs pale-yellow (quiet) to dark-red (loud) and so its
luminance runs backwards to loudness; the CSS block explains that at length.

Three layers, three registers, and nothing else carries colour: a warm field
(noise), cool line work (the network, one colour, its real De Lijn colour only
on hover), and the only white marks on the page (the apartments). Price is not
encoded at all -- under EUR 1100 is a precondition, not a variable, so every dot
on the map has already passed it and position is the only thing to judge.

Lines 1, 4, 7 and 10 are selected by default: the ones that reach her work.
Numbers are set in Source Code Pro and words in Noto Sans, matching the rest of
prtruesdell.com.
"""
from __future__ import annotations

import argparse
import json

import _env  # noqa: F401 - must precede pyproj/geopandas (PROJ path fix)
import _publish

import folium
import geopandas as gpd

APARTMENTS = _env.PROCESSED / "apartments_near_tram.geojson"
STOPS = _env.RAW / "delijn_tram_stops.geojson"
LINES_META = _env.RAW / "delijn_lines.json"
SHAPES = _env.RAW / "delijn_line_shapes.geojson"

OUT = _env.WEB / "index.html"
OFFLINE_OUT = _env.WEB / "index-offline.html"
DATA_DIR = _env.WEB / "data"
NETWORK_JSON = DATA_DIR / "network.json"
LISTINGS_JSON = DATA_DIR / "listings.json"

FIELDS = [
    "id", "title", "street", "postal_code", "locality", "place", "floor",
    "bedrooms", "surface_m2", "rent_eur", "costs_eur", "total_eur", "eur_per_m2",
    "agency", "updated", "image", "image_large", "photos", "url", "lines",
    "nearest_stop", "nearest_stop_m", "stop_count", "stops",
]

NOISE_BOUNDS = _env.WEB / "noise_bounds.json"

CSS = r"""
<title>Rentals in Antwerp — two beds, near a tram, on a quiet street</title>
<!-- Site favicon. Root-relative, not ../: this page has moved twice already
     (antwerp-rentals/ -> projects/antwerp-rentals/ -> antwerp-rentals/) and
     nothing else in it knows its own depth, so a relative path here would be
     the single thing that silently broke on the next move. The site is served
     from the apex of prtruesdell.com, so / is the site root. The --inline
     build opened over file:// is the one case this does not resolve; it loses
     the icon and nothing else. -->
<link rel="icon" href="/favicon-tight.ico" type="image/x-icon">
<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-tight-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-tight-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon-tight-180x180.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600&family=Source+Code+Pro:wght@400;500;600&display=swap" rel="stylesheet">
<style>
  :root {
    --ground:  #0B131B;   /* the page, and the quiet city */
    --plate:   #101A24;   /* the map's own ground */
    /* Contrast against --ground, measured: ink 12.0:1, ash 7.1:1, ash-2
       5.3:1, accent 9.0:1 -- all clear of WCAG AA. The old ink (#E9EEF2) ran
       16:1 and glared against the navy; the old ash-2 (#55646F) ran 3.1:1 and
       was carrying the date and the ramp labels, which you have to be able to
       read. Pure #FFF is now reserved for one thing only: an apartment. */
    --ink:     #C7D0D7;   /* headings and body */
    --ash:     #A3B2BE;   /* the story, criteria, labels, legend */
    --ash-2:   #8998A5;   /* date, ramp ends, source note */
    --rule:    #26374A;
    --network: #5FD4E4;   /* the tram network, one cool colour */
    /* A warm neutral, close in temperature to the noise glow so it sits with
       the map instead of competing. Every switch, slider, button and focus
       ring is this -- which is what finally lets --signal be spent exactly
       once, on the selected apartment and nowhere else. */
    --accent:  #C0B29A;
    --signal:  #FFCE00;   /* De Lijn yellow - the open apartment, only */
    --alert:   #E4533A;

    /* Declared once and used by both the map overlay and the legend ramp,
       so the key can never drift from the ground it describes. */
    --noise-filter: invert(1) grayscale(1) contrast(1.3)
                    sepia(1) saturate(6) hue-rotate(-14deg) brightness(.86);

    /* Noto Sans + Source Code Pro: the same pairing as the rest of
       prtruesdell.com, so this page reads as part of the site. */
    --sans: "Noto Sans", system-ui, -apple-system, "Segoe UI", sans-serif;
    --mono: "Source Code Pro", ui-monospace, monospace;
    --pad: clamp(16px, 2.4vw, 30px);
    --rail-w: clamp(268px, 23vw, 320px);
  }

  * { box-sizing: border-box; }
  html, body { margin: 0; height: 100%; }
  body {
    display: grid;
    grid-template-columns: var(--rail-w) minmax(0, 1fr);
    gap: var(--pad);
    padding: var(--pad);
    height: 100%;
    background: var(--ground); color: var(--ink);
    font-family: var(--sans); font-size: 14px; line-height: 1.45;
    -webkit-font-smoothing: antialiased;
    overflow: hidden;
  }

  /* ---- the sidebar: every word and every control ----------------------- */
  /* Deliberately not scrollable: the sidebar is a fixed set of things and a
     scrollbar down the side of a plate looks like a bug. The vertical rhythm
     below is tuned so all of it lands inside a laptop viewport. */
  #rail { display: flex; flex-direction: column; min-height: 0; }

  h1 {
    margin: 0; font-size: clamp(24px, 2.5vw, 31px); font-weight: 600;
    letter-spacing: -.018em; line-height: 1.06;
  }
  #story {
    margin: clamp(7px, 1.2vh, 10px) 0 0; font-size: 14px; font-weight: 400; color: var(--ash);
    line-height: 1.5;
  }
  /* The three criteria are the whole brief, so they get to be a list rather
     than a sentence -- but a quiet one: a hanging en dash, no discs, no
     colour of their own. */
  #criteria { margin: clamp(6px, 1.1vh, 9px) 0 0; padding: 0; list-style: none; }
  #criteria li {
    position: relative; padding-left: 16px; color: var(--ash);
    font-size: 14px; line-height: 1.5;
  }
  #criteria li::before { content: "–"; position: absolute; left: 0; color: var(--ash-2); }

  /* the count is the sidebar's anchor, and says how old it is in the same breath */
  #tally { margin-top: clamp(12px, 2.4vh, 20px); }
  #tally b {
    display: block; font-family: var(--mono); font-size: clamp(28px, 4.3vh, 36px);
    font-weight: 600;
    font-variant-numeric: tabular-nums; letter-spacing: -.035em; line-height: 1;
  }
  /* Direct child only: a bare `#tally span` also caught #asof and turned it
     into a block, which broke the date on to its own line behind a comma. */
  #tally > span { display: block; margin-top: 6px; font-size: 14px; color: var(--ash); }
  #asof { display: inline; color: var(--ash-2); }
  body.is-stale #asof { color: var(--alert); }
  #stale {
    margin-top: 12px; padding: 8px 10px; background: var(--alert); color: #fff;
    font-size: 12px; line-height: 1.4;
  }
  #stale b { font-weight: 600; }

  .sect {
    margin-top: clamp(11px, 2.2vh, 19px); padding-top: clamp(10px, 1.9vh, 16px);
    border-top: 1px solid var(--rule);
  }
  .sect h2 {
    margin: 0 0 clamp(7px, 1.3vh, 11px); font-size: 14px; font-weight: 500;
    color: var(--ash);
  }

  /* ---- line filter ------------------------------------------------------ */
  #bullets { display: flex; flex-wrap: wrap; gap: 7px; }
  .bullet {
    width: 31px; height: 31px; padding: 0;
    border: 1px solid var(--rule); border-radius: 50%;
    background: transparent; color: var(--ash-2);
    font-family: var(--mono); font-size: 13px; font-weight: 600;
    font-variant-numeric: tabular-nums; cursor: pointer;
    transition: color .12s, background .12s, border-color .12s, transform .12s;
  }
  /* A selected line wears its real De Lijn colour here, in the control, while
     the network on the map stays one calm cool line. Identity lives in the
     legend; the map stays quiet until you hover. */
  .bullet.on { border-color: transparent; }
  .bullet:not(.on):hover { color: var(--ink); border-color: var(--ash-2); }
  .bullet.on:hover, .bullet.on.lit { filter: brightness(1.15); }
  /* Set from the map: hovering a route lights its bullet, and vice versa. */
  .bullet.lit { transform: scale(1.1); }
  .bullet:not(.on).lit { color: var(--ink); border-color: var(--ash-2); }
  #line-actions { display: flex; gap: 8px; margin-top: 12px; }
  #line-actions button {
    border: 1px solid var(--rule); border-radius: 4px;
    background: transparent; padding: 5px 9px; color: var(--ash);
    font: inherit; font-size: 13px; cursor: pointer;
  }
  #line-actions button:hover:not(:disabled) { color: var(--ink); border-color: var(--ash-2); }
  #line-actions button:disabled { opacity: .4; cursor: default; }

  /* ---- basemap and layer controls -------------------------------------- */
  .basemap-options { display: flex; gap: 9px; }
  .basemap-choice {
    display: flex; flex: 1 1 0; min-width: 0; flex-direction: column;
    align-items: center; gap: 6px; color: var(--ash-2);
    font-size: 11px; line-height: 1.2; text-align: center; cursor: pointer;
  }
  .basemap-choice input {
    position: absolute; width: 1px; height: 1px; opacity: 0; pointer-events: none;
  }
  .basemap-preview {
    display: block; width: 58px; height: 58px; max-width: 100%;
    border: 2px solid transparent; border-radius: 3px;
    background-position: center; background-repeat: no-repeat;
    box-shadow: 0 0 0 1px var(--rule);
    transition: border-color .12s, box-shadow .12s;
  }
  .basemap-preview.dark {
    background-image: url('https://a.basemaps.cartocdn.com/dark_all/15/16784/10938.png?key=cb1_285a_1_5e8cbaef4cdfb8b0ad088914');
  }
  .basemap-preview.osm {
    background-image: url('https://tile.openstreetmap.org/15/16784/10938.png');
  }
  .basemap-preview.aerial {
    background-image: url('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/10938/16784');
  }
  .basemap-choice:hover .basemap-preview { box-shadow: 0 0 0 1px var(--ash-2); }
  .basemap-choice input:checked + .basemap-preview {
    border-color: var(--accent); box-shadow: 0 0 0 1px var(--accent);
  }
  .basemap-choice input:focus-visible + .basemap-preview {
    outline: 2px solid var(--ink); outline-offset: 3px;
  }
  .basemap-choice input:checked ~ .basemap-name { color: var(--ink); }
  .toggle {
    display: flex; align-items: center; gap: 9px; cursor: pointer;
    font-size: 14px; user-select: none; padding: 2px 0;
  }
  .toggle input { accent-color: var(--accent); margin: 0; width: 16px; height: 16px; }
  #opacity { display: none; align-items: center; gap: 10px; padding: 7px 0 0 24px; }
  #noise-wrap.on #opacity { display: flex; }
  #opacity input[type=range] { flex: 1; accent-color: var(--accent); margin: 0; cursor: pointer; }
  #opacity output {
    font-family: var(--mono); font-size: 13px; font-variant-numeric: tabular-nums;
    color: var(--ash-2); min-width: 36px; text-align: right;
  }

  /* ---- legend, pinned to the foot of the rail --------------------------- */
  #legend { margin-top: auto; padding-bottom: 2px; }
  #legend .key {
    display: flex; align-items: center; gap: 11px;
    font-size: 14px; color: var(--ash); padding: 3px 0;
  }
  .swatch-dot {
    flex: none; width: 11px; height: 11px; border-radius: 50%; background: #FFFFFF;
    box-shadow: 0 0 0 2px rgba(11,19,27,.92);
  }
  .swatch-line { flex: none; width: 24px; height: 3px; background: var(--network); }
  #ramp-bars { display: flex; align-items: flex-end; gap: 2px; height: 18px; }
  #ramp-bars i { width: 10px; display: block; filter: var(--noise-filter); }
  #ramp-lo, #ramp-hi { color: var(--ash-2); font-size: 13px; }
  #source {
    margin-top: 12px; font-size: 12px; line-height: 1.5; color: var(--ash-2);
  }
  #source a { color: inherit; }

  /* ---- the map, inset in its frame ------------------------------------- */
  #map-frame {
    position: relative; overflow: hidden;
    background: var(--plate); border: 1px solid var(--rule);
  }
  #{{MAP}} {
    position: absolute !important; inset: 0 !important;
    width: auto !important; height: auto !important; background: var(--plate);
  }
  .leaflet-container { font-family: var(--sans); background: var(--plate); }
  .leaflet-control-attribution {
    background: rgba(11,19,27,.78) !important; color: var(--ash-2) !important;
    font-size: 9px !important; padding: 1px 6px !important; line-height: 1.4 !important;
  }
  .leaflet-control-attribution a { color: var(--ash-2) !important; }
  .leaflet-bar { border: 0 !important; box-shadow: none !important; }
  .leaflet-bar a {
    background: rgba(16,26,36,.88); color: var(--ash);
    border: 1px solid var(--rule); border-radius: 0 !important;
  }
  .leaflet-bar a:hover { background: var(--plate); color: var(--ink); }
  .leaflet-bar a + a { border-top: 0; }
  /* Street labels: there for orientation, never shouting. */
  .labels-pane { opacity: .4; }

  /* The invisible hover targets behind each tram line. An SVG path drawn at
     stroke-opacity 0 is not "painted", and the default pointer-events value
     (visiblePainted) will not hit an unpainted stroke -- so the targets exist
     and are marked interactive but silently never fire. `stroke` hit-tests the
     stroke area regardless of paint, which is exactly what a transparent hit
     line needs. */
  /* Specificity matters here: leaflet.css ships
     `.leaflet-pane > svg path.leaflet-interactive { pointer-events: auto }`
     at (0,2,2), so a plainer selector loses and the rule silently does
     nothing. This is (0,3,2). */
  .leaflet-pane.leaflet-hit-pane > svg path.leaflet-interactive {
    pointer-events: stroke;
  }

  /* Noise as light: the quiet city stays dark, the loud roads burn through it.
     Recoloured here, not in the pipeline -- 06_fetch_noise_map.py and the PNG
     are untouched.

     invert() is doing the real work, and it is not a stylistic choice. The
     Flemish Lden palette runs pale-yellow (#FFF073, 55-59 dB) to dark-red
     (#A80000, 75+ dB), so its luminance runs *backwards* to loudness: the
     quietest class is the brightest pixel on the raster and covers a quarter
     of it. Screen-blended raw, the quiet suburbs glow and the motorways go
     black.

     So: invert() puts brightness and loudness the same way round, grayscale()
     throws away the source hues entirely -- rotating them instead turned the
     low classes a muddy green -- and contrast(1.3) crushes what is left, which
     drops the quietest class to roughly 5% and drives the two loudest to near
     full. Only then is it recoloured, sepia + saturate + a small rotation
     giving a single amber that runs dark to hot. Everything the raster leaves
     transparent (48% of it: below 55 dB, or off the mapped area) contributes
     nothing to a screen blend and simply stays dark. */
  .noise-pane {
    mix-blend-mode: screen;
    filter: var(--noise-filter);
  }
  /* over a pale ground, the raster is shown exactly as published */
  .noise-pane.plain { mix-blend-mode: normal; filter: none; opacity: .85; }

  /* ---- marks ------------------------------------------------------------ */
  .apt-dot {
    width: 9px; height: 9px; border-radius: 50%; background: #FFFFFF;
    /* dark ring, then a dark halo: the apartment has to stay the brightest
       mark on the page even where it sits on a lit motorway */
    box-shadow: 0 0 0 2px rgba(11,19,27,.92), 0 0 0 3.5px rgba(11,19,27,.45),
                0 0 9px 2px rgba(11,19,27,.5);
    cursor: pointer; transition: transform .12s;
  }
  .apt-marker:hover .apt-dot { transform: scale(1.5); }
  .apt-marker.is-open .apt-dot {
    background: var(--signal); transform: scale(1.7);
    box-shadow: 0 0 0 1.5px rgba(11,19,27,.9), 0 0 0 4px rgba(255,206,0,.28),
                0 0 16px 3px rgba(255,206,0,.5);
  }
  .stop-dot {
    width: 4px; height: 4px; border-radius: 50%;
    background: var(--network); opacity: .75;
  }
  .apt-label.leaflet-tooltip {
    background: rgba(11,19,27,.94); color: var(--ink);
    border: 1px solid var(--rule); border-radius: 0; box-shadow: none;
    padding: 4px 8px; white-space: nowrap;
    font-family: var(--mono); font-size: 12px; font-weight: 600;
    font-variant-numeric: tabular-nums;
  }
  .apt-label.leaflet-tooltip::before { display: none; }
  .apt-label i {
    font-family: var(--sans); font-style: normal; font-weight: 400;
    font-size: 11px; color: var(--ash); padding-left: 7px;
  }
  /* Same chip as an apartment's label, but the line's own colour carries the
     identity rather than a swatch. */
  .line-label.leaflet-tooltip {
    background: rgba(11,19,27,.94); color: var(--ink);
    border: 1px solid var(--rule); border-radius: 0; box-shadow: none;
    padding: 3px 8px; white-space: nowrap;
    font-family: var(--sans); font-size: 12px; font-weight: 500;
  }
  .line-label.leaflet-tooltip::before { display: none; }

  /* ---- the apartment you opened ----------------------------------------- */
  #card {
    position: absolute; right: 0; top: 0; bottom: 0; width: 336px; z-index: 900;
    background: rgba(11,19,27,.97); border-left: 1px solid var(--rule);
    transform: translateX(100%); transition: transform .22s ease;
    overflow-y: auto; overscroll-behavior: contain;
  }
  body.card-open #card { transform: translateX(0); }
  #card::-webkit-scrollbar { width: 8px; }
  #card::-webkit-scrollbar-thumb { background: var(--rule); }
  #close {
    position: absolute; top: 9px; right: 9px; z-index: 2;
    width: 26px; height: 26px; padding: 0; border: 1px solid var(--rule);
    background: rgba(11,19,27,.8); color: var(--ink);
    font-size: 14px; line-height: 1; cursor: pointer;
  }
  #close:hover { background: var(--plate); }
  #gallery { position: relative; background: var(--plate); }
  #photo { width: 100%; height: 208px; object-fit: cover; display: block; }
  .step {
    position: absolute; top: 0; bottom: 0; width: 40px; padding: 0; border: 0;
    background: transparent; color: #fff; font-size: 21px; line-height: 1;
    cursor: pointer; opacity: 0; transition: opacity .12s;
    text-shadow: 0 1px 7px rgba(0,0,0,.95);
  }
  #gallery:hover .step, .step:focus-visible { opacity: 1; }
  #prev { left: 0; } #next { right: 0; }
  #frame-n {
    position: absolute; left: 8px; bottom: 8px; padding: 2px 6px;
    background: rgba(11,19,27,.8); color: var(--ash);
    font-family: var(--mono); font-size: 11px; font-variant-numeric: tabular-nums;
  }
  #gallery.single .step, #gallery.single #frame-n { display: none; }
  #cbody { padding: 16px; }
  #rent {
    font-family: var(--mono); font-size: 29px; font-weight: 600;
    font-variant-numeric: tabular-nums; letter-spacing: -.025em; line-height: 1.05;
  }
  #rent em {
    display: block; font-family: var(--sans); font-style: normal;
    font-size: 12px; font-weight: 400; color: var(--ash); margin-top: 5px;
  }
  #addr { font-size: 15px; margin-top: 12px; }
  #facts {
    display: grid; grid-template-columns: auto 1fr; gap: 9px 16px;
    margin: 15px 0 0; padding-top: 14px; border-top: 1px solid var(--rule);
  }
  #facts dt { font-size: 13px; color: var(--ash); }
  #facts dd {
    margin: 0; text-align: right;
    font-family: var(--mono); font-size: 13px; font-variant-numeric: tabular-nums;
  }
  #facts dd.name { font-family: var(--sans); }
  #cardlines { display: flex; flex-wrap: wrap; gap: 4px; justify-content: flex-end; }
  #cardlines b {
    width: 21px; height: 21px; border-radius: 50%; display: inline-flex;
    align-items: center; justify-content: center;
    font-family: var(--mono); font-size: 11px; font-weight: 600;
  }
  #link {
    display: block; margin-top: 18px; padding: 12px; text-align: center;
    font-size: 14px; font-weight: 500; color: var(--ground);
    background: var(--accent); text-decoration: none;
  }
  #link:hover { filter: brightness(1.08); }

  :focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }

  #loaderr {
    position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
    z-index: 1200; max-width: 30rem; padding: 16px 20px;
    background: var(--plate); border: 1px solid var(--rule);
    font-size: 13px; line-height: 1.5;
  }

  @media (max-height: 720px) {
    body { height: auto; min-height: 100%; overflow: auto; }
    #map-frame { min-height: 76vh; }
  }
  @media (max-width: 820px) {
    body {
      grid-template-columns: minmax(0, 1fr);
      grid-template-rows: auto minmax(420px, 1fr);
      overflow: auto; height: auto; min-height: 100%;
    }
    #rail { overflow: visible; }
    #legend { margin-top: 26px; }
    #card { width: 100%; }
  }
  @media (prefers-reduced-motion: reduce) { * { transition: none !important; } }
</style>
"""

BODY_HTML = r"""
<aside id="rail">
  <h1>Rentals in Antwerp</h1>
  <p id="story">The landlord is ignoring our request to fix the oven. So I made
    this dashboard to check for apartment rentals that fit my criteria:</p>
  <ul id="criteria">
    <li>under €1,100/mo</li>
    <li>on a convenient tram line</li>
    <li>on a quiet street</li>
  </ul>

  <div id="tally">
    <b>—</b>
    <span>apartments<span id="asof"></span></span>
  </div>
  <div id="stale" role="status" hidden></div>

  <div class="sect">
    <h2>Tram lines</h2>
    <div id="bullets"></div>
    <div id="line-actions">
      <button id="select-all" type="button">Select all</button>
      <button id="deselect-all" type="button">Deselect all</button>
    </div>
  </div>

  <div class="sect">
    <h2>Basemap</h2>
    <div class="basemap-options" role="radiogroup" aria-label="Basemap">
      <label class="basemap-choice">
        <input type="radio" name="base" value="dark" checked>
        <span class="basemap-preview dark" aria-hidden="true"></span>
        <span class="basemap-name">Dark</span>
      </label>
      <label class="basemap-choice">
        <input type="radio" name="base" value="osm">
        <span class="basemap-preview osm" aria-hidden="true"></span>
        <span class="basemap-name">OpenStreetMap</span>
      </label>
      <label class="basemap-choice">
        <input type="radio" name="base" value="aerial">
        <span class="basemap-preview aerial" aria-hidden="true"></span>
        <span class="basemap-name">Aerial</span>
      </label>
    </div>
  </div>

  <div class="sect">
    <h2>Layers</h2>
    <span id="noise-wrap" class="on">
      <label class="toggle"><input type="checkbox" id="noise-on" checked> Noise overlay</label>
      <span id="opacity">
        <input type="range" id="noise-opacity" min="10" max="100" step="5" value="72"
               aria-label="Noise overlay opacity">
        <output for="noise-opacity" id="noise-pct">72%</output>
      </span>
    </span>
  </div>

  <div class="sect" id="legend">
    <span class="key"><i class="swatch-dot"></i>apartment</span>
    <span class="key"><i class="swatch-line"></i>tram line</span>
    <span class="key">
      <span id="ramp-lo">quiet</span>
      <span id="ramp-bars"></span>
      <span id="ramp-hi">loud</span>
    </span>
    <p id="source">Listings from Immoweb, refreshed daily.</p>
  </div>
</aside>

<div id="map-frame">
  <div id="loaderr" hidden></div>

  <aside id="card" aria-hidden="true">
    <button id="close" type="button" aria-label="Close">&times;</button>
    <div id="gallery">
      <img id="photo" alt="">
      <button id="prev" class="step" type="button" aria-label="Previous photo">&lsaquo;</button>
      <button id="next" class="step" type="button" aria-label="Next photo">&rsaquo;</button>
      <div id="frame-n"></div>
    </div>
    <div id="cbody">
      <div id="rent"></div>
      <div id="addr"></div>
      <dl id="facts"></dl>
      <a id="link" href="#" target="_blank" rel="noopener">Open on Immoweb</a>
    </div>
  </aside>
</div>

"""

# folium renders this block above its own map constructor, so the code waits for
# window load -- by then the map variable exists as a global.
JS = r"""

/* The lines that reach my wife's work. Everything else starts hidden -- that
   filter is the story, not a default someone forgot to change. */
var HOME_LINES = ['1', '4', '7', '10'];

/* Below this the noise raster's coverage runs out and you are looking at
   countryside rather than at the city the story is about. */
var MIN_ZOOM = 12;

function init(map, network, listings) {
  var APTS = listings.apts;
  var STOPS = network.stops;
  var COLOURS = network.colours;
  var NOISE = network.noise;

  /* '0'-'9' is 48-57; the only non-numbered lines are A3 and A9. */
  function numbered(x) { var c = x.charCodeAt(0); return c >= 48 && c <= 57; }

  var LINES = Object.keys(APTS.reduce(function (seen, a) {
    a.lines.forEach(function (l) { seen[l] = 1; });
    return seen;
  }, {})).sort(function (a, b) {
    var na = numbered(a), nb = numbered(b);
    if (na !== nb) { return na ? -1 : 1; }
    if (a.length !== b.length) { return a.length - b.length; }
    return a < b ? -1 : a > b ? 1 : 0;
  });

  var SHAPES = {};
  LINES.forEach(function (l) { if (network.shapes[l]) { SHAPES[l] = network.shapes[l]; } });

  map.invalidateSize();

  /* Panes, bottom to top: noise (the ground) -> routes -> street labels ->
     markers. The noise pane screen-blends, so it sits under everything that
     has to keep its own colour. */
  function pane(name, z, cls, interactive) {
    map.createPane(name);
    var p = map.getPane(name);
    p.style.zIndex = z;
    p.style.pointerEvents = interactive ? 'auto' : 'none';
    if (cls) { p.className += ' ' + cls; }
  }
  pane('noise', 350, 'noise-pane');
  pane('routes', 420);
  /* Sits above the drawn routes but below markerPane (600), so an apartment
     still wins the pointer wherever a dot sits on top of its own line. */
  pane('hit', 440, null, true);
  pane('labels', 500, 'labels-pane');

  /* ---- helpers ---------------------------------------------------------- */
  var euro = function (v) { return v == null ? '—' : '€' + v.toLocaleString('en-GB'); };
  /* Immoweb returns locality inconsistently cased: Antwerpen / ANTWERPEN,
     Deurne / DEURNE. Normalised for display only. */
  function place(s) {
    if (!s) { return ''; }
    return s.toLowerCase().replace(/(^|[\s\-])([a-z])/g, function (m, p, c) {
      return p + c.toUpperCase();
    });
  }
  function ink(hex) {  /* readable text on a line-colour bullet */
    var h = hex.replace('#', '');
    if (h.length === 3) { h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2]; }
    var r = parseInt(h.slice(0, 2), 16) / 255,
        g = parseInt(h.slice(2, 4), 16) / 255,
        b = parseInt(h.slice(4, 6), 16) / 255;
    return (0.2126 * r + 0.7152 * g + 0.0722 * b) > 0.55 ? '#0B131B' : '#FFFFFF';
  }
  var COOL = getComputedStyle(document.body).getPropertyValue('--network').trim();

  /* The counterpart to ink(). De Lijn's palette carries several very dark
     hues -- 7 is #0000A0, 5 is #990000, 2 is #008000 -- and on this ground
     they read as an absence rather than a highlight: hovering line 7 made it
     less visible than the cool default it replaced. This mixes such a colour
     toward white just until it clears about 3:1 against the ground, so the
     hue still identifies the line but the stroke actually lights up. Colours
     that are already bright come back untouched. */
  function lift(hex) {
    var h = hex.replace('#', '');
    if (h.length === 3) { h = h[0]+h[0]+h[1]+h[1]+h[2]+h[2]; }
    var c = [parseInt(h.slice(0,2),16), parseInt(h.slice(2,4),16), parseInt(h.slice(4,6),16)];
    function chan(v) { v /= 255; return v <= 0.03928 ? v/12.92 : Math.pow((v+0.055)/1.055, 2.4); }
    function lum(x) { return 0.2126*chan(x[0]) + 0.7152*chan(x[1]) + 0.0722*chan(x[2]); }
    var groundL = lum([11, 19, 27]);           /* --ground #0B131B */
    for (var t = 0; t <= 1.0001; t += 0.05) {
      var m = c.map(function (v) { return Math.round(v + (255 - v) * t); });
      if ((lum(m) + 0.05) / (groundL + 0.05) >= 3) {
        return 'rgb(' + m.join(',') + ')';
      }
    }
    return '#FFFFFF';
  }

  /* ---- basemap ---------------------------------------------------------- */
  /* CARTO Dark Matter, split into ground and labels so street names can ride
     above the tram network instead of being buried by it.

     The key is required -- CARTO's keyless tiles now come back stamped "API
     KEY REQUIRED" -- and it is the same one already published in
     london-2026/assets/maps/, so this page exposes nothing new. */
  var CARTO_KEY = 'cb1_285a_1_5e8cbaef4cdfb8b0ad088914';
  var CARTO_ATTR = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                 + ' contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';
  function carto(style, opts) {
    var o = { subdomains: 'abcd', maxZoom: 20, attribution: CARTO_ATTR };
    for (var k in (opts || {})) { o[k] = opts[k]; }
    return L.tileLayer(
      'https://{s}.basemaps.cartocdn.com/' + style + '/{z}/{x}/{y}{r}.png?key=' + CARTO_KEY, o);
  }

  var GROUNDS = {
    dark: carto('dark_nolabels'),
    /* OSM Standard is the one ground here that is not pretty, and it is not the
       default for that reason. It earns its place on labels: it names the small
       streets the dark ground leaves anonymous, which is exactly what you want
       once you are deciding between two actual addresses. */
    osm: L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">'
                 + 'OpenStreetMap</a> contributors'
    }),
    aerial: L.tileLayer(
      'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      { maxZoom: 19, attribution: 'Imagery &copy; Esri, Maxar, Earthstar Geographics' })
  };
  /* Its own labels ride in a pane above the routes. OSM Standard already
     carries labels of its own, so this comes off when that ground is chosen. */
  var labelLayer = carto('dark_only_labels', { pane: 'labels', attribution: '' });

  var ground = 'dark';
  function setGround(name) {
    if (GROUNDS[ground]) { map.removeLayer(GROUNDS[ground]); }
    ground = name;
    GROUNDS[name].addTo(map);
    GROUNDS[name].bringToBack();
    if (name === 'osm') { map.removeLayer(labelLayer); }
    else if (!map.hasLayer(labelLayer)) { labelLayer.addTo(map); }
    /* The amber-glow treatment is built for a dark ground: screen-blending it
       over a pale one would wash the whole map out. Over OSM Standard the
       raster is shown as published instead -- its own Lden palette, normally
       blended, which is how a noise map is usually read over a street map. */
    var np = map.getPane('noise');
    np.classList.toggle('plain', name === 'osm');
  }
  setGround('dark');

  Array.prototype.forEach.call(
    document.querySelectorAll('input[name=base]'),
    function (r) { r.onchange = function () { if (r.checked) { setGround(r.value); } }; }
  );

  /* ---- noise overlay ---------------------------------------------------- */
  var noiseWrap = document.getElementById('noise-wrap');
  if (!NOISE) {
    noiseWrap.style.display = 'none';
  } else {
    var noiseLayer = L.imageOverlay(NOISE.png, NOISE.bounds, {
      opacity: 0.72, pane: 'noise', interactive: false,
      attribution: 'Noise: Strategische geluidsbelastingskaart 2021 &copy; '
                 + 'Departement Omgeving, Vlaanderen'
    }).addTo(map);
    var nbox = document.getElementById('noise-on');
    var slider = document.getElementById('noise-opacity');
    var pctOut = document.getElementById('noise-pct');
    nbox.onchange = function () {
      noiseWrap.classList.toggle('on', nbox.checked);
      if (nbox.checked) { noiseLayer.addTo(map); } else { map.removeLayer(noiseLayer); }
    };
    slider.oninput = function () {
      noiseLayer.setOpacity(slider.value / 100);
      pctOut.textContent = slider.value + '%';
    };
  }

  /* The legend ramp is the Lden palette after the same screen-blend treatment
     the map gets, so the key and the ground agree. */
  /* The raster's own Lden classes, 55-59 dB up to 75+. The swatches carry
     the same --noise-filter the overlay does, so the key is literally the
     same treatment applied to the same colours. */
  var RAMP = ['#FFF073', '#FFBF00', '#FF7800', '#E50000', '#A80000'];
  var bars = document.getElementById('ramp-bars');
  RAMP.forEach(function (c, i) {
    var b = document.createElement('i');
    b.style.background = c;
    b.style.height = (6 + i * 2.2) + 'px';
    bars.appendChild(b);
  });

  /* ---- state ------------------------------------------------------------ */
  var known = {};
  LINES.forEach(function (l) { known[l] = 1; });
  var selected = new Set(HOME_LINES.filter(function (l) { return known[l]; }));
  if (!selected.size) { selected = new Set(LINES); }
  var open = null;
  var aptLayer = L.layerGroup().addTo(map);
  var stopLayer = L.layerGroup().addTo(map);
  var routeLayer = L.layerGroup().addTo(map);
  var markers = {};

  /* ---- marks ------------------------------------------------------------ */
  APTS.forEach(function (a) {
    var m = L.marker([a.lat, a.lon], {
      icon: L.divIcon({ className: 'apt-marker', html: '<div class="apt-dot"></div>',
        iconSize: [9, 9], iconAnchor: [4.5, 4.5] }),
      riseOnHover: true, keyboard: false
    });
    /* Rent on hover only. Every dot already passed the price filter, so a
       permanent label would just repeat the story line. */
    m.bindTooltip(euro(a.rent_eur) + (a.street ? '<i>' + a.street + '</i>' : ''),
      { direction: 'right', offset: [9, 0], className: 'apt-label' });
    m.on('click', function () { openApartment(a); });
    markers[a.id] = m;
  });

  /* Network in one cool colour: "near a tram to her work" is the criterion,
     not which line it is. Each route is drawn twice -- a dark casing so it
     survives both the noise glow and the aerial, then the line itself. The
     real De Lijn colour arrives on hover. */
  var routes = {};
  Object.keys(SHAPES).forEach(function (line) {
    var colour = COLOURS[line] || COOL;
    var casing = L.polyline(SHAPES[line], { pane: 'routes', color: '#0B131B',
      weight: 5, opacity: .55, lineCap: 'round', interactive: false });
    var stroke = L.polyline(SHAPES[line], { pane: 'routes', color: COOL,
      weight: 1.8, opacity: .9, lineCap: 'round', interactive: false });
    /* The drawn line is 1.8px, which is far too thin to hit with a mouse, so
       hovering runs off an invisible fat copy instead. Transparent rather than
       hidden: a display:none layer receives no events. */
    var hit = L.polyline(SHAPES[line], {
      pane: 'hit', color: '#000', weight: 16, opacity: 0,
      lineCap: 'round', interactive: true, bubblingMouseEvents: false
    });
    hit.bindTooltip('Tram ' + line, { sticky: true, className: 'line-label' });
    hit.on('mouseover', function () { lightLine(line, true); });
    hit.on('mouseout', function () { lightLine(line, false); });
    /* Without this a click on a line would be swallowed instead of closing an
       open apartment, which is what clicking the map does everywhere else. */
    hit.on('click', function () { closeApartment(); });
    routes[line] = { group: L.layerGroup([casing, stroke, hit]), stroke: stroke,
                     tip: hit, colour: colour };
  });

  /* Hovering either the map line or its bullet lights both, so the two halves
     of the control read as the same object. */
  function lightLine(line, on) {
    var r = routes[line];
    if (r) {
      r.stroke.setStyle({
        color: on ? lift(r.colour) : COOL,
        weight: on ? 3.4 : 1.8,
        opacity: on ? 1 : .9
      });
      r.tip.setTooltipContent('Tram ' + line);
      if (on) { r.stroke.bringToFront(); }
    }
    var b = document.querySelector('.bullet[data-line="' + line + '"]');
    if (b) { b.classList.toggle('lit', on); }
  }

  STOPS.forEach(function (s) {
    s.marker = L.marker([s.lat, s.lon], {
      icon: L.divIcon({ className: 'stop-marker', html: '<div class="stop-dot"></div>',
        iconSize: [4, 4], iconAnchor: [2, 2] }),
      interactive: false, keyboard: false
    });
  });

  /* ---- filter ----------------------------------------------------------- */
  function onLine(lines) {
    for (var i = 0; i < lines.length; i++) {
      if (selected.has(lines[i])) { return true; }
    }
    return false;
  }

  var bulletBox = document.getElementById('bullets');
  LINES.forEach(function (line) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'bullet';
    b.dataset.line = line;
    b.textContent = line;
    b.title = 'Tram ' + line;
    b.onclick = function () {
      if (selected.has(line)) { selected.delete(line); } else { selected.add(line); }
      render();
    };
    b.onmouseenter = function () { if (selected.has(line)) { lightLine(line, true); } };
    b.onmouseleave = function () { lightLine(line, false); };
    bulletBox.appendChild(b);
  });

  var selectAllBtn = document.getElementById('select-all');
  var deselectAllBtn = document.getElementById('deselect-all');
  selectAllBtn.onclick = function () {
    selected = new Set(LINES);
    render(); frame();
  };
  deselectAllBtn.onclick = function () {
    selected = new Set();
    render(); frame();
  };

  /* ---- render ----------------------------------------------------------- */
  function render() {
    aptLayer.clearLayers();
    stopLayer.clearLayers();
    routeLayer.clearLayers();

    Object.keys(routes).forEach(function (line) {
      if (selected.has(line)) { routeLayer.addLayer(routes[line].group); }
    });
    var shown = 0;
    APTS.forEach(function (a) {
      if (onLine(a.lines)) { aptLayer.addLayer(markers[a.id]); shown++; }
    });
    STOPS.forEach(function (s) { if (onLine(s.lines)) { stopLayer.addLayer(s.marker); } });

    document.querySelector('#tally b').textContent = shown;

    Array.prototype.forEach.call(document.querySelectorAll('.bullet'), function (b) {
      var l = b.dataset.line, on = selected.has(l);
      var c = COLOURS[l] || '#6A7784';
      b.classList.toggle('on', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
      b.style.background = on ? c : 'transparent';
      b.style.color = on ? ink(c) : '';
    });

    selectAllBtn.disabled = selected.size === LINES.length;
    deselectAllBtn.disabled = selected.size === 0;

    if (open && !onLine(open.lines)) { closeApartment(); }
  }

  /* ---- the apartment you opened ----------------------------------------- */
  var gallery = document.getElementById('gallery');
  var photo = document.getElementById('photo');
  var frameN = document.getElementById('frame-n');
  var facts = document.getElementById('facts');
  var shots = [], shot = 0;

  function paint() {
    if (!shots.length) { return; }
    shot = (shot + shots.length) % shots.length;
    photo.src = shots[shot];
    frameN.textContent = (shot + 1) + '/' + shots.length;
  }
  function showPhotos(a) {
    shots = (a.photos || '').split('|').filter(Boolean);
    if (!shots.length && (a.image_large || a.image)) { shots = [a.image_large || a.image]; }
    shot = 0;
    gallery.classList.toggle('single', shots.length < 2);
    gallery.style.display = shots.length ? 'block' : 'none';
    paint();
  }
  document.getElementById('prev').onclick = function (e) { e.stopPropagation(); shot--; paint(); };
  document.getElementById('next').onclick = function (e) { e.stopPropagation(); shot++; paint(); };

  function row(label, value, isName) {
    if (value == null || value === '') { return; }
    var dt = document.createElement('dt'); dt.textContent = label;
    var dd = document.createElement('dd');
    if (isName) { dd.className = 'name'; }
    if (value instanceof Node) { dd.appendChild(value); } else { dd.textContent = value; }
    facts.appendChild(dt); facts.appendChild(dd);
  }

  function openApartment(a) {
    open = a;
    Object.keys(markers).forEach(function (id) {
      if (markers[id]._icon) {
        markers[id]._icon.classList.toggle('is-open', id === String(a.id));
      }
    });
    showPhotos(a);
    document.getElementById('rent').innerHTML =
      euro(a.rent_eur) + '<em>per month'
      + (a.costs_eur ? ', plus ' + euro(a.costs_eur) + ' costs' : '') + '</em>';
    document.getElementById('addr').textContent =
      [a.street, place(a.place || a.locality)].filter(Boolean).join(', ');

    facts.innerHTML = '';
    row('Surface', a.surface_m2 ? a.surface_m2 + ' m²' : 'not given', !a.surface_m2);
    row('Floor', a.floor);
    row('Nearest stop', a.nearest_stop, true);
    row('Walk to stop', a.nearest_stop_m + ' m');
    var box = document.createElement('div');
    box.id = 'cardlines';
    a.lines.forEach(function (l) {
      var c = COLOURS[l] || '#6A7784';
      var el = document.createElement('b');
      el.textContent = l;
      el.style.background = c;
      el.style.color = ink(c);
      if (!selected.has(l)) { el.style.opacity = '.35'; }
      box.appendChild(el);
    });
    row('Lines within 800 m', box);
    row('Listed by',
        a.agency && a.agency.toUpperCase() === 'PRIVATE' ? 'Private owner' : a.agency, true);

    document.getElementById('link').href = a.url;
    document.body.classList.add('card-open');
    document.getElementById('card').setAttribute('aria-hidden', 'false');
    document.getElementById('card').scrollTop = 0;
  }

  function closeApartment() {
    open = null;
    document.body.classList.remove('card-open');
    document.getElementById('card').setAttribute('aria-hidden', 'true');
    Object.keys(markers).forEach(function (id) {
      if (markers[id]._icon) { markers[id]._icon.classList.remove('is-open'); }
    });
  }
  document.getElementById('close').onclick = closeApartment;
  map.on('click', closeApartment);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { closeApartment(); return; }
    if (!open || shots.length < 2) { return; }
    if (e.key === 'ArrowLeft') { shot--; paint(); }
    if (e.key === 'ArrowRight') { shot++; paint(); }
  });

  /* ---- framing ---------------------------------------------------------- */
  /* Computed here, not baked in at build time: the daily refresh rewrites only
     the data, so a build-time fitBounds would drift as listings move.

     Trimmed to the 5th-95th percentile rather than the full extent. A handful
     of listings out in Boechout and Wommelgem would otherwise pull the frame
     back until the city -- where nearly all of them are, and where the noise
     map has data -- is too small to read. */
  function span(xs, lo, hi) {
    var s = xs.slice().sort(function (a, b) { return a - b; });
    var at = function (q) { return s[Math.min(s.length - 1, Math.floor(q * (s.length - 1)))]; };
    return [at(lo), at(hi)];
  }
  function frame() {
    var vis = APTS.filter(function (a) { return onLine(a.lines); });
    if (!vis.length) { vis = APTS; }
    var la = span(vis.map(function (a) { return a.lat; }), 0.08, 0.92);
    var lo = span(vis.map(function (a) { return a.lon; }), 0.08, 0.92);
    map.fitBounds([[la[0], lo[0]], [la[1], lo[1]]], { padding: [18, 18] });
    /* A pure fitBounds is at the mercy of the frame's proportions: the same
       listings in a tall narrow panel zoom out far enough to show Kontich and
       Brasschaat, which is not the story. The floor keeps the city legible
       whatever shape the map ends up. */
    if (map.getZoom() < MIN_ZOOM) { map.setZoom(MIN_ZOOM); }
  }

  render();
  frame();
}

/* Comfortably longer than the daily refresh, so one late run does not cry
   wolf, but short enough that two missed runs always do. */
var STALE_HOURS = 36;

function showStatus(map, status) {
  var asof = document.getElementById('asof');
  var banner = document.getElementById('stale');
  var when = status && status.fetched_at ? new Date(status.fetched_at) : null;
  var ageH = when ? (Date.now() - when.getTime()) / 3600000 : null;

  function warn(why) {
    banner.innerHTML = '<b>Out of date.</b> ';
    banner.appendChild(document.createTextNode(
      why + (when ? ' Showing the last good snapshot, from '
        + when.toLocaleString('en-GB') + '.' : '')));
    banner.hidden = false;
    document.body.classList.add('is-stale');
    map.invalidateSize();
  }

  asof.textContent = when
    ? ', as of ' + when.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })
    : ', age unknown';
  if (when) { asof.title = 'Listings fetched ' + when.toLocaleString('en-GB'); }

  if (!status) { warn('Could not read the refresh status, so the age of this data is unknown.'); }
  else if (status.error) { warn('The last refresh failed: ' + status.error); }
  else if (status.complete === false) { warn('The last refresh was cut short, so listings may be missing.'); }
  else if (!when) { warn('This data has no recorded fetch time, so its age is unknown.'); }
  else if (ageH > STALE_HOURS) { warn('The daily refresh has not run for ' + Math.floor(ageH / 24) + ' days.'); }
}

window.addEventListener('load', function () {
  var map = {{MAP}};
  var INLINE = {{INLINE}};

  /* folium writes its map div straight into <body>. The plate needs it inside
     the framed cell instead, so it is re-parented here -- safe at this point
     because Leaflet re-measures on the invalidateSize() that opens init(). */
  document.getElementById('map-frame').appendChild(map.getContainer());
  if (map.zoomControl) { map.zoomControl.setPosition('topleft'); }

  if (INLINE) {
    init(map, INLINE.network, INLINE.listings);
    showStatus(map, INLINE.status);
    return;
  }

  /* Relative to the document, so the page does not care where it is mounted.
     no-cache because listings.json is refreshed daily and a cached copy is a
     silently stale dashboard. Under file:// fetch() of a relative path is
     blocked outright -- that is what --inline is for. */
  Promise.all(['data/network.json', 'data/listings.json'].map(function (url) {
    return fetch(url, { cache: 'no-cache' }).then(function (r) {
      if (!r.ok) { throw new Error(url + ' -> HTTP ' + r.status); }
      return r.json();
    });
  })).then(function (d) {
    init(map, d[0], d[1]);
  }).catch(function (err) {
    var box = document.getElementById('loaderr');
    box.textContent = 'Could not load the map data — ' + err.message;
    box.hidden = false;
    if (window.location.protocol === 'file:') {
      box.textContent += '. Opened from a file:// path; serve the directory '
        + 'over HTTP, or rebuild with 05_build_map.py --inline.';
    }
  });

  /* Fetched separately and never allowed to block the map: a missing
     status.json should cost you the freshness line, not the listings. */
  fetch('data/status.json', { cache: 'no-cache' })
    .then(function (r) { return r.ok ? r.json() : null; })
    .catch(function () { return null; })
    .then(function (status) { showStatus(map, status); });
});
"""


def write_json(path, payload, indent):
    """Write JSON with a trailing newline, so the files stay diff-friendly."""
    path.write_text(
        json.dumps(payload, ensure_ascii=False, indent=indent) + "\n",
        encoding="utf-8",
    )


def write_data(network, listings):
    """The two files under antwerp-rentals/data/ that a refresh rewrites."""
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    # network.json compact: it is machine-only, rarely rewritten, and mostly
    # route coordinates that one-per-line indentation would inflate badly.
    # listings.json indented: it is committed daily, so diffs are read.
    write_json(NETWORK_JSON, network, indent=None)
    write_json(LISTINGS_JSON, listings, indent=1)
    print("-> {}".format(NETWORK_JSON))
    print("-> {}".format(LISTINGS_JSON))


def summarise(apt_records, stop_records, listed_lines, colours, fallbacks):
    print("{} apartments, {} stops".format(len(apt_records), len(stop_records)))
    print("lines: " + ", ".join("{} {}".format(l, colours[l]) for l in listed_lines))
    if fallbacks:
        print("OSM colour fallback used for: " + ", ".join(fallbacks))


def main(inline=False, data_only=False):
    apartments = gpd.read_file(APARTMENTS).to_crs(4326)
    stops = gpd.read_file(STOPS).to_crs(4326)
    osm_lines = json.loads(LINES_META.read_text(encoding="utf-8"))

    apt_records = []
    for _, row in apartments.iterrows():
        rec = {}
        for k in FIELDS:
            if k not in row:
                continue
            v = row[k]
            if v is None or (isinstance(v, float) and v != v):  # None / NaN
                v = None
            elif hasattr(v, "item"):  # numpy scalar -> python scalar
                v = v.item()
            elif not isinstance(v, (str, int, float, bool)):  # Timestamp etc.
                v = str(v)
            rec[k] = v
        rec["lines"] = [s for s in str(row["lines"]).split(",") if s]
        rec["lat"] = row.geometry.y
        rec["lon"] = row.geometry.x
        apt_records.append(rec)

    stop_records = [
        {
            "name": row["name"],
            "lines": [s for s in str(row["lines"]).split(",") if s],
            "lat": row.geometry.y,
            "lon": row.geometry.x,
        }
        for _, row in stops.iterrows()
    ]

    # Lines that have an apartment on them today. Only used for the summary
    # printed below -- the page derives the same set in JS, from listings.json.
    listed_lines = sorted(
        {ln for r in apt_records for ln in r["lines"]},
        key=lambda r: (not r[:1].isdigit(), len(r), r),
    )

    # Every line the network has, whether or not anything is for rent on it.
    # This is the difference that makes network.json hold still between daily
    # refreshes: filtering to the listed lines here would make the "constant"
    # file a function of the listings.
    network_lines = {ln for r in stop_records for ln in r["lines"]}

    # Route geometry from 07_fetch_line_shapes.py, as [lat, lon] paths per line
    shapes = {}
    if SHAPES.exists():
        for feature in json.loads(SHAPES.read_text(encoding="utf-8"))["features"]:
            line = feature["properties"]["line"]
            geom = feature["geometry"]
            parts = (
                geom["coordinates"]
                if geom["type"] == "MultiLineString"
                else [geom["coordinates"]]
            )
            shapes[line] = [
                [[round(lat, 6), round(lon, 6)] for lon, lat in part] for part in parts
            ]
        network_lines |= set(shapes)
        print("route geometry for {} lines".format(len(shapes)))
    else:
        print("no route geometry ({} missing) -- run 07_fetch_line_shapes.py".format(
            SHAPES.name
        ))

    # Line colours: the curated table first, the line's own OSM `colour` tag as
    # fallback, then a neutral so a new line is never invisible.
    colours, fallbacks = {}, []
    for line in sorted(network_lines):
        colour = _env.LINE_COLOURS.get(line)
        if not colour:
            colour = (osm_lines.get(line) or {}).get("colour")
            if colour:
                fallbacks.append(line)
        colours[line] = colour or "#6A7784"

    # Noise overlay, if 06_fetch_noise_map.py has been run. `png` stays a bare
    # filename: it is resolved against the document, not against network.json,
    # so it keeps working from data/ one level down.
    noise = None
    if NOISE_BOUNDS.exists():
        meta = json.loads(NOISE_BOUNDS.read_text(encoding="utf-8"))
        if (_env.WEB / meta["png"]).exists():
            noise = {"png": meta["png"], "bounds": meta["bounds"]}

    network = {
        "stops": stop_records,
        "colours": colours,
        "noise": noise,
        "shapes": shapes,
    }
    listings = {"apts": apt_records}

    if data_only:
        # What the daily refresh runs. Re-rendering the shell would churn
        # folium's random element ids into every bot commit, and would put the
        # page's markup at the mercy of whichever folium CI resolved that
        # morning -- for a file whose content had not changed. index.html is
        # reviewed by hand; only the data moves on a schedule.
        write_data(network, listings)
        summarise(apt_records, stop_records, listed_lines, colours, fallbacks)
        return 0

    # tiles=None on purpose: the page carries three grounds (dark, OSM
    # Standard, aerial) and swaps between them in JS, so folium must not add a
    # fourth of its own underneath them.
    #
    # No fit_bounds either. The framing is computed in the browser from the
    # listings that are actually showing -- a build-time extent is baked into
    # the shell, and the shell is not re-rendered by the daily --data-only
    # refresh, so it would slowly drift as listings come and go.
    m = folium.Map(
        location=[apartments.geometry.y.mean(), apartments.geometry.x.mean()],
        zoom_start=12,
        tiles=None,
        control_scale=False,
        zoomControl=True,
    )

    root = m.get_root()
    # plain substitution, not %-formatting -- the CSS is full of literal '%'
    css = CSS.replace("{{MAP}}", m.get_name())
    head_tags, _, style = css.partition("<style>")

    # The <title>, favicon and font links go in the header where they belong.
    root.header.add_child(folium.Element(head_tags))

    # The stylesheet does not. folium appends its own CDN stylesheets --
    # leaflet.css, and Bootstrap 5 -- *after* anything added to the header, so
    # a header stylesheet loses every specificity tie to them. Bootstrap's
    # Reboot sets `body { background-color: #fff }`, which turned the dark
    # ground white, and leaflet.css likewise beat the zoom-control styling.
    # Putting it at the top of the body puts it last in document order, which
    # is where it needs to be to win.
    root.html.add_child(folium.Element("<style>" + style + BODY_HTML))
    # token substitution, not %-formatting: the JS contains literal '%'
    # (modulo, percent labels) that %-formatting would try to interpret
    js = JS
    for token, value in [
        ("{{MAP}}", m.get_name()),
        ("{{INLINE}}", json.dumps(
            {
                "network": network,
                "listings": listings,
                "status": _publish.read_status() or None,
            } if inline else None,
            ensure_ascii=False,
        )),
    ]:
        js = js.replace(token, value)
    root.script.add_child(folium.Element(js))

    out = OFFLINE_OUT if inline else OUT
    m.save(str(out))
    summarise(apt_records, stop_records, listed_lines, colours, fallbacks)
    print("-> {}".format(out))
    if not inline:
        write_data(network, listings)
    return 0


def cli():
    ap = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    # Mutually exclusive: --inline bakes the data in and writes no data/ files,
    # --data-only writes nothing but them.
    mode = ap.add_mutually_exclusive_group()
    mode.add_argument(
        "--inline",
        action="store_true",
        help="bake the data into a self-contained {} for file:// use".format(
            OFFLINE_OUT.name
        ),
    )
    mode.add_argument(
        "--data-only",
        action="store_true",
        help="rewrite data/network.json and data/listings.json without "
             "re-rendering {} -- what the scheduled refresh runs".format(OUT.name),
    )
    return main(**vars(ap.parse_args()))


if __name__ == "__main__":
    raise SystemExit(cli())
