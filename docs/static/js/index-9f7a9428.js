import { d as s, P as c, y as p, o as u, c as _ } from './index-dfb446be.js';
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
