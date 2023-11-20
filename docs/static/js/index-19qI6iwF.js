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
  em as m,
  a as d,
  o as f,
  c as h,
  h as x,
  w as C,
  f as N,
  eo as c,
  ep as g,
  g as k,
  t as I,
  u as R,
} from './index-nnTfcizh.js';
const S = { class: 'page-container' },
  B = N('span', null, '切换权限：', -1),
  T = p({
    name: 'RtPermissions',
    __name: 'index',
    setup(l) {
      const o = m(),
        s = () =>
          _(this, null, function* () {
            o.setRoles(o.roles === c.ADMIN ? c.TEST : c.ADMIN), g(o.roles);
          });
      return (i, t) => {
        const n = d('el-button');
        return (
          f(),
          h('div', S, [B, x(n, { onClick: s }, { default: C(() => [k(I(R(o).roles), 1)]), _: 1 })])
        );
      };
    },
  });
export { T as default };
