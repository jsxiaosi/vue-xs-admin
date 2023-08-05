var _ = (l, o, s) =>
  new Promise((i, t) => {
    var n = (e) => {
        try {
          a(s.next(e));
        } catch (c) {
          t(c);
        }
      },
      p = (e) => {
        try {
          a(s.throw(e));
        } catch (c) {
          t(c);
        }
      },
      a = (e) => (e.done ? i(e.value) : Promise.resolve(e.value).then(n, p));
    a((s = s.apply(l, o)).next());
  });
import {
  d as u,
  cn as d,
  a as m,
  o as f,
  c as h,
  f as x,
  w as C,
  g as N,
  co as r,
  cp as g,
  h as k,
  t as I,
  y as R,
} from './index-4053894a.js';
const S = { class: 'page-container' },
  y = N('span', null, '切换权限：', -1),
  E = u({
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
          h('div', S, [y, x(n, { onClick: s }, { default: C(() => [k(I(R(o).roles), 1)]), _: 1 })])
        );
      };
    },
  });
export { E as default };
