import {
  d as u,
  Q as r,
  j as p,
  D as i,
  a as m,
  o as c,
  c as d,
  f,
  t as _,
  u as v,
  h as D,
} from './index-nnTfcizh.js';
import { u as V } from './useDatailsInfo-y7U6v0nK.js';
const g = u({
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
      (x, a) => {
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
export { g as default };
