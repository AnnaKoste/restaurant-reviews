var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/',
  '/sw.js',
  '/index.html',
  '/restaurant.html',
  '/data/restaurants.json',
  '/js/dbhelper.js',
  '/js/main.js',
  '/js/restaurant_info.js',
  '/css/styles.css',
  '/img/1-320w.jpg',
  '/img/2-320w.jpg',
  '/img/3-320w.jpg',
  '/img/4-320w.jpg',
  '/img/5-320w.jpg',
  '/img/6-320w.jpg',
  '/img/7-320w.jpg',
  '/img/8-320w.jpg',
  '/img/9-320w.jpg',
  '/img/10-320w.jpg'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('activate', function(event) {

  var cacheWhitelist = ['my-site-cache-v1'];
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
