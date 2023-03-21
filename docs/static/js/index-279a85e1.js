import { c as i } from './index-51d795a6.js';
import {
  d as p,
  j as m,
  o as u,
  c as v,
  f as s,
  w as f,
  p as y,
  q as x,
  b as g,
} from './index-ad4df6b0.js';
import { _ as D } from './plugin-vueexport-helper-c27b6911.js';
const b = { class: 'page-container' },
  C = p({
    __name: 'index',
    setup(h) {
      const l = m(),
        r = (c) => {
          const { day: o } = c.data,
            e = new Date(o);
          var t = e == null ? void 0 : e.getFullYear(),
            d = (e == null ? void 0 : e.getMonth()) + 1,
            _ = e == null ? void 0 : e.getDate();
          const a = i.solar2lunar(t, d, _);
          let n = '';
          return (
            a.festival && (n = '#f5222d'),
            a.Term && (n = '#096dd9'),
            s('div', { class: 'day-item' }, [
              s('span', null, [a.cDay]),
              s('span', { class: 'festival', style: { color: n } }, [
                a.festival || a.Term || a.IDayCn,
              ]),
            ])
          );
        };
      return (
        (r.inheritAttrs = !1),
        (c, o) => {
          const e = g('el-calendar');
          return (
            u(),
            v('div', b, [
              s(
                e,
                {
                  modelValue: l.value,
                  'onUpdate:modelValue': o[0] || (o[0] = (t) => (l.value = t)),
                },
                { dateCell: f((t) => [s(r, y(x(t)), null, 16)]), _: 1 },
                8,
                ['modelValue'],
              ),
            ])
          );
        }
      );
    },
  });
const k = D(C, [['__scopeId', 'data-v-7d2dbb78']]);
export { k as default };
