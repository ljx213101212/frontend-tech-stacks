// public/service-worker.js

const CACHE_NAME = "my-cache-v1";

const FILES_TO_CACHE = ["/huge-file.txt"];

// Install event
self.addEventListener("install", (event) => {
  console.log("Service Worker: Installing…");

  // By calling `skipWaiting()`, we ensure the SW becomes active immediately
  // after installation (instead of waiting for all old clients to close)
  event.waitUntil(
    (async () => {
      // Open a new cache and add the specified files.
      const cache = await caches.open(CACHE_NAME);
      await cache.addAll(FILES_TO_CACHE);
      // Precache, or do install tasks here if needed
      await self.skipWaiting();
    })()
  );
});

// Activate event
self.addEventListener("activate", (event) => {
  console.log("Service Worker: Activating…");

  // Cleanup old caches, etc.
  event.waitUntil(
    (async () => {
      // Typically you'd do something like:
      const cacheKeys = await caches.keys();
      await Promise.all(
        cacheKeys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log(`Service Worker: Deleting old cache ${key}`);
            return caches.delete(key);
          }
        })
      );
      await self.clients.claim();
    })()
  );
});

// Fetch event (optional)
self.addEventListener("fetch", (event) => {
  // Intercept requests here if you want offline caching, etc.
  // event.respondWith(/* custom response */);
  console.log("Service Worker: Fetching", event.request.url);

  if (FILES_TO_CACHE.includes(new URL(event.request.url).pathname)) {
    event.respondWith(
      (async () => {
        // Try to get a response from the cache.
        const cachedResponse = await caches.match(event.request);
        if (cachedResponse) {
          // If a cached response is found, return it.
          return cachedResponse;
        }

        // Otherwise, fetch from the network.
        try {
          const networkResponse = await fetch(event.request);
          // Optionally, cache the new response for future requests.
          const cache = await caches.open(CACHE_NAME);
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        } catch (error) {
          // If fetch fails (e.g., offline), you could show a custom offline page:
          // return caches.match('/offline.html');
          console.warn("Fetch failed; returning offline page instead.", error);
          throw error;
        }
      })()
    );
  }
});
