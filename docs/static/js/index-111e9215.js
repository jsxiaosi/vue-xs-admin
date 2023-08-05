import { c as i } from './index-51d795a6.js';
import {
  d as p,
  k as m,
  j as u,
  a as f,
  o as v,
  c as x,
  h as y,
  f as t,
  w as g,
  p as D,
  q as b,
} from './index-4053894a.js';
import { _ as h } from './plugin-vueexport-helper-c27b6911.js';
const k = { class: 'page-container' },
  V = p({
    name: 'RtDate',
    __name: 'index',
    setup(C) {
      m(() => {
        console.log('缓存');
      });
      const r = u(),
        c = (l) => l.getTime() < Date.now(),
        d = (l) => {
          const { date: e } = l;
          var s = e == null ? void 0 : e.getFullYear(),
            o = (e == null ? void 0 : e.getMonth()) + 1,
            _ = e == null ? void 0 : e.getDate();
          const a = i.solar2lunar(s, o, _);
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
        (d.inheritAttrs = !1),
        (l, e) => {
          const s = f('el-date-picker');
          return (
            v(),
            x('div', k, [
              y(' 日期： '),
              t(
                s,
                {
                  modelValue: r.value,
                  'onUpdate:modelValue': e[0] || (e[0] = (o) => (r.value = o)),
                  type: 'date',
                  placeholder: 'Pick a day',
                  teleported: !1,
                  'disabled-date': c,
                },
                { default: g((o) => [t(d, D(b(o)), null, 16)]), _: 1 },
                8,
                ['modelValue'],
              ),
            ])
          );
        }
      );
    },
  });
const P = h(V, [['__scopeId', 'data-v-5b1d6f0a']]);
export { P as default };
