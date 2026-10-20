/* The trip guide has been taken offline. This replaces its service worker so
 * devices that installed it drop the cached copy (tickets included) and stop
 * intercepting requests; the next visit then gets the site's 404. */
self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k.startsWith('london-trip-')).map(k => caches.delete(k))))
    .then(() => self.registration.unregister())
    .then(() => self.clients.matchAll({type: 'window'}))
    .then(list => list.forEach(c => c.navigate(c.url))));
});
