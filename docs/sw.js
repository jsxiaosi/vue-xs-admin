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
        { url: 'index.html', revision: '2963422b623254499a03881b9c616d1b' },
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
        { url: 'static/css/index-adf45584.css', revision: null },
        { url: 'static/css/index-bba35c75.css', revision: null },
        { url: 'static/css/index-d3dfd603.css', revision: null },
        { url: 'static/css/index-d6be9863.css', revision: null },
        { url: 'static/css/index-db426cc0.css', revision: null },
        { url: 'static/css/index-e6f2056f.css', revision: null },
        { url: 'static/css/index-f185689c.css', revision: null },
        { url: 'static/css/index-f5f7b6e5.css', revision: null },
        { url: 'static/css/index-f7aa930a.css', revision: null },
        { url: 'static/js/403-418869c8.js', revision: null },
        { url: 'static/js/404-d2cb8552.js', revision: null },
        { url: 'static/js/500-27501452.js', revision: null },
        { url: 'static/js/china-77152183.js', revision: null },
        { url: 'static/js/index-03c2fa83.js', revision: null },
        { url: 'static/js/index-1137ed11.js', revision: null },
        { url: 'static/js/index-18ff87d4.js', revision: null },
        { url: 'static/js/index-1e4d8c95.js', revision: null },
        { url: 'static/js/index-23e26cc6.js', revision: null },
        { url: 'static/js/index-244cc687.js', revision: null },
        { url: 'static/js/index-254994cd.js', revision: null },
        { url: 'static/js/index-27f5262f.js', revision: null },
        { url: 'static/js/index-29ba1c38.js', revision: null },
        { url: 'static/js/index-360a07e8.js', revision: null },
        { url: 'static/js/index-36677579.js', revision: null },
        { url: 'static/js/index-3b80748f.js', revision: null },
        { url: 'static/js/index-43f2c92e.js', revision: null },
        { url: 'static/js/index-51d795a6.js', revision: null },
        { url: 'static/js/index-5676dca4.js', revision: null },
        { url: 'static/js/index-59ff9516.js', revision: null },
        { url: 'static/js/index-5e788469.js', revision: null },
        { url: 'static/js/index-5e7904f6.js', revision: null },
        { url: 'static/js/index-63a70bf6.js', revision: null },
        { url: 'static/js/index-642591bc.js', revision: null },
        { url: 'static/js/index-6d54c014.js', revision: null },
        { url: 'static/js/index-6e6dc884.js', revision: null },
        { url: 'static/js/index-7190d95b.js', revision: null },
        { url: 'static/js/index-750df84b.js', revision: null },
        { url: 'static/js/index-79e8422d.js', revision: null },
        { url: 'static/js/index-8a0e2135.js', revision: null },
        { url: 'static/js/index-9b39a187.js', revision: null },
        { url: 'static/js/index-a9dd8732.js', revision: null },
        { url: 'static/js/index-aa7824f0.js', revision: null },
        { url: 'static/js/index-b1ecd13e.js', revision: null },
        { url: 'static/js/index-cc7ab084.js', revision: null },
        { url: 'static/js/index-d73bdffe.js', revision: null },
        { url: 'static/js/index-d7e4de18.js', revision: null },
        { url: 'static/js/index-d954d46b.js', revision: null },
        { url: 'static/js/index-dc753260.js', revision: null },
        { url: 'static/js/index-deb7f873.js', revision: null },
        { url: 'static/js/index-e6ff1b36.js', revision: null },
        { url: 'static/js/index-f760bf87.js', revision: null },
        { url: 'static/js/logo-46af6dfb.js', revision: null },
        { url: 'static/js/plugin-vueexport-helper-c27b6911.js', revision: null },
        { url: 'static/js/slotsHelper-bc9eae05.js', revision: null },
        { url: 'static/js/useDatailsInfo-805ca71f.js', revision: null },
        { url: 'static/js/useECharts-526f512d.js', revision: null },
        { url: 'manifest.webmanifest', revision: '97281e4d0104dc2e4969c0deb8bf30fd' },
      ],
      {},
    ),
    s.cleanupOutdatedCaches(),
    s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL('index.html')));
});
