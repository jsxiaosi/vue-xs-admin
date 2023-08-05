import {
  d as c,
  O as n,
  o as _,
  c as i,
  g as e,
  f as r,
  t,
  w as d,
  h as p,
  y as l,
  ab as m,
} from './index-4053894a.js';
import { S as u } from './index-065a3ad8.js';
import { _ as f } from './plugin-vueexport-helper-c27b6911.js';
const h = { class: 'error-container' },
  v = { class: 'error-icon' },
  g = { class: 'text' },
  y = { class: 'description' },
  b = c({
    __name: '404',
    setup(k) {
      const s = n(),
        a = () => {
          s.push('/');
        };
      return (o, x) => (
        _(),
        i('div', h, [
          e('div', v, [r(u, { name: 'error-404', 'class-name': 'icon' })]),
          e('div', g, [e('span', null, t(o.$t('errorPage.error404.title')), 1)]),
          e('div', y, t(o.$t('errorPage.error404.description')), 1),
          r(
            l(m),
            { type: 'primary', onClick: a },
            { default: d(() => [p(t(o.$t('errorPage.back')), 1)]), _: 1 },
          ),
        ])
      );
    },
  });
const P = f(b, [['__scopeId', 'data-v-3edc57bf']]);
export { P as default };
