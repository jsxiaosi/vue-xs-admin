import {
  d as m,
  A as n,
  a as f,
  o as s,
  e as o,
  w as d,
  bM as u,
  M as t,
  c,
  f as p,
} from './index-nnTfcizh.js';
import { _ } from './plugin-vueexport-helper-x3n3nnut.js';
const v = { class: 'svg', 'aria-hidden': !0 },
  x = ['xlink:href', 'fill'],
  g = m({
    __name: 'index',
    props: {
      prefix: { type: String, default: 'icon' },
      name: { type: String, required: !0 },
      color: { type: String, default: '#333' },
      className: { type: String, default: '' },
    },
    setup(e) {
      const a = e,
        l = n(() => a.name.indexOf('iEL') != -1),
        i = n(() => `#${a.prefix}-${a.name}`);
      return (y, h) => {
        const r = f('el-icon');
        return l.value
          ? (s(),
            o(
              r,
              { key: 0, class: t(`svg-icon ${e.className}`) },
              { default: d(() => [(s(), o(u(e.name)))]), _: 1 },
              8,
              ['class'],
            ))
          : (s(),
            c(
              'i',
              { key: 1, class: t(['svg-icon', e.className]) },
              [
                (s(),
                c('svg', v, [p('use', { 'xlink:href': i.value, fill: e.color }, null, 8, x)])),
              ],
              2,
            ));
      };
    },
  }),
  C = _(g, [['__scopeId', 'data-v-09ff63c6']]);
export { C as S };
