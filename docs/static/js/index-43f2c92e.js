import {
  d as o,
  Q as t,
  G as n,
  o as r,
  c as p,
  g as u,
  t as c,
  u as i,
} from './index-254994cd.js';
import { u as l } from './useDatailsInfo-805ca71f.js';
const D = o({
  name: 'RtDetailsInfo',
  __name: 'index',
  setup(m) {
    const e = t(),
      { params: a } = e,
      { toDatailsInfo: s } = l();
    return (
      n(() => {
        s(`${a.id}`, 'params');
      }),
      (f, d) => (r(), p('div', null, [u('span', null, 'page-params --- ' + c(i(a).id), 1)]))
    );
  },
});
export { D as default };
