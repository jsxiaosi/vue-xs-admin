import { u as k } from './useDatailsInfo-9488b40b.js';
import {
  d as C,
  a as h,
  o as t,
  c as n,
  g as c,
  F as l,
  b as i,
  f as _,
  w as p,
  h as u,
  t as d,
} from './index-de615e01.js';
const v = { class: 'page-container' },
  x = { style: { 'margin-top': '20px' } },
  B = C({
    __name: 'index',
    setup(g) {
      const { toDatailsInfo: f } = k(),
        o = (a, s = 'query') => {
          f(`${a}`, s);
        };
      return (a, s) => {
        const r = h('el-button');
        return (
          t(),
          n('div', v, [
            c('div', null, [
              (t(),
              n(
                l,
                null,
                i(6, (e) =>
                  _(
                    r,
                    { key: e, onClick: (m) => o(e) },
                    { default: p(() => [u('详情页' + d(e), 1)]), _: 2 },
                    1032,
                    ['onClick'],
                  ),
                ),
                64,
              )),
            ]),
            c('div', x, [
              (t(),
              n(
                l,
                null,
                i(6, (e) =>
                  _(
                    r,
                    { key: e, onClick: (m) => o(e, 'params') },
                    { default: p(() => [u(' 详情页-params-' + d(e), 1)]), _: 2 },
                    1032,
                    ['onClick'],
                  ),
                ),
                64,
              )),
            ]),
          ])
        );
      };
    },
  });
export { B as default };
