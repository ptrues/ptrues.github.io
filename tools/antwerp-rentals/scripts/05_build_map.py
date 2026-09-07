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
The chrome borrows from De Lijn / premetro wayfinding rather than from dashboard
UI: a dark blade pinned across the top edge carrying the line bullets, flat
panels with no radius and no drop shadows, De Lijn yellow spent exactly once (on
the apartment you have open). Numbers are set in Source Code Pro and names in
Noto Sans, so the two faces divide the work rather than decorate it.

Rent is encoded in the marker fill as a single-hue value ramp -- pale steel for
the cheapest, premetro blue-black for the dearest, i.e. more ink means more
money. There is deliberately no legend and no permanent price label; the exact
figure appears on hover.
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

CSS = """
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600&family=Source+Code+Pro:wght@400;500;600&display=swap" rel="stylesheet">
<style>
  :root {
    --blade:   #0E1A24;   /* premetro signage blue-black */
    --blade-2: #1B2A36;
    --paper:   #FFFFFF;
    --ash:     #6A7784;
    --rule:    #DCE1E6;
    --signal:  #FFCE00;   /* De Lijn yellow - used once, for the open listing */
    --alert:   #B4361F;   /* staleness banner - the only other loud colour */
    --sans: "Noto Sans", system-ui, sans-serif;
    --mono: "Source Code Pro", ui-monospace, monospace;
    --blade-h: 46px;
    --side-w: 380px;
    --stale-h: 0px;   /* the staleness banner takes no room until it is shown */
  }
  /* Set on <body> so it cascades to the map div and the banner alike. */
  body.is-stale { --stale-h: 32px; }
  html, body { margin: 0; height: 100%; font-family: var(--sans); color: var(--blade); }
  body { overflow: hidden; }
  /* folium writes the map div's geometry inline, so pin it by id */
  #{{MAP}} {
    position: absolute !important;
    top: calc(var(--blade-h) + var(--stale-h)) !important; right: 0 !important;
    bottom: 0 !important; left: 0 !important;
    width: auto !important; height: auto !important;
  }

  /* ---- the blade ------------------------------------------------------- */
  #blade {
    position: absolute; top: 0; left: 0; right: 0; height: var(--blade-h);
    z-index: 1200; display: flex; align-items: stretch; gap: 0;
    background: var(--blade); color: #fff;
  }
  #toggle-all {
    /* fixed width: the label swaps between "Select all" and "Deselect all",
       and without this the blade reflows and the bullets slide under the
       cursor between clicks */
    flex: none; width: 108px; padding: 0 14px; border: 0;
    border-right: 1px solid #24313D;
    background: transparent; color: #fff;
    font-family: var(--sans); font-size: 13px; cursor: pointer;
  }
  #toggle-all:hover { background: var(--blade-2); }
  #bullets {
    flex: 1 1 auto; display: flex; align-items: center; gap: 6px;
    padding: 0 12px; overflow-x: auto; scrollbar-width: none;
  }
  #bullets::-webkit-scrollbar { display: none; }
  .bullet {
    flex: none; width: 30px; height: 30px; padding: 0; border: 0;
    border-radius: 50%; cursor: pointer;
    font-family: var(--mono); font-size: 12px; font-weight: 600;
    font-variant-numeric: tabular-nums;
    opacity: .28; filter: saturate(.2);
    transition: opacity .12s, filter .12s;
  }
  .bullet.on { opacity: 1; filter: none; }
  .bullet:hover { opacity: .8; }
  .bullet.on:hover { opacity: 1; }
  #count {
    flex: none; display: flex; align-items: center; padding: 0 14px;
    border-left: 1px solid #24313D;
    font-family: var(--mono); font-size: 13px; font-variant-numeric: tabular-nums;
    color: #fff;
  }
  #count s { color: #6E7F8E; text-decoration: none; }
  /* Always present once status.json is read, stale or not: a dashboard that
     never says how old it is invites you to assume it is current. */
  #asof {
    flex: none; display: flex; align-items: center; padding: 0 14px;
    border-left: 1px solid #24313D;
    font-family: var(--sans); font-size: 12px; color: #8B99A6;
    white-space: nowrap;
  }
  #asof:empty { display: none; }
  body.is-stale #asof { color: #F0B7AA; }
  /* Sits between the blade and the map rather than over it: an overlay can be
     dismissed or scrolled away from, and this must not be. */
  #stale {
    position: absolute; top: var(--blade-h); left: 0; right: 0;
    height: var(--stale-h); z-index: 1150;
    display: flex; align-items: center; gap: 8px; padding: 0 14px;
    background: var(--alert); color: #fff;
    font-family: var(--sans); font-size: 12px; line-height: 1.2;
    overflow: hidden;
  }
  #stale b { font-weight: 600; }
  #blade :focus-visible, #sidebar :focus-visible {
    outline: 2px solid var(--signal); outline-offset: -2px;
  }

  /* ---- markers --------------------------------------------------------- */
  .apt-dot {
    width: 14px; height: 14px; border-radius: 50%;
    border: 1.5px solid rgba(14,26,36,.9);
    box-shadow: 0 0 0 1.5px rgba(255,255,255,.85);
    cursor: pointer; transition: transform .1s;
  }
  .apt-marker:hover .apt-dot { transform: scale(1.3); }
  .apt-marker.is-open .apt-dot {
    background: var(--signal) !important;
    border-color: var(--blade); transform: scale(1.45);
    box-shadow: 0 0 0 2px rgba(255,255,255,.9), 0 0 0 5px rgba(255,206,0,.35);
  }
  .stop-dot {
    width: 7px; height: 7px; border-radius: 50%;
    border: 1px solid rgba(255,255,255,.95);
    box-shadow: 0 0 0 .5px rgba(14,26,36,.45);
  }

  /* ---- hover label ----------------------------------------------------- */
  .apt-label.leaflet-tooltip {
    background: var(--blade); color: #fff;
    border: 0; border-radius: 2px; box-shadow: none;
    padding: 5px 8px; white-space: nowrap;
    font-family: var(--mono); font-size: 12px; font-weight: 600;
    font-variant-numeric: tabular-nums;
  }
  .apt-label.leaflet-tooltip::before { border-right-color: var(--blade); }
  .apt-label i {
    font-family: var(--sans); font-style: normal; font-weight: 400;
    font-size: 11px; color: #A8B6C2; padding-left: 6px;
  }

  /* ---- layers control, bottom left ------------------------------------- */
  #layers {
    position: absolute; left: 0; bottom: 0; z-index: 1200;
    background: var(--blade); color: #fff; font-size: 13px;
  }
  #basemap { display: flex; }
  #basemap button {
    flex: 1; padding: 9px 16px; border: 0; background: transparent; color: #93A3B1;
    font-family: var(--sans); font-size: 13px; cursor: pointer;
  }
  #basemap button + button { border-left: 1px solid #24313D; }
  #basemap button:hover { color: #fff; }
  #basemap button.on { background: var(--blade-2); color: #fff; }
  #noise { border-top: 1px solid #24313D; padding: 9px 16px; }
  #noise label { display: flex; align-items: center; gap: 8px; cursor: pointer; }
  #noise input[type=checkbox] { accent-color: var(--signal); margin: 0; }
  #opacity { display: none; align-items: center; gap: 10px; padding-top: 9px; }
  #noise.on #opacity { display: flex; }
  #opacity input[type=range] {
    width: 118px; accent-color: var(--signal); margin: 0; cursor: pointer;
  }
  #opacity output {
    font-family: var(--mono); font-size: 12px; font-variant-numeric: tabular-nums;
    color: #93A3B1; min-width: 34px; text-align: right;
  }
  #layers :focus-visible { outline: 2px solid var(--signal); outline-offset: -2px; }

  /* ---- sidebar --------------------------------------------------------- */
  #sidebar {
    position: absolute; top: var(--blade-h); right: 0; bottom: 0;
    width: var(--side-w); z-index: 1100;
    background: var(--paper); border-left: 1px solid var(--blade);
    transform: translateX(100%); transition: transform .2s ease;
    overflow-y: auto; overscroll-behavior: contain;
  }
  body.sidebar-open #sidebar { transform: translateX(0); }
  #close {
    position: absolute; top: 8px; right: 8px; z-index: 2;
    width: 28px; height: 28px; padding: 0; border: 0;
    background: var(--blade); color: #fff;
    font-size: 15px; line-height: 28px; cursor: pointer;
  }
  /* ---- photo carousel --------------------------------------------------- */
  #gallery { position: relative; background: #E7EBEF; }
  #photo { width: 100%; height: 240px; object-fit: cover; display: block; }
  .step {
    position: absolute; top: 0; bottom: 0; width: 44px; padding: 0; border: 0;
    background: transparent; color: #fff; font-size: 22px; line-height: 1;
    cursor: pointer; opacity: 0; transition: opacity .12s;
    text-shadow: 0 1px 6px rgba(14,26,36,.9);
  }
  #gallery:hover .step, .step:focus-visible { opacity: 1; }
  #prev { left: 0; }
  #next { right: 0; }
  #frame {
    position: absolute; left: 8px; bottom: 8px;
    padding: 3px 7px; background: var(--blade); color: #fff;
    font-family: var(--mono); font-size: 11px; font-variant-numeric: tabular-nums;
  }
  #gallery.single .step, #gallery.single #frame { display: none; }
  #body { padding: 18px 20px 24px; }
  #price {
    font-family: var(--mono); font-size: 30px; font-weight: 600;
    font-variant-numeric: tabular-nums; letter-spacing: -.01em;
  }
  #price em {
    font-family: var(--sans); font-style: normal;
    font-size: 13px; font-weight: 400; color: var(--ash); padding-left: 6px;
  }
  #addr { font-size: 15px; margin-top: 6px; }
  #desc {
    font-size: 13px; line-height: 1.5; color: var(--ash);
    margin-top: 8px; max-width: 46ch;
  }
  #facts {
    display: grid; grid-template-columns: auto 1fr; gap: 8px 16px;
    margin: 18px 0 0; padding-top: 16px; border-top: 1px solid var(--rule);
  }
  #facts dt { font-size: 13px; color: var(--ash); }
  #facts dd {
    margin: 0; text-align: right;
    font-family: var(--mono); font-size: 13px; font-variant-numeric: tabular-nums;
  }
  #facts dd.name { font-family: var(--sans); }
  #sidelines { display: flex; flex-wrap: wrap; gap: 5px; justify-content: flex-end; }
  #sidelines b {
    width: 22px; height: 22px; border-radius: 50%; display: inline-flex;
    align-items: center; justify-content: center;
    font-family: var(--mono); font-size: 11px; font-weight: 600;
  }
  #link {
    display: block; margin-top: 20px; padding: 12px; text-align: center;
    font-size: 14px; color: #fff; background: var(--blade); text-decoration: none;
  }
  #link:hover { background: var(--blade-2); }

  @media (max-width: 720px) {
    #sidebar { top: auto; width: 100%; height: 62%; border-left: 0;
               border-top: 1px solid var(--blade); }
    #photo { height: 150px; }
  }
  @media (prefers-reduced-motion: reduce) {
    #sidebar, .apt-dot, .bullet { transition: none; }
  }
  /* Shown only if data/*.json cannot be loaded. Without this a fetch failure
     leaves an empty basemap with no explanation. */
  #loaderr {
    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
    z-index: 1200; max-width: 30rem; padding: 1rem 1.25rem;
    background: var(--blade); color: var(--paper);
    font: 400 0.875rem/1.5 'Noto Sans', system-ui, sans-serif;
  }
</style>
"""

BODY_HTML = """
<div id="loaderr" hidden></div>
<header id="blade">
  <button id="toggle-all" type="button"></button>
  <div id="bullets"></div>
  <div id="asof"></div>
  <div id="count"></div>
</header>
<div id="stale" role="status" hidden></div>
<div id="layers">
  <div id="basemap">
    <button type="button" data-base="osm" class="on">Map</button>
    <button type="button" data-base="aerial">Aerial</button>
  </div>
  <div id="noise">
    <label><input type="checkbox" id="noise-on"> Road noise</label>
    <div id="opacity">
      <input type="range" id="noise-opacity" min="10" max="100" step="5" value="60"
             aria-label="Noise layer opacity">
      <output for="noise-opacity" id="noise-pct">60%</output>
    </div>
  </div>
</div>
<aside id="sidebar" aria-hidden="true">
  <button id="close" type="button" aria-label="Close">&times;</button>
  <div id="gallery">
    <img id="photo" alt="">
    <button id="prev" class="step" type="button" aria-label="Previous photo">&lsaquo;</button>
    <button id="next" class="step" type="button" aria-label="Next photo">&rsaquo;</button>
    <div id="frame"></div>
  </div>
  <div id="body">
    <div id="price"></div>
    <div id="addr"></div>
    <div id="desc"></div>
    <dl id="facts"></dl>
    <a id="link" href="#" target="_blank" rel="noopener">Open on Immoweb</a>
  </div>
</aside>
"""

# folium renders this block above its own map constructor, so the code waits for
# window load -- by then the map variable exists as a global.
JS = """
/* The data arrives either baked into the page (--inline) or fetched from
   data/*.json; the loader at the bottom decides which. Either way init() is
   handed the same two objects, so nothing below this line knows the
   difference. */
function init(map, network, listings) {
  var APTS = listings.apts;
  var STOPS = network.stops;
  var COLOURS = network.colours;
  var NOISE = network.noise;

  /* '0'-'9' is 48-57; the only non-numbered lines are A3 and A9. */
  function numbered(x) { var c = x.charCodeAt(0); return c >= 48 && c <= 57; }

  /* LINES and SHAPES are narrowed here rather than shipped ready-made. The
     bullet bar and the drawn routes have always covered the lines that
     currently have an apartment on them, not the whole network -- but that
     makes them a function of the listings, which is exactly what network.json
     must not be. So network.json carries every line the network has and this
     narrows it to today's. Sort order matches sort_lines() in 04: numbered
     lines first, then by length, then lexicographically. */
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
  LINES.forEach(function (l) {
    if (network.shapes[l]) { SHAPES[l] = network.shapes[l]; }
  });

  map.invalidateSize();

  /* Routes sit above the noise overlay (overlayPane, 400) but below the
     markers (markerPane, 600) so a dot is never hidden by its own line. */
  map.createPane('routes');
  map.getPane('routes').style.zIndex = 450;
  map.getPane('routes').style.pointerEvents = 'none';

  /* ---- basemap: OSM Standard <-> aerial --------------------------------- */
  /* Esri World Imagery rather than Google: Google's tile endpoints are not
     licensed for use outside their own APIs. */
  var aerial = L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    {
      maxZoom: 19,
      zIndex: 2,
      attribution: 'Imagery &copy; Esri, Maxar, Earthstar Geographics'
    }
  );

  Array.prototype.forEach.call(
    document.querySelectorAll('#basemap button'),
    function (b) {
      b.onclick = function () {
        if (b.dataset.base === 'aerial') { aerial.addTo(map); }
        else { map.removeLayer(aerial); }
        Array.prototype.forEach.call(
          document.querySelectorAll('#basemap button'),
          function (o) { o.classList.toggle('on', o === b); }
        );
      };
    }
  );

  /* ---- noise overlay ---------------------------------------------------- */
  var noiseBox = document.getElementById('noise');
  if (!NOISE) {
    noiseBox.style.display = 'none';
  } else {
    var noiseLayer = L.imageOverlay(NOISE.png, NOISE.bounds, {
      opacity: 0.6,
      zIndex: 3,
      interactive: false,
      attribution:
        'Noise: Strategische geluidsbelastingskaart 2021 &copy; Departement Omgeving, Vlaanderen'
    });
    var box = document.getElementById('noise-on');
    var slider = document.getElementById('noise-opacity');
    var pct = document.getElementById('noise-pct');

    box.onchange = function () {
      noiseBox.classList.toggle('on', box.checked);
      if (box.checked) { noiseLayer.addTo(map); } else { map.removeLayer(noiseLayer); }
    };
    slider.oninput = function () {
      noiseLayer.setOpacity(slider.value / 100);
      pct.textContent = slider.value + '%';
    };
  }

  var selected = new Set(LINES);
  var aptLayer = L.layerGroup().addTo(map);
  var stopLayer = L.layerGroup().addTo(map);
  var markers = {};
  var open = null;

  var euro = function (v) {
    return v == null ? '\\u2014' : '\\u20ac' + v.toLocaleString('en-GB');
  };

  /* ---- rent -> marker fill -------------------------------------------- */
  /* Single-hue value ramp: pale steel = cheapest, blade blue-black = dearest.
     More ink means more money, so it needs no legend.

     Position on the ramp comes from the rent's rank in the data, not from its
     raw value: these rents pile up between 950 and 1100 with a thin tail down
     to 450, and a linear domain would push nine listings in ten into the same
     near-black. Ranking spreads the ramp across the distribution that is
     actually on screen. */
  var RAMP = [[201, 214, 225], [104, 138, 164], [14, 26, 36]];
  var sortedRents = APTS.map(function (a) { return a.rent_eur; })
                        .filter(function (v) { return v != null; })
                        .sort(function (a, b) { return a - b; });

  function rentColour(v) {
    if (v == null || sortedRents.length < 2) { return 'rgb(104,138,164)'; }
    /* share of listings cheaper than this one, midpoint of any tied run */
    var lo = sortedRents.indexOf(v);
    var hi = sortedRents.lastIndexOf(v);
    var t = ((lo + hi) / 2) / (sortedRents.length - 1);
    var i = t <= 0.5 ? 0 : 1;
    var f = t <= 0.5 ? t / 0.5 : (t - 0.5) / 0.5;
    var a = RAMP[i], b = RAMP[i + 1];
    return 'rgb(' + a.map(function (c, k) {
      return Math.round(c + (b[k] - c) * f);
    }).join(',') + ')';
  }

  function ink(hex) {  /* readable text on a line-colour bullet */
    var h = hex.replace('#', '');
    if (h.length === 3) { h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2]; }
    var r = parseInt(h.slice(0, 2), 16) / 255,
        g = parseInt(h.slice(2, 4), 16) / 255,
        b = parseInt(h.slice(4, 6), 16) / 255;
    var lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    return lum > 0.55 ? '#0E1A24' : '#FFFFFF';
  }

  /* ---- markers --------------------------------------------------------- */
  APTS.forEach(function (a) {
    var m = L.marker([a.lat, a.lon], {
      icon: L.divIcon({
        className: 'apt-marker',
        html: '<div class="apt-dot" style="background:' + rentColour(a.rent_eur) + '"></div>',
        iconSize: [14, 14],
        iconAnchor: [7, 7]
      }),
      riseOnHover: true,
      keyboard: false
    });
    /* Price on hover only -- permanent labels bury the map. */
    m.bindTooltip(
      euro(a.rent_eur) + (a.street ? '<i>' + a.street + '</i>' : ''),
      { direction: 'right', offset: [10, 0], className: 'apt-label', sticky: false }
    );
    m.on('click', function () { openListing(a, m); });
    markers[a.id] = m;
  });

  /* ---- route geometry --------------------------------------------------- */
  /* Each line is drawn twice: a casing underneath for legibility on both
     basemaps, then the line in its own colour. Light lines (11 is white) get
     a dark casing instead of a light one, or they vanish. */
  var routeLayer = L.layerGroup().addTo(map);
  var routes = {};
  Object.keys(SHAPES).forEach(function (line) {
    var colour = COLOURS[line] || '#6A7784';
    var pale = ink(colour) === '#0E1A24';
    routes[line] = L.layerGroup([
      L.polyline(SHAPES[line], {
        pane: 'routes', color: pale ? '#0E1A24' : '#FFFFFF',
        weight: 6, opacity: pale ? 0.35 : 0.5, lineCap: 'round', interactive: false
      }),
      L.polyline(SHAPES[line], {
        pane: 'routes', color: colour,
        weight: 3, opacity: 0.95, lineCap: 'round', interactive: false
      })
    ]);
  });

  STOPS.forEach(function (s) {
    var c = COLOURS[s.lines[0]] || '#6A7784';
    s.marker = L.marker([s.lat, s.lon], {
      icon: L.divIcon({
        className: 'stop-marker',
        html: '<div class="stop-dot" style="background:' + c + '"></div>',
        iconSize: [7, 7],
        iconAnchor: [3.5, 3.5]
      }),
      interactive: false,
      keyboard: false
    });
  });

  /* ---- filtering ------------------------------------------------------- */
  function matches(lines) {
    for (var i = 0; i < lines.length; i++) {
      if (selected.has(lines[i])) { return true; }
    }
    return false;
  }

  function render() {
    aptLayer.clearLayers();
    stopLayer.clearLayers();
    routeLayer.clearLayers();
    var shown = 0;
    Object.keys(routes).forEach(function (line) {
      if (selected.has(line)) { routeLayer.addLayer(routes[line]); }
    });
    APTS.forEach(function (a) {
      if (matches(a.lines)) { aptLayer.addLayer(markers[a.id]); shown++; }
    });
    STOPS.forEach(function (s) {
      if (matches(s.lines)) { stopLayer.addLayer(s.marker); }
    });

    document.getElementById('count').innerHTML =
      shown + '<s>/' + APTS.length + '</s>';
    if (open && !matches(open.lines)) { closeListing(); }

    var all = selected.size === LINES.length;
    document.getElementById('toggle-all').textContent = all ? 'Deselect all' : 'Select all';
    Array.prototype.forEach.call(document.querySelectorAll('.bullet'), function (b) {
      var on = selected.has(b.dataset.line);
      b.classList.toggle('on', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
  }

  var bullets = document.getElementById('bullets');
  LINES.forEach(function (line) {
    var colour = COLOURS[line] || '#6A7784';
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'bullet on';
    b.dataset.line = line;
    b.textContent = line;
    b.title = 'Tram ' + line;
    b.style.background = colour;
    b.style.color = ink(colour);
    if (ink(colour) === '#0E1A24') { b.style.boxShadow = 'inset 0 0 0 1px rgba(14,26,36,.35)'; }
    b.onclick = function () {
      if (selected.has(line)) { selected.delete(line); } else { selected.add(line); }
      render();
    };
    bullets.appendChild(b);
  });

  document.getElementById('toggle-all').onclick = function () {
    if (selected.size === LINES.length) { selected.clear(); }
    else { selected = new Set(LINES); }
    render();
  };

  /* ---- photo carousel --------------------------------------------------- */
  /* Photos stay on Immoweb's CDN; these are plain hot-links, nothing is
     copied locally. The search endpoint returns four shots per listing. */
  var gallery = document.getElementById('gallery');
  var photo = document.getElementById('photo');
  var frame = document.getElementById('frame');
  var shots = [];
  var shot = 0;

  function paint() {
    if (!shots.length) { return; }
    shot = (shot + shots.length) % shots.length;
    photo.src = shots[shot];
    frame.textContent = (shot + 1) + '/' + shots.length;
  }

  function showPhotos(a) {
    shots = (a.photos || '').split('|').filter(Boolean);
    if (!shots.length && (a.image_large || a.image)) {
      shots = [a.image_large || a.image];
    }
    shot = 0;
    gallery.classList.toggle('single', shots.length < 2);
    gallery.style.display = shots.length ? 'block' : 'none';
    paint();
  }

  document.getElementById('prev').onclick = function (e) {
    e.stopPropagation(); shot--; paint();
  };
  document.getElementById('next').onclick = function (e) {
    e.stopPropagation(); shot++; paint();
  };

  /* ---- sidebar --------------------------------------------------------- */
  var facts = document.getElementById('facts');

  function row(label, value, isName) {
    if (value == null || value === '') { return; }
    var dt = document.createElement('dt');
    dt.textContent = label;
    var dd = document.createElement('dd');
    if (isName) { dd.className = 'name'; }
    if (value instanceof Node) { dd.appendChild(value); } else { dd.textContent = value; }
    facts.appendChild(dt);
    facts.appendChild(dd);
  }

  function openListing(a, marker) {
    open = a;
    Object.keys(markers).forEach(function (id) {
      if (markers[id]._icon) {
        markers[id]._icon.classList.toggle('is-open', id === String(a.id));
      }
    });

    showPhotos(a);

    document.getElementById('price').innerHTML =
      euro(a.rent_eur) + '<em>per month' +
      (a.costs_eur ? ', plus ' + euro(a.costs_eur) + ' costs' : '') + '</em>';
    document.getElementById('addr').textContent =
      [a.street, a.place || a.locality].filter(Boolean).join(', ');
    document.getElementById('desc').textContent = a.title || '';

    facts.innerHTML = '';
    row('Bedrooms', a.bedrooms);
    row('Surface', a.surface_m2 ? a.surface_m2 + ' m\\u00b2' : null);
    row('Rent per m\\u00b2', a.eur_per_m2 ? euro(a.eur_per_m2) : null);
    row('Floor', a.floor);
    row('Nearest stop', a.nearest_stop, true);
    row('Walk to stop', a.nearest_stop_m + ' m');
    var box = document.createElement('div');
    box.id = 'sidelines';
    a.lines.forEach(function (l) {
      var c = COLOURS[l] || '#6A7784';
      var el = document.createElement('b');
      el.textContent = l;
      el.style.background = c;
      el.style.color = ink(c);
      if (ink(c) === '#0E1A24') { el.style.boxShadow = 'inset 0 0 0 1px rgba(14,26,36,.35)'; }
      box.appendChild(el);
    });
    row('Lines within 800 m', box);
    /* Immoweb reports a private landlord as the literal "PRIVATE" */
    row('Listed by',
        a.agency && a.agency.toUpperCase() === 'PRIVATE' ? 'Private owner' : a.agency,
        true);

    document.getElementById('link').href = a.url;
    document.body.classList.add('sidebar-open');
    document.getElementById('sidebar').setAttribute('aria-hidden', 'false');
  }

  function closeListing() {
    open = null;
    document.body.classList.remove('sidebar-open');
    document.getElementById('sidebar').setAttribute('aria-hidden', 'true');
    Object.keys(markers).forEach(function (id) {
      if (markers[id]._icon) { markers[id]._icon.classList.remove('is-open'); }
    });
  }

  document.getElementById('close').onclick = closeListing;
  map.on('click', closeListing);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { closeListing(); return; }
    if (!open || shots.length < 2) { return; }
    if (e.key === 'ArrowLeft') { shot--; paint(); }
    if (e.key === 'ArrowRight') { shot++; paint(); }
  });

  render();
}

/* Anything past this is treated as stale. Comfortably longer than the daily
   refresh interval, so one late or skipped run does not cry wolf, but short
   enough that two missed runs always do. */
var STALE_HOURS = 36;

/* status.json is written by 03 and 04, not by 05, so it survives a failed run
   -- which is the only run that really needs it. Everything here is about
   saying plainly how old the listings are. A dashboard that shows yesterday's
   market as today's is worse than the honest static snapshot it replaced. */
function showStatus(map, status) {
  var asof = document.getElementById('asof');
  var banner = document.getElementById('stale');

  if (!status) {
    warn('Could not read the refresh status, so the age of this data is '
         + 'unknown.');
    return;
  }

  var when = status.fetched_at ? new Date(status.fetched_at) : null;
  var ageH = when ? (Date.now() - when.getTime()) / 3600000 : null;

  if (when) {
    asof.textContent = 'as of ' + when.toLocaleDateString('en-GB',
      { day: 'numeric', month: 'short' });
    asof.title = 'Listings fetched ' + when.toLocaleString('en-GB')
      + (status.checked_at ? '\\nLast checked ' + new Date(status.checked_at)
          .toLocaleString('en-GB') : '');
  }

  if (status.error) {
    warn('The last refresh failed: ' + status.error);
  } else if (status.complete === false) {
    warn('The last refresh was cut short, so listings may be missing.');
  } else if (!when) {
    warn('This data has no recorded fetch time, so its age is unknown.');
  } else if (ageH > STALE_HOURS) {
    warn('The daily refresh has not run for '
         + Math.floor(ageH / 24) + ' days.');
  }

  function warn(why) {
    asof.textContent = asof.textContent || 'age unknown';
    banner.innerHTML = '<b>Out of date.</b> ';
    banner.appendChild(document.createTextNode(
      why + (when ? ' Showing the last good snapshot, from '
        + when.toLocaleString('en-GB') + '.' : '')
    ));
    banner.hidden = false;
    document.body.classList.add('is-stale');
    map.invalidateSize();   /* the banner just took 32px off the map */
  }
}

window.addEventListener('load', function () {
  var map = {{MAP}};
  var INLINE = {{INLINE}};

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


def main(inline=False):
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

    m = folium.Map(
        location=[apartments.geometry.y.mean(), apartments.geometry.x.mean()],
        zoom_start=13,
        tiles="OpenStreetMap",  # OSM Standard
        control_scale=False,
        zoomControl=True,
    )
    bounds = apartments.total_bounds  # minx, miny, maxx, maxy
    m.fit_bounds([[bounds[1], bounds[0]], [bounds[3], bounds[2]]], padding=(40, 40))

    network = {
        "stops": stop_records,
        "colours": colours,
        "noise": noise,
        "shapes": shapes,
    }
    listings = {"apts": apt_records}

    root = m.get_root()
    # plain substitution, not %-formatting -- the CSS is full of literal '%'
    root.header.add_child(folium.Element(CSS.replace("{{MAP}}", m.get_name())))
    root.html.add_child(folium.Element(BODY_HTML))
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
    if not inline:
        DATA_DIR.mkdir(parents=True, exist_ok=True)
        # network.json compact: it is machine-only, rarely rewritten, and mostly
        # route coordinates that one-per-line indentation would inflate badly.
        # listings.json indented: it is committed daily, so diffs are read.
        write_json(NETWORK_JSON, network, indent=None)
        write_json(LISTINGS_JSON, listings, indent=1)

    print("{} apartments, {} stops".format(len(apt_records), len(stop_records)))
    print("lines: " + ", ".join("{} {}".format(l, colours[l]) for l in listed_lines))
    if fallbacks:
        print("OSM colour fallback used for: " + ", ".join(fallbacks))
    print("-> {}".format(out))
    if not inline:
        print("-> {}".format(NETWORK_JSON))
        print("-> {}".format(LISTINGS_JSON))
    return 0


def cli():
    ap = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    ap.add_argument(
        "--inline",
        action="store_true",
        help="bake the data into a self-contained {} for file:// use".format(
            OFFLINE_OUT.name
        ),
    )
    return main(**vars(ap.parse_args()))


if __name__ == "__main__":
    raise SystemExit(cli())
