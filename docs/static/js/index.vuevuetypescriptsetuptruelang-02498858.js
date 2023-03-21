var S = Object.defineProperty,
  $ = Object.defineProperties;
var k = Object.getOwnPropertyDescriptors;
var _ = Object.getOwnPropertySymbols;
var v = Object.prototype.hasOwnProperty,
  w = Object.prototype.propertyIsEnumerable;
var b = (n, t, e) =>
    t in n ? S(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : (n[t] = e),
  i = (n, t) => {
    for (var e in t || (t = {})) v.call(t, e) && b(n, e, t[e]);
    if (_) for (var e of _(t)) w.call(t, e) && b(n, e, t[e]);
    return n;
  },
  m = (n, t) => $(n, k(t));
import { g as h } from './slotsHelper-52a5be6b.js';
import {
  d as O,
  f as s,
  b as d,
  i as B,
  o as f,
  c as C,
  w as g,
  F as I,
  a as y,
  m as P,
  e as F,
  l as L,
  n as N,
  p as V,
  q,
} from './index-ad4df6b0.js';
function j(n) {
  return (
    typeof n == 'function' || (Object.prototype.toString.call(n) === '[object Object]' && !B(n))
  );
}
const x = O({
    name: 'CtTableItem',
    props: { item: { type: Object, default: () => {} } },
    setup(n, { slots: t }) {
      const { item: e } = n;
      function u() {
        return s(d('el-table-column'), e, null);
      }
      function c() {
        let r = {
          default: (o) => h(t, e.prop, o),
          header: (o) => h(t, `${e.prop}_header`, m(i({}, o), { customItem: e })),
        };
        return (
          t[`${e.prop}_header`] || delete r.header,
          t[e.prop] || delete r.default,
          s(d('el-table-column'), e, j(r) ? r : { default: () => [r] })
        );
      }
      function p() {
        const { render: r, render_header: o } = e;
        let a = { default: (l) => r(l), header: (l) => o(m(i({}, l), { customItem: e })) };
        return (
          o || delete a.header,
          r || delete a.default,
          s(d('el-table-column'), e, j(a) ? a : { default: () => [a] })
        );
      }
      return () => {
        const { isSlots: r, render: o, render_header: a } = e;
        return r ? c() : o || a ? p() : u();
      };
    },
  }),
  T = O({
    __name: 'index',
    props: {
      attribute: { type: Object, default: () => {} },
      option: { type: Object, default: () => {} },
    },
    setup(n) {
      return (t, e) => {
        const u = d('el-table');
        return (
          f(),
          C('div', null, [
            s(
              u,
              P(t.$attrs, { style: { width: '100%' } }),
              {
                default: g(() => [
                  (f(!0),
                  C(
                    I,
                    null,
                    y(
                      n.option,
                      (c, p) => (
                        f(),
                        F(
                          x,
                          { key: p, item: c },
                          L({ _: 2 }, [
                            y(Object.keys(t.$slots), (r) => ({
                              name: r,
                              fn: g((o) => [N(t.$slots, r, V(q(o || {})))]),
                            })),
                          ]),
                          1032,
                          ['item'],
                        )
                      ),
                    ),
                    128,
                  )),
                ]),
                _: 3,
              },
              16,
            ),
          ])
        );
      };
    },
  });
export { T as _ };
