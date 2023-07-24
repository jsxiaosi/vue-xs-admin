import { d as i, j as t, bv as p, o as m, c as d, t as a, y as n } from './index-153f8713.js';
const x = i({
  __name: 'index',
  setup(_) {
    let o = t('admin');
    function l() {
      let s = t(0),
        c = t(0);
      return { x: s, y: c };
    }
    let { x: e, y: r } = p(l());
    console.log(e);
    const u = () => {
      (o.value = 'update'), (e.value = 200);
    };
    return (s, c) => (
      m(),
      d('div', { class: 'page-container', onClick: u }, a(n(o)) + '-' + a(n(e)) + '-' + a(n(r)), 1)
    );
  },
});
export { x as default };
