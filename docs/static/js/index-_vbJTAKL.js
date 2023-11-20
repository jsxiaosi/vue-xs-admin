import {
  ej as b,
  ek as x,
  bF as T,
  d as i,
  V as B,
  a as c,
  o as r,
  e as v,
  w as t,
  F as L,
  el as R,
  u as m,
  t as $,
  g as C,
  b as H,
  c as f,
  h as a,
  B as V,
  bX as y,
  M as F,
  x as k,
  y as A,
  f as S,
  R as N,
  S as j,
  em as D,
  en as g,
} from './index-nnTfcizh.js';
import { S as u } from './index-qWpU7_ML.js';
import { _ as h } from './plugin-vueexport-helper-x3n3nnut.js';
import { b as O } from './index-dGxlNsTe.js';
import { _ as U } from './logo-X81rH-3O.js';
function I() {
  const o = b(),
    { appConfigMode: e } = x(o);
  function s(n) {
    o.setAppConfigMode(T(o.appConfigMode, n));
  }
  return { appConfig: e, setAppConfigMode: s };
}
const ao = '/vue-xs-admin/static/png/logo-8Hjhwref.png',
  z = i({
    __name: 'AppLocale',
    setup(o) {
      const e = B(),
        { setAppConfigMode: s } = I(),
        n = (p) => {
          (e.locale.value = p), s({ locale: p });
        };
      return (p, w) => {
        const d = c('el-dropdown-item'),
          l = c('el-dropdown-menu'),
          M = c('el-dropdown');
        return (
          r(),
          v(
            M,
            { trigger: 'click', onCommand: n },
            {
              dropdown: t(() => [
                a(l, null, {
                  default: t(() => [
                    (r(!0),
                    f(
                      L,
                      null,
                      H(
                        m(R),
                        (_) => (
                          r(),
                          v(
                            d,
                            { key: _.locale, command: _.locale },
                            { default: t(() => [C($(_.name), 1)]), _: 2 },
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
              default: t(() => [a(u, { class: 'icon cursor', name: 'locales' })]),
              _: 1,
            },
          )
        );
      };
    },
  }),
  E = h(z, [['__scopeId', 'data-v-74cfed1c']]),
  P = () => {
    const o = O({ disableTransition: !1 }),
      { appConfig: e, setAppConfigMode: s } = I(),
      n = () => {
        s({ themeMode: o.value });
      };
    return (
      V(o, () => {
        n(), y(e.value.primaryColor, o.value);
      }),
      { color: o }
    );
  },
  X = (o) => (k('data-v-ee63b9a9'), (o = o()), A(), o),
  q = X(() => S('div', { class: 'theme-inner' }, null, -1)),
  G = i({
    __name: 'AppTheme',
    setup(o) {
      const { color: e } = P();
      return (s, n) => (
        r(),
        f(
          'div',
          {
            class: F(['theme cursor', { 'theme-dark': m(e) === 'dark' }]),
            onClick:
              n[0] ||
              (n[0] = () => {
                e.value = m(e) === 'dark' ? 'light' : 'dark';
              }),
          },
          [q, a(u, { name: 'sun' }), a(u, { name: 'moon' })],
          2,
        )
      );
    },
  }),
  J = h(G, [['__scopeId', 'data-v-ee63b9a9']]),
  K = (o) => (k('data-v-ec90c1f0'), (o = o()), A(), o),
  Q = { class: 'account cursor' },
  W = K(() => S('img', { src: U, class: 'wave' }, null, -1)),
  Y = i({
    __name: 'AppAccount',
    setup(o) {
      const e = N(),
        s = (n) => {
          n === 'signOut' && (j().handleRemoveMultiTabs(), D().removeUserInfo(), e.push('/login'));
        };
      return (n, p) => {
        const w = c('el-dropdown-item'),
          d = c('el-dropdown-menu'),
          l = c('el-dropdown');
        return (
          r(),
          f('div', Q, [
            a(
              l,
              { trigger: 'click', onCommand: s },
              {
                dropdown: t(() => [
                  a(d, null, {
                    default: t(() => [
                      a(w, { command: 'signOut' }, { default: t(() => [C('退出登录')]), _: 1 }),
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
  }),
  Z = h(Y, [['__scopeId', 'data-v-ec90c1f0']]),
  co = g(E),
  ro = g(J),
  po = g(Z);
export { co as A, ao as _, ro as a, po as b, I as u };
