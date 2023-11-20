var P = Object.defineProperty;
var R = Object.getOwnPropertySymbols;
var Q = Object.prototype.hasOwnProperty,
  $ = Object.prototype.propertyIsEnumerable;
var k = (e, n, t) =>
    n in e ? P(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (e[n] = t),
  O = (e, n) => {
    for (var t in n || (n = {})) Q.call(n, t) && k(e, t, n[t]);
    if (R) for (var t of R(n)) $.call(n, t) && k(e, t, n[t]);
    return e;
  };
import {
  ec as G,
  B as F,
  ed as H,
  cq as I,
  J as V,
  d1 as U,
  ee as X,
  ef as J,
  eg as Y,
  G as B,
  j as z,
  dF as Z,
  A as D,
  eh as ee,
  k as te,
  c2 as ne,
  ei as re,
  O as ae,
} from './index-nnTfcizh.js';
function q(e) {
  var n;
  const t = J(e);
  return (n = t == null ? void 0 : t.$el) != null ? n : t;
}
const _ = Y ? window : void 0;
function W(...e) {
  let n, t, s, a;
  if (
    (typeof e[0] == 'string' || Array.isArray(e[0])
      ? (([t, s, a] = e), (n = _))
      : ([n, t, s, a] = e),
    !n)
  )
    return G;
  Array.isArray(t) || (t = [t]), Array.isArray(s) || (s = [s]);
  const c = [],
    l = () => {
      c.forEach((f) => f()), (c.length = 0);
    },
    p = (f, i, S, m) => (f.addEventListener(i, S, m), () => f.removeEventListener(i, S, m)),
    g = F(
      () => [q(n), J(a)],
      ([f, i]) => {
        if ((l(), !f)) return;
        const S = X(i) ? O({}, i) : i;
        c.push(...t.flatMap((m) => s.map((y) => p(f, m, y, S))));
      },
      { immediate: !0, flush: 'post' },
    ),
    h = () => {
      g(), l();
    };
  return H(h), h;
}
function he(e, n = null) {
  const t = B();
  let s = () => {};
  const a = I(
    (c, l) => (
      (s = l),
      {
        get() {
          var p, g;
          return (
            c(),
            (g = (p = t == null ? void 0 : t.proxy) == null ? void 0 : p.$refs[e]) != null ? g : n
          );
        },
        set() {},
      }
    ),
  );
  return V(s), U(s), a;
}
function oe() {
  const e = z(!1);
  return (
    B() &&
      te(() => {
        e.value = !0;
      }),
    e
  );
}
function se(e) {
  const n = oe();
  return D(() => (n.value, !!e()));
}
function ie(e, n = {}) {
  const { window: t = _ } = n,
    s = se(() => t && 'matchMedia' in t && typeof t.matchMedia == 'function');
  let a;
  const c = z(!1),
    l = (h) => {
      c.value = h.matches;
    },
    p = () => {
      a && ('removeEventListener' in a ? a.removeEventListener('change', l) : a.removeListener(l));
    },
    g = Z(() => {
      s.value &&
        (p(),
        (a = t.matchMedia(J(e))),
        'addEventListener' in a ? a.addEventListener('change', l) : a.addListener(l),
        (c.value = a.matches));
    });
  return (
    H(() => {
      g(), p(), (a = void 0);
    }),
    c
  );
}
const T =
    typeof globalThis != 'undefined'
      ? globalThis
      : typeof window != 'undefined'
      ? window
      : typeof global != 'undefined'
      ? global
      : typeof self != 'undefined'
      ? self
      : {},
  j = '__vueuse_ssr_handlers__',
  ue = le();
function le() {
  return j in T || (T[j] = T[j] || {}), T[j];
}
function K(e, n) {
  return ue[e] || n;
}
function ce(e) {
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
function de(e, n, t, s = {}) {
  var a;
  const {
      flush: c = 'pre',
      deep: l = !0,
      listenToStorageChanges: p = !0,
      writeDefaults: g = !0,
      mergeDefaults: h = !1,
      shallow: f,
      window: i = _,
      eventFilter: S,
      onError: m = (r) => {
        console.error(r);
      },
      initOnMounted: y,
    } = s,
    d = (f ? ne : z)(typeof n == 'function' ? n() : n);
  if (!t)
    try {
      t = K('getDefaultStorage', () => {
        var r;
        return (r = _) == null ? void 0 : r.localStorage;
      })();
    } catch (r) {
      m(r);
    }
  if (!t) return d;
  const v = J(n),
    C = ce(v),
    b = (a = s.serializer) != null ? a : fe[C],
    { pause: L, resume: u } = re(d, () => A(d.value), { flush: c, deep: l, eventFilter: S });
  return (
    i &&
      p &&
      V(() => {
        W(i, 'storage', w), W(i, x, M), y && w();
      }),
    y || w(),
    d
  );
  function A(r) {
    try {
      if (r == null) t.removeItem(e);
      else {
        const o = b.write(r),
          E = t.getItem(e);
        E !== o &&
          (t.setItem(e, o),
          i &&
            i.dispatchEvent(
              new CustomEvent(x, { detail: { key: e, oldValue: E, newValue: o, storageArea: t } }),
            ));
      }
    } catch (o) {
      m(o);
    }
  }
  function N(r) {
    const o = r ? r.newValue : t.getItem(e);
    if (o == null) return g && v !== null && t.setItem(e, b.write(v)), v;
    if (!r && h) {
      const E = b.read(o);
      return typeof h == 'function'
        ? h(E, v)
        : C === 'object' && !Array.isArray(E)
        ? O(O({}, v), E)
        : E;
    } else return typeof o != 'string' ? o : b.read(o);
  }
  function M(r) {
    w(r.detail);
  }
  function w(r) {
    if (!(r && r.storageArea !== t)) {
      if (r && r.key == null) {
        d.value = v;
        return;
      }
      if (!(r && r.key !== e)) {
        L();
        try {
          (r == null ? void 0 : r.newValue) !== b.write(d.value) && (d.value = N(r));
        } catch (o) {
          m(o);
        } finally {
          r ? ae(u) : u();
        }
      }
    }
  }
}
function pe(e) {
  return ie('(prefers-color-scheme: dark)', e);
}
function ye(e = {}) {
  const {
      selector: n = 'html',
      attribute: t = 'class',
      initialValue: s = 'auto',
      window: a = _,
      storage: c,
      storageKey: l = 'vueuse-color-scheme',
      listenToStorageChanges: p = !0,
      storageRef: g,
      emitAuto: h,
      disableTransition: f = !0,
    } = e,
    i = O({ auto: '', light: 'light', dark: 'dark' }, e.modes || {}),
    S = pe({ window: a }),
    m = D(() => (S.value ? 'dark' : 'light')),
    y = g || (l == null ? ee(s) : de(l, s, c, { window: a, listenToStorageChanges: p })),
    d = D(() => (y.value === 'auto' ? m.value : y.value)),
    v = K('updateHTMLAttrs', (u, A, N) => {
      const M = typeof u == 'string' ? (a == null ? void 0 : a.document.querySelector(u)) : q(u);
      if (!M) return;
      let w;
      if (f) {
        w = a.document.createElement('style');
        const r =
          '*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}';
        w.appendChild(document.createTextNode(r)), a.document.head.appendChild(w);
      }
      if (A === 'class') {
        const r = N.split(/\s/g);
        Object.values(i)
          .flatMap((o) => (o || '').split(/\s/g))
          .filter(Boolean)
          .forEach((o) => {
            r.includes(o) ? M.classList.add(o) : M.classList.remove(o);
          });
      } else M.setAttribute(A, N);
      f && (a.getComputedStyle(w).opacity, document.head.removeChild(w));
    });
  function C(u) {
    var A;
    v(n, t, (A = i[u]) != null ? A : u);
  }
  function b(u) {
    e.onChanged ? e.onChanged(u, C) : C(u);
  }
  F(d, b, { flush: 'post', immediate: !0 }), V(() => b(d.value));
  const L = D({
    get() {
      return h ? y.value : d.value;
    },
    set(u) {
      y.value = u;
    },
  });
  try {
    return Object.assign(L, { store: y, system: m, state: d });
  } catch (u) {
    return L;
  }
}
export { ie as a, ye as b, he as t, W as u };
