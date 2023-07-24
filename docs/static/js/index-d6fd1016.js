var qr = Object.defineProperty,
  Gr = Object.defineProperties;
var Hr = Object.getOwnPropertyDescriptors;
var Vt = Object.getOwnPropertySymbols;
var Jr = Object.prototype.hasOwnProperty,
  Qr = Object.prototype.propertyIsEnumerable;
var Bt = (t, e, r) =>
    e in t ? qr(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (t[e] = r),
  Ut = (t, e) => {
    for (var r in e || (e = {})) Jr.call(e, r) && Bt(t, r, e[r]);
    if (Vt) for (var r of Vt(e)) Qr.call(e, r) && Bt(t, r, e[r]);
    return t;
  },
  zt = (t, e) => Gr(t, Hr(e));
var Lt = (t, e, r) =>
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
  P as K,
  a as k,
  o as _,
  c as E,
  f as S,
  w as O,
  T as sr,
  e as V,
  U as Kr,
  V as ur,
  W as Zr,
  R as cr,
  N as Le,
  O as Ue,
  y as h,
  r as Yr,
  j as W,
  A as _e,
  C as Xr,
  F as ne,
  b as ce,
  g as A,
  X as fr,
  t as G,
  Y as ht,
  Z as Qe,
  I as pr,
  J as Fe,
  $ as Ke,
  h as Re,
  a0 as en,
  K as ee,
  a1 as tn,
  a2 as rt,
  a3 as Ze,
  a4 as rn,
  n as nn,
  p as on,
  q as an,
  k as dr,
  a5 as Ot,
  a6 as ln,
  a7 as sn,
  u as Et,
  v as Ct,
  a8 as yr,
  a9 as un,
  aa as cn,
  D as fn,
  M as pn,
} from './index-153f8713.js';
import { S as de } from './index-c4068bee.js';
import { u as ae, _ as dn, A as yn, a as vn, b as mn } from './index-4ba9a5bf.js';
import { _ as ye } from './plugin-vueexport-helper-c27b6911.js';
import { u as hn, a as Wt } from './index-4bbc20e9.js';
import './logo-46af6dfb.js';
function vr(t, e) {
  return !!t.className.match(new RegExp('(\\s|^)' + e + '(\\s|$)'));
}
function gn(t, e) {
  vr(t, e) || (t.className += ' ' + e);
}
function bn(t, e) {
  if (vr(t, e)) {
    var r = new RegExp('(\\s|^)' + e + '(\\s|$)');
    t.className = t.className.replace(r, ' ').trim();
  }
}
const _n = { class: 'app-main' },
  Sn = H({
    __name: 'index',
    setup(t) {
      const e = be(() => K().cachePageList);
      return (r, n) => {
        const a = k('router-view');
        return (
          _(),
          E('section', _n, [
            S(a, null, {
              default: O(({ Component: o, route: s }) => [
                S(
                  sr,
                  { name: 'fade-transform', mode: 'out-in' },
                  {
                    default: O(() => [
                      (_(),
                      V(Kr, { include: e.value }, [(_(), V(ur(o), { key: s.fullPath }))], 1032, [
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
var wn = function () {
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
  jt = typeof Symbol != 'undefined' && Symbol,
  An = wn,
  $n = function () {
    return typeof jt != 'function' ||
      typeof Symbol != 'function' ||
      typeof jt('foo') != 'symbol' ||
      typeof Symbol('bar') != 'symbol'
      ? !1
      : An();
  },
  Pn = 'Function.prototype.bind called on incompatible ',
  lt = Array.prototype.slice,
  On = Object.prototype.toString,
  En = '[object Function]',
  Cn = function (e) {
    var r = this;
    if (typeof r != 'function' || On.call(r) !== En) throw new TypeError(Pn + r);
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
  xn = Cn,
  xt = Function.prototype.bind || xn,
  Mn = xt,
  In = Mn.call(Function.call, Object.prototype.hasOwnProperty),
  $,
  xe = SyntaxError,
  mr = Function,
  Ce = TypeError,
  st = function (t) {
    try {
      return mr('"use strict"; return (' + t + ').constructor;')();
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
  Fn = Ae
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
  Oe = $n(),
  se =
    Object.getPrototypeOf ||
    function (t) {
      return t.__proto__;
    },
  Ee = {},
  kn = typeof Uint8Array == 'undefined' ? $ : se(Uint8Array),
  $e = {
    '%AggregateError%': typeof AggregateError == 'undefined' ? $ : AggregateError,
    '%Array%': Array,
    '%ArrayBuffer%': typeof ArrayBuffer == 'undefined' ? $ : ArrayBuffer,
    '%ArrayIteratorPrototype%': Oe ? se([][Symbol.iterator]()) : $,
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
    '%Function%': mr,
    '%GeneratorFunction%': Ee,
    '%Int8Array%': typeof Int8Array == 'undefined' ? $ : Int8Array,
    '%Int16Array%': typeof Int16Array == 'undefined' ? $ : Int16Array,
    '%Int32Array%': typeof Int32Array == 'undefined' ? $ : Int32Array,
    '%isFinite%': isFinite,
    '%isNaN%': isNaN,
    '%IteratorPrototype%': Oe ? se(se([][Symbol.iterator]())) : $,
    '%JSON%': typeof JSON == 'object' ? JSON : $,
    '%Map%': typeof Map == 'undefined' ? $ : Map,
    '%MapIteratorPrototype%':
      typeof Map == 'undefined' || !Oe ? $ : se(new Map()[Symbol.iterator]()),
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
      typeof Set == 'undefined' || !Oe ? $ : se(new Set()[Symbol.iterator]()),
    '%SharedArrayBuffer%': typeof SharedArrayBuffer == 'undefined' ? $ : SharedArrayBuffer,
    '%String%': String,
    '%StringIteratorPrototype%': Oe ? se(''[Symbol.iterator]()) : $,
    '%Symbol%': Oe ? Symbol : $,
    '%SyntaxError%': xe,
    '%ThrowTypeError%': Fn,
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
try {
  null.error;
} catch (t) {
  var Nn = se(se(t));
  $e['%Error.prototype%'] = Nn;
}
var Rn = function t(e) {
    var r;
    if (e === '%AsyncFunction%') r = st('async function () {}');
    else if (e === '%GeneratorFunction%') r = st('function* () {}');
    else if (e === '%AsyncGeneratorFunction%') r = st('async function* () {}');
    else if (e === '%AsyncGenerator%') {
      var n = t('%AsyncGeneratorFunction%');
      n && (r = n.prototype);
    } else if (e === '%AsyncIteratorPrototype%') {
      var a = t('%AsyncGenerator%');
      a && (r = se(a.prototype));
    }
    return ($e[e] = r), r;
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
  We = xt,
  Ye = In,
  Tn = We.call(Function.call, Array.prototype.concat),
  Dn = We.call(Function.apply, Array.prototype.splice),
  Gt = We.call(Function.call, String.prototype.replace),
  Xe = We.call(Function.call, String.prototype.slice),
  Vn = We.call(Function.call, RegExp.prototype.exec),
  Bn =
    /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
  Un = /\\(\\)?/g,
  zn = function (e) {
    var r = Xe(e, 0, 1),
      n = Xe(e, -1);
    if (r === '%' && n !== '%') throw new xe('invalid intrinsic syntax, expected closing `%`');
    if (n === '%' && r !== '%') throw new xe('invalid intrinsic syntax, expected opening `%`');
    var a = [];
    return (
      Gt(e, Bn, function (o, s, u, i) {
        a[a.length] = u ? Gt(i, Un, '$1') : s || o;
      }),
      a
    );
  },
  Ln = function (e, r) {
    var n = e,
      a;
    if ((Ye(qt, n) && ((a = qt[n]), (n = '%' + a[0] + '%')), Ye($e, n))) {
      var o = $e[n];
      if ((o === Ee && (o = Rn(n)), typeof o == 'undefined' && !r))
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
    if (Vn(/^%?[^%]*%?$/, e) === null)
      throw new xe(
        '`%` may not be present anywhere but at the beginning and end of the intrinsic name',
      );
    var n = zn(e),
      a = n.length > 0 ? n[0] : '',
      o = Ln('%' + a + '%', r),
      s = o.name,
      u = o.value,
      i = !1,
      l = o.alias;
    l && ((a = l[0]), Dn(n, Tn([0, 1], l)));
    for (var p = 1, y = !0; p < n.length; p += 1) {
      var f = n[p],
        b = Xe(f, 0, 1),
        m = Xe(f, -1);
      if ((b === '"' || b === "'" || b === '`' || m === '"' || m === "'" || m === '`') && b !== m)
        throw new xe('property names with quotes must have matching quotes');
      if (((f === 'constructor' || !y) && (i = !0), (a += '.' + f), (s = '%' + a + '%'), Ye($e, s)))
        u = $e[s];
      else if (u != null) {
        if (!(f in u)) {
          if (!r)
            throw new Ce('base intrinsic for ' + e + ' exists, but the property is not available.');
          return;
        }
        if (Ae && p + 1 >= n.length) {
          var g = Ae(u, f);
          (y = !!g), y && 'get' in g && !('originalValue' in g.get) ? (u = g.get) : (u = u[f]);
        } else (y = Ye(u, f)), (u = u[f]);
        y && !i && ($e[s] = u);
      }
    }
    return u;
  },
  hr = { exports: {} };
(function (t) {
  var e = xt,
    r = Mt,
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
})(hr);
var Wn = hr.exports,
  gr = Mt,
  br = Wn,
  jn = br(gr('String.prototype.indexOf')),
  qn = function (e, r) {
    var n = gr(e, !!r);
    return typeof n == 'function' && jn(e, '.prototype.') > -1 ? br(n) : n;
  },
  It = typeof Map == 'function' && Map.prototype,
  ct =
    Object.getOwnPropertyDescriptor && It
      ? Object.getOwnPropertyDescriptor(Map.prototype, 'size')
      : null,
  et = It && ct && typeof ct.get == 'function' ? ct.get : null,
  Ht = It && Map.prototype.forEach,
  Ft = typeof Set == 'function' && Set.prototype,
  ft =
    Object.getOwnPropertyDescriptor && Ft
      ? Object.getOwnPropertyDescriptor(Set.prototype, 'size')
      : null,
  tt = Ft && ft && typeof ft.get == 'function' ? ft.get : null,
  Jt = Ft && Set.prototype.forEach,
  Gn = typeof WeakMap == 'function' && WeakMap.prototype,
  Te = Gn ? WeakMap.prototype.has : null,
  Hn = typeof WeakSet == 'function' && WeakSet.prototype,
  De = Hn ? WeakSet.prototype.has : null,
  Jn = typeof WeakRef == 'function' && WeakRef.prototype,
  Qt = Jn ? WeakRef.prototype.deref : null,
  Qn = Boolean.prototype.valueOf,
  Kn = Object.prototype.toString,
  Zn = Function.prototype.toString,
  Yn = String.prototype.match,
  kt = String.prototype.slice,
  ge = String.prototype.replace,
  Xn = String.prototype.toUpperCase,
  Kt = String.prototype.toLowerCase,
  _r = RegExp.prototype.test,
  Zt = Array.prototype.concat,
  ue = Array.prototype.join,
  eo = Array.prototype.slice,
  Yt = Math.floor,
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
  Sr = Object.prototype.propertyIsEnumerable,
  Xt =
    (typeof Reflect == 'function' ? Reflect.getPrototypeOf : Object.getPrototypeOf) ||
    ([].__proto__ === Array.prototype
      ? function (t) {
          return t.__proto__;
        }
      : null);
function er(t, e) {
  if (t === 1 / 0 || t === -1 / 0 || t !== t || (t && t > -1e3 && t < 1e3) || _r.call(/e/, e))
    return e;
  var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof t == 'number') {
    var n = t < 0 ? -Yt(-t) : Yt(t);
    if (n !== t) {
      var a = String(n),
        o = kt.call(e, a.length + 1);
      return ge.call(a, r, '$&_') + '.' + ge.call(ge.call(o, /([0-9]{3})/g, '$&_'), /_$/, '');
    }
  }
  return ge.call(e, r, '$&_');
}
var _t = Zr,
  tr = _t.custom,
  rr = Ar(tr) ? tr : null,
  to = function t(e, r, n, a) {
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
      return u ? er(e, i) : i;
    }
    if (typeof e == 'bigint') {
      var l = String(e) + 'n';
      return u ? er(e, l) : l;
    }
    var p = typeof o.depth == 'undefined' ? 5 : o.depth;
    if ((typeof n == 'undefined' && (n = 0), n >= p && p > 0 && typeof e == 'object'))
      return St(e) ? '[Array]' : '[Object]';
    var y = _o(o, n);
    if (typeof a == 'undefined') a = [];
    else if ($r(a, e) >= 0) return '[Circular]';
    function f(Y, ve, Pe) {
      if ((ve && ((a = eo.call(a)), a.push(ve)), Pe)) {
        var fe = { depth: o.depth };
        return he(o, 'quoteStyle') && (fe.quoteStyle = o.quoteStyle), t(Y, fe, n + 1, a);
      }
      return t(Y, o, n + 1, a);
    }
    if (typeof e == 'function' && !nr(e)) {
      var b = co(e),
        m = qe(e, f);
      return (
        '[Function' +
        (b ? ': ' + b : ' (anonymous)') +
        ']' +
        (m.length > 0 ? ' { ' + ue.call(m, ', ') + ' }' : '')
      );
    }
    if (Ar(e)) {
      var g = Me ? ge.call(String(e), /^(Symbol\(.*\))_[^)]*$/, '$1') : bt.call(e);
      return typeof e == 'object' && !Me ? Ne(g) : g;
    }
    if (ho(e)) {
      for (
        var P = '<' + Kt.call(String(e.nodeName)), w = e.attributes || [], C = 0;
        C < w.length;
        C++
      )
        P += ' ' + w[C].name + '=' + wr(ro(w[C].value), 'double', o);
      return (
        (P += '>'),
        e.childNodes && e.childNodes.length && (P += '...'),
        (P += '</' + Kt.call(String(e.nodeName)) + '>'),
        P
      );
    }
    if (St(e)) {
      if (e.length === 0) return '[]';
      var B = qe(e, f);
      return y && !bo(B) ? '[' + wt(B, y) + ']' : '[ ' + ue.call(B, ', ') + ' ]';
    }
    if (oo(e)) {
      var ie = qe(e, f);
      return !('cause' in Error.prototype) && 'cause' in e && !Sr.call(e, 'cause')
        ? '{ [' + String(e) + '] ' + ue.call(Zt.call('[cause]: ' + f(e.cause), ie), ', ') + ' }'
        : ie.length === 0
        ? '[' + String(e) + ']'
        : '{ [' + String(e) + '] ' + ue.call(ie, ', ') + ' }';
    }
    if (typeof e == 'object' && s) {
      if (rr && typeof e[rr] == 'function' && _t) return _t(e, { depth: p - n });
      if (s !== 'symbol' && typeof e.inspect == 'function') return e.inspect();
    }
    if (fo(e)) {
      var M = [];
      return (
        Ht &&
          Ht.call(e, function (Y, ve) {
            M.push(f(ve, e, !0) + ' => ' + f(Y, e));
          }),
        or('Map', et.call(e), M, y)
      );
    }
    if (vo(e)) {
      var N = [];
      return (
        Jt &&
          Jt.call(e, function (Y) {
            N.push(f(Y, e));
          }),
        or('Set', tt.call(e), N, y)
      );
    }
    if (po(e)) return dt('WeakMap');
    if (mo(e)) return dt('WeakSet');
    if (yo(e)) return dt('WeakRef');
    if (io(e)) return Ne(f(Number(e)));
    if (so(e)) return Ne(f(gt.call(e)));
    if (lo(e)) return Ne(Qn.call(e));
    if (ao(e)) return Ne(f(String(e)));
    if (!no(e) && !nr(e)) {
      var U = qe(e, f),
        X = Xt ? Xt(e) === Object.prototype : e instanceof Object || e.constructor === Object,
        te = e instanceof Object ? '' : 'null prototype',
        re = !X && Z && Object(e) === e && Z in e ? kt.call(Se(e), 8, -1) : te ? 'Object' : '',
        I =
          X || typeof e.constructor != 'function'
            ? ''
            : e.constructor.name
            ? e.constructor.name + ' '
            : '',
        R = I + (re || te ? '[' + ue.call(Zt.call([], re || [], te || []), ': ') + '] ' : '');
      return U.length === 0
        ? R + '{}'
        : y
        ? R + '{' + wt(U, y) + '}'
        : R + '{ ' + ue.call(U, ', ') + ' }';
    }
    return String(e);
  };
function wr(t, e, r) {
  var n = (r.quoteStyle || e) === 'double' ? '"' : "'";
  return n + t + n;
}
function ro(t) {
  return ge.call(String(t), /"/g, '&quot;');
}
function St(t) {
  return Se(t) === '[object Array]' && (!Z || !(typeof t == 'object' && Z in t));
}
function no(t) {
  return Se(t) === '[object Date]' && (!Z || !(typeof t == 'object' && Z in t));
}
function nr(t) {
  return Se(t) === '[object RegExp]' && (!Z || !(typeof t == 'object' && Z in t));
}
function oo(t) {
  return Se(t) === '[object Error]' && (!Z || !(typeof t == 'object' && Z in t));
}
function ao(t) {
  return Se(t) === '[object String]' && (!Z || !(typeof t == 'object' && Z in t));
}
function io(t) {
  return Se(t) === '[object Number]' && (!Z || !(typeof t == 'object' && Z in t));
}
function lo(t) {
  return Se(t) === '[object Boolean]' && (!Z || !(typeof t == 'object' && Z in t));
}
function Ar(t) {
  if (Me) return t && typeof t == 'object' && t instanceof Symbol;
  if (typeof t == 'symbol') return !0;
  if (!t || typeof t != 'object' || !bt) return !1;
  try {
    return bt.call(t), !0;
  } catch (e) {}
  return !1;
}
function so(t) {
  if (!t || typeof t != 'object' || !gt) return !1;
  try {
    return gt.call(t), !0;
  } catch (e) {}
  return !1;
}
var uo =
  Object.prototype.hasOwnProperty ||
  function (t) {
    return t in this;
  };
function he(t, e) {
  return uo.call(t, e);
}
function Se(t) {
  return Kn.call(t);
}
function co(t) {
  if (t.name) return t.name;
  var e = Yn.call(Zn.call(t), /^function\s*([\w$]+)/);
  return e ? e[1] : null;
}
function $r(t, e) {
  if (t.indexOf) return t.indexOf(e);
  for (var r = 0, n = t.length; r < n; r++) if (t[r] === e) return r;
  return -1;
}
function fo(t) {
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
function po(t) {
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
function yo(t) {
  if (!Qt || !t || typeof t != 'object') return !1;
  try {
    return Qt.call(t), !0;
  } catch (e) {}
  return !1;
}
function vo(t) {
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
function mo(t) {
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
function ho(t) {
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
    return Pr(kt.call(t, 0, e.maxStringLength), e) + n;
  }
  var a = ge.call(ge.call(t, /(['\\])/g, '\\$1'), /[\x00-\x1f]/g, go);
  return wr(a, 'single', e);
}
function go(t) {
  var e = t.charCodeAt(0),
    r = { 8: 'b', 9: 't', 10: 'n', 12: 'f', 13: 'r' }[e];
  return r ? '\\' + r : '\\x' + (e < 16 ? '0' : '') + Xn.call(e.toString(16));
}
function Ne(t) {
  return 'Object(' + t + ')';
}
function dt(t) {
  return t + ' { ? }';
}
function or(t, e, r, n) {
  var a = n ? wt(r, n) : ue.call(r, ', ');
  return t + ' (' + e + ') {' + a + '}';
}
function bo(t) {
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
function _o(t, e) {
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
var Nt = Mt,
  ke = qn,
  So = to,
  wo = Nt('%TypeError%'),
  Ge = Nt('%WeakMap%', !0),
  He = Nt('%Map%', !0),
  Ao = ke('WeakMap.prototype.get', !0),
  $o = ke('WeakMap.prototype.set', !0),
  Po = ke('WeakMap.prototype.has', !0),
  Oo = ke('Map.prototype.get', !0),
  Eo = ke('Map.prototype.set', !0),
  Co = ke('Map.prototype.has', !0),
  Rt = function (t, e) {
    for (var r = t, n; (n = r.next) !== null; r = n)
      if (n.key === e) return (r.next = n.next), (n.next = t.next), (t.next = n), n;
  },
  xo = function (t, e) {
    var r = Rt(t, e);
    return r && r.value;
  },
  Mo = function (t, e, r) {
    var n = Rt(t, e);
    n ? (n.value = r) : (t.next = { key: e, next: t.next, value: r });
  },
  Io = function (t, e) {
    return !!Rt(t, e);
  },
  Fo = function () {
    var e,
      r,
      n,
      a = {
        assert: function (o) {
          if (!a.has(o)) throw new wo('Side channel does not contain ' + So(o));
        },
        get: function (o) {
          if (Ge && o && (typeof o == 'object' || typeof o == 'function')) {
            if (e) return Ao(e, o);
          } else if (He) {
            if (r) return Oo(r, o);
          } else if (n) return xo(n, o);
        },
        has: function (o) {
          if (Ge && o && (typeof o == 'object' || typeof o == 'function')) {
            if (e) return Po(e, o);
          } else if (He) {
            if (r) return Co(r, o);
          } else if (n) return Io(n, o);
          return !1;
        },
        set: function (o, s) {
          Ge && o && (typeof o == 'object' || typeof o == 'function')
            ? (e || (e = new Ge()), $o(e, o, s))
            : He
            ? (r || (r = new He()), Eo(r, o, s))
            : (n || (n = { key: {}, next: null }), Mo(n, o, s));
        },
      };
    return a;
  },
  ko = String.prototype.replace,
  No = /%20/g,
  yt = { RFC1738: 'RFC1738', RFC3986: 'RFC3986' },
  Tt = {
    default: yt.RFC3986,
    formatters: {
      RFC1738: function (t) {
        return ko.call(t, No, '+');
      },
      RFC3986: function (t) {
        return String(t);
      },
    },
    RFC1738: yt.RFC1738,
    RFC3986: yt.RFC3986,
  },
  Ro = Tt,
  vt = Object.prototype.hasOwnProperty,
  we = Array.isArray,
  le = (function () {
    for (var t = [], e = 0; e < 256; ++e)
      t.push('%' + ((e < 16 ? '0' : '') + e.toString(16)).toUpperCase());
    return t;
  })(),
  To = function (e) {
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
  Do = function t(e, r, n) {
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
  Vo = function (e, r) {
    return Object.keys(r).reduce(function (n, a) {
      return (n[a] = r[a]), n;
    }, e);
  },
  Bo = function (t, e, r) {
    var n = t.replace(/\+/g, ' ');
    if (r === 'iso-8859-1') return n.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
      return decodeURIComponent(n);
    } catch (a) {
      return n;
    }
  },
  Uo = function (e, r, n, a, o) {
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
        (o === Ro.RFC1738 && (l === 40 || l === 41))
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
  zo = function (e) {
    for (var r = [{ obj: { o: e }, prop: 'o' }], n = [], a = 0; a < r.length; ++a)
      for (var o = r[a], s = o.obj[o.prop], u = Object.keys(s), i = 0; i < u.length; ++i) {
        var l = u[i],
          p = s[l];
        typeof p == 'object' &&
          p !== null &&
          n.indexOf(p) === -1 &&
          (r.push({ obj: s, prop: l }), n.push(p));
      }
    return To(r), e;
  },
  Lo = function (e) {
    return Object.prototype.toString.call(e) === '[object RegExp]';
  },
  Wo = function (e) {
    return !e || typeof e != 'object'
      ? !1
      : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
  },
  jo = function (e, r) {
    return [].concat(e, r);
  },
  qo = function (e, r) {
    if (we(e)) {
      for (var n = [], a = 0; a < e.length; a += 1) n.push(r(e[a]));
      return n;
    }
    return r(e);
  },
  Er = {
    arrayToObject: Or,
    assign: Vo,
    combine: jo,
    compact: zo,
    decode: Bo,
    encode: Uo,
    isBuffer: Wo,
    isRegExp: Lo,
    maybeMap: qo,
    merge: Do,
  },
  Cr = Fo,
  Je = Er,
  Ve = Tt,
  Go = Object.prototype.hasOwnProperty,
  ar = {
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
  Ho = Array.prototype.push,
  xr = function (t, e) {
    Ho.apply(t, pe(e) ? e : [e]);
  },
  Jo = Date.prototype.toISOString,
  ir = Ve.default,
  Q = {
    addQueryPrefix: !1,
    allowDots: !1,
    charset: 'utf-8',
    charsetSentinel: !1,
    delimiter: '&',
    encode: !0,
    encoder: Je.encode,
    encodeValuesOnly: !1,
    format: ir,
    formatter: Ve.formatters[ir],
    indices: !1,
    serializeDate: function (e) {
      return Jo.call(e);
    },
    skipNulls: !1,
    strictNullHandling: !1,
  },
  Qo = function (e) {
    return (
      typeof e == 'string' ||
      typeof e == 'number' ||
      typeof e == 'boolean' ||
      typeof e == 'symbol' ||
      typeof e == 'bigint'
    );
  },
  mt = {},
  Ko = function t(e, r, n, a, o, s, u, i, l, p, y, f, b, m, g, P) {
    for (var w = e, C = P, B = 0, ie = !1; (C = C.get(mt)) !== void 0 && !ie; ) {
      var M = C.get(e);
      if (((B += 1), typeof M != 'undefined')) {
        if (M === B) throw new RangeError('Cyclic object value');
        ie = !0;
      }
      typeof C.get(mt) == 'undefined' && (B = 0);
    }
    if (
      (typeof i == 'function'
        ? (w = i(r, w))
        : w instanceof Date
        ? (w = y(w))
        : n === 'comma' &&
          pe(w) &&
          (w = Je.maybeMap(w, function (fe) {
            return fe instanceof Date ? y(fe) : fe;
          })),
      w === null)
    ) {
      if (o) return u && !m ? u(r, Q.encoder, g, 'key', f) : r;
      w = '';
    }
    if (Qo(w) || Je.isBuffer(w)) {
      if (u) {
        var N = m ? r : u(r, Q.encoder, g, 'key', f);
        return [b(N) + '=' + b(u(w, Q.encoder, g, 'value', f))];
      }
      return [b(r) + '=' + b(String(w))];
    }
    var U = [];
    if (typeof w == 'undefined') return U;
    var X;
    if (n === 'comma' && pe(w))
      m && u && (w = Je.maybeMap(w, u)),
        (X = [{ value: w.length > 0 ? w.join(',') || null : void 0 }]);
    else if (pe(i)) X = i;
    else {
      var te = Object.keys(w);
      X = l ? te.sort(l) : te;
    }
    for (var re = a && pe(w) && w.length === 1 ? r + '[]' : r, I = 0; I < X.length; ++I) {
      var R = X[I],
        Y = typeof R == 'object' && typeof R.value != 'undefined' ? R.value : w[R];
      if (!(s && Y === null)) {
        var ve = pe(w)
          ? typeof n == 'function'
            ? n(re, R)
            : re
          : re + (p ? '.' + R : '[' + R + ']');
        P.set(e, B);
        var Pe = Cr();
        Pe.set(mt, P),
          xr(
            U,
            t(
              Y,
              ve,
              n,
              a,
              o,
              s,
              n === 'comma' && m && pe(w) ? null : u,
              i,
              l,
              p,
              y,
              f,
              b,
              m,
              g,
              Pe,
            ),
          );
      }
    }
    return U;
  },
  Zo = function (e) {
    if (!e) return Q;
    if (e.encoder !== null && typeof e.encoder != 'undefined' && typeof e.encoder != 'function')
      throw new TypeError('Encoder has to be a function.');
    var r = e.charset || Q.charset;
    if (typeof e.charset != 'undefined' && e.charset !== 'utf-8' && e.charset !== 'iso-8859-1')
      throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    var n = Ve.default;
    if (typeof e.format != 'undefined') {
      if (!Go.call(Ve.formatters, e.format)) throw new TypeError('Unknown format option provided.');
      n = e.format;
    }
    var a = Ve.formatters[n],
      o = Q.filter;
    return (
      (typeof e.filter == 'function' || pe(e.filter)) && (o = e.filter),
      {
        addQueryPrefix: typeof e.addQueryPrefix == 'boolean' ? e.addQueryPrefix : Q.addQueryPrefix,
        allowDots: typeof e.allowDots == 'undefined' ? Q.allowDots : !!e.allowDots,
        charset: r,
        charsetSentinel:
          typeof e.charsetSentinel == 'boolean' ? e.charsetSentinel : Q.charsetSentinel,
        delimiter: typeof e.delimiter == 'undefined' ? Q.delimiter : e.delimiter,
        encode: typeof e.encode == 'boolean' ? e.encode : Q.encode,
        encoder: typeof e.encoder == 'function' ? e.encoder : Q.encoder,
        encodeValuesOnly:
          typeof e.encodeValuesOnly == 'boolean' ? e.encodeValuesOnly : Q.encodeValuesOnly,
        filter: o,
        format: n,
        formatter: a,
        serializeDate: typeof e.serializeDate == 'function' ? e.serializeDate : Q.serializeDate,
        skipNulls: typeof e.skipNulls == 'boolean' ? e.skipNulls : Q.skipNulls,
        sort: typeof e.sort == 'function' ? e.sort : null,
        strictNullHandling:
          typeof e.strictNullHandling == 'boolean' ? e.strictNullHandling : Q.strictNullHandling,
      }
    );
  },
  Yo = function (t, e) {
    var r = t,
      n = Zo(e),
      a,
      o;
    typeof n.filter == 'function'
      ? ((o = n.filter), (r = o('', r)))
      : pe(n.filter) && ((o = n.filter), (a = o));
    var s = [];
    if (typeof r != 'object' || r === null) return '';
    var u;
    e && e.arrayFormat in ar
      ? (u = e.arrayFormat)
      : e && 'indices' in e
      ? (u = e.indices ? 'indices' : 'repeat')
      : (u = 'indices');
    var i = ar[u];
    if (e && 'commaRoundTrip' in e && typeof e.commaRoundTrip != 'boolean')
      throw new TypeError('`commaRoundTrip` must be a boolean, or absent');
    var l = i === 'comma' && e && e.commaRoundTrip;
    a || (a = Object.keys(r)), n.sort && a.sort(n.sort);
    for (var p = Cr(), y = 0; y < a.length; ++y) {
      var f = a[y];
      (n.skipNulls && r[f] === null) ||
        xr(
          s,
          Ko(
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
      m = n.addQueryPrefix === !0 ? '?' : '';
    return (
      n.charsetSentinel &&
        (n.charset === 'iso-8859-1' ? (m += 'utf8=%26%2310003%3B&') : (m += 'utf8=%E2%9C%93&')),
      b.length > 0 ? m + b : ''
    );
  },
  Ie = Er,
  At = Object.prototype.hasOwnProperty,
  Xo = Array.isArray,
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
  ea = function (t) {
    return t.replace(/&#(\d+);/g, function (e, r) {
      return String.fromCharCode(parseInt(r, 10));
    });
  },
  Mr = function (t, e) {
    return t && typeof t == 'string' && e.comma && t.indexOf(',') > -1 ? t.split(',') : t;
  },
  ta = 'utf8=%26%2310003%3B',
  ra = 'utf8=%E2%9C%93',
  na = function (e, r) {
    var n = { __proto__: null },
      a = r.ignoreQueryPrefix ? e.replace(/^\?/, '') : e,
      o = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit,
      s = a.split(r.delimiter, o),
      u = -1,
      i,
      l = r.charset;
    if (r.charsetSentinel)
      for (i = 0; i < s.length; ++i)
        s[i].indexOf('utf8=') === 0 &&
          (s[i] === ra ? (l = 'utf-8') : s[i] === ta && (l = 'iso-8859-1'),
          (u = i),
          (i = s.length));
    for (i = 0; i < s.length; ++i)
      if (i !== u) {
        var p = s[i],
          y = p.indexOf(']='),
          f = y === -1 ? p.indexOf('=') : y + 1,
          b,
          m;
        f === -1
          ? ((b = r.decoder(p, q.decoder, l, 'key')), (m = r.strictNullHandling ? null : ''))
          : ((b = r.decoder(p.slice(0, f), q.decoder, l, 'key')),
            (m = Ie.maybeMap(Mr(p.slice(f + 1), r), function (g) {
              return r.decoder(g, q.decoder, l, 'value');
            }))),
          m && r.interpretNumericEntities && l === 'iso-8859-1' && (m = ea(m)),
          p.indexOf('[]=') > -1 && (m = Xo(m) ? [m] : m),
          At.call(n, b) ? (n[b] = Ie.combine(n[b], m)) : (n[b] = m);
      }
    return n;
  },
  oa = function (t, e, r, n) {
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
  aa = function (e, r, n, a) {
    if (e) {
      var o = n.allowDots ? e.replace(/\.([^.[]+)/g, '[$1]') : e,
        s = /(\[[^[\]]*])/,
        u = /(\[[^[\]]*])/g,
        i = n.depth > 0 && s.exec(o),
        l = i ? o.slice(0, i.index) : o,
        p = [];
      if (l) {
        if (!n.plainObjects && At.call(Object.prototype, l) && !n.allowPrototypes) return;
        p.push(l);
      }
      for (var y = 0; n.depth > 0 && (i = u.exec(o)) !== null && y < n.depth; ) {
        if (
          ((y += 1),
          !n.plainObjects && At.call(Object.prototype, i[1].slice(1, -1)) && !n.allowPrototypes)
        )
          return;
        p.push(i[1]);
      }
      return i && p.push('[' + o.slice(i.index) + ']'), oa(p, r, n, a);
    }
  },
  ia = function (e) {
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
  la = function (t, e) {
    var r = ia(e);
    if (t === '' || t === null || typeof t == 'undefined')
      return r.plainObjects ? Object.create(null) : {};
    for (
      var n = typeof t == 'string' ? na(t, r) : t,
        a = r.plainObjects ? Object.create(null) : {},
        o = Object.keys(n),
        s = 0;
      s < o.length;
      ++s
    ) {
      var u = o[s],
        i = aa(u, n[u], r, typeof t == 'string');
      a = Ie.merge(a, i, r);
    }
    return r.allowSparse === !0 ? a : Ie.compact(a);
  },
  sa = Yo,
  ua = la,
  ca = Tt,
  fa = { formats: ca, parse: ua, stringify: sa };
const pa = cr(fa),
  Ir = (t) => {
    const e = Le(),
      r = Ue(),
      n = (i) =>
        `${i.path}${i.query && Object.keys(i.query).length ? '?' + pa.stringify(i.query) : ''}`,
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
      gn(document.querySelector('.rotate'), l);
      const { path: p, query: y } = h(i || e);
      r.replace({ path: '/redirect' + p, query: y }),
        setTimeout(() => {
          bn(document.querySelector('.rotate'), l);
        }, 600);
    }
    return { setTabPaneKey: n, addRouteTabs: a, onFresh: u, closeTabsRoute: o, removeTab: s };
  },
  da = (t) => {
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
          (m(),
          y(C),
          (l.value = C),
          w &&
            setTimeout(() => {
              (i.value = w.clientX), (u.value = w.clientY), (s.value = !0);
            }, 100));
      },
      b = be(() => ({ left: i.value + 'px', top: u.value + 'px' })),
      m = () => {
        s.value = !1;
      };
    return (
      _e(
        () => s.value,
        (P) => {
          P
            ? document.body.addEventListener('click', m)
            : document.body.removeEventListener('click', m);
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
function ya(t) {
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
const Fr = ya(),
  va = { key: 0, class: 'main-container-tabs' },
  ma = ['onClick', 'onContextmenu'],
  ha = ['onClick'],
  ga = { key: 0, class: 'right-button' },
  ba = H({
    __name: 'index',
    setup(t) {
      const { appConfig: e, setAppConfigMode: r } = ae(),
        n = Le(),
        a = Ue(),
        o = be(() => K().multiTabs),
        {
          visible: s,
          rightClickTags: u,
          rightViewStyle: i,
          contextmenu: l,
          rightViewChange: p,
        } = da(o),
        { setTabPaneKey: y, addRouteTabs: f, onFresh: b, removeTab: m } = Ir(o),
        g = W(y(n));
      _e(
        () => [n.path],
        () =>
          Lt(this, null, function* () {
            g.value = y(n);
          }),
      ),
        Xr(() => {
          Fr.on('siteBarChange', ({ routeRaw: M }) => {
            f(M);
          });
        });
      const P = (M) => {
          const N = o.value.find((U) => y(U) === M);
          N && m(N);
        },
        w = (M) => {
          a.push({ path: M.path, query: M.query });
        },
        C = () => {
          const { hideNavbart: M, hideSidebar: N } = e.value;
          r(M && N ? { hideNavbart: !1, hideSidebar: !1 } : { hideNavbart: !0, hideSidebar: !0 });
        },
        B = W(),
        ie = (M, N) => {
          var U;
          (U = B.value) == null || U.handleClose(), l(M, N);
        };
      return (M, N) => {
        const U = k('el-tab-pane'),
          X = k('el-tabs'),
          te = k('el-dropdown-item'),
          re = k('el-dropdown-menu');
        return h(e).hideTabs
          ? ee('', !0)
          : (_(),
            E('div', va, [
              S(
                X,
                {
                  modelValue: g.value,
                  'onUpdate:modelValue': N[0] || (N[0] = (I) => (g.value = I)),
                  type: 'card',
                  class: 'tabs-view',
                  closable: o.value.length > 1,
                  onTabRemove: P,
                },
                {
                  default: O(() => [
                    (_(!0),
                    E(
                      ne,
                      null,
                      ce(
                        o.value,
                        (I) => (
                          _(),
                          V(
                            U,
                            { key: h(y)(I), name: h(y)(I) },
                            {
                              label: O(() => [
                                A(
                                  'div',
                                  {
                                    class: 'tabs-view-item',
                                    onClick: (R) => w(I),
                                    onContextmenu: fr((R) => ie(I, R), ['prevent']),
                                  },
                                  null,
                                  40,
                                  ma,
                                ),
                                A('span', null, G(h(ht)(I.meta.title)), 1),
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
                sr,
                { name: 'el-zoom-in-top' },
                {
                  default: O(() => [
                    Qe(
                      A(
                        'ul',
                        { class: 'right-view', style: pr(h(i)) },
                        [
                          (_(!0),
                          E(
                            ne,
                            null,
                            ce(
                              h(u),
                              (I, R) => (
                                _(),
                                E(
                                  'li',
                                  {
                                    key: R,
                                    class: Fe(['right-view-item cursor', { disabled: I.disabled }]),
                                    onClick: (Y) => h(p)(I),
                                  },
                                  [A('span', null, G(I.text), 1)],
                                  10,
                                  ha,
                                )
                              ),
                            ),
                            128,
                          )),
                        ],
                        4,
                      ),
                      [[Ke, h(s)]],
                    ),
                  ]),
                  _: 1,
                },
              ),
              h(e).hideTabsConfig
                ? ee('', !0)
                : (_(),
                  E('div', ga, [
                    A('ul', null, [
                      A('li', { class: 'cursor', onClick: N[1] || (N[1] = (I) => h(b)()) }, [
                        S(de, { class: 'rotate', name: 'iEL-refresh' }),
                      ]),
                      A('li', null, [
                        S(
                          h(en),
                          {
                            ref_key: 'elDropdownRef',
                            ref: B,
                            trigger: 'click',
                            placement: 'bottom-end',
                            onVisibleChange: N[2] || (N[2] = (I) => I && h(l)(h(n))),
                          },
                          {
                            dropdown: O(() => [
                              S(re, null, {
                                default: O(() => [
                                  (_(!0),
                                  E(
                                    ne,
                                    null,
                                    ce(
                                      h(u),
                                      (I, R) => (
                                        _(),
                                        V(
                                          te,
                                          {
                                            key: R,
                                            command: { key: R, item: I },
                                            disabled: I.disabled,
                                            onClick: (Y) => h(p)(I),
                                          },
                                          { default: O(() => [Re(G(I.text), 1)]), _: 2 },
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
const _a = ye(ba, [['__scopeId', 'data-v-e302b7ad']]),
  kr = () => {
    const t = Ue().options.routes.find((n) => n.path === '/') || [],
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
var ze = { exports: {} },
  Nr = {},
  Sa = function (e) {
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
var wa = $t.exports;
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
        J = F.length,
        T = String(c).replace(e, function (D) {
          if (D === '%%') return '%';
          if (v >= J) return D;
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
      v < J;
      x = F[++v]
    )
      P(x) || !U(x) ? (T += ' ' + x) : (T += ' ' + a(x));
    return T;
  }),
    (t.deprecate = function (c, d) {
      if (M(rn.process))
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
    var v = { seen: [], stylize: s };
    return (
      arguments.length >= 3 && (v.depth = arguments[2]),
      arguments.length >= 4 && (v.colors = arguments[3]),
      g(d) ? (v.showHidden = d) : d && t._extend(v, d),
      M(v.showHidden) && (v.showHidden = !1),
      M(v.depth) && (v.depth = 2),
      M(v.colors) && (v.colors = !1),
      M(v.customInspect) && (v.customInspect = !0),
      v.colors && (v.stylize = o),
      i(v, c, v.depth)
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
  function s(c, d) {
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
      re(d.inspect) &&
      d.inspect !== t.inspect &&
      !(d.constructor && d.constructor.prototype === d)
    ) {
      var F = d.inspect(v, c);
      return B(F) || (F = i(c, F, v)), F;
    }
    var J = l(c, d);
    if (J) return J;
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
    if ((m(d) && ((me = !0), (je = ['[', ']'])), re(d))) {
      var Wr = d.name ? ': ' + d.name : '';
      j = ' [Function' + Wr + ']';
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
        : (it = T.map(function (jr) {
            return f(c, d, v, x, jr, me);
          })),
      c.seen.pop(),
      b(it, j, je)
    );
  }
  function l(c, d) {
    if (M(d)) return c.stylize('undefined', 'undefined');
    if (B(d)) {
      var v =
        "'" +
        JSON.stringify(d).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') +
        "'";
      return c.stylize(v, 'string');
    }
    if (C(d)) return c.stylize('' + d, 'number');
    if (g(d)) return c.stylize('' + d, 'boolean');
    if (P(d)) return c.stylize('null', 'null');
  }
  function p(c) {
    return '[' + Error.prototype.toString.call(c) + ']';
  }
  function y(c, d, v, F, J) {
    for (var T = [], x = 0, D = d.length; x < D; ++x)
      fe(d, String(x)) ? T.push(f(c, d, v, F, String(x), !0)) : T.push('');
    return (
      J.forEach(function (j) {
        j.match(/^\d+$/) || T.push(f(c, d, v, F, j, !0));
      }),
      T
    );
  }
  function f(c, d, v, F, J, T) {
    var x, D, j;
    if (
      ((j = Object.getOwnPropertyDescriptor(d, J) || { value: d[J] }),
      j.get
        ? j.set
          ? (D = c.stylize('[Getter/Setter]', 'special'))
          : (D = c.stylize('[Getter]', 'special'))
        : j.set && (D = c.stylize('[Setter]', 'special')),
      fe(F, J) || (x = '[' + J + ']'),
      D ||
        (c.seen.indexOf(j.value) < 0
          ? (P(v) ? (D = i(c, j.value, null)) : (D = i(c, j.value, v - 1)),
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
      if (T && J.match(/^\d+$/)) return D;
      (x = JSON.stringify('' + J)),
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
  function b(c, d, v) {
    var F = c.reduce(function (J, T) {
      return (
        T.indexOf(`
`) >= 0,
        J + T.replace(/\u001b\[\d\d?m/g, '').length + 1
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
  function B(c) {
    return typeof c == 'string';
  }
  t.isString = B;
  function ie(c) {
    return typeof c == 'symbol';
  }
  t.isSymbol = ie;
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
  (t.isPrimitive = I), (t.isBuffer = Sa);
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
    (t.inherits = wa),
    (t._extend = function (c, d) {
      if (!d || !U(d)) return c;
      for (var v = Object.keys(d), F = v.length; F--; ) c[v[F]] = d[v[F]];
      return c;
    });
  function fe(c, d) {
    return Object.prototype.hasOwnProperty.call(c, d);
  }
})(Nr);
var Aa = process.platform === 'win32',
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
function Be(t) {
  for (var e = t.length - 1, r = 0; r <= e && !t[r]; r++);
  for (var n = e; n >= 0 && !t[n]; n--);
  return r === 0 && n === e ? t : r > n ? [] : t.slice(r, n + 1);
}
var Rr = /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/,
  $a = /^([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/,
  z = {};
function ot(t) {
  var e = Rr.exec(t),
    r = (e[1] || '') + (e[2] || ''),
    n = e[3] || '',
    a = $a.exec(n),
    o = a[1],
    s = a[2],
    u = a[3];
  return [r, o, s, u];
}
function Dt(t) {
  var e = Rr.exec(t),
    r = e[1] || '',
    n = !!r && r[1] !== ':';
  return { device: r, isUnc: n, isAbsolute: n || !!e[2], tail: e[3] };
}
function Tr(t) {
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
      oe.isString(a))
    ) {
      if (!a) continue;
    } else throw new TypeError('Arguments to path.resolve must be strings');
    var o = Dt(a),
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
    u && (t = Tr(t)), (e = nt(e.split(/[\\\/]+/), !r).join('\\')), t + (r ? '\\' : '') + e || '.'
  );
};
z.normalize = function (t) {
  var e = Dt(t),
    r = e.device,
    n = e.isUnc,
    a = e.isAbsolute,
    o = e.tail,
    s = /[\\\/]$/.test(o);
  return (
    (o = nt(o.split(/[\\\/]+/), !a).join('\\')),
    !o && !a && (o = '.'),
    o && s && (o += '\\'),
    n && (r = Tr(r)),
    r + (a ? '\\' : '') + o
  );
};
z.isAbsolute = function (t) {
  return Dt(t).isAbsolute;
};
z.join = function () {
  for (var t = [], e = 0; e < arguments.length; e++) {
    var r = arguments[e];
    if (!oe.isString(r)) throw new TypeError('Arguments to path.join must be strings');
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
      s = Be(n.split('\\')),
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
z._makeLong = function (t) {
  if (!oe.isString(t)) return t;
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
  if (!oe.isObject(t))
    throw new TypeError("Parameter 'pathObject' must be an object, not " + typeof t);
  var e = t.root || '';
  if (!oe.isString(e))
    throw new TypeError("'pathObject.root' must be a string or undefined, not " + typeof t.root);
  var r = t.dir,
    n = t.base || '';
  return r ? (r[r.length - 1] === z.sep ? r + n : r + z.sep + n) : n;
};
z.parse = function (t) {
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
z.sep = '\\';
z.delimiter = ';';
var Pa = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,
  L = {};
function at(t) {
  return Pa.exec(t).slice(1);
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
    var r = Be(t.split('/')), n = Be(e.split('/')), a = Math.min(r.length, n.length), o = a, s = 0;
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
Aa ? (ze.exports = z) : (ze.exports = L);
ze.exports.posix = L;
ze.exports.win32 = z;
var Oa = ze.exports;
const Ea = cr(Oa),
  Ca = { key: 0 },
  xa = H({
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
            S(de, { 'class-name': t.className, name: t.icon }, null, 8, ['class-name', 'name']),
            t.title ? (_(), E('span', Ca, G(e.$t(t.title)), 1)) : ee('', !0),
          ],
          64,
        )
      );
    },
  });
const Pt = ye(xa, [['__scopeId', 'data-v-eb7cc837']]),
  Dr = H({
    __name: 'Link',
    props: { to: { type: String, required: !0 } },
    setup(t) {
      const e = t,
        r = be(() => Ze(e.to)),
        n = be(() => (r.value ? 'a' : 'router-link')),
        a = (o) => (r.value ? { href: o, target: '_blank', rel: 'noopener' } : { to: o });
      return (o, s) => (
        _(),
        V(ur(n.value), on(an(a(t.to))), { default: O(() => [nn(o.$slots, 'default')]), _: 3 }, 16)
      );
    },
  }),
  Ma = { key: 0 },
  Ia = H({
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
            ? ((r.value = zt(Ut({}, s), { path: '', noShowingChildren: !0 })), !0)
            : !1;
        },
        a = (o) => (Ze(o) ? o : Ze(e.basePath) ? e.basePath : Ea.resolve(e.basePath, o));
      return (o, s) => {
        const u = k('el-menu-item'),
          i = k('sidebar-item', !0),
          l = k('el-sub-menu');
        return t.item.hidden
          ? ee('', !0)
          : (_(),
            E('div', Ma, [
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
                    l,
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
                          ne,
                          null,
                          ce(
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
        const l = Ot(i, K().wholeMenus),
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
        dr(() => {
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
                    'default-active': u.value,
                    'unique-opened': !0,
                    collapse: h(n).sidebarMode === 'horizontal' ? !1 : h(n).collapseMenu,
                    mode: t.mode,
                    onSelect: l[0] || (l[0] = (f) => h(e)(f)),
                  },
                  {
                    default: O(() => [
                      (_(!0),
                      E(
                        ne,
                        null,
                        ce(
                          o.value,
                          (f) => (
                            _(),
                            V(
                              Ia,
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
  Fa = H({
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
            u = Ot(o, s)[0],
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
              'default-active': a.value,
              class: 'horizontal-header-menu',
              mode: 'horizontal',
              onSelect: s[0] || (s[0] = (l) => h(r)(l)),
            },
            {
              default: O(() => [
                (_(!0),
                E(
                  ne,
                  null,
                  ce(
                    h(K)().wholeMenus,
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
                                      Pt,
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
  Br = (t) => (Et('data-v-43e28501'), (t = t()), Ct(), t),
  ka = { class: 'color-list' },
  Na = ['onClick'],
  Ra = { class: 'options' },
  Ta = { class: 'options' },
  Da = Br(() => A('span', null, '灰色模式', -1)),
  Va = { class: 'options' },
  Ba = Br(() => A('span', null, '色弱模式', -1)),
  Ua = H({
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
          m = k('el-switch');
        return (
          _(),
          E('div', null, [
            A('div', ka, [
              (_(),
              E(
                ne,
                null,
                ce(u, (g) =>
                  A(
                    'div',
                    {
                      key: g,
                      class: 'cursor color-list-item',
                      style: pr({ backgroundColor: g }),
                      onClick: () => (s.value = g),
                    },
                    [
                      g === s.value
                        ? (_(), V(de, { key: 0, class: 'icon', name: 'iEL-select' }))
                        : ee('', !0),
                    ],
                    12,
                    Na,
                  ),
                ),
                64,
              )),
            ]),
            A('div', Ra, [
              A('span', null, G(y.$t('layout.customTheme')), 1),
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
            A('div', Ta, [
              Da,
              S(
                m,
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
            A('div', Va, [
              Ba,
              S(
                m,
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
const za = ye(Ua, [['__scopeId', 'data-v-43e28501']]),
  La = { class: 'options' },
  Wa = { class: 'options' },
  ja = { class: 'options' },
  qa = { class: 'options' },
  Ga = { class: 'options' },
  Ha = { class: 'options' },
  Ja = H({
    __name: 'index',
    setup(t) {
      const { appConfig: e, setAppConfigMode: r } = ae(),
        { persistent: n } = K(),
        a = W(e.value.labelPersistent),
        o = (u) => {
          u ? n() : yr.removeStorage('multiTabsList'), r({ labelPersistent: u });
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
            A('div', La, [
              A('span', null, G(u.$t('layout.hideSidebar')), 1),
              S(
                l,
                {
                  modelValue: h(e).hideSidebar,
                  'onUpdate:modelValue': i[0] || (i[0] = (f) => (h(e).hideSidebar = f)),
                  onChange: s,
                },
                null,
                8,
                ['modelValue'],
              ),
            ]),
            A('div', Wa, [
              A('span', null, G(u.$t('layout.hideNavBart')), 1),
              S(
                l,
                {
                  modelValue: h(e).hideNavbart,
                  'onUpdate:modelValue': i[1] || (i[1] = (f) => (h(e).hideNavbart = f)),
                  onChange: s,
                },
                null,
                8,
                ['modelValue'],
              ),
            ]),
            A('div', ja, [
              A('span', null, G(u.$t('layout.hideTabs')), 1),
              S(
                l,
                {
                  modelValue: h(e).hideTabs,
                  'onUpdate:modelValue': i[2] || (i[2] = (f) => (h(e).hideTabs = f)),
                  onChange: s,
                },
                null,
                8,
                ['modelValue'],
              ),
            ]),
            A('div', qa, [
              A('span', null, G(u.$t('layout.hideTabsConfig')), 1),
              S(
                l,
                {
                  modelValue: h(e).hideTabsConfig,
                  'onUpdate:modelValue': i[3] || (i[3] = (f) => (h(e).hideTabsConfig = f)),
                  onChange: s,
                },
                null,
                8,
                ['modelValue'],
              ),
            ]),
            A('div', Ga, [
              A('span', null, G(u.$t('layout.labelPersistent')), 1),
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
            A('div', Ha, [
              A('span', null, G(u.$t('layout.sidebarFold')), 1),
              S(
                y,
                {
                  modelValue: h(e).sidebarFold,
                  'onUpdate:modelValue': i[5] || (i[5] = (f) => (h(e).sidebarFold = f)),
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
const Qa = ye(Ja, [['__scopeId', 'data-v-22428868']]),
  Ur = (t) => (Et('data-v-8d6a7900'), (t = t()), Ct(), t),
  Ka = { class: 'setting' },
  Za = { class: 'drawer-content' },
  Ya = { class: 'layout_seting' },
  Xa = { class: 'sidebar_seting' },
  ei = ['onClick'],
  ti = Ur(() => A('div', null, null, -1)),
  ri = Ur(() => A('div', null, null, -1)),
  ni = [ti, ri],
  oi = H({
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
          yr.clearStorage(), window.location.reload();
        };
      return (l, p) => {
        const y = k('el-divider'),
          f = k('el-tooltip'),
          b = k('el-button'),
          m = k('el-drawer');
        return (
          _(),
          E('div', Ka, [
            S(
              m,
              {
                modelValue: n.value,
                'onUpdate:modelValue': p[0] || (p[0] = (g) => (n.value = g)),
                title: l.$t('layout.setup'),
                size: 320,
                onClose: p[1] || (p[1] = (g) => e('update:modelValue', !1)),
              },
              {
                default: O(() => [
                  A('div', Za, [
                    S(
                      y,
                      { 'content-position': 'center' },
                      { default: O(() => [Re(G(l.$t('layout.layoutSettings')), 1)]), _: 1 },
                    ),
                    A('div', Ya, [
                      A('div', Xa, [
                        (_(),
                        E(
                          ne,
                          null,
                          ce(s, (g) =>
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
                                        { 'sidebar_mode-select': h(a).sidebarMode === g.value },
                                      ]),
                                      onClick: (P) => u(g.value),
                                    },
                                    ni,
                                    10,
                                    ei,
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
                      { default: O(() => [Re(G(l.$t('layout.themeSettings')), 1)]), _: 1 },
                    ),
                    A('div', null, [S(za)]),
                    S(
                      y,
                      { 'content-position': 'center' },
                      { default: O(() => [Re(G(l.$t('layout.pageSettings')), 1)]), _: 1 },
                    ),
                    A('div', null, [S(Qa)]),
                    S(
                      b,
                      { class: 'clear_storage', type: 'danger', onClick: i },
                      { default: O(() => [Re(G(l.$t('layout.clearStorage')), 1)]), _: 1 },
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
const ai = ye(oi, [['__scopeId', 'data-v-8d6a7900']]),
  zr = H({
    __name: 'index',
    setup(t) {
      const { appConfig: e, setAppConfigMode: r } = ae(),
        n = () => {
          r({ collapseMenu: !e.value.collapseMenu });
        };
      return (a, o) => (
        _(),
        V(
          de,
          {
            class: Fe(['breadcrumb-fold cursor', { 'breadcrumb-unfold': h(e).collapseMenu }]),
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
const ii = { class: 'breadcrumb' },
  li = { key: 0, class: 'no-redirect' },
  si = ['onClick'],
  ui = H({
    __name: 'index',
    setup(t) {
      var p;
      const { multiTabs: e } = K(),
        r = W([]),
        n = Ue(),
        a = Le(),
        o =
          ((p = Ue().options.routes.find((y) => y.path === '/')) == null ? void 0 : p.children) ||
          [],
        s = () => {
          const y = [];
          Ot(n.currentRoute.value.matched[1].path || '', o || []).forEach((m) => {
            m !== '/' && y.push(rt(m, o || []));
          });
          const b = e.find((m) => {
            let g = {};
            return (
              m.query && (g = JSON.parse(JSON.stringify(m.query))),
              y.find((P) => P.path === m.path)
                ? !1
                : a.name === m.name && cn(a.query, g) && a.path === m.path
            );
          });
          b && y.push(b),
            (r.value = y.filter((m) => m && m.meta && m.meta.title && !m.meta.breadcrumb));
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
      dr(s), _e(a, s);
      const { appConfig: l } = ae();
      return (y, f) => {
        const b = k('el-breadcrumb-item'),
          m = k('el-breadcrumb');
        return (
          _(),
          E('div', ii, [
            h(l).sidebarFold === 'top' ? (_(), V(zr, { key: 0, class: 'app-fold' })) : ee('', !0),
            S(
              m,
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
                          ce(
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
                                            li,
                                            G(h(ht)((w = g.meta) == null ? void 0 : w.title)),
                                            1,
                                          ))
                                        : (_(),
                                          E(
                                            'a',
                                            {
                                              key: 1,
                                              class: 'redirect',
                                              onClick: fr((B) => i(g), ['prevent']),
                                            },
                                            G(h(ht)((C = g.meta) == null ? void 0 : C.title)),
                                            9,
                                            si,
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
const ci = ye(ui, [['__scopeId', 'data-v-93ebfb7e']]),
  fi = (t) => (Et('data-v-6936206f'), (t = t()), Ct(), t),
  pi = fi(() =>
    A(
      'div',
      { class: 'logo' },
      [A('img', { class: 'logo_img', src: dn, mode: 'scaleToFill' })],
      -1,
    ),
  ),
  di = { class: 'name' },
  yi = H({
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
              { 'app-logo-hide': h(e).collapseMenu && h(e).sidebarMode !== 'horizontal' },
            ]),
          },
          [pi, A('span', di, G(h(r).title), 1)],
          2,
        )
      );
    },
  });
const Lr = ye(yi, [['__scopeId', 'data-v-6936206f']]),
  vi = { class: 'navbar' },
  mi = { class: 'navbar-content' },
  hi = { class: 'navbar-left' },
  gi = { class: 'navbar-center' },
  bi = { class: 'navbar-right' },
  _i = { class: 'setting-icon cursor' },
  Si = H({
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
          E('div', vi, [
            Qe(
              A(
                'div',
                mi,
                [
                  A('div', hi, [
                    h(r).sidebarMode === 'vertical' || h(r).drawerSidebar
                      ? (_(), V(ci, { key: 0 }))
                      : ee('', !0),
                    h(r).sidebarMode === 'horizontal' && !h(r).drawerSidebar
                      ? (_(), V(Lr, { key: 1 }))
                      : ee('', !0),
                  ]),
                  A('div', gi, [
                    h(r).drawerSidebar
                      ? ee('', !0)
                      : (_(),
                        E(
                          ne,
                          { key: 0 },
                          [
                            h(r).sidebarMode === 'horizontal'
                              ? (_(),
                                V(Vr, { key: 0, class: 'sidebar-horizontal', mode: 'horizontal' }))
                              : ee('', !0),
                            h(r).sidebarMode === 'blend'
                              ? (_(),
                                V(Fa, { key: 1, class: 'sidebar-horizontal', mode: 'horizontal' }))
                              : ee('', !0),
                          ],
                          64,
                        )),
                  ]),
                  A('div', bi, [
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
                    S(h(yn), { class: 'icon' }),
                    S(h(vn)),
                    S(h(mn)),
                    S(de, {
                      class: 'cursor',
                      name: 'iEL-setting',
                      onClick: s[0] || (s[0] = (i) => (e.value = !0)),
                    }),
                  ]),
                ],
                512,
              ),
              [[Ke, !h(r).hideNavbart]],
            ),
            Qe(
              A(
                'div',
                _i,
                [S(de, { name: 'iEL-setting', onClick: s[1] || (s[1] = (i) => (e.value = !0)) })],
                512,
              ),
              [[Ke, h(r).hideNavbart]],
            ),
            S(
              ai,
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
const wi = ye(Si, [['__scopeId', 'data-v-5fbe5d9c']]),
  Ai = { key: 0, class: 'sidebar-fold' },
  $i = H({
    __name: 'index',
    setup(t) {
      const { appConfig: e } = ae();
      return (r, n) =>
        Qe(
          (_(),
          E(
            'div',
            { class: Fe(['sidebar-container', { hideSidebar: h(e).collapseMenu }]) },
            [
              S(Lr),
              S(Vr, { mode: 'vertical' }),
              (h(e).sidebarFold === 'bottom' || h(e).sidebarMode === 'blend') &&
              h(e).sidebarFold !== 'none'
                ? (_(), E('div', Ai, [S(zr)]))
                : ee('', !0),
            ],
            2,
          )),
          [[Ke, (!h(e).hideSidebar && h(e).sidebarMode !== 'horizontal') || h(e).drawerSidebar]],
        );
    },
  });
const lr = ye($i, [['__scopeId', 'data-v-28546dbe']]),
  Pi = H({
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
        i = pn(() => {
          (u.value = Wt('(max-width: 1024px)').value),
            (s.value = Wt('(max-width: 750px)').value),
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
        hn(window, 'resize', () => i()),
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
                { default: O(() => [S(lr)]), _: 1 },
                8,
                ['modelValue'],
              ))
            : (_(), V(lr, { key: 1 }));
        }
      );
    },
  });
const Oi = { class: 'app-wrapper' },
  Ei = { class: 'main-container' },
  Ri = H({
    __name: 'index',
    setup(t) {
      return (e, r) => (_(), E('div', Oi, [S(Pi), A('div', Ei, [S(wi), S(_a), S(Sn)])]));
    },
  });
export { Ri as default };
