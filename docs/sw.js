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
        { url: 'index.html', revision: '2e15ef16c8f58ff162e3152e87c2b54b' },
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
        { url: 'static/css/index-ec226395.css', revision: null },
        { url: 'static/css/index-f185689c.css', revision: null },
        { url: 'static/css/index-f5f7b6e5.css', revision: null },
        { url: 'static/css/index-f7aa930a.css', revision: null },
        { url: 'static/js/403-d4645997.js', revision: null },
        { url: 'static/js/404-e7744029.js', revision: null },
        { url: 'static/js/500-812f468d.js', revision: null },
        { url: 'static/js/china-77152183.js', revision: null },
        { url: 'static/js/index-078f4c64.js', revision: null },
        { url: 'static/js/index-1169beea.js', revision: null },
        { url: 'static/js/index-13fb1d5a.js', revision: null },
        { url: 'static/js/index-16261428.js', revision: null },
        { url: 'static/js/index-220b24a5.js', revision: null },
        { url: 'static/js/index-2d3590d4.js', revision: null },
        { url: 'static/js/index-3192f30e.js', revision: null },
        { url: 'static/js/index-34127fb1.js', revision: null },
        { url: 'static/js/index-48e2ca28.js', revision: null },
        { url: 'static/js/index-5005444e.js', revision: null },
        { url: 'static/js/index-5005aa26.js', revision: null },
        { url: 'static/js/index-51d795a6.js', revision: null },
        { url: 'static/js/index-532542f1.js', revision: null },
        { url: 'static/js/index-591a1658.js', revision: null },
        { url: 'static/js/index-595ee73c.js', revision: null },
        { url: 'static/js/index-6f80bbe0.js', revision: null },
        { url: 'static/js/index-70a96a1c.js', revision: null },
        { url: 'static/js/index-81778737.js', revision: null },
        { url: 'static/js/index-81bf05ab.js', revision: null },
        { url: 'static/js/index-86e28caf.js', revision: null },
        { url: 'static/js/index-8a10f05f.js', revision: null },
        { url: 'static/js/index-a1789061.js', revision: null },
        { url: 'static/js/index-ad85d10c.js', revision: null },
        { url: 'static/js/index-adee9101.js', revision: null },
        { url: 'static/js/index-b5a0f8ed.js', revision: null },
        { url: 'static/js/index-b7829b56.js', revision: null },
        { url: 'static/js/index-c0a205e0.js', revision: null },
        { url: 'static/js/index-c11697b3.js', revision: null },
        { url: 'static/js/index-c166f1ad.js', revision: null },
        { url: 'static/js/index-c5716c1c.js', revision: null },
        { url: 'static/js/index-d5ab720f.js', revision: null },
        { url: 'static/js/index-dbcc810c.js', revision: null },
        { url: 'static/js/index-e0c2be7f.js', revision: null },
        { url: 'static/js/index-e7915621.js', revision: null },
        { url: 'static/js/index-e8428792.js', revision: null },
        { url: 'static/js/index-f5ed352f.js', revision: null },
        { url: 'static/js/index-fabc3b6d.js', revision: null },
        { url: 'static/js/index-ff7c528d.js', revision: null },
        { url: 'static/js/logo-46af6dfb.js', revision: null },
        { url: 'static/js/plugin-vueexport-helper-c27b6911.js', revision: null },
        { url: 'static/js/slotsHelper-158b3a7d.js', revision: null },
        { url: 'static/js/useDatailsInfo-5c81569f.js', revision: null },
        { url: 'static/js/useECharts-6d3e4299.js', revision: null },
        { url: 'static/js/useSortable-04358ef3.js', revision: null },
        { url: 'manifest.webmanifest', revision: '97281e4d0104dc2e4969c0deb8bf30fd' },
      ],
      {},
    ),
    s.cleanupOutdatedCaches(),
    s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL('index.html')));
});
