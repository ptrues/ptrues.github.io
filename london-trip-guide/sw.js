/* Offline cache for the trip guide. The build replaces a2779bf03cda with a
 * content hash and ["./", "app.css", "app.js", "d3.min.js", "data/maps/fri-british-museum.json", "data/maps/fri-dinner.json", "data/maps/fri-honey-and-co.json", "data/maps/fri-return.json", "data/maps/fri-to-aa-bookshop.json", "data/maps/fri-to-british-museum.json", "data/maps/fri-to-charing-cross.json", "data/maps/fri-to-foyles.json", "data/maps/fri-to-lunch.json", "data/maps/fri-to-stanfords.json", "data/maps/fri-to-winston-house.json", "data/maps/fri-winston-house.json", "data/maps/sat-dinner.json", "data/maps/sat-greenwich-park.json", "data/maps/sat-ivy-cafe.json", "data/maps/sat-thames-cruise.json", "data/maps/sat-to-bookshop.json", "data/maps/sat-to-ivy.json", "data/maps/sat-to-market.json", "data/maps/sat-to-pier.json", "data/maps/sun-to-eurostar.json", "data/maps/thu-dinner.json", "data/maps/thu-to-blackheath.json", "data/maps/thu-word-on-the-water.json", "data/trip.json", "icon.svg", "index.html", "manifest.webmanifest", "plans/blackheath_station.jpg", "plans/charing_cross_concourse.png", "plans/london_bridge_lower.png", "plans/museum_ground.png", "plans/museum_upper.png", "plans/stp_circle_floor0.png", "plans/stp_departures_arcade_floor0.png", "plans/stp_eurostar_arrivals.png", "plans/victoria_concourse.png", "tickets/cruise-qr.bin", "tickets/museum-pdf.bin", "tickets/museum-qr-1.bin", "tickets/museum-qr-2.bin", "tickets/tickets.json"] with every served file except the PDF backups,
 * so a new deployment installs a complete new cache and removes the old one. */
const VERSION = 'a2779bf03cda';
const CACHE = 'london-trip-' + VERSION;
const FILES = ["./", "app.css", "app.js", "d3.min.js", "data/maps/fri-british-museum.json", "data/maps/fri-dinner.json", "data/maps/fri-honey-and-co.json", "data/maps/fri-return.json", "data/maps/fri-to-aa-bookshop.json", "data/maps/fri-to-british-museum.json", "data/maps/fri-to-charing-cross.json", "data/maps/fri-to-foyles.json", "data/maps/fri-to-lunch.json", "data/maps/fri-to-stanfords.json", "data/maps/fri-to-winston-house.json", "data/maps/fri-winston-house.json", "data/maps/sat-dinner.json", "data/maps/sat-greenwich-park.json", "data/maps/sat-ivy-cafe.json", "data/maps/sat-thames-cruise.json", "data/maps/sat-to-bookshop.json", "data/maps/sat-to-ivy.json", "data/maps/sat-to-market.json", "data/maps/sat-to-pier.json", "data/maps/sun-to-eurostar.json", "data/maps/thu-dinner.json", "data/maps/thu-to-blackheath.json", "data/maps/thu-word-on-the-water.json", "data/trip.json", "icon.svg", "index.html", "manifest.webmanifest", "plans/blackheath_station.jpg", "plans/charing_cross_concourse.png", "plans/london_bridge_lower.png", "plans/museum_ground.png", "plans/museum_upper.png", "plans/stp_circle_floor0.png", "plans/stp_departures_arcade_floor0.png", "plans/stp_eurostar_arrivals.png", "plans/victoria_concourse.png", "tickets/cruise-qr.bin", "tickets/museum-pdf.bin", "tickets/museum-qr-1.bin", "tickets/museum-qr-2.bin", "tickets/tickets.json"];

self.addEventListener('install', event => {
  // cache: 'reload' bypasses the browser's HTTP cache, so the offline copy is
  // always this deployment's files and never a stale file from an older one.
  event.waitUntil(caches.open(CACHE)
    .then(cache => cache.addAll(FILES.map(f => new Request(f, {cache: 'reload'}))))
    .then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k.startsWith('london-trip-') && k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim())
    .then(() => self.clients.matchAll()).then(list => list.forEach(c => c.postMessage({type: 'cached', version: VERSION}))));
});

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'status') {
    caches.open(CACHE).then(c => c.keys()).then(keys => {
      if (keys.length >= FILES.length) event.source.postMessage({type: 'cached', version: VERSION});
    });
  }
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;
  if (request.mode === 'navigate') {
    // Every journey link is the same page with a different query string.
    event.respondWith(caches.match('index.html', {cacheName: CACHE})
      .then(hit => hit || fetch(request)).catch(() => fetch(request)));
    return;
  }
  event.respondWith(caches.match(request, {cacheName: CACHE, ignoreSearch: true}).then(hit => hit || fetch(request)));
});
