importScripts('workbox-sw.js');

var workboxSW = new WorkboxSW({ clientsClaim: true, skipWaiting: true });

workboxSW.precache([]);

workboxSW.router.registerRoute(
    '/',
    workboxSW.strategies.staleWhileRevalidate()
);

workboxSW.router.registerRoute('https://fonts.googleapis.com/(.*)',
    workboxSW.strategies.cacheFirst({
        cacheName: 'googleapis',
        cacheExpiration: {
            maxEntries: 1
        },
        cacheableResponse: {statuses: [0, 200]}
    })
);
