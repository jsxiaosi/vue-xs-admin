var $ = Object.defineProperty,
  I = Object.defineProperties;
var O = Object.getOwnPropertyDescriptors;
var v = Object.getOwnPropertySymbols;
var T = Object.prototype.hasOwnProperty,
  A = Object.prototype.propertyIsEnumerable;
var C = (o, e, t) =>
    e in o ? $(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (o[e] = t),
  b = (o, e) => {
    for (var t in e || (e = {})) T.call(e, t) && C(o, t, e[t]);
    if (v) for (var t of v(e)) A.call(e, t) && C(o, t, e[t]);
    return o;
  },
  f = (o, e) => I(o, O(e));
import {
  d as w,
  f as l,
  a as _,
  i as L,
  o as h,
  c as g,
  w as s,
  F as k,
  b as N,
  e as j,
  l as G,
  n as R,
  p as D,
  q as E,
  m as P,
  u as z,
  v as K,
  g as d,
  t as m,
  s as y,
  x as V,
  y as H,
} from './index-254994cd.js';
import { g as x } from './slotsHelper-bc9eae05.js';
import { _ as M } from './plugin-vueexport-helper-c27b6911.js';
function B(o) {
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
        return l(_('el-table-column'), t, null);
      }
      function r() {
        let n = {
          default: (a) => x(e, t.prop, a),
          header: (a) => x(e, `${t.prop}_header`, f(b({}, a), { customItem: t })),
        };
        return (
          e[`${t.prop}_header`] || delete n.header,
          e[t.prop] || delete n.default,
          l(_('el-table-column'), t, B(n) ? n : { default: () => [n] })
        );
      }
      function p() {
        const { render: n, render_header: a } = t;
        let i = { default: (c) => n(c), header: (c) => a(f(b({}, c), { customItem: t })) };
        return (
          a || delete i.header,
          n || delete i.default,
          l(_('el-table-column'), t, B(i) ? i : { default: () => [i] })
        );
      }
      return () => {
        const { isSlots: n, render: a, render_header: i } = t;
        return n ? r() : a || i ? p() : u();
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
        h(),
        g('div', null, [
          l(
            z(K),
            P(e.$attrs, { data: e.data, border: e.border, style: { width: '100%' } }),
            {
              default: s(() => [
                (h(!0),
                g(
                  k,
                  null,
                  N(
                    e.option,
                    (u, r) => (
                      h(),
                      j(
                        q,
                        { key: r, item: u },
                        G({ _: 2 }, [
                          N(Object.keys(e.$slots), (p) => ({
                            name: p,
                            fn: s((n) => [R(e.$slots, p, D(E(n)))]),
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
            render_header: (r) => y('span', {}, `render_header：${r.customItem.label}`),
            render: (r) => y('span', {}, `render：${r.row.address}`),
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
            render: (r) => {
              const p = [
                { label: 'Date', prop: 'date', sortable: !0 },
                { label: 'Name', prop: 'name', isSlots: !0 },
              ];
              return l('div', { style: { padding: '0 8px' } }, [
                l(S, { data: [r.row], border: !0, 'row-key': 'date', option: p }, null),
              ]);
            },
          },
          { label: 'Date', prop: 'date', sortable: !0 },
          { label: 'Name', prop: 'name', isSlots: !0 },
          {
            label: 'Address',
            prop: 'address',
            render_header: (r) => y('span', {}, `render_header：${r.customItem.label}`),
            render: (r) => y('span', {}, `render：${r.row.address}`),
          },
        ];
      return (r, p) => {
        const n = _('el-card');
        return (
          h(),
          g('div', null, [
            l(
              n,
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
              n,
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
  });
const ee = M(U, [['__scopeId', 'data-v-776d532e']]);
export { ee as default };
