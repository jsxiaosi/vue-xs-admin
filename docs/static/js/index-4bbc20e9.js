import {
  cv as Q,
  A as I,
  cw as k,
  D as H,
  az as q,
  x as W,
  bb as U,
  cx as $,
  cy as G,
  j,
  bP as X,
  z as N,
  cz as F,
  ac as Y,
  cA as Z,
  L as ee,
  k as te,
} from './index-153f8713.js';
function B(e) {
  var r;
  const t = $(e);
  return (r = t == null ? void 0 : t.$el) != null ? r : t;
}
const E = G ? window : void 0;
function T(...e) {
  let r, t, o, a;
  if (
    (typeof e[0] == 'string' || Array.isArray(e[0])
      ? (([t, o, a] = e), (r = E))
      : ([r, t, o, a] = e),
    !r)
  )
    return Q;
  Array.isArray(t) || (t = [t]), Array.isArray(o) || (o = [o]);
  const f = [],
    d = () => {
      f.forEach((p) => p()), (f.length = 0);
    },
    i = (p, l, w, y) => (p.addEventListener(l, w, y), () => p.removeEventListener(l, w, y)),
    v = I(
      () => [B(r), $(a)],
      ([p, l]) => {
        d(), p && f.push(...t.flatMap((w) => o.map((y) => i(p, w, y, l))));
      },
      { immediate: !0, flush: 'post' },
    ),
    h = () => {
      v(), d();
    };
  return k(h), h;
}
function we(e, r = null) {
  const t = H();
  let o = () => {};
  const a = q(
    (f, d) => (
      (o = d),
      {
        get() {
          var i, v;
          return (
            f(),
            (v = (i = t == null ? void 0 : t.proxy) == null ? void 0 : i.$refs[e]) != null ? v : r
          );
        },
        set() {},
      }
    ),
  );
  return W(o), U(o), a;
}
function re() {
  const e = j(!1);
  return (
    H() &&
      te(() => {
        e.value = !0;
      }),
    e
  );
}
function ne(e) {
  const r = re();
  return N(() => (r.value, !!e()));
}
function ae(e, r = {}) {
  const { window: t = E } = r,
    o = ne(() => t && 'matchMedia' in t && typeof t.matchMedia == 'function');
  let a;
  const f = j(!1),
    d = () => {
      a && ('removeEventListener' in a ? a.removeEventListener('change', i) : a.removeListener(i));
    },
    i = () => {
      o.value &&
        (d(),
        (a = t.matchMedia(F(e).value)),
        (f.value = !!(a != null && a.matches)),
        a && ('addEventListener' in a ? a.addEventListener('change', i) : a.addListener(i)));
    };
  return X(i), k(() => d()), f;
}
const C =
    typeof globalThis != 'undefined'
      ? globalThis
      : typeof window != 'undefined'
      ? window
      : typeof global != 'undefined'
      ? global
      : typeof self != 'undefined'
      ? self
      : {},
  L = '__vueuse_ssr_handlers__',
  oe = se();
function se() {
  return L in C || (C[L] = C[L] || {}), C[L];
}
function K(e, r) {
  return oe[e] || r;
}
function ie(e) {
  return e == null
    ? 'any'
    : e instanceof Set
    ? 'set'
    : e instanceof Map
    ? 'map'
    : e instanceof Date
    ? 'date'
    : typeof e == 'boolean'
    ? 'boolean'
    : typeof e == 'string'
    ? 'string'
    : typeof e == 'object'
    ? 'object'
    : Number.isNaN(e)
    ? 'any'
    : 'number';
}
var ue = Object.defineProperty,
  z = Object.getOwnPropertySymbols,
  le = Object.prototype.hasOwnProperty,
  ce = Object.prototype.propertyIsEnumerable,
  D = (e, r, t) =>
    r in e ? ue(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (e[r] = t),
  V = (e, r) => {
    for (var t in r || (r = {})) le.call(r, t) && D(e, t, r[t]);
    if (z) for (var t of z(r)) ce.call(r, t) && D(e, t, r[t]);
    return e;
  };
const fe = {
    boolean: { read: (e) => e === 'true', write: (e) => String(e) },
    object: { read: (e) => JSON.parse(e), write: (e) => JSON.stringify(e) },
    number: { read: (e) => Number.parseFloat(e), write: (e) => String(e) },
    any: { read: (e) => e, write: (e) => String(e) },
    string: { read: (e) => e, write: (e) => String(e) },
    map: {
      read: (e) => new Map(JSON.parse(e)),
      write: (e) => JSON.stringify(Array.from(e.entries())),
    },
    set: { read: (e) => new Set(JSON.parse(e)), write: (e) => JSON.stringify(Array.from(e)) },
    date: { read: (e) => new Date(e), write: (e) => e.toISOString() },
  },
  x = 'vueuse-storage';
function de(e, r, t, o = {}) {
  var a;
  const {
      flush: f = 'pre',
      deep: d = !0,
      listenToStorageChanges: i = !0,
      writeDefaults: v = !0,
      mergeDefaults: h = !1,
      shallow: p,
      window: l = E,
      eventFilter: w,
      onError: y = (n) => {
        console.error(n);
      },
    } = o,
    m = (p ? Y : j)(r);
  if (!t)
    try {
      t = K('getDefaultStorage', () => {
        var n;
        return (n = E) == null ? void 0 : n.localStorage;
      })();
    } catch (n) {
      y(n);
    }
  if (!t) return m;
  const g = $(r),
    A = ie(g),
    S = (a = o.serializer) != null ? a : fe[A],
    { pause: P, resume: O } = Z(m, () => u(m.value), { flush: f, deep: d, eventFilter: w });
  return l && i && (T(l, 'storage', _), T(l, x, M)), _(), m;
  function u(n) {
    try {
      if (n == null) t.removeItem(e);
      else {
        const s = S.write(n),
          c = t.getItem(e);
        c !== s &&
          (t.setItem(e, s),
          l &&
            l.dispatchEvent(
              new CustomEvent(x, { detail: { key: e, oldValue: c, newValue: s, storageArea: t } }),
            ));
      }
    } catch (s) {
      y(s);
    }
  }
  function b(n) {
    const s = n ? n.newValue : t.getItem(e);
    if (s == null) return v && g !== null && t.setItem(e, S.write(g)), g;
    if (!n && h) {
      const c = S.read(s);
      return typeof h == 'function'
        ? h(c, g)
        : A === 'object' && !Array.isArray(c)
        ? V(V({}, g), c)
        : c;
    } else return typeof s != 'string' ? s : S.read(s);
  }
  function M(n) {
    _(n.detail);
  }
  function _(n) {
    if (!(n && n.storageArea !== t)) {
      if (n && n.key == null) {
        m.value = g;
        return;
      }
      if (!(n && n.key !== e)) {
        P();
        try {
          m.value = b(n);
        } catch (s) {
          y(s);
        } finally {
          n ? ee(O) : O();
        }
      }
    }
  }
}
function pe(e) {
  return ae('(prefers-color-scheme: dark)', e);
}
var me = Object.defineProperty,
  J = Object.getOwnPropertySymbols,
  ge = Object.prototype.hasOwnProperty,
  ye = Object.prototype.propertyIsEnumerable,
  R = (e, r, t) =>
    r in e ? me(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (e[r] = t),
  ve = (e, r) => {
    for (var t in r || (r = {})) ge.call(r, t) && R(e, t, r[t]);
    if (J) for (var t of J(r)) ye.call(r, t) && R(e, t, r[t]);
    return e;
  };
function _e(e = {}) {
  const {
      selector: r = 'html',
      attribute: t = 'class',
      initialValue: o = 'auto',
      window: a = E,
      storage: f,
      storageKey: d = 'vueuse-color-scheme',
      listenToStorageChanges: i = !0,
      storageRef: v,
      emitAuto: h,
      disableTransition: p = !0,
    } = e,
    l = ve({ auto: '', light: 'light', dark: 'dark' }, e.modes || {}),
    w = pe({ window: a }),
    y = N(() => (w.value ? 'dark' : 'light')),
    m = v || (d == null ? F(o) : de(d, o, f, { window: a, listenToStorageChanges: i })),
    g = N(() => (m.value === 'auto' ? y.value : m.value)),
    A = K('updateHTMLAttrs', (u, b, M) => {
      const _ = typeof u == 'string' ? (a == null ? void 0 : a.document.querySelector(u)) : B(u);
      if (!_) return;
      let n;
      if (p) {
        n = a.document.createElement('style');
        const s =
          '*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}';
        n.appendChild(document.createTextNode(s)), a.document.head.appendChild(n);
      }
      if (b === 'class') {
        const s = M.split(/\s/g);
        Object.values(l)
          .flatMap((c) => (c || '').split(/\s/g))
          .filter(Boolean)
          .forEach((c) => {
            s.includes(c) ? _.classList.add(c) : _.classList.remove(c);
          });
      } else _.setAttribute(b, M);
      p && (a.getComputedStyle(n).opacity, document.head.removeChild(n));
    });
  function S(u) {
    var b;
    A(r, t, (b = l[u]) != null ? b : u);
  }
  function P(u) {
    e.onChanged ? e.onChanged(u, S) : S(u);
  }
  I(g, P, { flush: 'post', immediate: !0 }), W(() => P(g.value));
  const O = N({
    get() {
      return h ? m.value : g.value;
    },
    set(u) {
      m.value = u;
    },
  });
  try {
    return Object.assign(O, { store: m, system: y, state: g });
  } catch (u) {
    return O;
  }
}
export { ae as a, _e as b, we as t, T as u };
