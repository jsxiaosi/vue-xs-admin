var p = (c, s, e) =>
  new Promise((n, t) => {
    var _ = (a) => {
        try {
          o(e.next(a));
        } catch (r) {
          t(r);
        }
      },
      i = (a) => {
        try {
          o(e.throw(a));
        } catch (r) {
          t(r);
        }
      },
      o = (a) => (a.done ? n(a.value) : Promise.resolve(a.value).then(_, i));
    o((e = e.apply(c, s)).next());
  });
import { _ as x } from './index.vuevuetypescriptsetuptruelang-9f3575d8.js';
import {
  d as v,
  bS as b,
  j as h,
  a as f,
  o as m,
  c as g,
  f as d,
  w as l,
  g as u,
  bi as w,
  e as N,
  Z as A,
  aj as S,
} from './index-153f8713.js';
import './slotsHelper-811d5ff1.js';
const T = u('div', { class: 'card-header' }, [u('span', null, '异步组件')], -1),
  k = v({
    __name: 'ToModal',
    setup(c) {
      return p(this, null, function* () {
        let s, e;
        const n = () =>
            new Promise((o) => {
              setTimeout(() => {
                o([
                  { date: '2016-05-03', name: 'Tom', address: 'No. 189, Grove St, Los Angeles' },
                  { date: '2016-05-02', name: 'Tom', address: 'No. 189, Grove St, Los Angeles' },
                  { date: '2016-05-04', name: 'Tom', address: 'No. 189, Grove St, Los Angeles' },
                  { date: '2016-05-01', name: 'Tom', address: 'No. 189, Grove St, Los Angeles' },
                ]);
              }, 3e3);
            }),
          t = (([s, e] = b(() => n())), (s = yield s), e(), s),
          _ = h(t),
          i = [
            { label: 'Date', prop: 'date' },
            { label: 'Name', prop: 'name' },
            { label: 'Address', prop: 'address' },
          ];
        return (o, a) => {
          const r = f('el-card');
          return (
            m(),
            g('div', null, [
              d(
                r,
                { class: 'box-card' },
                {
                  header: l(() => [T]),
                  default: l(() => [
                    d(x, { data: _.value, border: '', 'row-key': 'date', option: i }, null, 8, [
                      'data',
                    ]),
                  ]),
                  _: 1,
                },
              ),
            ])
          );
        };
      });
    },
  }),
  G = v({
    __name: 'index',
    setup(c) {
      return (s, e) => {
        const n = f('el-card'),
          t = w('loading');
        return (
          m(),
          g('div', null, [
            (m(),
            N(S, null, {
              default: l(() => [d(k)]),
              fallback: l(() => [
                A(
                  d(
                    n,
                    { 'element-loading-text': '异步组件加载中。。。。。', class: 'loading' },
                    null,
                    512,
                  ),
                  [[t, !0]],
                ),
              ]),
              _: 1,
            })),
          ])
        );
      };
    },
  });
export { G as default };
