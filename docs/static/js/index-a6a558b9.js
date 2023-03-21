import {
  ch as y,
  ci as T,
  cj as N,
  d as f,
  T as L,
  b as r,
  o as _,
  e as w,
  w as n,
  f as t,
  c as g,
  F as R,
  a as $,
  y as u,
  ck as b,
  h as C,
  t as B,
  cl as E,
  A as V,
  a7 as D,
  K as F,
  u as A,
  v as k,
  g as x,
  P as H,
  Q as O,
  a9 as P,
  cm as h,
} from './index-ad4df6b0.js';
import { S as i } from './index-000e99e6.js';
import { _ as v } from './plugin-vueexport-helper-c27b6911.js';
import { _ as j } from './logo-46af6dfb.js';
function S(o, e) {
  return !!o.className.match(new RegExp('(\\s|^)' + e + '(\\s|$)'));
}
function no(o, e) {
  S(o, e) || (o.className += ' ' + e);
}
function to(o, e) {
  if (S(o, e)) {
    const s = new RegExp('(\\s|^)' + e + '(\\s|$)');
    o.className = o.className.replace(s, ' ').trim();
  }
}
function I() {
  const o = y(),
    { appConfigMode: e } = T(o);
  function s(a) {
    o.setAppConfigMode(N(o.appConfigMode, a));
  }
  return { appConfig: e, setAppConfigMode: s };
}
const z = f({
  __name: 'AppLocale',
  setup(o) {
    const e = L(),
      { setAppConfigMode: s } = I(),
      a = (c) => {
        (e.locale.value = c), s({ locale: c });
      };
    return (c, d) => {
      const p = r('el-dropdown-item'),
        l = r('el-dropdown-menu'),
        M = r('el-dropdown');
      return (
        _(),
        w(
          M,
          { trigger: 'click', onCommand: a },
          {
            dropdown: n(() => [
              t(l, null, {
                default: n(() => [
                  (_(!0),
                  g(
                    R,
                    null,
                    $(
                      u(b),
                      (m) => (
                        _(),
                        w(
                          p,
                          { key: m.locale, command: m.locale },
                          { default: n(() => [C(B(m.name), 1)]), _: 2 },
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
            default: n(() => [t(i, { class: 'icon cursor', name: 'locales' })]),
            _: 1,
          },
        )
      );
    };
  },
});
const K = v(z, [['__scopeId', 'data-v-9caf1b25']]),
  Q = (o) => (A('data-v-383ad5a3'), (o = o()), k(), o),
  q = Q(() => x('div', { class: 'theme-inner' }, null, -1)),
  G = f({
    __name: 'AppTheme',
    setup(o) {
      const e = E(),
        { appConfig: s, setAppConfigMode: a } = I(),
        c = () => {
          a({ themeMode: e.value });
        };
      return (
        V(e, () => {
          c(), D(s.value.primaryColor, e.value);
        }),
        (d, p) => (
          _(),
          g(
            'div',
            {
              class: F(['theme cursor', { 'theme-dark': u(e) === 'dark' }]),
              onClick:
                p[0] ||
                (p[0] = () => {
                  e.value = u(e) === 'dark' ? 'light' : 'dark';
                }),
            },
            [q, t(i, { name: 'sun' }), t(i, { name: 'moon' })],
            2,
          )
        )
      );
    },
  });
const J = v(G, [['__scopeId', 'data-v-383ad5a3']]),
  U = (o) => (A('data-v-f48115e1'), (o = o()), k(), o),
  W = { class: 'account cursor' },
  X = U(() => x('img', { src: j, class: 'wave' }, null, -1)),
  Y = f({
    __name: 'AppAccount',
    setup(o) {
      const e = H(),
        s = (a) => {
          a === 'signOut' &&
            (O().handleRemoveMultiTabs(), P.removeStorage('userInfo'), e.push('/login'));
        };
      return (a, c) => {
        const d = r('el-dropdown-item'),
          p = r('el-dropdown-menu'),
          l = r('el-dropdown');
        return (
          _(),
          g('div', W, [
            t(
              l,
              { trigger: 'click', onCommand: s },
              {
                dropdown: n(() => [
                  t(p, null, {
                    default: n(() => [
                      t(d, { command: 'signOut' }, { default: n(() => [C('退出登录')]), _: 1 }),
                    ]),
                    _: 1,
                  }),
                ]),
                default: n(() => [X]),
                _: 1,
              },
            ),
          ])
        );
      };
    },
  });
const Z = v(Y, [['__scopeId', 'data-v-f48115e1']]),
  co = h(K),
  po = h(J),
  ro = h(Z);
export { co as A, no as a, po as b, ro as c, to as r, I as u };
