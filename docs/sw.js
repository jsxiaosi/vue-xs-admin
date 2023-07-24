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
        { url: 'index.html', revision: '4cb18ab2a753bb77c5fb9a525e87a1fe' },
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
        { url: 'static/js/404-4791d575.js', revision: null },
        { url: 'static/js/china-77152183.js', revision: null },
        { url: 'static/js/index-04428a9a.js', revision: null },
        { url: 'static/js/index-0706820b.js', revision: null },
        { url: 'static/js/index-099fdc3f.js', revision: null },
        { url: 'static/js/index-0b3e3832.js', revision: null },
        { url: 'static/js/index-0c8b3dbe.js', revision: null },
        { url: 'static/js/index-0d10bd90.js', revision: null },
        { url: 'static/js/index-14427275.js', revision: null },
        { url: 'static/js/index-153f8713.js', revision: null },
        { url: 'static/js/index-180a48c4.js', revision: null },
        { url: 'static/js/index-201d13a0.js', revision: null },
        { url: 'static/js/index-25123309.js', revision: null },
        { url: 'static/js/index-2761d9e4.js', revision: null },
        { url: 'static/js/index-35256564.js', revision: null },
        { url: 'static/js/index-3d324388.js', revision: null },
        { url: 'static/js/index-431e7f9b.js', revision: null },
        { url: 'static/js/index-4ba9a5bf.js', revision: null },
        { url: 'static/js/index-4bbc20e9.js', revision: null },
        { url: 'static/js/index-51d795a6.js', revision: null },
        { url: 'static/js/index-6f124d46.js', revision: null },
        { url: 'static/js/index-7c9d5e96.js', revision: null },
        { url: 'static/js/index-962c3cf5.js', revision: null },
        { url: 'static/js/index-9b5547e0.js', revision: null },
        { url: 'static/js/index-a100e76a.js', revision: null },
        { url: 'static/js/index-a1b81904.js', revision: null },
        { url: 'static/js/index-a282fb72.js', revision: null },
        { url: 'static/js/index-a9b567c3.js', revision: null },
        { url: 'static/js/index-b0c1482b.js', revision: null },
        { url: 'static/js/index-b43ab044.js', revision: null },
        { url: 'static/js/index-b9d9710e.js', revision: null },
        { url: 'static/js/index-bc7bcc7f.js', revision: null },
        { url: 'static/js/index-c4068bee.js', revision: null },
        { url: 'static/js/index-cbbb046b.js', revision: null },
        { url: 'static/js/index-d6fd1016.js', revision: null },
        { url: 'static/js/index-d9c171b4.js', revision: null },
        { url: 'static/js/index-f97f4a7e.js', revision: null },
        { url: 'static/js/index-faee19c3.js', revision: null },
        { url: 'static/js/index-fe1ad389.js', revision: null },
        { url: 'static/js/index-ffdd5586.js', revision: null },
        { url: 'static/js/index.vuevuetypescriptsetuptruelang-9f3575d8.js', revision: null },
        { url: 'static/js/logo-46af6dfb.js', revision: null },
        { url: 'static/js/plugin-vueexport-helper-c27b6911.js', revision: null },
        { url: 'static/js/slotsHelper-811d5ff1.js', revision: null },
        { url: 'static/js/useDatailsInfo-9657a62e.js', revision: null },
        { url: 'static/js/useECharts-48191d71.js', revision: null },
        { url: 'manifest.webmanifest', revision: '97281e4d0104dc2e4969c0deb8bf30fd' },
      ],
      {},
    ),
    s.cleanupOutdatedCaches(),
    s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL('index.html')));
});
