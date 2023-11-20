import { u as k } from './useDatailsInfo-y7U6v0nK.js';
import {
  d as C,
  a as h,
  o as t,
  c as n,
  f as c,
  F as l,
  b as i,
  h as _,
  w as p,
  t as u,
  g as d,
} from './index-nnTfcizh.js';
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
                    { default: p(() => [d('详情页' + u(e), 1)]), _: 2 },
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
                    { default: p(() => [d(' 详情页-params-' + u(e), 1)]), _: 2 },
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
