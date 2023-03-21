import {
  d as i,
  j as p,
  f as c,
  h as v,
  F as g,
  M as _,
  D as T,
  o as V,
  c as x,
  y as s,
  g as l,
  t as d,
  $ as E,
} from './index-ad4df6b0.js';
const D = i({
    name: 'TsxComponents',
    setup(r) {
      console.log(r);
      const t = p('admin');
      return () => c(g, null, [c('div', null, [v('TSX：'), t.value])]);
    },
  }),
  M = { class: 'page-container' },
  C = i({
    __name: 'index',
    setup(r) {
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
      const u = p(''),
        m = {
          created(o, n, e) {
            console.log('created', o, n, e);
          },
          beforeMount(o, n, e) {
            console.log('beforeMount', o, n, e);
          },
          mounted(o, n, e) {
            console.log('mounted', o, n, e);
          },
          beforeUpdate(o, n, e, a) {
            console.log('beforeUpdate', o, n, e, a);
          },
          updated(o, n, e, a) {
            (o.innerHTML = n.value), console.log('updated', o, n, e, a);
          },
          beforeUnmount() {},
          unmounted() {},
        };
      setTimeout(() => {
        u.value = '通过自定义指令插入的内容';
      }, 2e3);
      const f = T();
      return (o, n) => {
        var e;
        return (
          V(),
          x('div', M, [
            c(s(D)),
            l('div', null, '获取环境变量：' + d(s(t).VITE_ENV), 1),
            l(
              'div',
              null,
              '获取原型方法：' +
                d((e = s(f)) == null ? void 0 : e.appContext.config.globalProperties.foo),
              1,
            ),
            E(l('div', null, null, 512), [[m, u.value]]),
          ])
        );
      };
    },
  });
export { C as default };
