import {
  d as c,
  P as r,
  A as _,
  j as i,
  ae as d,
  a0 as l,
  o as u,
  c as m,
  g as p,
} from './index-de615e01.js';
import { _ as v } from './plugin-vueexport-helper-c27b6911.js';
const f = { class: 'embedded-page' },
  x = ['src'],
  g = c({
    __name: 'index',
    setup(h) {
      const s = r(),
        o = _(() => {
          var a;
          return (a = s.meta) == null ? void 0 : a.externalUrl;
        }),
        e = i(!0),
        t = () => {
          e.value = !e.value;
        };
      return (a, B) => {
        const n = d('loading');
        return l(
          (u(),
          m('div', f, [p('iframe', { class: 'iframe', src: o.value, onLoad: t }, null, 40, x)])),
          [[n, e.value]],
        );
      };
    },
  });
const D = v(g, [['__scopeId', 'data-v-ee014242']]);
export { D as default };
