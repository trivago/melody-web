importScripts('workbox-sw.js');

var workboxSW = new WorkboxSW({ clientsClaim: true, skipWaiting: true });

workboxSW.precache([
  {
    "url": "apple-touch-icon.png",
    "revision": "65006c258fada2dc199e95baa251aece"
  },
  {
    "url": "docs/advanced/actions.md",
    "revision": "3b6371955864374038e88b689185830b"
  },
  {
    "url": "docs/advanced/hoc.md",
    "revision": "50cc4f74941fd1194514f8bcfc72f676"
  },
  {
    "url": "docs/advanced/intro.md",
    "revision": "04f4d23ebddc5ab4d574752cc5fa7534"
  },
  {
    "url": "docs/advanced/jsx.md",
    "revision": "738185cc3d05a5b136f2a6b11aa17f8e"
  },
  {
    "url": "docs/advanced/lifecycle.md",
    "revision": "dfd51edf58cacb3f798d2dcb62b8ac9e"
  },
  {
    "url": "docs/advanced/middleware.md",
    "revision": "274e721ccc85d524ed86ddf6bac974e5"
  },
  {
    "url": "docs/advanced/mixins.md",
    "revision": "f6391f2191b142cb8f18a87184d28b99"
  },
  {
    "url": "docs/advanced/passing-actions.md",
    "revision": "d4afb527fb076a18b44ae4c4fe2df70e"
  },
  {
    "url": "docs/advanced/reducers.md",
    "revision": "1adc8bc8363d0248aaadcaeccdd43745"
  },
  {
    "url": "docs/components/intro.md",
    "revision": "c427c2b55a4f75ed5d228eac7227591b"
  },
  {
    "url": "docs/quickstart/events.md",
    "revision": "7a9670d76c8db32b28848e5e834bf373"
  },
  {
    "url": "docs/quickstart/getting-started.md",
    "revision": "4402746daa4e576de17fcc673cb49736"
  },
  {
    "url": "docs/quickstart/intro.md",
    "revision": "7142d6fb390a2296aaae4f46a9acf4e3"
  },
  {
    "url": "docs/quickstart/rendering.md",
    "revision": "1162de8807390bc821ab6d6310082a69"
  },
  {
    "url": "docs/quickstart/state-lifecycle.md",
    "revision": "5a63395fa29f8fcedb5cabdeec709a92"
  },
  {
    "url": "docs/quickstart/twig.md",
    "revision": "0aa911c31c7e143c144e33fbae06503d"
  },
  {
    "url": "docs/README.md",
    "revision": "3f331b1366cd8c3bcc1ac50381e7d95b"
  },
  {
    "url": "docs/redux/connect.md",
    "revision": "9a86e13f8b2344cb45180dbc27e0ccfb"
  },
  {
    "url": "docs/redux/intro.md",
    "revision": "3b6784925e5818a2847ce07521ec9235"
  },
  {
    "url": "docs/redux/provide.md",
    "revision": "a861be0aa53b5a0cdccee1bbef5580f5"
  },
  {
    "url": "docs/redux/redux-saga.md",
    "revision": "5bd80304e12bf8085f755d6b044d3abd"
  },
  {
    "url": "docs/redux/redux-thunk.md",
    "revision": "61c223d0ab3fb8129fcd8d0f50af62af"
  },
  {
    "url": "docs/SUMMARY.md",
    "revision": "4ab972e3ade4ee0874a8b9d382cd843f"
  },
  {
    "url": "docs/test/intro.md",
    "revision": "424b85bbe0d4eb654baab920a11bd94b"
  },
  {
    "url": "docs/test/jest_transform.md",
    "revision": "af9c27d5241ae0859aface5620639ee8"
  },
  {
    "url": "docs/test/snapshot.md",
    "revision": "a51214ff213960c18e2d56961f6923e7"
  },
  {
    "url": "docs/tutorials/dummy-component.md",
    "revision": "9e57560ea8efb79ccd0af93cbf73220a"
  },
  {
    "url": "docs/twig/attributes.md",
    "revision": "29b8d6333e3ffba28d0377cfff658532"
  },
  {
    "url": "docs/twig/classes.md",
    "revision": "08ed4f321a95bb3891b8c73fcd1cf1cf"
  },
  {
    "url": "docs/twig/intro.md",
    "revision": "539fa5c85391f6592571df8762f3bebc"
  },
  {
    "url": "docs/twig/loops.md",
    "revision": "ba79b5f67b1de7619ab4849d9b421bba"
  },
  {
    "url": "docs/twig/styles.md",
    "revision": "8a3ae4dc555d1fce68a6780007045db7"
  },
  {
    "url": "docs/twig/the-key-attribute.md",
    "revision": "3567de2d35bb702f264d1a408da2fca6"
  },
  {
    "url": "docs/twig/the-ref-attribute.md",
    "revision": "4b64b40bf3f6bf0a273b9cee89890550"
  },
  {
    "url": "favicon.ico",
    "revision": "2463186883498149e8d99bb040711c95"
  },
  {
    "url": "index.html",
    "revision": "9ebbf8b85b2fb77b190c88654e5aa3b7"
  },
  {
    "url": "main.css",
    "revision": "13cc0e5f755a9227e7497b553177e29a"
  },
  {
    "url": "main.js",
    "revision": "3f96dbe2e4466533fd8ee4585f986936"
  },
  {
    "url": "manifest.json",
    "revision": "71142237b55b8853a9ba2f8c4ad8f647"
  },
  {
    "url": "melodic-pattern.svg",
    "revision": "341db65bd6325f8147d4470383bd0333"
  },
  {
    "url": "melody_favicon_144x144.png",
    "revision": "b3447d585779c69fac02899ef87683f1"
  },
  {
    "url": "melody_favicon_16x16.png",
    "revision": "9b6d5055c05385cdb83db493b9893276"
  },
  {
    "url": "melody_favicon_192x192.png",
    "revision": "9b9e5b4e61bfd2953275c6cb883f0518"
  },
  {
    "url": "melody_favicon_256x256.png",
    "revision": "30bcc420b51608710863647cd800061b"
  },
  {
    "url": "melody_favicon_32x32.png",
    "revision": "fcc19bcd7d3a82b45b4ebd7b252bb25f"
  },
  {
    "url": "melody_favicon_48x48.png",
    "revision": "a1a3926594da06b9dc9c2608d31a7c48"
  },
  {
    "url": "melody_favicon_512x512.png",
    "revision": "70bcaffd6395651eca669fd7ca4f3795"
  },
  {
    "url": "melody_favicon_72x72.png",
    "revision": "520ec3abe0322acdfd55702df28d94c9"
  },
  {
    "url": "melody_favicon_96x96.png",
    "revision": "4d9fea19d6333a94e320232d68ab5435"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "19c199ee189580bf4ec8781ed7d910c4"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "1a51f743bc6573cbaed0cc4b168f0778"
  }
]);

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
