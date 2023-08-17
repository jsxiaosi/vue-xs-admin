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
    const c = s || ('document' in self ? document.currentScript.src : '') || location.href;
    if (i[c]) return;
    let t = {};
    const r = (s) => l(s, c),
      u = { module: { uri: c }, exports: t, require: r };
    i[c] = Promise.all(e.map((s) => u[s] || r(s))).then((s) => (n(...s), t));
  };
}
define(['./workbox-4de3aa5f'], function (s) {
  'use strict';
  self.addEventListener('message', (s) => {
    s.data && 'SKIP_WAITING' === s.data.type && self.skipWaiting();
  }),
    s.precacheAndRoute(
      [
        { url: 'index.html', revision: '7435711a8aea7035ab800c7f4a75277e' },
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
        { url: 'static/js/403-e0ddb230.js', revision: null },
        { url: 'static/js/404-eb1d48dc.js', revision: null },
        { url: 'static/js/500-cebbcc08.js', revision: null },
        { url: 'static/js/china-77152183.js', revision: null },
        { url: 'static/js/index-06f54118.js', revision: null },
        { url: 'static/js/index-0912f3b8.js', revision: null },
        { url: 'static/js/index-0b37b7cf.js', revision: null },
        { url: 'static/js/index-0ea6aec8.js', revision: null },
        { url: 'static/js/index-1ddcdfe5.js', revision: null },
        { url: 'static/js/index-20b02887.js', revision: null },
        { url: 'static/js/index-318dfe09.js', revision: null },
        { url: 'static/js/index-31bde1fa.js', revision: null },
        { url: 'static/js/index-3b4b4b25.js', revision: null },
        { url: 'static/js/index-3cab5cd7.js', revision: null },
        { url: 'static/js/index-3cbe2528.js', revision: null },
        { url: 'static/js/index-4ca79cd9.js', revision: null },
        { url: 'static/js/index-5185a955.js', revision: null },
        { url: 'static/js/index-51d795a6.js', revision: null },
        { url: 'static/js/index-58341aca.js', revision: null },
        { url: 'static/js/index-590ef71d.js', revision: null },
        { url: 'static/js/index-5d2d306e.js', revision: null },
        { url: 'static/js/index-739ca14e.js', revision: null },
        { url: 'static/js/index-7d9038fd.js', revision: null },
        { url: 'static/js/index-7e6db5be.js', revision: null },
        { url: 'static/js/index-82073123.js', revision: null },
        { url: 'static/js/index-879b5d12.js', revision: null },
        { url: 'static/js/index-8d69ef95.js', revision: null },
        { url: 'static/js/index-a790ccdb.js', revision: null },
        { url: 'static/js/index-b345f304.js', revision: null },
        { url: 'static/js/index-bfacde44.js', revision: null },
        { url: 'static/js/index-cad14c46.js', revision: null },
        { url: 'static/js/index-cf4ca3c2.js', revision: null },
        { url: 'static/js/index-d1375837.js', revision: null },
        { url: 'static/js/index-db9d571b.js', revision: null },
        { url: 'static/js/index-de615e01.js', revision: null },
        { url: 'static/js/index-df870045.js', revision: null },
        { url: 'static/js/index-e57a377a.js', revision: null },
        { url: 'static/js/index-e5c4a92f.js', revision: null },
        { url: 'static/js/index-e88a4720.js', revision: null },
        { url: 'static/js/index-fbdc8db2.js', revision: null },
        { url: 'static/js/index-fcfffa0b.js', revision: null },
        { url: 'static/js/index-fe9b9e03.js', revision: null },
        { url: 'static/js/logo-46af6dfb.js', revision: null },
        { url: 'static/js/plugin-vueexport-helper-c27b6911.js', revision: null },
        { url: 'static/js/slotsHelper-49a1375c.js', revision: null },
        { url: 'static/js/useDatailsInfo-9488b40b.js', revision: null },
        { url: 'static/js/useECharts-c1c5469c.js', revision: null },
        { url: 'manifest.webmanifest', revision: '97281e4d0104dc2e4969c0deb8bf30fd' },
      ],
      {},
    ),
    s.cleanupOutdatedCaches(),
    s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL('index.html')));
});
