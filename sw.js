const CACHE_NAME = 'scanner-gold-v1';
const RISORSE = [
    './',
    './index.html',
    './manifest.json',
    'https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js',
    'https://cdn-icons-png.flaticon.com/512/7075/7075315.png'
];

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(RISORSE))
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((res) => res || fetch(e.request))
    );
});