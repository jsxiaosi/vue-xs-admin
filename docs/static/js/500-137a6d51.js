import {
  d as n,
  R as c,
  o as _,
  c as i,
  g as e,
  f as s,
  t,
  w as p,
  h as d,
  u as l,
  af as u,
} from './index-fcaa205b.js';
import { S as m } from './index-e64744ff.js';
import { _ as f } from './plugin-vueexport-helper-c27b6911.js';
const h = { class: 'error-container' },
  v = { class: 'error-icon' },
  g = { class: 'text' },
  y = { class: 'description' },
  k = n({
    __name: '500',
    setup(x) {
      const a = c(),
        r = () => {
          a.push('/');
        };
      return (o, B) => (
        _(),
        i('div', h, [
          e('div', v, [s(m, { name: 'error-500', 'class-name': 'icon' })]),
          e('div', g, [e('span', null, t(o.$t('error-page.500.title')), 1)]),
          e('div', y, t(o.$t('error-page.500.description')), 1),
          s(
            l(u),
            { type: 'primary', onClick: r },
            { default: p(() => [d(t(o.$t('error-page.back')), 1)]), _: 1 },
          ),
        ])
      );
    },
  });
const S = f(k, [['__scopeId', 'data-v-eae3717b']]);
export { S as default };
