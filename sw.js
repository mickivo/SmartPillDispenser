const CACHE_NAME = "smartpill-cache-v1";

// Senarai fail asal anda yang akan di-cache supaya pantas dimuatkan
const urlsToCache = [
  "/",
  "/index.html",
  "/schedule.html",
  "/history.html",
  "/settings.html",
  "/setup.html",
  "/style.css",
  "/firebase-config.js"
];

// Proses pemasangan Service Worker
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Proses mendapatkan data apabila pengguna membuka aplikasi
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Pulangkan dari cache jika ada, jika tidak ambil dari internet
        return response || fetch(event.request);
      })
  );
});