var Gr = Object.defineProperty,
  qr = Object.defineProperties;
var Hr = Object.getOwnPropertyDescriptors;
var Ut = Object.getOwnPropertySymbols;
var Qr = Object.prototype.hasOwnProperty,
  Jr = Object.prototype.propertyIsEnumerable;
var zt = (t, e, r) =>
    e in t ? Gr(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (t[e] = r),
  Bt = (t, e) => {
    for (var r in e || (e = {})) Qr.call(e, r) && zt(t, r, e[r]);
    if (Ut) for (var r of Ut(e)) Jr.call(e, r) && zt(t, r, e[r]);
    return t;
  },
  Lt = (t, e) => qr(t, Hr(e));
var Wt = (t, e, r) =>
  new Promise((n, a) => {
    var o = (i) => {
        try {
          u(r.next(i));
        } catch (l) {
          a(l);
        }
      },
      s = (i) => {
        try {
          u(r.throw(i));
        } catch (l) {
          a(l);
        }
      },
      u = (i) => (i.done ? n(i.value) : Promise.resolve(i.value).then(o, s));
    u((r = r.apply(t, e)).next());
  });
import {
  d as H,
  z as be,
  Q as K,
  b as k,
  o as _,
  c as E,
  f as S,
  w as O,
  U as fr,
  e as V,
  V as Kr,
  y as v,
  W as pr,
  X as Zr,
  O as Le,
  P as ze,
  r as Yr,
  j as W,
  A as _e,
  C as Xr,
  F as ne,
  a as ue,
  g as A,
  Y as dr,
  t as q,
  Z as ht,
  $ as Je,
  J as yr,
  K as Fe,
  a0 as Ke,
  h as Te,
  a1 as en,
  L as ee,
  a2 as tn,
  a3 as rt,
  a4 as Ze,
  a5 as rn,
  n as nn,
  p as on,
  q as an,
  k as vr,
  a6 as Et,
  a7 as ln,
  a8 as sn,
  u as Ct,
  v as xt,
  a9 as mr,
  aa as un,
  ab as cn,
  D as fn,
  ac as pn,
  N as dn,
  ad as jt,
} from './index-ad4df6b0.js';
import { a as yn, r as vn, u as ae, A as mn, b as hn, c as gn } from './index-a6a558b9.js';
import { S as pe } from './index-000e99e6.js';
import { _ as de } from './plugin-vueexport-helper-c27b6911.js';
import './logo-46af6dfb.js';
const bn = { class: 'app-main' },
  _n = H({
    __name: 'index',
    setup(t) {
      const e = be(() => K().cachePageList);
      return (r, n) => {
        const a = k('router-view');
        return (
          _(),
          E('section', bn, [
            S(a, null, {
              default: O(({ Component: o, route: s }) => [
                S(
                  fr,
                  { name: 'fade-transform', mode: 'out-in' },
                  {
                    default: O(() => [
                      (_(),
                      V(Kr, { include: v(e) }, [(_(), V(pr(o), { key: s.fullPath }))], 1032, [
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
var Sn = function () {
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
    var a = 42;
    e[r] = a;
    for (r in e) return !1;
    if (
      (typeof Object.keys == 'function' && Object.keys(e).length !== 0) ||
      (typeof Object.getOwnPropertyNames == 'function' &&
        Object.getOwnPropertyNames(e).length !== 0)
    )
      return !1;
    var o = Object.getOwnPropertySymbols(e);
    if (o.length !== 1 || o[0] !== r || !Object.prototype.propertyIsEnumerable.call(e, r))
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == 'function') {
      var s = Object.getOwnPropertyDescriptor(e, r);
      if (s.value !== a || s.enumerable !== !0) return !1;
    }
    return !0;
  },
  Gt = typeof Symbol != 'undefined' && Symbol,
  wn = Sn,
  An = function () {
    return typeof Gt != 'function' ||
      typeof Symbol != 'function' ||
      typeof Gt('foo') != 'symbol' ||
      typeof Symbol('bar') != 'symbol'
      ? !1
      : wn();
  },
  $n = 'Function.prototype.bind called on incompatible ',
  lt = Array.prototype.slice,
  Pn = Object.prototype.toString,
  On = '[object Function]',
  En = function (e) {
    var r = this;
    if (typeof r != 'function' || Pn.call(r) !== On) throw new TypeError($n + r);
    for (
      var n = lt.call(arguments, 1),
        a,
        o = function () {
          if (this instanceof a) {
            var p = r.apply(this, n.concat(lt.call(arguments)));
            return Object(p) === p ? p : this;
          } else return r.apply(e, n.concat(lt.call(arguments)));
        },
        s = Math.max(0, r.length - n.length),
        u = [],
        i = 0;
      i < s;
      i++
    )
      u.push('$' + i);
    if (
      ((a = Function(
        'binder',
        'return function (' + u.join(',') + '){ return binder.apply(this,arguments); }',
      )(o)),
      r.prototype)
    ) {
      var l = function () {};
      (l.prototype = r.prototype), (a.prototype = new l()), (l.prototype = null);
    }
    return a;
  },
  Cn = En,
  Mt = Function.prototype.bind || Cn,
  xn = Mt,
  Mn = xn.call(Function.call, Object.prototype.hasOwnProperty),
  $,
  xe = SyntaxError,
  hr = Function,
  Ee = TypeError,
  st = function (t) {
    try {
      return hr('"use strict"; return (' + t + ').constructor;')();
    } catch (e) {}
  },
  Ae = Object.getOwnPropertyDescriptor;
if (Ae)
  try {
    Ae({}, '');
  } catch (t) {
    Ae = null;
  }
var ut = function () {
    throw new Ee();
  },
  In = Ae
    ? (function () {
        try {
          return arguments.callee, ut;
        } catch (t) {
          try {
            return Ae(arguments, 'callee').get;
          } catch (e) {
            return ut;
          }
        }
      })()
    : ut,
  Pe = An(),
  me =
    Object.getPrototypeOf ||
    function (t) {
      return t.__proto__;
    },
  Oe = {},
  Fn = typeof Uint8Array == 'undefined' ? $ : me(Uint8Array),
  Ce = {
    '%AggregateError%': typeof AggregateError == 'undefined' ? $ : AggregateError,
    '%Array%': Array,
    '%ArrayBuffer%': typeof ArrayBuffer == 'undefined' ? $ : ArrayBuffer,
    '%ArrayIteratorPrototype%': Pe ? me([][Symbol.iterator]()) : $,
    '%AsyncFromSyncIteratorPrototype%': $,
    '%AsyncFunction%': Oe,
    '%AsyncGenerator%': Oe,
    '%AsyncGeneratorFunction%': Oe,
    '%AsyncIteratorPrototype%': Oe,
    '%Atomics%': typeof Atomics == 'undefined' ? $ : Atomics,
    '%BigInt%': typeof BigInt == 'undefined' ? $ : BigInt,
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
    '%GeneratorFunction%': Oe,
    '%Int8Array%': typeof Int8Array == 'undefined' ? $ : Int8Array,
    '%Int16Array%': typeof Int16Array == 'undefined' ? $ : Int16Array,
    '%Int32Array%': typeof Int32Array == 'undefined' ? $ : Int32Array,
    '%isFinite%': isFinite,
    '%isNaN%': isNaN,
    '%IteratorPrototype%': Pe ? me(me([][Symbol.iterator]())) : $,
    '%JSON%': typeof JSON == 'object' ? JSON : $,
    '%Map%': typeof Map == 'undefined' ? $ : Map,
    '%MapIteratorPrototype%':
      typeof Map == 'undefined' || !Pe ? $ : me(new Map()[Symbol.iterator]()),
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
      typeof Set == 'undefined' || !Pe ? $ : me(new Set()[Symbol.iterator]()),
    '%SharedArrayBuffer%': typeof SharedArrayBuffer == 'undefined' ? $ : SharedArrayBuffer,
    '%String%': String,
    '%StringIteratorPrototype%': Pe ? me(''[Symbol.iterator]()) : $,
    '%Symbol%': Pe ? Symbol : $,
    '%SyntaxError%': xe,
    '%ThrowTypeError%': In,
    '%TypedArray%': Fn,
    '%TypeError%': Ee,
    '%Uint8Array%': typeof Uint8Array == 'undefined' ? $ : Uint8Array,
    '%Uint8ClampedArray%': typeof Uint8ClampedArray == 'undefined' ? $ : Uint8ClampedArray,
    '%Uint16Array%': typeof Uint16Array == 'undefined' ? $ : Uint16Array,
    '%Uint32Array%': typeof Uint32Array == 'undefined' ? $ : Uint32Array,
    '%URIError%': URIError,
    '%WeakMap%': typeof WeakMap == 'undefined' ? $ : WeakMap,
    '%WeakRef%': typeof WeakRef == 'undefined' ? $ : WeakRef,
    '%WeakSet%': typeof WeakSet == 'undefined' ? $ : WeakSet,
  },
  kn = function t(e) {
    var r;
    if (e === '%AsyncFunction%') r = st('async function () {}');
    else if (e === '%GeneratorFunction%') r = st('function* () {}');
    else if (e === '%AsyncGeneratorFunction%') r = st('async function* () {}');
    else if (e === '%AsyncGenerator%') {
      var n = t('%AsyncGeneratorFunction%');
      n && (r = n.prototype);
    } else if (e === '%AsyncIteratorPrototype%') {
      var a = t('%AsyncGenerator%');
      a && (r = me(a.prototype));
    }
    return (Ce[e] = r), r;
  },
  qt = {
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
  We = Mt,
  Ye = Mn,
  Nn = We.call(Function.call, Array.prototype.concat),
  Tn = We.call(Function.apply, Array.prototype.splice),
  Ht = We.call(Function.call, String.prototype.replace),
  Xe = We.call(Function.call, String.prototype.slice),
  Rn = We.call(Function.call, RegExp.prototype.exec),
  Dn =
    /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
  Vn = /\\(\\)?/g,
  Un = function (e) {
    var r = Xe(e, 0, 1),
      n = Xe(e, -1);
    if (r === '%' && n !== '%') throw new xe('invalid intrinsic syntax, expected closing `%`');
    if (n === '%' && r !== '%') throw new xe('invalid intrinsic syntax, expected opening `%`');
    var a = [];
    return (
      Ht(e, Dn, function (o, s, u, i) {
        a[a.length] = u ? Ht(i, Vn, '$1') : s || o;
      }),
      a
    );
  },
  zn = function (e, r) {
    var n = e,
      a;
    if ((Ye(qt, n) && ((a = qt[n]), (n = '%' + a[0] + '%')), Ye(Ce, n))) {
      var o = Ce[n];
      if ((o === Oe && (o = kn(n)), typeof o == 'undefined' && !r))
        throw new Ee('intrinsic ' + e + ' exists, but is not available. Please file an issue!');
      return { alias: a, name: n, value: o };
    }
    throw new xe('intrinsic ' + e + ' does not exist!');
  },
  It = function (e, r) {
    if (typeof e != 'string' || e.length === 0)
      throw new Ee('intrinsic name must be a non-empty string');
    if (arguments.length > 1 && typeof r != 'boolean')
      throw new Ee('"allowMissing" argument must be a boolean');
    if (Rn(/^%?[^%]*%?$/g, e) === null)
      throw new xe(
        '`%` may not be present anywhere but at the beginning and end of the intrinsic name',
      );
    var n = Un(e),
      a = n.length > 0 ? n[0] : '',
      o = zn('%' + a + '%', r),
      s = o.name,
      u = o.value,
      i = !1,
      l = o.alias;
    l && ((a = l[0]), Tn(n, Nn([0, 1], l)));
    for (var p = 1, y = !0; p < n.length; p += 1) {
      var f = n[p],
        b = Xe(f, 0, 1),
        h = Xe(f, -1);
      if ((b === '"' || b === "'" || b === '`' || h === '"' || h === "'" || h === '`') && b !== h)
        throw new xe('property names with quotes must have matching quotes');
      if (((f === 'constructor' || !y) && (i = !0), (a += '.' + f), (s = '%' + a + '%'), Ye(Ce, s)))
        u = Ce[s];
      else if (u != null) {
        if (!(f in u)) {
          if (!r)
            throw new Ee('base intrinsic for ' + e + ' exists, but the property is not available.');
          return;
        }
        if (Ae && p + 1 >= n.length) {
          var g = Ae(u, f);
          (y = !!g), y && 'get' in g && !('originalValue' in g.get) ? (u = g.get) : (u = u[f]);
        } else (y = Ye(u, f)), (u = u[f]);
        y && !i && (Ce[s] = u);
      }
    }
    return u;
  },
  gt = {},
  Bn = {
    get exports() {
      return gt;
    },
    set exports(t) {
      gt = t;
    },
  };
(function (t) {
  var e = Mt,
    r = It,
    n = r('%Function.prototype.apply%'),
    a = r('%Function.prototype.call%'),
    o = r('%Reflect.apply%', !0) || e.call(a, n),
    s = r('%Object.getOwnPropertyDescriptor%', !0),
    u = r('%Object.defineProperty%', !0),
    i = r('%Math.max%');
  if (u)
    try {
      u({}, 'a', { value: 1 });
    } catch (p) {
      u = null;
    }
  t.exports = function (y) {
    var f = o(e, a, arguments);
    if (s && u) {
      var b = s(f, 'length');
      b.configurable && u(f, 'length', { value: 1 + i(0, y.length - (arguments.length - 1)) });
    }
    return f;
  };
  var l = function () {
    return o(e, n, arguments);
  };
  u ? u(t.exports, 'apply', { value: l }) : (t.exports.apply = l);
})(Bn);
var gr = It,
  br = gt,
  Ln = br(gr('String.prototype.indexOf')),
  Wn = function (e, r) {
    var n = gr(e, !!r);
    return typeof n == 'function' && Ln(e, '.prototype.') > -1 ? br(n) : n;
  },
  Ft = typeof Map == 'function' && Map.prototype,
  ct =
    Object.getOwnPropertyDescriptor && Ft
      ? Object.getOwnPropertyDescriptor(Map.prototype, 'size')
      : null,
  et = Ft && ct && typeof ct.get == 'function' ? ct.get : null,
  Qt = Ft && Map.prototype.forEach,
  kt = typeof Set == 'function' && Set.prototype,
  ft =
    Object.getOwnPropertyDescriptor && kt
      ? Object.getOwnPropertyDescriptor(Set.prototype, 'size')
      : null,
  tt = kt && ft && typeof ft.get == 'function' ? ft.get : null,
  Jt = kt && Set.prototype.forEach,
  jn = typeof WeakMap == 'function' && WeakMap.prototype,
  Re = jn ? WeakMap.prototype.has : null,
  Gn = typeof WeakSet == 'function' && WeakSet.prototype,
  De = Gn ? WeakSet.prototype.has : null,
  qn = typeof WeakRef == 'function' && WeakRef.prototype,
  Kt = qn ? WeakRef.prototype.deref : null,
  Hn = Boolean.prototype.valueOf,
  Qn = Object.prototype.toString,
  Jn = Function.prototype.toString,
  Kn = String.prototype.match,
  Nt = String.prototype.slice,
  ge = String.prototype.replace,
  Zn = String.prototype.toUpperCase,
  Zt = String.prototype.toLowerCase,
  _r = RegExp.prototype.test,
  Yt = Array.prototype.concat,
  se = Array.prototype.join,
  Yn = Array.prototype.slice,
  Xt = Math.floor,
  bt = typeof BigInt == 'function' ? BigInt.prototype.valueOf : null,
  pt = Object.getOwnPropertySymbols,
  _t =
    typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
      ? Symbol.prototype.toString
      : null,
  Me = typeof Symbol == 'function' && typeof Symbol.iterator == 'object',
  Z =
    typeof Symbol == 'function' &&
    Symbol.toStringTag &&
    (typeof Symbol.toStringTag === Me || 'symbol')
      ? Symbol.toStringTag
      : null,
  Sr = Object.prototype.propertyIsEnumerable,
  er =
    (typeof Reflect == 'function' ? Reflect.getPrototypeOf : Object.getPrototypeOf) ||
    ([].__proto__ === Array.prototype
      ? function (t) {
          return t.__proto__;
        }
      : null);
function tr(t, e) {
  if (t === 1 / 0 || t === -1 / 0 || t !== t || (t && t > -1e3 && t < 1e3) || _r.call(/e/, e))
    return e;
  var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof t == 'number') {
    var n = t < 0 ? -Xt(-t) : Xt(t);
    if (n !== t) {
      var a = String(n),
        o = Nt.call(e, a.length + 1);
      return ge.call(a, r, '$&_') + '.' + ge.call(ge.call(o, /([0-9]{3})/g, '$&_'), /_$/, '');
    }
  }
  return ge.call(e, r, '$&_');
}
var St = Zr,
  rr = St.custom,
  nr = Ar(rr) ? rr : null,
  Xn = function t(e, r, n, a) {
    var o = r || {};
    if (he(o, 'quoteStyle') && o.quoteStyle !== 'single' && o.quoteStyle !== 'double')
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (
      he(o, 'maxStringLength') &&
      (typeof o.maxStringLength == 'number'
        ? o.maxStringLength < 0 && o.maxStringLength !== 1 / 0
        : o.maxStringLength !== null)
    )
      throw new TypeError(
        'option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`',
      );
    var s = he(o, 'customInspect') ? o.customInspect : !0;
    if (typeof s != 'boolean' && s !== 'symbol')
      throw new TypeError(
        'option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`',
      );
    if (
      he(o, 'indent') &&
      o.indent !== null &&
      o.indent !== '	' &&
      !(parseInt(o.indent, 10) === o.indent && o.indent > 0)
    )
      throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (he(o, 'numericSeparator') && typeof o.numericSeparator != 'boolean')
      throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var u = o.numericSeparator;
    if (typeof e == 'undefined') return 'undefined';
    if (e === null) return 'null';
    if (typeof e == 'boolean') return e ? 'true' : 'false';
    if (typeof e == 'string') return Pr(e, o);
    if (typeof e == 'number') {
      if (e === 0) return 1 / 0 / e > 0 ? '0' : '-0';
      var i = String(e);
      return u ? tr(e, i) : i;
    }
    if (typeof e == 'bigint') {
      var l = String(e) + 'n';
      return u ? tr(e, l) : l;
    }
    var p = typeof o.depth == 'undefined' ? 5 : o.depth;
    if ((typeof n == 'undefined' && (n = 0), n >= p && p > 0 && typeof e == 'object'))
      return wt(e) ? '[Array]' : '[Object]';
    var y = go(o, n);
    if (typeof a == 'undefined') a = [];
    else if ($r(a, e) >= 0) return '[Circular]';
    function f(Y, ye, $e) {
      if ((ye && ((a = Yn.call(a)), a.push(ye)), $e)) {
        var ce = { depth: o.depth };
        return he(o, 'quoteStyle') && (ce.quoteStyle = o.quoteStyle), t(Y, ce, n + 1, a);
      }
      return t(Y, o, n + 1, a);
    }
    if (typeof e == 'function' && !or(e)) {
      var b = so(e),
        h = Ge(e, f);
      return (
        '[Function' +
        (b ? ': ' + b : ' (anonymous)') +
        ']' +
        (h.length > 0 ? ' { ' + se.call(h, ', ') + ' }' : '')
      );
    }
    if (Ar(e)) {
      var g = Me ? ge.call(String(e), /^(Symbol\(.*\))_[^)]*$/, '$1') : _t.call(e);
      return typeof e == 'object' && !Me ? Ne(g) : g;
    }
    if (vo(e)) {
      for (
        var P = '<' + Zt.call(String(e.nodeName)), w = e.attributes || [], C = 0;
        C < w.length;
        C++
      )
        P += ' ' + w[C].name + '=' + wr(eo(w[C].value), 'double', o);
      return (
        (P += '>'),
        e.childNodes && e.childNodes.length && (P += '...'),
        (P += '</' + Zt.call(String(e.nodeName)) + '>'),
        P
      );
    }
    if (wt(e)) {
      if (e.length === 0) return '[]';
      var U = Ge(e, f);
      return y && !ho(U) ? '[' + At(U, y) + ']' : '[ ' + se.call(U, ', ') + ' ]';
    }
    if (ro(e)) {
      var ie = Ge(e, f);
      return !('cause' in Error.prototype) && 'cause' in e && !Sr.call(e, 'cause')
        ? '{ [' + String(e) + '] ' + se.call(Yt.call('[cause]: ' + f(e.cause), ie), ', ') + ' }'
        : ie.length === 0
        ? '[' + String(e) + ']'
        : '{ [' + String(e) + '] ' + se.call(ie, ', ') + ' }';
    }
    if (typeof e == 'object' && s) {
      if (nr && typeof e[nr] == 'function' && St) return St(e, { depth: p - n });
      if (s !== 'symbol' && typeof e.inspect == 'function') return e.inspect();
    }
    if (uo(e)) {
      var M = [];
      return (
        Qt &&
          Qt.call(e, function (Y, ye) {
            M.push(f(ye, e, !0) + ' => ' + f(Y, e));
          }),
        ar('Map', et.call(e), M, y)
      );
    }
    if (po(e)) {
      var N = [];
      return (
        Jt &&
          Jt.call(e, function (Y) {
            N.push(f(Y, e));
          }),
        ar('Set', tt.call(e), N, y)
      );
    }
    if (co(e)) return dt('WeakMap');
    if (yo(e)) return dt('WeakSet');
    if (fo(e)) return dt('WeakRef');
    if (oo(e)) return Ne(f(Number(e)));
    if (io(e)) return Ne(f(bt.call(e)));
    if (ao(e)) return Ne(Hn.call(e));
    if (no(e)) return Ne(f(String(e)));
    if (!to(e) && !or(e)) {
      var z = Ge(e, f),
        X = er ? er(e) === Object.prototype : e instanceof Object || e.constructor === Object,
        te = e instanceof Object ? '' : 'null prototype',
        re = !X && Z && Object(e) === e && Z in e ? Nt.call(Se(e), 8, -1) : te ? 'Object' : '',
        I =
          X || typeof e.constructor != 'function'
            ? ''
            : e.constructor.name
            ? e.constructor.name + ' '
            : '',
        T = I + (re || te ? '[' + se.call(Yt.call([], re || [], te || []), ': ') + '] ' : '');
      return z.length === 0
        ? T + '{}'
        : y
        ? T + '{' + At(z, y) + '}'
        : T + '{ ' + se.call(z, ', ') + ' }';
    }
    return String(e);
  };
function wr(t, e, r) {
  var n = (r.quoteStyle || e) === 'double' ? '"' : "'";
  return n + t + n;
}
function eo(t) {
  return ge.call(String(t), /"/g, '&quot;');
}
function wt(t) {
  return Se(t) === '[object Array]' && (!Z || !(typeof t == 'object' && Z in t));
}
function to(t) {
  return Se(t) === '[object Date]' && (!Z || !(typeof t == 'object' && Z in t));
}
function or(t) {
  return Se(t) === '[object RegExp]' && (!Z || !(typeof t == 'object' && Z in t));
}
function ro(t) {
  return Se(t) === '[object Error]' && (!Z || !(typeof t == 'object' && Z in t));
}
function no(t) {
  return Se(t) === '[object String]' && (!Z || !(typeof t == 'object' && Z in t));
}
function oo(t) {
  return Se(t) === '[object Number]' && (!Z || !(typeof t == 'object' && Z in t));
}
function ao(t) {
  return Se(t) === '[object Boolean]' && (!Z || !(typeof t == 'object' && Z in t));
}
function Ar(t) {
  if (Me) return t && typeof t == 'object' && t instanceof Symbol;
  if (typeof t == 'symbol') return !0;
  if (!t || typeof t != 'object' || !_t) return !1;
  try {
    return _t.call(t), !0;
  } catch (e) {}
  return !1;
}
function io(t) {
  if (!t || typeof t != 'object' || !bt) return !1;
  try {
    return bt.call(t), !0;
  } catch (e) {}
  return !1;
}
var lo =
  Object.prototype.hasOwnProperty ||
  function (t) {
    return t in this;
  };
function he(t, e) {
  return lo.call(t, e);
}
function Se(t) {
  return Qn.call(t);
}
function so(t) {
  if (t.name) return t.name;
  var e = Kn.call(Jn.call(t), /^function\s*([\w$]+)/);
  return e ? e[1] : null;
}
function $r(t, e) {
  if (t.indexOf) return t.indexOf(e);
  for (var r = 0, n = t.length; r < n; r++) if (t[r] === e) return r;
  return -1;
}
function uo(t) {
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
function co(t) {
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
function fo(t) {
  if (!Kt || !t || typeof t != 'object') return !1;
  try {
    return Kt.call(t), !0;
  } catch (e) {}
  return !1;
}
function po(t) {
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
function yo(t) {
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
function vo(t) {
  return !t || typeof t != 'object'
    ? !1
    : typeof HTMLElement != 'undefined' && t instanceof HTMLElement
    ? !0
    : typeof t.nodeName == 'string' && typeof t.getAttribute == 'function';
}
function Pr(t, e) {
  if (t.length > e.maxStringLength) {
    var r = t.length - e.maxStringLength,
      n = '... ' + r + ' more character' + (r > 1 ? 's' : '');
    return Pr(Nt.call(t, 0, e.maxStringLength), e) + n;
  }
  var a = ge.call(ge.call(t, /(['\\])/g, '\\$1'), /[\x00-\x1f]/g, mo);
  return wr(a, 'single', e);
}
function mo(t) {
  var e = t.charCodeAt(0),
    r = { 8: 'b', 9: 't', 10: 'n', 12: 'f', 13: 'r' }[e];
  return r ? '\\' + r : '\\x' + (e < 16 ? '0' : '') + Zn.call(e.toString(16));
}
function Ne(t) {
  return 'Object(' + t + ')';
}
function dt(t) {
  return t + ' { ? }';
}
function ar(t, e, r, n) {
  var a = n ? At(r, n) : se.call(r, ', ');
  return t + ' (' + e + ') {' + a + '}';
}
function ho(t) {
  for (var e = 0; e < t.length; e++)
    if (
      $r(
        t[e],
        `
`,
      ) >= 0
    )
      return !1;
  return !0;
}
function go(t, e) {
  var r;
  if (t.indent === '	') r = '	';
  else if (typeof t.indent == 'number' && t.indent > 0) r = se.call(Array(t.indent + 1), ' ');
  else return null;
  return { base: r, prev: se.call(Array(e + 1), r) };
}
function At(t, e) {
  if (t.length === 0) return '';
  var r =
    `
` +
    e.prev +
    e.base;
  return (
    r +
    se.call(t, ',' + r) +
    `
` +
    e.prev
  );
}
function Ge(t, e) {
  var r = wt(t),
    n = [];
  if (r) {
    n.length = t.length;
    for (var a = 0; a < t.length; a++) n[a] = he(t, a) ? e(t[a], t) : '';
  }
  var o = typeof pt == 'function' ? pt(t) : [],
    s;
  if (Me) {
    s = {};
    for (var u = 0; u < o.length; u++) s['$' + o[u]] = o[u];
  }
  for (var i in t)
    he(t, i) &&
      ((r && String(Number(i)) === i && i < t.length) ||
        (Me && s['$' + i] instanceof Symbol) ||
        (_r.call(/[^\w$]/, i)
          ? n.push(e(i, t) + ': ' + e(t[i], t))
          : n.push(i + ': ' + e(t[i], t))));
  if (typeof pt == 'function')
    for (var l = 0; l < o.length; l++)
      Sr.call(t, o[l]) && n.push('[' + e(o[l]) + ']: ' + e(t[o[l]], t));
  return n;
}
var Tt = It,
  ke = Wn,
  bo = Xn,
  _o = Tt('%TypeError%'),
  qe = Tt('%WeakMap%', !0),
  He = Tt('%Map%', !0),
  So = ke('WeakMap.prototype.get', !0),
  wo = ke('WeakMap.prototype.set', !0),
  Ao = ke('WeakMap.prototype.has', !0),
  $o = ke('Map.prototype.get', !0),
  Po = ke('Map.prototype.set', !0),
  Oo = ke('Map.prototype.has', !0),
  Rt = function (t, e) {
    for (var r = t, n; (n = r.next) !== null; r = n)
      if (n.key === e) return (r.next = n.next), (n.next = t.next), (t.next = n), n;
  },
  Eo = function (t, e) {
    var r = Rt(t, e);
    return r && r.value;
  },
  Co = function (t, e, r) {
    var n = Rt(t, e);
    n ? (n.value = r) : (t.next = { key: e, next: t.next, value: r });
  },
  xo = function (t, e) {
    return !!Rt(t, e);
  },
  Mo = function () {
    var e,
      r,
      n,
      a = {
        assert: function (o) {
          if (!a.has(o)) throw new _o('Side channel does not contain ' + bo(o));
        },
        get: function (o) {
          if (qe && o && (typeof o == 'object' || typeof o == 'function')) {
            if (e) return So(e, o);
          } else if (He) {
            if (r) return $o(r, o);
          } else if (n) return Eo(n, o);
        },
        has: function (o) {
          if (qe && o && (typeof o == 'object' || typeof o == 'function')) {
            if (e) return Ao(e, o);
          } else if (He) {
            if (r) return Oo(r, o);
          } else if (n) return xo(n, o);
          return !1;
        },
        set: function (o, s) {
          qe && o && (typeof o == 'object' || typeof o == 'function')
            ? (e || (e = new qe()), wo(e, o, s))
            : He
            ? (r || (r = new He()), Po(r, o, s))
            : (n || (n = { key: {}, next: null }), Co(n, o, s));
        },
      };
    return a;
  },
  Io = String.prototype.replace,
  Fo = /%20/g,
  yt = { RFC1738: 'RFC1738', RFC3986: 'RFC3986' },
  Dt = {
    default: yt.RFC3986,
    formatters: {
      RFC1738: function (t) {
        return Io.call(t, Fo, '+');
      },
      RFC3986: function (t) {
        return String(t);
      },
    },
    RFC1738: yt.RFC1738,
    RFC3986: yt.RFC3986,
  },
  ko = Dt,
  vt = Object.prototype.hasOwnProperty,
  we = Array.isArray,
  le = (function () {
    for (var t = [], e = 0; e < 256; ++e)
      t.push('%' + ((e < 16 ? '0' : '') + e.toString(16)).toUpperCase());
    return t;
  })(),
  No = function (e) {
    for (; e.length > 1; ) {
      var r = e.pop(),
        n = r.obj[r.prop];
      if (we(n)) {
        for (var a = [], o = 0; o < n.length; ++o) typeof n[o] != 'undefined' && a.push(n[o]);
        r.obj[r.prop] = a;
      }
    }
  },
  Or = function (e, r) {
    for (var n = r && r.plainObjects ? Object.create(null) : {}, a = 0; a < e.length; ++a)
      typeof e[a] != 'undefined' && (n[a] = e[a]);
    return n;
  },
  To = function t(e, r, n) {
    if (!r) return e;
    if (typeof r != 'object') {
      if (we(e)) e.push(r);
      else if (e && typeof e == 'object')
        ((n && (n.plainObjects || n.allowPrototypes)) || !vt.call(Object.prototype, r)) &&
          (e[r] = !0);
      else return [e, r];
      return e;
    }
    if (!e || typeof e != 'object') return [e].concat(r);
    var a = e;
    return (
      we(e) && !we(r) && (a = Or(e, n)),
      we(e) && we(r)
        ? (r.forEach(function (o, s) {
            if (vt.call(e, s)) {
              var u = e[s];
              u && typeof u == 'object' && o && typeof o == 'object'
                ? (e[s] = t(u, o, n))
                : e.push(o);
            } else e[s] = o;
          }),
          e)
        : Object.keys(r).reduce(function (o, s) {
            var u = r[s];
            return vt.call(o, s) ? (o[s] = t(o[s], u, n)) : (o[s] = u), o;
          }, a)
    );
  },
  Ro = function (e, r) {
    return Object.keys(r).reduce(function (n, a) {
      return (n[a] = r[a]), n;
    }, e);
  },
  Do = function (t, e, r) {
    var n = t.replace(/\+/g, ' ');
    if (r === 'iso-8859-1') return n.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
      return decodeURIComponent(n);
    } catch (a) {
      return n;
    }
  },
  Vo = function (e, r, n, a, o) {
    if (e.length === 0) return e;
    var s = e;
    if (
      (typeof e == 'symbol'
        ? (s = Symbol.prototype.toString.call(e))
        : typeof e != 'string' && (s = String(e)),
      n === 'iso-8859-1')
    )
      return escape(s).replace(/%u[0-9a-f]{4}/gi, function (p) {
        return '%26%23' + parseInt(p.slice(2), 16) + '%3B';
      });
    for (var u = '', i = 0; i < s.length; ++i) {
      var l = s.charCodeAt(i);
      if (
        l === 45 ||
        l === 46 ||
        l === 95 ||
        l === 126 ||
        (l >= 48 && l <= 57) ||
        (l >= 65 && l <= 90) ||
        (l >= 97 && l <= 122) ||
        (o === ko.RFC1738 && (l === 40 || l === 41))
      ) {
        u += s.charAt(i);
        continue;
      }
      if (l < 128) {
        u = u + le[l];
        continue;
      }
      if (l < 2048) {
        u = u + (le[192 | (l >> 6)] + le[128 | (l & 63)]);
        continue;
      }
      if (l < 55296 || l >= 57344) {
        u = u + (le[224 | (l >> 12)] + le[128 | ((l >> 6) & 63)] + le[128 | (l & 63)]);
        continue;
      }
      (i += 1),
        (l = 65536 + (((l & 1023) << 10) | (s.charCodeAt(i) & 1023))),
        (u +=
          le[240 | (l >> 18)] +
          le[128 | ((l >> 12) & 63)] +
          le[128 | ((l >> 6) & 63)] +
          le[128 | (l & 63)]);
    }
    return u;
  },
  Uo = function (e) {
    for (var r = [{ obj: { o: e }, prop: 'o' }], n = [], a = 0; a < r.length; ++a)
      for (var o = r[a], s = o.obj[o.prop], u = Object.keys(s), i = 0; i < u.length; ++i) {
        var l = u[i],
          p = s[l];
        typeof p == 'object' &&
          p !== null &&
          n.indexOf(p) === -1 &&
          (r.push({ obj: s, prop: l }), n.push(p));
      }
    return No(r), e;
  },
  zo = function (e) {
    return Object.prototype.toString.call(e) === '[object RegExp]';
  },
  Bo = function (e) {
    return !e || typeof e != 'object'
      ? !1
      : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
  },
  Lo = function (e, r) {
    return [].concat(e, r);
  },
  Wo = function (e, r) {
    if (we(e)) {
      for (var n = [], a = 0; a < e.length; a += 1) n.push(r(e[a]));
      return n;
    }
    return r(e);
  },
  Er = {
    arrayToObject: Or,
    assign: Ro,
    combine: Lo,
    compact: Uo,
    decode: Do,
    encode: Vo,
    isBuffer: Bo,
    isRegExp: zo,
    maybeMap: Wo,
    merge: To,
  },
  Cr = Mo,
  Qe = Er,
  Ve = Dt,
  jo = Object.prototype.hasOwnProperty,
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
  fe = Array.isArray,
  Go = Array.prototype.push,
  xr = function (t, e) {
    Go.apply(t, fe(e) ? e : [e]);
  },
  qo = Date.prototype.toISOString,
  lr = Ve.default,
  J = {
    addQueryPrefix: !1,
    allowDots: !1,
    charset: 'utf-8',
    charsetSentinel: !1,
    delimiter: '&',
    encode: !0,
    encoder: Qe.encode,
    encodeValuesOnly: !1,
    format: lr,
    formatter: Ve.formatters[lr],
    indices: !1,
    serializeDate: function (e) {
      return qo.call(e);
    },
    skipNulls: !1,
    strictNullHandling: !1,
  },
  Ho = function (e) {
    return (
      typeof e == 'string' ||
      typeof e == 'number' ||
      typeof e == 'boolean' ||
      typeof e == 'symbol' ||
      typeof e == 'bigint'
    );
  },
  mt = {},
  Qo = function t(e, r, n, a, o, s, u, i, l, p, y, f, b, h, g, P) {
    for (var w = e, C = P, U = 0, ie = !1; (C = C.get(mt)) !== void 0 && !ie; ) {
      var M = C.get(e);
      if (((U += 1), typeof M != 'undefined')) {
        if (M === U) throw new RangeError('Cyclic object value');
        ie = !0;
      }
      typeof C.get(mt) == 'undefined' && (U = 0);
    }
    if (
      (typeof i == 'function'
        ? (w = i(r, w))
        : w instanceof Date
        ? (w = y(w))
        : n === 'comma' &&
          fe(w) &&
          (w = Qe.maybeMap(w, function (ce) {
            return ce instanceof Date ? y(ce) : ce;
          })),
      w === null)
    ) {
      if (o) return u && !h ? u(r, J.encoder, g, 'key', f) : r;
      w = '';
    }
    if (Ho(w) || Qe.isBuffer(w)) {
      if (u) {
        var N = h ? r : u(r, J.encoder, g, 'key', f);
        return [b(N) + '=' + b(u(w, J.encoder, g, 'value', f))];
      }
      return [b(r) + '=' + b(String(w))];
    }
    var z = [];
    if (typeof w == 'undefined') return z;
    var X;
    if (n === 'comma' && fe(w))
      h && u && (w = Qe.maybeMap(w, u)),
        (X = [{ value: w.length > 0 ? w.join(',') || null : void 0 }]);
    else if (fe(i)) X = i;
    else {
      var te = Object.keys(w);
      X = l ? te.sort(l) : te;
    }
    for (var re = a && fe(w) && w.length === 1 ? r + '[]' : r, I = 0; I < X.length; ++I) {
      var T = X[I],
        Y = typeof T == 'object' && typeof T.value != 'undefined' ? T.value : w[T];
      if (!(s && Y === null)) {
        var ye = fe(w)
          ? typeof n == 'function'
            ? n(re, T)
            : re
          : re + (p ? '.' + T : '[' + T + ']');
        P.set(e, U);
        var $e = Cr();
        $e.set(mt, P),
          xr(
            z,
            t(
              Y,
              ye,
              n,
              a,
              o,
              s,
              n === 'comma' && h && fe(w) ? null : u,
              i,
              l,
              p,
              y,
              f,
              b,
              h,
              g,
              $e,
            ),
          );
      }
    }
    return z;
  },
  Jo = function (e) {
    if (!e) return J;
    if (e.encoder !== null && typeof e.encoder != 'undefined' && typeof e.encoder != 'function')
      throw new TypeError('Encoder has to be a function.');
    var r = e.charset || J.charset;
    if (typeof e.charset != 'undefined' && e.charset !== 'utf-8' && e.charset !== 'iso-8859-1')
      throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    var n = Ve.default;
    if (typeof e.format != 'undefined') {
      if (!jo.call(Ve.formatters, e.format)) throw new TypeError('Unknown format option provided.');
      n = e.format;
    }
    var a = Ve.formatters[n],
      o = J.filter;
    return (
      (typeof e.filter == 'function' || fe(e.filter)) && (o = e.filter),
      {
        addQueryPrefix: typeof e.addQueryPrefix == 'boolean' ? e.addQueryPrefix : J.addQueryPrefix,
        allowDots: typeof e.allowDots == 'undefined' ? J.allowDots : !!e.allowDots,
        charset: r,
        charsetSentinel:
          typeof e.charsetSentinel == 'boolean' ? e.charsetSentinel : J.charsetSentinel,
        delimiter: typeof e.delimiter == 'undefined' ? J.delimiter : e.delimiter,
        encode: typeof e.encode == 'boolean' ? e.encode : J.encode,
        encoder: typeof e.encoder == 'function' ? e.encoder : J.encoder,
        encodeValuesOnly:
          typeof e.encodeValuesOnly == 'boolean' ? e.encodeValuesOnly : J.encodeValuesOnly,
        filter: o,
        format: n,
        formatter: a,
        serializeDate: typeof e.serializeDate == 'function' ? e.serializeDate : J.serializeDate,
        skipNulls: typeof e.skipNulls == 'boolean' ? e.skipNulls : J.skipNulls,
        sort: typeof e.sort == 'function' ? e.sort : null,
        strictNullHandling:
          typeof e.strictNullHandling == 'boolean' ? e.strictNullHandling : J.strictNullHandling,
      }
    );
  },
  Ko = function (t, e) {
    var r = t,
      n = Jo(e),
      a,
      o;
    typeof n.filter == 'function'
      ? ((o = n.filter), (r = o('', r)))
      : fe(n.filter) && ((o = n.filter), (a = o));
    var s = [];
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
    var l = i === 'comma' && e && e.commaRoundTrip;
    a || (a = Object.keys(r)), n.sort && a.sort(n.sort);
    for (var p = Cr(), y = 0; y < a.length; ++y) {
      var f = a[y];
      (n.skipNulls && r[f] === null) ||
        xr(
          s,
          Qo(
            r[f],
            f,
            i,
            l,
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
    var b = s.join(n.delimiter),
      h = n.addQueryPrefix === !0 ? '?' : '';
    return (
      n.charsetSentinel &&
        (n.charset === 'iso-8859-1' ? (h += 'utf8=%26%2310003%3B&') : (h += 'utf8=%E2%9C%93&')),
      b.length > 0 ? h + b : ''
    );
  },
  Ie = Er,
  $t = Object.prototype.hasOwnProperty,
  Zo = Array.isArray,
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
  Yo = function (t) {
    return t.replace(/&#(\d+);/g, function (e, r) {
      return String.fromCharCode(parseInt(r, 10));
    });
  },
  Mr = function (t, e) {
    return t && typeof t == 'string' && e.comma && t.indexOf(',') > -1 ? t.split(',') : t;
  },
  Xo = 'utf8=%26%2310003%3B',
  ea = 'utf8=%E2%9C%93',
  ta = function (e, r) {
    var n = {},
      a = r.ignoreQueryPrefix ? e.replace(/^\?/, '') : e,
      o = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit,
      s = a.split(r.delimiter, o),
      u = -1,
      i,
      l = r.charset;
    if (r.charsetSentinel)
      for (i = 0; i < s.length; ++i)
        s[i].indexOf('utf8=') === 0 &&
          (s[i] === ea ? (l = 'utf-8') : s[i] === Xo && (l = 'iso-8859-1'),
          (u = i),
          (i = s.length));
    for (i = 0; i < s.length; ++i)
      if (i !== u) {
        var p = s[i],
          y = p.indexOf(']='),
          f = y === -1 ? p.indexOf('=') : y + 1,
          b,
          h;
        f === -1
          ? ((b = r.decoder(p, G.decoder, l, 'key')), (h = r.strictNullHandling ? null : ''))
          : ((b = r.decoder(p.slice(0, f), G.decoder, l, 'key')),
            (h = Ie.maybeMap(Mr(p.slice(f + 1), r), function (g) {
              return r.decoder(g, G.decoder, l, 'value');
            }))),
          h && r.interpretNumericEntities && l === 'iso-8859-1' && (h = Yo(h)),
          p.indexOf('[]=') > -1 && (h = Zo(h) ? [h] : h),
          $t.call(n, b) ? (n[b] = Ie.combine(n[b], h)) : (n[b] = h);
      }
    return n;
  },
  ra = function (t, e, r, n) {
    for (var a = n ? e : Mr(e, r), o = t.length - 1; o >= 0; --o) {
      var s,
        u = t[o];
      if (u === '[]' && r.parseArrays) s = [].concat(a);
      else {
        s = r.plainObjects ? Object.create(null) : {};
        var i = u.charAt(0) === '[' && u.charAt(u.length - 1) === ']' ? u.slice(1, -1) : u,
          l = parseInt(i, 10);
        !r.parseArrays && i === ''
          ? (s = { 0: a })
          : !isNaN(l) && u !== i && String(l) === i && l >= 0 && r.parseArrays && l <= r.arrayLimit
          ? ((s = []), (s[l] = a))
          : i !== '__proto__' && (s[i] = a);
      }
      a = s;
    }
    return a;
  },
  na = function (e, r, n, a) {
    if (e) {
      var o = n.allowDots ? e.replace(/\.([^.[]+)/g, '[$1]') : e,
        s = /(\[[^[\]]*])/,
        u = /(\[[^[\]]*])/g,
        i = n.depth > 0 && s.exec(o),
        l = i ? o.slice(0, i.index) : o,
        p = [];
      if (l) {
        if (!n.plainObjects && $t.call(Object.prototype, l) && !n.allowPrototypes) return;
        p.push(l);
      }
      for (var y = 0; n.depth > 0 && (i = u.exec(o)) !== null && y < n.depth; ) {
        if (
          ((y += 1),
          !n.plainObjects && $t.call(Object.prototype, i[1].slice(1, -1)) && !n.allowPrototypes)
        )
          return;
        p.push(i[1]);
      }
      return i && p.push('[' + o.slice(i.index) + ']'), ra(p, r, n, a);
    }
  },
  oa = function (e) {
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
  aa = function (t, e) {
    var r = oa(e);
    if (t === '' || t === null || typeof t == 'undefined')
      return r.plainObjects ? Object.create(null) : {};
    for (
      var n = typeof t == 'string' ? ta(t, r) : t,
        a = r.plainObjects ? Object.create(null) : {},
        o = Object.keys(n),
        s = 0;
      s < o.length;
      ++s
    ) {
      var u = o[s],
        i = na(u, n[u], r, typeof t == 'string');
      a = Ie.merge(a, i, r);
    }
    return r.allowSparse === !0 ? a : Ie.compact(a);
  },
  ia = Ko,
  la = aa,
  sa = Dt,
  ua = { formats: sa, parse: la, stringify: ia };
const Ir = (t) => {
    const e = Le(),
      r = ze(),
      n = (i) =>
        `${i.path}${i.query && Object.keys(i.query).length ? '?' + ua.stringify(i.query) : ''}`,
      a = (i) => {
        const { path: l, name: p, meta: y } = i,
          f = { path: l, meta: y, name: p };
        K().handleMultiTabs('add', f);
      },
      o = (i, l) => {
        const p = t.value.findIndex((f) => n(f) === n(i)),
          y = t.value.filter((f, b) =>
            (f.path !== i.path && l === 'other') || (b < p && l === 'left')
              ? !0
              : b > p && l === 'right',
          );
        if (y.find((f) => f.path === e.path)) {
          const { path: f, query: b } = t.value[p];
          r.push({ path: f, query: b });
        }
        y.forEach((f) => {
          K().cacheOperate({ mode: 'delete', name: f.name || '' }),
            K().handleMultiTabs('delete', f);
        });
      },
      s = (i) => {
        const l = t.value.findIndex((b) => n(b) === n(i)),
          p = t.value.length;
        let y, f;
        t.value[l].name === e.name &&
          (l === p - 1 ? (y = t.value[l - 1]) : (y = t.value[p - 1]),
          (f = { path: y.path, query: y.query }),
          r.push(f)),
          K().cacheOperate({ mode: 'delete', name: t.value[l].name || '' }),
          K().handleMultiTabs('delete', t.value[l]);
      };
    function u(i) {
      const l = 'refresh-button';
      yn(document.querySelector('.rotate'), l);
      const { path: p, query: y } = v(i || e);
      r.replace({ path: '/redirect' + p, query: y }),
        setTimeout(() => {
          vn(document.querySelector('.rotate'), l);
        }, 600);
    }
    return { setTabPaneKey: n, addRouteTabs: a, onFresh: u, closeTabsRoute: o, removeTab: s };
  },
  ca = (t) => {
    const { onFresh: e, removeTab: r, closeTabsRoute: n, setTabPaneKey: a } = Ir(t),
      o = Yr([
        { text: '刷新', disabled: !1, code: 'refresh' },
        { text: '关闭', disabled: !1, code: 'close' },
        { text: '关闭其他标签', disabled: !1, code: 'closeOther' },
        { text: '关闭左侧其他标签', disabled: !1, code: 'closeLeftOther' },
        { text: '关闭右侧其他标签', disabled: !1, code: 'closeRightOther' },
      ]),
      s = W(!1),
      u = W(0),
      i = W(0),
      l = W(null),
      p = (P, w) => {
        P.forEach((C) => {
          o[C].disabled = w;
        });
      },
      y = (P) => {
        p([0, 1, 2, 3, 4], !1);
        const w = t.value.findIndex((U) => a(U) === a(P)),
          C = t.value.length;
        w === 0 && C > 1
          ? p([3], !0)
          : w === C - 1 && C > 1
          ? p([4], !0)
          : C === 1 && p([1, 2, 3, 4], !0);
      },
      f = (P, w) => {
        const C = t.value.find((U) => a(U) === a(P));
        C &&
          (h(),
          y(C),
          (l.value = C),
          w &&
            setTimeout(() => {
              (i.value = w.clientX), (u.value = w.clientY), (s.value = !0);
            }, 100));
      },
      b = be(() => ({ left: i.value + 'px', top: u.value + 'px' })),
      h = () => {
        s.value = !1;
      };
    return (
      _e(
        () => s.value,
        (P) => {
          P
            ? document.body.addEventListener('click', h)
            : document.body.removeEventListener('click', h);
        },
      ),
      {
        visible: s,
        rightClickTags: o,
        rightViewStyle: b,
        contextmenu: f,
        rightViewChange: (P) => {
          if (l.value) {
            switch (P.code) {
              case 'refresh': {
                e(l.value);
                break;
              }
              case 'close': {
                r(l.value);
                break;
              }
              case 'closeOther': {
                n(l.value, 'other');
                break;
              }
              case 'closeLeftOther': {
                n(l.value, 'left');
                break;
              }
              case 'closeRightOther': {
                n(l.value, 'right');
                break;
              }
            }
            y(l.value);
          }
        },
      }
    );
  };
function fa(t) {
  return {
    all: (t = t || new Map()),
    on: function (e, r) {
      var n = t.get(e);
      n ? n.push(r) : t.set(e, [r]);
    },
    off: function (e, r) {
      var n = t.get(e);
      n && (r ? n.splice(n.indexOf(r) >>> 0, 1) : t.set(e, []));
    },
    emit: function (e, r) {
      var n = t.get(e);
      n &&
        n.slice().map(function (a) {
          a(r);
        }),
        (n = t.get('*')) &&
          n.slice().map(function (a) {
            a(e, r);
          });
    },
  };
}
const Fr = fa(),
  pa = { key: 0, class: 'main-container-tabs' },
  da = ['onClick', 'onContextmenu'],
  ya = ['onClick'],
  va = { key: 0, class: 'right-button' },
  ma = H({
    __name: 'index',
    setup(t) {
      const { appConfig: e, setAppConfigMode: r } = ae(),
        n = Le(),
        a = ze(),
        o = be(() => K().multiTabs),
        {
          visible: s,
          rightClickTags: u,
          rightViewStyle: i,
          contextmenu: l,
          rightViewChange: p,
        } = ca(o),
        { setTabPaneKey: y, addRouteTabs: f, onFresh: b, removeTab: h } = Ir(o),
        g = W(y(n));
      _e(
        () => [n.path],
        () =>
          Wt(this, null, function* () {
            g.value = y(n);
          }),
      ),
        Xr(() => {
          Fr.on('siteBarChange', ({ routeRaw: M }) => {
            f(M);
          });
        });
      const P = (M) => {
          const N = o.value.find((z) => y(z) === M);
          N && h(N);
        },
        w = (M) => {
          a.push({ path: M.path, query: M.query });
        },
        C = () => {
          const { hideNavbart: M, hideSidebar: N } = e.value;
          r(M && N ? { hideNavbart: !1, hideSidebar: !1 } : { hideNavbart: !0, hideSidebar: !0 });
        },
        U = W(),
        ie = (M, N) => {
          var z;
          (z = U.value) == null || z.handleClose(), l(M, N);
        };
      return (M, N) => {
        const z = k('el-tab-pane'),
          X = k('el-tabs'),
          te = k('el-dropdown-item'),
          re = k('el-dropdown-menu');
        return v(e).hideTabs
          ? ee('', !0)
          : (_(),
            E('div', pa, [
              S(
                X,
                {
                  modelValue: g.value,
                  'onUpdate:modelValue': N[0] || (N[0] = (I) => (g.value = I)),
                  type: 'card',
                  class: 'tabs-view',
                  closable: v(o).length > 1,
                  onTabRemove: P,
                },
                {
                  default: O(() => [
                    (_(!0),
                    E(
                      ne,
                      null,
                      ue(
                        v(o),
                        (I) => (
                          _(),
                          V(
                            z,
                            { key: v(y)(I), name: v(y)(I) },
                            {
                              label: O(() => [
                                A(
                                  'div',
                                  {
                                    class: 'tabs-view-item',
                                    onClick: (T) => w(I),
                                    onContextmenu: dr((T) => ie(I, T), ['prevent']),
                                  },
                                  null,
                                  40,
                                  da,
                                ),
                                A('span', null, q(v(ht)(I.meta.title)), 1),
                              ]),
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
              S(
                fr,
                { name: 'el-zoom-in-top' },
                {
                  default: O(() => [
                    Je(
                      A(
                        'ul',
                        { class: 'right-view', style: yr(v(i)) },
                        [
                          (_(!0),
                          E(
                            ne,
                            null,
                            ue(
                              v(u),
                              (I, T) => (
                                _(),
                                E(
                                  'li',
                                  {
                                    key: T,
                                    class: Fe(['right-view-item cursor', { disabled: I.disabled }]),
                                    onClick: (Y) => v(p)(I),
                                  },
                                  [A('span', null, q(I.text), 1)],
                                  10,
                                  ya,
                                )
                              ),
                            ),
                            128,
                          )),
                        ],
                        4,
                      ),
                      [[Ke, v(s)]],
                    ),
                  ]),
                  _: 1,
                },
              ),
              v(e).hideTabsConfig
                ? ee('', !0)
                : (_(),
                  E('div', va, [
                    A('ul', null, [
                      A('li', { class: 'cursor', onClick: N[1] || (N[1] = (I) => v(b)()) }, [
                        S(pe, { class: 'rotate', name: 'iEL-refresh' }),
                      ]),
                      A('li', null, [
                        S(
                          v(en),
                          {
                            ref_key: 'elDropdownRef',
                            ref: U,
                            trigger: 'click',
                            placement: 'bottom-end',
                            onVisibleChange: N[2] || (N[2] = (I) => I && v(l)(v(n))),
                          },
                          {
                            dropdown: O(() => [
                              S(re, null, {
                                default: O(() => [
                                  (_(!0),
                                  E(
                                    ne,
                                    null,
                                    ue(
                                      v(u),
                                      (I, T) => (
                                        _(),
                                        V(
                                          te,
                                          {
                                            key: T,
                                            command: { key: T, item: I },
                                            disabled: I.disabled,
                                            onClick: (Y) => v(p)(I),
                                          },
                                          { default: O(() => [Te(q(I.text), 1)]), _: 2 },
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
                              S(pe, { class: 'action-item cursor', name: 'iEL-arrow-down' }),
                            ]),
                            _: 1,
                          },
                          512,
                        ),
                      ]),
                      A('li', { class: 'cursor', onClick: C }, [
                        S(pe, { name: 'full_screen_page' }),
                      ]),
                    ]),
                  ])),
            ]));
      };
    },
  });
const ha = de(ma, [['__scopeId', 'data-v-e302b7ad']]),
  kr = () => {
    const t = ze().options.routes.find((n) => n.path === '/') || [],
      e = tn((n) => {
        const a = rt(n, t.children || []);
        if (a) {
          if (a.redirect && a.children && a.children.length) {
            e(a.children[0].path);
            return;
          }
          if (Ze(a.path)) return;
          Fr.emit('siteBarChange', { routeRaw: a });
        }
      }, 100);
    return {
      selectMenu: e,
      logout: () => {
        K().handleRemoveMultiTabs();
      },
    };
  };
var Be = {},
  sr = {
    get exports() {
      return Be;
    },
    set exports(t) {
      Be = t;
    },
  },
  Nr = {},
  ga = function (e) {
    return (
      e &&
      typeof e == 'object' &&
      typeof e.copy == 'function' &&
      typeof e.fill == 'function' &&
      typeof e.readUInt8 == 'function'
    );
  },
  Pt = {},
  ur = {
    get exports() {
      return Pt;
    },
    set exports(t) {
      Pt = t;
    },
  };
typeof Object.create == 'function'
  ? (ur.exports = function (e, r) {
      (e.super_ = r),
        (e.prototype = Object.create(r.prototype, {
          constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
        }));
    })
  : (ur.exports = function (e, r) {
      e.super_ = r;
      var n = function () {};
      (n.prototype = r.prototype), (e.prototype = new n()), (e.prototype.constructor = e);
    });
(function (t) {
  var e = /%[sdj%]/g;
  (t.format = function (c) {
    if (!U(c)) {
      for (var d = [], m = 0; m < arguments.length; m++) d.push(a(arguments[m]));
      return d.join(' ');
    }
    for (
      var m = 1,
        F = arguments,
        Q = F.length,
        R = String(c).replace(e, function (D) {
          if (D === '%%') return '%';
          if (m >= Q) return D;
          switch (D) {
            case '%s':
              return String(F[m++]);
            case '%d':
              return Number(F[m++]);
            case '%j':
              try {
                return JSON.stringify(F[m++]);
              } catch (j) {
                return '[Circular]';
              }
            default:
              return D;
          }
        }),
        x = F[m];
      m < Q;
      x = F[++m]
    )
      P(x) || !z(x) ? (R += ' ' + x) : (R += ' ' + a(x));
    return R;
  }),
    (t.deprecate = function (c, d) {
      if (M(rn.process))
        return function () {
          return t.deprecate(c, d).apply(this, arguments);
        };
      if (process.noDeprecation === !0) return c;
      var m = !1;
      function F() {
        if (!m) {
          if (process.throwDeprecation) throw new Error(d);
          process.traceDeprecation ? console.trace(d) : console.error(d), (m = !0);
        }
        return c.apply(this, arguments);
      }
      return F;
    });
  var r = {},
    n;
  t.debuglog = function (c) {
    if ((M(n) && (n = {}.NODE_DEBUG || ''), (c = c.toUpperCase()), !r[c]))
      if (new RegExp('\\b' + c + '\\b', 'i').test(n)) {
        var d = process.pid;
        r[c] = function () {
          var m = t.format.apply(t, arguments);
          console.error('%s %d: %s', c, d, m);
        };
      } else r[c] = function () {};
    return r[c];
  };
  function a(c, d) {
    var m = { seen: [], stylize: s };
    return (
      arguments.length >= 3 && (m.depth = arguments[2]),
      arguments.length >= 4 && (m.colors = arguments[3]),
      g(d) ? (m.showHidden = d) : d && t._extend(m, d),
      M(m.showHidden) && (m.showHidden = !1),
      M(m.depth) && (m.depth = 2),
      M(m.colors) && (m.colors = !1),
      M(m.customInspect) && (m.customInspect = !0),
      m.colors && (m.stylize = o),
      i(m, c, m.depth)
    );
  }
  (t.inspect = a),
    (a.colors = {
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
    (a.styles = {
      special: 'cyan',
      number: 'yellow',
      boolean: 'yellow',
      undefined: 'grey',
      null: 'bold',
      string: 'green',
      date: 'magenta',
      regexp: 'red',
    });
  function o(c, d) {
    var m = a.styles[d];
    return m ? '\x1B[' + a.colors[m][0] + 'm' + c + '\x1B[' + a.colors[m][1] + 'm' : c;
  }
  function s(c, d) {
    return c;
  }
  function u(c) {
    var d = {};
    return (
      c.forEach(function (m, F) {
        d[m] = !0;
      }),
      d
    );
  }
  function i(c, d, m) {
    if (
      c.customInspect &&
      d &&
      re(d.inspect) &&
      d.inspect !== t.inspect &&
      !(d.constructor && d.constructor.prototype === d)
    ) {
      var F = d.inspect(m, c);
      return U(F) || (F = i(c, F, m)), F;
    }
    var Q = l(c, d);
    if (Q) return Q;
    var R = Object.keys(d),
      x = u(R);
    if (
      (c.showHidden && (R = Object.getOwnPropertyNames(d)),
      te(d) && (R.indexOf('message') >= 0 || R.indexOf('description') >= 0))
    )
      return p(d);
    if (R.length === 0) {
      if (re(d)) {
        var D = d.name ? ': ' + d.name : '';
        return c.stylize('[Function' + D + ']', 'special');
      }
      if (N(d)) return c.stylize(RegExp.prototype.toString.call(d), 'regexp');
      if (X(d)) return c.stylize(Date.prototype.toString.call(d), 'date');
      if (te(d)) return p(d);
    }
    var j = '',
      ve = !1,
      je = ['{', '}'];
    if ((h(d) && ((ve = !0), (je = ['[', ']'])), re(d))) {
      var Wr = d.name ? ': ' + d.name : '';
      j = ' [Function' + Wr + ']';
    }
    if (
      (N(d) && (j = ' ' + RegExp.prototype.toString.call(d)),
      X(d) && (j = ' ' + Date.prototype.toUTCString.call(d)),
      te(d) && (j = ' ' + p(d)),
      R.length === 0 && (!ve || d.length == 0))
    )
      return je[0] + j + je[1];
    if (m < 0)
      return N(d)
        ? c.stylize(RegExp.prototype.toString.call(d), 'regexp')
        : c.stylize('[Object]', 'special');
    c.seen.push(d);
    var it;
    return (
      ve
        ? (it = y(c, d, m, x, R))
        : (it = R.map(function (jr) {
            return f(c, d, m, x, jr, ve);
          })),
      c.seen.pop(),
      b(it, j, je)
    );
  }
  function l(c, d) {
    if (M(d)) return c.stylize('undefined', 'undefined');
    if (U(d)) {
      var m =
        "'" +
        JSON.stringify(d).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') +
        "'";
      return c.stylize(m, 'string');
    }
    if (C(d)) return c.stylize('' + d, 'number');
    if (g(d)) return c.stylize('' + d, 'boolean');
    if (P(d)) return c.stylize('null', 'null');
  }
  function p(c) {
    return '[' + Error.prototype.toString.call(c) + ']';
  }
  function y(c, d, m, F, Q) {
    for (var R = [], x = 0, D = d.length; x < D; ++x)
      ce(d, String(x)) ? R.push(f(c, d, m, F, String(x), !0)) : R.push('');
    return (
      Q.forEach(function (j) {
        j.match(/^\d+$/) || R.push(f(c, d, m, F, j, !0));
      }),
      R
    );
  }
  function f(c, d, m, F, Q, R) {
    var x, D, j;
    if (
      ((j = Object.getOwnPropertyDescriptor(d, Q) || { value: d[Q] }),
      j.get
        ? j.set
          ? (D = c.stylize('[Getter/Setter]', 'special'))
          : (D = c.stylize('[Getter]', 'special'))
        : j.set && (D = c.stylize('[Setter]', 'special')),
      ce(F, Q) || (x = '[' + Q + ']'),
      D ||
        (c.seen.indexOf(j.value) < 0
          ? (P(m) ? (D = i(c, j.value, null)) : (D = i(c, j.value, m - 1)),
            D.indexOf(`
`) > -1 &&
              (R
                ? (D = D.split(
                    `
`,
                  )
                    .map(function (ve) {
                      return '  ' + ve;
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
                    ).map(function (ve) {
                      return '   ' + ve;
                    }).join(`
`))))
          : (D = c.stylize('[Circular]', 'special'))),
      M(x))
    ) {
      if (R && Q.match(/^\d+$/)) return D;
      (x = JSON.stringify('' + Q)),
        x.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
          ? ((x = x.substr(1, x.length - 2)), (x = c.stylize(x, 'name')))
          : ((x = x
              .replace(/'/g, "\\'")
              .replace(/\\"/g, '"')
              .replace(/(^"|"$)/g, "'")),
            (x = c.stylize(x, 'string')));
    }
    return x + ': ' + D;
  }
  function b(c, d, m) {
    var F = c.reduce(function (Q, R) {
      return (
        R.indexOf(`
`) >= 0,
        Q + R.replace(/\u001b\[\d\d?m/g, '').length + 1
      );
    }, 0);
    return F > 60
      ? m[0] +
          (d === ''
            ? ''
            : d +
              `
 `) +
          ' ' +
          c.join(`,
  `) +
          ' ' +
          m[1]
      : m[0] + d + ' ' + c.join(', ') + ' ' + m[1];
  }
  function h(c) {
    return Array.isArray(c);
  }
  t.isArray = h;
  function g(c) {
    return typeof c == 'boolean';
  }
  t.isBoolean = g;
  function P(c) {
    return c === null;
  }
  t.isNull = P;
  function w(c) {
    return c == null;
  }
  t.isNullOrUndefined = w;
  function C(c) {
    return typeof c == 'number';
  }
  t.isNumber = C;
  function U(c) {
    return typeof c == 'string';
  }
  t.isString = U;
  function ie(c) {
    return typeof c == 'symbol';
  }
  t.isSymbol = ie;
  function M(c) {
    return c === void 0;
  }
  t.isUndefined = M;
  function N(c) {
    return z(c) && T(c) === '[object RegExp]';
  }
  t.isRegExp = N;
  function z(c) {
    return typeof c == 'object' && c !== null;
  }
  t.isObject = z;
  function X(c) {
    return z(c) && T(c) === '[object Date]';
  }
  t.isDate = X;
  function te(c) {
    return z(c) && (T(c) === '[object Error]' || c instanceof Error);
  }
  t.isError = te;
  function re(c) {
    return typeof c == 'function';
  }
  t.isFunction = re;
  function I(c) {
    return (
      c === null ||
      typeof c == 'boolean' ||
      typeof c == 'number' ||
      typeof c == 'string' ||
      typeof c == 'symbol' ||
      typeof c == 'undefined'
    );
  }
  (t.isPrimitive = I), (t.isBuffer = ga);
  function T(c) {
    return Object.prototype.toString.call(c);
  }
  function Y(c) {
    return c < 10 ? '0' + c.toString(10) : c.toString(10);
  }
  var ye = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  function $e() {
    var c = new Date(),
      d = [Y(c.getHours()), Y(c.getMinutes()), Y(c.getSeconds())].join(':');
    return [c.getDate(), ye[c.getMonth()], d].join(' ');
  }
  (t.log = function () {
    console.log('%s - %s', $e(), t.format.apply(t, arguments));
  }),
    (t.inherits = Pt),
    (t._extend = function (c, d) {
      if (!d || !z(d)) return c;
      for (var m = Object.keys(d), F = m.length; F--; ) c[m[F]] = d[m[F]];
      return c;
    });
  function ce(c, d) {
    return Object.prototype.hasOwnProperty.call(c, d);
  }
})(Nr);
var ba = process.platform === 'win32',
  oe = Nr;
function nt(t, e) {
  for (var r = [], n = 0; n < t.length; n++) {
    var a = t[n];
    !a ||
      a === '.' ||
      (a === '..'
        ? r.length && r[r.length - 1] !== '..'
          ? r.pop()
          : e && r.push('..')
        : r.push(a));
  }
  return r;
}
function Ue(t) {
  for (var e = t.length - 1, r = 0; r <= e && !t[r]; r++);
  for (var n = e; n >= 0 && !t[n]; n--);
  return r === 0 && n === e ? t : r > n ? [] : t.slice(r, n + 1);
}
var Tr = /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/,
  _a = /^([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/,
  B = {};
function ot(t) {
  var e = Tr.exec(t),
    r = (e[1] || '') + (e[2] || ''),
    n = e[3] || '',
    a = _a.exec(n),
    o = a[1],
    s = a[2],
    u = a[3];
  return [r, o, s, u];
}
function Vt(t) {
  var e = Tr.exec(t),
    r = e[1] || '',
    n = !!r && r[1] !== ':';
  return { device: r, isUnc: n, isAbsolute: n || !!e[2], tail: e[3] };
}
function Rr(t) {
  return '\\\\' + t.replace(/^[\\\/]+/, '').replace(/[\\\/]+/g, '\\');
}
B.resolve = function () {
  for (var t = '', e = '', r = !1, n = arguments.length - 1; n >= -1; n--) {
    var a;
    if (
      (n >= 0
        ? (a = arguments[n])
        : t
        ? ((a = process.env['=' + t]),
          (!a || a.substr(0, 3).toLowerCase() !== t.toLowerCase() + '\\') && (a = t + '\\'))
        : (a = process.cwd()),
      oe.isString(a))
    ) {
      if (!a) continue;
    } else throw new TypeError('Arguments to path.resolve must be strings');
    var o = Vt(a),
      s = o.device,
      u = o.isUnc,
      i = o.isAbsolute,
      l = o.tail;
    if (
      !(s && t && s.toLowerCase() !== t.toLowerCase()) &&
      (t || (t = s), r || ((e = l + '\\' + e), (r = i)), t && r)
    )
      break;
  }
  return (
    u && (t = Rr(t)), (e = nt(e.split(/[\\\/]+/), !r).join('\\')), t + (r ? '\\' : '') + e || '.'
  );
};
B.normalize = function (t) {
  var e = Vt(t),
    r = e.device,
    n = e.isUnc,
    a = e.isAbsolute,
    o = e.tail,
    s = /[\\\/]$/.test(o);
  return (
    (o = nt(o.split(/[\\\/]+/), !a).join('\\')),
    !o && !a && (o = '.'),
    o && s && (o += '\\'),
    n && (r = Rr(r)),
    r + (a ? '\\' : '') + o
  );
};
B.isAbsolute = function (t) {
  return Vt(t).isAbsolute;
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
      a = Ue(e.split('\\')),
      o = Ue(r.split('\\')),
      s = Ue(n.split('\\')),
      u = Math.min(o.length, s.length),
      i = u,
      l = 0;
    l < u;
    l++
  )
    if (o[l] !== s[l]) {
      i = l;
      break;
    }
  if (i == 0) return e;
  for (var p = [], l = i; l < o.length; l++) p.push('..');
  return (p = p.concat(a.slice(i))), p.join('\\');
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
  var e = ot(t),
    r = e[0],
    n = e[1];
  return !r && !n ? '.' : (n && (n = n.substr(0, n.length - 1)), r + n);
};
B.basename = function (t, e) {
  var r = ot(t)[2];
  return e && r.substr(-1 * e.length) === e && (r = r.substr(0, r.length - e.length)), r;
};
B.extname = function (t) {
  return ot(t)[3];
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
  var e = ot(t);
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
var Sa = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,
  L = {};
function at(t) {
  return Sa.exec(t).slice(1);
}
L.resolve = function () {
  for (var t = '', e = !1, r = arguments.length - 1; r >= -1 && !e; r--) {
    var n = r >= 0 ? arguments[r] : process.cwd();
    if (oe.isString(n)) {
      if (!n) continue;
    } else throw new TypeError('Arguments to path.resolve must be strings');
    (t = n + '/' + t), (e = n[0] === '/');
  }
  return (t = nt(t.split('/'), !e).join('/')), (e ? '/' : '') + t || '.';
};
L.normalize = function (t) {
  var e = L.isAbsolute(t),
    r = t && t[t.length - 1] === '/';
  return (
    (t = nt(t.split('/'), !e).join('/')),
    !t && !e && (t = '.'),
    t && r && (t += '/'),
    (e ? '/' : '') + t
  );
};
L.isAbsolute = function (t) {
  return t.charAt(0) === '/';
};
L.join = function () {
  for (var t = '', e = 0; e < arguments.length; e++) {
    var r = arguments[e];
    if (!oe.isString(r)) throw new TypeError('Arguments to path.join must be strings');
    r && (t ? (t += '/' + r) : (t += r));
  }
  return L.normalize(t);
};
L.relative = function (t, e) {
  (t = L.resolve(t).substr(1)), (e = L.resolve(e).substr(1));
  for (
    var r = Ue(t.split('/')), n = Ue(e.split('/')), a = Math.min(r.length, n.length), o = a, s = 0;
    s < a;
    s++
  )
    if (r[s] !== n[s]) {
      o = s;
      break;
    }
  for (var u = [], s = o; s < r.length; s++) u.push('..');
  return (u = u.concat(n.slice(o))), u.join('/');
};
L._makeLong = function (t) {
  return t;
};
L.dirname = function (t) {
  var e = at(t),
    r = e[0],
    n = e[1];
  return !r && !n ? '.' : (n && (n = n.substr(0, n.length - 1)), r + n);
};
L.basename = function (t, e) {
  var r = at(t)[2];
  return e && r.substr(-1 * e.length) === e && (r = r.substr(0, r.length - e.length)), r;
};
L.extname = function (t) {
  return at(t)[3];
};
L.format = function (t) {
  if (!oe.isObject(t))
    throw new TypeError("Parameter 'pathObject' must be an object, not " + typeof t);
  var e = t.root || '';
  if (!oe.isString(e))
    throw new TypeError("'pathObject.root' must be a string or undefined, not " + typeof t.root);
  var r = t.dir ? t.dir + L.sep : '',
    n = t.base || '';
  return r + n;
};
L.parse = function (t) {
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
L.sep = '/';
L.delimiter = ':';
ba ? (sr.exports = B) : (sr.exports = L);
Be.posix = L;
Be.win32 = B;
const wa = { key: 0 },
  Aa = H({
    __name: 'Item',
    props: {
      icon: { type: String, default: '' },
      title: { type: String, default: '' },
      className: { type: String, default: '' },
    },
    setup(t) {
      return (e, r) => (
        _(),
        E(
          ne,
          null,
          [
            S(pe, { 'class-name': t.className, name: t.icon }, null, 8, ['class-name', 'name']),
            t.title ? (_(), E('span', wa, q(e.$t(t.title)), 1)) : ee('', !0),
          ],
          64,
        )
      );
    },
  });
const Ot = de(Aa, [['__scopeId', 'data-v-eb7cc837']]),
  Dr = H({
    __name: 'Link',
    props: { to: { type: String, required: !0 } },
    setup(t) {
      const e = t,
        r = be(() => Ze(e.to)),
        n = be(() => (r.value ? 'a' : 'router-link')),
        a = (o) => (r.value ? { href: o, target: '_blank', rel: 'noopener' } : { to: o });
      return (o, s) => (
        _(), V(pr(v(n)), on(an(a(t.to))), { default: O(() => [nn(o.$slots, 'default')]), _: 3 }, 16)
      );
    },
  }),
  $a = { key: 0 },
  Pa = H({
    __name: 'SidebarItem',
    props: {
      item: { type: Object, default: () => {} },
      isNest: { type: Boolean, default: !1 },
      basePath: { type: String, default: '' },
    },
    setup(t) {
      const e = t,
        r = W({}),
        n = (o = [], s) => {
          const u = o.filter((i) => (i.hidden ? !1 : ((r.value = i), !0)));
          return u.length === 1
            ? !0
            : u.length === 0
            ? ((r.value = Lt(Bt({}, s), { path: '', noShowingChildren: !0 })), !0)
            : !1;
        },
        a = (o) => (Ze(o) ? o : Ze(e.basePath) ? e.basePath : Be.resolve(e.basePath, o));
      return (o, s) => {
        const u = k('el-menu-item'),
          i = k('sidebar-item', !0),
          l = k('el-sub-menu');
        return t.item.hidden
          ? ee('', !0)
          : (_(),
            E('div', $a, [
              n(t.item.children, t.item) &&
              (!r.value.children || r.value.noShowingChildren) &&
              !t.item.alwaysShow
                ? (_(),
                  E(
                    ne,
                    { key: 0 },
                    [
                      r.value.meta
                        ? (_(),
                          V(
                            Dr,
                            { key: 0, to: a(r.value.path) },
                            {
                              default: O(() => [
                                S(
                                  u,
                                  {
                                    index: a(r.value.path),
                                    class: Fe({ 'submenu-title-noDropdown': !t.isNest }),
                                  },
                                  {
                                    default: O(() => [
                                      S(
                                        Ot,
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
                        : ee('', !0),
                    ],
                    64,
                  ))
                : (_(),
                  V(
                    l,
                    { key: 1, index: a(t.item.path), teleported: '' },
                    {
                      title: O(() => [
                        t.item.meta
                          ? (_(),
                            V(
                              Ot,
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
                          : ee('', !0),
                      ]),
                      default: O(() => [
                        (_(!0),
                        E(
                          ne,
                          null,
                          ue(
                            t.item.children,
                            (p) => (
                              _(),
                              V(
                                i,
                                {
                                  key: p.path,
                                  'is-nest': !0,
                                  item: p,
                                  'base-path': a(p.path),
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
  Vr = H({
    __name: 'index',
    props: { mode: { type: String, default: 'vertical' } },
    setup(t) {
      const { selectMenu: e } = kr(),
        r = Le(),
        { appConfig: n } = ae();
      let a = W(K().wholeMenus);
      const o = be(() =>
        n.value.sidebarMode === 'blend' && !n.value.drawerSidebar ? a.value : K().wholeMenus,
      );
      function s(i) {
        const l = Et(i, K().wholeMenus),
          p = rt(l[0], K().wholeMenus);
        p && (p.children && !p.children[0].hidden ? (a.value = p.children) : (a.value = [p]));
      }
      s(r.path),
        _e(
          () => [r.path, n.value.sidebarMode],
          ([i], [l]) => {
            n.value.sidebarMode === 'blend' && s(r.path), i !== l && e(r.path);
          },
        ),
        vr(() => {
          e(r.path);
        });
      const u = be(() => {
        const { meta: i, path: l } = r;
        return i.activeMenu ? i.activeMenu : l;
      });
      return (i, l) => {
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
                    'default-active': v(u),
                    'unique-opened': !0,
                    collapse: v(n).sidebarMode === 'horizontal' ? !1 : v(n).collapseMenu,
                    mode: t.mode,
                    onSelect: l[0] || (l[0] = (f) => v(e)(f)),
                  },
                  {
                    default: O(() => [
                      (_(!0),
                      E(
                        ne,
                        null,
                        ue(
                          v(o),
                          (f) => (
                            _(),
                            V(
                              Pa,
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
  Oa = H({
    __name: 'MinSidebar',
    setup(t) {
      const e = Le(),
        { selectMenu: r } = kr(),
        n = (o) => {
          let s = o.path;
          return (
            o.children && o.children.length && !o.children[0].hidden && (s = o.children[0].path), s
          );
        },
        a = be(() => {
          const { path: o } = e,
            s = K().wholeMenus,
            u = Et(o, s)[0],
            i = rt(u, s);
          return i != null && i.children && i.children.length && !i.children[0].hidden
            ? i.children[0].path
            : o;
        });
      return (o, s) => {
        const u = k('el-menu-item'),
          i = k('el-menu');
        return (
          _(),
          V(
            i,
            {
              ref: 'menu',
              'default-active': v(a),
              class: 'horizontal-header-menu',
              mode: 'horizontal',
              onSelect: s[0] || (s[0] = (l) => v(r)(l)),
            },
            {
              default: O(() => [
                (_(!0),
                E(
                  ne,
                  null,
                  ue(
                    v(K)().wholeMenus,
                    (l) => (
                      _(),
                      V(
                        Dr,
                        { key: l.path, to: n(l) },
                        {
                          default: O(() => [
                            S(
                              u,
                              { index: n(l) },
                              {
                                default: O(() => {
                                  var p;
                                  return [
                                    S(
                                      Ot,
                                      {
                                        'class-name': 'menu-item-svg',
                                        icon: l.meta && l.meta.icon,
                                        title: (p = l.meta) == null ? void 0 : p.title,
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
  Ur = (t) => (Ct('data-v-43e28501'), (t = t()), xt(), t),
  Ea = { class: 'color-list' },
  Ca = ['onClick'],
  xa = { class: 'options' },
  Ma = { class: 'options' },
  Ia = Ur(() => A('span', null, '灰色模式', -1)),
  Fa = { class: 'options' },
  ka = Ur(() => A('span', null, '色弱模式', -1)),
  Na = H({
    __name: 'index',
    setup(t) {
      const { appConfig: e, setAppConfigMode: r } = ae(),
        { primaryColor: n, greyMode: a, colorWeaknessMode: o } = e.value,
        s = W(n || '#409eff'),
        u = ['#722ed1', '#eb2f96', '#52c41a', '#13c2c2', '#fadb14', '#fa541c', '#f5222d'];
      _e([s], () => {
        r({ primaryColor: s.value }), ln(s.value, e.value.themeMode);
      });
      const i = W(a || !1),
        l = W(o || !1),
        p = (y, f) => {
          sn(f, y);
          const b = {};
          f === 'html-grey' ? (b.greyMode = y) : (b.colorWeaknessMode = y), r(b);
        };
      return (y, f) => {
        const b = k('el-color-picker'),
          h = k('el-switch');
        return (
          _(),
          E('div', null, [
            A('div', Ea, [
              (_(),
              E(
                ne,
                null,
                ue(u, (g) =>
                  A(
                    'div',
                    {
                      key: g,
                      class: 'cursor color-list-item',
                      style: yr({ backgroundColor: g }),
                      onClick: () => (s.value = g),
                    },
                    [
                      g === s.value
                        ? (_(), V(pe, { key: 0, class: 'icon', name: 'iEL-select' }))
                        : ee('', !0),
                    ],
                    12,
                    Ca,
                  ),
                ),
                64,
              )),
            ]),
            A('div', xa, [
              A('span', null, q(y.$t('layout.customTheme')), 1),
              S(
                b,
                {
                  modelValue: s.value,
                  'onUpdate:modelValue': f[0] || (f[0] = (g) => (s.value = g)),
                },
                null,
                8,
                ['modelValue'],
              ),
            ]),
            A('div', Ma, [
              Ia,
              S(
                h,
                {
                  modelValue: i.value,
                  'onUpdate:modelValue': f[1] || (f[1] = (g) => (i.value = g)),
                  onChange: f[2] || (f[2] = (g) => p(g, 'html-grey')),
                },
                null,
                8,
                ['modelValue'],
              ),
            ]),
            A('div', Fa, [
              ka,
              S(
                h,
                {
                  modelValue: l.value,
                  'onUpdate:modelValue': f[3] || (f[3] = (g) => (l.value = g)),
                  onChange: f[4] || (f[4] = (g) => p(g, 'html-weakness')),
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
const Ta = de(Na, [['__scopeId', 'data-v-43e28501']]),
  Ra = { class: 'options' },
  Da = { class: 'options' },
  Va = { class: 'options' },
  Ua = { class: 'options' },
  za = { class: 'options' },
  Ba = { class: 'options' },
  La = H({
    __name: 'index',
    setup(t) {
      const { appConfig: e, setAppConfigMode: r } = ae(),
        { persistent: n } = K(),
        a = W(e.value.labelPersistent),
        o = (u) => {
          u ? n() : mr.removeStorage('multiTabsList'), r({ labelPersistent: u });
        },
        s = () => {
          r({});
        };
      return (u, i) => {
        const l = k('el-switch'),
          p = k('el-option'),
          y = k('el-select');
        return (
          _(),
          E('div', null, [
            A('div', Ra, [
              A('span', null, q(u.$t('layout.hideSidebar')), 1),
              S(
                l,
                {
                  modelValue: v(e).hideSidebar,
                  'onUpdate:modelValue': i[0] || (i[0] = (f) => (v(e).hideSidebar = f)),
                  onChange: s,
                },
                null,
                8,
                ['modelValue'],
              ),
            ]),
            A('div', Da, [
              A('span', null, q(u.$t('layout.hideNavBart')), 1),
              S(
                l,
                {
                  modelValue: v(e).hideNavbart,
                  'onUpdate:modelValue': i[1] || (i[1] = (f) => (v(e).hideNavbart = f)),
                  onChange: s,
                },
                null,
                8,
                ['modelValue'],
              ),
            ]),
            A('div', Va, [
              A('span', null, q(u.$t('layout.hideTabs')), 1),
              S(
                l,
                {
                  modelValue: v(e).hideTabs,
                  'onUpdate:modelValue': i[2] || (i[2] = (f) => (v(e).hideTabs = f)),
                  onChange: s,
                },
                null,
                8,
                ['modelValue'],
              ),
            ]),
            A('div', Ua, [
              A('span', null, q(u.$t('layout.hideTabsConfig')), 1),
              S(
                l,
                {
                  modelValue: v(e).hideTabsConfig,
                  'onUpdate:modelValue': i[3] || (i[3] = (f) => (v(e).hideTabsConfig = f)),
                  onChange: s,
                },
                null,
                8,
                ['modelValue'],
              ),
            ]),
            A('div', za, [
              A('span', null, q(u.$t('layout.labelPersistent')), 1),
              S(
                l,
                {
                  modelValue: a.value,
                  'onUpdate:modelValue': i[4] || (i[4] = (f) => (a.value = f)),
                  onChange: o,
                },
                null,
                8,
                ['modelValue'],
              ),
            ]),
            A('div', Ba, [
              A('span', null, q(u.$t('layout.sidebarFold')), 1),
              S(
                y,
                {
                  modelValue: v(e).sidebarFold,
                  'onUpdate:modelValue': i[5] || (i[5] = (f) => (v(e).sidebarFold = f)),
                  class: 'select',
                  placeholder: u.$t('layout.sidebarFold'),
                  size: 'small',
                  onChange: s,
                },
                {
                  default: O(() => [
                    (_(),
                    E(
                      ne,
                      null,
                      ue(['none', 'top', 'bottom'], (f) =>
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
const Wa = de(La, [['__scopeId', 'data-v-13680537']]),
  zr = (t) => (Ct('data-v-a4dde866'), (t = t()), xt(), t),
  ja = { class: 'setting' },
  Ga = { class: 'drawer-content' },
  qa = { class: 'layout_seting' },
  Ha = { class: 'sidebar_seting' },
  Qa = ['onClick'],
  Ja = zr(() => A('div', null, null, -1)),
  Ka = zr(() => A('div', null, null, -1)),
  Za = [Ja, Ka],
  Ya = H({
    __name: 'index',
    props: { modelValue: { type: Boolean, default: !1 } },
    emits: ['update:modelValue'],
    setup(t, { emit: e }) {
      const r = t,
        n = W(r.modelValue);
      _e(
        () => r.modelValue,
        (l) => {
          n.value = l;
        },
      );
      const { appConfig: a, setAppConfigMode: o } = ae(),
        s = [
          { label: '左侧菜单模式', value: 'vertical' },
          { label: '顶部菜单模式', value: 'horizontal' },
          { label: '混合菜单模式', value: 'blend' },
        ],
        u = (l) => {
          o({ sidebarMode: l });
        },
        i = () => {
          mr.clearStorage(), window.location.reload();
        };
      return (l, p) => {
        const y = k('el-divider'),
          f = k('el-tooltip'),
          b = k('el-button'),
          h = k('el-drawer');
        return (
          _(),
          E('div', ja, [
            S(
              h,
              {
                modelValue: n.value,
                'onUpdate:modelValue': p[0] || (p[0] = (g) => (n.value = g)),
                title: l.$t('layout.setup'),
                size: 320,
                onClose: p[1] || (p[1] = (g) => e('update:modelValue', !1)),
              },
              {
                default: O(() => [
                  A('div', Ga, [
                    S(
                      y,
                      { 'content-position': 'center' },
                      { default: O(() => [Te(q(l.$t('layout.layoutSettings')), 1)]), _: 1 },
                    ),
                    A('div', qa, [
                      A('div', Ha, [
                        (_(),
                        E(
                          ne,
                          null,
                          ue(s, (g) =>
                            S(
                              f,
                              { key: g.value, content: g.label, placement: 'bottom' },
                              {
                                default: O(() => [
                                  A(
                                    'div',
                                    {
                                      class: Fe([
                                        'sidebar_mode cursor',
                                        { 'sidebar_mode-select': v(a).sidebarMode === g.value },
                                      ]),
                                      onClick: (P) => u(g.value),
                                    },
                                    Za,
                                    10,
                                    Qa,
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
                      { default: O(() => [Te(q(l.$t('layout.themeSettings')), 1)]), _: 1 },
                    ),
                    A('div', null, [S(Ta)]),
                    S(
                      y,
                      { 'content-position': 'center' },
                      { default: O(() => [Te(q(l.$t('layout.pageSettings')), 1)]), _: 1 },
                    ),
                    A('div', null, [S(Wa)]),
                    S(
                      b,
                      { class: 'clear_storage', type: 'danger', onClick: i },
                      { default: O(() => [Te(q(l.$t('layout.clearStorage')), 1)]), _: 1 },
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
const Xa = de(Ya, [['__scopeId', 'data-v-a4dde866']]),
  Br = H({
    __name: 'index',
    setup(t) {
      const { appConfig: e, setAppConfigMode: r } = ae(),
        n = () => {
          r({ collapseMenu: !e.value.collapseMenu });
        };
      return (a, o) => (
        _(),
        V(
          pe,
          {
            class: Fe(['breadcrumb-fold cursor', { 'breadcrumb-unfold': v(e).collapseMenu }]),
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
const ei = { class: 'breadcrumb' },
  ti = { key: 0, class: 'no-redirect' },
  ri = ['onClick'],
  ni = H({
    __name: 'index',
    setup(t) {
      var p;
      const { multiTabs: e } = K(),
        r = W([]),
        n = ze(),
        a = Le(),
        o =
          ((p = ze().options.routes.find((y) => y.path === '/')) == null ? void 0 : p.children) ||
          [],
        s = () => {
          const y = [];
          Et(n.currentRoute.value.matched[1].path || '', o || []).forEach((h) => {
            h !== '/' && y.push(rt(h, o || []));
          });
          const b = e.find((h) => {
            let g = {};
            return (
              h.query && (g = JSON.parse(JSON.stringify(h.query))),
              y.find((P) => P.path === h.path)
                ? !1
                : a.name === h.name && cn(a.query, g) && a.path === h.path
            );
          });
          b && y.push(b),
            (r.value = y.filter((h) => h && h.meta && h.meta.title && !h.meta.breadcrumb));
        },
        u = (y) => y(a.params),
        i = (y) => {
          const { redirect: f, path: b } = y;
          if (f) {
            n.push(f);
            return;
          }
          n.push(u(b));
        };
      vr(s), _e(a, s);
      const { appConfig: l } = ae();
      return (y, f) => {
        const b = k('el-breadcrumb-item'),
          h = k('el-breadcrumb');
        return (
          _(),
          E('div', ei, [
            v(l).sidebarFold === 'top' ? (_(), V(Br, { key: 0, class: 'app-fold' })) : ee('', !0),
            S(
              h,
              { class: 'app-breadcrumb', separator: '/' },
              {
                default: O(() => [
                  S(
                    un,
                    { name: 'breadcrumb' },
                    {
                      default: O(() => [
                        (_(!0),
                        E(
                          ne,
                          null,
                          ue(
                            r.value,
                            (g, P) => (
                              _(),
                              V(
                                b,
                                { key: g.path },
                                {
                                  default: O(() => {
                                    var w, C;
                                    return [
                                      g.redirect === 'noRedirect' || P == r.value.length - 1
                                        ? (_(),
                                          E(
                                            'span',
                                            ti,
                                            q(v(ht)((w = g.meta) == null ? void 0 : w.title)),
                                            1,
                                          ))
                                        : (_(),
                                          E(
                                            'a',
                                            {
                                              key: 1,
                                              class: 'redirect',
                                              onClick: dr((U) => i(g), ['prevent']),
                                            },
                                            q(v(ht)((C = g.meta) == null ? void 0 : C.title)),
                                            9,
                                            ri,
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
const oi = de(ni, [['__scopeId', 'data-v-93ebfb7e']]),
  ai = '/vue-xs-admin/static/png/logo-f13e6c81.png',
  ii = (t) => (Ct('data-v-6936206f'), (t = t()), xt(), t),
  li = ii(() =>
    A(
      'div',
      { class: 'logo' },
      [A('img', { class: 'logo_img', src: ai, mode: 'scaleToFill' })],
      -1,
    ),
  ),
  si = { class: 'name' },
  ui = H({
    __name: 'index',
    setup(t) {
      var n;
      const { appConfig: e } = ae(),
        r = (n = fn()) == null ? void 0 : n.appContext.config.globalProperties.$config;
      return (a, o) => (
        _(),
        E(
          'div',
          {
            class: Fe([
              'app-logo',
              { 'app-logo-hide': v(e).collapseMenu && v(e).sidebarMode !== 'horizontal' },
            ]),
          },
          [li, A('span', si, q(v(r).title), 1)],
          2,
        )
      );
    },
  });
const Lr = de(ui, [['__scopeId', 'data-v-6936206f']]),
  ci = { class: 'navbar' },
  fi = { class: 'navbar-content' },
  pi = { class: 'navbar-left' },
  di = { class: 'navbar-center' },
  yi = { class: 'navbar-right' },
  vi = { class: 'setting-icon cursor' },
  mi = H({
    __name: 'index',
    setup(t) {
      const e = W(!1),
        { appConfig: r } = ae(),
        n = W('full_screen'),
        a = () => {
          document.fullscreenElement
            ? (document.exitFullscreen(), (n.value = 'full_screen'))
            : ((n.value = 'full_screen_close'), document.documentElement.requestFullscreen());
        };
      return (o, s) => {
        const u = k('el-tooltip');
        return (
          _(),
          E('div', ci, [
            Je(
              A(
                'div',
                fi,
                [
                  A('div', pi, [
                    v(r).sidebarMode === 'vertical' || v(r).drawerSidebar
                      ? (_(), V(oi, { key: 0 }))
                      : ee('', !0),
                    v(r).sidebarMode === 'horizontal' && !v(r).drawerSidebar
                      ? (_(), V(Lr, { key: 1 }))
                      : ee('', !0),
                  ]),
                  A('div', di, [
                    v(r).drawerSidebar
                      ? ee('', !0)
                      : (_(),
                        E(
                          ne,
                          { key: 0 },
                          [
                            v(r).sidebarMode === 'horizontal'
                              ? (_(),
                                V(Vr, { key: 0, class: 'sidebar-horizontal', mode: 'horizontal' }))
                              : ee('', !0),
                            v(r).sidebarMode === 'blend'
                              ? (_(),
                                V(Oa, { key: 1, class: 'sidebar-horizontal', mode: 'horizontal' }))
                              : ee('', !0),
                          ],
                          64,
                        )),
                  ]),
                  A('div', yi, [
                    S(
                      u,
                      { content: o.$t('layout.navbar.fullScreen'), placement: 'bottom' },
                      {
                        default: O(() => [
                          S(pe, { class: 'cursor', name: n.value, onClick: a }, null, 8, ['name']),
                        ]),
                        _: 1,
                      },
                      8,
                      ['content'],
                    ),
                    S(v(mn), { class: 'icon' }),
                    S(v(hn)),
                    S(v(gn)),
                    S(pe, {
                      class: 'cursor',
                      name: 'iEL-setting',
                      onClick: s[0] || (s[0] = (i) => (e.value = !0)),
                    }),
                  ]),
                ],
                512,
              ),
              [[Ke, !v(r).hideNavbart]],
            ),
            Je(
              A(
                'div',
                vi,
                [S(pe, { name: 'iEL-setting', onClick: s[1] || (s[1] = (i) => (e.value = !0)) })],
                512,
              ),
              [[Ke, v(r).hideNavbart]],
            ),
            S(
              Xa,
              { modelValue: e.value, 'onUpdate:modelValue': s[2] || (s[2] = (i) => (e.value = i)) },
              null,
              8,
              ['modelValue'],
            ),
          ])
        );
      };
    },
  });
const hi = de(mi, [['__scopeId', 'data-v-5fbe5d9c']]),
  gi = { key: 0, class: 'sidebar-fold' },
  bi = H({
    __name: 'index',
    setup(t) {
      const { appConfig: e } = ae();
      return (r, n) =>
        Je(
          (_(),
          E(
            'div',
            { class: Fe(['sidebar-container', { hideSidebar: v(e).collapseMenu }]) },
            [
              S(Lr),
              S(Vr, { mode: 'vertical' }),
              (v(e).sidebarFold === 'bottom' || v(e).sidebarMode === 'blend') &&
              v(e).sidebarFold !== 'none'
                ? (_(), E('div', gi, [S(Br)]))
                : ee('', !0),
            ],
            2,
          )),
          [[Ke, (!v(e).hideSidebar && v(e).sidebarMode !== 'horizontal') || v(e).drawerSidebar]],
        );
    },
  });
const cr = de(bi, [['__scopeId', 'data-v-28546dbe']]),
  _i = H({
    __name: 'index',
    setup(t) {
      const { appConfig: e, setAppConfigMode: r } = ae(),
        n = W(!e.value.collapseMenu),
        a = (l) => {
          r(l);
        },
        o = () => {
          a({ collapseMenu: n.value });
        },
        s = W(!1),
        u = W(!1),
        i = dn(() => {
          (u.value = jt('(max-width: 1024px)').value),
            (s.value = jt('(max-width: 750px)').value),
            s.value ? a({ drawerSidebar: !0 }) : a({ drawerSidebar: !1 });
        }, 100);
      return (
        _e(u, () => {
          a({ collapseMenu: u.value });
        }),
        _e(
          () => e.value.collapseMenu,
          () => {
            n.value = !e.value.collapseMenu;
          },
        ),
        pn(window, 'resize', () => i()),
        i(),
        (l, p) => {
          const y = k('el-drawer');
          return s.value
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
                  'before-close': o,
                },
                { default: O(() => [S(cr)]), _: 1 },
                8,
                ['modelValue'],
              ))
            : (_(), V(cr, { key: 1 }));
        }
      );
    },
  });
const Si = { class: 'app-wrapper' },
  wi = { class: 'main-container' },
  xi = H({
    __name: 'index',
    setup(t) {
      return (e, r) => (_(), E('div', Si, [S(_i), A('div', wi, [S(hi), S(ha), S(_n)])]));
    },
  });
export { xi as default };
