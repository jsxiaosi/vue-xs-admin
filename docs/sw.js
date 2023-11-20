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
        { url: 'index.html', revision: 'e6325e8b274a30828958714c813272a9' },
        { url: 'registerSW.js', revision: '1e593af15a59751133e55eaa6702ba45' },
        { url: 'static/css/403-bkhIpbOh.css', revision: null },
        { url: 'static/css/404-2kFGCpFs.css', revision: null },
        { url: 'static/css/500-2AkKcNL-.css', revision: null },
        { url: 'static/css/index-0WaReEBk.css', revision: null },
        { url: 'static/css/index-1V05qxeU.css', revision: null },
        { url: 'static/css/index-1wPvSjaB.css', revision: null },
        { url: 'static/css/index-2Y2JrCby.css', revision: null },
        { url: 'static/css/index-3TK6qgte.css', revision: null },
        { url: 'static/css/index-7Ec9ZY7x.css', revision: null },
        { url: 'static/css/index-9Pt0NnB0.css', revision: null },
        { url: 'static/css/index-alVdSWpX.css', revision: null },
        { url: 'static/css/index-alzM4xYg.css', revision: null },
        { url: 'static/css/index-bYIZ_iVA.css', revision: null },
        { url: 'static/css/index-EXy4R07k.css', revision: null },
        { url: 'static/css/index-FiP_O13m.css', revision: null },
        { url: 'static/css/index-mjtED6hL.css', revision: null },
        { url: 'static/css/index-pGs-NG1O.css', revision: null },
        { url: 'static/css/index-r9AaxZo3.css', revision: null },
        { url: 'static/css/index-sfFfJs8n.css', revision: null },
        { url: 'static/css/index-SKCIG567.css', revision: null },
        { url: 'static/css/index-snaSsnp0.css', revision: null },
        { url: 'static/css/index-UhJWDnkC.css', revision: null },
        { url: 'static/css/index-uHQLZzQN.css', revision: null },
        { url: 'static/css/index-UNVnK0dI.css', revision: null },
        { url: 'static/css/index-uQXJFFSQ.css', revision: null },
        { url: 'static/css/index-WgRxVqWy.css', revision: null },
        { url: 'static/css/index-XMiUhAPg.css', revision: null },
        { url: 'static/css/upload-ZMFPzWV7.css', revision: null },
        { url: 'static/js/403-TU0r_KVX.js', revision: null },
        { url: 'static/js/404-8_KoFfGf.js', revision: null },
        { url: 'static/js/500-rmJYFlaz.js', revision: null },
        { url: 'static/js/china-0UDMtOrD.js', revision: null },
        { url: 'static/js/index-_vbJTAKL.js', revision: null },
        { url: 'static/js/index-19qI6iwF.js', revision: null },
        { url: 'static/js/index-1QLJCUvx.js', revision: null },
        { url: 'static/js/index-86k6j-k9.js', revision: null },
        { url: 'static/js/index-8YWqikos.js', revision: null },
        { url: 'static/js/index-90dD-eAp.js', revision: null },
        { url: 'static/js/index-9k5CdDkt.js', revision: null },
        { url: 'static/js/index-a80EClQg.js', revision: null },
        { url: 'static/js/index-C-GjAGbW.js', revision: null },
        { url: 'static/js/index-CDKwimIN.js', revision: null },
        { url: 'static/js/index-CFHqds1-.js', revision: null },
        { url: 'static/js/index-dGxlNsTe.js', revision: null },
        { url: 'static/js/index-ea58qXv_.js', revision: null },
        { url: 'static/js/index-FONJqPWB.js', revision: null },
        { url: 'static/js/index-gApcV0jB.js', revision: null },
        { url: 'static/js/index-HGILJS4Z.js', revision: null },
        { url: 'static/js/index-hGPlp0cL.js', revision: null },
        { url: 'static/js/index-JIIV2xI3.js', revision: null },
        { url: 'static/js/index-l5oHRN6z.js', revision: null },
        { url: 'static/js/index-lU3TWDVR.js', revision: null },
        { url: 'static/js/index-mgFlcoUT.js', revision: null },
        { url: 'static/js/index-NboloR2r.js', revision: null },
        { url: 'static/js/index-NIMX-qhp.js', revision: null },
        { url: 'static/js/index-NmZg206Z.js', revision: null },
        { url: 'static/js/index-nnTfcizh.js', revision: null },
        { url: 'static/js/index-PwQnGGmH.js', revision: null },
        { url: 'static/js/index-qWpU7_ML.js', revision: null },
        { url: 'static/js/index-QYC5_1Ha.js', revision: null },
        { url: 'static/js/index-rj1bB8Wc.js', revision: null },
        { url: 'static/js/index-St9kaETh.js', revision: null },
        { url: 'static/js/index-TWFFWxLK.js', revision: null },
        { url: 'static/js/index-tYw1SqgF.js', revision: null },
        { url: 'static/js/index-vHcaNPzD.js', revision: null },
        { url: 'static/js/index-wbR__xz5.js', revision: null },
        { url: 'static/js/index-XlAauLPD.js', revision: null },
        { url: 'static/js/index-xmdaN-be.js', revision: null },
        { url: 'static/js/index-xxqd4gbq.js', revision: null },
        { url: 'static/js/index-zQq-XoeC.js', revision: null },
        { url: 'static/js/logo-X81rH-3O.js', revision: null },
        { url: 'static/js/plugin-vueexport-helper-x3n3nnut.js', revision: null },
        { url: 'static/js/slotsHelper-203bQ7mL.js', revision: null },
        { url: 'static/js/upload-4xEuj583.js', revision: null },
        { url: 'static/js/useDatailsInfo-y7U6v0nK.js', revision: null },
        { url: 'static/js/useECharts-eiv5iSAH.js', revision: null },
        { url: 'static/js/useSortable-AL1AY06r.js', revision: null },
        { url: 'manifest.webmanifest', revision: '97281e4d0104dc2e4969c0deb8bf30fd' },
      ],
      {},
    ),
    s.cleanupOutdatedCaches(),
    s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL('index.html')));
});
