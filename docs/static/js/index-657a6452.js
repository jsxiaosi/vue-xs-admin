import {
  d,
  z as a,
  y as t,
  o as s,
  e as o,
  w as _,
  W as f,
  K as c,
  c as l,
  g as p,
  b as u,
} from './index-dfb446be.js';
import { _ as x } from './plugin-vueexport-helper-c27b6911.js';
const y = { class: 'svg', 'aria-hidden': !0 },
  g = ['xlink:href', 'fill'],
  v = d({
    __name: 'index',
    props: {
      prefix: { type: String, default: 'icon' },
      name: { type: String, required: !0 },
      color: { type: String, default: '#333' },
      className: { type: String, default: '' },
    },
    setup(e) {
      const n = e,
        i = a(() => n.name.indexOf('iEL') != -1),
        r = a(() => `#${n.prefix}-${n.name}`);
      return (h, k) => {
        const m = u('el-icon');
        return t(i)
          ? (s(),
            o(
              m,
              { key: 0, class: c(e.className) },
              { default: _(() => [(s(), o(f(e.name)))]), _: 1 },
              8,
              ['class'],
            ))
          : (s(),
            l(
              'i',
              { key: 1, class: c(['svg-icon', e.className]) },
              [(s(), l('svg', y, [p('use', { 'xlink:href': t(r), fill: e.color }, null, 8, g)]))],
              2,
            ));
      };
    },
  });
const B = x(v, [['__scopeId', 'data-v-44fae264']]);
export { B as S };
