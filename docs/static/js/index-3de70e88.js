var g = Object.defineProperty,
  h = Object.defineProperties;
var v = Object.getOwnPropertyDescriptors;
var u = Object.getOwnPropertySymbols;
var w = Object.prototype.hasOwnProperty,
  C = Object.prototype.propertyIsEnumerable;
var i = (o, t, e) =>
    t in o ? g(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : (o[t] = e),
  p = (o, t) => {
    for (var e in t || (t = {})) w.call(t, e) && i(o, e, t[e]);
    if (u) for (var e of u(t)) C.call(t, e) && i(o, e, t[e]);
    return o;
  },
  d = (o, t) => h(o, v(t));
var f = (o, t, e) =>
  new Promise((s, n) => {
    var _ = (a) => {
        try {
          r(e.next(a));
        } catch (l) {
          n(l);
        }
      },
      c = (a) => {
        try {
          r(e.throw(a));
        } catch (l) {
          n(l);
        }
      },
      r = (a) => (a.done ? s(a.value) : Promise.resolve(a.value).then(_, c));
    r((e = e.apply(o, t)).next());
  });
import {
  d as m,
  a9 as x,
  j as b,
  o as k,
  c as y,
  f as B,
  w as N,
  h as V,
  t as I,
  g as R,
  cg as S,
  b as j,
} from './index-ad4df6b0.js';
const A = { class: 'page-container' },
  D = R('span', null, '切换权限：', -1),
  E = m({ name: 'RtPower' }),
  q = m(
    d(p({}, E), {
      setup(o) {
        const t = x.getStorage('userInfo'),
          e = b(t ? t.power : ''),
          s = () =>
            f(this, null, function* () {
              (e.value = e.value === 'admin' ? 'test' : 'admin'), S(e.value);
            });
        return (n, _) => {
          const c = j('el-button');
          return (
            k(),
            y('div', A, [D, B(c, { onClick: s }, { default: N(() => [V(I(e.value), 1)]), _: 1 })])
          );
        };
      },
    }),
  );
export { q as default };
