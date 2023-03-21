var f = Object.defineProperty,
  m = Object.defineProperties;
var _ = Object.getOwnPropertyDescriptors;
var s = Object.getOwnPropertySymbols;
var v = Object.prototype.hasOwnProperty,
  V = Object.prototype.propertyIsEnumerable;
var l = (t, e, o) =>
    e in t ? f(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : (t[e] = o),
  u = (t, e) => {
    for (var o in e || (e = {})) v.call(e, o) && l(t, o, e[o]);
    if (s) for (var o of s(e)) V.call(e, o) && l(t, o, e[o]);
    return t;
  },
  r = (t, e) => m(t, _(e));
import {
  d as p,
  O as y,
  j as B,
  C as D,
  o as g,
  c as C,
  g as I,
  t as k,
  y as q,
  f as x,
  b as N,
} from './index-ad4df6b0.js';
import { u as R } from './useDatailsInfo-7c966caf.js';
const b = p({ name: 'RtDetailsInfo' }),
  S = p(
    r(u({}, b), {
      setup(t) {
        const e = y(),
          { query: o } = e,
          a = B(''),
          { toDatailsInfo: c } = R();
        return (
          D(() => {
            c(`${o.id}`, 'query');
          }),
          (j, n) => {
            const i = N('el-input');
            return (
              g(),
              C('div', null, [
                I('span', null, 'page --- ' + k(q(o).id), 1),
                x(
                  i,
                  {
                    modelValue: a.value,
                    'onUpdate:modelValue': n[0] || (n[0] = (d) => (a.value = d)),
                  },
                  null,
                  8,
                  ['modelValue'],
                ),
              ])
            );
          }
        );
      },
    }),
  );
export { S as default };
