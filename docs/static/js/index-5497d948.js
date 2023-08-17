import {
  cp as q,
  B as W,
  cq as k,
  aD as K,
  z as x,
  bf as Q,
  cr as L,
  cs as G,
  G as H,
  j,
  bS as U,
  A as $,
  ct as X,
  k as Y,
  af as Z,
  cu as ee,
  N as te,
} from './index-d51bcef7.js';
function B(e) {
  var r;
  const t = L(e);
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
    return q;
  Array.isArray(t) || (t = [t]), Array.isArray(o) || (o = [o]);
  const l = [],
    i = () => {
      l.forEach((d) => d()), (l.length = 0);
    },
    g = (d, c, w, y) => (d.addEventListener(c, w, y), () => d.removeEventListener(c, w, y)),
    h = W(
      () => [B(r), L(a)],
      ([d, c]) => {
        i(), d && l.push(...t.flatMap((w) => o.map((y) => g(d, w, y, c))));
      },
      { immediate: !0, flush: 'post' },
    ),
    v = () => {
      h(), i();
    };
  return k(v), v;
}
function we(e, r = null) {
  const t = H();
  let o = () => {};
  const a = K(
    (l, i) => (
      (o = i),
      {
        get() {
          var g, h;
          return (
            l(),
            (h = (g = t == null ? void 0 : t.proxy) == null ? void 0 : g.$refs[e]) != null ? h : r
          );
        },
        set() {},
      }
    ),
  );
  return x(o), Q(o), a;
}
function re() {
  const e = j(!1);
  return (
    H() &&
      Y(() => {
        e.value = !0;
      }),
    e
  );
}
function ne(e) {
  const r = re();
  return $(() => (r.value, !!e()));
}
function ae(e, r = {}) {
  const { window: t = E } = r,
    o = ne(() => t && 'matchMedia' in t && typeof t.matchMedia == 'function');
  let a;
  const l = j(!1),
    i = (v) => {
      l.value = v.matches;
    },
    g = () => {
      a && ('removeEventListener' in a ? a.removeEventListener('change', i) : a.removeListener(i));
    },
    h = U(() => {
      o.value &&
        (g(),
        (a = t.matchMedia(L(e))),
        'addEventListener' in a ? a.addEventListener('change', i) : a.addListener(i),
        (l.value = a.matches));
    });
  return (
    k(() => {
      h(), g(), (a = void 0);
    }),
    l
  );
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
  N = '__vueuse_ssr_handlers__',
  oe = se();
function se() {
  return N in C || (C[N] = C[N] || {}), C[N];
}
function F(e, r) {
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
  D = Object.getOwnPropertySymbols,
  le = Object.prototype.hasOwnProperty,
  ce = Object.prototype.propertyIsEnumerable,
  V = (e, r, t) =>
    r in e ? ue(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (e[r] = t),
  z = (e, r) => {
    for (var t in r || (r = {})) le.call(r, t) && V(e, t, r[t]);
    if (D) for (var t of D(r)) ce.call(r, t) && V(e, t, r[t]);
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
  J = 'vueuse-storage';
function de(e, r, t, o = {}) {
  var a;
  const {
      flush: l = 'pre',
      deep: i = !0,
      listenToStorageChanges: g = !0,
      writeDefaults: h = !0,
      mergeDefaults: v = !1,
      shallow: d,
      window: c = E,
      eventFilter: w,
      onError: y = (n) => {
        console.error(n);
      },
    } = o,
    p = (d ? Z : j)(r);
  if (!t)
    try {
      t = F('getDefaultStorage', () => {
        var n;
        return (n = E) == null ? void 0 : n.localStorage;
      })();
    } catch (n) {
      y(n);
    }
  if (!t) return p;
  const m = L(r),
    A = ie(m),
    S = (a = o.serializer) != null ? a : fe[A],
    { pause: M, resume: O } = ee(p, () => u(p.value), { flush: l, deep: i, eventFilter: w });
  return c && g && (T(c, 'storage', _), T(c, J, P)), _(), p;
  function u(n) {
    try {
      if (n == null) t.removeItem(e);
      else {
        const s = S.write(n),
          f = t.getItem(e);
        f !== s &&
          (t.setItem(e, s),
          c &&
            c.dispatchEvent(
              new CustomEvent(J, { detail: { key: e, oldValue: f, newValue: s, storageArea: t } }),
            ));
      }
    } catch (s) {
      y(s);
    }
  }
  function b(n) {
    const s = n ? n.newValue : t.getItem(e);
    if (s == null) return h && m !== null && t.setItem(e, S.write(m)), m;
    if (!n && v) {
      const f = S.read(s);
      return typeof v == 'function'
        ? v(f, m)
        : A === 'object' && !Array.isArray(f)
        ? z(z({}, m), f)
        : f;
    } else return typeof s != 'string' ? s : S.read(s);
  }
  function P(n) {
    _(n.detail);
  }
  function _(n) {
    if (!(n && n.storageArea !== t)) {
      if (n && n.key == null) {
        p.value = m;
        return;
      }
      if (!(n && n.key !== e)) {
        M();
        try {
          p.value = b(n);
        } catch (s) {
          y(s);
        } finally {
          n ? te(O) : O();
        }
      }
    }
  }
}
function pe(e) {
  return ae('(prefers-color-scheme: dark)', e);
}
var me = Object.defineProperty,
  R = Object.getOwnPropertySymbols,
  ge = Object.prototype.hasOwnProperty,
  ye = Object.prototype.propertyIsEnumerable,
  I = (e, r, t) =>
    r in e ? me(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (e[r] = t),
  he = (e, r) => {
    for (var t in r || (r = {})) ge.call(r, t) && I(e, t, r[t]);
    if (R) for (var t of R(r)) ye.call(r, t) && I(e, t, r[t]);
    return e;
  };
function _e(e = {}) {
  const {
      selector: r = 'html',
      attribute: t = 'class',
      initialValue: o = 'auto',
      window: a = E,
      storage: l,
      storageKey: i = 'vueuse-color-scheme',
      listenToStorageChanges: g = !0,
      storageRef: h,
      emitAuto: v,
      disableTransition: d = !0,
    } = e,
    c = he({ auto: '', light: 'light', dark: 'dark' }, e.modes || {}),
    w = pe({ window: a }),
    y = $(() => (w.value ? 'dark' : 'light')),
    p = h || (i == null ? X(o) : de(i, o, l, { window: a, listenToStorageChanges: g })),
    m = $(() => (p.value === 'auto' ? y.value : p.value)),
    A = F('updateHTMLAttrs', (u, b, P) => {
      const _ = typeof u == 'string' ? (a == null ? void 0 : a.document.querySelector(u)) : B(u);
      if (!_) return;
      let n;
      if (d) {
        n = a.document.createElement('style');
        const s =
          '*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}';
        n.appendChild(document.createTextNode(s)), a.document.head.appendChild(n);
      }
      if (b === 'class') {
        const s = P.split(/\s/g);
        Object.values(c)
          .flatMap((f) => (f || '').split(/\s/g))
          .filter(Boolean)
          .forEach((f) => {
            s.includes(f) ? _.classList.add(f) : _.classList.remove(f);
          });
      } else _.setAttribute(b, P);
      d && (a.getComputedStyle(n).opacity, document.head.removeChild(n));
    });
  function S(u) {
    var b;
    A(r, t, (b = c[u]) != null ? b : u);
  }
  function M(u) {
    e.onChanged ? e.onChanged(u, S) : S(u);
  }
  W(m, M, { flush: 'post', immediate: !0 }), x(() => M(m.value));
  const O = $({
    get() {
      return v ? p.value : m.value;
    },
    set(u) {
      p.value = u;
    },
  });
  try {
    return Object.assign(O, { store: p, system: y, state: m });
  } catch (u) {
    return O;
  }
}
export { ae as a, _e as b, we as t, T as u };
