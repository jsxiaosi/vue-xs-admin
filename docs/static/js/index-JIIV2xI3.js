var $ = Object.defineProperty,
  I = Object.defineProperties;
var O = Object.getOwnPropertyDescriptors;
var C = Object.getOwnPropertySymbols;
var T = Object.prototype.hasOwnProperty,
  A = Object.prototype.propertyIsEnumerable;
var v = (o, e, t) =>
    e in o ? $(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (o[e] = t),
  b = (o, e) => {
    for (var t in e || (e = {})) T.call(e, t) && v(o, t, e[t]);
    if (C) for (var t of C(e)) A.call(e, t) && v(o, t, e[t]);
    return o;
  },
  f = (o, e) => I(o, O(e));
import {
  d as w,
  h as l,
  a as h,
  i as L,
  o as _,
  c as g,
  w as s,
  F as k,
  l as j,
  n as G,
  p as R,
  b as N,
  q as D,
  e as E,
  m as P,
  u as z,
  v as K,
  t as m,
  f as d,
  s as y,
  x as V,
  y as H,
} from './index-nnTfcizh.js';
import { g as B } from './slotsHelper-203bQ7mL.js';
import { _ as M } from './plugin-vueexport-helper-x3n3nnut.js';
function x(o) {
  return (
    typeof o == 'function' || (Object.prototype.toString.call(o) === '[object Object]' && !L(o))
  );
}
const q = w({
    name: 'CtTableItem',
    props: { item: { type: Object, default: () => {} } },
    setup(o, { slots: e }) {
      const { item: t } = o;
      function u() {
        return l(h('el-table-column'), t, null);
      }
      function n() {
        let r = {
          default: (a) => B(e, t.prop, a),
          header: (a) => B(e, `${t.prop}_header`, f(b({}, a), { customItem: t })),
        };
        return (
          e[`${t.prop}_header`] || delete r.header,
          e[t.prop] || delete r.default,
          l(h('el-table-column'), t, x(r) ? r : { default: () => [r] })
        );
      }
      function p() {
        const { render: r, render_header: a } = t;
        let i = { default: (c) => r(c), header: (c) => a(f(b({}, c), { customItem: t })) };
        return (
          a || delete i.header,
          r || delete i.default,
          l(h('el-table-column'), t, x(i) ? i : { default: () => [i] })
        );
      }
      return () => {
        const { isSlots: r, render: a, render_header: i } = t;
        return r ? n() : a || i ? p() : u();
      };
    },
  }),
  S = w({
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
        _(),
        g('div', null, [
          l(
            z(K),
            P(e.$attrs, { data: e.data, border: e.border, style: { width: '100%' } }),
            {
              default: s(() => [
                (_(!0),
                g(
                  k,
                  null,
                  N(
                    e.option,
                    (u, n) => (
                      _(),
                      E(
                        q,
                        { key: n, item: u },
                        D({ _: 2 }, [
                          N(Object.keys(e.$slots), (p) => ({
                            name: p,
                            fn: s((r) => [R(e.$slots, p, G(j(r)))]),
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
  }),
  F = (o) => (V('data-v-776d532e'), (o = o()), H(), o),
  J = F(() => d('div', { class: 'card-header' }, [d('span', null, '表格')], -1)),
  Q = F(() => d('div', { class: 'card-header' }, [d('span', null, '嵌套表格')], -1)),
  U = w({
    __name: 'index',
    setup(o) {
      const e = [
          { label: 'Date', prop: 'date', sortable: !0 },
          { label: 'Name', prop: 'name', isSlots: !0 },
          {
            label: 'Address',
            prop: 'address',
            render_header: (n) => y('span', {}, `render_header：${n.customItem.label}`),
            render: (n) => y('span', {}, `render：${n.row.address}`),
          },
        ],
        t = [
          { date: '2016-05-03', name: 'Tom', address: 'No. 189, Grove St, Los Angeles' },
          { date: '2016-05-02', name: 'Tom', address: 'No. 189, Grove St, Los Angeles' },
          {
            date: '2016-05-04',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
            children: [
              { date: '2016-05-05', name: 'Tom', address: 'No. 189, Grove St, Los Angeles' },
              { date: '2016-05-06', name: 'Tom', address: 'No. 189, Grove St, Los Angeles' },
            ],
          },
          { date: '2016-05-01', name: 'Tom', address: 'No. 189, Grove St, Los Angeles' },
        ],
        u = [
          {
            type: 'expand',
            render: (n) => {
              const p = [
                { label: 'Date', prop: 'date', sortable: !0 },
                { label: 'Name', prop: 'name', isSlots: !0 },
              ];
              return l('div', { style: { padding: '0 8px' } }, [
                l(S, { data: [n.row], border: !0, 'row-key': 'date', option: p }, null),
              ]);
            },
          },
          { label: 'Date', prop: 'date', sortable: !0 },
          { label: 'Name', prop: 'name', isSlots: !0 },
          {
            label: 'Address',
            prop: 'address',
            render_header: (n) => y('span', {}, `render_header：${n.customItem.label}`),
            render: (n) => y('span', {}, `render：${n.row.address}`),
          },
        ];
      return (n, p) => {
        const r = h('el-card');
        return (
          _(),
          g('div', null, [
            l(
              r,
              { class: 'box-card' },
              {
                header: s(() => [J]),
                default: s(() => [
                  l(
                    S,
                    { data: t, border: '', 'row-key': 'date', option: e },
                    {
                      name_header: s((a) => [d('span', null, m(`插槽：${a.customItem.label}`), 1)]),
                      name: s((a) => [d('span', null, m(a.row.name), 1)]),
                      _: 1,
                    },
                  ),
                ]),
                _: 1,
              },
            ),
            l(
              r,
              { class: 'box-card' },
              {
                header: s(() => [Q]),
                default: s(() => [
                  l(
                    S,
                    { data: t, border: '', 'row-key': 'date', option: u },
                    {
                      name_header: s((a) => [d('span', null, m(`插槽：${a.customItem.label}`), 1)]),
                      name: s((a) => [d('span', null, m(a.row.name), 1)]),
                      _: 1,
                    },
                  ),
                ]),
                _: 1,
              },
            ),
          ])
        );
      };
    },
  }),
  ee = M(U, [['__scopeId', 'data-v-776d532e']]);
export { ee as default };
