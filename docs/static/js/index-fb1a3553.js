import {
  cy as y,
  cz as M,
  cA as T,
  d as f,
  S as b,
  a as _,
  o as r,
  e as w,
  w as s,
  f as a,
  c as g,
  F as L,
  b as B,
  y as m,
  cB as $,
  h as A,
  t as R,
  A as H,
  a6 as N,
  J as O,
  u as C,
  v as k,
  g as S,
  O as V,
  P as z,
  cn as D,
  cC as v,
} from './index-4053894a.js';
import { S as i } from './index-065a3ad8.js';
import { _ as h } from './plugin-vueexport-helper-c27b6911.js';
import { b as F } from './index-09e55fc4.js';
import { _ as P } from './logo-46af6dfb.js';
function I() {
  const o = y(),
    { appConfigMode: e } = M(o);
  function t(n) {
    o.setAppConfigMode(T(o.appConfigMode, n));
  }
  return { appConfig: e, setAppConfigMode: t };
}
const to = '/vue-xs-admin/static/png/logo-f13e6c81.png',
  U = f({
    __name: 'AppLocale',
    setup(o) {
      const e = b(),
        { setAppConfigMode: t } = I(),
        n = (c) => {
          (e.locale.value = c), t({ locale: c });
        };
      return (c, d) => {
        const p = _('el-dropdown-item'),
          l = _('el-dropdown-menu'),
          x = _('el-dropdown');
        return (
          r(),
          w(
            x,
            { trigger: 'click', onCommand: n },
            {
              dropdown: s(() => [
                a(l, null, {
                  default: s(() => [
                    (r(!0),
                    g(
                      L,
                      null,
                      B(
                        m($),
                        (u) => (
                          r(),
                          w(
                            p,
                            { key: u.locale, command: u.locale },
                            { default: s(() => [A(R(u.name), 1)]), _: 2 },
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
              default: s(() => [a(i, { class: 'icon cursor', name: 'locales' })]),
              _: 1,
            },
          )
        );
      };
    },
  });
const E = h(U, [['__scopeId', 'data-v-9caf1b25']]),
  J = (o) => (C('data-v-0562984a'), (o = o()), k(), o),
  j = J(() => S('div', { class: 'theme-inner' }, null, -1)),
  q = f({
    __name: 'AppTheme',
    setup(o) {
      const e = F({ disableTransition: !1 }),
        { appConfig: t, setAppConfigMode: n } = I(),
        c = () => {
          n({ themeMode: e.value });
        };
      return (
        H(e, () => {
          c(), N(t.value.primaryColor, e.value);
        }),
        (d, p) => (
          r(),
          g(
            'div',
            {
              class: O(['theme cursor', { 'theme-dark': m(e) === 'dark' }]),
              onClick:
                p[0] ||
                (p[0] = () => {
                  e.value = m(e) === 'dark' ? 'light' : 'dark';
                }),
            },
            [j, a(i, { name: 'sun' }), a(i, { name: 'moon' })],
            2,
          )
        )
      );
    },
  });
const G = h(q, [['__scopeId', 'data-v-0562984a']]),
  K = (o) => (C('data-v-ec90c1f0'), (o = o()), k(), o),
  Q = { class: 'account cursor' },
  W = K(() => S('img', { src: P, class: 'wave' }, null, -1)),
  X = f({
    __name: 'AppAccount',
    setup(o) {
      const e = V(),
        t = (n) => {
          n === 'signOut' && (z().handleRemoveMultiTabs(), D().removeUserInfo(), e.push('/login'));
        };
      return (n, c) => {
        const d = _('el-dropdown-item'),
          p = _('el-dropdown-menu'),
          l = _('el-dropdown');
        return (
          r(),
          g('div', Q, [
            a(
              l,
              { trigger: 'click', onCommand: t },
              {
                dropdown: s(() => [
                  a(p, null, {
                    default: s(() => [
                      a(d, { command: 'signOut' }, { default: s(() => [A('退出登录')]), _: 1 }),
                    ]),
                    _: 1,
                  }),
                ]),
                default: s(() => [W]),
                _: 1,
              },
            ),
          ])
        );
      };
    },
  });
const Y = h(X, [['__scopeId', 'data-v-ec90c1f0']]),
  ao = v(E),
  co = v(G),
  po = v(Y);
export { ao as A, to as _, co as a, po as b, I as u };
