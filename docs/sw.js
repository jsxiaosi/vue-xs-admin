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
define(['./workbox-4de3aa5f'], function (s) {
  'use strict';
  self.addEventListener('message', (s) => {
    s.data && 'SKIP_WAITING' === s.data.type && self.skipWaiting();
  }),
    s.precacheAndRoute(
      [
        { url: 'index.html', revision: '9c5d792e4e26dc61ba25db8ec8982bcb' },
        { url: 'registerSW.js', revision: '1e593af15a59751133e55eaa6702ba45' },
        { url: 'static/css/403-b9a2676c.css', revision: null },
        { url: 'static/css/404-c800511d.css', revision: null },
        { url: 'static/css/500-c066bf5d.css', revision: null },
        { url: 'static/css/index-14fbc906.css', revision: null },
        { url: 'static/css/index-163b7812.css', revision: null },
        { url: 'static/css/index-1e3914d5.css', revision: null },
        { url: 'static/css/index-2174fe69.css', revision: null },
        { url: 'static/css/index-25331a10.css', revision: null },
        { url: 'static/css/index-4d370201.css', revision: null },
        { url: 'static/css/index-590d2cde.css', revision: null },
        { url: 'static/css/index-620c98f9.css', revision: null },
        { url: 'static/css/index-6265ba73.css', revision: null },
        { url: 'static/css/index-6aedb5f5.css', revision: null },
        { url: 'static/css/index-6c6550da.css', revision: null },
        { url: 'static/css/index-72fa0de7.css', revision: null },
        { url: 'static/css/index-7ae741b3.css', revision: null },
        { url: 'static/css/index-b60706ef.css', revision: null },
        { url: 'static/css/index-bba35c75.css', revision: null },
        { url: 'static/css/index-d3dfd603.css', revision: null },
        { url: 'static/css/index-d6be9863.css', revision: null },
        { url: 'static/css/index-db426cc0.css', revision: null },
        { url: 'static/css/index-dc3b06e9.css', revision: null },
        { url: 'static/css/index-e05df381.css', revision: null },
        { url: 'static/css/index-e6f2056f.css', revision: null },
        { url: 'static/css/index-f185689c.css', revision: null },
        { url: 'static/css/index-f5f7b6e5.css', revision: null },
        { url: 'static/css/index-f7aa930a.css', revision: null },
        { url: 'static/js/403-b68f0e3b.js', revision: null },
        { url: 'static/js/404-0e81aebc.js', revision: null },
        { url: 'static/js/500-154fc22b.js', revision: null },
        { url: 'static/js/china-77152183.js', revision: null },
        { url: 'static/js/index-022a6107.js', revision: null },
        { url: 'static/js/index-065a3ad8.js', revision: null },
        { url: 'static/js/index-08a9a73f.js', revision: null },
        { url: 'static/js/index-09e55fc4.js', revision: null },
        { url: 'static/js/index-0a884928.js', revision: null },
        { url: 'static/js/index-111e9215.js', revision: null },
        { url: 'static/js/index-163f3e58.js', revision: null },
        { url: 'static/js/index-1daada8e.js', revision: null },
        { url: 'static/js/index-2116034d.js', revision: null },
        { url: 'static/js/index-242d57ae.js', revision: null },
        { url: 'static/js/index-256bb38c.js', revision: null },
        { url: 'static/js/index-2b98d8ba.js', revision: null },
        { url: 'static/js/index-2c10fccb.js', revision: null },
        { url: 'static/js/index-3e97a761.js', revision: null },
        { url: 'static/js/index-4053894a.js', revision: null },
        { url: 'static/js/index-42c167ec.js', revision: null },
        { url: 'static/js/index-51d795a6.js', revision: null },
        { url: 'static/js/index-53289616.js', revision: null },
        { url: 'static/js/index-55f3ebd0.js', revision: null },
        { url: 'static/js/index-585cf832.js', revision: null },
        { url: 'static/js/index-5af82666.js', revision: null },
        { url: 'static/js/index-61388f71.js', revision: null },
        { url: 'static/js/index-69049140.js', revision: null },
        { url: 'static/js/index-79fde455.js', revision: null },
        { url: 'static/js/index-7b149ff6.js', revision: null },
        { url: 'static/js/index-84cf9d08.js', revision: null },
        { url: 'static/js/index-9051be0c.js', revision: null },
        { url: 'static/js/index-961299a2.js', revision: null },
        { url: 'static/js/index-973f74cf.js', revision: null },
        { url: 'static/js/index-9a2240f9.js', revision: null },
        { url: 'static/js/index-9b0c218b.js', revision: null },
        { url: 'static/js/index-9ed8b13e.js', revision: null },
        { url: 'static/js/index-a2d98674.js', revision: null },
        { url: 'static/js/index-a388b0e9.js', revision: null },
        { url: 'static/js/index-c3c86d05.js', revision: null },
        { url: 'static/js/index-ca49b544.js', revision: null },
        { url: 'static/js/index-ea70e3d5.js', revision: null },
        { url: 'static/js/index-f3aae812.js', revision: null },
        { url: 'static/js/index-fb1a3553.js', revision: null },
        { url: 'static/js/index-fb6adbd8.js', revision: null },
        { url: 'static/js/index.vuevuetypescriptsetuptruelang-9e0b1ef3.js', revision: null },
        { url: 'static/js/logo-46af6dfb.js', revision: null },
        { url: 'static/js/plugin-vueexport-helper-c27b6911.js', revision: null },
        { url: 'static/js/slotsHelper-d9161ce2.js', revision: null },
        { url: 'static/js/useDatailsInfo-e3cbbedb.js', revision: null },
        { url: 'static/js/useECharts-e831efcd.js', revision: null },
        { url: 'manifest.webmanifest', revision: '97281e4d0104dc2e4969c0deb8bf30fd' },
      ],
      {},
    ),
    s.cleanupOutdatedCaches(),
    s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL('index.html')));
});
