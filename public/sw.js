/* Magyarázó Service Worker v3
   Strategy:
   - HTML  → always network-first (never cache; contains hashed asset refs)
   - /assets/* → cache-first (Vite content-hashes = immutable)
   - everything else → network-first with cache fallback
   - API calls → network only
*/
const CACHE = 'magyarazo-v3'

self.addEventListener('install', () => self.skipWaiting())

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  )
})

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url)

  /* Skip non-GET, SW itself, and external APIs */
  if (event.request.method !== 'GET') return
  if (url.pathname === '/sw.js') return
  if (!url.hostname.includes(self.location.hostname)) return

  /* HTML → always go to network so updated index.html is fetched */
  if (url.pathname === '/' || url.pathname.endsWith('.html')) {
    event.respondWith(
      fetch(event.request).catch(() =>
        caches.match(event.request)
      )
    )
    return
  }

  /* Hashed assets (/assets/*) → cache-first, immutable */
  if (url.pathname.startsWith('/assets/')) {
    event.respondWith(
      caches.open(CACHE).then(cache =>
        cache.match(event.request).then(cached => {
          if (cached) return cached
          return fetch(event.request).then(response => {
            if (response.ok) cache.put(event.request, response.clone())
            return response
          })
        })
      )
    )
    return
  }

  /* Everything else → network-first */
  event.respondWith(
    fetch(event.request)
      .then(response => {
        if (response.ok) {
          caches.open(CACHE).then(c => c.put(event.request, response.clone()))
        }
        return response
      })
      .catch(() => caches.match(event.request))
  )
})
