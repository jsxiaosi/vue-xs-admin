var Gr = Object.defineProperty,
  Hr = Object.defineProperties;
var Jr = Object.getOwnPropertyDescriptors;
var Vt = Object.getOwnPropertySymbols;
var Qr = Object.prototype.hasOwnProperty,
  Kr = Object.prototype.propertyIsEnumerable;
var Bt = (t, e, r) =>
    e in t ? Gr(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (t[e] = r),
  Ut = (t, e) => {
    for (var r in e || (e = {})) Qr.call(e, r) && Bt(t, r, e[r]);
    if (Vt) for (var r of Vt(e)) Kr.call(e, r) && Bt(t, r, e[r]);
    return t;
  },
  zt = (t, e) => Hr(t, Jr(e));
var Lt = (t, e, r) =>
  new Promise((n, a) => {
    var o = (s) => {
        try {
          u(r.next(s));
        } catch (i) {
          a(i);
        }
      },
      l = (s) => {
        try {
          u(r.throw(s));
        } catch (i) {
          a(i);
        }
      },
      u = (s) => (s.done ? n(s.value) : Promise.resolve(s.value).then(o, l));
    u((r = r.apply(t, e)).next());
  });
import {
  d as J,
  z as be,
  P as ne,
  a as k,
  o as _,
  c as E,
  f as S,
  w as O,
  T as ur,
  e as V,
  U as Zr,
  V as cr,
  W as Yr,
  R as fr,
  N as Le,
  O as Ue,
  y as g,
  r as Xr,
  j as W,
  A as _e,
  C as en,
  F as oe,
  b as ce,
  g as A,
  X as pr,
  t as H,
  Y as ht,
  Z as Qe,
  I as dr,
  J as Fe,
  $ as Ke,
  h as Re,
  a0 as tn,
  K as ee,
  a1 as rn,
  a2 as rt,
  a3 as Ze,
  a4 as nn,
  n as on,
  p as an,
  q as ln,
  k as yr,
  a5 as Ot,
  a6 as sn,
  a7 as un,
  u as Et,
  v as Ct,
  a8 as vr,
  a9 as cn,
  aa as fn,
  D as pn,
  M as dn,
} from './index-4053894a.js';
import { S as de } from './index-065a3ad8.js';
import { u as ie, _ as yn, A as vn, a as mn, b as hn } from './index-fb1a3553.js';
import { _ as ye } from './plugin-vueexport-helper-c27b6911.js';
import { u as gn, a as Wt } from './index-09e55fc4.js';
import './logo-46af6dfb.js';
function mr(t, e) {
  return !!t.className.match(new RegExp('(\\s|^)' + e + '(\\s|$)'));
}
function bn(t, e) {
  mr(t, e) || (t.className += ' ' + e);
}
function _n(t, e) {
  if (mr(t, e)) {
    var r = new RegExp('(\\s|^)' + e + '(\\s|$)');
    t.className = t.className.replace(r, ' ').trim();
  }
}
const Sn = { class: 'app-main' },
  wn = J({
    __name: 'index',
    setup(t) {
      const e = be(() => ne().cachePageList);
      return (r, n) => {
        const a = k('router-view');
        return (
          _(),
          E('section', Sn, [
            S(a, null, {
              default: O(({ Component: o, route: l }) => [
                S(
                  ur,
                  { name: 'fade-transform', mode: 'out-in' },
                  {
                    default: O(() => [
                      (_(),
                      V(Zr, { include: e.value }, [(_(), V(cr(o), { key: l.fullPath }))], 1032, [
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
var An = function () {
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
      var l = Object.getOwnPropertyDescriptor(e, r);
      if (l.value !== a || l.enumerable !== !0) return !1;
    }
    return !0;
  },
  jt = typeof Symbol != 'undefined' && Symbol,
  $n = An,
  Pn = function () {
    return typeof jt != 'function' ||
      typeof Symbol != 'function' ||
      typeof jt('foo') != 'symbol' ||
      typeof Symbol('bar') != 'symbol'
      ? !1
      : $n();
  },
  qt = { foo: {} },
  On = Object,
  En = function () {
    return { __proto__: qt }.foo === qt.foo && !({ __proto__: null } instanceof On);
  },
  Cn = 'Function.prototype.bind called on incompatible ',
  lt = Array.prototype.slice,
  xn = Object.prototype.toString,
  Mn = '[object Function]',
  In = function (e) {
    var r = this;
    if (typeof r != 'function' || xn.call(r) !== Mn) throw new TypeError(Cn + r);
    for (
      var n = lt.call(arguments, 1),
        a,
        o = function () {
          if (this instanceof a) {
            var p = r.apply(this, n.concat(lt.call(arguments)));
            return Object(p) === p ? p : this;
          } else return r.apply(e, n.concat(lt.call(arguments)));
        },
        l = Math.max(0, r.length - n.length),
        u = [],
        s = 0;
      s < l;
      s++
    )
      u.push('$' + s);
    if (
      ((a = Function(
        'binder',
        'return function (' + u.join(',') + '){ return binder.apply(this,arguments); }',
      )(o)),
      r.prototype)
    ) {
      var i = function () {};
      (i.prototype = r.prototype), (a.prototype = new i()), (i.prototype = null);
    }
    return a;
  },
  Fn = In,
  xt = Function.prototype.bind || Fn,
  kn = xt,
  Nn = kn.call(Function.call, Object.prototype.hasOwnProperty),
  $,
  xe = SyntaxError,
  hr = Function,
  Ce = TypeError,
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
    throw new Ce();
  },
  Rn = Ae
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
  Oe = Pn(),
  Tn = En(),
  G =
    Object.getPrototypeOf ||
    (Tn
      ? function (t) {
          return t.__proto__;
        }
      : null),
  Ee = {},
  Dn = typeof Uint8Array == 'undefined' || !G ? $ : G(Uint8Array),
  $e = {
    '%AggregateError%': typeof AggregateError == 'undefined' ? $ : AggregateError,
    '%Array%': Array,
    '%ArrayBuffer%': typeof ArrayBuffer == 'undefined' ? $ : ArrayBuffer,
    '%ArrayIteratorPrototype%': Oe && G ? G([][Symbol.iterator]()) : $,
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
    '%IteratorPrototype%': Oe && G ? G(G([][Symbol.iterator]())) : $,
    '%JSON%': typeof JSON == 'object' ? JSON : $,
    '%Map%': typeof Map == 'undefined' ? $ : Map,
    '%MapIteratorPrototype%':
      typeof Map == 'undefined' || !Oe || !G ? $ : G(new Map()[Symbol.iterator]()),
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
      typeof Set == 'undefined' || !Oe || !G ? $ : G(new Set()[Symbol.iterator]()),
    '%SharedArrayBuffer%': typeof SharedArrayBuffer == 'undefined' ? $ : SharedArrayBuffer,
    '%String%': String,
    '%StringIteratorPrototype%': Oe && G ? G(''[Symbol.iterator]()) : $,
    '%Symbol%': Oe ? Symbol : $,
    '%SyntaxError%': xe,
    '%ThrowTypeError%': Rn,
    '%TypedArray%': Dn,
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
if (G)
  try {
    null.error;
  } catch (t) {
    var Vn = G(G(t));
    $e['%Error.prototype%'] = Vn;
  }
var Bn = function t(e) {
    var r;
    if (e === '%AsyncFunction%') r = st('async function () {}');
    else if (e === '%GeneratorFunction%') r = st('function* () {}');
    else if (e === '%AsyncGeneratorFunction%') r = st('async function* () {}');
    else if (e === '%AsyncGenerator%') {
      var n = t('%AsyncGeneratorFunction%');
      n && (r = n.prototype);
    } else if (e === '%AsyncIteratorPrototype%') {
      var a = t('%AsyncGenerator%');
      a && G && (r = G(a.prototype));
    }
    return ($e[e] = r), r;
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
  We = xt,
  Ye = Nn,
  Un = We.call(Function.call, Array.prototype.concat),
  zn = We.call(Function.apply, Array.prototype.splice),
  Ht = We.call(Function.call, String.prototype.replace),
  Xe = We.call(Function.call, String.prototype.slice),
  Ln = We.call(Function.call, RegExp.prototype.exec),
  Wn =
    /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
  jn = /\\(\\)?/g,
  qn = function (e) {
    var r = Xe(e, 0, 1),
      n = Xe(e, -1);
    if (r === '%' && n !== '%') throw new xe('invalid intrinsic syntax, expected closing `%`');
    if (n === '%' && r !== '%') throw new xe('invalid intrinsic syntax, expected opening `%`');
    var a = [];
    return (
      Ht(e, Wn, function (o, l, u, s) {
        a[a.length] = u ? Ht(s, jn, '$1') : l || o;
      }),
      a
    );
  },
  Gn = function (e, r) {
    var n = e,
      a;
    if ((Ye(Gt, n) && ((a = Gt[n]), (n = '%' + a[0] + '%')), Ye($e, n))) {
      var o = $e[n];
      if ((o === Ee && (o = Bn(n)), typeof o == 'undefined' && !r))
        throw new Ce('intrinsic ' + e + ' exists, but is not available. Please file an issue!');
      return { alias: a, name: n, value: o };
    }
    throw new xe('intrinsic ' + e + ' does not exist!');
  },
  Mt = function (e, r) {
    if (typeof e != 'string' || e.length === 0)
      throw new Ce('intrinsic name must be a non-empty string');
    if (arguments.length > 1 && typeof r != 'boolean')
      throw new Ce('"allowMissing" argument must be a boolean');
    if (Ln(/^%?[^%]*%?$/, e) === null)
      throw new xe(
        '`%` may not be present anywhere but at the beginning and end of the intrinsic name',
      );
    var n = qn(e),
      a = n.length > 0 ? n[0] : '',
      o = Gn('%' + a + '%', r),
      l = o.name,
      u = o.value,
      s = !1,
      i = o.alias;
    i && ((a = i[0]), zn(n, Un([0, 1], i)));
    for (var p = 1, y = !0; p < n.length; p += 1) {
      var f = n[p],
        m = Xe(f, 0, 1),
        h = Xe(f, -1);
      if ((m === '"' || m === "'" || m === '`' || h === '"' || h === "'" || h === '`') && m !== h)
        throw new xe('property names with quotes must have matching quotes');
      if (((f === 'constructor' || !y) && (s = !0), (a += '.' + f), (l = '%' + a + '%'), Ye($e, l)))
        u = $e[l];
      else if (u != null) {
        if (!(f in u)) {
          if (!r)
            throw new Ce('base intrinsic for ' + e + ' exists, but the property is not available.');
          return;
        }
        if (Ae && p + 1 >= n.length) {
          var b = Ae(u, f);
          (y = !!b), y && 'get' in b && !('originalValue' in b.get) ? (u = b.get) : (u = u[f]);
        } else (y = Ye(u, f)), (u = u[f]);
        y && !s && ($e[l] = u);
      }
    }
    return u;
  },
  gr = { exports: {} };
(function (t) {
  var e = xt,
    r = Mt,
    n = r('%Function.prototype.apply%'),
    a = r('%Function.prototype.call%'),
    o = r('%Reflect.apply%', !0) || e.call(a, n),
    l = r('%Object.getOwnPropertyDescriptor%', !0),
    u = r('%Object.defineProperty%', !0),
    s = r('%Math.max%');
  if (u)
    try {
      u({}, 'a', { value: 1 });
    } catch (p) {
      u = null;
    }
  t.exports = function (y) {
    var f = o(e, a, arguments);
    if (l && u) {
      var m = l(f, 'length');
      m.configurable && u(f, 'length', { value: 1 + s(0, y.length - (arguments.length - 1)) });
    }
    return f;
  };
  var i = function () {
    return o(e, n, arguments);
  };
  u ? u(t.exports, 'apply', { value: i }) : (t.exports.apply = i);
})(gr);
var Hn = gr.exports,
  br = Mt,
  _r = Hn,
  Jn = _r(br('String.prototype.indexOf')),
  Qn = function (e, r) {
    var n = br(e, !!r);
    return typeof n == 'function' && Jn(e, '.prototype.') > -1 ? _r(n) : n;
  },
  It = typeof Map == 'function' && Map.prototype,
  ct =
    Object.getOwnPropertyDescriptor && It
      ? Object.getOwnPropertyDescriptor(Map.prototype, 'size')
      : null,
  et = It && ct && typeof ct.get == 'function' ? ct.get : null,
  Jt = It && Map.prototype.forEach,
  Ft = typeof Set == 'function' && Set.prototype,
  ft =
    Object.getOwnPropertyDescriptor && Ft
      ? Object.getOwnPropertyDescriptor(Set.prototype, 'size')
      : null,
  tt = Ft && ft && typeof ft.get == 'function' ? ft.get : null,
  Qt = Ft && Set.prototype.forEach,
  Kn = typeof WeakMap == 'function' && WeakMap.prototype,
  Te = Kn ? WeakMap.prototype.has : null,
  Zn = typeof WeakSet == 'function' && WeakSet.prototype,
  De = Zn ? WeakSet.prototype.has : null,
  Yn = typeof WeakRef == 'function' && WeakRef.prototype,
  Kt = Yn ? WeakRef.prototype.deref : null,
  Xn = Boolean.prototype.valueOf,
  eo = Object.prototype.toString,
  to = Function.prototype.toString,
  ro = String.prototype.match,
  kt = String.prototype.slice,
  ge = String.prototype.replace,
  no = String.prototype.toUpperCase,
  Zt = String.prototype.toLowerCase,
  Sr = RegExp.prototype.test,
  Yt = Array.prototype.concat,
  ue = Array.prototype.join,
  oo = Array.prototype.slice,
  Xt = Math.floor,
  gt = typeof BigInt == 'function' ? BigInt.prototype.valueOf : null,
  pt = Object.getOwnPropertySymbols,
  bt =
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
      var a = String(n),
        o = kt.call(e, a.length + 1);
      return ge.call(a, r, '$&_') + '.' + ge.call(ge.call(o, /([0-9]{3})/g, '$&_'), /_$/, '');
    }
  }
  return ge.call(e, r, '$&_');
}
var _t = Yr,
  rr = _t.custom,
  nr = $r(rr) ? rr : null,
  ao = function t(e, r, n, a) {
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
    var l = he(o, 'customInspect') ? o.customInspect : !0;
    if (typeof l != 'boolean' && l !== 'symbol')
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
    if (typeof e == 'string') return Or(e, o);
    if (typeof e == 'number') {
      if (e === 0) return 1 / 0 / e > 0 ? '0' : '-0';
      var s = String(e);
      return u ? tr(e, s) : s;
    }
    if (typeof e == 'bigint') {
      var i = String(e) + 'n';
      return u ? tr(e, i) : i;
    }
    var p = typeof o.depth == 'undefined' ? 5 : o.depth;
    if ((typeof n == 'undefined' && (n = 0), n >= p && p > 0 && typeof e == 'object'))
      return St(e) ? '[Array]' : '[Object]';
    var y = $o(o, n);
    if (typeof a == 'undefined') a = [];
    else if (Pr(a, e) >= 0) return '[Circular]';
    function f(Y, ve, Pe) {
      if ((ve && ((a = oo.call(a)), a.push(ve)), Pe)) {
        var fe = { depth: o.depth };
        return he(o, 'quoteStyle') && (fe.quoteStyle = o.quoteStyle), t(Y, fe, n + 1, a);
      }
      return t(Y, o, n + 1, a);
    }
    if (typeof e == 'function' && !or(e)) {
      var m = vo(e),
        h = qe(e, f);
      return (
        '[Function' +
        (m ? ': ' + m : ' (anonymous)') +
        ']' +
        (h.length > 0 ? ' { ' + ue.call(h, ', ') + ' }' : '')
      );
    }
    if ($r(e)) {
      var b = Me ? ge.call(String(e), /^(Symbol\(.*\))_[^)]*$/, '$1') : bt.call(e);
      return typeof e == 'object' && !Me ? Ne(b) : b;
    }
    if (So(e)) {
      for (
        var P = '<' + Zt.call(String(e.nodeName)), w = e.attributes || [], C = 0;
        C < w.length;
        C++
      )
        P += ' ' + w[C].name + '=' + Ar(io(w[C].value), 'double', o);
      return (
        (P += '>'),
        e.childNodes && e.childNodes.length && (P += '...'),
        (P += '</' + Zt.call(String(e.nodeName)) + '>'),
        P
      );
    }
    if (St(e)) {
      if (e.length === 0) return '[]';
      var B = qe(e, f);
      return y && !Ao(B) ? '[' + wt(B, y) + ']' : '[ ' + ue.call(B, ', ') + ' ]';
    }
    if (so(e)) {
      var le = qe(e, f);
      return !('cause' in Error.prototype) && 'cause' in e && !wr.call(e, 'cause')
        ? '{ [' + String(e) + '] ' + ue.call(Yt.call('[cause]: ' + f(e.cause), le), ', ') + ' }'
        : le.length === 0
        ? '[' + String(e) + ']'
        : '{ [' + String(e) + '] ' + ue.call(le, ', ') + ' }';
    }
    if (typeof e == 'object' && l) {
      if (nr && typeof e[nr] == 'function' && _t) return _t(e, { depth: p - n });
      if (l !== 'symbol' && typeof e.inspect == 'function') return e.inspect();
    }
    if (mo(e)) {
      var M = [];
      return (
        Jt &&
          Jt.call(e, function (Y, ve) {
            M.push(f(ve, e, !0) + ' => ' + f(Y, e));
          }),
        ar('Map', et.call(e), M, y)
      );
    }
    if (bo(e)) {
      var N = [];
      return (
        Qt &&
          Qt.call(e, function (Y) {
            N.push(f(Y, e));
          }),
        ar('Set', tt.call(e), N, y)
      );
    }
    if (ho(e)) return dt('WeakMap');
    if (_o(e)) return dt('WeakSet');
    if (go(e)) return dt('WeakRef');
    if (co(e)) return Ne(f(Number(e)));
    if (po(e)) return Ne(f(gt.call(e)));
    if (fo(e)) return Ne(Xn.call(e));
    if (uo(e)) return Ne(f(String(e)));
    if (!lo(e) && !or(e)) {
      var U = qe(e, f),
        X = er ? er(e) === Object.prototype : e instanceof Object || e.constructor === Object,
        te = e instanceof Object ? '' : 'null prototype',
        re = !X && Z && Object(e) === e && Z in e ? kt.call(Se(e), 8, -1) : te ? 'Object' : '',
        I =
          X || typeof e.constructor != 'function'
            ? ''
            : e.constructor.name
            ? e.constructor.name + ' '
            : '',
        R = I + (re || te ? '[' + ue.call(Yt.call([], re || [], te || []), ': ') + '] ' : '');
      return U.length === 0
        ? R + '{}'
        : y
        ? R + '{' + wt(U, y) + '}'
        : R + '{ ' + ue.call(U, ', ') + ' }';
    }
    return String(e);
  };
function Ar(t, e, r) {
  var n = (r.quoteStyle || e) === 'double' ? '"' : "'";
  return n + t + n;
}
function io(t) {
  return ge.call(String(t), /"/g, '&quot;');
}
function St(t) {
  return Se(t) === '[object Array]' && (!Z || !(typeof t == 'object' && Z in t));
}
function lo(t) {
  return Se(t) === '[object Date]' && (!Z || !(typeof t == 'object' && Z in t));
}
function or(t) {
  return Se(t) === '[object RegExp]' && (!Z || !(typeof t == 'object' && Z in t));
}
function so(t) {
  return Se(t) === '[object Error]' && (!Z || !(typeof t == 'object' && Z in t));
}
function uo(t) {
  return Se(t) === '[object String]' && (!Z || !(typeof t == 'object' && Z in t));
}
function co(t) {
  return Se(t) === '[object Number]' && (!Z || !(typeof t == 'object' && Z in t));
}
function fo(t) {
  return Se(t) === '[object Boolean]' && (!Z || !(typeof t == 'object' && Z in t));
}
function $r(t) {
  if (Me) return t && typeof t == 'object' && t instanceof Symbol;
  if (typeof t == 'symbol') return !0;
  if (!t || typeof t != 'object' || !bt) return !1;
  try {
    return bt.call(t), !0;
  } catch (e) {}
  return !1;
}
function po(t) {
  if (!t || typeof t != 'object' || !gt) return !1;
  try {
    return gt.call(t), !0;
  } catch (e) {}
  return !1;
}
var yo =
  Object.prototype.hasOwnProperty ||
  function (t) {
    return t in this;
  };
function he(t, e) {
  return yo.call(t, e);
}
function Se(t) {
  return eo.call(t);
}
function vo(t) {
  if (t.name) return t.name;
  var e = ro.call(to.call(t), /^function\s*([\w$]+)/);
  return e ? e[1] : null;
}
function Pr(t, e) {
  if (t.indexOf) return t.indexOf(e);
  for (var r = 0, n = t.length; r < n; r++) if (t[r] === e) return r;
  return -1;
}
function mo(t) {
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
function ho(t) {
  if (!Te || !t || typeof t != 'object') return !1;
  try {
    Te.call(t, Te);
    try {
      De.call(t, De);
    } catch (e) {
      return !0;
    }
    return t instanceof WeakMap;
  } catch (e) {}
  return !1;
}
function go(t) {
  if (!Kt || !t || typeof t != 'object') return !1;
  try {
    return Kt.call(t), !0;
  } catch (e) {}
  return !1;
}
function bo(t) {
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
function _o(t) {
  if (!De || !t || typeof t != 'object') return !1;
  try {
    De.call(t, De);
    try {
      Te.call(t, Te);
    } catch (e) {
      return !0;
    }
    return t instanceof WeakSet;
  } catch (e) {}
  return !1;
}
function So(t) {
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
    return Or(kt.call(t, 0, e.maxStringLength), e) + n;
  }
  var a = ge.call(ge.call(t, /(['\\])/g, '\\$1'), /[\x00-\x1f]/g, wo);
  return Ar(a, 'single', e);
}
function wo(t) {
  var e = t.charCodeAt(0),
    r = { 8: 'b', 9: 't', 10: 'n', 12: 'f', 13: 'r' }[e];
  return r ? '\\' + r : '\\x' + (e < 16 ? '0' : '') + no.call(e.toString(16));
}
function Ne(t) {
  return 'Object(' + t + ')';
}
function dt(t) {
  return t + ' { ? }';
}
function ar(t, e, r, n) {
  var a = n ? wt(r, n) : ue.call(r, ', ');
  return t + ' (' + e + ') {' + a + '}';
}
function Ao(t) {
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
function $o(t, e) {
  var r;
  if (t.indent === '	') r = '	';
  else if (typeof t.indent == 'number' && t.indent > 0) r = ue.call(Array(t.indent + 1), ' ');
  else return null;
  return { base: r, prev: ue.call(Array(e + 1), r) };
}
function wt(t, e) {
  if (t.length === 0) return '';
  var r =
    `
` +
    e.prev +
    e.base;
  return (
    r +
    ue.call(t, ',' + r) +
    `
` +
    e.prev
  );
}
function qe(t, e) {
  var r = St(t),
    n = [];
  if (r) {
    n.length = t.length;
    for (var a = 0; a < t.length; a++) n[a] = he(t, a) ? e(t[a], t) : '';
  }
  var o = typeof pt == 'function' ? pt(t) : [],
    l;
  if (Me) {
    l = {};
    for (var u = 0; u < o.length; u++) l['$' + o[u]] = o[u];
  }
  for (var s in t)
    he(t, s) &&
      ((r && String(Number(s)) === s && s < t.length) ||
        (Me && l['$' + s] instanceof Symbol) ||
        (Sr.call(/[^\w$]/, s)
          ? n.push(e(s, t) + ': ' + e(t[s], t))
          : n.push(s + ': ' + e(t[s], t))));
  if (typeof pt == 'function')
    for (var i = 0; i < o.length; i++)
      wr.call(t, o[i]) && n.push('[' + e(o[i]) + ']: ' + e(t[o[i]], t));
  return n;
}
var Nt = Mt,
  ke = Qn,
  Po = ao,
  Oo = Nt('%TypeError%'),
  Ge = Nt('%WeakMap%', !0),
  He = Nt('%Map%', !0),
  Eo = ke('WeakMap.prototype.get', !0),
  Co = ke('WeakMap.prototype.set', !0),
  xo = ke('WeakMap.prototype.has', !0),
  Mo = ke('Map.prototype.get', !0),
  Io = ke('Map.prototype.set', !0),
  Fo = ke('Map.prototype.has', !0),
  Rt = function (t, e) {
    for (var r = t, n; (n = r.next) !== null; r = n)
      if (n.key === e) return (r.next = n.next), (n.next = t.next), (t.next = n), n;
  },
  ko = function (t, e) {
    var r = Rt(t, e);
    return r && r.value;
  },
  No = function (t, e, r) {
    var n = Rt(t, e);
    n ? (n.value = r) : (t.next = { key: e, next: t.next, value: r });
  },
  Ro = function (t, e) {
    return !!Rt(t, e);
  },
  To = function () {
    var e,
      r,
      n,
      a = {
        assert: function (o) {
          if (!a.has(o)) throw new Oo('Side channel does not contain ' + Po(o));
        },
        get: function (o) {
          if (Ge && o && (typeof o == 'object' || typeof o == 'function')) {
            if (e) return Eo(e, o);
          } else if (He) {
            if (r) return Mo(r, o);
          } else if (n) return ko(n, o);
        },
        has: function (o) {
          if (Ge && o && (typeof o == 'object' || typeof o == 'function')) {
            if (e) return xo(e, o);
          } else if (He) {
            if (r) return Fo(r, o);
          } else if (n) return Ro(n, o);
          return !1;
        },
        set: function (o, l) {
          Ge && o && (typeof o == 'object' || typeof o == 'function')
            ? (e || (e = new Ge()), Co(e, o, l))
            : He
            ? (r || (r = new He()), Io(r, o, l))
            : (n || (n = { key: {}, next: null }), No(n, o, l));
        },
      };
    return a;
  },
  Do = String.prototype.replace,
  Vo = /%20/g,
  yt = { RFC1738: 'RFC1738', RFC3986: 'RFC3986' },
  Tt = {
    default: yt.RFC3986,
    formatters: {
      RFC1738: function (t) {
        return Do.call(t, Vo, '+');
      },
      RFC3986: function (t) {
        return String(t);
      },
    },
    RFC1738: yt.RFC1738,
    RFC3986: yt.RFC3986,
  },
  Bo = Tt,
  vt = Object.prototype.hasOwnProperty,
  we = Array.isArray,
  se = (function () {
    for (var t = [], e = 0; e < 256; ++e)
      t.push('%' + ((e < 16 ? '0' : '') + e.toString(16)).toUpperCase());
    return t;
  })(),
  Uo = function (e) {
    for (; e.length > 1; ) {
      var r = e.pop(),
        n = r.obj[r.prop];
      if (we(n)) {
        for (var a = [], o = 0; o < n.length; ++o) typeof n[o] != 'undefined' && a.push(n[o]);
        r.obj[r.prop] = a;
      }
    }
  },
  Er = function (e, r) {
    for (var n = r && r.plainObjects ? Object.create(null) : {}, a = 0; a < e.length; ++a)
      typeof e[a] != 'undefined' && (n[a] = e[a]);
    return n;
  },
  zo = function t(e, r, n) {
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
      we(e) && !we(r) && (a = Er(e, n)),
      we(e) && we(r)
        ? (r.forEach(function (o, l) {
            if (vt.call(e, l)) {
              var u = e[l];
              u && typeof u == 'object' && o && typeof o == 'object'
                ? (e[l] = t(u, o, n))
                : e.push(o);
            } else e[l] = o;
          }),
          e)
        : Object.keys(r).reduce(function (o, l) {
            var u = r[l];
            return vt.call(o, l) ? (o[l] = t(o[l], u, n)) : (o[l] = u), o;
          }, a)
    );
  },
  Lo = function (e, r) {
    return Object.keys(r).reduce(function (n, a) {
      return (n[a] = r[a]), n;
    }, e);
  },
  Wo = function (t, e, r) {
    var n = t.replace(/\+/g, ' ');
    if (r === 'iso-8859-1') return n.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
      return decodeURIComponent(n);
    } catch (a) {
      return n;
    }
  },
  jo = function (e, r, n, a, o) {
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
    for (var u = '', s = 0; s < l.length; ++s) {
      var i = l.charCodeAt(s);
      if (
        i === 45 ||
        i === 46 ||
        i === 95 ||
        i === 126 ||
        (i >= 48 && i <= 57) ||
        (i >= 65 && i <= 90) ||
        (i >= 97 && i <= 122) ||
        (o === Bo.RFC1738 && (i === 40 || i === 41))
      ) {
        u += l.charAt(s);
        continue;
      }
      if (i < 128) {
        u = u + se[i];
        continue;
      }
      if (i < 2048) {
        u = u + (se[192 | (i >> 6)] + se[128 | (i & 63)]);
        continue;
      }
      if (i < 55296 || i >= 57344) {
        u = u + (se[224 | (i >> 12)] + se[128 | ((i >> 6) & 63)] + se[128 | (i & 63)]);
        continue;
      }
      (s += 1),
        (i = 65536 + (((i & 1023) << 10) | (l.charCodeAt(s) & 1023))),
        (u +=
          se[240 | (i >> 18)] +
          se[128 | ((i >> 12) & 63)] +
          se[128 | ((i >> 6) & 63)] +
          se[128 | (i & 63)]);
    }
    return u;
  },
  qo = function (e) {
    for (var r = [{ obj: { o: e }, prop: 'o' }], n = [], a = 0; a < r.length; ++a)
      for (var o = r[a], l = o.obj[o.prop], u = Object.keys(l), s = 0; s < u.length; ++s) {
        var i = u[s],
          p = l[i];
        typeof p == 'object' &&
          p !== null &&
          n.indexOf(p) === -1 &&
          (r.push({ obj: l, prop: i }), n.push(p));
      }
    return Uo(r), e;
  },
  Go = function (e) {
    return Object.prototype.toString.call(e) === '[object RegExp]';
  },
  Ho = function (e) {
    return !e || typeof e != 'object'
      ? !1
      : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
  },
  Jo = function (e, r) {
    return [].concat(e, r);
  },
  Qo = function (e, r) {
    if (we(e)) {
      for (var n = [], a = 0; a < e.length; a += 1) n.push(r(e[a]));
      return n;
    }
    return r(e);
  },
  Cr = {
    arrayToObject: Er,
    assign: Lo,
    combine: Jo,
    compact: qo,
    decode: Wo,
    encode: jo,
    isBuffer: Ho,
    isRegExp: Go,
    maybeMap: Qo,
    merge: zo,
  },
  xr = To,
  Je = Cr,
  Ve = Tt,
  Ko = Object.prototype.hasOwnProperty,
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
  pe = Array.isArray,
  Zo = Array.prototype.push,
  Mr = function (t, e) {
    Zo.apply(t, pe(e) ? e : [e]);
  },
  Yo = Date.prototype.toISOString,
  lr = Ve.default,
  K = {
    addQueryPrefix: !1,
    allowDots: !1,
    charset: 'utf-8',
    charsetSentinel: !1,
    delimiter: '&',
    encode: !0,
    encoder: Je.encode,
    encodeValuesOnly: !1,
    format: lr,
    formatter: Ve.formatters[lr],
    indices: !1,
    serializeDate: function (e) {
      return Yo.call(e);
    },
    skipNulls: !1,
    strictNullHandling: !1,
  },
  Xo = function (e) {
    return (
      typeof e == 'string' ||
      typeof e == 'number' ||
      typeof e == 'boolean' ||
      typeof e == 'symbol' ||
      typeof e == 'bigint'
    );
  },
  mt = {},
  ea = function t(e, r, n, a, o, l, u, s, i, p, y, f, m, h, b, P) {
    for (var w = e, C = P, B = 0, le = !1; (C = C.get(mt)) !== void 0 && !le; ) {
      var M = C.get(e);
      if (((B += 1), typeof M != 'undefined')) {
        if (M === B) throw new RangeError('Cyclic object value');
        le = !0;
      }
      typeof C.get(mt) == 'undefined' && (B = 0);
    }
    if (
      (typeof s == 'function'
        ? (w = s(r, w))
        : w instanceof Date
        ? (w = y(w))
        : n === 'comma' &&
          pe(w) &&
          (w = Je.maybeMap(w, function (fe) {
            return fe instanceof Date ? y(fe) : fe;
          })),
      w === null)
    ) {
      if (o) return u && !h ? u(r, K.encoder, b, 'key', f) : r;
      w = '';
    }
    if (Xo(w) || Je.isBuffer(w)) {
      if (u) {
        var N = h ? r : u(r, K.encoder, b, 'key', f);
        return [m(N) + '=' + m(u(w, K.encoder, b, 'value', f))];
      }
      return [m(r) + '=' + m(String(w))];
    }
    var U = [];
    if (typeof w == 'undefined') return U;
    var X;
    if (n === 'comma' && pe(w))
      h && u && (w = Je.maybeMap(w, u)),
        (X = [{ value: w.length > 0 ? w.join(',') || null : void 0 }]);
    else if (pe(s)) X = s;
    else {
      var te = Object.keys(w);
      X = i ? te.sort(i) : te;
    }
    for (var re = a && pe(w) && w.length === 1 ? r + '[]' : r, I = 0; I < X.length; ++I) {
      var R = X[I],
        Y = typeof R == 'object' && typeof R.value != 'undefined' ? R.value : w[R];
      if (!(l && Y === null)) {
        var ve = pe(w)
          ? typeof n == 'function'
            ? n(re, R)
            : re
          : re + (p ? '.' + R : '[' + R + ']');
        P.set(e, B);
        var Pe = xr();
        Pe.set(mt, P),
          Mr(
            U,
            t(
              Y,
              ve,
              n,
              a,
              o,
              l,
              n === 'comma' && h && pe(w) ? null : u,
              s,
              i,
              p,
              y,
              f,
              m,
              h,
              b,
              Pe,
            ),
          );
      }
    }
    return U;
  },
  ta = function (e) {
    if (!e) return K;
    if (e.encoder !== null && typeof e.encoder != 'undefined' && typeof e.encoder != 'function')
      throw new TypeError('Encoder has to be a function.');
    var r = e.charset || K.charset;
    if (typeof e.charset != 'undefined' && e.charset !== 'utf-8' && e.charset !== 'iso-8859-1')
      throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    var n = Ve.default;
    if (typeof e.format != 'undefined') {
      if (!Ko.call(Ve.formatters, e.format)) throw new TypeError('Unknown format option provided.');
      n = e.format;
    }
    var a = Ve.formatters[n],
      o = K.filter;
    return (
      (typeof e.filter == 'function' || pe(e.filter)) && (o = e.filter),
      {
        addQueryPrefix: typeof e.addQueryPrefix == 'boolean' ? e.addQueryPrefix : K.addQueryPrefix,
        allowDots: typeof e.allowDots == 'undefined' ? K.allowDots : !!e.allowDots,
        charset: r,
        charsetSentinel:
          typeof e.charsetSentinel == 'boolean' ? e.charsetSentinel : K.charsetSentinel,
        delimiter: typeof e.delimiter == 'undefined' ? K.delimiter : e.delimiter,
        encode: typeof e.encode == 'boolean' ? e.encode : K.encode,
        encoder: typeof e.encoder == 'function' ? e.encoder : K.encoder,
        encodeValuesOnly:
          typeof e.encodeValuesOnly == 'boolean' ? e.encodeValuesOnly : K.encodeValuesOnly,
        filter: o,
        format: n,
        formatter: a,
        serializeDate: typeof e.serializeDate == 'function' ? e.serializeDate : K.serializeDate,
        skipNulls: typeof e.skipNulls == 'boolean' ? e.skipNulls : K.skipNulls,
        sort: typeof e.sort == 'function' ? e.sort : null,
        strictNullHandling:
          typeof e.strictNullHandling == 'boolean' ? e.strictNullHandling : K.strictNullHandling,
      }
    );
  },
  ra = function (t, e) {
    var r = t,
      n = ta(e),
      a,
      o;
    typeof n.filter == 'function'
      ? ((o = n.filter), (r = o('', r)))
      : pe(n.filter) && ((o = n.filter), (a = o));
    var l = [];
    if (typeof r != 'object' || r === null) return '';
    var u;
    e && e.arrayFormat in ir
      ? (u = e.arrayFormat)
      : e && 'indices' in e
      ? (u = e.indices ? 'indices' : 'repeat')
      : (u = 'indices');
    var s = ir[u];
    if (e && 'commaRoundTrip' in e && typeof e.commaRoundTrip != 'boolean')
      throw new TypeError('`commaRoundTrip` must be a boolean, or absent');
    var i = s === 'comma' && e && e.commaRoundTrip;
    a || (a = Object.keys(r)), n.sort && a.sort(n.sort);
    for (var p = xr(), y = 0; y < a.length; ++y) {
      var f = a[y];
      (n.skipNulls && r[f] === null) ||
        Mr(
          l,
          ea(
            r[f],
            f,
            s,
            i,
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
    var m = l.join(n.delimiter),
      h = n.addQueryPrefix === !0 ? '?' : '';
    return (
      n.charsetSentinel &&
        (n.charset === 'iso-8859-1' ? (h += 'utf8=%26%2310003%3B&') : (h += 'utf8=%E2%9C%93&')),
      m.length > 0 ? h + m : ''
    );
  },
  Ie = Cr,
  At = Object.prototype.hasOwnProperty,
  na = Array.isArray,
  q = {
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
  oa = function (t) {
    return t.replace(/&#(\d+);/g, function (e, r) {
      return String.fromCharCode(parseInt(r, 10));
    });
  },
  Ir = function (t, e) {
    return t && typeof t == 'string' && e.comma && t.indexOf(',') > -1 ? t.split(',') : t;
  },
  aa = 'utf8=%26%2310003%3B',
  ia = 'utf8=%E2%9C%93',
  la = function (e, r) {
    var n = { __proto__: null },
      a = r.ignoreQueryPrefix ? e.replace(/^\?/, '') : e,
      o = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit,
      l = a.split(r.delimiter, o),
      u = -1,
      s,
      i = r.charset;
    if (r.charsetSentinel)
      for (s = 0; s < l.length; ++s)
        l[s].indexOf('utf8=') === 0 &&
          (l[s] === ia ? (i = 'utf-8') : l[s] === aa && (i = 'iso-8859-1'),
          (u = s),
          (s = l.length));
    for (s = 0; s < l.length; ++s)
      if (s !== u) {
        var p = l[s],
          y = p.indexOf(']='),
          f = y === -1 ? p.indexOf('=') : y + 1,
          m,
          h;
        f === -1
          ? ((m = r.decoder(p, q.decoder, i, 'key')), (h = r.strictNullHandling ? null : ''))
          : ((m = r.decoder(p.slice(0, f), q.decoder, i, 'key')),
            (h = Ie.maybeMap(Ir(p.slice(f + 1), r), function (b) {
              return r.decoder(b, q.decoder, i, 'value');
            }))),
          h && r.interpretNumericEntities && i === 'iso-8859-1' && (h = oa(h)),
          p.indexOf('[]=') > -1 && (h = na(h) ? [h] : h),
          At.call(n, m) ? (n[m] = Ie.combine(n[m], h)) : (n[m] = h);
      }
    return n;
  },
  sa = function (t, e, r, n) {
    for (var a = n ? e : Ir(e, r), o = t.length - 1; o >= 0; --o) {
      var l,
        u = t[o];
      if (u === '[]' && r.parseArrays) l = [].concat(a);
      else {
        l = r.plainObjects ? Object.create(null) : {};
        var s = u.charAt(0) === '[' && u.charAt(u.length - 1) === ']' ? u.slice(1, -1) : u,
          i = parseInt(s, 10);
        !r.parseArrays && s === ''
          ? (l = { 0: a })
          : !isNaN(i) && u !== s && String(i) === s && i >= 0 && r.parseArrays && i <= r.arrayLimit
          ? ((l = []), (l[i] = a))
          : s !== '__proto__' && (l[s] = a);
      }
      a = l;
    }
    return a;
  },
  ua = function (e, r, n, a) {
    if (e) {
      var o = n.allowDots ? e.replace(/\.([^.[]+)/g, '[$1]') : e,
        l = /(\[[^[\]]*])/,
        u = /(\[[^[\]]*])/g,
        s = n.depth > 0 && l.exec(o),
        i = s ? o.slice(0, s.index) : o,
        p = [];
      if (i) {
        if (!n.plainObjects && At.call(Object.prototype, i) && !n.allowPrototypes) return;
        p.push(i);
      }
      for (var y = 0; n.depth > 0 && (s = u.exec(o)) !== null && y < n.depth; ) {
        if (
          ((y += 1),
          !n.plainObjects && At.call(Object.prototype, s[1].slice(1, -1)) && !n.allowPrototypes)
        )
          return;
        p.push(s[1]);
      }
      return s && p.push('[' + o.slice(s.index) + ']'), sa(p, r, n, a);
    }
  },
  ca = function (e) {
    if (!e) return q;
    if (e.decoder !== null && e.decoder !== void 0 && typeof e.decoder != 'function')
      throw new TypeError('Decoder has to be a function.');
    if (typeof e.charset != 'undefined' && e.charset !== 'utf-8' && e.charset !== 'iso-8859-1')
      throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    var r = typeof e.charset == 'undefined' ? q.charset : e.charset;
    return {
      allowDots: typeof e.allowDots == 'undefined' ? q.allowDots : !!e.allowDots,
      allowPrototypes:
        typeof e.allowPrototypes == 'boolean' ? e.allowPrototypes : q.allowPrototypes,
      allowSparse: typeof e.allowSparse == 'boolean' ? e.allowSparse : q.allowSparse,
      arrayLimit: typeof e.arrayLimit == 'number' ? e.arrayLimit : q.arrayLimit,
      charset: r,
      charsetSentinel:
        typeof e.charsetSentinel == 'boolean' ? e.charsetSentinel : q.charsetSentinel,
      comma: typeof e.comma == 'boolean' ? e.comma : q.comma,
      decoder: typeof e.decoder == 'function' ? e.decoder : q.decoder,
      delimiter:
        typeof e.delimiter == 'string' || Ie.isRegExp(e.delimiter) ? e.delimiter : q.delimiter,
      depth: typeof e.depth == 'number' || e.depth === !1 ? +e.depth : q.depth,
      ignoreQueryPrefix: e.ignoreQueryPrefix === !0,
      interpretNumericEntities:
        typeof e.interpretNumericEntities == 'boolean'
          ? e.interpretNumericEntities
          : q.interpretNumericEntities,
      parameterLimit: typeof e.parameterLimit == 'number' ? e.parameterLimit : q.parameterLimit,
      parseArrays: e.parseArrays !== !1,
      plainObjects: typeof e.plainObjects == 'boolean' ? e.plainObjects : q.plainObjects,
      strictNullHandling:
        typeof e.strictNullHandling == 'boolean' ? e.strictNullHandling : q.strictNullHandling,
    };
  },
  fa = function (t, e) {
    var r = ca(e);
    if (t === '' || t === null || typeof t == 'undefined')
      return r.plainObjects ? Object.create(null) : {};
    for (
      var n = typeof t == 'string' ? la(t, r) : t,
        a = r.plainObjects ? Object.create(null) : {},
        o = Object.keys(n),
        l = 0;
      l < o.length;
      ++l
    ) {
      var u = o[l],
        s = ua(u, n[u], r, typeof t == 'string');
      a = Ie.merge(a, s, r);
    }
    return r.allowSparse === !0 ? a : Ie.compact(a);
  },
  pa = ra,
  da = fa,
  ya = Tt,
  va = { formats: ya, parse: da, stringify: pa };
const ma = fr(va),
  Fr = (t) => {
    const e = Le(),
      r = Ue(),
      n = (s) =>
        `${s.path}${s.query && Object.keys(s.query).length ? '?' + ma.stringify(s.query) : ''}`,
      a = (s) => {
        const { path: i, name: p, meta: y } = s,
          f = { path: i, meta: y, name: p };
        ne().handleMultiTabs('add', f);
      },
      o = (s, i) => {
        const p = t.value.findIndex((f) => n(f) === n(s)),
          y = t.value.filter((f, m) =>
            (f.path !== s.path && i === 'other') || (m < p && i === 'left')
              ? !0
              : m > p && i === 'right',
          );
        if (y.find((f) => f.path === e.path)) {
          const { path: f, query: m } = t.value[p];
          r.push({ path: f, query: m });
        }
        y.forEach((f) => {
          ne().cacheOperate({ mode: 'delete', name: f.name || '' }),
            ne().handleMultiTabs('delete', f);
        });
      },
      l = (s) => {
        const i = t.value.findIndex((m) => n(m) === n(s)),
          p = t.value.length;
        let y, f;
        t.value[i].name === e.name &&
          (i === p - 1 ? (y = t.value[i - 1]) : (y = t.value[p - 1]),
          (f = { path: y.path, query: y.query }),
          r.push(f)),
          ne().cacheOperate({ mode: 'delete', name: t.value[i].name || '' }),
          ne().handleMultiTabs('delete', t.value[i]);
      };
    function u(s) {
      const i = 'refresh-button';
      bn(document.querySelector('.rotate'), i);
      const { path: p, query: y } = g(s || e);
      r.replace({ path: '/redirect' + p, query: y }),
        setTimeout(() => {
          _n(document.querySelector('.rotate'), i);
        }, 600);
    }
    return { setTabPaneKey: n, addRouteTabs: a, onFresh: u, closeTabsRoute: o, removeTab: l };
  },
  ha = (t) => {
    const { onFresh: e, removeTab: r, closeTabsRoute: n, setTabPaneKey: a } = Fr(t),
      o = Xr([
        { text: '刷新', disabled: !1, code: 'refresh' },
        { text: '关闭', disabled: !1, code: 'close' },
        { text: '关闭其他标签', disabled: !1, code: 'closeOther' },
        { text: '关闭左侧其他标签', disabled: !1, code: 'closeLeftOther' },
        { text: '关闭右侧其他标签', disabled: !1, code: 'closeRightOther' },
      ]),
      l = W(!1),
      u = W(0),
      s = W(0),
      i = W(null),
      p = (P, w) => {
        P.forEach((C) => {
          o[C].disabled = w;
        });
      },
      y = (P) => {
        p([0, 1, 2, 3, 4], !1);
        const w = t.value.findIndex((B) => a(B) === a(P)),
          C = t.value.length;
        w === 0 && C > 1
          ? p([3], !0)
          : w === C - 1 && C > 1
          ? p([4], !0)
          : C === 1 && p([1, 2, 3, 4], !0);
      },
      f = (P, w) => {
        const C = t.value.find((B) => a(B) === a(P));
        C &&
          (h(),
          y(C),
          (i.value = C),
          w &&
            setTimeout(() => {
              (s.value = w.clientX), (u.value = w.clientY), (l.value = !0);
            }, 100));
      },
      m = be(() => ({ left: s.value + 'px', top: u.value + 'px' })),
      h = () => {
        l.value = !1;
      };
    return (
      _e(
        () => l.value,
        (P) => {
          P
            ? document.body.addEventListener('click', h)
            : document.body.removeEventListener('click', h);
        },
      ),
      {
        visible: l,
        rightClickTags: o,
        rightViewStyle: m,
        contextmenu: f,
        rightViewChange: (P) => {
          if (i.value) {
            switch (P.code) {
              case 'refresh': {
                e(i.value);
                break;
              }
              case 'close': {
                r(i.value);
                break;
              }
              case 'closeOther': {
                n(i.value, 'other');
                break;
              }
              case 'closeLeftOther': {
                n(i.value, 'left');
                break;
              }
              case 'closeRightOther': {
                n(i.value, 'right');
                break;
              }
            }
            y(i.value);
          }
        },
      }
    );
  };
function ga(t) {
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
const kr = ga(),
  ba = { key: 0, class: 'main-container-tabs' },
  _a = ['onClick', 'onContextmenu'],
  Sa = ['onClick'],
  wa = { key: 0, class: 'right-button' },
  Aa = J({
    __name: 'index',
    setup(t) {
      const { appConfig: e, setAppConfigMode: r } = ie(),
        n = Le(),
        a = Ue(),
        o = be(() => ne().multiTabs),
        {
          visible: l,
          rightClickTags: u,
          rightViewStyle: s,
          contextmenu: i,
          rightViewChange: p,
        } = ha(o),
        { setTabPaneKey: y, addRouteTabs: f, onFresh: m, removeTab: h } = Fr(o),
        b = W(y(n));
      _e(
        () => [n.path],
        () =>
          Lt(this, null, function* () {
            b.value = y(n);
          }),
      ),
        en(() => {
          kr.on('siteBarChange', ({ routeRaw: M }) => {
            f(M);
          });
        });
      const P = (M) => {
          const N = o.value.find((U) => y(U) === M);
          N && h(N);
        },
        w = (M) => {
          a.push({ path: M.path, query: M.query });
        },
        C = () => {
          const { hideNavbart: M, hideSidebar: N } = e.value;
          r(M && N ? { hideNavbart: !1, hideSidebar: !1 } : { hideNavbart: !0, hideSidebar: !0 });
        },
        B = W(),
        le = (M, N) => {
          var U;
          (U = B.value) == null || U.handleClose(), i(M, N);
        };
      return (M, N) => {
        const U = k('el-tab-pane'),
          X = k('el-tabs'),
          te = k('el-dropdown-item'),
          re = k('el-dropdown-menu');
        return g(e).hideTabs
          ? ee('', !0)
          : (_(),
            E('div', ba, [
              S(
                X,
                {
                  modelValue: b.value,
                  'onUpdate:modelValue': N[0] || (N[0] = (I) => (b.value = I)),
                  type: 'card',
                  class: 'tabs-view',
                  closable: o.value.length > 1,
                  onTabRemove: P,
                },
                {
                  default: O(() => [
                    (_(!0),
                    E(
                      oe,
                      null,
                      ce(
                        o.value,
                        (I) => (
                          _(),
                          V(
                            U,
                            { key: g(y)(I), name: g(y)(I) },
                            {
                              label: O(() => [
                                A(
                                  'div',
                                  {
                                    class: 'tabs-view-item',
                                    onClick: (R) => w(I),
                                    onContextmenu: pr((R) => le(I, R), ['prevent']),
                                  },
                                  null,
                                  40,
                                  _a,
                                ),
                                A('span', null, H(g(ht)(I.meta.title)), 1),
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
                ur,
                { name: 'el-zoom-in-top' },
                {
                  default: O(() => [
                    Qe(
                      A(
                        'ul',
                        { class: 'right-view', style: dr(g(s)) },
                        [
                          (_(!0),
                          E(
                            oe,
                            null,
                            ce(
                              g(u),
                              (I, R) => (
                                _(),
                                E(
                                  'li',
                                  {
                                    key: R,
                                    class: Fe(['right-view-item cursor', { disabled: I.disabled }]),
                                    onClick: (Y) => g(p)(I),
                                  },
                                  [A('span', null, H(I.text), 1)],
                                  10,
                                  Sa,
                                )
                              ),
                            ),
                            128,
                          )),
                        ],
                        4,
                      ),
                      [[Ke, g(l)]],
                    ),
                  ]),
                  _: 1,
                },
              ),
              g(e).hideTabsConfig
                ? ee('', !0)
                : (_(),
                  E('div', wa, [
                    A('ul', null, [
                      A('li', { class: 'cursor', onClick: N[1] || (N[1] = (I) => g(m)()) }, [
                        S(de, { class: 'rotate', name: 'iEL-refresh' }),
                      ]),
                      A('li', null, [
                        S(
                          g(tn),
                          {
                            ref_key: 'elDropdownRef',
                            ref: B,
                            trigger: 'click',
                            placement: 'bottom-end',
                            onVisibleChange: N[2] || (N[2] = (I) => I && g(i)(g(n))),
                          },
                          {
                            dropdown: O(() => [
                              S(re, null, {
                                default: O(() => [
                                  (_(!0),
                                  E(
                                    oe,
                                    null,
                                    ce(
                                      g(u),
                                      (I, R) => (
                                        _(),
                                        V(
                                          te,
                                          {
                                            key: R,
                                            command: { key: R, item: I },
                                            disabled: I.disabled,
                                            onClick: (Y) => g(p)(I),
                                          },
                                          { default: O(() => [Re(H(I.text), 1)]), _: 2 },
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
                              S(de, { class: 'action-item cursor', name: 'iEL-arrow-down' }),
                            ]),
                            _: 1,
                          },
                          512,
                        ),
                      ]),
                      A('li', { class: 'cursor', onClick: C }, [
                        S(de, { name: 'full_screen_page' }),
                      ]),
                    ]),
                  ])),
            ]));
      };
    },
  });
const $a = ye(Aa, [['__scopeId', 'data-v-e302b7ad']]),
  Nr = () => {
    const t = Ue().options.routes.find((n) => n.path === '/') || [],
      e = rn((n) => {
        const a = rt(n, t.children || []);
        if (a) {
          if (a.redirect && a.children && a.children.length) {
            e(a.children[0].path);
            return;
          }
          if (Ze(a.path)) return;
          kr.emit('siteBarChange', { routeRaw: a });
        }
      }, 100);
    return {
      selectMenu: e,
      logout: () => {
        ne().handleRemoveMultiTabs();
      },
    };
  };
var ze = { exports: {} },
  Rr = {},
  Pa = function (e) {
    return (
      e &&
      typeof e == 'object' &&
      typeof e.copy == 'function' &&
      typeof e.fill == 'function' &&
      typeof e.readUInt8 == 'function'
    );
  },
  $t = { exports: {} };
typeof Object.create == 'function'
  ? ($t.exports = function (e, r) {
      (e.super_ = r),
        (e.prototype = Object.create(r.prototype, {
          constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
        }));
    })
  : ($t.exports = function (e, r) {
      e.super_ = r;
      var n = function () {};
      (n.prototype = r.prototype), (e.prototype = new n()), (e.prototype.constructor = e);
    });
var Oa = $t.exports;
(function (t) {
  var e = /%[sdj%]/g;
  (t.format = function (c) {
    if (!B(c)) {
      for (var d = [], v = 0; v < arguments.length; v++) d.push(a(arguments[v]));
      return d.join(' ');
    }
    for (
      var v = 1,
        F = arguments,
        Q = F.length,
        T = String(c).replace(e, function (D) {
          if (D === '%%') return '%';
          if (v >= Q) return D;
          switch (D) {
            case '%s':
              return String(F[v++]);
            case '%d':
              return Number(F[v++]);
            case '%j':
              try {
                return JSON.stringify(F[v++]);
              } catch (j) {
                return '[Circular]';
              }
            default:
              return D;
          }
        }),
        x = F[v];
      v < Q;
      x = F[++v]
    )
      P(x) || !U(x) ? (T += ' ' + x) : (T += ' ' + a(x));
    return T;
  }),
    (t.deprecate = function (c, d) {
      if (M(nn.process))
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
    if ((M(n) && (n = {}.NODE_DEBUG || ''), (c = c.toUpperCase()), !r[c]))
      if (new RegExp('\\b' + c + '\\b', 'i').test(n)) {
        var d = process.pid;
        r[c] = function () {
          var v = t.format.apply(t, arguments);
          console.error('%s %d: %s', c, d, v);
        };
      } else r[c] = function () {};
    return r[c];
  };
  function a(c, d) {
    var v = { seen: [], stylize: l };
    return (
      arguments.length >= 3 && (v.depth = arguments[2]),
      arguments.length >= 4 && (v.colors = arguments[3]),
      b(d) ? (v.showHidden = d) : d && t._extend(v, d),
      M(v.showHidden) && (v.showHidden = !1),
      M(v.depth) && (v.depth = 2),
      M(v.colors) && (v.colors = !1),
      M(v.customInspect) && (v.customInspect = !0),
      v.colors && (v.stylize = o),
      s(v, c, v.depth)
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
    var v = a.styles[d];
    return v ? '\x1B[' + a.colors[v][0] + 'm' + c + '\x1B[' + a.colors[v][1] + 'm' : c;
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
  function s(c, d, v) {
    if (
      c.customInspect &&
      d &&
      re(d.inspect) &&
      d.inspect !== t.inspect &&
      !(d.constructor && d.constructor.prototype === d)
    ) {
      var F = d.inspect(v, c);
      return B(F) || (F = s(c, F, v)), F;
    }
    var Q = i(c, d);
    if (Q) return Q;
    var T = Object.keys(d),
      x = u(T);
    if (
      (c.showHidden && (T = Object.getOwnPropertyNames(d)),
      te(d) && (T.indexOf('message') >= 0 || T.indexOf('description') >= 0))
    )
      return p(d);
    if (T.length === 0) {
      if (re(d)) {
        var D = d.name ? ': ' + d.name : '';
        return c.stylize('[Function' + D + ']', 'special');
      }
      if (N(d)) return c.stylize(RegExp.prototype.toString.call(d), 'regexp');
      if (X(d)) return c.stylize(Date.prototype.toString.call(d), 'date');
      if (te(d)) return p(d);
    }
    var j = '',
      me = !1,
      je = ['{', '}'];
    if ((h(d) && ((me = !0), (je = ['[', ']'])), re(d))) {
      var jr = d.name ? ': ' + d.name : '';
      j = ' [Function' + jr + ']';
    }
    if (
      (N(d) && (j = ' ' + RegExp.prototype.toString.call(d)),
      X(d) && (j = ' ' + Date.prototype.toUTCString.call(d)),
      te(d) && (j = ' ' + p(d)),
      T.length === 0 && (!me || d.length == 0))
    )
      return je[0] + j + je[1];
    if (v < 0)
      return N(d)
        ? c.stylize(RegExp.prototype.toString.call(d), 'regexp')
        : c.stylize('[Object]', 'special');
    c.seen.push(d);
    var it;
    return (
      me
        ? (it = y(c, d, v, x, T))
        : (it = T.map(function (qr) {
            return f(c, d, v, x, qr, me);
          })),
      c.seen.pop(),
      m(it, j, je)
    );
  }
  function i(c, d) {
    if (M(d)) return c.stylize('undefined', 'undefined');
    if (B(d)) {
      var v =
        "'" +
        JSON.stringify(d).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') +
        "'";
      return c.stylize(v, 'string');
    }
    if (C(d)) return c.stylize('' + d, 'number');
    if (b(d)) return c.stylize('' + d, 'boolean');
    if (P(d)) return c.stylize('null', 'null');
  }
  function p(c) {
    return '[' + Error.prototype.toString.call(c) + ']';
  }
  function y(c, d, v, F, Q) {
    for (var T = [], x = 0, D = d.length; x < D; ++x)
      fe(d, String(x)) ? T.push(f(c, d, v, F, String(x), !0)) : T.push('');
    return (
      Q.forEach(function (j) {
        j.match(/^\d+$/) || T.push(f(c, d, v, F, j, !0));
      }),
      T
    );
  }
  function f(c, d, v, F, Q, T) {
    var x, D, j;
    if (
      ((j = Object.getOwnPropertyDescriptor(d, Q) || { value: d[Q] }),
      j.get
        ? j.set
          ? (D = c.stylize('[Getter/Setter]', 'special'))
          : (D = c.stylize('[Getter]', 'special'))
        : j.set && (D = c.stylize('[Setter]', 'special')),
      fe(F, Q) || (x = '[' + Q + ']'),
      D ||
        (c.seen.indexOf(j.value) < 0
          ? (P(v) ? (D = s(c, j.value, null)) : (D = s(c, j.value, v - 1)),
            D.indexOf(`
`) > -1 &&
              (T
                ? (D = D.split(
                    `
`,
                  )
                    .map(function (me) {
                      return '  ' + me;
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
                    ).map(function (me) {
                      return '   ' + me;
                    }).join(`
`))))
          : (D = c.stylize('[Circular]', 'special'))),
      M(x))
    ) {
      if (T && Q.match(/^\d+$/)) return D;
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
  function m(c, d, v) {
    var F = c.reduce(function (Q, T) {
      return (
        T.indexOf(`
`) >= 0,
        Q + T.replace(/\u001b\[\d\d?m/g, '').length + 1
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
  function h(c) {
    return Array.isArray(c);
  }
  t.isArray = h;
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
  function C(c) {
    return typeof c == 'number';
  }
  t.isNumber = C;
  function B(c) {
    return typeof c == 'string';
  }
  t.isString = B;
  function le(c) {
    return typeof c == 'symbol';
  }
  t.isSymbol = le;
  function M(c) {
    return c === void 0;
  }
  t.isUndefined = M;
  function N(c) {
    return U(c) && R(c) === '[object RegExp]';
  }
  t.isRegExp = N;
  function U(c) {
    return typeof c == 'object' && c !== null;
  }
  t.isObject = U;
  function X(c) {
    return U(c) && R(c) === '[object Date]';
  }
  t.isDate = X;
  function te(c) {
    return U(c) && (R(c) === '[object Error]' || c instanceof Error);
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
  (t.isPrimitive = I), (t.isBuffer = Pa);
  function R(c) {
    return Object.prototype.toString.call(c);
  }
  function Y(c) {
    return c < 10 ? '0' + c.toString(10) : c.toString(10);
  }
  var ve = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  function Pe() {
    var c = new Date(),
      d = [Y(c.getHours()), Y(c.getMinutes()), Y(c.getSeconds())].join(':');
    return [c.getDate(), ve[c.getMonth()], d].join(' ');
  }
  (t.log = function () {
    console.log('%s - %s', Pe(), t.format.apply(t, arguments));
  }),
    (t.inherits = Oa),
    (t._extend = function (c, d) {
      if (!d || !U(d)) return c;
      for (var v = Object.keys(d), F = v.length; F--; ) c[v[F]] = d[v[F]];
      return c;
    });
  function fe(c, d) {
    return Object.prototype.hasOwnProperty.call(c, d);
  }
})(Rr);
var Ea = process.platform === 'win32',
  ae = Rr;
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
function Be(t) {
  for (var e = t.length - 1, r = 0; r <= e && !t[r]; r++);
  for (var n = e; n >= 0 && !t[n]; n--);
  return r === 0 && n === e ? t : r > n ? [] : t.slice(r, n + 1);
}
var Tr = /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/,
  Ca = /^([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/,
  z = {};
function ot(t) {
  var e = Tr.exec(t),
    r = (e[1] || '') + (e[2] || ''),
    n = e[3] || '',
    a = Ca.exec(n),
    o = a[1],
    l = a[2],
    u = a[3];
  return [r, o, l, u];
}
function Dt(t) {
  var e = Tr.exec(t),
    r = e[1] || '',
    n = !!r && r[1] !== ':';
  return { device: r, isUnc: n, isAbsolute: n || !!e[2], tail: e[3] };
}
function Dr(t) {
  return '\\\\' + t.replace(/^[\\\/]+/, '').replace(/[\\\/]+/g, '\\');
}
z.resolve = function () {
  for (var t = '', e = '', r = !1, n = arguments.length - 1; n >= -1; n--) {
    var a;
    if (
      (n >= 0
        ? (a = arguments[n])
        : t
        ? ((a = process.env['=' + t]),
          (!a || a.substr(0, 3).toLowerCase() !== t.toLowerCase() + '\\') && (a = t + '\\'))
        : (a = process.cwd()),
      ae.isString(a))
    ) {
      if (!a) continue;
    } else throw new TypeError('Arguments to path.resolve must be strings');
    var o = Dt(a),
      l = o.device,
      u = o.isUnc,
      s = o.isAbsolute,
      i = o.tail;
    if (
      !(l && t && l.toLowerCase() !== t.toLowerCase()) &&
      (t || (t = l), r || ((e = i + '\\' + e), (r = s)), t && r)
    )
      break;
  }
  return (
    u && (t = Dr(t)), (e = nt(e.split(/[\\\/]+/), !r).join('\\')), t + (r ? '\\' : '') + e || '.'
  );
};
z.normalize = function (t) {
  var e = Dt(t),
    r = e.device,
    n = e.isUnc,
    a = e.isAbsolute,
    o = e.tail,
    l = /[\\\/]$/.test(o);
  return (
    (o = nt(o.split(/[\\\/]+/), !a).join('\\')),
    !o && !a && (o = '.'),
    o && l && (o += '\\'),
    n && (r = Dr(r)),
    r + (a ? '\\' : '') + o
  );
};
z.isAbsolute = function (t) {
  return Dt(t).isAbsolute;
};
z.join = function () {
  for (var t = [], e = 0; e < arguments.length; e++) {
    var r = arguments[e];
    if (!ae.isString(r)) throw new TypeError('Arguments to path.join must be strings');
    r && t.push(r);
  }
  var n = t.join('\\');
  return /^[\\\/]{2}[^\\\/]/.test(t[0]) || (n = n.replace(/^[\\\/]{2,}/, '\\')), z.normalize(n);
};
z.relative = function (t, e) {
  (t = z.resolve(t)), (e = z.resolve(e));
  for (
    var r = t.toLowerCase(),
      n = e.toLowerCase(),
      a = Be(e.split('\\')),
      o = Be(r.split('\\')),
      l = Be(n.split('\\')),
      u = Math.min(o.length, l.length),
      s = u,
      i = 0;
    i < u;
    i++
  )
    if (o[i] !== l[i]) {
      s = i;
      break;
    }
  if (s == 0) return e;
  for (var p = [], i = s; i < o.length; i++) p.push('..');
  return (p = p.concat(a.slice(s))), p.join('\\');
};
z._makeLong = function (t) {
  if (!ae.isString(t)) return t;
  if (!t) return '';
  var e = z.resolve(t);
  return /^[a-zA-Z]\:\\/.test(e)
    ? '\\\\?\\' + e
    : /^\\\\[^?.]/.test(e)
    ? '\\\\?\\UNC\\' + e.substring(2)
    : t;
};
z.dirname = function (t) {
  var e = ot(t),
    r = e[0],
    n = e[1];
  return !r && !n ? '.' : (n && (n = n.substr(0, n.length - 1)), r + n);
};
z.basename = function (t, e) {
  var r = ot(t)[2];
  return e && r.substr(-1 * e.length) === e && (r = r.substr(0, r.length - e.length)), r;
};
z.extname = function (t) {
  return ot(t)[3];
};
z.format = function (t) {
  if (!ae.isObject(t))
    throw new TypeError("Parameter 'pathObject' must be an object, not " + typeof t);
  var e = t.root || '';
  if (!ae.isString(e))
    throw new TypeError("'pathObject.root' must be a string or undefined, not " + typeof t.root);
  var r = t.dir,
    n = t.base || '';
  return r ? (r[r.length - 1] === z.sep ? r + n : r + z.sep + n) : n;
};
z.parse = function (t) {
  if (!ae.isString(t))
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
z.sep = '\\';
z.delimiter = ';';
var xa = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,
  L = {};
function at(t) {
  return xa.exec(t).slice(1);
}
L.resolve = function () {
  for (var t = '', e = !1, r = arguments.length - 1; r >= -1 && !e; r--) {
    var n = r >= 0 ? arguments[r] : process.cwd();
    if (ae.isString(n)) {
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
    if (!ae.isString(r)) throw new TypeError('Arguments to path.join must be strings');
    r && (t ? (t += '/' + r) : (t += r));
  }
  return L.normalize(t);
};
L.relative = function (t, e) {
  (t = L.resolve(t).substr(1)), (e = L.resolve(e).substr(1));
  for (
    var r = Be(t.split('/')), n = Be(e.split('/')), a = Math.min(r.length, n.length), o = a, l = 0;
    l < a;
    l++
  )
    if (r[l] !== n[l]) {
      o = l;
      break;
    }
  for (var u = [], l = o; l < r.length; l++) u.push('..');
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
  if (!ae.isObject(t))
    throw new TypeError("Parameter 'pathObject' must be an object, not " + typeof t);
  var e = t.root || '';
  if (!ae.isString(e))
    throw new TypeError("'pathObject.root' must be a string or undefined, not " + typeof t.root);
  var r = t.dir ? t.dir + L.sep : '',
    n = t.base || '';
  return r + n;
};
L.parse = function (t) {
  if (!ae.isString(t))
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
Ea ? (ze.exports = z) : (ze.exports = L);
ze.exports.posix = L;
ze.exports.win32 = z;
var Ma = ze.exports;
const Ia = fr(Ma),
  Fa = { key: 0 },
  ka = J({
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
          oe,
          null,
          [
            S(de, { 'class-name': t.className, name: t.icon }, null, 8, ['class-name', 'name']),
            t.title ? (_(), E('span', Fa, H(e.$t(t.title)), 1)) : ee('', !0),
          ],
          64,
        )
      );
    },
  });
const Pt = ye(ka, [['__scopeId', 'data-v-eb7cc837']]),
  Vr = J({
    __name: 'Link',
    props: { to: { type: String, required: !0 } },
    setup(t) {
      const e = t,
        r = be(() => Ze(e.to)),
        n = be(() => (r.value ? 'a' : 'router-link')),
        a = (o) => (r.value ? { href: o, target: '_blank', rel: 'noopener' } : { to: o });
      return (o, l) => (
        _(),
        V(cr(n.value), an(ln(a(t.to))), { default: O(() => [on(o.$slots, 'default')]), _: 3 }, 16)
      );
    },
  }),
  Na = { key: 0 },
  Ra = J({
    __name: 'SidebarItem',
    props: {
      item: { type: Object, default: () => {} },
      isNest: { type: Boolean, default: !1 },
      basePath: { type: String, default: '' },
    },
    setup(t) {
      const e = t,
        r = W({}),
        n = (o = [], l) => {
          const u = o.filter((s) => (s.hidden ? !1 : ((r.value = s), !0)));
          return u.length === 1
            ? !0
            : u.length === 0
            ? ((r.value = zt(Ut({}, l), { path: '', noShowingChildren: !0 })), !0)
            : !1;
        },
        a = (o) => (Ze(o) ? o : Ze(e.basePath) ? e.basePath : Ia.resolve(e.basePath, o));
      return (o, l) => {
        const u = k('el-menu-item'),
          s = k('sidebar-item', !0),
          i = k('el-sub-menu');
        return t.item.hidden
          ? ee('', !0)
          : (_(),
            E('div', Na, [
              n(t.item.children, t.item) &&
              (!r.value.children || r.value.noShowingChildren) &&
              !t.item.alwaysShow
                ? (_(),
                  E(
                    oe,
                    { key: 0 },
                    [
                      r.value.meta
                        ? (_(),
                          V(
                            Vr,
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
                                        Pt,
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
                    i,
                    { key: 1, index: a(t.item.path), teleported: '' },
                    {
                      title: O(() => [
                        t.item.meta
                          ? (_(),
                            V(
                              Pt,
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
                          oe,
                          null,
                          ce(
                            t.item.children,
                            (p) => (
                              _(),
                              V(
                                s,
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
  Br = J({
    __name: 'index',
    props: { mode: { type: String, default: 'vertical' } },
    setup(t) {
      const { selectMenu: e } = Nr(),
        r = ne(),
        n = Le(),
        { appConfig: a } = ie();
      let o = W(r.wholeMenus);
      const l = be(() =>
        a.value.sidebarMode === 'blend' && !a.value.drawerSidebar ? o.value : r.wholeMenus,
      );
      function u(i) {
        const p = Ot(i, r.wholeMenus),
          y = rt(p[0], r.wholeMenus);
        y && (y.children && !y.children[0].hidden ? (o.value = y.children) : (o.value = [y]));
      }
      u(n.path),
        _e(
          () => [n.path, a.value.sidebarMode, () => r.wholeMenus],
          ([i], [p]) => {
            a.value.sidebarMode === 'blend' && u(n.path), i !== p && e(n.path);
          },
        ),
        yr(() => {
          e(n.path);
        });
      const s = be(() => {
        const { meta: i, path: p } = n;
        return i.activeMenu ? i.activeMenu : p;
      });
      return (i, p) => {
        const y = k('el-menu'),
          f = k('el-scrollbar');
        return (
          _(),
          V(
            f,
            { 'wrap-class': 'scrollbar-wrapper' },
            {
              default: O(() => [
                S(
                  y,
                  {
                    'default-active': s.value,
                    'unique-opened': !0,
                    collapse: g(a).sidebarMode === 'horizontal' ? !1 : g(a).collapseMenu,
                    mode: t.mode,
                    onSelect: p[0] || (p[0] = (m) => g(e)(m)),
                  },
                  {
                    default: O(() => [
                      (_(!0),
                      E(
                        oe,
                        null,
                        ce(
                          l.value,
                          (m) => (
                            _(),
                            V(
                              Ra,
                              { key: m.path, item: m, 'is-nest': !1, 'base-path': m.path },
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
  Ta = J({
    __name: 'MinSidebar',
    setup(t) {
      const e = Le(),
        { selectMenu: r } = Nr(),
        n = (o) => {
          let l = o.path;
          return (
            o.children && o.children.length && !o.children[0].hidden && (l = o.children[0].path), l
          );
        },
        a = be(() => {
          const { path: o } = e,
            l = ne().wholeMenus,
            u = Ot(o, l)[0],
            s = rt(u, l);
          return s != null && s.children && s.children.length && !s.children[0].hidden
            ? s.children[0].path
            : o;
        });
      return (o, l) => {
        const u = k('el-menu-item'),
          s = k('el-menu');
        return (
          _(),
          V(
            s,
            {
              ref: 'menu',
              'default-active': a.value,
              class: 'horizontal-header-menu',
              mode: 'horizontal',
              onSelect: l[0] || (l[0] = (i) => g(r)(i)),
            },
            {
              default: O(() => [
                (_(!0),
                E(
                  oe,
                  null,
                  ce(
                    g(ne)().wholeMenus,
                    (i) => (
                      _(),
                      V(
                        Vr,
                        { key: i.path, to: n(i) },
                        {
                          default: O(() => [
                            S(
                              u,
                              { index: n(i) },
                              {
                                default: O(() => {
                                  var p;
                                  return [
                                    S(
                                      Pt,
                                      {
                                        'class-name': 'menu-item-svg',
                                        icon: i.meta && i.meta.icon,
                                        title: (p = i.meta) == null ? void 0 : p.title,
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
  Ur = (t) => (Et('data-v-43e28501'), (t = t()), Ct(), t),
  Da = { class: 'color-list' },
  Va = ['onClick'],
  Ba = { class: 'options' },
  Ua = { class: 'options' },
  za = Ur(() => A('span', null, '灰色模式', -1)),
  La = { class: 'options' },
  Wa = Ur(() => A('span', null, '色弱模式', -1)),
  ja = J({
    __name: 'index',
    setup(t) {
      const { appConfig: e, setAppConfigMode: r } = ie(),
        { primaryColor: n, greyMode: a, colorWeaknessMode: o } = e.value,
        l = W(n || '#409eff'),
        u = ['#722ed1', '#eb2f96', '#52c41a', '#13c2c2', '#fadb14', '#fa541c', '#f5222d'];
      _e([l], () => {
        r({ primaryColor: l.value }), sn(l.value, e.value.themeMode);
      });
      const s = W(a || !1),
        i = W(o || !1),
        p = (y, f) => {
          un(f, y);
          const m = {};
          f === 'html-grey' ? (m.greyMode = y) : (m.colorWeaknessMode = y), r(m);
        };
      return (y, f) => {
        const m = k('el-color-picker'),
          h = k('el-switch');
        return (
          _(),
          E('div', null, [
            A('div', Da, [
              (_(),
              E(
                oe,
                null,
                ce(u, (b) =>
                  A(
                    'div',
                    {
                      key: b,
                      class: 'cursor color-list-item',
                      style: dr({ backgroundColor: b }),
                      onClick: () => (l.value = b),
                    },
                    [
                      b === l.value
                        ? (_(), V(de, { key: 0, class: 'icon', name: 'iEL-select' }))
                        : ee('', !0),
                    ],
                    12,
                    Va,
                  ),
                ),
                64,
              )),
            ]),
            A('div', Ba, [
              A('span', null, H(y.$t('layout.customTheme')), 1),
              S(
                m,
                {
                  modelValue: l.value,
                  'onUpdate:modelValue': f[0] || (f[0] = (b) => (l.value = b)),
                },
                null,
                8,
                ['modelValue'],
              ),
            ]),
            A('div', Ua, [
              za,
              S(
                h,
                {
                  modelValue: s.value,
                  'onUpdate:modelValue': f[1] || (f[1] = (b) => (s.value = b)),
                  onChange: f[2] || (f[2] = (b) => p(b, 'html-grey')),
                },
                null,
                8,
                ['modelValue'],
              ),
            ]),
            A('div', La, [
              Wa,
              S(
                h,
                {
                  modelValue: i.value,
                  'onUpdate:modelValue': f[3] || (f[3] = (b) => (i.value = b)),
                  onChange: f[4] || (f[4] = (b) => p(b, 'html-weakness')),
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
const qa = ye(ja, [['__scopeId', 'data-v-43e28501']]),
  Ga = { class: 'options' },
  Ha = { class: 'options' },
  Ja = { class: 'options' },
  Qa = { class: 'options' },
  Ka = { class: 'options' },
  Za = { class: 'options' },
  Ya = J({
    __name: 'index',
    setup(t) {
      const { appConfig: e, setAppConfigMode: r } = ie(),
        { persistent: n } = ne(),
        a = W(e.value.labelPersistent),
        o = (u) => {
          u ? n() : vr.removeStorage('multiTabsList'), r({ labelPersistent: u });
        },
        l = () => {
          r({});
        };
      return (u, s) => {
        const i = k('el-switch'),
          p = k('el-option'),
          y = k('el-select');
        return (
          _(),
          E('div', null, [
            A('div', Ga, [
              A('span', null, H(u.$t('layout.hideSidebar')), 1),
              S(
                i,
                {
                  modelValue: g(e).hideSidebar,
                  'onUpdate:modelValue': s[0] || (s[0] = (f) => (g(e).hideSidebar = f)),
                  onChange: l,
                },
                null,
                8,
                ['modelValue'],
              ),
            ]),
            A('div', Ha, [
              A('span', null, H(u.$t('layout.hideNavBart')), 1),
              S(
                i,
                {
                  modelValue: g(e).hideNavbart,
                  'onUpdate:modelValue': s[1] || (s[1] = (f) => (g(e).hideNavbart = f)),
                  onChange: l,
                },
                null,
                8,
                ['modelValue'],
              ),
            ]),
            A('div', Ja, [
              A('span', null, H(u.$t('layout.hideTabs')), 1),
              S(
                i,
                {
                  modelValue: g(e).hideTabs,
                  'onUpdate:modelValue': s[2] || (s[2] = (f) => (g(e).hideTabs = f)),
                  onChange: l,
                },
                null,
                8,
                ['modelValue'],
              ),
            ]),
            A('div', Qa, [
              A('span', null, H(u.$t('layout.hideTabsConfig')), 1),
              S(
                i,
                {
                  modelValue: g(e).hideTabsConfig,
                  'onUpdate:modelValue': s[3] || (s[3] = (f) => (g(e).hideTabsConfig = f)),
                  onChange: l,
                },
                null,
                8,
                ['modelValue'],
              ),
            ]),
            A('div', Ka, [
              A('span', null, H(u.$t('layout.labelPersistent')), 1),
              S(
                i,
                {
                  modelValue: a.value,
                  'onUpdate:modelValue': s[4] || (s[4] = (f) => (a.value = f)),
                  onChange: o,
                },
                null,
                8,
                ['modelValue'],
              ),
            ]),
            A('div', Za, [
              A('span', null, H(u.$t('layout.sidebarFold')), 1),
              S(
                y,
                {
                  modelValue: g(e).sidebarFold,
                  'onUpdate:modelValue': s[5] || (s[5] = (f) => (g(e).sidebarFold = f)),
                  class: 'select',
                  placeholder: u.$t('layout.sidebarFold'),
                  size: 'small',
                  onChange: l,
                },
                {
                  default: O(() => [
                    (_(),
                    E(
                      oe,
                      null,
                      ce(['none', 'top', 'bottom'], (f) =>
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
const Xa = ye(Ya, [['__scopeId', 'data-v-22428868']]),
  zr = (t) => (Et('data-v-8d6a7900'), (t = t()), Ct(), t),
  ei = { class: 'setting' },
  ti = { class: 'drawer-content' },
  ri = { class: 'layout_seting' },
  ni = { class: 'sidebar_seting' },
  oi = ['onClick'],
  ai = zr(() => A('div', null, null, -1)),
  ii = zr(() => A('div', null, null, -1)),
  li = [ai, ii],
  si = J({
    __name: 'index',
    props: { modelValue: { type: Boolean, default: !1 } },
    emits: ['update:modelValue'],
    setup(t, { emit: e }) {
      const r = t,
        n = W(r.modelValue);
      _e(
        () => r.modelValue,
        (i) => {
          n.value = i;
        },
      );
      const { appConfig: a, setAppConfigMode: o } = ie(),
        l = [
          { label: '左侧菜单模式', value: 'vertical' },
          { label: '顶部菜单模式', value: 'horizontal' },
          { label: '混合菜单模式', value: 'blend' },
        ],
        u = (i) => {
          o({ sidebarMode: i });
        },
        s = () => {
          vr.clearStorage(), window.location.reload();
        };
      return (i, p) => {
        const y = k('el-divider'),
          f = k('el-tooltip'),
          m = k('el-button'),
          h = k('el-drawer');
        return (
          _(),
          E('div', ei, [
            S(
              h,
              {
                modelValue: n.value,
                'onUpdate:modelValue': p[0] || (p[0] = (b) => (n.value = b)),
                title: i.$t('layout.setup'),
                size: 320,
                onClose: p[1] || (p[1] = (b) => e('update:modelValue', !1)),
              },
              {
                default: O(() => [
                  A('div', ti, [
                    S(
                      y,
                      { 'content-position': 'center' },
                      { default: O(() => [Re(H(i.$t('layout.layoutSettings')), 1)]), _: 1 },
                    ),
                    A('div', ri, [
                      A('div', ni, [
                        (_(),
                        E(
                          oe,
                          null,
                          ce(l, (b) =>
                            S(
                              f,
                              { key: b.value, content: b.label, placement: 'bottom' },
                              {
                                default: O(() => [
                                  A(
                                    'div',
                                    {
                                      class: Fe([
                                        'sidebar_mode cursor',
                                        { 'sidebar_mode-select': g(a).sidebarMode === b.value },
                                      ]),
                                      onClick: (P) => u(b.value),
                                    },
                                    li,
                                    10,
                                    oi,
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
                      { default: O(() => [Re(H(i.$t('layout.themeSettings')), 1)]), _: 1 },
                    ),
                    A('div', null, [S(qa)]),
                    S(
                      y,
                      { 'content-position': 'center' },
                      { default: O(() => [Re(H(i.$t('layout.pageSettings')), 1)]), _: 1 },
                    ),
                    A('div', null, [S(Xa)]),
                    S(
                      m,
                      { class: 'clear_storage', type: 'danger', onClick: s },
                      { default: O(() => [Re(H(i.$t('layout.clearStorage')), 1)]), _: 1 },
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
const ui = ye(si, [['__scopeId', 'data-v-8d6a7900']]),
  Lr = J({
    __name: 'index',
    setup(t) {
      const { appConfig: e, setAppConfigMode: r } = ie(),
        n = () => {
          r({ collapseMenu: !e.value.collapseMenu });
        };
      return (a, o) => (
        _(),
        V(
          de,
          {
            class: Fe(['breadcrumb-fold cursor', { 'breadcrumb-unfold': g(e).collapseMenu }]),
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
const ci = { class: 'breadcrumb' },
  fi = { key: 0, class: 'no-redirect' },
  pi = ['onClick'],
  di = J({
    __name: 'index',
    setup(t) {
      var p;
      const { multiTabs: e } = ne(),
        r = W([]),
        n = Ue(),
        a = Le(),
        o =
          ((p = Ue().options.routes.find((y) => y.path === '/')) == null ? void 0 : p.children) ||
          [],
        l = () => {
          const y = [];
          Ot(n.currentRoute.value.matched[1].path || '', o || []).forEach((h) => {
            h !== '/' && y.push(rt(h, o || []));
          });
          const m = e.find((h) => {
            let b = {};
            return (
              h.query && (b = JSON.parse(JSON.stringify(h.query))),
              y.find((P) => P.path === h.path)
                ? !1
                : a.name === h.name && fn(a.query, b) && a.path === h.path
            );
          });
          m && y.push(m),
            (r.value = y.filter((h) => h && h.meta && h.meta.title && !h.meta.breadcrumb));
        },
        u = (y) => y(a.params),
        s = (y) => {
          const { redirect: f, path: m } = y;
          if (f) {
            n.push(f);
            return;
          }
          n.push(u(m));
        };
      yr(l), _e(a, l);
      const { appConfig: i } = ie();
      return (y, f) => {
        const m = k('el-breadcrumb-item'),
          h = k('el-breadcrumb');
        return (
          _(),
          E('div', ci, [
            g(i).sidebarFold === 'top' ? (_(), V(Lr, { key: 0, class: 'app-fold' })) : ee('', !0),
            S(
              h,
              { class: 'app-breadcrumb', separator: '/' },
              {
                default: O(() => [
                  S(
                    cn,
                    { name: 'breadcrumb' },
                    {
                      default: O(() => [
                        (_(!0),
                        E(
                          oe,
                          null,
                          ce(
                            r.value,
                            (b, P) => (
                              _(),
                              V(
                                m,
                                { key: b.path },
                                {
                                  default: O(() => {
                                    var w, C;
                                    return [
                                      b.redirect === 'noRedirect' || P == r.value.length - 1
                                        ? (_(),
                                          E(
                                            'span',
                                            fi,
                                            H(g(ht)((w = b.meta) == null ? void 0 : w.title)),
                                            1,
                                          ))
                                        : (_(),
                                          E(
                                            'a',
                                            {
                                              key: 1,
                                              class: 'redirect',
                                              onClick: pr((B) => s(b), ['prevent']),
                                            },
                                            H(g(ht)((C = b.meta) == null ? void 0 : C.title)),
                                            9,
                                            pi,
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
const yi = ye(di, [['__scopeId', 'data-v-d01d0241']]),
  vi = (t) => (Et('data-v-6936206f'), (t = t()), Ct(), t),
  mi = vi(() =>
    A(
      'div',
      { class: 'logo' },
      [A('img', { class: 'logo_img', src: yn, mode: 'scaleToFill' })],
      -1,
    ),
  ),
  hi = { class: 'name' },
  gi = J({
    __name: 'index',
    setup(t) {
      var n;
      const { appConfig: e } = ie(),
        r = (n = pn()) == null ? void 0 : n.appContext.config.globalProperties.$config;
      return (a, o) => (
        _(),
        E(
          'div',
          {
            class: Fe([
              'app-logo',
              { 'app-logo-hide': g(e).collapseMenu && g(e).sidebarMode !== 'horizontal' },
            ]),
          },
          [mi, A('span', hi, H(g(r).title), 1)],
          2,
        )
      );
    },
  });
const Wr = ye(gi, [['__scopeId', 'data-v-6936206f']]),
  bi = { class: 'navbar' },
  _i = { class: 'navbar-content' },
  Si = { class: 'navbar-left' },
  wi = { class: 'navbar-center' },
  Ai = { class: 'navbar-right' },
  $i = { class: 'setting-icon cursor' },
  Pi = J({
    __name: 'index',
    setup(t) {
      const e = W(!1),
        { appConfig: r } = ie(),
        n = W('full_screen'),
        a = () => {
          document.fullscreenElement
            ? (document.exitFullscreen(), (n.value = 'full_screen'))
            : ((n.value = 'full_screen_close'), document.documentElement.requestFullscreen());
        };
      return (o, l) => {
        const u = k('el-tooltip');
        return (
          _(),
          E('div', bi, [
            Qe(
              A(
                'div',
                _i,
                [
                  A('div', Si, [
                    g(r).sidebarMode === 'vertical' || g(r).drawerSidebar
                      ? (_(), V(yi, { key: 0 }))
                      : ee('', !0),
                    g(r).sidebarMode === 'horizontal' && !g(r).drawerSidebar
                      ? (_(), V(Wr, { key: 1 }))
                      : ee('', !0),
                  ]),
                  A('div', wi, [
                    g(r).drawerSidebar
                      ? ee('', !0)
                      : (_(),
                        E(
                          oe,
                          { key: 0 },
                          [
                            g(r).sidebarMode === 'horizontal'
                              ? (_(),
                                V(Br, { key: 0, class: 'sidebar-horizontal', mode: 'horizontal' }))
                              : ee('', !0),
                            g(r).sidebarMode === 'blend'
                              ? (_(),
                                V(Ta, { key: 1, class: 'sidebar-horizontal', mode: 'horizontal' }))
                              : ee('', !0),
                          ],
                          64,
                        )),
                  ]),
                  A('div', Ai, [
                    S(
                      u,
                      { content: o.$t('layout.navbar.fullScreen'), placement: 'bottom' },
                      {
                        default: O(() => [
                          S(de, { class: 'cursor', name: n.value, onClick: a }, null, 8, ['name']),
                        ]),
                        _: 1,
                      },
                      8,
                      ['content'],
                    ),
                    S(g(vn), { class: 'icon' }),
                    S(g(mn)),
                    S(g(hn)),
                    S(de, {
                      class: 'cursor',
                      name: 'iEL-setting',
                      onClick: l[0] || (l[0] = (s) => (e.value = !0)),
                    }),
                  ]),
                ],
                512,
              ),
              [[Ke, !g(r).hideNavbart]],
            ),
            Qe(
              A(
                'div',
                $i,
                [S(de, { name: 'iEL-setting', onClick: l[1] || (l[1] = (s) => (e.value = !0)) })],
                512,
              ),
              [[Ke, g(r).hideNavbart]],
            ),
            S(
              ui,
              { modelValue: e.value, 'onUpdate:modelValue': l[2] || (l[2] = (s) => (e.value = s)) },
              null,
              8,
              ['modelValue'],
            ),
          ])
        );
      };
    },
  });
const Oi = ye(Pi, [['__scopeId', 'data-v-5fbe5d9c']]),
  Ei = { key: 0, class: 'sidebar-fold' },
  Ci = J({
    __name: 'index',
    setup(t) {
      const { appConfig: e } = ie();
      return (r, n) =>
        Qe(
          (_(),
          E(
            'div',
            { class: Fe(['sidebar-container', { hideSidebar: g(e).collapseMenu }]) },
            [
              S(Wr),
              S(Br, { mode: 'vertical' }),
              (g(e).sidebarFold === 'bottom' || g(e).sidebarMode === 'blend') &&
              g(e).sidebarFold !== 'none'
                ? (_(), E('div', Ei, [S(Lr)]))
                : ee('', !0),
            ],
            2,
          )),
          [[Ke, (!g(e).hideSidebar && g(e).sidebarMode !== 'horizontal') || g(e).drawerSidebar]],
        );
    },
  });
const sr = ye(Ci, [['__scopeId', 'data-v-28546dbe']]),
  xi = J({
    __name: 'index',
    setup(t) {
      const { appConfig: e, setAppConfigMode: r } = ie(),
        n = W(!e.value.collapseMenu),
        a = (i) => {
          r(i);
        },
        o = () => {
          a({ collapseMenu: n.value });
        },
        l = W(!1),
        u = W(!1),
        s = dn(() => {
          (u.value = Wt('(max-width: 1024px)').value),
            (l.value = Wt('(max-width: 750px)').value),
            l.value ? a({ drawerSidebar: !0 }) : a({ drawerSidebar: !1 });
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
        gn(window, 'resize', () => s()),
        s(),
        (i, p) => {
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
                  'before-close': o,
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
const Mi = { class: 'app-wrapper' },
  Ii = { class: 'main-container' },
  Bi = J({
    __name: 'index',
    setup(t) {
      return (e, r) => (_(), E('div', Mi, [S(xi), A('div', Ii, [S(Oi), S($a), S(wn)])]));
    },
  });
export { Bi as default };
