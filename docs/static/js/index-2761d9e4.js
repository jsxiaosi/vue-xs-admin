import {
  d as o,
  N as t,
  C as n,
  o as r,
  c as p,
  g as c,
  t as i,
  y as u,
} from './index-153f8713.js';
import { u as l } from './useDatailsInfo-9657a62e.js';
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
      (f, d) => (r(), p('div', null, [c('span', null, 'page-params --- ' + i(u(a).id), 1)]))
    );
  },
});
export { D as default };
