import {
  d as u,
  Q as r,
  j as p,
  G as i,
  a as m,
  o as c,
  c as d,
  g as f,
  t as _,
  u as v,
  f as V,
} from './index-254994cd.js';
import { u as B } from './useDatailsInfo-805ca71f.js';
const I = u({
  name: 'RtDetailsInfo',
  __name: 'index',
  setup(D) {
    const n = r(),
      { query: e } = n,
      o = p(''),
      { toDatailsInfo: t } = B();
    return (
      i(() => {
        t(`${e.id}`, 'query');
      }),
      (g, a) => {
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
export { I as default };
