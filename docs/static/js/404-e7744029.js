import {
  d as c,
  R as n,
  o as _,
  c as i,
  g as e,
  f as s,
  t,
  w as p,
  h as d,
  u as l,
  c0 as u,
} from './index-70a96a1c.js';
import { S as m } from './index-3192f30e.js';
import { _ as f } from './plugin-vueexport-helper-c27b6911.js';
const h = { class: 'error-container' },
  v = { class: 'error-icon' },
  g = { class: 'text' },
  y = { class: 'description' },
  k = c({
    __name: '404',
    setup(x) {
      const r = n(),
        a = () => {
          r.push('/');
        };
      return (o, B) => (
        _(),
        i('div', h, [
          e('div', v, [s(m, { name: 'error-404', 'class-name': 'icon' })]),
          e('div', g, [e('span', null, t(o.$t('error-page.404.title')), 1)]),
          e('div', y, t(o.$t('error-page.404.description')), 1),
          s(
            l(u),
            { type: 'primary', onClick: a },
            { default: p(() => [d(t(o.$t('error-page.back')), 1)]), _: 1 },
          ),
        ])
      );
    },
  });
const V = f(k, [['__scopeId', 'data-v-07c6e005']]);
export { V as default };
