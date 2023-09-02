import { d as s, R as c, u as p, o as u, c as _ } from './index-1eb240fe.js';
const l = s({
  __name: 'index',
  setup(i) {
    const { currentRoute: t, replace: r } = c(),
      { params: a, query: n } = p(t),
      { path: e } = a,
      o = Array.isArray(e) ? e.join('/') : e;
    return r({ path: '/' + o, query: n }), (m, d) => (u(), _('div'));
  },
});
export { l as default };
