self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("studentrecruit-cache").then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "/search.html",
        "/apply.html",
        "/dashboardaa.html"
        // Add more pages if needed
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
