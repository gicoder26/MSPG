const CACHE='mspg-v13';
const ASSETS=['./','./index.html','./manifest.json','./icons/icon-192.png','./icons/icon-512.png','./icons/apple-touch-icon.png','./icons/favicon-32.png','./assets/signature.png','./assets/book1-pentatonica.png','./assets/book2-arpegios-m7.png','./assets/book3-drop2-maj7.png','./assets/book4-menor-melodica.png','./assets/book5-chord-melody.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request))));
