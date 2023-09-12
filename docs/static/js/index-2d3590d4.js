var K = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var P = Object.prototype.hasOwnProperty,
  Q = Object.prototype.propertyIsEnumerable;
var z = (e, r, t) =>
    r in e ? K(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (e[r] = t),
  C = (e, r) => {
    for (var t in r || (r = {})) P.call(r, t) && z(e, t, r[t]);
    if (V) for (var t of V(r)) Q.call(r, t) && z(e, t, r[t]);
    return e;
  };
import {
  eb as $,
  B as W,
  ec as x,
  cq as G,
  J as F,
  d1 as I,
  ed as U,
  ee as D,
  ef as X,
  G as H,
  j as J,
  dF as Y,
  A as j,
  eg as Z,
  k as ee,
  c2 as te,
  eh as ne,
  O as re,
} from './index-70a96a1c.js';
function B(e) {
  var r;
  const t = D(e);
  return (r = t == null ? void 0 : t.$el) != null ? r : t;
}
const M = X ? window : void 0;
function R(...e) {
  let r, t, s, a;
  if (
    (typeof e[0] == 'string' || Array.isArray(e[0])
      ? (([t, s, a] = e), (r = M))
      : ([r, t, s, a] = e),
    !r)
  )
    return $;
  Array.isArray(t) || (t = [t]), Array.isArray(s) || (s = [s]);
  const f = [],
    l = () => {
      f.forEach((p) => p()), (f.length = 0);
    },
    g = (p, i, w, h) => (p.addEventListener(i, w, h), () => p.removeEventListener(i, w, h)),
    y = W(
      () => [B(r), D(a)],
      ([p, i]) => {
        if ((l(), !p)) return;
        const w = U(i) ? C({}, i) : i;
        f.push(...t.flatMap((h) => s.map((u) => g(p, h, u, w))));
      },
      { immediate: !0, flush: 'post' },
    ),
    v = () => {
      y(), l();
    };
  return x(v), v;
}
function ge(e, r = null) {
  const t = H();
  let s = () => {};
  const a = G(
    (f, l) => (
      (s = l),
      {
        get() {
          var g, y;
          return (
            f(),
            (y = (g = t == null ? void 0 : t.proxy) == null ? void 0 : g.$refs[e]) != null ? y : r
          );
        },
        set() {},
      }
    ),
  );
  return F(s), I(s), a;
}
function ae() {
  const e = J(!1);
  return (
    H() &&
      ee(() => {
        e.value = !0;
      }),
    e
  );
}
function se(e) {
  const r = ae();
  return j(() => (r.value, !!e()));
}
function oe(e, r = {}) {
  const { window: t = M } = r,
    s = se(() => t && 'matchMedia' in t && typeof t.matchMedia == 'function');
  let a;
  const f = J(!1),
    l = (v) => {
      f.value = v.matches;
    },
    g = () => {
      a && ('removeEventListener' in a ? a.removeEventListener('change', l) : a.removeListener(l));
    },
    y = Y(() => {
      s.value &&
        (g(),
        (a = t.matchMedia(D(e))),
        'addEventListener' in a ? a.addEventListener('change', l) : a.addListener(l),
        (f.value = a.matches));
    });
  return (
    x(() => {
      y(), g(), (a = void 0);
    }),
    f
  );
}
const N =
    typeof globalThis != 'undefined'
      ? globalThis
      : typeof window != 'undefined'
      ? window
      : typeof global != 'undefined'
      ? global
      : typeof self != 'undefined'
      ? self
      : {},
  T = '__vueuse_ssr_handlers__',
  ie = ue();
function ue() {
  return T in N || (N[T] = N[T] || {}), N[T];
}
function q(e, r) {
  return ie[e] || r;
}
function le(e) {
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
const ce = {
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
  k = 'vueuse-storage';
function fe(e, r, t, s = {}) {
  var a;
  const {
      flush: f = 'pre',
      deep: l = !0,
      listenToStorageChanges: g = !0,
      writeDefaults: y = !0,
      mergeDefaults: v = !1,
      shallow: p,
      window: i = M,
      eventFilter: w,
      onError: h = (n) => {
        console.error(n);
      },
    } = s,
    u = (p ? te : J)(r);
  if (!t)
    try {
      t = q('getDefaultStorage', () => {
        var n;
        return (n = M) == null ? void 0 : n.localStorage;
      })();
    } catch (n) {
      h(n);
    }
  if (!t) return u;
  const m = D(r),
    O = le(m),
    S = (a = s.serializer) != null ? a : ce[O],
    { pause: _, resume: E } = ne(u, () => c(u.value), { flush: f, deep: l, eventFilter: w });
  return i && g && (R(i, 'storage', b), R(i, k, L)), b(), u;
  function c(n) {
    try {
      if (n == null) t.removeItem(e);
      else {
        const o = S.write(n),
          d = t.getItem(e);
        d !== o &&
          (t.setItem(e, o),
          i &&
            i.dispatchEvent(
              new CustomEvent(k, { detail: { key: e, oldValue: d, newValue: o, storageArea: t } }),
            ));
      }
    } catch (o) {
      h(o);
    }
  }
  function A(n) {
    const o = n ? n.newValue : t.getItem(e);
    if (o == null) return y && m !== null && t.setItem(e, S.write(m)), m;
    if (!n && v) {
      const d = S.read(o);
      return typeof v == 'function'
        ? v(d, m)
        : O === 'object' && !Array.isArray(d)
        ? C(C({}, m), d)
        : d;
    } else return typeof o != 'string' ? o : S.read(o);
  }
  function L(n) {
    b(n.detail);
  }
  function b(n) {
    if (!(n && n.storageArea !== t)) {
      if (n && n.key == null) {
        u.value = m;
        return;
      }
      if (!(n && n.key !== e)) {
        _();
        try {
          (n == null ? void 0 : n.newValue) !== S.write(u.value) && (u.value = A(n));
        } catch (o) {
          h(o);
        } finally {
          n ? re(E) : E();
        }
      }
    }
  }
}
function de(e) {
  return oe('(prefers-color-scheme: dark)', e);
}
function he(e = {}) {
  const {
      selector: r = 'html',
      attribute: t = 'class',
      initialValue: s = 'auto',
      window: a = M,
      storage: f,
      storageKey: l = 'vueuse-color-scheme',
      listenToStorageChanges: g = !0,
      storageRef: y,
      emitAuto: v,
      disableTransition: p = !0,
    } = e,
    i = C({ auto: '', light: 'light', dark: 'dark' }, e.modes || {}),
    w = de({ window: a }),
    h = j(() => (w.value ? 'dark' : 'light')),
    u = y || (l == null ? Z(s) : fe(l, s, f, { window: a, listenToStorageChanges: g })),
    m = j(() => (u.value === 'auto' ? h.value : u.value)),
    O = q('updateHTMLAttrs', (c, A, L) => {
      const b = typeof c == 'string' ? (a == null ? void 0 : a.document.querySelector(c)) : B(c);
      if (!b) return;
      let n;
      if (p) {
        n = a.document.createElement('style');
        const o =
          '*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}';
        n.appendChild(document.createTextNode(o)), a.document.head.appendChild(n);
      }
      if (A === 'class') {
        const o = L.split(/\s/g);
        Object.values(i)
          .flatMap((d) => (d || '').split(/\s/g))
          .filter(Boolean)
          .forEach((d) => {
            o.includes(d) ? b.classList.add(d) : b.classList.remove(d);
          });
      } else b.setAttribute(A, L);
      p && (a.getComputedStyle(n).opacity, document.head.removeChild(n));
    });
  function S(c) {
    var A;
    O(r, t, (A = i[c]) != null ? A : c);
  }
  function _(c) {
    e.onChanged ? e.onChanged(c, S) : S(c);
  }
  W(m, _, { flush: 'post', immediate: !0 }), F(() => _(m.value));
  const E = j({
    get() {
      return v ? u.value : m.value;
    },
    set(c) {
      u.value = c;
    },
  });
  try {
    return Object.assign(E, { store: u, system: h, state: m });
  } catch (c) {
    return E;
  }
}
export { oe as a, he as b, ge as t, R as u };
