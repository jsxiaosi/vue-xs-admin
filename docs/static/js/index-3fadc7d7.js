import {
  d as w,
  r as Q,
  A as W,
  B as I,
  C as X,
  k as Z,
  f as c,
  F as ee,
  u as x,
  j as L,
  D as te,
  G as ne,
  H as re,
  h as v,
  I as ae,
  o as ie,
  c as oe,
} from './index-d51bcef7.js';
import { _ as z } from './plugin-vueexport-helper-c27b6911.js';
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */ function D(e) {
  return Object.prototype.toString.call(e) === '[object Object]';
}
function le(e) {
  var r, t;
  return D(e) === !1
    ? !1
    : ((r = e.constructor),
      r === void 0
        ? !0
        : ((t = r.prototype), !(D(t) === !1 || t.hasOwnProperty('isPrototypeOf') === !1)));
}
function V() {
  return (
    (V = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var r = 1; r < arguments.length; r++) {
            var t = arguments[r];
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          }
          return e;
        }),
    V.apply(this, arguments)
  );
}
function M(e, r) {
  if (e == null) return {};
  var t,
    n,
    a = {},
    i = Object.keys(e);
  for (n = 0; n < i.length; n++) r.indexOf((t = i[n])) >= 0 || (a[t] = e[t]);
  return a;
}
const se = { silent: !1, logLevel: 'warn' },
  ue = ['validator'],
  Y = Object.prototype,
  R = Y.toString,
  ce = Y.hasOwnProperty,
  U = /^\s*function (\w+)/;
function F(e) {
  var r;
  const t = (r = e == null ? void 0 : e.type) !== null && r !== void 0 ? r : e;
  if (t) {
    const n = t.toString().match(U);
    return n ? n[1] : '';
  }
  return '';
}
const g = le,
  de = (e) => e;
let f = de;
const _ = (e, r) => ce.call(e, r),
  fe =
    Number.isInteger ||
    function (e) {
      return typeof e == 'number' && isFinite(e) && Math.floor(e) === e;
    },
  O =
    Array.isArray ||
    function (e) {
      return R.call(e) === '[object Array]';
    },
  j = (e) => R.call(e) === '[object Function]',
  $ = (e, r) => g(e) && _(e, '_vueTypes_name') && (!r || e._vueTypes_name === r),
  G = (e) =>
    g(e) &&
    (_(e, 'type') || ['_vueTypes_name', 'validator', 'default', 'required'].some((r) => _(e, r)));
function P(e, r) {
  return Object.defineProperty(e.bind(r), '__original', { value: e });
}
function h(e, r, t = !1) {
  let n,
    a = !0,
    i = '';
  n = g(e) ? e : { type: e };
  const o = $(n) ? n._vueTypes_name + ' - ' : '';
  if (G(n) && n.type !== null) {
    if (n.type === void 0 || n.type === !0 || (!n.required && r == null)) return a;
    O(n.type)
      ? ((a = n.type.some((l) => h(l, r, !0) === !0)), (i = n.type.map((l) => F(l)).join(' or ')))
      : ((i = F(n)),
        (a =
          i === 'Array'
            ? O(r)
            : i === 'Object'
            ? g(r)
            : i === 'String' || i === 'Number' || i === 'Boolean' || i === 'Function'
            ? (function (l) {
                if (l == null) return '';
                const s = l.constructor.toString().match(U);
                return s ? s[1].replace(/^Async/, '') : '';
              })(r) === i
            : r instanceof n.type));
  }
  if (!a) {
    const l = `${o}value "${r}" should be of type "${i}"`;
    return t === !1 ? (f(l), !1) : l;
  }
  if (_(n, 'validator') && j(n.validator)) {
    const l = f,
      s = [];
    if (
      ((f = (u) => {
        s.push(u);
      }),
      (a = n.validator(r)),
      (f = l),
      !a)
    ) {
      const u =
        (s.length > 1 ? '* ' : '') +
        s.join(`
* `);
      return (s.length = 0), t === !1 ? (f(u), a) : u;
    }
  }
  return a;
}
function y(e, r) {
  const t = Object.defineProperties(r, {
      _vueTypes_name: { value: e, writable: !0 },
      isRequired: {
        get() {
          return (this.required = !0), this;
        },
      },
      def: {
        value(a) {
          return a === void 0
            ? this.type === Boolean || (Array.isArray(this.type) && this.type.includes(Boolean))
              ? void (this.default = void 0)
              : (_(this, 'default') && delete this.default, this)
            : j(a) || h(this, a, !0) === !0
            ? ((this.default = O(a) ? () => [...a] : g(a) ? () => Object.assign({}, a) : a), this)
            : (f(`${this._vueTypes_name} - invalid default value: "${a}"`), this);
        },
      },
    }),
    { validator: n } = t;
  return j(n) && (t.validator = P(n, t)), t;
}
function m(e, r) {
  const t = y(e, r);
  return Object.defineProperty(t, 'validate', {
    value(n) {
      return (
        j(this.validator) &&
          f(`${
            this._vueTypes_name
          } - calling .validate() will overwrite the current custom validator function. Validator info:
${JSON.stringify(this)}`),
        (this.validator = P(n, this)),
        this
      );
    },
  });
}
function k(e, r, t) {
  const n = (function (s) {
    const u = {};
    return (
      Object.getOwnPropertyNames(s).forEach((d) => {
        u[d] = Object.getOwnPropertyDescriptor(s, d);
      }),
      Object.defineProperties({}, u)
    );
  })(r);
  if (((n._vueTypes_name = e), !g(t))) return n;
  const { validator: a } = t,
    i = M(t, ue);
  if (j(a)) {
    let { validator: s } = n;
    s && (s = (l = (o = s).__original) !== null && l !== void 0 ? l : o),
      (n.validator = P(
        s
          ? function (u) {
              return s.call(this, u) && a.call(this, u);
            }
          : a,
        n,
      ));
  }
  var o, l;
  return Object.assign(n, i);
}
function S(e) {
  return e.replace(/^(?!\s*$)/gm, '  ');
}
const pe = () => m('any', {}),
  ye = () => m('function', { type: Function }),
  q = () => m('boolean', { type: Boolean }),
  ve = () => m('string', { type: String }),
  me = () => m('number', { type: Number }),
  be = () => m('array', { type: Array }),
  ge = () => m('object', { type: Object }),
  he = () =>
    y('integer', {
      type: Number,
      validator(e) {
        const r = fe(e);
        return r === !1 && f(`integer - "${e}" is not an integer`), r;
      },
    }),
  _e = () =>
    y('symbol', {
      validator(e) {
        const r = typeof e == 'symbol';
        return r === !1 && f(`symbol - invalid value "${e}"`), r;
      },
    }),
  Oe = () =>
    Object.defineProperty(
      {
        type: null,
        validator(e) {
          const r = e === null;
          return r === !1 && f('nullable - value should be null'), r;
        },
      },
      '_vueTypes_name',
      { value: 'nullable' },
    );
function je(e, r = 'custom validation failed') {
  if (typeof e != 'function')
    throw new TypeError('[VueTypes error]: You must provide a function as argument');
  return y(e.name || '<<anonymous function>>', {
    type: null,
    validator(t) {
      const n = e(t);
      return n || f(`${this._vueTypes_name} - ${r}`), n;
    },
  });
}
function Ve(e) {
  if (!O(e)) throw new TypeError('[VueTypes error]: You must provide an array as argument.');
  const r = `oneOf - value should be one of "${e
      .map((n) => (typeof n == 'symbol' ? n.toString() : n))
      .join('", "')}".`,
    t = {
      validator(n) {
        const a = e.indexOf(n) !== -1;
        return a || f(r), a;
      },
    };
  if (e.indexOf(null) === -1) {
    const n = e.reduce((a, i) => {
      if (i != null) {
        const o = i.constructor;
        a.indexOf(o) === -1 && a.push(o);
      }
      return a;
    }, []);
    n.length > 0 && (t.type = n);
  }
  return y('oneOf', t);
}
function Te(e) {
  if (!O(e)) throw new TypeError('[VueTypes error]: You must provide an array as argument');
  let r = !1,
    t = !1,
    n = [];
  for (let i = 0; i < e.length; i += 1) {
    const o = e[i];
    if (G(o)) {
      if ((j(o.validator) && (r = !0), $(o, 'oneOf') && o.type)) {
        n = n.concat(o.type);
        continue;
      }
      if ($(o, 'nullable')) {
        t = !0;
        continue;
      }
      if (o.type === !0 || !o.type) {
        f('oneOfType - invalid usage of "true" and "null" as types.');
        continue;
      }
      n = n.concat(o.type);
    } else n.push(o);
  }
  n = n.filter((i, o) => n.indexOf(i) === o);
  const a = t === !1 && n.length > 0 ? n : null;
  return y(
    'oneOfType',
    r
      ? {
          type: a,
          validator(i) {
            const o = [],
              l = e.some((s) => {
                const u = h(s, i, !0);
                return typeof u == 'string' && o.push(u), u === !0;
              });
            return (
              l ||
                f(`oneOfType - provided value does not match any of the ${
                  o.length
                } passed-in validators:
${S(
  o.join(`
`),
)}`),
              l
            );
          },
        }
      : { type: a },
  );
}
function xe(e) {
  return y('arrayOf', {
    type: Array,
    validator(r) {
      let t = '';
      const n = r.every((a) => ((t = h(e, a, !0)), t === !0));
      return (
        n ||
          f(`arrayOf - value validation error:
${S(t)}`),
        n
      );
    },
  });
}
function $e(e) {
  return y('instanceOf', { type: e });
}
function we(e) {
  return y('objectOf', {
    type: Object,
    validator(r) {
      let t = '';
      const n = Object.keys(r).every((a) => ((t = h(e, r[a], !0)), t === !0));
      return (
        n ||
          f(`objectOf - value validation error:
${S(t)}`),
        n
      );
    },
  });
}
function Se(e) {
  const r = Object.keys(e),
    t = r.filter((a) => {
      var i;
      return !((i = e[a]) === null || i === void 0 || !i.required);
    }),
    n = y('shape', {
      type: Object,
      validator(a) {
        if (!g(a)) return !1;
        const i = Object.keys(a);
        if (t.length > 0 && t.some((o) => i.indexOf(o) === -1)) {
          const o = t.filter((l) => i.indexOf(l) === -1);
          return (
            f(
              o.length === 1
                ? `shape - required property "${o[0]}" is not defined.`
                : `shape - required properties "${o.join('", "')}" are not defined.`,
            ),
            !1
          );
        }
        return i.every((o) => {
          if (r.indexOf(o) === -1)
            return (
              this._vueTypes_isLoose === !0 ||
              (f(
                `shape - shape definition does not include a "${o}" property. Allowed keys: "${r.join(
                  '", "',
                )}".`,
              ),
              !1)
            );
          const l = h(e[o], a[o], !0);
          return (
            typeof l == 'string' &&
              f(`shape - "${o}" property validation error:
 ${S(l)}`),
            l === !0
          );
        });
      },
    });
  return (
    Object.defineProperty(n, '_vueTypes_isLoose', { writable: !0, value: !1 }),
    Object.defineProperty(n, 'loose', {
      get() {
        return (this._vueTypes_isLoose = !0), this;
      },
    }),
    n
  );
}
const Ae = ['name', 'validate', 'getter'],
  Pe = (() => {
    var e;
    return (
      ((e = class {
        static get any() {
          return pe();
        }
        static get func() {
          return ye().def(this.defaults.func);
        }
        static get bool() {
          return this.defaults.bool === void 0 ? q() : q().def(this.defaults.bool);
        }
        static get string() {
          return ve().def(this.defaults.string);
        }
        static get number() {
          return me().def(this.defaults.number);
        }
        static get array() {
          return be().def(this.defaults.array);
        }
        static get object() {
          return ge().def(this.defaults.object);
        }
        static get integer() {
          return he().def(this.defaults.integer);
        }
        static get symbol() {
          return _e();
        }
        static get nullable() {
          return Oe();
        }
        static extend(r) {
          if (
            (f(
              'VueTypes.extend is deprecated. Use the ES6+ method instead. See https://dwightjack.github.io/vue-types/advanced/extending-vue-types.html#extending-namespaced-validators-in-es6 for details.',
            ),
            O(r))
          )
            return r.forEach((s) => this.extend(s)), this;
          const { name: t, validate: n = !1, getter: a = !1 } = r,
            i = M(r, Ae);
          if (_(this, t)) throw new TypeError(`[VueTypes error]: Type "${t}" already defined`);
          const { type: o } = i;
          if ($(o))
            return (
              delete i.type,
              Object.defineProperty(
                this,
                t,
                a
                  ? { get: () => k(t, o, i) }
                  : {
                      value(...s) {
                        const u = k(t, o, i);
                        return u.validator && (u.validator = u.validator.bind(u, ...s)), u;
                      },
                    },
              )
            );
          let l;
          return (
            (l = a
              ? {
                  get() {
                    const s = Object.assign({}, i);
                    return n ? m(t, s) : y(t, s);
                  },
                  enumerable: !0,
                }
              : {
                  value(...s) {
                    const u = Object.assign({}, i);
                    let d;
                    return (
                      (d = n ? m(t, u) : y(t, u)),
                      u.validator && (d.validator = u.validator.bind(d, ...s)),
                      d
                    );
                  },
                  enumerable: !0,
                }),
            Object.defineProperty(this, t, l)
          );
        }
      }).defaults = {}),
      (e.sensibleDefaults = void 0),
      (e.config = se),
      (e.custom = je),
      (e.oneOf = Ve),
      (e.instanceOf = $e),
      (e.oneOfType = Te),
      (e.arrayOf = xe),
      (e.objectOf = we),
      (e.shape = Se),
      (e.utils = {
        validate: (r, t) => h(t, r, !0) === !0,
        toType: (r, t, n = !1) => (n ? m(r, t) : y(r, t)),
      }),
      e
    );
  })();
function J(
  e = {
    func: () => {},
    bool: !0,
    string: '',
    number: 0,
    array: () => [],
    object: () => ({}),
    integer: 0,
  },
) {
  var r;
  return (
    ((r = class extends Pe {
      static get sensibleDefaults() {
        return V({}, this.defaults);
      }
      static set sensibleDefaults(t) {
        this.defaults = t !== !1 ? V({}, t !== !0 ? t : e) : {};
      }
    }).defaults = V({}, e)),
    r
  );
}
class Ie extends J() {}
const p = J({
    func: void 0,
    bool: void 0,
    string: void 0,
    number: void 0,
    object: void 0,
    integer: void 0,
  }),
  Ne = {
    startVal: p.number.def(0),
    endVal: p.number.def(2020),
    duration: p.number.def(1300),
    autoplay: p.bool.def(!0),
    decimals: {
      type: Number,
      required: !1,
      default: 0,
      validator(e) {
        return e >= 0;
      },
    },
    color: p.string.def(),
    fontSize: p.string.def(),
    decimal: p.string.def('.'),
    separator: p.string.def(','),
    prefix: p.string.def(''),
    suffix: p.string.def(''),
    useEasing: p.bool.def(!0),
    easingFn: {
      type: Function,
      default(e, r, t, n) {
        return (t * (-Math.pow(2, (-10 * e) / n) + 1) * 1024) / 1023 + r;
      },
    },
  },
  B = w({
    name: 'CountToNormal',
    props: Ne,
    emits: ['mounted', 'callback'],
    setup(e, { emit: r }) {
      const t = Q({
          localStartVal: e.startVal,
          displayValue: o(e.startVal),
          printVal: null,
          paused: !1,
          localDuration: e.duration,
          startTime: null,
          timestamp: null,
          remaining: null,
          rAF: null,
        }),
        n = W(() => e.startVal > e.endVal);
      I([() => e.startVal, () => e.endVal], () => {
        e.autoplay && a();
      });
      function a() {
        const { startVal: l, duration: s } = e;
        (t.localStartVal = l),
          (t.startTime = null),
          (t.localDuration = s),
          (t.paused = !1),
          (t.rAF = requestAnimationFrame(i));
      }
      function i(l) {
        const { useEasing: s, easingFn: u, endVal: d } = e;
        t.startTime || (t.startTime = l), (t.timestamp = l);
        const b = l - t.startTime;
        (t.remaining = t.localDuration - b),
          s
            ? x(n)
              ? (t.printVal = t.localStartVal - u(b, 0, t.localStartVal - d, t.localDuration))
              : (t.printVal = u(b, t.localStartVal, d - t.localStartVal, t.localDuration))
            : x(n)
            ? (t.printVal = t.localStartVal - (t.localStartVal - d) * (b / t.localDuration))
            : (t.printVal = t.localStartVal + (d - t.localStartVal) * (b / t.localDuration)),
          x(n)
            ? (t.printVal = t.printVal < d ? d : t.printVal)
            : (t.printVal = t.printVal > d ? d : t.printVal),
          (t.displayValue = o(t.printVal)),
          b < t.localDuration ? (t.rAF = requestAnimationFrame(i)) : r('callback');
      }
      function o(l) {
        const { decimals: s, decimal: u, separator: d, suffix: b, prefix: H } = e;
        (l = Number(l).toFixed(s)), (l += '');
        const A = l.split('.');
        let T = A[0];
        const K = A.length > 1 ? u + A[1] : '',
          N = /(\d+)(\d{3})/;
        if (d && !X(d)) for (; N.test(T); ) T = T.replace(N, '$1' + d + '$2');
        return H + T + K + b;
      }
      return (
        Z(() => {
          e.autoplay && a(), r('mounted');
        }),
        () => c(ee, null, [c('span', null, [t.displayValue])])
      );
    },
  }),
  De = {
    delay: p.number.def(1),
    blur: p.number.def(2),
    i: {
      type: Number,
      required: !1,
      default: 0,
      validator(e) {
        return e < 10 && e >= 0 && Number.isInteger(e);
      },
    },
  },
  Fe = w({
    name: 'CountToRebound',
    props: De,
    setup(e) {
      const r = L(null);
      return (
        te(() => {
          const t = navigator.userAgent.toLowerCase(),
            n = (i) => i.test(t);
          n(/safari/g) &&
            !n(/chrome/g) &&
            (r.value = setTimeout(() => {
              ne().refs.ul.setAttribute(
                'style',
                `
        animation: none;
        transform: translateY(calc(var(--i) * -9.09%))
      `,
              );
            }, e.delay * 1e3));
        }),
        re(() => {
          clearTimeout(x(r));
        }),
        () =>
          c('div', { class: 'scroll-num', style: { '--i': e.i, '--delay': e.delay } }, [
            c('ul', { ref: 'ul', style: { fontSize: '1em' } }, [
              c('li', null, [v('0')]),
              c('li', null, [v('1')]),
              c('li', null, [v('2')]),
              c('li', null, [v('3')]),
              c('li', null, [v('4')]),
              c('li', null, [v('5')]),
              c('li', null, [v('6')]),
              c('li', null, [v('7')]),
              c('li', null, [v('8')]),
              c('li', null, [v('9')]),
              c('li', null, [v('0')]),
            ]),
            c('svg', { width: '0', height: '0' }, [
              c('filter', { id: 'blur' }, [
                c('feGaussianBlur', { in: 'SourceGraphic', stdDeviation: `0 ${e.blur}` }, null),
              ]),
            ]),
          ])
      );
    },
  });
const E = z(Fe, [['__scopeId', 'data-v-a9f931d1']]),
  ke = {
    type: p.string.def('normal'),
    prefix: p.string.def(''),
    duration: p.number.def(2e3),
    startVal: p.number.def(0),
    numVal: p.number.def(1666),
  },
  qe = w({
    name: 'CountTo',
    components: { Normal: B, Rebound: E },
    props: ke,
    setup(e) {
      const r = L([]);
      return (
        I(
          [() => e.numVal],
          () => {
            e.type === 'rebound' && (r.value = ae(e.numVal));
          },
          { immediate: !0 },
        ),
        () =>
          c('div', null, [
            e.type === 'normal'
              ? c(
                  B,
                  {
                    prefix: e.prefix,
                    duration: e.duration,
                    'start-val': e.startVal,
                    'end-val': e.numVal,
                  },
                  null,
                )
              : c('div', { class: 'rebound' }, [
                  c('span', null, [e.prefix]),
                  r.value.map((t, n) => c(E, { key: n, i: t, blur: n, delay: n + 1 }, null)),
                ]),
          ])
      );
    },
  });
const C = z(qe, [['__scopeId', 'data-v-bf1793a0']]),
  Be = { class: 'page-container' },
  Le = w({
    __name: 'index',
    setup(e) {
      return (r, t) => (
        ie(),
        oe('div', Be, [
          c(C, { style: { 'font-size': '36px' }, 'num-val': 2e3 }),
          c(C, { style: { 'font-size': '36px' }, type: 'rebound', 'num-val': 1234212 }),
        ])
      );
    },
  });
export { Le as default };
