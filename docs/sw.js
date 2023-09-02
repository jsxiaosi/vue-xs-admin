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
        { url: 'index.html', revision: '9362b290d9837c833805ed67470a5d64' },
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
        { url: 'static/js/403-ccdf6438.js', revision: null },
        { url: 'static/js/404-6d139a47.js', revision: null },
        { url: 'static/js/500-aad7b664.js', revision: null },
        { url: 'static/js/china-77152183.js', revision: null },
        { url: 'static/js/index-05fd4fa1.js', revision: null },
        { url: 'static/js/index-087ddb4f.js', revision: null },
        { url: 'static/js/index-0983f5c4.js', revision: null },
        { url: 'static/js/index-1eb240fe.js', revision: null },
        { url: 'static/js/index-248330b3.js', revision: null },
        { url: 'static/js/index-2d76a7b7.js', revision: null },
        { url: 'static/js/index-30b8d891.js', revision: null },
        { url: 'static/js/index-34d0a6a7.js', revision: null },
        { url: 'static/js/index-4c7b9bf0.js', revision: null },
        { url: 'static/js/index-51d795a6.js', revision: null },
        { url: 'static/js/index-53faf79c.js', revision: null },
        { url: 'static/js/index-57b5e988.js', revision: null },
        { url: 'static/js/index-640f0a54.js', revision: null },
        { url: 'static/js/index-6993a990.js', revision: null },
        { url: 'static/js/index-6f42fde7.js', revision: null },
        { url: 'static/js/index-79f0e53a.js', revision: null },
        { url: 'static/js/index-7f0a5f66.js', revision: null },
        { url: 'static/js/index-84ee766f.js', revision: null },
        { url: 'static/js/index-86e62633.js', revision: null },
        { url: 'static/js/index-909ef2c8.js', revision: null },
        { url: 'static/js/index-adc6ff48.js', revision: null },
        { url: 'static/js/index-b01cf410.js', revision: null },
        { url: 'static/js/index-b213e6d7.js', revision: null },
        { url: 'static/js/index-c46e32c6.js', revision: null },
        { url: 'static/js/index-c4d7affe.js', revision: null },
        { url: 'static/js/index-cf1a9260.js', revision: null },
        { url: 'static/js/index-d5e4d7b3.js', revision: null },
        { url: 'static/js/index-d68791bb.js', revision: null },
        { url: 'static/js/index-dd8efab9.js', revision: null },
        { url: 'static/js/index-e3dcc4cd.js', revision: null },
        { url: 'static/js/index-eccc9572.js', revision: null },
        { url: 'static/js/index-f394b301.js', revision: null },
        { url: 'static/js/index-f42eedcd.js', revision: null },
        { url: 'static/js/index-f4786670.js', revision: null },
        { url: 'static/js/index-f8774fb9.js', revision: null },
        { url: 'static/js/index-fac9f61c.js', revision: null },
        { url: 'static/js/index-faf16d22.js', revision: null },
        { url: 'static/js/index-fefe8f76.js', revision: null },
        { url: 'static/js/logo-46af6dfb.js', revision: null },
        { url: 'static/js/plugin-vueexport-helper-c27b6911.js', revision: null },
        { url: 'static/js/slotsHelper-2e523dd6.js', revision: null },
        { url: 'static/js/useDatailsInfo-f7e55d74.js', revision: null },
        { url: 'static/js/useECharts-42fea5ef.js', revision: null },
        { url: 'static/js/useSortable-51a35a7e.js', revision: null },
        { url: 'manifest.webmanifest', revision: '97281e4d0104dc2e4969c0deb8bf30fd' },
      ],
      {},
    ),
    s.cleanupOutdatedCaches(),
    s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL('index.html')));
});
