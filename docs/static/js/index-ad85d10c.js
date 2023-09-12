import {
  d as n,
  Q as r,
  A as _,
  j as i,
  c1 as d,
  bQ as l,
  o as u,
  c as m,
  g as p,
} from './index-70a96a1c.js';
import { _ as v } from './plugin-vueexport-helper-c27b6911.js';
const f = { class: 'embedded-page' },
  x = ['src'],
  g = n({
    __name: 'index',
    setup(h) {
      const a = r(),
        o = _(() => {
          var s;
          return (s = a.meta) == null ? void 0 : s.externalUrl;
        }),
        e = i(!0),
        t = () => {
          e.value = !e.value;
        };
      return (s, B) => {
        const c = d('loading');
        return l(
          (u(),
          m('div', f, [p('iframe', { class: 'iframe', src: o.value, onLoad: t }, null, 40, x)])),
          [[c, e.value]],
        );
      };
    },
  });
const y = v(g, [['__scopeId', 'data-v-ee014242']]);
export { y as default };
