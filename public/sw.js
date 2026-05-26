/* Magyarázó Service Worker — offline-first for static assets */
const CACHE = 'magyarazo-v2'

/* On install: cache the app shell */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE).then(cache =>
      cache.addAll(['/', '/index.html'])
    )
  )
  self.skipWaiting()
})

/* On activate: remove old caches */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE).map(k => caches.delete(k))
      )
    )
  )
  self.clients.claim()
})

/* On fetch: stale-while-revalidate for same-origin assets,
   network-only for external API calls */
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url)

  /* Skip non-GET, the SW file itself, and cross-origin API calls */
  if (event.request.method !== 'GET') return
  if (url.pathname === '/sw.js') return
  if (
    url.hostname.includes('generativelanguage.googleapis.com') ||
    url.pathname.startsWith('/api/')
  ) return

  event.respondWith(
    caches.open(CACHE).then(cache =>
      cache.match(event.request).then(cached => {
        const networkFetch = fetch(event.request).then(response => {
          if (response.ok) cache.put(event.request, response.clone())
          return response
        }).catch(() => cached) /* offline fallback */

        return cached || networkFetch
      })
    )
  )
})
