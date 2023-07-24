import {
  d as m,
  z as n,
  a as d,
  o as s,
  e as t,
  w as _,
  V as f,
  J as o,
  c,
  g as u,
} from './index-ae766c94.js';
import { _ as p } from './plugin-vueexport-helper-c27b6911.js';
const x = { class: 'svg', 'aria-hidden': !0 },
  v = ['xlink:href', 'fill'],
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
        const r = d('el-icon');
        return l.value
          ? (s(),
            t(
              r,
              { key: 0, class: o(e.className) },
              { default: _(() => [(s(), t(f(e.name)))]), _: 1 },
              8,
              ['class'],
            ))
          : (s(),
            c(
              'i',
              { key: 1, class: o(['svg-icon', e.className]) },
              [
                (s(),
                c('svg', x, [u('use', { 'xlink:href': i.value, fill: e.color }, null, 8, v)])),
              ],
              2,
            ));
      };
    },
  });
const C = p(g, [['__scopeId', 'data-v-44fae264']]);
export { C as S };
