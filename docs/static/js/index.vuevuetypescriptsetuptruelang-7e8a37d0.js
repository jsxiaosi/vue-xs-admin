var F = Object.defineProperty,
  _ = Object.defineProperties;
var O = Object.getOwnPropertyDescriptors;
var f = Object.getOwnPropertySymbols;
var N = Object.prototype.hasOwnProperty,
  j = Object.prototype.propertyIsEnumerable;
var h = (o, e, t) =>
    e in o ? F(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (o[e] = t),
  u = (o, e) => {
    for (var t in e || (e = {})) N.call(e, t) && h(o, t, e[t]);
    if (f) for (var t of f(e)) j.call(e, t) && h(o, t, e[t]);
    return o;
  },
  c = (o, e) => _(o, O(e));
import {
  d as B,
  f as p,
  a as y,
  i as R,
  o as m,
  c as b,
  w as C,
  F as $,
  b as g,
  m as k,
  y as x,
  cC as T,
  e as v,
  l as E,
  n as I,
  p as P,
  q as z,
} from './index-ae766c94.js';
import { g as w } from './slotsHelper-5252f8f0.js';
function S(o) {
  return (
    typeof o == 'function' || (Object.prototype.toString.call(o) === '[object Object]' && !R(o))
  );
}
const K = B({
    name: 'CtTableItem',
    props: { item: { type: Object, default: () => {} } },
    setup(o, { slots: e }) {
      const { item: t } = o;
      function i() {
        return p(y('el-table-column'), t, null);
      }
      function d() {
        let n = {
          default: (r) => w(e, t.prop, r),
          header: (r) => w(e, `${t.prop}_header`, c(u({}, r), { customItem: t })),
        };
        return (
          e[`${t.prop}_header`] || delete n.header,
          e[t.prop] || delete n.default,
          p(y('el-table-column'), t, S(n) ? n : { default: () => [n] })
        );
      }
      function l() {
        const { render: n, render_header: r } = t;
        let a = { default: (s) => n(s), header: (s) => r(c(u({}, s), { customItem: t })) };
        return (
          r || delete a.header,
          n || delete a.default,
          p(y('el-table-column'), t, S(a) ? a : { default: () => [a] })
        );
      }
      return () => {
        const { isSlots: n, render: r, render_header: a } = t;
        return n ? d() : r || a ? l() : i();
      };
    },
  }),
  M = B({
    __name: 'index',
    props: {
      data: {},
      size: {},
      width: {},
      height: {},
      maxHeight: {},
      fit: { type: Boolean },
      stripe: { type: Boolean },
      border: { type: Boolean },
      rowKey: { type: [String, Function] },
      context: {},
      showHeader: { type: Boolean },
      showSummary: { type: Boolean },
      sumText: {},
      summaryMethod: { type: Function },
      rowClassName: { type: [String, Function] },
      rowStyle: { type: Function },
      cellClassName: { type: [String, Function] },
      cellStyle: { type: Function },
      headerRowClassName: { type: [String, Function] },
      headerRowStyle: { type: Function },
      headerCellClassName: { type: [String, Function] },
      headerCellStyle: { type: Function },
      highlightCurrentRow: { type: Boolean },
      currentRowKey: {},
      emptyText: {},
      expandRowKeys: {},
      defaultExpandAll: { type: Boolean },
      defaultSort: {},
      tooltipEffect: {},
      tooltipOptions: {},
      spanMethod: { type: Function },
      selectOnIndeterminate: { type: Boolean },
      indent: {},
      treeProps: {},
      lazy: { type: Boolean },
      load: { type: Function },
      className: {},
      style: {},
      tableLayout: {},
      scrollbarAlwaysOn: { type: Boolean },
      flexible: { type: Boolean },
      showOverflowTooltip: { type: [Boolean, Object] },
      option: {},
    },
    setup(o) {
      return (e, t) => (
        m(),
        b('div', null, [
          p(
            x(T),
            k(e.$attrs, { data: e.data, border: e.border, style: { width: '100%' } }),
            {
              default: C(() => [
                (m(!0),
                b(
                  $,
                  null,
                  g(
                    e.option,
                    (i, d) => (
                      m(),
                      v(
                        K,
                        { key: d, item: i },
                        E({ _: 2 }, [
                          g(Object.keys(e.$slots), (l) => ({
                            name: l,
                            fn: C((n) => [I(e.$slots, l, P(z(n)))]),
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
            ['data', 'border'],
          ),
        ])
      );
    },
  });
export { M as _ };
