import { c as m } from './index-XlAauLPD.js';
import {
  d as p,
  j as _,
  a as u,
  o as f,
  c as v,
  h as o,
  w as y,
  l as x,
  n as D,
} from './index-nnTfcizh.js';
import { _ as g } from './plugin-vueexport-helper-x3n3nnut.js';
const h = { class: 'page-container' },
  C = p({
    __name: 'index',
    setup(V) {
      const l = _(),
        r = (c) => {
          const { day: s } = c.data,
            e = new Date(s);
          var t = e == null ? void 0 : e.getFullYear(),
            d = (e == null ? void 0 : e.getMonth()) + 1,
            i = e == null ? void 0 : e.getDate();
          const a = m.solar2lunar(t, d, i);
          let n = '';
          return (
            a.festival && (n = '#f5222d'),
            a.Term && (n = '#096dd9'),
            o('div', { class: 'day-item' }, [
              o('span', null, [a.cDay]),
              o('span', { class: 'festival', style: { color: n } }, [
                a.festival || a.Term || a.IDayCn,
              ]),
            ])
          );
        };
      return (
        (r.inheritAttrs = !1),
        (c, s) => {
          const e = u('el-calendar');
          return (
            f(),
            v('div', h, [
              o(
                e,
                {
                  modelValue: l.value,
                  'onUpdate:modelValue': s[0] || (s[0] = (t) => (l.value = t)),
                },
                { dateCell: y((t) => [o(r, D(x(t)), null, 16)]), _: 1 },
                8,
                ['modelValue'],
              ),
            ])
          );
        }
      );
    },
  }),
  k = g(C, [['__scopeId', 'data-v-7d2dbb78']]);
export { k as default };
