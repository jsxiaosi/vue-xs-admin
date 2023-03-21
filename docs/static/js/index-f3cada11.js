var u = Object.defineProperty,
  l = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty,
  m = Object.prototype.propertyIsEnumerable;
var o = (s, a, e) =>
    a in s ? u(s, a, { enumerable: !0, configurable: !0, writable: !0, value: e }) : (s[a] = e),
  n = (s, a) => {
    for (var e in a || (a = {})) f.call(a, e) && o(s, e, a[e]);
    if (t) for (var e of t(a)) m.call(a, e) && o(s, e, a[e]);
    return s;
  },
  r = (s, a) => l(s, i(a));
import { d as c, O as _, C as d, o as B, c as D, g, t as I, y as k } from './index-ad4df6b0.js';
import { u as x } from './useDatailsInfo-7c966caf.js';
const y = c({ name: 'RtDetailsInfo' }),
  M = c(
    r(n({}, y), {
      setup(s) {
        const a = _(),
          { params: e } = a,
          { toDatailsInfo: p } = x();
        return (
          d(() => {
            p(`${e.id}`, 'params');
          }),
          (C, R) => (B(), D('div', null, [g('span', null, 'page-params --- ' + I(k(e).id), 1)]))
        );
      },
    }),
  );
export { M as default };
