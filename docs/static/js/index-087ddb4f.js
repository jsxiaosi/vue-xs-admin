var jr = Object.defineProperty,
  qr = Object.defineProperties;
var Gr = Object.getOwnPropertyDescriptors;
var Vt = Object.getOwnPropertySymbols;
var Hr = Object.prototype.hasOwnProperty,
  Qr = Object.prototype.propertyIsEnumerable;
var Bt = (t, e, r) =>
    e in t ? jr(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (t[e] = r),
  Ut = (t, e) => {
    for (var r in e || (e = {})) Hr.call(e, r) && Bt(t, r, e[r]);
    if (Vt) for (var r of Vt(e)) Qr.call(e, r) && Bt(t, r, e[r]);
    return t;
  },
  zt = (t, e) => qr(t, Gr(e));
var Lt = (t, e, r) =>
  new Promise((n, o) => {
    var a = (i) => {
        try {
          u(r.next(i));
        } catch (s) {
          o(s);
        }
      },
      l = (i) => {
        try {
          u(r.throw(i));
        } catch (s) {
          o(s);
        }
      },
      u = (i) => (i.done ? n(i.value) : Promise.resolve(i.value).then(a, l));
    u((r = r.apply(t, e)).next());
  });
import {
  d as J,
  A as Se,
  S as fe,
  a as k,
  o as _,
  c as E,
  f as S,
  w as O,
  X as ur,
  e as V,
  Y as Jr,
  Z as cr,
  $ as Kr,
  U as fr,
  Q as ze,
  R as Qe,
  u as h,
  r as Zr,
  j as W,
  B as ve,
  k as pr,
  g as A,
  F as ne,
  b as pe,
  a0 as dr,
  t as L,
  a1 as Je,
  a2 as Ke,
  L as yr,
  M as Te,
  a3 as Ze,
  h as Ne,
  a4 as Yr,
  N as re,
  a5 as Xr,
  a6 as mt,
  n as en,
  p as tn,
  q as rn,
  a7 as Pt,
  a8 as Ot,
  a9 as nn,
  aa as an,
  x as Et,
  y as Ct,
  ab as vr,
  ac as on,
  ad as ln,
  G as sn,
  P as un,
} from './index-1eb240fe.js';
import { S as ye } from './index-57b5e988.js';
import { u as ie, _ as cn, A as fn, a as pn, b as dn } from './index-0983f5c4.js';
import { u as yn } from './useSortable-51a35a7e.js';
import { _ as me } from './plugin-vueexport-helper-c27b6911.js';
import { u as vn, a as Wt } from './index-2d76a7b7.js';
import './logo-46af6dfb.js';
function mr(t, e) {
  return !!t.className.match(new RegExp('(\\s|^)' + e + '(\\s|$)'));
}
function mn(t, e) {
  mr(t, e) || (t.className += ' ' + e);
}
function hn(t, e) {
  if (mr(t, e)) {
    var r = new RegExp('(\\s|^)' + e + '(\\s|$)');
    t.className = t.className.replace(r, ' ').trim();
  }
}
const gn = { class: 'app-main' },
  bn = J({
    __name: 'index',
    setup(t) {
      const e = Se(() => fe().cachePageList);
      return (r, n) => {
        const o = k('router-view');
        return (
          _(),
          E('section', gn, [
            S(o, null, {
              default: O(({ Component: a, route: l }) => [
                S(
                  ur,
                  { name: 'fade-transform', mode: 'out-in' },
                  {
                    default: O(() => [
                      (_(),
                      V(Jr, { include: e.value }, [(_(), V(cr(a), { key: l.fullPath }))], 1032, [
                        'include',
                      ])),
                    ]),
                    _: 2,
                  },
                  1024,
                ),
              ]),
              _: 1,
            }),
          ])
        );
      };
    },
  });
var _n = function () {
    if (typeof Symbol != 'function' || typeof Object.getOwnPropertySymbols != 'function') return !1;
    if (typeof Symbol.iterator == 'symbol') return !0;
    var e = {},
      r = Symbol('test'),
      n = Object(r);
    if (
      typeof r == 'string' ||
      Object.prototype.toString.call(r) !== '[object Symbol]' ||
      Object.prototype.toString.call(n) !== '[object Symbol]'
    )
      return !1;
    var o = 42;
    e[r] = o;
    for (r in e) return !1;
    if (
      (typeof Object.keys == 'function' && Object.keys(e).length !== 0) ||
      (typeof Object.getOwnPropertyNames == 'function' &&
        Object.getOwnPropertyNames(e).length !== 0)
    )
      return !1;
    var a = Object.getOwnPropertySymbols(e);
    if (a.length !== 1 || a[0] !== r || !Object.prototype.propertyIsEnumerable.call(e, r))
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == 'function') {
      var l = Object.getOwnPropertyDescriptor(e, r);
      if (l.value !== o || l.enumerable !== !0) return !1;
    }
    return !0;
  },
  jt = typeof Symbol != 'undefined' && Symbol,
  Sn = _n,
  wn = function () {
    return typeof jt != 'function' ||
      typeof Symbol != 'function' ||
      typeof jt('foo') != 'symbol' ||
      typeof Symbol('bar') != 'symbol'
      ? !1
      : Sn();
  },
  qt = { foo: {} },
  An = Object,
  $n = function () {
    return { __proto__: qt }.foo === qt.foo && !({ __proto__: null } instanceof An);
  },
  Pn = 'Function.prototype.bind called on incompatible ',
  it = Array.prototype.slice,
  On = Object.prototype.toString,
  En = '[object Function]',
  Cn = function (e) {
    var r = this;
    if (typeof r != 'function' || On.call(r) !== En) throw new TypeError(Pn + r);
    for (
      var n = it.call(arguments, 1),
        o,
        a = function () {
          if (this instanceof o) {
            var p = r.apply(this, n.concat(it.call(arguments)));
            return Object(p) === p ? p : this;
          } else return r.apply(e, n.concat(it.call(arguments)));
        },
        l = Math.max(0, r.length - n.length),
        u = [],
        i = 0;
      i < l;
      i++
    )
      u.push('$' + i);
    if (
      ((o = Function(
        'binder',
        'return function (' + u.join(',') + '){ return binder.apply(this,arguments); }',
      )(a)),
      r.prototype)
    ) {
      var s = function () {};
      (s.prototype = r.prototype), (o.prototype = new s()), (s.prototype = null);
    }
    return o;
  },
  xn = Cn,
  xt = Function.prototype.bind || xn,
  Mn = xt,
  In = Mn.call(Function.call, Object.prototype.hasOwnProperty),
  $,
  xe = SyntaxError,
  hr = Function,
  Ce = TypeError,
  lt = function (t) {
    try {
      return hr('"use strict"; return (' + t + ').constructor;')();
    } catch (e) {}
  },
  $e = Object.getOwnPropertyDescriptor;
if ($e)
  try {
    $e({}, '');
  } catch (t) {
    $e = null;
  }
var st = function () {
    throw new Ce();
  },
  Tn = $e
    ? (function () {
        try {
          return arguments.callee, st;
        } catch (t) {
          try {
            return $e(arguments, 'callee').get;
          } catch (e) {
            return st;
          }
        }
      })()
    : st,
  Oe = wn(),
  Fn = $n(),
  H =
    Object.getPrototypeOf ||
    (Fn
      ? function (t) {
          return t.__proto__;
        }
      : null),
  Ee = {},
  kn = typeof Uint8Array == 'undefined' || !H ? $ : H(Uint8Array),
  Pe = {
    '%AggregateError%': typeof AggregateError == 'undefined' ? $ : AggregateError,
    '%Array%': Array,
    '%ArrayBuffer%': typeof ArrayBuffer == 'undefined' ? $ : ArrayBuffer,
    '%ArrayIteratorPrototype%': Oe && H ? H([][Symbol.iterator]()) : $,
    '%AsyncFromSyncIteratorPrototype%': $,
    '%AsyncFunction%': Ee,
    '%AsyncGenerator%': Ee,
    '%AsyncGeneratorFunction%': Ee,
    '%AsyncIteratorPrototype%': Ee,
    '%Atomics%': typeof Atomics == 'undefined' ? $ : Atomics,
    '%BigInt%': typeof BigInt == 'undefined' ? $ : BigInt,
    '%BigInt64Array%': typeof BigInt64Array == 'undefined' ? $ : BigInt64Array,
    '%BigUint64Array%': typeof BigUint64Array == 'undefined' ? $ : BigUint64Array,
    '%Boolean%': Boolean,
    '%DataView%': typeof DataView == 'undefined' ? $ : DataView,
    '%Date%': Date,
    '%decodeURI%': decodeURI,
    '%decodeURIComponent%': decodeURIComponent,
    '%encodeURI%': encodeURI,
    '%encodeURIComponent%': encodeURIComponent,
    '%Error%': Error,
    '%eval%': eval,
    '%EvalError%': EvalError,
    '%Float32Array%': typeof Float32Array == 'undefined' ? $ : Float32Array,
    '%Float64Array%': typeof Float64Array == 'undefined' ? $ : Float64Array,
    '%FinalizationRegistry%': typeof FinalizationRegistry == 'undefined' ? $ : FinalizationRegistry,
    '%Function%': hr,
    '%GeneratorFunction%': Ee,
    '%Int8Array%': typeof Int8Array == 'undefined' ? $ : Int8Array,
    '%Int16Array%': typeof Int16Array == 'undefined' ? $ : Int16Array,
    '%Int32Array%': typeof Int32Array == 'undefined' ? $ : Int32Array,
    '%isFinite%': isFinite,
    '%isNaN%': isNaN,
    '%IteratorPrototype%': Oe && H ? H(H([][Symbol.iterator]())) : $,
    '%JSON%': typeof JSON == 'object' ? JSON : $,
    '%Map%': typeof Map == 'undefined' ? $ : Map,
    '%MapIteratorPrototype%':
      typeof Map == 'undefined' || !Oe || !H ? $ : H(new Map()[Symbol.iterator]()),
    '%Math%': Math,
    '%Number%': Number,
    '%Object%': Object,
    '%parseFloat%': parseFloat,
    '%parseInt%': parseInt,
    '%Promise%': typeof Promise == 'undefined' ? $ : Promise,
    '%Proxy%': typeof Proxy == 'undefined' ? $ : Proxy,
    '%RangeError%': RangeError,
    '%ReferenceError%': ReferenceError,
    '%Reflect%': typeof Reflect == 'undefined' ? $ : Reflect,
    '%RegExp%': RegExp,
    '%Set%': typeof Set == 'undefined' ? $ : Set,
    '%SetIteratorPrototype%':
      typeof Set == 'undefined' || !Oe || !H ? $ : H(new Set()[Symbol.iterator]()),
    '%SharedArrayBuffer%': typeof SharedArrayBuffer == 'undefined' ? $ : SharedArrayBuffer,
    '%String%': String,
    '%StringIteratorPrototype%': Oe && H ? H(''[Symbol.iterator]()) : $,
    '%Symbol%': Oe ? Symbol : $,
    '%SyntaxError%': xe,
    '%ThrowTypeError%': Tn,
    '%TypedArray%': kn,
    '%TypeError%': Ce,
    '%Uint8Array%': typeof Uint8Array == 'undefined' ? $ : Uint8Array,
    '%Uint8ClampedArray%': typeof Uint8ClampedArray == 'undefined' ? $ : Uint8ClampedArray,
    '%Uint16Array%': typeof Uint16Array == 'undefined' ? $ : Uint16Array,
    '%Uint32Array%': typeof Uint32Array == 'undefined' ? $ : Uint32Array,
    '%URIError%': URIError,
    '%WeakMap%': typeof WeakMap == 'undefined' ? $ : WeakMap,
    '%WeakRef%': typeof WeakRef == 'undefined' ? $ : WeakRef,
    '%WeakSet%': typeof WeakSet == 'undefined' ? $ : WeakSet,
  };
if (H)
  try {
    null.error;
  } catch (t) {
    var Nn = H(H(t));
    Pe['%Error.prototype%'] = Nn;
  }
var Rn = function t(e) {
    var r;
    if (e === '%AsyncFunction%') r = lt('async function () {}');
    else if (e === '%GeneratorFunction%') r = lt('function* () {}');
    else if (e === '%AsyncGeneratorFunction%') r = lt('async function* () {}');
    else if (e === '%AsyncGenerator%') {
      var n = t('%AsyncGeneratorFunction%');
      n && (r = n.prototype);
    } else if (e === '%AsyncIteratorPrototype%') {
      var o = t('%AsyncGenerator%');
      o && H && (r = H(o.prototype));
    }
    return (Pe[e] = r), r;
  },
  Gt = {
    '%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
    '%ArrayPrototype%': ['Array', 'prototype'],
    '%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
    '%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
    '%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
    '%ArrayProto_values%': ['Array', 'prototype', 'values'],
    '%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
    '%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
    '%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
    '%BooleanPrototype%': ['Boolean', 'prototype'],
    '%DataViewPrototype%': ['DataView', 'prototype'],
    '%DatePrototype%': ['Date', 'prototype'],
    '%ErrorPrototype%': ['Error', 'prototype'],
    '%EvalErrorPrototype%': ['EvalError', 'prototype'],
    '%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
    '%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
    '%FunctionPrototype%': ['Function', 'prototype'],
    '%Generator%': ['GeneratorFunction', 'prototype'],
    '%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
    '%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
    '%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
    '%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
    '%JSONParse%': ['JSON', 'parse'],
    '%JSONStringify%': ['JSON', 'stringify'],
    '%MapPrototype%': ['Map', 'prototype'],
    '%NumberPrototype%': ['Number', 'prototype'],
    '%ObjectPrototype%': ['Object', 'prototype'],
    '%ObjProto_toString%': ['Object', 'prototype', 'toString'],
    '%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
    '%PromisePrototype%': ['Promise', 'prototype'],
    '%PromiseProto_then%': ['Promise', 'prototype', 'then'],
    '%Promise_all%': ['Promise', 'all'],
    '%Promise_reject%': ['Promise', 'reject'],
    '%Promise_resolve%': ['Promise', 'resolve'],
    '%RangeErrorPrototype%': ['RangeError', 'prototype'],
    '%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
    '%RegExpPrototype%': ['RegExp', 'prototype'],
    '%SetPrototype%': ['Set', 'prototype'],
    '%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
    '%StringPrototype%': ['String', 'prototype'],
    '%SymbolPrototype%': ['Symbol', 'prototype'],
    '%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
    '%TypedArrayPrototype%': ['TypedArray', 'prototype'],
    '%TypeErrorPrototype%': ['TypeError', 'prototype'],
    '%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
    '%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
    '%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
    '%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
    '%URIErrorPrototype%': ['URIError', 'prototype'],
    '%WeakMapPrototype%': ['WeakMap', 'prototype'],
    '%WeakSetPrototype%': ['WeakSet', 'prototype'],
  },
  Le = xt,
  Ye = In,
  Dn = Le.call(Function.call, Array.prototype.concat),
  Vn = Le.call(Function.apply, Array.prototype.splice),
  Ht = Le.call(Function.call, String.prototype.replace),
  Xe = Le.call(Function.call, String.prototype.slice),
  Bn = Le.call(Function.call, RegExp.prototype.exec),
  Un =
    /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
  zn = /\\(\\)?/g,
  Ln = function (e) {
    var r = Xe(e, 0, 1),
      n = Xe(e, -1);
    if (r === '%' && n !== '%') throw new xe('invalid intrinsic syntax, expected closing `%`');
    if (n === '%' && r !== '%') throw new xe('invalid intrinsic syntax, expected opening `%`');
    var o = [];
    return (
      Ht(e, Un, function (a, l, u, i) {
        o[o.length] = u ? Ht(i, zn, '$1') : l || a;
      }),
      o
    );
  },
  Wn = function (e, r) {
    var n = e,
      o;
    if ((Ye(Gt, n) && ((o = Gt[n]), (n = '%' + o[0] + '%')), Ye(Pe, n))) {
      var a = Pe[n];
      if ((a === Ee && (a = Rn(n)), typeof a == 'undefined' && !r))
        throw new Ce('intrinsic ' + e + ' exists, but is not available. Please file an issue!');
      return { alias: o, name: n, value: a };
    }
    throw new xe('intrinsic ' + e + ' does not exist!');
  },
  Mt = function (e, r) {
    if (typeof e != 'string' || e.length === 0)
      throw new Ce('intrinsic name must be a non-empty string');
    if (arguments.length > 1 && typeof r != 'boolean')
      throw new Ce('"allowMissing" argument must be a boolean');
    if (Bn(/^%?[^%]*%?$/, e) === null)
      throw new xe(
        '`%` may not be present anywhere but at the beginning and end of the intrinsic name',
      );
    var n = Ln(e),
      o = n.length > 0 ? n[0] : '',
      a = Wn('%' + o + '%', r),
      l = a.name,
      u = a.value,
      i = !1,
      s = a.alias;
    s && ((o = s[0]), Vn(n, Dn([0, 1], s)));
    for (var p = 1, y = !0; p < n.length; p += 1) {
      var f = n[p],
        g = Xe(f, 0, 1),
        m = Xe(f, -1);
      if ((g === '"' || g === "'" || g === '`' || m === '"' || m === "'" || m === '`') && g !== m)
        throw new xe('property names with quotes must have matching quotes');
      if (((f === 'constructor' || !y) && (i = !0), (o += '.' + f), (l = '%' + o + '%'), Ye(Pe, l)))
        u = Pe[l];
      else if (u != null) {
        if (!(f in u)) {
          if (!r)
            throw new Ce('base intrinsic for ' + e + ' exists, but the property is not available.');
          return;
        }
        if ($e && p + 1 >= n.length) {
          var b = $e(u, f);
          (y = !!b), y && 'get' in b && !('originalValue' in b.get) ? (u = b.get) : (u = u[f]);
        } else (y = Ye(u, f)), (u = u[f]);
        y && !i && (Pe[l] = u);
      }
    }
    return u;
  },
  gr = { exports: {} };
(function (t) {
  var e = xt,
    r = Mt,
    n = r('%Function.prototype.apply%'),
    o = r('%Function.prototype.call%'),
    a = r('%Reflect.apply%', !0) || e.call(o, n),
    l = r('%Object.getOwnPropertyDescriptor%', !0),
    u = r('%Object.defineProperty%', !0),
    i = r('%Math.max%');
  if (u)
    try {
      u({}, 'a', { value: 1 });
    } catch (p) {
      u = null;
    }
  t.exports = function (y) {
    var f = a(e, o, arguments);
    if (l && u) {
      var g = l(f, 'length');
      g.configurable && u(f, 'length', { value: 1 + i(0, y.length - (arguments.length - 1)) });
    }
    return f;
  };
  var s = function () {
    return a(e, n, arguments);
  };
  u ? u(t.exports, 'apply', { value: s }) : (t.exports.apply = s);
})(gr);
var jn = gr.exports,
  br = Mt,
  _r = jn,
  qn = _r(br('String.prototype.indexOf')),
  Gn = function (e, r) {
    var n = br(e, !!r);
    return typeof n == 'function' && qn(e, '.prototype.') > -1 ? _r(n) : n;
  },
  It = typeof Map == 'function' && Map.prototype,
  ut =
    Object.getOwnPropertyDescriptor && It
      ? Object.getOwnPropertyDescriptor(Map.prototype, 'size')
      : null,
  et = It && ut && typeof ut.get == 'function' ? ut.get : null,
  Qt = It && Map.prototype.forEach,
  Tt = typeof Set == 'function' && Set.prototype,
  ct =
    Object.getOwnPropertyDescriptor && Tt
      ? Object.getOwnPropertyDescriptor(Set.prototype, 'size')
      : null,
  tt = Tt && ct && typeof ct.get == 'function' ? ct.get : null,
  Jt = Tt && Set.prototype.forEach,
  Hn = typeof WeakMap == 'function' && WeakMap.prototype,
  Re = Hn ? WeakMap.prototype.has : null,
  Qn = typeof WeakSet == 'function' && WeakSet.prototype,
  De = Qn ? WeakSet.prototype.has : null,
  Jn = typeof WeakRef == 'function' && WeakRef.prototype,
  Kt = Jn ? WeakRef.prototype.deref : null,
  Kn = Boolean.prototype.valueOf,
  Zn = Object.prototype.toString,
  Yn = Function.prototype.toString,
  Xn = String.prototype.match,
  Ft = String.prototype.slice,
  _e = String.prototype.replace,
  ea = String.prototype.toUpperCase,
  Zt = String.prototype.toLowerCase,
  Sr = RegExp.prototype.test,
  Yt = Array.prototype.concat,
  ce = Array.prototype.join,
  ta = Array.prototype.slice,
  Xt = Math.floor,
  ht = typeof BigInt == 'function' ? BigInt.prototype.valueOf : null,
  ft = Object.getOwnPropertySymbols,
  gt =
    typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
      ? Symbol.prototype.toString
      : null,
  Me = typeof Symbol == 'function' && typeof Symbol.iterator == 'object',
  X =
    typeof Symbol == 'function' &&
    Symbol.toStringTag &&
    (typeof Symbol.toStringTag === Me || 'symbol')
      ? Symbol.toStringTag
      : null,
  wr = Object.prototype.propertyIsEnumerable,
  er =
    (typeof Reflect == 'function' ? Reflect.getPrototypeOf : Object.getPrototypeOf) ||
    ([].__proto__ === Array.prototype
      ? function (t) {
          return t.__proto__;
        }
      : null);
function tr(t, e) {
  if (t === 1 / 0 || t === -1 / 0 || t !== t || (t && t > -1e3 && t < 1e3) || Sr.call(/e/, e))
    return e;
  var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof t == 'number') {
    var n = t < 0 ? -Xt(-t) : Xt(t);
    if (n !== t) {
      var o = String(n),
        a = Ft.call(e, o.length + 1);
      return _e.call(o, r, '$&_') + '.' + _e.call(_e.call(a, /([0-9]{3})/g, '$&_'), /_$/, '');
    }
  }
  return _e.call(e, r, '$&_');
}
var bt = Kr,
  rr = bt.custom,
  nr = $r(rr) ? rr : null,
  ra = function t(e, r, n, o) {
    var a = r || {};
    if (be(a, 'quoteStyle') && a.quoteStyle !== 'single' && a.quoteStyle !== 'double')
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (
      be(a, 'maxStringLength') &&
      (typeof a.maxStringLength == 'number'
        ? a.maxStringLength < 0 && a.maxStringLength !== 1 / 0
        : a.maxStringLength !== null)
    )
      throw new TypeError(
        'option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`',
      );
    var l = be(a, 'customInspect') ? a.customInspect : !0;
    if (typeof l != 'boolean' && l !== 'symbol')
      throw new TypeError(
        'option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`',
      );
    if (
      be(a, 'indent') &&
      a.indent !== null &&
      a.indent !== '	' &&
      !(parseInt(a.indent, 10) === a.indent && a.indent > 0)
    )
      throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (be(a, 'numericSeparator') && typeof a.numericSeparator != 'boolean')
      throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var u = a.numericSeparator;
    if (typeof e == 'undefined') return 'undefined';
    if (e === null) return 'null';
    if (typeof e == 'boolean') return e ? 'true' : 'false';
    if (typeof e == 'string') return Or(e, a);
    if (typeof e == 'number') {
      if (e === 0) return 1 / 0 / e > 0 ? '0' : '-0';
      var i = String(e);
      return u ? tr(e, i) : i;
    }
    if (typeof e == 'bigint') {
      var s = String(e) + 'n';
      return u ? tr(e, s) : s;
    }
    var p = typeof a.depth == 'undefined' ? 5 : a.depth;
    if ((typeof n == 'undefined' && (n = 0), n >= p && p > 0 && typeof e == 'object'))
      return _t(e) ? '[Array]' : '[Object]';
    var y = _a(a, n);
    if (typeof o == 'undefined') o = [];
    else if (Pr(o, e) >= 0) return '[Circular]';
    function f(Q, se, he) {
      if ((se && ((o = ta.call(o)), o.push(se)), he)) {
        var C = { depth: a.depth };
        return be(a, 'quoteStyle') && (C.quoteStyle = a.quoteStyle), t(Q, C, n + 1, o);
      }
      return t(Q, a, n + 1, o);
    }
    if (typeof e == 'function' && !ar(e)) {
      var g = fa(e),
        m = je(e, f);
      return (
        '[Function' +
        (g ? ': ' + g : ' (anonymous)') +
        ']' +
        (m.length > 0 ? ' { ' + ce.call(m, ', ') + ' }' : '')
      );
    }
    if ($r(e)) {
      var b = Me ? _e.call(String(e), /^(Symbol\(.*\))_[^)]*$/, '$1') : gt.call(e);
      return typeof e == 'object' && !Me ? ke(b) : b;
    }
    if (ha(e)) {
      for (
        var P = '<' + Zt.call(String(e.nodeName)), w = e.attributes || [], x = 0;
        x < w.length;
        x++
      )
        P += ' ' + w[x].name + '=' + Ar(na(w[x].value), 'double', a);
      return (
        (P += '>'),
        e.childNodes && e.childNodes.length && (P += '...'),
        (P += '</' + Zt.call(String(e.nodeName)) + '>'),
        P
      );
    }
    if (_t(e)) {
      if (e.length === 0) return '[]';
      var U = je(e, f);
      return y && !ba(U) ? '[' + St(U, y) + ']' : '[ ' + ce.call(U, ', ') + ' ]';
    }
    if (oa(e)) {
      var le = je(e, f);
      return !('cause' in Error.prototype) && 'cause' in e && !wr.call(e, 'cause')
        ? '{ [' + String(e) + '] ' + ce.call(Yt.call('[cause]: ' + f(e.cause), le), ', ') + ' }'
        : le.length === 0
        ? '[' + String(e) + ']'
        : '{ [' + String(e) + '] ' + ce.call(le, ', ') + ' }';
    }
    if (typeof e == 'object' && l) {
      if (nr && typeof e[nr] == 'function' && bt) return bt(e, { depth: p - n });
      if (l !== 'symbol' && typeof e.inspect == 'function') return e.inspect();
    }
    if (pa(e)) {
      var j = [];
      return (
        Qt &&
          Qt.call(e, function (Q, se) {
            j.push(f(se, e, !0) + ' => ' + f(Q, e));
          }),
        or('Map', et.call(e), j, y)
      );
    }
    if (va(e)) {
      var ae = [];
      return (
        Jt &&
          Jt.call(e, function (Q) {
            ae.push(f(Q, e));
          }),
        or('Set', tt.call(e), ae, y)
      );
    }
    if (da(e)) return pt('WeakMap');
    if (ma(e)) return pt('WeakSet');
    if (ya(e)) return pt('WeakRef');
    if (la(e)) return ke(f(Number(e)));
    if (ua(e)) return ke(f(ht.call(e)));
    if (sa(e)) return ke(Kn.call(e));
    if (ia(e)) return ke(f(String(e)));
    if (!aa(e) && !ar(e)) {
      var K = je(e, f),
        ee = er ? er(e) === Object.prototype : e instanceof Object || e.constructor === Object,
        te = e instanceof Object ? '' : 'null prototype',
        T = !ee && X && Object(e) === e && X in e ? Ft.call(we(e), 8, -1) : te ? 'Object' : '',
        N =
          ee || typeof e.constructor != 'function'
            ? ''
            : e.constructor.name
            ? e.constructor.name + ' '
            : '',
        I = N + (T || te ? '[' + ce.call(Yt.call([], T || [], te || []), ': ') + '] ' : '');
      return K.length === 0
        ? I + '{}'
        : y
        ? I + '{' + St(K, y) + '}'
        : I + '{ ' + ce.call(K, ', ') + ' }';
    }
    return String(e);
  };
function Ar(t, e, r) {
  var n = (r.quoteStyle || e) === 'double' ? '"' : "'";
  return n + t + n;
}
function na(t) {
  return _e.call(String(t), /"/g, '&quot;');
}
function _t(t) {
  return we(t) === '[object Array]' && (!X || !(typeof t == 'object' && X in t));
}
function aa(t) {
  return we(t) === '[object Date]' && (!X || !(typeof t == 'object' && X in t));
}
function ar(t) {
  return we(t) === '[object RegExp]' && (!X || !(typeof t == 'object' && X in t));
}
function oa(t) {
  return we(t) === '[object Error]' && (!X || !(typeof t == 'object' && X in t));
}
function ia(t) {
  return we(t) === '[object String]' && (!X || !(typeof t == 'object' && X in t));
}
function la(t) {
  return we(t) === '[object Number]' && (!X || !(typeof t == 'object' && X in t));
}
function sa(t) {
  return we(t) === '[object Boolean]' && (!X || !(typeof t == 'object' && X in t));
}
function $r(t) {
  if (Me) return t && typeof t == 'object' && t instanceof Symbol;
  if (typeof t == 'symbol') return !0;
  if (!t || typeof t != 'object' || !gt) return !1;
  try {
    return gt.call(t), !0;
  } catch (e) {}
  return !1;
}
function ua(t) {
  if (!t || typeof t != 'object' || !ht) return !1;
  try {
    return ht.call(t), !0;
  } catch (e) {}
  return !1;
}
var ca =
  Object.prototype.hasOwnProperty ||
  function (t) {
    return t in this;
  };
function be(t, e) {
  return ca.call(t, e);
}
function we(t) {
  return Zn.call(t);
}
function fa(t) {
  if (t.name) return t.name;
  var e = Xn.call(Yn.call(t), /^function\s*([\w$]+)/);
  return e ? e[1] : null;
}
function Pr(t, e) {
  if (t.indexOf) return t.indexOf(e);
  for (var r = 0, n = t.length; r < n; r++) if (t[r] === e) return r;
  return -1;
}
function pa(t) {
  if (!et || !t || typeof t != 'object') return !1;
  try {
    et.call(t);
    try {
      tt.call(t);
    } catch (e) {
      return !0;
    }
    return t instanceof Map;
  } catch (e) {}
  return !1;
}
function da(t) {
  if (!Re || !t || typeof t != 'object') return !1;
  try {
    Re.call(t, Re);
    try {
      De.call(t, De);
    } catch (e) {
      return !0;
    }
    return t instanceof WeakMap;
  } catch (e) {}
  return !1;
}
function ya(t) {
  if (!Kt || !t || typeof t != 'object') return !1;
  try {
    return Kt.call(t), !0;
  } catch (e) {}
  return !1;
}
function va(t) {
  if (!tt || !t || typeof t != 'object') return !1;
  try {
    tt.call(t);
    try {
      et.call(t);
    } catch (e) {
      return !0;
    }
    return t instanceof Set;
  } catch (e) {}
  return !1;
}
function ma(t) {
  if (!De || !t || typeof t != 'object') return !1;
  try {
    De.call(t, De);
    try {
      Re.call(t, Re);
    } catch (e) {
      return !0;
    }
    return t instanceof WeakSet;
  } catch (e) {}
  return !1;
}
function ha(t) {
  return !t || typeof t != 'object'
    ? !1
    : typeof HTMLElement != 'undefined' && t instanceof HTMLElement
    ? !0
    : typeof t.nodeName == 'string' && typeof t.getAttribute == 'function';
}
function Or(t, e) {
  if (t.length > e.maxStringLength) {
    var r = t.length - e.maxStringLength,
      n = '... ' + r + ' more character' + (r > 1 ? 's' : '');
    return Or(Ft.call(t, 0, e.maxStringLength), e) + n;
  }
  var o = _e.call(_e.call(t, /(['\\])/g, '\\$1'), /[\x00-\x1f]/g, ga);
  return Ar(o, 'single', e);
}
function ga(t) {
  var e = t.charCodeAt(0),
    r = { 8: 'b', 9: 't', 10: 'n', 12: 'f', 13: 'r' }[e];
  return r ? '\\' + r : '\\x' + (e < 16 ? '0' : '') + ea.call(e.toString(16));
}
function ke(t) {
  return 'Object(' + t + ')';
}
function pt(t) {
  return t + ' { ? }';
}
function or(t, e, r, n) {
  var o = n ? St(r, n) : ce.call(r, ', ');
  return t + ' (' + e + ') {' + o + '}';
}
function ba(t) {
  for (var e = 0; e < t.length; e++)
    if (
      Pr(
        t[e],
        `
`,
      ) >= 0
    )
      return !1;
  return !0;
}
function _a(t, e) {
  var r;
  if (t.indent === '	') r = '	';
  else if (typeof t.indent == 'number' && t.indent > 0) r = ce.call(Array(t.indent + 1), ' ');
  else return null;
  return { base: r, prev: ce.call(Array(e + 1), r) };
}
function St(t, e) {
  if (t.length === 0) return '';
  var r =
    `
` +
    e.prev +
    e.base;
  return (
    r +
    ce.call(t, ',' + r) +
    `
` +
    e.prev
  );
}
function je(t, e) {
  var r = _t(t),
    n = [];
  if (r) {
    n.length = t.length;
    for (var o = 0; o < t.length; o++) n[o] = be(t, o) ? e(t[o], t) : '';
  }
  var a = typeof ft == 'function' ? ft(t) : [],
    l;
  if (Me) {
    l = {};
    for (var u = 0; u < a.length; u++) l['$' + a[u]] = a[u];
  }
  for (var i in t)
    be(t, i) &&
      ((r && String(Number(i)) === i && i < t.length) ||
        (Me && l['$' + i] instanceof Symbol) ||
        (Sr.call(/[^\w$]/, i)
          ? n.push(e(i, t) + ': ' + e(t[i], t))
          : n.push(i + ': ' + e(t[i], t))));
  if (typeof ft == 'function')
    for (var s = 0; s < a.length; s++)
      wr.call(t, a[s]) && n.push('[' + e(a[s]) + ']: ' + e(t[a[s]], t));
  return n;
}
var kt = Mt,
  Fe = Gn,
  Sa = ra,
  wa = kt('%TypeError%'),
  qe = kt('%WeakMap%', !0),
  Ge = kt('%Map%', !0),
  Aa = Fe('WeakMap.prototype.get', !0),
  $a = Fe('WeakMap.prototype.set', !0),
  Pa = Fe('WeakMap.prototype.has', !0),
  Oa = Fe('Map.prototype.get', !0),
  Ea = Fe('Map.prototype.set', !0),
  Ca = Fe('Map.prototype.has', !0),
  Nt = function (t, e) {
    for (var r = t, n; (n = r.next) !== null; r = n)
      if (n.key === e) return (r.next = n.next), (n.next = t.next), (t.next = n), n;
  },
  xa = function (t, e) {
    var r = Nt(t, e);
    return r && r.value;
  },
  Ma = function (t, e, r) {
    var n = Nt(t, e);
    n ? (n.value = r) : (t.next = { key: e, next: t.next, value: r });
  },
  Ia = function (t, e) {
    return !!Nt(t, e);
  },
  Ta = function () {
    var e,
      r,
      n,
      o = {
        assert: function (a) {
          if (!o.has(a)) throw new wa('Side channel does not contain ' + Sa(a));
        },
        get: function (a) {
          if (qe && a && (typeof a == 'object' || typeof a == 'function')) {
            if (e) return Aa(e, a);
          } else if (Ge) {
            if (r) return Oa(r, a);
          } else if (n) return xa(n, a);
        },
        has: function (a) {
          if (qe && a && (typeof a == 'object' || typeof a == 'function')) {
            if (e) return Pa(e, a);
          } else if (Ge) {
            if (r) return Ca(r, a);
          } else if (n) return Ia(n, a);
          return !1;
        },
        set: function (a, l) {
          qe && a && (typeof a == 'object' || typeof a == 'function')
            ? (e || (e = new qe()), $a(e, a, l))
            : Ge
            ? (r || (r = new Ge()), Ea(r, a, l))
            : (n || (n = { key: {}, next: null }), Ma(n, a, l));
        },
      };
    return o;
  },
  Fa = String.prototype.replace,
  ka = /%20/g,
  dt = { RFC1738: 'RFC1738', RFC3986: 'RFC3986' },
  Rt = {
    default: dt.RFC3986,
    formatters: {
      RFC1738: function (t) {
        return Fa.call(t, ka, '+');
      },
      RFC3986: function (t) {
        return String(t);
      },
    },
    RFC1738: dt.RFC1738,
    RFC3986: dt.RFC3986,
  },
  Na = Rt,
  yt = Object.prototype.hasOwnProperty,
  Ae = Array.isArray,
  ue = (function () {
    for (var t = [], e = 0; e < 256; ++e)
      t.push('%' + ((e < 16 ? '0' : '') + e.toString(16)).toUpperCase());
    return t;
  })(),
  Ra = function (e) {
    for (; e.length > 1; ) {
      var r = e.pop(),
        n = r.obj[r.prop];
      if (Ae(n)) {
        for (var o = [], a = 0; a < n.length; ++a) typeof n[a] != 'undefined' && o.push(n[a]);
        r.obj[r.prop] = o;
      }
    }
  },
  Er = function (e, r) {
    for (var n = r && r.plainObjects ? Object.create(null) : {}, o = 0; o < e.length; ++o)
      typeof e[o] != 'undefined' && (n[o] = e[o]);
    return n;
  },
  Da = function t(e, r, n) {
    if (!r) return e;
    if (typeof r != 'object') {
      if (Ae(e)) e.push(r);
      else if (e && typeof e == 'object')
        ((n && (n.plainObjects || n.allowPrototypes)) || !yt.call(Object.prototype, r)) &&
          (e[r] = !0);
      else return [e, r];
      return e;
    }
    if (!e || typeof e != 'object') return [e].concat(r);
    var o = e;
    return (
      Ae(e) && !Ae(r) && (o = Er(e, n)),
      Ae(e) && Ae(r)
        ? (r.forEach(function (a, l) {
            if (yt.call(e, l)) {
              var u = e[l];
              u && typeof u == 'object' && a && typeof a == 'object'
                ? (e[l] = t(u, a, n))
                : e.push(a);
            } else e[l] = a;
          }),
          e)
        : Object.keys(r).reduce(function (a, l) {
            var u = r[l];
            return yt.call(a, l) ? (a[l] = t(a[l], u, n)) : (a[l] = u), a;
          }, o)
    );
  },
  Va = function (e, r) {
    return Object.keys(r).reduce(function (n, o) {
      return (n[o] = r[o]), n;
    }, e);
  },
  Ba = function (t, e, r) {
    var n = t.replace(/\+/g, ' ');
    if (r === 'iso-8859-1') return n.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
      return decodeURIComponent(n);
    } catch (o) {
      return n;
    }
  },
  Ua = function (e, r, n, o, a) {
    if (e.length === 0) return e;
    var l = e;
    if (
      (typeof e == 'symbol'
        ? (l = Symbol.prototype.toString.call(e))
        : typeof e != 'string' && (l = String(e)),
      n === 'iso-8859-1')
    )
      return escape(l).replace(/%u[0-9a-f]{4}/gi, function (p) {
        return '%26%23' + parseInt(p.slice(2), 16) + '%3B';
      });
    for (var u = '', i = 0; i < l.length; ++i) {
      var s = l.charCodeAt(i);
      if (
        s === 45 ||
        s === 46 ||
        s === 95 ||
        s === 126 ||
        (s >= 48 && s <= 57) ||
        (s >= 65 && s <= 90) ||
        (s >= 97 && s <= 122) ||
        (a === Na.RFC1738 && (s === 40 || s === 41))
      ) {
        u += l.charAt(i);
        continue;
      }
      if (s < 128) {
        u = u + ue[s];
        continue;
      }
      if (s < 2048) {
        u = u + (ue[192 | (s >> 6)] + ue[128 | (s & 63)]);
        continue;
      }
      if (s < 55296 || s >= 57344) {
        u = u + (ue[224 | (s >> 12)] + ue[128 | ((s >> 6) & 63)] + ue[128 | (s & 63)]);
        continue;
      }
      (i += 1),
        (s = 65536 + (((s & 1023) << 10) | (l.charCodeAt(i) & 1023))),
        (u +=
          ue[240 | (s >> 18)] +
          ue[128 | ((s >> 12) & 63)] +
          ue[128 | ((s >> 6) & 63)] +
          ue[128 | (s & 63)]);
    }
    return u;
  },
  za = function (e) {
    for (var r = [{ obj: { o: e }, prop: 'o' }], n = [], o = 0; o < r.length; ++o)
      for (var a = r[o], l = a.obj[a.prop], u = Object.keys(l), i = 0; i < u.length; ++i) {
        var s = u[i],
          p = l[s];
        typeof p == 'object' &&
          p !== null &&
          n.indexOf(p) === -1 &&
          (r.push({ obj: l, prop: s }), n.push(p));
      }
    return Ra(r), e;
  },
  La = function (e) {
    return Object.prototype.toString.call(e) === '[object RegExp]';
  },
  Wa = function (e) {
    return !e || typeof e != 'object'
      ? !1
      : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
  },
  ja = function (e, r) {
    return [].concat(e, r);
  },
  qa = function (e, r) {
    if (Ae(e)) {
      for (var n = [], o = 0; o < e.length; o += 1) n.push(r(e[o]));
      return n;
    }
    return r(e);
  },
  Cr = {
    arrayToObject: Er,
    assign: Va,
    combine: ja,
    compact: za,
    decode: Ba,
    encode: Ua,
    isBuffer: Wa,
    isRegExp: La,
    maybeMap: qa,
    merge: Da,
  },
  xr = Ta,
  He = Cr,
  Ve = Rt,
  Ga = Object.prototype.hasOwnProperty,
  ir = {
    brackets: function (e) {
      return e + '[]';
    },
    comma: 'comma',
    indices: function (e, r) {
      return e + '[' + r + ']';
    },
    repeat: function (e) {
      return e;
    },
  },
  de = Array.isArray,
  Ha = Array.prototype.push,
  Mr = function (t, e) {
    Ha.apply(t, de(e) ? e : [e]);
  },
  Qa = Date.prototype.toISOString,
  lr = Ve.default,
  Y = {
    addQueryPrefix: !1,
    allowDots: !1,
    charset: 'utf-8',
    charsetSentinel: !1,
    delimiter: '&',
    encode: !0,
    encoder: He.encode,
    encodeValuesOnly: !1,
    format: lr,
    formatter: Ve.formatters[lr],
    indices: !1,
    serializeDate: function (e) {
      return Qa.call(e);
    },
    skipNulls: !1,
    strictNullHandling: !1,
  },
  Ja = function (e) {
    return (
      typeof e == 'string' ||
      typeof e == 'number' ||
      typeof e == 'boolean' ||
      typeof e == 'symbol' ||
      typeof e == 'bigint'
    );
  },
  vt = {},
  Ka = function t(e, r, n, o, a, l, u, i, s, p, y, f, g, m, b, P) {
    for (var w = e, x = P, U = 0, le = !1; (x = x.get(vt)) !== void 0 && !le; ) {
      var j = x.get(e);
      if (((U += 1), typeof j != 'undefined')) {
        if (j === U) throw new RangeError('Cyclic object value');
        le = !0;
      }
      typeof x.get(vt) == 'undefined' && (U = 0);
    }
    if (
      (typeof i == 'function'
        ? (w = i(r, w))
        : w instanceof Date
        ? (w = y(w))
        : n === 'comma' &&
          de(w) &&
          (w = He.maybeMap(w, function (C) {
            return C instanceof Date ? y(C) : C;
          })),
      w === null)
    ) {
      if (a) return u && !m ? u(r, Y.encoder, b, 'key', f) : r;
      w = '';
    }
    if (Ja(w) || He.isBuffer(w)) {
      if (u) {
        var ae = m ? r : u(r, Y.encoder, b, 'key', f);
        return [g(ae) + '=' + g(u(w, Y.encoder, b, 'value', f))];
      }
      return [g(r) + '=' + g(String(w))];
    }
    var K = [];
    if (typeof w == 'undefined') return K;
    var ee;
    if (n === 'comma' && de(w))
      m && u && (w = He.maybeMap(w, u)),
        (ee = [{ value: w.length > 0 ? w.join(',') || null : void 0 }]);
    else if (de(i)) ee = i;
    else {
      var te = Object.keys(w);
      ee = s ? te.sort(s) : te;
    }
    for (var T = o && de(w) && w.length === 1 ? r + '[]' : r, N = 0; N < ee.length; ++N) {
      var I = ee[N],
        Q = typeof I == 'object' && typeof I.value != 'undefined' ? I.value : w[I];
      if (!(l && Q === null)) {
        var se = de(w) ? (typeof n == 'function' ? n(T, I) : T) : T + (p ? '.' + I : '[' + I + ']');
        P.set(e, U);
        var he = xr();
        he.set(vt, P),
          Mr(
            K,
            t(
              Q,
              se,
              n,
              o,
              a,
              l,
              n === 'comma' && m && de(w) ? null : u,
              i,
              s,
              p,
              y,
              f,
              g,
              m,
              b,
              he,
            ),
          );
      }
    }
    return K;
  },
  Za = function (e) {
    if (!e) return Y;
    if (e.encoder !== null && typeof e.encoder != 'undefined' && typeof e.encoder != 'function')
      throw new TypeError('Encoder has to be a function.');
    var r = e.charset || Y.charset;
    if (typeof e.charset != 'undefined' && e.charset !== 'utf-8' && e.charset !== 'iso-8859-1')
      throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    var n = Ve.default;
    if (typeof e.format != 'undefined') {
      if (!Ga.call(Ve.formatters, e.format)) throw new TypeError('Unknown format option provided.');
      n = e.format;
    }
    var o = Ve.formatters[n],
      a = Y.filter;
    return (
      (typeof e.filter == 'function' || de(e.filter)) && (a = e.filter),
      {
        addQueryPrefix: typeof e.addQueryPrefix == 'boolean' ? e.addQueryPrefix : Y.addQueryPrefix,
        allowDots: typeof e.allowDots == 'undefined' ? Y.allowDots : !!e.allowDots,
        charset: r,
        charsetSentinel:
          typeof e.charsetSentinel == 'boolean' ? e.charsetSentinel : Y.charsetSentinel,
        delimiter: typeof e.delimiter == 'undefined' ? Y.delimiter : e.delimiter,
        encode: typeof e.encode == 'boolean' ? e.encode : Y.encode,
        encoder: typeof e.encoder == 'function' ? e.encoder : Y.encoder,
        encodeValuesOnly:
          typeof e.encodeValuesOnly == 'boolean' ? e.encodeValuesOnly : Y.encodeValuesOnly,
        filter: a,
        format: n,
        formatter: o,
        serializeDate: typeof e.serializeDate == 'function' ? e.serializeDate : Y.serializeDate,
        skipNulls: typeof e.skipNulls == 'boolean' ? e.skipNulls : Y.skipNulls,
        sort: typeof e.sort == 'function' ? e.sort : null,
        strictNullHandling:
          typeof e.strictNullHandling == 'boolean' ? e.strictNullHandling : Y.strictNullHandling,
      }
    );
  },
  Ya = function (t, e) {
    var r = t,
      n = Za(e),
      o,
      a;
    typeof n.filter == 'function'
      ? ((a = n.filter), (r = a('', r)))
      : de(n.filter) && ((a = n.filter), (o = a));
    var l = [];
    if (typeof r != 'object' || r === null) return '';
    var u;
    e && e.arrayFormat in ir
      ? (u = e.arrayFormat)
      : e && 'indices' in e
      ? (u = e.indices ? 'indices' : 'repeat')
      : (u = 'indices');
    var i = ir[u];
    if (e && 'commaRoundTrip' in e && typeof e.commaRoundTrip != 'boolean')
      throw new TypeError('`commaRoundTrip` must be a boolean, or absent');
    var s = i === 'comma' && e && e.commaRoundTrip;
    o || (o = Object.keys(r)), n.sort && o.sort(n.sort);
    for (var p = xr(), y = 0; y < o.length; ++y) {
      var f = o[y];
      (n.skipNulls && r[f] === null) ||
        Mr(
          l,
          Ka(
            r[f],
            f,
            i,
            s,
            n.strictNullHandling,
            n.skipNulls,
            n.encode ? n.encoder : null,
            n.filter,
            n.sort,
            n.allowDots,
            n.serializeDate,
            n.format,
            n.formatter,
            n.encodeValuesOnly,
            n.charset,
            p,
          ),
        );
    }
    var g = l.join(n.delimiter),
      m = n.addQueryPrefix === !0 ? '?' : '';
    return (
      n.charsetSentinel &&
        (n.charset === 'iso-8859-1' ? (m += 'utf8=%26%2310003%3B&') : (m += 'utf8=%E2%9C%93&')),
      g.length > 0 ? m + g : ''
    );
  },
  Ie = Cr,
  wt = Object.prototype.hasOwnProperty,
  Xa = Array.isArray,
  G = {
    allowDots: !1,
    allowPrototypes: !1,
    allowSparse: !1,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: !1,
    comma: !1,
    decoder: Ie.decode,
    delimiter: '&',
    depth: 5,
    ignoreQueryPrefix: !1,
    interpretNumericEntities: !1,
    parameterLimit: 1e3,
    parseArrays: !0,
    plainObjects: !1,
    strictNullHandling: !1,
  },
  eo = function (t) {
    return t.replace(/&#(\d+);/g, function (e, r) {
      return String.fromCharCode(parseInt(r, 10));
    });
  },
  Ir = function (t, e) {
    return t && typeof t == 'string' && e.comma && t.indexOf(',') > -1 ? t.split(',') : t;
  },
  to = 'utf8=%26%2310003%3B',
  ro = 'utf8=%E2%9C%93',
  no = function (e, r) {
    var n = { __proto__: null },
      o = r.ignoreQueryPrefix ? e.replace(/^\?/, '') : e,
      a = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit,
      l = o.split(r.delimiter, a),
      u = -1,
      i,
      s = r.charset;
    if (r.charsetSentinel)
      for (i = 0; i < l.length; ++i)
        l[i].indexOf('utf8=') === 0 &&
          (l[i] === ro ? (s = 'utf-8') : l[i] === to && (s = 'iso-8859-1'),
          (u = i),
          (i = l.length));
    for (i = 0; i < l.length; ++i)
      if (i !== u) {
        var p = l[i],
          y = p.indexOf(']='),
          f = y === -1 ? p.indexOf('=') : y + 1,
          g,
          m;
        f === -1
          ? ((g = r.decoder(p, G.decoder, s, 'key')), (m = r.strictNullHandling ? null : ''))
          : ((g = r.decoder(p.slice(0, f), G.decoder, s, 'key')),
            (m = Ie.maybeMap(Ir(p.slice(f + 1), r), function (b) {
              return r.decoder(b, G.decoder, s, 'value');
            }))),
          m && r.interpretNumericEntities && s === 'iso-8859-1' && (m = eo(m)),
          p.indexOf('[]=') > -1 && (m = Xa(m) ? [m] : m),
          wt.call(n, g) ? (n[g] = Ie.combine(n[g], m)) : (n[g] = m);
      }
    return n;
  },
  ao = function (t, e, r, n) {
    for (var o = n ? e : Ir(e, r), a = t.length - 1; a >= 0; --a) {
      var l,
        u = t[a];
      if (u === '[]' && r.parseArrays) l = [].concat(o);
      else {
        l = r.plainObjects ? Object.create(null) : {};
        var i = u.charAt(0) === '[' && u.charAt(u.length - 1) === ']' ? u.slice(1, -1) : u,
          s = parseInt(i, 10);
        !r.parseArrays && i === ''
          ? (l = { 0: o })
          : !isNaN(s) && u !== i && String(s) === i && s >= 0 && r.parseArrays && s <= r.arrayLimit
          ? ((l = []), (l[s] = o))
          : i !== '__proto__' && (l[i] = o);
      }
      o = l;
    }
    return o;
  },
  oo = function (e, r, n, o) {
    if (e) {
      var a = n.allowDots ? e.replace(/\.([^.[]+)/g, '[$1]') : e,
        l = /(\[[^[\]]*])/,
        u = /(\[[^[\]]*])/g,
        i = n.depth > 0 && l.exec(a),
        s = i ? a.slice(0, i.index) : a,
        p = [];
      if (s) {
        if (!n.plainObjects && wt.call(Object.prototype, s) && !n.allowPrototypes) return;
        p.push(s);
      }
      for (var y = 0; n.depth > 0 && (i = u.exec(a)) !== null && y < n.depth; ) {
        if (
          ((y += 1),
          !n.plainObjects && wt.call(Object.prototype, i[1].slice(1, -1)) && !n.allowPrototypes)
        )
          return;
        p.push(i[1]);
      }
      return i && p.push('[' + a.slice(i.index) + ']'), ao(p, r, n, o);
    }
  },
  io = function (e) {
    if (!e) return G;
    if (e.decoder !== null && e.decoder !== void 0 && typeof e.decoder != 'function')
      throw new TypeError('Decoder has to be a function.');
    if (typeof e.charset != 'undefined' && e.charset !== 'utf-8' && e.charset !== 'iso-8859-1')
      throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    var r = typeof e.charset == 'undefined' ? G.charset : e.charset;
    return {
      allowDots: typeof e.allowDots == 'undefined' ? G.allowDots : !!e.allowDots,
      allowPrototypes:
        typeof e.allowPrototypes == 'boolean' ? e.allowPrototypes : G.allowPrototypes,
      allowSparse: typeof e.allowSparse == 'boolean' ? e.allowSparse : G.allowSparse,
      arrayLimit: typeof e.arrayLimit == 'number' ? e.arrayLimit : G.arrayLimit,
      charset: r,
      charsetSentinel:
        typeof e.charsetSentinel == 'boolean' ? e.charsetSentinel : G.charsetSentinel,
      comma: typeof e.comma == 'boolean' ? e.comma : G.comma,
      decoder: typeof e.decoder == 'function' ? e.decoder : G.decoder,
      delimiter:
        typeof e.delimiter == 'string' || Ie.isRegExp(e.delimiter) ? e.delimiter : G.delimiter,
      depth: typeof e.depth == 'number' || e.depth === !1 ? +e.depth : G.depth,
      ignoreQueryPrefix: e.ignoreQueryPrefix === !0,
      interpretNumericEntities:
        typeof e.interpretNumericEntities == 'boolean'
          ? e.interpretNumericEntities
          : G.interpretNumericEntities,
      parameterLimit: typeof e.parameterLimit == 'number' ? e.parameterLimit : G.parameterLimit,
      parseArrays: e.parseArrays !== !1,
      plainObjects: typeof e.plainObjects == 'boolean' ? e.plainObjects : G.plainObjects,
      strictNullHandling:
        typeof e.strictNullHandling == 'boolean' ? e.strictNullHandling : G.strictNullHandling,
    };
  },
  lo = function (t, e) {
    var r = io(e);
    if (t === '' || t === null || typeof t == 'undefined')
      return r.plainObjects ? Object.create(null) : {};
    for (
      var n = typeof t == 'string' ? no(t, r) : t,
        o = r.plainObjects ? Object.create(null) : {},
        a = Object.keys(n),
        l = 0;
      l < a.length;
      ++l
    ) {
      var u = a[l],
        i = oo(u, n[u], r, typeof t == 'string');
      o = Ie.merge(o, i, r);
    }
    return r.allowSparse === !0 ? o : Ie.compact(o);
  },
  so = Ya,
  uo = lo,
  co = Rt,
  fo = { formats: co, parse: uo, stringify: so };
const po = fr(fo),
  Tr = (t) => {
    const e = ze(),
      r = Qe(),
      n = (i) =>
        `${i.path}${i.query && Object.keys(i.query).length ? '?' + po.stringify(i.query) : ''}`,
      o = (i) => {
        const { path: s, name: p, meta: y } = i;
        if (!(y != null && y.hideTabs) && !(y != null && y.hideSidebar)) {
          const f = { path: s, meta: y, name: p };
          fe().handleMultiTabs('add', f);
        }
      },
      a = (i, s) => {
        const p = t.value.findIndex((f) => n(f) === n(i)),
          y = t.value.filter((f, g) =>
            (f.path !== i.path && s === 'other') || (g < p && s === 'left')
              ? !0
              : g > p && s === 'right',
          );
        if (y.find((f) => f.path === e.path)) {
          const { path: f, query: g } = t.value[p];
          r.push({ path: f, query: g });
        }
        y.forEach((f) => fe().handleMultiTabs('delete', f));
      },
      l = (i) => {
        const s = t.value.findIndex((g) => n(g) === n(i)),
          p = t.value.length;
        let y, f;
        t.value[s].name === e.name &&
          (s === p - 1 ? (y = t.value[s - 1]) : (y = t.value[p - 1]),
          (f = { path: y.path, query: y.query }),
          r.push(f)),
          fe().handleMultiTabs('delete', t.value[s]);
      };
    function u(i) {
      const s = 'refresh-button';
      mn(document.querySelector('.rotate'), s);
      const { path: p, query: y } = h(i || e);
      r.replace({ path: '/redirect' + p, query: y }),
        setTimeout(() => {
          hn(document.querySelector('.rotate'), s);
        }, 600);
    }
    return { setTabPaneKey: n, addRouteTabs: o, onFresh: u, closeTabsRoute: a, removeTab: l };
  },
  yo = (t) => {
    const { onFresh: e, removeTab: r, closeTabsRoute: n, setTabPaneKey: o } = Tr(t),
      a = Zr([
        { text: '刷新', disabled: !1, code: 'refresh' },
        { text: '关闭', disabled: !1, code: 'close' },
        { text: '关闭其他标签', disabled: !1, code: 'closeOther' },
        { text: '关闭左侧其他标签', disabled: !1, code: 'closeLeftOther' },
        { text: '关闭右侧其他标签', disabled: !1, code: 'closeRightOther' },
      ]),
      l = W(!1),
      u = W(0),
      i = W(0),
      s = W(null),
      p = (P, w) => {
        P.forEach((x) => {
          a[x].disabled = w;
        });
      },
      y = (P) => {
        p([0, 1, 2, 3, 4], !1);
        const w = t.value.findIndex((U) => o(U) === o(P)),
          x = t.value.length;
        w === 0 && x > 1
          ? p([3], !0)
          : w === x - 1 && x > 1
          ? p([4], !0)
          : x === 1 && p([1, 2, 3, 4], !0);
      },
      f = (P, w) => {
        const x = t.value.find((U) => o(U) === o(P));
        x &&
          (m(),
          y(x),
          (s.value = x),
          w &&
            setTimeout(() => {
              (i.value = w.clientX), (u.value = w.clientY), (l.value = !0);
            }, 100));
      },
      g = Se(() => ({ left: i.value + 'px', top: u.value + 'px' })),
      m = () => {
        l.value = !1;
      };
    return (
      ve(
        () => l.value,
        (P) => {
          P
            ? document.body.addEventListener('click', m)
            : document.body.removeEventListener('click', m);
        },
      ),
      {
        visible: l,
        rightClickTags: a,
        rightViewStyle: g,
        contextmenu: f,
        rightViewChange: (P) => {
          if (s.value) {
            switch (P.code) {
              case 'refresh': {
                e(s.value);
                break;
              }
              case 'close': {
                r(s.value);
                break;
              }
              case 'closeOther': {
                n(s.value, 'other');
                break;
              }
              case 'closeLeftOther': {
                n(s.value, 'left');
                break;
              }
              case 'closeRightOther': {
                n(s.value, 'right');
                break;
              }
            }
            y(s.value);
          }
        },
      }
    );
  },
  vo = { key: 0, class: 'main-container-tabs' },
  mo = { class: 'tabs-container' },
  ho = ['onClick', 'onContextmenu'],
  go = ['onClick'],
  bo = { key: 0, class: 'right-button' },
  _o = J({
    __name: 'index',
    setup(t) {
      const { appConfig: e, setAppConfigMode: r } = ie(),
        n = ze(),
        o = Qe(),
        { multiTabs: a, MultiTabsDropReordering: l } = fe(),
        u = Se(() => a),
        {
          visible: i,
          rightClickTags: s,
          rightViewStyle: p,
          contextmenu: y,
          rightViewChange: f,
        } = yo(u),
        { setTabPaneKey: g, addRouteTabs: m, onFresh: b, removeTab: P } = Tr(u),
        w = W(g(n));
      ve(
        () => [n.path],
        () =>
          Lt(this, null, function* () {
            m(n.matched[n.matched.length - 1]), (w.value = g(n));
          }),
        { immediate: !0 },
      );
      const x = (T) => {
          const N = u.value.find((I) => g(I) === T);
          N && P(N);
        },
        U = (T) => {
          o.push({ path: T.path, query: T.query });
        },
        le = () => {
          const { hideNavbart: T, hideSidebar: N } = e.value;
          r(T && N ? { hideNavbart: !1, hideSidebar: !1 } : { hideNavbart: !0, hideSidebar: !0 });
        },
        j = W(),
        ae = (T, N) => {
          var I;
          (I = j.value) == null || I.handleClose(), y(T, N);
        },
        { initSortable: K, destroy: ee } = yn({
          handle: '.tabs-view-item',
          onEnd({ newIndex: T, oldIndex: N }) {
            const I = u.value,
              Q = I.splice(N, 1)[0];
            I.splice(T, 0, Q), l(I);
          },
        }),
        te = () => {
          e.value.closeTabDrag || K(document.querySelector('.tabs-container .el-tabs__nav'));
        };
      return (
        pr(() => {
          te();
        }),
        ve(
          () => e.value.closeTabDrag,
          (T) => {
            T ? ee() : te();
          },
        ),
        (T, N) => {
          const I = k('el-tab-pane'),
            Q = k('el-tabs'),
            se = k('el-dropdown-item'),
            he = k('el-dropdown-menu');
          return h(e).hideTabs
            ? re('', !0)
            : (_(),
              E('div', vo, [
                A('div', mo, [
                  S(
                    Q,
                    {
                      modelValue: w.value,
                      'onUpdate:modelValue': N[0] || (N[0] = (C) => (w.value = C)),
                      type: 'card',
                      class: 'tabs-view',
                      closable: u.value.length > 1,
                      onTabRemove: x,
                    },
                    {
                      default: O(() => [
                        (_(!0),
                        E(
                          ne,
                          null,
                          pe(
                            u.value,
                            (C) => (
                              _(),
                              V(
                                I,
                                { key: h(g)(C), name: h(g)(C) },
                                {
                                  label: O(() => {
                                    var c;
                                    return [
                                      A(
                                        'div',
                                        {
                                          class: 'tabs-view-item',
                                          onClick: (d) => U(C),
                                          onContextmenu: dr((d) => ae(C, d), ['prevent']),
                                        },
                                        null,
                                        40,
                                        ho,
                                      ),
                                      A(
                                        'span',
                                        null,
                                        L(h(Je)((c = C.meta) == null ? void 0 : c.title)),
                                        1,
                                      ),
                                    ];
                                  }),
                                  _: 2,
                                },
                                1032,
                                ['name'],
                              )
                            ),
                          ),
                          128,
                        )),
                      ]),
                      _: 1,
                    },
                    8,
                    ['modelValue', 'closable'],
                  ),
                ]),
                S(
                  ur,
                  { name: 'el-zoom-in-top' },
                  {
                    default: O(() => [
                      Ke(
                        A(
                          'ul',
                          { class: 'right-view', style: yr(h(p)) },
                          [
                            (_(!0),
                            E(
                              ne,
                              null,
                              pe(
                                h(s),
                                (C, c) => (
                                  _(),
                                  E(
                                    'li',
                                    {
                                      key: c,
                                      class: Te([
                                        'right-view-item cursor',
                                        { disabled: C.disabled },
                                      ]),
                                      onClick: (d) => h(f)(C),
                                    },
                                    [A('span', null, L(C.text), 1)],
                                    10,
                                    go,
                                  )
                                ),
                              ),
                              128,
                            )),
                          ],
                          4,
                        ),
                        [[Ze, h(i)]],
                      ),
                    ]),
                    _: 1,
                  },
                ),
                h(e).hideTabsConfig
                  ? re('', !0)
                  : (_(),
                    E('div', bo, [
                      A('ul', null, [
                        A('li', { class: 'cursor', onClick: N[1] || (N[1] = (C) => h(b)()) }, [
                          S(ye, { class: 'rotate', name: 'iEL-refresh' }),
                        ]),
                        A('li', null, [
                          S(
                            h(Yr),
                            {
                              ref_key: 'elDropdownRef',
                              ref: j,
                              trigger: 'click',
                              placement: 'bottom-end',
                              onVisibleChange: N[2] || (N[2] = (C) => C && h(y)(h(n))),
                            },
                            {
                              dropdown: O(() => [
                                S(he, null, {
                                  default: O(() => [
                                    (_(!0),
                                    E(
                                      ne,
                                      null,
                                      pe(
                                        h(s),
                                        (C, c) => (
                                          _(),
                                          V(
                                            se,
                                            {
                                              key: c,
                                              command: { key: c, item: C },
                                              disabled: C.disabled,
                                              onClick: (d) => h(f)(C),
                                            },
                                            { default: O(() => [Ne(L(C.text), 1)]), _: 2 },
                                            1032,
                                            ['command', 'disabled', 'onClick'],
                                          )
                                        ),
                                      ),
                                      128,
                                    )),
                                  ]),
                                  _: 1,
                                }),
                              ]),
                              default: O(() => [
                                S(ye, { class: 'action-item cursor', name: 'iEL-arrow-down' }),
                              ]),
                              _: 1,
                            },
                            512,
                          ),
                        ]),
                        A('li', { class: 'cursor', onClick: le }, [
                          S(ye, { name: 'full_screen_page' }),
                        ]),
                      ]),
                    ])),
              ]));
        }
      );
    },
  });
const So = me(_o, [['__scopeId', 'data-v-5a2ee841']]);
var Ue = { exports: {} },
  Fr = {},
  wo = function (e) {
    return (
      e &&
      typeof e == 'object' &&
      typeof e.copy == 'function' &&
      typeof e.fill == 'function' &&
      typeof e.readUInt8 == 'function'
    );
  },
  At = { exports: {} };
typeof Object.create == 'function'
  ? (At.exports = function (e, r) {
      (e.super_ = r),
        (e.prototype = Object.create(r.prototype, {
          constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
        }));
    })
  : (At.exports = function (e, r) {
      e.super_ = r;
      var n = function () {};
      (n.prototype = r.prototype), (e.prototype = new n()), (e.prototype.constructor = e);
    });
var Ao = At.exports;
(function (t) {
  var e = /%[sdj%]/g;
  (t.format = function (c) {
    if (!U(c)) {
      for (var d = [], v = 0; v < arguments.length; v++) d.push(o(arguments[v]));
      return d.join(' ');
    }
    for (
      var v = 1,
        F = arguments,
        Z = F.length,
        R = String(c).replace(e, function (D) {
          if (D === '%%') return '%';
          if (v >= Z) return D;
          switch (D) {
            case '%s':
              return String(F[v++]);
            case '%d':
              return Number(F[v++]);
            case '%j':
              try {
                return JSON.stringify(F[v++]);
              } catch (q) {
                return '[Circular]';
              }
            default:
              return D;
          }
        }),
        M = F[v];
      v < Z;
      M = F[++v]
    )
      P(M) || !K(M) ? (R += ' ' + M) : (R += ' ' + o(M));
    return R;
  }),
    (t.deprecate = function (c, d) {
      if (j(Xr.process))
        return function () {
          return t.deprecate(c, d).apply(this, arguments);
        };
      if (process.noDeprecation === !0) return c;
      var v = !1;
      function F() {
        if (!v) {
          if (process.throwDeprecation) throw new Error(d);
          process.traceDeprecation ? console.trace(d) : console.error(d), (v = !0);
        }
        return c.apply(this, arguments);
      }
      return F;
    });
  var r = {},
    n;
  t.debuglog = function (c) {
    if ((j(n) && (n = {}.NODE_DEBUG || ''), (c = c.toUpperCase()), !r[c]))
      if (new RegExp('\\b' + c + '\\b', 'i').test(n)) {
        var d = process.pid;
        r[c] = function () {
          var v = t.format.apply(t, arguments);
          console.error('%s %d: %s', c, d, v);
        };
      } else r[c] = function () {};
    return r[c];
  };
  function o(c, d) {
    var v = { seen: [], stylize: l };
    return (
      arguments.length >= 3 && (v.depth = arguments[2]),
      arguments.length >= 4 && (v.colors = arguments[3]),
      b(d) ? (v.showHidden = d) : d && t._extend(v, d),
      j(v.showHidden) && (v.showHidden = !1),
      j(v.depth) && (v.depth = 2),
      j(v.colors) && (v.colors = !1),
      j(v.customInspect) && (v.customInspect = !0),
      v.colors && (v.stylize = a),
      i(v, c, v.depth)
    );
  }
  (t.inspect = o),
    (o.colors = {
      bold: [1, 22],
      italic: [3, 23],
      underline: [4, 24],
      inverse: [7, 27],
      white: [37, 39],
      grey: [90, 39],
      black: [30, 39],
      blue: [34, 39],
      cyan: [36, 39],
      green: [32, 39],
      magenta: [35, 39],
      red: [31, 39],
      yellow: [33, 39],
    }),
    (o.styles = {
      special: 'cyan',
      number: 'yellow',
      boolean: 'yellow',
      undefined: 'grey',
      null: 'bold',
      string: 'green',
      date: 'magenta',
      regexp: 'red',
    });
  function a(c, d) {
    var v = o.styles[d];
    return v ? '\x1B[' + o.colors[v][0] + 'm' + c + '\x1B[' + o.colors[v][1] + 'm' : c;
  }
  function l(c, d) {
    return c;
  }
  function u(c) {
    var d = {};
    return (
      c.forEach(function (v, F) {
        d[v] = !0;
      }),
      d
    );
  }
  function i(c, d, v) {
    if (
      c.customInspect &&
      d &&
      T(d.inspect) &&
      d.inspect !== t.inspect &&
      !(d.constructor && d.constructor.prototype === d)
    ) {
      var F = d.inspect(v, c);
      return U(F) || (F = i(c, F, v)), F;
    }
    var Z = s(c, d);
    if (Z) return Z;
    var R = Object.keys(d),
      M = u(R);
    if (
      (c.showHidden && (R = Object.getOwnPropertyNames(d)),
      te(d) && (R.indexOf('message') >= 0 || R.indexOf('description') >= 0))
    )
      return p(d);
    if (R.length === 0) {
      if (T(d)) {
        var D = d.name ? ': ' + d.name : '';
        return c.stylize('[Function' + D + ']', 'special');
      }
      if (ae(d)) return c.stylize(RegExp.prototype.toString.call(d), 'regexp');
      if (ee(d)) return c.stylize(Date.prototype.toString.call(d), 'date');
      if (te(d)) return p(d);
    }
    var q = '',
      ge = !1,
      We = ['{', '}'];
    if ((m(d) && ((ge = !0), (We = ['[', ']'])), T(d))) {
      var Lr = d.name ? ': ' + d.name : '';
      q = ' [Function' + Lr + ']';
    }
    if (
      (ae(d) && (q = ' ' + RegExp.prototype.toString.call(d)),
      ee(d) && (q = ' ' + Date.prototype.toUTCString.call(d)),
      te(d) && (q = ' ' + p(d)),
      R.length === 0 && (!ge || d.length == 0))
    )
      return We[0] + q + We[1];
    if (v < 0)
      return ae(d)
        ? c.stylize(RegExp.prototype.toString.call(d), 'regexp')
        : c.stylize('[Object]', 'special');
    c.seen.push(d);
    var ot;
    return (
      ge
        ? (ot = y(c, d, v, M, R))
        : (ot = R.map(function (Wr) {
            return f(c, d, v, M, Wr, ge);
          })),
      c.seen.pop(),
      g(ot, q, We)
    );
  }
  function s(c, d) {
    if (j(d)) return c.stylize('undefined', 'undefined');
    if (U(d)) {
      var v =
        "'" +
        JSON.stringify(d).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') +
        "'";
      return c.stylize(v, 'string');
    }
    if (x(d)) return c.stylize('' + d, 'number');
    if (b(d)) return c.stylize('' + d, 'boolean');
    if (P(d)) return c.stylize('null', 'null');
  }
  function p(c) {
    return '[' + Error.prototype.toString.call(c) + ']';
  }
  function y(c, d, v, F, Z) {
    for (var R = [], M = 0, D = d.length; M < D; ++M)
      C(d, String(M)) ? R.push(f(c, d, v, F, String(M), !0)) : R.push('');
    return (
      Z.forEach(function (q) {
        q.match(/^\d+$/) || R.push(f(c, d, v, F, q, !0));
      }),
      R
    );
  }
  function f(c, d, v, F, Z, R) {
    var M, D, q;
    if (
      ((q = Object.getOwnPropertyDescriptor(d, Z) || { value: d[Z] }),
      q.get
        ? q.set
          ? (D = c.stylize('[Getter/Setter]', 'special'))
          : (D = c.stylize('[Getter]', 'special'))
        : q.set && (D = c.stylize('[Setter]', 'special')),
      C(F, Z) || (M = '[' + Z + ']'),
      D ||
        (c.seen.indexOf(q.value) < 0
          ? (P(v) ? (D = i(c, q.value, null)) : (D = i(c, q.value, v - 1)),
            D.indexOf(`
`) > -1 &&
              (R
                ? (D = D.split(
                    `
`,
                  )
                    .map(function (ge) {
                      return '  ' + ge;
                    })
                    .join(
                      `
`,
                    )
                    .substr(2))
                : (D =
                    `
` +
                    D.split(
                      `
`,
                    ).map(function (ge) {
                      return '   ' + ge;
                    }).join(`
`))))
          : (D = c.stylize('[Circular]', 'special'))),
      j(M))
    ) {
      if (R && Z.match(/^\d+$/)) return D;
      (M = JSON.stringify('' + Z)),
        M.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
          ? ((M = M.substr(1, M.length - 2)), (M = c.stylize(M, 'name')))
          : ((M = M.replace(/'/g, "\\'")
              .replace(/\\"/g, '"')
              .replace(/(^"|"$)/g, "'")),
            (M = c.stylize(M, 'string')));
    }
    return M + ': ' + D;
  }
  function g(c, d, v) {
    var F = c.reduce(function (Z, R) {
      return (
        R.indexOf(`
`) >= 0,
        Z + R.replace(/\u001b\[\d\d?m/g, '').length + 1
      );
    }, 0);
    return F > 60
      ? v[0] +
          (d === ''
            ? ''
            : d +
              `
 `) +
          ' ' +
          c.join(`,
  `) +
          ' ' +
          v[1]
      : v[0] + d + ' ' + c.join(', ') + ' ' + v[1];
  }
  function m(c) {
    return Array.isArray(c);
  }
  t.isArray = m;
  function b(c) {
    return typeof c == 'boolean';
  }
  t.isBoolean = b;
  function P(c) {
    return c === null;
  }
  t.isNull = P;
  function w(c) {
    return c == null;
  }
  t.isNullOrUndefined = w;
  function x(c) {
    return typeof c == 'number';
  }
  t.isNumber = x;
  function U(c) {
    return typeof c == 'string';
  }
  t.isString = U;
  function le(c) {
    return typeof c == 'symbol';
  }
  t.isSymbol = le;
  function j(c) {
    return c === void 0;
  }
  t.isUndefined = j;
  function ae(c) {
    return K(c) && I(c) === '[object RegExp]';
  }
  t.isRegExp = ae;
  function K(c) {
    return typeof c == 'object' && c !== null;
  }
  t.isObject = K;
  function ee(c) {
    return K(c) && I(c) === '[object Date]';
  }
  t.isDate = ee;
  function te(c) {
    return K(c) && (I(c) === '[object Error]' || c instanceof Error);
  }
  t.isError = te;
  function T(c) {
    return typeof c == 'function';
  }
  t.isFunction = T;
  function N(c) {
    return (
      c === null ||
      typeof c == 'boolean' ||
      typeof c == 'number' ||
      typeof c == 'string' ||
      typeof c == 'symbol' ||
      typeof c == 'undefined'
    );
  }
  (t.isPrimitive = N), (t.isBuffer = wo);
  function I(c) {
    return Object.prototype.toString.call(c);
  }
  function Q(c) {
    return c < 10 ? '0' + c.toString(10) : c.toString(10);
  }
  var se = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  function he() {
    var c = new Date(),
      d = [Q(c.getHours()), Q(c.getMinutes()), Q(c.getSeconds())].join(':');
    return [c.getDate(), se[c.getMonth()], d].join(' ');
  }
  (t.log = function () {
    console.log('%s - %s', he(), t.format.apply(t, arguments));
  }),
    (t.inherits = Ao),
    (t._extend = function (c, d) {
      if (!d || !K(d)) return c;
      for (var v = Object.keys(d), F = v.length; F--; ) c[v[F]] = d[v[F]];
      return c;
    });
  function C(c, d) {
    return Object.prototype.hasOwnProperty.call(c, d);
  }
})(Fr);
var $o = process.platform === 'win32',
  oe = Fr;
function rt(t, e) {
  for (var r = [], n = 0; n < t.length; n++) {
    var o = t[n];
    !o ||
      o === '.' ||
      (o === '..'
        ? r.length && r[r.length - 1] !== '..'
          ? r.pop()
          : e && r.push('..')
        : r.push(o));
  }
  return r;
}
function Be(t) {
  for (var e = t.length - 1, r = 0; r <= e && !t[r]; r++);
  for (var n = e; n >= 0 && !t[n]; n--);
  return r === 0 && n === e ? t : r > n ? [] : t.slice(r, n + 1);
}
var kr = /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/,
  Po = /^([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/,
  B = {};
function nt(t) {
  var e = kr.exec(t),
    r = (e[1] || '') + (e[2] || ''),
    n = e[3] || '',
    o = Po.exec(n),
    a = o[1],
    l = o[2],
    u = o[3];
  return [r, a, l, u];
}
function Dt(t) {
  var e = kr.exec(t),
    r = e[1] || '',
    n = !!r && r[1] !== ':';
  return { device: r, isUnc: n, isAbsolute: n || !!e[2], tail: e[3] };
}
function Nr(t) {
  return '\\\\' + t.replace(/^[\\\/]+/, '').replace(/[\\\/]+/g, '\\');
}
B.resolve = function () {
  for (var t = '', e = '', r = !1, n = arguments.length - 1; n >= -1; n--) {
    var o;
    if (
      (n >= 0
        ? (o = arguments[n])
        : t
        ? ((o = process.env['=' + t]),
          (!o || o.substr(0, 3).toLowerCase() !== t.toLowerCase() + '\\') && (o = t + '\\'))
        : (o = process.cwd()),
      oe.isString(o))
    ) {
      if (!o) continue;
    } else throw new TypeError('Arguments to path.resolve must be strings');
    var a = Dt(o),
      l = a.device,
      u = a.isUnc,
      i = a.isAbsolute,
      s = a.tail;
    if (
      !(l && t && l.toLowerCase() !== t.toLowerCase()) &&
      (t || (t = l), r || ((e = s + '\\' + e), (r = i)), t && r)
    )
      break;
  }
  return (
    u && (t = Nr(t)), (e = rt(e.split(/[\\\/]+/), !r).join('\\')), t + (r ? '\\' : '') + e || '.'
  );
};
B.normalize = function (t) {
  var e = Dt(t),
    r = e.device,
    n = e.isUnc,
    o = e.isAbsolute,
    a = e.tail,
    l = /[\\\/]$/.test(a);
  return (
    (a = rt(a.split(/[\\\/]+/), !o).join('\\')),
    !a && !o && (a = '.'),
    a && l && (a += '\\'),
    n && (r = Nr(r)),
    r + (o ? '\\' : '') + a
  );
};
B.isAbsolute = function (t) {
  return Dt(t).isAbsolute;
};
B.join = function () {
  for (var t = [], e = 0; e < arguments.length; e++) {
    var r = arguments[e];
    if (!oe.isString(r)) throw new TypeError('Arguments to path.join must be strings');
    r && t.push(r);
  }
  var n = t.join('\\');
  return /^[\\\/]{2}[^\\\/]/.test(t[0]) || (n = n.replace(/^[\\\/]{2,}/, '\\')), B.normalize(n);
};
B.relative = function (t, e) {
  (t = B.resolve(t)), (e = B.resolve(e));
  for (
    var r = t.toLowerCase(),
      n = e.toLowerCase(),
      o = Be(e.split('\\')),
      a = Be(r.split('\\')),
      l = Be(n.split('\\')),
      u = Math.min(a.length, l.length),
      i = u,
      s = 0;
    s < u;
    s++
  )
    if (a[s] !== l[s]) {
      i = s;
      break;
    }
  if (i == 0) return e;
  for (var p = [], s = i; s < a.length; s++) p.push('..');
  return (p = p.concat(o.slice(i))), p.join('\\');
};
B._makeLong = function (t) {
  if (!oe.isString(t)) return t;
  if (!t) return '';
  var e = B.resolve(t);
  return /^[a-zA-Z]\:\\/.test(e)
    ? '\\\\?\\' + e
    : /^\\\\[^?.]/.test(e)
    ? '\\\\?\\UNC\\' + e.substring(2)
    : t;
};
B.dirname = function (t) {
  var e = nt(t),
    r = e[0],
    n = e[1];
  return !r && !n ? '.' : (n && (n = n.substr(0, n.length - 1)), r + n);
};
B.basename = function (t, e) {
  var r = nt(t)[2];
  return e && r.substr(-1 * e.length) === e && (r = r.substr(0, r.length - e.length)), r;
};
B.extname = function (t) {
  return nt(t)[3];
};
B.format = function (t) {
  if (!oe.isObject(t))
    throw new TypeError("Parameter 'pathObject' must be an object, not " + typeof t);
  var e = t.root || '';
  if (!oe.isString(e))
    throw new TypeError("'pathObject.root' must be a string or undefined, not " + typeof t.root);
  var r = t.dir,
    n = t.base || '';
  return r ? (r[r.length - 1] === B.sep ? r + n : r + B.sep + n) : n;
};
B.parse = function (t) {
  if (!oe.isString(t))
    throw new TypeError("Parameter 'pathString' must be a string, not " + typeof t);
  var e = nt(t);
  if (!e || e.length !== 4) throw new TypeError("Invalid path '" + t + "'");
  return {
    root: e[0],
    dir: e[0] + e[1].slice(0, -1),
    base: e[2],
    ext: e[3],
    name: e[2].slice(0, e[2].length - e[3].length),
  };
};
B.sep = '\\';
B.delimiter = ';';
var Oo = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,
  z = {};
function at(t) {
  return Oo.exec(t).slice(1);
}
z.resolve = function () {
  for (var t = '', e = !1, r = arguments.length - 1; r >= -1 && !e; r--) {
    var n = r >= 0 ? arguments[r] : process.cwd();
    if (oe.isString(n)) {
      if (!n) continue;
    } else throw new TypeError('Arguments to path.resolve must be strings');
    (t = n + '/' + t), (e = n[0] === '/');
  }
  return (t = rt(t.split('/'), !e).join('/')), (e ? '/' : '') + t || '.';
};
z.normalize = function (t) {
  var e = z.isAbsolute(t),
    r = t && t[t.length - 1] === '/';
  return (
    (t = rt(t.split('/'), !e).join('/')),
    !t && !e && (t = '.'),
    t && r && (t += '/'),
    (e ? '/' : '') + t
  );
};
z.isAbsolute = function (t) {
  return t.charAt(0) === '/';
};
z.join = function () {
  for (var t = '', e = 0; e < arguments.length; e++) {
    var r = arguments[e];
    if (!oe.isString(r)) throw new TypeError('Arguments to path.join must be strings');
    r && (t ? (t += '/' + r) : (t += r));
  }
  return z.normalize(t);
};
z.relative = function (t, e) {
  (t = z.resolve(t).substr(1)), (e = z.resolve(e).substr(1));
  for (
    var r = Be(t.split('/')), n = Be(e.split('/')), o = Math.min(r.length, n.length), a = o, l = 0;
    l < o;
    l++
  )
    if (r[l] !== n[l]) {
      a = l;
      break;
    }
  for (var u = [], l = a; l < r.length; l++) u.push('..');
  return (u = u.concat(n.slice(a))), u.join('/');
};
z._makeLong = function (t) {
  return t;
};
z.dirname = function (t) {
  var e = at(t),
    r = e[0],
    n = e[1];
  return !r && !n ? '.' : (n && (n = n.substr(0, n.length - 1)), r + n);
};
z.basename = function (t, e) {
  var r = at(t)[2];
  return e && r.substr(-1 * e.length) === e && (r = r.substr(0, r.length - e.length)), r;
};
z.extname = function (t) {
  return at(t)[3];
};
z.format = function (t) {
  if (!oe.isObject(t))
    throw new TypeError("Parameter 'pathObject' must be an object, not " + typeof t);
  var e = t.root || '';
  if (!oe.isString(e))
    throw new TypeError("'pathObject.root' must be a string or undefined, not " + typeof t.root);
  var r = t.dir ? t.dir + z.sep : '',
    n = t.base || '';
  return r + n;
};
z.parse = function (t) {
  if (!oe.isString(t))
    throw new TypeError("Parameter 'pathString' must be a string, not " + typeof t);
  var e = at(t);
  if (!e || e.length !== 4) throw new TypeError("Invalid path '" + t + "'");
  return (
    (e[1] = e[1] || ''),
    (e[2] = e[2] || ''),
    (e[3] = e[3] || ''),
    {
      root: e[0],
      dir: e[0] + e[1].slice(0, -1),
      base: e[2],
      ext: e[3],
      name: e[2].slice(0, e[2].length - e[3].length),
    }
  );
};
z.sep = '/';
z.delimiter = ':';
$o ? (Ue.exports = B) : (Ue.exports = z);
Ue.exports.posix = z;
Ue.exports.win32 = B;
var Eo = Ue.exports;
const Co = fr(Eo),
  xo = { key: 0 },
  Mo = J({
    __name: 'Item',
    props: { icon: { default: 'hello' }, title: { default: '' }, className: { default: '' } },
    setup(t) {
      const e = t;
      return (r, n) => (
        _(),
        E(
          ne,
          null,
          [
            S(ye, { 'class-name': e.className, name: e.icon }, null, 8, ['class-name', 'name']),
            e.title ? (_(), E('span', xo, L(h(Je)(e.title)), 1)) : re('', !0),
          ],
          64,
        )
      );
    },
  });
const $t = me(Mo, [['__scopeId', 'data-v-88de4eab']]),
  Rr = J({
    __name: 'Link',
    props: { to: { type: String, required: !0 } },
    setup(t) {
      const e = t,
        r = Se(() => mt(e.to)),
        n = Se(() => (r.value ? 'a' : 'router-link')),
        o = (a) => (r.value ? { href: a, target: '_blank', rel: 'noopener' } : { to: a });
      return (a, l) => (
        _(),
        V(cr(n.value), tn(rn(o(t.to))), { default: O(() => [en(a.$slots, 'default')]), _: 3 }, 16)
      );
    },
  }),
  Io = { key: 0 },
  To = J({
    __name: 'SidebarItem',
    props: {
      item: { type: Object, default: () => {} },
      isNest: { type: Boolean, default: !1 },
      basePath: { type: String, default: '' },
    },
    setup(t) {
      const e = t,
        r = W({}),
        n = (a = [], l) => {
          const u = a.filter((i) => {
            var s;
            return (s = i.meta) != null && s.hideSidebar ? !1 : ((r.value = i), !0);
          });
          return u.length === 1
            ? !0
            : u.length === 0
            ? ((r.value = zt(Ut({}, l), { path: '', noShowingChildren: !0 })), !0)
            : !1;
        },
        o = (a) => (mt(a) ? a : mt(e.basePath) ? e.basePath : Co.resolve(e.basePath, a));
      return (a, l) => {
        var p, y;
        const u = k('el-menu-item'),
          i = k('sidebar-item', !0),
          s = k('el-sub-menu');
        return (p = t.item.meta) != null && p.hideSidebar
          ? re('', !0)
          : (_(),
            E('div', Io, [
              n(t.item.children, t.item) &&
              (!r.value.children || r.value.noShowingChildren) &&
              !((y = t.item.meta) != null && y.alwaysShow)
                ? (_(),
                  E(
                    ne,
                    { key: 0 },
                    [
                      r.value.meta
                        ? (_(),
                          V(
                            Rr,
                            { key: 0, to: o(r.value.path) },
                            {
                              default: O(() => [
                                S(
                                  u,
                                  {
                                    index: o(r.value.path),
                                    class: Te({ 'submenu-title-noDropdown': !t.isNest }),
                                  },
                                  {
                                    default: O(() => [
                                      S(
                                        $t,
                                        {
                                          'class-name': 'menu-item-svg',
                                          icon:
                                            r.value.meta.icon || (t.item.meta && t.item.meta.icon),
                                          title:
                                            r.value.meta.title ||
                                            (t.item.meta && t.item.meta.title),
                                        },
                                        null,
                                        8,
                                        ['icon', 'title'],
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                  8,
                                  ['index', 'class'],
                                ),
                              ]),
                              _: 1,
                            },
                            8,
                            ['to'],
                          ))
                        : re('', !0),
                    ],
                    64,
                  ))
                : (_(),
                  V(
                    s,
                    { key: 1, index: o(t.item.path), teleported: '' },
                    {
                      title: O(() => [
                        t.item.meta
                          ? (_(),
                            V(
                              $t,
                              {
                                key: 0,
                                'class-name': 'sub-menu-svg',
                                icon: t.item.meta && t.item.meta.icon,
                                title: t.item.meta.title,
                              },
                              null,
                              8,
                              ['icon', 'title'],
                            ))
                          : re('', !0),
                      ]),
                      default: O(() => [
                        (_(!0),
                        E(
                          ne,
                          null,
                          pe(
                            t.item.children,
                            (f) => (
                              _(),
                              V(
                                i,
                                {
                                  key: f.path,
                                  'is-nest': !0,
                                  item: f,
                                  'base-path': o(f.path),
                                  class: 'nest-menu',
                                },
                                null,
                                8,
                                ['item', 'base-path'],
                              )
                            ),
                          ),
                          128,
                        )),
                      ]),
                      _: 1,
                    },
                    8,
                    ['index'],
                  )),
            ]));
      };
    },
  }),
  Dr = J({
    __name: 'index',
    props: { mode: { type: String, default: 'vertical' } },
    setup(t) {
      const e = fe(),
        r = ze(),
        { appConfig: n } = ie();
      let o = W(e.wholeMenus);
      const a = Se(() =>
        n.value.sidebarMode === 'blend' && !n.value.drawerSidebar ? o.value : e.wholeMenus,
      );
      function l(i) {
        var y;
        const s = Pt(i, e.wholeMenus),
          p = Ot(s[0], e.wholeMenus);
        p &&
          (p.children && !((y = p.children[0].meta) != null && y.hideSidebar)
            ? (o.value = p.children)
            : (o.value = [p]));
      }
      l(r.path),
        ve(
          () => [r.path, n.value.sidebarMode],
          () => {
            n.value.sidebarMode === 'blend' && l(r.path);
          },
        );
      const u = Se(() => {
        const { meta: i, path: s } = r;
        return i.activeMenu ? i.activeMenu : s;
      });
      return (i, s) => {
        const p = k('el-menu'),
          y = k('el-scrollbar');
        return (
          _(),
          V(
            y,
            { 'wrap-class': 'scrollbar-wrapper' },
            {
              default: O(() => [
                S(
                  p,
                  {
                    'default-active': u.value,
                    'unique-opened': !0,
                    collapse: h(n).sidebarMode === 'horizontal' ? !1 : h(n).collapseMenu,
                    mode: t.mode,
                  },
                  {
                    default: O(() => [
                      (_(!0),
                      E(
                        ne,
                        null,
                        pe(
                          a.value,
                          (f) => (
                            _(),
                            V(
                              To,
                              { key: f.path, item: f, 'is-nest': !1, 'base-path': f.path },
                              null,
                              8,
                              ['item', 'base-path'],
                            )
                          ),
                        ),
                        128,
                      )),
                    ]),
                    _: 1,
                  },
                  8,
                  ['default-active', 'collapse', 'mode'],
                ),
              ]),
              _: 1,
            },
          )
        );
      };
    },
  }),
  Fo = J({
    __name: 'MinSidebar',
    setup(t) {
      const e = ze(),
        r = (o) => {
          var l;
          let a = o.path;
          return (
            o.children &&
              o.children.length &&
              !((l = o.children[0].meta) != null && l.hideSidebar) &&
              (a = o.children[0].path),
            a
          );
        },
        n = Se(() => {
          var i;
          const { path: o } = e,
            a = fe().wholeMenus,
            l = Pt(o, a)[0],
            u = Ot(l, a);
          return u != null &&
            u.children &&
            u.children.length &&
            !((i = u.children[0].meta) != null && i.hideSidebar)
            ? u.children[0].path
            : o;
        });
      return (o, a) => {
        const l = k('el-menu-item'),
          u = k('el-menu');
        return (
          _(),
          V(
            u,
            {
              ref: 'menu',
              'default-active': n.value,
              class: 'horizontal-header-menu',
              mode: 'horizontal',
            },
            {
              default: O(() => [
                (_(!0),
                E(
                  ne,
                  null,
                  pe(
                    h(fe)().wholeMenus,
                    (i) => (
                      _(),
                      V(
                        Rr,
                        { key: i.path, to: r(i) },
                        {
                          default: O(() => [
                            S(
                              l,
                              { index: r(i) },
                              {
                                default: O(() => {
                                  var s;
                                  return [
                                    S(
                                      $t,
                                      {
                                        'class-name': 'menu-item-svg',
                                        icon: i.meta && i.meta.icon,
                                        title: (s = i.meta) == null ? void 0 : s.title,
                                      },
                                      null,
                                      8,
                                      ['icon', 'title'],
                                    ),
                                  ];
                                }),
                                _: 2,
                              },
                              1032,
                              ['index'],
                            ),
                          ]),
                          _: 2,
                        },
                        1032,
                        ['to'],
                      )
                    ),
                  ),
                  128,
                )),
              ]),
              _: 1,
            },
            8,
            ['default-active'],
          )
        );
      };
    },
  }),
  Vr = (t) => (Et('data-v-9ed74ed9'), (t = t()), Ct(), t),
  ko = { class: 'color-list' },
  No = ['onClick'],
  Ro = { class: 'options' },
  Do = { class: 'options' },
  Vo = Vr(() => A('span', null, '灰色模式', -1)),
  Bo = { class: 'options' },
  Uo = Vr(() => A('span', null, '色弱模式', -1)),
  zo = J({
    __name: 'index',
    setup(t) {
      const { appConfig: e, setAppConfigMode: r } = ie(),
        { primaryColor: n, greyMode: o, colorWeaknessMode: a } = e.value,
        l = W(n || '#409eff'),
        u = ['#722ed1', '#eb2f96', '#52c41a', '#13c2c2', '#fadb14', '#fa541c', '#f5222d'];
      ve([l], () => {
        r({ primaryColor: l.value }), nn(l.value, e.value.themeMode);
      });
      const i = W(o || !1),
        s = W(a || !1),
        p = (y, f) => {
          an(f, y);
          const g = {};
          f === 'html-grey' ? (g.greyMode = y) : (g.colorWeaknessMode = y), r(g);
        };
      return (y, f) => {
        const g = k('el-color-picker'),
          m = k('el-switch');
        return (
          _(),
          E('div', null, [
            A('div', ko, [
              (_(),
              E(
                ne,
                null,
                pe(u, (b) =>
                  A(
                    'div',
                    {
                      key: b,
                      class: 'cursor color-list-item',
                      style: yr({ backgroundColor: b }),
                      onClick: () => (l.value = b),
                    },
                    [
                      b === l.value
                        ? (_(), V(ye, { key: 0, class: 'icon', name: 'iEL-select' }))
                        : re('', !0),
                    ],
                    12,
                    No,
                  ),
                ),
                64,
              )),
            ]),
            A('div', Ro, [
              A('span', null, L(y.$t('layout.customTheme')), 1),
              S(
                g,
                {
                  modelValue: l.value,
                  'onUpdate:modelValue': f[0] || (f[0] = (b) => (l.value = b)),
                },
                null,
                8,
                ['modelValue'],
              ),
            ]),
            A('div', Do, [
              Vo,
              S(
                m,
                {
                  modelValue: i.value,
                  'onUpdate:modelValue': f[1] || (f[1] = (b) => (i.value = b)),
                  onChange: f[2] || (f[2] = (b) => p(!!b, 'html-grey')),
                },
                null,
                8,
                ['modelValue'],
              ),
            ]),
            A('div', Bo, [
              Uo,
              S(
                m,
                {
                  modelValue: s.value,
                  'onUpdate:modelValue': f[3] || (f[3] = (b) => (s.value = b)),
                  onChange: f[4] || (f[4] = (b) => p(!!b, 'html-weakness')),
                },
                null,
                8,
                ['modelValue'],
              ),
            ]),
          ])
        );
      };
    },
  });
const Lo = me(zo, [['__scopeId', 'data-v-9ed74ed9']]),
  Wo = { class: 'options' },
  jo = { class: 'options' },
  qo = { class: 'options' },
  Go = { class: 'options' },
  Ho = { class: 'options' },
  Qo = { class: 'options' },
  Jo = { class: 'options' },
  Ko = J({
    __name: 'index',
    setup(t) {
      const { appConfig: e, setAppConfigMode: r } = ie(),
        { persistent: n } = fe(),
        o = W(e.value.tabPersistent),
        a = (u) => {
          u ? n() : vr.removeStorage('multiTabsList'), r({ tabPersistent: !!u });
        },
        l = () => {
          r({});
        };
      return (u, i) => {
        const s = k('el-switch'),
          p = k('el-option'),
          y = k('el-select');
        return (
          _(),
          E('div', null, [
            A('div', Wo, [
              A('span', null, L(u.$t('layout.hideSidebar')), 1),
              S(
                s,
                {
                  modelValue: h(e).hideSidebar,
                  'onUpdate:modelValue': i[0] || (i[0] = (f) => (h(e).hideSidebar = f)),
                  onChange: l,
                },
                null,
                8,
                ['modelValue'],
              ),
            ]),
            A('div', jo, [
              A('span', null, L(u.$t('layout.hideNavBart')), 1),
              S(
                s,
                {
                  modelValue: h(e).hideNavbart,
                  'onUpdate:modelValue': i[1] || (i[1] = (f) => (h(e).hideNavbart = f)),
                  onChange: l,
                },
                null,
                8,
                ['modelValue'],
              ),
            ]),
            A('div', qo, [
              A('span', null, L(u.$t('layout.hideTabs')), 1),
              S(
                s,
                {
                  modelValue: h(e).hideTabs,
                  'onUpdate:modelValue': i[2] || (i[2] = (f) => (h(e).hideTabs = f)),
                  onChange: l,
                },
                null,
                8,
                ['modelValue'],
              ),
            ]),
            A('div', Go, [
              A('span', null, L(u.$t('layout.hideTabsConfig')), 1),
              S(
                s,
                {
                  modelValue: h(e).hideTabsConfig,
                  'onUpdate:modelValue': i[3] || (i[3] = (f) => (h(e).hideTabsConfig = f)),
                  onChange: l,
                },
                null,
                8,
                ['modelValue'],
              ),
            ]),
            A('div', Ho, [
              A('span', null, L(u.$t('layout.closeTabDrag')), 1),
              S(
                s,
                {
                  modelValue: h(e).closeTabDrag,
                  'onUpdate:modelValue': i[4] || (i[4] = (f) => (h(e).closeTabDrag = f)),
                  onChange: l,
                },
                null,
                8,
                ['modelValue'],
              ),
            ]),
            A('div', Qo, [
              A('span', null, L(u.$t('layout.labelPersistent')), 1),
              S(
                s,
                {
                  modelValue: o.value,
                  'onUpdate:modelValue': i[5] || (i[5] = (f) => (o.value = f)),
                  onChange: a,
                },
                null,
                8,
                ['modelValue'],
              ),
            ]),
            A('div', Jo, [
              A('span', null, L(u.$t('layout.sidebarFold')), 1),
              S(
                y,
                {
                  modelValue: h(e).sidebarFold,
                  'onUpdate:modelValue': i[6] || (i[6] = (f) => (h(e).sidebarFold = f)),
                  class: 'select',
                  placeholder: u.$t('layout.sidebarFold'),
                  size: 'small',
                  onChange: l,
                },
                {
                  default: O(() => [
                    (_(),
                    E(
                      ne,
                      null,
                      pe(['none', 'top', 'bottom'], (f) =>
                        S(
                          p,
                          { key: f, label: u.$t(`layout.sidebarFoldList.${f}`), value: f },
                          null,
                          8,
                          ['label', 'value'],
                        ),
                      ),
                      64,
                    )),
                  ]),
                  _: 1,
                },
                8,
                ['modelValue', 'placeholder'],
              ),
            ]),
          ])
        );
      };
    },
  });
const Zo = me(Ko, [['__scopeId', 'data-v-9be18640']]),
  Br = (t) => (Et('data-v-1b055e57'), (t = t()), Ct(), t),
  Yo = { class: 'setting' },
  Xo = { class: 'drawer-content' },
  ei = { class: 'layout_seting' },
  ti = { class: 'sidebar_seting' },
  ri = ['onClick'],
  ni = Br(() => A('div', null, null, -1)),
  ai = Br(() => A('div', null, null, -1)),
  oi = [ni, ai],
  ii = J({
    __name: 'index',
    props: { modelValue: { type: Boolean, default: !1 } },
    emits: ['update:modelValue'],
    setup(t, { emit: e }) {
      const r = t,
        n = W(r.modelValue);
      ve(
        () => r.modelValue,
        (s) => {
          n.value = s;
        },
      );
      const { appConfig: o, setAppConfigMode: a } = ie(),
        l = [
          { label: '左侧菜单模式', value: 'vertical' },
          { label: '顶部菜单模式', value: 'horizontal' },
          { label: '混合菜单模式', value: 'blend' },
        ],
        u = (s) => {
          a({ sidebarMode: s });
        },
        i = () => {
          vr.clearStorage(), window.location.reload();
        };
      return (s, p) => {
        const y = k('el-divider'),
          f = k('el-tooltip'),
          g = k('el-button'),
          m = k('el-drawer');
        return (
          _(),
          E('div', Yo, [
            S(
              m,
              {
                modelValue: n.value,
                'onUpdate:modelValue': p[0] || (p[0] = (b) => (n.value = b)),
                title: s.$t('layout.setup'),
                size: 320,
                onClose: p[1] || (p[1] = (b) => e('update:modelValue', !1)),
              },
              {
                default: O(() => [
                  A('div', Xo, [
                    S(
                      y,
                      { 'content-position': 'center' },
                      { default: O(() => [Ne(L(s.$t('layout.layoutSettings')), 1)]), _: 1 },
                    ),
                    A('div', ei, [
                      A('div', ti, [
                        (_(),
                        E(
                          ne,
                          null,
                          pe(l, (b) =>
                            S(
                              f,
                              { key: b.value, content: b.label, placement: 'bottom' },
                              {
                                default: O(() => [
                                  A(
                                    'div',
                                    {
                                      class: Te([
                                        'sidebar_mode cursor',
                                        { 'sidebar_mode-select': h(o).sidebarMode === b.value },
                                      ]),
                                      onClick: (P) => u(b.value),
                                    },
                                    oi,
                                    10,
                                    ri,
                                  ),
                                ]),
                                _: 2,
                              },
                              1032,
                              ['content'],
                            ),
                          ),
                          64,
                        )),
                      ]),
                    ]),
                    S(
                      y,
                      { 'content-position': 'center' },
                      { default: O(() => [Ne(L(s.$t('layout.themeSettings')), 1)]), _: 1 },
                    ),
                    A('div', null, [S(Lo)]),
                    S(
                      y,
                      { 'content-position': 'center' },
                      { default: O(() => [Ne(L(s.$t('layout.pageSettings')), 1)]), _: 1 },
                    ),
                    A('div', null, [S(Zo)]),
                    S(
                      g,
                      { class: 'clear_storage', type: 'danger', onClick: i },
                      { default: O(() => [Ne(L(s.$t('layout.clearStorage')), 1)]), _: 1 },
                    ),
                  ]),
                ]),
                _: 1,
              },
              8,
              ['modelValue', 'title'],
            ),
          ])
        );
      };
    },
  });
const li = me(ii, [['__scopeId', 'data-v-1b055e57']]),
  Ur = J({
    __name: 'index',
    setup(t) {
      const { appConfig: e, setAppConfigMode: r } = ie(),
        n = () => {
          r({ collapseMenu: !e.value.collapseMenu });
        };
      return (o, a) => (
        _(),
        V(
          ye,
          {
            class: Te(['breadcrumb-fold cursor', { 'breadcrumb-unfold': h(e).collapseMenu }]),
            name: 'fold',
            color: '#e3e3e3',
            onClick: n,
          },
          null,
          8,
          ['class'],
        )
      );
    },
  });
const si = { class: 'breadcrumb' },
  ui = { key: 0, class: 'no-redirect' },
  ci = ['onClick'],
  fi = J({
    __name: 'index',
    setup(t) {
      var p;
      const { multiTabs: e } = fe(),
        r = W([]),
        n = Qe(),
        o = ze(),
        a =
          ((p = Qe().options.routes.find((y) => y.path === '/')) == null ? void 0 : p.children) ||
          [],
        l = () => {
          const y = [];
          Pt(n.currentRoute.value.matched[1].path || '', a || []).forEach((m) => {
            m !== '/' && y.push(Ot(m, a || []));
          });
          const g = e.find((m) => {
            let b = {};
            return (
              m.query && (b = JSON.parse(JSON.stringify(m.query))),
              y.find((P) => P.path === m.path)
                ? !1
                : o.name === m.name && ln(o.query, b) && o.path === m.path
            );
          });
          g && y.push(g),
            (r.value = y.filter((m) => m && m.meta && m.meta.title && !m.meta.breadcrumb));
        },
        u = (y) => y(o.params),
        i = (y) => {
          const { redirect: f, path: g } = y;
          if (f) {
            n.push(f);
            return;
          }
          n.push(u(g));
        };
      pr(l), ve(o, l);
      const { appConfig: s } = ie();
      return (y, f) => {
        const g = k('el-breadcrumb-item'),
          m = k('el-breadcrumb');
        return (
          _(),
          E('div', si, [
            h(s).sidebarFold === 'top' ? (_(), V(Ur, { key: 0, class: 'app-fold' })) : re('', !0),
            S(
              m,
              { class: 'app-breadcrumb', separator: '/' },
              {
                default: O(() => [
                  S(
                    on,
                    { name: 'breadcrumb' },
                    {
                      default: O(() => [
                        (_(!0),
                        E(
                          ne,
                          null,
                          pe(
                            r.value,
                            (b, P) => (
                              _(),
                              V(
                                g,
                                { key: b.path },
                                {
                                  default: O(() => {
                                    var w, x;
                                    return [
                                      b.redirect === 'noRedirect' || P == r.value.length - 1
                                        ? (_(),
                                          E(
                                            'span',
                                            ui,
                                            L(h(Je)((w = b.meta) == null ? void 0 : w.title)),
                                            1,
                                          ))
                                        : (_(),
                                          E(
                                            'a',
                                            {
                                              key: 1,
                                              class: 'redirect',
                                              onClick: dr((U) => i(b), ['prevent']),
                                            },
                                            L(h(Je)((x = b.meta) == null ? void 0 : x.title)),
                                            9,
                                            ci,
                                          )),
                                    ];
                                  }),
                                  _: 2,
                                },
                                1024,
                              )
                            ),
                          ),
                          128,
                        )),
                      ]),
                      _: 1,
                    },
                  ),
                ]),
                _: 1,
              },
            ),
          ])
        );
      };
    },
  });
const pi = me(fi, [['__scopeId', 'data-v-d08f133c']]),
  di = (t) => (Et('data-v-6e9872ff'), (t = t()), Ct(), t),
  yi = di(() =>
    A(
      'div',
      { class: 'logo' },
      [A('img', { class: 'logo_img', src: cn, mode: 'scaleToFill' })],
      -1,
    ),
  ),
  vi = { class: 'name' },
  mi = J({
    __name: 'index',
    setup(t) {
      var n;
      const { appConfig: e } = ie(),
        r = (n = sn()) == null ? void 0 : n.appContext.config.globalProperties.$config;
      return (o, a) => (
        _(),
        E(
          'div',
          {
            class: Te([
              'app-logo',
              { 'app-logo-hide': h(e).collapseMenu && h(e).sidebarMode !== 'horizontal' },
            ]),
          },
          [yi, A('span', vi, L(h(r).title), 1)],
          2,
        )
      );
    },
  });
const zr = me(mi, [['__scopeId', 'data-v-6e9872ff']]),
  hi = { class: 'navbar' },
  gi = { class: 'navbar-content' },
  bi = { class: 'navbar-left' },
  _i = { class: 'navbar-center' },
  Si = { class: 'navbar-right' },
  wi = { class: 'setting-icon cursor' },
  Ai = J({
    __name: 'index',
    setup(t) {
      const e = W(!1),
        { appConfig: r } = ie(),
        n = W('full_screen'),
        o = () => {
          document.fullscreenElement
            ? (document.exitFullscreen(), (n.value = 'full_screen'))
            : ((n.value = 'full_screen_close'), document.documentElement.requestFullscreen());
        };
      return (a, l) => {
        const u = k('el-tooltip');
        return (
          _(),
          E('div', hi, [
            Ke(
              A(
                'div',
                gi,
                [
                  A('div', bi, [
                    h(r).sidebarMode === 'vertical' || h(r).drawerSidebar
                      ? (_(), V(pi, { key: 0 }))
                      : re('', !0),
                    h(r).sidebarMode === 'horizontal' && !h(r).drawerSidebar
                      ? (_(), V(zr, { key: 1 }))
                      : re('', !0),
                  ]),
                  A('div', _i, [
                    h(r).drawerSidebar
                      ? re('', !0)
                      : (_(),
                        E(
                          ne,
                          { key: 0 },
                          [
                            h(r).sidebarMode === 'horizontal'
                              ? (_(),
                                V(Dr, { key: 0, class: 'sidebar-horizontal', mode: 'horizontal' }))
                              : re('', !0),
                            h(r).sidebarMode === 'blend'
                              ? (_(),
                                V(Fo, { key: 1, class: 'sidebar-horizontal', mode: 'horizontal' }))
                              : re('', !0),
                          ],
                          64,
                        )),
                  ]),
                  A('div', Si, [
                    S(
                      u,
                      { content: a.$t('layout.navbar.fullScreen'), placement: 'bottom' },
                      {
                        default: O(() => [
                          S(ye, { class: 'cursor', name: n.value, onClick: o }, null, 8, ['name']),
                        ]),
                        _: 1,
                      },
                      8,
                      ['content'],
                    ),
                    S(h(fn), { class: 'icon' }),
                    S(h(pn)),
                    S(h(dn)),
                    S(ye, {
                      class: 'cursor',
                      name: 'iEL-setting',
                      onClick: l[0] || (l[0] = (i) => (e.value = !0)),
                    }),
                  ]),
                ],
                512,
              ),
              [[Ze, !h(r).hideNavbart]],
            ),
            Ke(
              A(
                'div',
                wi,
                [S(ye, { name: 'iEL-setting', onClick: l[1] || (l[1] = (i) => (e.value = !0)) })],
                512,
              ),
              [[Ze, h(r).hideNavbart]],
            ),
            S(
              li,
              { modelValue: e.value, 'onUpdate:modelValue': l[2] || (l[2] = (i) => (e.value = i)) },
              null,
              8,
              ['modelValue'],
            ),
          ])
        );
      };
    },
  });
const $i = me(Ai, [['__scopeId', 'data-v-e3792443']]),
  Pi = { key: 0, class: 'sidebar-fold' },
  Oi = J({
    __name: 'index',
    setup(t) {
      const { appConfig: e } = ie();
      return (r, n) =>
        Ke(
          (_(),
          E(
            'div',
            { class: Te(['sidebar-container', { hideSidebar: h(e).collapseMenu }]) },
            [
              S(zr),
              S(Dr, { mode: 'vertical' }),
              (h(e).sidebarFold === 'bottom' || h(e).sidebarMode === 'blend') &&
              h(e).sidebarFold !== 'none'
                ? (_(), E('div', Pi, [S(Ur)]))
                : re('', !0),
            ],
            2,
          )),
          [[Ze, (!h(e).hideSidebar && h(e).sidebarMode !== 'horizontal') || h(e).drawerSidebar]],
        );
    },
  });
const sr = me(Oi, [['__scopeId', 'data-v-a3236eaa']]),
  Ei = J({
    __name: 'index',
    setup(t) {
      const { appConfig: e, setAppConfigMode: r } = ie(),
        n = W(!e.value.collapseMenu),
        o = (s) => {
          r(s);
        },
        a = () => {
          o({ collapseMenu: n.value });
        },
        l = W(!1),
        u = W(!1),
        i = un(() => {
          (u.value = Wt('(max-width: 1024px)').value),
            (l.value = Wt('(max-width: 750px)').value),
            l.value ? o({ drawerSidebar: !0 }) : o({ drawerSidebar: !1 });
        }, 100);
      return (
        ve(u, () => {
          o({ collapseMenu: u.value });
        }),
        ve(
          () => e.value.collapseMenu,
          () => {
            n.value = !e.value.collapseMenu;
          },
        ),
        vn(window, 'resize', () => i()),
        i(),
        (s, p) => {
          const y = k('el-drawer');
          return l.value
            ? (_(),
              V(
                y,
                {
                  key: 0,
                  modelValue: n.value,
                  'onUpdate:modelValue': p[0] || (p[0] = (f) => (n.value = f)),
                  'with-header': !1,
                  class: 'drawer-sidebar',
                  direction: 'ltr',
                  'before-close': a,
                },
                { default: O(() => [S(sr)]), _: 1 },
                8,
                ['modelValue'],
              ))
            : (_(), V(sr, { key: 1 }));
        }
      );
    },
  });
const Ci = { class: 'app-wrapper' },
  xi = { class: 'main-container' },
  Vi = J({
    __name: 'index',
    setup(t) {
      return (e, r) => (_(), E('div', Ci, [S(Ei), A('div', xi, [S($i), S(So), S(bn)])]));
    },
  });
export { Vi as default };
