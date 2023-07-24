var i = (l, a, e) =>
  new Promise((o, n) => {
    var _ = (t) => {
        try {
          c(e.next(t));
        } catch (r) {
          n(r);
        }
      },
      s = (t) => {
        try {
          c(e.throw(t));
        } catch (r) {
          n(r);
        }
      },
      c = (t) => (t.done ? o(t.value) : Promise.resolve(t.value).then(_, s));
    c((e = e.apply(l, a)).next());
  });
import {
  d as p,
  a8 as u,
  j as d,
  a as m,
  o as f,
  c as g,
  f as h,
  w as v,
  h as w,
  t as x,
  g as C,
  cp as k,
} from './index-ae766c94.js';
const y = { class: 'page-container' },
  B = C('span', null, '切换权限：', -1),
  b = p({
    name: 'RtPower',
    __name: 'index',
    setup(l) {
      const a = u.getStorage('userInfo'),
        e = d(a ? a.power : ''),
        o = () =>
          i(this, null, function* () {
            (e.value = e.value === 'admin' ? 'test' : 'admin'), k(e.value);
          });
      return (n, _) => {
        const s = m('el-button');
        return (
          f(),
          g('div', y, [B, h(s, { onClick: o }, { default: v(() => [w(x(e.value), 1)]), _: 1 })])
        );
      };
    },
  });
export { b as default };
