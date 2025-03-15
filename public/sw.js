const CACHE_NAME = 'shooter-game-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/game.css',
  '/Game.js',
  '/Entity.js',
  '/Character.js',
  '/Player.js',
  '/Opponent.js',
  '/Shot.js',
  '/main.js',
  '/assets/bueno.png',
  '/assets/bueno_muerto.png',
  '/assets/malo.png',
  '/assets/malo_muerto.png',
  '/assets/shot1.png',
  '/assets/shot2.png',
  '/assets/game_over.png',
  '/assets/icon-192x192.png',
  '/assets/icon-512x512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});