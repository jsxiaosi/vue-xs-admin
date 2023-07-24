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
    const t = s || ('document' in self ? document.currentScript.src : '') || location.href;
    if (i[t]) return;
    let r = {};
    const u = (s) => l(s, t),
      c = { module: { uri: t }, exports: r, require: u };
    i[t] = Promise.all(n.map((s) => c[s] || u(s))).then((s) => (e(...s), r));
  };
}
define(['./workbox-4de3aa5f'], function (s) {
  'use strict';
  self.addEventListener('message', (s) => {
    s.data && 'SKIP_WAITING' === s.data.type && self.skipWaiting();
  }),
    s.precacheAndRoute(
      [
        { url: 'index.html', revision: '069071e082cf1cd4860fc4d5c7628b8e' },
        { url: 'registerSW.js', revision: '1e593af15a59751133e55eaa6702ba45' },
        { url: 'static/css/404-74e4cdcf.css', revision: null },
        { url: 'static/css/index-129f824d.css', revision: null },
        { url: 'static/css/index-14fbc906.css', revision: null },
        { url: 'static/css/index-163b7812.css', revision: null },
        { url: 'static/css/index-1e3914d5.css', revision: null },
        { url: 'static/css/index-1ef2c099.css', revision: null },
        { url: 'static/css/index-4d370201.css', revision: null },
        { url: 'static/css/index-590d2cde.css', revision: null },
        { url: 'static/css/index-61af3189.css', revision: null },
        { url: 'static/css/index-620c98f9.css', revision: null },
        { url: 'static/css/index-6265ba73.css', revision: null },
        { url: 'static/css/index-6aedb5f5.css', revision: null },
        { url: 'static/css/index-6c6550da.css', revision: null },
        { url: 'static/css/index-72fa0de7.css', revision: null },
        { url: 'static/css/index-89a26e6c.css', revision: null },
        { url: 'static/css/index-b60706ef.css', revision: null },
        { url: 'static/css/index-bba35c75.css', revision: null },
        { url: 'static/css/index-d3dfd603.css', revision: null },
        { url: 'static/css/index-dc3b06e9.css', revision: null },
        { url: 'static/css/index-e6f2056f.css', revision: null },
        { url: 'static/css/index-f185689c.css', revision: null },
        { url: 'static/css/index-f2b3b7fa.css', revision: null },
        { url: 'static/css/index-f7aa930a.css', revision: null },
        { url: 'static/css/index-f7e8eeb9.css', revision: null },
        { url: 'static/css/index-f9582d63.css', revision: null },
        { url: 'static/js/404-df2b4235.js', revision: null },
        { url: 'static/js/china-77152183.js', revision: null },
        { url: 'static/js/index-0598ba50.js', revision: null },
        { url: 'static/js/index-080b9e6f.js', revision: null },
        { url: 'static/js/index-0c43f7de.js', revision: null },
        { url: 'static/js/index-32e3d638.js', revision: null },
        { url: 'static/js/index-35b5a1fa.js', revision: null },
        { url: 'static/js/index-397bb656.js', revision: null },
        { url: 'static/js/index-48df356c.js', revision: null },
        { url: 'static/js/index-4b8196a7.js', revision: null },
        { url: 'static/js/index-51d795a6.js', revision: null },
        { url: 'static/js/index-52193461.js', revision: null },
        { url: 'static/js/index-536458af.js', revision: null },
        { url: 'static/js/index-555ef36a.js', revision: null },
        { url: 'static/js/index-5ba99536.js', revision: null },
        { url: 'static/js/index-5d574d13.js', revision: null },
        { url: 'static/js/index-61eb509c.js', revision: null },
        { url: 'static/js/index-790058f3.js', revision: null },
        { url: 'static/js/index-798b5438.js', revision: null },
        { url: 'static/js/index-938886b7.js', revision: null },
        { url: 'static/js/index-9f431507.js', revision: null },
        { url: 'static/js/index-ae766c94.js', revision: null },
        { url: 'static/js/index-af2a762f.js', revision: null },
        { url: 'static/js/index-b3fdad21.js', revision: null },
        { url: 'static/js/index-b4085624.js', revision: null },
        { url: 'static/js/index-b55a8af2.js', revision: null },
        { url: 'static/js/index-b83350c9.js', revision: null },
        { url: 'static/js/index-b918e10d.js', revision: null },
        { url: 'static/js/index-c4187854.js', revision: null },
        { url: 'static/js/index-cea858b2.js', revision: null },
        { url: 'static/js/index-cf542b5b.js', revision: null },
        { url: 'static/js/index-d34275fe.js', revision: null },
        { url: 'static/js/index-ddd1c647.js', revision: null },
        { url: 'static/js/index-e1647ddf.js', revision: null },
        { url: 'static/js/index-e164a609.js', revision: null },
        { url: 'static/js/index-e5d66557.js', revision: null },
        { url: 'static/js/index-ed279022.js', revision: null },
        { url: 'static/js/index-f21eb51a.js', revision: null },
        { url: 'static/js/index-fb53f360.js', revision: null },
        { url: 'static/js/index-fe5df4f0.js', revision: null },
        { url: 'static/js/index.vuevuetypescriptsetuptruelang-7e8a37d0.js', revision: null },
        { url: 'static/js/logo-46af6dfb.js', revision: null },
        { url: 'static/js/plugin-vueexport-helper-c27b6911.js', revision: null },
        { url: 'static/js/slotsHelper-5252f8f0.js', revision: null },
        { url: 'static/js/useDatailsInfo-2cb77843.js', revision: null },
        { url: 'static/js/useECharts-ec88091f.js', revision: null },
        { url: 'manifest.webmanifest', revision: '97281e4d0104dc2e4969c0deb8bf30fd' },
      ],
      {},
    ),
    s.cleanupOutdatedCaches(),
    s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL('index.html')));
});
