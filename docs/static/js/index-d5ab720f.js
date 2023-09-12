import {
  ei as M,
  ej as y,
  bF as T,
  d as i,
  V as b,
  a,
  o as p,
  e as w,
  w as t,
  f as c,
  c as f,
  F as L,
  b as B,
  u,
  ek as R,
  h as A,
  t as $,
  B as V,
  bX as F,
  M as H,
  x as C,
  y as k,
  g as S,
  R as N,
  S as D,
  el as O,
  em as g,
} from './index-70a96a1c.js';
import { S as m } from './index-3192f30e.js';
import { _ as v } from './plugin-vueexport-helper-c27b6911.js';
import { b as U } from './index-2d3590d4.js';
import { _ as j } from './logo-46af6dfb.js';
function x() {
  const o = M(),
    { appConfigMode: e } = y(o);
  function s(n) {
    o.setAppConfigMode(T(o.appConfigMode, n));
  }
  return { appConfig: e, setAppConfigMode: s };
}
const co = '/vue-xs-admin/static/png/logo-f13e6c81.png',
  z = i({
    __name: 'AppLocale',
    setup(o) {
      const e = b(),
        { setAppConfigMode: s } = x(),
        n = (r) => {
          (e.locale.value = r), s({ locale: r });
        };
      return (r, h) => {
        const _ = a('el-dropdown-item'),
          d = a('el-dropdown-menu'),
          I = a('el-dropdown');
        return (
          p(),
          w(
            I,
            { trigger: 'click', onCommand: n },
            {
              dropdown: t(() => [
                c(d, null, {
                  default: t(() => [
                    (p(!0),
                    f(
                      L,
                      null,
                      B(
                        u(R),
                        (l) => (
                          p(),
                          w(
                            _,
                            { key: l.locale, command: l.locale },
                            { default: t(() => [A($(l.name), 1)]), _: 2 },
                            1032,
                            ['command'],
                          )
                        ),
                      ),
                      128,
                    )),
                  ]),
                  _: 1,
                }),
              ]),
              default: t(() => [c(m, { class: 'icon cursor', name: 'locales' })]),
              _: 1,
            },
          )
        );
      };
    },
  });
const E = v(z, [['__scopeId', 'data-v-74cfed1c']]),
  P = () => {
    const o = U({ disableTransition: !1 }),
      { appConfig: e, setAppConfigMode: s } = x(),
      n = () => {
        s({ themeMode: o.value });
      };
    return (
      V(o, () => {
        n(), F(e.value.primaryColor, o.value);
      }),
      { color: o }
    );
  },
  X = (o) => (C('data-v-7f04e66c'), (o = o()), k(), o),
  q = X(() => S('div', { class: 'theme-inner' }, null, -1)),
  G = i({
    __name: 'AppTheme',
    setup(o) {
      const { color: e } = P();
      return (s, n) => (
        p(),
        f(
          'div',
          {
            class: H(['theme cursor', { 'theme-dark': u(e) === 'dark' }]),
            onClick:
              n[0] ||
              (n[0] = () => {
                e.value = u(e) === 'dark' ? 'light' : 'dark';
              }),
          },
          [q, c(m, { name: 'sun' }), c(m, { name: 'moon' })],
          2,
        )
      );
    },
  });
const J = v(G, [['__scopeId', 'data-v-7f04e66c']]),
  K = (o) => (C('data-v-ec90c1f0'), (o = o()), k(), o),
  Q = { class: 'account cursor' },
  W = K(() => S('img', { src: j, class: 'wave' }, null, -1)),
  Y = i({
    __name: 'AppAccount',
    setup(o) {
      const e = N(),
        s = (n) => {
          n === 'signOut' && (D().handleRemoveMultiTabs(), O().removeUserInfo(), e.push('/login'));
        };
      return (n, r) => {
        const h = a('el-dropdown-item'),
          _ = a('el-dropdown-menu'),
          d = a('el-dropdown');
        return (
          p(),
          f('div', Q, [
            c(
              d,
              { trigger: 'click', onCommand: s },
              {
                dropdown: t(() => [
                  c(_, null, {
                    default: t(() => [
                      c(h, { command: 'signOut' }, { default: t(() => [A('退出登录')]), _: 1 }),
                    ]),
                    _: 1,
                  }),
                ]),
                default: t(() => [W]),
                _: 1,
              },
            ),
          ])
        );
      };
    },
  });
const Z = v(Y, [['__scopeId', 'data-v-ec90c1f0']]),
  ao = g(E),
  po = g(J),
  ro = g(Z);
export { ao as A, co as _, po as a, ro as b, x as u };
