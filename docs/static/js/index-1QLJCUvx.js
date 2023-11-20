import { c as p } from './index-XlAauLPD.js';
import {
  d as m,
  k as _,
  j as u,
  a as f,
  o as v,
  c as g,
  g as x,
  h as t,
  w as y,
  l as D,
  n as h,
} from './index-nnTfcizh.js';
import { _ as k } from './plugin-vueexport-helper-x3n3nnut.js';
const V = { class: 'page-container' },
  b = m({
    name: 'RtDate',
    __name: 'index',
    setup(C) {
      _(() => {
        console.log('缓存');
      });
      const r = u(),
        d = (l) => l.getTime() < Date.now(),
        c = (l) => {
          const { date: e } = l;
          var s = e == null ? void 0 : e.getFullYear(),
            o = (e == null ? void 0 : e.getMonth()) + 1,
            i = e == null ? void 0 : e.getDate();
          const a = p.solar2lunar(s, o, i);
          let n = '';
          return (
            a.festival && (n = '#f5222d'),
            a.Term && (n = '#096dd9'),
            t('div', { class: 'el-date-table-cell' }, [
              t('span', { class: 'el-date-table-cell__text' }, [
                t('span', null, [a.cDay]),
                t('span', { style: { color: n } }, [a.festival || a.Term || a.IDayCn]),
              ]),
            ])
          );
        };
      return (
        (c.inheritAttrs = !1),
        (l, e) => {
          const s = f('el-date-picker');
          return (
            v(),
            g('div', V, [
              x(' 日期： '),
              t(
                s,
                {
                  modelValue: r.value,
                  'onUpdate:modelValue': e[0] || (e[0] = (o) => (r.value = o)),
                  type: 'date',
                  placeholder: 'Pick a day',
                  teleported: !1,
                  'disabled-date': d,
                },
                { default: y((o) => [t(c, h(D(o)), null, 16)]), _: 1 },
                8,
                ['modelValue'],
              ),
            ])
          );
        }
      );
    },
  }),
  P = k(b, [['__scopeId', 'data-v-d343077a']]);
export { P as default };
