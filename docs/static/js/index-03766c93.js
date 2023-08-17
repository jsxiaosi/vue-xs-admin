import {
  d as u,
  P as r,
  j as p,
  D as i,
  a as m,
  o as c,
  c as d,
  g as f,
  t as _,
  u as v,
  f as D,
} from './index-d51bcef7.js';
import { u as V } from './useDatailsInfo-14c0b055.js';
const I = u({
  name: 'RtDetailsInfo',
  __name: 'index',
  setup(B) {
    const n = r(),
      { query: e } = n,
      o = p(''),
      { toDatailsInfo: t } = V();
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
            D(
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
