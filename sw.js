const CACHE_NAME = 'lettore-offline-v1';
const RISORSE = [
    './',
    './index.html',
    'https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js'
];

// Installazione: salva i file in cache
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(RISORSE);
        })
    );
});

// Intercettazione: se non c'è internet, usa la cache
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((res) => {
            return res || fetch(e.request);
        })
    );
});