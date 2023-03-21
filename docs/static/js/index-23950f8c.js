import { d as _, j as t, bt as r, o as m, c as d, t as a, y as n } from './index-dfb446be.js';
const y = _({
  __name: 'index',
  setup(f) {
    let o = t('admin');
    function u() {
      let l = t(0),
        c = t(0);
      return { x: l, y: c };
    }
    let s = u(),
      e = r(s, 'x'),
      p = r(s, 'y');
    console.log(e.value);
    const i = () => {
      (o.value = 'update'), (e.value = 200);
    };
    return (l, c) => (
      m(),
      d('div', { class: 'page-container', onClick: i }, a(n(o)) + '-' + a(n(e)) + '-' + a(n(p)), 1)
    );
  },
});
export { y as default };
