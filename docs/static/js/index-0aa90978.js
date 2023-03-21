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
import { _ as g } from './index.vuevuetypescriptsetuptruelang-35f75f94.js';
import {
  d as v,
  bN as x,
  j as h,
  o as m,
  c as f,
  f as l,
  w as d,
  g as u,
  b,
  e as N,
  $ as w,
  al as A,
  bf as T,
} from './index-dfb446be.js';
import './slotsHelper-041e8ece.js';
const k = u('div', { class: 'card-header' }, [u('span', null, '异步组件')], -1),
  y = v({
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
          t = (([s, e] = x(() => n())), (s = yield s), e(), s),
          _ = h(t),
          i = [
            { label: 'Date', prop: 'date' },
            { label: 'Name', prop: 'name' },
            { label: 'Address', prop: 'address' },
          ];
        return (o, a) => {
          const r = b('el-card');
          return (
            m(),
            f('div', null, [
              l(
                r,
                { class: 'box-card' },
                {
                  header: d(() => [k]),
                  default: d(() => [
                    l(g, { data: _.value, border: '', 'row-key': 'date', option: i }, null, 8, [
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
        const n = b('el-card'),
          t = T('loading');
        return (
          m(),
          f('div', null, [
            (m(),
            N(A, null, {
              default: d(() => [l(y)]),
              fallback: d(() => [
                w(
                  l(
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
