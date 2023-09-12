import { u as g } from './useSortable-04358ef3.js';
import {
  d as S,
  j as r,
  a as _,
  o as l,
  c as a,
  f as o,
  w as t,
  g as s,
  F as x,
  b,
  t as y,
  x as k,
  y as w,
} from './index-70a96a1c.js';
import { _ as I } from './plugin-vueexport-helper-c27b6911.js';
const i = (n) => (k('data-v-8be80031'), (n = n()), w(), n),
  B = i(() => s('div', { class: 'card-header' }, [s('span', null, '列表拖拽')], -1)),
  C = { class: 'card-content' },
  D = i(() => s('span', { class: 'handle' }, '::', -1)),
  F = i(() => s('div', { class: 'card-header' }, [s('span', null, '宫格拖拽')], -1)),
  L = { class: 'card-content' },
  N = S({
    name: 'RtDrag',
    __name: 'index',
    setup(n) {
      const u = r([]);
      for (let e = 0; e < 7; e++) u.value.push(`第${e + 1}个`);
      const p = r([]);
      for (let e = 0; e < 9; e++) p.value.push(`第${e + 1}个`);
      const m = r(null);
      g(
        {
          handle: '.handle',
          group: 'name',
          onEnd(e) {
            console.log(e);
          },
        },
        m,
      );
      const f = r(null);
      return (
        g(
          {
            handle: '.list-item',
            group: 'name',
            onEnd(e) {
              console.log(e);
            },
          },
          f,
        ),
        (e, V) => {
          const h = _('el-card'),
            v = _('el-col'),
            E = _('el-row');
          return (
            l(),
            a('div', null, [
              o(
                E,
                { gutter: 30, class: 'enter-y' },
                {
                  default: t(() => [
                    o(
                      v,
                      { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
                      {
                        default: t(() => [
                          o(
                            h,
                            { class: 'box-card' },
                            {
                              header: t(() => [B]),
                              default: t(() => [
                                s('div', C, [
                                  s(
                                    'div',
                                    { ref_key: 'sortableEl', ref: m, class: 'list' },
                                    [
                                      (l(!0),
                                      a(
                                        x,
                                        null,
                                        b(
                                          u.value,
                                          (c, d) => (
                                            l(),
                                            a('div', { key: d, class: 'list-item' }, [
                                              D,
                                              s('span', null, y(c), 1),
                                            ])
                                          ),
                                        ),
                                        128,
                                      )),
                                    ],
                                    512,
                                  ),
                                ]),
                              ]),
                              _: 1,
                            },
                          ),
                        ]),
                        _: 1,
                      },
                    ),
                    o(
                      v,
                      { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
                      {
                        default: t(() => [
                          o(
                            h,
                            { class: 'box-card' },
                            {
                              header: t(() => [F]),
                              default: t(() => [
                                s('div', L, [
                                  s(
                                    'div',
                                    { ref_key: 'gridSortableEl', ref: f, class: 'listgrid' },
                                    [
                                      (l(!0),
                                      a(
                                        x,
                                        null,
                                        b(
                                          p.value,
                                          (c, d) => (
                                            l(),
                                            a('div', { key: d, class: 'list-item' }, [
                                              s('span', null, y(c), 1),
                                            ])
                                          ),
                                        ),
                                        128,
                                      )),
                                    ],
                                    512,
                                  ),
                                ]),
                              ]),
                              _: 1,
                            },
                          ),
                        ]),
                        _: 1,
                      },
                    ),
                  ]),
                  _: 1,
                },
              ),
            ])
          );
        }
      );
    },
  });
const q = I(N, [['__scopeId', 'data-v-8be80031']]);
export { q as default };
