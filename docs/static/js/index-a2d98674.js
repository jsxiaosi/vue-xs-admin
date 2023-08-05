import { _ as l } from './index.vuevuetypescriptsetuptruelang-9e0b1ef3.js';
import {
  d as b,
  a as h,
  o as v,
  c as f,
  f as o,
  w as a,
  g as r,
  t as d,
  s as n,
  u as S,
  v as g,
} from './index-4053894a.js';
import { _ as x } from './plugin-vueexport-helper-c27b6911.js';
import './slotsHelper-d9161ce2.js';
const _ = (t) => (S('data-v-e1f1a820'), (t = t()), g(), t),
  w = _(() => r('div', { class: 'card-header' }, [r('span', null, '表格')], -1)),
  N = _(() => r('div', { class: 'card-header' }, [r('span', null, '嵌套表格')], -1)),
  y = b({
    __name: 'index',
    setup(t) {
      const i = [
          { label: 'Date', prop: 'date', sortable: !0 },
          { label: 'Name', prop: 'name', isSlots: !0 },
          {
            label: 'Address',
            prop: 'address',
            render_header: (e) => n('span', {}, `render_header：${e.customItem.label}`),
            render: (e) => n('span', {}, `render：${e.row.address}`),
          },
        ],
        p = [
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
            render: (e) => {
              const m = [
                { label: 'Date', prop: 'date', sortable: !0 },
                { label: 'Name', prop: 'name', isSlots: !0 },
              ];
              return o('div', { style: { padding: '0 8px' } }, [
                o(l, { data: [e.row], border: !0, 'row-key': 'date', option: m }, null),
              ]);
            },
          },
          { label: 'Date', prop: 'date', sortable: !0 },
          { label: 'Name', prop: 'name', isSlots: !0 },
          {
            label: 'Address',
            prop: 'address',
            render_header: (e) => n('span', {}, `render_header：${e.customItem.label}`),
            render: (e) => n('span', {}, `render：${e.row.address}`),
          },
        ];
      return (e, m) => {
        const c = h('el-card');
        return (
          v(),
          f('div', null, [
            o(
              c,
              { class: 'box-card' },
              {
                header: a(() => [w]),
                default: a(() => [
                  o(
                    l,
                    { data: p, border: '', 'row-key': 'date', option: i },
                    {
                      name_header: a((s) => [r('span', null, d(`插槽：${s.customItem.label}`), 1)]),
                      name: a((s) => [r('span', null, d(s.row.name), 1)]),
                      _: 1,
                    },
                  ),
                ]),
                _: 1,
              },
            ),
            o(
              c,
              { class: 'box-card' },
              {
                header: a(() => [N]),
                default: a(() => [
                  o(
                    l,
                    { data: p, border: '', 'row-key': 'date', option: u },
                    {
                      name_header: a((s) => [r('span', null, d(`插槽：${s.customItem.label}`), 1)]),
                      name: a((s) => [r('span', null, d(s.row.name), 1)]),
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
const G = x(y, [['__scopeId', 'data-v-e1f1a820']]);
export { G as default };
