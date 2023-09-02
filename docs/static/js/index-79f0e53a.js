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
  cB as d,
  a as m,
  o as f,
  c as h,
  f as x,
  w as C,
  g as N,
  cD as r,
  cE as g,
  h as k,
  t as B,
  u as D,
} from './index-1eb240fe.js';
const E = { class: 'page-container' },
  I = N('span', null, '切换权限：', -1),
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
          h('div', E, [I, x(n, { onClick: s }, { default: C(() => [k(B(D(o).roles), 1)]), _: 1 })])
        );
      };
    },
  });
export { T as default };
