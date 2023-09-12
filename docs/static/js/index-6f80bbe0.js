var _ = (l, o, s) =>
  new Promise((i, t) => {
    var n = (e) => {
        try {
          a(s.next(e));
        } catch (r) {
          t(r);
        }
      },
      u = (e) => {
        try {
          a(s.throw(e));
        } catch (r) {
          t(r);
        }
      },
      a = (e) => (e.done ? i(e.value) : Promise.resolve(e.value).then(n, u));
    a((s = s.apply(l, o)).next());
  });
import {
  d as p,
  el as d,
  a as m,
  o as f,
  c as h,
  f as x,
  w as C,
  g as N,
  en as c,
  eo as g,
  h as k,
  t as I,
  u as R,
} from './index-70a96a1c.js';
const S = { class: 'page-container' },
  B = N('span', null, '切换权限：', -1),
  T = p({
    name: 'RtPermissions',
    __name: 'index',
    setup(l) {
      const o = d(),
        s = () =>
          _(this, null, function* () {
            o.setRoles(o.roles === c.ADMIN ? c.TEST : c.ADMIN), g(o.roles);
          });
      return (i, t) => {
        const n = m('el-button');
        return (
          f(),
          h('div', S, [B, x(n, { onClick: s }, { default: C(() => [k(I(R(o).roles), 1)]), _: 1 })])
        );
      };
    },
  });
export { T as default };
