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
define(['./workbox-4de3aa5f'], function (s) {
  'use strict';
  self.addEventListener('message', (s) => {
    s.data && 'SKIP_WAITING' === s.data.type && self.skipWaiting();
  }),
    s.precacheAndRoute(
      [
        { url: 'index.html', revision: '2223ae5389741ff00417b1d728d93d26' },
        { url: 'registerSW.js', revision: '1e593af15a59751133e55eaa6702ba45' },
        { url: 'static/css/403-e86aaf9e.css', revision: null },
        { url: 'static/css/404-06c923f1.css', revision: null },
        { url: 'static/css/500-7e47405a.css', revision: null },
        { url: 'static/css/index-1e4652ed.css', revision: null },
        { url: 'static/css/index-2174fe69.css', revision: null },
        { url: 'static/css/index-2e02f5de.css', revision: null },
        { url: 'static/css/index-3dfeeea3.css', revision: null },
        { url: 'static/css/index-4d370201.css', revision: null },
        { url: 'static/css/index-544682db.css', revision: null },
        { url: 'static/css/index-590d2cde.css', revision: null },
        { url: 'static/css/index-5ed5877a.css', revision: null },
        { url: 'static/css/index-620c98f9.css', revision: null },
        { url: 'static/css/index-6265ba73.css', revision: null },
        { url: 'static/css/index-67304096.css', revision: null },
        { url: 'static/css/index-6aedb5f5.css', revision: null },
        { url: 'static/css/index-6c6550da.css', revision: null },
        { url: 'static/css/index-7ae741b3.css', revision: null },
        { url: 'static/css/index-8a5903ba.css', revision: null },
        { url: 'static/css/index-9b78e529.css', revision: null },
        { url: 'static/css/index-be2ed6e6.css', revision: null },
        { url: 'static/css/index-d3dfd603.css', revision: null },
        { url: 'static/css/index-d6be9863.css', revision: null },
        { url: 'static/css/index-db426cc0.css', revision: null },
        { url: 'static/css/index-e6f2056f.css', revision: null },
        { url: 'static/css/index-f185689c.css', revision: null },
        { url: 'static/css/index-f5f7b6e5.css', revision: null },
        { url: 'static/css/index-f7aa930a.css', revision: null },
        { url: 'static/js/403-f0a4a411.js', revision: null },
        { url: 'static/js/404-a5a7cb88.js', revision: null },
        { url: 'static/js/500-137a6d51.js', revision: null },
        { url: 'static/js/china-77152183.js', revision: null },
        { url: 'static/js/index-08dbc698.js', revision: null },
        { url: 'static/js/index-1dcd45d5.js', revision: null },
        { url: 'static/js/index-2ad880e3.js', revision: null },
        { url: 'static/js/index-34e3187b.js', revision: null },
        { url: 'static/js/index-37e851a6.js', revision: null },
        { url: 'static/js/index-37f52abb.js', revision: null },
        { url: 'static/js/index-3ae12cb8.js', revision: null },
        { url: 'static/js/index-3ef8e233.js', revision: null },
        { url: 'static/js/index-42152767.js', revision: null },
        { url: 'static/js/index-46193458.js', revision: null },
        { url: 'static/js/index-4758c447.js', revision: null },
        { url: 'static/js/index-4df49ac5.js', revision: null },
        { url: 'static/js/index-51d795a6.js', revision: null },
        { url: 'static/js/index-55d2205c.js', revision: null },
        { url: 'static/js/index-5a5f3506.js', revision: null },
        { url: 'static/js/index-633006a8.js', revision: null },
        { url: 'static/js/index-78a46a34.js', revision: null },
        { url: 'static/js/index-7aca939d.js', revision: null },
        { url: 'static/js/index-88bea085.js', revision: null },
        { url: 'static/js/index-950a4cd9.js', revision: null },
        { url: 'static/js/index-97415c94.js', revision: null },
        { url: 'static/js/index-983a5d72.js', revision: null },
        { url: 'static/js/index-98cfbeb7.js', revision: null },
        { url: 'static/js/index-b14d5117.js', revision: null },
        { url: 'static/js/index-b415be28.js', revision: null },
        { url: 'static/js/index-b5f4fdc6.js', revision: null },
        { url: 'static/js/index-b7c7c880.js', revision: null },
        { url: 'static/js/index-c23d4aac.js', revision: null },
        { url: 'static/js/index-d4735d8b.js', revision: null },
        { url: 'static/js/index-d4c278da.js', revision: null },
        { url: 'static/js/index-db755f78.js', revision: null },
        { url: 'static/js/index-e48445fd.js', revision: null },
        { url: 'static/js/index-e64744ff.js', revision: null },
        { url: 'static/js/index-e8299e03.js', revision: null },
        { url: 'static/js/index-eaf5e0e3.js', revision: null },
        { url: 'static/js/index-f6d7a7f5.js', revision: null },
        { url: 'static/js/index-fae30595.js', revision: null },
        { url: 'static/js/index-fcaa205b.js', revision: null },
        { url: 'static/js/logo-46af6dfb.js', revision: null },
        { url: 'static/js/plugin-vueexport-helper-c27b6911.js', revision: null },
        { url: 'static/js/slotsHelper-b5a094ba.js', revision: null },
        { url: 'static/js/useDatailsInfo-946e7af0.js', revision: null },
        { url: 'static/js/useECharts-dee01e05.js', revision: null },
        { url: 'static/js/useSortable-5e10a56c.js', revision: null },
        { url: 'manifest.webmanifest', revision: '97281e4d0104dc2e4969c0deb8bf30fd' },
      ],
      {},
    ),
    s.cleanupOutdatedCaches(),
    s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL('index.html')));
});
