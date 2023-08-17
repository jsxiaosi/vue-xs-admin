var _ = (l, o, s) =>
  new Promise((i, t) => {
    var n = (e) => {
        try {
          a(s.next(e));
        } catch (c) {
          t(c);
        }
      },
      u = (e) => {
        try {
          a(s.throw(e));
        } catch (c) {
          t(c);
        }
      },
      a = (e) => (e.done ? i(e.value) : Promise.resolve(e.value).then(n, u));
    a((s = s.apply(l, o)).next());
  });
import {
  d as p,
  cz as d,
  a as m,
  o as f,
  c as h,
  f as C,
  w as x,
  g as N,
  cB as r,
  cC as g,
  h as k,
  t as B,
  u as I,
} from './index-d51bcef7.js';
const R = { class: 'page-container' },
  S = N('span', null, '切换权限：', -1),
  T = p({
    name: 'RtPermissions',
    __name: 'index',
    setup(l) {
      const o = d(),
        s = () =>
          _(this, null, function* () {
            o.setRoles(o.roles === r.ADMIN ? r.TEST : r.ADMIN), g(o.roles);
          });
      return (i, t) => {
        const n = m('el-button');
        return (
          f(),
          h('div', R, [S, C(n, { onClick: s }, { default: x(() => [k(B(I(o).roles), 1)]), _: 1 })])
        );
      };
    },
  });
export { T as default };
