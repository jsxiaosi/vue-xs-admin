import { c as i } from './index-51d795a6.js';
import {
  d as p,
  j as m,
  a as u,
  o as v,
  c as f,
  f as s,
  w as y,
  p as x,
  q as g,
} from './index-254994cd.js';
import { _ as D } from './plugin-vueexport-helper-c27b6911.js';
const C = { class: 'page-container' },
  b = p({
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
          const e = u('el-calendar');
          return (
            v(),
            f('div', C, [
              s(
                e,
                {
                  modelValue: l.value,
                  'onUpdate:modelValue': o[0] || (o[0] = (t) => (l.value = t)),
                },
                { dateCell: y((t) => [s(r, x(g(t)), null, 16)]), _: 1 },
                8,
                ['modelValue'],
              ),
            ])
          );
        }
      );
    },
  });
const k = D(b, [['__scopeId', 'data-v-7d2dbb78']]);
export { k as default };
