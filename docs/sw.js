if (!self.define) {
  let s,
    i = {};
  const l = (l, n) => (
    (l = new URL(l + '.js', n).href),
    i[l] ||
      new Promise((i) => {
        if ('document' in self) {
          const s = document.createElement('script');
          (s.src = l), (s.onload = i), document.head.appendChild(s);
        } else (s = l), importScripts(l), i();
      }).then(() => {
        let s = i[l];
        if (!s) throw new Error(`Module ${l} didn’t register its module`);
        return s;
      })
  );
  self.define = (n, e) => {
    const c = s || ('document' in self ? document.currentScript.src : '') || location.href;
    if (i[c]) return;
    let t = {};
    const r = (s) => l(s, c),
      u = { module: { uri: c }, exports: t, require: r };
    i[c] = Promise.all(n.map((s) => u[s] || r(s))).then((s) => (e(...s), t));
  };
}
define(['./workbox-4de3aa5f'], function (s) {
  'use strict';
  self.addEventListener('message', (s) => {
    s.data && 'SKIP_WAITING' === s.data.type && self.skipWaiting();
  }),
    s.precacheAndRoute(
      [
        { url: 'index.html', revision: 'ed81b369134d44189e5a9f9c55a81504' },
        { url: 'registerSW.js', revision: '1e593af15a59751133e55eaa6702ba45' },
        { url: 'static/css/403-e86aaf9e.css', revision: null },
        { url: 'static/css/404-06c923f1.css', revision: null },
        { url: 'static/css/500-7e47405a.css', revision: null },
        { url: 'static/css/index-1e4652ed.css', revision: null },
        { url: 'static/css/index-2174fe69.css', revision: null },
        { url: 'static/css/index-2e02f5de.css', revision: null },
        { url: 'static/css/index-3dfeeea3.css', revision: null },
        { url: 'static/css/index-4d370201.css', revision: null },
        { url: 'static/css/index-590d2cde.css', revision: null },
        { url: 'static/css/index-5ed5877a.css', revision: null },
        { url: 'static/css/index-620c98f9.css', revision: null },
        { url: 'static/css/index-6265ba73.css', revision: null },
        { url: 'static/css/index-6aedb5f5.css', revision: null },
        { url: 'static/css/index-6c6550da.css', revision: null },
        { url: 'static/css/index-7171c14d.css', revision: null },
        { url: 'static/css/index-7ae741b3.css', revision: null },
        { url: 'static/css/index-913df3c1.css', revision: null },
        { url: 'static/css/index-a325bae1.css', revision: null },
        { url: 'static/css/index-b60706ef.css', revision: null },
        { url: 'static/css/index-bba35c75.css', revision: null },
        { url: 'static/css/index-d3dfd603.css', revision: null },
        { url: 'static/css/index-d6be9863.css', revision: null },
        { url: 'static/css/index-db426cc0.css', revision: null },
        { url: 'static/css/index-e6f2056f.css', revision: null },
        { url: 'static/css/index-f185689c.css', revision: null },
        { url: 'static/css/index-f5f7b6e5.css', revision: null },
        { url: 'static/css/index-f7aa930a.css', revision: null },
        { url: 'static/js/403-eee59c97.js', revision: null },
        { url: 'static/js/404-425e1474.js', revision: null },
        { url: 'static/js/500-ef15ca55.js', revision: null },
        { url: 'static/js/china-77152183.js', revision: null },
        { url: 'static/js/index-024a249e.js', revision: null },
        { url: 'static/js/index-029c4325.js', revision: null },
        { url: 'static/js/index-02f8f415.js', revision: null },
        { url: 'static/js/index-03766c93.js', revision: null },
        { url: 'static/js/index-0da7c5dd.js', revision: null },
        { url: 'static/js/index-2247824f.js', revision: null },
        { url: 'static/js/index-33badab6.js', revision: null },
        { url: 'static/js/index-34dd2753.js', revision: null },
        { url: 'static/js/index-351eb6fa.js', revision: null },
        { url: 'static/js/index-3523961a.js', revision: null },
        { url: 'static/js/index-3fadc7d7.js', revision: null },
        { url: 'static/js/index-4515b3fa.js', revision: null },
        { url: 'static/js/index-4aa1d2a4.js', revision: null },
        { url: 'static/js/index-4b91be38.js', revision: null },
        { url: 'static/js/index-51d795a6.js', revision: null },
        { url: 'static/js/index-52f54183.js', revision: null },
        { url: 'static/js/index-5497d948.js', revision: null },
        { url: 'static/js/index-575483a1.js', revision: null },
        { url: 'static/js/index-5b140f59.js', revision: null },
        { url: 'static/js/index-5d044caf.js', revision: null },
        { url: 'static/js/index-710cc9b5.js', revision: null },
        { url: 'static/js/index-733367f0.js', revision: null },
        { url: 'static/js/index-7fc8cae2.js', revision: null },
        { url: 'static/js/index-8acefc00.js', revision: null },
        { url: 'static/js/index-8ec7ade1.js', revision: null },
        { url: 'static/js/index-a68f0110.js', revision: null },
        { url: 'static/js/index-b0a2dff7.js', revision: null },
        { url: 'static/js/index-b57dc51e.js', revision: null },
        { url: 'static/js/index-c4c58c94.js', revision: null },
        { url: 'static/js/index-cc580c19.js', revision: null },
        { url: 'static/js/index-d008318c.js', revision: null },
        { url: 'static/js/index-d495423a.js', revision: null },
        { url: 'static/js/index-d51bcef7.js', revision: null },
        { url: 'static/js/index-e133c98b.js', revision: null },
        { url: 'static/js/index-e66cba67.js', revision: null },
        { url: 'static/js/index-ed05d953.js', revision: null },
        { url: 'static/js/index-f6e93681.js', revision: null },
        { url: 'static/js/index-f9ed3a99.js', revision: null },
        { url: 'static/js/logo-46af6dfb.js', revision: null },
        { url: 'static/js/plugin-vueexport-helper-c27b6911.js', revision: null },
        { url: 'static/js/slotsHelper-6567bb42.js', revision: null },
        { url: 'static/js/useDatailsInfo-14c0b055.js', revision: null },
        { url: 'static/js/useECharts-fa076e62.js', revision: null },
        { url: 'manifest.webmanifest', revision: '97281e4d0104dc2e4969c0deb8bf30fd' },
      ],
      {},
    ),
    s.cleanupOutdatedCaches(),
    s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL('index.html')));
});
