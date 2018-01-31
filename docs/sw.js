importScripts('workbox-sw.js');

var workboxSW = new WorkboxSW({ clientsClaim: true, skipWaiting: true });

workboxSW.precache([
  {
    "url": "404.html",
    "revision": "e622b38414ca9ff4650eca7996273723"
  },
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
    "revision": "84be0314c5fe57b71af4928e3fa5d584"
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
    "revision": "c79d9423932e52e5aa8b45cc6af63294"
  },
  {
    "url": "docs/advanced/mixins.md",
    "revision": "969d632752f1a7e57be2e45211aadc4d"
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
    "revision": "be1f4cbc2af55b22f534fcf958349511"
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
    "revision": "7889c589df7ab3ee8c11a935a9e70fcb"
  },
  {
    "url": "docs/redux/connect.md",
    "revision": "8e2fd45faba317e520e13a925e6f761b"
  },
  {
    "url": "docs/redux/intro.md",
    "revision": "399cd208b731652f77de251d32c8ce5e"
  },
  {
    "url": "docs/redux/provide.md",
    "revision": "81b7f91ae36aa9c26fce4ad904de25fe"
  },
  {
    "url": "docs/redux/redux-saga.md",
    "revision": "47e0578a82100c40ac0b1b9d285c15b0"
  },
  {
    "url": "docs/redux/redux-thunk.md",
    "revision": "cb0cb007e64ff4a9b18c5b307d93fee6"
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
    "revision": "9024fbd5ec415e16ec51802031fc4f95"
  },
  {
    "url": "docs/twig/classes.md",
    "revision": "7132261d23cb70da974e068fc6030a35"
  },
  {
    "url": "docs/twig/key.md",
    "revision": "f26579bc554fc2127dcc1a0fc9151787"
  },
  {
    "url": "docs/twig/loops.md",
    "revision": "aca527e317c8072b8f141a19de3637d9"
  },
  {
    "url": "docs/twig/ref.md",
    "revision": "db734cdef4531b95457afeb28617ca70"
  },
  {
    "url": "docs/twig/styles.md",
    "revision": "9d7cdb21d263e0ecf7c1caeee366f295"
  },
  {
    "url": "favicon.ico",
    "revision": "2463186883498149e8d99bb040711c95"
  },
  {
    "url": "index.html",
    "revision": "b5084693a0f99f280e4065da3a157b18"
  },
  {
    "url": "main.css",
    "revision": "ff75503b1bfa9dfe0b53fe1a112b7599"
  },
  {
    "url": "main.js",
    "revision": "97ddc61d6bb09934a576d12a544f5ca5"
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
    "url": "melody_js_library.png",
    "revision": "3c89e22c9c268a1001d617b18ef87b97"
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
