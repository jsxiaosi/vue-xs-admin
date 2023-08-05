import {
  d as u,
  N as r,
  j as p,
  C as i,
  a as m,
  o as c,
  c as d,
  g as f,
  t as _,
  y as v,
  f as V,
} from './index-4053894a.js';
import { u as y } from './useDatailsInfo-e3cbbedb.js';
const C = u({
  name: 'RtDetailsInfo',
  __name: 'index',
  setup(B) {
    const n = r(),
      { query: e } = n,
      o = p(''),
      { toDatailsInfo: t } = y();
    return (
      i(() => {
        t(`${e.id}`, 'query');
      }),
      (D, a) => {
        const s = m('el-input');
        return (
          c(),
          d('div', null, [
            f('span', null, 'page --- ' + _(v(e).id), 1),
            V(
              s,
              { modelValue: o.value, 'onUpdate:modelValue': a[0] || (a[0] = (l) => (o.value = l)) },
              null,
              8,
              ['modelValue'],
            ),
          ])
        );
      }
    );
  },
});
export { C as default };
