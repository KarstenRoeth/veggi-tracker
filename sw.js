const CACHE = 'veggi-tracker-v3';

self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  // Delete ALL old caches on activation
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;

  e.respondWith(
    // Always try network first
    fetch(e.request)
      .then(networkResponse => {
        // Store fresh copy in cache for offline fallback
        const clone = networkResponse.clone();
        caches.open(CACHE).then(cache => cache.put(e.request, clone));
        return networkResponse;
      })
      .catch(() => {
        // Network failed (offline) → fall back to cache
        return caches.match(e.request);
      })
  );
});
