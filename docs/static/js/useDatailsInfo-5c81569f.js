var d = Object.defineProperty,
  f = Object.defineProperties;
var g = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var u = Object.prototype.hasOwnProperty,
  r = Object.prototype.propertyIsEnumerable;
var l = (t, a, e) =>
    a in t ? d(t, a, { enumerable: !0, configurable: !0, writable: !0, value: e }) : (t[a] = e),
  p = (t, a) => {
    for (var e in a || (a = {})) u.call(a, e) && l(t, e, a[e]);
    if (i) for (var e of i(a)) r.call(a, e) && l(t, e, a[e]);
    return t;
  },
  c = (t, a) => f(t, g(a));
var D = (t, a) => {
  var e = {};
  for (var s in t) u.call(t, s) && a.indexOf(s) < 0 && (e[s] = t[s]);
  if (t != null && i) for (var s of i(t)) a.indexOf(s) < 0 && r.call(t, s) && (e[s] = t[s]);
  return e;
};
import { R as $, S as y } from './index-70a96a1c.js';
const m = () => {
  const t = $();
  return {
    openDetails: (e) => {
      const n = e,
        { title: s } = n,
        o = D(n, ['title']);
      y().handleMultiTabs('add', c(p({}, o), { meta: { title: s } }));
      try {
        t.push({ path: o.path, query: o.query });
      } catch (h) {
        console.log(h);
      }
    },
  };
};
function _() {
  const { openDetails: t } = m();
  function a(e, s) {
    t(
      s === 'query'
        ? {
            path: '/details_page/details_info',
            name: 'RtDetailsInfo',
            query: { id: `${e}` },
            title: { 'zh-CN': `详情页-${e}`, en: `pageDatails-${e}` },
          }
        : {
            path: `/details_page/details_params/${e}`,
            name: 'RtDetailsParams',
            title: { 'zh-CN': `详情页-params-${e}`, en: `pageDatails-${e}` },
          },
    );
  }
  return { toDatailsInfo: a };
}
export { _ as u };
