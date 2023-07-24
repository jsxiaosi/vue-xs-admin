import {
  d as u,
  j as d,
  f as s,
  h as m,
  F as g,
  L as _,
  D as T,
  o as V,
  c as x,
  y as c,
  g as r,
  t as p,
  Z as E,
} from './index-ae766c94.js';
const D = u((a) => {
    const t = d(0);
    return () => s('div', null, [a.msg, m(' '), t.value]);
  }),
  C = u({
    name: 'TsxComponents',
    setup(a) {
      console.log(a);
      const t = d('admin');
      return () =>
        s(g, null, [
          s('div', null, [m('TSX：'), t.value]),
          s(D, { msg: '123', list: ['1', '2'] }, null),
        ]);
    },
  }),
  b = { class: 'page-container' },
  N = u({
    __name: 'index',
    setup(a) {
      const t = {
        VITE_ENV: 'production',
        BASE_URL: '/vue-xs-admin/',
        MODE: 'production',
        DEV: !1,
        PROD: !0,
        SSR: !1,
      };
      _(() => {
        console.log('渲染完了？');
      });
      const i = d(''),
        f = {
          created(o, n, e) {
            console.log('created', o, n, e);
          },
          beforeMount(o, n, e) {
            console.log('beforeMount', o, n, e);
          },
          mounted(o, n, e) {
            console.log('mounted', o, n, e);
          },
          beforeUpdate(o, n, e, l) {
            console.log('beforeUpdate', o, n, e, l);
          },
          updated(o, n, e, l) {
            (o.innerHTML = n.value), console.log('updated', o, n, e, l);
          },
          beforeUnmount() {},
          unmounted() {},
        };
      setTimeout(() => {
        i.value = '通过自定义指令插入的内容';
      }, 2e3);
      const v = T();
      return (o, n) => {
        var e;
        return (
          V(),
          x('div', b, [
            s(c(C)),
            r('div', null, '获取环境变量：' + p(c(t).VITE_ENV), 1),
            r(
              'div',
              null,
              '获取原型方法：' +
                p((e = c(v)) == null ? void 0 : e.appContext.config.globalProperties.foo),
              1,
            ),
            E(r('div', null, null, 512), [[f, i.value]]),
          ])
        );
      };
    },
  });
export { N as default };
