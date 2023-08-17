import {
  cv as M,
  cw as y,
  cx as T,
  d as i,
  U as b,
  a,
  o as p,
  e as w,
  w as t,
  f as c,
  c as f,
  F as L,
  b as B,
  u,
  cy as R,
  h as A,
  t as $,
  B as H,
  a8 as N,
  L as U,
  v as C,
  x as k,
  g as x,
  Q as V,
  R as z,
  cz as D,
  cA as g,
} from './index-d51bcef7.js';
import { S as m } from './index-b57dc51e.js';
import { _ as v } from './plugin-vueexport-helper-c27b6911.js';
import { b as F } from './index-5497d948.js';
import { _ as O } from './logo-46af6dfb.js';
function I() {
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
      const e = b(),
        { setAppConfigMode: s } = I(),
        n = (r) => {
          (e.locale.value = r), s({ locale: r });
        };
      return (r, h) => {
        const _ = a('el-dropdown-item'),
          d = a('el-dropdown-menu'),
          S = a('el-dropdown');
        return (
          p(),
          w(
            S,
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
const P = v(E, [['__scopeId', 'data-v-9caf1b25']]),
  Q = () => {
    const o = F({ disableTransition: !1 }),
      { appConfig: e, setAppConfigMode: s } = I(),
      n = () => {
        s({ themeMode: o.value });
      };
    return (
      H(o, () => {
        n(), N(e.value.primaryColor, o.value);
      }),
      { color: o }
    );
  },
  j = (o) => (C('data-v-7f04e66c'), (o = o()), k(), o),
  q = j(() => x('div', { class: 'theme-inner' }, null, -1)),
  G = i({
    __name: 'AppTheme',
    setup(o) {
      const { color: e } = Q();
      return (s, n) => (
        p(),
        f(
          'div',
          {
            class: U(['theme cursor', { 'theme-dark': u(e) === 'dark' }]),
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
  W = { class: 'account cursor' },
  X = K(() => x('img', { src: O, class: 'wave' }, null, -1)),
  Y = i({
    __name: 'AppAccount',
    setup(o) {
      const e = V(),
        s = (n) => {
          n === 'signOut' && (z().handleRemoveMultiTabs(), D().removeUserInfo(), e.push('/login'));
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
  po = g(J),
  ro = g(Z);
export { ao as A, co as _, po as a, ro as b, I as u };
