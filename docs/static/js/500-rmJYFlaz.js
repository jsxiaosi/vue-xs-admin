import {
  d as c,
  R as n,
  o as i,
  c as p,
  f as e,
  h as s,
  t,
  w as d,
  g as _,
  u as l,
  c0 as m,
} from './index-nnTfcizh.js';
import { S as u } from './index-qWpU7_ML.js';
import { _ as f } from './plugin-vueexport-helper-x3n3nnut.js';
const h = { class: 'error-container' },
  g = { class: 'error-icon' },
  v = { class: 'text' },
  k = { class: 'description' },
  B = c({
    __name: '500',
    setup(x) {
      const r = n(),
        a = () => {
          r.push('/');
        };
      return (o, y) => (
        i(),
        p('div', h, [
          e('div', g, [s(u, { name: 'error-500', 'class-name': 'icon' })]),
          e('div', v, [e('span', null, t(o.$t('error-page.500.title')), 1)]),
          e('div', k, t(o.$t('error-page.500.description')), 1),
          s(
            l(m),
            { type: 'primary', onClick: a },
            { default: d(() => [_(t(o.$t('error-page.back')), 1)]), _: 1 },
          ),
        ])
      );
    },
  }),
  V = f(B, [['__scopeId', 'data-v-429338d1']]);
export { V as default };
