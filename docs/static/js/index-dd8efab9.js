var fe = Object.defineProperty,
  de = Object.defineProperties;
var ce = Object.getOwnPropertyDescriptors;
var Wt = Object.getOwnPropertySymbols;
var ve = Object.prototype.hasOwnProperty,
  pe = Object.prototype.propertyIsEnumerable;
var Xt = (F, C, r) =>
    C in F ? fe(F, C, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (F[C] = r),
  tt = (F, C) => {
    for (var r in C || (C = {})) ve.call(C, r) && Xt(F, r, C[r]);
    if (Wt) for (var r of Wt(C)) pe.call(C, r) && Xt(F, r, C[r]);
    return F;
  },
  ct = (F, C) => de(F, ce(C));
import {
  U as he,
  d as ge,
  j as zt,
  V as me,
  k as Ae,
  o as ye,
  c as xe,
  g as Zt,
  u as Ee,
  W as Kt,
} from './index-1eb240fe.js';
import { _ as Se } from './plugin-vueexport-helper-c27b6911.js';
var ie = { exports: {} };
(function (F, C) {
  (function (e, t) {
    F.exports = t();
  })(window, function () {
    return (function (r) {
      var e = {};
      function t(n) {
        if (e[n]) return e[n].exports;
        var o = (e[n] = { i: n, l: !1, exports: {} });
        return r[n].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
      }
      return (
        (t.m = r),
        (t.c = e),
        (t.d = function (n, o, a) {
          t.o(n, o) || Object.defineProperty(n, o, { enumerable: !0, get: a });
        }),
        (t.r = function (n) {
          typeof Symbol != 'undefined' &&
            Symbol.toStringTag &&
            Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' }),
            Object.defineProperty(n, '__esModule', { value: !0 });
        }),
        (t.t = function (n, o) {
          if ((o & 1 && (n = t(n)), o & 8 || (o & 4 && typeof n == 'object' && n && n.__esModule)))
            return n;
          var a = Object.create(null);
          if (
            (t.r(a),
            Object.defineProperty(a, 'default', { enumerable: !0, value: n }),
            o & 2 && typeof n != 'string')
          )
            for (var i in n)
              t.d(
                a,
                i,
                function (s) {
                  return n[s];
                }.bind(null, i),
              );
          return a;
        }),
        (t.n = function (n) {
          var o =
            n && n.__esModule
              ? function () {
                  return n.default;
                }
              : function () {
                  return n;
                };
          return t.d(o, 'a', o), o;
        }),
        (t.o = function (n, o) {
          return Object.prototype.hasOwnProperty.call(n, o);
        }),
        (t.p = ''),
        t((t.s = 141))
      );
    })([
      function (r, e) {
        function t(n) {
          return n && n.__esModule ? n : { default: n };
        }
        r.exports = t;
      },
      function (r, e, t) {
        r.exports = t(142);
      },
      function (r, e, t) {
        t.r(e),
          t.d(e, '__extends', function () {
            return o;
          }),
          t.d(e, '__assign', function () {
            return a;
          }),
          t.d(e, '__rest', function () {
            return i;
          }),
          t.d(e, '__decorate', function () {
            return s;
          }),
          t.d(e, '__param', function () {
            return h;
          }),
          t.d(e, '__metadata', function () {
            return u;
          }),
          t.d(e, '__awaiter', function () {
            return d;
          }),
          t.d(e, '__generator', function () {
            return v;
          }),
          t.d(e, '__createBinding', function () {
            return l;
          }),
          t.d(e, '__exportStar', function () {
            return c;
          }),
          t.d(e, '__values', function () {
            return f;
          }),
          t.d(e, '__read', function () {
            return g;
          }),
          t.d(e, '__spread', function () {
            return p;
          }),
          t.d(e, '__spreadArrays', function () {
            return m;
          }),
          t.d(e, '__spreadArray', function () {
            return A;
          }),
          t.d(e, '__await', function () {
            return y;
          }),
          t.d(e, '__asyncGenerator', function () {
            return E;
          }),
          t.d(e, '__asyncDelegator', function () {
            return S;
          }),
          t.d(e, '__asyncValues', function () {
            return R;
          }),
          t.d(e, '__makeTemplateObject', function () {
            return P;
          }),
          t.d(e, '__importStar', function () {
            return x;
          }),
          t.d(e, '__importDefault', function () {
            return T;
          }),
          t.d(e, '__classPrivateFieldGet', function () {
            return I;
          }),
          t.d(e, '__classPrivateFieldSet', function () {
            return N;
          });
        /*! *****************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */ var n = function (
          M,
          L,
        ) {
          return (
            (n =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (O, B) {
                  O.__proto__ = B;
                }) ||
              function (O, B) {
                for (var w in B) Object.prototype.hasOwnProperty.call(B, w) && (O[w] = B[w]);
              }),
            n(M, L)
          );
        };
        function o(M, L) {
          if (typeof L != 'function' && L !== null)
            throw new TypeError(
              'Class extends value ' + String(L) + ' is not a constructor or null',
            );
          n(M, L);
          function O() {
            this.constructor = M;
          }
          M.prototype = L === null ? Object.create(L) : ((O.prototype = L.prototype), new O());
        }
        var a = function () {
          return (
            (a =
              Object.assign ||
              function (L) {
                for (var O, B = 1, w = arguments.length; B < w; B++) {
                  O = arguments[B];
                  for (var H in O) Object.prototype.hasOwnProperty.call(O, H) && (L[H] = O[H]);
                }
                return L;
              }),
            a.apply(this, arguments)
          );
        };
        function i(M, L) {
          var O = {};
          for (var B in M)
            Object.prototype.hasOwnProperty.call(M, B) && L.indexOf(B) < 0 && (O[B] = M[B]);
          if (M != null && typeof Object.getOwnPropertySymbols == 'function')
            for (var w = 0, B = Object.getOwnPropertySymbols(M); w < B.length; w++)
              L.indexOf(B[w]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(M, B[w]) &&
                (O[B[w]] = M[B[w]]);
          return O;
        }
        function s(M, L, O, B) {
          var w = arguments.length,
            H = w < 3 ? L : B === null ? (B = Object.getOwnPropertyDescriptor(L, O)) : B,
            b;
          if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
            H = Reflect.decorate(M, L, O, B);
          else
            for (var U = M.length - 1; U >= 0; U--)
              (b = M[U]) && (H = (w < 3 ? b(H) : w > 3 ? b(L, O, H) : b(L, O)) || H);
          return w > 3 && H && Object.defineProperty(L, O, H), H;
        }
        function h(M, L) {
          return function (O, B) {
            L(O, B, M);
          };
        }
        function u(M, L) {
          if (typeof Reflect == 'object' && typeof Reflect.metadata == 'function')
            return Reflect.metadata(M, L);
        }
        function d(M, L, O, B) {
          function w(H) {
            return H instanceof O
              ? H
              : new O(function (b) {
                  b(H);
                });
          }
          return new (O || (O = Promise))(function (H, b) {
            function U(W) {
              try {
                j(B.next(W));
              } catch (G) {
                b(G);
              }
            }
            function K(W) {
              try {
                j(B.throw(W));
              } catch (G) {
                b(G);
              }
            }
            function j(W) {
              W.done ? H(W.value) : w(W.value).then(U, K);
            }
            j((B = B.apply(M, L || [])).next());
          });
        }
        function v(M, L) {
          var O = {
              label: 0,
              sent: function () {
                if (H[0] & 1) throw H[1];
                return H[1];
              },
              trys: [],
              ops: [],
            },
            B,
            w,
            H,
            b;
          return (
            (b = { next: U(0), throw: U(1), return: U(2) }),
            typeof Symbol == 'function' &&
              (b[Symbol.iterator] = function () {
                return this;
              }),
            b
          );
          function U(j) {
            return function (W) {
              return K([j, W]);
            };
          }
          function K(j) {
            if (B) throw new TypeError('Generator is already executing.');
            for (; O; )
              try {
                if (
                  ((B = 1),
                  w &&
                    (H =
                      j[0] & 2
                        ? w.return
                        : j[0]
                        ? w.throw || ((H = w.return) && H.call(w), 0)
                        : w.next) &&
                    !(H = H.call(w, j[1])).done)
                )
                  return H;
                switch (((w = 0), H && (j = [j[0] & 2, H.value]), j[0])) {
                  case 0:
                  case 1:
                    H = j;
                    break;
                  case 4:
                    return O.label++, { value: j[1], done: !1 };
                  case 5:
                    O.label++, (w = j[1]), (j = [0]);
                    continue;
                  case 7:
                    (j = O.ops.pop()), O.trys.pop();
                    continue;
                  default:
                    if (
                      ((H = O.trys),
                      !(H = H.length > 0 && H[H.length - 1]) && (j[0] === 6 || j[0] === 2))
                    ) {
                      O = 0;
                      continue;
                    }
                    if (j[0] === 3 && (!H || (j[1] > H[0] && j[1] < H[3]))) {
                      O.label = j[1];
                      break;
                    }
                    if (j[0] === 6 && O.label < H[1]) {
                      (O.label = H[1]), (H = j);
                      break;
                    }
                    if (H && O.label < H[2]) {
                      (O.label = H[2]), O.ops.push(j);
                      break;
                    }
                    H[2] && O.ops.pop(), O.trys.pop();
                    continue;
                }
                j = L.call(M, O);
              } catch (W) {
                (j = [6, W]), (w = 0);
              } finally {
                B = H = 0;
              }
            if (j[0] & 5) throw j[1];
            return { value: j[0] ? j[1] : void 0, done: !0 };
          }
        }
        var l = Object.create
          ? function (M, L, O, B) {
              B === void 0 && (B = O),
                Object.defineProperty(M, B, {
                  enumerable: !0,
                  get: function () {
                    return L[O];
                  },
                });
            }
          : function (M, L, O, B) {
              B === void 0 && (B = O), (M[B] = L[O]);
            };
        function c(M, L) {
          for (var O in M)
            O !== 'default' && !Object.prototype.hasOwnProperty.call(L, O) && l(L, M, O);
        }
        function f(M) {
          var L = typeof Symbol == 'function' && Symbol.iterator,
            O = L && M[L],
            B = 0;
          if (O) return O.call(M);
          if (M && typeof M.length == 'number')
            return {
              next: function () {
                return M && B >= M.length && (M = void 0), { value: M && M[B++], done: !M };
              },
            };
          throw new TypeError(L ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
        }
        function g(M, L) {
          var O = typeof Symbol == 'function' && M[Symbol.iterator];
          if (!O) return M;
          var B = O.call(M),
            w,
            H = [],
            b;
          try {
            for (; (L === void 0 || L-- > 0) && !(w = B.next()).done; ) H.push(w.value);
          } catch (U) {
            b = { error: U };
          } finally {
            try {
              w && !w.done && (O = B.return) && O.call(B);
            } finally {
              if (b) throw b.error;
            }
          }
          return H;
        }
        function p() {
          for (var M = [], L = 0; L < arguments.length; L++) M = M.concat(g(arguments[L]));
          return M;
        }
        function m() {
          for (var M = 0, L = 0, O = arguments.length; L < O; L++) M += arguments[L].length;
          for (var B = Array(M), w = 0, L = 0; L < O; L++)
            for (var H = arguments[L], b = 0, U = H.length; b < U; b++, w++) B[w] = H[b];
          return B;
        }
        function A(M, L) {
          for (var O = 0, B = L.length, w = M.length; O < B; O++, w++) M[w] = L[O];
          return M;
        }
        function y(M) {
          return this instanceof y ? ((this.v = M), this) : new y(M);
        }
        function E(M, L, O) {
          if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
          var B = O.apply(M, L || []),
            w,
            H = [];
          return (
            (w = {}),
            b('next'),
            b('throw'),
            b('return'),
            (w[Symbol.asyncIterator] = function () {
              return this;
            }),
            w
          );
          function b($) {
            B[$] &&
              (w[$] = function (V) {
                return new Promise(function (J, k) {
                  H.push([$, V, J, k]) > 1 || U($, V);
                });
              });
          }
          function U($, V) {
            try {
              K(B[$](V));
            } catch (J) {
              G(H[0][3], J);
            }
          }
          function K($) {
            $.value instanceof y ? Promise.resolve($.value.v).then(j, W) : G(H[0][2], $);
          }
          function j($) {
            U('next', $);
          }
          function W($) {
            U('throw', $);
          }
          function G($, V) {
            $(V), H.shift(), H.length && U(H[0][0], H[0][1]);
          }
        }
        function S(M) {
          var L, O;
          return (
            (L = {}),
            B('next'),
            B('throw', function (w) {
              throw w;
            }),
            B('return'),
            (L[Symbol.iterator] = function () {
              return this;
            }),
            L
          );
          function B(w, H) {
            L[w] = M[w]
              ? function (b) {
                  return (O = !O) ? { value: y(M[w](b)), done: w === 'return' } : H ? H(b) : b;
                }
              : H;
          }
        }
        function R(M) {
          if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
          var L = M[Symbol.asyncIterator],
            O;
          return L
            ? L.call(M)
            : ((M = typeof f == 'function' ? f(M) : M[Symbol.iterator]()),
              (O = {}),
              B('next'),
              B('throw'),
              B('return'),
              (O[Symbol.asyncIterator] = function () {
                return this;
              }),
              O);
          function B(H) {
            O[H] =
              M[H] &&
              function (b) {
                return new Promise(function (U, K) {
                  (b = M[H](b)), w(U, K, b.done, b.value);
                });
              };
          }
          function w(H, b, U, K) {
            Promise.resolve(K).then(function (j) {
              H({ value: j, done: U });
            }, b);
          }
        }
        function P(M, L) {
          return (
            Object.defineProperty ? Object.defineProperty(M, 'raw', { value: L }) : (M.raw = L), M
          );
        }
        var D = Object.create
          ? function (M, L) {
              Object.defineProperty(M, 'default', { enumerable: !0, value: L });
            }
          : function (M, L) {
              M.default = L;
            };
        function x(M) {
          if (M && M.__esModule) return M;
          var L = {};
          if (M != null)
            for (var O in M)
              O !== 'default' && Object.prototype.hasOwnProperty.call(M, O) && l(L, M, O);
          return D(L, M), L;
        }
        function T(M) {
          return M && M.__esModule ? M : { default: M };
        }
        function I(M, L) {
          if (!L.has(M)) throw new TypeError('attempted to get private field on non-instance');
          return L.get(M);
        }
        function N(M, L, O) {
          if (!L.has(M)) throw new TypeError('attempted to set private field on non-instance');
          return L.set(M, O), O;
        }
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(89)),
          i = n(t(4)),
          s = n(t(26)),
          h = n(t(17)),
          u = n(t(121)),
          d = n(t(27)),
          v = n(t(91)),
          l = n(t(70)),
          c = n(t(28)),
          f = n(t(57));
        (0, o.default)(e, '__esModule', { value: !0 }), (e.DomElement = void 0);
        var g = t(2),
          p = t(6),
          m = [];
        function A(D) {
          var x = document.createElement('div');
          x.innerHTML = D;
          var T = x.children;
          return p.toArray(T);
        }
        function y(D) {
          return D ? D instanceof HTMLCollection || D instanceof NodeList : !1;
        }
        function E(D) {
          var x = document.querySelectorAll(D);
          return p.toArray(x);
        }
        function S(D) {
          var x = [],
            T = [];
          return (
            (0, a.default)(D) ? (x = D) : (x = D.split(';')),
            (0, i.default)(x).call(x, function (I) {
              var N,
                M = (0, s.default)((N = I.split(':'))).call(N, function (L) {
                  return (0, h.default)(L).call(L);
                });
              M.length === 2 && T.push(M[0] + ':' + M[1]);
            }),
            T
          );
        }
        var R = (function () {
          function D(x) {
            if (
              ((this.elems = []),
              (this.length = this.elems.length),
              (this.dataSource = new u.default()),
              !!x)
            ) {
              if (x instanceof D) return x;
              var T = [],
                I = x instanceof Node ? x.nodeType : -1;
              if (((this.selector = x), I === 1 || I === 9)) T = [x];
              else if (y(x)) T = p.toArray(x);
              else if (x instanceof Array) T = x;
              else if (typeof x == 'string') {
                var N,
                  M = (0, h.default)(
                    (N = x.replace(
                      `/
/mg`,
                      '',
                    )),
                  ).call(N);
                (0, d.default)(M).call(M, '<') === 0 ? (T = A(M)) : (T = E(M));
              }
              var L = T.length;
              if (!L) return this;
              for (var O = 0; O < L; O++) this.elems.push(T[O]);
              this.length = L;
            }
          }
          return (
            (0, o.default)(D.prototype, 'id', {
              get: function () {
                return this.elems[0].id;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (D.prototype.forEach = function (x) {
              for (var T = 0; T < this.length; T++) {
                var I = this.elems[T],
                  N = x.call(I, I, T);
                if (N === !1) break;
              }
              return this;
            }),
            (D.prototype.clone = function (x) {
              var T;
              x === void 0 && (x = !1);
              var I = [];
              return (
                (0, i.default)((T = this.elems)).call(T, function (N) {
                  I.push(N.cloneNode(!!x));
                }),
                P(I)
              );
            }),
            (D.prototype.get = function (x) {
              x === void 0 && (x = 0);
              var T = this.length;
              return x >= T && (x = x % T), P(this.elems[x]);
            }),
            (D.prototype.first = function () {
              return this.get(0);
            }),
            (D.prototype.last = function () {
              var x = this.length;
              return this.get(x - 1);
            }),
            (D.prototype.on = function (x, T, I) {
              var N;
              return x
                ? (typeof T == 'function' && ((I = T), (T = '')),
                  (0, i.default)((N = this)).call(N, function (M) {
                    if (!T) {
                      M.addEventListener(x, I);
                      return;
                    }
                    var L = function (B) {
                      var w = B.target;
                      w.matches(T) && I.call(w, B);
                    };
                    M.addEventListener(x, L), m.push({ elem: M, selector: T, fn: I, agentFn: L });
                  }))
                : this;
            }),
            (D.prototype.off = function (x, T, I) {
              var N;
              return x
                ? (typeof T == 'function' && ((I = T), (T = '')),
                  (0, i.default)((N = this)).call(N, function (M) {
                    if (T) {
                      for (var L = -1, O = 0; O < m.length; O++) {
                        var B = m[O];
                        if (B.selector === T && B.fn === I && B.elem === M) {
                          L = O;
                          break;
                        }
                      }
                      if (L !== -1) {
                        var w = (0, v.default)(m).call(m, L, 1)[0].agentFn;
                        M.removeEventListener(x, w);
                      }
                    } else M.removeEventListener(x, I);
                  }))
                : this;
            }),
            (D.prototype.attr = function (x, T) {
              var I;
              return T == null
                ? this.elems[0].getAttribute(x) || ''
                : (0, i.default)((I = this)).call(I, function (N) {
                    N.setAttribute(x, T);
                  });
            }),
            (D.prototype.removeAttr = function (x) {
              var T;
              (0, i.default)((T = this)).call(T, function (I) {
                I.removeAttribute(x);
              });
            }),
            (D.prototype.addClass = function (x) {
              var T;
              return x
                ? (0, i.default)((T = this)).call(T, function (I) {
                    if (I.className) {
                      var N = I.className.split(/\s/);
                      (N = (0, l.default)(N).call(N, function (M) {
                        return !!(0, h.default)(M).call(M);
                      })),
                        (0, d.default)(N).call(N, x) < 0 && N.push(x),
                        (I.className = N.join(' '));
                    } else I.className = x;
                  })
                : this;
            }),
            (D.prototype.removeClass = function (x) {
              var T;
              return x
                ? (0, i.default)((T = this)).call(T, function (I) {
                    if (I.className) {
                      var N = I.className.split(/\s/);
                      (N = (0, l.default)(N).call(N, function (M) {
                        return (M = (0, h.default)(M).call(M)), !(!M || M === x);
                      })),
                        (I.className = N.join(' '));
                    }
                  })
                : this;
            }),
            (D.prototype.hasClass = function (x) {
              if (!x) return !1;
              var T = this.elems[0];
              if (!T.className) return !1;
              var I = T.className.split(/\s/);
              return (0, c.default)(I).call(I, x);
            }),
            (D.prototype.css = function (x, T) {
              var I, N;
              return (
                T == '' ? (N = '') : (N = x + ':' + T + ';'),
                (0, i.default)((I = this)).call(I, function (M) {
                  var L,
                    O = (0, h.default)((L = M.getAttribute('style') || '')).call(L);
                  if (O) {
                    var B = S(O);
                    (B = (0, s.default)(B).call(B, function (w) {
                      return (0, d.default)(w).call(w, x) === 0 ? N : w;
                    })),
                      N != '' && (0, d.default)(B).call(B, N) < 0 && B.push(N),
                      N == '' && (B = S(B)),
                      M.setAttribute('style', B.join('; '));
                  } else M.setAttribute('style', N);
                })
              );
            }),
            (D.prototype.getBoundingClientRect = function () {
              var x = this.elems[0];
              return x.getBoundingClientRect();
            }),
            (D.prototype.show = function () {
              return this.css('display', 'block');
            }),
            (D.prototype.hide = function () {
              return this.css('display', 'none');
            }),
            (D.prototype.children = function () {
              var x = this.elems[0];
              return x ? P(x.children) : null;
            }),
            (D.prototype.childNodes = function () {
              var x = this.elems[0];
              return x ? P(x.childNodes) : null;
            }),
            (D.prototype.replaceChildAll = function (x) {
              for (var T = this.getNode(), I = this.elems[0]; I.hasChildNodes(); )
                T.firstChild && I.removeChild(T.firstChild);
              this.append(x);
            }),
            (D.prototype.append = function (x) {
              var T;
              return (0, i.default)((T = this)).call(T, function (I) {
                (0, i.default)(x).call(x, function (N) {
                  I.appendChild(N);
                });
              });
            }),
            (D.prototype.remove = function () {
              var x;
              return (0, i.default)((x = this)).call(x, function (T) {
                if (T.remove) T.remove();
                else {
                  var I = T.parentElement;
                  I && I.removeChild(T);
                }
              });
            }),
            (D.prototype.isContain = function (x) {
              var T = this.elems[0],
                I = x.elems[0];
              return T.contains(I);
            }),
            (D.prototype.getNodeName = function () {
              var x = this.elems[0];
              return x.nodeName;
            }),
            (D.prototype.getNode = function (x) {
              x === void 0 && (x = 0);
              var T;
              return (T = this.elems[x]), T;
            }),
            (D.prototype.find = function (x) {
              var T = this.elems[0];
              return P(T.querySelectorAll(x));
            }),
            (D.prototype.text = function (x) {
              if (x) {
                var I;
                return (0, i.default)((I = this)).call(I, function (N) {
                  N.innerHTML = x;
                });
              } else {
                var T = this.elems[0];
                return T.innerHTML.replace(/<[^>]+>/g, function () {
                  return '';
                });
              }
            }),
            (D.prototype.html = function (x) {
              var T = this.elems[0];
              return x ? ((T.innerHTML = x), this) : T.innerHTML;
            }),
            (D.prototype.val = function () {
              var x,
                T = this.elems[0];
              return (0, h.default)((x = T.value)).call(x);
            }),
            (D.prototype.focus = function () {
              var x;
              return (0, i.default)((x = this)).call(x, function (T) {
                T.focus();
              });
            }),
            (D.prototype.prev = function () {
              var x = this.elems[0];
              return P(x.previousElementSibling);
            }),
            (D.prototype.next = function () {
              var x = this.elems[0];
              return P(x.nextElementSibling);
            }),
            (D.prototype.getNextSibling = function () {
              var x = this.elems[0];
              return P(x.nextSibling);
            }),
            (D.prototype.parent = function () {
              var x = this.elems[0];
              return P(x.parentElement);
            }),
            (D.prototype.parentUntil = function (x, T) {
              var I = T || this.elems[0];
              if (I.nodeName === 'BODY') return null;
              var N = I.parentElement;
              return N === null ? null : N.matches(x) ? P(N) : this.parentUntil(x, N);
            }),
            (D.prototype.parentUntilEditor = function (x, T, I) {
              var N = I || this.elems[0];
              if (P(N).equal(T.$textContainerElem) || P(N).equal(T.$toolbarElem)) return null;
              var M = N.parentElement;
              return M === null ? null : M.matches(x) ? P(M) : this.parentUntilEditor(x, T, M);
            }),
            (D.prototype.equal = function (x) {
              return x instanceof D
                ? this.elems[0] === x.elems[0]
                : x instanceof HTMLElement
                ? this.elems[0] === x
                : !1;
            }),
            (D.prototype.insertBefore = function (x) {
              var T,
                I = P(x),
                N = I.elems[0];
              return N
                ? (0, i.default)((T = this)).call(T, function (M) {
                    var L = N.parentNode;
                    L == null || L.insertBefore(M, N);
                  })
                : this;
            }),
            (D.prototype.insertAfter = function (x) {
              var T,
                I = P(x),
                N = I.elems[0],
                M = N && N.nextSibling;
              return N
                ? (0, i.default)((T = this)).call(T, function (L) {
                    var O = N.parentNode;
                    M ? O.insertBefore(L, M) : O.appendChild(L);
                  })
                : this;
            }),
            (D.prototype.data = function (x, T) {
              if (T != null) this.dataSource.set(x, T);
              else return this.dataSource.get(x);
            }),
            (D.prototype.getNodeTop = function (x) {
              if (this.length < 1) return this;
              var T = this.parent();
              return x.$textElem.equal(this) || x.$textElem.equal(T)
                ? this
                : ((T.prior = this), T.getNodeTop(x));
            }),
            (D.prototype.getOffsetData = function () {
              var x = this.elems[0];
              return {
                top: x.offsetTop,
                left: x.offsetLeft,
                width: x.offsetWidth,
                height: x.offsetHeight,
                parent: x.offsetParent,
              };
            }),
            (D.prototype.scrollTop = function (x) {
              var T = this.elems[0];
              T.scrollTo({ top: x });
            }),
            D
          );
        })();
        e.DomElement = R;
        function P() {
          for (var D = [], x = 0; x < arguments.length; x++) D[x] = arguments[x];
          return new ((0, f.default)(R).apply(R, g.__spreadArrays([void 0], D)))();
        }
        e.default = P;
      },
      function (r, e, t) {
        r.exports = t(180);
      },
      function (r, e, t) {
        var n = t(8),
          o = t(71).f,
          a = t(101),
          i = t(9),
          s = t(40),
          h = t(19),
          u = t(16),
          d = function (v) {
            var l = function (c, f, g) {
              if (this instanceof v) {
                switch (arguments.length) {
                  case 0:
                    return new v();
                  case 1:
                    return new v(c);
                  case 2:
                    return new v(c, f);
                }
                return new v(c, f, g);
              }
              return v.apply(this, arguments);
            };
            return (l.prototype = v.prototype), l;
          };
        r.exports = function (v, l) {
          var c = v.target,
            f = v.global,
            g = v.stat,
            p = v.proto,
            m = f ? n : g ? n[c] : (n[c] || {}).prototype,
            A = f ? i : i[c] || (i[c] = {}),
            y = A.prototype,
            E,
            S,
            R,
            P,
            D,
            x,
            T,
            I,
            N;
          for (P in l)
            (E = a(f ? P : c + (g ? '.' : '#') + P, v.forced)),
              (S = !E && m && u(m, P)),
              (x = A[P]),
              S && (v.noTargetGet ? ((N = o(m, P)), (T = N && N.value)) : (T = m[P])),
              (D = S && T ? T : l[P]),
              !(S && typeof x == typeof D) &&
                (v.bind && S
                  ? (I = s(D, n))
                  : v.wrap && S
                  ? (I = d(D))
                  : p && typeof D == 'function'
                  ? (I = s(Function.call, D))
                  : (I = D),
                (v.sham || (D && D.sham) || (x && x.sham)) && h(I, 'sham', !0),
                (A[P] = I),
                p &&
                  ((R = c + 'Prototype'),
                  u(i, R) || h(i, R, {}),
                  (i[R][P] = D),
                  v.real && y && !y[P] && h(y, P, D)));
        };
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(92)),
          a = n(t(1)),
          i = n(t(256)),
          s = n(t(45)),
          h = n(t(46)),
          u = n(t(89)),
          d = n(t(26));
        (0, a.default)(e, '__esModule', { value: !0 }),
          (e.hexToRgb =
            e.getRandomCode =
            e.toArray =
            e.deepClone =
            e.isFunction =
            e.debounce =
            e.throttle =
            e.arrForEach =
            e.forEach =
            e.replaceSpecialSymbol =
            e.replaceHtmlSymbol =
            e.getRandom =
            e.UA =
              void 0);
        var v = t(2),
          l = (function () {
            function x() {
              this._ua = navigator.userAgent;
              var T = this._ua.match(/(Edge?)\/(\d+)/);
              (this.isOldEdge = !!(T && T[1] == 'Edge' && (0, i.default)(T[2]) < 19)),
                (this.isFirefox = !!(
                  /Firefox\/\d+/.test(this._ua) && !/Seamonkey\/\d+/.test(this._ua)
                ));
            }
            return (
              (x.prototype.isIE = function () {
                return 'ActiveXObject' in window;
              }),
              (x.prototype.isWebkit = function () {
                return /webkit/i.test(this._ua);
              }),
              x
            );
          })();
        e.UA = new l();
        function c(x) {
          var T;
          return (
            x === void 0 && (x = ''), x + (0, s.default)((T = Math.random().toString())).call(T, 2)
          );
        }
        e.getRandom = c;
        function f(x) {
          return x
            .replace(/</gm, '&lt;')
            .replace(/>/gm, '&gt;')
            .replace(/"/gm, '&quot;')
            .replace(/(\r\n|\r|\n)/g, '<br/>');
        }
        e.replaceHtmlSymbol = f;
        function g(x) {
          return x
            .replace(/&lt;/gm, '<')
            .replace(/&gt;/gm, '>')
            .replace(/&quot;/gm, '"');
        }
        e.replaceSpecialSymbol = g;
        function p(x, T) {
          for (var I in x)
            if (Object.prototype.hasOwnProperty.call(x, I)) {
              var N = T(I, x[I]);
              if (N === !1) break;
            }
        }
        e.forEach = p;
        function m(x, T) {
          var I,
            N,
            M,
            L = x.length || 0;
          for (I = 0; I < L && ((N = x[I]), (M = T.call(x, N, I)), M !== !1); I++);
        }
        e.arrForEach = m;
        function A(x, T) {
          T === void 0 && (T = 200);
          var I = !1;
          return function () {
            for (var N = this, M = [], L = 0; L < arguments.length; L++) M[L] = arguments[L];
            I ||
              ((I = !0),
              (0, h.default)(function () {
                (I = !1), x.call.apply(x, v.__spreadArrays([N], M));
              }, T));
          };
        }
        e.throttle = A;
        function y(x, T) {
          T === void 0 && (T = 200);
          var I = 0;
          return function () {
            for (var N = this, M = [], L = 0; L < arguments.length; L++) M[L] = arguments[L];
            I && window.clearTimeout(I),
              (I = (0, h.default)(function () {
                (I = 0), x.call.apply(x, v.__spreadArrays([N], M));
              }, T));
          };
        }
        e.debounce = y;
        function E(x) {
          return typeof x == 'function';
        }
        e.isFunction = E;
        function S(x) {
          if ((0, o.default)(x) !== 'object' || typeof x == 'function' || x === null) return x;
          var T;
          (0, u.default)(x) && (T = []), (0, u.default)(x) || (T = {});
          for (var I in x) Object.prototype.hasOwnProperty.call(x, I) && (T[I] = S(x[I]));
          return T;
        }
        e.deepClone = S;
        function R(x) {
          return (0, s.default)(Array.prototype).call(x);
        }
        e.toArray = R;
        function P() {
          var x;
          return (0, s.default)((x = Math.random().toString(36))).call(x, -5);
        }
        e.getRandomCode = P;
        function D(x) {
          var T = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(x);
          if (T == null) return null;
          var I = (0, d.default)(T).call(T, function (O) {
              return (0, i.default)(O, 16);
            }),
            N = I[1],
            M = I[2],
            L = I[3];
          return 'rgb(' + N + ', ' + M + ', ' + L + ')';
        }
        e.hexToRgb = D;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 }),
          (e.EMPTY_P_REGEX = e.EMPTY_P_LAST_REGEX = e.EMPTY_P = e.urlRegex = e.EMPTY_FN = void 0);
        function a() {}
        (e.EMPTY_FN = a),
          (e.urlRegex =
            /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-.,@?^=%&amp;:/~+#]*[\w\-@?^=%&amp;/~+#])?/g),
          (e.EMPTY_P = '<p data-we-empty-p=""><br></p>'),
          (e.EMPTY_P_LAST_REGEX = /<p data-we-empty-p=""><br\/?><\/p>$/gim),
          (e.EMPTY_P_REGEX = /<p data-we-empty-p="">/gim);
      },
      function (r, e, t) {
        (function (n) {
          var o = function (a) {
            return a && a.Math == Math && a;
          };
          r.exports =
            o(typeof globalThis == 'object' && globalThis) ||
            o(typeof window == 'object' && window) ||
            o(typeof self == 'object' && self) ||
            o(typeof n == 'object' && n) ||
            Function('return this')();
        }).call(this, t(145));
      },
      function (r, e) {
        r.exports = {};
      },
      function (r, e, t) {
        var n = t(8),
          o = t(74),
          a = t(16),
          i = t(64),
          s = t(76),
          h = t(106),
          u = o('wks'),
          d = n.Symbol,
          v = h ? d : (d && d.withoutSetter) || i;
        r.exports = function (l) {
          return a(u, l) || (s && a(d, l) ? (u[l] = d[l]) : (u[l] = v('Symbol.' + l))), u[l];
        };
      },
      function (r, e) {
        r.exports = function (t) {
          try {
            return !!t();
          } catch (n) {
            return !0;
          }
        };
      },
      function (r, e, t) {
        var n = t(9),
          o = t(16),
          a = t(93),
          i = t(18).f;
        r.exports = function (s) {
          var h = n.Symbol || (n.Symbol = {});
          o(h, s) || i(h, s, { value: a.f(s) });
        };
      },
      function (r, e) {
        r.exports = function (t) {
          return typeof t == 'object' ? t !== null : typeof t == 'function';
        };
      },
      function (r, e, t) {
        var n = t(11);
        r.exports = !n(function () {
          return (
            Object.defineProperty({}, 1, {
              get: function () {
                return 7;
              },
            })[1] != 7
          );
        });
      },
      function (r, e, t) {
        var n = t(9);
        r.exports = function (o) {
          return n[o + 'Prototype'];
        };
      },
      function (r, e) {
        var t = {}.hasOwnProperty;
        r.exports = function (n, o) {
          return t.call(n, o);
        };
      },
      function (r, e, t) {
        r.exports = t(192);
      },
      function (r, e, t) {
        var n = t(14),
          o = t(100),
          a = t(25),
          i = t(60),
          s = Object.defineProperty;
        e.f = n
          ? s
          : function (u, d, v) {
              if ((a(u), (d = i(d, !0)), a(v), o))
                try {
                  return s(u, d, v);
                } catch (l) {}
              if ('get' in v || 'set' in v) throw TypeError('Accessors not supported');
              return 'value' in v && (u[d] = v.value), u;
            };
      },
      function (r, e, t) {
        var n = t(14),
          o = t(18),
          a = t(48);
        r.exports = n
          ? function (i, s, h) {
              return o.f(i, s, a(1, h));
            }
          : function (i, s, h) {
              return (i[s] = h), i;
            };
      },
      function (r, e, t) {
        var n = (function () {
            var m;
            return function () {
              return (
                typeof m == 'undefined' &&
                  (m = !!(window && document && document.all && !window.atob)),
                m
              );
            };
          })(),
          o = (function () {
            var m = {};
            return function (y) {
              if (typeof m[y] == 'undefined') {
                var E = document.querySelector(y);
                if (window.HTMLIFrameElement && E instanceof window.HTMLIFrameElement)
                  try {
                    E = E.contentDocument.head;
                  } catch (S) {
                    E = null;
                  }
                m[y] = E;
              }
              return m[y];
            };
          })(),
          a = [];
        function i(p) {
          for (var m = -1, A = 0; A < a.length; A++)
            if (a[A].identifier === p) {
              m = A;
              break;
            }
          return m;
        }
        function s(p, m) {
          for (var A = {}, y = [], E = 0; E < p.length; E++) {
            var S = p[E],
              R = m.base ? S[0] + m.base : S[0],
              P = A[R] || 0,
              D = ''.concat(R, ' ').concat(P);
            A[R] = P + 1;
            var x = i(D),
              T = { css: S[1], media: S[2], sourceMap: S[3] };
            x !== -1
              ? (a[x].references++, a[x].updater(T))
              : a.push({ identifier: D, updater: g(T, m), references: 1 }),
              y.push(D);
          }
          return y;
        }
        function h(p) {
          var m = document.createElement('style'),
            A = p.attributes || {};
          if (typeof A.nonce == 'undefined') {
            var y = t.nc;
            y && (A.nonce = y);
          }
          if (
            (Object.keys(A).forEach(function (S) {
              m.setAttribute(S, A[S]);
            }),
            typeof p.insert == 'function')
          )
            p.insert(m);
          else {
            var E = o(p.insert || 'head');
            if (!E)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
              );
            E.appendChild(m);
          }
          return m;
        }
        function u(p) {
          if (p.parentNode === null) return !1;
          p.parentNode.removeChild(p);
        }
        var d = (function () {
          var m = [];
          return function (y, E) {
            return (
              (m[y] = E),
              m.filter(Boolean).join(`
`)
            );
          };
        })();
        function v(p, m, A, y) {
          var E = A ? '' : y.media ? '@media '.concat(y.media, ' {').concat(y.css, '}') : y.css;
          if (p.styleSheet) p.styleSheet.cssText = d(m, E);
          else {
            var S = document.createTextNode(E),
              R = p.childNodes;
            R[m] && p.removeChild(R[m]), R.length ? p.insertBefore(S, R[m]) : p.appendChild(S);
          }
        }
        function l(p, m, A) {
          var y = A.css,
            E = A.media,
            S = A.sourceMap;
          if (
            (E ? p.setAttribute('media', E) : p.removeAttribute('media'),
            S &&
              typeof btoa != 'undefined' &&
              (y += `
/*# sourceMappingURL=data:application/json;base64,`.concat(
                btoa(unescape(encodeURIComponent(JSON.stringify(S)))),
                ' */',
              )),
            p.styleSheet)
          )
            p.styleSheet.cssText = y;
          else {
            for (; p.firstChild; ) p.removeChild(p.firstChild);
            p.appendChild(document.createTextNode(y));
          }
        }
        var c = null,
          f = 0;
        function g(p, m) {
          var A, y, E;
          if (m.singleton) {
            var S = f++;
            (A = c || (c = h(m))), (y = v.bind(null, A, S, !1)), (E = v.bind(null, A, S, !0));
          } else
            (A = h(m)),
              (y = l.bind(null, A, m)),
              (E = function () {
                u(A);
              });
          return (
            y(p),
            function (P) {
              if (P) {
                if (P.css === p.css && P.media === p.media && P.sourceMap === p.sourceMap) return;
                y((p = P));
              } else E();
            }
          );
        }
        r.exports = function (p, m) {
          (m = m || {}),
            !m.singleton && typeof m.singleton != 'boolean' && (m.singleton = n()),
            (p = p || []);
          var A = s(p, m);
          return function (E) {
            if (((E = E || []), Object.prototype.toString.call(E) === '[object Array]')) {
              for (var S = 0; S < A.length; S++) {
                var R = A[S],
                  P = i(R);
                a[P].references--;
              }
              for (var D = s(E, m), x = 0; x < A.length; x++) {
                var T = A[x],
                  I = i(T);
                a[I].references === 0 && (a[I].updater(), a.splice(I, 1));
              }
              A = D;
            }
          };
        };
      },
      function (r, e, t) {
        r.exports = function (a) {
          var i = [];
          return (
            (i.toString = function () {
              return this.map(function (h) {
                var u = n(h, a);
                return h[2] ? '@media '.concat(h[2], ' {').concat(u, '}') : u;
              }).join('');
            }),
            (i.i = function (s, h, u) {
              typeof s == 'string' && (s = [[null, s, '']]);
              var d = {};
              if (u)
                for (var v = 0; v < this.length; v++) {
                  var l = this[v][0];
                  l != null && (d[l] = !0);
                }
              for (var c = 0; c < s.length; c++) {
                var f = [].concat(s[c]);
                (u && d[f[0]]) ||
                  (h && (f[2] ? (f[2] = ''.concat(h, ' and ').concat(f[2])) : (f[2] = h)),
                  i.push(f));
              }
            }),
            i
          );
        };
        function n(a, i) {
          var s = a[1] || '',
            h = a[3];
          if (!h) return s;
          if (i && typeof btoa == 'function') {
            var u = o(h),
              d = h.sources.map(function (v) {
                return '/*# sourceURL='.concat(h.sourceRoot || '').concat(v, ' */');
              });
            return [s].concat(d).concat([u]).join(`
`);
          }
          return [s].join(`
`);
        }
        function o(a) {
          var i = btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
            s = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(i);
          return '/*# '.concat(s, ' */');
        }
      },
      function (r, e, t) {
        var n = t(14),
          o = t(11),
          a = t(16),
          i = Object.defineProperty,
          s = {},
          h = function (u) {
            throw u;
          };
        r.exports = function (u, d) {
          if (a(s, u)) return s[u];
          d || (d = {});
          var v = [][u],
            l = a(d, 'ACCESSORS') ? d.ACCESSORS : !1,
            c = a(d, 0) ? d[0] : h,
            f = a(d, 1) ? d[1] : void 0;
          return (s[u] =
            !!v &&
            !o(function () {
              if (l && !n) return !0;
              var g = { length: -1 };
              l ? i(g, 1, { enumerable: !0, get: h }) : (g[1] = 1), v.call(g, c, f);
            }));
        };
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(95)),
          s = (function (h) {
            a.__extends(u, h);
            function u(d, v) {
              return h.call(this, d, v) || this;
            }
            return u;
          })(i.default);
        e.default = s;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(4)),
          i = n(t(46));
        (0, o.default)(e, '__esModule', { value: !0 });
        var s = t(2),
          h = s.__importDefault(t(3)),
          u = s.__importDefault(t(95)),
          d = s.__importDefault(t(134)),
          v = (function (l) {
            s.__extends(c, l);
            function c(f, g, p) {
              var m = l.call(this, f, g) || this;
              p.title = g.i18next.t('menus.dropListMenu.' + p.title);
              var A = g.config.lang === 'zh-CN' ? '' : 'w-e-drop-list-tl';
              if (A !== '' && p.type === 'list') {
                var y;
                (0, a.default)((y = p.list)).call(y, function (S) {
                  var R = S.$elem,
                    P = h.default(R.children());
                  if (P.length > 0) {
                    var D = P == null ? void 0 : P.getNodeName();
                    D && D === 'I' && R.addClass(A);
                  }
                });
              }
              var E = new d.default(m, p);
              return (
                (m.dropList = E),
                f
                  .on('click', function () {
                    var S;
                    g.selection.getRange() != null &&
                      (f.css('z-index', g.zIndex.get('menu')),
                      (0, a.default)((S = g.txt.eventHooks.dropListMenuHoverEvents)).call(
                        S,
                        function (R) {
                          return R();
                        },
                      ),
                      E.show());
                  })
                  .on('mouseleave', function () {
                    f.css('z-index', 'auto'),
                      (E.hideTimeoutId = (0, i.default)(function () {
                        E.hide();
                      }));
                  }),
                m
              );
            }
            return c;
          })(u.default);
        e.default = v;
      },
      function (r, e, t) {
        var n = t(13);
        r.exports = function (o) {
          if (!n(o)) throw TypeError(String(o) + ' is not an object');
          return o;
        };
      },
      function (r, e, t) {
        r.exports = t(188);
      },
      function (r, e, t) {
        r.exports = t(201);
      },
      function (r, e, t) {
        r.exports = t(213);
      },
      function (r, e, t) {
        r.exports = t(283);
      },
      function (r, e, t) {
        var n = t(72),
          o = t(49);
        r.exports = function (a) {
          return n(o(a));
        };
      },
      function (r, e, t) {
        var n = t(49);
        r.exports = function (o) {
          return Object(n(o));
        };
      },
      function (r, e, t) {
        var n = t(40),
          o = t(72),
          a = t(31),
          i = t(35),
          s = t(88),
          h = [].push,
          u = function (d) {
            var v = d == 1,
              l = d == 2,
              c = d == 3,
              f = d == 4,
              g = d == 6,
              p = d == 5 || g;
            return function (m, A, y, E) {
              for (
                var S = a(m),
                  R = o(S),
                  P = n(A, y, 3),
                  D = i(R.length),
                  x = 0,
                  T = E || s,
                  I = v ? T(m, D) : l ? T(m, 0) : void 0,
                  N,
                  M;
                D > x;
                x++
              )
                if ((p || x in R) && ((N = R[x]), (M = P(N, x, S)), d)) {
                  if (v) I[x] = M;
                  else if (M)
                    switch (d) {
                      case 3:
                        return !0;
                      case 5:
                        return N;
                      case 6:
                        return x;
                      case 2:
                        h.call(I, N);
                    }
                  else if (f) return !1;
                }
              return g ? -1 : c || f ? f : I;
            };
          };
        r.exports = {
          forEach: u(0),
          map: u(1),
          filter: u(2),
          some: u(3),
          every: u(4),
          find: u(5),
          findIndex: u(6),
        };
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(4)),
          i = n(t(29)),
          s = n(t(132));
        (0, o.default)(e, '__esModule', { value: !0 });
        var h = t(2),
          u = h.__importDefault(t(3)),
          d = t(7),
          v = (function () {
            function l(c, f) {
              (this.menu = c),
                (this.conf = f),
                (this.$container = u.default('<div class="w-e-panel-container"></div>'));
              var g = c.editor;
              g.txt.eventHooks.clickEvents.push(l.hideCurAllPanels),
                g.txt.eventHooks.toolbarClickEvents.push(l.hideCurAllPanels),
                g.txt.eventHooks.dropListMenuHoverEvents.push(l.hideCurAllPanels);
            }
            return (
              (l.prototype.create = function () {
                var c = this,
                  f = this.menu;
                if (!l.createdMenus.has(f)) {
                  var g = this.conf,
                    p = this.$container,
                    m = g.width || 300,
                    A = f.editor.$toolbarElem.getBoundingClientRect(),
                    y = f.$elem.getBoundingClientRect(),
                    E = A.height + A.top - y.top,
                    S = (A.width - m) / 2 + A.left - y.left,
                    R = 300;
                  Math.abs(S) > R &&
                    (y.left < document.documentElement.clientWidth / 2
                      ? (S = -y.width / 2)
                      : (S = -m + y.width / 2)),
                    p
                      .css('width', m + 'px')
                      .css('margin-top', E + 'px')
                      .css('margin-left', S + 'px')
                      .css('z-index', f.editor.zIndex.get('panel'));
                  var P = u.default('<i class="w-e-icon-close w-e-panel-close"></i>');
                  p.append(P),
                    P.on('click', function () {
                      c.remove();
                    });
                  var D = u.default('<ul class="w-e-panel-tab-title"></ul>'),
                    x = u.default('<div class="w-e-panel-tab-content"></div>');
                  p.append(D).append(x);
                  var T = g.height;
                  T && x.css('height', T + 'px').css('overflow-y', 'auto');
                  var I = g.tabs || [],
                    N = [],
                    M = [];
                  (0, a.default)(I).call(I, function (O, B) {
                    if (O) {
                      var w = O.title || '',
                        H = O.tpl || '',
                        b = u.default('<li class="w-e-item">' + w + '</li>');
                      D.append(b);
                      var U = u.default(H);
                      x.append(U),
                        N.push(b),
                        M.push(U),
                        B === 0 ? (b.data('active', !0), b.addClass('w-e-active')) : U.hide(),
                        b.on('click', function () {
                          b.data('active') ||
                            ((0, a.default)(N).call(N, function (K) {
                              K.data('active', !1), K.removeClass('w-e-active');
                            }),
                            (0, a.default)(M).call(M, function (K) {
                              K.hide();
                            }),
                            b.data('active', !0),
                            b.addClass('w-e-active'),
                            U.show());
                        });
                    }
                  }),
                    p.on('click', function (O) {
                      O.stopPropagation();
                    }),
                    f.$elem.append(p),
                    g.setLinkValue && g.setLinkValue(p, 'text'),
                    g.setLinkValue && g.setLinkValue(p, 'link'),
                    (0, a.default)(I).call(I, function (O, B) {
                      if (O) {
                        var w = O.events || [];
                        (0, a.default)(w).call(w, function (H) {
                          var b,
                            U = H.selector,
                            K = H.type,
                            j = H.fn || d.EMPTY_FN,
                            W = M[B],
                            G = (b = H.bindEnter) !== null && b !== void 0 ? b : !1,
                            $ = function (J) {
                              return h.__awaiter(c, void 0, void 0, function () {
                                var k;
                                return h.__generator(this, function (rt) {
                                  switch (rt.label) {
                                    case 0:
                                      return J.stopPropagation(), [4, j(J)];
                                    case 1:
                                      return (k = rt.sent()), k && this.remove(), [2];
                                  }
                                });
                              });
                            };
                          (0, i.default)(W).call(W, U).on(K, $),
                            G &&
                              K === 'click' &&
                              W.on('keyup', function (V) {
                                V.keyCode == 13 && $(V);
                              });
                        });
                      }
                    });
                  var L = (0, i.default)(p).call(p, 'input[type=text],textarea');
                  L.length && L.get(0).focus(),
                    l.hideCurAllPanels(),
                    f.setPanel(this),
                    l.createdMenus.add(f);
                }
              }),
              (l.prototype.remove = function () {
                var c = this.menu,
                  f = this.$container;
                f && f.remove(), l.createdMenus.delete(c);
              }),
              (l.hideCurAllPanels = function () {
                var c;
                l.createdMenus.size !== 0 &&
                  (0, a.default)((c = l.createdMenus)).call(c, function (f) {
                    var g = f.panel;
                    g && g.remove();
                  });
              }),
              (l.createdMenus = new s.default()),
              l
            );
          })();
        e.default = v;
      },
      function (r, e) {
        var t = {}.toString;
        r.exports = function (n) {
          return t.call(n).slice(8, -1);
        };
      },
      function (r, e, t) {
        var n = t(62),
          o = Math.min;
        r.exports = function (a) {
          return a > 0 ? o(n(a), 9007199254740991) : 0;
        };
      },
      function (r, e, t) {
        var n = t(9),
          o = t(8),
          a = function (i) {
            return typeof i == 'function' ? i : void 0;
          };
        r.exports = function (i, s) {
          return arguments.length < 2 ? a(n[i]) || a(o[i]) : (n[i] && n[i][s]) || (o[i] && o[i][s]);
        };
      },
      function (r, e, t) {
        var n = t(81),
          o = t(18).f,
          a = t(19),
          i = t(16),
          s = t(170),
          h = t(10),
          u = h('toStringTag');
        r.exports = function (d, v, l, c) {
          if (d) {
            var f = l ? d : d.prototype;
            i(f, u) || o(f, u, { configurable: !0, value: v }), c && !n && a(f, 'toString', s);
          }
        };
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(95)),
          s = (function (h) {
            a.__extends(u, h);
            function u(d, v) {
              return h.call(this, d, v) || this;
            }
            return (
              (u.prototype.setPanel = function (d) {
                this.panel = d;
              }),
              u
            );
          })(i.default);
        e.default = s;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(4)),
          i = n(t(57));
        (0, o.default)(e, '__esModule', { value: !0 });
        var s = t(2),
          h = s.__importDefault(t(3)),
          u = (function () {
            function d(v, l, c) {
              (this.editor = v),
                (this.$targetElem = l),
                (this.conf = c),
                (this._show = !1),
                (this._isInsertTextContainer = !1);
              var f = h.default('<div></div>');
              f.addClass('w-e-tooltip'), (this.$container = f);
            }
            return (
              (d.prototype.getPositionData = function () {
                var v = this.$container,
                  l = 0,
                  c = 0,
                  f = 20,
                  g = document.documentElement.scrollTop,
                  p = this.$targetElem.getBoundingClientRect(),
                  m = this.editor.$textElem.getBoundingClientRect(),
                  A = this.$targetElem.getOffsetData(),
                  y = h.default(A.parent),
                  E = this.editor.$textElem.elems[0].scrollTop;
                if (
                  ((this._isInsertTextContainer = y.equal(this.editor.$textContainerElem)),
                  this._isInsertTextContainer)
                ) {
                  var S = y.getBoundingClientRect().height,
                    R = A.top,
                    P = A.left,
                    D = A.height,
                    x = R - E;
                  x > f + 5
                    ? ((l = x - f - 15), v.addClass('w-e-tooltip-up'))
                    : x + D + f < S
                    ? ((l = x + D + 10), v.addClass('w-e-tooltip-down'))
                    : ((l = (x > 0 ? x : 0) + f + 10), v.addClass('w-e-tooltip-down')),
                    P < 0 ? (c = 0) : (c = P);
                } else
                  p.top < f || p.top - m.top < f
                    ? ((l = p.bottom + g + 5), v.addClass('w-e-tooltip-down'))
                    : ((l = p.top + g - f - 15), v.addClass('w-e-tooltip-up')),
                    p.left < 0 ? (c = 0) : (c = p.left);
                return { top: l, left: c };
              }),
              (d.prototype.appendMenus = function () {
                var v = this,
                  l = this.conf,
                  c = this.editor,
                  f = this.$targetElem,
                  g = this.$container;
                (0, a.default)(l).call(l, function (p, m) {
                  var A = p.$elem,
                    y = h.default('<div></div>');
                  y.addClass('w-e-tooltip-item-wrapper '),
                    y.append(A),
                    g.append(y),
                    A.on('click', function (E) {
                      E.preventDefault();
                      var S = p.onClick(c, f);
                      S && v.remove();
                    });
                });
              }),
              (d.prototype.create = function () {
                var v,
                  l,
                  c = this.editor,
                  f = this.$container;
                this.appendMenus();
                var g = this.getPositionData(),
                  p = g.top,
                  m = g.left;
                f.css('top', p + 'px'),
                  f.css('left', m + 'px'),
                  f.css('z-index', c.zIndex.get('tooltip')),
                  this._isInsertTextContainer
                    ? this.editor.$textContainerElem.append(f)
                    : h.default('body').append(f),
                  (this._show = !0),
                  c.beforeDestroy((0, i.default)((v = this.remove)).call(v, this)),
                  c.txt.eventHooks.onBlurEvents.push(
                    (0, i.default)((l = this.remove)).call(l, this),
                  );
              }),
              (d.prototype.remove = function () {
                this.$container.remove(), (this._show = !1);
              }),
              (0, o.default)(d.prototype, 'isShow', {
                get: function () {
                  return this._show;
                },
                enumerable: !1,
                configurable: !0,
              }),
              d
            );
          })();
        e.default = u;
      },
      function (r, e, t) {
        var n = t(41);
        r.exports = function (o, a, i) {
          if ((n(o), a === void 0)) return o;
          switch (i) {
            case 0:
              return function () {
                return o.call(a);
              };
            case 1:
              return function (s) {
                return o.call(a, s);
              };
            case 2:
              return function (s, h) {
                return o.call(a, s, h);
              };
            case 3:
              return function (s, h, u) {
                return o.call(a, s, h, u);
              };
          }
          return function () {
            return o.apply(a, arguments);
          };
        };
      },
      function (r, e) {
        r.exports = function (t) {
          if (typeof t != 'function') throw TypeError(String(t) + ' is not a function');
          return t;
        };
      },
      function (r, e, t) {
        var n = t(165),
          o = t(8),
          a = t(13),
          i = t(19),
          s = t(16),
          h = t(63),
          u = t(51),
          d = o.WeakMap,
          v,
          l,
          c,
          f = function (S) {
            return c(S) ? l(S) : v(S, {});
          },
          g = function (S) {
            return function (R) {
              var P;
              if (!a(R) || (P = l(R)).type !== S)
                throw TypeError('Incompatible receiver, ' + S + ' required');
              return P;
            };
          };
        if (n) {
          var p = new d(),
            m = p.get,
            A = p.has,
            y = p.set;
          (v = function (S, R) {
            return y.call(p, S, R), R;
          }),
            (l = function (S) {
              return m.call(p, S) || {};
            }),
            (c = function (S) {
              return A.call(p, S);
            });
        } else {
          var E = h('state');
          (u[E] = !0),
            (v = function (S, R) {
              return i(S, E, R), R;
            }),
            (l = function (S) {
              return s(S, E) ? S[E] : {};
            }),
            (c = function (S) {
              return s(S, E);
            });
        }
        r.exports = { set: v, get: l, has: c, enforce: f, getterFor: g };
      },
      function (r, e) {
        r.exports = !0;
      },
      function (r, e) {
        r.exports = {};
      },
      function (r, e, t) {
        r.exports = t(261);
      },
      function (r, e, t) {
        r.exports = t(265);
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(4));
        (0, o.default)(e, '__esModule', { value: !0 }),
          (e.createElementFragment =
            e.createDocumentFragment =
            e.createElement =
            e.insertBefore =
            e.getEndPoint =
            e.getStartPoint =
            e.updateRange =
            e.filterSelectionNodes =
              void 0);
        var i = t(2),
          s = t(137),
          h = i.__importDefault(t(3));
        function u(m) {
          var A = [];
          return (
            (0, a.default)(m).call(m, function (y) {
              var E = y.getNodeName();
              if (E !== s.ListType.OrderedList && E !== s.ListType.UnorderedList) A.push(y);
              else if (y.prior) A.push(y.prior);
              else {
                var S = y.children();
                S == null ||
                  (0, a.default)(S).call(S, function (R) {
                    A.push(h.default(R));
                  });
              }
            }),
            A
          );
        }
        e.filterSelectionNodes = u;
        function d(m, A, y) {
          var E = m.selection,
            S = document.createRange();
          A.length > 1
            ? (S.setStart(A.elems[0], 0),
              S.setEnd(A.elems[A.length - 1], A.elems[A.length - 1].childNodes.length))
            : S.selectNodeContents(A.elems[0]),
            y && S.collapse(!1),
            E.saveRange(S),
            E.restoreSelection();
        }
        e.updateRange = d;
        function v(m) {
          var A;
          return m.prior
            ? m.prior
            : h.default((A = m.children()) === null || A === void 0 ? void 0 : A.elems[0]);
        }
        e.getStartPoint = v;
        function l(m) {
          var A;
          return m.prior
            ? m.prior
            : h.default((A = m.children()) === null || A === void 0 ? void 0 : A.last().elems[0]);
        }
        e.getEndPoint = l;
        function c(m, A, y) {
          y === void 0 && (y = null), m.parent().elems[0].insertBefore(A, y);
        }
        e.insertBefore = c;
        function f(m) {
          return document.createElement(m);
        }
        e.createElement = f;
        function g() {
          return document.createDocumentFragment();
        }
        e.createDocumentFragment = g;
        function p(m, A, y) {
          return (
            y === void 0 && (y = 'li'),
            (0, a.default)(m).call(m, function (E) {
              var S = f(y);
              (S.innerHTML = E.html()), A.appendChild(S), E.remove();
            }),
            A
          );
        }
        e.createElementFragment = p;
      },
      function (r, e) {
        r.exports = function (t, n) {
          return { enumerable: !(t & 1), configurable: !(t & 2), writable: !(t & 4), value: n };
        };
      },
      function (r, e) {
        r.exports = function (t) {
          if (t == null) throw TypeError("Can't call method on " + t);
          return t;
        };
      },
      function (r, e, t) {
        var n = t(164).charAt,
          o = t(42),
          a = t(75),
          i = 'String Iterator',
          s = o.set,
          h = o.getterFor(i);
        a(
          String,
          'String',
          function (u) {
            s(this, { type: i, string: String(u), index: 0 });
          },
          function () {
            var d = h(this),
              v = d.string,
              l = d.index,
              c;
            return l >= v.length
              ? { value: void 0, done: !0 }
              : ((c = n(v, l)), (d.index += c.length), { value: c, done: !1 });
          },
        );
      },
      function (r, e) {
        r.exports = {};
      },
      function (r, e, t) {
        var n = t(107),
          o = t(80);
        r.exports =
          Object.keys ||
          function (i) {
            return n(i, o);
          };
      },
      function (r, e, t) {
        var n = t(19);
        r.exports = function (o, a, i, s) {
          s && s.enumerable ? (o[a] = i) : n(o, a, i);
        };
      },
      function (r, e, t) {
        t(173);
        var n = t(174),
          o = t(8),
          a = t(65),
          i = t(19),
          s = t(44),
          h = t(10),
          u = h('toStringTag');
        for (var d in n) {
          var v = o[d],
            l = v && v.prototype;
          l && a(l) !== u && i(l, u, d), (s[d] = s.Array);
        }
      },
      function (r, e, t) {
        var n = t(34);
        r.exports =
          Array.isArray ||
          function (a) {
            return n(a) == 'Array';
          };
      },
      function (r, e, t) {
        var n = t(11),
          o = t(10),
          a = t(86),
          i = o('species');
        r.exports = function (s) {
          return (
            a >= 51 ||
            !n(function () {
              var h = [],
                u = (h.constructor = {});
              return (
                (u[i] = function () {
                  return { foo: 1 };
                }),
                h[s](Boolean).foo !== 1
              );
            })
          );
        };
      },
      function (r, e, t) {
        r.exports = t(222);
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 }), (e.ListHandle = void 0);
        var a = t(2),
          i = a.__importDefault(t(373)),
          s = (function () {
            function h(u) {
              (this.options = u), (this.selectionRangeElem = new i.default());
            }
            return h;
          })();
        e.ListHandle = s;
      },
      function (r, e, t) {
        var n = {}.propertyIsEnumerable,
          o = Object.getOwnPropertyDescriptor,
          a = o && !n.call({ 1: 2 }, 1);
        e.f = a
          ? function (s) {
              var h = o(this, s);
              return !!h && h.enumerable;
            }
          : n;
      },
      function (r, e, t) {
        var n = t(13);
        r.exports = function (o, a) {
          if (!n(o)) return o;
          var i, s;
          if (
            (a && typeof (i = o.toString) == 'function' && !n((s = i.call(o)))) ||
            (typeof (i = o.valueOf) == 'function' && !n((s = i.call(o)))) ||
            (!a && typeof (i = o.toString) == 'function' && !n((s = i.call(o))))
          )
            return s;
          throw TypeError("Can't convert object to primitive value");
        };
      },
      function (r, e) {},
      function (r, e) {
        var t = Math.ceil,
          n = Math.floor;
        r.exports = function (o) {
          return isNaN((o = +o)) ? 0 : (o > 0 ? n : t)(o);
        };
      },
      function (r, e, t) {
        var n = t(74),
          o = t(64),
          a = n('keys');
        r.exports = function (i) {
          return a[i] || (a[i] = o(i));
        };
      },
      function (r, e) {
        var t = 0,
          n = Math.random();
        r.exports = function (o) {
          return 'Symbol(' + String(o === void 0 ? '' : o) + ')_' + (++t + n).toString(36);
        };
      },
      function (r, e, t) {
        var n = t(81),
          o = t(34),
          a = t(10),
          i = a('toStringTag'),
          s =
            o(
              (function () {
                return arguments;
              })(),
            ) == 'Arguments',
          h = function (u, d) {
            try {
              return u[d];
            } catch (v) {}
          };
        r.exports = n
          ? o
          : function (u) {
              var d, v, l;
              return u === void 0
                ? 'Undefined'
                : u === null
                ? 'Null'
                : typeof (v = h((d = Object(u)), i)) == 'string'
                ? v
                : s
                ? o(d)
                : (l = o(d)) == 'Object' && typeof d.callee == 'function'
                ? 'Arguments'
                : l;
            };
      },
      function (r, e, t) {
        var n = t(25),
          o = t(112),
          a = t(35),
          i = t(40),
          s = t(113),
          h = t(114),
          u = function (v, l) {
            (this.stopped = v), (this.result = l);
          },
          d = (r.exports = function (v, l, c, f, g) {
            var p = i(l, c, f ? 2 : 1),
              m,
              A,
              y,
              E,
              S,
              R,
              P;
            if (g) m = v;
            else {
              if (((A = s(v)), typeof A != 'function')) throw TypeError('Target is not iterable');
              if (o(A)) {
                for (y = 0, E = a(v.length); E > y; y++)
                  if (((S = f ? p(n((P = v[y]))[0], P[1]) : p(v[y])), S && S instanceof u))
                    return S;
                return new u(!1);
              }
              m = A.call(v);
            }
            for (R = m.next; !(P = R.call(m)).done; )
              if (((S = h(m, p, P.value, f)), typeof S == 'object' && S && S instanceof u))
                return S;
            return new u(!1);
          });
        d.stop = function (v) {
          return new u(!0, v);
        };
      },
      function (r, e, t) {
        var n = t(11);
        r.exports = function (o, a) {
          var i = [][o];
          return (
            !!i &&
            n(function () {
              i.call(
                null,
                a ||
                  function () {
                    throw 1;
                  },
                1,
              );
            })
          );
        };
      },
      function (r, e) {
        r.exports = `	
\v\f\r                　\u2028\u2029\uFEFF`;
      },
      function (r, e, t) {
        var n = t(60),
          o = t(18),
          a = t(48);
        r.exports = function (i, s, h) {
          var u = n(s);
          u in i ? o.f(i, u, a(0, h)) : (i[u] = h);
        };
      },
      function (r, e, t) {
        r.exports = t(209);
      },
      function (r, e, t) {
        var n = t(14),
          o = t(59),
          a = t(48),
          i = t(30),
          s = t(60),
          h = t(16),
          u = t(100),
          d = Object.getOwnPropertyDescriptor;
        e.f = n
          ? d
          : function (l, c) {
              if (((l = i(l)), (c = s(c, !0)), u))
                try {
                  return d(l, c);
                } catch (f) {}
              if (h(l, c)) return a(!o.f.call(l, c), l[c]);
            };
      },
      function (r, e, t) {
        var n = t(11),
          o = t(34),
          a = ''.split;
        r.exports = n(function () {
          return !Object('z').propertyIsEnumerable(0);
        })
          ? function (i) {
              return o(i) == 'String' ? a.call(i, '') : Object(i);
            }
          : Object;
      },
      function (r, e, t) {
        var n = t(8),
          o = t(13),
          a = n.document,
          i = o(a) && o(a.createElement);
        r.exports = function (s) {
          return i ? a.createElement(s) : {};
        };
      },
      function (r, e, t) {
        var n = t(43),
          o = t(103);
        (r.exports = function (a, i) {
          return o[a] || (o[a] = i !== void 0 ? i : {});
        })('versions', []).push({
          version: '3.6.4',
          mode: n ? 'pure' : 'global',
          copyright: '© 2020 Denis Pushkarev (zloirock.ru)',
        });
      },
      function (r, e, t) {
        var n = t(5),
          o = t(167),
          a = t(105),
          i = t(171),
          s = t(37),
          h = t(19),
          u = t(53),
          d = t(10),
          v = t(43),
          l = t(44),
          c = t(104),
          f = c.IteratorPrototype,
          g = c.BUGGY_SAFARI_ITERATORS,
          p = d('iterator'),
          m = 'keys',
          A = 'values',
          y = 'entries',
          E = function () {
            return this;
          };
        r.exports = function (S, R, P, D, x, T, I) {
          o(P, R, D);
          var N = function (j) {
              if (j === x && w) return w;
              if (!g && j in O) return O[j];
              switch (j) {
                case m:
                  return function () {
                    return new P(this, j);
                  };
                case A:
                  return function () {
                    return new P(this, j);
                  };
                case y:
                  return function () {
                    return new P(this, j);
                  };
              }
              return function () {
                return new P(this);
              };
            },
            M = R + ' Iterator',
            L = !1,
            O = S.prototype,
            B = O[p] || O['@@iterator'] || (x && O[x]),
            w = (!g && B) || N(x),
            H = (R == 'Array' && O.entries) || B,
            b,
            U,
            K;
          if (
            (H &&
              ((b = a(H.call(new S()))),
              f !== Object.prototype &&
                b.next &&
                (!v && a(b) !== f && (i ? i(b, f) : typeof b[p] != 'function' && h(b, p, E)),
                s(b, M, !0, !0),
                v && (l[M] = E))),
            x == A &&
              B &&
              B.name !== A &&
              ((L = !0),
              (w = function () {
                return B.call(this);
              })),
            (!v || I) && O[p] !== w && h(O, p, w),
            (l[R] = w),
            x)
          )
            if (((U = { values: N(A), keys: T ? w : N(m), entries: N(y) }), I))
              for (K in U) (g || L || !(K in O)) && u(O, K, U[K]);
            else n({ target: R, proto: !0, forced: g || L }, U);
          return U;
        };
      },
      function (r, e, t) {
        var n = t(11);
        r.exports =
          !!Object.getOwnPropertySymbols &&
          !n(function () {
            return !String(Symbol());
          });
      },
      function (r, e, t) {
        var n = t(25),
          o = t(169),
          a = t(80),
          i = t(51),
          s = t(108),
          h = t(73),
          u = t(63),
          d = '>',
          v = '<',
          l = 'prototype',
          c = 'script',
          f = u('IE_PROTO'),
          g = function () {},
          p = function (S) {
            return v + c + d + S + v + '/' + c + d;
          },
          m = function (S) {
            S.write(p('')), S.close();
            var R = S.parentWindow.Object;
            return (S = null), R;
          },
          A = function () {
            var S = h('iframe'),
              R = 'java' + c + ':',
              P;
            return (
              (S.style.display = 'none'),
              s.appendChild(S),
              (S.src = String(R)),
              (P = S.contentWindow.document),
              P.open(),
              P.write(p('document.F=Object')),
              P.close(),
              P.F
            );
          },
          y,
          E = function () {
            try {
              y = document.domain && new ActiveXObject('htmlfile');
            } catch (R) {}
            E = y ? m(y) : A();
            for (var S = a.length; S--; ) delete E[l][a[S]];
            return E();
          };
        (i[f] = !0),
          (r.exports =
            Object.create ||
            function (R, P) {
              var D;
              return (
                R !== null ? ((g[l] = n(R)), (D = new g()), (g[l] = null), (D[f] = R)) : (D = E()),
                P === void 0 ? D : o(D, P)
              );
            });
      },
      function (r, e, t) {
        var n = t(30),
          o = t(35),
          a = t(79),
          i = function (s) {
            return function (h, u, d) {
              var v = n(h),
                l = o(v.length),
                c = a(d, l),
                f;
              if (s && u != u) {
                for (; l > c; ) if (((f = v[c++]), f != f)) return !0;
              } else for (; l > c; c++) if ((s || c in v) && v[c] === u) return s || c || 0;
              return !s && -1;
            };
          };
        r.exports = { includes: i(!0), indexOf: i(!1) };
      },
      function (r, e, t) {
        var n = t(62),
          o = Math.max,
          a = Math.min;
        r.exports = function (i, s) {
          var h = n(i);
          return h < 0 ? o(h + s, 0) : a(h, s);
        };
      },
      function (r, e) {
        r.exports = [
          'constructor',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'toLocaleString',
          'toString',
          'valueOf',
        ];
      },
      function (r, e, t) {
        var n = t(10),
          o = n('toStringTag'),
          a = {};
        (a[o] = 'z'), (r.exports = String(a) === '[object z]');
      },
      function (r, e) {
        r.exports = function () {};
      },
      function (r, e) {
        r.exports = function (t, n, o) {
          if (!(t instanceof n)) throw TypeError('Incorrect ' + (o ? o + ' ' : '') + 'invocation');
          return t;
        };
      },
      function (r, e, t) {
        var n = t(36);
        r.exports = n('navigator', 'userAgent') || '';
      },
      function (r, e, t) {
        var n = t(41),
          o = function (a) {
            var i, s;
            (this.promise = new a(function (h, u) {
              if (i !== void 0 || s !== void 0) throw TypeError('Bad Promise constructor');
              (i = h), (s = u);
            })),
              (this.resolve = n(i)),
              (this.reject = n(s));
          };
        r.exports.f = function (a) {
          return new o(a);
        };
      },
      function (r, e, t) {
        var n = t(8),
          o = t(84),
          a = n.process,
          i = a && a.versions,
          s = i && i.v8,
          h,
          u;
        s
          ? ((h = s.split('.')), (u = h[0] + h[1]))
          : o &&
            ((h = o.match(/Edge\/(\d+)/)),
            (!h || h[1] >= 74) && ((h = o.match(/Chrome\/(\d+)/)), h && (u = h[1]))),
          (r.exports = u && +u);
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(4));
        (0, o.default)(e, '__esModule', { value: !0 });
        var i = t(2),
          s = i.__importDefault(t(3)),
          h = t(6),
          u = i.__importDefault(t(267)),
          d = i.__importDefault(t(280)),
          v = i.__importDefault(t(281)),
          l = i.__importDefault(t(282)),
          c = i.__importDefault(t(301)),
          f = i.__importStar(t(416)),
          g = i.__importDefault(t(417)),
          p = i.__importDefault(t(418)),
          m = i.__importDefault(t(419)),
          A = i.__importStar(t(420)),
          y = i.__importDefault(t(423)),
          E = i.__importDefault(t(424)),
          S = i.__importDefault(t(425)),
          R = i.__importDefault(t(427)),
          P = i.__importDefault(t(437)),
          D = i.__importDefault(t(440)),
          x = i.__importStar(t(441)),
          T = i.__importDefault(t(23)),
          I = i.__importDefault(t(134)),
          N = i.__importDefault(t(24)),
          M = i.__importDefault(t(33)),
          L = i.__importDefault(t(38)),
          O = i.__importDefault(t(39)),
          B = 1,
          w = (function () {
            function H(b, U) {
              (this.pluginsFunctionList = {}),
                (this.beforeDestroyHooks = []),
                (this.id = 'wangEditor-' + B++),
                (this.toolbarSelector = b),
                (this.textSelector = U),
                f.selectorValidator(this),
                (this.config = h.deepClone(u.default)),
                (this.$toolbarElem = s.default('<div></div>')),
                (this.$textContainerElem = s.default('<div></div>')),
                (this.$textElem = s.default('<div></div>')),
                (this.toolbarElemId = ''),
                (this.textElemId = ''),
                (this.isFocus = !1),
                (this.isComposing = !1),
                (this.isCompatibleMode = !1),
                (this.selection = new d.default(this)),
                (this.cmd = new v.default(this)),
                (this.txt = new l.default(this)),
                (this.menus = new c.default(this)),
                (this.zIndex = new E.default()),
                (this.change = new S.default(this)),
                (this.history = new R.default(this)),
                (this.onSelectionChange = new D.default(this));
              var K = P.default(this),
                j = K.disable,
                W = K.enable;
              (this.disable = j), (this.enable = W), (this.isEnable = !0);
            }
            return (
              (H.prototype.initSelection = function (b) {
                g.default(this, b);
              }),
              (H.prototype.create = function () {
                this.zIndex.init(this),
                  (this.isCompatibleMode = this.config.compatibleMode()),
                  this.isCompatibleMode || (this.config.onchangeTimeout = 30),
                  m.default(this),
                  f.default(this),
                  this.txt.init(),
                  this.menus.init(),
                  A.default(this),
                  this.initSelection(!0),
                  p.default(this),
                  this.change.observe(),
                  this.history.observe(),
                  x.default(this);
              }),
              (H.prototype.beforeDestroy = function (b) {
                return this.beforeDestroyHooks.push(b), this;
              }),
              (H.prototype.destroy = function () {
                var b,
                  U = this;
                (0, a.default)((b = this.beforeDestroyHooks)).call(b, function (K) {
                  return K.call(U);
                }),
                  this.$toolbarElem.remove(),
                  this.$textContainerElem.remove();
              }),
              (H.prototype.fullScreen = function () {
                A.setFullScreen(this);
              }),
              (H.prototype.unFullScreen = function () {
                A.setUnFullScreen(this);
              }),
              (H.prototype.scrollToHead = function (b) {
                y.default(this, b);
              }),
              (H.registerMenu = function (b, U) {
                !U || typeof U != 'function' || (H.globalCustomMenuConstructorList[b] = U);
              }),
              (H.prototype.registerPlugin = function (b, U) {
                x.registerPlugin(b, U, this.pluginsFunctionList);
              }),
              (H.registerPlugin = function (b, U) {
                x.registerPlugin(b, U, H.globalPluginsFunctionList);
              }),
              (H.$ = s.default),
              (H.BtnMenu = T.default),
              (H.DropList = I.default),
              (H.DropListMenu = N.default),
              (H.Panel = M.default),
              (H.PanelMenu = L.default),
              (H.Tooltip = O.default),
              (H.globalCustomMenuConstructorList = {}),
              (H.globalPluginsFunctionList = {}),
              H
            );
          })();
        e.default = w;
      },
      function (r, e, t) {
        var n = t(13),
          o = t(55),
          a = t(10),
          i = a('species');
        r.exports = function (s, h) {
          var u;
          return (
            o(s) &&
              ((u = s.constructor),
              typeof u == 'function' && (u === Array || o(u.prototype))
                ? (u = void 0)
                : n(u) && ((u = u[i]), u === null && (u = void 0))),
            new (u === void 0 ? Array : u)(h === 0 ? 0 : h)
          );
        };
      },
      function (r, e, t) {
        r.exports = t(185);
      },
      function (r, e, t) {
        var n = t(49),
          o = t(68),
          a = '[' + o + ']',
          i = RegExp('^' + a + a + '*'),
          s = RegExp(a + a + '*$'),
          h = function (u) {
            return function (d) {
              var v = String(n(d));
              return u & 1 && (v = v.replace(i, '')), u & 2 && (v = v.replace(s, '')), v;
            };
          };
        r.exports = { start: h(1), end: h(2), trim: h(3) };
      },
      function (r, e, t) {
        r.exports = t(205);
      },
      function (r, e, t) {
        var n = t(227),
          o = t(230);
        function a(i) {
          '@babel/helpers - typeof';
          return (
            typeof o == 'function' && typeof n == 'symbol'
              ? (r.exports = a =
                  function (h) {
                    return typeof h;
                  })
              : (r.exports = a =
                  function (h) {
                    return h && typeof o == 'function' && h.constructor === o && h !== o.prototype
                      ? 'symbol'
                      : typeof h;
                  }),
            a(i)
          );
        }
        r.exports = a;
      },
      function (r, e, t) {
        var n = t(10);
        e.f = n;
      },
      function (r, e, t) {
        r.exports = t(306);
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(4));
        (0, o.default)(e, '__esModule', { value: !0 });
        var i = t(2),
          s = i.__importDefault(t(33)),
          h = (function () {
            function u(d, v) {
              var l = this;
              (this.$elem = d),
                (this.editor = v),
                (this._active = !1),
                d.on('click', function (c) {
                  var f;
                  s.default.hideCurAllPanels(),
                    (0, a.default)((f = v.txt.eventHooks.menuClickEvents)).call(f, function (g) {
                      return g();
                    }),
                    c.stopPropagation(),
                    v.selection.getRange() != null && l.clickHandler(c);
                });
            }
            return (
              (u.prototype.clickHandler = function (d) {}),
              (u.prototype.active = function () {
                (this._active = !0), this.$elem.addClass('w-e-active');
              }),
              (u.prototype.unActive = function () {
                (this._active = !1), this.$elem.removeClass('w-e-active');
              }),
              (0, o.default)(u.prototype, 'isActive', {
                get: function () {
                  return this._active;
                },
                enumerable: !1,
                configurable: !0,
              }),
              u
            );
          })();
        e.default = h;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(28));
        (0, o.default)(e, '__esModule', { value: !0 }),
          (e.getParentNodeA = e.EXTRA_TAG = void 0),
          (e.EXTRA_TAG = ['B', 'FONT', 'I', 'STRIKE']);
        function i(h) {
          for (var u = h.elems[0]; u && (0, a.default)((d = e.EXTRA_TAG)).call(d, u.nodeName); ) {
            var d;
            if (((u = u.parentElement), u.nodeName === 'A')) return u;
          }
        }
        e.getParentNodeA = i;
        function s(h) {
          var u,
            d = h.selection.getSelectionContainerElem();
          if (!(!((u = d == null ? void 0 : d.elems) === null || u === void 0) && u.length))
            return !1;
          if (d.getNodeName() === 'A') return !0;
          var v = i(d);
          return !!(v && v.nodeName === 'A');
        }
        e.default = s;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(57)),
          i = n(t(4)),
          s = n(t(27));
        (0, o.default)(e, '__esModule', { value: !0 });
        var h = t(2),
          u = t(6),
          d = h.__importDefault(t(135)),
          v = h.__importDefault(t(136)),
          l = (function () {
            function c(f) {
              this.editor = f;
            }
            return (
              (c.prototype.insertImg = function (f, g, p) {
                var m = this.editor,
                  A = m.config,
                  y = 'validate.',
                  E = function (T, I) {
                    return I === void 0 && (I = y), m.i18next.t(I + T);
                  },
                  S = f.replace(/</g, '&lt;').replace(/>/g, '&gt;');
                S = S.replace("'", '"');
                var R = '';
                p &&
                  ((R = p.replace("'", '"')), (R = "data-href='" + encodeURIComponent(R) + "' "));
                var P = '';
                g &&
                  ((P = g.replace(/</g, '&lt;').replace(/>/g, '&gt;')),
                  (P = P.replace("'", '"')),
                  (P = "alt='" + P + "' ")),
                  m.cmd.do(
                    'insertHTML',
                    "<img src='" +
                      S +
                      "' " +
                      P +
                      R +
                      'style="max-width:100%;" contenteditable="false"/>',
                  ),
                  A.linkImgCallback(f, g, p);
                var D = document.createElement('img');
                (D.onload = function () {
                  D = null;
                }),
                  (D.onerror = function () {
                    A.customAlert(
                      E('插入图片错误'),
                      'error',
                      'wangEditor: ' +
                        E('插入图片错误') +
                        '，' +
                        E('图片链接') +
                        ' "' +
                        f +
                        '"，' +
                        E('下载链接失败'),
                    ),
                      (D = null);
                  }),
                  (D.onabort = function () {
                    return (D = null);
                  }),
                  (D.src = f);
              }),
              (c.prototype.uploadImg = function (f) {
                var g = this;
                if (f.length) {
                  var p = this.editor,
                    m = p.config,
                    A = 'validate.',
                    y = function ($) {
                      return p.i18next.t(A + $);
                    },
                    E = m.uploadImgServer,
                    S = m.uploadImgShowBase64,
                    R = m.uploadImgMaxSize,
                    P = R / 1024 / 1024,
                    D = m.uploadImgMaxLength,
                    x = m.uploadFileName,
                    T = m.uploadImgParams,
                    I = m.uploadImgParamsWithUrl,
                    N = m.uploadImgHeaders,
                    M = m.uploadImgHooks,
                    L = m.uploadImgTimeout,
                    O = m.withCredentials,
                    B = m.customUploadImg;
                  if (!(!B && !E && !S)) {
                    var w = [],
                      H = [];
                    if (
                      (u.arrForEach(f, function (G) {
                        if (G) {
                          var $ = G.name || G.type.replace('/', '.'),
                            V = G.size;
                          if (!(!$ || !V)) {
                            var J = p.config.uploadImgAccept.join('|'),
                              k = '.(' + J + ')$',
                              rt = new RegExp(k, 'i');
                            if (rt.test($) === !1) {
                              H.push('【' + $ + '】' + y('不是图片'));
                              return;
                            }
                            if (R < V) {
                              H.push('【' + $ + '】' + y('大于') + ' ' + P + 'M');
                              return;
                            }
                            w.push(G);
                          }
                        }
                      }),
                      H.length)
                    ) {
                      m.customAlert(
                        y('图片验证未通过') +
                          `: 
` +
                          H.join(`
`),
                        'warning',
                      );
                      return;
                    }
                    if (w.length === 0) {
                      m.customAlert(y('传入的文件不合法'), 'warning');
                      return;
                    }
                    if (w.length > D) {
                      m.customAlert(y('一次最多上传') + D + y('张图片'), 'warning');
                      return;
                    }
                    if (B && typeof B == 'function') {
                      var b;
                      B(w, (0, a.default)((b = this.insertImg)).call(b, this));
                      return;
                    }
                    var U = new FormData();
                    if (
                      ((0, i.default)(w).call(w, function (G, $) {
                        var V = x || G.name;
                        w.length > 1 && (V = V + ($ + 1)), U.append(V, G);
                      }),
                      E)
                    ) {
                      var K = E.split('#');
                      E = K[0];
                      var j = K[1] || '';
                      (0, i.default)(u).call(u, T, function (G, $) {
                        I &&
                          ((0, s.default)(E).call(E, '?') > 0 ? (E += '&') : (E += '?'),
                          (E = E + G + '=' + $)),
                          U.append(G, $);
                      }),
                        j && (E += '#' + j);
                      var W = d.default(E, {
                        timeout: L,
                        formData: U,
                        headers: N,
                        withCredentials: !!O,
                        beforeSend: function ($) {
                          if (M.before) return M.before($, p, w);
                        },
                        onTimeout: function ($) {
                          m.customAlert(y('上传图片超时'), 'error'), M.timeout && M.timeout($, p);
                        },
                        onProgress: function ($, V) {
                          var J = new v.default(p);
                          V.lengthComputable && (($ = V.loaded / V.total), J.show($));
                        },
                        onError: function ($) {
                          m.customAlert(
                            y('上传图片错误'),
                            'error',
                            y('上传图片错误') + '，' + y('服务器返回状态') + ': ' + $.status,
                          ),
                            M.error && M.error($, p);
                        },
                        onFail: function ($, V) {
                          m.customAlert(
                            y('上传图片失败'),
                            'error',
                            y('上传图片返回结果错误') + ('，' + y('返回结果') + ': ') + V,
                          ),
                            M.fail && M.fail($, p, V);
                        },
                        onSuccess: function ($, V) {
                          if (M.customInsert) {
                            var J;
                            M.customInsert((0, a.default)((J = g.insertImg)).call(J, g), V, p);
                            return;
                          }
                          if (V.errno != '0') {
                            m.customAlert(
                              y('上传图片失败'),
                              'error',
                              y('上传图片返回结果错误') +
                                '，' +
                                y('返回结果') +
                                ' errno=' +
                                V.errno,
                            ),
                              M.fail && M.fail($, p, V);
                            return;
                          }
                          var k = V.data;
                          (0, i.default)(k).call(k, function (rt) {
                            typeof rt == 'string'
                              ? g.insertImg(rt)
                              : g.insertImg(rt.url, rt.alt, rt.href);
                          }),
                            M.success && M.success($, p, V);
                        },
                      });
                      typeof W == 'string' && m.customAlert(W, 'error');
                      return;
                    }
                    S &&
                      u.arrForEach(f, function (G) {
                        var $ = g,
                          V = new FileReader();
                        V.readAsDataURL(G),
                          (V.onload = function () {
                            if (this.result) {
                              var J = this.result.toString();
                              $.insertImg(J, J);
                            }
                          });
                      });
                  }
                }
              }),
              c
            );
          })();
        e.default = l;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(410)),
          i = n(t(4)),
          s = n(t(45));
        (0, o.default)(e, '__esModule', { value: !0 }),
          (e.dealTextNode = e.isAllTodo = e.isTodo = e.getCursorNextNode = void 0);
        function h(c) {
          return c.length ? c.attr('class') === 'w-e-todo' : !1;
        }
        e.isTodo = h;
        function u(c) {
          var f = c.selection.getSelectionRangeTopNodes();
          if (f.length !== 0)
            return (0, a.default)(f).call(f, function (g) {
              return h(g);
            });
        }
        e.isAllTodo = u;
        function d(c, f, g) {
          var p;
          if (c.hasChildNodes()) {
            var m = c.cloneNode(),
              A = !1;
            f.nodeValue === '' && (A = !0);
            var y = [];
            return (
              (0, i.default)((p = c.childNodes)).call(p, function (E) {
                if (
                  (!v(E, f) &&
                    A &&
                    (m.appendChild(E.cloneNode(!0)), E.nodeName !== 'BR' && y.push(E)),
                  v(E, f))
                ) {
                  if (E.nodeType === 1) {
                    var S = d(E, f, g);
                    S && S.textContent !== '' && (m == null || m.appendChild(S));
                  }
                  if (E.nodeType === 3 && f.isEqualNode(E)) {
                    var R = l(E, g);
                    m.textContent = R;
                  }
                  A = !0;
                }
              }),
              (0, i.default)(y).call(y, function (E) {
                var S = E;
                S.remove();
              }),
              m
            );
          }
        }
        e.getCursorNextNode = d;
        function v(c, f) {
          return c.nodeType === 3 ? c.nodeValue === f.nodeValue : c.contains(f);
        }
        function l(c, f, g) {
          g === void 0 && (g = !0);
          var p = c.nodeValue,
            m = p == null ? void 0 : (0, s.default)(p).call(p, 0, f);
          if (((p = p == null ? void 0 : (0, s.default)(p).call(p, f)), !g)) {
            var A = p;
            (p = m), (m = A);
          }
          return (c.nodeValue = m), p;
        }
        e.dealTextNode = l;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 });
        var a = t(430),
          i = (function () {
            function s(h) {
              (this.maxSize = h),
                (this.isRe = !1),
                (this.data = new a.CeilStack(h)),
                (this.revokeData = new a.CeilStack(h));
            }
            return (
              (0, o.default)(s.prototype, 'size', {
                get: function () {
                  return [this.data.size, this.revokeData.size];
                },
                enumerable: !1,
                configurable: !0,
              }),
              (s.prototype.resetMaxSize = function (h) {
                this.data.resetMax(h), this.revokeData.resetMax(h);
              }),
              (s.prototype.save = function (h) {
                return (
                  this.isRe && (this.revokeData.clear(), (this.isRe = !1)),
                  this.data.instack(h),
                  this
                );
              }),
              (s.prototype.revoke = function (h) {
                !this.isRe && (this.isRe = !0);
                var u = this.data.outstack();
                return u ? (this.revokeData.instack(u), h(u), !0) : !1;
              }),
              (s.prototype.restore = function (h) {
                !this.isRe && (this.isRe = !0);
                var u = this.revokeData.outstack();
                return u ? (this.data.instack(u), h(u), !0) : !1;
              }),
              s
            );
          })();
        e.default = i;
      },
      function (r, e, t) {
        var n = t(14),
          o = t(11),
          a = t(73);
        r.exports =
          !n &&
          !o(function () {
            return (
              Object.defineProperty(a('div'), 'a', {
                get: function () {
                  return 7;
                },
              }).a != 7
            );
          });
      },
      function (r, e, t) {
        var n = t(11),
          o = /#|\.prototype\./,
          a = function (d, v) {
            var l = s[i(d)];
            return l == u ? !0 : l == h ? !1 : typeof v == 'function' ? n(v) : !!v;
          },
          i = (a.normalize = function (d) {
            return String(d).replace(o, '.').toLowerCase();
          }),
          s = (a.data = {}),
          h = (a.NATIVE = 'N'),
          u = (a.POLYFILL = 'P');
        r.exports = a;
      },
      function (r, e, t) {
        var n = t(103),
          o = Function.toString;
        typeof n.inspectSource != 'function' &&
          (n.inspectSource = function (a) {
            return o.call(a);
          }),
          (r.exports = n.inspectSource);
      },
      function (r, e, t) {
        var n = t(8),
          o = t(166),
          a = '__core-js_shared__',
          i = n[a] || o(a, {});
        r.exports = i;
      },
      function (r, e, t) {
        var n = t(105),
          o = t(19),
          a = t(16),
          i = t(10),
          s = t(43),
          h = i('iterator'),
          u = !1,
          d = function () {
            return this;
          },
          v,
          l,
          c;
        [].keys &&
          ((c = [].keys()),
          'next' in c ? ((l = n(n(c))), l !== Object.prototype && (v = l)) : (u = !0)),
          v == null && (v = {}),
          !s && !a(v, h) && o(v, h, d),
          (r.exports = { IteratorPrototype: v, BUGGY_SAFARI_ITERATORS: u });
      },
      function (r, e, t) {
        var n = t(16),
          o = t(31),
          a = t(63),
          i = t(168),
          s = a('IE_PROTO'),
          h = Object.prototype;
        r.exports = i
          ? Object.getPrototypeOf
          : function (u) {
              return (
                (u = o(u)),
                n(u, s)
                  ? u[s]
                  : typeof u.constructor == 'function' && u instanceof u.constructor
                  ? u.constructor.prototype
                  : u instanceof Object
                  ? h
                  : null
              );
            };
      },
      function (r, e, t) {
        var n = t(76);
        r.exports = n && !Symbol.sham && typeof Symbol.iterator == 'symbol';
      },
      function (r, e, t) {
        var n = t(16),
          o = t(30),
          a = t(78).indexOf,
          i = t(51);
        r.exports = function (s, h) {
          var u = o(s),
            d = 0,
            v = [],
            l;
          for (l in u) !n(i, l) && n(u, l) && v.push(l);
          for (; h.length > d; ) n(u, (l = h[d++])) && (~a(v, l) || v.push(l));
          return v;
        };
      },
      function (r, e, t) {
        var n = t(36);
        r.exports = n('document', 'documentElement');
      },
      function (r, e, t) {
        var n = t(8);
        r.exports = n.Promise;
      },
      function (r, e, t) {
        var n = t(53);
        r.exports = function (o, a, i) {
          for (var s in a) i && i.unsafe && o[s] ? (o[s] = a[s]) : n(o, s, a[s], i);
          return o;
        };
      },
      function (r, e, t) {
        var n = t(36),
          o = t(18),
          a = t(10),
          i = t(14),
          s = a('species');
        r.exports = function (h) {
          var u = n(h),
            d = o.f;
          i &&
            u &&
            !u[s] &&
            d(u, s, {
              configurable: !0,
              get: function () {
                return this;
              },
            });
        };
      },
      function (r, e, t) {
        var n = t(10),
          o = t(44),
          a = n('iterator'),
          i = Array.prototype;
        r.exports = function (s) {
          return s !== void 0 && (o.Array === s || i[a] === s);
        };
      },
      function (r, e, t) {
        var n = t(65),
          o = t(44),
          a = t(10),
          i = a('iterator');
        r.exports = function (s) {
          if (s != null) return s[i] || s['@@iterator'] || o[n(s)];
        };
      },
      function (r, e, t) {
        var n = t(25);
        r.exports = function (o, a, i, s) {
          try {
            return s ? a(n(i)[0], i[1]) : a(i);
          } catch (u) {
            var h = o.return;
            throw (h !== void 0 && n(h.call(o)), u);
          }
        };
      },
      function (r, e, t) {
        var n = t(10),
          o = n('iterator'),
          a = !1;
        try {
          var i = 0,
            s = {
              next: function () {
                return { done: !!i++ };
              },
              return: function () {
                a = !0;
              },
            };
          (s[o] = function () {
            return this;
          }),
            Array.from(s, function () {
              throw 2;
            });
        } catch (h) {}
        r.exports = function (h, u) {
          if (!u && !a) return !1;
          var d = !1;
          try {
            var v = {};
            (v[o] = function () {
              return {
                next: function () {
                  return { done: (d = !0) };
                },
              };
            }),
              h(v);
          } catch (l) {}
          return d;
        };
      },
      function (r, e, t) {
        var n = t(25),
          o = t(41),
          a = t(10),
          i = a('species');
        r.exports = function (s, h) {
          var u = n(s).constructor,
            d;
          return u === void 0 || (d = n(u)[i]) == null ? h : o(d);
        };
      },
      function (r, e, t) {
        var n = t(8),
          o = t(11),
          a = t(34),
          i = t(40),
          s = t(108),
          h = t(73),
          u = t(118),
          d = n.location,
          v = n.setImmediate,
          l = n.clearImmediate,
          c = n.process,
          f = n.MessageChannel,
          g = n.Dispatch,
          p = 0,
          m = {},
          A = 'onreadystatechange',
          y,
          E,
          S,
          R = function (T) {
            if (m.hasOwnProperty(T)) {
              var I = m[T];
              delete m[T], I();
            }
          },
          P = function (T) {
            return function () {
              R(T);
            };
          },
          D = function (T) {
            R(T.data);
          },
          x = function (T) {
            n.postMessage(T + '', d.protocol + '//' + d.host);
          };
        (!v || !l) &&
          ((v = function (I) {
            for (var N = [], M = 1; arguments.length > M; ) N.push(arguments[M++]);
            return (
              (m[++p] = function () {
                (typeof I == 'function' ? I : Function(I)).apply(void 0, N);
              }),
              y(p),
              p
            );
          }),
          (l = function (I) {
            delete m[I];
          }),
          a(c) == 'process'
            ? (y = function (T) {
                c.nextTick(P(T));
              })
            : g && g.now
            ? (y = function (T) {
                g.now(P(T));
              })
            : f && !u
            ? ((E = new f()), (S = E.port2), (E.port1.onmessage = D), (y = i(S.postMessage, S, 1)))
            : n.addEventListener &&
              typeof postMessage == 'function' &&
              !n.importScripts &&
              !o(x) &&
              d.protocol !== 'file:'
            ? ((y = x), n.addEventListener('message', D, !1))
            : A in h('script')
            ? (y = function (T) {
                s.appendChild(h('script'))[A] = function () {
                  s.removeChild(this), R(T);
                };
              })
            : (y = function (T) {
                setTimeout(P(T), 0);
              })),
          (r.exports = { set: v, clear: l });
      },
      function (r, e, t) {
        var n = t(84);
        r.exports = /(iphone|ipod|ipad).*applewebkit/i.test(n);
      },
      function (r, e, t) {
        var n = t(25),
          o = t(13),
          a = t(85);
        r.exports = function (i, s) {
          if ((n(i), o(s) && s.constructor === i)) return s;
          var h = a.f(i),
            u = h.resolve;
          return u(s), h.promise;
        };
      },
      function (r, e) {
        r.exports = function (t) {
          try {
            return { error: !1, value: t() };
          } catch (n) {
            return { error: !0, value: n };
          }
        };
      },
      function (r, e, t) {
        r.exports = t(197);
      },
      function (r, e, t) {
        var n = t(5),
          o = t(8),
          a = t(123),
          i = t(11),
          s = t(19),
          h = t(66),
          u = t(83),
          d = t(13),
          v = t(37),
          l = t(18).f,
          c = t(32).forEach,
          f = t(14),
          g = t(42),
          p = g.set,
          m = g.getterFor;
        r.exports = function (A, y, E) {
          var S = A.indexOf('Map') !== -1,
            R = A.indexOf('Weak') !== -1,
            P = S ? 'set' : 'add',
            D = o[A],
            x = D && D.prototype,
            T = {},
            I;
          if (
            !f ||
            typeof D != 'function' ||
            !(
              R ||
              (x.forEach &&
                !i(function () {
                  new D().entries().next();
                }))
            )
          )
            (I = E.getConstructor(y, A, S, P)), (a.REQUIRED = !0);
          else {
            I = y(function (M, L) {
              p(u(M, I, A), { type: A, collection: new D() }), L != null && h(L, M[P], M, S);
            });
            var N = m(A);
            c(
              [
                'add',
                'clear',
                'delete',
                'forEach',
                'get',
                'has',
                'set',
                'keys',
                'values',
                'entries',
              ],
              function (M) {
                var L = M == 'add' || M == 'set';
                M in x &&
                  !(R && M == 'clear') &&
                  s(I.prototype, M, function (O, B) {
                    var w = N(this).collection;
                    if (!L && R && !d(O)) return M == 'get' ? void 0 : !1;
                    var H = w[M](O === 0 ? 0 : O, B);
                    return L ? this : H;
                  });
              },
            ),
              R ||
                l(I.prototype, 'size', {
                  configurable: !0,
                  get: function () {
                    return N(this).collection.size;
                  },
                });
          }
          return (
            v(I, A, !1, !0),
            (T[A] = I),
            n({ global: !0, forced: !0 }, T),
            R || E.setStrong(I, A, S),
            I
          );
        };
      },
      function (r, e, t) {
        var n = t(51),
          o = t(13),
          a = t(16),
          i = t(18).f,
          s = t(64),
          h = t(200),
          u = s('meta'),
          d = 0,
          v =
            Object.isExtensible ||
            function () {
              return !0;
            },
          l = function (m) {
            i(m, u, { value: { objectID: 'O' + ++d, weakData: {} } });
          },
          c = function (m, A) {
            if (!o(m)) return typeof m == 'symbol' ? m : (typeof m == 'string' ? 'S' : 'P') + m;
            if (!a(m, u)) {
              if (!v(m)) return 'F';
              if (!A) return 'E';
              l(m);
            }
            return m[u].objectID;
          },
          f = function (m, A) {
            if (!a(m, u)) {
              if (!v(m)) return !0;
              if (!A) return !1;
              l(m);
            }
            return m[u].weakData;
          },
          g = function (m) {
            return h && p.REQUIRED && v(m) && !a(m, u) && l(m), m;
          },
          p = (r.exports = { REQUIRED: !1, fastKey: c, getWeakData: f, onFreeze: g });
        n[u] = !0;
      },
      function (r, e, t) {
        var n = t(18).f,
          o = t(77),
          a = t(110),
          i = t(40),
          s = t(83),
          h = t(66),
          u = t(75),
          d = t(111),
          v = t(14),
          l = t(123).fastKey,
          c = t(42),
          f = c.set,
          g = c.getterFor;
        r.exports = {
          getConstructor: function (p, m, A, y) {
            var E = p(function (D, x) {
                s(D, E, m),
                  f(D, { type: m, index: o(null), first: void 0, last: void 0, size: 0 }),
                  v || (D.size = 0),
                  x != null && h(x, D[y], D, A);
              }),
              S = g(m),
              R = function (D, x, T) {
                var I = S(D),
                  N = P(D, x),
                  M,
                  L;
                return (
                  N
                    ? (N.value = T)
                    : ((I.last = N =
                        {
                          index: (L = l(x, !0)),
                          key: x,
                          value: T,
                          previous: (M = I.last),
                          next: void 0,
                          removed: !1,
                        }),
                      I.first || (I.first = N),
                      M && (M.next = N),
                      v ? I.size++ : D.size++,
                      L !== 'F' && (I.index[L] = N)),
                  D
                );
              },
              P = function (D, x) {
                var T = S(D),
                  I = l(x),
                  N;
                if (I !== 'F') return T.index[I];
                for (N = T.first; N; N = N.next) if (N.key == x) return N;
              };
            return (
              a(E.prototype, {
                clear: function () {
                  for (var x = this, T = S(x), I = T.index, N = T.first; N; )
                    (N.removed = !0),
                      N.previous && (N.previous = N.previous.next = void 0),
                      delete I[N.index],
                      (N = N.next);
                  (T.first = T.last = void 0), v ? (T.size = 0) : (x.size = 0);
                },
                delete: function (D) {
                  var x = this,
                    T = S(x),
                    I = P(x, D);
                  if (I) {
                    var N = I.next,
                      M = I.previous;
                    delete T.index[I.index],
                      (I.removed = !0),
                      M && (M.next = N),
                      N && (N.previous = M),
                      T.first == I && (T.first = N),
                      T.last == I && (T.last = M),
                      v ? T.size-- : x.size--;
                  }
                  return !!I;
                },
                forEach: function (x) {
                  for (
                    var T = S(this), I = i(x, arguments.length > 1 ? arguments[1] : void 0, 3), N;
                    (N = N ? N.next : T.first);

                  )
                    for (I(N.value, N.key, this); N && N.removed; ) N = N.previous;
                },
                has: function (x) {
                  return !!P(this, x);
                },
              }),
              a(
                E.prototype,
                A
                  ? {
                      get: function (x) {
                        var T = P(this, x);
                        return T && T.value;
                      },
                      set: function (x, T) {
                        return R(this, x === 0 ? 0 : x, T);
                      },
                    }
                  : {
                      add: function (x) {
                        return R(this, (x = x === 0 ? 0 : x), x);
                      },
                    },
              ),
              v &&
                n(E.prototype, 'size', {
                  get: function () {
                    return S(this).size;
                  },
                }),
              E
            );
          },
          setStrong: function (p, m, A) {
            var y = m + ' Iterator',
              E = g(m),
              S = g(y);
            u(
              p,
              m,
              function (R, P) {
                f(this, { type: y, target: R, state: E(R), kind: P, last: void 0 });
              },
              function () {
                for (var R = S(this), P = R.kind, D = R.last; D && D.removed; ) D = D.previous;
                return !R.target || !(R.last = D = D ? D.next : R.state.first)
                  ? ((R.target = void 0), { value: void 0, done: !0 })
                  : P == 'keys'
                  ? { value: D.key, done: !1 }
                  : P == 'values'
                  ? { value: D.value, done: !1 }
                  : { value: [D.key, D.value], done: !1 };
              },
              A ? 'entries' : 'values',
              !A,
              !0,
            ),
              d(m);
          },
        };
      },
      function (r, e, t) {
        var n = t(12);
        n('iterator');
      },
      function (r, e, t) {
        var n = t(107),
          o = t(80),
          a = o.concat('length', 'prototype');
        e.f =
          Object.getOwnPropertyNames ||
          function (s) {
            return n(s, a);
          };
      },
      function (r, e) {
        e.f = Object.getOwnPropertySymbols;
      },
      function (r, e, t) {
        r.exports = t(268);
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 }), (e.default = { zIndex: 1e4 });
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 }),
          (e.default = {
            focus: !0,
            height: 300,
            placeholder: '请输入正文',
            zIndexFullScreen: 10002,
            showFullScreen: !0,
          });
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(4));
        (0, o.default)(e, '__esModule', { value: !0 }),
          (e.getPasteImgs = e.getPasteHtml = e.getPasteText = void 0);
        var i = t(2),
          s = t(6),
          h = i.__importDefault(t(292));
        function u(l) {
          var c = l.clipboardData,
            f = '';
          return (
            c == null
              ? (f = window.clipboardData && window.clipboardData.getData('text'))
              : (f = c.getData('text/plain')),
            s.replaceHtmlSymbol(f)
          );
        }
        e.getPasteText = u;
        function d(l, c, f) {
          c === void 0 && (c = !0), f === void 0 && (f = !1);
          var g = l.clipboardData,
            p = '';
          if ((g && (p = g.getData('text/html')), !p)) {
            var m = u(l);
            if (!m) return '';
            p = '<p>' + m + '</p>';
          }
          return (
            (p = p.replace(/<(\d)/gm, function (A, y) {
              return '&lt;' + y;
            })),
            (p = p.replace(/<(\/?meta.*?)>/gim, '')),
            (p = h.default(p, c, f)),
            p
          );
        }
        e.getPasteHtml = d;
        function v(l) {
          var c,
            f = [],
            g = u(l);
          if (g) return f;
          var p = (c = l.clipboardData) === null || c === void 0 ? void 0 : c.items;
          return (
            p &&
              (0, a.default)(s).call(s, p, function (m, A) {
                var y = A.type;
                /image/i.test(y) && f.push(A.getAsFile());
              }),
            f
          );
        }
        e.getPasteImgs = v;
      },
      function (r, e, t) {
        r.exports = t(294);
      },
      function (r, e, t) {
        r.exports = t(310);
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(4)),
          i = n(t(46));
        (0, o.default)(e, '__esModule', { value: !0 });
        var s = t(2),
          h = s.__importDefault(t(3)),
          u = t(7),
          d = (function () {
            function v(l, c) {
              var f = this;
              (this.hideTimeoutId = 0), (this.menu = l), (this.conf = c);
              var g = h.default('<div class="w-e-droplist"></div>'),
                p = h.default('<p>' + c.title + '</p>');
              p.addClass('w-e-dp-title'), g.append(p);
              var m = c.list || [],
                A = c.type || 'list',
                y = c.clickHandler || u.EMPTY_FN,
                E = h.default(
                  '<ul class="' + (A === 'list' ? 'w-e-list' : 'w-e-block') + '"></ul>',
                );
              (0, a.default)(m).call(m, function (S) {
                var R = S.$elem,
                  P = S.value,
                  D = h.default('<li class="w-e-item"></li>');
                R &&
                  (D.append(R),
                  E.append(D),
                  D.on('click', function (x) {
                    y(P),
                      x.stopPropagation(),
                      (f.hideTimeoutId = (0, i.default)(function () {
                        f.hide();
                      }));
                  }));
              }),
                g.append(E),
                g.on('mouseleave', function () {
                  f.hideTimeoutId = (0, i.default)(function () {
                    f.hide();
                  });
                }),
                (this.$container = g),
                (this.rendered = !1),
                (this._show = !1);
            }
            return (
              (v.prototype.show = function () {
                this.hideTimeoutId && clearTimeout(this.hideTimeoutId);
                var l = this.menu,
                  c = l.$elem,
                  f = this.$container;
                if (!this._show) {
                  if (this.rendered) f.show();
                  else {
                    var g = c.getBoundingClientRect().height || 0,
                      p = this.conf.width || 100;
                    f.css('margin-top', g + 'px').css('width', p + 'px'),
                      c.append(f),
                      (this.rendered = !0);
                  }
                  this._show = !0;
                }
              }),
              (v.prototype.hide = function () {
                var l = this.$container;
                this._show && (l.hide(), (this._show = !1));
              }),
              (0, o.default)(v.prototype, 'isShow', {
                get: function () {
                  return this._show;
                },
                enumerable: !1,
                configurable: !0,
              }),
              v
            );
          })();
        e.default = d;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(92)),
          a = n(t(1)),
          i = n(t(4));
        (0, a.default)(e, '__esModule', { value: !0 });
        var s = t(6);
        function h(u, d) {
          var v = new XMLHttpRequest();
          if (
            (v.open('POST', u),
            (v.timeout = d.timeout || 10 * 1e3),
            (v.ontimeout = function () {
              console.error('wangEditor - 请求超时'), d.onTimeout && d.onTimeout(v);
            }),
            v.upload &&
              (v.upload.onprogress = function (c) {
                var f = c.loaded / c.total;
                d.onProgress && d.onProgress(f, c);
              }),
            d.headers &&
              (0, i.default)(s).call(s, d.headers, function (c, f) {
                v.setRequestHeader(c, f);
              }),
            (v.withCredentials = !!d.withCredentials),
            d.beforeSend)
          ) {
            var l = d.beforeSend(v);
            if (l && (0, o.default)(l) === 'object' && l.prevent) return l.msg;
          }
          return (
            (v.onreadystatechange = function () {
              if (v.readyState === 4) {
                var c = v.status;
                if (!(c < 200) && !(c >= 300 && c < 400)) {
                  if (c >= 400) {
                    console.error('wangEditor - XHR 报错，状态码 ' + c), d.onError && d.onError(v);
                    return;
                  }
                  var f = v.responseText,
                    g;
                  if ((0, o.default)(f) !== 'object')
                    try {
                      g = JSON.parse(f);
                    } catch (p) {
                      console.error('wangEditor - 返回结果不是 JSON 格式', f),
                        d.onFail && d.onFail(v, f);
                      return;
                    }
                  else g = f;
                  d.onSuccess(v, g);
                }
              }
            }),
            v.send(d.formData || null),
            v
          );
        }
        e.default = h;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(342)),
          i = n(t(46));
        (0, o.default)(e, '__esModule', { value: !0 });
        var s = t(2),
          h = s.__importDefault(t(3)),
          u = (function () {
            function d(v) {
              (this.editor = v),
                (this.$textContainer = v.$textContainerElem),
                (this.$bar = h.default('<div class="w-e-progress"></div>')),
                (this.isShow = !1),
                (this.time = 0),
                (this.timeoutId = 0);
            }
            return (
              (d.prototype.show = function (v) {
                var l = this;
                if (!this.isShow) {
                  this.isShow = !0;
                  var c = this.$bar,
                    f = this.$textContainer;
                  f.append(c),
                    (0, a.default)() - this.time > 100 &&
                      v <= 1 &&
                      (c.css('width', v * 100 + '%'), (this.time = (0, a.default)()));
                  var g = this.timeoutId;
                  g && clearTimeout(g),
                    (this.timeoutId = (0, i.default)(function () {
                      l.hide();
                    }, 500));
                }
              }),
              (d.prototype.hide = function () {
                var v = this.$bar;
                v.remove(), (this.isShow = !1), (this.time = 0), (this.timeoutId = 0);
              }),
              d
            );
          })();
        e.default = u;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 }), (e.ListType = void 0);
        var a = t(2),
          i = a.__importDefault(t(3)),
          s = a.__importDefault(t(24)),
          h = t(47),
          u = a.__importStar(t(371)),
          d;
        (function (l) {
          (l.OrderedList = 'OL'), (l.UnorderedList = 'UL');
        })((d = e.ListType || (e.ListType = {})));
        var v = (function (l) {
          a.__extends(c, l);
          function c(f) {
            var g = this,
              p = i.default(`<div class="w-e-menu" data-title="序列">
                <i class="w-e-icon-list2"></i>
            </div>`),
              m = {
                width: 130,
                title: '序列',
                type: 'list',
                list: [
                  {
                    $elem: i.default(
                      `
                        <p>
                            <i class="w-e-icon-list2 w-e-drop-list-item"></i>
                            ` +
                        f.i18next.t('menus.dropListMenu.list.无序列表') +
                        `
                        <p>`,
                    ),
                    value: d.UnorderedList,
                  },
                  {
                    $elem: i.default(
                      `<p>
                            <i class="w-e-icon-list-numbered w-e-drop-list-item"></i>
                            ` +
                        f.i18next.t('menus.dropListMenu.list.有序列表') +
                        `
                        <p>`,
                    ),
                    value: d.OrderedList,
                  },
                ],
                clickHandler: function (y) {
                  g.command(y);
                },
              };
            return (g = l.call(this, p, f, m) || this), g;
          }
          return (
            (c.prototype.command = function (f) {
              var g = this.editor,
                p = g.selection.getSelectionContainerElem();
              p !== void 0 && (this.handleSelectionRangeNodes(f), this.tryChangeActive());
            }),
            (c.prototype.validator = function (f, g, p) {
              return !(!f.length || !g.length || p.equal(f) || p.equal(g));
            }),
            (c.prototype.handleSelectionRangeNodes = function (f) {
              var g = this.editor,
                p = g.selection,
                m = f.toLowerCase(),
                A = p.getSelectionContainerElem(),
                y = p.getSelectionStartElem().getNodeTop(g),
                E = p.getSelectionEndElem().getNodeTop(g);
              if (this.validator(y, E, g.$textElem)) {
                var S = p.getRange(),
                  R = S == null ? void 0 : S.collapsed;
                g.$textElem.equal(A) || (A = A.getNodeTop(g));
                var P = {
                    editor: g,
                    listType: f,
                    listTarget: m,
                    $selectionElem: A,
                    $startElem: y,
                    $endElem: E,
                  },
                  D;
                this.isOrderElem(A)
                  ? (D = u.ClassType.Wrap)
                  : this.isOrderElem(y) && this.isOrderElem(E)
                  ? (D = u.ClassType.Join)
                  : this.isOrderElem(y)
                  ? (D = u.ClassType.StartJoin)
                  : this.isOrderElem(E)
                  ? (D = u.ClassType.EndJoin)
                  : (D = u.ClassType.Other);
                var x = new u.default(u.createListHandle(D, P, S));
                h.updateRange(g, x.getSelectionRangeElem(), !!R);
              }
            }),
            (c.prototype.isOrderElem = function (f) {
              var g = f.getNodeName();
              return g === d.OrderedList || g === d.UnorderedList;
            }),
            (c.prototype.tryChangeActive = function () {}),
            c
          );
        })(s.default);
        e.default = v;
      },
      function (r, e, t) {
        r.exports = t(395);
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 });
        function a(i) {
          var s = i.selection.getSelectionContainerElem();
          return s != null && s.length
            ? !!(
                s.getNodeName() == 'CODE' ||
                s.getNodeName() == 'PRE' ||
                s.parent().getNodeName() == 'CODE' ||
                s.parent().getNodeName() == 'PRE' ||
                /hljs/.test(s.parent().attr('class'))
              )
            : !1;
        }
        e.default = a;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(29));
        (0, o.default)(e, '__esModule', { value: !0 }), (e.todo = void 0);
        var i = t(2),
          s = i.__importDefault(t(3)),
          h = (function () {
            function d(v) {
              var l;
              (this.template =
                '<ul class="w-e-todo"><li><span contenteditable="false"><input type="checkbox"></span></li></ul>'),
                (this.checked = !1),
                (this.$todo = s.default(this.template)),
                (this.$child =
                  (l = v == null ? void 0 : v.childNodes()) === null || l === void 0
                    ? void 0
                    : l.clone(!0));
            }
            return (
              (d.prototype.init = function () {
                var v = this.$child,
                  l = this.getInputContainer();
                v && v.insertAfter(l);
              }),
              (d.prototype.getInput = function () {
                var v = this.$todo,
                  l = (0, a.default)(v).call(v, 'input');
                return l;
              }),
              (d.prototype.getInputContainer = function () {
                var v = this.getInput().parent();
                return v;
              }),
              (d.prototype.getTodo = function () {
                return this.$todo;
              }),
              d
            );
          })();
        e.todo = h;
        function u(d) {
          var v = new h(d);
          return v.init(), v;
        }
        e.default = u;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 });
        var a = t(2);
        t(146), t(148), t(152), t(154), t(156), t(158), t(160);
        var i = a.__importDefault(t(87));
        a.__exportStar(t(442), e);
        try {
        } catch (s) {
          throw new Error('请在浏览器环境下运行');
        }
        e.default = i.default;
      },
      function (r, e, t) {
        var n = t(143);
        r.exports = n;
      },
      function (r, e, t) {
        t(144);
        var n = t(9),
          o = n.Object,
          a = (r.exports = function (s, h, u) {
            return o.defineProperty(s, h, u);
          });
        o.defineProperty.sham && (a.sham = !0);
      },
      function (r, e, t) {
        var n = t(5),
          o = t(14),
          a = t(18);
        n({ target: 'Object', stat: !0, forced: !o, sham: !o }, { defineProperty: a.f });
      },
      function (r, e) {
        var t;
        t = (function () {
          return this;
        })();
        try {
          t = t || new Function('return this')();
        } catch (n) {
          typeof window == 'object' && (t = window);
        }
        r.exports = t;
      },
      function (r, e, t) {
        var n = t(20),
          o = t(147);
        (o = o.__esModule ? o.default : o), typeof o == 'string' && (o = [[r.i, o, '']]);
        var a = {};
        (a.insert = 'head'), (a.singleton = !1), n(o, a), (r.exports = o.locals || {});
      },
      function (r, e, t) {
        var n = t(21);
        (e = n(!1)),
          e.push([
            r.i,
            `.w-e-toolbar,
.w-e-text-container,
.w-e-menu-panel {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background-color: #fff;
  /*表情菜单样式*/
  /*分割线样式*/
}
.w-e-toolbar h1,
.w-e-text-container h1,
.w-e-menu-panel h1 {
  font-size: 32px !important;
}
.w-e-toolbar h2,
.w-e-text-container h2,
.w-e-menu-panel h2 {
  font-size: 24px !important;
}
.w-e-toolbar h3,
.w-e-text-container h3,
.w-e-menu-panel h3 {
  font-size: 18.72px !important;
}
.w-e-toolbar h4,
.w-e-text-container h4,
.w-e-menu-panel h4 {
  font-size: 16px !important;
}
.w-e-toolbar h5,
.w-e-text-container h5,
.w-e-menu-panel h5 {
  font-size: 13.28px !important;
}
.w-e-toolbar p,
.w-e-text-container p,
.w-e-menu-panel p {
  font-size: 16px !important;
}
.w-e-toolbar .eleImg,
.w-e-text-container .eleImg,
.w-e-menu-panel .eleImg {
  cursor: pointer;
  display: inline-block;
  font-size: 18px;
  padding: 0 3px;
}
.w-e-toolbar *,
.w-e-text-container *,
.w-e-menu-panel * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.w-e-toolbar hr,
.w-e-text-container hr,
.w-e-menu-panel hr {
  cursor: pointer;
  display: block;
  height: 0px;
  border: 0;
  border-top: 3px solid #ccc;
  margin: 20px 0;
}
.w-e-clear-fix:after {
  content: "";
  display: table;
  clear: both;
}
.w-e-drop-list-item {
  position: relative;
  top: 1px;
  padding-right: 7px;
  color: #333 !important;
}
.w-e-drop-list-tl {
  padding-left: 10px;
  text-align: left;
}
`,
            '',
          ]),
          (r.exports = e);
      },
      function (r, e, t) {
        var n = t(20),
          o = t(149);
        (o = o.__esModule ? o.default : o), typeof o == 'string' && (o = [[r.i, o, '']]);
        var a = {};
        (a.insert = 'head'), (a.singleton = !1), n(o, a), (r.exports = o.locals || {});
      },
      function (r, e, t) {
        var n = t(21),
          o = t(150),
          a = t(151);
        e = n(!1);
        var i = o(a);
        e.push([
          r.i,
          `@font-face {
  font-family: 'w-e-icon';
  src: url(` +
            i +
            `) format('truetype');
  font-weight: normal;
  font-style: normal;
}
[class^="w-e-icon-"],
[class*=" w-e-icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'w-e-icon' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.w-e-icon-close:before {
  content: "\\f00d";
}
.w-e-icon-upload2:before {
  content: "\\e9c6";
}
.w-e-icon-trash-o:before {
  content: "\\f014";
}
.w-e-icon-header:before {
  content: "\\f1dc";
}
.w-e-icon-pencil2:before {
  content: "\\e906";
}
.w-e-icon-paint-brush:before {
  content: "\\f1fc";
}
.w-e-icon-image:before {
  content: "\\e90d";
}
.w-e-icon-play:before {
  content: "\\e912";
}
.w-e-icon-location:before {
  content: "\\e947";
}
.w-e-icon-undo:before {
  content: "\\e965";
}
.w-e-icon-redo:before {
  content: "\\e966";
}
.w-e-icon-quotes-left:before {
  content: "\\e977";
}
.w-e-icon-list-numbered:before {
  content: "\\e9b9";
}
.w-e-icon-list2:before {
  content: "\\e9bb";
}
.w-e-icon-link:before {
  content: "\\e9cb";
}
.w-e-icon-happy:before {
  content: "\\e9df";
}
.w-e-icon-bold:before {
  content: "\\ea62";
}
.w-e-icon-underline:before {
  content: "\\ea63";
}
.w-e-icon-italic:before {
  content: "\\ea64";
}
.w-e-icon-strikethrough:before {
  content: "\\ea65";
}
.w-e-icon-table2:before {
  content: "\\ea71";
}
.w-e-icon-paragraph-left:before {
  content: "\\ea77";
}
.w-e-icon-paragraph-center:before {
  content: "\\ea78";
}
.w-e-icon-paragraph-right:before {
  content: "\\ea79";
}
.w-e-icon-paragraph-justify:before {
  content: "\\ea7a";
}
.w-e-icon-terminal:before {
  content: "\\f120";
}
.w-e-icon-page-break:before {
  content: "\\ea68";
}
.w-e-icon-cancel-circle:before {
  content: "\\ea0d";
}
.w-e-icon-font:before {
  content: "\\ea5c";
}
.w-e-icon-text-heigh:before {
  content: "\\ea5f";
}
.w-e-icon-paint-format:before {
  content: "\\e90c";
}
.w-e-icon-indent-increase:before {
  content: "\\ea7b";
}
.w-e-icon-indent-decrease:before {
  content: "\\ea7c";
}
.w-e-icon-row-height:before {
  content: "\\e9be";
}
.w-e-icon-fullscreen_exit:before {
  content: "\\e900";
}
.w-e-icon-fullscreen:before {
  content: "\\e901";
}
.w-e-icon-split-line:before {
  content: "\\ea0b";
}
.w-e-icon-checkbox-checked:before {
  content: "\\ea52";
}
`,
          '',
        ]),
          (r.exports = e);
      },
      function (r, e, t) {
        r.exports = function (n, o) {
          return (
            o || (o = {}),
            (n = n && n.__esModule ? n.default : n),
            typeof n != 'string'
              ? n
              : (/^['"].*['"]$/.test(n) && (n = n.slice(1, -1)),
                o.hash && (n += o.hash),
                /["'() \t\n]/.test(n) || o.needQuotes
                  ? '"'.concat(n.replace(/"/g, '\\"').replace(/\n/g, '\\n'), '"')
                  : n)
          );
        };
      },
      function (r, e, t) {
        t.r(e),
          (e.default =
            'data:font/woff;base64,d09GRgABAAAAABskAAsAAAAAGtgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIPFWNtYXAAAAFoAAABHAAAARz2mfAgZ2FzcAAAAoQAAAAIAAAACAAAABBnbHlmAAACjAAAFXwAABV8IH7+mGhlYWQAABgIAAAANgAAADYb6gumaGhlYQAAGEAAAAAkAAAAJAkjBWlobXR4AAAYZAAAAKQAAACkmYcEbmxvY2EAABkIAAAAVAAAAFReAmKYbWF4cAAAGVwAAAAgAAAAIAA0ALZuYW1lAAAZfAAAAYYAAAGGmUoJ+3Bvc3QAABsEAAAAIAAAACAAAwAAAAMD7wGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA8fwDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEAQAAAAA8ACAABAAcAAEAIOkB6QbpDekS6UfpZul36bnpu+m+6cbpy+nf6gvqDepS6lzqX+pl6nHqfPAN8BTxIPHc8fz//f//AAAAAAAg6QDpBukM6RLpR+ll6Xfpuem76b7pxunL6d/qC+oN6lLqXOpf6mLqcep38A3wFPEg8dzx/P/9//8AAf/jFwQXABb7FvcWwxamFpYWVRZUFlIWSxZHFjQWCRYIFcQVuxW5FbcVrBWnEBcQEQ8GDksOLAADAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAAEAEEAAQO/A38ABQALABEAFwAAATMVIREzAxEhFSMVATUzESE1ETUhESM1Av/A/sJ+fgE+wP4Cfv7CAT5+Ar9+AT78ggE+fsACvsD+wn7+An7+wsAAAAAABABBAAEDvwN/AAUACwARABcAAAEhESM1IxM1MxEhNQERIRUjFREVMxUhEQKBAT5+wMB+/sL9wAE+wMD+wgN//sLA/X7A/sJ+AcIBPn7A/v7AfgE+AAAAAAIAAP/ABAADwAAEABMAAAE3AScBAy4BJxM3ASMBAyUBNQEHAYCAAcBA/kCfFzsyY4ABgMD+gMACgAGA/oBOAUBAAcBA/kD+nTI7FwERTgGA/oD9gMABgMD+gIAAAgAA/8AEAAOAACkALQAAAREjNTQmIyEiBh0BFBYzITI2PQEzESEVIyIGFREUFjsBMjY1ETQmKwE1ASE1IQQAwCYa/UAaJiYaAsAaJoD9wCANExMNgA0TEw0gAUD9QALAAYABgEAaJiYawBomJhpA/wCAEw3+wA0TEw0BQA0TQAGAQAAABAAAAAAEAAOAABAAIQAtADQAAAE4ATEROAExITgBMRE4ATEhNSEiBhURFBYzITI2NRE0JiMHFAYjIiY1NDYzMhYTITUTATM3A8D8gAOA/IAaJiYaA4AaJiYagDgoKDg4KCg4QP0A4AEAQOADQP0AAwBAJhr9ABomJhoDABom4Cg4OCgoODj9uIABgP7AwAAAAgAAAEAEAANAADgAPAAAASYnLgEnJiMiBw4BBwYHBgcOAQcGFRQXHgEXFhcWFx4BFxYzMjc+ATc2NzY3PgE3NjU0Jy4BJyYnARENAQPVNjg5djw9Pz89PHY5ODYLBwgLAwMDAwsIBws2ODl2PD0/Pz08djk4NgsHCAsDAwMDCwgHC/2rAUD+wAMgCAYGCAICAgIIBgYIKSoqWS0uLy8uLVkqKikIBgYIAgICAggGBggpKipZLS4vLy4tWSoqKf3gAYDAwAAAAAACAMD/wANAA8AAGwAnAAABIgcOAQcGFRQXHgEXFjEwNz4BNzY1NCcuAScmAyImNTQ2MzIWFRQGAgBCOzpXGRkyMngyMjIyeDIyGRlXOjtCUHBwUFBwcAPAGRlXOjtCeH19zEFBQUHMfX14Qjs6VxkZ/gBwUFBwcFBQcAAAAQAAAAAEAAOAACsAAAEiBw4BBwYHJxEhJz4BMzIXHgEXFhUUBw4BBwYHFzY3PgE3NjU0Jy4BJyYjAgA1MjJcKSkjlgGAkDWLUFBFRmkeHgkJIhgYHlUoICAtDAwoKIteXWoDgAoLJxscI5b+gJA0PB4eaUZFUCsoKUkgIRpgIysrYjY2OWpdXosoKAABAAAAAAQAA4AAKgAAExQXHgEXFhc3JicuAScmNTQ3PgE3NjMyFhcHIREHJicuAScmIyIHDgEHBgAMDC0gIChVHhgYIgkJHh5pRkVQUIs1kAGAliMpKVwyMjVqXV6LKCgBgDk2NmIrKyNgGiEgSSkoK1BFRmkeHjw0kAGAliMcGycLCigoi15dAAAAAAIAAABABAEDAAAmAE0AABMyFx4BFxYVFAcOAQcGIyInLgEnJjUnNDc+ATc2MxUiBgcOAQc+ASEyFx4BFxYVFAcOAQcGIyInLgEnJjUnNDc+ATc2MxUiBgcOAQc+AeEuKSk9ERISET0pKS4uKSk9ERIBIyN6UlFdQHUtCRAHCBICSS4pKT0REhIRPSkpLi4pKT0REgEjI3pSUV1AdS0JEAcIEgIAEhE9KSkuLikpPRESEhE9KSkuIF1RUnojI4AwLggTCgIBEhE9KSkuLikpPRESEhE9KSkuIF1RUnojI4AwLggTCgIBAAAGAED/wAQAA8AAAwAHAAsAEQAdACkAACUhFSERIRUhESEVIScRIzUjNRMVMxUjNTc1IzUzFRURIzUzNSM1MzUjNQGAAoD9gAKA/YACgP2AwEBAQIDAgIDAwICAgICAgAIAgAIAgMD/AMBA/fIyQJI8MkCS7v7AQEBAQEAABgAA/8AEAAPAAAMABwALABcAIwAvAAABIRUhESEVIREhFSEBNDYzMhYVFAYjIiYRNDYzMhYVFAYjIiYRNDYzMhYVFAYjIiYBgAKA/YACgP2AAoD9gP6ASzU1S0s1NUtLNTVLSzU1S0s1NUtLNTVLA4CA/wCA/wCAA0A1S0s1NUtL/rU1S0s1NUtL/rU1S0s1NUtLAAUAAABABWADAAADAAcACwAOABEAABMhFSEVIRUhFSEVIQEXNzUnBwADgPyAA4D8gAOA/IAD4MDAwMADAMBAwEDAAUDAwEDAwAAAAAADAAAAAAQAA6AAAwANABQAADchFSElFSE1EyEVITUhJQkBIxEjEQAEAPwABAD8AIABAAEAAQD9YAEgASDggEBAwEBAAQCAgMABIP7g/wABAAAAAAACAB7/zAPiA7QAMwBkAAABIiYnJicmNDc2PwE+ATMyFhcWFxYUBwYPAQYiJyY0PwE2NCcuASMiBg8BBhQXFhQHDgEjAyImJyYnJjQ3Nj8BNjIXFhQPAQYUFx4BMzI2PwE2NCcmNDc2MhcWFxYUBwYPAQ4BIwG4ChMIIxISEhIjwCNZMTFZIyMSEhISI1gPLA8PD1gpKRQzHBwzFMApKQ8PCBMKuDFZIyMSEhISI1gPLA8PD1gpKRQzHBwzFMApKQ8PDysQIxISEhIjwCNZMQFECAckLS1eLS0kwCIlJSIkLS1eLS0kVxAQDysPWCl0KRQVFRTAKXQpDysQBwj+iCUiJC0tXi0tJFcQEA8rD1gpdCkUFRUUwCl0KQ8rEA8PJC0tXi0tJMAiJQAAAAAFAAD/wAQAA8AAGwA3AFMAXwBrAAAFMjc+ATc2NTQnLgEnJiMiBw4BBwYVFBceARcWEzIXHgEXFhUUBw4BBwYjIicuAScmNTQ3PgE3NhMyNz4BNzY3BgcOAQcGIyInLgEnJicWFx4BFxYnNDYzMhYVFAYjIiYlNDYzMhYVFAYjIiYCAGpdXosoKCgoi15dampdXosoKCgoi15dalZMTHEgISEgcUxMVlZMTHEgISEgcUxMVisrKlEmJiMFHBtWODc/Pzc4VhscBSMmJlEqK9UlGxslJRsbJQGAJRsbJSUbGyVAKCiLXl1qal1eiygoKCiLXl1qal1eiygoA6AhIHFMTFZWTExxICEhIHFMTFZWTExxICH+CQYGFRAQFEM6OlYYGRkYVjo6QxQQEBUGBvcoODgoKDg4KCg4OCgoODgAAAEAAAFABAACQAAPAAATFRQWMyEyNj0BNCYjISIGABMNA8ANExMN/EANEwIgwA0TEw3ADRMTAAAAAwAA/8AEAAPAABsANwBDAAABIgcOAQcGFRQXHgEXFjMyNz4BNzY1NCcuAScmAyInLgEnJjU0Nz4BNzYzMhceARcWFRQHDgEHBhMHJwcXBxc3FzcnNwIAal1eiygoKCiLXl1qal1eiygoKCiLXl1qVkxMcSAhISBxTExWVkxMcSAhISBxTExKoKBgoKBgoKBgoKADwCgoi15dampdXosoKCgoi15dampdXosoKPxgISBxTExWVkxMcSAhISBxTExWVkxMcSAhAqCgoGCgoGCgoGCgoAACAAD/wAQAA8AADwAVAAABISIGFREUFjMhMjY1ETQmASc3FwEXA4D9ADVLSzUDADVLS/4L7VqTATNaA8BLNf0ANUtLNQMANUv85e5akgEyWgAAAAABAGX/wAObA8AAKQAAASImIyIHDgEHBhUUFjMuATU0NjcwBwYCBwYHFSETMzcjNx4BMzI2Nw4BAyBEaEZxU1RtGhtJSAYNZUoQEEs8PFkBPWzGLNc0LVUmLlAYHT0DsBAeHWE+P0FNOwsmN5lvA31+/sWPkCMZAgCA9gkPN2sJBwAAAAACAAAAAAQAA4AACQAXAAAlMwcnMxEjNxcjJREnIxEzFSE1MxEjBxEDgICgoICAoKCA/wBAwID+gIDAQMDAwAIAwMDA/wCA/UBAQALAgAEAAAMAwAAAA0ADgAAWAB8AKAAAAT4BNTQnLgEnJiMhESEyNz4BNzY1NCYBMzIWFRQGKwETIxEzMhYVFAYCxBwgFBRGLi81/sABgDUvLkYUFET+hGUqPDwpZp+fnyw+PgHbIlQvNS8uRhQU/IAUFEYuLzVGdAFGSzU1S/6AAQBLNTVLAAAAAAIAwAAAA0ADgAAfACMAAAEzERQHDgEHBiMiJy4BJyY1ETMRFBYXHgEzMjY3PgE1ASEVIQLAgBkZVzo7QkI7OlcZGYAbGBxJKChJHBgb/gACgP2AA4D+YDw0NU4WFxcWTjU0PAGg/mAeOBcYGxsYFzge/qCAAAAAAAEAgAAAA4ADgAALAAABFSMBMxUhNTMBIzUDgID+wID+QIABQIADgED9AEBAAwBAAAEAAAAABAADgAA9AAABFSMeARUUBgcOASMiJicuATUzFBYzMjY1NCYjITUhLgEnLgE1NDY3PgEzMhYXHgEVIzQmIyIGFRQWMzIWFwQA6xUWNTAscT4+cSwwNYByTk5yck7+AAEsAgQBMDU1MCxxPj5xLDA1gHJOTnJyTjtuKwHAQB1BIjViJCEkJCEkYjU0TEw0NExAAQMBJGI1NWIkISQkISRiNTRMTDQ0TCEfAAAACgAAAAAEAAOAAAMABwALAA8AEwAXABsAHwAjACcAABMRIREBNSEVHQEhNQEVITUjFSE1ESEVISUhFSERNSEVASEVISE1IRUABAD9gAEA/wABAP8AQP8AAQD/AAKAAQD/AAEA/IABAP8AAoABAAOA/IADgP3AwMBAwMACAMDAwMD/AMDAwAEAwMD+wMDAwAAABQAAAAAEAAOAAAMABwALAA8AEwAAEyEVIRUhFSERIRUhESEVIREhFSEABAD8AAKA/YACgP2ABAD8AAQA/AADgIBAgP8AgAFAgP8AgAAAAAAFAAAAAAQAA4AAAwAHAAsADwATAAATIRUhFyEVIREhFSEDIRUhESEVIQAEAPwAwAKA/YACgP2AwAQA/AAEAPwAA4CAQID/AIABQID/AIAAAAUAAAAABAADgAADAAcACwAPABMAABMhFSEFIRUhESEVIQEhFSERIRUhAAQA/AABgAKA/YACgP2A/oAEAPwABAD8AAOAgECA/wCAAUCA/wCAAAAAAAUAAAAABAADgAADAAcACwAPABMAABMhFSEVIRUhFSEVIRUhFSEVIRUhAAQA/AAEAPwABAD8AAQA/AAEAPwAA4CAQIBAgECAQIAAAAAGAAAAAAQAA4AAAwAHAAsADwATABYAABMhFSEFIRUhFSEVIRUhFSEFIRUhGQEFAAQA/AABgAKA/YACgP2AAoD9gP6ABAD8AAEAA4CAQIBAgECAQIABAAGAwAAAAAYAAAAABAADgAADAAcACwAPABMAFgAAEyEVIQUhFSEVIRUhFSEVIQUhFSEBESUABAD8AAGAAoD9gAKA/YACgP2A/oAEAPwAAQD/AAOAgECAQIBAgECAAoD+gMAAAQA/AD8C5gLmACwAACUUDwEGIyIvAQcGIyIvASY1ND8BJyY1ND8BNjMyHwE3NjMyHwEWFRQPARcWFQLmEE4QFxcQqKgQFxYQThAQqKgQEE4QFhcQqKgQFxcQThAQqKgQwxYQThAQqKgQEE4QFhcQqKgQFxcQThAQqKgQEE4QFxcQqKgQFwAAAAYAAAAAAyUDbgAUACgAPABNAFUAggAAAREUBwYrASInJjURNDc2OwEyFxYVMxEUBwYrASInJjURNDc2OwEyFxYXERQHBisBIicmNRE0NzY7ATIXFhMRIREUFxYXFjMhMjc2NzY1ASEnJicjBgcFFRQHBisBERQHBiMhIicmNREjIicmPQE0NzY7ATc2NzY7ATIXFh8BMzIXFhUBJQYFCCQIBQYGBQgkCAUGkgUFCCUIBQUFBQglCAUFkgUFCCUIBQUFBQglCAUFSf4ABAQFBAIB2wIEBAQE/oABABsEBrUGBAH3BgUINxobJv4lJhsbNwgFBQUFCLEoCBcWF7cXFhYJKLAIBQYCEv63CAUFBQUIAUkIBQYGBQj+twgFBQUFCAFJCAUGBgUI/rcIBQUFBQgBSQgFBgYF/lsCHf3jDQsKBQUFBQoLDQJmQwUCAgVVJAgGBf3jMCIjISIvAiAFBggkCAUFYBUPDw8PFWAFBQgAAgAHAEkDtwKvABoALgAACQEGIyIvASY1ND8BJyY1ND8BNjMyFwEWFRQHARUUBwYjISInJj0BNDc2MyEyFxYBTv72BgcIBR0GBuHhBgYdBQgHBgEKBgYCaQUFCP3bCAUFBQUIAiUIBQUBhf72BgYcBggHBuDhBgcHBh0FBf71BQgHBv77JQgFBQUFCCUIBQUFBQAAAAEAIwAAA90DbgCzAAAlIicmIyIHBiMiJyY1NDc2NzY3Njc2PQE0JyYjISIHBh0BFBcWFxYzFhcWFRQHBiMiJyYjIgcGIyInJjU0NzY3Njc2NzY9ARE0NTQ1NCc0JyYnJicmJyYnJiMiJyY1NDc2MzIXFjMyNzYzMhcWFRQHBiMGBwYHBh0BFBcWMyEyNzY9ATQnJicmJyY1NDc2MzIXFjMyNzYzMhcWFRQHBgciBwYHBhURFBcWFxYXMhcWFRQHBiMDwRkzMhoZMjMZDQgHCQoNDBEQChIBBxX+fhYHARUJEhMODgwLBwcOGzU1GhgxMRgNBwcJCQsMEA8JEgECAQIDBAQFCBIRDQ0KCwcHDho1NRoYMDEYDgcHCQoMDRAQCBQBBw8BkA4HARQKFxcPDgcHDhkzMhkZMTEZDgcHCgoNDRARCBQUCRERDg0KCwcHDgACAgICDAsPEQkJAQEDAwUMROAMBQMDBQzUUQ0GAQIBCAgSDwwNAgICAgwMDhEICQECAwMFDUUhAdACDQ0ICA4OCgoLCwcHAwYBAQgIEg8MDQICAgINDA8RCAgBAgEGDFC2DAcBAQcMtlAMBgEBBgcWDwwNAgICAg0MDxEICAEBAgYNT/3mRAwGAgIBCQgRDwwNAAACAAD/twP/A7cAEwA5AAABMhcWFRQHAgcGIyInJjU0NwE2MwEWFxYfARYHBiMiJyYnJicmNRYXFhcWFxYzMjc2NzY3Njc2NzY3A5soHh4avkw3RUg0NDUBbSEp/fgXJicvAQJMTHtHNjYhIRARBBMUEBASEQkXCA8SExUVHR0eHikDtxsaKCQz/plGNDU0SUkwAUsf/bErHx8NKHpNTBobLi86OkQDDw4LCwoKFiUbGhERCgsEBAIAAQAAAAAAAIWwaoFfDzz1AAsEAAAAAADbteOZAAAAANu145kAAP+3BWADwAAAAAgAAgAAAAAAAAABAAADwP/AAAAFgAAA//8FYAABAAAAAAAAAAAAAAAAAAAAKQQAAAAAAAAAAAAAAAIAAAAEAABBBAAAQQQAAAAEAAAABAAAAAQAAAAEAADABAAAAAQAAAAEAAAABAAAQAQAAAAFgAAABAAAAAQAAB4EAAAABAAAAAQAAAAEAAAABAAAZQQAAAAEAADABAAAwAQAAIAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAMlAD8DJQAAA74ABwQAACMD/wAAAAAAAAAKABQAHgBKAHYApADmAS4BkgHQAhYCXALQAw4DWAN+A6gEPgTeBPoFZAWOBdAF+AY6BnYGjgbmBy4HVgd+B6gHzgf8CCoIbgkmCXAKYgq+AAEAAAApALQACgAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAHAAAAAQAAAAAAAgAHAGAAAQAAAAAAAwAHADYAAQAAAAAABAAHAHUAAQAAAAAABQALABUAAQAAAAAABgAHAEsAAQAAAAAACgAaAIoAAwABBAkAAQAOAAcAAwABBAkAAgAOAGcAAwABBAkAAwAOAD0AAwABBAkABAAOAHwAAwABBAkABQAWACAAAwABBAkABgAOAFIAAwABBAkACgA0AKRpY29tb29uAGkAYwBvAG0AbwBvAG5WZXJzaW9uIDEuMABWAGUAcgBzAGkAbwBuACAAMQAuADBpY29tb29uAGkAYwBvAG0AbwBvAG5pY29tb29uAGkAYwBvAG0AbwBvAG5SZWd1bGFyAFIAZQBnAHUAbABhAHJpY29tb29uAGkAYwBvAG0AbwBvAG5Gb250IGdlbmVyYXRlZCBieSBJY29Nb29uLgBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC4AAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
      },
      function (r, e, t) {
        var n = t(20),
          o = t(153);
        (o = o.__esModule ? o.default : o), typeof o == 'string' && (o = [[r.i, o, '']]);
        var a = {};
        (a.insert = 'head'), (a.singleton = !1), n(o, a), (r.exports = o.locals || {});
      },
      function (r, e, t) {
        var n = t(21);
        (e = n(!1)),
          e.push([
            r.i,
            `.w-e-toolbar {
  display: flex;
  padding: 0 6px;
  flex-wrap: wrap;
  position: relative;
  /* 单个菜单 */
}
.w-e-toolbar .w-e-menu {
  position: relative;
  display: flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
}
.w-e-toolbar .w-e-menu i {
  color: #999;
}
.w-e-toolbar .w-e-menu:hover {
  background-color: #F6F6F6;
}
.w-e-toolbar .w-e-menu:hover i {
  color: #333;
}
.w-e-toolbar .w-e-active i {
  color: #1e88e5;
}
.w-e-toolbar .w-e-active:hover i {
  color: #1e88e5;
}
.w-e-menu-tooltip {
  position: absolute;
  display: flex;
  color: #f1f1f1;
  background-color: rgba(0, 0, 0, 0.75);
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  padding: 4px 5px 6px;
  justify-content: center;
  align-items: center;
}
.w-e-menu-tooltip-up::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border: 5px solid rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0.73);
}
.w-e-menu-tooltip-down::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border: 5px solid rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0.73);
}
.w-e-menu-tooltip-item-wrapper {
  font-size: 14px;
  margin: 0 5px;
}
`,
            '',
          ]),
          (r.exports = e);
      },
      function (r, e, t) {
        var n = t(20),
          o = t(155);
        (o = o.__esModule ? o.default : o), typeof o == 'string' && (o = [[r.i, o, '']]);
        var a = {};
        (a.insert = 'head'), (a.singleton = !1), n(o, a), (r.exports = o.locals || {});
      },
      function (r, e, t) {
        var n = t(21);
        (e = n(!1)),
          e.push([
            r.i,
            `.w-e-text-container {
  position: relative;
  height: 100%;
}
.w-e-text-container .w-e-progress {
  position: absolute;
  background-color: #1e88e5;
  top: 0;
  left: 0;
  height: 1px;
}
.w-e-text-container .placeholder {
  color: #D4D4D4;
  position: absolute;
  font-size: 11pt;
  line-height: 22px;
  left: 10px;
  top: 10px;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  z-index: -1;
}
.w-e-text {
  padding: 0 10px;
  overflow-y: auto;
}
.w-e-text p,
.w-e-text h1,
.w-e-text h2,
.w-e-text h3,
.w-e-text h4,
.w-e-text h5,
.w-e-text table,
.w-e-text pre {
  margin: 10px 0;
  line-height: 1.5;
}
.w-e-text ul,
.w-e-text ol {
  margin: 10px 0 10px 20px;
}
.w-e-text blockquote {
  display: block;
  border-left: 8px solid #d0e5f2;
  padding: 5px 10px;
  margin: 10px 0;
  line-height: 1.4;
  font-size: 100%;
  background-color: #f1f1f1;
}
.w-e-text code {
  display: inline-block;
  background-color: #f1f1f1;
  border-radius: 3px;
  padding: 3px 5px;
  margin: 0 3px;
}
.w-e-text pre code {
  display: block;
}
.w-e-text table {
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
}
.w-e-text table td,
.w-e-text table th {
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
  padding: 3px 5px;
  min-height: 30px;
  height: 30px;
}
.w-e-text table th {
  border-bottom: 2px solid #ccc;
  text-align: center;
  background-color: #f1f1f1;
}
.w-e-text:focus {
  outline: none;
}
.w-e-text img {
  cursor: pointer;
}
.w-e-text img:hover {
  box-shadow: 0 0 5px #333;
}
.w-e-text .w-e-todo {
  margin: 0 0 0 20px;
}
.w-e-text .w-e-todo li {
  list-style: none;
  font-size: 1em;
}
.w-e-text .w-e-todo li span:nth-child(1) {
  position: relative;
  left: -18px;
}
.w-e-text .w-e-todo li span:nth-child(1) input {
  position: absolute;
  margin-right: 3px;
}
.w-e-text .w-e-todo li span:nth-child(1) input[type=checkbox] {
  top: 50%;
  margin-top: -6px;
}
.w-e-tooltip {
  position: absolute;
  display: flex;
  color: #f1f1f1;
  background-color: rgba(0, 0, 0, 0.75);
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  padding: 4px 5px 6px;
  justify-content: center;
  align-items: center;
}
.w-e-tooltip-up::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border: 5px solid rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0.73);
}
.w-e-tooltip-down::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border: 5px solid rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0.73);
}
.w-e-tooltip-item-wrapper {
  cursor: pointer;
  font-size: 14px;
  margin: 0 5px;
}
.w-e-tooltip-item-wrapper:hover {
  color: #ccc;
  text-decoration: underline;
}
`,
            '',
          ]),
          (r.exports = e);
      },
      function (r, e, t) {
        var n = t(20),
          o = t(157);
        (o = o.__esModule ? o.default : o), typeof o == 'string' && (o = [[r.i, o, '']]);
        var a = {};
        (a.insert = 'head'), (a.singleton = !1), n(o, a), (r.exports = o.locals || {});
      },
      function (r, e, t) {
        var n = t(21);
        (e = n(!1)),
          e.push([
            r.i,
            `.w-e-menu .w-e-panel-container {
  position: absolute;
  top: 0;
  left: 50%;
  border: 1px solid #ccc;
  border-top: 0;
  box-shadow: 1px 1px 2px #ccc;
  color: #333;
  background-color: #fff;
  text-align: left;
  /* 为 emotion panel 定制的样式 */
  /* 上传图片、上传视频的 panel 定制样式 */
}
.w-e-menu .w-e-panel-container .w-e-panel-close {
  position: absolute;
  right: 0;
  top: 0;
  padding: 5px;
  margin: 2px 5px 0 0;
  cursor: pointer;
  color: #999;
}
.w-e-menu .w-e-panel-container .w-e-panel-close:hover {
  color: #333;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-title {
  list-style: none;
  display: flex;
  font-size: 14px;
  margin: 2px 10px 0 10px;
  border-bottom: 1px solid #f1f1f1;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-title .w-e-item {
  padding: 3px 5px;
  color: #999;
  cursor: pointer;
  margin: 0 3px;
  position: relative;
  top: 1px;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-title .w-e-active {
  color: #333;
  border-bottom: 1px solid #333;
  cursor: default;
  font-weight: 700;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content {
  padding: 10px 15px 10px 15px;
  font-size: 16px;
  /* 输入框的样式 */
  /* 按钮的样式 */
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content input:focus,
.w-e-menu .w-e-panel-container .w-e-panel-tab-content textarea:focus,
.w-e-menu .w-e-panel-container .w-e-panel-tab-content button:focus {
  outline: none;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content textarea {
  width: 100%;
  border: 1px solid #ccc;
  padding: 5px;
  margin-top: 10px;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content textarea:focus {
  border-color: #1e88e5;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text] {
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 14px;
  height: 20px;
  color: #333;
  text-align: left;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text].small {
  width: 30px;
  text-align: center;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text].block {
  display: block;
  width: 100%;
  margin: 10px 0;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text]:focus {
  border-bottom: 2px solid #1e88e5;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button {
  font-size: 14px;
  color: #1e88e5;
  border: none;
  padding: 5px 10px;
  background-color: #fff;
  cursor: pointer;
  border-radius: 3px;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.left {
  float: left;
  margin-right: 10px;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.right {
  float: right;
  margin-left: 10px;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.gray {
  color: #999;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.red {
  color: #c24f4a;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button:hover {
  background-color: #f1f1f1;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container:after {
  content: "";
  display: table;
  clear: both;
}
.w-e-menu .w-e-panel-container .w-e-emoticon-container .w-e-item {
  cursor: pointer;
  font-size: 18px;
  padding: 0 3px;
  display: inline-block;
}
.w-e-menu .w-e-panel-container .w-e-up-img-container,
.w-e-menu .w-e-panel-container .w-e-up-video-container {
  text-align: center;
}
.w-e-menu .w-e-panel-container .w-e-up-img-container .w-e-up-btn,
.w-e-menu .w-e-panel-container .w-e-up-video-container .w-e-up-btn {
  display: inline-block;
  color: #999;
  cursor: pointer;
  font-size: 60px;
  line-height: 1;
}
.w-e-menu .w-e-panel-container .w-e-up-img-container .w-e-up-btn:hover,
.w-e-menu .w-e-panel-container .w-e-up-video-container .w-e-up-btn:hover {
  color: #333;
}
`,
            '',
          ]),
          (r.exports = e);
      },
      function (r, e, t) {
        var n = t(20),
          o = t(159);
        (o = o.__esModule ? o.default : o), typeof o == 'string' && (o = [[r.i, o, '']]);
        var a = {};
        (a.insert = 'head'), (a.singleton = !1), n(o, a), (r.exports = o.locals || {});
      },
      function (r, e, t) {
        var n = t(21);
        (e = n(!1)),
          e.push([
            r.i,
            `.w-e-toolbar .w-e-droplist {
  position: absolute;
  left: 0;
  top: 0;
  background-color: #fff;
  border: 1px solid #f1f1f1;
  border-right-color: #ccc;
  border-bottom-color: #ccc;
}
.w-e-toolbar .w-e-droplist .w-e-dp-title {
  text-align: center;
  color: #999;
  line-height: 2;
  border-bottom: 1px solid #f1f1f1;
  font-size: 13px;
}
.w-e-toolbar .w-e-droplist ul.w-e-list {
  list-style: none;
  line-height: 1;
}
.w-e-toolbar .w-e-droplist ul.w-e-list li.w-e-item {
  color: #333;
  padding: 5px 0;
}
.w-e-toolbar .w-e-droplist ul.w-e-list li.w-e-item:hover {
  background-color: #f1f1f1;
}
.w-e-toolbar .w-e-droplist ul.w-e-block {
  list-style: none;
  text-align: left;
  padding: 5px;
}
.w-e-toolbar .w-e-droplist ul.w-e-block li.w-e-item {
  display: inline-block;
  padding: 3px 5px;
}
.w-e-toolbar .w-e-droplist ul.w-e-block li.w-e-item:hover {
  background-color: #f1f1f1;
}
`,
            '',
          ]),
          (r.exports = e);
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(161));
        Element.prototype.matches ||
          (Element.prototype.matches = function (a) {
            var i = this.ownerDocument.querySelectorAll(a),
              s = i.length;
            for (s; s >= 0 && i.item(s) !== this; s--);
            return s > -1;
          }),
          o.default || (window.Promise = o.default);
      },
      function (r, e, t) {
        r.exports = t(162);
      },
      function (r, e, t) {
        var n = t(163);
        r.exports = n;
      },
      function (r, e, t) {
        t(61), t(50), t(54), t(175), t(178), t(179);
        var n = t(9);
        r.exports = n.Promise;
      },
      function (r, e, t) {
        var n = t(62),
          o = t(49),
          a = function (i) {
            return function (s, h) {
              var u = String(o(s)),
                d = n(h),
                v = u.length,
                l,
                c;
              return d < 0 || d >= v
                ? i
                  ? ''
                  : void 0
                : ((l = u.charCodeAt(d)),
                  l < 55296 ||
                  l > 56319 ||
                  d + 1 === v ||
                  (c = u.charCodeAt(d + 1)) < 56320 ||
                  c > 57343
                    ? i
                      ? u.charAt(d)
                      : l
                    : i
                    ? u.slice(d, d + 2)
                    : ((l - 55296) << 10) + (c - 56320) + 65536);
            };
          };
        r.exports = { codeAt: a(!1), charAt: a(!0) };
      },
      function (r, e, t) {
        var n = t(8),
          o = t(102),
          a = n.WeakMap;
        r.exports = typeof a == 'function' && /native code/.test(o(a));
      },
      function (r, e, t) {
        var n = t(8),
          o = t(19);
        r.exports = function (a, i) {
          try {
            o(n, a, i);
          } catch (s) {
            n[a] = i;
          }
          return i;
        };
      },
      function (r, e, t) {
        var n = t(104).IteratorPrototype,
          o = t(77),
          a = t(48),
          i = t(37),
          s = t(44),
          h = function () {
            return this;
          };
        r.exports = function (u, d, v) {
          var l = d + ' Iterator';
          return (u.prototype = o(n, { next: a(1, v) })), i(u, l, !1, !0), (s[l] = h), u;
        };
      },
      function (r, e, t) {
        var n = t(11);
        r.exports = !n(function () {
          function o() {}
          return (o.prototype.constructor = null), Object.getPrototypeOf(new o()) !== o.prototype;
        });
      },
      function (r, e, t) {
        var n = t(14),
          o = t(18),
          a = t(25),
          i = t(52);
        r.exports = n
          ? Object.defineProperties
          : function (h, u) {
              a(h);
              for (var d = i(u), v = d.length, l = 0, c; v > l; ) o.f(h, (c = d[l++]), u[c]);
              return h;
            };
      },
      function (r, e, t) {
        var n = t(81),
          o = t(65);
        r.exports = n
          ? {}.toString
          : function () {
              return '[object ' + o(this) + ']';
            };
      },
      function (r, e, t) {
        var n = t(25),
          o = t(172);
        r.exports =
          Object.setPrototypeOf ||
          ('__proto__' in {}
            ? (function () {
                var a = !1,
                  i = {},
                  s;
                try {
                  (s = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set),
                    s.call(i, []),
                    (a = i instanceof Array);
                } catch (h) {}
                return function (u, d) {
                  return n(u), o(d), a ? s.call(u, d) : (u.__proto__ = d), u;
                };
              })()
            : void 0);
      },
      function (r, e, t) {
        var n = t(13);
        r.exports = function (o) {
          if (!n(o) && o !== null) throw TypeError("Can't set " + String(o) + ' as a prototype');
          return o;
        };
      },
      function (r, e, t) {
        var n = t(30),
          o = t(82),
          a = t(44),
          i = t(42),
          s = t(75),
          h = 'Array Iterator',
          u = i.set,
          d = i.getterFor(h);
        (r.exports = s(
          Array,
          'Array',
          function (v, l) {
            u(this, { type: h, target: n(v), index: 0, kind: l });
          },
          function () {
            var v = d(this),
              l = v.target,
              c = v.kind,
              f = v.index++;
            return !l || f >= l.length
              ? ((v.target = void 0), { value: void 0, done: !0 })
              : c == 'keys'
              ? { value: f, done: !1 }
              : c == 'values'
              ? { value: l[f], done: !1 }
              : { value: [f, l[f]], done: !1 };
          },
          'values',
        )),
          (a.Arguments = a.Array),
          o('keys'),
          o('values'),
          o('entries');
      },
      function (r, e) {
        r.exports = {
          CSSRuleList: 0,
          CSSStyleDeclaration: 0,
          CSSValueList: 0,
          ClientRectList: 0,
          DOMRectList: 0,
          DOMStringList: 0,
          DOMTokenList: 1,
          DataTransferItemList: 0,
          FileList: 0,
          HTMLAllCollection: 0,
          HTMLCollection: 0,
          HTMLFormElement: 0,
          HTMLSelectElement: 0,
          MediaList: 0,
          MimeTypeArray: 0,
          NamedNodeMap: 0,
          NodeList: 1,
          PaintRequestList: 0,
          Plugin: 0,
          PluginArray: 0,
          SVGLengthList: 0,
          SVGNumberList: 0,
          SVGPathSegList: 0,
          SVGPointList: 0,
          SVGStringList: 0,
          SVGTransformList: 0,
          SourceBufferList: 0,
          StyleSheetList: 0,
          TextTrackCueList: 0,
          TextTrackList: 0,
          TouchList: 0,
        };
      },
      function (r, e, t) {
        var n = t(5),
          o = t(43),
          a = t(8),
          i = t(36),
          s = t(109),
          h = t(53),
          u = t(110),
          d = t(37),
          v = t(111),
          l = t(13),
          c = t(41),
          f = t(83),
          g = t(34),
          p = t(102),
          m = t(66),
          A = t(115),
          y = t(116),
          E = t(117).set,
          S = t(176),
          R = t(119),
          P = t(177),
          D = t(85),
          x = t(120),
          T = t(42),
          I = t(101),
          N = t(10),
          M = t(86),
          L = N('species'),
          O = 'Promise',
          B = T.get,
          w = T.set,
          H = T.getterFor(O),
          b = s,
          U = a.TypeError,
          K = a.document,
          j = a.process,
          W = i('fetch'),
          G = D.f,
          $ = G,
          V = g(j) == 'process',
          J = !!(K && K.createEvent && a.dispatchEvent),
          k = 'unhandledrejection',
          rt = 'rejectionhandled',
          ot = 0,
          dt = 1,
          Bt = 2,
          st = 1,
          Mt = 2,
          Et,
          ut,
          ht,
          St,
          gt = I(O, function () {
            var X = p(b) !== String(b);
            if (
              (!X && (M === 66 || (!V && typeof PromiseRejectionEvent != 'function'))) ||
              (o && !b.prototype.finally)
            )
              return !0;
            if (M >= 51 && /native code/.test(b)) return !1;
            var Q = b.resolve(1),
              q = function (z) {
                z(
                  function () {},
                  function () {},
                );
              },
              et = (Q.constructor = {});
            return (et[L] = q), !(Q.then(function () {}) instanceof q);
          }),
          Yt =
            gt ||
            !A(function (X) {
              b.all(X).catch(function () {});
            }),
          Ct = function (X) {
            var Q;
            return l(X) && typeof (Q = X.then) == 'function' ? Q : !1;
          },
          yt = function (X, Q, q) {
            if (!Q.notified) {
              Q.notified = !0;
              var et = Q.reactions;
              S(function () {
                for (var z = Q.value, Y = Q.state == dt, Z = 0; et.length > Z; ) {
                  var _ = et[Z++],
                    nt = Y ? _.ok : _.fail,
                    at = _.resolve,
                    ft = _.reject,
                    vt = _.domain,
                    lt,
                    Lt,
                    Ht;
                  try {
                    nt
                      ? (Y || (Q.rejection === Mt && Rt(X, Q), (Q.rejection = st)),
                        nt === !0
                          ? (lt = z)
                          : (vt && vt.enter(), (lt = nt(z)), vt && (vt.exit(), (Ht = !0))),
                        lt === _.promise
                          ? ft(U('Promise-chain cycle'))
                          : (Lt = Ct(lt))
                          ? Lt.call(lt, at, ft)
                          : at(lt))
                      : ft(z);
                  } catch (ue) {
                    vt && !Ht && vt.exit(), ft(ue);
                  }
                }
                (Q.reactions = []), (Q.notified = !1), q && !Q.rejection && Nt(X, Q);
              });
            }
          },
          Dt = function (X, Q, q) {
            var et, z;
            J
              ? ((et = K.createEvent('Event')),
                (et.promise = Q),
                (et.reason = q),
                et.initEvent(X, !1, !0),
                a.dispatchEvent(et))
              : (et = { promise: Q, reason: q }),
              (z = a['on' + X]) ? z(et) : X === k && P('Unhandled promise rejection', q);
          },
          Nt = function (X, Q) {
            E.call(a, function () {
              var q = Q.value,
                et = Tt(Q),
                z;
              if (
                et &&
                ((z = x(function () {
                  V ? j.emit('unhandledRejection', q, X) : Dt(k, X, q);
                })),
                (Q.rejection = V || Tt(Q) ? Mt : st),
                z.error)
              )
                throw z.value;
            });
          },
          Tt = function (X) {
            return X.rejection !== st && !X.parent;
          },
          Rt = function (X, Q) {
            E.call(a, function () {
              V ? j.emit('rejectionHandled', X) : Dt(rt, X, Q.value);
            });
          },
          mt = function (X, Q, q, et) {
            return function (z) {
              X(Q, q, z, et);
            };
          },
          At = function (X, Q, q, et) {
            Q.done || ((Q.done = !0), et && (Q = et), (Q.value = q), (Q.state = Bt), yt(X, Q, !0));
          },
          xt = function (X, Q, q, et) {
            if (!Q.done) {
              (Q.done = !0), et && (Q = et);
              try {
                if (X === q) throw U("Promise can't be resolved itself");
                var z = Ct(q);
                z
                  ? S(function () {
                      var Y = { done: !1 };
                      try {
                        z.call(q, mt(xt, X, Y, Q), mt(At, X, Y, Q));
                      } catch (Z) {
                        At(X, Y, Z, Q);
                      }
                    })
                  : ((Q.value = q), (Q.state = dt), yt(X, Q, !1));
              } catch (Y) {
                At(X, { done: !1 }, Y, Q);
              }
            }
          };
        gt &&
          ((b = function (Q) {
            f(this, b, O), c(Q), Et.call(this);
            var q = B(this);
            try {
              Q(mt(xt, this, q), mt(At, this, q));
            } catch (et) {
              At(this, q, et);
            }
          }),
          (Et = function (Q) {
            w(this, {
              type: O,
              done: !1,
              notified: !1,
              parent: !1,
              reactions: [],
              rejection: !1,
              state: ot,
              value: void 0,
            });
          }),
          (Et.prototype = u(b.prototype, {
            then: function (Q, q) {
              var et = H(this),
                z = G(y(this, b));
              return (
                (z.ok = typeof Q == 'function' ? Q : !0),
                (z.fail = typeof q == 'function' && q),
                (z.domain = V ? j.domain : void 0),
                (et.parent = !0),
                et.reactions.push(z),
                et.state != ot && yt(this, et, !1),
                z.promise
              );
            },
            catch: function (X) {
              return this.then(void 0, X);
            },
          })),
          (ut = function () {
            var X = new Et(),
              Q = B(X);
            (this.promise = X), (this.resolve = mt(xt, X, Q)), (this.reject = mt(At, X, Q));
          }),
          (D.f = G =
            function (X) {
              return X === b || X === ht ? new ut(X) : $(X);
            }),
          !o &&
            typeof s == 'function' &&
            ((St = s.prototype.then),
            h(
              s.prototype,
              'then',
              function (Q, q) {
                var et = this;
                return new b(function (z, Y) {
                  St.call(et, z, Y);
                }).then(Q, q);
              },
              { unsafe: !0 },
            ),
            typeof W == 'function' &&
              n(
                { global: !0, enumerable: !0, forced: !0 },
                {
                  fetch: function (Q) {
                    return R(b, W.apply(a, arguments));
                  },
                },
              ))),
          n({ global: !0, wrap: !0, forced: gt }, { Promise: b }),
          d(b, O, !1, !0),
          v(O),
          (ht = i(O)),
          n(
            { target: O, stat: !0, forced: gt },
            {
              reject: function (Q) {
                var q = G(this);
                return q.reject.call(void 0, Q), q.promise;
              },
            },
          ),
          n(
            { target: O, stat: !0, forced: o || gt },
            {
              resolve: function (Q) {
                return R(o && this === ht ? b : this, Q);
              },
            },
          ),
          n(
            { target: O, stat: !0, forced: Yt },
            {
              all: function (Q) {
                var q = this,
                  et = G(q),
                  z = et.resolve,
                  Y = et.reject,
                  Z = x(function () {
                    var _ = c(q.resolve),
                      nt = [],
                      at = 0,
                      ft = 1;
                    m(Q, function (vt) {
                      var lt = at++,
                        Lt = !1;
                      nt.push(void 0),
                        ft++,
                        _.call(q, vt).then(function (Ht) {
                          Lt || ((Lt = !0), (nt[lt] = Ht), --ft || z(nt));
                        }, Y);
                    }),
                      --ft || z(nt);
                  });
                return Z.error && Y(Z.value), et.promise;
              },
              race: function (Q) {
                var q = this,
                  et = G(q),
                  z = et.reject,
                  Y = x(function () {
                    var Z = c(q.resolve);
                    m(Q, function (_) {
                      Z.call(q, _).then(et.resolve, z);
                    });
                  });
                return Y.error && z(Y.value), et.promise;
              },
            },
          );
      },
      function (r, e, t) {
        var n = t(8),
          o = t(71).f,
          a = t(34),
          i = t(117).set,
          s = t(118),
          h = n.MutationObserver || n.WebKitMutationObserver,
          u = n.process,
          d = n.Promise,
          v = a(u) == 'process',
          l = o(n, 'queueMicrotask'),
          c = l && l.value,
          f,
          g,
          p,
          m,
          A,
          y,
          E,
          S;
        c ||
          ((f = function () {
            var R, P;
            for (v && (R = u.domain) && R.exit(); g; ) {
              (P = g.fn), (g = g.next);
              try {
                P();
              } catch (D) {
                throw (g ? m() : (p = void 0), D);
              }
            }
            (p = void 0), R && R.enter();
          }),
          v
            ? (m = function () {
                u.nextTick(f);
              })
            : h && !s
            ? ((A = !0),
              (y = document.createTextNode('')),
              new h(f).observe(y, { characterData: !0 }),
              (m = function () {
                y.data = A = !A;
              }))
            : d && d.resolve
            ? ((E = d.resolve(void 0)),
              (S = E.then),
              (m = function () {
                S.call(E, f);
              }))
            : (m = function () {
                i.call(n, f);
              })),
          (r.exports =
            c ||
            function (R) {
              var P = { fn: R, next: void 0 };
              p && (p.next = P), g || ((g = P), m()), (p = P);
            });
      },
      function (r, e, t) {
        var n = t(8);
        r.exports = function (o, a) {
          var i = n.console;
          i && i.error && (arguments.length === 1 ? i.error(o) : i.error(o, a));
        };
      },
      function (r, e, t) {
        var n = t(5),
          o = t(41),
          a = t(85),
          i = t(120),
          s = t(66);
        n(
          { target: 'Promise', stat: !0 },
          {
            allSettled: function (u) {
              var d = this,
                v = a.f(d),
                l = v.resolve,
                c = v.reject,
                f = i(function () {
                  var g = o(d.resolve),
                    p = [],
                    m = 0,
                    A = 1;
                  s(u, function (y) {
                    var E = m++,
                      S = !1;
                    p.push(void 0),
                      A++,
                      g.call(d, y).then(
                        function (R) {
                          S || ((S = !0), (p[E] = { status: 'fulfilled', value: R }), --A || l(p));
                        },
                        function (R) {
                          S || ((S = !0), (p[E] = { status: 'rejected', reason: R }), --A || l(p));
                        },
                      );
                  }),
                    --A || l(p);
                });
              return f.error && c(f.value), v.promise;
            },
          },
        );
      },
      function (r, e, t) {
        var n = t(5),
          o = t(43),
          a = t(109),
          i = t(11),
          s = t(36),
          h = t(116),
          u = t(119),
          d = t(53),
          v =
            !!a &&
            i(function () {
              a.prototype.finally.call({ then: function () {} }, function () {});
            });
        n(
          { target: 'Promise', proto: !0, real: !0, forced: v },
          {
            finally: function (l) {
              var c = h(this, s('Promise')),
                f = typeof l == 'function';
              return this.then(
                f
                  ? function (g) {
                      return u(c, l()).then(function () {
                        return g;
                      });
                    }
                  : l,
                f
                  ? function (g) {
                      return u(c, l()).then(function () {
                        throw g;
                      });
                    }
                  : l,
              );
            },
          },
        ),
          !o &&
            typeof a == 'function' &&
            !a.prototype.finally &&
            d(a.prototype, 'finally', s('Promise').prototype.finally);
      },
      function (r, e, t) {
        t(54);
        var n = t(181),
          o = t(65),
          a = Array.prototype,
          i = { DOMTokenList: !0, NodeList: !0 };
        r.exports = function (s) {
          var h = s.forEach;
          return s === a || (s instanceof Array && h === a.forEach) || i.hasOwnProperty(o(s))
            ? n
            : h;
        };
      },
      function (r, e, t) {
        var n = t(182);
        r.exports = n;
      },
      function (r, e, t) {
        t(183);
        var n = t(15);
        r.exports = n('Array').forEach;
      },
      function (r, e, t) {
        var n = t(5),
          o = t(184);
        n({ target: 'Array', proto: !0, forced: [].forEach != o }, { forEach: o });
      },
      function (r, e, t) {
        var n = t(32).forEach,
          o = t(67),
          a = t(22),
          i = o('forEach'),
          s = a('forEach');
        r.exports =
          !i || !s
            ? function (u) {
                return n(this, u, arguments.length > 1 ? arguments[1] : void 0);
              }
            : [].forEach;
      },
      function (r, e, t) {
        var n = t(186);
        r.exports = n;
      },
      function (r, e, t) {
        t(187);
        var n = t(9);
        r.exports = n.Array.isArray;
      },
      function (r, e, t) {
        var n = t(5),
          o = t(55);
        n({ target: 'Array', stat: !0 }, { isArray: o });
      },
      function (r, e, t) {
        var n = t(189);
        r.exports = n;
      },
      function (r, e, t) {
        var n = t(190),
          o = Array.prototype;
        r.exports = function (a) {
          var i = a.map;
          return a === o || (a instanceof Array && i === o.map) ? n : i;
        };
      },
      function (r, e, t) {
        t(191);
        var n = t(15);
        r.exports = n('Array').map;
      },
      function (r, e, t) {
        var n = t(5),
          o = t(32).map,
          a = t(56),
          i = t(22),
          s = a('map'),
          h = i('map');
        n(
          { target: 'Array', proto: !0, forced: !s || !h },
          {
            map: function (d) {
              return o(this, d, arguments.length > 1 ? arguments[1] : void 0);
            },
          },
        );
      },
      function (r, e, t) {
        var n = t(193);
        r.exports = n;
      },
      function (r, e, t) {
        var n = t(194),
          o = String.prototype;
        r.exports = function (a) {
          var i = a.trim;
          return typeof a == 'string' || a === o || (a instanceof String && i === o.trim) ? n : i;
        };
      },
      function (r, e, t) {
        t(195);
        var n = t(15);
        r.exports = n('String').trim;
      },
      function (r, e, t) {
        var n = t(5),
          o = t(90).trim,
          a = t(196);
        n(
          { target: 'String', proto: !0, forced: a('trim') },
          {
            trim: function () {
              return o(this);
            },
          },
        );
      },
      function (r, e, t) {
        var n = t(11),
          o = t(68),
          a = '​᠎';
        r.exports = function (i) {
          return n(function () {
            return !!o[i]() || a[i]() != a || o[i].name !== i;
          });
        };
      },
      function (r, e, t) {
        var n = t(198);
        r.exports = n;
      },
      function (r, e, t) {
        t(199), t(61), t(50), t(54);
        var n = t(9);
        r.exports = n.Map;
      },
      function (r, e, t) {
        var n = t(122),
          o = t(124);
        r.exports = n(
          'Map',
          function (a) {
            return function () {
              return a(this, arguments.length ? arguments[0] : void 0);
            };
          },
          o,
        );
      },
      function (r, e, t) {
        var n = t(11);
        r.exports = !n(function () {
          return Object.isExtensible(Object.preventExtensions({}));
        });
      },
      function (r, e, t) {
        var n = t(202);
        r.exports = n;
      },
      function (r, e, t) {
        var n = t(203),
          o = Array.prototype;
        r.exports = function (a) {
          var i = a.indexOf;
          return a === o || (a instanceof Array && i === o.indexOf) ? n : i;
        };
      },
      function (r, e, t) {
        t(204);
        var n = t(15);
        r.exports = n('Array').indexOf;
      },
      function (r, e, t) {
        var n = t(5),
          o = t(78).indexOf,
          a = t(67),
          i = t(22),
          s = [].indexOf,
          h = !!s && 1 / [1].indexOf(1, -0) < 0,
          u = a('indexOf'),
          d = i('indexOf', { ACCESSORS: !0, 1: 0 });
        n(
          { target: 'Array', proto: !0, forced: h || !u || !d },
          {
            indexOf: function (l) {
              return h
                ? s.apply(this, arguments) || 0
                : o(this, l, arguments.length > 1 ? arguments[1] : void 0);
            },
          },
        );
      },
      function (r, e, t) {
        var n = t(206);
        r.exports = n;
      },
      function (r, e, t) {
        var n = t(207),
          o = Array.prototype;
        r.exports = function (a) {
          var i = a.splice;
          return a === o || (a instanceof Array && i === o.splice) ? n : i;
        };
      },
      function (r, e, t) {
        t(208);
        var n = t(15);
        r.exports = n('Array').splice;
      },
      function (r, e, t) {
        var n = t(5),
          o = t(79),
          a = t(62),
          i = t(35),
          s = t(31),
          h = t(88),
          u = t(69),
          d = t(56),
          v = t(22),
          l = d('splice'),
          c = v('splice', { ACCESSORS: !0, 0: 0, 1: 2 }),
          f = Math.max,
          g = Math.min,
          p = 9007199254740991,
          m = 'Maximum allowed length exceeded';
        n(
          { target: 'Array', proto: !0, forced: !l || !c },
          {
            splice: function (y, E) {
              var S = s(this),
                R = i(S.length),
                P = o(y, R),
                D = arguments.length,
                x,
                T,
                I,
                N,
                M,
                L;
              if (
                (D === 0
                  ? (x = T = 0)
                  : D === 1
                  ? ((x = 0), (T = R - P))
                  : ((x = D - 2), (T = g(f(a(E), 0), R - P))),
                R + x - T > p)
              )
                throw TypeError(m);
              for (I = h(S, T), N = 0; N < T; N++) (M = P + N), M in S && u(I, N, S[M]);
              if (((I.length = T), x < T)) {
                for (N = P; N < R - T; N++)
                  (M = N + T), (L = N + x), M in S ? (S[L] = S[M]) : delete S[L];
                for (N = R; N > R - T + x; N--) delete S[N - 1];
              } else if (x > T)
                for (N = R - T; N > P; N--)
                  (M = N + T - 1), (L = N + x - 1), M in S ? (S[L] = S[M]) : delete S[L];
              for (N = 0; N < x; N++) S[N + P] = arguments[N + 2];
              return (S.length = R - T + x), I;
            },
          },
        );
      },
      function (r, e, t) {
        var n = t(210);
        r.exports = n;
      },
      function (r, e, t) {
        var n = t(211),
          o = Array.prototype;
        r.exports = function (a) {
          var i = a.filter;
          return a === o || (a instanceof Array && i === o.filter) ? n : i;
        };
      },
      function (r, e, t) {
        t(212);
        var n = t(15);
        r.exports = n('Array').filter;
      },
      function (r, e, t) {
        var n = t(5),
          o = t(32).filter,
          a = t(56),
          i = t(22),
          s = a('filter'),
          h = i('filter');
        n(
          { target: 'Array', proto: !0, forced: !s || !h },
          {
            filter: function (d) {
              return o(this, d, arguments.length > 1 ? arguments[1] : void 0);
            },
          },
        );
      },
      function (r, e, t) {
        var n = t(214);
        r.exports = n;
      },
      function (r, e, t) {
        var n = t(215),
          o = t(217),
          a = Array.prototype,
          i = String.prototype;
        r.exports = function (s) {
          var h = s.includes;
          return s === a || (s instanceof Array && h === a.includes)
            ? n
            : typeof s == 'string' || s === i || (s instanceof String && h === i.includes)
            ? o
            : h;
        };
      },
      function (r, e, t) {
        t(216);
        var n = t(15);
        r.exports = n('Array').includes;
      },
      function (r, e, t) {
        var n = t(5),
          o = t(78).includes,
          a = t(82),
          i = t(22),
          s = i('indexOf', { ACCESSORS: !0, 1: 0 });
        n(
          { target: 'Array', proto: !0, forced: !s },
          {
            includes: function (u) {
              return o(this, u, arguments.length > 1 ? arguments[1] : void 0);
            },
          },
        ),
          a('includes');
      },
      function (r, e, t) {
        t(218);
        var n = t(15);
        r.exports = n('String').includes;
      },
      function (r, e, t) {
        var n = t(5),
          o = t(219),
          a = t(49),
          i = t(221);
        n(
          { target: 'String', proto: !0, forced: !i('includes') },
          {
            includes: function (h) {
              return !!~String(a(this)).indexOf(o(h), arguments.length > 1 ? arguments[1] : void 0);
            },
          },
        );
      },
      function (r, e, t) {
        var n = t(220);
        r.exports = function (o) {
          if (n(o)) throw TypeError("The method doesn't accept regular expressions");
          return o;
        };
      },
      function (r, e, t) {
        var n = t(13),
          o = t(34),
          a = t(10),
          i = a('match');
        r.exports = function (s) {
          var h;
          return n(s) && ((h = s[i]) !== void 0 ? !!h : o(s) == 'RegExp');
        };
      },
      function (r, e, t) {
        var n = t(10),
          o = n('match');
        r.exports = function (a) {
          var i = /./;
          try {
            '/./'[a](i);
          } catch (s) {
            try {
              return (i[o] = !1), '/./'[a](i);
            } catch (h) {}
          }
          return !1;
        };
      },
      function (r, e, t) {
        var n = t(223);
        r.exports = n;
      },
      function (r, e, t) {
        var n = t(224),
          o = Function.prototype;
        r.exports = function (a) {
          var i = a.bind;
          return a === o || (a instanceof Function && i === o.bind) ? n : i;
        };
      },
      function (r, e, t) {
        t(225);
        var n = t(15);
        r.exports = n('Function').bind;
      },
      function (r, e, t) {
        var n = t(5),
          o = t(226);
        n({ target: 'Function', proto: !0 }, { bind: o });
      },
      function (r, e, t) {
        var n = t(41),
          o = t(13),
          a = [].slice,
          i = {},
          s = function (h, u, d) {
            if (!(u in i)) {
              for (var v = [], l = 0; l < u; l++) v[l] = 'a[' + l + ']';
              i[u] = Function('C,a', 'return new C(' + v.join(',') + ')');
            }
            return i[u](h, d);
          };
        r.exports =
          Function.bind ||
          function (u) {
            var d = n(this),
              v = a.call(arguments, 1),
              l = function () {
                var f = v.concat(a.call(arguments));
                return this instanceof l ? s(d, f.length, f) : d.apply(u, f);
              };
            return o(d.prototype) && (l.prototype = d.prototype), l;
          };
      },
      function (r, e, t) {
        r.exports = t(228);
      },
      function (r, e, t) {
        var n = t(229);
        r.exports = n;
      },
      function (r, e, t) {
        t(125), t(50), t(54);
        var n = t(93);
        r.exports = n.f('iterator');
      },
      function (r, e, t) {
        r.exports = t(231);
      },
      function (r, e, t) {
        var n = t(232);
        t(251), t(252), t(253), t(254), t(255), (r.exports = n);
      },
      function (r, e, t) {
        t(233),
          t(61),
          t(234),
          t(236),
          t(237),
          t(238),
          t(239),
          t(125),
          t(240),
          t(241),
          t(242),
          t(243),
          t(244),
          t(245),
          t(246),
          t(247),
          t(248),
          t(249),
          t(250);
        var n = t(9);
        r.exports = n.Symbol;
      },
      function (r, e, t) {
        var n = t(5),
          o = t(11),
          a = t(55),
          i = t(13),
          s = t(31),
          h = t(35),
          u = t(69),
          d = t(88),
          v = t(56),
          l = t(10),
          c = t(86),
          f = l('isConcatSpreadable'),
          g = 9007199254740991,
          p = 'Maximum allowed index exceeded',
          m =
            c >= 51 ||
            !o(function () {
              var S = [];
              return (S[f] = !1), S.concat()[0] !== S;
            }),
          A = v('concat'),
          y = function (S) {
            if (!i(S)) return !1;
            var R = S[f];
            return R !== void 0 ? !!R : a(S);
          },
          E = !m || !A;
        n(
          { target: 'Array', proto: !0, forced: E },
          {
            concat: function (R) {
              var P = s(this),
                D = d(P, 0),
                x = 0,
                T,
                I,
                N,
                M,
                L;
              for (T = -1, N = arguments.length; T < N; T++)
                if (((L = T === -1 ? P : arguments[T]), y(L))) {
                  if (((M = h(L.length)), x + M > g)) throw TypeError(p);
                  for (I = 0; I < M; I++, x++) I in L && u(D, x, L[I]);
                } else {
                  if (x >= g) throw TypeError(p);
                  u(D, x++, L);
                }
              return (D.length = x), D;
            },
          },
        );
      },
      function (r, e, t) {
        var n = t(5),
          o = t(8),
          a = t(36),
          i = t(43),
          s = t(14),
          h = t(76),
          u = t(106),
          d = t(11),
          v = t(16),
          l = t(55),
          c = t(13),
          f = t(25),
          g = t(31),
          p = t(30),
          m = t(60),
          A = t(48),
          y = t(77),
          E = t(52),
          S = t(126),
          R = t(235),
          P = t(127),
          D = t(71),
          x = t(18),
          T = t(59),
          I = t(19),
          N = t(53),
          M = t(74),
          L = t(63),
          O = t(51),
          B = t(64),
          w = t(10),
          H = t(93),
          b = t(12),
          U = t(37),
          K = t(42),
          j = t(32).forEach,
          W = L('hidden'),
          G = 'Symbol',
          $ = 'prototype',
          V = w('toPrimitive'),
          J = K.set,
          k = K.getterFor(G),
          rt = Object[$],
          ot = o.Symbol,
          dt = a('JSON', 'stringify'),
          Bt = D.f,
          st = x.f,
          Mt = R.f,
          Et = T.f,
          ut = M('symbols'),
          ht = M('op-symbols'),
          St = M('string-to-symbol-registry'),
          gt = M('symbol-to-string-registry'),
          Yt = M('wks'),
          Ct = o.QObject,
          yt = !Ct || !Ct[$] || !Ct[$].findChild,
          Dt =
            s &&
            d(function () {
              return (
                y(
                  st({}, 'a', {
                    get: function () {
                      return st(this, 'a', { value: 7 }).a;
                    },
                  }),
                ).a != 7
              );
            })
              ? function (z, Y, Z) {
                  var _ = Bt(rt, Y);
                  _ && delete rt[Y], st(z, Y, Z), _ && z !== rt && st(rt, Y, _);
                }
              : st,
          Nt = function (z, Y) {
            var Z = (ut[z] = y(ot[$]));
            return J(Z, { type: G, tag: z, description: Y }), s || (Z.description = Y), Z;
          },
          Tt = u
            ? function (z) {
                return typeof z == 'symbol';
              }
            : function (z) {
                return Object(z) instanceof ot;
              },
          Rt = function (Y, Z, _) {
            Y === rt && Rt(ht, Z, _), f(Y);
            var nt = m(Z, !0);
            return (
              f(_),
              v(ut, nt)
                ? (_.enumerable
                    ? (v(Y, W) && Y[W][nt] && (Y[W][nt] = !1), (_ = y(_, { enumerable: A(0, !1) })))
                    : (v(Y, W) || st(Y, W, A(1, {})), (Y[W][nt] = !0)),
                  Dt(Y, nt, _))
                : st(Y, nt, _)
            );
          },
          mt = function (Y, Z) {
            f(Y);
            var _ = p(Z),
              nt = E(_).concat(q(_));
            return (
              j(nt, function (at) {
                (!s || xt.call(_, at)) && Rt(Y, at, _[at]);
              }),
              Y
            );
          },
          At = function (Y, Z) {
            return Z === void 0 ? y(Y) : mt(y(Y), Z);
          },
          xt = function (Y) {
            var Z = m(Y, !0),
              _ = Et.call(this, Z);
            return this === rt && v(ut, Z) && !v(ht, Z)
              ? !1
              : _ || !v(this, Z) || !v(ut, Z) || (v(this, W) && this[W][Z])
              ? _
              : !0;
          },
          X = function (Y, Z) {
            var _ = p(Y),
              nt = m(Z, !0);
            if (!(_ === rt && v(ut, nt) && !v(ht, nt))) {
              var at = Bt(_, nt);
              return at && v(ut, nt) && !(v(_, W) && _[W][nt]) && (at.enumerable = !0), at;
            }
          },
          Q = function (Y) {
            var Z = Mt(p(Y)),
              _ = [];
            return (
              j(Z, function (nt) {
                !v(ut, nt) && !v(O, nt) && _.push(nt);
              }),
              _
            );
          },
          q = function (Y) {
            var Z = Y === rt,
              _ = Mt(Z ? ht : p(Y)),
              nt = [];
            return (
              j(_, function (at) {
                v(ut, at) && (!Z || v(rt, at)) && nt.push(ut[at]);
              }),
              nt
            );
          };
        if (
          (h ||
            ((ot = function () {
              if (this instanceof ot) throw TypeError('Symbol is not a constructor');
              var Y = !arguments.length || arguments[0] === void 0 ? void 0 : String(arguments[0]),
                Z = B(Y),
                _ = function (nt) {
                  this === rt && _.call(ht, nt),
                    v(this, W) && v(this[W], Z) && (this[W][Z] = !1),
                    Dt(this, Z, A(1, nt));
                };
              return s && yt && Dt(rt, Z, { configurable: !0, set: _ }), Nt(Z, Y);
            }),
            N(ot[$], 'toString', function () {
              return k(this).tag;
            }),
            N(ot, 'withoutSetter', function (z) {
              return Nt(B(z), z);
            }),
            (T.f = xt),
            (x.f = Rt),
            (D.f = X),
            (S.f = R.f = Q),
            (P.f = q),
            (H.f = function (z) {
              return Nt(w(z), z);
            }),
            s &&
              (st(ot[$], 'description', {
                configurable: !0,
                get: function () {
                  return k(this).description;
                },
              }),
              i || N(rt, 'propertyIsEnumerable', xt, { unsafe: !0 }))),
          n({ global: !0, wrap: !0, forced: !h, sham: !h }, { Symbol: ot }),
          j(E(Yt), function (z) {
            b(z);
          }),
          n(
            { target: G, stat: !0, forced: !h },
            {
              for: function (z) {
                var Y = String(z);
                if (v(St, Y)) return St[Y];
                var Z = ot(Y);
                return (St[Y] = Z), (gt[Z] = Y), Z;
              },
              keyFor: function (Y) {
                if (!Tt(Y)) throw TypeError(Y + ' is not a symbol');
                if (v(gt, Y)) return gt[Y];
              },
              useSetter: function () {
                yt = !0;
              },
              useSimple: function () {
                yt = !1;
              },
            },
          ),
          n(
            { target: 'Object', stat: !0, forced: !h, sham: !s },
            { create: At, defineProperty: Rt, defineProperties: mt, getOwnPropertyDescriptor: X },
          ),
          n(
            { target: 'Object', stat: !0, forced: !h },
            { getOwnPropertyNames: Q, getOwnPropertySymbols: q },
          ),
          n(
            {
              target: 'Object',
              stat: !0,
              forced: d(function () {
                P.f(1);
              }),
            },
            {
              getOwnPropertySymbols: function (Y) {
                return P.f(g(Y));
              },
            },
          ),
          dt)
        ) {
          var et =
            !h ||
            d(function () {
              var z = ot();
              return dt([z]) != '[null]' || dt({ a: z }) != '{}' || dt(Object(z)) != '{}';
            });
          n(
            { target: 'JSON', stat: !0, forced: et },
            {
              stringify: function (Y, Z, _) {
                for (var nt = [Y], at = 1, ft; arguments.length > at; ) nt.push(arguments[at++]);
                if (((ft = Z), !((!c(Z) && Y === void 0) || Tt(Y))))
                  return (
                    l(Z) ||
                      (Z = function (vt, lt) {
                        if ((typeof ft == 'function' && (lt = ft.call(this, vt, lt)), !Tt(lt)))
                          return lt;
                      }),
                    (nt[1] = Z),
                    dt.apply(null, nt)
                  );
              },
            },
          );
        }
        ot[$][V] || I(ot[$], V, ot[$].valueOf), U(ot, G), (O[W] = !0);
      },
      function (r, e, t) {
        var n = t(30),
          o = t(126).f,
          a = {}.toString,
          i =
            typeof window == 'object' && window && Object.getOwnPropertyNames
              ? Object.getOwnPropertyNames(window)
              : [],
          s = function (h) {
            try {
              return o(h);
            } catch (u) {
              return i.slice();
            }
          };
        r.exports.f = function (u) {
          return i && a.call(u) == '[object Window]' ? s(u) : o(n(u));
        };
      },
      function (r, e, t) {
        var n = t(12);
        n('asyncIterator');
      },
      function (r, e) {},
      function (r, e, t) {
        var n = t(12);
        n('hasInstance');
      },
      function (r, e, t) {
        var n = t(12);
        n('isConcatSpreadable');
      },
      function (r, e, t) {
        var n = t(12);
        n('match');
      },
      function (r, e, t) {
        var n = t(12);
        n('matchAll');
      },
      function (r, e, t) {
        var n = t(12);
        n('replace');
      },
      function (r, e, t) {
        var n = t(12);
        n('search');
      },
      function (r, e, t) {
        var n = t(12);
        n('species');
      },
      function (r, e, t) {
        var n = t(12);
        n('split');
      },
      function (r, e, t) {
        var n = t(12);
        n('toPrimitive');
      },
      function (r, e, t) {
        var n = t(12);
        n('toStringTag');
      },
      function (r, e, t) {
        var n = t(12);
        n('unscopables');
      },
      function (r, e, t) {
        var n = t(37);
        n(Math, 'Math', !0);
      },
      function (r, e, t) {
        var n = t(8),
          o = t(37);
        o(n.JSON, 'JSON', !0);
      },
      function (r, e, t) {
        var n = t(12);
        n('asyncDispose');
      },
      function (r, e, t) {
        var n = t(12);
        n('dispose');
      },
      function (r, e, t) {
        var n = t(12);
        n('observable');
      },
      function (r, e, t) {
        var n = t(12);
        n('patternMatch');
      },
      function (r, e, t) {
        var n = t(12);
        n('replaceAll');
      },
      function (r, e, t) {
        r.exports = t(257);
      },
      function (r, e, t) {
        var n = t(258);
        r.exports = n;
      },
      function (r, e, t) {
        t(259);
        var n = t(9);
        r.exports = n.parseInt;
      },
      function (r, e, t) {
        var n = t(5),
          o = t(260);
        n({ global: !0, forced: parseInt != o }, { parseInt: o });
      },
      function (r, e, t) {
        var n = t(8),
          o = t(90).trim,
          a = t(68),
          i = n.parseInt,
          s = /^[+-]?0[Xx]/,
          h = i(a + '08') !== 8 || i(a + '0x16') !== 22;
        r.exports = h
          ? function (d, v) {
              var l = o(String(d));
              return i(l, v >>> 0 || (s.test(l) ? 16 : 10));
            }
          : i;
      },
      function (r, e, t) {
        var n = t(262);
        r.exports = n;
      },
      function (r, e, t) {
        var n = t(263),
          o = Array.prototype;
        r.exports = function (a) {
          var i = a.slice;
          return a === o || (a instanceof Array && i === o.slice) ? n : i;
        };
      },
      function (r, e, t) {
        t(264);
        var n = t(15);
        r.exports = n('Array').slice;
      },
      function (r, e, t) {
        var n = t(5),
          o = t(13),
          a = t(55),
          i = t(79),
          s = t(35),
          h = t(30),
          u = t(69),
          d = t(10),
          v = t(56),
          l = t(22),
          c = v('slice'),
          f = l('slice', { ACCESSORS: !0, 0: 0, 1: 2 }),
          g = d('species'),
          p = [].slice,
          m = Math.max;
        n(
          { target: 'Array', proto: !0, forced: !c || !f },
          {
            slice: function (y, E) {
              var S = h(this),
                R = s(S.length),
                P = i(y, R),
                D = i(E === void 0 ? R : E, R),
                x,
                T,
                I;
              if (
                a(S) &&
                ((x = S.constructor),
                typeof x == 'function' && (x === Array || a(x.prototype))
                  ? (x = void 0)
                  : o(x) && ((x = x[g]), x === null && (x = void 0)),
                x === Array || x === void 0)
              )
                return p.call(S, P, D);
              for (T = new (x === void 0 ? Array : x)(m(D - P, 0)), I = 0; P < D; P++, I++)
                P in S && u(T, I, S[P]);
              return (T.length = I), T;
            },
          },
        );
      },
      function (r, e, t) {
        t(266);
        var n = t(9);
        r.exports = n.setTimeout;
      },
      function (r, e, t) {
        var n = t(5),
          o = t(8),
          a = t(84),
          i = [].slice,
          s = /MSIE .\./.test(a),
          h = function (u) {
            return function (d, v) {
              var l = arguments.length > 2,
                c = l ? i.call(arguments, 2) : void 0;
              return u(
                l
                  ? function () {
                      (typeof d == 'function' ? d : Function(d)).apply(this, c);
                    }
                  : d,
                v,
              );
            };
          };
        n(
          { global: !0, bind: !0, forced: s },
          { setTimeout: h(o.setTimeout), setInterval: h(o.setInterval) },
        );
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(128));
        (0, o.default)(e, '__esModule', { value: !0 });
        var i = t(2),
          s = i.__importDefault(t(272)),
          h = i.__importDefault(t(273)),
          u = i.__importDefault(t(129)),
          d = i.__importDefault(t(274)),
          v = i.__importDefault(t(275)),
          l = i.__importDefault(t(276)),
          c = i.__importDefault(t(130)),
          f = i.__importDefault(t(277)),
          g = i.__importDefault(t(278)),
          p = i.__importDefault(t(279)),
          m = (0, a.default)(
            {},
            s.default,
            h.default,
            u.default,
            v.default,
            d.default,
            l.default,
            c.default,
            f.default,
            g.default,
            p.default,
            {
              linkCheck: function (y, E) {
                return !0;
              },
            },
          );
        e.default = m;
      },
      function (r, e, t) {
        var n = t(269);
        r.exports = n;
      },
      function (r, e, t) {
        t(270);
        var n = t(9);
        r.exports = n.Object.assign;
      },
      function (r, e, t) {
        var n = t(5),
          o = t(271);
        n({ target: 'Object', stat: !0, forced: Object.assign !== o }, { assign: o });
      },
      function (r, e, t) {
        var n = t(14),
          o = t(11),
          a = t(52),
          i = t(127),
          s = t(59),
          h = t(31),
          u = t(72),
          d = Object.assign,
          v = Object.defineProperty;
        r.exports =
          !d ||
          o(function () {
            if (
              n &&
              d(
                { b: 1 },
                d(
                  v({}, 'a', {
                    enumerable: !0,
                    get: function () {
                      v(this, 'b', { value: 3, enumerable: !1 });
                    },
                  }),
                  { b: 2 },
                ),
              ).b !== 1
            )
              return !0;
            var l = {},
              c = {},
              f = Symbol(),
              g = 'abcdefghijklmnopqrst';
            return (
              (l[f] = 7),
              g.split('').forEach(function (p) {
                c[p] = p;
              }),
              d({}, l)[f] != 7 || a(d({}, c)).join('') != g
            );
          })
            ? function (c, f) {
                for (var g = h(c), p = arguments.length, m = 1, A = i.f, y = s.f; p > m; )
                  for (
                    var E = u(arguments[m++]),
                      S = A ? a(E).concat(A(E)) : a(E),
                      R = S.length,
                      P = 0,
                      D;
                    R > P;

                  )
                    (D = S[P++]), (!n || y.call(E, D)) && (g[D] = E[D]);
                return g;
              }
            : d;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 }),
          (e.default = {
            menus: [
              'head',
              'bold',
              'fontSize',
              'fontName',
              'italic',
              'underline',
              'strikeThrough',
              'indent',
              'lineHeight',
              'foreColor',
              'backColor',
              'link',
              'list',
              'todo',
              'justify',
              'quote',
              'emoticon',
              'image',
              'video',
              'table',
              'code',
              'splitLine',
              'undo',
              'redo',
            ],
            fontNames: [
              '黑体',
              '仿宋',
              '楷体',
              '标楷体',
              '华文仿宋',
              '华文楷体',
              '宋体',
              '微软雅黑',
              'Arial',
              'Tahoma',
              'Verdana',
              'Times New Roman',
              'Courier New',
            ],
            fontSizes: {
              'x-small': { name: '10px', value: '1' },
              small: { name: '13px', value: '2' },
              normal: { name: '16px', value: '3' },
              large: { name: '18px', value: '4' },
              'x-large': { name: '24px', value: '5' },
              'xx-large': { name: '32px', value: '6' },
              'xxx-large': { name: '48px', value: '7' },
            },
            colors: [
              '#000000',
              '#ffffff',
              '#eeece0',
              '#1c487f',
              '#4d80bf',
              '#c24f4a',
              '#8baa4a',
              '#7b5ba1',
              '#46acc8',
              '#f9963b',
            ],
            languageType: [
              'Bash',
              'C',
              'C#',
              'C++',
              'CSS',
              'Java',
              'JavaScript',
              'JSON',
              'TypeScript',
              'Plain text',
              'Html',
              'XML',
              'SQL',
              'Go',
              'Kotlin',
              'Lua',
              'Markdown',
              'PHP',
              'Python',
              'Shell Session',
              'Ruby',
            ],
            languageTab: '　　　　',
            emotions: [
              {
                title: '表情',
                type: 'emoji',
                content:
                  '😀 😃 😄 😁 😆 😅 😂 🤣 😊 😇 🙂 🙃 😉 😌 😍 😘 😗 😙 😚 😋 😛 😝 😜 🤓 😎 😏 😒 😞 😔 😟 😕 🙁 😣 😖 😫 😩 😢 😭 😤 😠 😡 😳 😱 😨 🤗 🤔 😶 😑 😬 🙄 😯 😴 😷 🤑 😈 🤡 💩 👻 💀 👀 👣'.split(
                    /\s/,
                  ),
              },
              {
                title: '手势',
                type: 'emoji',
                content:
                  '👐 🙌 👏 🤝 👍 👎 👊 ✊ 🤛 🤜 🤞 ✌️ 🤘 👌 👈 👉 👆 👇 ☝️ ✋ 🤚 🖐 🖖 👋 🤙 💪 🖕 ✍️ 🙏'.split(
                    /\s/,
                  ),
              },
            ],
            lineHeights: ['1', '1.15', '1.6', '2', '2.5', '3'],
            undoLimit: 20,
            indentation: '2em',
            showMenuTooltips: !0,
            menuTooltipPosition: 'up',
          });
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 });
        var a = t(7);
        function i(s, h, u) {
          window.alert(s), u && console.error('wangEditor: ' + u);
        }
        e.default = {
          onchangeTimeout: 200,
          onchange: null,
          onfocus: a.EMPTY_FN,
          onblur: a.EMPTY_FN,
          onCatalogChange: null,
          customAlert: i,
        };
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 }),
          (e.default = {
            pasteFilterStyle: !0,
            pasteIgnoreImg: !1,
            pasteTextHandle: function (i) {
              return i;
            },
          });
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 }), (e.default = { styleWithCSS: !1 });
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 });
        var a = t(7);
        e.default = {
          linkImgCheck: function (s, h, u) {
            return !0;
          },
          showLinkImg: !0,
          showLinkImgAlt: !0,
          showLinkImgHref: !0,
          linkImgCallback: a.EMPTY_FN,
          uploadImgAccept: ['jpg', 'jpeg', 'png', 'gif', 'bmp'],
          uploadImgServer: '',
          uploadImgShowBase64: !1,
          uploadImgMaxSize: 5 * 1024 * 1024,
          uploadImgMaxLength: 100,
          uploadFileName: '',
          uploadImgParams: {},
          uploadImgParamsWithUrl: !1,
          uploadImgHeaders: {},
          uploadImgHooks: {},
          uploadImgTimeout: 10 * 1e3,
          withCredentials: !1,
          customUploadImg: null,
          uploadImgFromMedia: null,
        };
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 }),
          (e.default = {
            lang: 'zh-CN',
            languages: {
              'zh-CN': {
                wangEditor: {
                  重置: '重置',
                  插入: '插入',
                  默认: '默认',
                  创建: '创建',
                  修改: '修改',
                  如: '如',
                  请输入正文: '请输入正文',
                  menus: {
                    title: {
                      标题: '标题',
                      加粗: '加粗',
                      字号: '字号',
                      字体: '字体',
                      斜体: '斜体',
                      下划线: '下划线',
                      删除线: '删除线',
                      缩进: '缩进',
                      行高: '行高',
                      文字颜色: '文字颜色',
                      背景色: '背景色',
                      链接: '链接',
                      序列: '序列',
                      对齐: '对齐',
                      引用: '引用',
                      表情: '表情',
                      图片: '图片',
                      视频: '视频',
                      表格: '表格',
                      代码: '代码',
                      分割线: '分割线',
                      恢复: '恢复',
                      撤销: '撤销',
                      全屏: '全屏',
                      取消全屏: '取消全屏',
                      待办事项: '待办事项',
                    },
                    dropListMenu: {
                      设置标题: '设置标题',
                      背景颜色: '背景颜色',
                      文字颜色: '文字颜色',
                      设置字号: '设置字号',
                      设置字体: '设置字体',
                      设置缩进: '设置缩进',
                      对齐方式: '对齐方式',
                      设置行高: '设置行高',
                      序列: '序列',
                      head: { 正文: '正文' },
                      indent: { 增加缩进: '增加缩进', 减少缩进: '减少缩进' },
                      justify: { 靠左: '靠左', 居中: '居中', 靠右: '靠右', 两端: '两端' },
                      list: { 无序列表: '无序列表', 有序列表: '有序列表' },
                    },
                    panelMenus: {
                      emoticon: { 默认: '默认', 新浪: '新浪', emoji: 'emoji', 手势: '手势' },
                      image: {
                        上传图片: '上传图片',
                        网络图片: '网络图片',
                        图片地址: '图片地址',
                        图片文字说明: '图片文字说明',
                        跳转链接: '跳转链接',
                      },
                      link: {
                        链接: '链接',
                        链接文字: '链接文字',
                        取消链接: '取消链接',
                        查看链接: '查看链接',
                      },
                      video: { 插入视频: '插入视频', 上传视频: '上传视频' },
                      table: {
                        行: '行',
                        列: '列',
                        的: '的',
                        表格: '表格',
                        添加行: '添加行',
                        删除行: '删除行',
                        添加列: '添加列',
                        删除列: '删除列',
                        设置表头: '设置表头',
                        取消表头: '取消表头',
                        插入表格: '插入表格',
                        删除表格: '删除表格',
                      },
                      code: { 删除代码: '删除代码', 修改代码: '修改代码', 插入代码: '插入代码' },
                    },
                  },
                  validate: {
                    张图片: '张图片',
                    大于: '大于',
                    图片链接: '图片链接',
                    不是图片: '不是图片',
                    返回结果: '返回结果',
                    上传图片超时: '上传图片超时',
                    上传图片错误: '上传图片错误',
                    上传图片失败: '上传图片失败',
                    插入图片错误: '插入图片错误',
                    一次最多上传: '一次最多上传',
                    下载链接失败: '下载链接失败',
                    图片验证未通过: '图片验证未通过',
                    服务器返回状态: '服务器返回状态',
                    上传图片返回结果错误: '上传图片返回结果错误',
                    请替换为支持的图片类型: '请替换为支持的图片类型',
                    您插入的网络图片无法识别: '您插入的网络图片无法识别',
                    您刚才插入的图片链接未通过编辑器校验: '您刚才插入的图片链接未通过编辑器校验',
                    插入视频错误: '插入视频错误',
                    视频链接: '视频链接',
                    不是视频: '不是视频',
                    视频验证未通过: '视频验证未通过',
                    个视频: '个视频',
                    上传视频超时: '上传视频超时',
                    上传视频错误: '上传视频错误',
                    上传视频失败: '上传视频失败',
                    上传视频返回结果错误: '上传视频返回结果错误',
                  },
                },
              },
              en: {
                wangEditor: {
                  重置: 'reset',
                  插入: 'insert',
                  默认: 'default',
                  创建: 'create',
                  修改: 'edit',
                  如: 'like',
                  请输入正文: 'please enter the text',
                  menus: {
                    title: {
                      标题: 'head',
                      加粗: 'bold',
                      字号: 'font size',
                      字体: 'font family',
                      斜体: 'italic',
                      下划线: 'underline',
                      删除线: 'strikethrough',
                      缩进: 'indent',
                      行高: 'line heihgt',
                      文字颜色: 'font color',
                      背景色: 'background',
                      链接: 'link',
                      序列: 'numbered list',
                      对齐: 'align',
                      引用: 'quote',
                      表情: 'emoticons',
                      图片: 'image',
                      视频: 'media',
                      表格: 'table',
                      代码: 'code',
                      分割线: 'split line',
                      恢复: 'redo',
                      撤销: 'undo',
                      全屏: 'fullscreen',
                      取消全屏: 'cancel fullscreen',
                      待办事项: 'todo',
                    },
                    dropListMenu: {
                      设置标题: 'title',
                      背景颜色: 'background',
                      文字颜色: 'font color',
                      设置字号: 'font size',
                      设置字体: 'font family',
                      设置缩进: 'indent',
                      对齐方式: 'align',
                      设置行高: 'line heihgt',
                      序列: 'list',
                      head: { 正文: 'text' },
                      indent: { 增加缩进: 'indent', 减少缩进: 'outdent' },
                      justify: { 靠左: 'left', 居中: 'center', 靠右: 'right', 两端: 'justify' },
                      list: { 无序列表: 'unordered', 有序列表: 'ordered' },
                    },
                    panelMenus: {
                      emoticon: { 表情: 'emoji', 手势: 'gesture' },
                      image: {
                        上传图片: 'upload image',
                        网络图片: 'network image',
                        图片地址: 'image link',
                        图片文字说明: 'image alt',
                        跳转链接: 'hyperlink',
                      },
                      link: {
                        链接: 'link',
                        链接文字: 'link text',
                        取消链接: 'unlink',
                        查看链接: 'view links',
                      },
                      video: { 插入视频: 'insert video', 上传视频: 'upload local video' },
                      table: {
                        行: 'rows',
                        列: 'columns',
                        的: ' ',
                        表格: 'table',
                        添加行: 'insert row',
                        删除行: 'delete row',
                        添加列: 'insert column',
                        删除列: 'delete column',
                        设置表头: 'set header',
                        取消表头: 'cancel header',
                        插入表格: 'insert table',
                        删除表格: 'delete table',
                      },
                      code: {
                        删除代码: 'delete code',
                        修改代码: 'edit code',
                        插入代码: 'insert code',
                      },
                    },
                  },
                  validate: {
                    张图片: 'images',
                    大于: 'greater than',
                    图片链接: 'image link',
                    不是图片: 'is not image',
                    返回结果: 'return results',
                    上传图片超时: 'upload image timeout',
                    上传图片错误: 'upload image error',
                    上传图片失败: 'upload image failed',
                    插入图片错误: 'insert image error',
                    一次最多上传: 'once most at upload',
                    下载链接失败: 'download link failed',
                    图片验证未通过: 'image validate failed',
                    服务器返回状态: 'server return status',
                    上传图片返回结果错误: 'upload image return results error',
                    请替换为支持的图片类型: 'please replace with a supported image type',
                    您插入的网络图片无法识别: 'the network picture you inserted is not recognized',
                    您刚才插入的图片链接未通过编辑器校验:
                      'the image link you just inserted did not pass the editor verification',
                    插入视频错误: 'insert video error',
                    视频链接: 'video link',
                    不是视频: 'is not video',
                    视频验证未通过: 'video validate failed',
                    个视频: 'videos',
                    上传视频超时: 'upload video timeout',
                    上传视频错误: 'upload video error',
                    上传视频失败: 'upload video failed',
                    上传视频返回结果错误: 'upload video return results error',
                  },
                },
              },
            },
          });
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 });
        var a = t(6);
        function i() {
          return !!(a.UA.isIE() || a.UA.isOldEdge);
        }
        e.default = { compatibleMode: i, historyMaxSize: 30 };
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 });
        var a = t(7);
        e.default = {
          onlineVideoCheck: function (s) {
            return !0;
          },
          onlineVideoCallback: a.EMPTY_FN,
          showLinkVideo: !0,
          uploadVideoAccept: ['mp4'],
          uploadVideoServer: '',
          uploadVideoMaxSize: 1 * 1024 * 1024 * 1024,
          uploadVideoName: '',
          uploadVideoParams: {},
          uploadVideoParamsWithUrl: !1,
          uploadVideoHeaders: {},
          uploadVideoHooks: {},
          uploadVideoTimeout: 1e3 * 60 * 60 * 2,
          withVideoCredentials: !1,
          customUploadVideo: null,
          customInsertVideo: null,
        };
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(17));
        (0, o.default)(e, '__esModule', { value: !0 });
        var i = t(2),
          s = i.__importDefault(t(3)),
          h = t(6),
          u = t(7),
          d = (function () {
            function v(l) {
              (this._currentRange = null), (this.editor = l);
            }
            return (
              (v.prototype.getRange = function () {
                return this._currentRange;
              }),
              (v.prototype.saveRange = function (l) {
                if (l) {
                  this._currentRange = l;
                  return;
                }
                var c = window.getSelection();
                if (c.rangeCount !== 0) {
                  var f = c.getRangeAt(0),
                    g = this.getSelectionContainerElem(f);
                  if (
                    g != null &&
                    g.length &&
                    !(
                      g.attr('contenteditable') === 'false' ||
                      g.parentUntil('[contenteditable=false]')
                    )
                  ) {
                    var p = this.editor,
                      m = p.$textElem;
                    if (m.isContain(g)) {
                      if (m.elems[0] === g.elems[0]) {
                        var A;
                        if ((0, a.default)((A = m.html())).call(A) === u.EMPTY_P) {
                          var y = m.children(),
                            E = y == null ? void 0 : y.last();
                          p.selection.createRangeByElem(E, !0, !0), p.selection.restoreSelection();
                        }
                      }
                      this._currentRange = f;
                    }
                  }
                }
              }),
              (v.prototype.collapseRange = function (l) {
                l === void 0 && (l = !1);
                var c = this._currentRange;
                c && c.collapse(l);
              }),
              (v.prototype.getSelectionText = function () {
                var l = this._currentRange;
                return l ? l.toString() : '';
              }),
              (v.prototype.getSelectionContainerElem = function (l) {
                var c;
                c = l || this._currentRange;
                var f;
                if (c)
                  return (
                    (f = c.commonAncestorContainer), s.default(f.nodeType === 1 ? f : f.parentNode)
                  );
              }),
              (v.prototype.getSelectionStartElem = function (l) {
                var c;
                c = l || this._currentRange;
                var f;
                if (c)
                  return (f = c.startContainer), s.default(f.nodeType === 1 ? f : f.parentNode);
              }),
              (v.prototype.getSelectionEndElem = function (l) {
                var c;
                c = l || this._currentRange;
                var f;
                if (c) return (f = c.endContainer), s.default(f.nodeType === 1 ? f : f.parentNode);
              }),
              (v.prototype.isSelectionEmpty = function () {
                var l = this._currentRange;
                return !!(
                  l &&
                  l.startContainer &&
                  l.startContainer === l.endContainer &&
                  l.startOffset === l.endOffset
                );
              }),
              (v.prototype.restoreSelection = function () {
                var l = window.getSelection(),
                  c = this._currentRange;
                l && c && (l.removeAllRanges(), l.addRange(c));
              }),
              (v.prototype.createEmptyRange = function () {
                var l = this.editor,
                  c = this.getRange(),
                  f;
                if (c && this.isSelectionEmpty())
                  try {
                    h.UA.isWebkit()
                      ? (l.cmd.do('insertHTML', '&#8203;'),
                        c.setEnd(c.endContainer, c.endOffset + 1),
                        this.saveRange(c))
                      : ((f = s.default('<strong>&#8203;</strong>')),
                        l.cmd.do('insertElem', f),
                        this.createRangeByElem(f, !0));
                  } catch (g) {}
              }),
              (v.prototype.createRangeByElems = function (l, c) {
                var f = window.getSelection ? window.getSelection() : document.getSelection();
                f == null || f.removeAllRanges();
                var g = document.createRange();
                g.setStart(l, 0),
                  g.setEnd(c, c.childNodes.length || 1),
                  this.saveRange(g),
                  this.restoreSelection();
              }),
              (v.prototype.createRangeByElem = function (l, c, f) {
                if (l.length) {
                  var g = l.elems[0],
                    p = document.createRange();
                  f ? p.selectNodeContents(g) : p.selectNode(g),
                    c != null &&
                      (p.collapse(c),
                      c || (this.saveRange(p), this.editor.selection.moveCursor(g))),
                    this.saveRange(p);
                }
              }),
              (v.prototype.getSelectionRangeTopNodes = function () {
                var l,
                  c,
                  f,
                  g =
                    (l = this.getSelectionStartElem()) === null || l === void 0
                      ? void 0
                      : l.getNodeTop(this.editor),
                  p =
                    (c = this.getSelectionEndElem()) === null || c === void 0
                      ? void 0
                      : c.getNodeTop(this.editor);
                return (f = this.recordSelectionNodes(s.default(g), s.default(p))), f;
              }),
              (v.prototype.moveCursor = function (l, c) {
                var f,
                  g = this.getRange(),
                  p =
                    l.nodeType === 3
                      ? (f = l.nodeValue) === null || f === void 0
                        ? void 0
                        : f.length
                      : l.childNodes.length;
                (h.UA.isFirefox || h.UA.isIE()) &&
                  p !== 0 &&
                  (l.nodeType === 3 || l.childNodes[p - 1].nodeName === 'BR') &&
                  (p = p - 1);
                var m = c != null ? c : p;
                g && l && (g.setStart(l, m), g.setEnd(l, m), this.restoreSelection());
              }),
              (v.prototype.getCursorPos = function () {
                var l = window.getSelection();
                return l == null ? void 0 : l.anchorOffset;
              }),
              (v.prototype.clearWindowSelectionRange = function () {
                var l = window.getSelection();
                l && l.removeAllRanges();
              }),
              (v.prototype.recordSelectionNodes = function (l, c) {
                var f = [],
                  g = !0;
                try {
                  for (var p = l, m = this.editor.$textElem; g; ) {
                    var A = p == null ? void 0 : p.getNodeTop(this.editor);
                    A.getNodeName() === 'BODY' && (g = !1),
                      A.length > 0 &&
                        (f.push(s.default(p)),
                        (c != null && c.equal(A)) || m.equal(A)
                          ? (g = !1)
                          : (p = A.getNextSibling()));
                  }
                } catch (y) {
                  g = !1;
                }
                return f;
              }),
              (v.prototype.setRangeToElem = function (l) {
                var c = this.getRange();
                c == null || c.setStart(l, 0), c == null || c.setEnd(l, 0);
              }),
              v
            );
          })();
        e.default = d;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(3)),
          s = (function () {
            function h(u) {
              this.editor = u;
            }
            return (
              (h.prototype.do = function (u, d) {
                var v = this.editor;
                v.config.styleWithCSS && document.execCommand('styleWithCSS', !1, 'true');
                var l = v.selection;
                if (l.getRange()) {
                  switch ((l.restoreSelection(), u)) {
                    case 'insertHTML':
                      this.insertHTML(d);
                      break;
                    case 'insertElem':
                      this.insertElem(d);
                      break;
                    default:
                      this.execCommand(u, d);
                      break;
                  }
                  v.menus.changeActive(), l.saveRange(), l.restoreSelection();
                }
              }),
              (h.prototype.insertHTML = function (u) {
                var d = this.editor,
                  v = d.selection.getRange();
                if (v != null) {
                  if (this.queryCommandSupported('insertHTML')) this.execCommand('insertHTML', u);
                  else if (v.insertNode) {
                    if ((v.deleteContents(), i.default(u).elems.length > 0))
                      v.insertNode(i.default(u).elems[0]);
                    else {
                      var l = document.createElement('p');
                      l.appendChild(document.createTextNode(u)), v.insertNode(l);
                    }
                    d.selection.collapseRange();
                  }
                }
              }),
              (h.prototype.insertElem = function (u) {
                var d = this.editor,
                  v = d.selection.getRange();
                v != null && v.insertNode && (v.deleteContents(), v.insertNode(u.elems[0]));
              }),
              (h.prototype.execCommand = function (u, d) {
                document.execCommand(u, !1, d);
              }),
              (h.prototype.queryCommandValue = function (u) {
                return document.queryCommandValue(u);
              }),
              (h.prototype.queryCommandState = function (u) {
                return document.queryCommandState(u);
              }),
              (h.prototype.queryCommandSupported = function (u) {
                return document.queryCommandSupported(u);
              }),
              h
            );
          })();
        e.default = s;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(29)),
          i = n(t(4)),
          s = n(t(17)),
          h = n(t(27)),
          u = n(t(46));
        (0, o.default)(e, '__esModule', { value: !0 });
        var d = t(2),
          v = d.__importDefault(t(3)),
          l = d.__importDefault(t(287)),
          c = t(6),
          f = d.__importDefault(t(299)),
          g = d.__importDefault(t(300)),
          p = t(7),
          m = (function () {
            function A(y) {
              (this.editor = y),
                (this.eventHooks = {
                  onBlurEvents: [],
                  changeEvents: [],
                  dropEvents: [],
                  clickEvents: [],
                  keydownEvents: [],
                  keyupEvents: [],
                  tabUpEvents: [],
                  tabDownEvents: [],
                  enterUpEvents: [],
                  enterDownEvents: [],
                  deleteUpEvents: [],
                  deleteDownEvents: [],
                  pasteEvents: [],
                  linkClickEvents: [],
                  codeClickEvents: [],
                  textScrollEvents: [],
                  toolbarClickEvents: [],
                  imgClickEvents: [],
                  imgDragBarMouseDownEvents: [],
                  tableClickEvents: [],
                  menuClickEvents: [],
                  dropListMenuHoverEvents: [],
                  splitLineEvents: [],
                  videoClickEvents: [],
                });
            }
            return (
              (A.prototype.init = function () {
                this._saveRange(), this._bindEventHooks(), l.default(this);
              }),
              (A.prototype.togglePlaceholder = function () {
                var y,
                  E = this.html(),
                  S = (0, a.default)((y = this.editor.$textContainerElem)).call(y, '.placeholder');
                S.hide(), !this.editor.isComposing && (!E || E === ' ') && S.show();
              }),
              (A.prototype.clear = function () {
                this.html(p.EMPTY_P);
              }),
              (A.prototype.html = function (y) {
                var E = this.editor,
                  S = E.$textElem;
                if (y == null) {
                  var R = S.html();
                  (R = R.replace(/\u200b/gm, '')),
                    (R = R.replace(/<p><\/p>/gim, '')),
                    (R = R.replace(p.EMPTY_P_LAST_REGEX, '')),
                    (R = R.replace(p.EMPTY_P_REGEX, '<p>'));
                  var P = R.match(/<(img|br|hr|input)[^>]*>/gi);
                  return (
                    P !== null &&
                      (0, i.default)(P).call(P, function (D) {
                        D.match(/\/>/) || (R = R.replace(D, D.substring(0, D.length - 1) + '/>'));
                      }),
                    R
                  );
                }
                (y = (0, s.default)(y).call(y)),
                  y === '' && (y = p.EMPTY_P),
                  (0, h.default)(y).call(y, '<') !== 0 && (y = '<p>' + y + '</p>'),
                  S.html(y),
                  E.initSelection();
              }),
              (A.prototype.setJSON = function (y) {
                var E = g.default(y).children(),
                  S = this.editor,
                  R = S.$textElem;
                E && R.replaceChildAll(E);
              }),
              (A.prototype.getJSON = function () {
                var y = this.editor,
                  E = y.$textElem;
                return f.default(E);
              }),
              (A.prototype.text = function (y) {
                var E = this.editor,
                  S = E.$textElem;
                if (y == null) {
                  var R = S.text();
                  return (R = R.replace(/\u200b/gm, '')), R;
                }
                S.text('<p>' + y + '</p>'), E.initSelection();
              }),
              (A.prototype.append = function (y) {
                var E = this.editor;
                (0, h.default)(y).call(y, '<') !== 0 && (y = '<p>' + y + '</p>'),
                  this.html(this.html() + y),
                  E.initSelection();
              }),
              (A.prototype._saveRange = function () {
                var y = this.editor,
                  E = y.$textElem,
                  S = v.default(document);
                function R() {
                  y.selection.saveRange(), y.menus.changeActive();
                }
                E.on('keyup', R);
                function P() {
                  R(), E.off('click', P);
                }
                E.on('click', P);
                function D() {
                  R(), S.off('mouseup', D);
                }
                function x() {
                  S.on('mouseup', D), E.off('mouseleave', x);
                }
                E.on('mousedown', function () {
                  E.on('mouseleave', x);
                }),
                  E.on('mouseup', function (T) {
                    E.off('mouseleave', x),
                      (0, u.default)(function () {
                        var I = y.selection,
                          N = I.getRange();
                        N !== null && R();
                      }, 0);
                  });
              }),
              (A.prototype._bindEventHooks = function () {
                var y = this.editor,
                  E = y.$textElem,
                  S = this.eventHooks;
                E.on('click', function (P) {
                  var D = S.clickEvents;
                  (0, i.default)(D).call(D, function (x) {
                    return x(P);
                  });
                }),
                  E.on('keyup', function (P) {
                    if (P.keyCode === 13) {
                      var D = S.enterUpEvents;
                      (0, i.default)(D).call(D, function (x) {
                        return x(P);
                      });
                    }
                  }),
                  E.on('keyup', function (P) {
                    var D = S.keyupEvents;
                    (0, i.default)(D).call(D, function (x) {
                      return x(P);
                    });
                  }),
                  E.on('keydown', function (P) {
                    var D = S.keydownEvents;
                    (0, i.default)(D).call(D, function (x) {
                      return x(P);
                    });
                  }),
                  E.on('keyup', function (P) {
                    if (!(P.keyCode !== 8 && P.keyCode !== 46)) {
                      var D = S.deleteUpEvents;
                      (0, i.default)(D).call(D, function (x) {
                        return x(P);
                      });
                    }
                  }),
                  E.on('keydown', function (P) {
                    if (!(P.keyCode !== 8 && P.keyCode !== 46)) {
                      var D = S.deleteDownEvents;
                      (0, i.default)(D).call(D, function (x) {
                        return x(P);
                      });
                    }
                  }),
                  E.on('paste', function (P) {
                    if (!c.UA.isIE()) {
                      P.preventDefault();
                      var D = S.pasteEvents;
                      (0, i.default)(D).call(D, function (x) {
                        return x(P);
                      });
                    }
                  }),
                  E.on('keydown', function (P) {
                    (y.isFocus || y.isCompatibleMode) &&
                      (P.ctrlKey || P.metaKey) &&
                      P.keyCode === 90 &&
                      (P.preventDefault(), P.shiftKey ? y.history.restore() : y.history.revoke());
                  }),
                  E.on('keyup', function (P) {
                    if (P.keyCode === 9) {
                      P.preventDefault();
                      var D = S.tabUpEvents;
                      (0, i.default)(D).call(D, function (x) {
                        return x(P);
                      });
                    }
                  }),
                  E.on('keydown', function (P) {
                    if (P.keyCode === 9) {
                      P.preventDefault();
                      var D = S.tabDownEvents;
                      (0, i.default)(D).call(D, function (x) {
                        return x(P);
                      });
                    }
                  }),
                  E.on(
                    'scroll',
                    c.throttle(function (P) {
                      var D = S.textScrollEvents;
                      (0, i.default)(D).call(D, function (x) {
                        return x(P);
                      });
                    }, 100),
                  );
                function R(P) {
                  P.preventDefault();
                }
                v
                  .default(document)
                  .on('dragleave', R)
                  .on('drop', R)
                  .on('dragenter', R)
                  .on('dragover', R),
                  y.beforeDestroy(function () {
                    v.default(document)
                      .off('dragleave', R)
                      .off('drop', R)
                      .off('dragenter', R)
                      .off('dragover', R);
                  }),
                  E.on('drop', function (P) {
                    P.preventDefault();
                    var D = S.dropEvents;
                    (0, i.default)(D).call(D, function (x) {
                      return x(P);
                    });
                  }),
                  E.on('click', function (P) {
                    var D = null,
                      x = P.target,
                      T = v.default(x);
                    if (T.getNodeName() === 'A') D = T;
                    else {
                      var I = T.parentUntil('a');
                      I != null && (D = I);
                    }
                    if (D) {
                      var N = S.linkClickEvents;
                      (0, i.default)(N).call(N, function (M) {
                        return M(D);
                      });
                    }
                  }),
                  E.on('click', function (P) {
                    var D = null,
                      x = P.target,
                      T = v.default(x);
                    if (
                      (T.getNodeName() === 'IMG' &&
                        !T.elems[0].getAttribute('data-emoji') &&
                        (P.stopPropagation(), (D = T)),
                      !!D)
                    ) {
                      var I = S.imgClickEvents;
                      (0, i.default)(I).call(I, function (N) {
                        return N(D);
                      });
                    }
                  }),
                  E.on('click', function (P) {
                    var D = null,
                      x = P.target,
                      T = v.default(x);
                    if (T.getNodeName() === 'PRE') D = T;
                    else {
                      var I = T.parentUntil('pre');
                      I !== null && (D = I);
                    }
                    if (D) {
                      var N = S.codeClickEvents;
                      (0, i.default)(N).call(N, function (M) {
                        return M(D);
                      });
                    }
                  }),
                  E.on('click', function (P) {
                    var D = null,
                      x = P.target,
                      T = v.default(x);
                    if ((T.getNodeName() === 'HR' && (D = T), !!D)) {
                      y.selection.createRangeByElem(D), y.selection.restoreSelection();
                      var I = S.splitLineEvents;
                      (0, i.default)(I).call(I, function (N) {
                        return N(D);
                      });
                    }
                  }),
                  y.$toolbarElem.on('click', function (P) {
                    var D = S.toolbarClickEvents;
                    (0, i.default)(D).call(D, function (x) {
                      return x(P);
                    });
                  }),
                  y.$textContainerElem.on('mousedown', function (P) {
                    var D = P.target,
                      x = v.default(D);
                    if (x.hasClass('w-e-img-drag-rb')) {
                      var T = S.imgDragBarMouseDownEvents;
                      (0, i.default)(T).call(T, function (I) {
                        return I();
                      });
                    }
                  }),
                  E.on('click', function (P) {
                    var D = null,
                      x = P.target;
                    if (((D = v.default(x).parentUntilEditor('TABLE', y, x)), !!D)) {
                      var T = S.tableClickEvents;
                      (0, i.default)(T).call(T, function (I) {
                        return I(D, P);
                      });
                    }
                  }),
                  E.on('keydown', function (P) {
                    if (P.keyCode === 13) {
                      var D = S.enterDownEvents;
                      (0, i.default)(D).call(D, function (x) {
                        return x(P);
                      });
                    }
                  }),
                  E.on('click', function (P) {
                    var D = null,
                      x = P.target,
                      T = v.default(x);
                    if ((T.getNodeName() === 'VIDEO' && (P.stopPropagation(), (D = T)), !!D)) {
                      var I = S.videoClickEvents;
                      (0, i.default)(I).call(I, function (N) {
                        return N(D);
                      });
                    }
                  });
              }),
              A
            );
          })();
        e.default = m;
      },
      function (r, e, t) {
        var n = t(284);
        r.exports = n;
      },
      function (r, e, t) {
        var n = t(285),
          o = Array.prototype;
        r.exports = function (a) {
          var i = a.find;
          return a === o || (a instanceof Array && i === o.find) ? n : i;
        };
      },
      function (r, e, t) {
        t(286);
        var n = t(15);
        r.exports = n('Array').find;
      },
      function (r, e, t) {
        var n = t(5),
          o = t(32).find,
          a = t(82),
          i = t(22),
          s = 'find',
          h = !0,
          u = i(s);
        s in [] &&
          Array(1)[s](function () {
            h = !1;
          }),
          n(
            { target: 'Array', proto: !0, forced: h || !u },
            {
              find: function (v) {
                return o(this, v, arguments.length > 1 ? arguments[1] : void 0);
              },
            },
          ),
          a(s);
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(288)),
          s = a.__importStar(t(289)),
          h = a.__importDefault(t(290)),
          u = a.__importDefault(t(291)),
          d = a.__importDefault(t(298));
        function v(l) {
          var c = l.editor,
            f = l.eventHooks;
          i.default(c, f.enterUpEvents, f.enterDownEvents),
            s.default(c, f.deleteUpEvents, f.deleteDownEvents),
            s.cutToKeepP(c, f.keyupEvents),
            h.default(c, f.tabDownEvents),
            u.default(c, f.pasteEvents),
            d.default(c, f.imgClickEvents);
        }
        e.default = v;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(27));
        (0, o.default)(e, '__esModule', { value: !0 });
        var i = t(2),
          s = t(7),
          h = i.__importDefault(t(3));
        function u(d, v, l) {
          function c(p) {
            var m,
              A = h.default(s.EMPTY_P);
            if ((A.insertBefore(p), (0, a.default)((m = p.html())).call(m, '<img') >= 0)) {
              A.remove();
              return;
            }
            d.selection.createRangeByElem(A, !0, !0), d.selection.restoreSelection(), p.remove();
          }
          function f() {
            var p = d.$textElem,
              m = d.selection.getSelectionContainerElem(),
              A = m.parent();
            if (A.html() === '<code><br></code>') {
              c(A);
              return;
            }
            if (m.getNodeName() === 'FONT' && m.text() === '' && m.attr('face') === 'monospace') {
              c(A);
              return;
            }
            if (A.equal(p)) {
              var y = m.getNodeName();
              (y === 'P' && m.attr('data-we-empty-p') === null) || m.text() || c(m);
            }
          }
          v.push(f);
          function g(p) {
            var m;
            d.selection.saveRange(
              (m = getSelection()) === null || m === void 0 ? void 0 : m.getRangeAt(0),
            );
            var A = d.selection.getSelectionContainerElem();
            A.id === d.textElemId && (p.preventDefault(), d.cmd.do('insertHTML', '<p><br></p>'));
          }
          l.push(g);
        }
        e.default = u;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(17)),
          i = n(t(28));
        (0, o.default)(e, '__esModule', { value: !0 }), (e.cutToKeepP = void 0);
        var s = t(2),
          h = t(7),
          u = s.__importDefault(t(3));
        function d(l, c, f) {
          function g() {
            var m = l.$textElem,
              A = l.$textElem.html(),
              y = l.$textElem.text(),
              E = (0, a.default)(A).call(A),
              S = ['<p><br></p>', '<br>', '<p data-we-empty-p=""></p>', h.EMPTY_P];
            if (/^\s*$/.test(y) && (!E || (0, i.default)(S).call(S, E))) {
              m.html(h.EMPTY_P);
              var R = m.getNode();
              l.selection.createRangeByElems(R.childNodes[0], R.childNodes[0]);
              var P = l.selection.getSelectionContainerElem();
              l.selection.restoreSelection(), l.selection.moveCursor(P.getNode(), 0);
            }
          }
          c.push(g);
          function p(m) {
            var A,
              y = l.$textElem,
              E = (0, a.default)((A = y.html().toLowerCase())).call(A);
            if (E === h.EMPTY_P) {
              m.preventDefault();
              return;
            }
          }
          f.push(p);
        }
        function v(l, c) {
          function f(g) {
            var p;
            if (g.keyCode === 88) {
              var m = l.$textElem,
                A = (0, a.default)((p = m.html().toLowerCase())).call(p);
              if (!A || A === '<br>') {
                var y = u.default(h.EMPTY_P);
                m.html(' '),
                  m.append(y),
                  l.selection.createRangeByElem(y, !1, !0),
                  l.selection.restoreSelection(),
                  l.selection.moveCursor(y.getNode(), 0);
              }
            }
          }
          c.push(f);
        }
        (e.cutToKeepP = v), (e.default = d);
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 });
        function a(i, s) {
          function h() {
            if (i.cmd.queryCommandSupported('insertHTML')) {
              var u = i.selection.getSelectionContainerElem();
              if (u) {
                var d = u.parent(),
                  v = u.getNodeName(),
                  l = d.getNodeName();
                v == 'CODE' || l === 'CODE' || l === 'PRE' || /hljs/.test(l)
                  ? i.cmd.do('insertHTML', i.config.languageTab)
                  : i.cmd.do('insertHTML', '&nbsp;&nbsp;&nbsp;&nbsp;');
              }
            }
          }
          s.push(h);
        }
        e.default = a;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(17)),
          i = n(t(4));
        (0, o.default)(e, '__esModule', { value: !0 });
        var s = t(131),
          h = t(6),
          u = t(7);
        function d(g) {
          var p,
            m = (0, a.default)(
              (p = g.replace(/<div>/gim, '<p>').replace(/<\/div>/gim, '</p>')),
            ).call(p),
            A = document.createElement('div');
          return (A.innerHTML = m), A.innerHTML.replace(/<p><\/p>/gim, '');
        }
        function v(g) {
          var p = g
            .replace(
              /<br>|<br\/>/gm,
              `
`,
            )
            .replace(/<[^>]+>/gm, '');
          return p;
        }
        function l(g) {
          var p;
          if (g === '') return !1;
          var m = document.createElement('div');
          return (
            (m.innerHTML = g),
            ((p = m.firstChild) === null || p === void 0 ? void 0 : p.nodeName) === 'P'
          );
        }
        function c(g) {
          if (!(g != null && g.length)) return !1;
          var p = g.elems[0];
          return p.nodeName === 'P' && p.innerHTML === '<br>';
        }
        function f(g, p) {
          function m(A) {
            var y = g.config,
              E = y.pasteFilterStyle,
              S = y.pasteIgnoreImg,
              R = y.pasteTextHandle,
              P = s.getPasteHtml(A, E, S),
              D = s.getPasteText(A);
            D = D.replace(/\n/gm, '<br>');
            var x = g.selection.getSelectionContainerElem();
            if (x) {
              var T = x == null ? void 0 : x.getNodeName(),
                I = x == null ? void 0 : x.getNodeTop(g),
                N = '';
              if (
                (I.elems[0] && (N = I == null ? void 0 : I.getNodeName()),
                T === 'CODE' || N === 'PRE')
              ) {
                R && h.isFunction(R) && (D = '' + (R(D) || '')), g.cmd.do('insertHTML', v(D));
                return;
              }
              if (u.urlRegex.test(D) && E) {
                R && h.isFunction(R) && (D = '' + (R(D) || ''));
                var M = D.replace(u.urlRegex, function (K) {
                    return '<a href="' + K + '" target="_blank">' + K + '</a>';
                  }),
                  L = g.selection.getRange(),
                  O = document.createElement('div'),
                  B = document.createDocumentFragment();
                if (((O.innerHTML = M), L == null)) return;
                for (; O.childNodes.length; ) B.append(O.childNodes[0]);
                var w = B.querySelectorAll('a');
                (0, i.default)(w).call(w, function (K) {
                  K.innerText = K.href;
                }),
                  L.insertNode && (L.deleteContents(), L.insertNode(B)),
                  g.selection.clearWindowSelectionRange();
                return;
              }
              if (P)
                try {
                  R && h.isFunction(R) && (P = '' + (R(P) || ''));
                  var H = /[\.\#\@]?\w+[ ]+\{[^}]*\}/.test(P);
                  if (H && E) g.cmd.do('insertHTML', '' + d(D));
                  else {
                    var b = d(P);
                    if (l(b)) {
                      var U = g.$textElem;
                      if ((g.cmd.do('insertHTML', b), U.equal(x))) {
                        g.selection.createEmptyRange();
                        return;
                      }
                      c(I) && I.remove();
                    } else g.cmd.do('insertHTML', b);
                  }
                } catch (K) {
                  R && h.isFunction(R) && (D = '' + (R(D) || '')),
                    g.cmd.do('insertHTML', '' + d(D));
                }
            }
          }
          p.push(m);
        }
        e.default = f;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(17)),
          i = n(t(4)),
          s = n(t(28));
        (0, o.default)(e, '__esModule', { value: !0 });
        var h = t(2),
          u = t(293),
          d = h.__importDefault(t(297));
        function v(p) {
          var m = /<span>.*?<\/span>/gi,
            A = /<span>(.*?)<\/span>/;
          return p.replace(m, function (y) {
            var E = y.match(A);
            return E == null ? '' : E[1];
          });
        }
        function l(p, m) {
          var A;
          return (
            (p = (0, a.default)((A = p.toLowerCase())).call(A)),
            !!(u.IGNORE_TAGS.has(p) || (m && p === 'img'))
          );
        }
        function c(p, m) {
          var A = '';
          A = '<' + p;
          var y = [];
          (0, i.default)(m).call(m, function (S) {
            y.push(S.name + '="' + S.value + '"');
          }),
            y.length > 0 && (A = A + ' ' + y.join(' '));
          var E = u.EMPTY_TAGS.has(p);
          return (A = A + (E ? '/' : '') + '>'), A;
        }
        function f(p) {
          return '</' + p + '>';
        }
        function g(p, m, A) {
          m === void 0 && (m = !0), A === void 0 && (A = !1);
          var y = [],
            E = '';
          function S(x) {
            (x = (0, a.default)(x).call(x)), x && (u.EMPTY_TAGS.has(x) || (E = x));
          }
          function R() {
            E = '';
          }
          var P = new d.default();
          P.parse(p, {
            startElement: function (T, I) {
              if ((S(T), !l(T, A))) {
                var N = u.NECESSARY_ATTRS.get(T) || [],
                  M = [];
                (0, i.default)(I).call(I, function (O) {
                  var B = O.name;
                  if (B === 'style') {
                    m || M.push(O);
                    return;
                  }
                  (0, s.default)(N).call(N, B) !== !1 && M.push(O);
                });
                var L = c(T, M);
                y.push(L);
              }
            },
            characters: function (T) {
              T && (l(E, A) || y.push(T));
            },
            endElement: function (T) {
              if (!l(T, A)) {
                var I = f(T);
                y.push(I), R();
              }
            },
            comment: function (T) {
              S(T);
            },
          });
          var D = y.join('');
          return (D = v(D)), D;
        }
        e.default = g;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(132)),
          i = n(t(121));
        (0, o.default)(e, '__esModule', { value: !0 }),
          (e.TOP_LEVEL_TAGS = e.EMPTY_TAGS = e.NECESSARY_ATTRS = e.IGNORE_TAGS = void 0),
          (e.IGNORE_TAGS = new a.default([
            'doctype',
            '!doctype',
            'html',
            'head',
            'meta',
            'body',
            'script',
            'style',
            'link',
            'frame',
            'iframe',
            'title',
            'svg',
            'center',
            'o:p',
          ])),
          (e.NECESSARY_ATTRS = new i.default([
            ['img', ['src', 'alt']],
            ['a', ['href', 'target']],
            ['td', ['colspan', 'rowspan']],
            ['th', ['colspan', 'rowspan']],
          ])),
          (e.EMPTY_TAGS = new a.default([
            'area',
            'base',
            'basefont',
            'br',
            'col',
            'hr',
            'img',
            'input',
            'isindex',
            'embed',
          ])),
          (e.TOP_LEVEL_TAGS = new a.default([
            'h1',
            'h2',
            'h3',
            'h4',
            'h5',
            'p',
            'ul',
            'ol',
            'table',
            'blockquote',
            'pre',
            'hr',
            'form',
          ]));
      },
      function (r, e, t) {
        var n = t(295);
        r.exports = n;
      },
      function (r, e, t) {
        t(296), t(61), t(50), t(54);
        var n = t(9);
        r.exports = n.Set;
      },
      function (r, e, t) {
        var n = t(122),
          o = t(124);
        r.exports = n(
          'Set',
          function (a) {
            return function () {
              return a(this, arguments.length ? arguments[0] : void 0);
            };
          },
          o,
        );
      },
      function (r, e) {
        function t() {}
        (t.prototype = {
          handler: null,
          startTagRe:
            /^<([^>\s\/]+)((\s+[^=>\s]+(\s*=\s*((\"[^"]*\")|(\'[^']*\')|[^>\s]+))?)*)\s*\/?\s*>/m,
          endTagRe: /^<\/([^>\s]+)[^>]*>/m,
          attrRe: /([^=\s]+)(\s*=\s*((\"([^"]*)\")|(\'([^']*)\')|[^>\s]+))?/gm,
          parse: function (n, o) {
            o && (this.contentHandler = o);
            for (var a, i, s, h = !1, u = this; n.length > 0; )
              n.substring(0, 4) == '<!--'
                ? ((s = n.indexOf('-->')),
                  s != -1
                    ? (this.contentHandler.comment(n.substring(4, s)),
                      (n = n.substring(s + 3)),
                      (h = !1))
                    : (h = !0))
                : n.substring(0, 2) == '</'
                ? this.endTagRe.test(n)
                  ? ((a = RegExp.lastMatch),
                    (i = RegExp.rightContext),
                    a.replace(this.endTagRe, function () {
                      return u.parseEndTag.apply(u, arguments);
                    }),
                    (n = i),
                    (h = !1))
                  : (h = !0)
                : n.charAt(0) == '<' &&
                  (this.startTagRe.test(n)
                    ? ((a = RegExp.lastMatch),
                      (i = RegExp.rightContext),
                      a.replace(this.startTagRe, function () {
                        return u.parseStartTag.apply(u, arguments);
                      }),
                      (n = i),
                      (h = !1))
                    : (h = !0)),
                h &&
                  ((s = n.indexOf('<')),
                  s == -1
                    ? (this.contentHandler.characters(n), (n = ''))
                    : (this.contentHandler.characters(n.substring(0, s)), (n = n.substring(s)))),
                (h = !0);
          },
          parseStartTag: function (n, o, a) {
            var i = this.parseAttributes(o, a);
            this.contentHandler.startElement(o, i);
          },
          parseEndTag: function (n, o) {
            this.contentHandler.endElement(o);
          },
          parseAttributes: function (n, o) {
            var a = this,
              i = [];
            return (
              o.replace(this.attrRe, function (s, h, u, d, v, l, c, f) {
                i.push(a.parseAttribute(n, s, h, u, d, v, l, c, f));
              }),
              i
            );
          },
          parseAttribute: function (n, o, a) {
            var i = '';
            arguments[7]
              ? (i = arguments[8])
              : arguments[5]
              ? (i = arguments[6])
              : arguments[3] && (i = arguments[4]);
            var s = !i && !arguments[3];
            return { name: a, value: s ? null : i };
          },
        }),
          (r.exports = t);
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 });
        function a(i, s) {
          function h(u) {
            i.selection.createRangeByElem(u), i.selection.restoreSelection();
          }
          s.push(h);
        }
        e.default = a;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(4));
        (0, o.default)(e, '__esModule', { value: !0 });
        var i = t(2),
          s = t(6),
          h = i.__importDefault(t(3));
        function u(d) {
          var v = [],
            l = d.childNodes() || [];
          return (
            (0, a.default)(l).call(l, function (c) {
              var f,
                g = c.nodeType;
              if ((g === 3 && ((f = c.textContent || ''), (f = s.replaceHtmlSymbol(f))), g === 1)) {
                (f = {}), (f = f), (f.tag = c.nodeName.toLowerCase());
                for (var p = [], m = c.attributes, A = m.length || 0, y = 0; y < A; y++) {
                  var E = m[y];
                  p.push({ name: E.name, value: E.value });
                }
                (f.attrs = p), (f.children = u(h.default(c)));
              }
              f && v.push(f);
            }),
            v
          );
        }
        e.default = u;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(92)),
          a = n(t(1)),
          i = n(t(4));
        (0, a.default)(e, '__esModule', { value: !0 });
        var s = t(2),
          h = s.__importDefault(t(3));
        function u(d, v) {
          v === void 0 && (v = document.createElement('div'));
          var l = v;
          return (
            (0, i.default)(d).call(d, function (c) {
              var f;
              if (
                (typeof c == 'string' && (f = document.createTextNode(c)),
                (0, o.default)(c) === 'object')
              ) {
                var g;
                (f = document.createElement(c.tag)),
                  (0, i.default)((g = c.attrs)).call(g, function (p) {
                    h.default(f).attr(p.name, p.value);
                  }),
                  c.children && c.children.length > 0 && u(c.children, f.getRootNode());
              }
              f && l.appendChild(f);
            }),
            h.default(l)
          );
        }
        e.default = u;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(89)),
          i = n(t(70)),
          s = n(t(28)),
          h = n(t(302)),
          u = n(t(4)),
          d = n(t(94)),
          v = n(t(133)),
          l = n(t(46)),
          c = n(t(57));
        (0, o.default)(e, '__esModule', { value: !0 });
        var f = t(2),
          g = f.__importDefault(t(87)),
          p = f.__importDefault(t(314)),
          m = f.__importDefault(t(3)),
          A = (function () {
            function y(E) {
              (this.editor = E), (this.menuList = []), (this.constructorList = p.default);
            }
            return (
              (y.prototype.extend = function (E, S) {
                !S || typeof S != 'function' || (this.constructorList[E] = S);
              }),
              (y.prototype.init = function () {
                var E,
                  S,
                  R = this,
                  P = this.editor.config,
                  D = P.excludeMenus;
                (0, a.default)(D) === !1 && (D = []),
                  (P.menus = (0, i.default)((E = P.menus)).call(E, function (B) {
                    return (0, s.default)(D).call(D, B) === !1;
                  }));
                var x = (0, h.default)(g.default.globalCustomMenuConstructorList);
                (x = (0, i.default)(x).call(x, function (B) {
                  return (0, s.default)(D).call(D, B);
                })),
                  (0, u.default)(x).call(x, function (B) {
                    delete g.default.globalCustomMenuConstructorList[B];
                  }),
                  (0, u.default)((S = P.menus)).call(S, function (B) {
                    var w = R.constructorList[B];
                    R._initMenuList(B, w);
                  });
                for (
                  var T = 0, I = (0, d.default)(g.default.globalCustomMenuConstructorList);
                  T < I.length;
                  T++
                ) {
                  var N = I[T],
                    M = N[0],
                    L = N[1],
                    O = L;
                  this._initMenuList(M, O);
                }
                this._addToToolbar(), P.showMenuTooltips && this._bindMenuTooltips();
              }),
              (y.prototype._initMenuList = function (E, S) {
                var R;
                if (!(S == null || typeof S != 'function'))
                  if (
                    (0, v.default)((R = this.menuList)).call(R, function (D) {
                      return D.key === E;
                    })
                  )
                    console.warn('菜单名称重复:' + E);
                  else {
                    var P = new S(this.editor);
                    (P.key = E), this.menuList.push(P);
                  }
              }),
              (y.prototype._bindMenuTooltips = function () {
                var E = this.editor,
                  S = E.$toolbarElem,
                  R = E.config,
                  P = R.menuTooltipPosition,
                  D = m.default(
                    '<div class="w-e-menu-tooltip w-e-menu-tooltip-' +
                      P +
                      `">
            <div class="w-e-menu-tooltip-item-wrapper">
              <div></div>
            </div>
          </div>`,
                  );
                D.css('visibility', 'hidden'),
                  S.append(D),
                  D.css('z-index', E.zIndex.get('tooltip'));
                var x = 0;
                function T() {
                  x && clearTimeout(x);
                }
                function I() {
                  T(), D.css('visibility', 'hidden');
                }
                S.on('mouseover', function (N) {
                  var M = N.target,
                    L = m.default(M),
                    O,
                    B;
                  if (L.isContain(S)) {
                    I();
                    return;
                  }
                  if (L.parentUntil('.w-e-droplist') != null) I();
                  else if (L.attr('data-title')) (O = L.attr('data-title')), (B = L);
                  else {
                    var w = L.parentUntil('.w-e-menu');
                    w != null && ((O = w.attr('data-title')), (B = w));
                  }
                  if (O && B) {
                    T();
                    var H = B.getOffsetData();
                    D.text(E.i18next.t('menus.title.' + O));
                    var b = D.getOffsetData(),
                      U = H.left + H.width / 2 - b.width / 2;
                    D.css('left', U + 'px'),
                      P === 'up'
                        ? D.css('top', H.top - b.height - 8 + 'px')
                        : P === 'down' && D.css('top', H.top + H.height + 8 + 'px'),
                      (x = (0, l.default)(function () {
                        D.css('visibility', 'visible');
                      }, 200));
                  } else I();
                }).on('mouseleave', function () {
                  I();
                });
              }),
              (y.prototype._addToToolbar = function () {
                var E,
                  S = this.editor,
                  R = S.$toolbarElem;
                (0, u.default)((E = this.menuList)).call(E, function (P) {
                  var D = P.$elem;
                  D && R.append(D);
                });
              }),
              (y.prototype.menuFind = function (E) {
                for (var S = this.menuList, R = 0, P = S.length; R < P; R++)
                  if (S[R].key === E) return S[R];
                return S[0];
              }),
              (y.prototype.changeActive = function () {
                var E;
                (0, u.default)((E = this.menuList)).call(E, function (S) {
                  var R;
                  (0, l.default)((0, c.default)((R = S.tryChangeActive)).call(R, S), 100);
                });
              }),
              y
            );
          })();
        e.default = A;
      },
      function (r, e, t) {
        r.exports = t(303);
      },
      function (r, e, t) {
        var n = t(304);
        r.exports = n;
      },
      function (r, e, t) {
        t(305);
        var n = t(9);
        r.exports = n.Object.keys;
      },
      function (r, e, t) {
        var n = t(5),
          o = t(31),
          a = t(52),
          i = t(11),
          s = i(function () {
            a(1);
          });
        n(
          { target: 'Object', stat: !0, forced: s },
          {
            keys: function (u) {
              return a(o(u));
            },
          },
        );
      },
      function (r, e, t) {
        var n = t(307);
        r.exports = n;
      },
      function (r, e, t) {
        t(308);
        var n = t(9);
        r.exports = n.Object.entries;
      },
      function (r, e, t) {
        var n = t(5),
          o = t(309).entries;
        n(
          { target: 'Object', stat: !0 },
          {
            entries: function (i) {
              return o(i);
            },
          },
        );
      },
      function (r, e, t) {
        var n = t(14),
          o = t(52),
          a = t(30),
          i = t(59).f,
          s = function (h) {
            return function (u) {
              for (var d = a(u), v = o(d), l = v.length, c = 0, f = [], g; l > c; )
                (g = v[c++]), (!n || i.call(d, g)) && f.push(h ? [g, d[g]] : d[g]);
              return f;
            };
          };
        r.exports = { entries: s(!0), values: s(!1) };
      },
      function (r, e, t) {
        var n = t(311);
        r.exports = n;
      },
      function (r, e, t) {
        var n = t(312),
          o = Array.prototype;
        r.exports = function (a) {
          var i = a.some;
          return a === o || (a instanceof Array && i === o.some) ? n : i;
        };
      },
      function (r, e, t) {
        t(313);
        var n = t(15);
        r.exports = n('Array').some;
      },
      function (r, e, t) {
        var n = t(5),
          o = t(32).some,
          a = t(67),
          i = t(22),
          s = a('some'),
          h = i('some');
        n(
          { target: 'Array', proto: !0, forced: !s || !h },
          {
            some: function (d) {
              return o(this, d, arguments.length > 1 ? arguments[1] : void 0);
            },
          },
        );
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(315)),
          s = a.__importDefault(t(316)),
          h = a.__importDefault(t(321)),
          u = a.__importDefault(t(326)),
          d = a.__importDefault(t(327)),
          v = a.__importDefault(t(328)),
          l = a.__importDefault(t(329)),
          c = a.__importDefault(t(331)),
          f = a.__importDefault(t(333)),
          g = a.__importDefault(t(334)),
          p = a.__importDefault(t(337)),
          m = a.__importDefault(t(338)),
          A = a.__importDefault(t(339)),
          y = a.__importDefault(t(350)),
          E = a.__importDefault(t(365)),
          S = a.__importDefault(t(369)),
          R = a.__importDefault(t(137)),
          P = a.__importDefault(t(378)),
          D = a.__importDefault(t(380)),
          x = a.__importDefault(t(381)),
          T = a.__importDefault(t(382)),
          I = a.__importDefault(t(401)),
          N = a.__importDefault(t(406)),
          M = a.__importDefault(t(409));
        e.default = {
          bold: i.default,
          head: s.default,
          italic: u.default,
          link: h.default,
          underline: d.default,
          strikeThrough: v.default,
          fontName: l.default,
          fontSize: c.default,
          justify: f.default,
          quote: g.default,
          backColor: p.default,
          foreColor: m.default,
          video: A.default,
          image: y.default,
          indent: E.default,
          emoticon: S.default,
          list: R.default,
          lineHeight: P.default,
          undo: D.default,
          redo: x.default,
          table: T.default,
          code: I.default,
          splitLine: N.default,
          todo: M.default,
        };
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(23)),
          s = a.__importDefault(t(3)),
          h = (function (u) {
            a.__extends(d, u);
            function d(v) {
              var l = this,
                c = s.default(`<div class="w-e-menu" data-title="加粗">
                <i class="w-e-icon-bold"></i>
            </div>`);
              return (l = u.call(this, c, v) || this), l;
            }
            return (
              (d.prototype.clickHandler = function () {
                var v = this.editor,
                  l = v.selection.isSelectionEmpty();
                l && v.selection.createEmptyRange(),
                  v.cmd.do('bold'),
                  l && (v.selection.collapseRange(), v.selection.restoreSelection());
              }),
              (d.prototype.tryChangeActive = function () {
                var v = this.editor;
                v.cmd.queryCommandState('bold') ? this.active() : this.unActive();
              }),
              d
            );
          })(i.default);
        e.default = h;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(27)),
          i = n(t(29)),
          s = n(t(4)),
          h = n(t(317)),
          u = n(t(28));
        (0, o.default)(e, '__esModule', { value: !0 });
        var d = t(2),
          v = d.__importDefault(t(24)),
          l = d.__importDefault(t(3)),
          c = t(6),
          f = t(7),
          g = (function (p) {
            d.__extends(m, p);
            function m(A) {
              var y = this,
                E = l.default(
                  '<div class="w-e-menu" data-title="标题"><i class="w-e-icon-header"></i></div>',
                ),
                S = {
                  width: 100,
                  title: '设置标题',
                  type: 'list',
                  list: [
                    { $elem: l.default('<h1>H1</h1>'), value: '<h1>' },
                    { $elem: l.default('<h2>H2</h2>'), value: '<h2>' },
                    { $elem: l.default('<h3>H3</h3>'), value: '<h3>' },
                    { $elem: l.default('<h4>H4</h4>'), value: '<h4>' },
                    { $elem: l.default('<h5>H5</h5>'), value: '<h5>' },
                    {
                      $elem: l.default(
                        '<p>' + A.i18next.t('menus.dropListMenu.head.正文') + '</p>',
                      ),
                      value: '<p>',
                    },
                  ],
                  clickHandler: function (D) {
                    y.command(D);
                  },
                };
              y = p.call(this, E, A, S) || this;
              var R = A.config.onCatalogChange;
              return R && ((y.oldCatalogs = []), y.addListenerCatalog(), y.getCatalogs()), y;
            }
            return (
              (m.prototype.command = function (A) {
                var y = this.editor,
                  E = y.selection.getSelectionContainerElem();
                if (E && y.$textElem.equal(E)) this.setMultilineHead(A);
                else {
                  var S;
                  if (
                    (0, a.default)(
                      (S = ['OL', 'UL', 'LI', 'TABLE', 'TH', 'TR', 'CODE', 'HR']),
                    ).call(S, l.default(E).getNodeName()) > -1
                  )
                    return;
                  y.cmd.do('formatBlock', A);
                }
                A !== '<p>' && this.addUidForSelectionElem();
              }),
              (m.prototype.addUidForSelectionElem = function () {
                var A = this.editor,
                  y = A.selection.getSelectionContainerElem(),
                  E = c.getRandomCode();
                l.default(y).attr('id', E);
              }),
              (m.prototype.addListenerCatalog = function () {
                var A = this,
                  y = this.editor;
                y.txt.eventHooks.changeEvents.push(function () {
                  A.getCatalogs();
                });
              }),
              (m.prototype.getCatalogs = function () {
                var A = this.editor,
                  y = this.editor.$textElem,
                  E = A.config.onCatalogChange,
                  S = (0, i.default)(y).call(y, 'h1,h2,h3,h4,h5'),
                  R = [];
                (0, s.default)(S).call(S, function (P, D) {
                  var x = l.default(P),
                    T = x.attr('id'),
                    I = x.getNodeName(),
                    N = x.text();
                  T || ((T = c.getRandomCode()), x.attr('id', T)),
                    N && R.push({ tag: I, id: T, text: N });
                }),
                  (0, h.default)(this.oldCatalogs) !== (0, h.default)(R) &&
                    ((this.oldCatalogs = R), E && E(R));
              }),
              (m.prototype.setMultilineHead = function (A) {
                var y = this,
                  E,
                  S,
                  R = this.editor,
                  P = R.selection,
                  D =
                    (E = P.getSelectionContainerElem()) === null || E === void 0
                      ? void 0
                      : E.elems[0],
                  x = ['IMG', 'VIDEO', 'TABLE', 'TH', 'TR', 'UL', 'OL', 'PRE', 'HR', 'BLOCKQUOTE'],
                  T = l.default(P.getSelectionStartElem()),
                  I = l.default(P.getSelectionEndElem());
                I.elems[0].outerHTML === l.default(f.EMPTY_P).elems[0].outerHTML &&
                  !I.elems[0].nextSibling &&
                  (I = I.prev());
                var N = [];
                N.push(T.getNodeTop(R));
                var M = [],
                  L =
                    (S = P.getRange()) === null || S === void 0
                      ? void 0
                      : S.commonAncestorContainer.childNodes;
                L == null ||
                  (0, s.default)(L).call(L, function (w, H) {
                    w === N[0].getNode() && M.push(H), w === I.getNodeTop(R).getNode() && M.push(H);
                  });
                for (var O = 0; N[O].getNode() !== I.getNodeTop(R).getNode(); ) {
                  if (!N[O].elems[0]) return;
                  var B = l.default(N[O].next().getNode());
                  N.push(B), O++;
                }
                N == null ||
                  (0, s.default)(N).call(N, function (w, H) {
                    if (!y.hasTag(w, x)) {
                      var b = l.default(A),
                        U = w.parent().getNode();
                      b.html('' + w.html()), U.insertBefore(b.getNode(), w.getNode()), w.remove();
                    }
                  }),
                  P.createRangeByElems(D.children[M[0]], D.children[M[1]]);
              }),
              (m.prototype.hasTag = function (A, y) {
                var E = this,
                  S;
                if (!A) return !1;
                if ((0, u.default)(y).call(y, A == null ? void 0 : A.getNodeName())) return !0;
                var R = !1;
                return (
                  (S = A.children()) === null ||
                    S === void 0 ||
                    (0, s.default)(S).call(S, function (P) {
                      R = E.hasTag(l.default(P), y);
                    }),
                  R
                );
              }),
              (m.prototype.tryChangeActive = function () {
                var A = this.editor,
                  y = /^h/i,
                  E = A.cmd.queryCommandValue('formatBlock');
                y.test(E) ? this.active() : this.unActive();
              }),
              m
            );
          })(v.default);
        e.default = g;
      },
      function (r, e, t) {
        r.exports = t(318);
      },
      function (r, e, t) {
        var n = t(319);
        r.exports = n;
      },
      function (r, e, t) {
        t(320);
        var n = t(9);
        n.JSON || (n.JSON = { stringify: JSON.stringify }),
          (r.exports = function (a, i, s) {
            return n.JSON.stringify.apply(null, arguments);
          });
      },
      function (r, e, t) {
        var n = t(5),
          o = t(36),
          a = t(11),
          i = o('JSON', 'stringify'),
          s = /[\uD800-\uDFFF]/g,
          h = /^[\uD800-\uDBFF]$/,
          u = /^[\uDC00-\uDFFF]$/,
          d = function (l, c, f) {
            var g = f.charAt(c - 1),
              p = f.charAt(c + 1);
            return (h.test(l) && !u.test(p)) || (u.test(l) && !h.test(g))
              ? '\\u' + l.charCodeAt(0).toString(16)
              : l;
          },
          v = a(function () {
            return i('\uDF06\uD834') !== '"\\udf06\\ud834"' || i('\uDEAD') !== '"\\udead"';
          });
        i &&
          n(
            { target: 'JSON', stat: !0, forced: v },
            {
              stringify: function (c, f, g) {
                var p = i.apply(null, arguments);
                return typeof p == 'string' ? p.replace(s, d) : p;
              },
            },
          );
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(17));
        (0, o.default)(e, '__esModule', { value: !0 });
        var i = t(2),
          s = i.__importDefault(t(38)),
          h = i.__importDefault(t(3)),
          u = i.__importDefault(t(322)),
          d = i.__importStar(t(96)),
          v = i.__importDefault(t(33)),
          l = i.__importDefault(t(324)),
          c = t(7),
          f = (function (g) {
            i.__extends(p, g);
            function p(m) {
              var A = this,
                y = h.default(
                  '<div class="w-e-menu" data-title="链接"><i class="w-e-icon-link"></i></div>',
                );
              return (A = g.call(this, y, m) || this), l.default(m), A;
            }
            return (
              (p.prototype.clickHandler = function () {
                var m = this.editor,
                  A,
                  y = m.selection.getSelectionContainerElem(),
                  E = m.$textElem,
                  S = E.html(),
                  R = (0, a.default)(S).call(S);
                if (R === c.EMPTY_P) {
                  var P = E.children();
                  m.selection.createRangeByElem(P, !0, !0),
                    (y = m.selection.getSelectionContainerElem());
                }
                if (!(y && m.$textElem.equal(y)))
                  if (this.isActive) {
                    var D = '',
                      x = '';
                    if (((A = m.selection.getSelectionContainerElem()), !A)) return;
                    if (A.getNodeName() !== 'A') {
                      var T = d.getParentNodeA(A);
                      A = h.default(T);
                    }
                    (D = A.elems[0].innerText), (x = A.attr('href')), this.createPanel(D, x);
                  } else
                    m.selection.isSelectionEmpty()
                      ? this.createPanel('', '')
                      : this.createPanel(m.selection.getSelectionText(), '');
              }),
              (p.prototype.createPanel = function (m, A) {
                var y = u.default(this.editor, m, A),
                  E = new v.default(this, y);
                E.create();
              }),
              (p.prototype.tryChangeActive = function () {
                var m = this.editor;
                d.default(m) ? this.active() : this.unActive();
              }),
              p
            );
          })(s.default);
        e.default = f;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(28)),
          i = n(t(17)),
          s = n(t(29));
        (0, o.default)(e, '__esModule', { value: !0 });
        var h = t(2),
          u = t(6),
          d = h.__importDefault(t(3)),
          v = h.__importStar(t(96)),
          l = t(323);
        function c(f, g, p) {
          var m = u.getRandom('input-link'),
            A = u.getRandom('input-text'),
            y = u.getRandom('btn-ok'),
            E = u.getRandom('btn-del'),
            S = v.default(f) ? 'inline-block' : 'none',
            R;
          function P() {
            if (v.default(f)) {
              var N = f.selection.getSelectionContainerElem();
              N && (f.selection.createRangeByElem(N), f.selection.restoreSelection(), (R = N));
            }
          }
          function D(N, M) {
            var L = N.replace(/</g, '&lt;').replace(/>/g, '&gt;'),
              O = d.default('<a target="_blank">' + L + '</a>'),
              B = O.elems[0];
            (B.innerText = N), (B.href = M), v.default(f) && P(), f.cmd.do('insertElem', O);
          }
          function x() {
            if (v.default(f))
              if ((P(), R.getNodeName() === 'A')) {
                var N,
                  M = R.elems[0],
                  L = M.parentElement;
                L && (0, a.default)((N = v.EXTRA_TAG)).call(N, L.nodeName)
                  ? (L.innerHTML = M.innerHTML)
                  : f.cmd.do('insertHTML', '<span>' + M.innerHTML + '</span>');
              } else {
                var O = v.getParentNodeA(R),
                  B = O.innerHTML;
                f.cmd.do('insertHTML', '<span>' + B + '</span>');
              }
          }
          function T(N, M) {
            var L = f.config.linkCheck(N, M);
            if (L !== void 0) {
              if (L === !0) return !0;
              f.config.customAlert(L, 'warning');
            }
            return !1;
          }
          var I = {
            width: 300,
            height: 0,
            tabs: [
              {
                title: f.i18next.t('menus.panelMenus.link.链接'),
                tpl:
                  `<div>
                        <input
                            id="` +
                  A +
                  `"
                            type="text"
                            class="block"
                            placeholder="` +
                  f.i18next.t('menus.panelMenus.link.链接文字') +
                  `"/>
                        </td>
                        <input
                            id="` +
                  m +
                  `"
                            type="text"
                            class="block"
                            placeholder="` +
                  f.i18next.t('如') +
                  ` https://..."/>
                        </td>
                        <div class="w-e-button-container">
                            <button type="button" id="` +
                  y +
                  `" class="right">
                                ` +
                  f.i18next.t('插入') +
                  `
                            </button>
                            <button type="button" id="` +
                  E +
                  '" class="gray right" style="display:' +
                  S +
                  `">
                                ` +
                  f.i18next.t('menus.panelMenus.link.取消链接') +
                  `
                            </button>
                        </div>
                    </div>`,
                events: [
                  {
                    selector: '#' + y,
                    type: 'click',
                    fn: function () {
                      var M,
                        L,
                        O,
                        B,
                        w,
                        H = f.selection.getSelectionContainerElem(),
                        b = H == null ? void 0 : H.elems[0];
                      f.selection.restoreSelection();
                      var U = f.selection.getSelectionRangeTopNodes()[0].getNode(),
                        K = window.getSelection(),
                        j = d.default('#' + m),
                        W = d.default('#' + A),
                        G = (0, i.default)((M = j.val())).call(M),
                        $ = (0, i.default)((L = W.val())).call(L),
                        V = '';
                      K &&
                        !(K != null && K.isCollapsed) &&
                        (V =
                          (B = l.insertHtml(K, U)) === null || B === void 0
                            ? void 0
                            : (0, i.default)(B).call(B));
                      var J = V == null ? void 0 : V.replace(/<.*?>/g, ''),
                        k = (w = J == null ? void 0 : J.length) !== null && w !== void 0 ? w : 0;
                      if (k <= $.length) {
                        var rt = $.substring(0, k),
                          ot = $.substring(k);
                        J === rt && ($ = J + ot);
                      }
                      if (G && ($ || ($ = G), !!T($, G))) {
                        if ((b == null ? void 0 : b.nodeName) === 'A')
                          return b.setAttribute('href', G), (b.innerText = $), !0;
                        if (
                          (b == null ? void 0 : b.nodeName) !== 'A' &&
                          (0, a.default)((O = v.EXTRA_TAG)).call(O, b.nodeName)
                        ) {
                          var dt = v.getParentNodeA(H);
                          if (dt) return dt.setAttribute('href', G), (b.innerText = $), !0;
                        }
                        return D($, G), !0;
                      }
                    },
                    bindEnter: !0,
                  },
                  {
                    selector: '#' + E,
                    type: 'click',
                    fn: function () {
                      return x(), !0;
                    },
                  },
                ],
              },
            ],
            setLinkValue: function (M, L) {
              var O = '',
                B = '',
                w;
              L === 'text' && ((O = '#' + A), (B = g)),
                L === 'link' && ((O = '#' + m), (B = p)),
                (w = (0, s.default)(M).call(M, O).elems[0]),
                (w.value = B);
            },
          };
          return I;
        }
        e.default = c;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(4));
        (0, o.default)(e, '__esModule', { value: !0 }),
          (e.insertHtml = e.createPartHtml = e.makeHtmlString = e.getTopNode = void 0);
        function i(l, c) {
          var f = l,
            g = l;
          do {
            if (f.textContent === c) break;
            (g = f), f.parentNode && (f = f == null ? void 0 : f.parentNode);
          } while ((f == null ? void 0 : f.nodeName) !== 'P');
          return g;
        }
        e.getTopNode = i;
        function s(l, c) {
          var f = l.nodeName,
            g = '';
          if (l.nodeType === 3 || /^(h|H)[1-6]$/.test(f)) return c;
          if (l.nodeType === 1) {
            var p = l.getAttribute('style'),
              m = l.getAttribute('face'),
              A = l.getAttribute('color');
            p && (g = g + (' style="' + p + '"')),
              m && (g = g + (' face="' + m + '"')),
              A && (g = g + (' color="' + A + '"'));
          }
          return (f = f.toLowerCase()), '<' + f + g + '>' + c + '</' + f + '>';
        }
        e.makeHtmlString = s;
        function h(l, c, f, g) {
          var p,
            m = (p = c.textContent) === null || p === void 0 ? void 0 : p.substring(f, g),
            A = c,
            y = '';
          do (y = s(A, m != null ? m : '')), (m = y), (A = A == null ? void 0 : A.parentElement);
          while (A && A.textContent !== l);
          return y;
        }
        e.createPartHtml = h;
        function u(l, c) {
          var f,
            g,
            p,
            m,
            A,
            y = l.anchorNode,
            E = l.focusNode,
            S = l.anchorOffset,
            R = l.focusOffset,
            P = (f = c.textContent) !== null && f !== void 0 ? f : '',
            D = d(c),
            x = '',
            T = '',
            I = '',
            N = '',
            M = y,
            L = E,
            O = y;
          if (y != null && y.isEqualNode(E != null ? E : null)) {
            var B = h(P, y, S, R);
            return (B = v(D, B)), B;
          }
          for (
            y && (T = h(P, y, S != null ? S : 0)),
              E && (N = h(P, E, 0, R)),
              y && (M = i(y, P)),
              E && (L = i(E, P)),
              O = (g = M == null ? void 0 : M.nextSibling) !== null && g !== void 0 ? g : y;
            !(O != null && O.isEqualNode(L != null ? L : null));

          ) {
            var w = O == null ? void 0 : O.nodeName;
            if (w === '#text') I = I + (O == null ? void 0 : O.textContent);
            else {
              var H =
                (m =
                  (p = O == null ? void 0 : O.firstChild) === null || p === void 0
                    ? void 0
                    : p.parentElement) === null || m === void 0
                  ? void 0
                  : m.innerHTML;
              O && (I = I + s(O, H != null ? H : ''));
            }
            var b = (A = O == null ? void 0 : O.nextSibling) !== null && A !== void 0 ? A : O;
            if (b === O) break;
            O = b;
          }
          return (x = '' + T + I + N), (x = v(D, x)), x;
        }
        e.insertHtml = u;
        function d(l) {
          for (
            var c, f = (c = l.textContent) !== null && c !== void 0 ? c : '', g = [];
            (l == null ? void 0 : l.textContent) === f;

          )
            l.nodeName !== 'P' && l.nodeName !== 'TABLE' && g.push(l), (l = l.childNodes[0]);
          return g;
        }
        function v(l, c) {
          return (
            (0, a.default)(l).call(l, function (f) {
              c = s(f, c);
            }),
            c
          );
        }
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(325));
        function s(h) {
          i.default(h);
        }
        e.default = s;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(28));
        (0, o.default)(e, '__esModule', { value: !0 });
        var i = t(2),
          s = i.__importDefault(t(3)),
          h = i.__importDefault(t(39)),
          u = t(96);
        function d(l) {
          var c;
          function f(p) {
            var m = [
              {
                $elem: s.default(
                  '<span>' + l.i18next.t('menus.panelMenus.link.查看链接') + '</span>',
                ),
                onClick: function (y, E) {
                  var S = E.attr('href');
                  return window.open(S, '_target'), !0;
                },
              },
              {
                $elem: s.default(
                  '<span>' + l.i18next.t('menus.panelMenus.link.取消链接') + '</span>',
                ),
                onClick: function (y, E) {
                  var S, R;
                  y.selection.createRangeByElem(E), y.selection.restoreSelection();
                  var P = E.childNodes();
                  if ((P == null ? void 0 : P.getNodeName()) === 'IMG') {
                    var D =
                      (R =
                        (S = y.selection.getSelectionContainerElem()) === null || S === void 0
                          ? void 0
                          : S.children()) === null || R === void 0
                        ? void 0
                        : R.elems[0].children[0];
                    y.cmd.do(
                      'insertHTML',
                      `<img 
                                src=` +
                        (D == null ? void 0 : D.getAttribute('src')) +
                        ` 
                                style=` +
                        (D == null ? void 0 : D.getAttribute('style')) +
                        '>',
                    );
                  } else {
                    var x,
                      T = E.elems[0],
                      I = T.innerHTML,
                      N = T.parentElement;
                    N && (0, a.default)((x = u.EXTRA_TAG)).call(x, N.nodeName)
                      ? (N.innerHTML = I)
                      : y.cmd.do('insertHTML', '<span>' + I + '</span>');
                  }
                  return !0;
                },
              },
            ];
            (c = new h.default(l, p, m)), c.create();
          }
          function g() {
            c && (c.remove(), (c = null));
          }
          return { showLinkTooltip: f, hideLinkTooltip: g };
        }
        function v(l) {
          var c = d(l),
            f = c.showLinkTooltip,
            g = c.hideLinkTooltip;
          l.txt.eventHooks.linkClickEvents.push(f),
            l.txt.eventHooks.clickEvents.push(g),
            l.txt.eventHooks.keyupEvents.push(g),
            l.txt.eventHooks.toolbarClickEvents.push(g),
            l.txt.eventHooks.menuClickEvents.push(g),
            l.txt.eventHooks.textScrollEvents.push(g);
        }
        e.default = v;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(23)),
          s = a.__importDefault(t(3)),
          h = (function (u) {
            a.__extends(d, u);
            function d(v) {
              var l = this,
                c = s.default(`<div class="w-e-menu" data-title="斜体">
                <i class="w-e-icon-italic"></i>
            </div>`);
              return (l = u.call(this, c, v) || this), l;
            }
            return (
              (d.prototype.clickHandler = function () {
                var v = this.editor,
                  l = v.selection.isSelectionEmpty();
                l && v.selection.createEmptyRange(),
                  v.cmd.do('italic'),
                  l && (v.selection.collapseRange(), v.selection.restoreSelection());
              }),
              (d.prototype.tryChangeActive = function () {
                var v = this.editor;
                v.cmd.queryCommandState('italic') ? this.active() : this.unActive();
              }),
              d
            );
          })(i.default);
        e.default = h;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(23)),
          s = a.__importDefault(t(3)),
          h = (function (u) {
            a.__extends(d, u);
            function d(v) {
              var l = this,
                c = s.default(`<div class="w-e-menu" data-title="下划线">
                <i class="w-e-icon-underline"></i>
            </div>`);
              return (l = u.call(this, c, v) || this), l;
            }
            return (
              (d.prototype.clickHandler = function () {
                var v = this.editor,
                  l = v.selection.isSelectionEmpty();
                l && v.selection.createEmptyRange(),
                  v.cmd.do('underline'),
                  l && (v.selection.collapseRange(), v.selection.restoreSelection());
              }),
              (d.prototype.tryChangeActive = function () {
                var v = this.editor;
                v.cmd.queryCommandState('underline') ? this.active() : this.unActive();
              }),
              d
            );
          })(i.default);
        e.default = h;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(23)),
          s = a.__importDefault(t(3)),
          h = (function (u) {
            a.__extends(d, u);
            function d(v) {
              var l = this,
                c = s.default(`<div class="w-e-menu" data-title="删除线">
                <i class="w-e-icon-strikethrough"></i>
            </div>`);
              return (l = u.call(this, c, v) || this), l;
            }
            return (
              (d.prototype.clickHandler = function () {
                var v = this.editor,
                  l = v.selection.isSelectionEmpty();
                l && v.selection.createEmptyRange(),
                  v.cmd.do('strikeThrough'),
                  l && (v.selection.collapseRange(), v.selection.restoreSelection());
              }),
              (d.prototype.tryChangeActive = function () {
                var v = this.editor;
                v.cmd.queryCommandState('strikeThrough') ? this.active() : this.unActive();
              }),
              d
            );
          })(i.default);
        e.default = h;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(24)),
          s = a.__importDefault(t(3)),
          h = a.__importDefault(t(330)),
          u = (function (d) {
            a.__extends(v, d);
            function v(l) {
              var c = this,
                f = s.default(`<div class="w-e-menu" data-title="字体">
                <i class="w-e-icon-font"></i>
            </div>`),
                g = new h.default(l.config.fontNames),
                p = {
                  width: 100,
                  title: '设置字体',
                  type: 'list',
                  list: g.getItemList(),
                  clickHandler: function (A) {
                    c.command(A);
                  },
                };
              return (c = d.call(this, f, l, p) || this), c;
            }
            return (
              (v.prototype.command = function (l) {
                var c,
                  f = this.editor,
                  g = f.selection.isSelectionEmpty(),
                  p =
                    (c = f.selection.getSelectionContainerElem()) === null || c === void 0
                      ? void 0
                      : c.elems[0];
                if (p != null) {
                  var m = (p == null ? void 0 : p.nodeName.toLowerCase()) !== 'p',
                    A = (p == null ? void 0 : p.getAttribute('face')) === l;
                  if (g) {
                    if (m && !A) {
                      var y = f.selection.getSelectionRangeTopNodes();
                      f.selection.createRangeByElem(y[0]), f.selection.moveCursor(y[0].elems[0]);
                    }
                    f.selection.setRangeToElem(p), f.selection.createEmptyRange();
                  }
                  f.cmd.do('fontName', l),
                    g && (f.selection.collapseRange(), f.selection.restoreSelection());
                }
              }),
              (v.prototype.tryChangeActive = function () {}),
              v
            );
          })(i.default);
        e.default = u;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(4));
        (0, o.default)(e, '__esModule', { value: !0 });
        var i = t(2),
          s = i.__importDefault(t(3)),
          h = (function () {
            function u(d) {
              var v = this;
              (this.itemList = []),
                (0, a.default)(d).call(d, function (l) {
                  var c = typeof l == 'string' ? l : l.value,
                    f = typeof l == 'string' ? l : l.name;
                  v.itemList.push({
                    $elem: s.default(`<p style="font-family:'` + c + `'">` + f + '</p>'),
                    value: f,
                  });
                });
            }
            return (
              (u.prototype.getItemList = function () {
                return this.itemList;
              }),
              u
            );
          })();
        e.default = h;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(24)),
          s = a.__importDefault(t(3)),
          h = a.__importDefault(t(332)),
          u = (function (d) {
            a.__extends(v, d);
            function v(l) {
              var c = this,
                f = s.default(`<div class="w-e-menu" data-title="字号">
                <i class="w-e-icon-text-heigh"></i>
            </div>`),
                g = new h.default(l.config.fontSizes),
                p = {
                  width: 160,
                  title: '设置字号',
                  type: 'list',
                  list: g.getItemList(),
                  clickHandler: function (A) {
                    c.command(A);
                  },
                };
              return (c = d.call(this, f, l, p) || this), c;
            }
            return (
              (v.prototype.command = function (l) {
                var c,
                  f = this.editor,
                  g = f.selection.isSelectionEmpty(),
                  p =
                    (c = f.selection.getSelectionContainerElem()) === null || c === void 0
                      ? void 0
                      : c.elems[0];
                p != null &&
                  (f.cmd.do('fontSize', l),
                  g && (f.selection.collapseRange(), f.selection.restoreSelection()));
              }),
              (v.prototype.tryChangeActive = function () {}),
              v
            );
          })(i.default);
        e.default = u;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(3)),
          s = (function () {
            function h(u) {
              this.itemList = [];
              for (var d in u) {
                var v = u[d];
                this.itemList.push({
                  $elem: i.default('<p style="font-size:' + d + '">' + v.name + '</p>'),
                  value: v.value,
                });
              }
            }
            return (
              (h.prototype.getItemList = function () {
                return this.itemList;
              }),
              h
            );
          })();
        e.default = s;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(4)),
          i = n(t(27));
        (0, o.default)(e, '__esModule', { value: !0 });
        var s = t(2),
          h = s.__importDefault(t(24)),
          u = s.__importDefault(t(3)),
          d = ['LI'],
          v = ['BLOCKQUOTE'],
          l = (function (c) {
            s.__extends(f, c);
            function f(g) {
              var p = this,
                m = u.default(
                  '<div class="w-e-menu" data-title="对齐"><i class="w-e-icon-paragraph-left"></i></div>',
                ),
                A = {
                  width: 100,
                  title: '对齐方式',
                  type: 'list',
                  list: [
                    {
                      $elem: u.default(
                        `<p>
                            <i class="w-e-icon-paragraph-left w-e-drop-list-item"></i>
                            ` +
                          g.i18next.t('menus.dropListMenu.justify.靠左') +
                          `
                        </p>`,
                      ),
                      value: 'left',
                    },
                    {
                      $elem: u.default(
                        `<p>
                            <i class="w-e-icon-paragraph-center w-e-drop-list-item"></i>
                            ` +
                          g.i18next.t('menus.dropListMenu.justify.居中') +
                          `
                        </p>`,
                      ),
                      value: 'center',
                    },
                    {
                      $elem: u.default(
                        `<p>
                            <i class="w-e-icon-paragraph-right w-e-drop-list-item"></i>
                            ` +
                          g.i18next.t('menus.dropListMenu.justify.靠右') +
                          `
                        </p>`,
                      ),
                      value: 'right',
                    },
                    {
                      $elem: u.default(
                        `<p>
                            <i class="w-e-icon-paragraph-justify w-e-drop-list-item"></i>
                            ` +
                          g.i18next.t('menus.dropListMenu.justify.两端') +
                          `
                        </p>`,
                      ),
                      value: 'justify',
                    },
                  ],
                  clickHandler: function (E) {
                    p.command(E);
                  },
                };
              return (p = c.call(this, m, g, A) || this), p;
            }
            return (
              (f.prototype.command = function (g) {
                var p = this.editor,
                  m = p.selection,
                  A = m.getSelectionContainerElem();
                m.saveRange();
                var y = p.selection.getSelectionRangeTopNodes();
                if (A != null && A.length)
                  if (this.isSpecialNode(A, y[0]) || this.isSpecialTopNode(y[0])) {
                    var E = this.getSpecialNodeUntilTop(A, y[0]);
                    if (E == null) return;
                    u.default(E).css('text-align', g);
                  } else
                    (0, a.default)(y).call(y, function (S) {
                      S.css('text-align', g);
                    });
                m.restoreSelection();
              }),
              (f.prototype.getSpecialNodeUntilTop = function (g, p) {
                for (var m = g.elems[0], A = p.elems[0]; m != null; ) {
                  if (
                    (0, i.default)(d).call(d, m == null ? void 0 : m.nodeName) !== -1 ||
                    m.parentNode === A
                  )
                    return m;
                  m = m.parentNode;
                }
                return m;
              }),
              (f.prototype.isSpecialNode = function (g, p) {
                var m = this.getSpecialNodeUntilTop(g, p);
                return m == null ? !1 : (0, i.default)(d).call(d, m.nodeName) !== -1;
              }),
              (f.prototype.isSpecialTopNode = function (g) {
                var p;
                return g == null
                  ? !1
                  : (0, i.default)(v).call(
                      v,
                      (p = g.elems[0]) === null || p === void 0 ? void 0 : p.nodeName,
                    ) !== -1;
              }),
              (f.prototype.tryChangeActive = function () {}),
              f
            );
          })(h.default);
        e.default = l;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(4));
        (0, o.default)(e, '__esModule', { value: !0 });
        var i = t(2),
          s = i.__importDefault(t(3)),
          h = i.__importDefault(t(23)),
          u = i.__importDefault(t(335)),
          d = i.__importDefault(t(336)),
          v = t(7),
          l = (function (c) {
            i.__extends(f, c);
            function f(g) {
              var p = this,
                m = s.default(`<div class="w-e-menu" data-title="引用">
                <i class="w-e-icon-quotes-left"></i>
            </div>`);
              return (p = c.call(this, m, g) || this), u.default(g), p;
            }
            return (
              (f.prototype.clickHandler = function () {
                var g,
                  p,
                  m = this.editor,
                  A = m.selection.isSelectionEmpty(),
                  y = m.selection.getSelectionRangeTopNodes(),
                  E = y[y.length - 1],
                  S = this.getTopNodeName();
                if (S === 'BLOCKQUOTE') {
                  var R = s.default(E.childNodes()),
                    P = R.length,
                    D = E;
                  (0, a.default)(R).call(R, function (N) {
                    var M = s.default(N);
                    M.insertAfter(D), (D = M);
                  }),
                    E.remove(),
                    m.selection.moveCursor(R.elems[P - 1]),
                    this.tryChangeActive();
                } else {
                  var x = d.default(y);
                  if (m.$textElem.equal(E)) {
                    var T =
                      (g = m.selection.getSelectionContainerElem()) === null || g === void 0
                        ? void 0
                        : g.elems[0];
                    m.selection.createRangeByElems(T.children[0], T.children[0]),
                      (y = m.selection.getSelectionRangeTopNodes()),
                      (x = d.default(y)),
                      E.append(x);
                  } else x.insertAfter(E);
                  this.delSelectNode(y);
                  var I =
                    (p = x.childNodes()) === null || p === void 0 ? void 0 : p.last().getNode();
                  if (I == null) return;
                  I.textContent ? m.selection.moveCursor(I) : m.selection.moveCursor(I, 0),
                    this.tryChangeActive(),
                    s.default(v.EMPTY_P).insertAfter(x);
                  return;
                }
                A && (m.selection.collapseRange(), m.selection.restoreSelection());
              }),
              (f.prototype.tryChangeActive = function () {
                var g,
                  p = this.editor,
                  m =
                    (g = p.selection.getSelectionRangeTopNodes()[0]) === null || g === void 0
                      ? void 0
                      : g.getNodeName();
                m === 'BLOCKQUOTE' ? this.active() : this.unActive();
              }),
              (f.prototype.getTopNodeName = function () {
                var g = this.editor,
                  p = g.selection.getSelectionRangeTopNodes()[0],
                  m = p == null ? void 0 : p.getNodeName();
                return m;
              }),
              (f.prototype.delSelectNode = function (g) {
                (0, a.default)(g).call(g, function (p) {
                  p.remove();
                });
              }),
              f
            );
          })(h.default);
        e.default = l;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 });
        var a = t(2),
          i = t(7),
          s = a.__importDefault(t(3));
        function h(u) {
          function d(v) {
            var l,
              c = u.selection.getSelectionContainerElem(),
              f = u.selection.getSelectionRangeTopNodes()[0];
            if ((f == null ? void 0 : f.getNodeName()) === 'BLOCKQUOTE') {
              if (c.getNodeName() === 'BLOCKQUOTE') {
                var g = (l = c.childNodes()) === null || l === void 0 ? void 0 : l.getNode();
                u.selection.moveCursor(g);
              }
              if (c.text() === '') {
                v.preventDefault(), c.remove();
                var p = s.default(i.EMPTY_P);
                p.insertAfter(f), u.selection.moveCursor(p.getNode(), 0);
              }
              f.text() === '' && f.remove();
            }
          }
          u.txt.eventHooks.enterDownEvents.push(d);
        }
        e.default = h;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(4));
        (0, o.default)(e, '__esModule', { value: !0 });
        var i = t(2),
          s = i.__importDefault(t(3));
        function h(u) {
          var d = s.default('<blockquote></blockquote>');
          return (
            (0, a.default)(u).call(u, function (v) {
              d.append(v.clone(!0));
            }),
            d
          );
        }
        e.default = h;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(26));
        (0, o.default)(e, '__esModule', { value: !0 });
        var i = t(2),
          s = i.__importDefault(t(24)),
          h = i.__importDefault(t(3)),
          u = t(6),
          d = (function (v) {
            i.__extends(l, v);
            function l(c) {
              var f,
                g = this,
                p = h.default(`<div class="w-e-menu" data-title="背景色">
                <i class="w-e-icon-paint-brush"></i>
            </div>`),
                m = {
                  width: 120,
                  title: '背景颜色',
                  type: 'inline-block',
                  list: (0, a.default)((f = c.config.colors)).call(f, function (A) {
                    return {
                      $elem: h.default(
                        '<i style="color:' + A + ';" class="w-e-icon-paint-brush"></i>',
                      ),
                      value: A,
                    };
                  }),
                  clickHandler: function (y) {
                    g.command(y);
                  },
                };
              return (g = v.call(this, p, c, m) || this), g;
            }
            return (
              (l.prototype.command = function (c) {
                var f,
                  g = this.editor,
                  p = g.selection.isSelectionEmpty(),
                  m =
                    (f = g.selection.getSelectionContainerElem()) === null || f === void 0
                      ? void 0
                      : f.elems[0];
                if (m != null) {
                  var A = (m == null ? void 0 : m.nodeName.toLowerCase()) !== 'p',
                    y = m == null ? void 0 : m.style.backgroundColor,
                    E = u.hexToRgb(c) === y;
                  if (p) {
                    if (A && !E) {
                      var S = g.selection.getSelectionRangeTopNodes();
                      g.selection.createRangeByElem(S[0]), g.selection.moveCursor(S[0].elems[0]);
                    }
                    g.selection.createEmptyRange();
                  }
                  g.cmd.do('backColor', c),
                    p && (g.selection.collapseRange(), g.selection.restoreSelection());
                }
              }),
              (l.prototype.tryChangeActive = function () {}),
              l
            );
          })(s.default);
        e.default = d;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(26));
        (0, o.default)(e, '__esModule', { value: !0 });
        var i = t(2),
          s = i.__importDefault(t(24)),
          h = i.__importDefault(t(3)),
          u = (function (d) {
            i.__extends(v, d);
            function v(l) {
              var c,
                f = this,
                g = h.default(`<div class="w-e-menu" data-title="文字颜色">
                <i class="w-e-icon-pencil2"></i>
            </div>`),
                p = {
                  width: 120,
                  title: '文字颜色',
                  type: 'inline-block',
                  list: (0, a.default)((c = l.config.colors)).call(c, function (m) {
                    return {
                      $elem: h.default('<i style="color:' + m + ';" class="w-e-icon-pencil2"></i>'),
                      value: m,
                    };
                  }),
                  clickHandler: function (A) {
                    f.command(A);
                  },
                };
              return (f = d.call(this, g, l, p) || this), f;
            }
            return (
              (v.prototype.command = function (l) {
                var c,
                  f = this.editor,
                  g = f.selection.isSelectionEmpty(),
                  p =
                    (c = f.selection.getSelectionContainerElem()) === null || c === void 0
                      ? void 0
                      : c.elems[0];
                if (p != null) {
                  var m = f.selection.getSelectionText();
                  if (p.nodeName === 'A' && p.textContent === m) {
                    var A = h.default('<span>&#8203;</span>').getNode();
                    p.appendChild(A);
                  }
                  f.cmd.do('foreColor', l),
                    g && (f.selection.collapseRange(), f.selection.restoreSelection());
                }
              }),
              (v.prototype.tryChangeActive = function () {}),
              v
            );
          })(s.default);
        e.default = u;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(3)),
          s = a.__importDefault(t(33)),
          h = a.__importDefault(t(38)),
          u = a.__importDefault(t(340)),
          d = a.__importDefault(t(346)),
          v = (function (l) {
            a.__extends(c, l);
            function c(f) {
              var g = this,
                p = i.default(`<div class="w-e-menu" data-title="视频">
                <i class="w-e-icon-play"></i>
            </div>`);
              return (g = l.call(this, p, f) || this), d.default(f), g;
            }
            return (
              (c.prototype.clickHandler = function () {
                this.createPanel('');
              }),
              (c.prototype.createPanel = function (f) {
                var g = u.default(this.editor, f),
                  p = new s.default(this, g);
                p.create();
              }),
              (c.prototype.tryChangeActive = function () {}),
              c
            );
          })(h.default);
        e.default = v;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(17));
        (0, o.default)(e, '__esModule', { value: !0 });
        var i = t(2),
          s = t(6),
          h = i.__importDefault(t(3)),
          u = i.__importDefault(t(341)),
          d = t(7);
        function v(l, c) {
          var f = l.config,
            g = new u.default(l),
            p = s.getRandom('input-iframe'),
            m = s.getRandom('btn-ok'),
            A = s.getRandom('input-upload'),
            y = s.getRandom('btn-local-ok');
          function E(D) {
            l.cmd.do('insertHTML', D + d.EMPTY_P), l.config.onlineVideoCallback(D);
          }
          function S(D) {
            var x = l.config.onlineVideoCheck(D);
            return x === !0 ? !0 : (typeof x == 'string' && l.config.customAlert(x, 'error'), !1);
          }
          var R = [
              {
                title: l.i18next.t('menus.panelMenus.video.上传视频'),
                tpl:
                  `<div class="w-e-up-video-container">
                    <div id="` +
                  y +
                  `" class="w-e-up-btn">
                        <i class="w-e-icon-upload2"></i>
                    </div>
                    <div style="display:none;">
                        <input id="` +
                  A +
                  `" type="file" accept="video/*"/>
                    </div>
                 </div>`,
                events: [
                  {
                    selector: '#' + y,
                    type: 'click',
                    fn: function () {
                      var x = h.default('#' + A),
                        T = x.elems[0];
                      if (T) T.click();
                      else return !0;
                    },
                  },
                  {
                    selector: '#' + A,
                    type: 'change',
                    fn: function () {
                      var x = h.default('#' + A),
                        T = x.elems[0];
                      if (!T) return !0;
                      var I = T.files;
                      return I.length && g.uploadVideo(I), !0;
                    },
                  },
                ],
              },
              {
                title: l.i18next.t('menus.panelMenus.video.插入视频'),
                tpl:
                  `<div>
                    <input 
                        id="` +
                  p +
                  `" 
                        type="text" 
                        class="block" 
                        placeholder="` +
                  l.i18next.t('如') +
                  `：<iframe src=... ></iframe>"/>
                    </td>
                    <div class="w-e-button-container">
                        <button type="button" id="` +
                  m +
                  `" class="right">
                            ` +
                  l.i18next.t('插入') +
                  `
                        </button>
                    </div>
                </div>`,
                events: [
                  {
                    selector: '#' + m,
                    type: 'click',
                    fn: function () {
                      var x,
                        T = h.default('#' + p),
                        I = (0, a.default)((x = T.val())).call(x);
                      if (I && S(I)) return E(I), !0;
                    },
                    bindEnter: !0,
                  },
                ],
              },
            ],
            P = { width: 300, height: 0, tabs: [] };
          return (
            window.FileReader && (f.uploadVideoServer || f.customUploadVideo) && P.tabs.push(R[0]),
            f.showLinkVideo && P.tabs.push(R[1]),
            P
          );
        }
        e.default = v;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(133)),
          i = n(t(57)),
          s = n(t(4)),
          h = n(t(27));
        (0, o.default)(e, '__esModule', { value: !0 });
        var u = t(2),
          d = t(6),
          v = u.__importDefault(t(135)),
          l = u.__importDefault(t(136)),
          c = t(7),
          f = t(6),
          g = (function () {
            function p(m) {
              this.editor = m;
            }
            return (
              (p.prototype.uploadVideo = function (m) {
                var A = this;
                if (m.length) {
                  var y = this.editor,
                    E = y.config,
                    S = 'validate.',
                    R = function (J) {
                      return y.i18next.t(S + J);
                    },
                    P = E.uploadVideoServer,
                    D = E.uploadVideoMaxSize,
                    x = D / 1024,
                    T = E.uploadVideoName,
                    I = E.uploadVideoParams,
                    N = E.uploadVideoParamsWithUrl,
                    M = E.uploadVideoHeaders,
                    L = E.uploadVideoHooks,
                    O = E.uploadVideoTimeout,
                    B = E.withVideoCredentials,
                    w = E.customUploadVideo,
                    H = E.uploadVideoAccept,
                    b = [],
                    U = [];
                  if (
                    (d.arrForEach(m, function (V) {
                      var J = V.name,
                        k = V.size / 1024 / 1024;
                      if (!(!J || !k)) {
                        if (!(H instanceof Array)) {
                          U.push('【' + H + '】' + R('uploadVideoAccept 不是Array'));
                          return;
                        }
                        if (
                          !(0, a.default)(H).call(H, function (rt) {
                            return rt === J.split('.')[J.split('.').length - 1];
                          })
                        ) {
                          U.push('【' + J + '】' + R('不是视频'));
                          return;
                        }
                        if (x < k) {
                          U.push('【' + J + '】' + R('大于') + ' ' + x + 'M');
                          return;
                        }
                        b.push(V);
                      }
                    }),
                    U.length)
                  ) {
                    E.customAlert(
                      R('视频验证未通过') +
                        `: 
` +
                        U.join(`
`),
                      'warning',
                    );
                    return;
                  }
                  if (b.length === 0) {
                    E.customAlert(R('传入的文件不合法'), 'warning');
                    return;
                  }
                  if (w && typeof w == 'function') {
                    var K;
                    w(b, (0, i.default)((K = this.insertVideo)).call(K, this));
                    return;
                  }
                  var j = new FormData();
                  if (
                    ((0, s.default)(b).call(b, function (V, J) {
                      var k = T || V.name;
                      b.length > 1 && (k = k + (J + 1)), j.append(k, V);
                    }),
                    P)
                  ) {
                    var W = P.split('#');
                    P = W[0];
                    var G = W[1] || '';
                    (0, s.default)(d).call(d, I, function (V, J) {
                      N &&
                        ((0, h.default)(P).call(P, '?') > 0 ? (P += '&') : (P += '?'),
                        (P = P + V + '=' + J)),
                        j.append(V, J);
                    }),
                      G && (P += '#' + G);
                    var $ = v.default(P, {
                      timeout: O,
                      formData: j,
                      headers: M,
                      withCredentials: !!B,
                      beforeSend: function (J) {
                        if (L.before) return L.before(J, y, b);
                      },
                      onTimeout: function (J) {
                        E.customAlert(R('上传视频超时'), 'error'), L.timeout && L.timeout(J, y);
                      },
                      onProgress: function (J, k) {
                        var rt = new l.default(y);
                        k.lengthComputable && ((J = k.loaded / k.total), rt.show(J));
                      },
                      onError: function (J) {
                        E.customAlert(
                          R('上传视频错误'),
                          'error',
                          R('上传视频错误') + '，' + R('服务器返回状态') + ': ' + J.status,
                        ),
                          L.error && L.error(J, y);
                      },
                      onFail: function (J, k) {
                        E.customAlert(
                          R('上传视频失败'),
                          'error',
                          R('上传视频返回结果错误') + ('，' + R('返回结果') + ': ') + k,
                        ),
                          L.fail && L.fail(J, y, k);
                      },
                      onSuccess: function (J, k) {
                        if (L.customInsert) {
                          var rt;
                          L.customInsert((0, i.default)((rt = A.insertVideo)).call(rt, A), k, y);
                          return;
                        }
                        if (k.errno != '0') {
                          E.customAlert(
                            R('上传视频失败'),
                            'error',
                            R('上传视频返回结果错误') + '，' + R('返回结果') + ' errno=' + k.errno,
                          ),
                            L.fail && L.fail(J, y, k);
                          return;
                        }
                        var ot = k.data;
                        A.insertVideo(ot.url), L.success && L.success(J, y, k);
                      },
                    });
                    typeof $ == 'string' && E.customAlert($, 'error');
                  }
                }
              }),
              (p.prototype.insertVideo = function (m) {
                var A = this.editor,
                  y = A.config,
                  E = 'validate.',
                  S = function (D, x) {
                    return x === void 0 && (x = E), A.i18next.t(x + D);
                  };
                if (!y.customInsertVideo)
                  f.UA.isFirefox
                    ? A.cmd.do(
                        'insertHTML',
                        '<p data-we-video-p="true"><video src="' +
                          m +
                          '" controls="controls" style="max-width:100%"></video></p><p>&#8203</p>',
                      )
                    : A.cmd.do(
                        'insertHTML',
                        '<video src="' +
                          m +
                          '" controls="controls" style="max-width:100%"></video>' +
                          c.EMPTY_P,
                      );
                else {
                  y.customInsertVideo(m);
                  return;
                }
                var R = document.createElement('video');
                (R.onload = function () {
                  R = null;
                }),
                  (R.onerror = function () {
                    y.customAlert(
                      S('插入视频错误'),
                      'error',
                      'wangEditor: ' +
                        S('插入视频错误') +
                        '，' +
                        S('视频链接') +
                        ' "' +
                        m +
                        '"，' +
                        S('下载链接失败'),
                    ),
                      (R = null);
                  }),
                  (R.onabort = function () {
                    return (R = null);
                  }),
                  (R.src = m);
              }),
              p
            );
          })();
        e.default = g;
      },
      function (r, e, t) {
        r.exports = t(343);
      },
      function (r, e, t) {
        var n = t(344);
        r.exports = n;
      },
      function (r, e, t) {
        t(345);
        var n = t(9);
        r.exports = n.Date.now;
      },
      function (r, e, t) {
        var n = t(5);
        n(
          { target: 'Date', stat: !0 },
          {
            now: function () {
              return new Date().getTime();
            },
          },
        );
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(347)),
          s = a.__importDefault(t(349));
        function h(u) {
          i.default(u), s.default(u);
        }
        e.default = h;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 }), (e.createShowHideFn = void 0);
        var a = t(2),
          i = a.__importDefault(t(3)),
          s = a.__importDefault(t(39)),
          h = a.__importDefault(t(348));
        function u(v) {
          var l,
            c = function (m, A) {
              return A === void 0 && (A = ''), v.i18next.t(A + m);
            };
          function f(p) {
            var m = [
              {
                $elem: i.default("<span class='w-e-icon-trash-o'></span>"),
                onClick: function (y, E) {
                  return E.remove(), !0;
                },
              },
              {
                $elem: i.default('<span>100%</span>'),
                onClick: function (y, E) {
                  return E.attr('width', '100%'), E.removeAttr('height'), !0;
                },
              },
              {
                $elem: i.default('<span>50%</span>'),
                onClick: function (y, E) {
                  return E.attr('width', '50%'), E.removeAttr('height'), !0;
                },
              },
              {
                $elem: i.default('<span>30%</span>'),
                onClick: function (y, E) {
                  return E.attr('width', '30%'), E.removeAttr('height'), !0;
                },
              },
              {
                $elem: i.default('<span>' + c('重置') + '</span>'),
                onClick: function (y, E) {
                  return E.removeAttr('width'), E.removeAttr('height'), !0;
                },
              },
              {
                $elem: i.default('<span>' + c('menus.justify.靠左') + '</span>'),
                onClick: function (y, E) {
                  return h.default(E, 'left'), !0;
                },
              },
              {
                $elem: i.default('<span>' + c('menus.justify.居中') + '</span>'),
                onClick: function (y, E) {
                  return h.default(E, 'center'), !0;
                },
              },
              {
                $elem: i.default('<span>' + c('menus.justify.靠右') + '</span>'),
                onClick: function (y, E) {
                  return h.default(E, 'right'), !0;
                },
              },
            ];
            (l = new s.default(v, p, m)), l.create();
          }
          function g() {
            l && (l.remove(), (l = null));
          }
          return { showVideoTooltip: f, hideVideoTooltip: g };
        }
        e.createShowHideFn = u;
        function d(v) {
          var l = u(v),
            c = l.showVideoTooltip,
            f = l.hideVideoTooltip;
          v.txt.eventHooks.videoClickEvents.push(c),
            v.txt.eventHooks.clickEvents.push(f),
            v.txt.eventHooks.keyupEvents.push(f),
            v.txt.eventHooks.toolbarClickEvents.push(f),
            v.txt.eventHooks.menuClickEvents.push(f),
            v.txt.eventHooks.textScrollEvents.push(f),
            v.txt.eventHooks.changeEvents.push(f);
        }
        e.default = d;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(28));
        (0, o.default)(e, '__esModule', { value: !0 });
        var i = t(2),
          s = i.__importDefault(t(3));
        function h(d, v) {
          var l = ['P'],
            c = u(d, l);
          c && s.default(c).css('text-align', v);
        }
        e.default = h;
        function u(d, v) {
          for (var l, c = d.elems[0]; c != null; ) {
            if ((0, a.default)(v).call(v, c == null ? void 0 : c.nodeName)) return c;
            if (
              ((l = c == null ? void 0 : c.parentNode) === null || l === void 0
                ? void 0
                : l.nodeName) === 'BODY'
            )
              return null;
            c = c.parentNode;
          }
          return c;
        }
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 });
        var a = t(6);
        function i(s) {
          if (a.UA.isFirefox) {
            var h = s.txt,
              u = s.selection,
              d = h.eventHooks.keydownEvents;
            d.push(function (v) {
              var l = u.getSelectionContainerElem();
              if (l) {
                var c = l.getNodeTop(s),
                  f = c.length && c.prev().length ? c.prev() : null;
                f &&
                  f.attr('data-we-video-p') &&
                  u.getCursorPos() === 0 &&
                  v.keyCode === 8 &&
                  f.remove();
              }
            });
          }
        }
        e.default = i;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(26));
        (0, o.default)(e, '__esModule', { value: !0 });
        var i = t(2),
          s = t(7),
          h = i.__importDefault(t(3)),
          u = i.__importDefault(t(33)),
          d = i.__importDefault(t(38)),
          v = i.__importDefault(t(351)),
          l = i.__importDefault(t(364)),
          c = (function (f) {
            i.__extends(g, f);
            function g(p) {
              var m = this,
                A = h.default(
                  '<div class="w-e-menu" data-title="图片"><i class="w-e-icon-image"></i></div>',
                ),
                y = l.default(p);
              if (y.onlyUploadConf) {
                var E;
                (A = y.onlyUploadConf.$elem),
                  (0, a.default)((E = y.onlyUploadConf.events)).call(E, function (S) {
                    var R = S.type,
                      P = S.fn || s.EMPTY_FN;
                    A.on(R, function (D) {
                      D.stopPropagation(), P(D);
                    });
                  });
              }
              return (m = f.call(this, A, p) || this), (m.imgPanelConfig = y), v.default(p), m;
            }
            return (
              (g.prototype.clickHandler = function () {
                this.imgPanelConfig.onlyUploadConf || this.createPanel();
              }),
              (g.prototype.createPanel = function () {
                var p = this.imgPanelConfig,
                  m = new u.default(this, p);
                this.setPanel(m), m.create();
              }),
              (g.prototype.tryChangeActive = function () {}),
              g
            );
          })(d.default);
        e.default = c;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(352)),
          s = a.__importDefault(t(353)),
          h = a.__importDefault(t(354)),
          u = a.__importDefault(t(362)),
          d = a.__importDefault(t(363));
        function v(l) {
          i.default(l), s.default(l), h.default(l), u.default(l), d.default(l);
        }
        e.default = v;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 });
        var a = t(2),
          i = t(131),
          s = a.__importDefault(t(97));
        function h(l, c) {
          var f = l.config,
            g = f.pasteFilterStyle,
            p = f.pasteIgnoreImg,
            m = i.getPasteHtml(c, g, p);
          if (m) return !0;
          var A = i.getPasteText(c);
          return !!A;
        }
        function u(l, c) {
          for (
            var f,
              g = ((f = c.clipboardData) === null || f === void 0 ? void 0 : f.types) || [],
              p = 0;
            p < g.length;
            p++
          ) {
            var m = g[p];
            if (m === 'Files') return !0;
          }
          return !1;
        }
        function d(l, c) {
          if (!(!u(c, l) && h(c, l))) {
            var f = i.getPasteImgs(l);
            if (f.length) {
              var g = new s.default(c);
              g.uploadImg(f);
            }
          }
        }
        function v(l) {
          l.txt.eventHooks.pasteEvents.unshift(function (c) {
            d(c, l);
          });
        }
        e.default = v;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(97));
        function s(h) {
          function u(d) {
            var v = d.dataTransfer && d.dataTransfer.files;
            if (!(!v || !v.length)) {
              var l = new i.default(h);
              l.uploadImg(v);
            }
          }
          h.txt.eventHooks.dropEvents.push(u);
        }
        e.default = s;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(29)),
          i = n(t(355));
        (0, o.default)(e, '__esModule', { value: !0 }), (e.createShowHideFn = void 0);
        var s = t(2),
          h = s.__importDefault(t(3));
        t(360);
        var u = t(6);
        function d(g, p, m, A, y) {
          g.attr(
            'style',
            'width:' + p + 'px; height:' + m + 'px; left:' + A + 'px; top:' + y + 'px;',
          );
        }
        function v(g, p) {
          var m = h.default(`<div class="w-e-img-drag-mask">
            <div class="w-e-img-drag-show-size"></div>
            <div class="w-e-img-drag-rb"></div>
         </div>`);
          return m.hide(), p.append(m), m;
        }
        function l(g, p, m) {
          var A = g.getBoundingClientRect(),
            y = m.getBoundingClientRect(),
            E = y.width.toFixed(2),
            S = y.height.toFixed(2);
          (0, a.default)(p)
            .call(p, '.w-e-img-drag-show-size')
            .text(E + 'px * ' + S + 'px'),
            d(p, (0, i.default)(E), (0, i.default)(S), y.left - A.left, y.top - A.top),
            p.show();
        }
        function c(g) {
          var p = g.$textContainerElem,
            m,
            A = v(g, p);
          function y(R, P) {
            R.on('click', function (D) {
              D.stopPropagation();
            }),
              R.on('mousedown', '.w-e-img-drag-rb', function (D) {
                if ((D.preventDefault(), !m)) return;
                var x = D.clientX,
                  T = D.clientY,
                  I = P.getBoundingClientRect(),
                  N = m.getBoundingClientRect(),
                  M = N.width,
                  L = N.height,
                  O = N.left - I.left,
                  B = N.top - I.top,
                  w = M / L,
                  H = M,
                  b = L,
                  U = h.default(document);
                function K() {
                  U.off('mousemove', j), U.off('mouseup', W);
                }
                function j(G) {
                  G.stopPropagation(),
                    G.preventDefault(),
                    (H = M + (G.clientX - x)),
                    (b = L + (G.clientY - T)),
                    H / b != w && (b = H / w),
                    (H = (0, i.default)(H.toFixed(2))),
                    (b = (0, i.default)(b.toFixed(2))),
                    (0, a.default)(R)
                      .call(R, '.w-e-img-drag-show-size')
                      .text(
                        H.toFixed(2).replace('.00', '') +
                          'px * ' +
                          b.toFixed(2).replace('.00', '') +
                          'px',
                      ),
                    d(R, H, b, O, B);
                }
                U.on('mousemove', j);
                function W() {
                  m.attr('width', H + ''), m.attr('height', b + '');
                  var G = m.getBoundingClientRect();
                  d(R, H, b, G.left - I.left, G.top - I.top), K();
                }
                U.on('mouseup', W), U.on('mouseleave', K);
              });
          }
          function E(R) {
            if (u.UA.isIE()) return !1;
            R && ((m = R), l(p, A, m));
          }
          function S() {
            (0, a.default)(p).call(p, '.w-e-img-drag-mask').hide();
          }
          return (
            y(A, p),
            h.default(document).on('click', S),
            g.beforeDestroy(function () {
              h.default(document).off('click', S);
            }),
            { showDrag: E, hideDrag: S }
          );
        }
        e.createShowHideFn = c;
        function f(g) {
          var p = c(g),
            m = p.showDrag,
            A = p.hideDrag;
          g.txt.eventHooks.imgClickEvents.push(m),
            g.txt.eventHooks.textScrollEvents.push(A),
            g.txt.eventHooks.keyupEvents.push(A),
            g.txt.eventHooks.toolbarClickEvents.push(A),
            g.txt.eventHooks.menuClickEvents.push(A),
            g.txt.eventHooks.changeEvents.push(A);
        }
        e.default = f;
      },
      function (r, e, t) {
        r.exports = t(356);
      },
      function (r, e, t) {
        var n = t(357);
        r.exports = n;
      },
      function (r, e, t) {
        t(358);
        var n = t(9);
        r.exports = n.parseFloat;
      },
      function (r, e, t) {
        var n = t(5),
          o = t(359);
        n({ global: !0, forced: parseFloat != o }, { parseFloat: o });
      },
      function (r, e, t) {
        var n = t(8),
          o = t(90).trim,
          a = t(68),
          i = n.parseFloat,
          s = 1 / i(a + '-0') !== -1 / 0;
        r.exports = s
          ? function (u) {
              var d = o(String(u)),
                v = i(d);
              return v === 0 && d.charAt(0) == '-' ? -0 : v;
            }
          : i;
      },
      function (r, e, t) {
        var n = t(20),
          o = t(361);
        (o = o.__esModule ? o.default : o), typeof o == 'string' && (o = [[r.i, o, '']]);
        var a = {};
        (a.insert = 'head'), (a.singleton = !1), n(o, a), (r.exports = o.locals || {});
      },
      function (r, e, t) {
        var n = t(21);
        (e = n(!1)),
          e.push([
            r.i,
            `.w-e-text-container {
  overflow: hidden;
}
.w-e-img-drag-mask {
  position: absolute;
  z-index: 1;
  border: 1px dashed #ccc;
  box-sizing: border-box;
}
.w-e-img-drag-mask .w-e-img-drag-rb {
  position: absolute;
  right: -5px;
  bottom: -5px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #ccc;
  cursor: se-resize;
}
.w-e-img-drag-mask .w-e-img-drag-show-size {
  min-width: 110px;
  height: 22px;
  line-height: 22px;
  font-size: 14px;
  color: #999;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #999;
  color: #fff;
  border-radius: 2px;
  padding: 0 5px;
}
`,
            '',
          ]),
          (r.exports = e);
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 }), (e.createShowHideFn = void 0);
        var a = t(2),
          i = a.__importDefault(t(3)),
          s = a.__importDefault(t(39));
        function h(d) {
          var v,
            l = function (p, m) {
              return m === void 0 && (m = ''), d.i18next.t(m + p);
            };
          function c(g) {
            var p = [
              {
                $elem: i.default("<span class='w-e-icon-trash-o'></span>"),
                onClick: function (A, y) {
                  return (
                    A.selection.createRangeByElem(y),
                    A.selection.restoreSelection(),
                    A.cmd.do('delete'),
                    !0
                  );
                },
              },
              {
                $elem: i.default('<span>30%</span>'),
                onClick: function (A, y) {
                  return y.attr('width', '30%'), y.removeAttr('height'), !0;
                },
              },
              {
                $elem: i.default('<span>50%</span>'),
                onClick: function (A, y) {
                  return y.attr('width', '50%'), y.removeAttr('height'), !0;
                },
              },
              {
                $elem: i.default('<span>100%</span>'),
                onClick: function (A, y) {
                  return y.attr('width', '100%'), y.removeAttr('height'), !0;
                },
              },
            ];
            p.push({
              $elem: i.default('<span>' + l('重置') + '</span>'),
              onClick: function (A, y) {
                return y.removeAttr('width'), y.removeAttr('height'), !0;
              },
            }),
              g.attr('data-href') &&
                p.push({
                  $elem: i.default('<span>' + l('查看链接') + '</span>'),
                  onClick: function (A, y) {
                    var E = y.attr('data-href');
                    return E && ((E = decodeURIComponent(E)), window.open(E, '_target')), !0;
                  },
                }),
              (v = new s.default(d, g, p)),
              v.create();
          }
          function f() {
            v && (v.remove(), (v = null));
          }
          return { showImgTooltip: c, hideImgTooltip: f };
        }
        e.createShowHideFn = h;
        function u(d) {
          var v = h(d),
            l = v.showImgTooltip,
            c = v.hideImgTooltip;
          d.txt.eventHooks.imgClickEvents.push(l),
            d.txt.eventHooks.clickEvents.push(c),
            d.txt.eventHooks.keyupEvents.push(c),
            d.txt.eventHooks.toolbarClickEvents.push(c),
            d.txt.eventHooks.menuClickEvents.push(c),
            d.txt.eventHooks.textScrollEvents.push(c),
            d.txt.eventHooks.imgDragBarMouseDownEvents.push(c),
            d.txt.eventHooks.changeEvents.push(c);
        }
        e.default = u;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 });
        function a(i) {
          var s = i.txt,
            h = i.selection,
            u = s.eventHooks.keydownEvents;
          u.push(function (d) {
            var v = h.getSelectionContainerElem(),
              l = h.getRange();
            if (!(!l || !v || d.keyCode !== 8 || !h.isSelectionEmpty())) {
              var c = l.startContainer,
                f = l.startOffset,
                g = null;
              if (f === 0)
                for (; c !== v.elems[0] && v.elems[0].contains(c) && c.parentNode && !g; ) {
                  if (c.previousSibling) {
                    g = c.previousSibling;
                    break;
                  }
                  c = c.parentNode;
                }
              else c.nodeType !== 3 && (g = c.childNodes[f - 1]);
              if (g) {
                for (var p = g; p.childNodes.length; ) p = p.childNodes[p.childNodes.length - 1];
                p instanceof HTMLElement && p.tagName === 'IMG' && (p.remove(), d.preventDefault());
              }
            }
          });
        }
        e.default = a;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(26)),
          i = n(t(17));
        (0, o.default)(e, '__esModule', { value: !0 });
        var s = t(2),
          h = s.__importDefault(t(3)),
          u = t(6),
          d = s.__importDefault(t(97));
        function v(l) {
          var c,
            f = l.config,
            g = new d.default(l),
            p = u.getRandom('up-trigger-id'),
            m = u.getRandom('up-file-id'),
            A = u.getRandom('input-link-url'),
            y = u.getRandom('input-link-url-alt'),
            E = u.getRandom('input-link-url-href'),
            S = u.getRandom('btn-link'),
            R = 'menus.panelMenus.image.',
            P = function (w, H) {
              return H === void 0 && (H = R), l.i18next.t(H + w);
            };
          function D(B, w, H) {
            var b = f.linkImgCheck(B);
            return b === !0 ? !0 : (typeof b == 'string' && f.customAlert(b, 'error'), !1);
          }
          var x = f.uploadImgMaxLength === 1 ? '' : 'multiple="multiple"',
            T = (0, a.default)((c = f.uploadImgAccept))
              .call(c, function (B) {
                return 'image/' + B;
              })
              .join(','),
            I = function (w, H, b) {
              return (
                '<div class="' +
                w +
                '" data-title="' +
                b +
                `">
            <div id="` +
                p +
                `" class="w-e-up-btn">
                <i class="` +
                H +
                `"></i>
            </div>
            <div style="display:none;">
                <input id="` +
                m +
                '" type="file" ' +
                x +
                ' accept="' +
                T +
                `"/>
            </div>
        </div>`
              );
            },
            N = [
              {
                selector: '#' + p,
                type: 'click',
                fn: function () {
                  var w = f.uploadImgFromMedia;
                  if (w && typeof w == 'function') return w(), !0;
                  var H = h.default('#' + m),
                    b = H.elems[0];
                  if (b) b.click();
                  else return !0;
                },
              },
              {
                selector: '#' + m,
                type: 'change',
                fn: function () {
                  var w = h.default('#' + m),
                    H = w.elems[0];
                  if (!H) return !0;
                  var b = H.files;
                  return b != null && b.length && g.uploadImg(b), H && (H.value = ''), !0;
                },
              },
            ],
            M = [
              `<input
            id="` +
                A +
                `"
            type="text"
            class="block"
            placeholder="` +
                P('图片地址') +
                '"/>',
            ];
          f.showLinkImgAlt &&
            M.push(
              `
        <input
            id="` +
                y +
                `"
            type="text"
            class="block"
            placeholder="` +
                P('图片文字说明') +
                '"/>',
            ),
            f.showLinkImgHref &&
              M.push(
                `
        <input
            id="` +
                  E +
                  `"
            type="text"
            class="block"
            placeholder="` +
                  P('跳转链接') +
                  '"/>',
              );
          var L = [
              {
                title: P('上传图片'),
                tpl: I('w-e-up-img-container', 'w-e-icon-upload2', ''),
                events: N,
              },
              {
                title: P('网络图片'),
                tpl:
                  `<div>
                    ` +
                  M.join('') +
                  `
                    <div class="w-e-button-container">
                        <button type="button" id="` +
                  S +
                  '" class="right">' +
                  P('插入', '') +
                  `</button>
                    </div>
                </div>`,
                events: [
                  {
                    selector: '#' + S,
                    type: 'click',
                    fn: function () {
                      var w,
                        H = h.default('#' + A),
                        b = (0, i.default)((w = H.val())).call(w);
                      if (b) {
                        var U;
                        if (f.showLinkImgAlt) {
                          var K;
                          U = (0, i.default)((K = h.default('#' + y).val())).call(K);
                        }
                        var j;
                        if (f.showLinkImgHref) {
                          var W;
                          j = (0, i.default)((W = h.default('#' + E).val())).call(W);
                        }
                        if (D(b)) return g.insertImg(b, U, j), !0;
                      }
                    },
                    bindEnter: !0,
                  },
                ],
              },
            ],
            O = {
              width: 300,
              height: 0,
              tabs: [],
              onlyUploadConf: {
                $elem: h.default(I('w-e-menu', 'w-e-icon-image', '图片')),
                events: N,
              },
            };
          return (
            window.FileReader &&
              (f.uploadImgShowBase64 ||
                f.uploadImgServer ||
                f.customUploadImg ||
                f.uploadImgFromMedia) &&
              O.tabs.push(L[0]),
            f.showLinkImg && (O.tabs.push(L[1]), (O.onlyUploadConf = void 0)),
            O
          );
        }
        e.default = v;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(4));
        (0, o.default)(e, '__esModule', { value: !0 });
        var i = t(2),
          s = i.__importDefault(t(3)),
          h = i.__importDefault(t(24)),
          u = i.__importDefault(t(366)),
          d = (function (v) {
            i.__extends(l, v);
            function l(c) {
              var f = this,
                g = s.default(`<div class="w-e-menu" data-title="缩进">
                <i class="w-e-icon-indent-increase"></i>
            </div>`),
                p = {
                  width: 130,
                  title: '设置缩进',
                  type: 'list',
                  list: [
                    {
                      $elem: s.default(
                        `<p>
                            <i class="w-e-icon-indent-increase w-e-drop-list-item"></i>
                            ` +
                          c.i18next.t('menus.dropListMenu.indent.增加缩进') +
                          `
                        <p>`,
                      ),
                      value: 'increase',
                    },
                    {
                      $elem: s.default(
                        `<p>
                            <i class="w-e-icon-indent-decrease w-e-drop-list-item"></i>
                            ` +
                          c.i18next.t('menus.dropListMenu.indent.减少缩进') +
                          `
                        <p>`,
                      ),
                      value: 'decrease',
                    },
                  ],
                  clickHandler: function (A) {
                    f.command(A);
                  },
                };
              return (f = v.call(this, g, c, p) || this), f;
            }
            return (
              (l.prototype.command = function (c) {
                var f = this.editor,
                  g = f.selection.getSelectionContainerElem();
                if (g && f.$textElem.equal(g)) {
                  var p = f.selection.getSelectionRangeTopNodes();
                  p.length > 0 &&
                    (0, a.default)(p).call(p, function (m) {
                      u.default(s.default(m), c, f);
                    });
                } else
                  g &&
                    g.length > 0 &&
                    (0, a.default)(g).call(g, function (m) {
                      u.default(s.default(m), c, f);
                    });
                f.selection.restoreSelection(), this.tryChangeActive();
              }),
              (l.prototype.tryChangeActive = function () {
                var c = this.editor,
                  f = c.selection.getSelectionStartElem(),
                  g = s.default(f).getNodeTop(c);
                g.length <= 0 ||
                  (g.elems[0].style.paddingLeft != '' ? this.active() : this.unActive());
              }),
              l
            );
          })(h.default);
        e.default = d;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(45)),
          i = n(t(17));
        (0, o.default)(e, '__esModule', { value: !0 });
        var s = t(2),
          h = s.__importDefault(t(367)),
          u = s.__importDefault(t(368)),
          d = /^(\d+)(\w+)$/,
          v = /^(\d+)%$/;
        function l(f) {
          var g = f.config.indentation;
          if (typeof g == 'string') {
            if (d.test(g)) {
              var p,
                m = (0, a.default)((p = (0, i.default)(g).call(g).match(d))).call(p, 1, 3),
                A = m[0],
                y = m[1];
              return { value: Number(A), unit: y };
            } else if (v.test(g))
              return { value: Number((0, i.default)(g).call(g).match(v)[1]), unit: '%' };
          } else if (g.value !== void 0 && g.unit) return g;
          return { value: 2, unit: 'em' };
        }
        function c(f, g, p) {
          var m = f.getNodeTop(p),
            A = /^(P|H[0-9]*)$/;
          A.test(m.getNodeName()) &&
            (g === 'increase' ? h.default(m, l(p)) : g === 'decrease' && u.default(m, l(p)));
        }
        e.default = c;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(45));
        (0, o.default)(e, '__esModule', { value: !0 });
        function i(s, h) {
          var u = s.elems[0];
          if (u.style.paddingLeft === '') s.css('padding-left', h.value + h.unit);
          else {
            var d = u.style.paddingLeft,
              v = (0, a.default)(d).call(d, 0, d.length - h.unit.length),
              l = Number(v) + h.value;
            s.css('padding-left', '' + l + h.unit);
          }
        }
        e.default = i;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(45));
        (0, o.default)(e, '__esModule', { value: !0 });
        function i(s, h) {
          var u = s.elems[0];
          if (u.style.paddingLeft !== '') {
            var d = u.style.paddingLeft,
              v = (0, a.default)(d).call(d, 0, d.length - h.unit.length),
              l = Number(v) - h.value;
            l > 0 ? s.css('padding-left', '' + l + h.unit) : s.css('padding-left', '');
          }
        }
        e.default = i;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(3)),
          s = a.__importDefault(t(38)),
          h = a.__importDefault(t(33)),
          u = a.__importDefault(t(370)),
          d = (function (v) {
            a.__extends(l, v);
            function l(c) {
              var f = this,
                g = i.default(`<div class="w-e-menu" data-title="表情">
                <i class="w-e-icon-happy"></i>
            </div>`);
              return (f = v.call(this, g, c) || this), f;
            }
            return (
              (l.prototype.createPanel = function () {
                var c = u.default(this.editor),
                  f = new h.default(this, c);
                f.create();
              }),
              (l.prototype.clickHandler = function () {
                this.createPanel();
              }),
              (l.prototype.tryChangeActive = function () {}),
              l
            );
          })(s.default);
        e.default = d;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(26)),
          i = n(t(70)),
          s = n(t(17));
        (0, o.default)(e, '__esModule', { value: !0 });
        var h = t(2),
          u = h.__importDefault(t(3));
        function d(v) {
          var l = v.config.emotions;
          function c(p) {
            var m = [];
            if (p.type == 'image') {
              var A;
              (m = (0, a.default)((A = p.content)).call(A, function (E) {
                return typeof E == 'string'
                  ? ''
                  : '<span  title="' +
                      E.alt +
                      `">
                    <img class="eleImg" data-emoji="` +
                      E.alt +
                      '" style src="' +
                      E.src +
                      '" alt="[' +
                      E.alt +
                      `]">
                </span>`;
              })),
                (m = (0, i.default)(m).call(m, function (E) {
                  return E !== '';
                }));
            } else {
              var y;
              m = (0, a.default)((y = p.content)).call(y, function (E) {
                return '<span class="eleImg" title="' + E + '">' + E + '</span>';
              });
            }
            return m.join('').replace(/&nbsp;/g, '');
          }
          var f = (0, a.default)(l).call(l, function (p) {
              return {
                title: v.i18next.t('menus.panelMenus.emoticon.' + p.title),
                tpl: '<div>' + c(p) + '</div>',
                events: [
                  {
                    selector: '.eleImg',
                    type: 'click',
                    fn: function (A) {
                      var y = u.default(A.target),
                        E = y.getNodeName(),
                        S;
                      if (E === 'IMG') {
                        var R;
                        S = (0, s.default)((R = y.parent().html())).call(R);
                      } else S = '<span>' + y.html() + '</span>';
                      return v.cmd.do('insertHTML', S), !0;
                    },
                  },
                ],
              };
            }),
            g = { width: 300, height: 230, tabs: f };
          return g;
        }
        e.default = d;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 }), (e.createListHandle = e.ClassType = void 0);
        var a = t(2),
          i = a.__importDefault(t(3)),
          s = a.__importDefault(t(372)),
          h = a.__importDefault(t(374)),
          u = a.__importDefault(t(375)),
          d = a.__importDefault(t(376)),
          v = a.__importDefault(t(377)),
          l;
        (function (p) {
          (p.Wrap = 'WrapListHandle'),
            (p.Join = 'JoinListHandle'),
            (p.StartJoin = 'StartJoinListHandle'),
            (p.EndJoin = 'EndJoinListHandle'),
            (p.Other = 'OtherListHandle');
        })((l = e.ClassType || (e.ClassType = {})));
        var c = {
          WrapListHandle: s.default,
          JoinListHandle: h.default,
          StartJoinListHandle: u.default,
          EndJoinListHandle: d.default,
          OtherListHandle: v.default,
        };
        function f(p, m, A) {
          if (p === l.Other && A === void 0) throw new Error('other 类需要传入 range');
          return p !== l.Other ? new c[p](m) : new c[p](m, A);
        }
        e.createListHandle = f;
        var g = (function () {
          function p(m) {
            (this.handle = m), this.handle.exec();
          }
          return (
            (p.prototype.getSelectionRangeElem = function () {
              return i.default(this.handle.selectionRangeElem.get());
            }),
            p
          );
        })();
        e.default = g;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(4));
        (0, o.default)(e, '__esModule', { value: !0 });
        var i = t(2),
          s = i.__importDefault(t(3)),
          h = t(58),
          u = t(47),
          d = (function (v) {
            i.__extends(l, v);
            function l(c) {
              return v.call(this, c) || this;
            }
            return (
              (l.prototype.exec = function () {
                var c = this.options,
                  f = c.listType,
                  g = c.listTarget,
                  p = c.$selectionElem,
                  m = c.$startElem,
                  A = c.$endElem,
                  y,
                  E = [],
                  S = p == null ? void 0 : p.getNodeName(),
                  R = m.prior,
                  P = A.prior;
                if (
                  (!m.prior && !A.prior) ||
                  (!(R != null && R.prev().length) && !(P != null && P.next().length))
                ) {
                  var D;
                  (0, a.default)((D = p == null ? void 0 : p.children())).call(D, function (O) {
                    E.push(s.default(O));
                  }),
                    S === f
                      ? (y = u.createElementFragment(E, u.createDocumentFragment(), 'p'))
                      : ((y = u.createElement(g)),
                        (0, a.default)(E).call(E, function (O) {
                          y.appendChild(O.elems[0]);
                        })),
                    this.selectionRangeElem.set(y),
                    u.insertBefore(p, y, p.elems[0]),
                    p.remove();
                } else {
                  for (var x = R; x.length; )
                    E.push(x), P != null && P.equal(x) ? (x = s.default(void 0)) : (x = x.next());
                  var T = R.prev(),
                    I = P.next();
                  if (
                    (S === f
                      ? (y = u.createElementFragment(E, u.createDocumentFragment(), 'p'))
                      : ((y = u.createElement(g)),
                        (0, a.default)(E).call(E, function (O) {
                          y.append(O.elems[0]);
                        })),
                    T.length && I.length)
                  ) {
                    for (var N = []; I.length; ) N.push(I), (I = I.next());
                    var M = u.createElement(S);
                    (0, a.default)(N).call(N, function (O) {
                      M.append(O.elems[0]);
                    }),
                      s.default(M).insertAfter(p),
                      this.selectionRangeElem.set(y);
                    var L = p.next();
                    L.length ? u.insertBefore(p, y, L.elems[0]) : p.parent().elems[0].append(y);
                  } else if (!T.length)
                    this.selectionRangeElem.set(y), u.insertBefore(p, y, p.elems[0]);
                  else {
                    this.selectionRangeElem.set(y);
                    var L = p.next();
                    L.length ? u.insertBefore(p, y, L.elems[0]) : p.parent().elems[0].append(y);
                  }
                }
              }),
              l
            );
          })(h.ListHandle);
        e.default = d;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(4));
        (0, o.default)(e, '__esModule', { value: !0 });
        var i = (function () {
          function s() {
            this._element = null;
          }
          return (
            (s.prototype.set = function (h) {
              if (h instanceof DocumentFragment) {
                var u,
                  d = [];
                (0, a.default)((u = h.childNodes)).call(u, function (v) {
                  d.push(v);
                }),
                  (h = d);
              }
              this._element = h;
            }),
            (s.prototype.get = function () {
              return this._element;
            }),
            (s.prototype.clear = function () {
              this._element = null;
            }),
            s
          );
        })();
        e.default = i;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(4));
        (0, o.default)(e, '__esModule', { value: !0 });
        var i = t(2),
          s = i.__importDefault(t(3)),
          h = t(58),
          u = t(47),
          d = (function (v) {
            i.__extends(l, v);
            function l(c) {
              return v.call(this, c) || this;
            }
            return (
              (l.prototype.exec = function () {
                var c,
                  f,
                  g,
                  p,
                  m,
                  A,
                  y,
                  E = this.options,
                  S = E.editor,
                  R = E.listType,
                  P = E.listTarget,
                  D = E.$startElem,
                  x = E.$endElem,
                  T,
                  I = S.selection.getSelectionRangeTopNodes(),
                  N = D == null ? void 0 : D.getNodeName(),
                  M = x == null ? void 0 : x.getNodeName();
                if (N === M)
                  if (I.length > 2)
                    if (
                      (I.shift(),
                      I.pop(),
                      (T = u.createElementFragment(
                        u.filterSelectionNodes(I),
                        u.createDocumentFragment(),
                      )),
                      N === R)
                    )
                      (c = x.children()) === null ||
                        c === void 0 ||
                        (0, a.default)(c).call(c, function (G) {
                          T.append(G);
                        }),
                        x.remove(),
                        this.selectionRangeElem.set(T),
                        D.elems[0].append(T);
                    else {
                      for (
                        var L = document.createDocumentFragment(),
                          O = document.createDocumentFragment(),
                          B = u.getStartPoint(D);
                        B.length;

                      ) {
                        var w = B.elems[0];
                        (B = B.next()), L.append(w);
                      }
                      for (var H = u.getEndPoint(x), b = []; H.length; )
                        b.unshift(H.elems[0]), (H = H.prev());
                      (0, a.default)(b).call(b, function (G) {
                        O.append(G);
                      });
                      var U = u.createElement(P);
                      U.append(L),
                        U.append(T),
                        U.append(O),
                        (T = U),
                        this.selectionRangeElem.set(T),
                        s.default(U).insertAfter(D),
                        !(!((f = D.children()) === null || f === void 0) && f.length) && D.remove(),
                        !(!((g = x.children()) === null || g === void 0) && g.length) && x.remove();
                    }
                  else {
                    I.length = 0;
                    for (var B = u.getStartPoint(D); B.length; ) I.push(B), (B = B.next());
                    for (var H = u.getEndPoint(x), b = []; H.length; ) b.unshift(H), (H = H.prev());
                    I.push.apply(I, b),
                      N === R
                        ? ((T = u.createElementFragment(I, u.createDocumentFragment(), 'p')),
                          this.selectionRangeElem.set(T),
                          u.insertBefore(D, T, x.elems[0]))
                        : ((T = u.createElement(P)),
                          (0, a.default)(I).call(I, function (J) {
                            T.append(J.elems[0]);
                          }),
                          this.selectionRangeElem.set(T),
                          s.default(T).insertAfter(D)),
                      !(!((p = D.children()) === null || p === void 0) && p.length) && x.remove(),
                      !(!((m = x.children()) === null || m === void 0) && m.length) && x.remove();
                  }
                else {
                  for (var K = [], H = u.getEndPoint(x); H.length; ) K.unshift(H), (H = H.prev());
                  for (var j = [], B = u.getStartPoint(D); B.length; ) j.push(B), (B = B.next());
                  if (
                    ((T = u.createDocumentFragment()),
                    I.shift(),
                    I.pop(),
                    (0, a.default)(j).call(j, function (V) {
                      return T.append(V.elems[0]);
                    }),
                    (T = u.createElementFragment(u.filterSelectionNodes(I), T)),
                    (0, a.default)(K).call(K, function (V) {
                      return T.append(V.elems[0]);
                    }),
                    this.selectionRangeElem.set(T),
                    N === R)
                  )
                    D.elems[0].append(T),
                      !(!((A = x.children()) === null || A === void 0) && A.length) && x.remove();
                  else if (!((y = x.children()) === null || y === void 0) && y.length) {
                    var W = x.children();
                    u.insertBefore(W, T, W.elems[0]);
                  } else x.elems[0].append(T);
                }
              }),
              l
            );
          })(h.ListHandle);
        e.default = d;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(4));
        (0, o.default)(e, '__esModule', { value: !0 });
        var i = t(2),
          s = i.__importDefault(t(3)),
          h = t(58),
          u = t(47),
          d = (function (v) {
            i.__extends(l, v);
            function l(c) {
              return v.call(this, c) || this;
            }
            return (
              (l.prototype.exec = function () {
                var c,
                  f = this.options,
                  g = f.editor,
                  p = f.listType,
                  m = f.listTarget,
                  A = f.$startElem,
                  y,
                  E = g.selection.getSelectionRangeTopNodes(),
                  S = A == null ? void 0 : A.getNodeName();
                E.shift();
                for (var R = [], P = u.getStartPoint(A); P.length; ) R.push(P), (P = P.next());
                S === p
                  ? ((y = u.createDocumentFragment()),
                    (0, a.default)(R).call(R, function (D) {
                      return y.append(D.elems[0]);
                    }),
                    (y = u.createElementFragment(u.filterSelectionNodes(E), y)),
                    this.selectionRangeElem.set(y),
                    A.elems[0].append(y))
                  : ((y = u.createElement(m)),
                    (0, a.default)(R).call(R, function (D) {
                      return y.append(D.elems[0]);
                    }),
                    (y = u.createElementFragment(u.filterSelectionNodes(E), y)),
                    this.selectionRangeElem.set(y),
                    s.default(y).insertAfter(A),
                    !(!((c = A.children()) === null || c === void 0) && c.length) && A.remove());
              }),
              l
            );
          })(h.ListHandle);
        e.default = d;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(4));
        (0, o.default)(e, '__esModule', { value: !0 });
        var i = t(2),
          s = i.__importDefault(t(3)),
          h = t(58),
          u = t(47),
          d = (function (v) {
            i.__extends(l, v);
            function l(c) {
              return v.call(this, c) || this;
            }
            return (
              (l.prototype.exec = function () {
                var c,
                  f,
                  g = this.options,
                  p = g.editor,
                  m = g.listType,
                  A = g.listTarget,
                  y = g.$endElem,
                  E,
                  S = p.selection.getSelectionRangeTopNodes(),
                  R = y == null ? void 0 : y.getNodeName();
                S.pop();
                for (var P = [], D = u.getEndPoint(y); D.length; ) P.unshift(D), (D = D.prev());
                if (R === m)
                  if (
                    ((E = u.createElementFragment(
                      u.filterSelectionNodes(S),
                      u.createDocumentFragment(),
                    )),
                    (0, a.default)(P).call(P, function (I) {
                      return E.append(I.elems[0]);
                    }),
                    this.selectionRangeElem.set(E),
                    !((c = y.children()) === null || c === void 0) && c.length)
                  ) {
                    var x = y.children();
                    u.insertBefore(x, E, x.elems[0]);
                  } else y.elems[0].append(E);
                else {
                  var T = u.filterSelectionNodes(S);
                  T.push.apply(T, P),
                    (E = u.createElementFragment(T, u.createElement(A))),
                    this.selectionRangeElem.set(E),
                    s.default(E).insertBefore(y),
                    !(!((f = y.children()) === null || f === void 0) && f.length) && y.remove();
                }
              }),
              l
            );
          })(h.ListHandle);
        e.default = d;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 });
        var a = t(2),
          i = t(58),
          s = t(47),
          h = (function (u) {
            a.__extends(d, u);
            function d(v, l) {
              var c = u.call(this, v) || this;
              return (c.range = l), c;
            }
            return (
              (d.prototype.exec = function () {
                var v = this.options,
                  l = v.editor,
                  c = v.listTarget,
                  f = l.selection.getSelectionRangeTopNodes(),
                  g = s.createElementFragment(s.filterSelectionNodes(f), s.createElement(c));
                this.selectionRangeElem.set(g), this.range.insertNode(g);
              }),
              d
            );
          })(i.ListHandle);
        e.default = h;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(4)),
          i = n(t(27));
        (0, o.default)(e, '__esModule', { value: !0 });
        var s = t(2),
          h = s.__importDefault(t(24)),
          u = s.__importDefault(t(3)),
          d = s.__importDefault(t(379)),
          v = (function (l) {
            s.__extends(c, l);
            function c(f) {
              var g = this,
                p = u.default(`<div class="w-e-menu" data-title="行高">
                    <i class="w-e-icon-row-height"></i>
                </div>`),
                m = new d.default(f, f.config.lineHeights),
                A = {
                  width: 100,
                  title: '设置行高',
                  type: 'list',
                  list: m.getItemList(),
                  clickHandler: function (E) {
                    f.selection.saveRange(), g.command(E);
                  },
                };
              return (g = l.call(this, p, f, A) || this), g;
            }
            return (
              (c.prototype.command = function (f) {
                var g = this.editor;
                g.selection.restoreSelection();
                var p = u.default(g.selection.getSelectionContainerElem());
                if (p.elems.length) {
                  if (p && g.$textElem.equal(p)) {
                    for (
                      var m = !1,
                        A = u.default(g.selection.getSelectionStartElem()).elems[0],
                        y = u.default(g.selection.getSelectionEndElem()).elems[0],
                        E = this.getDom(A),
                        S = this.getDom(y),
                        R = p.elems[0].children,
                        P = 0;
                      P < R.length;
                      P++
                    ) {
                      var D = R[P];
                      if (
                        u.default(D).getNodeName() === 'P' &&
                        (D === E && (m = !0), m && (u.default(D).css('line-height', f), D === S))
                      ) {
                        m = !1;
                        return;
                      }
                    }
                    g.selection.createRangeByElems(A, y);
                    return;
                  }
                  var x = p.elems[0],
                    T = this.getDom(x);
                  u.default(T).getNodeName() === 'P' &&
                    (u.default(T).css('line-height', f), g.selection.createRangeByElems(T, T));
                }
              }),
              (c.prototype.getDom = function (f) {
                var g = u.default(f).elems[0];
                if (!g.parentNode) return g;
                function p(m, A) {
                  var y = u.default(m.parentNode);
                  return A.$textElem.equal(y) ? m : p(y.elems[0], A);
                }
                return (g = p(g, this.editor)), g;
              }),
              (c.prototype.styleProcessing = function (f) {
                var g = '';
                return (
                  (0, a.default)(f).call(f, function (p) {
                    p !== '' &&
                      (0, i.default)(p).call(p, 'line-height') === -1 &&
                      (g = g + p + ';');
                  }),
                  g
                );
              }),
              (c.prototype.setRange = function (f, g) {
                var p = this.editor,
                  m = window.getSelection ? window.getSelection() : document.getSelection();
                m == null || m.removeAllRanges();
                var A = document.createRange(),
                  y = f,
                  E = g;
                A.setStart(y, 0),
                  A.setEnd(E, 1),
                  m == null || m.addRange(A),
                  p.selection.saveRange(),
                  m == null || m.removeAllRanges(),
                  p.selection.restoreSelection();
              }),
              (c.prototype.tryChangeActive = function () {
                var f = this.editor,
                  g = f.selection.getSelectionContainerElem();
                if (!(g && f.$textElem.equal(g))) {
                  var p = u.default(f.selection.getSelectionStartElem());
                  if (p.length !== 0) {
                    p = this.getDom(p.elems[0]);
                    var m = p.getAttribute('style') ? p.getAttribute('style') : '';
                    m && (0, i.default)(m).call(m, 'line-height') !== -1
                      ? this.active()
                      : this.unActive();
                  }
                }
              }),
              c
            );
          })(h.default);
        e.default = v;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(4));
        (0, o.default)(e, '__esModule', { value: !0 });
        var i = t(2),
          s = i.__importDefault(t(3)),
          h = (function () {
            function u(d, v) {
              var l = this;
              (this.itemList = [
                { $elem: s.default('<span>' + d.i18next.t('默认') + '</span>'), value: '' },
              ]),
                (0, a.default)(v).call(v, function (c) {
                  l.itemList.push({ $elem: s.default('<span>' + c + '</span>'), value: c });
                });
            }
            return (
              (u.prototype.getItemList = function () {
                return this.itemList;
              }),
              u
            );
          })();
        e.default = h;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(3)),
          s = a.__importDefault(t(23)),
          h = (function (u) {
            a.__extends(d, u);
            function d(v) {
              var l = this,
                c = i.default(`<div class="w-e-menu" data-title="撤销">
                <i class="w-e-icon-undo"></i>
            </div>`);
              return (l = u.call(this, c, v) || this), l;
            }
            return (
              (d.prototype.clickHandler = function () {
                var v = this.editor;
                v.history.revoke();
                var l = v.$textElem.children();
                if (l != null && l.length) {
                  var c = l.last();
                  v.selection.createRangeByElem(c, !1, !0), v.selection.restoreSelection();
                }
              }),
              (d.prototype.tryChangeActive = function () {
                this.editor.isCompatibleMode ||
                  (this.editor.history.size[0] ? this.active() : this.unActive());
              }),
              d
            );
          })(s.default);
        e.default = h;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(3)),
          s = a.__importDefault(t(23)),
          h = (function (u) {
            a.__extends(d, u);
            function d(v) {
              var l = this,
                c = i.default(`<div class="w-e-menu" data-title="恢复">
                <i class="w-e-icon-redo"></i>
            </div>`);
              return (l = u.call(this, c, v) || this), l;
            }
            return (
              (d.prototype.clickHandler = function () {
                var v = this.editor;
                v.history.restore();
                var l = v.$textElem.children();
                if (l != null && l.length) {
                  var c = l.last();
                  v.selection.createRangeByElem(c, !1, !0), v.selection.restoreSelection();
                }
              }),
              (d.prototype.tryChangeActive = function () {
                this.editor.isCompatibleMode ||
                  (this.editor.history.size[1] ? this.active() : this.unActive());
              }),
              d
            );
          })(s.default);
        e.default = h;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(38)),
          s = a.__importDefault(t(3)),
          h = a.__importDefault(t(383)),
          u = a.__importDefault(t(33)),
          d = a.__importDefault(t(392)),
          v = (function (l) {
            a.__extends(c, l);
            function c(f) {
              var g = this,
                p = s.default(
                  '<div class="w-e-menu" data-title="表格"><i class="w-e-icon-table2"></i></div>',
                );
              return (g = l.call(this, p, f) || this), d.default(f), g;
            }
            return (
              (c.prototype.clickHandler = function () {
                this.createPanel();
              }),
              (c.prototype.createPanel = function () {
                var f = h.default(this.editor),
                  g = new u.default(this, f);
                g.create();
              }),
              (c.prototype.tryChangeActive = function () {}),
              c
            );
          })(i.default);
        e.default = v;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(384));
        (0, o.default)(e, '__esModule', { value: !0 });
        var i = t(2),
          s = t(6),
          h = i.__importDefault(t(3));
        t(389);
        var u = i.__importDefault(t(391));
        function d(l) {
          return l > 0 && (0, a.default)(l);
        }
        function v(l) {
          var c = new u.default(l),
            f = s.getRandom('w-col-id'),
            g = s.getRandom('w-row-id'),
            p = s.getRandom('btn-link'),
            m = 'menus.panelMenus.table.',
            A = function (R) {
              return l.i18next.t(R);
            },
            y = [
              {
                title: A(m + '插入表格'),
                tpl:
                  `<div>
                    <div class="w-e-table">
                        <span>` +
                  A('创建') +
                  `</span>
                        <input id="` +
                  g +
                  `"  type="text" class="w-e-table-input" value="5"/></td>
                        <span>` +
                  A(m + '行') +
                  `</span>
                        <input id="` +
                  f +
                  `" type="text" class="w-e-table-input" value="5"/></td>
                        <span>` +
                  (A(m + '列') + A(m + '的') + A(m + '表格')) +
                  `</span>
                    </div>
                    <div class="w-e-button-container">
                        <button type="button" id="` +
                  p +
                  '" class="right">' +
                  A('插入') +
                  `</button>
                    </div>
                </div>`,
                events: [
                  {
                    selector: '#' + p,
                    type: 'click',
                    fn: function () {
                      var R = Number(h.default('#' + f).val()),
                        P = Number(h.default('#' + g).val());
                      return d(P) && d(R)
                        ? (c.createAction(P, R), !0)
                        : (l.config.customAlert('表格行列请输入正整数', 'warning'), !1);
                    },
                    bindEnter: !0,
                  },
                ],
              },
            ],
            E = { width: 330, height: 0, tabs: [] };
          return E.tabs.push(y[0]), E;
        }
        e.default = v;
      },
      function (r, e, t) {
        r.exports = t(385);
      },
      function (r, e, t) {
        var n = t(386);
        r.exports = n;
      },
      function (r, e, t) {
        t(387);
        var n = t(9);
        r.exports = n.Number.isInteger;
      },
      function (r, e, t) {
        var n = t(5),
          o = t(388);
        n({ target: 'Number', stat: !0 }, { isInteger: o });
      },
      function (r, e, t) {
        var n = t(13),
          o = Math.floor;
        r.exports = function (i) {
          return !n(i) && isFinite(i) && o(i) === i;
        };
      },
      function (r, e, t) {
        var n = t(20),
          o = t(390);
        (o = o.__esModule ? o.default : o), typeof o == 'string' && (o = [[r.i, o, '']]);
        var a = {};
        (a.insert = 'head'), (a.singleton = !1), n(o, a), (r.exports = o.locals || {});
      },
      function (r, e, t) {
        var n = t(21);
        (e = n(!1)),
          e.push([
            r.i,
            `.w-e-table {
  display: flex;
}
.w-e-table .w-e-table-input {
  width: 40px;
  text-align: center!important;
  margin: 0 5px;
}
`,
            '',
          ]),
          (r.exports = e);
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 });
        var a = t(2),
          i = t(7),
          s = a.__importDefault(t(3)),
          h = (function () {
            function u(d) {
              this.editor = d;
            }
            return (
              (u.prototype.createAction = function (d, v) {
                var l = this.editor,
                  c = s.default(l.selection.getSelectionContainerElem()),
                  f = s.default(c.elems[0]).parentUntilEditor('UL', l),
                  g = s.default(c.elems[0]).parentUntilEditor('OL', l);
                if (!(f || g)) {
                  var p = this.createTableHtml(d, v);
                  l.cmd.do('insertHTML', p);
                }
              }),
              (u.prototype.createTableHtml = function (d, v) {
                for (var l = '', c = '', f = 0; f < d; f++) {
                  c = '';
                  for (var g = 0; g < v; g++)
                    f === 0 ? (c = c + '<th></th>') : (c = c + '<td></td>');
                  l = l + '<tr>' + c + '</tr>';
                }
                var p =
                  '<table border="0" width="100%" cellpadding="0" cellspacing="0"><tbody>' +
                  l +
                  ('</tbody></table>' + i.EMPTY_P);
                return p;
              }),
              u
            );
          })();
        e.default = h;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(393)),
          s = t(400);
        function h(u) {
          i.default(u), s.bindEventKeyboardEvent(u), s.bindClickEvent(u);
        }
        e.default = h;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(3)),
          s = a.__importDefault(t(39)),
          h = a.__importDefault(t(394)),
          u = a.__importDefault(t(399)),
          d = t(7);
        function v(g) {
          var p;
          function m(y) {
            var E = new u.default(g),
              S = 'menus.panelMenus.table.',
              R = function (x, T) {
                return T === void 0 && (T = S), g.i18next.t(T + x);
              },
              P = [
                {
                  $elem: i.default('<span>' + R('删除表格') + '</span>'),
                  onClick: function (x, T) {
                    return (
                      x.selection.createRangeByElem(T),
                      x.selection.restoreSelection(),
                      x.cmd.do('insertHTML', d.EMPTY_P),
                      !0
                    );
                  },
                },
                {
                  $elem: i.default('<span>' + R('添加行') + '</span>'),
                  onClick: function (x, T) {
                    var I = l(x);
                    if (I) return !0;
                    var N = i.default(x.selection.getSelectionStartElem()),
                      M = E.getRowNode(N.elems[0]);
                    if (!M) return !0;
                    var L = Number(E.getCurrentRowIndex(T.elems[0], M)),
                      O = E.getTableHtml(T.elems[0]),
                      B = E.getTableHtml(h.default.ProcessingRow(i.default(O), L).elems[0]);
                    return (
                      (B = f(T, B)),
                      x.selection.createRangeByElem(T),
                      x.selection.restoreSelection(),
                      x.cmd.do('insertHTML', B),
                      !0
                    );
                  },
                },
                {
                  $elem: i.default('<span>' + R('删除行') + '</span>'),
                  onClick: function (x, T) {
                    var I = l(x);
                    if (I) return !0;
                    var N = i.default(x.selection.getSelectionStartElem()),
                      M = E.getRowNode(N.elems[0]);
                    if (!M) return !0;
                    var L = Number(E.getCurrentRowIndex(T.elems[0], M)),
                      O = E.getTableHtml(T.elems[0]),
                      B = h.default.DeleteRow(i.default(O), L).elems[0].children[0].children.length,
                      w = '';
                    return (
                      x.selection.createRangeByElem(T),
                      x.selection.restoreSelection(),
                      B === 0
                        ? (w = d.EMPTY_P)
                        : (w = E.getTableHtml(h.default.DeleteRow(i.default(O), L).elems[0])),
                      (w = f(T, w)),
                      x.cmd.do('insertHTML', w),
                      !0
                    );
                  },
                },
                {
                  $elem: i.default('<span>' + R('添加列') + '</span>'),
                  onClick: function (x, T) {
                    var I = l(x);
                    if (I) return !0;
                    var N = i.default(x.selection.getSelectionStartElem()),
                      M = E.getCurrentColIndex(N.elems[0]),
                      L = E.getTableHtml(T.elems[0]),
                      O = E.getTableHtml(h.default.ProcessingCol(i.default(L), M).elems[0]);
                    return (
                      (O = f(T, O)),
                      x.selection.createRangeByElem(T),
                      x.selection.restoreSelection(),
                      x.cmd.do('insertHTML', O),
                      !0
                    );
                  },
                },
                {
                  $elem: i.default('<span>' + R('删除列') + '</span>'),
                  onClick: function (x, T) {
                    var I = l(x);
                    if (I) return !0;
                    var N = i.default(x.selection.getSelectionStartElem()),
                      M = E.getCurrentColIndex(N.elems[0]),
                      L = E.getTableHtml(T.elems[0]),
                      O = h.default.DeleteCol(i.default(L), M),
                      B = O.elems[0].children[0].children[0].children.length,
                      w = '';
                    return (
                      x.selection.createRangeByElem(T),
                      x.selection.restoreSelection(),
                      B === 0 ? (w = d.EMPTY_P) : (w = E.getTableHtml(O.elems[0])),
                      (w = f(T, w)),
                      x.cmd.do('insertHTML', w),
                      !0
                    );
                  },
                },
                {
                  $elem: i.default('<span>' + R('设置表头') + '</span>'),
                  onClick: function (x, T) {
                    var I = l(x);
                    if (I) return !0;
                    var N = i.default(x.selection.getSelectionStartElem()),
                      M = E.getRowNode(N.elems[0]);
                    if (!M) return !0;
                    var L = Number(E.getCurrentRowIndex(T.elems[0], M));
                    L !== 0 && (L = 0);
                    var O = E.getTableHtml(T.elems[0]),
                      B = E.getTableHtml(h.default.setTheHeader(i.default(O), L, 'th').elems[0]);
                    return (
                      (B = f(T, B)),
                      x.selection.createRangeByElem(T),
                      x.selection.restoreSelection(),
                      x.cmd.do('insertHTML', B),
                      !0
                    );
                  },
                },
                {
                  $elem: i.default('<span>' + R('取消表头') + '</span>'),
                  onClick: function (x, T) {
                    var I = i.default(x.selection.getSelectionStartElem()),
                      N = E.getRowNode(I.elems[0]);
                    if (!N) return !0;
                    var M = Number(E.getCurrentRowIndex(T.elems[0], N));
                    M !== 0 && (M = 0);
                    var L = E.getTableHtml(T.elems[0]),
                      O = E.getTableHtml(h.default.setTheHeader(i.default(L), M, 'td').elems[0]);
                    return (
                      (O = f(T, O)),
                      x.selection.createRangeByElem(T),
                      x.selection.restoreSelection(),
                      x.cmd.do('insertHTML', O),
                      !0
                    );
                  },
                },
              ];
            (p = new s.default(g, y, P)), p.create();
          }
          function A() {
            p && (p.remove(), (p = null));
          }
          return { showTableTooltip: m, hideTableTooltip: A };
        }
        function l(g) {
          var p = g.selection.getSelectionStartElem(),
            m = g.selection.getSelectionEndElem();
          return (p == null ? void 0 : p.elems[0]) !== (m == null ? void 0 : m.elems[0]);
        }
        function c(g) {
          var p = v(g),
            m = p.showTableTooltip,
            A = p.hideTableTooltip;
          g.txt.eventHooks.tableClickEvents.push(m),
            g.txt.eventHooks.clickEvents.push(A),
            g.txt.eventHooks.keyupEvents.push(A),
            g.txt.eventHooks.toolbarClickEvents.push(A),
            g.txt.eventHooks.menuClickEvents.push(A),
            g.txt.eventHooks.textScrollEvents.push(A);
        }
        e.default = c;
        function f(g, p) {
          var m = g.elems[0].nextSibling;
          return (!m || m.innerHTML === '<br>') && (p += '' + d.EMPTY_P), p;
        }
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(45)),
          i = n(t(91)),
          s = n(t(4)),
          h = n(t(138));
        (0, o.default)(e, '__esModule', { value: !0 });
        var u = t(2),
          d = u.__importDefault(t(3));
        function v(A, y) {
          for (
            var E = m(A),
              S = (0, a.default)(Array.prototype).apply(E.children),
              R = S[0].children.length,
              P = document.createElement('tr'),
              D = 0;
            D < R;
            D++
          ) {
            var x = document.createElement('td');
            P.appendChild(x);
          }
          return (0, i.default)(S).call(S, y + 1, 0, P), p(E, S), d.default(E.parentNode);
        }
        function l(A, y) {
          for (
            var E = m(A),
              S = (0, a.default)(Array.prototype).apply(E.children),
              R = function (x) {
                var T,
                  I = [];
                for (
                  (0, s.default)((T = (0, h.default)(S[x].children))).call(T, function (L) {
                    I.push(L);
                  });
                  S[x].children.length !== 0;

                )
                  S[x].removeChild(S[x].children[0]);
                var N =
                  d.default(I[0]).getNodeName() !== 'TH'
                    ? document.createElement('td')
                    : document.createElement('th');
                (0, i.default)(I).call(I, y + 1, 0, N);
                for (var M = 0; M < I.length; M++) S[x].appendChild(I[M]);
              },
              P = 0;
            P < S.length;
            P++
          )
            R(P);
          return p(E, S), d.default(E.parentNode);
        }
        function c(A, y) {
          var E = m(A),
            S = (0, a.default)(Array.prototype).apply(E.children);
          return (0, i.default)(S).call(S, y, 1), p(E, S), d.default(E.parentNode);
        }
        function f(A, y) {
          for (
            var E = m(A),
              S = (0, a.default)(Array.prototype).apply(E.children),
              R = function (x) {
                var T,
                  I = [];
                for (
                  (0, s.default)((T = (0, h.default)(S[x].children))).call(T, function (M) {
                    I.push(M);
                  });
                  S[x].children.length !== 0;

                )
                  S[x].removeChild(S[x].children[0]);
                (0, i.default)(I).call(I, y, 1);
                for (var N = 0; N < I.length; N++) S[x].appendChild(I[N]);
              },
              P = 0;
            P < S.length;
            P++
          )
            R(P);
          return p(E, S), d.default(E.parentNode);
        }
        function g(A, y, E) {
          for (
            var S = m(A),
              R = (0, a.default)(Array.prototype).apply(S.children),
              P = R[y].children,
              D = document.createElement('tr'),
              x = function (N) {
                var M,
                  L = document.createElement(E),
                  O = P[N];
                (0, s.default)((M = (0, h.default)(O.childNodes))).call(M, function (B) {
                  L.appendChild(B);
                }),
                  D.appendChild(L);
              },
              T = 0;
            T < P.length;
            T++
          )
            x(T);
          return (0, i.default)(R).call(R, y, 1, D), p(S, R), d.default(S.parentNode);
        }
        function p(A, y) {
          for (; A.children.length !== 0; ) A.removeChild(A.children[0]);
          for (var E = 0; E < y.length; E++) A.appendChild(y[E]);
        }
        function m(A) {
          var y = A.elems[0].children[0];
          return (
            y.nodeName === 'COLGROUP' && (y = A.elems[0].children[A.elems[0].children.length - 1]),
            y
          );
        }
        e.default = {
          ProcessingRow: v,
          ProcessingCol: l,
          DeleteRow: c,
          DeleteCol: f,
          setTheHeader: g,
        };
      },
      function (r, e, t) {
        var n = t(396);
        r.exports = n;
      },
      function (r, e, t) {
        t(50), t(397);
        var n = t(9);
        r.exports = n.Array.from;
      },
      function (r, e, t) {
        var n = t(5),
          o = t(398),
          a = t(115),
          i = !a(function (s) {
            Array.from(s);
          });
        n({ target: 'Array', stat: !0, forced: i }, { from: o });
      },
      function (r, e, t) {
        var n = t(40),
          o = t(31),
          a = t(114),
          i = t(112),
          s = t(35),
          h = t(69),
          u = t(113);
        r.exports = function (v) {
          var l = o(v),
            c = typeof this == 'function' ? this : Array,
            f = arguments.length,
            g = f > 1 ? arguments[1] : void 0,
            p = g !== void 0,
            m = u(l),
            A = 0,
            y,
            E,
            S,
            R,
            P,
            D;
          if (
            (p && (g = n(g, f > 2 ? arguments[2] : void 0, 2)), m != null && !(c == Array && i(m)))
          )
            for (R = m.call(l), P = R.next, E = new c(); !(S = P.call(R)).done; A++)
              (D = p ? a(R, g, [S.value, A], !0) : S.value), h(E, A, D);
          else
            for (y = s(l.length), E = new c(y); y > A; A++) (D = p ? g(l[A], A) : l[A]), h(E, A, D);
          return (E.length = A), E;
        };
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(4)),
          i = n(t(138));
        (0, o.default)(e, '__esModule', { value: !0 });
        var s = t(2),
          h = s.__importDefault(t(3)),
          u = (function () {
            function d(v) {
              this.editor = v;
            }
            return (
              (d.prototype.getRowNode = function (v) {
                var l,
                  c = h.default(v).elems[0];
                return (
                  c.parentNode &&
                    (c =
                      (l = h.default(c).parentUntil('TR', c)) === null || l === void 0
                        ? void 0
                        : l.elems[0]),
                  c
                );
              }),
              (d.prototype.getCurrentRowIndex = function (v, l) {
                var c,
                  f = 0,
                  g = v.children[0];
                return (
                  g.nodeName === 'COLGROUP' && (g = v.children[v.children.length - 1]),
                  (0, a.default)((c = (0, i.default)(g.children))).call(c, function (p, m) {
                    p === l && (f = m);
                  }),
                  f
                );
              }),
              (d.prototype.getCurrentColIndex = function (v) {
                var l,
                  c,
                  f = 0,
                  g =
                    h.default(v).getNodeName() === 'TD' || h.default(v).getNodeName() === 'TH'
                      ? v
                      : (c = h.default(v).parentUntil('TD', v)) === null || c === void 0
                      ? void 0
                      : c.elems[0],
                  p = h.default(g).parent();
                return (
                  (0, a.default)((l = (0, i.default)(p.elems[0].children))).call(
                    l,
                    function (m, A) {
                      m === g && (f = A);
                    },
                  ),
                  f
                );
              }),
              (d.prototype.getTableHtml = function (v) {
                var l =
                  '<table border="0" width="100%" cellpadding="0" cellspacing="0">' +
                  h.default(v).html() +
                  '</table>';
                return l;
              }),
              d
            );
          })();
        e.default = u;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 }),
          (e.bindEventKeyboardEvent = e.bindClickEvent = void 0);
        var a = t(2),
          i = a.__importDefault(t(3));
        function s(d) {
          if (!d.length) return !1;
          var v = d.elems[0];
          return v.nodeName === 'P' && v.innerHTML === '<br>';
        }
        function h(d) {
          function v(l, c) {
            if (c.detail >= 3) {
              var f = window.getSelection();
              if (f) {
                var g = f.focusNode,
                  p = f.anchorNode,
                  m = i.default(p == null ? void 0 : p.parentElement);
                if (!l.isContain(i.default(g))) {
                  var A = m.elems[0].tagName === 'TD' ? m : m.parentUntilEditor('td', d);
                  if (A) {
                    var y = d.selection.getRange();
                    y == null || y.setEnd(A.elems[0], A.elems[0].childNodes.length),
                      d.selection.restoreSelection();
                  }
                }
              }
            }
          }
          d.txt.eventHooks.tableClickEvents.push(v);
        }
        e.bindClickEvent = h;
        function u(d) {
          var v = d.txt,
            l = d.selection,
            c = v.eventHooks.keydownEvents;
          c.push(function (f) {
            d.selection.saveRange();
            var g = l.getSelectionContainerElem();
            if (g) {
              var p = g.getNodeTop(d),
                m = p.length && p.prev().length ? p.prev() : null;
              if (
                m &&
                m.getNodeName() === 'TABLE' &&
                l.isSelectionEmpty() &&
                l.getCursorPos() === 0 &&
                f.keyCode === 8
              ) {
                var A = p.next(),
                  y = !!A.length;
                y && s(p) && (p.remove(), d.selection.setRangeToElem(A.elems[0])),
                  f.preventDefault();
              }
            }
          });
        }
        e.bindEventKeyboardEvent = u;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(26));
        (0, o.default)(e, '__esModule', { value: !0 }), (e.formatCodeHtml = void 0);
        var i = t(2),
          s = i.__importDefault(t(38)),
          h = i.__importDefault(t(3)),
          u = t(6),
          d = i.__importDefault(t(402)),
          v = i.__importDefault(t(139)),
          l = i.__importDefault(t(33)),
          c = i.__importDefault(t(403));
        function f(p, m) {
          if (!m) return m;
          return (m = y(m)), (m = A(m)), (m = u.replaceSpecialSymbol(m)), m;
          function A(E) {
            var S = E.match(/<pre[\s|\S]+?\/pre>/g);
            return (
              S === null ||
                (0, a.default)(S).call(S, function (R) {
                  E = E.replace(
                    R,
                    R.replace(
                      /<\/code><code>/g,
                      `
`,
                    ).replace(/<br>/g, ''),
                  );
                }),
              E
            );
          }
          function y(E) {
            var S,
              R = E.match(/<span\sclass="hljs[\s|\S]+?\/span>/gm);
            if (!R || !R.length) return E;
            for (
              var P = (0, a.default)((S = u.deepClone(R))).call(S, function (x) {
                  return (x = x.replace(/<span\sclass="hljs[^>]+>/, '')), x.replace(/<\/span>/, '');
                }),
                D = 0;
              D < R.length;
              D++
            )
              E = E.replace(R[D], P[D]);
            return y(E);
          }
        }
        e.formatCodeHtml = f;
        var g = (function (p) {
          i.__extends(m, p);
          function m(A) {
            var y = this,
              E = h.default(
                '<div class="w-e-menu" data-title="代码"><i class="w-e-icon-terminal"></i></div>',
              );
            return (y = p.call(this, E, A) || this), c.default(A), y;
          }
          return (
            (m.prototype.insertLineCode = function (A) {
              var y = this.editor,
                E = h.default('<code>' + A + '</code>');
              y.cmd.do('insertElem', E),
                y.selection.createRangeByElem(E, !1),
                y.selection.restoreSelection();
            }),
            (m.prototype.clickHandler = function () {
              var A = this.editor,
                y = A.selection.getSelectionText();
              this.isActive ||
                (A.selection.isSelectionEmpty()
                  ? this.createPanel('', '')
                  : this.insertLineCode(y));
            }),
            (m.prototype.createPanel = function (A, y) {
              var E = d.default(this.editor, A, y),
                S = new l.default(this, E);
              S.create();
            }),
            (m.prototype.tryChangeActive = function () {
              var A = this.editor;
              v.default(A) ? this.active() : this.unActive();
            }),
            m
          );
        })(s.default);
        e.default = g;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(26));
        (0, o.default)(e, '__esModule', { value: !0 });
        var i = t(2),
          s = t(6),
          h = i.__importDefault(t(3)),
          u = i.__importDefault(t(139)),
          d = t(7);
        function v(l, c, f) {
          var g,
            p = s.getRandom('input-iframe'),
            m = s.getRandom('select'),
            A = s.getRandom('btn-ok');
          function y(P, D) {
            var x,
              T = u.default(l);
            T && E();
            var I =
              (x = l.selection.getSelectionStartElem()) === null || x === void 0
                ? void 0
                : x.elems[0].innerHTML;
            I && l.cmd.do('insertHTML', d.EMPTY_P);
            var N = D.replace(/</g, '&lt;').replace(/>/g, '&gt;');
            l.highlight && (N = l.highlight.highlightAuto(N).value),
              l.cmd.do('insertHTML', '<pre><code class="' + P + '">' + N + '</code></pre>');
            var M = l.selection.getSelectionStartElem(),
              L = M == null ? void 0 : M.getNodeTop(l);
            (L == null ? void 0 : L.getNextSibling().elems.length) === 0 &&
              h.default(d.EMPTY_P).insertAfter(L);
          }
          function E() {
            if (u.default(l)) {
              var P = l.selection.getSelectionStartElem(),
                D = P == null ? void 0 : P.getNodeTop(l);
              D && (l.selection.createRangeByElem(D), l.selection.restoreSelection());
            }
          }
          var S = function (D) {
              return l.i18next.t(D);
            },
            R = {
              width: 500,
              height: 0,
              tabs: [
                {
                  title: S('menus.panelMenus.code.插入代码'),
                  tpl:
                    `<div>
                        <select name="" id="` +
                    m +
                    `">
                            ` +
                    (0, a.default)((g = l.config.languageType)).call(g, function (P) {
                      return (
                        '<option ' +
                        (f == P ? 'selected' : '') +
                        ' value ="' +
                        P +
                        '">' +
                        P +
                        '</option>'
                      );
                    }) +
                    `
                        </select>
                        <textarea id="` +
                    p +
                    '" type="text" class="wang-code-textarea" placeholder="" style="height: 160px">' +
                    c.replace(/&quot;/g, '"') +
                    `</textarea>
                        <div class="w-e-button-container">
                            <button type="button" id="` +
                    A +
                    '" class="right">' +
                    (u.default(l) ? S('修改') : S('插入')) +
                    `</button>
                        </div>
                    </div>`,
                  events: [
                    {
                      selector: '#' + A,
                      type: 'click',
                      fn: function () {
                        var D = document.getElementById(p),
                          x = h.default('#' + m),
                          T = x.val(),
                          I = D.value;
                        if (I) return u.default(l) ? !1 : (y(T, I), !0);
                      },
                    },
                  ],
                },
              ],
            };
          return R;
        }
        e.default = v;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(404)),
          s = a.__importDefault(t(405));
        function h(u) {
          i.default(u), s.default(u);
        }
        e.default = h;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 }), (e.createShowHideFn = void 0);
        var a = t(2),
          i = a.__importDefault(t(3)),
          s = a.__importDefault(t(39));
        function h(d) {
          var v;
          function l(f) {
            var g = 'menus.panelMenus.code.',
              p = function (y, E) {
                return E === void 0 && (E = g), d.i18next.t(E + y);
              },
              m = [
                {
                  $elem: i.default('<span>' + p('删除代码') + '</span>'),
                  onClick: function (y, E) {
                    return E.remove(), !0;
                  },
                },
              ];
            (v = new s.default(d, f, m)), v.create();
          }
          function c() {
            v && (v.remove(), (v = null));
          }
          return { showCodeTooltip: l, hideCodeTooltip: c };
        }
        e.createShowHideFn = h;
        function u(d) {
          var v = h(d),
            l = v.showCodeTooltip,
            c = v.hideCodeTooltip;
          d.txt.eventHooks.codeClickEvents.push(l),
            d.txt.eventHooks.clickEvents.push(c),
            d.txt.eventHooks.toolbarClickEvents.push(c),
            d.txt.eventHooks.menuClickEvents.push(c),
            d.txt.eventHooks.textScrollEvents.push(c);
        }
        e.default = u;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 });
        var a = t(2),
          i = t(7),
          s = a.__importDefault(t(3));
        function h(u) {
          var d = u.$textElem,
            v = u.selection,
            l = u.txt,
            c = l.eventHooks.keydownEvents;
          c.push(function (f) {
            var g;
            if (f.keyCode === 40) {
              var p = v.getSelectionContainerElem(),
                m = (g = d.children()) === null || g === void 0 ? void 0 : g.last();
              if (
                (p == null ? void 0 : p.elems[0].tagName) === 'XMP' &&
                (m == null ? void 0 : m.elems[0].tagName) === 'PRE'
              ) {
                var A = s.default(i.EMPTY_P);
                d.append(A);
              }
            }
          }),
            c.push(function (f) {
              u.selection.saveRange();
              var g = v.getSelectionContainerElem();
              if (g) {
                var p = g.getNodeTop(u),
                  m = p == null ? void 0 : p.prev(),
                  A = p == null ? void 0 : p.getNextSibling();
                if (
                  m.length &&
                  (m == null ? void 0 : m.getNodeName()) === 'PRE' &&
                  A.length === 0 &&
                  v.getCursorPos() === 0 &&
                  f.keyCode === 8
                ) {
                  var y = s.default(i.EMPTY_P);
                  d.append(y);
                }
              }
            });
        }
        e.default = h;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(23)),
          s = a.__importDefault(t(3)),
          h = a.__importDefault(t(407)),
          u = t(6),
          d = t(7),
          v = (function (l) {
            a.__extends(c, l);
            function c(f) {
              var g = this,
                p = s.default(
                  '<div class="w-e-menu" data-title="分割线"><i class="w-e-icon-split-line"></i></div>',
                );
              return (g = l.call(this, p, f) || this), h.default(f), g;
            }
            return (
              (c.prototype.clickHandler = function () {
                var f = this.editor,
                  g = f.selection.getRange(),
                  p = f.selection.getSelectionContainerElem();
                if (p != null && p.length) {
                  var m = s.default(p.elems[0]),
                    A = m.parentUntil('TABLE', p.elems[0]),
                    y = m.children();
                  m.getNodeName() !== 'CODE' &&
                    ((A && s.default(A.elems[0]).getNodeName() === 'TABLE') ||
                      (y &&
                        y.length !== 0 &&
                        s.default(y.elems[0]).getNodeName() === 'IMG' &&
                        !(g != null && g.collapsed)) ||
                      this.createSplitLine());
                }
              }),
              (c.prototype.createSplitLine = function () {
                var f = '<hr/>' + d.EMPTY_P;
                u.UA.isFirefox && (f = '<hr/><p></p>'), this.editor.cmd.do('insertHTML', f);
              }),
              (c.prototype.tryChangeActive = function () {}),
              c
            );
          })(i.default);
        e.default = v;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(408));
        function s(h) {
          i.default(h);
        }
        e.default = s;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(3)),
          s = a.__importDefault(t(39));
        function h(d) {
          var v;
          function l(f) {
            var g = [
              {
                $elem: i.default('<span>' + d.i18next.t('menus.panelMenus.删除') + '</span>'),
                onClick: function (m, A) {
                  return (
                    m.selection.createRangeByElem(A),
                    m.selection.restoreSelection(),
                    m.cmd.do('delete'),
                    !0
                  );
                },
              },
            ];
            (v = new s.default(d, f, g)), v.create();
          }
          function c() {
            v && (v.remove(), (v = null));
          }
          return { showSplitLineTooltip: l, hideSplitLineTooltip: c };
        }
        function u(d) {
          var v = h(d),
            l = v.showSplitLineTooltip,
            c = v.hideSplitLineTooltip;
          d.txt.eventHooks.splitLineEvents.push(l),
            d.txt.eventHooks.clickEvents.push(c),
            d.txt.eventHooks.keyupEvents.push(c),
            d.txt.eventHooks.toolbarClickEvents.push(c),
            d.txt.eventHooks.menuClickEvents.push(c),
            d.txt.eventHooks.textScrollEvents.push(c);
        }
        e.default = u;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(4));
        (0, o.default)(e, '__esModule', { value: !0 });
        var i = t(2),
          s = i.__importDefault(t(3)),
          h = i.__importDefault(t(23)),
          u = t(98),
          d = i.__importDefault(t(415)),
          v = i.__importDefault(t(140)),
          l = (function (c) {
            i.__extends(f, c);
            function f(g) {
              var p = this,
                m = s.default(`<div class="w-e-menu" data-title="待办事项">
                    <i class="w-e-icon-checkbox-checked"></i>
                </div>`);
              return (p = c.call(this, m, g) || this), d.default(g), p;
            }
            return (
              (f.prototype.clickHandler = function () {
                var g = this.editor;
                u.isAllTodo(g) ? (this.cancelTodo(), this.tryChangeActive()) : this.setTodo();
              }),
              (f.prototype.tryChangeActive = function () {
                u.isAllTodo(this.editor) ? this.active() : this.unActive();
              }),
              (f.prototype.setTodo = function () {
                var g = this.editor,
                  p = g.selection.getSelectionRangeTopNodes();
                (0, a.default)(p).call(p, function (m) {
                  var A,
                    y = m == null ? void 0 : m.getNodeName();
                  if (y === 'P') {
                    var E = v.default(m),
                      S = E.getTodo(),
                      R = (A = S.children()) === null || A === void 0 ? void 0 : A.getNode();
                    S.insertAfter(m), g.selection.moveCursor(R), m.remove();
                  }
                }),
                  this.tryChangeActive();
              }),
              (f.prototype.cancelTodo = function () {
                var g = this.editor,
                  p = g.selection.getSelectionRangeTopNodes();
                (0, a.default)(p).call(p, function (m) {
                  var A,
                    y,
                    E,
                    S =
                      (y =
                        (A = m.childNodes()) === null || A === void 0 ? void 0 : A.childNodes()) ===
                        null || y === void 0
                        ? void 0
                        : y.clone(!0),
                    R = s.default('<p></p>');
                  R.append(S),
                    R.insertAfter(m),
                    (E = R.childNodes()) === null || E === void 0 || E.get(0).remove(),
                    g.selection.moveCursor(R.getNode()),
                    m.remove();
                });
              }),
              f
            );
          })(h.default);
        e.default = l;
      },
      function (r, e, t) {
        r.exports = t(411);
      },
      function (r, e, t) {
        var n = t(412);
        r.exports = n;
      },
      function (r, e, t) {
        var n = t(413),
          o = Array.prototype;
        r.exports = function (a) {
          var i = a.every;
          return a === o || (a instanceof Array && i === o.every) ? n : i;
        };
      },
      function (r, e, t) {
        t(414);
        var n = t(15);
        r.exports = n('Array').every;
      },
      function (r, e, t) {
        var n = t(5),
          o = t(32).every,
          a = t(67),
          i = t(22),
          s = a('every'),
          h = i('every');
        n(
          { target: 'Array', proto: !0, forced: !s || !h },
          {
            every: function (d) {
              return o(this, d, arguments.length > 1 ? arguments[1] : void 0);
            },
          },
        );
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(4));
        (0, o.default)(e, '__esModule', { value: !0 });
        var i = t(2),
          s = i.__importDefault(t(3)),
          h = t(98),
          u = i.__importDefault(t(140)),
          d = t(98),
          v = t(7);
        function l(c) {
          function f(A) {
            var y, E;
            if (h.isAllTodo(c)) {
              A.preventDefault();
              var S = c.selection,
                R = S.getSelectionRangeTopNodes()[0],
                P = (y = R.childNodes()) === null || y === void 0 ? void 0 : y.get(0),
                D = (E = window.getSelection()) === null || E === void 0 ? void 0 : E.anchorNode,
                x = S.getRange();
              if (!(x != null && x.collapsed)) {
                var T = x == null ? void 0 : x.commonAncestorContainer.childNodes,
                  I = x == null ? void 0 : x.startContainer,
                  N = x == null ? void 0 : x.endContainer,
                  M = x == null ? void 0 : x.startOffset,
                  L = x == null ? void 0 : x.endOffset,
                  O = 0,
                  B = 0,
                  w = [];
                T == null ||
                  (0, a.default)(T).call(T, function (J, k) {
                    J.contains(I) && (O = k), J.contains(N) && (B = k);
                  }),
                  B - O > 1 &&
                    (T == null ||
                      (0, a.default)(T).call(T, function (J, k) {
                        k <= O || k >= B || w.push(J);
                      }),
                    (0, a.default)(w).call(w, function (J) {
                      J.remove();
                    })),
                  d.dealTextNode(I, M),
                  d.dealTextNode(N, L, !1),
                  c.selection.moveCursor(N, 0);
              }
              if (R.text() === '') {
                var H = s.default(v.EMPTY_P);
                H.insertAfter(R), S.moveCursor(H.getNode()), R.remove();
                return;
              }
              var b = S.getCursorPos(),
                U = h.getCursorNextNode(P == null ? void 0 : P.getNode(), D, b),
                K = u.default(s.default(U)),
                j = K.getInputContainer(),
                W = j.parent().getNode(),
                G = K.getTodo(),
                $ = j.getNode().nextSibling;
              if (
                ((P == null ? void 0 : P.text()) === '' &&
                  (P == null || P.append(s.default('<br>'))),
                G.insertAfter(R),
                !$ || ($ == null ? void 0 : $.textContent) === '')
              ) {
                if (($ == null ? void 0 : $.nodeName) !== 'BR') {
                  var V = s.default('<br>');
                  V.insertAfter(j);
                }
                S.moveCursor(W, 1);
              } else S.moveCursor(W);
            }
          }
          function g(A) {
            var y, E;
            if (h.isAllTodo(c)) {
              var S = c.selection,
                R = S.getSelectionRangeTopNodes()[0],
                P = (y = R.childNodes()) === null || y === void 0 ? void 0 : y.getNode(),
                D = s.default('<p></p>'),
                x = D.getNode(),
                T = (E = window.getSelection()) === null || E === void 0 ? void 0 : E.anchorNode,
                I = S.getCursorPos(),
                N = T.previousSibling;
              if (R.text() === '') {
                A.preventDefault();
                var M = s.default(v.EMPTY_P);
                M.insertAfter(R), R.remove(), S.moveCursor(M.getNode(), 0);
                return;
              }
              if (
                (N == null ? void 0 : N.nodeName) === 'SPAN' &&
                N.childNodes[0].nodeName === 'INPUT' &&
                I === 0
              ) {
                var L;
                A.preventDefault(),
                  P == null ||
                    (0, a.default)((L = P.childNodes)).call(L, function (O, B) {
                      B !== 0 && x.appendChild(O.cloneNode(!0));
                    }),
                  D.insertAfter(R),
                  R.remove();
              }
            }
          }
          function p() {
            var A = c.selection,
              y = A.getSelectionRangeTopNodes()[0];
            y &&
              d.isTodo(y) &&
              y.text() === '' &&
              (s.default(v.EMPTY_P).insertAfter(y), y.remove());
          }
          function m(A) {
            A &&
              A.target instanceof HTMLInputElement &&
              A.target.type === 'checkbox' &&
              (A.target.checked
                ? A.target.setAttribute('checked', 'true')
                : A.target.removeAttribute('checked'));
          }
          c.txt.eventHooks.enterDownEvents.push(f),
            c.txt.eventHooks.deleteUpEvents.push(p),
            c.txt.eventHooks.deleteDownEvents.push(g),
            c.txt.eventHooks.clickEvents.push(m);
        }
        e.default = l;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 }), (e.selectorValidator = void 0);
        var a = t(2),
          i = a.__importDefault(t(3)),
          s = t(6),
          h = t(7),
          u = a.__importDefault(t(130)),
          d = {
            border: '1px solid #c9d8db',
            toolbarBgColor: '#FFF',
            toolbarBottomBorder: '1px solid #EEE',
          };
        function v(c) {
          var f = c.toolbarSelector,
            g = i.default(f),
            p = c.textSelector,
            m = c.config,
            A = m.height,
            y = c.i18next,
            E = i.default('<div></div>'),
            S = i.default('<div></div>'),
            R,
            P,
            D = null;
          p == null
            ? ((P = g.children()),
              g.append(E).append(S),
              E.css('background-color', d.toolbarBgColor)
                .css('border', d.border)
                .css('border-bottom', d.toolbarBottomBorder),
              S.css('border', d.border)
                .css('border-top', 'none')
                .css('height', A + 'px'))
            : (g.append(E),
              (D = i.default(p).children()),
              i.default(p).append(S),
              (P = S.children())),
            (R = i.default('<div></div>')),
            R.attr('contenteditable', 'true').css('width', '100%').css('height', '100%');
          var x,
            T = c.config.placeholder;
          T !== u.default.placeholder
            ? (x = i.default('<div>' + T + '</div>'))
            : (x = i.default('<div>' + y.t(T) + '</div>')),
            x.addClass('placeholder'),
            P && P.length ? (R.append(P), x.hide()) : R.append(i.default(h.EMPTY_P)),
            D && D.length && (R.append(D), x.hide()),
            S.append(R),
            S.append(x),
            E.addClass('w-e-toolbar').css('z-index', c.zIndex.get('toolbar')),
            S.addClass('w-e-text-container'),
            S.css('z-index', c.zIndex.get()),
            R.addClass('w-e-text');
          var I = s.getRandom('toolbar-elem');
          E.attr('id', I);
          var N = s.getRandom('text-elem');
          R.attr('id', N);
          var M = S.getBoundingClientRect().height,
            L = R.getBoundingClientRect().height;
          M !== L && R.css('min-height', M + 'px'),
            (c.$toolbarElem = E),
            (c.$textContainerElem = S),
            (c.$textElem = R),
            (c.toolbarElemId = I),
            (c.textElemId = N);
        }
        e.default = v;
        function l(c) {
          var f = 'data-we-id',
            g = /^wangEditor-\d+$/,
            p = c.textSelector,
            m = c.toolbarSelector,
            A = { bar: i.default('<div></div>'), text: i.default('<div></div>') };
          if (m == null) throw new Error('错误：初始化编辑器时候未传入任何参数，请查阅文档');
          if (((A.bar = i.default(m)), !A.bar.elems.length))
            throw new Error('无效的节点选择器：' + m);
          if (g.test(A.bar.attr(f)))
            throw new Error('初始化节点已存在编辑器实例，无法重复创建编辑器');
          if (p) {
            if (((A.text = i.default(p)), !A.text.elems.length))
              throw new Error('无效的节点选择器：' + p);
            if (g.test(A.text.attr(f)))
              throw new Error('初始化节点已存在编辑器实例，无法重复创建编辑器');
          }
          A.bar.attr(f, c.id),
            A.text.attr(f, c.id),
            c.beforeDestroy(function () {
              A.bar.removeAttr(f), A.text.removeAttr(f);
            });
        }
        e.selectorValidator = l;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(3)),
          s = t(7);
        function h(u, d) {
          var v = u.$textElem,
            l = v.children();
          if (!l || !l.length) {
            v.append(i.default(s.EMPTY_P)), h(u);
            return;
          }
          var c = l.last();
          if (d) {
            var f = c.html().toLowerCase(),
              g = c.getNodeName();
            if ((f !== '<br>' && f !== '<br/>') || g !== 'P') {
              v.append(i.default(s.EMPTY_P)), h(u);
              return;
            }
          }
          u.selection.createRangeByElem(c, !1, !0),
            u.config.focus
              ? u.selection.restoreSelection()
              : u.selection.clearWindowSelectionRange();
        }
        e.default = h;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(4));
        (0, o.default)(e, '__esModule', { value: !0 });
        var i = t(2),
          s = i.__importDefault(t(3));
        function h(f) {
          u(f), d(f), v(f);
        }
        function u(f) {
          f.txt.eventHooks.changeEvents.push(function () {
            var g = f.config.onchange;
            if (g) {
              var p = f.txt.html() || '';
              (f.isFocus = !0), g(p);
            }
            f.txt.togglePlaceholder();
          });
        }
        function d(f) {
          f.isFocus = !1;
          function g(p) {
            var m = p.target,
              A = s.default(m),
              y = f.$textElem,
              E = f.$toolbarElem,
              S = y.isContain(A),
              R = E.isContain(A),
              P = E.elems[0] == p.target;
            if (S) f.isFocus || c(f), (f.isFocus = !0);
            else {
              if ((R && !P) || !f.isFocus) return;
              l(f), (f.isFocus = !1);
            }
          }
          document.activeElement === f.$textElem.elems[0] &&
            f.config.focus &&
            (c(f), (f.isFocus = !0)),
            s.default(document).on('click', g),
            f.beforeDestroy(function () {
              s.default(document).off('click', g);
            });
        }
        function v(f) {
          f.$textElem
            .on('compositionstart', function () {
              (f.isComposing = !0), f.txt.togglePlaceholder();
            })
            .on('compositionend', function () {
              (f.isComposing = !1), f.txt.togglePlaceholder();
            });
        }
        function l(f) {
          var g,
            p = f.config,
            m = p.onblur,
            A = f.txt.html() || '';
          (0, a.default)((g = f.txt.eventHooks.onBlurEvents)).call(g, function (y) {
            return y();
          }),
            m(A);
        }
        function c(f) {
          var g = f.config,
            p = g.onfocus,
            m = f.txt.html() || '';
          p(m);
        }
        e.default = h;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 });
        function a(i) {
          var s = i.config,
            h = s.lang,
            u = s.languages;
          if (i.i18next != null) {
            try {
              i.i18next.init({ ns: 'wangEditor', lng: h, defaultNS: 'wangEditor', resources: u });
            } catch (d) {
              throw new Error('i18next:' + d);
            }
            return;
          }
          i.i18next = {
            t: function (v) {
              var l = v.split('.');
              return l[l.length - 1];
            },
          };
        }
        e.default = a;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(29));
        (0, o.default)(e, '__esModule', { value: !0 }),
          (e.setUnFullScreen = e.setFullScreen = void 0);
        var i = t(2),
          s = i.__importDefault(t(3));
        t(421);
        var h = 'w-e-icon-fullscreen',
          u = 'w-e-icon-fullscreen_exit',
          d = 'w-e-full-screen-editor';
        (e.setFullScreen = function (l) {
          var c = s.default(l.toolbarSelector),
            f = l.$textContainerElem,
            g = l.$toolbarElem,
            p = (0, a.default)(g).call(g, 'i.' + h),
            m = l.config;
          p.removeClass(h), p.addClass(u), c.addClass(d), c.css('z-index', m.zIndexFullScreen);
          var A = g.getBoundingClientRect();
          f.css('height', 'calc(100% - ' + A.height + 'px)');
        }),
          (e.setUnFullScreen = function (l) {
            var c = s.default(l.toolbarSelector),
              f = l.$textContainerElem,
              g = l.$toolbarElem,
              p = (0, a.default)(g).call(g, 'i.' + u),
              m = l.config;
            p.removeClass(u),
              p.addClass(h),
              c.removeClass(d),
              c.css('z-index', 'auto'),
              f.css('height', m.height + 'px');
          });
        var v = function (c) {
          if (!c.textSelector && c.config.showFullScreen) {
            var f = c.$toolbarElem,
              g = s.default(
                `<div class="w-e-menu" data-title="全屏">
            <i class="` +
                  h +
                  `"></i>
        </div>`,
              );
            g.on('click', function (p) {
              var m,
                A = (0, a.default)((m = s.default(p.currentTarget))).call(m, 'i');
              A.hasClass(h)
                ? (g.attr('data-title', '取消全屏'), e.setFullScreen(c))
                : (g.attr('data-title', '全屏'), e.setUnFullScreen(c));
            }),
              f.append(g);
          }
        };
        e.default = v;
      },
      function (r, e, t) {
        var n = t(20),
          o = t(422);
        (o = o.__esModule ? o.default : o), typeof o == 'string' && (o = [[r.i, o, '']]);
        var a = {};
        (a.insert = 'head'), (a.singleton = !1), n(o, a), (r.exports = o.locals || {});
      },
      function (r, e, t) {
        var n = t(21);
        (e = n(!1)),
          e.push([
            r.i,
            `.w-e-full-screen-editor {
  position: fixed;
  width: 100%!important;
  height: 100%!important;
  left: 0;
  top: 0;
}
`,
            '',
          ]),
          (r.exports = e);
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(29));
        (0, o.default)(e, '__esModule', { value: !0 });
        var i = function (h, u) {
          var d,
            v = h.isEnable
              ? h.$textElem
              : (0, a.default)((d = h.$textContainerElem)).call(d, '.w-e-content-mantle'),
            l = (0, a.default)(v).call(v, "[id='" + u + "']"),
            c = l.getOffsetData().top;
          v.scrollTop(c);
        };
        e.default = i;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(129)),
          s = { menu: 2, panel: 2, toolbar: 1, tooltip: 1, textContainer: 1 },
          h = (function () {
            function u() {
              (this.tier = s), (this.baseZIndex = i.default.zIndex);
            }
            return (
              (u.prototype.get = function (d) {
                return d && this.tier[d] ? this.baseZIndex + this.tier[d] : this.baseZIndex;
              }),
              (u.prototype.init = function (d) {
                this.baseZIndex == i.default.zIndex && (this.baseZIndex = d.config.zIndex);
              }),
              u
            );
          })();
        e.default = h;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(70)),
          i = n(t(4));
        (0, o.default)(e, '__esModule', { value: !0 });
        var s = t(2),
          h = s.__importDefault(t(426)),
          u = t(6),
          d = t(7);
        function v(c, f) {
          return (0, a.default)(c).call(c, function (g) {
            var p = g.type,
              m = g.target,
              A = g.attributeName;
            return p != 'attributes' || (p == 'attributes' && (A == 'contenteditable' || m != f));
          });
        }
        var l = (function (c) {
          s.__extends(f, c);
          function f(g) {
            var p =
              c.call(this, function (m, A) {
                var y;
                if (((m = v(m, A.target)), (y = p.data).push.apply(y, m), g.isCompatibleMode))
                  p.asyncSave();
                else if (!g.isComposing) return p.asyncSave();
              }) || this;
            return (p.editor = g), (p.data = []), (p.asyncSave = d.EMPTY_FN), p;
          }
          return (
            (f.prototype.save = function () {
              this.data.length &&
                (this.editor.history.save(this.data), (this.data.length = 0), this.emit());
            }),
            (f.prototype.emit = function () {
              var g;
              (0, i.default)((g = this.editor.txt.eventHooks.changeEvents)).call(g, function (p) {
                return p();
              });
            }),
            (f.prototype.observe = function () {
              var g = this;
              c.prototype.observe.call(this, this.editor.$textElem.elems[0]);
              var p = this.editor.config.onchangeTimeout;
              (this.asyncSave = u.debounce(function () {
                g.save();
              }, p)),
                this.editor.isCompatibleMode ||
                  this.editor.$textElem.on('compositionend', function () {
                    g.asyncSave();
                  });
            }),
            f
          );
        })(h.default);
        e.default = l;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 });
        var a = (function () {
          function i(s, h) {
            var u = this;
            (this.options = {
              subtree: !0,
              childList: !0,
              attributes: !0,
              attributeOldValue: !0,
              characterData: !0,
              characterDataOldValue: !0,
            }),
              (this.callback = function (d) {
                s(d, u);
              }),
              (this.observer = new MutationObserver(this.callback)),
              h && (this.options = h);
          }
          return (
            (0, o.default)(i.prototype, 'target', {
              get: function () {
                return this.node;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (i.prototype.observe = function (s) {
              this.node instanceof Node || ((this.node = s), this.connect());
            }),
            (i.prototype.connect = function () {
              if (this.node) return this.observer.observe(this.node, this.options), this;
              throw new Error('还未初始化绑定，请您先绑定有效的 Node 节点');
            }),
            (i.prototype.disconnect = function () {
              var s = this.observer.takeRecords();
              s.length && this.callback(s), this.observer.disconnect();
            }),
            i
          );
        })();
        e.default = a;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(428)),
          s = a.__importDefault(t(435)),
          h = a.__importDefault(t(436)),
          u = (function () {
            function d(v) {
              (this.editor = v),
                (this.content = new i.default(v)),
                (this.scroll = new s.default(v)),
                (this.range = new h.default(v));
            }
            return (
              (0, o.default)(d.prototype, 'size', {
                get: function () {
                  return this.scroll.size;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (d.prototype.observe = function () {
                this.content.observe(),
                  this.scroll.observe(),
                  !this.editor.isCompatibleMode && this.range.observe();
              }),
              (d.prototype.save = function (v) {
                v.length &&
                  (this.content.save(v),
                  this.scroll.save(),
                  !this.editor.isCompatibleMode && this.range.save());
              }),
              (d.prototype.revoke = function () {
                this.editor.change.disconnect();
                var v = this.content.revoke();
                v &&
                  (this.scroll.revoke(),
                  this.editor.isCompatibleMode ||
                    (this.range.revoke(), this.editor.$textElem.focus())),
                  this.editor.change.connect(),
                  v && this.editor.change.emit();
              }),
              (d.prototype.restore = function () {
                this.editor.change.disconnect();
                var v = this.content.restore();
                v &&
                  (this.scroll.restore(),
                  this.editor.isCompatibleMode ||
                    (this.range.restore(), this.editor.$textElem.focus())),
                  this.editor.change.connect(),
                  v && this.editor.change.emit();
              }),
              d
            );
          })();
        e.default = u;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(429)),
          s = a.__importDefault(t(433)),
          h = (function () {
            function u(d) {
              this.editor = d;
            }
            return (
              (u.prototype.observe = function () {
                this.editor.isCompatibleMode
                  ? (this.cache = new s.default(this.editor))
                  : (this.cache = new i.default(this.editor)),
                  this.cache.observe();
              }),
              (u.prototype.save = function (d) {
                this.editor.isCompatibleMode ? this.cache.save() : this.cache.compile(d);
              }),
              (u.prototype.revoke = function () {
                var d;
                return (d = this.cache) === null || d === void 0 ? void 0 : d.revoke();
              }),
              (u.prototype.restore = function () {
                var d;
                return (d = this.cache) === null || d === void 0 ? void 0 : d.restore();
              }),
              u
            );
          })();
        e.default = h;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(99)),
          s = a.__importDefault(t(431)),
          h = t(432),
          u = (function (d) {
            a.__extends(v, d);
            function v(l) {
              var c = d.call(this, l.config.historyMaxSize) || this;
              return (c.editor = l), c;
            }
            return (
              (v.prototype.observe = function () {
                this.resetMaxSize(this.editor.config.historyMaxSize);
              }),
              (v.prototype.compile = function (l) {
                return this.save(s.default(l)), this;
              }),
              (v.prototype.revoke = function () {
                return d.prototype.revoke.call(this, function (l) {
                  h.revoke(l);
                });
              }),
              (v.prototype.restore = function () {
                return d.prototype.restore.call(this, function (l) {
                  h.restore(l);
                });
              }),
              v
            );
          })(i.default);
        e.default = u;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 }), (e.CeilStack = void 0);
        var a = (function () {
          function i(s) {
            s === void 0 && (s = 0),
              (this.data = []),
              (this.max = 0),
              (this.reset = !1),
              (s = Math.abs(s)),
              s && (this.max = s);
          }
          return (
            (i.prototype.resetMax = function (s) {
              (s = Math.abs(s)), !this.reset && !isNaN(s) && ((this.max = s), (this.reset = !0));
            }),
            (0, o.default)(i.prototype, 'size', {
              get: function () {
                return this.data.length;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (i.prototype.instack = function (s) {
              return (
                this.data.unshift(s),
                this.max && this.size > this.max && (this.data.length = this.max),
                this
              );
            }),
            (i.prototype.outstack = function () {
              return this.data.shift();
            }),
            (i.prototype.clear = function () {
              return (this.data.length = 0), this;
            }),
            i
          );
        })();
        e.CeilStack = a;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(4)),
          i = n(t(27));
        (0, o.default)(e, '__esModule', { value: !0 }),
          (e.compliePosition = e.complieNodes = e.compileValue = e.compileType = void 0);
        var s = t(6);
        function h(g) {
          switch (g) {
            case 'childList':
              return 'node';
            case 'attributes':
              return 'attr';
            default:
              return 'text';
          }
        }
        e.compileType = h;
        function u(g) {
          switch (g.type) {
            case 'attributes':
              return g.target.getAttribute(g.attributeName) || '';
            case 'characterData':
              return g.target.textContent;
            default:
              return '';
          }
        }
        e.compileValue = u;
        function d(g) {
          var p = {};
          return (
            g.addedNodes.length && (p.add = s.toArray(g.addedNodes)),
            g.removedNodes.length && (p.remove = s.toArray(g.removedNodes)),
            p
          );
        }
        e.complieNodes = d;
        function v(g) {
          var p;
          return (
            g.previousSibling
              ? (p = { type: 'before', target: g.previousSibling })
              : g.nextSibling
              ? (p = { type: 'after', target: g.nextSibling })
              : (p = { type: 'parent', target: g.target }),
            p
          );
        }
        e.compliePosition = v;
        var l = ['UL', 'OL', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6'];
        function c(g) {
          var p = [],
            m = !1,
            A = [];
          return (
            (0, a.default)(g).call(g, function (y, E) {
              var S = {
                type: h(y.type),
                target: y.target,
                attr: y.attributeName || '',
                value: u(y) || '',
                oldValue: y.oldValue || '',
                nodes: d(y),
                position: v(y),
              };
              if ((p.push(S), !!s.UA.isFirefox)) {
                if (m && y.addedNodes.length && y.addedNodes[0].nodeType == 1) {
                  var R = y.addedNodes[0],
                    P = {
                      type: 'node',
                      target: R,
                      attr: '',
                      value: '',
                      oldValue: '',
                      nodes: { add: [m] },
                      position: { type: 'parent', target: R },
                    };
                  (0, i.default)(l).call(l, R.nodeName) != -1
                    ? ((P.nodes.add = s.toArray(R.childNodes)), p.push(P))
                    : m.nodeType == 3
                    ? (f(R, A) && (P.nodes.add = s.toArray(R.childNodes)), p.push(P))
                    : (0, i.default)(l).call(l, y.target.nodeName) == -1 &&
                      f(R, A) &&
                      ((P.nodes.add = s.toArray(R.childNodes)), p.push(P));
                }
                S.type == 'node' && y.removedNodes.length == 1
                  ? ((m = y.removedNodes[0]), A.push(m))
                  : ((m = !1), (A.length = 0));
              }
            }),
            p
          );
        }
        e.default = c;
        function f(g, p) {
          for (var m = 0, A = p.length - 1; A > 0 && g.contains(p[A]); A--) m++;
          return m;
        }
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(4)),
          i = n(t(94));
        (0, o.default)(e, '__esModule', { value: !0 }), (e.restore = e.revoke = void 0);
        function s(A, y) {
          var E = A.position.target;
          switch (A.position.type) {
            case 'before':
              E.nextSibling
                ? ((E = E.nextSibling),
                  (0, a.default)(y).call(y, function (S) {
                    A.target.insertBefore(S, E);
                  }))
                : (0, a.default)(y).call(y, function (S) {
                    A.target.appendChild(S);
                  });
              break;
            case 'after':
              (0, a.default)(y).call(y, function (S) {
                A.target.insertBefore(S, E);
              });
              break;
            default:
              (0, a.default)(y).call(y, function (S) {
                E.appendChild(S);
              });
              break;
          }
        }
        function h(A) {
          for (var y = 0, E = (0, i.default)(A.nodes); y < E.length; y++) {
            var S = E[y],
              R = S[0],
              P = S[1];
            switch (R) {
              case 'add':
                (0, a.default)(P).call(P, function (D) {
                  A.target.removeChild(D);
                });
                break;
              default: {
                s(A, P);
                break;
              }
            }
          }
        }
        function u(A) {
          var y = A.target;
          A.oldValue == null ? y.removeAttribute(A.attr) : y.setAttribute(A.attr, A.oldValue);
        }
        function d(A) {
          A.target.textContent = A.oldValue;
        }
        var v = { node: h, text: d, attr: u };
        function l(A) {
          for (var y = A.length - 1; y > -1; y--) {
            var E = A[y];
            v[E.type](E);
          }
        }
        e.revoke = l;
        function c(A) {
          for (var y = 0, E = (0, i.default)(A.nodes); y < E.length; y++) {
            var S = E[y],
              R = S[0],
              P = S[1];
            switch (R) {
              case 'add': {
                s(A, P);
                break;
              }
              default: {
                (0, a.default)(P).call(P, function (D) {
                  D.parentNode.removeChild(D);
                });
                break;
              }
            }
          }
        }
        function f(A) {
          A.target.textContent = A.value;
        }
        function g(A) {
          A.target.setAttribute(A.attr, A.value);
        }
        var p = { node: c, text: f, attr: g };
        function m(A) {
          for (var y = 0, E = A; y < E.length; y++) {
            var S = E[y];
            p[S.type](S);
          }
        }
        e.restore = m;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 });
        var a = t(434),
          i = (function () {
            function s(h) {
              (this.editor = h), (this.data = new a.TailChain());
            }
            return (
              (s.prototype.observe = function () {
                this.data.resetMax(this.editor.config.historyMaxSize),
                  this.data.insertLast(this.editor.$textElem.html());
              }),
              (s.prototype.save = function () {
                return this.data.insertLast(this.editor.$textElem.html()), this;
              }),
              (s.prototype.revoke = function () {
                var h = this.data.prev();
                return h ? (this.editor.$textElem.html(h), !0) : !1;
              }),
              (s.prototype.restore = function () {
                var h = this.data.next();
                return h ? (this.editor.$textElem.html(h), !0) : !1;
              }),
              s
            );
          })();
        e.default = i;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(91));
        (0, o.default)(e, '__esModule', { value: !0 }), (e.TailChain = void 0);
        var i = (function () {
          function s() {
            (this.data = []), (this.max = 0), (this.point = 0), (this.isRe = !1);
          }
          return (
            (s.prototype.resetMax = function (h) {
              (h = Math.abs(h)), h && (this.max = h);
            }),
            (0, o.default)(s.prototype, 'size', {
              get: function () {
                return this.data.length;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (s.prototype.insertLast = function (h) {
              if (this.isRe) {
                var u;
                (0, a.default)((u = this.data)).call(u, this.point + 1), (this.isRe = !1);
              }
              for (this.data.push(h); this.max && this.size > this.max; ) this.data.shift();
              return (this.point = this.size - 1), this;
            }),
            (s.prototype.current = function () {
              return this.data[this.point];
            }),
            (s.prototype.prev = function () {
              if ((!this.isRe && (this.isRe = !0), this.point--, this.point < 0)) {
                this.point = 0;
                return;
              }
              return this.current();
            }),
            (s.prototype.next = function () {
              if ((!this.isRe && (this.isRe = !0), this.point++, this.point >= this.size)) {
                this.point = this.size - 1;
                return;
              }
              return this.current();
            }),
            s
          );
        })();
        e.TailChain = i;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(99)),
          s = (function (h) {
            a.__extends(u, h);
            function u(d) {
              var v = h.call(this, d.config.historyMaxSize) || this;
              return (v.editor = d), (v.last = 0), (v.target = d.$textElem.elems[0]), v;
            }
            return (
              (u.prototype.observe = function () {
                var d = this;
                (this.target = this.editor.$textElem.elems[0]),
                  this.editor.$textElem.on('scroll', function () {
                    d.last = d.target.scrollTop;
                  }),
                  this.resetMaxSize(this.editor.config.historyMaxSize);
              }),
              (u.prototype.save = function () {
                return h.prototype.save.call(this, [this.last, this.target.scrollTop]), this;
              }),
              (u.prototype.revoke = function () {
                var d = this;
                return h.prototype.revoke.call(this, function (v) {
                  d.target.scrollTop = v[0];
                });
              }),
              (u.prototype.restore = function () {
                var d = this;
                return h.prototype.restore.call(this, function (v) {
                  d.target.scrollTop = v[1];
                });
              }),
              u
            );
          })(i.default);
        e.default = s;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(99)),
          s = a.__importDefault(t(3)),
          h = t(6);
        function u(v) {
          return {
            start: [v.startContainer, v.startOffset],
            end: [v.endContainer, v.endOffset],
            root: v.commonAncestorContainer,
            collapsed: v.collapsed,
          };
        }
        var d = (function (v) {
          a.__extends(l, v);
          function l(c) {
            var f = v.call(this, c.config.historyMaxSize) || this;
            return (
              (f.editor = c),
              (f.lastRange = u(document.createRange())),
              (f.root = c.$textElem.elems[0]),
              (f.updateLastRange = h.debounce(function () {
                f.lastRange = u(f.rangeHandle);
              }, c.config.onchangeTimeout)),
              f
            );
          }
          return (
            (0, o.default)(l.prototype, 'rangeHandle', {
              get: function () {
                var f = document.getSelection();
                return f && f.rangeCount ? f.getRangeAt(0) : document.createRange();
              },
              enumerable: !1,
              configurable: !0,
            }),
            (l.prototype.observe = function () {
              var c = this;
              (this.root = this.editor.$textElem.elems[0]),
                this.resetMaxSize(this.editor.config.historyMaxSize);
              function f() {
                var p = c.rangeHandle;
                (c.root === p.commonAncestorContainer ||
                  c.root.contains(p.commonAncestorContainer)) &&
                  (c.editor.isComposing || c.updateLastRange());
              }
              function g(p) {
                (p.key == 'Backspace' || p.key == 'Delete') && c.updateLastRange();
              }
              s.default(document).on('selectionchange', f),
                this.editor.beforeDestroy(function () {
                  s.default(document).off('selectionchange', f);
                }),
                c.editor.$textElem.on('keydown', g);
            }),
            (l.prototype.save = function () {
              var c = u(this.rangeHandle);
              return v.prototype.save.call(this, [this.lastRange, c]), (this.lastRange = c), this;
            }),
            (l.prototype.set = function (c) {
              try {
                if (c) {
                  var f = this.rangeHandle;
                  return (
                    f.setStart.apply(f, c.start),
                    f.setEnd.apply(f, c.end),
                    this.editor.menus.changeActive(),
                    !0
                  );
                }
              } catch (g) {
                return !1;
              }
              return !1;
            }),
            (l.prototype.revoke = function () {
              var c = this;
              return v.prototype.revoke.call(this, function (f) {
                c.set(f[0]);
              });
            }),
            (l.prototype.restore = function () {
              var c = this;
              return v.prototype.restore.call(this, function (f) {
                c.set(f[1]);
              });
            }),
            l
          );
        })(i.default);
        e.default = d;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(29));
        (0, o.default)(e, '__esModule', { value: !0 });
        var i = t(2),
          s = i.__importDefault(t(3));
        t(438);
        function h(u) {
          var d = !1,
            v,
            l;
          u.txt.eventHooks.changeEvents.push(function () {
            d && (0, a.default)(v).call(v, '.w-e-content-preview').html(u.$textElem.html());
          });
          function c() {
            if (!d) {
              u.$textElem.hide();
              var g = u.zIndex.get('textContainer'),
                p = u.txt.html();
              (v = s.default(
                '<div class="w-e-content-mantle" style="z-index:' +
                  g +
                  `">
                <div class="w-e-content-preview w-e-text">` +
                  p +
                  `</div>
            </div>`,
              )),
                u.$textContainerElem.append(v);
              var m = u.zIndex.get('menu');
              (l = s.default('<div class="w-e-menue-mantle" style="z-index:' + m + '"></div>')),
                u.$toolbarElem.append(l),
                (d = !0),
                (u.isEnable = !1);
            }
          }
          function f() {
            d && (v.remove(), l.remove(), u.$textElem.show(), (d = !1), (u.isEnable = !0));
          }
          return { disable: c, enable: f };
        }
        e.default = h;
      },
      function (r, e, t) {
        var n = t(20),
          o = t(439);
        (o = o.__esModule ? o.default : o), typeof o == 'string' && (o = [[r.i, o, '']]);
        var a = {};
        (a.insert = 'head'), (a.singleton = !1), n(o, a), (r.exports = o.locals || {});
      },
      function (r, e, t) {
        var n = t(21);
        (e = n(!1)),
          e.push([
            r.i,
            `.w-e-content-mantle {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
.w-e-content-mantle .w-e-content-preview {
  width: 100%;
  min-height: 100%;
  padding: 0 10px;
  line-height: 1.5;
}
.w-e-content-mantle .w-e-content-preview img {
  cursor: default;
}
.w-e-content-mantle .w-e-content-preview img:hover {
  box-shadow: none;
}
.w-e-menue-mantle {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}
`,
            '',
          ]),
          (r.exports = e);
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 });
        var a = (function () {
          function i(s) {
            var h = this;
            this.editor = s;
            var u = function () {
              var v = document.activeElement;
              v === s.$textElem.elems[0] && h.emit();
            };
            window.document.addEventListener('selectionchange', u),
              this.editor.beforeDestroy(function () {
                window.document.removeEventListener('selectionchange', u);
              });
          }
          return (
            (i.prototype.emit = function () {
              var s,
                h = this.editor.config.onSelectionChange;
              if (h) {
                var u = this.editor.selection;
                u.saveRange(),
                  u.isSelectionEmpty() ||
                    h({
                      text: u.getSelectionText(),
                      html:
                        (s = u.getSelectionContainerElem()) === null || s === void 0
                          ? void 0
                          : s.elems[0].innerHTML,
                      selection: u,
                    });
              }
            }),
            i
          );
        })();
        e.default = a;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1)),
          a = n(t(128)),
          i = n(t(94)),
          s = n(t(4));
        (0, o.default)(e, '__esModule', { value: !0 }), (e.registerPlugin = void 0);
        var h = t(2),
          u = h.__importDefault(t(87)),
          d = t(6);
        function v(c, f, g) {
          if (!c) throw new TypeError('name is not define');
          if (!f) throw new TypeError('options is not define');
          if (!f.intention) throw new TypeError('options.intention is not define');
          if (f.intention && typeof f.intention != 'function')
            throw new TypeError('options.intention is not function');
          g[c] && console.warn('plugin ' + c + ' 已存在，已覆盖。'), (g[c] = f);
        }
        e.registerPlugin = v;
        function l(c) {
          var f = (0, a.default)(
              {},
              d.deepClone(u.default.globalPluginsFunctionList),
              d.deepClone(c.pluginsFunctionList),
            ),
            g = (0, i.default)(f);
          (0, s.default)(g).call(g, function (p) {
            var m = p[0],
              A = p[1];
            console.info('plugin ' + m + ' initializing');
            var y = A.intention,
              E = A.config;
            y(c, E), console.info('plugin ' + m + ' initialization complete');
          });
        }
        e.default = l;
      },
      function (r, e, t) {
        var n = t(0),
          o = n(t(1));
        (0, o.default)(e, '__esModule', { value: !0 });
      },
    ]).default;
  });
})(ie);
var Ce = ie.exports;
const De = he(Ce),
  Te = {
    type: 'logger',
    log(F) {
      this.output('log', F);
    },
    warn(F) {
      this.output('warn', F);
    },
    error(F) {
      this.output('error', F);
    },
    output(F, C) {
      console && console[F] && console[F].apply(console, C);
    },
  };
class wt {
  constructor(C) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(C, r);
  }
  init(C) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.prefix = r.prefix || 'i18next:'),
      (this.logger = C || Te),
      (this.options = r),
      (this.debug = r.debug);
  }
  log() {
    for (var C = arguments.length, r = new Array(C), e = 0; e < C; e++) r[e] = arguments[e];
    return this.forward(r, 'log', '', !0);
  }
  warn() {
    for (var C = arguments.length, r = new Array(C), e = 0; e < C; e++) r[e] = arguments[e];
    return this.forward(r, 'warn', '', !0);
  }
  error() {
    for (var C = arguments.length, r = new Array(C), e = 0; e < C; e++) r[e] = arguments[e];
    return this.forward(r, 'error', '');
  }
  deprecate() {
    for (var C = arguments.length, r = new Array(C), e = 0; e < C; e++) r[e] = arguments[e];
    return this.forward(r, 'warn', 'WARNING DEPRECATED: ', !0);
  }
  forward(C, r, e, t) {
    return t && !this.debug
      ? null
      : (typeof C[0] == 'string' && (C[0] = `${e}${this.prefix} ${C[0]}`), this.logger[r](C));
  }
  create(C) {
    return new wt(this.logger, tt({ prefix: `${this.prefix}:${C}:` }, this.options));
  }
  clone(C) {
    return (C = C || this.options), (C.prefix = C.prefix || this.prefix), new wt(this.logger, C);
  }
}
var pt = new wt();
class Vt {
  constructor() {
    this.observers = {};
  }
  on(C, r) {
    return (
      C.split(' ').forEach((e) => {
        (this.observers[e] = this.observers[e] || []), this.observers[e].push(r);
      }),
      this
    );
  }
  off(C, r) {
    if (this.observers[C]) {
      if (!r) {
        delete this.observers[C];
        return;
      }
      this.observers[C] = this.observers[C].filter((e) => e !== r);
    }
  }
  emit(C) {
    for (var r = arguments.length, e = new Array(r > 1 ? r - 1 : 0), t = 1; t < r; t++)
      e[t - 1] = arguments[t];
    this.observers[C] &&
      [].concat(this.observers[C]).forEach((o) => {
        o(...e);
      }),
      this.observers['*'] &&
        [].concat(this.observers['*']).forEach((o) => {
          o.apply(o, [C, ...e]);
        });
  }
}
function Ot() {
  let F, C;
  const r = new Promise((e, t) => {
    (F = e), (C = t);
  });
  return (r.resolve = F), (r.reject = C), r;
}
function kt(F) {
  return F == null ? '' : '' + F;
}
function Re(F, C, r) {
  F.forEach((e) => {
    C[e] && (r[e] = C[e]);
  });
}
function Jt(F, C, r) {
  function e(o) {
    return o && o.indexOf('###') > -1 ? o.replace(/###/g, '.') : o;
  }
  function t() {
    return !F || typeof F == 'string';
  }
  const n = typeof C != 'string' ? [].concat(C) : C.split('.');
  for (; n.length > 1; ) {
    if (t()) return {};
    const o = e(n.shift());
    !F[o] && r && (F[o] = new r()),
      Object.prototype.hasOwnProperty.call(F, o) ? (F = F[o]) : (F = {});
  }
  return t() ? {} : { obj: F, k: e(n.shift()) };
}
function qt(F, C, r) {
  const { obj: e, k: t } = Jt(F, C, Object);
  e[t] = r;
}
function Pe(F, C, r, e) {
  const { obj: t, k: n } = Jt(F, C, Object);
  (t[n] = t[n] || []), e && (t[n] = t[n].concat(r)), e || t[n].push(r);
}
function Ut(F, C) {
  const { obj: r, k: e } = Jt(F, C);
  if (r) return r[e];
}
function Ie(F, C, r) {
  const e = Ut(F, r);
  return e !== void 0 ? e : Ut(C, r);
}
function le(F, C, r) {
  for (const e in C)
    e !== '__proto__' &&
      e !== 'constructor' &&
      (e in F
        ? typeof F[e] == 'string' ||
          F[e] instanceof String ||
          typeof C[e] == 'string' ||
          C[e] instanceof String
          ? r && (F[e] = C[e])
          : le(F[e], C[e], r)
        : (F[e] = C[e]));
  return F;
}
function Pt(F) {
  return F.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}
var Me = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;', '/': '&#x2F;' };
function Ne(F) {
  return typeof F == 'string' ? F.replace(/[&<>"'\/]/g, (C) => Me[C]) : F;
}
const Le = [' ', ',', '?', '!', ';'];
function Oe(F, C, r) {
  (C = C || ''), (r = r || '');
  const e = Le.filter((o) => C.indexOf(o) < 0 && r.indexOf(o) < 0);
  if (e.length === 0) return !0;
  const t = new RegExp(`(${e.map((o) => (o === '?' ? '\\?' : o)).join('|')})`);
  let n = !t.test(F);
  if (!n) {
    const o = F.indexOf(r);
    o > 0 && !t.test(F.substring(0, o)) && (n = !0);
  }
  return n;
}
function jt(F, C) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '.';
  if (!F) return;
  if (F[C]) return F[C];
  const e = C.split(r);
  let t = F;
  for (let n = 0; n < e.length; ++n) {
    if (!t || (typeof t[e[n]] == 'string' && n + 1 < e.length)) return;
    if (t[e[n]] === void 0) {
      let o = 2,
        a = e.slice(n, n + o).join(r),
        i = t[a];
      for (; i === void 0 && e.length > n + o; ) o++, (a = e.slice(n, n + o).join(r)), (i = t[a]);
      if (i === void 0) return;
      if (i === null) return null;
      if (C.endsWith(a)) {
        if (typeof i == 'string') return i;
        if (a && typeof i[a] == 'string') return i[a];
      }
      const s = e.slice(n + o).join(r);
      return s ? jt(i, s, r) : void 0;
    }
    t = t[e[n]];
  }
  return t;
}
function $t(F) {
  return F && F.indexOf('_') > 0 ? F.replace('_', '-') : F;
}
class _t extends Vt {
  constructor(C) {
    let r =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { ns: ['translation'], defaultNS: 'translation' };
    super(),
      (this.data = C || {}),
      (this.options = r),
      this.options.keySeparator === void 0 && (this.options.keySeparator = '.'),
      this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(C) {
    this.options.ns.indexOf(C) < 0 && this.options.ns.push(C);
  }
  removeNamespaces(C) {
    const r = this.options.ns.indexOf(C);
    r > -1 && this.options.ns.splice(r, 1);
  }
  getResource(C, r, e) {
    let t = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const n = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator,
      o =
        t.ignoreJSONStructure !== void 0 ? t.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let a = [C, r];
    e && typeof e != 'string' && (a = a.concat(e)),
      e && typeof e == 'string' && (a = a.concat(n ? e.split(n) : e)),
      C.indexOf('.') > -1 && (a = C.split('.'));
    const i = Ut(this.data, a);
    return i || !o || typeof e != 'string'
      ? i
      : jt(this.data && this.data[C] && this.data[C][r], e, n);
  }
  addResource(C, r, e, t) {
    let n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : { silent: !1 };
    const o = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator;
    let a = [C, r];
    e && (a = a.concat(o ? e.split(o) : e)),
      C.indexOf('.') > -1 && ((a = C.split('.')), (t = r), (r = a[1])),
      this.addNamespaces(r),
      qt(this.data, a, t),
      n.silent || this.emit('added', C, r, e, t);
  }
  addResources(C, r, e) {
    let t = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : { silent: !1 };
    for (const n in e)
      (typeof e[n] == 'string' || Object.prototype.toString.apply(e[n]) === '[object Array]') &&
        this.addResource(C, r, n, e[n], { silent: !0 });
    t.silent || this.emit('added', C, r, e);
  }
  addResourceBundle(C, r, e, t, n) {
    let o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : { silent: !1 },
      a = [C, r];
    C.indexOf('.') > -1 && ((a = C.split('.')), (t = e), (e = r), (r = a[1])),
      this.addNamespaces(r);
    let i = Ut(this.data, a) || {};
    t ? le(i, e, n) : (i = tt(tt({}, i), e)),
      qt(this.data, a, i),
      o.silent || this.emit('added', C, r, e);
  }
  removeResourceBundle(C, r) {
    this.hasResourceBundle(C, r) && delete this.data[C][r],
      this.removeNamespaces(r),
      this.emit('removed', C, r);
  }
  hasResourceBundle(C, r) {
    return this.getResource(C, r) !== void 0;
  }
  getResourceBundle(C, r) {
    return (
      r || (r = this.options.defaultNS),
      this.options.compatibilityAPI === 'v1'
        ? tt({}, this.getResource(C, r))
        : this.getResource(C, r)
    );
  }
  getDataByLanguage(C) {
    return this.data[C];
  }
  hasLanguageSomeTranslations(C) {
    const r = this.getDataByLanguage(C);
    return !!((r && Object.keys(r)) || []).find((t) => r[t] && Object.keys(r[t]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var se = {
  processors: {},
  addPostProcessor(F) {
    this.processors[F.name] = F;
  },
  handle(F, C, r, e, t) {
    return (
      F.forEach((n) => {
        this.processors[n] && (C = this.processors[n].process(C, r, e, t));
      }),
      C
    );
  },
};
const te = {};
class Qt extends Vt {
  constructor(C) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(),
      Re(
        [
          'resourceStore',
          'languageUtils',
          'pluralResolver',
          'interpolator',
          'backendConnector',
          'i18nFormat',
          'utils',
        ],
        C,
        this,
      ),
      (this.options = r),
      this.options.keySeparator === void 0 && (this.options.keySeparator = '.'),
      (this.logger = pt.create('translator'));
  }
  changeLanguage(C) {
    C && (this.language = C);
  }
  exists(C) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { interpolation: {} };
    if (C == null) return !1;
    const e = this.resolve(C, r);
    return e && e.res !== void 0;
  }
  extractFromKey(C, r) {
    let e = r.nsSeparator !== void 0 ? r.nsSeparator : this.options.nsSeparator;
    e === void 0 && (e = ':');
    const t = r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator;
    let n = r.ns || this.options.defaultNS || [];
    const o = e && C.indexOf(e) > -1,
      a =
        !this.options.userDefinedKeySeparator &&
        !r.keySeparator &&
        !this.options.userDefinedNsSeparator &&
        !r.nsSeparator &&
        !Oe(C, e, t);
    if (o && !a) {
      const i = C.match(this.interpolator.nestingRegexp);
      if (i && i.length > 0) return { key: C, namespaces: n };
      const s = C.split(e);
      (e !== t || (e === t && this.options.ns.indexOf(s[0]) > -1)) && (n = s.shift()),
        (C = s.join(t));
    }
    return typeof n == 'string' && (n = [n]), { key: C, namespaces: n };
  }
  translate(C, r, e) {
    if (
      (typeof r != 'object' &&
        this.options.overloadTranslationOptionHandler &&
        (r = this.options.overloadTranslationOptionHandler(arguments)),
      typeof r == 'object' && (r = tt({}, r)),
      r || (r = {}),
      C == null)
    )
      return '';
    Array.isArray(C) || (C = [String(C)]);
    const t = r.returnDetails !== void 0 ? r.returnDetails : this.options.returnDetails,
      n = r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator,
      { key: o, namespaces: a } = this.extractFromKey(C[C.length - 1], r),
      i = a[a.length - 1],
      s = r.lng || this.language,
      h = r.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (s && s.toLowerCase() === 'cimode') {
      if (h) {
        const A = r.nsSeparator || this.options.nsSeparator;
        return t
          ? { res: `${i}${A}${o}`, usedKey: o, exactUsedKey: o, usedLng: s, usedNS: i }
          : `${i}${A}${o}`;
      }
      return t ? { res: o, usedKey: o, exactUsedKey: o, usedLng: s, usedNS: i } : o;
    }
    const u = this.resolve(C, r);
    let d = u && u.res;
    const v = (u && u.usedKey) || o,
      l = (u && u.exactUsedKey) || o,
      c = Object.prototype.toString.apply(d),
      f = ['[object Number]', '[object Function]', '[object RegExp]'],
      g = r.joinArrays !== void 0 ? r.joinArrays : this.options.joinArrays,
      p = !this.i18nFormat || this.i18nFormat.handleAsObject;
    if (
      p &&
      d &&
      typeof d != 'string' &&
      typeof d != 'boolean' &&
      typeof d != 'number' &&
      f.indexOf(c) < 0 &&
      !(typeof g == 'string' && c === '[object Array]')
    ) {
      if (!r.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler ||
          this.logger.warn('accessing an object - but returnObjects options is not enabled!');
        const A = this.options.returnedObjectHandler
          ? this.options.returnedObjectHandler(v, d, ct(tt({}, r), { ns: a }))
          : `key '${o} (${this.language})' returned an object instead of string.`;
        return t ? ((u.res = A), u) : A;
      }
      if (n) {
        const A = c === '[object Array]',
          y = A ? [] : {},
          E = A ? l : v;
        for (const S in d)
          if (Object.prototype.hasOwnProperty.call(d, S)) {
            const R = `${E}${n}${S}`;
            (y[S] = this.translate(R, ct(tt({}, r), { joinArrays: !1, ns: a }))),
              y[S] === R && (y[S] = d[S]);
          }
        d = y;
      }
    } else if (p && typeof g == 'string' && c === '[object Array]')
      (d = d.join(g)), d && (d = this.extendTranslation(d, C, r, e));
    else {
      let A = !1,
        y = !1;
      const E = r.count !== void 0 && typeof r.count != 'string',
        S = Qt.hasDefaultValue(r),
        R = E ? this.pluralResolver.getSuffix(s, r.count, r) : '',
        P = r.ordinal && E ? this.pluralResolver.getSuffix(s, r.count, { ordinal: !1 }) : '',
        D = r[`defaultValue${R}`] || r[`defaultValue${P}`] || r.defaultValue;
      !this.isValidLookup(d) && S && ((A = !0), (d = D)),
        this.isValidLookup(d) || ((y = !0), (d = o));
      const T =
          (r.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && y
            ? void 0
            : d,
        I = S && D !== d && this.options.updateMissing;
      if (y || A || I) {
        if ((this.logger.log(I ? 'updateKey' : 'missingKey', s, i, o, I ? D : d), n)) {
          const O = this.resolve(o, ct(tt({}, r), { keySeparator: !1 }));
          O &&
            O.res &&
            this.logger.warn(
              'Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.',
            );
        }
        let N = [];
        const M = this.languageUtils.getFallbackCodes(
          this.options.fallbackLng,
          r.lng || this.language,
        );
        if (this.options.saveMissingTo === 'fallback' && M && M[0])
          for (let O = 0; O < M.length; O++) N.push(M[O]);
        else
          this.options.saveMissingTo === 'all'
            ? (N = this.languageUtils.toResolveHierarchy(r.lng || this.language))
            : N.push(r.lng || this.language);
        const L = (O, B, w) => {
          const H = S && w !== d ? w : T;
          this.options.missingKeyHandler
            ? this.options.missingKeyHandler(O, i, B, H, I, r)
            : this.backendConnector &&
              this.backendConnector.saveMissing &&
              this.backendConnector.saveMissing(O, i, B, H, I, r),
            this.emit('missingKey', O, i, B, d);
        };
        this.options.saveMissing &&
          (this.options.saveMissingPlurals && E
            ? N.forEach((O) => {
                this.pluralResolver.getSuffixes(O, r).forEach((B) => {
                  L([O], o + B, r[`defaultValue${B}`] || D);
                });
              })
            : L(N, o, D));
      }
      (d = this.extendTranslation(d, C, r, u, e)),
        y && d === o && this.options.appendNamespaceToMissingKey && (d = `${i}:${o}`),
        (y || A) &&
          this.options.parseMissingKeyHandler &&
          (this.options.compatibilityAPI !== 'v1'
            ? (d = this.options.parseMissingKeyHandler(
                this.options.appendNamespaceToMissingKey ? `${i}:${o}` : o,
                A ? d : void 0,
              ))
            : (d = this.options.parseMissingKeyHandler(d)));
    }
    return t ? ((u.res = d), u) : d;
  }
  extendTranslation(C, r, e, t, n) {
    var o = this;
    if (this.i18nFormat && this.i18nFormat.parse)
      C = this.i18nFormat.parse(
        C,
        tt(tt({}, this.options.interpolation.defaultVariables), e),
        t.usedLng,
        t.usedNS,
        t.usedKey,
        { resolved: t },
      );
    else if (!e.skipInterpolation) {
      e.interpolation &&
        this.interpolator.init(
          ct(tt({}, e), { interpolation: tt(tt({}, this.options.interpolation), e.interpolation) }),
        );
      const s =
        typeof C == 'string' &&
        (e && e.interpolation && e.interpolation.skipOnVariables !== void 0
          ? e.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables);
      let h;
      if (s) {
        const d = C.match(this.interpolator.nestingRegexp);
        h = d && d.length;
      }
      let u = e.replace && typeof e.replace != 'string' ? e.replace : e;
      if (
        (this.options.interpolation.defaultVariables &&
          (u = tt(tt({}, this.options.interpolation.defaultVariables), u)),
        (C = this.interpolator.interpolate(C, u, e.lng || this.language, e)),
        s)
      ) {
        const d = C.match(this.interpolator.nestingRegexp),
          v = d && d.length;
        h < v && (e.nest = !1);
      }
      !e.lng && this.options.compatibilityAPI !== 'v1' && t && t.res && (e.lng = t.usedLng),
        e.nest !== !1 &&
          (C = this.interpolator.nest(
            C,
            function () {
              for (var d = arguments.length, v = new Array(d), l = 0; l < d; l++)
                v[l] = arguments[l];
              return n && n[0] === v[0] && !e.context
                ? (o.logger.warn(
                    `It seems you are nesting recursively key: ${v[0]} in key: ${r[0]}`,
                  ),
                  null)
                : o.translate(...v, r);
            },
            e,
          )),
        e.interpolation && this.interpolator.reset();
    }
    const a = e.postProcess || this.options.postProcess,
      i = typeof a == 'string' ? [a] : a;
    return (
      C != null &&
        i &&
        i.length &&
        e.applyPostProcessor !== !1 &&
        (C = se.handle(
          i,
          C,
          r,
          this.options && this.options.postProcessPassResolved ? tt({ i18nResolved: t }, e) : e,
          this,
        )),
      C
    );
  }
  resolve(C) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      e,
      t,
      n,
      o,
      a;
    return (
      typeof C == 'string' && (C = [C]),
      C.forEach((i) => {
        if (this.isValidLookup(e)) return;
        const s = this.extractFromKey(i, r),
          h = s.key;
        t = h;
        let u = s.namespaces;
        this.options.fallbackNS && (u = u.concat(this.options.fallbackNS));
        const d = r.count !== void 0 && typeof r.count != 'string',
          v = d && !r.ordinal && r.count === 0 && this.pluralResolver.shouldUseIntlApi(),
          l =
            r.context !== void 0 &&
            (typeof r.context == 'string' || typeof r.context == 'number') &&
            r.context !== '',
          c = r.lngs
            ? r.lngs
            : this.languageUtils.toResolveHierarchy(r.lng || this.language, r.fallbackLng);
        u.forEach((f) => {
          this.isValidLookup(e) ||
            ((a = f),
            !te[`${c[0]}-${f}`] &&
              this.utils &&
              this.utils.hasLoadedNamespace &&
              !this.utils.hasLoadedNamespace(a) &&
              ((te[`${c[0]}-${f}`] = !0),
              this.logger.warn(
                `key "${t}" for languages "${c.join(
                  ', ',
                )}" won't get resolved as namespace "${a}" was not yet loaded`,
                'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!',
              )),
            c.forEach((g) => {
              if (this.isValidLookup(e)) return;
              o = g;
              const p = [h];
              if (this.i18nFormat && this.i18nFormat.addLookupKeys)
                this.i18nFormat.addLookupKeys(p, h, g, f, r);
              else {
                let A;
                d && (A = this.pluralResolver.getSuffix(g, r.count, r));
                const y = `${this.options.pluralSeparator}zero`,
                  E = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                if (
                  (d &&
                    (p.push(h + A),
                    r.ordinal &&
                      A.indexOf(E) === 0 &&
                      p.push(h + A.replace(E, this.options.pluralSeparator)),
                    v && p.push(h + y)),
                  l)
                ) {
                  const S = `${h}${this.options.contextSeparator}${r.context}`;
                  p.push(S),
                    d &&
                      (p.push(S + A),
                      r.ordinal &&
                        A.indexOf(E) === 0 &&
                        p.push(S + A.replace(E, this.options.pluralSeparator)),
                      v && p.push(S + y));
                }
              }
              let m;
              for (; (m = p.pop()); )
                this.isValidLookup(e) || ((n = m), (e = this.getResource(g, f, m, r)));
            }));
        });
      }),
      { res: e, usedKey: t, exactUsedKey: n, usedLng: o, usedNS: a }
    );
  }
  isValidLookup(C) {
    return (
      C !== void 0 &&
      !(!this.options.returnNull && C === null) &&
      !(!this.options.returnEmptyString && C === '')
    );
  }
  getResource(C, r, e) {
    let t = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat && this.i18nFormat.getResource
      ? this.i18nFormat.getResource(C, r, e, t)
      : this.resourceStore.getResource(C, r, e, t);
  }
  static hasDefaultValue(C) {
    const r = 'defaultValue';
    for (const e in C)
      if (
        Object.prototype.hasOwnProperty.call(C, e) &&
        r === e.substring(0, r.length) &&
        C[e] !== void 0
      )
        return !0;
    return !1;
  }
}
function Gt(F) {
  return F.charAt(0).toUpperCase() + F.slice(1);
}
class ee {
  constructor(C) {
    (this.options = C),
      (this.supportedLngs = this.options.supportedLngs || !1),
      (this.logger = pt.create('languageUtils'));
  }
  getScriptPartFromCode(C) {
    if (((C = $t(C)), !C || C.indexOf('-') < 0)) return null;
    const r = C.split('-');
    return r.length === 2 || (r.pop(), r[r.length - 1].toLowerCase() === 'x')
      ? null
      : this.formatLanguageCode(r.join('-'));
  }
  getLanguagePartFromCode(C) {
    if (((C = $t(C)), !C || C.indexOf('-') < 0)) return C;
    const r = C.split('-');
    return this.formatLanguageCode(r[0]);
  }
  formatLanguageCode(C) {
    if (typeof C == 'string' && C.indexOf('-') > -1) {
      const r = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab'];
      let e = C.split('-');
      return (
        this.options.lowerCaseLng
          ? (e = e.map((t) => t.toLowerCase()))
          : e.length === 2
          ? ((e[0] = e[0].toLowerCase()),
            (e[1] = e[1].toUpperCase()),
            r.indexOf(e[1].toLowerCase()) > -1 && (e[1] = Gt(e[1].toLowerCase())))
          : e.length === 3 &&
            ((e[0] = e[0].toLowerCase()),
            e[1].length === 2 && (e[1] = e[1].toUpperCase()),
            e[0] !== 'sgn' && e[2].length === 2 && (e[2] = e[2].toUpperCase()),
            r.indexOf(e[1].toLowerCase()) > -1 && (e[1] = Gt(e[1].toLowerCase())),
            r.indexOf(e[2].toLowerCase()) > -1 && (e[2] = Gt(e[2].toLowerCase()))),
        e.join('-')
      );
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? C.toLowerCase() : C;
  }
  isSupportedCode(C) {
    return (
      (this.options.load === 'languageOnly' || this.options.nonExplicitSupportedLngs) &&
        (C = this.getLanguagePartFromCode(C)),
      !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(C) > -1
    );
  }
  getBestMatchFromCodes(C) {
    if (!C) return null;
    let r;
    return (
      C.forEach((e) => {
        if (r) return;
        const t = this.formatLanguageCode(e);
        (!this.options.supportedLngs || this.isSupportedCode(t)) && (r = t);
      }),
      !r &&
        this.options.supportedLngs &&
        C.forEach((e) => {
          if (r) return;
          const t = this.getLanguagePartFromCode(e);
          if (this.isSupportedCode(t)) return (r = t);
          r = this.options.supportedLngs.find((n) => {
            if (n === t) return n;
            if (!(n.indexOf('-') < 0 && t.indexOf('-') < 0) && n.indexOf(t) === 0) return n;
          });
        }),
      r || (r = this.getFallbackCodes(this.options.fallbackLng)[0]),
      r
    );
  }
  getFallbackCodes(C, r) {
    if (!C) return [];
    if (
      (typeof C == 'function' && (C = C(r)),
      typeof C == 'string' && (C = [C]),
      Object.prototype.toString.apply(C) === '[object Array]')
    )
      return C;
    if (!r) return C.default || [];
    let e = C[r];
    return (
      e || (e = C[this.getScriptPartFromCode(r)]),
      e || (e = C[this.formatLanguageCode(r)]),
      e || (e = C[this.getLanguagePartFromCode(r)]),
      e || (e = C.default),
      e || []
    );
  }
  toResolveHierarchy(C, r) {
    const e = this.getFallbackCodes(r || this.options.fallbackLng || [], C),
      t = [],
      n = (o) => {
        o &&
          (this.isSupportedCode(o)
            ? t.push(o)
            : this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`));
      };
    return (
      typeof C == 'string' && (C.indexOf('-') > -1 || C.indexOf('_') > -1)
        ? (this.options.load !== 'languageOnly' && n(this.formatLanguageCode(C)),
          this.options.load !== 'languageOnly' &&
            this.options.load !== 'currentOnly' &&
            n(this.getScriptPartFromCode(C)),
          this.options.load !== 'currentOnly' && n(this.getLanguagePartFromCode(C)))
        : typeof C == 'string' && n(this.formatLanguageCode(C)),
      e.forEach((o) => {
        t.indexOf(o) < 0 && n(this.formatLanguageCode(o));
      }),
      t
    );
  }
}
let Fe = [
    {
      lngs: [
        'ach',
        'ak',
        'am',
        'arn',
        'br',
        'fil',
        'gun',
        'ln',
        'mfe',
        'mg',
        'mi',
        'oc',
        'pt',
        'pt-BR',
        'tg',
        'tl',
        'ti',
        'tr',
        'uz',
        'wa',
      ],
      nr: [1, 2],
      fc: 1,
    },
    {
      lngs: [
        'af',
        'an',
        'ast',
        'az',
        'bg',
        'bn',
        'ca',
        'da',
        'de',
        'dev',
        'el',
        'en',
        'eo',
        'es',
        'et',
        'eu',
        'fi',
        'fo',
        'fur',
        'fy',
        'gl',
        'gu',
        'ha',
        'hi',
        'hu',
        'hy',
        'ia',
        'it',
        'kk',
        'kn',
        'ku',
        'lb',
        'mai',
        'ml',
        'mn',
        'mr',
        'nah',
        'nap',
        'nb',
        'ne',
        'nl',
        'nn',
        'no',
        'nso',
        'pa',
        'pap',
        'pms',
        'ps',
        'pt-PT',
        'rm',
        'sco',
        'se',
        'si',
        'so',
        'son',
        'sq',
        'sv',
        'sw',
        'ta',
        'te',
        'tk',
        'ur',
        'yo',
      ],
      nr: [1, 2],
      fc: 2,
    },
    {
      lngs: [
        'ay',
        'bo',
        'cgg',
        'fa',
        'ht',
        'id',
        'ja',
        'jbo',
        'ka',
        'km',
        'ko',
        'ky',
        'lo',
        'ms',
        'sah',
        'su',
        'th',
        'tt',
        'ug',
        'vi',
        'wo',
        'zh',
      ],
      nr: [1],
      fc: 3,
    },
    { lngs: ['be', 'bs', 'cnr', 'dz', 'hr', 'ru', 'sr', 'uk'], nr: [1, 2, 5], fc: 4 },
    { lngs: ['ar'], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
    { lngs: ['cs', 'sk'], nr: [1, 2, 5], fc: 6 },
    { lngs: ['csb', 'pl'], nr: [1, 2, 5], fc: 7 },
    { lngs: ['cy'], nr: [1, 2, 3, 8], fc: 8 },
    { lngs: ['fr'], nr: [1, 2], fc: 9 },
    { lngs: ['ga'], nr: [1, 2, 3, 7, 11], fc: 10 },
    { lngs: ['gd'], nr: [1, 2, 3, 20], fc: 11 },
    { lngs: ['is'], nr: [1, 2], fc: 12 },
    { lngs: ['jv'], nr: [0, 1], fc: 13 },
    { lngs: ['kw'], nr: [1, 2, 3, 4], fc: 14 },
    { lngs: ['lt'], nr: [1, 2, 10], fc: 15 },
    { lngs: ['lv'], nr: [1, 2, 0], fc: 16 },
    { lngs: ['mk'], nr: [1, 2], fc: 17 },
    { lngs: ['mnk'], nr: [0, 1, 2], fc: 18 },
    { lngs: ['mt'], nr: [1, 2, 11, 20], fc: 19 },
    { lngs: ['or'], nr: [2, 1], fc: 2 },
    { lngs: ['ro'], nr: [1, 2, 20], fc: 20 },
    { lngs: ['sl'], nr: [5, 1, 2, 3], fc: 21 },
    { lngs: ['he', 'iw'], nr: [1, 2, 20, 21], fc: 22 },
  ],
  Be = {
    1: function (F) {
      return +(F > 1);
    },
    2: function (F) {
      return +(F != 1);
    },
    3: function (F) {
      return 0;
    },
    4: function (F) {
      return F % 10 == 1 && F % 100 != 11
        ? 0
        : F % 10 >= 2 && F % 10 <= 4 && (F % 100 < 10 || F % 100 >= 20)
        ? 1
        : 2;
    },
    5: function (F) {
      return F == 0
        ? 0
        : F == 1
        ? 1
        : F == 2
        ? 2
        : F % 100 >= 3 && F % 100 <= 10
        ? 3
        : F % 100 >= 11
        ? 4
        : 5;
    },
    6: function (F) {
      return F == 1 ? 0 : F >= 2 && F <= 4 ? 1 : 2;
    },
    7: function (F) {
      return F == 1 ? 0 : F % 10 >= 2 && F % 10 <= 4 && (F % 100 < 10 || F % 100 >= 20) ? 1 : 2;
    },
    8: function (F) {
      return F == 1 ? 0 : F == 2 ? 1 : F != 8 && F != 11 ? 2 : 3;
    },
    9: function (F) {
      return +(F >= 2);
    },
    10: function (F) {
      return F == 1 ? 0 : F == 2 ? 1 : F < 7 ? 2 : F < 11 ? 3 : 4;
    },
    11: function (F) {
      return F == 1 || F == 11 ? 0 : F == 2 || F == 12 ? 1 : F > 2 && F < 20 ? 2 : 3;
    },
    12: function (F) {
      return +(F % 10 != 1 || F % 100 == 11);
    },
    13: function (F) {
      return +(F !== 0);
    },
    14: function (F) {
      return F == 1 ? 0 : F == 2 ? 1 : F == 3 ? 2 : 3;
    },
    15: function (F) {
      return F % 10 == 1 && F % 100 != 11
        ? 0
        : F % 10 >= 2 && (F % 100 < 10 || F % 100 >= 20)
        ? 1
        : 2;
    },
    16: function (F) {
      return F % 10 == 1 && F % 100 != 11 ? 0 : F !== 0 ? 1 : 2;
    },
    17: function (F) {
      return F == 1 || (F % 10 == 1 && F % 100 != 11) ? 0 : 1;
    },
    18: function (F) {
      return F == 0 ? 0 : F == 1 ? 1 : 2;
    },
    19: function (F) {
      return F == 1
        ? 0
        : F == 0 || (F % 100 > 1 && F % 100 < 11)
        ? 1
        : F % 100 > 10 && F % 100 < 20
        ? 2
        : 3;
    },
    20: function (F) {
      return F == 1 ? 0 : F == 0 || (F % 100 > 0 && F % 100 < 20) ? 1 : 2;
    },
    21: function (F) {
      return F % 100 == 1 ? 1 : F % 100 == 2 ? 2 : F % 100 == 3 || F % 100 == 4 ? 3 : 0;
    },
    22: function (F) {
      return F == 1 ? 0 : F == 2 ? 1 : (F < 0 || F > 10) && F % 10 == 0 ? 2 : 3;
    },
  };
const He = ['v1', 'v2', 'v3'],
  be = ['v4'],
  ne = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 };
function we() {
  const F = {};
  return (
    Fe.forEach((C) => {
      C.lngs.forEach((r) => {
        F[r] = { numbers: C.nr, plurals: Be[C.fc] };
      });
    }),
    F
  );
}
class Ue {
  constructor(C) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.languageUtils = C),
      (this.options = r),
      (this.logger = pt.create('pluralResolver')),
      (!this.options.compatibilityJSON || be.includes(this.options.compatibilityJSON)) &&
        (typeof Intl == 'undefined' || !Intl.PluralRules) &&
        ((this.options.compatibilityJSON = 'v3'),
        this.logger.error(
          'Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.',
        )),
      (this.rules = we());
  }
  addRule(C, r) {
    this.rules[C] = r;
  }
  getRule(C) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi())
      try {
        return new Intl.PluralRules($t(C), { type: r.ordinal ? 'ordinal' : 'cardinal' });
      } catch (e) {
        return;
      }
    return this.rules[C] || this.rules[this.languageUtils.getLanguagePartFromCode(C)];
  }
  needsPlural(C) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const e = this.getRule(C, r);
    return this.shouldUseIntlApi()
      ? e && e.resolvedOptions().pluralCategories.length > 1
      : e && e.numbers.length > 1;
  }
  getPluralFormsOfKey(C, r) {
    let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(C, e).map((t) => `${r}${t}`);
  }
  getSuffixes(C) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const e = this.getRule(C, r);
    return e
      ? this.shouldUseIntlApi()
        ? e
            .resolvedOptions()
            .pluralCategories.sort((t, n) => ne[t] - ne[n])
            .map(
              (t) =>
                `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ''}${t}`,
            )
        : e.numbers.map((t) => this.getSuffix(C, t, r))
      : [];
  }
  getSuffix(C, r) {
    let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const t = this.getRule(C, e);
    return t
      ? this.shouldUseIntlApi()
        ? `${this.options.prepend}${e.ordinal ? `ordinal${this.options.prepend}` : ''}${t.select(
            r,
          )}`
        : this.getSuffixRetroCompatible(t, r)
      : (this.logger.warn(`no plural rule found for: ${C}`), '');
  }
  getSuffixRetroCompatible(C, r) {
    const e = C.noAbs ? C.plurals(r) : C.plurals(Math.abs(r));
    let t = C.numbers[e];
    this.options.simplifyPluralSuffix &&
      C.numbers.length === 2 &&
      C.numbers[0] === 1 &&
      (t === 2 ? (t = 'plural') : t === 1 && (t = ''));
    const n = () =>
      this.options.prepend && t.toString() ? this.options.prepend + t.toString() : t.toString();
    return this.options.compatibilityJSON === 'v1'
      ? t === 1
        ? ''
        : typeof t == 'number'
        ? `_plural_${t.toString()}`
        : n()
      : this.options.compatibilityJSON === 'v2' ||
        (this.options.simplifyPluralSuffix && C.numbers.length === 2 && C.numbers[0] === 1)
      ? n()
      : this.options.prepend && e.toString()
      ? this.options.prepend + e.toString()
      : e.toString();
  }
  shouldUseIntlApi() {
    return !He.includes(this.options.compatibilityJSON);
  }
}
function re(F, C, r) {
  let e = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : '.',
    t = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
    n = Ie(F, C, r);
  return (
    !n && t && typeof r == 'string' && ((n = jt(F, r, e)), n === void 0 && (n = jt(C, r, e))), n
  );
}
class je {
  constructor() {
    let C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    (this.logger = pt.create('interpolator')),
      (this.options = C),
      (this.format = (C.interpolation && C.interpolation.format) || ((r) => r)),
      this.init(C);
  }
  init() {
    let C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    C.interpolation || (C.interpolation = { escapeValue: !0 });
    const r = C.interpolation;
    (this.escape = r.escape !== void 0 ? r.escape : Ne),
      (this.escapeValue = r.escapeValue !== void 0 ? r.escapeValue : !0),
      (this.useRawValueToEscape = r.useRawValueToEscape !== void 0 ? r.useRawValueToEscape : !1),
      (this.prefix = r.prefix ? Pt(r.prefix) : r.prefixEscaped || '{{'),
      (this.suffix = r.suffix ? Pt(r.suffix) : r.suffixEscaped || '}}'),
      (this.formatSeparator = r.formatSeparator ? r.formatSeparator : r.formatSeparator || ','),
      (this.unescapePrefix = r.unescapeSuffix ? '' : r.unescapePrefix || '-'),
      (this.unescapeSuffix = this.unescapePrefix ? '' : r.unescapeSuffix || ''),
      (this.nestingPrefix = r.nestingPrefix
        ? Pt(r.nestingPrefix)
        : r.nestingPrefixEscaped || Pt('$t(')),
      (this.nestingSuffix = r.nestingSuffix
        ? Pt(r.nestingSuffix)
        : r.nestingSuffixEscaped || Pt(')')),
      (this.nestingOptionsSeparator = r.nestingOptionsSeparator
        ? r.nestingOptionsSeparator
        : r.nestingOptionsSeparator || ','),
      (this.maxReplaces = r.maxReplaces ? r.maxReplaces : 1e3),
      (this.alwaysFormat = r.alwaysFormat !== void 0 ? r.alwaysFormat : !1),
      this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const C = `${this.prefix}(.+?)${this.suffix}`;
    this.regexp = new RegExp(C, 'g');
    const r = `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`;
    this.regexpUnescape = new RegExp(r, 'g');
    const e = `${this.nestingPrefix}(.+?)${this.nestingSuffix}`;
    this.nestingRegexp = new RegExp(e, 'g');
  }
  interpolate(C, r, e, t) {
    let n, o, a;
    const i =
      (this.options && this.options.interpolation && this.options.interpolation.defaultVariables) ||
      {};
    function s(l) {
      return l.replace(/\$/g, '$$$$');
    }
    const h = (l) => {
      if (l.indexOf(this.formatSeparator) < 0) {
        const p = re(r, i, l, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat
          ? this.format(p, void 0, e, ct(tt(tt({}, t), r), { interpolationkey: l }))
          : p;
      }
      const c = l.split(this.formatSeparator),
        f = c.shift().trim(),
        g = c.join(this.formatSeparator).trim();
      return this.format(
        re(r, i, f, this.options.keySeparator, this.options.ignoreJSONStructure),
        g,
        e,
        ct(tt(tt({}, t), r), { interpolationkey: f }),
      );
    };
    this.resetRegExp();
    const u = (t && t.missingInterpolationHandler) || this.options.missingInterpolationHandler,
      d =
        t && t.interpolation && t.interpolation.skipOnVariables !== void 0
          ? t.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables;
    return (
      [
        { regex: this.regexpUnescape, safeValue: (l) => s(l) },
        { regex: this.regexp, safeValue: (l) => (this.escapeValue ? s(this.escape(l)) : s(l)) },
      ].forEach((l) => {
        for (a = 0; (n = l.regex.exec(C)); ) {
          const c = n[1].trim();
          if (((o = h(c)), o === void 0))
            if (typeof u == 'function') {
              const g = u(C, n, t);
              o = typeof g == 'string' ? g : '';
            } else if (t && Object.prototype.hasOwnProperty.call(t, c)) o = '';
            else if (d) {
              o = n[0];
              continue;
            } else
              this.logger.warn(`missed to pass in variable ${c} for interpolating ${C}`), (o = '');
          else typeof o != 'string' && !this.useRawValueToEscape && (o = kt(o));
          const f = l.safeValue(o);
          if (
            ((C = C.replace(n[0], f)),
            d
              ? ((l.regex.lastIndex += o.length), (l.regex.lastIndex -= n[0].length))
              : (l.regex.lastIndex = 0),
            a++,
            a >= this.maxReplaces)
          )
            break;
        }
      }),
      C
    );
  }
  nest(C, r) {
    let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      t,
      n,
      o;
    function a(i, s) {
      const h = this.nestingOptionsSeparator;
      if (i.indexOf(h) < 0) return i;
      const u = i.split(new RegExp(`${h}[ ]*{`));
      let d = `{${u[1]}`;
      (i = u[0]), (d = this.interpolate(d, o));
      const v = d.match(/'/g),
        l = d.match(/"/g);
      ((v && v.length % 2 === 0 && !l) || l.length % 2 !== 0) && (d = d.replace(/'/g, '"'));
      try {
        (o = JSON.parse(d)), s && (o = tt(tt({}, s), o));
      } catch (c) {
        return (
          this.logger.warn(`failed parsing options string in nesting for key ${i}`, c),
          `${i}${h}${d}`
        );
      }
      return delete o.defaultValue, i;
    }
    for (; (t = this.nestingRegexp.exec(C)); ) {
      let i = [];
      (o = tt({}, e)),
        (o = o.replace && typeof o.replace != 'string' ? o.replace : o),
        (o.applyPostProcessor = !1),
        delete o.defaultValue;
      let s = !1;
      if (t[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(t[1])) {
        const h = t[1].split(this.formatSeparator).map((u) => u.trim());
        (t[1] = h.shift()), (i = h), (s = !0);
      }
      if (((n = r(a.call(this, t[1].trim(), o), o)), n && t[0] === C && typeof n != 'string'))
        return n;
      typeof n != 'string' && (n = kt(n)),
        n || (this.logger.warn(`missed to resolve ${t[1]} for nesting ${C}`), (n = '')),
        s &&
          (n = i.reduce(
            (h, u) => this.format(h, u, e.lng, ct(tt({}, e), { interpolationkey: t[1].trim() })),
            n.trim(),
          )),
        (C = C.replace(t[0], n)),
        (this.regexp.lastIndex = 0);
    }
    return C;
  }
}
function $e(F) {
  let C = F.toLowerCase().trim();
  const r = {};
  if (F.indexOf('(') > -1) {
    const e = F.split('(');
    C = e[0].toLowerCase().trim();
    const t = e[1].substring(0, e[1].length - 1);
    C === 'currency' && t.indexOf(':') < 0
      ? r.currency || (r.currency = t.trim())
      : C === 'relativetime' && t.indexOf(':') < 0
      ? r.range || (r.range = t.trim())
      : t.split(';').forEach((o) => {
          if (!o) return;
          const [a, ...i] = o.split(':'),
            s = i
              .join(':')
              .trim()
              .replace(/^'+|'+$/g, '');
          r[a.trim()] || (r[a.trim()] = s),
            s === 'false' && (r[a.trim()] = !1),
            s === 'true' && (r[a.trim()] = !0),
            isNaN(s) || (r[a.trim()] = parseInt(s, 10));
        });
  }
  return { formatName: C, formatOptions: r };
}
function It(F) {
  const C = {};
  return function (e, t, n) {
    const o = t + JSON.stringify(n);
    let a = C[o];
    return a || ((a = F($t(t), n)), (C[o] = a)), a(e);
  };
}
class Qe {
  constructor() {
    let C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    (this.logger = pt.create('formatter')),
      (this.options = C),
      (this.formats = {
        number: It((r, e) => {
          const t = new Intl.NumberFormat(r, tt({}, e));
          return (n) => t.format(n);
        }),
        currency: It((r, e) => {
          const t = new Intl.NumberFormat(r, ct(tt({}, e), { style: 'currency' }));
          return (n) => t.format(n);
        }),
        datetime: It((r, e) => {
          const t = new Intl.DateTimeFormat(r, tt({}, e));
          return (n) => t.format(n);
        }),
        relativetime: It((r, e) => {
          const t = new Intl.RelativeTimeFormat(r, tt({}, e));
          return (n) => t.format(n, e.range || 'day');
        }),
        list: It((r, e) => {
          const t = new Intl.ListFormat(r, tt({}, e));
          return (n) => t.format(n);
        }),
      }),
      this.init(C);
  }
  init(C) {
    const e = (
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { interpolation: {} }
    ).interpolation;
    this.formatSeparator = e.formatSeparator ? e.formatSeparator : e.formatSeparator || ',';
  }
  add(C, r) {
    this.formats[C.toLowerCase().trim()] = r;
  }
  addCached(C, r) {
    this.formats[C.toLowerCase().trim()] = It(r);
  }
  format(C, r, e) {
    let t = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return r.split(this.formatSeparator).reduce((a, i) => {
      const { formatName: s, formatOptions: h } = $e(i);
      if (this.formats[s]) {
        let u = a;
        try {
          const d = (t && t.formatParams && t.formatParams[t.interpolationkey]) || {},
            v = d.locale || d.lng || t.locale || t.lng || e;
          u = this.formats[s](a, v, tt(tt(tt({}, h), t), d));
        } catch (d) {
          this.logger.warn(d);
        }
        return u;
      } else this.logger.warn(`there was no format function for ${s}`);
      return a;
    }, C);
  }
}
function Ve(F, C) {
  F.pending[C] !== void 0 && (delete F.pending[C], F.pendingCount--);
}
class Ye extends Vt {
  constructor(C, r, e) {
    let t = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(),
      (this.backend = C),
      (this.store = r),
      (this.services = e),
      (this.languageUtils = e.languageUtils),
      (this.options = t),
      (this.logger = pt.create('backendConnector')),
      (this.waitingReads = []),
      (this.maxParallelReads = t.maxParallelReads || 10),
      (this.readingCalls = 0),
      (this.maxRetries = t.maxRetries >= 0 ? t.maxRetries : 5),
      (this.retryTimeout = t.retryTimeout >= 1 ? t.retryTimeout : 350),
      (this.state = {}),
      (this.queue = []),
      this.backend && this.backend.init && this.backend.init(e, t.backend, t);
  }
  queueLoad(C, r, e, t) {
    const n = {},
      o = {},
      a = {},
      i = {};
    return (
      C.forEach((s) => {
        let h = !0;
        r.forEach((u) => {
          const d = `${s}|${u}`;
          !e.reload && this.store.hasResourceBundle(s, u)
            ? (this.state[d] = 2)
            : this.state[d] < 0 ||
              (this.state[d] === 1
                ? o[d] === void 0 && (o[d] = !0)
                : ((this.state[d] = 1),
                  (h = !1),
                  o[d] === void 0 && (o[d] = !0),
                  n[d] === void 0 && (n[d] = !0),
                  i[u] === void 0 && (i[u] = !0)));
        }),
          h || (a[s] = !0);
      }),
      (Object.keys(n).length || Object.keys(o).length) &&
        this.queue.push({
          pending: o,
          pendingCount: Object.keys(o).length,
          loaded: {},
          errors: [],
          callback: t,
        }),
      {
        toLoad: Object.keys(n),
        pending: Object.keys(o),
        toLoadLanguages: Object.keys(a),
        toLoadNamespaces: Object.keys(i),
      }
    );
  }
  loaded(C, r, e) {
    const t = C.split('|'),
      n = t[0],
      o = t[1];
    r && this.emit('failedLoading', n, o, r),
      e && this.store.addResourceBundle(n, o, e),
      (this.state[C] = r ? -1 : 2);
    const a = {};
    this.queue.forEach((i) => {
      Pe(i.loaded, [n], o),
        Ve(i, C),
        r && i.errors.push(r),
        i.pendingCount === 0 &&
          !i.done &&
          (Object.keys(i.loaded).forEach((s) => {
            a[s] || (a[s] = {});
            const h = i.loaded[s];
            h.length &&
              h.forEach((u) => {
                a[s][u] === void 0 && (a[s][u] = !0);
              });
          }),
          (i.done = !0),
          i.errors.length ? i.callback(i.errors) : i.callback());
    }),
      this.emit('loaded', a),
      (this.queue = this.queue.filter((i) => !i.done));
  }
  read(C, r, e) {
    let t = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
      n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout,
      o = arguments.length > 5 ? arguments[5] : void 0;
    if (!C.length) return o(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({ lng: C, ns: r, fcName: e, tried: t, wait: n, callback: o });
      return;
    }
    this.readingCalls++;
    const a = (s, h) => {
        if ((this.readingCalls--, this.waitingReads.length > 0)) {
          const u = this.waitingReads.shift();
          this.read(u.lng, u.ns, u.fcName, u.tried, u.wait, u.callback);
        }
        if (s && h && t < this.maxRetries) {
          setTimeout(() => {
            this.read.call(this, C, r, e, t + 1, n * 2, o);
          }, n);
          return;
        }
        o(s, h);
      },
      i = this.backend[e].bind(this.backend);
    if (i.length === 2) {
      try {
        const s = i(C, r);
        s && typeof s.then == 'function' ? s.then((h) => a(null, h)).catch(a) : a(null, s);
      } catch (s) {
        a(s);
      }
      return;
    }
    return i(C, r, a);
  }
  prepareLoading(C, r) {
    let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      t = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return (
        this.logger.warn('No backend was added via i18next.use. Will not load resources.'), t && t()
      );
    typeof C == 'string' && (C = this.languageUtils.toResolveHierarchy(C)),
      typeof r == 'string' && (r = [r]);
    const n = this.queueLoad(C, r, e, t);
    if (!n.toLoad.length) return n.pending.length || t(), null;
    n.toLoad.forEach((o) => {
      this.loadOne(o);
    });
  }
  load(C, r, e) {
    this.prepareLoading(C, r, {}, e);
  }
  reload(C, r, e) {
    this.prepareLoading(C, r, { reload: !0 }, e);
  }
  loadOne(C) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '';
    const e = C.split('|'),
      t = e[0],
      n = e[1];
    this.read(t, n, 'read', void 0, void 0, (o, a) => {
      o && this.logger.warn(`${r}loading namespace ${n} for language ${t} failed`, o),
        !o && a && this.logger.log(`${r}loaded namespace ${n} for language ${t}`, a),
        this.loaded(C, o, a);
    });
  }
  saveMissing(C, r, e, t, n) {
    let o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {},
      a = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {};
    if (
      this.services.utils &&
      this.services.utils.hasLoadedNamespace &&
      !this.services.utils.hasLoadedNamespace(r)
    ) {
      this.logger.warn(
        `did not save key "${e}" as the namespace "${r}" was not yet loaded`,
        'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!',
      );
      return;
    }
    if (!(e == null || e === '')) {
      if (this.backend && this.backend.create) {
        const i = ct(tt({}, o), { isUpdate: n }),
          s = this.backend.create.bind(this.backend);
        if (s.length < 6)
          try {
            let h;
            s.length === 5 ? (h = s(C, r, e, t, i)) : (h = s(C, r, e, t)),
              h && typeof h.then == 'function' ? h.then((u) => a(null, u)).catch(a) : a(null, h);
          } catch (h) {
            a(h);
          }
        else s(C, r, e, t, a, i);
      }
      !C || !C[0] || this.store.addResource(C[0], r, e, t);
    }
  }
}
function oe() {
  return {
    debug: !1,
    initImmediate: !0,
    ns: ['translation'],
    defaultNS: ['translation'],
    fallbackLng: ['dev'],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: 'all',
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: '.',
    nsSeparator: ':',
    pluralSeparator: '_',
    contextSeparator: '_',
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: 'fallback',
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !1,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: function (C) {
      let r = {};
      if (
        (typeof C[1] == 'object' && (r = C[1]),
        typeof C[1] == 'string' && (r.defaultValue = C[1]),
        typeof C[2] == 'string' && (r.tDescription = C[2]),
        typeof C[2] == 'object' || typeof C[3] == 'object')
      ) {
        const e = C[3] || C[2];
        Object.keys(e).forEach((t) => {
          r[t] = e[t];
        });
      }
      return r;
    },
    interpolation: {
      escapeValue: !0,
      format: (F, C, r, e) => F,
      prefix: '{{',
      suffix: '}}',
      formatSeparator: ',',
      unescapePrefix: '-',
      nestingPrefix: '$t(',
      nestingSuffix: ')',
      nestingOptionsSeparator: ',',
      maxReplaces: 1e3,
      skipOnVariables: !0,
    },
  };
}
function ae(F) {
  return (
    typeof F.ns == 'string' && (F.ns = [F.ns]),
    typeof F.fallbackLng == 'string' && (F.fallbackLng = [F.fallbackLng]),
    typeof F.fallbackNS == 'string' && (F.fallbackNS = [F.fallbackNS]),
    F.supportedLngs &&
      F.supportedLngs.indexOf('cimode') < 0 &&
      (F.supportedLngs = F.supportedLngs.concat(['cimode'])),
    F
  );
}
function bt() {}
function ze(F) {
  Object.getOwnPropertyNames(Object.getPrototypeOf(F)).forEach((r) => {
    typeof F[r] == 'function' && (F[r] = F[r].bind(F));
  });
}
class Ft extends Vt {
  constructor() {
    let C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = arguments.length > 1 ? arguments[1] : void 0;
    if (
      (super(),
      (this.options = ae(C)),
      (this.services = {}),
      (this.logger = pt),
      (this.modules = { external: [] }),
      ze(this),
      r && !this.isInitialized && !C.isClone)
    ) {
      if (!this.options.initImmediate) return this.init(C, r), this;
      setTimeout(() => {
        this.init(C, r);
      }, 0);
    }
  }
  init() {
    var C = this;
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      e = arguments.length > 1 ? arguments[1] : void 0;
    typeof r == 'function' && ((e = r), (r = {})),
      !r.defaultNS &&
        r.defaultNS !== !1 &&
        r.ns &&
        (typeof r.ns == 'string'
          ? (r.defaultNS = r.ns)
          : r.ns.indexOf('translation') < 0 && (r.defaultNS = r.ns[0]));
    const t = oe();
    (this.options = tt(tt(tt({}, t), this.options), ae(r))),
      this.options.compatibilityAPI !== 'v1' &&
        (this.options.interpolation = tt(tt({}, t.interpolation), this.options.interpolation)),
      r.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = r.keySeparator),
      r.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = r.nsSeparator);
    function n(h) {
      return h ? (typeof h == 'function' ? new h() : h) : null;
    }
    if (!this.options.isClone) {
      this.modules.logger
        ? pt.init(n(this.modules.logger), this.options)
        : pt.init(null, this.options);
      let h;
      this.modules.formatter
        ? (h = this.modules.formatter)
        : typeof Intl != 'undefined' && (h = Qe);
      const u = new ee(this.options);
      this.store = new _t(this.options.resources, this.options);
      const d = this.services;
      (d.logger = pt),
        (d.resourceStore = this.store),
        (d.languageUtils = u),
        (d.pluralResolver = new Ue(u, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix,
        })),
        h &&
          (!this.options.interpolation.format ||
            this.options.interpolation.format === t.interpolation.format) &&
          ((d.formatter = n(h)),
          d.formatter.init(d, this.options),
          (this.options.interpolation.format = d.formatter.format.bind(d.formatter))),
        (d.interpolator = new je(this.options)),
        (d.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
        (d.backendConnector = new Ye(n(this.modules.backend), d.resourceStore, d, this.options)),
        d.backendConnector.on('*', function (v) {
          for (var l = arguments.length, c = new Array(l > 1 ? l - 1 : 0), f = 1; f < l; f++)
            c[f - 1] = arguments[f];
          C.emit(v, ...c);
        }),
        this.modules.languageDetector &&
          ((d.languageDetector = n(this.modules.languageDetector)),
          d.languageDetector.init &&
            d.languageDetector.init(d, this.options.detection, this.options)),
        this.modules.i18nFormat &&
          ((d.i18nFormat = n(this.modules.i18nFormat)),
          d.i18nFormat.init && d.i18nFormat.init(this)),
        (this.translator = new Qt(this.services, this.options)),
        this.translator.on('*', function (v) {
          for (var l = arguments.length, c = new Array(l > 1 ? l - 1 : 0), f = 1; f < l; f++)
            c[f - 1] = arguments[f];
          C.emit(v, ...c);
        }),
        this.modules.external.forEach((v) => {
          v.init && v.init(this);
        });
    }
    if (
      ((this.format = this.options.interpolation.format),
      e || (e = bt),
      this.options.fallbackLng && !this.services.languageDetector && !this.options.lng)
    ) {
      const h = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      h.length > 0 && h[0] !== 'dev' && (this.options.lng = h[0]);
    }
    !this.services.languageDetector &&
      !this.options.lng &&
      this.logger.warn('init: no languageDetector is used and no lng is defined'),
      ['getResource', 'hasResourceBundle', 'getResourceBundle', 'getDataByLanguage'].forEach(
        (h) => {
          this[h] = function () {
            return C.store[h](...arguments);
          };
        },
      ),
      ['addResource', 'addResources', 'addResourceBundle', 'removeResourceBundle'].forEach((h) => {
        this[h] = function () {
          return C.store[h](...arguments), C;
        };
      });
    const i = Ot(),
      s = () => {
        const h = (u, d) => {
          this.isInitialized &&
            !this.initializedStoreOnce &&
            this.logger.warn(
              'init: i18next is already initialized. You should call init just once!',
            ),
            (this.isInitialized = !0),
            this.options.isClone || this.logger.log('initialized', this.options),
            this.emit('initialized', this.options),
            i.resolve(d),
            e(u, d);
        };
        if (this.languages && this.options.compatibilityAPI !== 'v1' && !this.isInitialized)
          return h(null, this.t.bind(this));
        this.changeLanguage(this.options.lng, h);
      };
    return this.options.resources || !this.options.initImmediate ? s() : setTimeout(s, 0), i;
  }
  loadResources(C) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : bt;
    const t = typeof C == 'string' ? C : this.language;
    if (
      (typeof C == 'function' && (e = C),
      !this.options.resources || this.options.partialBundledLanguages)
    ) {
      if (t && t.toLowerCase() === 'cimode') return e();
      const n = [],
        o = (a) => {
          if (!a) return;
          this.services.languageUtils.toResolveHierarchy(a).forEach((s) => {
            n.indexOf(s) < 0 && n.push(s);
          });
        };
      t
        ? o(t)
        : this.services.languageUtils
            .getFallbackCodes(this.options.fallbackLng)
            .forEach((i) => o(i)),
        this.options.preload && this.options.preload.forEach((a) => o(a)),
        this.services.backendConnector.load(n, this.options.ns, (a) => {
          !a && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language),
            e(a);
        });
    } else e(null);
  }
  reloadResources(C, r, e) {
    const t = Ot();
    return (
      C || (C = this.languages),
      r || (r = this.options.ns),
      e || (e = bt),
      this.services.backendConnector.reload(C, r, (n) => {
        t.resolve(), e(n);
      }),
      t
    );
  }
  use(C) {
    if (!C)
      throw new Error(
        'You are passing an undefined module! Please check the object you are passing to i18next.use()',
      );
    if (!C.type)
      throw new Error(
        'You are passing a wrong module! Please check the object you are passing to i18next.use()',
      );
    return (
      C.type === 'backend' && (this.modules.backend = C),
      (C.type === 'logger' || (C.log && C.warn && C.error)) && (this.modules.logger = C),
      C.type === 'languageDetector' && (this.modules.languageDetector = C),
      C.type === 'i18nFormat' && (this.modules.i18nFormat = C),
      C.type === 'postProcessor' && se.addPostProcessor(C),
      C.type === 'formatter' && (this.modules.formatter = C),
      C.type === '3rdParty' && this.modules.external.push(C),
      this
    );
  }
  setResolvedLanguage(C) {
    if (!(!C || !this.languages) && !(['cimode', 'dev'].indexOf(C) > -1))
      for (let r = 0; r < this.languages.length; r++) {
        const e = this.languages[r];
        if (!(['cimode', 'dev'].indexOf(e) > -1) && this.store.hasLanguageSomeTranslations(e)) {
          this.resolvedLanguage = e;
          break;
        }
      }
  }
  changeLanguage(C, r) {
    var e = this;
    this.isLanguageChangingTo = C;
    const t = Ot();
    this.emit('languageChanging', C);
    const n = (i) => {
        (this.language = i),
          (this.languages = this.services.languageUtils.toResolveHierarchy(i)),
          (this.resolvedLanguage = void 0),
          this.setResolvedLanguage(i);
      },
      o = (i, s) => {
        s
          ? (n(s),
            this.translator.changeLanguage(s),
            (this.isLanguageChangingTo = void 0),
            this.emit('languageChanged', s),
            this.logger.log('languageChanged', s))
          : (this.isLanguageChangingTo = void 0),
          t.resolve(function () {
            return e.t(...arguments);
          }),
          r &&
            r(i, function () {
              return e.t(...arguments);
            });
      },
      a = (i) => {
        !C && !i && this.services.languageDetector && (i = []);
        const s = typeof i == 'string' ? i : this.services.languageUtils.getBestMatchFromCodes(i);
        s &&
          (this.language || n(s),
          this.translator.language || this.translator.changeLanguage(s),
          this.services.languageDetector &&
            this.services.languageDetector.cacheUserLanguage &&
            this.services.languageDetector.cacheUserLanguage(s)),
          this.loadResources(s, (h) => {
            o(h, s);
          });
      };
    return (
      !C && this.services.languageDetector && !this.services.languageDetector.async
        ? a(this.services.languageDetector.detect())
        : !C && this.services.languageDetector && this.services.languageDetector.async
        ? this.services.languageDetector.detect.length === 0
          ? this.services.languageDetector.detect().then(a)
          : this.services.languageDetector.detect(a)
        : a(C),
      t
    );
  }
  getFixedT(C, r, e) {
    var t = this;
    const n = function (o, a) {
      let i;
      if (typeof a != 'object') {
        for (var s = arguments.length, h = new Array(s > 2 ? s - 2 : 0), u = 2; u < s; u++)
          h[u - 2] = arguments[u];
        i = t.options.overloadTranslationOptionHandler([o, a].concat(h));
      } else i = tt({}, a);
      (i.lng = i.lng || n.lng),
        (i.lngs = i.lngs || n.lngs),
        (i.ns = i.ns || n.ns),
        (i.keyPrefix = i.keyPrefix || e || n.keyPrefix);
      const d = t.options.keySeparator || '.';
      let v;
      return (
        i.keyPrefix && Array.isArray(o)
          ? (v = o.map((l) => `${i.keyPrefix}${d}${l}`))
          : (v = i.keyPrefix ? `${i.keyPrefix}${d}${o}` : o),
        t.t(v, i)
      );
    };
    return typeof C == 'string' ? (n.lng = C) : (n.lngs = C), (n.ns = r), (n.keyPrefix = e), n;
  }
  t() {
    return this.translator && this.translator.translate(...arguments);
  }
  exists() {
    return this.translator && this.translator.exists(...arguments);
  }
  setDefaultNamespace(C) {
    this.options.defaultNS = C;
  }
  hasLoadedNamespace(C) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return (
        this.logger.warn('hasLoadedNamespace: i18next was not initialized', this.languages), !1
      );
    if (!this.languages || !this.languages.length)
      return (
        this.logger.warn(
          'hasLoadedNamespace: i18n.languages were undefined or empty',
          this.languages,
        ),
        !1
      );
    const e = r.lng || this.resolvedLanguage || this.languages[0],
      t = this.options ? this.options.fallbackLng : !1,
      n = this.languages[this.languages.length - 1];
    if (e.toLowerCase() === 'cimode') return !0;
    const o = (a, i) => {
      const s = this.services.backendConnector.state[`${a}|${i}`];
      return s === -1 || s === 2;
    };
    if (r.precheck) {
      const a = r.precheck(this, o);
      if (a !== void 0) return a;
    }
    return !!(
      this.hasResourceBundle(e, C) ||
      !this.services.backendConnector.backend ||
      (this.options.resources && !this.options.partialBundledLanguages) ||
      (o(e, C) && (!t || o(n, C)))
    );
  }
  loadNamespaces(C, r) {
    const e = Ot();
    return this.options.ns
      ? (typeof C == 'string' && (C = [C]),
        C.forEach((t) => {
          this.options.ns.indexOf(t) < 0 && this.options.ns.push(t);
        }),
        this.loadResources((t) => {
          e.resolve(), r && r(t);
        }),
        e)
      : (r && r(), Promise.resolve());
  }
  loadLanguages(C, r) {
    const e = Ot();
    typeof C == 'string' && (C = [C]);
    const t = this.options.preload || [],
      n = C.filter((o) => t.indexOf(o) < 0);
    return n.length
      ? ((this.options.preload = t.concat(n)),
        this.loadResources((o) => {
          e.resolve(), r && r(o);
        }),
        e)
      : (r && r(), Promise.resolve());
  }
  dir(C) {
    if (
      (C ||
        (C =
          this.resolvedLanguage ||
          (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)),
      !C)
    )
      return 'rtl';
    const r = [
        'ar',
        'shu',
        'sqr',
        'ssh',
        'xaa',
        'yhd',
        'yud',
        'aao',
        'abh',
        'abv',
        'acm',
        'acq',
        'acw',
        'acx',
        'acy',
        'adf',
        'ads',
        'aeb',
        'aec',
        'afb',
        'ajp',
        'apc',
        'apd',
        'arb',
        'arq',
        'ars',
        'ary',
        'arz',
        'auz',
        'avl',
        'ayh',
        'ayl',
        'ayn',
        'ayp',
        'bbz',
        'pga',
        'he',
        'iw',
        'ps',
        'pbt',
        'pbu',
        'pst',
        'prp',
        'prd',
        'ug',
        'ur',
        'ydd',
        'yds',
        'yih',
        'ji',
        'yi',
        'hbo',
        'men',
        'xmn',
        'fa',
        'jpr',
        'peo',
        'pes',
        'prs',
        'dv',
        'sam',
        'ckb',
      ],
      e = (this.services && this.services.languageUtils) || new ee(oe());
    return r.indexOf(e.getLanguagePartFromCode(C)) > -1 || C.toLowerCase().indexOf('-arab') > 1
      ? 'rtl'
      : 'ltr';
  }
  static createInstance() {
    let C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = arguments.length > 1 ? arguments[1] : void 0;
    return new Ft(C, r);
  }
  cloneInstance() {
    let C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : bt;
    const e = C.forkResourceStore;
    e && delete C.forkResourceStore;
    const t = ct(tt(tt({}, this.options), C), { isClone: !0 }),
      n = new Ft(t);
    return (
      (C.debug !== void 0 || C.prefix !== void 0) && (n.logger = n.logger.clone(C)),
      ['store', 'services', 'language'].forEach((a) => {
        n[a] = this[a];
      }),
      (n.services = tt({}, this.services)),
      (n.services.utils = { hasLoadedNamespace: n.hasLoadedNamespace.bind(n) }),
      e && ((n.store = new _t(this.store.data, t)), (n.services.resourceStore = n.store)),
      (n.translator = new Qt(n.services, t)),
      n.translator.on('*', function (a) {
        for (var i = arguments.length, s = new Array(i > 1 ? i - 1 : 0), h = 1; h < i; h++)
          s[h - 1] = arguments[h];
        n.emit(a, ...s);
      }),
      n.init(t, r),
      (n.translator.options = t),
      (n.translator.backendConnector.services.utils = {
        hasLoadedNamespace: n.hasLoadedNamespace.bind(n),
      }),
      n
    );
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage,
    };
  }
}
const it = Ft.createInstance();
it.createInstance = Ft.createInstance;
it.createInstance;
it.dir;
it.init;
it.loadResources;
it.reloadResources;
it.use;
it.changeLanguage;
it.getFixedT;
it.t;
it.exists;
it.setDefaultNamespace;
it.hasLoadedNamespace;
it.loadNamespaces;
it.loadLanguages;
const Ke = { class: 'page-container' },
  Ge = ['innerHTML'],
  Je = ge({
    __name: 'index',
    setup(F) {
      const C = zt({}),
        r = zt({}),
        e = zt(''),
        { locale: t } = me();
      function n() {
        (r.value = new De(Ee(C))),
          (r.value.config.lang = t.value === Kt.ZHCN ? Kt.ZHCN : Kt.EN),
          (r.value.config.height = 500),
          (r.value.i18next = it),
          Object.assign(r.value.config, {
            onchange() {
              e.value = r.value.txt.html();
            },
          }),
          r.value.create();
      }
      return (
        Ae(() => {
          n();
        }),
        (o, a) => (
          ye(),
          xe('div', Ke, [
            Zt('div', { ref_key: 'editorELRef', ref: C }, null, 512),
            Zt('div', { class: 'innerHTML', innerHTML: e.value }, null, 8, Ge),
          ])
        )
      );
    },
  });
const ke = Se(Je, [['__scopeId', 'data-v-6ee290d7']]);
export { ke as default };
