import {
  d as r,
  Q as n,
  A as i,
  j as d,
  c1 as l,
  bS as _,
  o as m,
  c as u,
  f as p,
} from './index-nnTfcizh.js';
import { _ as f } from './plugin-vueexport-helper-x3n3nnut.js';
const v = { class: 'embedded-page' },
  x = ['src'],
  g = r({
    __name: 'index',
    setup(h) {
      const s = n(),
        o = i(() => {
          var a;
          return (a = s.meta) == null ? void 0 : a.externalUrl;
        }),
        e = d(!0),
        t = () => {
          e.value = !e.value;
        };
      return (a, B) => {
        const c = l('loading');
        return _(
          (m(),
          u('div', v, [p('iframe', { class: 'iframe', src: o.value, onLoad: t }, null, 40, x)])),
          [[c, e.value]],
        );
      };
    },
  }),
  D = f(g, [['__scopeId', 'data-v-ee014242']]);
export { D as default };
