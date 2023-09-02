import {
  cx as M,
  cy as y,
  cz as T,
  d as i,
  V as B,
  a,
  o as p,
  e as w,
  w as t,
  f as c,
  c as f,
  F as L,
  b,
  u,
  cA as R,
  h as A,
  t as $,
  B as V,
  a9 as H,
  M as N,
  x as C,
  y as k,
  g as x,
  R as z,
  S as D,
  cB as F,
  cC as g,
} from './index-1eb240fe.js';
import { S as m } from './index-57b5e988.js';
import { _ as v } from './plugin-vueexport-helper-c27b6911.js';
import { b as O } from './index-2d76a7b7.js';
import { _ as U } from './logo-46af6dfb.js';
function S() {
  const o = M(),
    { appConfigMode: e } = y(o);
  function s(n) {
    o.setAppConfigMode(T(o.appConfigMode, n));
  }
  return { appConfig: e, setAppConfigMode: s };
}
const co = '/vue-xs-admin/static/png/logo-f13e6c81.png',
  E = i({
    __name: 'AppLocale',
    setup(o) {
      const e = B(),
        { setAppConfigMode: s } = S(),
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
                      b(
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
const P = v(E, [['__scopeId', 'data-v-74cfed1c']]),
  j = () => {
    const o = O({ disableTransition: !1 }),
      { appConfig: e, setAppConfigMode: s } = S(),
      n = () => {
        s({ themeMode: o.value });
      };
    return (
      V(o, () => {
        n(), H(e.value.primaryColor, o.value);
      }),
      { color: o }
    );
  },
  q = (o) => (C('data-v-7f04e66c'), (o = o()), k(), o),
  G = q(() => x('div', { class: 'theme-inner' }, null, -1)),
  J = i({
    __name: 'AppTheme',
    setup(o) {
      const { color: e } = j();
      return (s, n) => (
        p(),
        f(
          'div',
          {
            class: N(['theme cursor', { 'theme-dark': u(e) === 'dark' }]),
            onClick:
              n[0] ||
              (n[0] = () => {
                e.value = u(e) === 'dark' ? 'light' : 'dark';
              }),
          },
          [G, c(m, { name: 'sun' }), c(m, { name: 'moon' })],
          2,
        )
      );
    },
  });
const K = v(J, [['__scopeId', 'data-v-7f04e66c']]),
  Q = (o) => (C('data-v-ec90c1f0'), (o = o()), k(), o),
  W = { class: 'account cursor' },
  X = Q(() => x('img', { src: U, class: 'wave' }, null, -1)),
  Y = i({
    __name: 'AppAccount',
    setup(o) {
      const e = z(),
        s = (n) => {
          n === 'signOut' && (D().handleRemoveMultiTabs(), F().removeUserInfo(), e.push('/login'));
        };
      return (n, r) => {
        const h = a('el-dropdown-item'),
          _ = a('el-dropdown-menu'),
          d = a('el-dropdown');
        return (
          p(),
          f('div', W, [
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
                default: t(() => [X]),
                _: 1,
              },
            ),
          ])
        );
      };
    },
  });
const Z = v(Y, [['__scopeId', 'data-v-ec90c1f0']]),
  ao = g(P),
  po = g(K),
  ro = g(Z);
export { ao as A, co as _, po as a, ro as b, S as u };
