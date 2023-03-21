if (!self.define) {
  let s,
    i = {};
  const l = (l, e) => (
    (l = new URL(l + '.js', e).href),
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
  self.define = (e, n) => {
    const t = s || ('document' in self ? document.currentScript.src : '') || location.href;
    if (i[t]) return;
    let r = {};
    const c = (s) => l(s, t),
      u = { module: { uri: t }, exports: r, require: c };
    i[t] = Promise.all(e.map((s) => u[s] || c(s))).then((s) => (n(...s), r));
  };
}
define(['./workbox-e0782b83'], function (s) {
  'use strict';
  self.addEventListener('message', (s) => {
    s.data && 'SKIP_WAITING' === s.data.type && self.skipWaiting();
  }),
    s.precacheAndRoute(
      [
        { url: 'index.html', revision: '4ef74ad2a091dfe80d2a074ddb89f8f3' },
        { url: 'registerSW.js', revision: '1e593af15a59751133e55eaa6702ba45' },
        { url: 'static/css/404-74e4cdcf.css', revision: null },
        { url: 'static/css/index-0478c775.css', revision: null },
        { url: 'static/css/index-0e35dde8.css', revision: null },
        { url: 'static/css/index-14fbc906.css', revision: null },
        { url: 'static/css/index-163b7812.css', revision: null },
        { url: 'static/css/index-1e3914d5.css', revision: null },
        { url: 'static/css/index-1ef2c099.css', revision: null },
        { url: 'static/css/index-2fa39d2f.css', revision: null },
        { url: 'static/css/index-4d370201.css', revision: null },
        { url: 'static/css/index-52ab3187.css', revision: null },
        { url: 'static/css/index-590d2cde.css', revision: null },
        { url: 'static/css/index-61af3189.css', revision: null },
        { url: 'static/css/index-620c98f9.css', revision: null },
        { url: 'static/css/index-6265ba73.css', revision: null },
        { url: 'static/css/index-6dedcbb6.css', revision: null },
        { url: 'static/css/index-7d9e1367.css', revision: null },
        { url: 'static/css/index-a37d3d48.css', revision: null },
        { url: 'static/css/index-a99ecf18.css', revision: null },
        { url: 'static/css/index-bd8999be.css', revision: null },
        { url: 'static/css/index-d3dfd603.css', revision: null },
        { url: 'static/css/index-dc3b06e9.css', revision: null },
        { url: 'static/css/index-e6f2056f.css', revision: null },
        { url: 'static/css/index-e8950989.css', revision: null },
        { url: 'static/css/index-f185689c.css', revision: null },
        { url: 'static/css/index-f7aa930a.css', revision: null },
        { url: 'static/js/404-84d9b94e.js', revision: null },
        { url: 'static/js/china-77152183.js', revision: null },
        { url: 'static/js/index-025fd8ea.js', revision: null },
        { url: 'static/js/index-03437f61.js', revision: null },
        { url: 'static/js/index-06bb0b1b.js', revision: null },
        { url: 'static/js/index-0aa90978.js', revision: null },
        { url: 'static/js/index-0d0bcf02.js', revision: null },
        { url: 'static/js/index-1b9dda39.js', revision: null },
        { url: 'static/js/index-23950f8c.js', revision: null },
        { url: 'static/js/index-382bed03.js', revision: null },
        { url: 'static/js/index-3aa92f66.js', revision: null },
        { url: 'static/js/index-3cff7492.js', revision: null },
        { url: 'static/js/index-45a01447.js', revision: null },
        { url: 'static/js/index-482c845a.js', revision: null },
        { url: 'static/js/index-4dbf22df.js', revision: null },
        { url: 'static/js/index-51d795a6.js', revision: null },
        { url: 'static/js/index-56e36812.js', revision: null },
        { url: 'static/js/index-657a6452.js', revision: null },
        { url: 'static/js/index-6bbed590.js', revision: null },
        { url: 'static/js/index-8376b8ae.js', revision: null },
        { url: 'static/js/index-85cfd7a8.js', revision: null },
        { url: 'static/js/index-8b9c7bca.js', revision: null },
        { url: 'static/js/index-99678c93.js', revision: null },
        { url: 'static/js/index-9b315cc5.js', revision: null },
        { url: 'static/js/index-9f7a9428.js', revision: null },
        { url: 'static/js/index-abaef9fe.js', revision: null },
        { url: 'static/js/index-b9230369.js', revision: null },
        { url: 'static/js/index-bb4dd873.js', revision: null },
        { url: 'static/js/index-c9cd6709.js', revision: null },
        { url: 'static/js/index-d0716604.js', revision: null },
        { url: 'static/js/index-d8cbffec.js', revision: null },
        { url: 'static/js/index-dfb446be.js', revision: null },
        { url: 'static/js/index-e0e83079.js', revision: null },
        { url: 'static/js/index-e2469244.js', revision: null },
        { url: 'static/js/index-e51d5c3d.js', revision: null },
        { url: 'static/js/index-e8924a8e.js', revision: null },
        { url: 'static/js/index-eff07c24.js', revision: null },
        { url: 'static/js/index-f1078df0.js', revision: null },
        { url: 'static/js/index-f20ae0ca.js', revision: null },
        { url: 'static/js/index.vuevuetypescriptsetuptruelang-35f75f94.js', revision: null },
        { url: 'static/js/logo-46af6dfb.js', revision: null },
        { url: 'static/js/plugin-vueexport-helper-c27b6911.js', revision: null },
        { url: 'static/js/slotsHelper-041e8ece.js', revision: null },
        { url: 'static/js/useDatailsInfo-f1b81514.js', revision: null },
        { url: 'static/js/useECharts-18784b36.js', revision: null },
        { url: 'manifest.webmanifest', revision: '97281e4d0104dc2e4969c0deb8bf30fd' },
      ],
      {},
    ),
    s.cleanupOutdatedCaches(),
    s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL('index.html')));
});
