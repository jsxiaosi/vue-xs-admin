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
    const c = (s) => l(s, t),
      u = { module: { uri: t }, exports: r, require: c };
    i[t] = Promise.all(n.map((s) => u[s] || c(s))).then((s) => (e(...s), r));
  };
}
define(['./workbox-e0782b83'], function (s) {
  'use strict';
  self.addEventListener('message', (s) => {
    s.data && 'SKIP_WAITING' === s.data.type && self.skipWaiting();
  }),
    s.precacheAndRoute(
      [
        { url: 'index.html', revision: '2d43274495370e0c38be79232615ab32' },
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
        { url: 'static/js/404-5a1962fd.js', revision: null },
        { url: 'static/js/china-77152183.js', revision: null },
        { url: 'static/js/index-000e99e6.js', revision: null },
        { url: 'static/js/index-09bfcf48.js', revision: null },
        { url: 'static/js/index-0a76a7f9.js', revision: null },
        { url: 'static/js/index-138cf090.js', revision: null },
        { url: 'static/js/index-1cf92cb9.js', revision: null },
        { url: 'static/js/index-279a85e1.js', revision: null },
        { url: 'static/js/index-39a31974.js', revision: null },
        { url: 'static/js/index-3cd27fb9.js', revision: null },
        { url: 'static/js/index-3de70e88.js', revision: null },
        { url: 'static/js/index-51d795a6.js', revision: null },
        { url: 'static/js/index-52cd210e.js', revision: null },
        { url: 'static/js/index-59a2356b.js', revision: null },
        { url: 'static/js/index-5fe44437.js', revision: null },
        { url: 'static/js/index-628020ee.js', revision: null },
        { url: 'static/js/index-6df0a26a.js', revision: null },
        { url: 'static/js/index-7df7988b.js', revision: null },
        { url: 'static/js/index-8ac2b7e2.js', revision: null },
        { url: 'static/js/index-8b8cb909.js', revision: null },
        { url: 'static/js/index-8f0523a3.js', revision: null },
        { url: 'static/js/index-919488d9.js', revision: null },
        { url: 'static/js/index-a2187e02.js', revision: null },
        { url: 'static/js/index-a3291e61.js', revision: null },
        { url: 'static/js/index-a6a558b9.js', revision: null },
        { url: 'static/js/index-ab5909e8.js', revision: null },
        { url: 'static/js/index-ad4df6b0.js', revision: null },
        { url: 'static/js/index-b4bc2047.js', revision: null },
        { url: 'static/js/index-bbf6a973.js', revision: null },
        { url: 'static/js/index-bdfb5f56.js', revision: null },
        { url: 'static/js/index-c0858b02.js', revision: null },
        { url: 'static/js/index-c5c79da9.js', revision: null },
        { url: 'static/js/index-dc3b67f9.js', revision: null },
        { url: 'static/js/index-e3d2230c.js', revision: null },
        { url: 'static/js/index-e9482d7e.js', revision: null },
        { url: 'static/js/index-f3cada11.js', revision: null },
        { url: 'static/js/index-f465da96.js', revision: null },
        { url: 'static/js/index-f62a6514.js', revision: null },
        { url: 'static/js/index-f6d28ec0.js', revision: null },
        { url: 'static/js/index.vuevuetypescriptsetuptruelang-02498858.js', revision: null },
        { url: 'static/js/logo-46af6dfb.js', revision: null },
        { url: 'static/js/plugin-vueexport-helper-c27b6911.js', revision: null },
        { url: 'static/js/slotsHelper-52a5be6b.js', revision: null },
        { url: 'static/js/useDatailsInfo-7c966caf.js', revision: null },
        { url: 'static/js/useECharts-f1c25a97.js', revision: null },
        { url: 'manifest.webmanifest', revision: '97281e4d0104dc2e4969c0deb8bf30fd' },
      ],
      {},
    ),
    s.cleanupOutdatedCaches(),
    s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL('index.html')));
});
