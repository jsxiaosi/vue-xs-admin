import {
  cq as b,
  cr as M,
  cs as y,
  d as f,
  S as T,
  a as _,
  o as r,
  e as w,
  w as s,
  f as a,
  c as g,
  F as L,
  b as $,
  y as m,
  ct as B,
  h as A,
  t as R,
  A as N,
  a6 as O,
  J as V,
  u as C,
  v as k,
  g as S,
  O as D,
  P as F,
  a8 as H,
  cu as v,
} from './index-ae766c94.js';
import { S as i } from './index-0598ba50.js';
import { _ as h } from './plugin-vueexport-helper-c27b6911.js';
import { b as P } from './index-cf542b5b.js';
import { _ as q } from './logo-46af6dfb.js';
function x() {
  const o = b(),
    { appConfigMode: e } = M(o);
  function t(n) {
    o.setAppConfigMode(y(o.appConfigMode, n));
  }
  return { appConfig: e, setAppConfigMode: t };
}
const to = '/vue-xs-admin/static/png/logo-f13e6c81.png',
  z = f({
    __name: 'AppLocale',
    setup(o) {
      const e = T(),
        { setAppConfigMode: t } = x(),
        n = (c) => {
          (e.locale.value = c), t({ locale: c });
        };
      return (c, d) => {
        const p = _('el-dropdown-item'),
          l = _('el-dropdown-menu'),
          I = _('el-dropdown');
        return (
          r(),
          w(
            I,
            { trigger: 'click', onCommand: n },
            {
              dropdown: s(() => [
                a(l, null, {
                  default: s(() => [
                    (r(!0),
                    g(
                      L,
                      null,
                      $(
                        m(B),
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
const E = h(z, [['__scopeId', 'data-v-9caf1b25']]),
  J = (o) => (C('data-v-0562984a'), (o = o()), k(), o),
  j = J(() => S('div', { class: 'theme-inner' }, null, -1)),
  G = f({
    __name: 'AppTheme',
    setup(o) {
      const e = P({ disableTransition: !1 }),
        { appConfig: t, setAppConfigMode: n } = x(),
        c = () => {
          n({ themeMode: e.value });
        };
      return (
        N(e, () => {
          c(), O(t.value.primaryColor, e.value);
        }),
        (d, p) => (
          r(),
          g(
            'div',
            {
              class: V(['theme cursor', { 'theme-dark': m(e) === 'dark' }]),
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
const K = h(G, [['__scopeId', 'data-v-0562984a']]),
  Q = (o) => (C('data-v-8b21a544'), (o = o()), k(), o),
  U = { class: 'account cursor' },
  W = Q(() => S('img', { src: q, class: 'wave' }, null, -1)),
  X = f({
    __name: 'AppAccount',
    setup(o) {
      const e = D(),
        t = (n) => {
          n === 'signOut' &&
            (F().handleRemoveMultiTabs(), H.removeStorage('userInfo'), e.push('/login'));
        };
      return (n, c) => {
        const d = _('el-dropdown-item'),
          p = _('el-dropdown-menu'),
          l = _('el-dropdown');
        return (
          r(),
          g('div', U, [
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
const Y = h(X, [['__scopeId', 'data-v-8b21a544']]),
  ao = v(E),
  co = v(K),
  po = v(Y);
export { ao as A, to as _, co as a, po as b, x as u };
