import {
  d as n,
  O as c,
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
  k = n({
    __name: '403',
    setup(x) {
      const s = c(),
        a = () => {
          s.push('/');
        };
      return (o, B) => (
        _(),
        i('div', h, [
          e('div', v, [r(u, { name: 'error-403', 'class-name': 'icon' })]),
          e('div', g, [e('span', null, t(o.$t('errorPage.error403.title')), 1)]),
          e('div', y, t(o.$t('errorPage.error403.description')), 1),
          r(
            l(m),
            { type: 'primary', onClick: a },
            { default: d(() => [p(t(o.$t('errorPage.back')), 1)]), _: 1 },
          ),
        ])
      );
    },
  });
const S = f(k, [['__scopeId', 'data-v-d8176d07']]);
export { S as default };
