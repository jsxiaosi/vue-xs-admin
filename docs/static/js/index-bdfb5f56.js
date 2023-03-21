import {
  S as Ne,
  d as Me,
  j as qt,
  T as Oe,
  k as Le,
  o as Be,
  c as Fe,
  g as re,
  y as be,
} from './index-ad4df6b0.js';
import { _ as He } from './plugin-vueexport-helper-c27b6911.js';
var te = {},
  we = {
    get exports() {
      return te;
    },
    set exports(O) {
      te = O;
    },
  };
(function (O, R) {
  (function (n, t) {
    O.exports = t();
  })(window, function () {
    return (function (o) {
      var n = {};
      function t(e) {
        if (n[e]) return n[e].exports;
        var r = (n[e] = { i: e, l: !1, exports: {} });
        return o[e].call(r.exports, r, r.exports, t), (r.l = !0), r.exports;
      }
      return (
        (t.m = o),
        (t.c = n),
        (t.d = function (e, r, a) {
          t.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: a });
        }),
        (t.r = function (e) {
          typeof Symbol != 'undefined' &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
            Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (t.t = function (e, r) {
          if ((r & 1 && (e = t(e)), r & 8 || (r & 4 && typeof e == 'object' && e && e.__esModule)))
            return e;
          var a = Object.create(null);
          if (
            (t.r(a),
            Object.defineProperty(a, 'default', { enumerable: !0, value: e }),
            r & 2 && typeof e != 'string')
          )
            for (var i in e)
              t.d(
                a,
                i,
                function (f) {
                  return e[f];
                }.bind(null, i),
              );
          return a;
        }),
        (t.n = function (e) {
          var r =
            e && e.__esModule
              ? function () {
                  return e.default;
                }
              : function () {
                  return e;
                };
          return t.d(r, 'a', r), r;
        }),
        (t.o = function (e, r) {
          return Object.prototype.hasOwnProperty.call(e, r);
        }),
        (t.p = ''),
        t((t.s = 141))
      );
    })([
      function (o, n) {
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        o.exports = t;
      },
      function (o, n, t) {
        o.exports = t(142);
      },
      function (o, n, t) {
        t.r(n),
          t.d(n, '__extends', function () {
            return r;
          }),
          t.d(n, '__assign', function () {
            return a;
          }),
          t.d(n, '__rest', function () {
            return i;
          }),
          t.d(n, '__decorate', function () {
            return f;
          }),
          t.d(n, '__param', function () {
            return g;
          }),
          t.d(n, '__metadata', function () {
            return s;
          }),
          t.d(n, '__awaiter', function () {
            return p;
          }),
          t.d(n, '__generator', function () {
            return u;
          }),
          t.d(n, '__createBinding', function () {
            return l;
          }),
          t.d(n, '__exportStar', function () {
            return v;
          }),
          t.d(n, '__values', function () {
            return c;
          }),
          t.d(n, '__read', function () {
            return h;
          }),
          t.d(n, '__spread', function () {
            return d;
          }),
          t.d(n, '__spreadArrays', function () {
            return m;
          }),
          t.d(n, '__spreadArray', function () {
            return A;
          }),
          t.d(n, '__await', function () {
            return y;
          }),
          t.d(n, '__asyncGenerator', function () {
            return x;
          }),
          t.d(n, '__asyncDelegator', function () {
            return S;
          }),
          t.d(n, '__asyncValues', function () {
            return D;
          }),
          t.d(n, '__makeTemplateObject', function () {
            return T;
          }),
          t.d(n, '__importStar', function () {
            return E;
          }),
          t.d(n, '__importDefault', function () {
            return P;
          }),
          t.d(n, '__classPrivateFieldGet', function () {
            return I;
          }),
          t.d(n, '__classPrivateFieldSet', function () {
            return M;
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
	***************************************************************************** */ var e = function (
          N,
          L,
        ) {
          return (
            (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (B, F) {
                  B.__proto__ = F;
                }) ||
              function (B, F) {
                for (var w in F) Object.prototype.hasOwnProperty.call(F, w) && (B[w] = F[w]);
              }),
            e(N, L)
          );
        };
        function r(N, L) {
          if (typeof L != 'function' && L !== null)
            throw new TypeError(
              'Class extends value ' + String(L) + ' is not a constructor or null',
            );
          e(N, L);
          function B() {
            this.constructor = N;
          }
          N.prototype = L === null ? Object.create(L) : ((B.prototype = L.prototype), new B());
        }
        var a = function () {
          return (
            (a =
              Object.assign ||
              function (L) {
                for (var B, F = 1, w = arguments.length; F < w; F++) {
                  B = arguments[F];
                  for (var b in B) Object.prototype.hasOwnProperty.call(B, b) && (L[b] = B[b]);
                }
                return L;
              }),
            a.apply(this, arguments)
          );
        };
        function i(N, L) {
          var B = {};
          for (var F in N)
            Object.prototype.hasOwnProperty.call(N, F) && L.indexOf(F) < 0 && (B[F] = N[F]);
          if (N != null && typeof Object.getOwnPropertySymbols == 'function')
            for (var w = 0, F = Object.getOwnPropertySymbols(N); w < F.length; w++)
              L.indexOf(F[w]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(N, F[w]) &&
                (B[F[w]] = N[F[w]]);
          return B;
        }
        function f(N, L, B, F) {
          var w = arguments.length,
            b = w < 3 ? L : F === null ? (F = Object.getOwnPropertyDescriptor(L, B)) : F,
            H;
          if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
            b = Reflect.decorate(N, L, B, F);
          else
            for (var j = N.length - 1; j >= 0; j--)
              (H = N[j]) && (b = (w < 3 ? H(b) : w > 3 ? H(L, B, b) : H(L, B)) || b);
          return w > 3 && b && Object.defineProperty(L, B, b), b;
        }
        function g(N, L) {
          return function (B, F) {
            L(B, F, N);
          };
        }
        function s(N, L) {
          if (typeof Reflect == 'object' && typeof Reflect.metadata == 'function')
            return Reflect.metadata(N, L);
        }
        function p(N, L, B, F) {
          function w(b) {
            return b instanceof B
              ? b
              : new B(function (H) {
                  H(b);
                });
          }
          return new (B || (B = Promise))(function (b, H) {
            function j(W) {
              try {
                U(F.next(W));
              } catch (z) {
                H(z);
              }
            }
            function K(W) {
              try {
                U(F.throw(W));
              } catch (z) {
                H(z);
              }
            }
            function U(W) {
              W.done ? b(W.value) : w(W.value).then(j, K);
            }
            U((F = F.apply(N, L || [])).next());
          });
        }
        function u(N, L) {
          var B = {
              label: 0,
              sent: function () {
                if (b[0] & 1) throw b[1];
                return b[1];
              },
              trys: [],
              ops: [],
            },
            F,
            w,
            b,
            H;
          return (
            (H = { next: j(0), throw: j(1), return: j(2) }),
            typeof Symbol == 'function' &&
              (H[Symbol.iterator] = function () {
                return this;
              }),
            H
          );
          function j(U) {
            return function (W) {
              return K([U, W]);
            };
          }
          function K(U) {
            if (F) throw new TypeError('Generator is already executing.');
            for (; B; )
              try {
                if (
                  ((F = 1),
                  w &&
                    (b =
                      U[0] & 2
                        ? w.return
                        : U[0]
                        ? w.throw || ((b = w.return) && b.call(w), 0)
                        : w.next) &&
                    !(b = b.call(w, U[1])).done)
                )
                  return b;
                switch (((w = 0), b && (U = [U[0] & 2, b.value]), U[0])) {
                  case 0:
                  case 1:
                    b = U;
                    break;
                  case 4:
                    return B.label++, { value: U[1], done: !1 };
                  case 5:
                    B.label++, (w = U[1]), (U = [0]);
                    continue;
                  case 7:
                    (U = B.ops.pop()), B.trys.pop();
                    continue;
                  default:
                    if (
                      ((b = B.trys),
                      !(b = b.length > 0 && b[b.length - 1]) && (U[0] === 6 || U[0] === 2))
                    ) {
                      B = 0;
                      continue;
                    }
                    if (U[0] === 3 && (!b || (U[1] > b[0] && U[1] < b[3]))) {
                      B.label = U[1];
                      break;
                    }
                    if (U[0] === 6 && B.label < b[1]) {
                      (B.label = b[1]), (b = U);
                      break;
                    }
                    if (b && B.label < b[2]) {
                      (B.label = b[2]), B.ops.push(U);
                      break;
                    }
                    b[2] && B.ops.pop(), B.trys.pop();
                    continue;
                }
                U = L.call(N, B);
              } catch (W) {
                (U = [6, W]), (w = 0);
              } finally {
                F = b = 0;
              }
            if (U[0] & 5) throw U[1];
            return { value: U[0] ? U[1] : void 0, done: !0 };
          }
        }
        var l = Object.create
          ? function (N, L, B, F) {
              F === void 0 && (F = B),
                Object.defineProperty(N, F, {
                  enumerable: !0,
                  get: function () {
                    return L[B];
                  },
                });
            }
          : function (N, L, B, F) {
              F === void 0 && (F = B), (N[F] = L[B]);
            };
        function v(N, L) {
          for (var B in N)
            B !== 'default' && !Object.prototype.hasOwnProperty.call(L, B) && l(L, N, B);
        }
        function c(N) {
          var L = typeof Symbol == 'function' && Symbol.iterator,
            B = L && N[L],
            F = 0;
          if (B) return B.call(N);
          if (N && typeof N.length == 'number')
            return {
              next: function () {
                return N && F >= N.length && (N = void 0), { value: N && N[F++], done: !N };
              },
            };
          throw new TypeError(L ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
        }
        function h(N, L) {
          var B = typeof Symbol == 'function' && N[Symbol.iterator];
          if (!B) return N;
          var F = B.call(N),
            w,
            b = [],
            H;
          try {
            for (; (L === void 0 || L-- > 0) && !(w = F.next()).done; ) b.push(w.value);
          } catch (j) {
            H = { error: j };
          } finally {
            try {
              w && !w.done && (B = F.return) && B.call(F);
            } finally {
              if (H) throw H.error;
            }
          }
          return b;
        }
        function d() {
          for (var N = [], L = 0; L < arguments.length; L++) N = N.concat(h(arguments[L]));
          return N;
        }
        function m() {
          for (var N = 0, L = 0, B = arguments.length; L < B; L++) N += arguments[L].length;
          for (var F = Array(N), w = 0, L = 0; L < B; L++)
            for (var b = arguments[L], H = 0, j = b.length; H < j; H++, w++) F[w] = b[H];
          return F;
        }
        function A(N, L) {
          for (var B = 0, F = L.length, w = N.length; B < F; B++, w++) N[w] = L[B];
          return N;
        }
        function y(N) {
          return this instanceof y ? ((this.v = N), this) : new y(N);
        }
        function x(N, L, B) {
          if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
          var F = B.apply(N, L || []),
            w,
            b = [];
          return (
            (w = {}),
            H('next'),
            H('throw'),
            H('return'),
            (w[Symbol.asyncIterator] = function () {
              return this;
            }),
            w
          );
          function H($) {
            F[$] &&
              (w[$] = function (Q) {
                return new Promise(function (J, k) {
                  b.push([$, Q, J, k]) > 1 || j($, Q);
                });
              });
          }
          function j($, Q) {
            try {
              K(F[$](Q));
            } catch (J) {
              z(b[0][3], J);
            }
          }
          function K($) {
            $.value instanceof y ? Promise.resolve($.value.v).then(U, W) : z(b[0][2], $);
          }
          function U($) {
            j('next', $);
          }
          function W($) {
            j('throw', $);
          }
          function z($, Q) {
            $(Q), b.shift(), b.length && j(b[0][0], b[0][1]);
          }
        }
        function S(N) {
          var L, B;
          return (
            (L = {}),
            F('next'),
            F('throw', function (w) {
              throw w;
            }),
            F('return'),
            (L[Symbol.iterator] = function () {
              return this;
            }),
            L
          );
          function F(w, b) {
            L[w] = N[w]
              ? function (H) {
                  return (B = !B) ? { value: y(N[w](H)), done: w === 'return' } : b ? b(H) : H;
                }
              : b;
          }
        }
        function D(N) {
          if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
          var L = N[Symbol.asyncIterator],
            B;
          return L
            ? L.call(N)
            : ((N = typeof c == 'function' ? c(N) : N[Symbol.iterator]()),
              (B = {}),
              F('next'),
              F('throw'),
              F('return'),
              (B[Symbol.asyncIterator] = function () {
                return this;
              }),
              B);
          function F(b) {
            B[b] =
              N[b] &&
              function (H) {
                return new Promise(function (j, K) {
                  (H = N[b](H)), w(j, K, H.done, H.value);
                });
              };
          }
          function w(b, H, j, K) {
            Promise.resolve(K).then(function (U) {
              b({ value: U, done: j });
            }, H);
          }
        }
        function T(N, L) {
          return (
            Object.defineProperty ? Object.defineProperty(N, 'raw', { value: L }) : (N.raw = L), N
          );
        }
        var C = Object.create
          ? function (N, L) {
              Object.defineProperty(N, 'default', { enumerable: !0, value: L });
            }
          : function (N, L) {
              N.default = L;
            };
        function E(N) {
          if (N && N.__esModule) return N;
          var L = {};
          if (N != null)
            for (var B in N)
              B !== 'default' && Object.prototype.hasOwnProperty.call(N, B) && l(L, N, B);
          return C(L, N), L;
        }
        function P(N) {
          return N && N.__esModule ? N : { default: N };
        }
        function I(N, L) {
          if (!L.has(N)) throw new TypeError('attempted to get private field on non-instance');
          return L.get(N);
        }
        function M(N, L, B) {
          if (!L.has(N)) throw new TypeError('attempted to set private field on non-instance');
          return L.set(N, B), B;
        }
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(89)),
          i = e(t(4)),
          f = e(t(26)),
          g = e(t(17)),
          s = e(t(121)),
          p = e(t(27)),
          u = e(t(91)),
          l = e(t(70)),
          v = e(t(28)),
          c = e(t(57));
        (0, r.default)(n, '__esModule', { value: !0 }), (n.DomElement = void 0);
        var h = t(2),
          d = t(6),
          m = [];
        function A(C) {
          var E = document.createElement('div');
          E.innerHTML = C;
          var P = E.children;
          return d.toArray(P);
        }
        function y(C) {
          return C ? C instanceof HTMLCollection || C instanceof NodeList : !1;
        }
        function x(C) {
          var E = document.querySelectorAll(C);
          return d.toArray(E);
        }
        function S(C) {
          var E = [],
            P = [];
          return (
            (0, a.default)(C) ? (E = C) : (E = C.split(';')),
            (0, i.default)(E).call(E, function (I) {
              var M,
                N = (0, f.default)((M = I.split(':'))).call(M, function (L) {
                  return (0, g.default)(L).call(L);
                });
              N.length === 2 && P.push(N[0] + ':' + N[1]);
            }),
            P
          );
        }
        var D = (function () {
          function C(E) {
            if (
              ((this.elems = []),
              (this.length = this.elems.length),
              (this.dataSource = new s.default()),
              !!E)
            ) {
              if (E instanceof C) return E;
              var P = [],
                I = E instanceof Node ? E.nodeType : -1;
              if (((this.selector = E), I === 1 || I === 9)) P = [E];
              else if (y(E)) P = d.toArray(E);
              else if (E instanceof Array) P = E;
              else if (typeof E == 'string') {
                var M,
                  N = (0, g.default)(
                    (M = E.replace(
                      `/
/mg`,
                      '',
                    )),
                  ).call(M);
                (0, p.default)(N).call(N, '<') === 0 ? (P = A(N)) : (P = x(N));
              }
              var L = P.length;
              if (!L) return this;
              for (var B = 0; B < L; B++) this.elems.push(P[B]);
              this.length = L;
            }
          }
          return (
            (0, r.default)(C.prototype, 'id', {
              get: function () {
                return this.elems[0].id;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (C.prototype.forEach = function (E) {
              for (var P = 0; P < this.length; P++) {
                var I = this.elems[P],
                  M = E.call(I, I, P);
                if (M === !1) break;
              }
              return this;
            }),
            (C.prototype.clone = function (E) {
              var P;
              E === void 0 && (E = !1);
              var I = [];
              return (
                (0, i.default)((P = this.elems)).call(P, function (M) {
                  I.push(M.cloneNode(!!E));
                }),
                T(I)
              );
            }),
            (C.prototype.get = function (E) {
              E === void 0 && (E = 0);
              var P = this.length;
              return E >= P && (E = E % P), T(this.elems[E]);
            }),
            (C.prototype.first = function () {
              return this.get(0);
            }),
            (C.prototype.last = function () {
              var E = this.length;
              return this.get(E - 1);
            }),
            (C.prototype.on = function (E, P, I) {
              var M;
              return E
                ? (typeof P == 'function' && ((I = P), (P = '')),
                  (0, i.default)((M = this)).call(M, function (N) {
                    if (!P) {
                      N.addEventListener(E, I);
                      return;
                    }
                    var L = function (F) {
                      var w = F.target;
                      w.matches(P) && I.call(w, F);
                    };
                    N.addEventListener(E, L), m.push({ elem: N, selector: P, fn: I, agentFn: L });
                  }))
                : this;
            }),
            (C.prototype.off = function (E, P, I) {
              var M;
              return E
                ? (typeof P == 'function' && ((I = P), (P = '')),
                  (0, i.default)((M = this)).call(M, function (N) {
                    if (P) {
                      for (var L = -1, B = 0; B < m.length; B++) {
                        var F = m[B];
                        if (F.selector === P && F.fn === I && F.elem === N) {
                          L = B;
                          break;
                        }
                      }
                      if (L !== -1) {
                        var w = (0, u.default)(m).call(m, L, 1)[0].agentFn;
                        N.removeEventListener(E, w);
                      }
                    } else N.removeEventListener(E, I);
                  }))
                : this;
            }),
            (C.prototype.attr = function (E, P) {
              var I;
              return P == null
                ? this.elems[0].getAttribute(E) || ''
                : (0, i.default)((I = this)).call(I, function (M) {
                    M.setAttribute(E, P);
                  });
            }),
            (C.prototype.removeAttr = function (E) {
              var P;
              (0, i.default)((P = this)).call(P, function (I) {
                I.removeAttribute(E);
              });
            }),
            (C.prototype.addClass = function (E) {
              var P;
              return E
                ? (0, i.default)((P = this)).call(P, function (I) {
                    if (I.className) {
                      var M = I.className.split(/\s/);
                      (M = (0, l.default)(M).call(M, function (N) {
                        return !!(0, g.default)(N).call(N);
                      })),
                        (0, p.default)(M).call(M, E) < 0 && M.push(E),
                        (I.className = M.join(' '));
                    } else I.className = E;
                  })
                : this;
            }),
            (C.prototype.removeClass = function (E) {
              var P;
              return E
                ? (0, i.default)((P = this)).call(P, function (I) {
                    if (I.className) {
                      var M = I.className.split(/\s/);
                      (M = (0, l.default)(M).call(M, function (N) {
                        return (N = (0, g.default)(N).call(N)), !(!N || N === E);
                      })),
                        (I.className = M.join(' '));
                    }
                  })
                : this;
            }),
            (C.prototype.hasClass = function (E) {
              if (!E) return !1;
              var P = this.elems[0];
              if (!P.className) return !1;
              var I = P.className.split(/\s/);
              return (0, v.default)(I).call(I, E);
            }),
            (C.prototype.css = function (E, P) {
              var I, M;
              return (
                P == '' ? (M = '') : (M = E + ':' + P + ';'),
                (0, i.default)((I = this)).call(I, function (N) {
                  var L,
                    B = (0, g.default)((L = N.getAttribute('style') || '')).call(L);
                  if (B) {
                    var F = S(B);
                    (F = (0, f.default)(F).call(F, function (w) {
                      return (0, p.default)(w).call(w, E) === 0 ? M : w;
                    })),
                      M != '' && (0, p.default)(F).call(F, M) < 0 && F.push(M),
                      M == '' && (F = S(F)),
                      N.setAttribute('style', F.join('; '));
                  } else N.setAttribute('style', M);
                })
              );
            }),
            (C.prototype.getBoundingClientRect = function () {
              var E = this.elems[0];
              return E.getBoundingClientRect();
            }),
            (C.prototype.show = function () {
              return this.css('display', 'block');
            }),
            (C.prototype.hide = function () {
              return this.css('display', 'none');
            }),
            (C.prototype.children = function () {
              var E = this.elems[0];
              return E ? T(E.children) : null;
            }),
            (C.prototype.childNodes = function () {
              var E = this.elems[0];
              return E ? T(E.childNodes) : null;
            }),
            (C.prototype.replaceChildAll = function (E) {
              for (var P = this.getNode(), I = this.elems[0]; I.hasChildNodes(); )
                P.firstChild && I.removeChild(P.firstChild);
              this.append(E);
            }),
            (C.prototype.append = function (E) {
              var P;
              return (0, i.default)((P = this)).call(P, function (I) {
                (0, i.default)(E).call(E, function (M) {
                  I.appendChild(M);
                });
              });
            }),
            (C.prototype.remove = function () {
              var E;
              return (0, i.default)((E = this)).call(E, function (P) {
                if (P.remove) P.remove();
                else {
                  var I = P.parentElement;
                  I && I.removeChild(P);
                }
              });
            }),
            (C.prototype.isContain = function (E) {
              var P = this.elems[0],
                I = E.elems[0];
              return P.contains(I);
            }),
            (C.prototype.getNodeName = function () {
              var E = this.elems[0];
              return E.nodeName;
            }),
            (C.prototype.getNode = function (E) {
              E === void 0 && (E = 0);
              var P;
              return (P = this.elems[E]), P;
            }),
            (C.prototype.find = function (E) {
              var P = this.elems[0];
              return T(P.querySelectorAll(E));
            }),
            (C.prototype.text = function (E) {
              if (E) {
                var I;
                return (0, i.default)((I = this)).call(I, function (M) {
                  M.innerHTML = E;
                });
              } else {
                var P = this.elems[0];
                return P.innerHTML.replace(/<[^>]+>/g, function () {
                  return '';
                });
              }
            }),
            (C.prototype.html = function (E) {
              var P = this.elems[0];
              return E ? ((P.innerHTML = E), this) : P.innerHTML;
            }),
            (C.prototype.val = function () {
              var E,
                P = this.elems[0];
              return (0, g.default)((E = P.value)).call(E);
            }),
            (C.prototype.focus = function () {
              var E;
              return (0, i.default)((E = this)).call(E, function (P) {
                P.focus();
              });
            }),
            (C.prototype.prev = function () {
              var E = this.elems[0];
              return T(E.previousElementSibling);
            }),
            (C.prototype.next = function () {
              var E = this.elems[0];
              return T(E.nextElementSibling);
            }),
            (C.prototype.getNextSibling = function () {
              var E = this.elems[0];
              return T(E.nextSibling);
            }),
            (C.prototype.parent = function () {
              var E = this.elems[0];
              return T(E.parentElement);
            }),
            (C.prototype.parentUntil = function (E, P) {
              var I = P || this.elems[0];
              if (I.nodeName === 'BODY') return null;
              var M = I.parentElement;
              return M === null ? null : M.matches(E) ? T(M) : this.parentUntil(E, M);
            }),
            (C.prototype.parentUntilEditor = function (E, P, I) {
              var M = I || this.elems[0];
              if (T(M).equal(P.$textContainerElem) || T(M).equal(P.$toolbarElem)) return null;
              var N = M.parentElement;
              return N === null ? null : N.matches(E) ? T(N) : this.parentUntilEditor(E, P, N);
            }),
            (C.prototype.equal = function (E) {
              return E instanceof C
                ? this.elems[0] === E.elems[0]
                : E instanceof HTMLElement
                ? this.elems[0] === E
                : !1;
            }),
            (C.prototype.insertBefore = function (E) {
              var P,
                I = T(E),
                M = I.elems[0];
              return M
                ? (0, i.default)((P = this)).call(P, function (N) {
                    var L = M.parentNode;
                    L == null || L.insertBefore(N, M);
                  })
                : this;
            }),
            (C.prototype.insertAfter = function (E) {
              var P,
                I = T(E),
                M = I.elems[0],
                N = M && M.nextSibling;
              return M
                ? (0, i.default)((P = this)).call(P, function (L) {
                    var B = M.parentNode;
                    N ? B.insertBefore(L, N) : B.appendChild(L);
                  })
                : this;
            }),
            (C.prototype.data = function (E, P) {
              if (P != null) this.dataSource.set(E, P);
              else return this.dataSource.get(E);
            }),
            (C.prototype.getNodeTop = function (E) {
              if (this.length < 1) return this;
              var P = this.parent();
              return E.$textElem.equal(this) || E.$textElem.equal(P)
                ? this
                : ((P.prior = this), P.getNodeTop(E));
            }),
            (C.prototype.getOffsetData = function () {
              var E = this.elems[0];
              return {
                top: E.offsetTop,
                left: E.offsetLeft,
                width: E.offsetWidth,
                height: E.offsetHeight,
                parent: E.offsetParent,
              };
            }),
            (C.prototype.scrollTop = function (E) {
              var P = this.elems[0];
              P.scrollTo({ top: E });
            }),
            C
          );
        })();
        n.DomElement = D;
        function T() {
          for (var C = [], E = 0; E < arguments.length; E++) C[E] = arguments[E];
          return new ((0, c.default)(D).apply(D, h.__spreadArrays([void 0], C)))();
        }
        n.default = T;
      },
      function (o, n, t) {
        o.exports = t(180);
      },
      function (o, n, t) {
        var e = t(8),
          r = t(71).f,
          a = t(101),
          i = t(9),
          f = t(40),
          g = t(19),
          s = t(16),
          p = function (u) {
            var l = function (v, c, h) {
              if (this instanceof u) {
                switch (arguments.length) {
                  case 0:
                    return new u();
                  case 1:
                    return new u(v);
                  case 2:
                    return new u(v, c);
                }
                return new u(v, c, h);
              }
              return u.apply(this, arguments);
            };
            return (l.prototype = u.prototype), l;
          };
        o.exports = function (u, l) {
          var v = u.target,
            c = u.global,
            h = u.stat,
            d = u.proto,
            m = c ? e : h ? e[v] : (e[v] || {}).prototype,
            A = c ? i : i[v] || (i[v] = {}),
            y = A.prototype,
            x,
            S,
            D,
            T,
            C,
            E,
            P,
            I,
            M;
          for (T in l)
            (x = a(c ? T : v + (h ? '.' : '#') + T, u.forced)),
              (S = !x && m && s(m, T)),
              (E = A[T]),
              S && (u.noTargetGet ? ((M = r(m, T)), (P = M && M.value)) : (P = m[T])),
              (C = S && P ? P : l[T]),
              !(S && typeof E == typeof C) &&
                (u.bind && S
                  ? (I = f(C, e))
                  : u.wrap && S
                  ? (I = p(C))
                  : d && typeof C == 'function'
                  ? (I = f(Function.call, C))
                  : (I = C),
                (u.sham || (C && C.sham) || (E && E.sham)) && g(I, 'sham', !0),
                (A[T] = I),
                d &&
                  ((D = v + 'Prototype'),
                  s(i, D) || g(i, D, {}),
                  (i[D][T] = C),
                  u.real && y && !y[T] && g(y, T, C)));
        };
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(92)),
          a = e(t(1)),
          i = e(t(256)),
          f = e(t(45)),
          g = e(t(46)),
          s = e(t(89)),
          p = e(t(26));
        (0, a.default)(n, '__esModule', { value: !0 }),
          (n.hexToRgb =
            n.getRandomCode =
            n.toArray =
            n.deepClone =
            n.isFunction =
            n.debounce =
            n.throttle =
            n.arrForEach =
            n.forEach =
            n.replaceSpecialSymbol =
            n.replaceHtmlSymbol =
            n.getRandom =
            n.UA =
              void 0);
        var u = t(2),
          l = (function () {
            function E() {
              this._ua = navigator.userAgent;
              var P = this._ua.match(/(Edge?)\/(\d+)/);
              (this.isOldEdge = !!(P && P[1] == 'Edge' && (0, i.default)(P[2]) < 19)),
                (this.isFirefox = !!(
                  /Firefox\/\d+/.test(this._ua) && !/Seamonkey\/\d+/.test(this._ua)
                ));
            }
            return (
              (E.prototype.isIE = function () {
                return 'ActiveXObject' in window;
              }),
              (E.prototype.isWebkit = function () {
                return /webkit/i.test(this._ua);
              }),
              E
            );
          })();
        n.UA = new l();
        function v(E) {
          var P;
          return (
            E === void 0 && (E = ''), E + (0, f.default)((P = Math.random().toString())).call(P, 2)
          );
        }
        n.getRandom = v;
        function c(E) {
          return E.replace(/</gm, '&lt;')
            .replace(/>/gm, '&gt;')
            .replace(/"/gm, '&quot;')
            .replace(/(\r\n|\r|\n)/g, '<br/>');
        }
        n.replaceHtmlSymbol = c;
        function h(E) {
          return E.replace(/&lt;/gm, '<')
            .replace(/&gt;/gm, '>')
            .replace(/&quot;/gm, '"');
        }
        n.replaceSpecialSymbol = h;
        function d(E, P) {
          for (var I in E)
            if (Object.prototype.hasOwnProperty.call(E, I)) {
              var M = P(I, E[I]);
              if (M === !1) break;
            }
        }
        n.forEach = d;
        function m(E, P) {
          var I,
            M,
            N,
            L = E.length || 0;
          for (I = 0; I < L && ((M = E[I]), (N = P.call(E, M, I)), N !== !1); I++);
        }
        n.arrForEach = m;
        function A(E, P) {
          P === void 0 && (P = 200);
          var I = !1;
          return function () {
            for (var M = this, N = [], L = 0; L < arguments.length; L++) N[L] = arguments[L];
            I ||
              ((I = !0),
              (0, g.default)(function () {
                (I = !1), E.call.apply(E, u.__spreadArrays([M], N));
              }, P));
          };
        }
        n.throttle = A;
        function y(E, P) {
          P === void 0 && (P = 200);
          var I = 0;
          return function () {
            for (var M = this, N = [], L = 0; L < arguments.length; L++) N[L] = arguments[L];
            I && window.clearTimeout(I),
              (I = (0, g.default)(function () {
                (I = 0), E.call.apply(E, u.__spreadArrays([M], N));
              }, P));
          };
        }
        n.debounce = y;
        function x(E) {
          return typeof E == 'function';
        }
        n.isFunction = x;
        function S(E) {
          if ((0, r.default)(E) !== 'object' || typeof E == 'function' || E === null) return E;
          var P;
          (0, s.default)(E) && (P = []), (0, s.default)(E) || (P = {});
          for (var I in E) Object.prototype.hasOwnProperty.call(E, I) && (P[I] = S(E[I]));
          return P;
        }
        n.deepClone = S;
        function D(E) {
          return (0, f.default)(Array.prototype).call(E);
        }
        n.toArray = D;
        function T() {
          var E;
          return (0, f.default)((E = Math.random().toString(36))).call(E, -5);
        }
        n.getRandomCode = T;
        function C(E) {
          var P = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(E);
          if (P == null) return null;
          var I = (0, p.default)(P).call(P, function (B) {
              return (0, i.default)(B, 16);
            }),
            M = I[1],
            N = I[2],
            L = I[3];
          return 'rgb(' + M + ', ' + N + ', ' + L + ')';
        }
        n.hexToRgb = C;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 }),
          (n.EMPTY_P_REGEX = n.EMPTY_P_LAST_REGEX = n.EMPTY_P = n.urlRegex = n.EMPTY_FN = void 0);
        function a() {}
        (n.EMPTY_FN = a),
          (n.urlRegex =
            /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-.,@?^=%&amp;:/~+#]*[\w\-@?^=%&amp;/~+#])?/g),
          (n.EMPTY_P = '<p data-we-empty-p=""><br></p>'),
          (n.EMPTY_P_LAST_REGEX = /<p data-we-empty-p=""><br\/?><\/p>$/gim),
          (n.EMPTY_P_REGEX = /<p data-we-empty-p="">/gim);
      },
      function (o, n, t) {
        (function (e) {
          var r = function (a) {
            return a && a.Math == Math && a;
          };
          o.exports =
            r(typeof globalThis == 'object' && globalThis) ||
            r(typeof window == 'object' && window) ||
            r(typeof self == 'object' && self) ||
            r(typeof e == 'object' && e) ||
            Function('return this')();
        }).call(this, t(145));
      },
      function (o, n) {
        o.exports = {};
      },
      function (o, n, t) {
        var e = t(8),
          r = t(74),
          a = t(16),
          i = t(64),
          f = t(76),
          g = t(106),
          s = r('wks'),
          p = e.Symbol,
          u = g ? p : (p && p.withoutSetter) || i;
        o.exports = function (l) {
          return a(s, l) || (f && a(p, l) ? (s[l] = p[l]) : (s[l] = u('Symbol.' + l))), s[l];
        };
      },
      function (o, n) {
        o.exports = function (t) {
          try {
            return !!t();
          } catch (e) {
            return !0;
          }
        };
      },
      function (o, n, t) {
        var e = t(9),
          r = t(16),
          a = t(93),
          i = t(18).f;
        o.exports = function (f) {
          var g = e.Symbol || (e.Symbol = {});
          r(g, f) || i(g, f, { value: a.f(f) });
        };
      },
      function (o, n) {
        o.exports = function (t) {
          return typeof t == 'object' ? t !== null : typeof t == 'function';
        };
      },
      function (o, n, t) {
        var e = t(11);
        o.exports = !e(function () {
          return (
            Object.defineProperty({}, 1, {
              get: function () {
                return 7;
              },
            })[1] != 7
          );
        });
      },
      function (o, n, t) {
        var e = t(9);
        o.exports = function (r) {
          return e[r + 'Prototype'];
        };
      },
      function (o, n) {
        var t = {}.hasOwnProperty;
        o.exports = function (e, r) {
          return t.call(e, r);
        };
      },
      function (o, n, t) {
        o.exports = t(192);
      },
      function (o, n, t) {
        var e = t(14),
          r = t(100),
          a = t(25),
          i = t(60),
          f = Object.defineProperty;
        n.f = e
          ? f
          : function (s, p, u) {
              if ((a(s), (p = i(p, !0)), a(u), r))
                try {
                  return f(s, p, u);
                } catch (l) {}
              if ('get' in u || 'set' in u) throw TypeError('Accessors not supported');
              return 'value' in u && (s[p] = u.value), s;
            };
      },
      function (o, n, t) {
        var e = t(14),
          r = t(18),
          a = t(48);
        o.exports = e
          ? function (i, f, g) {
              return r.f(i, f, a(1, g));
            }
          : function (i, f, g) {
              return (i[f] = g), i;
            };
      },
      function (o, n, t) {
        var e = (function () {
            var m;
            return function () {
              return (
                typeof m == 'undefined' &&
                  (m = Boolean(window && document && document.all && !window.atob)),
                m
              );
            };
          })(),
          r = (function () {
            var m = {};
            return function (y) {
              if (typeof m[y] == 'undefined') {
                var x = document.querySelector(y);
                if (window.HTMLIFrameElement && x instanceof window.HTMLIFrameElement)
                  try {
                    x = x.contentDocument.head;
                  } catch (S) {
                    x = null;
                  }
                m[y] = x;
              }
              return m[y];
            };
          })(),
          a = [];
        function i(d) {
          for (var m = -1, A = 0; A < a.length; A++)
            if (a[A].identifier === d) {
              m = A;
              break;
            }
          return m;
        }
        function f(d, m) {
          for (var A = {}, y = [], x = 0; x < d.length; x++) {
            var S = d[x],
              D = m.base ? S[0] + m.base : S[0],
              T = A[D] || 0,
              C = ''.concat(D, ' ').concat(T);
            A[D] = T + 1;
            var E = i(C),
              P = { css: S[1], media: S[2], sourceMap: S[3] };
            E !== -1
              ? (a[E].references++, a[E].updater(P))
              : a.push({ identifier: C, updater: h(P, m), references: 1 }),
              y.push(C);
          }
          return y;
        }
        function g(d) {
          var m = document.createElement('style'),
            A = d.attributes || {};
          if (typeof A.nonce == 'undefined') {
            var y = t.nc;
            y && (A.nonce = y);
          }
          if (
            (Object.keys(A).forEach(function (S) {
              m.setAttribute(S, A[S]);
            }),
            typeof d.insert == 'function')
          )
            d.insert(m);
          else {
            var x = r(d.insert || 'head');
            if (!x)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
              );
            x.appendChild(m);
          }
          return m;
        }
        function s(d) {
          if (d.parentNode === null) return !1;
          d.parentNode.removeChild(d);
        }
        var p = (function () {
          var m = [];
          return function (y, x) {
            return (
              (m[y] = x),
              m.filter(Boolean).join(`
`)
            );
          };
        })();
        function u(d, m, A, y) {
          var x = A ? '' : y.media ? '@media '.concat(y.media, ' {').concat(y.css, '}') : y.css;
          if (d.styleSheet) d.styleSheet.cssText = p(m, x);
          else {
            var S = document.createTextNode(x),
              D = d.childNodes;
            D[m] && d.removeChild(D[m]), D.length ? d.insertBefore(S, D[m]) : d.appendChild(S);
          }
        }
        function l(d, m, A) {
          var y = A.css,
            x = A.media,
            S = A.sourceMap;
          if (
            (x ? d.setAttribute('media', x) : d.removeAttribute('media'),
            S &&
              typeof btoa != 'undefined' &&
              (y += `
/*# sourceMappingURL=data:application/json;base64,`.concat(
                btoa(unescape(encodeURIComponent(JSON.stringify(S)))),
                ' */',
              )),
            d.styleSheet)
          )
            d.styleSheet.cssText = y;
          else {
            for (; d.firstChild; ) d.removeChild(d.firstChild);
            d.appendChild(document.createTextNode(y));
          }
        }
        var v = null,
          c = 0;
        function h(d, m) {
          var A, y, x;
          if (m.singleton) {
            var S = c++;
            (A = v || (v = g(m))), (y = u.bind(null, A, S, !1)), (x = u.bind(null, A, S, !0));
          } else
            (A = g(m)),
              (y = l.bind(null, A, m)),
              (x = function () {
                s(A);
              });
          return (
            y(d),
            function (T) {
              if (T) {
                if (T.css === d.css && T.media === d.media && T.sourceMap === d.sourceMap) return;
                y((d = T));
              } else x();
            }
          );
        }
        o.exports = function (d, m) {
          (m = m || {}),
            !m.singleton && typeof m.singleton != 'boolean' && (m.singleton = e()),
            (d = d || []);
          var A = f(d, m);
          return function (x) {
            if (((x = x || []), Object.prototype.toString.call(x) === '[object Array]')) {
              for (var S = 0; S < A.length; S++) {
                var D = A[S],
                  T = i(D);
                a[T].references--;
              }
              for (var C = f(x, m), E = 0; E < A.length; E++) {
                var P = A[E],
                  I = i(P);
                a[I].references === 0 && (a[I].updater(), a.splice(I, 1));
              }
              A = C;
            }
          };
        };
      },
      function (o, n, t) {
        o.exports = function (a) {
          var i = [];
          return (
            (i.toString = function () {
              return this.map(function (g) {
                var s = e(g, a);
                return g[2] ? '@media '.concat(g[2], ' {').concat(s, '}') : s;
              }).join('');
            }),
            (i.i = function (f, g, s) {
              typeof f == 'string' && (f = [[null, f, '']]);
              var p = {};
              if (s)
                for (var u = 0; u < this.length; u++) {
                  var l = this[u][0];
                  l != null && (p[l] = !0);
                }
              for (var v = 0; v < f.length; v++) {
                var c = [].concat(f[v]);
                (s && p[c[0]]) ||
                  (g && (c[2] ? (c[2] = ''.concat(g, ' and ').concat(c[2])) : (c[2] = g)),
                  i.push(c));
              }
            }),
            i
          );
        };
        function e(a, i) {
          var f = a[1] || '',
            g = a[3];
          if (!g) return f;
          if (i && typeof btoa == 'function') {
            var s = r(g),
              p = g.sources.map(function (u) {
                return '/*# sourceURL='.concat(g.sourceRoot || '').concat(u, ' */');
              });
            return [f].concat(p).concat([s]).join(`
`);
          }
          return [f].join(`
`);
        }
        function r(a) {
          var i = btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
            f = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(i);
          return '/*# '.concat(f, ' */');
        }
      },
      function (o, n, t) {
        var e = t(14),
          r = t(11),
          a = t(16),
          i = Object.defineProperty,
          f = {},
          g = function (s) {
            throw s;
          };
        o.exports = function (s, p) {
          if (a(f, s)) return f[s];
          p || (p = {});
          var u = [][s],
            l = a(p, 'ACCESSORS') ? p.ACCESSORS : !1,
            v = a(p, 0) ? p[0] : g,
            c = a(p, 1) ? p[1] : void 0;
          return (f[s] =
            !!u &&
            !r(function () {
              if (l && !e) return !0;
              var h = { length: -1 };
              l ? i(h, 1, { enumerable: !0, get: g }) : (h[1] = 1), u.call(h, v, c);
            }));
        };
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(95)),
          f = (function (g) {
            a.__extends(s, g);
            function s(p, u) {
              return g.call(this, p, u) || this;
            }
            return s;
          })(i.default);
        n.default = f;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(4)),
          i = e(t(46));
        (0, r.default)(n, '__esModule', { value: !0 });
        var f = t(2),
          g = f.__importDefault(t(3)),
          s = f.__importDefault(t(95)),
          p = f.__importDefault(t(134)),
          u = (function (l) {
            f.__extends(v, l);
            function v(c, h, d) {
              var m = l.call(this, c, h) || this;
              d.title = h.i18next.t('menus.dropListMenu.' + d.title);
              var A = h.config.lang === 'zh-CN' ? '' : 'w-e-drop-list-tl';
              if (A !== '' && d.type === 'list') {
                var y;
                (0, a.default)((y = d.list)).call(y, function (S) {
                  var D = S.$elem,
                    T = g.default(D.children());
                  if (T.length > 0) {
                    var C = T == null ? void 0 : T.getNodeName();
                    C && C === 'I' && D.addClass(A);
                  }
                });
              }
              var x = new p.default(m, d);
              return (
                (m.dropList = x),
                c
                  .on('click', function () {
                    var S;
                    h.selection.getRange() != null &&
                      (c.css('z-index', h.zIndex.get('menu')),
                      (0, a.default)((S = h.txt.eventHooks.dropListMenuHoverEvents)).call(
                        S,
                        function (D) {
                          return D();
                        },
                      ),
                      x.show());
                  })
                  .on('mouseleave', function () {
                    c.css('z-index', 'auto'),
                      (x.hideTimeoutId = (0, i.default)(function () {
                        x.hide();
                      }));
                  }),
                m
              );
            }
            return v;
          })(s.default);
        n.default = u;
      },
      function (o, n, t) {
        var e = t(13);
        o.exports = function (r) {
          if (!e(r)) throw TypeError(String(r) + ' is not an object');
          return r;
        };
      },
      function (o, n, t) {
        o.exports = t(188);
      },
      function (o, n, t) {
        o.exports = t(201);
      },
      function (o, n, t) {
        o.exports = t(213);
      },
      function (o, n, t) {
        o.exports = t(283);
      },
      function (o, n, t) {
        var e = t(72),
          r = t(49);
        o.exports = function (a) {
          return e(r(a));
        };
      },
      function (o, n, t) {
        var e = t(49);
        o.exports = function (r) {
          return Object(e(r));
        };
      },
      function (o, n, t) {
        var e = t(40),
          r = t(72),
          a = t(31),
          i = t(35),
          f = t(88),
          g = [].push,
          s = function (p) {
            var u = p == 1,
              l = p == 2,
              v = p == 3,
              c = p == 4,
              h = p == 6,
              d = p == 5 || h;
            return function (m, A, y, x) {
              for (
                var S = a(m),
                  D = r(S),
                  T = e(A, y, 3),
                  C = i(D.length),
                  E = 0,
                  P = x || f,
                  I = u ? P(m, C) : l ? P(m, 0) : void 0,
                  M,
                  N;
                C > E;
                E++
              )
                if ((d || E in D) && ((M = D[E]), (N = T(M, E, S)), p)) {
                  if (u) I[E] = N;
                  else if (N)
                    switch (p) {
                      case 3:
                        return !0;
                      case 5:
                        return M;
                      case 6:
                        return E;
                      case 2:
                        g.call(I, M);
                    }
                  else if (c) return !1;
                }
              return h ? -1 : v || c ? c : I;
            };
          };
        o.exports = {
          forEach: s(0),
          map: s(1),
          filter: s(2),
          some: s(3),
          every: s(4),
          find: s(5),
          findIndex: s(6),
        };
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(4)),
          i = e(t(29)),
          f = e(t(132));
        (0, r.default)(n, '__esModule', { value: !0 });
        var g = t(2),
          s = g.__importDefault(t(3)),
          p = t(7),
          u = (function () {
            function l(v, c) {
              (this.menu = v),
                (this.conf = c),
                (this.$container = s.default('<div class="w-e-panel-container"></div>'));
              var h = v.editor;
              h.txt.eventHooks.clickEvents.push(l.hideCurAllPanels),
                h.txt.eventHooks.toolbarClickEvents.push(l.hideCurAllPanels),
                h.txt.eventHooks.dropListMenuHoverEvents.push(l.hideCurAllPanels);
            }
            return (
              (l.prototype.create = function () {
                var v = this,
                  c = this.menu;
                if (!l.createdMenus.has(c)) {
                  var h = this.conf,
                    d = this.$container,
                    m = h.width || 300,
                    A = c.editor.$toolbarElem.getBoundingClientRect(),
                    y = c.$elem.getBoundingClientRect(),
                    x = A.height + A.top - y.top,
                    S = (A.width - m) / 2 + A.left - y.left,
                    D = 300;
                  Math.abs(S) > D &&
                    (y.left < document.documentElement.clientWidth / 2
                      ? (S = -y.width / 2)
                      : (S = -m + y.width / 2)),
                    d
                      .css('width', m + 'px')
                      .css('margin-top', x + 'px')
                      .css('margin-left', S + 'px')
                      .css('z-index', c.editor.zIndex.get('panel'));
                  var T = s.default('<i class="w-e-icon-close w-e-panel-close"></i>');
                  d.append(T),
                    T.on('click', function () {
                      v.remove();
                    });
                  var C = s.default('<ul class="w-e-panel-tab-title"></ul>'),
                    E = s.default('<div class="w-e-panel-tab-content"></div>');
                  d.append(C).append(E);
                  var P = h.height;
                  P && E.css('height', P + 'px').css('overflow-y', 'auto');
                  var I = h.tabs || [],
                    M = [],
                    N = [];
                  (0, a.default)(I).call(I, function (B, F) {
                    if (B) {
                      var w = B.title || '',
                        b = B.tpl || '',
                        H = s.default('<li class="w-e-item">' + w + '</li>');
                      C.append(H);
                      var j = s.default(b);
                      E.append(j),
                        M.push(H),
                        N.push(j),
                        F === 0 ? (H.data('active', !0), H.addClass('w-e-active')) : j.hide(),
                        H.on('click', function () {
                          H.data('active') ||
                            ((0, a.default)(M).call(M, function (K) {
                              K.data('active', !1), K.removeClass('w-e-active');
                            }),
                            (0, a.default)(N).call(N, function (K) {
                              K.hide();
                            }),
                            H.data('active', !0),
                            H.addClass('w-e-active'),
                            j.show());
                        });
                    }
                  }),
                    d.on('click', function (B) {
                      B.stopPropagation();
                    }),
                    c.$elem.append(d),
                    h.setLinkValue && h.setLinkValue(d, 'text'),
                    h.setLinkValue && h.setLinkValue(d, 'link'),
                    (0, a.default)(I).call(I, function (B, F) {
                      if (B) {
                        var w = B.events || [];
                        (0, a.default)(w).call(w, function (b) {
                          var H,
                            j = b.selector,
                            K = b.type,
                            U = b.fn || p.EMPTY_FN,
                            W = N[F],
                            z = (H = b.bindEnter) !== null && H !== void 0 ? H : !1,
                            $ = function (J) {
                              return g.__awaiter(v, void 0, void 0, function () {
                                var k;
                                return g.__generator(this, function (tt) {
                                  switch (tt.label) {
                                    case 0:
                                      return J.stopPropagation(), [4, U(J)];
                                    case 1:
                                      return (k = tt.sent()), k && this.remove(), [2];
                                  }
                                });
                              });
                            };
                          (0, i.default)(W).call(W, j).on(K, $),
                            z &&
                              K === 'click' &&
                              W.on('keyup', function (Q) {
                                Q.keyCode == 13 && $(Q);
                              });
                        });
                      }
                    });
                  var L = (0, i.default)(d).call(d, 'input[type=text],textarea');
                  L.length && L.get(0).focus(),
                    l.hideCurAllPanels(),
                    c.setPanel(this),
                    l.createdMenus.add(c);
                }
              }),
              (l.prototype.remove = function () {
                var v = this.menu,
                  c = this.$container;
                c && c.remove(), l.createdMenus.delete(v);
              }),
              (l.hideCurAllPanels = function () {
                var v;
                l.createdMenus.size !== 0 &&
                  (0, a.default)((v = l.createdMenus)).call(v, function (c) {
                    var h = c.panel;
                    h && h.remove();
                  });
              }),
              (l.createdMenus = new f.default()),
              l
            );
          })();
        n.default = u;
      },
      function (o, n) {
        var t = {}.toString;
        o.exports = function (e) {
          return t.call(e).slice(8, -1);
        };
      },
      function (o, n, t) {
        var e = t(62),
          r = Math.min;
        o.exports = function (a) {
          return a > 0 ? r(e(a), 9007199254740991) : 0;
        };
      },
      function (o, n, t) {
        var e = t(9),
          r = t(8),
          a = function (i) {
            return typeof i == 'function' ? i : void 0;
          };
        o.exports = function (i, f) {
          return arguments.length < 2 ? a(e[i]) || a(r[i]) : (e[i] && e[i][f]) || (r[i] && r[i][f]);
        };
      },
      function (o, n, t) {
        var e = t(81),
          r = t(18).f,
          a = t(19),
          i = t(16),
          f = t(170),
          g = t(10),
          s = g('toStringTag');
        o.exports = function (p, u, l, v) {
          if (p) {
            var c = l ? p : p.prototype;
            i(c, s) || r(c, s, { configurable: !0, value: u }), v && !e && a(c, 'toString', f);
          }
        };
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(95)),
          f = (function (g) {
            a.__extends(s, g);
            function s(p, u) {
              return g.call(this, p, u) || this;
            }
            return (
              (s.prototype.setPanel = function (p) {
                this.panel = p;
              }),
              s
            );
          })(i.default);
        n.default = f;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(4)),
          i = e(t(57));
        (0, r.default)(n, '__esModule', { value: !0 });
        var f = t(2),
          g = f.__importDefault(t(3)),
          s = (function () {
            function p(u, l, v) {
              (this.editor = u),
                (this.$targetElem = l),
                (this.conf = v),
                (this._show = !1),
                (this._isInsertTextContainer = !1);
              var c = g.default('<div></div>');
              c.addClass('w-e-tooltip'), (this.$container = c);
            }
            return (
              (p.prototype.getPositionData = function () {
                var u = this.$container,
                  l = 0,
                  v = 0,
                  c = 20,
                  h = document.documentElement.scrollTop,
                  d = this.$targetElem.getBoundingClientRect(),
                  m = this.editor.$textElem.getBoundingClientRect(),
                  A = this.$targetElem.getOffsetData(),
                  y = g.default(A.parent),
                  x = this.editor.$textElem.elems[0].scrollTop;
                if (
                  ((this._isInsertTextContainer = y.equal(this.editor.$textContainerElem)),
                  this._isInsertTextContainer)
                ) {
                  var S = y.getBoundingClientRect().height,
                    D = A.top,
                    T = A.left,
                    C = A.height,
                    E = D - x;
                  E > c + 5
                    ? ((l = E - c - 15), u.addClass('w-e-tooltip-up'))
                    : E + C + c < S
                    ? ((l = E + C + 10), u.addClass('w-e-tooltip-down'))
                    : ((l = (E > 0 ? E : 0) + c + 10), u.addClass('w-e-tooltip-down')),
                    T < 0 ? (v = 0) : (v = T);
                } else
                  d.top < c || d.top - m.top < c
                    ? ((l = d.bottom + h + 5), u.addClass('w-e-tooltip-down'))
                    : ((l = d.top + h - c - 15), u.addClass('w-e-tooltip-up')),
                    d.left < 0 ? (v = 0) : (v = d.left);
                return { top: l, left: v };
              }),
              (p.prototype.appendMenus = function () {
                var u = this,
                  l = this.conf,
                  v = this.editor,
                  c = this.$targetElem,
                  h = this.$container;
                (0, a.default)(l).call(l, function (d, m) {
                  var A = d.$elem,
                    y = g.default('<div></div>');
                  y.addClass('w-e-tooltip-item-wrapper '),
                    y.append(A),
                    h.append(y),
                    A.on('click', function (x) {
                      x.preventDefault();
                      var S = d.onClick(v, c);
                      S && u.remove();
                    });
                });
              }),
              (p.prototype.create = function () {
                var u,
                  l,
                  v = this.editor,
                  c = this.$container;
                this.appendMenus();
                var h = this.getPositionData(),
                  d = h.top,
                  m = h.left;
                c.css('top', d + 'px'),
                  c.css('left', m + 'px'),
                  c.css('z-index', v.zIndex.get('tooltip')),
                  this._isInsertTextContainer
                    ? this.editor.$textContainerElem.append(c)
                    : g.default('body').append(c),
                  (this._show = !0),
                  v.beforeDestroy((0, i.default)((u = this.remove)).call(u, this)),
                  v.txt.eventHooks.onBlurEvents.push(
                    (0, i.default)((l = this.remove)).call(l, this),
                  );
              }),
              (p.prototype.remove = function () {
                this.$container.remove(), (this._show = !1);
              }),
              (0, r.default)(p.prototype, 'isShow', {
                get: function () {
                  return this._show;
                },
                enumerable: !1,
                configurable: !0,
              }),
              p
            );
          })();
        n.default = s;
      },
      function (o, n, t) {
        var e = t(41);
        o.exports = function (r, a, i) {
          if ((e(r), a === void 0)) return r;
          switch (i) {
            case 0:
              return function () {
                return r.call(a);
              };
            case 1:
              return function (f) {
                return r.call(a, f);
              };
            case 2:
              return function (f, g) {
                return r.call(a, f, g);
              };
            case 3:
              return function (f, g, s) {
                return r.call(a, f, g, s);
              };
          }
          return function () {
            return r.apply(a, arguments);
          };
        };
      },
      function (o, n) {
        o.exports = function (t) {
          if (typeof t != 'function') throw TypeError(String(t) + ' is not a function');
          return t;
        };
      },
      function (o, n, t) {
        var e = t(165),
          r = t(8),
          a = t(13),
          i = t(19),
          f = t(16),
          g = t(63),
          s = t(51),
          p = r.WeakMap,
          u,
          l,
          v,
          c = function (S) {
            return v(S) ? l(S) : u(S, {});
          },
          h = function (S) {
            return function (D) {
              var T;
              if (!a(D) || (T = l(D)).type !== S)
                throw TypeError('Incompatible receiver, ' + S + ' required');
              return T;
            };
          };
        if (e) {
          var d = new p(),
            m = d.get,
            A = d.has,
            y = d.set;
          (u = function (S, D) {
            return y.call(d, S, D), D;
          }),
            (l = function (S) {
              return m.call(d, S) || {};
            }),
            (v = function (S) {
              return A.call(d, S);
            });
        } else {
          var x = g('state');
          (s[x] = !0),
            (u = function (S, D) {
              return i(S, x, D), D;
            }),
            (l = function (S) {
              return f(S, x) ? S[x] : {};
            }),
            (v = function (S) {
              return f(S, x);
            });
        }
        o.exports = { set: u, get: l, has: v, enforce: c, getterFor: h };
      },
      function (o, n) {
        o.exports = !0;
      },
      function (o, n) {
        o.exports = {};
      },
      function (o, n, t) {
        o.exports = t(261);
      },
      function (o, n, t) {
        o.exports = t(265);
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(4));
        (0, r.default)(n, '__esModule', { value: !0 }),
          (n.createElementFragment =
            n.createDocumentFragment =
            n.createElement =
            n.insertBefore =
            n.getEndPoint =
            n.getStartPoint =
            n.updateRange =
            n.filterSelectionNodes =
              void 0);
        var i = t(2),
          f = t(137),
          g = i.__importDefault(t(3));
        function s(m) {
          var A = [];
          return (
            (0, a.default)(m).call(m, function (y) {
              var x = y.getNodeName();
              if (x !== f.ListType.OrderedList && x !== f.ListType.UnorderedList) A.push(y);
              else if (y.prior) A.push(y.prior);
              else {
                var S = y.children();
                S == null ||
                  (0, a.default)(S).call(S, function (D) {
                    A.push(g.default(D));
                  });
              }
            }),
            A
          );
        }
        n.filterSelectionNodes = s;
        function p(m, A, y) {
          var x = m.selection,
            S = document.createRange();
          A.length > 1
            ? (S.setStart(A.elems[0], 0),
              S.setEnd(A.elems[A.length - 1], A.elems[A.length - 1].childNodes.length))
            : S.selectNodeContents(A.elems[0]),
            y && S.collapse(!1),
            x.saveRange(S),
            x.restoreSelection();
        }
        n.updateRange = p;
        function u(m) {
          var A;
          return m.prior
            ? m.prior
            : g.default((A = m.children()) === null || A === void 0 ? void 0 : A.elems[0]);
        }
        n.getStartPoint = u;
        function l(m) {
          var A;
          return m.prior
            ? m.prior
            : g.default((A = m.children()) === null || A === void 0 ? void 0 : A.last().elems[0]);
        }
        n.getEndPoint = l;
        function v(m, A, y) {
          y === void 0 && (y = null), m.parent().elems[0].insertBefore(A, y);
        }
        n.insertBefore = v;
        function c(m) {
          return document.createElement(m);
        }
        n.createElement = c;
        function h() {
          return document.createDocumentFragment();
        }
        n.createDocumentFragment = h;
        function d(m, A, y) {
          return (
            y === void 0 && (y = 'li'),
            (0, a.default)(m).call(m, function (x) {
              var S = c(y);
              (S.innerHTML = x.html()), A.appendChild(S), x.remove();
            }),
            A
          );
        }
        n.createElementFragment = d;
      },
      function (o, n) {
        o.exports = function (t, e) {
          return { enumerable: !(t & 1), configurable: !(t & 2), writable: !(t & 4), value: e };
        };
      },
      function (o, n) {
        o.exports = function (t) {
          if (t == null) throw TypeError("Can't call method on " + t);
          return t;
        };
      },
      function (o, n, t) {
        var e = t(164).charAt,
          r = t(42),
          a = t(75),
          i = 'String Iterator',
          f = r.set,
          g = r.getterFor(i);
        a(
          String,
          'String',
          function (s) {
            f(this, { type: i, string: String(s), index: 0 });
          },
          function () {
            var p = g(this),
              u = p.string,
              l = p.index,
              v;
            return l >= u.length
              ? { value: void 0, done: !0 }
              : ((v = e(u, l)), (p.index += v.length), { value: v, done: !1 });
          },
        );
      },
      function (o, n) {
        o.exports = {};
      },
      function (o, n, t) {
        var e = t(107),
          r = t(80);
        o.exports =
          Object.keys ||
          function (i) {
            return e(i, r);
          };
      },
      function (o, n, t) {
        var e = t(19);
        o.exports = function (r, a, i, f) {
          f && f.enumerable ? (r[a] = i) : e(r, a, i);
        };
      },
      function (o, n, t) {
        t(173);
        var e = t(174),
          r = t(8),
          a = t(65),
          i = t(19),
          f = t(44),
          g = t(10),
          s = g('toStringTag');
        for (var p in e) {
          var u = r[p],
            l = u && u.prototype;
          l && a(l) !== s && i(l, s, p), (f[p] = f.Array);
        }
      },
      function (o, n, t) {
        var e = t(34);
        o.exports =
          Array.isArray ||
          function (a) {
            return e(a) == 'Array';
          };
      },
      function (o, n, t) {
        var e = t(11),
          r = t(10),
          a = t(86),
          i = r('species');
        o.exports = function (f) {
          return (
            a >= 51 ||
            !e(function () {
              var g = [],
                s = (g.constructor = {});
              return (
                (s[i] = function () {
                  return { foo: 1 };
                }),
                g[f](Boolean).foo !== 1
              );
            })
          );
        };
      },
      function (o, n, t) {
        o.exports = t(222);
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 }), (n.ListHandle = void 0);
        var a = t(2),
          i = a.__importDefault(t(373)),
          f = (function () {
            function g(s) {
              (this.options = s), (this.selectionRangeElem = new i.default());
            }
            return g;
          })();
        n.ListHandle = f;
      },
      function (o, n, t) {
        var e = {}.propertyIsEnumerable,
          r = Object.getOwnPropertyDescriptor,
          a = r && !e.call({ 1: 2 }, 1);
        n.f = a
          ? function (f) {
              var g = r(this, f);
              return !!g && g.enumerable;
            }
          : e;
      },
      function (o, n, t) {
        var e = t(13);
        o.exports = function (r, a) {
          if (!e(r)) return r;
          var i, f;
          if (
            (a && typeof (i = r.toString) == 'function' && !e((f = i.call(r)))) ||
            (typeof (i = r.valueOf) == 'function' && !e((f = i.call(r)))) ||
            (!a && typeof (i = r.toString) == 'function' && !e((f = i.call(r))))
          )
            return f;
          throw TypeError("Can't convert object to primitive value");
        };
      },
      function (o, n) {},
      function (o, n) {
        var t = Math.ceil,
          e = Math.floor;
        o.exports = function (r) {
          return isNaN((r = +r)) ? 0 : (r > 0 ? e : t)(r);
        };
      },
      function (o, n, t) {
        var e = t(74),
          r = t(64),
          a = e('keys');
        o.exports = function (i) {
          return a[i] || (a[i] = r(i));
        };
      },
      function (o, n) {
        var t = 0,
          e = Math.random();
        o.exports = function (r) {
          return 'Symbol(' + String(r === void 0 ? '' : r) + ')_' + (++t + e).toString(36);
        };
      },
      function (o, n, t) {
        var e = t(81),
          r = t(34),
          a = t(10),
          i = a('toStringTag'),
          f =
            r(
              (function () {
                return arguments;
              })(),
            ) == 'Arguments',
          g = function (s, p) {
            try {
              return s[p];
            } catch (u) {}
          };
        o.exports = e
          ? r
          : function (s) {
              var p, u, l;
              return s === void 0
                ? 'Undefined'
                : s === null
                ? 'Null'
                : typeof (u = g((p = Object(s)), i)) == 'string'
                ? u
                : f
                ? r(p)
                : (l = r(p)) == 'Object' && typeof p.callee == 'function'
                ? 'Arguments'
                : l;
            };
      },
      function (o, n, t) {
        var e = t(25),
          r = t(112),
          a = t(35),
          i = t(40),
          f = t(113),
          g = t(114),
          s = function (u, l) {
            (this.stopped = u), (this.result = l);
          },
          p = (o.exports = function (u, l, v, c, h) {
            var d = i(l, v, c ? 2 : 1),
              m,
              A,
              y,
              x,
              S,
              D,
              T;
            if (h) m = u;
            else {
              if (((A = f(u)), typeof A != 'function')) throw TypeError('Target is not iterable');
              if (r(A)) {
                for (y = 0, x = a(u.length); x > y; y++)
                  if (((S = c ? d(e((T = u[y]))[0], T[1]) : d(u[y])), S && S instanceof s))
                    return S;
                return new s(!1);
              }
              m = A.call(u);
            }
            for (D = m.next; !(T = D.call(m)).done; )
              if (((S = g(m, d, T.value, c)), typeof S == 'object' && S && S instanceof s))
                return S;
            return new s(!1);
          });
        p.stop = function (u) {
          return new s(!0, u);
        };
      },
      function (o, n, t) {
        var e = t(11);
        o.exports = function (r, a) {
          var i = [][r];
          return (
            !!i &&
            e(function () {
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
      function (o, n) {
        o.exports = `	
\v\f\r                　\u2028\u2029\uFEFF`;
      },
      function (o, n, t) {
        var e = t(60),
          r = t(18),
          a = t(48);
        o.exports = function (i, f, g) {
          var s = e(f);
          s in i ? r.f(i, s, a(0, g)) : (i[s] = g);
        };
      },
      function (o, n, t) {
        o.exports = t(209);
      },
      function (o, n, t) {
        var e = t(14),
          r = t(59),
          a = t(48),
          i = t(30),
          f = t(60),
          g = t(16),
          s = t(100),
          p = Object.getOwnPropertyDescriptor;
        n.f = e
          ? p
          : function (l, v) {
              if (((l = i(l)), (v = f(v, !0)), s))
                try {
                  return p(l, v);
                } catch (c) {}
              if (g(l, v)) return a(!r.f.call(l, v), l[v]);
            };
      },
      function (o, n, t) {
        var e = t(11),
          r = t(34),
          a = ''.split;
        o.exports = e(function () {
          return !Object('z').propertyIsEnumerable(0);
        })
          ? function (i) {
              return r(i) == 'String' ? a.call(i, '') : Object(i);
            }
          : Object;
      },
      function (o, n, t) {
        var e = t(8),
          r = t(13),
          a = e.document,
          i = r(a) && r(a.createElement);
        o.exports = function (f) {
          return i ? a.createElement(f) : {};
        };
      },
      function (o, n, t) {
        var e = t(43),
          r = t(103);
        (o.exports = function (a, i) {
          return r[a] || (r[a] = i !== void 0 ? i : {});
        })('versions', []).push({
          version: '3.6.4',
          mode: e ? 'pure' : 'global',
          copyright: '© 2020 Denis Pushkarev (zloirock.ru)',
        });
      },
      function (o, n, t) {
        var e = t(5),
          r = t(167),
          a = t(105),
          i = t(171),
          f = t(37),
          g = t(19),
          s = t(53),
          p = t(10),
          u = t(43),
          l = t(44),
          v = t(104),
          c = v.IteratorPrototype,
          h = v.BUGGY_SAFARI_ITERATORS,
          d = p('iterator'),
          m = 'keys',
          A = 'values',
          y = 'entries',
          x = function () {
            return this;
          };
        o.exports = function (S, D, T, C, E, P, I) {
          r(T, D, C);
          var M = function (U) {
              if (U === E && w) return w;
              if (!h && U in B) return B[U];
              switch (U) {
                case m:
                  return function () {
                    return new T(this, U);
                  };
                case A:
                  return function () {
                    return new T(this, U);
                  };
                case y:
                  return function () {
                    return new T(this, U);
                  };
              }
              return function () {
                return new T(this);
              };
            },
            N = D + ' Iterator',
            L = !1,
            B = S.prototype,
            F = B[d] || B['@@iterator'] || (E && B[E]),
            w = (!h && F) || M(E),
            b = (D == 'Array' && B.entries) || F,
            H,
            j,
            K;
          if (
            (b &&
              ((H = a(b.call(new S()))),
              c !== Object.prototype &&
                H.next &&
                (!u && a(H) !== c && (i ? i(H, c) : typeof H[d] != 'function' && g(H, d, x)),
                f(H, N, !0, !0),
                u && (l[N] = x))),
            E == A &&
              F &&
              F.name !== A &&
              ((L = !0),
              (w = function () {
                return F.call(this);
              })),
            (!u || I) && B[d] !== w && g(B, d, w),
            (l[D] = w),
            E)
          )
            if (((j = { values: M(A), keys: P ? w : M(m), entries: M(y) }), I))
              for (K in j) (h || L || !(K in B)) && s(B, K, j[K]);
            else e({ target: D, proto: !0, forced: h || L }, j);
          return j;
        };
      },
      function (o, n, t) {
        var e = t(11);
        o.exports =
          !!Object.getOwnPropertySymbols &&
          !e(function () {
            return !String(Symbol());
          });
      },
      function (o, n, t) {
        var e = t(25),
          r = t(169),
          a = t(80),
          i = t(51),
          f = t(108),
          g = t(73),
          s = t(63),
          p = '>',
          u = '<',
          l = 'prototype',
          v = 'script',
          c = s('IE_PROTO'),
          h = function () {},
          d = function (S) {
            return u + v + p + S + u + '/' + v + p;
          },
          m = function (S) {
            S.write(d('')), S.close();
            var D = S.parentWindow.Object;
            return (S = null), D;
          },
          A = function () {
            var S = g('iframe'),
              D = 'java' + v + ':',
              T;
            return (
              (S.style.display = 'none'),
              f.appendChild(S),
              (S.src = String(D)),
              (T = S.contentWindow.document),
              T.open(),
              T.write(d('document.F=Object')),
              T.close(),
              T.F
            );
          },
          y,
          x = function () {
            try {
              y = document.domain && new ActiveXObject('htmlfile');
            } catch (D) {}
            x = y ? m(y) : A();
            for (var S = a.length; S--; ) delete x[l][a[S]];
            return x();
          };
        (i[c] = !0),
          (o.exports =
            Object.create ||
            function (D, T) {
              var C;
              return (
                D !== null ? ((h[l] = e(D)), (C = new h()), (h[l] = null), (C[c] = D)) : (C = x()),
                T === void 0 ? C : r(C, T)
              );
            });
      },
      function (o, n, t) {
        var e = t(30),
          r = t(35),
          a = t(79),
          i = function (f) {
            return function (g, s, p) {
              var u = e(g),
                l = r(u.length),
                v = a(p, l),
                c;
              if (f && s != s) {
                for (; l > v; ) if (((c = u[v++]), c != c)) return !0;
              } else for (; l > v; v++) if ((f || v in u) && u[v] === s) return f || v || 0;
              return !f && -1;
            };
          };
        o.exports = { includes: i(!0), indexOf: i(!1) };
      },
      function (o, n, t) {
        var e = t(62),
          r = Math.max,
          a = Math.min;
        o.exports = function (i, f) {
          var g = e(i);
          return g < 0 ? r(g + f, 0) : a(g, f);
        };
      },
      function (o, n) {
        o.exports = [
          'constructor',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'toLocaleString',
          'toString',
          'valueOf',
        ];
      },
      function (o, n, t) {
        var e = t(10),
          r = e('toStringTag'),
          a = {};
        (a[r] = 'z'), (o.exports = String(a) === '[object z]');
      },
      function (o, n) {
        o.exports = function () {};
      },
      function (o, n) {
        o.exports = function (t, e, r) {
          if (!(t instanceof e)) throw TypeError('Incorrect ' + (r ? r + ' ' : '') + 'invocation');
          return t;
        };
      },
      function (o, n, t) {
        var e = t(36);
        o.exports = e('navigator', 'userAgent') || '';
      },
      function (o, n, t) {
        var e = t(41),
          r = function (a) {
            var i, f;
            (this.promise = new a(function (g, s) {
              if (i !== void 0 || f !== void 0) throw TypeError('Bad Promise constructor');
              (i = g), (f = s);
            })),
              (this.resolve = e(i)),
              (this.reject = e(f));
          };
        o.exports.f = function (a) {
          return new r(a);
        };
      },
      function (o, n, t) {
        var e = t(8),
          r = t(84),
          a = e.process,
          i = a && a.versions,
          f = i && i.v8,
          g,
          s;
        f
          ? ((g = f.split('.')), (s = g[0] + g[1]))
          : r &&
            ((g = r.match(/Edge\/(\d+)/)),
            (!g || g[1] >= 74) && ((g = r.match(/Chrome\/(\d+)/)), g && (s = g[1]))),
          (o.exports = s && +s);
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(4));
        (0, r.default)(n, '__esModule', { value: !0 });
        var i = t(2),
          f = i.__importDefault(t(3)),
          g = t(6),
          s = i.__importDefault(t(267)),
          p = i.__importDefault(t(280)),
          u = i.__importDefault(t(281)),
          l = i.__importDefault(t(282)),
          v = i.__importDefault(t(301)),
          c = i.__importStar(t(416)),
          h = i.__importDefault(t(417)),
          d = i.__importDefault(t(418)),
          m = i.__importDefault(t(419)),
          A = i.__importStar(t(420)),
          y = i.__importDefault(t(423)),
          x = i.__importDefault(t(424)),
          S = i.__importDefault(t(425)),
          D = i.__importDefault(t(427)),
          T = i.__importDefault(t(437)),
          C = i.__importDefault(t(440)),
          E = i.__importStar(t(441)),
          P = i.__importDefault(t(23)),
          I = i.__importDefault(t(134)),
          M = i.__importDefault(t(24)),
          N = i.__importDefault(t(33)),
          L = i.__importDefault(t(38)),
          B = i.__importDefault(t(39)),
          F = 1,
          w = (function () {
            function b(H, j) {
              (this.pluginsFunctionList = {}),
                (this.beforeDestroyHooks = []),
                (this.id = 'wangEditor-' + F++),
                (this.toolbarSelector = H),
                (this.textSelector = j),
                c.selectorValidator(this),
                (this.config = g.deepClone(s.default)),
                (this.$toolbarElem = f.default('<div></div>')),
                (this.$textContainerElem = f.default('<div></div>')),
                (this.$textElem = f.default('<div></div>')),
                (this.toolbarElemId = ''),
                (this.textElemId = ''),
                (this.isFocus = !1),
                (this.isComposing = !1),
                (this.isCompatibleMode = !1),
                (this.selection = new p.default(this)),
                (this.cmd = new u.default(this)),
                (this.txt = new l.default(this)),
                (this.menus = new v.default(this)),
                (this.zIndex = new x.default()),
                (this.change = new S.default(this)),
                (this.history = new D.default(this)),
                (this.onSelectionChange = new C.default(this));
              var K = T.default(this),
                U = K.disable,
                W = K.enable;
              (this.disable = U), (this.enable = W), (this.isEnable = !0);
            }
            return (
              (b.prototype.initSelection = function (H) {
                h.default(this, H);
              }),
              (b.prototype.create = function () {
                this.zIndex.init(this),
                  (this.isCompatibleMode = this.config.compatibleMode()),
                  this.isCompatibleMode || (this.config.onchangeTimeout = 30),
                  m.default(this),
                  c.default(this),
                  this.txt.init(),
                  this.menus.init(),
                  A.default(this),
                  this.initSelection(!0),
                  d.default(this),
                  this.change.observe(),
                  this.history.observe(),
                  E.default(this);
              }),
              (b.prototype.beforeDestroy = function (H) {
                return this.beforeDestroyHooks.push(H), this;
              }),
              (b.prototype.destroy = function () {
                var H,
                  j = this;
                (0, a.default)((H = this.beforeDestroyHooks)).call(H, function (K) {
                  return K.call(j);
                }),
                  this.$toolbarElem.remove(),
                  this.$textContainerElem.remove();
              }),
              (b.prototype.fullScreen = function () {
                A.setFullScreen(this);
              }),
              (b.prototype.unFullScreen = function () {
                A.setUnFullScreen(this);
              }),
              (b.prototype.scrollToHead = function (H) {
                y.default(this, H);
              }),
              (b.registerMenu = function (H, j) {
                !j || typeof j != 'function' || (b.globalCustomMenuConstructorList[H] = j);
              }),
              (b.prototype.registerPlugin = function (H, j) {
                E.registerPlugin(H, j, this.pluginsFunctionList);
              }),
              (b.registerPlugin = function (H, j) {
                E.registerPlugin(H, j, b.globalPluginsFunctionList);
              }),
              (b.$ = f.default),
              (b.BtnMenu = P.default),
              (b.DropList = I.default),
              (b.DropListMenu = M.default),
              (b.Panel = N.default),
              (b.PanelMenu = L.default),
              (b.Tooltip = B.default),
              (b.globalCustomMenuConstructorList = {}),
              (b.globalPluginsFunctionList = {}),
              b
            );
          })();
        n.default = w;
      },
      function (o, n, t) {
        var e = t(13),
          r = t(55),
          a = t(10),
          i = a('species');
        o.exports = function (f, g) {
          var s;
          return (
            r(f) &&
              ((s = f.constructor),
              typeof s == 'function' && (s === Array || r(s.prototype))
                ? (s = void 0)
                : e(s) && ((s = s[i]), s === null && (s = void 0))),
            new (s === void 0 ? Array : s)(g === 0 ? 0 : g)
          );
        };
      },
      function (o, n, t) {
        o.exports = t(185);
      },
      function (o, n, t) {
        var e = t(49),
          r = t(68),
          a = '[' + r + ']',
          i = RegExp('^' + a + a + '*'),
          f = RegExp(a + a + '*$'),
          g = function (s) {
            return function (p) {
              var u = String(e(p));
              return s & 1 && (u = u.replace(i, '')), s & 2 && (u = u.replace(f, '')), u;
            };
          };
        o.exports = { start: g(1), end: g(2), trim: g(3) };
      },
      function (o, n, t) {
        o.exports = t(205);
      },
      function (o, n, t) {
        var e = t(227),
          r = t(230);
        function a(i) {
          return (
            typeof r == 'function' && typeof e == 'symbol'
              ? (o.exports = a =
                  function (g) {
                    return typeof g;
                  })
              : (o.exports = a =
                  function (g) {
                    return g && typeof r == 'function' && g.constructor === r && g !== r.prototype
                      ? 'symbol'
                      : typeof g;
                  }),
            a(i)
          );
        }
        o.exports = a;
      },
      function (o, n, t) {
        var e = t(10);
        n.f = e;
      },
      function (o, n, t) {
        o.exports = t(306);
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(4));
        (0, r.default)(n, '__esModule', { value: !0 });
        var i = t(2),
          f = i.__importDefault(t(33)),
          g = (function () {
            function s(p, u) {
              var l = this;
              (this.$elem = p),
                (this.editor = u),
                (this._active = !1),
                p.on('click', function (v) {
                  var c;
                  f.default.hideCurAllPanels(),
                    (0, a.default)((c = u.txt.eventHooks.menuClickEvents)).call(c, function (h) {
                      return h();
                    }),
                    v.stopPropagation(),
                    u.selection.getRange() != null && l.clickHandler(v);
                });
            }
            return (
              (s.prototype.clickHandler = function (p) {}),
              (s.prototype.active = function () {
                (this._active = !0), this.$elem.addClass('w-e-active');
              }),
              (s.prototype.unActive = function () {
                (this._active = !1), this.$elem.removeClass('w-e-active');
              }),
              (0, r.default)(s.prototype, 'isActive', {
                get: function () {
                  return this._active;
                },
                enumerable: !1,
                configurable: !0,
              }),
              s
            );
          })();
        n.default = g;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(28));
        (0, r.default)(n, '__esModule', { value: !0 }),
          (n.getParentNodeA = n.EXTRA_TAG = void 0),
          (n.EXTRA_TAG = ['B', 'FONT', 'I', 'STRIKE']);
        function i(g) {
          for (var s = g.elems[0]; s && (0, a.default)((p = n.EXTRA_TAG)).call(p, s.nodeName); ) {
            var p;
            if (((s = s.parentElement), s.nodeName === 'A')) return s;
          }
        }
        n.getParentNodeA = i;
        function f(g) {
          var s,
            p = g.selection.getSelectionContainerElem();
          if (!(!((s = p == null ? void 0 : p.elems) === null || s === void 0) && s.length))
            return !1;
          if (p.getNodeName() === 'A') return !0;
          var u = i(p);
          return !!(u && u.nodeName === 'A');
        }
        n.default = f;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(57)),
          i = e(t(4)),
          f = e(t(27));
        (0, r.default)(n, '__esModule', { value: !0 });
        var g = t(2),
          s = t(6),
          p = g.__importDefault(t(135)),
          u = g.__importDefault(t(136)),
          l = (function () {
            function v(c) {
              this.editor = c;
            }
            return (
              (v.prototype.insertImg = function (c, h, d) {
                var m = this.editor,
                  A = m.config,
                  y = 'validate.',
                  x = function (P, I) {
                    return I === void 0 && (I = y), m.i18next.t(I + P);
                  },
                  S = c.replace(/</g, '&lt;').replace(/>/g, '&gt;');
                S = S.replace("'", '"');
                var D = '';
                d &&
                  ((D = d.replace("'", '"')), (D = "data-href='" + encodeURIComponent(D) + "' "));
                var T = '';
                h &&
                  ((T = h.replace(/</g, '&lt;').replace(/>/g, '&gt;')),
                  (T = T.replace("'", '"')),
                  (T = "alt='" + T + "' ")),
                  m.cmd.do(
                    'insertHTML',
                    "<img src='" +
                      S +
                      "' " +
                      T +
                      D +
                      'style="max-width:100%;" contenteditable="false"/>',
                  ),
                  A.linkImgCallback(c, h, d);
                var C = document.createElement('img');
                (C.onload = function () {
                  C = null;
                }),
                  (C.onerror = function () {
                    A.customAlert(
                      x('插入图片错误'),
                      'error',
                      'wangEditor: ' +
                        x('插入图片错误') +
                        '，' +
                        x('图片链接') +
                        ' "' +
                        c +
                        '"，' +
                        x('下载链接失败'),
                    ),
                      (C = null);
                  }),
                  (C.onabort = function () {
                    return (C = null);
                  }),
                  (C.src = c);
              }),
              (v.prototype.uploadImg = function (c) {
                var h = this;
                if (c.length) {
                  var d = this.editor,
                    m = d.config,
                    A = 'validate.',
                    y = function ($) {
                      return d.i18next.t(A + $);
                    },
                    x = m.uploadImgServer,
                    S = m.uploadImgShowBase64,
                    D = m.uploadImgMaxSize,
                    T = D / 1024 / 1024,
                    C = m.uploadImgMaxLength,
                    E = m.uploadFileName,
                    P = m.uploadImgParams,
                    I = m.uploadImgParamsWithUrl,
                    M = m.uploadImgHeaders,
                    N = m.uploadImgHooks,
                    L = m.uploadImgTimeout,
                    B = m.withCredentials,
                    F = m.customUploadImg;
                  if (!(!F && !x && !S)) {
                    var w = [],
                      b = [];
                    if (
                      (s.arrForEach(c, function (z) {
                        if (z) {
                          var $ = z.name || z.type.replace('/', '.'),
                            Q = z.size;
                          if (!(!$ || !Q)) {
                            var J = d.config.uploadImgAccept.join('|'),
                              k = '.(' + J + ')$',
                              tt = new RegExp(k, 'i');
                            if (tt.test($) === !1) {
                              b.push('【' + $ + '】' + y('不是图片'));
                              return;
                            }
                            if (D < Q) {
                              b.push('【' + $ + '】' + y('大于') + ' ' + T + 'M');
                              return;
                            }
                            w.push(z);
                          }
                        }
                      }),
                      b.length)
                    ) {
                      m.customAlert(
                        y('图片验证未通过') +
                          `: 
` +
                          b.join(`
`),
                        'warning',
                      );
                      return;
                    }
                    if (w.length === 0) {
                      m.customAlert(y('传入的文件不合法'), 'warning');
                      return;
                    }
                    if (w.length > C) {
                      m.customAlert(y('一次最多上传') + C + y('张图片'), 'warning');
                      return;
                    }
                    if (F && typeof F == 'function') {
                      var H;
                      F(w, (0, a.default)((H = this.insertImg)).call(H, this));
                      return;
                    }
                    var j = new FormData();
                    if (
                      ((0, i.default)(w).call(w, function (z, $) {
                        var Q = E || z.name;
                        w.length > 1 && (Q = Q + ($ + 1)), j.append(Q, z);
                      }),
                      x)
                    ) {
                      var K = x.split('#');
                      x = K[0];
                      var U = K[1] || '';
                      (0, i.default)(s).call(s, P, function (z, $) {
                        I &&
                          ((0, f.default)(x).call(x, '?') > 0 ? (x += '&') : (x += '?'),
                          (x = x + z + '=' + $)),
                          j.append(z, $);
                      }),
                        U && (x += '#' + U);
                      var W = p.default(x, {
                        timeout: L,
                        formData: j,
                        headers: M,
                        withCredentials: !!B,
                        beforeSend: function ($) {
                          if (N.before) return N.before($, d, w);
                        },
                        onTimeout: function ($) {
                          m.customAlert(y('上传图片超时'), 'error'), N.timeout && N.timeout($, d);
                        },
                        onProgress: function ($, Q) {
                          var J = new u.default(d);
                          Q.lengthComputable && (($ = Q.loaded / Q.total), J.show($));
                        },
                        onError: function ($) {
                          m.customAlert(
                            y('上传图片错误'),
                            'error',
                            y('上传图片错误') + '，' + y('服务器返回状态') + ': ' + $.status,
                          ),
                            N.error && N.error($, d);
                        },
                        onFail: function ($, Q) {
                          m.customAlert(
                            y('上传图片失败'),
                            'error',
                            y('上传图片返回结果错误') + ('，' + y('返回结果') + ': ') + Q,
                          ),
                            N.fail && N.fail($, d, Q);
                        },
                        onSuccess: function ($, Q) {
                          if (N.customInsert) {
                            var J;
                            N.customInsert((0, a.default)((J = h.insertImg)).call(J, h), Q, d);
                            return;
                          }
                          if (Q.errno != '0') {
                            m.customAlert(
                              y('上传图片失败'),
                              'error',
                              y('上传图片返回结果错误') +
                                '，' +
                                y('返回结果') +
                                ' errno=' +
                                Q.errno,
                            ),
                              N.fail && N.fail($, d, Q);
                            return;
                          }
                          var k = Q.data;
                          (0, i.default)(k).call(k, function (tt) {
                            typeof tt == 'string'
                              ? h.insertImg(tt)
                              : h.insertImg(tt.url, tt.alt, tt.href);
                          }),
                            N.success && N.success($, d, Q);
                        },
                      });
                      typeof W == 'string' && m.customAlert(W, 'error');
                      return;
                    }
                    S &&
                      s.arrForEach(c, function (z) {
                        var $ = h,
                          Q = new FileReader();
                        Q.readAsDataURL(z),
                          (Q.onload = function () {
                            if (this.result) {
                              var J = this.result.toString();
                              $.insertImg(J, J);
                            }
                          });
                      });
                  }
                }
              }),
              v
            );
          })();
        n.default = l;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(410)),
          i = e(t(4)),
          f = e(t(45));
        (0, r.default)(n, '__esModule', { value: !0 }),
          (n.dealTextNode = n.isAllTodo = n.isTodo = n.getCursorNextNode = void 0);
        function g(v) {
          return v.length ? v.attr('class') === 'w-e-todo' : !1;
        }
        n.isTodo = g;
        function s(v) {
          var c = v.selection.getSelectionRangeTopNodes();
          if (c.length !== 0)
            return (0, a.default)(c).call(c, function (h) {
              return g(h);
            });
        }
        n.isAllTodo = s;
        function p(v, c, h) {
          var d;
          if (v.hasChildNodes()) {
            var m = v.cloneNode(),
              A = !1;
            c.nodeValue === '' && (A = !0);
            var y = [];
            return (
              (0, i.default)((d = v.childNodes)).call(d, function (x) {
                if (
                  (!u(x, c) &&
                    A &&
                    (m.appendChild(x.cloneNode(!0)), x.nodeName !== 'BR' && y.push(x)),
                  u(x, c))
                ) {
                  if (x.nodeType === 1) {
                    var S = p(x, c, h);
                    S && S.textContent !== '' && (m == null || m.appendChild(S));
                  }
                  if (x.nodeType === 3 && c.isEqualNode(x)) {
                    var D = l(x, h);
                    m.textContent = D;
                  }
                  A = !0;
                }
              }),
              (0, i.default)(y).call(y, function (x) {
                var S = x;
                S.remove();
              }),
              m
            );
          }
        }
        n.getCursorNextNode = p;
        function u(v, c) {
          return v.nodeType === 3 ? v.nodeValue === c.nodeValue : v.contains(c);
        }
        function l(v, c, h) {
          h === void 0 && (h = !0);
          var d = v.nodeValue,
            m = d == null ? void 0 : (0, f.default)(d).call(d, 0, c);
          if (((d = d == null ? void 0 : (0, f.default)(d).call(d, c)), !h)) {
            var A = d;
            (d = m), (m = A);
          }
          return (v.nodeValue = m), d;
        }
        n.dealTextNode = l;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 });
        var a = t(430),
          i = (function () {
            function f(g) {
              (this.maxSize = g),
                (this.isRe = !1),
                (this.data = new a.CeilStack(g)),
                (this.revokeData = new a.CeilStack(g));
            }
            return (
              (0, r.default)(f.prototype, 'size', {
                get: function () {
                  return [this.data.size, this.revokeData.size];
                },
                enumerable: !1,
                configurable: !0,
              }),
              (f.prototype.resetMaxSize = function (g) {
                this.data.resetMax(g), this.revokeData.resetMax(g);
              }),
              (f.prototype.save = function (g) {
                return (
                  this.isRe && (this.revokeData.clear(), (this.isRe = !1)),
                  this.data.instack(g),
                  this
                );
              }),
              (f.prototype.revoke = function (g) {
                !this.isRe && (this.isRe = !0);
                var s = this.data.outstack();
                return s ? (this.revokeData.instack(s), g(s), !0) : !1;
              }),
              (f.prototype.restore = function (g) {
                !this.isRe && (this.isRe = !0);
                var s = this.revokeData.outstack();
                return s ? (this.data.instack(s), g(s), !0) : !1;
              }),
              f
            );
          })();
        n.default = i;
      },
      function (o, n, t) {
        var e = t(14),
          r = t(11),
          a = t(73);
        o.exports =
          !e &&
          !r(function () {
            return (
              Object.defineProperty(a('div'), 'a', {
                get: function () {
                  return 7;
                },
              }).a != 7
            );
          });
      },
      function (o, n, t) {
        var e = t(11),
          r = /#|\.prototype\./,
          a = function (p, u) {
            var l = f[i(p)];
            return l == s ? !0 : l == g ? !1 : typeof u == 'function' ? e(u) : !!u;
          },
          i = (a.normalize = function (p) {
            return String(p).replace(r, '.').toLowerCase();
          }),
          f = (a.data = {}),
          g = (a.NATIVE = 'N'),
          s = (a.POLYFILL = 'P');
        o.exports = a;
      },
      function (o, n, t) {
        var e = t(103),
          r = Function.toString;
        typeof e.inspectSource != 'function' &&
          (e.inspectSource = function (a) {
            return r.call(a);
          }),
          (o.exports = e.inspectSource);
      },
      function (o, n, t) {
        var e = t(8),
          r = t(166),
          a = '__core-js_shared__',
          i = e[a] || r(a, {});
        o.exports = i;
      },
      function (o, n, t) {
        var e = t(105),
          r = t(19),
          a = t(16),
          i = t(10),
          f = t(43),
          g = i('iterator'),
          s = !1,
          p = function () {
            return this;
          },
          u,
          l,
          v;
        [].keys &&
          ((v = [].keys()),
          'next' in v ? ((l = e(e(v))), l !== Object.prototype && (u = l)) : (s = !0)),
          u == null && (u = {}),
          !f && !a(u, g) && r(u, g, p),
          (o.exports = { IteratorPrototype: u, BUGGY_SAFARI_ITERATORS: s });
      },
      function (o, n, t) {
        var e = t(16),
          r = t(31),
          a = t(63),
          i = t(168),
          f = a('IE_PROTO'),
          g = Object.prototype;
        o.exports = i
          ? Object.getPrototypeOf
          : function (s) {
              return (
                (s = r(s)),
                e(s, f)
                  ? s[f]
                  : typeof s.constructor == 'function' && s instanceof s.constructor
                  ? s.constructor.prototype
                  : s instanceof Object
                  ? g
                  : null
              );
            };
      },
      function (o, n, t) {
        var e = t(76);
        o.exports = e && !Symbol.sham && typeof Symbol.iterator == 'symbol';
      },
      function (o, n, t) {
        var e = t(16),
          r = t(30),
          a = t(78).indexOf,
          i = t(51);
        o.exports = function (f, g) {
          var s = r(f),
            p = 0,
            u = [],
            l;
          for (l in s) !e(i, l) && e(s, l) && u.push(l);
          for (; g.length > p; ) e(s, (l = g[p++])) && (~a(u, l) || u.push(l));
          return u;
        };
      },
      function (o, n, t) {
        var e = t(36);
        o.exports = e('document', 'documentElement');
      },
      function (o, n, t) {
        var e = t(8);
        o.exports = e.Promise;
      },
      function (o, n, t) {
        var e = t(53);
        o.exports = function (r, a, i) {
          for (var f in a) i && i.unsafe && r[f] ? (r[f] = a[f]) : e(r, f, a[f], i);
          return r;
        };
      },
      function (o, n, t) {
        var e = t(36),
          r = t(18),
          a = t(10),
          i = t(14),
          f = a('species');
        o.exports = function (g) {
          var s = e(g),
            p = r.f;
          i &&
            s &&
            !s[f] &&
            p(s, f, {
              configurable: !0,
              get: function () {
                return this;
              },
            });
        };
      },
      function (o, n, t) {
        var e = t(10),
          r = t(44),
          a = e('iterator'),
          i = Array.prototype;
        o.exports = function (f) {
          return f !== void 0 && (r.Array === f || i[a] === f);
        };
      },
      function (o, n, t) {
        var e = t(65),
          r = t(44),
          a = t(10),
          i = a('iterator');
        o.exports = function (f) {
          if (f != null) return f[i] || f['@@iterator'] || r[e(f)];
        };
      },
      function (o, n, t) {
        var e = t(25);
        o.exports = function (r, a, i, f) {
          try {
            return f ? a(e(i)[0], i[1]) : a(i);
          } catch (s) {
            var g = r.return;
            throw (g !== void 0 && e(g.call(r)), s);
          }
        };
      },
      function (o, n, t) {
        var e = t(10),
          r = e('iterator'),
          a = !1;
        try {
          var i = 0,
            f = {
              next: function () {
                return { done: !!i++ };
              },
              return: function () {
                a = !0;
              },
            };
          (f[r] = function () {
            return this;
          }),
            Array.from(f, function () {
              throw 2;
            });
        } catch (g) {}
        o.exports = function (g, s) {
          if (!s && !a) return !1;
          var p = !1;
          try {
            var u = {};
            (u[r] = function () {
              return {
                next: function () {
                  return { done: (p = !0) };
                },
              };
            }),
              g(u);
          } catch (l) {}
          return p;
        };
      },
      function (o, n, t) {
        var e = t(25),
          r = t(41),
          a = t(10),
          i = a('species');
        o.exports = function (f, g) {
          var s = e(f).constructor,
            p;
          return s === void 0 || (p = e(s)[i]) == null ? g : r(p);
        };
      },
      function (o, n, t) {
        var e = t(8),
          r = t(11),
          a = t(34),
          i = t(40),
          f = t(108),
          g = t(73),
          s = t(118),
          p = e.location,
          u = e.setImmediate,
          l = e.clearImmediate,
          v = e.process,
          c = e.MessageChannel,
          h = e.Dispatch,
          d = 0,
          m = {},
          A = 'onreadystatechange',
          y,
          x,
          S,
          D = function (P) {
            if (m.hasOwnProperty(P)) {
              var I = m[P];
              delete m[P], I();
            }
          },
          T = function (P) {
            return function () {
              D(P);
            };
          },
          C = function (P) {
            D(P.data);
          },
          E = function (P) {
            e.postMessage(P + '', p.protocol + '//' + p.host);
          };
        (!u || !l) &&
          ((u = function (I) {
            for (var M = [], N = 1; arguments.length > N; ) M.push(arguments[N++]);
            return (
              (m[++d] = function () {
                (typeof I == 'function' ? I : Function(I)).apply(void 0, M);
              }),
              y(d),
              d
            );
          }),
          (l = function (I) {
            delete m[I];
          }),
          a(v) == 'process'
            ? (y = function (P) {
                v.nextTick(T(P));
              })
            : h && h.now
            ? (y = function (P) {
                h.now(T(P));
              })
            : c && !s
            ? ((x = new c()), (S = x.port2), (x.port1.onmessage = C), (y = i(S.postMessage, S, 1)))
            : e.addEventListener &&
              typeof postMessage == 'function' &&
              !e.importScripts &&
              !r(E) &&
              p.protocol !== 'file:'
            ? ((y = E), e.addEventListener('message', C, !1))
            : A in g('script')
            ? (y = function (P) {
                f.appendChild(g('script'))[A] = function () {
                  f.removeChild(this), D(P);
                };
              })
            : (y = function (P) {
                setTimeout(T(P), 0);
              })),
          (o.exports = { set: u, clear: l });
      },
      function (o, n, t) {
        var e = t(84);
        o.exports = /(iphone|ipod|ipad).*applewebkit/i.test(e);
      },
      function (o, n, t) {
        var e = t(25),
          r = t(13),
          a = t(85);
        o.exports = function (i, f) {
          if ((e(i), r(f) && f.constructor === i)) return f;
          var g = a.f(i),
            s = g.resolve;
          return s(f), g.promise;
        };
      },
      function (o, n) {
        o.exports = function (t) {
          try {
            return { error: !1, value: t() };
          } catch (e) {
            return { error: !0, value: e };
          }
        };
      },
      function (o, n, t) {
        o.exports = t(197);
      },
      function (o, n, t) {
        var e = t(5),
          r = t(8),
          a = t(123),
          i = t(11),
          f = t(19),
          g = t(66),
          s = t(83),
          p = t(13),
          u = t(37),
          l = t(18).f,
          v = t(32).forEach,
          c = t(14),
          h = t(42),
          d = h.set,
          m = h.getterFor;
        o.exports = function (A, y, x) {
          var S = A.indexOf('Map') !== -1,
            D = A.indexOf('Weak') !== -1,
            T = S ? 'set' : 'add',
            C = r[A],
            E = C && C.prototype,
            P = {},
            I;
          if (
            !c ||
            typeof C != 'function' ||
            !(
              D ||
              (E.forEach &&
                !i(function () {
                  new C().entries().next();
                }))
            )
          )
            (I = x.getConstructor(y, A, S, T)), (a.REQUIRED = !0);
          else {
            I = y(function (N, L) {
              d(s(N, I, A), { type: A, collection: new C() }), L != null && g(L, N[T], N, S);
            });
            var M = m(A);
            v(
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
              function (N) {
                var L = N == 'add' || N == 'set';
                N in E &&
                  !(D && N == 'clear') &&
                  f(I.prototype, N, function (B, F) {
                    var w = M(this).collection;
                    if (!L && D && !p(B)) return N == 'get' ? void 0 : !1;
                    var b = w[N](B === 0 ? 0 : B, F);
                    return L ? this : b;
                  });
              },
            ),
              D ||
                l(I.prototype, 'size', {
                  configurable: !0,
                  get: function () {
                    return M(this).collection.size;
                  },
                });
          }
          return (
            u(I, A, !1, !0),
            (P[A] = I),
            e({ global: !0, forced: !0 }, P),
            D || x.setStrong(I, A, S),
            I
          );
        };
      },
      function (o, n, t) {
        var e = t(51),
          r = t(13),
          a = t(16),
          i = t(18).f,
          f = t(64),
          g = t(200),
          s = f('meta'),
          p = 0,
          u =
            Object.isExtensible ||
            function () {
              return !0;
            },
          l = function (m) {
            i(m, s, { value: { objectID: 'O' + ++p, weakData: {} } });
          },
          v = function (m, A) {
            if (!r(m)) return typeof m == 'symbol' ? m : (typeof m == 'string' ? 'S' : 'P') + m;
            if (!a(m, s)) {
              if (!u(m)) return 'F';
              if (!A) return 'E';
              l(m);
            }
            return m[s].objectID;
          },
          c = function (m, A) {
            if (!a(m, s)) {
              if (!u(m)) return !0;
              if (!A) return !1;
              l(m);
            }
            return m[s].weakData;
          },
          h = function (m) {
            return g && d.REQUIRED && u(m) && !a(m, s) && l(m), m;
          },
          d = (o.exports = { REQUIRED: !1, fastKey: v, getWeakData: c, onFreeze: h });
        e[s] = !0;
      },
      function (o, n, t) {
        var e = t(18).f,
          r = t(77),
          a = t(110),
          i = t(40),
          f = t(83),
          g = t(66),
          s = t(75),
          p = t(111),
          u = t(14),
          l = t(123).fastKey,
          v = t(42),
          c = v.set,
          h = v.getterFor;
        o.exports = {
          getConstructor: function (d, m, A, y) {
            var x = d(function (C, E) {
                f(C, x, m),
                  c(C, { type: m, index: r(null), first: void 0, last: void 0, size: 0 }),
                  u || (C.size = 0),
                  E != null && g(E, C[y], C, A);
              }),
              S = h(m),
              D = function (C, E, P) {
                var I = S(C),
                  M = T(C, E),
                  N,
                  L;
                return (
                  M
                    ? (M.value = P)
                    : ((I.last = M =
                        {
                          index: (L = l(E, !0)),
                          key: E,
                          value: P,
                          previous: (N = I.last),
                          next: void 0,
                          removed: !1,
                        }),
                      I.first || (I.first = M),
                      N && (N.next = M),
                      u ? I.size++ : C.size++,
                      L !== 'F' && (I.index[L] = M)),
                  C
                );
              },
              T = function (C, E) {
                var P = S(C),
                  I = l(E),
                  M;
                if (I !== 'F') return P.index[I];
                for (M = P.first; M; M = M.next) if (M.key == E) return M;
              };
            return (
              a(x.prototype, {
                clear: function () {
                  for (var E = this, P = S(E), I = P.index, M = P.first; M; )
                    (M.removed = !0),
                      M.previous && (M.previous = M.previous.next = void 0),
                      delete I[M.index],
                      (M = M.next);
                  (P.first = P.last = void 0), u ? (P.size = 0) : (E.size = 0);
                },
                delete: function (C) {
                  var E = this,
                    P = S(E),
                    I = T(E, C);
                  if (I) {
                    var M = I.next,
                      N = I.previous;
                    delete P.index[I.index],
                      (I.removed = !0),
                      N && (N.next = M),
                      M && (M.previous = N),
                      P.first == I && (P.first = M),
                      P.last == I && (P.last = N),
                      u ? P.size-- : E.size--;
                  }
                  return !!I;
                },
                forEach: function (E) {
                  for (
                    var P = S(this), I = i(E, arguments.length > 1 ? arguments[1] : void 0, 3), M;
                    (M = M ? M.next : P.first);

                  )
                    for (I(M.value, M.key, this); M && M.removed; ) M = M.previous;
                },
                has: function (E) {
                  return !!T(this, E);
                },
              }),
              a(
                x.prototype,
                A
                  ? {
                      get: function (E) {
                        var P = T(this, E);
                        return P && P.value;
                      },
                      set: function (E, P) {
                        return D(this, E === 0 ? 0 : E, P);
                      },
                    }
                  : {
                      add: function (E) {
                        return D(this, (E = E === 0 ? 0 : E), E);
                      },
                    },
              ),
              u &&
                e(x.prototype, 'size', {
                  get: function () {
                    return S(this).size;
                  },
                }),
              x
            );
          },
          setStrong: function (d, m, A) {
            var y = m + ' Iterator',
              x = h(m),
              S = h(y);
            s(
              d,
              m,
              function (D, T) {
                c(this, { type: y, target: D, state: x(D), kind: T, last: void 0 });
              },
              function () {
                for (var D = S(this), T = D.kind, C = D.last; C && C.removed; ) C = C.previous;
                return !D.target || !(D.last = C = C ? C.next : D.state.first)
                  ? ((D.target = void 0), { value: void 0, done: !0 })
                  : T == 'keys'
                  ? { value: C.key, done: !1 }
                  : T == 'values'
                  ? { value: C.value, done: !1 }
                  : { value: [C.key, C.value], done: !1 };
              },
              A ? 'entries' : 'values',
              !A,
              !0,
            ),
              p(m);
          },
        };
      },
      function (o, n, t) {
        var e = t(12);
        e('iterator');
      },
      function (o, n, t) {
        var e = t(107),
          r = t(80),
          a = r.concat('length', 'prototype');
        n.f =
          Object.getOwnPropertyNames ||
          function (f) {
            return e(f, a);
          };
      },
      function (o, n) {
        n.f = Object.getOwnPropertySymbols;
      },
      function (o, n, t) {
        o.exports = t(268);
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 }), (n.default = { zIndex: 1e4 });
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 }),
          (n.default = {
            focus: !0,
            height: 300,
            placeholder: '请输入正文',
            zIndexFullScreen: 10002,
            showFullScreen: !0,
          });
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(4));
        (0, r.default)(n, '__esModule', { value: !0 }),
          (n.getPasteImgs = n.getPasteHtml = n.getPasteText = void 0);
        var i = t(2),
          f = t(6),
          g = i.__importDefault(t(292));
        function s(l) {
          var v = l.clipboardData,
            c = '';
          return (
            v == null
              ? (c = window.clipboardData && window.clipboardData.getData('text'))
              : (c = v.getData('text/plain')),
            f.replaceHtmlSymbol(c)
          );
        }
        n.getPasteText = s;
        function p(l, v, c) {
          v === void 0 && (v = !0), c === void 0 && (c = !1);
          var h = l.clipboardData,
            d = '';
          if ((h && (d = h.getData('text/html')), !d)) {
            var m = s(l);
            if (!m) return '';
            d = '<p>' + m + '</p>';
          }
          return (
            (d = d.replace(/<(\d)/gm, function (A, y) {
              return '&lt;' + y;
            })),
            (d = d.replace(/<(\/?meta.*?)>/gim, '')),
            (d = g.default(d, v, c)),
            d
          );
        }
        n.getPasteHtml = p;
        function u(l) {
          var v,
            c = [],
            h = s(l);
          if (h) return c;
          var d = (v = l.clipboardData) === null || v === void 0 ? void 0 : v.items;
          return (
            d &&
              (0, a.default)(f).call(f, d, function (m, A) {
                var y = A.type;
                /image/i.test(y) && c.push(A.getAsFile());
              }),
            c
          );
        }
        n.getPasteImgs = u;
      },
      function (o, n, t) {
        o.exports = t(294);
      },
      function (o, n, t) {
        o.exports = t(310);
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(4)),
          i = e(t(46));
        (0, r.default)(n, '__esModule', { value: !0 });
        var f = t(2),
          g = f.__importDefault(t(3)),
          s = t(7),
          p = (function () {
            function u(l, v) {
              var c = this;
              (this.hideTimeoutId = 0), (this.menu = l), (this.conf = v);
              var h = g.default('<div class="w-e-droplist"></div>'),
                d = g.default('<p>' + v.title + '</p>');
              d.addClass('w-e-dp-title'), h.append(d);
              var m = v.list || [],
                A = v.type || 'list',
                y = v.clickHandler || s.EMPTY_FN,
                x = g.default(
                  '<ul class="' + (A === 'list' ? 'w-e-list' : 'w-e-block') + '"></ul>',
                );
              (0, a.default)(m).call(m, function (S) {
                var D = S.$elem,
                  T = S.value,
                  C = g.default('<li class="w-e-item"></li>');
                D &&
                  (C.append(D),
                  x.append(C),
                  C.on('click', function (E) {
                    y(T),
                      E.stopPropagation(),
                      (c.hideTimeoutId = (0, i.default)(function () {
                        c.hide();
                      }));
                  }));
              }),
                h.append(x),
                h.on('mouseleave', function () {
                  c.hideTimeoutId = (0, i.default)(function () {
                    c.hide();
                  });
                }),
                (this.$container = h),
                (this.rendered = !1),
                (this._show = !1);
            }
            return (
              (u.prototype.show = function () {
                this.hideTimeoutId && clearTimeout(this.hideTimeoutId);
                var l = this.menu,
                  v = l.$elem,
                  c = this.$container;
                if (!this._show) {
                  if (this.rendered) c.show();
                  else {
                    var h = v.getBoundingClientRect().height || 0,
                      d = this.conf.width || 100;
                    c.css('margin-top', h + 'px').css('width', d + 'px'),
                      v.append(c),
                      (this.rendered = !0);
                  }
                  this._show = !0;
                }
              }),
              (u.prototype.hide = function () {
                var l = this.$container;
                this._show && (l.hide(), (this._show = !1));
              }),
              (0, r.default)(u.prototype, 'isShow', {
                get: function () {
                  return this._show;
                },
                enumerable: !1,
                configurable: !0,
              }),
              u
            );
          })();
        n.default = p;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(92)),
          a = e(t(1)),
          i = e(t(4));
        (0, a.default)(n, '__esModule', { value: !0 });
        var f = t(6);
        function g(s, p) {
          var u = new XMLHttpRequest();
          if (
            (u.open('POST', s),
            (u.timeout = p.timeout || 10 * 1e3),
            (u.ontimeout = function () {
              console.error('wangEditor - 请求超时'), p.onTimeout && p.onTimeout(u);
            }),
            u.upload &&
              (u.upload.onprogress = function (v) {
                var c = v.loaded / v.total;
                p.onProgress && p.onProgress(c, v);
              }),
            p.headers &&
              (0, i.default)(f).call(f, p.headers, function (v, c) {
                u.setRequestHeader(v, c);
              }),
            (u.withCredentials = !!p.withCredentials),
            p.beforeSend)
          ) {
            var l = p.beforeSend(u);
            if (l && (0, r.default)(l) === 'object' && l.prevent) return l.msg;
          }
          return (
            (u.onreadystatechange = function () {
              if (u.readyState === 4) {
                var v = u.status;
                if (!(v < 200) && !(v >= 300 && v < 400)) {
                  if (v >= 400) {
                    console.error('wangEditor - XHR 报错，状态码 ' + v), p.onError && p.onError(u);
                    return;
                  }
                  var c = u.responseText,
                    h;
                  if ((0, r.default)(c) !== 'object')
                    try {
                      h = JSON.parse(c);
                    } catch (d) {
                      console.error('wangEditor - 返回结果不是 JSON 格式', c),
                        p.onFail && p.onFail(u, c);
                      return;
                    }
                  else h = c;
                  p.onSuccess(u, h);
                }
              }
            }),
            u.send(p.formData || null),
            u
          );
        }
        n.default = g;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(342)),
          i = e(t(46));
        (0, r.default)(n, '__esModule', { value: !0 });
        var f = t(2),
          g = f.__importDefault(t(3)),
          s = (function () {
            function p(u) {
              (this.editor = u),
                (this.$textContainer = u.$textContainerElem),
                (this.$bar = g.default('<div class="w-e-progress"></div>')),
                (this.isShow = !1),
                (this.time = 0),
                (this.timeoutId = 0);
            }
            return (
              (p.prototype.show = function (u) {
                var l = this;
                if (!this.isShow) {
                  this.isShow = !0;
                  var v = this.$bar,
                    c = this.$textContainer;
                  c.append(v),
                    (0, a.default)() - this.time > 100 &&
                      u <= 1 &&
                      (v.css('width', u * 100 + '%'), (this.time = (0, a.default)()));
                  var h = this.timeoutId;
                  h && clearTimeout(h),
                    (this.timeoutId = (0, i.default)(function () {
                      l.hide();
                    }, 500));
                }
              }),
              (p.prototype.hide = function () {
                var u = this.$bar;
                u.remove(), (this.isShow = !1), (this.time = 0), (this.timeoutId = 0);
              }),
              p
            );
          })();
        n.default = s;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 }), (n.ListType = void 0);
        var a = t(2),
          i = a.__importDefault(t(3)),
          f = a.__importDefault(t(24)),
          g = t(47),
          s = a.__importStar(t(371)),
          p;
        (function (l) {
          (l.OrderedList = 'OL'), (l.UnorderedList = 'UL');
        })((p = n.ListType || (n.ListType = {})));
        var u = (function (l) {
          a.__extends(v, l);
          function v(c) {
            var h = this,
              d = i.default(`<div class="w-e-menu" data-title="序列">
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
                        c.i18next.t('menus.dropListMenu.list.无序列表') +
                        `
                        <p>`,
                    ),
                    value: p.UnorderedList,
                  },
                  {
                    $elem: i.default(
                      `<p>
                            <i class="w-e-icon-list-numbered w-e-drop-list-item"></i>
                            ` +
                        c.i18next.t('menus.dropListMenu.list.有序列表') +
                        `
                        <p>`,
                    ),
                    value: p.OrderedList,
                  },
                ],
                clickHandler: function (y) {
                  h.command(y);
                },
              };
            return (h = l.call(this, d, c, m) || this), h;
          }
          return (
            (v.prototype.command = function (c) {
              var h = this.editor,
                d = h.selection.getSelectionContainerElem();
              d !== void 0 && (this.handleSelectionRangeNodes(c), this.tryChangeActive());
            }),
            (v.prototype.validator = function (c, h, d) {
              return !(!c.length || !h.length || d.equal(c) || d.equal(h));
            }),
            (v.prototype.handleSelectionRangeNodes = function (c) {
              var h = this.editor,
                d = h.selection,
                m = c.toLowerCase(),
                A = d.getSelectionContainerElem(),
                y = d.getSelectionStartElem().getNodeTop(h),
                x = d.getSelectionEndElem().getNodeTop(h);
              if (this.validator(y, x, h.$textElem)) {
                var S = d.getRange(),
                  D = S == null ? void 0 : S.collapsed;
                h.$textElem.equal(A) || (A = A.getNodeTop(h));
                var T = {
                    editor: h,
                    listType: c,
                    listTarget: m,
                    $selectionElem: A,
                    $startElem: y,
                    $endElem: x,
                  },
                  C;
                this.isOrderElem(A)
                  ? (C = s.ClassType.Wrap)
                  : this.isOrderElem(y) && this.isOrderElem(x)
                  ? (C = s.ClassType.Join)
                  : this.isOrderElem(y)
                  ? (C = s.ClassType.StartJoin)
                  : this.isOrderElem(x)
                  ? (C = s.ClassType.EndJoin)
                  : (C = s.ClassType.Other);
                var E = new s.default(s.createListHandle(C, T, S));
                g.updateRange(h, E.getSelectionRangeElem(), !!D);
              }
            }),
            (v.prototype.isOrderElem = function (c) {
              var h = c.getNodeName();
              return h === p.OrderedList || h === p.UnorderedList;
            }),
            (v.prototype.tryChangeActive = function () {}),
            v
          );
        })(f.default);
        n.default = u;
      },
      function (o, n, t) {
        o.exports = t(395);
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 });
        function a(i) {
          var f = i.selection.getSelectionContainerElem();
          return f != null && f.length
            ? !!(
                f.getNodeName() == 'CODE' ||
                f.getNodeName() == 'PRE' ||
                f.parent().getNodeName() == 'CODE' ||
                f.parent().getNodeName() == 'PRE' ||
                /hljs/.test(f.parent().attr('class'))
              )
            : !1;
        }
        n.default = a;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(29));
        (0, r.default)(n, '__esModule', { value: !0 }), (n.todo = void 0);
        var i = t(2),
          f = i.__importDefault(t(3)),
          g = (function () {
            function p(u) {
              var l;
              (this.template =
                '<ul class="w-e-todo"><li><span contenteditable="false"><input type="checkbox"></span></li></ul>'),
                (this.checked = !1),
                (this.$todo = f.default(this.template)),
                (this.$child =
                  (l = u == null ? void 0 : u.childNodes()) === null || l === void 0
                    ? void 0
                    : l.clone(!0));
            }
            return (
              (p.prototype.init = function () {
                var u = this.$child,
                  l = this.getInputContainer();
                u && u.insertAfter(l);
              }),
              (p.prototype.getInput = function () {
                var u = this.$todo,
                  l = (0, a.default)(u).call(u, 'input');
                return l;
              }),
              (p.prototype.getInputContainer = function () {
                var u = this.getInput().parent();
                return u;
              }),
              (p.prototype.getTodo = function () {
                return this.$todo;
              }),
              p
            );
          })();
        n.todo = g;
        function s(p) {
          var u = new g(p);
          return u.init(), u;
        }
        n.default = s;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 });
        var a = t(2);
        t(146), t(148), t(152), t(154), t(156), t(158), t(160);
        var i = a.__importDefault(t(87));
        a.__exportStar(t(442), n);
        try {
        } catch (f) {
          throw new Error('请在浏览器环境下运行');
        }
        n.default = i.default;
      },
      function (o, n, t) {
        var e = t(143);
        o.exports = e;
      },
      function (o, n, t) {
        t(144);
        var e = t(9),
          r = e.Object,
          a = (o.exports = function (f, g, s) {
            return r.defineProperty(f, g, s);
          });
        r.defineProperty.sham && (a.sham = !0);
      },
      function (o, n, t) {
        var e = t(5),
          r = t(14),
          a = t(18);
        e({ target: 'Object', stat: !0, forced: !r, sham: !r }, { defineProperty: a.f });
      },
      function (o, n) {
        var t;
        t = (function () {
          return this;
        })();
        try {
          t = t || new Function('return this')();
        } catch (e) {
          typeof window == 'object' && (t = window);
        }
        o.exports = t;
      },
      function (o, n, t) {
        var e = t(20),
          r = t(147);
        (r = r.__esModule ? r.default : r), typeof r == 'string' && (r = [[o.i, r, '']]);
        var a = {};
        (a.insert = 'head'), (a.singleton = !1), e(r, a), (o.exports = r.locals || {});
      },
      function (o, n, t) {
        var e = t(21);
        (n = e(!1)),
          n.push([
            o.i,
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
          (o.exports = n);
      },
      function (o, n, t) {
        var e = t(20),
          r = t(149);
        (r = r.__esModule ? r.default : r), typeof r == 'string' && (r = [[o.i, r, '']]);
        var a = {};
        (a.insert = 'head'), (a.singleton = !1), e(r, a), (o.exports = r.locals || {});
      },
      function (o, n, t) {
        var e = t(21),
          r = t(150),
          a = t(151);
        n = e(!1);
        var i = r(a);
        n.push([
          o.i,
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
          (o.exports = n);
      },
      function (o, n, t) {
        o.exports = function (e, r) {
          return (
            r || (r = {}),
            (e = e && e.__esModule ? e.default : e),
            typeof e != 'string'
              ? e
              : (/^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
                r.hash && (e += r.hash),
                /["'() \t\n]/.test(e) || r.needQuotes
                  ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, '\\n'), '"')
                  : e)
          );
        };
      },
      function (o, n, t) {
        t.r(n),
          (n.default =
            'data:font/woff;base64,d09GRgABAAAAABskAAsAAAAAGtgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIPFWNtYXAAAAFoAAABHAAAARz2mfAgZ2FzcAAAAoQAAAAIAAAACAAAABBnbHlmAAACjAAAFXwAABV8IH7+mGhlYWQAABgIAAAANgAAADYb6gumaGhlYQAAGEAAAAAkAAAAJAkjBWlobXR4AAAYZAAAAKQAAACkmYcEbmxvY2EAABkIAAAAVAAAAFReAmKYbWF4cAAAGVwAAAAgAAAAIAA0ALZuYW1lAAAZfAAAAYYAAAGGmUoJ+3Bvc3QAABsEAAAAIAAAACAAAwAAAAMD7wGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA8fwDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEAQAAAAA8ACAABAAcAAEAIOkB6QbpDekS6UfpZul36bnpu+m+6cbpy+nf6gvqDepS6lzqX+pl6nHqfPAN8BTxIPHc8fz//f//AAAAAAAg6QDpBukM6RLpR+ll6Xfpuem76b7pxunL6d/qC+oN6lLqXOpf6mLqcep38A3wFPEg8dzx/P/9//8AAf/jFwQXABb7FvcWwxamFpYWVRZUFlIWSxZHFjQWCRYIFcQVuxW5FbcVrBWnEBcQEQ8GDksOLAADAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAAEAEEAAQO/A38ABQALABEAFwAAATMVIREzAxEhFSMVATUzESE1ETUhESM1Av/A/sJ+fgE+wP4Cfv7CAT5+Ar9+AT78ggE+fsACvsD+wn7+An7+wsAAAAAABABBAAEDvwN/AAUACwARABcAAAEhESM1IxM1MxEhNQERIRUjFREVMxUhEQKBAT5+wMB+/sL9wAE+wMD+wgN//sLA/X7A/sJ+AcIBPn7A/v7AfgE+AAAAAAIAAP/ABAADwAAEABMAAAE3AScBAy4BJxM3ASMBAyUBNQEHAYCAAcBA/kCfFzsyY4ABgMD+gMACgAGA/oBOAUBAAcBA/kD+nTI7FwERTgGA/oD9gMABgMD+gIAAAgAA/8AEAAOAACkALQAAAREjNTQmIyEiBh0BFBYzITI2PQEzESEVIyIGFREUFjsBMjY1ETQmKwE1ASE1IQQAwCYa/UAaJiYaAsAaJoD9wCANExMNgA0TEw0gAUD9QALAAYABgEAaJiYawBomJhpA/wCAEw3+wA0TEw0BQA0TQAGAQAAABAAAAAAEAAOAABAAIQAtADQAAAE4ATEROAExITgBMRE4ATEhNSEiBhURFBYzITI2NRE0JiMHFAYjIiY1NDYzMhYTITUTATM3A8D8gAOA/IAaJiYaA4AaJiYagDgoKDg4KCg4QP0A4AEAQOADQP0AAwBAJhr9ABomJhoDABom4Cg4OCgoODj9uIABgP7AwAAAAgAAAEAEAANAADgAPAAAASYnLgEnJiMiBw4BBwYHBgcOAQcGFRQXHgEXFhcWFx4BFxYzMjc+ATc2NzY3PgE3NjU0Jy4BJyYnARENAQPVNjg5djw9Pz89PHY5ODYLBwgLAwMDAwsIBws2ODl2PD0/Pz08djk4NgsHCAsDAwMDCwgHC/2rAUD+wAMgCAYGCAICAgIIBgYIKSoqWS0uLy8uLVkqKikIBgYIAgICAggGBggpKipZLS4vLy4tWSoqKf3gAYDAwAAAAAACAMD/wANAA8AAGwAnAAABIgcOAQcGFRQXHgEXFjEwNz4BNzY1NCcuAScmAyImNTQ2MzIWFRQGAgBCOzpXGRkyMngyMjIyeDIyGRlXOjtCUHBwUFBwcAPAGRlXOjtCeH19zEFBQUHMfX14Qjs6VxkZ/gBwUFBwcFBQcAAAAQAAAAAEAAOAACsAAAEiBw4BBwYHJxEhJz4BMzIXHgEXFhUUBw4BBwYHFzY3PgE3NjU0Jy4BJyYjAgA1MjJcKSkjlgGAkDWLUFBFRmkeHgkJIhgYHlUoICAtDAwoKIteXWoDgAoLJxscI5b+gJA0PB4eaUZFUCsoKUkgIRpgIysrYjY2OWpdXosoKAABAAAAAAQAA4AAKgAAExQXHgEXFhc3JicuAScmNTQ3PgE3NjMyFhcHIREHJicuAScmIyIHDgEHBgAMDC0gIChVHhgYIgkJHh5pRkVQUIs1kAGAliMpKVwyMjVqXV6LKCgBgDk2NmIrKyNgGiEgSSkoK1BFRmkeHjw0kAGAliMcGycLCigoi15dAAAAAAIAAABABAEDAAAmAE0AABMyFx4BFxYVFAcOAQcGIyInLgEnJjUnNDc+ATc2MxUiBgcOAQc+ASEyFx4BFxYVFAcOAQcGIyInLgEnJjUnNDc+ATc2MxUiBgcOAQc+AeEuKSk9ERISET0pKS4uKSk9ERIBIyN6UlFdQHUtCRAHCBICSS4pKT0REhIRPSkpLi4pKT0REgEjI3pSUV1AdS0JEAcIEgIAEhE9KSkuLikpPRESEhE9KSkuIF1RUnojI4AwLggTCgIBEhE9KSkuLikpPRESEhE9KSkuIF1RUnojI4AwLggTCgIBAAAGAED/wAQAA8AAAwAHAAsAEQAdACkAACUhFSERIRUhESEVIScRIzUjNRMVMxUjNTc1IzUzFRURIzUzNSM1MzUjNQGAAoD9gAKA/YACgP2AwEBAQIDAgIDAwICAgICAgAIAgAIAgMD/AMBA/fIyQJI8MkCS7v7AQEBAQEAABgAA/8AEAAPAAAMABwALABcAIwAvAAABIRUhESEVIREhFSEBNDYzMhYVFAYjIiYRNDYzMhYVFAYjIiYRNDYzMhYVFAYjIiYBgAKA/YACgP2AAoD9gP6ASzU1S0s1NUtLNTVLSzU1S0s1NUtLNTVLA4CA/wCA/wCAA0A1S0s1NUtL/rU1S0s1NUtL/rU1S0s1NUtLAAUAAABABWADAAADAAcACwAOABEAABMhFSEVIRUhFSEVIQEXNzUnBwADgPyAA4D8gAOA/IAD4MDAwMADAMBAwEDAAUDAwEDAwAAAAAADAAAAAAQAA6AAAwANABQAADchFSElFSE1EyEVITUhJQkBIxEjEQAEAPwABAD8AIABAAEAAQD9YAEgASDggEBAwEBAAQCAgMABIP7g/wABAAAAAAACAB7/zAPiA7QAMwBkAAABIiYnJicmNDc2PwE+ATMyFhcWFxYUBwYPAQYiJyY0PwE2NCcuASMiBg8BBhQXFhQHDgEjAyImJyYnJjQ3Nj8BNjIXFhQPAQYUFx4BMzI2PwE2NCcmNDc2MhcWFxYUBwYPAQ4BIwG4ChMIIxISEhIjwCNZMTFZIyMSEhISI1gPLA8PD1gpKRQzHBwzFMApKQ8PCBMKuDFZIyMSEhISI1gPLA8PD1gpKRQzHBwzFMApKQ8PDysQIxISEhIjwCNZMQFECAckLS1eLS0kwCIlJSIkLS1eLS0kVxAQDysPWCl0KRQVFRTAKXQpDysQBwj+iCUiJC0tXi0tJFcQEA8rD1gpdCkUFRUUwCl0KQ8rEA8PJC0tXi0tJMAiJQAAAAAFAAD/wAQAA8AAGwA3AFMAXwBrAAAFMjc+ATc2NTQnLgEnJiMiBw4BBwYVFBceARcWEzIXHgEXFhUUBw4BBwYjIicuAScmNTQ3PgE3NhMyNz4BNzY3BgcOAQcGIyInLgEnJicWFx4BFxYnNDYzMhYVFAYjIiYlNDYzMhYVFAYjIiYCAGpdXosoKCgoi15dampdXosoKCgoi15dalZMTHEgISEgcUxMVlZMTHEgISEgcUxMVisrKlEmJiMFHBtWODc/Pzc4VhscBSMmJlEqK9UlGxslJRsbJQGAJRsbJSUbGyVAKCiLXl1qal1eiygoKCiLXl1qal1eiygoA6AhIHFMTFZWTExxICEhIHFMTFZWTExxICH+CQYGFRAQFEM6OlYYGRkYVjo6QxQQEBUGBvcoODgoKDg4KCg4OCgoODgAAAEAAAFABAACQAAPAAATFRQWMyEyNj0BNCYjISIGABMNA8ANExMN/EANEwIgwA0TEw3ADRMTAAAAAwAA/8AEAAPAABsANwBDAAABIgcOAQcGFRQXHgEXFjMyNz4BNzY1NCcuAScmAyInLgEnJjU0Nz4BNzYzMhceARcWFRQHDgEHBhMHJwcXBxc3FzcnNwIAal1eiygoKCiLXl1qal1eiygoKCiLXl1qVkxMcSAhISBxTExWVkxMcSAhISBxTExKoKBgoKBgoKBgoKADwCgoi15dampdXosoKCgoi15dampdXosoKPxgISBxTExWVkxMcSAhISBxTExWVkxMcSAhAqCgoGCgoGCgoGCgoAACAAD/wAQAA8AADwAVAAABISIGFREUFjMhMjY1ETQmASc3FwEXA4D9ADVLSzUDADVLS/4L7VqTATNaA8BLNf0ANUtLNQMANUv85e5akgEyWgAAAAABAGX/wAObA8AAKQAAASImIyIHDgEHBhUUFjMuATU0NjcwBwYCBwYHFSETMzcjNx4BMzI2Nw4BAyBEaEZxU1RtGhtJSAYNZUoQEEs8PFkBPWzGLNc0LVUmLlAYHT0DsBAeHWE+P0FNOwsmN5lvA31+/sWPkCMZAgCA9gkPN2sJBwAAAAACAAAAAAQAA4AACQAXAAAlMwcnMxEjNxcjJREnIxEzFSE1MxEjBxEDgICgoICAoKCA/wBAwID+gIDAQMDAwAIAwMDA/wCA/UBAQALAgAEAAAMAwAAAA0ADgAAWAB8AKAAAAT4BNTQnLgEnJiMhESEyNz4BNzY1NCYBMzIWFRQGKwETIxEzMhYVFAYCxBwgFBRGLi81/sABgDUvLkYUFET+hGUqPDwpZp+fnyw+PgHbIlQvNS8uRhQU/IAUFEYuLzVGdAFGSzU1S/6AAQBLNTVLAAAAAAIAwAAAA0ADgAAfACMAAAEzERQHDgEHBiMiJy4BJyY1ETMRFBYXHgEzMjY3PgE1ASEVIQLAgBkZVzo7QkI7OlcZGYAbGBxJKChJHBgb/gACgP2AA4D+YDw0NU4WFxcWTjU0PAGg/mAeOBcYGxsYFzge/qCAAAAAAAEAgAAAA4ADgAALAAABFSMBMxUhNTMBIzUDgID+wID+QIABQIADgED9AEBAAwBAAAEAAAAABAADgAA9AAABFSMeARUUBgcOASMiJicuATUzFBYzMjY1NCYjITUhLgEnLgE1NDY3PgEzMhYXHgEVIzQmIyIGFRQWMzIWFwQA6xUWNTAscT4+cSwwNYByTk5yck7+AAEsAgQBMDU1MCxxPj5xLDA1gHJOTnJyTjtuKwHAQB1BIjViJCEkJCEkYjU0TEw0NExAAQMBJGI1NWIkISQkISRiNTRMTDQ0TCEfAAAACgAAAAAEAAOAAAMABwALAA8AEwAXABsAHwAjACcAABMRIREBNSEVHQEhNQEVITUjFSE1ESEVISUhFSERNSEVASEVISE1IRUABAD9gAEA/wABAP8AQP8AAQD/AAKAAQD/AAEA/IABAP8AAoABAAOA/IADgP3AwMBAwMACAMDAwMD/AMDAwAEAwMD+wMDAwAAABQAAAAAEAAOAAAMABwALAA8AEwAAEyEVIRUhFSERIRUhESEVIREhFSEABAD8AAKA/YACgP2ABAD8AAQA/AADgIBAgP8AgAFAgP8AgAAAAAAFAAAAAAQAA4AAAwAHAAsADwATAAATIRUhFyEVIREhFSEDIRUhESEVIQAEAPwAwAKA/YACgP2AwAQA/AAEAPwAA4CAQID/AIABQID/AIAAAAUAAAAABAADgAADAAcACwAPABMAABMhFSEFIRUhESEVIQEhFSERIRUhAAQA/AABgAKA/YACgP2A/oAEAPwABAD8AAOAgECA/wCAAUCA/wCAAAAAAAUAAAAABAADgAADAAcACwAPABMAABMhFSEVIRUhFSEVIRUhFSEVIRUhAAQA/AAEAPwABAD8AAQA/AAEAPwAA4CAQIBAgECAQIAAAAAGAAAAAAQAA4AAAwAHAAsADwATABYAABMhFSEFIRUhFSEVIRUhFSEFIRUhGQEFAAQA/AABgAKA/YACgP2AAoD9gP6ABAD8AAEAA4CAQIBAgECAQIABAAGAwAAAAAYAAAAABAADgAADAAcACwAPABMAFgAAEyEVIQUhFSEVIRUhFSEVIQUhFSEBESUABAD8AAGAAoD9gAKA/YACgP2A/oAEAPwAAQD/AAOAgECAQIBAgECAAoD+gMAAAQA/AD8C5gLmACwAACUUDwEGIyIvAQcGIyIvASY1ND8BJyY1ND8BNjMyHwE3NjMyHwEWFRQPARcWFQLmEE4QFxcQqKgQFxYQThAQqKgQEE4QFhcQqKgQFxcQThAQqKgQwxYQThAQqKgQEE4QFhcQqKgQFxcQThAQqKgQEE4QFxcQqKgQFwAAAAYAAAAAAyUDbgAUACgAPABNAFUAggAAAREUBwYrASInJjURNDc2OwEyFxYVMxEUBwYrASInJjURNDc2OwEyFxYXERQHBisBIicmNRE0NzY7ATIXFhMRIREUFxYXFjMhMjc2NzY1ASEnJicjBgcFFRQHBisBERQHBiMhIicmNREjIicmPQE0NzY7ATc2NzY7ATIXFh8BMzIXFhUBJQYFCCQIBQYGBQgkCAUGkgUFCCUIBQUFBQglCAUFkgUFCCUIBQUFBQglCAUFSf4ABAQFBAIB2wIEBAQE/oABABsEBrUGBAH3BgUINxobJv4lJhsbNwgFBQUFCLEoCBcWF7cXFhYJKLAIBQYCEv63CAUFBQUIAUkIBQYGBQj+twgFBQUFCAFJCAUGBgUI/rcIBQUFBQgBSQgFBgYF/lsCHf3jDQsKBQUFBQoLDQJmQwUCAgVVJAgGBf3jMCIjISIvAiAFBggkCAUFYBUPDw8PFWAFBQgAAgAHAEkDtwKvABoALgAACQEGIyIvASY1ND8BJyY1ND8BNjMyFwEWFRQHARUUBwYjISInJj0BNDc2MyEyFxYBTv72BgcIBR0GBuHhBgYdBQgHBgEKBgYCaQUFCP3bCAUFBQUIAiUIBQUBhf72BgYcBggHBuDhBgcHBh0FBf71BQgHBv77JQgFBQUFCCUIBQUFBQAAAAEAIwAAA90DbgCzAAAlIicmIyIHBiMiJyY1NDc2NzY3Njc2PQE0JyYjISIHBh0BFBcWFxYzFhcWFRQHBiMiJyYjIgcGIyInJjU0NzY3Njc2NzY9ARE0NTQ1NCc0JyYnJicmJyYnJiMiJyY1NDc2MzIXFjMyNzYzMhcWFRQHBiMGBwYHBh0BFBcWMyEyNzY9ATQnJicmJyY1NDc2MzIXFjMyNzYzMhcWFRQHBgciBwYHBhURFBcWFxYXMhcWFRQHBiMDwRkzMhoZMjMZDQgHCQoNDBEQChIBBxX+fhYHARUJEhMODgwLBwcOGzU1GhgxMRgNBwcJCQsMEA8JEgECAQIDBAQFCBIRDQ0KCwcHDho1NRoYMDEYDgcHCQoMDRAQCBQBBw8BkA4HARQKFxcPDgcHDhkzMhkZMTEZDgcHCgoNDRARCBQUCRERDg0KCwcHDgACAgICDAsPEQkJAQEDAwUMROAMBQMDBQzUUQ0GAQIBCAgSDwwNAgICAgwMDhEICQECAwMFDUUhAdACDQ0ICA4OCgoLCwcHAwYBAQgIEg8MDQICAgINDA8RCAgBAgEGDFC2DAcBAQcMtlAMBgEBBgcWDwwNAgICAg0MDxEICAEBAgYNT/3mRAwGAgIBCQgRDwwNAAACAAD/twP/A7cAEwA5AAABMhcWFRQHAgcGIyInJjU0NwE2MwEWFxYfARYHBiMiJyYnJicmNRYXFhcWFxYzMjc2NzY3Njc2NzY3A5soHh4avkw3RUg0NDUBbSEp/fgXJicvAQJMTHtHNjYhIRARBBMUEBASEQkXCA8SExUVHR0eHikDtxsaKCQz/plGNDU0SUkwAUsf/bErHx8NKHpNTBobLi86OkQDDw4LCwoKFiUbGhERCgsEBAIAAQAAAAAAAIWwaoFfDzz1AAsEAAAAAADbteOZAAAAANu145kAAP+3BWADwAAAAAgAAgAAAAAAAAABAAADwP/AAAAFgAAA//8FYAABAAAAAAAAAAAAAAAAAAAAKQQAAAAAAAAAAAAAAAIAAAAEAABBBAAAQQQAAAAEAAAABAAAAAQAAAAEAADABAAAAAQAAAAEAAAABAAAQAQAAAAFgAAABAAAAAQAAB4EAAAABAAAAAQAAAAEAAAABAAAZQQAAAAEAADABAAAwAQAAIAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAMlAD8DJQAAA74ABwQAACMD/wAAAAAAAAAKABQAHgBKAHYApADmAS4BkgHQAhYCXALQAw4DWAN+A6gEPgTeBPoFZAWOBdAF+AY6BnYGjgbmBy4HVgd+B6gHzgf8CCoIbgkmCXAKYgq+AAEAAAApALQACgAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAHAAAAAQAAAAAAAgAHAGAAAQAAAAAAAwAHADYAAQAAAAAABAAHAHUAAQAAAAAABQALABUAAQAAAAAABgAHAEsAAQAAAAAACgAaAIoAAwABBAkAAQAOAAcAAwABBAkAAgAOAGcAAwABBAkAAwAOAD0AAwABBAkABAAOAHwAAwABBAkABQAWACAAAwABBAkABgAOAFIAAwABBAkACgA0AKRpY29tb29uAGkAYwBvAG0AbwBvAG5WZXJzaW9uIDEuMABWAGUAcgBzAGkAbwBuACAAMQAuADBpY29tb29uAGkAYwBvAG0AbwBvAG5pY29tb29uAGkAYwBvAG0AbwBvAG5SZWd1bGFyAFIAZQBnAHUAbABhAHJpY29tb29uAGkAYwBvAG0AbwBvAG5Gb250IGdlbmVyYXRlZCBieSBJY29Nb29uLgBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC4AAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
      },
      function (o, n, t) {
        var e = t(20),
          r = t(153);
        (r = r.__esModule ? r.default : r), typeof r == 'string' && (r = [[o.i, r, '']]);
        var a = {};
        (a.insert = 'head'), (a.singleton = !1), e(r, a), (o.exports = r.locals || {});
      },
      function (o, n, t) {
        var e = t(21);
        (n = e(!1)),
          n.push([
            o.i,
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
          (o.exports = n);
      },
      function (o, n, t) {
        var e = t(20),
          r = t(155);
        (r = r.__esModule ? r.default : r), typeof r == 'string' && (r = [[o.i, r, '']]);
        var a = {};
        (a.insert = 'head'), (a.singleton = !1), e(r, a), (o.exports = r.locals || {});
      },
      function (o, n, t) {
        var e = t(21);
        (n = e(!1)),
          n.push([
            o.i,
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
          (o.exports = n);
      },
      function (o, n, t) {
        var e = t(20),
          r = t(157);
        (r = r.__esModule ? r.default : r), typeof r == 'string' && (r = [[o.i, r, '']]);
        var a = {};
        (a.insert = 'head'), (a.singleton = !1), e(r, a), (o.exports = r.locals || {});
      },
      function (o, n, t) {
        var e = t(21);
        (n = e(!1)),
          n.push([
            o.i,
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
          (o.exports = n);
      },
      function (o, n, t) {
        var e = t(20),
          r = t(159);
        (r = r.__esModule ? r.default : r), typeof r == 'string' && (r = [[o.i, r, '']]);
        var a = {};
        (a.insert = 'head'), (a.singleton = !1), e(r, a), (o.exports = r.locals || {});
      },
      function (o, n, t) {
        var e = t(21);
        (n = e(!1)),
          n.push([
            o.i,
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
          (o.exports = n);
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(161));
        Element.prototype.matches ||
          (Element.prototype.matches = function (a) {
            var i = this.ownerDocument.querySelectorAll(a),
              f = i.length;
            for (f; f >= 0 && i.item(f) !== this; f--);
            return f > -1;
          }),
          r.default || (window.Promise = r.default);
      },
      function (o, n, t) {
        o.exports = t(162);
      },
      function (o, n, t) {
        var e = t(163);
        o.exports = e;
      },
      function (o, n, t) {
        t(61), t(50), t(54), t(175), t(178), t(179);
        var e = t(9);
        o.exports = e.Promise;
      },
      function (o, n, t) {
        var e = t(62),
          r = t(49),
          a = function (i) {
            return function (f, g) {
              var s = String(r(f)),
                p = e(g),
                u = s.length,
                l,
                v;
              return p < 0 || p >= u
                ? i
                  ? ''
                  : void 0
                : ((l = s.charCodeAt(p)),
                  l < 55296 ||
                  l > 56319 ||
                  p + 1 === u ||
                  (v = s.charCodeAt(p + 1)) < 56320 ||
                  v > 57343
                    ? i
                      ? s.charAt(p)
                      : l
                    : i
                    ? s.slice(p, p + 2)
                    : ((l - 55296) << 10) + (v - 56320) + 65536);
            };
          };
        o.exports = { codeAt: a(!1), charAt: a(!0) };
      },
      function (o, n, t) {
        var e = t(8),
          r = t(102),
          a = e.WeakMap;
        o.exports = typeof a == 'function' && /native code/.test(r(a));
      },
      function (o, n, t) {
        var e = t(8),
          r = t(19);
        o.exports = function (a, i) {
          try {
            r(e, a, i);
          } catch (f) {
            e[a] = i;
          }
          return i;
        };
      },
      function (o, n, t) {
        var e = t(104).IteratorPrototype,
          r = t(77),
          a = t(48),
          i = t(37),
          f = t(44),
          g = function () {
            return this;
          };
        o.exports = function (s, p, u) {
          var l = p + ' Iterator';
          return (s.prototype = r(e, { next: a(1, u) })), i(s, l, !1, !0), (f[l] = g), s;
        };
      },
      function (o, n, t) {
        var e = t(11);
        o.exports = !e(function () {
          function r() {}
          return (r.prototype.constructor = null), Object.getPrototypeOf(new r()) !== r.prototype;
        });
      },
      function (o, n, t) {
        var e = t(14),
          r = t(18),
          a = t(25),
          i = t(52);
        o.exports = e
          ? Object.defineProperties
          : function (g, s) {
              a(g);
              for (var p = i(s), u = p.length, l = 0, v; u > l; ) r.f(g, (v = p[l++]), s[v]);
              return g;
            };
      },
      function (o, n, t) {
        var e = t(81),
          r = t(65);
        o.exports = e
          ? {}.toString
          : function () {
              return '[object ' + r(this) + ']';
            };
      },
      function (o, n, t) {
        var e = t(25),
          r = t(172);
        o.exports =
          Object.setPrototypeOf ||
          ('__proto__' in {}
            ? (function () {
                var a = !1,
                  i = {},
                  f;
                try {
                  (f = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set),
                    f.call(i, []),
                    (a = i instanceof Array);
                } catch (g) {}
                return function (s, p) {
                  return e(s), r(p), a ? f.call(s, p) : (s.__proto__ = p), s;
                };
              })()
            : void 0);
      },
      function (o, n, t) {
        var e = t(13);
        o.exports = function (r) {
          if (!e(r) && r !== null) throw TypeError("Can't set " + String(r) + ' as a prototype');
          return r;
        };
      },
      function (o, n, t) {
        var e = t(30),
          r = t(82),
          a = t(44),
          i = t(42),
          f = t(75),
          g = 'Array Iterator',
          s = i.set,
          p = i.getterFor(g);
        (o.exports = f(
          Array,
          'Array',
          function (u, l) {
            s(this, { type: g, target: e(u), index: 0, kind: l });
          },
          function () {
            var u = p(this),
              l = u.target,
              v = u.kind,
              c = u.index++;
            return !l || c >= l.length
              ? ((u.target = void 0), { value: void 0, done: !0 })
              : v == 'keys'
              ? { value: c, done: !1 }
              : v == 'values'
              ? { value: l[c], done: !1 }
              : { value: [c, l[c]], done: !1 };
          },
          'values',
        )),
          (a.Arguments = a.Array),
          r('keys'),
          r('values'),
          r('entries');
      },
      function (o, n) {
        o.exports = {
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
      function (o, n, t) {
        var e = t(5),
          r = t(43),
          a = t(8),
          i = t(36),
          f = t(109),
          g = t(53),
          s = t(110),
          p = t(37),
          u = t(111),
          l = t(13),
          v = t(41),
          c = t(83),
          h = t(34),
          d = t(102),
          m = t(66),
          A = t(115),
          y = t(116),
          x = t(117).set,
          S = t(176),
          D = t(119),
          T = t(177),
          C = t(85),
          E = t(120),
          P = t(42),
          I = t(101),
          M = t(10),
          N = t(86),
          L = M('species'),
          B = 'Promise',
          F = P.get,
          w = P.set,
          b = P.getterFor(B),
          H = f,
          j = a.TypeError,
          K = a.document,
          U = a.process,
          W = i('fetch'),
          z = C.f,
          $ = z,
          Q = h(U) == 'process',
          J = !!(K && K.createEvent && a.dispatchEvent),
          k = 'unhandledrejection',
          tt = 'rejectionhandled',
          rt = 0,
          lt = 1,
          It = 2,
          ut = 1,
          Ut = 2,
          Ot,
          ft,
          Et,
          Lt,
          xt = I(B, function () {
            var X = d(H) !== String(H);
            if (
              (!X && (N === 66 || (!Q && typeof PromiseRejectionEvent != 'function'))) ||
              (r && !H.prototype.finally)
            )
              return !0;
            if (N >= 51 && /native code/.test(H)) return !1;
            var Y = H.resolve(1),
              q = function (G) {
                G(
                  function () {},
                  function () {},
                );
              },
              et = (Y.constructor = {});
            return (et[L] = q), !(Y.then(function () {}) instanceof q);
          }),
          kt =
            xt ||
            !A(function (X) {
              H.all(X).catch(function () {});
            }),
          Bt = function (X) {
            var Y;
            return l(X) && typeof (Y = X.then) == 'function' ? Y : !1;
          },
          Nt = function (X, Y, q) {
            if (!Y.notified) {
              Y.notified = !0;
              var et = Y.reactions;
              S(function () {
                for (var G = Y.value, V = Y.state == lt, Z = 0; et.length > Z; ) {
                  var _ = et[Z++],
                    nt = V ? _.ok : _.fail,
                    ot = _.resolve,
                    ct = _.reject,
                    pt = _.domain,
                    st,
                    Qt,
                    Vt;
                  try {
                    nt
                      ? (V || (Y.rejection === Ut && Ht(X, Y), (Y.rejection = ut)),
                        nt === !0
                          ? (st = G)
                          : (pt && pt.enter(), (st = nt(G)), pt && (pt.exit(), (Vt = !0))),
                        st === _.promise
                          ? ct(j('Promise-chain cycle'))
                          : (Qt = Bt(st))
                          ? Qt.call(st, ot, ct)
                          : ot(st))
                      : ct(G);
                  } catch (Ie) {
                    pt && !Vt && pt.exit(), ct(Ie);
                  }
                }
                (Y.reactions = []), (Y.notified = !1), q && !Y.rejection && $t(X, Y);
              });
            }
          },
          Ft = function (X, Y, q) {
            var et, G;
            J
              ? ((et = K.createEvent('Event')),
                (et.promise = Y),
                (et.reason = q),
                et.initEvent(X, !1, !0),
                a.dispatchEvent(et))
              : (et = { promise: Y, reason: q }),
              (G = a['on' + X]) ? G(et) : X === k && T('Unhandled promise rejection', q);
          },
          $t = function (X, Y) {
            x.call(a, function () {
              var q = Y.value,
                et = bt(Y),
                G;
              if (
                et &&
                ((G = E(function () {
                  Q ? U.emit('unhandledRejection', q, X) : Ft(k, X, q);
                })),
                (Y.rejection = Q || bt(Y) ? Ut : ut),
                G.error)
              )
                throw G.value;
            });
          },
          bt = function (X) {
            return X.rejection !== ut && !X.parent;
          },
          Ht = function (X, Y) {
            x.call(a, function () {
              Q ? U.emit('rejectionHandled', X) : Ft(tt, X, Y.value);
            });
          },
          St = function (X, Y, q, et) {
            return function (G) {
              X(Y, q, G, et);
            };
          },
          Pt = function (X, Y, q, et) {
            Y.done || ((Y.done = !0), et && (Y = et), (Y.value = q), (Y.state = It), Nt(X, Y, !0));
          },
          Mt = function (X, Y, q, et) {
            if (!Y.done) {
              (Y.done = !0), et && (Y = et);
              try {
                if (X === q) throw j("Promise can't be resolved itself");
                var G = Bt(q);
                G
                  ? S(function () {
                      var V = { done: !1 };
                      try {
                        G.call(q, St(Mt, X, V, Y), St(Pt, X, V, Y));
                      } catch (Z) {
                        Pt(X, V, Z, Y);
                      }
                    })
                  : ((Y.value = q), (Y.state = lt), Nt(X, Y, !1));
              } catch (V) {
                Pt(X, { done: !1 }, V, Y);
              }
            }
          };
        xt &&
          ((H = function (Y) {
            c(this, H, B), v(Y), Ot.call(this);
            var q = F(this);
            try {
              Y(St(Mt, this, q), St(Pt, this, q));
            } catch (et) {
              Pt(this, q, et);
            }
          }),
          (Ot = function (Y) {
            w(this, {
              type: B,
              done: !1,
              notified: !1,
              parent: !1,
              reactions: [],
              rejection: !1,
              state: rt,
              value: void 0,
            });
          }),
          (Ot.prototype = s(H.prototype, {
            then: function (Y, q) {
              var et = b(this),
                G = z(y(this, H));
              return (
                (G.ok = typeof Y == 'function' ? Y : !0),
                (G.fail = typeof q == 'function' && q),
                (G.domain = Q ? U.domain : void 0),
                (et.parent = !0),
                et.reactions.push(G),
                et.state != rt && Nt(this, et, !1),
                G.promise
              );
            },
            catch: function (X) {
              return this.then(void 0, X);
            },
          })),
          (ft = function () {
            var X = new Ot(),
              Y = F(X);
            (this.promise = X), (this.resolve = St(Mt, X, Y)), (this.reject = St(Pt, X, Y));
          }),
          (C.f = z =
            function (X) {
              return X === H || X === Et ? new ft(X) : $(X);
            }),
          !r &&
            typeof f == 'function' &&
            ((Lt = f.prototype.then),
            g(
              f.prototype,
              'then',
              function (Y, q) {
                var et = this;
                return new H(function (G, V) {
                  Lt.call(et, G, V);
                }).then(Y, q);
              },
              { unsafe: !0 },
            ),
            typeof W == 'function' &&
              e(
                { global: !0, enumerable: !0, forced: !0 },
                {
                  fetch: function (Y) {
                    return D(H, W.apply(a, arguments));
                  },
                },
              ))),
          e({ global: !0, wrap: !0, forced: xt }, { Promise: H }),
          p(H, B, !1, !0),
          u(B),
          (Et = i(B)),
          e(
            { target: B, stat: !0, forced: xt },
            {
              reject: function (Y) {
                var q = z(this);
                return q.reject.call(void 0, Y), q.promise;
              },
            },
          ),
          e(
            { target: B, stat: !0, forced: r || xt },
            {
              resolve: function (Y) {
                return D(r && this === Et ? H : this, Y);
              },
            },
          ),
          e(
            { target: B, stat: !0, forced: kt },
            {
              all: function (Y) {
                var q = this,
                  et = z(q),
                  G = et.resolve,
                  V = et.reject,
                  Z = E(function () {
                    var _ = v(q.resolve),
                      nt = [],
                      ot = 0,
                      ct = 1;
                    m(Y, function (pt) {
                      var st = ot++,
                        Qt = !1;
                      nt.push(void 0),
                        ct++,
                        _.call(q, pt).then(function (Vt) {
                          Qt || ((Qt = !0), (nt[st] = Vt), --ct || G(nt));
                        }, V);
                    }),
                      --ct || G(nt);
                  });
                return Z.error && V(Z.value), et.promise;
              },
              race: function (Y) {
                var q = this,
                  et = z(q),
                  G = et.reject,
                  V = E(function () {
                    var Z = v(q.resolve);
                    m(Y, function (_) {
                      Z.call(q, _).then(et.resolve, G);
                    });
                  });
                return V.error && G(V.value), et.promise;
              },
            },
          );
      },
      function (o, n, t) {
        var e = t(8),
          r = t(71).f,
          a = t(34),
          i = t(117).set,
          f = t(118),
          g = e.MutationObserver || e.WebKitMutationObserver,
          s = e.process,
          p = e.Promise,
          u = a(s) == 'process',
          l = r(e, 'queueMicrotask'),
          v = l && l.value,
          c,
          h,
          d,
          m,
          A,
          y,
          x,
          S;
        v ||
          ((c = function () {
            var D, T;
            for (u && (D = s.domain) && D.exit(); h; ) {
              (T = h.fn), (h = h.next);
              try {
                T();
              } catch (C) {
                throw (h ? m() : (d = void 0), C);
              }
            }
            (d = void 0), D && D.enter();
          }),
          u
            ? (m = function () {
                s.nextTick(c);
              })
            : g && !f
            ? ((A = !0),
              (y = document.createTextNode('')),
              new g(c).observe(y, { characterData: !0 }),
              (m = function () {
                y.data = A = !A;
              }))
            : p && p.resolve
            ? ((x = p.resolve(void 0)),
              (S = x.then),
              (m = function () {
                S.call(x, c);
              }))
            : (m = function () {
                i.call(e, c);
              })),
          (o.exports =
            v ||
            function (D) {
              var T = { fn: D, next: void 0 };
              d && (d.next = T), h || ((h = T), m()), (d = T);
            });
      },
      function (o, n, t) {
        var e = t(8);
        o.exports = function (r, a) {
          var i = e.console;
          i && i.error && (arguments.length === 1 ? i.error(r) : i.error(r, a));
        };
      },
      function (o, n, t) {
        var e = t(5),
          r = t(41),
          a = t(85),
          i = t(120),
          f = t(66);
        e(
          { target: 'Promise', stat: !0 },
          {
            allSettled: function (s) {
              var p = this,
                u = a.f(p),
                l = u.resolve,
                v = u.reject,
                c = i(function () {
                  var h = r(p.resolve),
                    d = [],
                    m = 0,
                    A = 1;
                  f(s, function (y) {
                    var x = m++,
                      S = !1;
                    d.push(void 0),
                      A++,
                      h.call(p, y).then(
                        function (D) {
                          S || ((S = !0), (d[x] = { status: 'fulfilled', value: D }), --A || l(d));
                        },
                        function (D) {
                          S || ((S = !0), (d[x] = { status: 'rejected', reason: D }), --A || l(d));
                        },
                      );
                  }),
                    --A || l(d);
                });
              return c.error && v(c.value), u.promise;
            },
          },
        );
      },
      function (o, n, t) {
        var e = t(5),
          r = t(43),
          a = t(109),
          i = t(11),
          f = t(36),
          g = t(116),
          s = t(119),
          p = t(53),
          u =
            !!a &&
            i(function () {
              a.prototype.finally.call({ then: function () {} }, function () {});
            });
        e(
          { target: 'Promise', proto: !0, real: !0, forced: u },
          {
            finally: function (l) {
              var v = g(this, f('Promise')),
                c = typeof l == 'function';
              return this.then(
                c
                  ? function (h) {
                      return s(v, l()).then(function () {
                        return h;
                      });
                    }
                  : l,
                c
                  ? function (h) {
                      return s(v, l()).then(function () {
                        throw h;
                      });
                    }
                  : l,
              );
            },
          },
        ),
          !r &&
            typeof a == 'function' &&
            !a.prototype.finally &&
            p(a.prototype, 'finally', f('Promise').prototype.finally);
      },
      function (o, n, t) {
        t(54);
        var e = t(181),
          r = t(65),
          a = Array.prototype,
          i = { DOMTokenList: !0, NodeList: !0 };
        o.exports = function (f) {
          var g = f.forEach;
          return f === a || (f instanceof Array && g === a.forEach) || i.hasOwnProperty(r(f))
            ? e
            : g;
        };
      },
      function (o, n, t) {
        var e = t(182);
        o.exports = e;
      },
      function (o, n, t) {
        t(183);
        var e = t(15);
        o.exports = e('Array').forEach;
      },
      function (o, n, t) {
        var e = t(5),
          r = t(184);
        e({ target: 'Array', proto: !0, forced: [].forEach != r }, { forEach: r });
      },
      function (o, n, t) {
        var e = t(32).forEach,
          r = t(67),
          a = t(22),
          i = r('forEach'),
          f = a('forEach');
        o.exports =
          !i || !f
            ? function (s) {
                return e(this, s, arguments.length > 1 ? arguments[1] : void 0);
              }
            : [].forEach;
      },
      function (o, n, t) {
        var e = t(186);
        o.exports = e;
      },
      function (o, n, t) {
        t(187);
        var e = t(9);
        o.exports = e.Array.isArray;
      },
      function (o, n, t) {
        var e = t(5),
          r = t(55);
        e({ target: 'Array', stat: !0 }, { isArray: r });
      },
      function (o, n, t) {
        var e = t(189);
        o.exports = e;
      },
      function (o, n, t) {
        var e = t(190),
          r = Array.prototype;
        o.exports = function (a) {
          var i = a.map;
          return a === r || (a instanceof Array && i === r.map) ? e : i;
        };
      },
      function (o, n, t) {
        t(191);
        var e = t(15);
        o.exports = e('Array').map;
      },
      function (o, n, t) {
        var e = t(5),
          r = t(32).map,
          a = t(56),
          i = t(22),
          f = a('map'),
          g = i('map');
        e(
          { target: 'Array', proto: !0, forced: !f || !g },
          {
            map: function (p) {
              return r(this, p, arguments.length > 1 ? arguments[1] : void 0);
            },
          },
        );
      },
      function (o, n, t) {
        var e = t(193);
        o.exports = e;
      },
      function (o, n, t) {
        var e = t(194),
          r = String.prototype;
        o.exports = function (a) {
          var i = a.trim;
          return typeof a == 'string' || a === r || (a instanceof String && i === r.trim) ? e : i;
        };
      },
      function (o, n, t) {
        t(195);
        var e = t(15);
        o.exports = e('String').trim;
      },
      function (o, n, t) {
        var e = t(5),
          r = t(90).trim,
          a = t(196);
        e(
          { target: 'String', proto: !0, forced: a('trim') },
          {
            trim: function () {
              return r(this);
            },
          },
        );
      },
      function (o, n, t) {
        var e = t(11),
          r = t(68),
          a = '​᠎';
        o.exports = function (i) {
          return e(function () {
            return !!r[i]() || a[i]() != a || r[i].name !== i;
          });
        };
      },
      function (o, n, t) {
        var e = t(198);
        o.exports = e;
      },
      function (o, n, t) {
        t(199), t(61), t(50), t(54);
        var e = t(9);
        o.exports = e.Map;
      },
      function (o, n, t) {
        var e = t(122),
          r = t(124);
        o.exports = e(
          'Map',
          function (a) {
            return function () {
              return a(this, arguments.length ? arguments[0] : void 0);
            };
          },
          r,
        );
      },
      function (o, n, t) {
        var e = t(11);
        o.exports = !e(function () {
          return Object.isExtensible(Object.preventExtensions({}));
        });
      },
      function (o, n, t) {
        var e = t(202);
        o.exports = e;
      },
      function (o, n, t) {
        var e = t(203),
          r = Array.prototype;
        o.exports = function (a) {
          var i = a.indexOf;
          return a === r || (a instanceof Array && i === r.indexOf) ? e : i;
        };
      },
      function (o, n, t) {
        t(204);
        var e = t(15);
        o.exports = e('Array').indexOf;
      },
      function (o, n, t) {
        var e = t(5),
          r = t(78).indexOf,
          a = t(67),
          i = t(22),
          f = [].indexOf,
          g = !!f && 1 / [1].indexOf(1, -0) < 0,
          s = a('indexOf'),
          p = i('indexOf', { ACCESSORS: !0, 1: 0 });
        e(
          { target: 'Array', proto: !0, forced: g || !s || !p },
          {
            indexOf: function (l) {
              return g
                ? f.apply(this, arguments) || 0
                : r(this, l, arguments.length > 1 ? arguments[1] : void 0);
            },
          },
        );
      },
      function (o, n, t) {
        var e = t(206);
        o.exports = e;
      },
      function (o, n, t) {
        var e = t(207),
          r = Array.prototype;
        o.exports = function (a) {
          var i = a.splice;
          return a === r || (a instanceof Array && i === r.splice) ? e : i;
        };
      },
      function (o, n, t) {
        t(208);
        var e = t(15);
        o.exports = e('Array').splice;
      },
      function (o, n, t) {
        var e = t(5),
          r = t(79),
          a = t(62),
          i = t(35),
          f = t(31),
          g = t(88),
          s = t(69),
          p = t(56),
          u = t(22),
          l = p('splice'),
          v = u('splice', { ACCESSORS: !0, 0: 0, 1: 2 }),
          c = Math.max,
          h = Math.min,
          d = 9007199254740991,
          m = 'Maximum allowed length exceeded';
        e(
          { target: 'Array', proto: !0, forced: !l || !v },
          {
            splice: function (y, x) {
              var S = f(this),
                D = i(S.length),
                T = r(y, D),
                C = arguments.length,
                E,
                P,
                I,
                M,
                N,
                L;
              if (
                (C === 0
                  ? (E = P = 0)
                  : C === 1
                  ? ((E = 0), (P = D - T))
                  : ((E = C - 2), (P = h(c(a(x), 0), D - T))),
                D + E - P > d)
              )
                throw TypeError(m);
              for (I = g(S, P), M = 0; M < P; M++) (N = T + M), N in S && s(I, M, S[N]);
              if (((I.length = P), E < P)) {
                for (M = T; M < D - P; M++)
                  (N = M + P), (L = M + E), N in S ? (S[L] = S[N]) : delete S[L];
                for (M = D; M > D - P + E; M--) delete S[M - 1];
              } else if (E > P)
                for (M = D - P; M > T; M--)
                  (N = M + P - 1), (L = M + E - 1), N in S ? (S[L] = S[N]) : delete S[L];
              for (M = 0; M < E; M++) S[M + T] = arguments[M + 2];
              return (S.length = D - P + E), I;
            },
          },
        );
      },
      function (o, n, t) {
        var e = t(210);
        o.exports = e;
      },
      function (o, n, t) {
        var e = t(211),
          r = Array.prototype;
        o.exports = function (a) {
          var i = a.filter;
          return a === r || (a instanceof Array && i === r.filter) ? e : i;
        };
      },
      function (o, n, t) {
        t(212);
        var e = t(15);
        o.exports = e('Array').filter;
      },
      function (o, n, t) {
        var e = t(5),
          r = t(32).filter,
          a = t(56),
          i = t(22),
          f = a('filter'),
          g = i('filter');
        e(
          { target: 'Array', proto: !0, forced: !f || !g },
          {
            filter: function (p) {
              return r(this, p, arguments.length > 1 ? arguments[1] : void 0);
            },
          },
        );
      },
      function (o, n, t) {
        var e = t(214);
        o.exports = e;
      },
      function (o, n, t) {
        var e = t(215),
          r = t(217),
          a = Array.prototype,
          i = String.prototype;
        o.exports = function (f) {
          var g = f.includes;
          return f === a || (f instanceof Array && g === a.includes)
            ? e
            : typeof f == 'string' || f === i || (f instanceof String && g === i.includes)
            ? r
            : g;
        };
      },
      function (o, n, t) {
        t(216);
        var e = t(15);
        o.exports = e('Array').includes;
      },
      function (o, n, t) {
        var e = t(5),
          r = t(78).includes,
          a = t(82),
          i = t(22),
          f = i('indexOf', { ACCESSORS: !0, 1: 0 });
        e(
          { target: 'Array', proto: !0, forced: !f },
          {
            includes: function (s) {
              return r(this, s, arguments.length > 1 ? arguments[1] : void 0);
            },
          },
        ),
          a('includes');
      },
      function (o, n, t) {
        t(218);
        var e = t(15);
        o.exports = e('String').includes;
      },
      function (o, n, t) {
        var e = t(5),
          r = t(219),
          a = t(49),
          i = t(221);
        e(
          { target: 'String', proto: !0, forced: !i('includes') },
          {
            includes: function (g) {
              return !!~String(a(this)).indexOf(r(g), arguments.length > 1 ? arguments[1] : void 0);
            },
          },
        );
      },
      function (o, n, t) {
        var e = t(220);
        o.exports = function (r) {
          if (e(r)) throw TypeError("The method doesn't accept regular expressions");
          return r;
        };
      },
      function (o, n, t) {
        var e = t(13),
          r = t(34),
          a = t(10),
          i = a('match');
        o.exports = function (f) {
          var g;
          return e(f) && ((g = f[i]) !== void 0 ? !!g : r(f) == 'RegExp');
        };
      },
      function (o, n, t) {
        var e = t(10),
          r = e('match');
        o.exports = function (a) {
          var i = /./;
          try {
            '/./'[a](i);
          } catch (f) {
            try {
              return (i[r] = !1), '/./'[a](i);
            } catch (g) {}
          }
          return !1;
        };
      },
      function (o, n, t) {
        var e = t(223);
        o.exports = e;
      },
      function (o, n, t) {
        var e = t(224),
          r = Function.prototype;
        o.exports = function (a) {
          var i = a.bind;
          return a === r || (a instanceof Function && i === r.bind) ? e : i;
        };
      },
      function (o, n, t) {
        t(225);
        var e = t(15);
        o.exports = e('Function').bind;
      },
      function (o, n, t) {
        var e = t(5),
          r = t(226);
        e({ target: 'Function', proto: !0 }, { bind: r });
      },
      function (o, n, t) {
        var e = t(41),
          r = t(13),
          a = [].slice,
          i = {},
          f = function (g, s, p) {
            if (!(s in i)) {
              for (var u = [], l = 0; l < s; l++) u[l] = 'a[' + l + ']';
              i[s] = Function('C,a', 'return new C(' + u.join(',') + ')');
            }
            return i[s](g, p);
          };
        o.exports =
          Function.bind ||
          function (s) {
            var p = e(this),
              u = a.call(arguments, 1),
              l = function () {
                var c = u.concat(a.call(arguments));
                return this instanceof l ? f(p, c.length, c) : p.apply(s, c);
              };
            return r(p.prototype) && (l.prototype = p.prototype), l;
          };
      },
      function (o, n, t) {
        o.exports = t(228);
      },
      function (o, n, t) {
        var e = t(229);
        o.exports = e;
      },
      function (o, n, t) {
        t(125), t(50), t(54);
        var e = t(93);
        o.exports = e.f('iterator');
      },
      function (o, n, t) {
        o.exports = t(231);
      },
      function (o, n, t) {
        var e = t(232);
        t(251), t(252), t(253), t(254), t(255), (o.exports = e);
      },
      function (o, n, t) {
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
        var e = t(9);
        o.exports = e.Symbol;
      },
      function (o, n, t) {
        var e = t(5),
          r = t(11),
          a = t(55),
          i = t(13),
          f = t(31),
          g = t(35),
          s = t(69),
          p = t(88),
          u = t(56),
          l = t(10),
          v = t(86),
          c = l('isConcatSpreadable'),
          h = 9007199254740991,
          d = 'Maximum allowed index exceeded',
          m =
            v >= 51 ||
            !r(function () {
              var S = [];
              return (S[c] = !1), S.concat()[0] !== S;
            }),
          A = u('concat'),
          y = function (S) {
            if (!i(S)) return !1;
            var D = S[c];
            return D !== void 0 ? !!D : a(S);
          },
          x = !m || !A;
        e(
          { target: 'Array', proto: !0, forced: x },
          {
            concat: function (D) {
              var T = f(this),
                C = p(T, 0),
                E = 0,
                P,
                I,
                M,
                N,
                L;
              for (P = -1, M = arguments.length; P < M; P++)
                if (((L = P === -1 ? T : arguments[P]), y(L))) {
                  if (((N = g(L.length)), E + N > h)) throw TypeError(d);
                  for (I = 0; I < N; I++, E++) I in L && s(C, E, L[I]);
                } else {
                  if (E >= h) throw TypeError(d);
                  s(C, E++, L);
                }
              return (C.length = E), C;
            },
          },
        );
      },
      function (o, n, t) {
        var e = t(5),
          r = t(8),
          a = t(36),
          i = t(43),
          f = t(14),
          g = t(76),
          s = t(106),
          p = t(11),
          u = t(16),
          l = t(55),
          v = t(13),
          c = t(25),
          h = t(31),
          d = t(30),
          m = t(60),
          A = t(48),
          y = t(77),
          x = t(52),
          S = t(126),
          D = t(235),
          T = t(127),
          C = t(71),
          E = t(18),
          P = t(59),
          I = t(19),
          M = t(53),
          N = t(74),
          L = t(63),
          B = t(51),
          F = t(64),
          w = t(10),
          b = t(93),
          H = t(12),
          j = t(37),
          K = t(42),
          U = t(32).forEach,
          W = L('hidden'),
          z = 'Symbol',
          $ = 'prototype',
          Q = w('toPrimitive'),
          J = K.set,
          k = K.getterFor(z),
          tt = Object[$],
          rt = r.Symbol,
          lt = a('JSON', 'stringify'),
          It = C.f,
          ut = E.f,
          Ut = D.f,
          Ot = P.f,
          ft = N('symbols'),
          Et = N('op-symbols'),
          Lt = N('string-to-symbol-registry'),
          xt = N('symbol-to-string-registry'),
          kt = N('wks'),
          Bt = r.QObject,
          Nt = !Bt || !Bt[$] || !Bt[$].findChild,
          Ft =
            f &&
            p(function () {
              return (
                y(
                  ut({}, 'a', {
                    get: function () {
                      return ut(this, 'a', { value: 7 }).a;
                    },
                  }),
                ).a != 7
              );
            })
              ? function (G, V, Z) {
                  var _ = It(tt, V);
                  _ && delete tt[V], ut(G, V, Z), _ && G !== tt && ut(tt, V, _);
                }
              : ut,
          $t = function (G, V) {
            var Z = (ft[G] = y(rt[$]));
            return J(Z, { type: z, tag: G, description: V }), f || (Z.description = V), Z;
          },
          bt = s
            ? function (G) {
                return typeof G == 'symbol';
              }
            : function (G) {
                return Object(G) instanceof rt;
              },
          Ht = function (V, Z, _) {
            V === tt && Ht(Et, Z, _), c(V);
            var nt = m(Z, !0);
            return (
              c(_),
              u(ft, nt)
                ? (_.enumerable
                    ? (u(V, W) && V[W][nt] && (V[W][nt] = !1), (_ = y(_, { enumerable: A(0, !1) })))
                    : (u(V, W) || ut(V, W, A(1, {})), (V[W][nt] = !0)),
                  Ft(V, nt, _))
                : ut(V, nt, _)
            );
          },
          St = function (V, Z) {
            c(V);
            var _ = d(Z),
              nt = x(_).concat(q(_));
            return (
              U(nt, function (ot) {
                (!f || Mt.call(_, ot)) && Ht(V, ot, _[ot]);
              }),
              V
            );
          },
          Pt = function (V, Z) {
            return Z === void 0 ? y(V) : St(y(V), Z);
          },
          Mt = function (V) {
            var Z = m(V, !0),
              _ = Ot.call(this, Z);
            return this === tt && u(ft, Z) && !u(Et, Z)
              ? !1
              : _ || !u(this, Z) || !u(ft, Z) || (u(this, W) && this[W][Z])
              ? _
              : !0;
          },
          X = function (V, Z) {
            var _ = d(V),
              nt = m(Z, !0);
            if (!(_ === tt && u(ft, nt) && !u(Et, nt))) {
              var ot = It(_, nt);
              return ot && u(ft, nt) && !(u(_, W) && _[W][nt]) && (ot.enumerable = !0), ot;
            }
          },
          Y = function (V) {
            var Z = Ut(d(V)),
              _ = [];
            return (
              U(Z, function (nt) {
                !u(ft, nt) && !u(B, nt) && _.push(nt);
              }),
              _
            );
          },
          q = function (V) {
            var Z = V === tt,
              _ = Ut(Z ? Et : d(V)),
              nt = [];
            return (
              U(_, function (ot) {
                u(ft, ot) && (!Z || u(tt, ot)) && nt.push(ft[ot]);
              }),
              nt
            );
          };
        if (
          (g ||
            ((rt = function () {
              if (this instanceof rt) throw TypeError('Symbol is not a constructor');
              var V = !arguments.length || arguments[0] === void 0 ? void 0 : String(arguments[0]),
                Z = F(V),
                _ = function (nt) {
                  this === tt && _.call(Et, nt),
                    u(this, W) && u(this[W], Z) && (this[W][Z] = !1),
                    Ft(this, Z, A(1, nt));
                };
              return f && Nt && Ft(tt, Z, { configurable: !0, set: _ }), $t(Z, V);
            }),
            M(rt[$], 'toString', function () {
              return k(this).tag;
            }),
            M(rt, 'withoutSetter', function (G) {
              return $t(F(G), G);
            }),
            (P.f = Mt),
            (E.f = Ht),
            (C.f = X),
            (S.f = D.f = Y),
            (T.f = q),
            (b.f = function (G) {
              return $t(w(G), G);
            }),
            f &&
              (ut(rt[$], 'description', {
                configurable: !0,
                get: function () {
                  return k(this).description;
                },
              }),
              i || M(tt, 'propertyIsEnumerable', Mt, { unsafe: !0 }))),
          e({ global: !0, wrap: !0, forced: !g, sham: !g }, { Symbol: rt }),
          U(x(kt), function (G) {
            H(G);
          }),
          e(
            { target: z, stat: !0, forced: !g },
            {
              for: function (G) {
                var V = String(G);
                if (u(Lt, V)) return Lt[V];
                var Z = rt(V);
                return (Lt[V] = Z), (xt[Z] = V), Z;
              },
              keyFor: function (V) {
                if (!bt(V)) throw TypeError(V + ' is not a symbol');
                if (u(xt, V)) return xt[V];
              },
              useSetter: function () {
                Nt = !0;
              },
              useSimple: function () {
                Nt = !1;
              },
            },
          ),
          e(
            { target: 'Object', stat: !0, forced: !g, sham: !f },
            { create: Pt, defineProperty: Ht, defineProperties: St, getOwnPropertyDescriptor: X },
          ),
          e(
            { target: 'Object', stat: !0, forced: !g },
            { getOwnPropertyNames: Y, getOwnPropertySymbols: q },
          ),
          e(
            {
              target: 'Object',
              stat: !0,
              forced: p(function () {
                T.f(1);
              }),
            },
            {
              getOwnPropertySymbols: function (V) {
                return T.f(h(V));
              },
            },
          ),
          lt)
        ) {
          var et =
            !g ||
            p(function () {
              var G = rt();
              return lt([G]) != '[null]' || lt({ a: G }) != '{}' || lt(Object(G)) != '{}';
            });
          e(
            { target: 'JSON', stat: !0, forced: et },
            {
              stringify: function (V, Z, _) {
                for (var nt = [V], ot = 1, ct; arguments.length > ot; ) nt.push(arguments[ot++]);
                if (((ct = Z), !((!v(Z) && V === void 0) || bt(V))))
                  return (
                    l(Z) ||
                      (Z = function (pt, st) {
                        if ((typeof ct == 'function' && (st = ct.call(this, pt, st)), !bt(st)))
                          return st;
                      }),
                    (nt[1] = Z),
                    lt.apply(null, nt)
                  );
              },
            },
          );
        }
        rt[$][Q] || I(rt[$], Q, rt[$].valueOf), j(rt, z), (B[W] = !0);
      },
      function (o, n, t) {
        var e = t(30),
          r = t(126).f,
          a = {}.toString,
          i =
            typeof window == 'object' && window && Object.getOwnPropertyNames
              ? Object.getOwnPropertyNames(window)
              : [],
          f = function (g) {
            try {
              return r(g);
            } catch (s) {
              return i.slice();
            }
          };
        o.exports.f = function (s) {
          return i && a.call(s) == '[object Window]' ? f(s) : r(e(s));
        };
      },
      function (o, n, t) {
        var e = t(12);
        e('asyncIterator');
      },
      function (o, n) {},
      function (o, n, t) {
        var e = t(12);
        e('hasInstance');
      },
      function (o, n, t) {
        var e = t(12);
        e('isConcatSpreadable');
      },
      function (o, n, t) {
        var e = t(12);
        e('match');
      },
      function (o, n, t) {
        var e = t(12);
        e('matchAll');
      },
      function (o, n, t) {
        var e = t(12);
        e('replace');
      },
      function (o, n, t) {
        var e = t(12);
        e('search');
      },
      function (o, n, t) {
        var e = t(12);
        e('species');
      },
      function (o, n, t) {
        var e = t(12);
        e('split');
      },
      function (o, n, t) {
        var e = t(12);
        e('toPrimitive');
      },
      function (o, n, t) {
        var e = t(12);
        e('toStringTag');
      },
      function (o, n, t) {
        var e = t(12);
        e('unscopables');
      },
      function (o, n, t) {
        var e = t(37);
        e(Math, 'Math', !0);
      },
      function (o, n, t) {
        var e = t(8),
          r = t(37);
        r(e.JSON, 'JSON', !0);
      },
      function (o, n, t) {
        var e = t(12);
        e('asyncDispose');
      },
      function (o, n, t) {
        var e = t(12);
        e('dispose');
      },
      function (o, n, t) {
        var e = t(12);
        e('observable');
      },
      function (o, n, t) {
        var e = t(12);
        e('patternMatch');
      },
      function (o, n, t) {
        var e = t(12);
        e('replaceAll');
      },
      function (o, n, t) {
        o.exports = t(257);
      },
      function (o, n, t) {
        var e = t(258);
        o.exports = e;
      },
      function (o, n, t) {
        t(259);
        var e = t(9);
        o.exports = e.parseInt;
      },
      function (o, n, t) {
        var e = t(5),
          r = t(260);
        e({ global: !0, forced: parseInt != r }, { parseInt: r });
      },
      function (o, n, t) {
        var e = t(8),
          r = t(90).trim,
          a = t(68),
          i = e.parseInt,
          f = /^[+-]?0[Xx]/,
          g = i(a + '08') !== 8 || i(a + '0x16') !== 22;
        o.exports = g
          ? function (p, u) {
              var l = r(String(p));
              return i(l, u >>> 0 || (f.test(l) ? 16 : 10));
            }
          : i;
      },
      function (o, n, t) {
        var e = t(262);
        o.exports = e;
      },
      function (o, n, t) {
        var e = t(263),
          r = Array.prototype;
        o.exports = function (a) {
          var i = a.slice;
          return a === r || (a instanceof Array && i === r.slice) ? e : i;
        };
      },
      function (o, n, t) {
        t(264);
        var e = t(15);
        o.exports = e('Array').slice;
      },
      function (o, n, t) {
        var e = t(5),
          r = t(13),
          a = t(55),
          i = t(79),
          f = t(35),
          g = t(30),
          s = t(69),
          p = t(10),
          u = t(56),
          l = t(22),
          v = u('slice'),
          c = l('slice', { ACCESSORS: !0, 0: 0, 1: 2 }),
          h = p('species'),
          d = [].slice,
          m = Math.max;
        e(
          { target: 'Array', proto: !0, forced: !v || !c },
          {
            slice: function (y, x) {
              var S = g(this),
                D = f(S.length),
                T = i(y, D),
                C = i(x === void 0 ? D : x, D),
                E,
                P,
                I;
              if (
                a(S) &&
                ((E = S.constructor),
                typeof E == 'function' && (E === Array || a(E.prototype))
                  ? (E = void 0)
                  : r(E) && ((E = E[h]), E === null && (E = void 0)),
                E === Array || E === void 0)
              )
                return d.call(S, T, C);
              for (P = new (E === void 0 ? Array : E)(m(C - T, 0)), I = 0; T < C; T++, I++)
                T in S && s(P, I, S[T]);
              return (P.length = I), P;
            },
          },
        );
      },
      function (o, n, t) {
        t(266);
        var e = t(9);
        o.exports = e.setTimeout;
      },
      function (o, n, t) {
        var e = t(5),
          r = t(8),
          a = t(84),
          i = [].slice,
          f = /MSIE .\./.test(a),
          g = function (s) {
            return function (p, u) {
              var l = arguments.length > 2,
                v = l ? i.call(arguments, 2) : void 0;
              return s(
                l
                  ? function () {
                      (typeof p == 'function' ? p : Function(p)).apply(this, v);
                    }
                  : p,
                u,
              );
            };
          };
        e(
          { global: !0, bind: !0, forced: f },
          { setTimeout: g(r.setTimeout), setInterval: g(r.setInterval) },
        );
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(128));
        (0, r.default)(n, '__esModule', { value: !0 });
        var i = t(2),
          f = i.__importDefault(t(272)),
          g = i.__importDefault(t(273)),
          s = i.__importDefault(t(129)),
          p = i.__importDefault(t(274)),
          u = i.__importDefault(t(275)),
          l = i.__importDefault(t(276)),
          v = i.__importDefault(t(130)),
          c = i.__importDefault(t(277)),
          h = i.__importDefault(t(278)),
          d = i.__importDefault(t(279)),
          m = (0, a.default)(
            {},
            f.default,
            g.default,
            s.default,
            u.default,
            p.default,
            l.default,
            v.default,
            c.default,
            h.default,
            d.default,
            {
              linkCheck: function (y, x) {
                return !0;
              },
            },
          );
        n.default = m;
      },
      function (o, n, t) {
        var e = t(269);
        o.exports = e;
      },
      function (o, n, t) {
        t(270);
        var e = t(9);
        o.exports = e.Object.assign;
      },
      function (o, n, t) {
        var e = t(5),
          r = t(271);
        e({ target: 'Object', stat: !0, forced: Object.assign !== r }, { assign: r });
      },
      function (o, n, t) {
        var e = t(14),
          r = t(11),
          a = t(52),
          i = t(127),
          f = t(59),
          g = t(31),
          s = t(72),
          p = Object.assign,
          u = Object.defineProperty;
        o.exports =
          !p ||
          r(function () {
            if (
              e &&
              p(
                { b: 1 },
                p(
                  u({}, 'a', {
                    enumerable: !0,
                    get: function () {
                      u(this, 'b', { value: 3, enumerable: !1 });
                    },
                  }),
                  { b: 2 },
                ),
              ).b !== 1
            )
              return !0;
            var l = {},
              v = {},
              c = Symbol(),
              h = 'abcdefghijklmnopqrst';
            return (
              (l[c] = 7),
              h.split('').forEach(function (d) {
                v[d] = d;
              }),
              p({}, l)[c] != 7 || a(p({}, v)).join('') != h
            );
          })
            ? function (v, c) {
                for (var h = g(v), d = arguments.length, m = 1, A = i.f, y = f.f; d > m; )
                  for (
                    var x = s(arguments[m++]),
                      S = A ? a(x).concat(A(x)) : a(x),
                      D = S.length,
                      T = 0,
                      C;
                    D > T;

                  )
                    (C = S[T++]), (!e || y.call(x, C)) && (h[C] = x[C]);
                return h;
              }
            : p;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 }),
          (n.default = {
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
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 });
        var a = t(7);
        function i(f, g, s) {
          window.alert(f), s && console.error('wangEditor: ' + s);
        }
        n.default = {
          onchangeTimeout: 200,
          onchange: null,
          onfocus: a.EMPTY_FN,
          onblur: a.EMPTY_FN,
          onCatalogChange: null,
          customAlert: i,
        };
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 }),
          (n.default = {
            pasteFilterStyle: !0,
            pasteIgnoreImg: !1,
            pasteTextHandle: function (i) {
              return i;
            },
          });
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 }), (n.default = { styleWithCSS: !1 });
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 });
        var a = t(7);
        n.default = {
          linkImgCheck: function (f, g, s) {
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
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 }),
          (n.default = {
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
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 });
        var a = t(6);
        function i() {
          return !!(a.UA.isIE() || a.UA.isOldEdge);
        }
        n.default = { compatibleMode: i, historyMaxSize: 30 };
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 });
        var a = t(7);
        n.default = {
          onlineVideoCheck: function (f) {
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
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(17));
        (0, r.default)(n, '__esModule', { value: !0 });
        var i = t(2),
          f = i.__importDefault(t(3)),
          g = t(6),
          s = t(7),
          p = (function () {
            function u(l) {
              (this._currentRange = null), (this.editor = l);
            }
            return (
              (u.prototype.getRange = function () {
                return this._currentRange;
              }),
              (u.prototype.saveRange = function (l) {
                if (l) {
                  this._currentRange = l;
                  return;
                }
                var v = window.getSelection();
                if (v.rangeCount !== 0) {
                  var c = v.getRangeAt(0),
                    h = this.getSelectionContainerElem(c);
                  if (
                    h != null &&
                    h.length &&
                    !(
                      h.attr('contenteditable') === 'false' ||
                      h.parentUntil('[contenteditable=false]')
                    )
                  ) {
                    var d = this.editor,
                      m = d.$textElem;
                    if (m.isContain(h)) {
                      if (m.elems[0] === h.elems[0]) {
                        var A;
                        if ((0, a.default)((A = m.html())).call(A) === s.EMPTY_P) {
                          var y = m.children(),
                            x = y == null ? void 0 : y.last();
                          d.selection.createRangeByElem(x, !0, !0), d.selection.restoreSelection();
                        }
                      }
                      this._currentRange = c;
                    }
                  }
                }
              }),
              (u.prototype.collapseRange = function (l) {
                l === void 0 && (l = !1);
                var v = this._currentRange;
                v && v.collapse(l);
              }),
              (u.prototype.getSelectionText = function () {
                var l = this._currentRange;
                return l ? l.toString() : '';
              }),
              (u.prototype.getSelectionContainerElem = function (l) {
                var v;
                v = l || this._currentRange;
                var c;
                if (v)
                  return (
                    (c = v.commonAncestorContainer), f.default(c.nodeType === 1 ? c : c.parentNode)
                  );
              }),
              (u.prototype.getSelectionStartElem = function (l) {
                var v;
                v = l || this._currentRange;
                var c;
                if (v)
                  return (c = v.startContainer), f.default(c.nodeType === 1 ? c : c.parentNode);
              }),
              (u.prototype.getSelectionEndElem = function (l) {
                var v;
                v = l || this._currentRange;
                var c;
                if (v) return (c = v.endContainer), f.default(c.nodeType === 1 ? c : c.parentNode);
              }),
              (u.prototype.isSelectionEmpty = function () {
                var l = this._currentRange;
                return !!(
                  l &&
                  l.startContainer &&
                  l.startContainer === l.endContainer &&
                  l.startOffset === l.endOffset
                );
              }),
              (u.prototype.restoreSelection = function () {
                var l = window.getSelection(),
                  v = this._currentRange;
                l && v && (l.removeAllRanges(), l.addRange(v));
              }),
              (u.prototype.createEmptyRange = function () {
                var l = this.editor,
                  v = this.getRange(),
                  c;
                if (v && this.isSelectionEmpty())
                  try {
                    g.UA.isWebkit()
                      ? (l.cmd.do('insertHTML', '&#8203;'),
                        v.setEnd(v.endContainer, v.endOffset + 1),
                        this.saveRange(v))
                      : ((c = f.default('<strong>&#8203;</strong>')),
                        l.cmd.do('insertElem', c),
                        this.createRangeByElem(c, !0));
                  } catch (h) {}
              }),
              (u.prototype.createRangeByElems = function (l, v) {
                var c = window.getSelection ? window.getSelection() : document.getSelection();
                c == null || c.removeAllRanges();
                var h = document.createRange();
                h.setStart(l, 0),
                  h.setEnd(v, v.childNodes.length || 1),
                  this.saveRange(h),
                  this.restoreSelection();
              }),
              (u.prototype.createRangeByElem = function (l, v, c) {
                if (l.length) {
                  var h = l.elems[0],
                    d = document.createRange();
                  c ? d.selectNodeContents(h) : d.selectNode(h),
                    v != null &&
                      (d.collapse(v),
                      v || (this.saveRange(d), this.editor.selection.moveCursor(h))),
                    this.saveRange(d);
                }
              }),
              (u.prototype.getSelectionRangeTopNodes = function () {
                var l,
                  v,
                  c,
                  h =
                    (l = this.getSelectionStartElem()) === null || l === void 0
                      ? void 0
                      : l.getNodeTop(this.editor),
                  d =
                    (v = this.getSelectionEndElem()) === null || v === void 0
                      ? void 0
                      : v.getNodeTop(this.editor);
                return (c = this.recordSelectionNodes(f.default(h), f.default(d))), c;
              }),
              (u.prototype.moveCursor = function (l, v) {
                var c,
                  h = this.getRange(),
                  d =
                    l.nodeType === 3
                      ? (c = l.nodeValue) === null || c === void 0
                        ? void 0
                        : c.length
                      : l.childNodes.length;
                (g.UA.isFirefox || g.UA.isIE()) &&
                  d !== 0 &&
                  (l.nodeType === 3 || l.childNodes[d - 1].nodeName === 'BR') &&
                  (d = d - 1);
                var m = v != null ? v : d;
                h && l && (h.setStart(l, m), h.setEnd(l, m), this.restoreSelection());
              }),
              (u.prototype.getCursorPos = function () {
                var l = window.getSelection();
                return l == null ? void 0 : l.anchorOffset;
              }),
              (u.prototype.clearWindowSelectionRange = function () {
                var l = window.getSelection();
                l && l.removeAllRanges();
              }),
              (u.prototype.recordSelectionNodes = function (l, v) {
                var c = [],
                  h = !0;
                try {
                  for (var d = l, m = this.editor.$textElem; h; ) {
                    var A = d == null ? void 0 : d.getNodeTop(this.editor);
                    A.getNodeName() === 'BODY' && (h = !1),
                      A.length > 0 &&
                        (c.push(f.default(d)),
                        (v != null && v.equal(A)) || m.equal(A)
                          ? (h = !1)
                          : (d = A.getNextSibling()));
                  }
                } catch (y) {
                  h = !1;
                }
                return c;
              }),
              (u.prototype.setRangeToElem = function (l) {
                var v = this.getRange();
                v == null || v.setStart(l, 0), v == null || v.setEnd(l, 0);
              }),
              u
            );
          })();
        n.default = p;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(3)),
          f = (function () {
            function g(s) {
              this.editor = s;
            }
            return (
              (g.prototype.do = function (s, p) {
                var u = this.editor;
                u.config.styleWithCSS && document.execCommand('styleWithCSS', !1, 'true');
                var l = u.selection;
                if (l.getRange()) {
                  switch ((l.restoreSelection(), s)) {
                    case 'insertHTML':
                      this.insertHTML(p);
                      break;
                    case 'insertElem':
                      this.insertElem(p);
                      break;
                    default:
                      this.execCommand(s, p);
                      break;
                  }
                  u.menus.changeActive(), l.saveRange(), l.restoreSelection();
                }
              }),
              (g.prototype.insertHTML = function (s) {
                var p = this.editor,
                  u = p.selection.getRange();
                if (u != null) {
                  if (this.queryCommandSupported('insertHTML')) this.execCommand('insertHTML', s);
                  else if (u.insertNode) {
                    if ((u.deleteContents(), i.default(s).elems.length > 0))
                      u.insertNode(i.default(s).elems[0]);
                    else {
                      var l = document.createElement('p');
                      l.appendChild(document.createTextNode(s)), u.insertNode(l);
                    }
                    p.selection.collapseRange();
                  }
                }
              }),
              (g.prototype.insertElem = function (s) {
                var p = this.editor,
                  u = p.selection.getRange();
                u != null && u.insertNode && (u.deleteContents(), u.insertNode(s.elems[0]));
              }),
              (g.prototype.execCommand = function (s, p) {
                document.execCommand(s, !1, p);
              }),
              (g.prototype.queryCommandValue = function (s) {
                return document.queryCommandValue(s);
              }),
              (g.prototype.queryCommandState = function (s) {
                return document.queryCommandState(s);
              }),
              (g.prototype.queryCommandSupported = function (s) {
                return document.queryCommandSupported(s);
              }),
              g
            );
          })();
        n.default = f;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(29)),
          i = e(t(4)),
          f = e(t(17)),
          g = e(t(27)),
          s = e(t(46));
        (0, r.default)(n, '__esModule', { value: !0 });
        var p = t(2),
          u = p.__importDefault(t(3)),
          l = p.__importDefault(t(287)),
          v = t(6),
          c = p.__importDefault(t(299)),
          h = p.__importDefault(t(300)),
          d = t(7),
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
                  x = this.html(),
                  S = (0, a.default)((y = this.editor.$textContainerElem)).call(y, '.placeholder');
                S.hide(), !this.editor.isComposing && (!x || x === ' ') && S.show();
              }),
              (A.prototype.clear = function () {
                this.html(d.EMPTY_P);
              }),
              (A.prototype.html = function (y) {
                var x = this.editor,
                  S = x.$textElem;
                if (y == null) {
                  var D = S.html();
                  (D = D.replace(/\u200b/gm, '')),
                    (D = D.replace(/<p><\/p>/gim, '')),
                    (D = D.replace(d.EMPTY_P_LAST_REGEX, '')),
                    (D = D.replace(d.EMPTY_P_REGEX, '<p>'));
                  var T = D.match(/<(img|br|hr|input)[^>]*>/gi);
                  return (
                    T !== null &&
                      (0, i.default)(T).call(T, function (C) {
                        C.match(/\/>/) || (D = D.replace(C, C.substring(0, C.length - 1) + '/>'));
                      }),
                    D
                  );
                }
                (y = (0, f.default)(y).call(y)),
                  y === '' && (y = d.EMPTY_P),
                  (0, g.default)(y).call(y, '<') !== 0 && (y = '<p>' + y + '</p>'),
                  S.html(y),
                  x.initSelection();
              }),
              (A.prototype.setJSON = function (y) {
                var x = h.default(y).children(),
                  S = this.editor,
                  D = S.$textElem;
                x && D.replaceChildAll(x);
              }),
              (A.prototype.getJSON = function () {
                var y = this.editor,
                  x = y.$textElem;
                return c.default(x);
              }),
              (A.prototype.text = function (y) {
                var x = this.editor,
                  S = x.$textElem;
                if (y == null) {
                  var D = S.text();
                  return (D = D.replace(/\u200b/gm, '')), D;
                }
                S.text('<p>' + y + '</p>'), x.initSelection();
              }),
              (A.prototype.append = function (y) {
                var x = this.editor;
                (0, g.default)(y).call(y, '<') !== 0 && (y = '<p>' + y + '</p>'),
                  this.html(this.html() + y),
                  x.initSelection();
              }),
              (A.prototype._saveRange = function () {
                var y = this.editor,
                  x = y.$textElem,
                  S = u.default(document);
                function D() {
                  y.selection.saveRange(), y.menus.changeActive();
                }
                x.on('keyup', D);
                function T() {
                  D(), x.off('click', T);
                }
                x.on('click', T);
                function C() {
                  D(), S.off('mouseup', C);
                }
                function E() {
                  S.on('mouseup', C), x.off('mouseleave', E);
                }
                x.on('mousedown', function () {
                  x.on('mouseleave', E);
                }),
                  x.on('mouseup', function (P) {
                    x.off('mouseleave', E),
                      (0, s.default)(function () {
                        var I = y.selection,
                          M = I.getRange();
                        M !== null && D();
                      }, 0);
                  });
              }),
              (A.prototype._bindEventHooks = function () {
                var y = this.editor,
                  x = y.$textElem,
                  S = this.eventHooks;
                x.on('click', function (T) {
                  var C = S.clickEvents;
                  (0, i.default)(C).call(C, function (E) {
                    return E(T);
                  });
                }),
                  x.on('keyup', function (T) {
                    if (T.keyCode === 13) {
                      var C = S.enterUpEvents;
                      (0, i.default)(C).call(C, function (E) {
                        return E(T);
                      });
                    }
                  }),
                  x.on('keyup', function (T) {
                    var C = S.keyupEvents;
                    (0, i.default)(C).call(C, function (E) {
                      return E(T);
                    });
                  }),
                  x.on('keydown', function (T) {
                    var C = S.keydownEvents;
                    (0, i.default)(C).call(C, function (E) {
                      return E(T);
                    });
                  }),
                  x.on('keyup', function (T) {
                    if (!(T.keyCode !== 8 && T.keyCode !== 46)) {
                      var C = S.deleteUpEvents;
                      (0, i.default)(C).call(C, function (E) {
                        return E(T);
                      });
                    }
                  }),
                  x.on('keydown', function (T) {
                    if (!(T.keyCode !== 8 && T.keyCode !== 46)) {
                      var C = S.deleteDownEvents;
                      (0, i.default)(C).call(C, function (E) {
                        return E(T);
                      });
                    }
                  }),
                  x.on('paste', function (T) {
                    if (!v.UA.isIE()) {
                      T.preventDefault();
                      var C = S.pasteEvents;
                      (0, i.default)(C).call(C, function (E) {
                        return E(T);
                      });
                    }
                  }),
                  x.on('keydown', function (T) {
                    (y.isFocus || y.isCompatibleMode) &&
                      (T.ctrlKey || T.metaKey) &&
                      T.keyCode === 90 &&
                      (T.preventDefault(), T.shiftKey ? y.history.restore() : y.history.revoke());
                  }),
                  x.on('keyup', function (T) {
                    if (T.keyCode === 9) {
                      T.preventDefault();
                      var C = S.tabUpEvents;
                      (0, i.default)(C).call(C, function (E) {
                        return E(T);
                      });
                    }
                  }),
                  x.on('keydown', function (T) {
                    if (T.keyCode === 9) {
                      T.preventDefault();
                      var C = S.tabDownEvents;
                      (0, i.default)(C).call(C, function (E) {
                        return E(T);
                      });
                    }
                  }),
                  x.on(
                    'scroll',
                    v.throttle(function (T) {
                      var C = S.textScrollEvents;
                      (0, i.default)(C).call(C, function (E) {
                        return E(T);
                      });
                    }, 100),
                  );
                function D(T) {
                  T.preventDefault();
                }
                u
                  .default(document)
                  .on('dragleave', D)
                  .on('drop', D)
                  .on('dragenter', D)
                  .on('dragover', D),
                  y.beforeDestroy(function () {
                    u.default(document)
                      .off('dragleave', D)
                      .off('drop', D)
                      .off('dragenter', D)
                      .off('dragover', D);
                  }),
                  x.on('drop', function (T) {
                    T.preventDefault();
                    var C = S.dropEvents;
                    (0, i.default)(C).call(C, function (E) {
                      return E(T);
                    });
                  }),
                  x.on('click', function (T) {
                    var C = null,
                      E = T.target,
                      P = u.default(E);
                    if (P.getNodeName() === 'A') C = P;
                    else {
                      var I = P.parentUntil('a');
                      I != null && (C = I);
                    }
                    if (C) {
                      var M = S.linkClickEvents;
                      (0, i.default)(M).call(M, function (N) {
                        return N(C);
                      });
                    }
                  }),
                  x.on('click', function (T) {
                    var C = null,
                      E = T.target,
                      P = u.default(E);
                    if (
                      (P.getNodeName() === 'IMG' &&
                        !P.elems[0].getAttribute('data-emoji') &&
                        (T.stopPropagation(), (C = P)),
                      !!C)
                    ) {
                      var I = S.imgClickEvents;
                      (0, i.default)(I).call(I, function (M) {
                        return M(C);
                      });
                    }
                  }),
                  x.on('click', function (T) {
                    var C = null,
                      E = T.target,
                      P = u.default(E);
                    if (P.getNodeName() === 'PRE') C = P;
                    else {
                      var I = P.parentUntil('pre');
                      I !== null && (C = I);
                    }
                    if (C) {
                      var M = S.codeClickEvents;
                      (0, i.default)(M).call(M, function (N) {
                        return N(C);
                      });
                    }
                  }),
                  x.on('click', function (T) {
                    var C = null,
                      E = T.target,
                      P = u.default(E);
                    if ((P.getNodeName() === 'HR' && (C = P), !!C)) {
                      y.selection.createRangeByElem(C), y.selection.restoreSelection();
                      var I = S.splitLineEvents;
                      (0, i.default)(I).call(I, function (M) {
                        return M(C);
                      });
                    }
                  }),
                  y.$toolbarElem.on('click', function (T) {
                    var C = S.toolbarClickEvents;
                    (0, i.default)(C).call(C, function (E) {
                      return E(T);
                    });
                  }),
                  y.$textContainerElem.on('mousedown', function (T) {
                    var C = T.target,
                      E = u.default(C);
                    if (E.hasClass('w-e-img-drag-rb')) {
                      var P = S.imgDragBarMouseDownEvents;
                      (0, i.default)(P).call(P, function (I) {
                        return I();
                      });
                    }
                  }),
                  x.on('click', function (T) {
                    var C = null,
                      E = T.target;
                    if (((C = u.default(E).parentUntilEditor('TABLE', y, E)), !!C)) {
                      var P = S.tableClickEvents;
                      (0, i.default)(P).call(P, function (I) {
                        return I(C, T);
                      });
                    }
                  }),
                  x.on('keydown', function (T) {
                    if (T.keyCode === 13) {
                      var C = S.enterDownEvents;
                      (0, i.default)(C).call(C, function (E) {
                        return E(T);
                      });
                    }
                  }),
                  x.on('click', function (T) {
                    var C = null,
                      E = T.target,
                      P = u.default(E);
                    if ((P.getNodeName() === 'VIDEO' && (T.stopPropagation(), (C = P)), !!C)) {
                      var I = S.videoClickEvents;
                      (0, i.default)(I).call(I, function (M) {
                        return M(C);
                      });
                    }
                  });
              }),
              A
            );
          })();
        n.default = m;
      },
      function (o, n, t) {
        var e = t(284);
        o.exports = e;
      },
      function (o, n, t) {
        var e = t(285),
          r = Array.prototype;
        o.exports = function (a) {
          var i = a.find;
          return a === r || (a instanceof Array && i === r.find) ? e : i;
        };
      },
      function (o, n, t) {
        t(286);
        var e = t(15);
        o.exports = e('Array').find;
      },
      function (o, n, t) {
        var e = t(5),
          r = t(32).find,
          a = t(82),
          i = t(22),
          f = 'find',
          g = !0,
          s = i(f);
        f in [] &&
          Array(1)[f](function () {
            g = !1;
          }),
          e(
            { target: 'Array', proto: !0, forced: g || !s },
            {
              find: function (u) {
                return r(this, u, arguments.length > 1 ? arguments[1] : void 0);
              },
            },
          ),
          a(f);
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(288)),
          f = a.__importStar(t(289)),
          g = a.__importDefault(t(290)),
          s = a.__importDefault(t(291)),
          p = a.__importDefault(t(298));
        function u(l) {
          var v = l.editor,
            c = l.eventHooks;
          i.default(v, c.enterUpEvents, c.enterDownEvents),
            f.default(v, c.deleteUpEvents, c.deleteDownEvents),
            f.cutToKeepP(v, c.keyupEvents),
            g.default(v, c.tabDownEvents),
            s.default(v, c.pasteEvents),
            p.default(v, c.imgClickEvents);
        }
        n.default = u;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(27));
        (0, r.default)(n, '__esModule', { value: !0 });
        var i = t(2),
          f = t(7),
          g = i.__importDefault(t(3));
        function s(p, u, l) {
          function v(d) {
            var m,
              A = g.default(f.EMPTY_P);
            if ((A.insertBefore(d), (0, a.default)((m = d.html())).call(m, '<img') >= 0)) {
              A.remove();
              return;
            }
            p.selection.createRangeByElem(A, !0, !0), p.selection.restoreSelection(), d.remove();
          }
          function c() {
            var d = p.$textElem,
              m = p.selection.getSelectionContainerElem(),
              A = m.parent();
            if (A.html() === '<code><br></code>') {
              v(A);
              return;
            }
            if (m.getNodeName() === 'FONT' && m.text() === '' && m.attr('face') === 'monospace') {
              v(A);
              return;
            }
            if (A.equal(d)) {
              var y = m.getNodeName();
              (y === 'P' && m.attr('data-we-empty-p') === null) || m.text() || v(m);
            }
          }
          u.push(c);
          function h(d) {
            var m;
            p.selection.saveRange(
              (m = getSelection()) === null || m === void 0 ? void 0 : m.getRangeAt(0),
            );
            var A = p.selection.getSelectionContainerElem();
            A.id === p.textElemId && (d.preventDefault(), p.cmd.do('insertHTML', '<p><br></p>'));
          }
          l.push(h);
        }
        n.default = s;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(17)),
          i = e(t(28));
        (0, r.default)(n, '__esModule', { value: !0 }), (n.cutToKeepP = void 0);
        var f = t(2),
          g = t(7),
          s = f.__importDefault(t(3));
        function p(l, v, c) {
          function h() {
            var m = l.$textElem,
              A = l.$textElem.html(),
              y = l.$textElem.text(),
              x = (0, a.default)(A).call(A),
              S = ['<p><br></p>', '<br>', '<p data-we-empty-p=""></p>', g.EMPTY_P];
            if (/^\s*$/.test(y) && (!x || (0, i.default)(S).call(S, x))) {
              m.html(g.EMPTY_P);
              var D = m.getNode();
              l.selection.createRangeByElems(D.childNodes[0], D.childNodes[0]);
              var T = l.selection.getSelectionContainerElem();
              l.selection.restoreSelection(), l.selection.moveCursor(T.getNode(), 0);
            }
          }
          v.push(h);
          function d(m) {
            var A,
              y = l.$textElem,
              x = (0, a.default)((A = y.html().toLowerCase())).call(A);
            if (x === g.EMPTY_P) {
              m.preventDefault();
              return;
            }
          }
          c.push(d);
        }
        function u(l, v) {
          function c(h) {
            var d;
            if (h.keyCode === 88) {
              var m = l.$textElem,
                A = (0, a.default)((d = m.html().toLowerCase())).call(d);
              if (!A || A === '<br>') {
                var y = s.default(g.EMPTY_P);
                m.html(' '),
                  m.append(y),
                  l.selection.createRangeByElem(y, !1, !0),
                  l.selection.restoreSelection(),
                  l.selection.moveCursor(y.getNode(), 0);
              }
            }
          }
          v.push(c);
        }
        (n.cutToKeepP = u), (n.default = p);
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 });
        function a(i, f) {
          function g() {
            if (i.cmd.queryCommandSupported('insertHTML')) {
              var s = i.selection.getSelectionContainerElem();
              if (s) {
                var p = s.parent(),
                  u = s.getNodeName(),
                  l = p.getNodeName();
                u == 'CODE' || l === 'CODE' || l === 'PRE' || /hljs/.test(l)
                  ? i.cmd.do('insertHTML', i.config.languageTab)
                  : i.cmd.do('insertHTML', '&nbsp;&nbsp;&nbsp;&nbsp;');
              }
            }
          }
          f.push(g);
        }
        n.default = a;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(17)),
          i = e(t(4));
        (0, r.default)(n, '__esModule', { value: !0 });
        var f = t(131),
          g = t(6),
          s = t(7);
        function p(h) {
          var d,
            m = (0, a.default)(
              (d = h.replace(/<div>/gim, '<p>').replace(/<\/div>/gim, '</p>')),
            ).call(d),
            A = document.createElement('div');
          return (A.innerHTML = m), A.innerHTML.replace(/<p><\/p>/gim, '');
        }
        function u(h) {
          var d = h
            .replace(
              /<br>|<br\/>/gm,
              `
`,
            )
            .replace(/<[^>]+>/gm, '');
          return d;
        }
        function l(h) {
          var d;
          if (h === '') return !1;
          var m = document.createElement('div');
          return (
            (m.innerHTML = h),
            ((d = m.firstChild) === null || d === void 0 ? void 0 : d.nodeName) === 'P'
          );
        }
        function v(h) {
          if (!(h != null && h.length)) return !1;
          var d = h.elems[0];
          return d.nodeName === 'P' && d.innerHTML === '<br>';
        }
        function c(h, d) {
          function m(A) {
            var y = h.config,
              x = y.pasteFilterStyle,
              S = y.pasteIgnoreImg,
              D = y.pasteTextHandle,
              T = f.getPasteHtml(A, x, S),
              C = f.getPasteText(A);
            C = C.replace(/\n/gm, '<br>');
            var E = h.selection.getSelectionContainerElem();
            if (E) {
              var P = E == null ? void 0 : E.getNodeName(),
                I = E == null ? void 0 : E.getNodeTop(h),
                M = '';
              if (
                (I.elems[0] && (M = I == null ? void 0 : I.getNodeName()),
                P === 'CODE' || M === 'PRE')
              ) {
                D && g.isFunction(D) && (C = '' + (D(C) || '')), h.cmd.do('insertHTML', u(C));
                return;
              }
              if (s.urlRegex.test(C) && x) {
                D && g.isFunction(D) && (C = '' + (D(C) || ''));
                var N = C.replace(s.urlRegex, function (K) {
                    return '<a href="' + K + '" target="_blank">' + K + '</a>';
                  }),
                  L = h.selection.getRange(),
                  B = document.createElement('div'),
                  F = document.createDocumentFragment();
                if (((B.innerHTML = N), L == null)) return;
                for (; B.childNodes.length; ) F.append(B.childNodes[0]);
                var w = F.querySelectorAll('a');
                (0, i.default)(w).call(w, function (K) {
                  K.innerText = K.href;
                }),
                  L.insertNode && (L.deleteContents(), L.insertNode(F)),
                  h.selection.clearWindowSelectionRange();
                return;
              }
              if (T)
                try {
                  D && g.isFunction(D) && (T = '' + (D(T) || ''));
                  var b = /[\.\#\@]?\w+[ ]+\{[^}]*\}/.test(T);
                  if (b && x) h.cmd.do('insertHTML', '' + p(C));
                  else {
                    var H = p(T);
                    if (l(H)) {
                      var j = h.$textElem;
                      if ((h.cmd.do('insertHTML', H), j.equal(E))) {
                        h.selection.createEmptyRange();
                        return;
                      }
                      v(I) && I.remove();
                    } else h.cmd.do('insertHTML', H);
                  }
                } catch (K) {
                  D && g.isFunction(D) && (C = '' + (D(C) || '')),
                    h.cmd.do('insertHTML', '' + p(C));
                }
            }
          }
          d.push(m);
        }
        n.default = c;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(17)),
          i = e(t(4)),
          f = e(t(28));
        (0, r.default)(n, '__esModule', { value: !0 });
        var g = t(2),
          s = t(293),
          p = g.__importDefault(t(297));
        function u(d) {
          var m = /<span>.*?<\/span>/gi,
            A = /<span>(.*?)<\/span>/;
          return d.replace(m, function (y) {
            var x = y.match(A);
            return x == null ? '' : x[1];
          });
        }
        function l(d, m) {
          var A;
          return (
            (d = (0, a.default)((A = d.toLowerCase())).call(A)),
            !!(s.IGNORE_TAGS.has(d) || (m && d === 'img'))
          );
        }
        function v(d, m) {
          var A = '';
          A = '<' + d;
          var y = [];
          (0, i.default)(m).call(m, function (S) {
            y.push(S.name + '="' + S.value + '"');
          }),
            y.length > 0 && (A = A + ' ' + y.join(' '));
          var x = s.EMPTY_TAGS.has(d);
          return (A = A + (x ? '/' : '') + '>'), A;
        }
        function c(d) {
          return '</' + d + '>';
        }
        function h(d, m, A) {
          m === void 0 && (m = !0), A === void 0 && (A = !1);
          var y = [],
            x = '';
          function S(E) {
            (E = (0, a.default)(E).call(E)), E && (s.EMPTY_TAGS.has(E) || (x = E));
          }
          function D() {
            x = '';
          }
          var T = new p.default();
          T.parse(d, {
            startElement: function (P, I) {
              if ((S(P), !l(P, A))) {
                var M = s.NECESSARY_ATTRS.get(P) || [],
                  N = [];
                (0, i.default)(I).call(I, function (B) {
                  var F = B.name;
                  if (F === 'style') {
                    m || N.push(B);
                    return;
                  }
                  (0, f.default)(M).call(M, F) !== !1 && N.push(B);
                });
                var L = v(P, N);
                y.push(L);
              }
            },
            characters: function (P) {
              P && (l(x, A) || y.push(P));
            },
            endElement: function (P) {
              if (!l(P, A)) {
                var I = c(P);
                y.push(I), D();
              }
            },
            comment: function (P) {
              S(P);
            },
          });
          var C = y.join('');
          return (C = u(C)), C;
        }
        n.default = h;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(132)),
          i = e(t(121));
        (0, r.default)(n, '__esModule', { value: !0 }),
          (n.TOP_LEVEL_TAGS = n.EMPTY_TAGS = n.NECESSARY_ATTRS = n.IGNORE_TAGS = void 0),
          (n.IGNORE_TAGS = new a.default([
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
          (n.NECESSARY_ATTRS = new i.default([
            ['img', ['src', 'alt']],
            ['a', ['href', 'target']],
            ['td', ['colspan', 'rowspan']],
            ['th', ['colspan', 'rowspan']],
          ])),
          (n.EMPTY_TAGS = new a.default([
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
          (n.TOP_LEVEL_TAGS = new a.default([
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
      function (o, n, t) {
        var e = t(295);
        o.exports = e;
      },
      function (o, n, t) {
        t(296), t(61), t(50), t(54);
        var e = t(9);
        o.exports = e.Set;
      },
      function (o, n, t) {
        var e = t(122),
          r = t(124);
        o.exports = e(
          'Set',
          function (a) {
            return function () {
              return a(this, arguments.length ? arguments[0] : void 0);
            };
          },
          r,
        );
      },
      function (o, n) {
        function t() {}
        (t.prototype = {
          handler: null,
          startTagRe:
            /^<([^>\s\/]+)((\s+[^=>\s]+(\s*=\s*((\"[^"]*\")|(\'[^']*\')|[^>\s]+))?)*)\s*\/?\s*>/m,
          endTagRe: /^<\/([^>\s]+)[^>]*>/m,
          attrRe: /([^=\s]+)(\s*=\s*((\"([^"]*)\")|(\'([^']*)\')|[^>\s]+))?/gm,
          parse: function (e, r) {
            r && (this.contentHandler = r);
            for (var a, i, f, g = !1, s = this; e.length > 0; )
              e.substring(0, 4) == '<!--'
                ? ((f = e.indexOf('-->')),
                  f != -1
                    ? (this.contentHandler.comment(e.substring(4, f)),
                      (e = e.substring(f + 3)),
                      (g = !1))
                    : (g = !0))
                : e.substring(0, 2) == '</'
                ? this.endTagRe.test(e)
                  ? ((a = RegExp.lastMatch),
                    (i = RegExp.rightContext),
                    a.replace(this.endTagRe, function () {
                      return s.parseEndTag.apply(s, arguments);
                    }),
                    (e = i),
                    (g = !1))
                  : (g = !0)
                : e.charAt(0) == '<' &&
                  (this.startTagRe.test(e)
                    ? ((a = RegExp.lastMatch),
                      (i = RegExp.rightContext),
                      a.replace(this.startTagRe, function () {
                        return s.parseStartTag.apply(s, arguments);
                      }),
                      (e = i),
                      (g = !1))
                    : (g = !0)),
                g &&
                  ((f = e.indexOf('<')),
                  f == -1
                    ? (this.contentHandler.characters(e), (e = ''))
                    : (this.contentHandler.characters(e.substring(0, f)), (e = e.substring(f)))),
                (g = !0);
          },
          parseStartTag: function (e, r, a) {
            var i = this.parseAttributes(r, a);
            this.contentHandler.startElement(r, i);
          },
          parseEndTag: function (e, r) {
            this.contentHandler.endElement(r);
          },
          parseAttributes: function (e, r) {
            var a = this,
              i = [];
            return (
              r.replace(this.attrRe, function (f, g, s, p, u, l, v, c) {
                i.push(a.parseAttribute(e, f, g, s, p, u, l, v, c));
              }),
              i
            );
          },
          parseAttribute: function (e, r, a) {
            var i = '';
            arguments[7]
              ? (i = arguments[8])
              : arguments[5]
              ? (i = arguments[6])
              : arguments[3] && (i = arguments[4]);
            var f = !i && !arguments[3];
            return { name: a, value: f ? null : i };
          },
        }),
          (o.exports = t);
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 });
        function a(i, f) {
          function g(s) {
            i.selection.createRangeByElem(s), i.selection.restoreSelection();
          }
          f.push(g);
        }
        n.default = a;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(4));
        (0, r.default)(n, '__esModule', { value: !0 });
        var i = t(2),
          f = t(6),
          g = i.__importDefault(t(3));
        function s(p) {
          var u = [],
            l = p.childNodes() || [];
          return (
            (0, a.default)(l).call(l, function (v) {
              var c,
                h = v.nodeType;
              if ((h === 3 && ((c = v.textContent || ''), (c = f.replaceHtmlSymbol(c))), h === 1)) {
                (c = {}), (c = c), (c.tag = v.nodeName.toLowerCase());
                for (var d = [], m = v.attributes, A = m.length || 0, y = 0; y < A; y++) {
                  var x = m[y];
                  d.push({ name: x.name, value: x.value });
                }
                (c.attrs = d), (c.children = s(g.default(v)));
              }
              c && u.push(c);
            }),
            u
          );
        }
        n.default = s;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(92)),
          a = e(t(1)),
          i = e(t(4));
        (0, a.default)(n, '__esModule', { value: !0 });
        var f = t(2),
          g = f.__importDefault(t(3));
        function s(p, u) {
          u === void 0 && (u = document.createElement('div'));
          var l = u;
          return (
            (0, i.default)(p).call(p, function (v) {
              var c;
              if (
                (typeof v == 'string' && (c = document.createTextNode(v)),
                (0, r.default)(v) === 'object')
              ) {
                var h;
                (c = document.createElement(v.tag)),
                  (0, i.default)((h = v.attrs)).call(h, function (d) {
                    g.default(c).attr(d.name, d.value);
                  }),
                  v.children && v.children.length > 0 && s(v.children, c.getRootNode());
              }
              c && l.appendChild(c);
            }),
            g.default(l)
          );
        }
        n.default = s;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(89)),
          i = e(t(70)),
          f = e(t(28)),
          g = e(t(302)),
          s = e(t(4)),
          p = e(t(94)),
          u = e(t(133)),
          l = e(t(46)),
          v = e(t(57));
        (0, r.default)(n, '__esModule', { value: !0 });
        var c = t(2),
          h = c.__importDefault(t(87)),
          d = c.__importDefault(t(314)),
          m = c.__importDefault(t(3)),
          A = (function () {
            function y(x) {
              (this.editor = x), (this.menuList = []), (this.constructorList = d.default);
            }
            return (
              (y.prototype.extend = function (x, S) {
                !S || typeof S != 'function' || (this.constructorList[x] = S);
              }),
              (y.prototype.init = function () {
                var x,
                  S,
                  D = this,
                  T = this.editor.config,
                  C = T.excludeMenus;
                (0, a.default)(C) === !1 && (C = []),
                  (T.menus = (0, i.default)((x = T.menus)).call(x, function (F) {
                    return (0, f.default)(C).call(C, F) === !1;
                  }));
                var E = (0, g.default)(h.default.globalCustomMenuConstructorList);
                (E = (0, i.default)(E).call(E, function (F) {
                  return (0, f.default)(C).call(C, F);
                })),
                  (0, s.default)(E).call(E, function (F) {
                    delete h.default.globalCustomMenuConstructorList[F];
                  }),
                  (0, s.default)((S = T.menus)).call(S, function (F) {
                    var w = D.constructorList[F];
                    D._initMenuList(F, w);
                  });
                for (
                  var P = 0, I = (0, p.default)(h.default.globalCustomMenuConstructorList);
                  P < I.length;
                  P++
                ) {
                  var M = I[P],
                    N = M[0],
                    L = M[1],
                    B = L;
                  this._initMenuList(N, B);
                }
                this._addToToolbar(), T.showMenuTooltips && this._bindMenuTooltips();
              }),
              (y.prototype._initMenuList = function (x, S) {
                var D;
                if (!(S == null || typeof S != 'function'))
                  if (
                    (0, u.default)((D = this.menuList)).call(D, function (C) {
                      return C.key === x;
                    })
                  )
                    console.warn('菜单名称重复:' + x);
                  else {
                    var T = new S(this.editor);
                    (T.key = x), this.menuList.push(T);
                  }
              }),
              (y.prototype._bindMenuTooltips = function () {
                var x = this.editor,
                  S = x.$toolbarElem,
                  D = x.config,
                  T = D.menuTooltipPosition,
                  C = m.default(
                    '<div class="w-e-menu-tooltip w-e-menu-tooltip-' +
                      T +
                      `">
            <div class="w-e-menu-tooltip-item-wrapper">
              <div></div>
            </div>
          </div>`,
                  );
                C.css('visibility', 'hidden'),
                  S.append(C),
                  C.css('z-index', x.zIndex.get('tooltip'));
                var E = 0;
                function P() {
                  E && clearTimeout(E);
                }
                function I() {
                  P(), C.css('visibility', 'hidden');
                }
                S.on('mouseover', function (M) {
                  var N = M.target,
                    L = m.default(N),
                    B,
                    F;
                  if (L.isContain(S)) {
                    I();
                    return;
                  }
                  if (L.parentUntil('.w-e-droplist') != null) I();
                  else if (L.attr('data-title')) (B = L.attr('data-title')), (F = L);
                  else {
                    var w = L.parentUntil('.w-e-menu');
                    w != null && ((B = w.attr('data-title')), (F = w));
                  }
                  if (B && F) {
                    P();
                    var b = F.getOffsetData();
                    C.text(x.i18next.t('menus.title.' + B));
                    var H = C.getOffsetData(),
                      j = b.left + b.width / 2 - H.width / 2;
                    C.css('left', j + 'px'),
                      T === 'up'
                        ? C.css('top', b.top - H.height - 8 + 'px')
                        : T === 'down' && C.css('top', b.top + b.height + 8 + 'px'),
                      (E = (0, l.default)(function () {
                        C.css('visibility', 'visible');
                      }, 200));
                  } else I();
                }).on('mouseleave', function () {
                  I();
                });
              }),
              (y.prototype._addToToolbar = function () {
                var x,
                  S = this.editor,
                  D = S.$toolbarElem;
                (0, s.default)((x = this.menuList)).call(x, function (T) {
                  var C = T.$elem;
                  C && D.append(C);
                });
              }),
              (y.prototype.menuFind = function (x) {
                for (var S = this.menuList, D = 0, T = S.length; D < T; D++)
                  if (S[D].key === x) return S[D];
                return S[0];
              }),
              (y.prototype.changeActive = function () {
                var x;
                (0, s.default)((x = this.menuList)).call(x, function (S) {
                  var D;
                  (0, l.default)((0, v.default)((D = S.tryChangeActive)).call(D, S), 100);
                });
              }),
              y
            );
          })();
        n.default = A;
      },
      function (o, n, t) {
        o.exports = t(303);
      },
      function (o, n, t) {
        var e = t(304);
        o.exports = e;
      },
      function (o, n, t) {
        t(305);
        var e = t(9);
        o.exports = e.Object.keys;
      },
      function (o, n, t) {
        var e = t(5),
          r = t(31),
          a = t(52),
          i = t(11),
          f = i(function () {
            a(1);
          });
        e(
          { target: 'Object', stat: !0, forced: f },
          {
            keys: function (s) {
              return a(r(s));
            },
          },
        );
      },
      function (o, n, t) {
        var e = t(307);
        o.exports = e;
      },
      function (o, n, t) {
        t(308);
        var e = t(9);
        o.exports = e.Object.entries;
      },
      function (o, n, t) {
        var e = t(5),
          r = t(309).entries;
        e(
          { target: 'Object', stat: !0 },
          {
            entries: function (i) {
              return r(i);
            },
          },
        );
      },
      function (o, n, t) {
        var e = t(14),
          r = t(52),
          a = t(30),
          i = t(59).f,
          f = function (g) {
            return function (s) {
              for (var p = a(s), u = r(p), l = u.length, v = 0, c = [], h; l > v; )
                (h = u[v++]), (!e || i.call(p, h)) && c.push(g ? [h, p[h]] : p[h]);
              return c;
            };
          };
        o.exports = { entries: f(!0), values: f(!1) };
      },
      function (o, n, t) {
        var e = t(311);
        o.exports = e;
      },
      function (o, n, t) {
        var e = t(312),
          r = Array.prototype;
        o.exports = function (a) {
          var i = a.some;
          return a === r || (a instanceof Array && i === r.some) ? e : i;
        };
      },
      function (o, n, t) {
        t(313);
        var e = t(15);
        o.exports = e('Array').some;
      },
      function (o, n, t) {
        var e = t(5),
          r = t(32).some,
          a = t(67),
          i = t(22),
          f = a('some'),
          g = i('some');
        e(
          { target: 'Array', proto: !0, forced: !f || !g },
          {
            some: function (p) {
              return r(this, p, arguments.length > 1 ? arguments[1] : void 0);
            },
          },
        );
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(315)),
          f = a.__importDefault(t(316)),
          g = a.__importDefault(t(321)),
          s = a.__importDefault(t(326)),
          p = a.__importDefault(t(327)),
          u = a.__importDefault(t(328)),
          l = a.__importDefault(t(329)),
          v = a.__importDefault(t(331)),
          c = a.__importDefault(t(333)),
          h = a.__importDefault(t(334)),
          d = a.__importDefault(t(337)),
          m = a.__importDefault(t(338)),
          A = a.__importDefault(t(339)),
          y = a.__importDefault(t(350)),
          x = a.__importDefault(t(365)),
          S = a.__importDefault(t(369)),
          D = a.__importDefault(t(137)),
          T = a.__importDefault(t(378)),
          C = a.__importDefault(t(380)),
          E = a.__importDefault(t(381)),
          P = a.__importDefault(t(382)),
          I = a.__importDefault(t(401)),
          M = a.__importDefault(t(406)),
          N = a.__importDefault(t(409));
        n.default = {
          bold: i.default,
          head: f.default,
          italic: s.default,
          link: g.default,
          underline: p.default,
          strikeThrough: u.default,
          fontName: l.default,
          fontSize: v.default,
          justify: c.default,
          quote: h.default,
          backColor: d.default,
          foreColor: m.default,
          video: A.default,
          image: y.default,
          indent: x.default,
          emoticon: S.default,
          list: D.default,
          lineHeight: T.default,
          undo: C.default,
          redo: E.default,
          table: P.default,
          code: I.default,
          splitLine: M.default,
          todo: N.default,
        };
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(23)),
          f = a.__importDefault(t(3)),
          g = (function (s) {
            a.__extends(p, s);
            function p(u) {
              var l = this,
                v = f.default(`<div class="w-e-menu" data-title="加粗">
                <i class="w-e-icon-bold"></i>
            </div>`);
              return (l = s.call(this, v, u) || this), l;
            }
            return (
              (p.prototype.clickHandler = function () {
                var u = this.editor,
                  l = u.selection.isSelectionEmpty();
                l && u.selection.createEmptyRange(),
                  u.cmd.do('bold'),
                  l && (u.selection.collapseRange(), u.selection.restoreSelection());
              }),
              (p.prototype.tryChangeActive = function () {
                var u = this.editor;
                u.cmd.queryCommandState('bold') ? this.active() : this.unActive();
              }),
              p
            );
          })(i.default);
        n.default = g;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(27)),
          i = e(t(29)),
          f = e(t(4)),
          g = e(t(317)),
          s = e(t(28));
        (0, r.default)(n, '__esModule', { value: !0 });
        var p = t(2),
          u = p.__importDefault(t(24)),
          l = p.__importDefault(t(3)),
          v = t(6),
          c = t(7),
          h = (function (d) {
            p.__extends(m, d);
            function m(A) {
              var y = this,
                x = l.default(
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
                  clickHandler: function (C) {
                    y.command(C);
                  },
                };
              y = d.call(this, x, A, S) || this;
              var D = A.config.onCatalogChange;
              return D && ((y.oldCatalogs = []), y.addListenerCatalog(), y.getCatalogs()), y;
            }
            return (
              (m.prototype.command = function (A) {
                var y = this.editor,
                  x = y.selection.getSelectionContainerElem();
                if (x && y.$textElem.equal(x)) this.setMultilineHead(A);
                else {
                  var S;
                  if (
                    (0, a.default)(
                      (S = ['OL', 'UL', 'LI', 'TABLE', 'TH', 'TR', 'CODE', 'HR']),
                    ).call(S, l.default(x).getNodeName()) > -1
                  )
                    return;
                  y.cmd.do('formatBlock', A);
                }
                A !== '<p>' && this.addUidForSelectionElem();
              }),
              (m.prototype.addUidForSelectionElem = function () {
                var A = this.editor,
                  y = A.selection.getSelectionContainerElem(),
                  x = v.getRandomCode();
                l.default(y).attr('id', x);
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
                  x = A.config.onCatalogChange,
                  S = (0, i.default)(y).call(y, 'h1,h2,h3,h4,h5'),
                  D = [];
                (0, f.default)(S).call(S, function (T, C) {
                  var E = l.default(T),
                    P = E.attr('id'),
                    I = E.getNodeName(),
                    M = E.text();
                  P || ((P = v.getRandomCode()), E.attr('id', P)),
                    M && D.push({ tag: I, id: P, text: M });
                }),
                  (0, g.default)(this.oldCatalogs) !== (0, g.default)(D) &&
                    ((this.oldCatalogs = D), x && x(D));
              }),
              (m.prototype.setMultilineHead = function (A) {
                var y = this,
                  x,
                  S,
                  D = this.editor,
                  T = D.selection,
                  C =
                    (x = T.getSelectionContainerElem()) === null || x === void 0
                      ? void 0
                      : x.elems[0],
                  E = ['IMG', 'VIDEO', 'TABLE', 'TH', 'TR', 'UL', 'OL', 'PRE', 'HR', 'BLOCKQUOTE'],
                  P = l.default(T.getSelectionStartElem()),
                  I = l.default(T.getSelectionEndElem());
                I.elems[0].outerHTML === l.default(c.EMPTY_P).elems[0].outerHTML &&
                  !I.elems[0].nextSibling &&
                  (I = I.prev());
                var M = [];
                M.push(P.getNodeTop(D));
                var N = [],
                  L =
                    (S = T.getRange()) === null || S === void 0
                      ? void 0
                      : S.commonAncestorContainer.childNodes;
                L == null ||
                  (0, f.default)(L).call(L, function (w, b) {
                    w === M[0].getNode() && N.push(b), w === I.getNodeTop(D).getNode() && N.push(b);
                  });
                for (var B = 0; M[B].getNode() !== I.getNodeTop(D).getNode(); ) {
                  if (!M[B].elems[0]) return;
                  var F = l.default(M[B].next().getNode());
                  M.push(F), B++;
                }
                M == null ||
                  (0, f.default)(M).call(M, function (w, b) {
                    if (!y.hasTag(w, E)) {
                      var H = l.default(A),
                        j = w.parent().getNode();
                      H.html('' + w.html()), j.insertBefore(H.getNode(), w.getNode()), w.remove();
                    }
                  }),
                  T.createRangeByElems(C.children[N[0]], C.children[N[1]]);
              }),
              (m.prototype.hasTag = function (A, y) {
                var x = this,
                  S;
                if (!A) return !1;
                if ((0, s.default)(y).call(y, A == null ? void 0 : A.getNodeName())) return !0;
                var D = !1;
                return (
                  (S = A.children()) === null ||
                    S === void 0 ||
                    (0, f.default)(S).call(S, function (T) {
                      D = x.hasTag(l.default(T), y);
                    }),
                  D
                );
              }),
              (m.prototype.tryChangeActive = function () {
                var A = this.editor,
                  y = /^h/i,
                  x = A.cmd.queryCommandValue('formatBlock');
                y.test(x) ? this.active() : this.unActive();
              }),
              m
            );
          })(u.default);
        n.default = h;
      },
      function (o, n, t) {
        o.exports = t(318);
      },
      function (o, n, t) {
        var e = t(319);
        o.exports = e;
      },
      function (o, n, t) {
        t(320);
        var e = t(9);
        e.JSON || (e.JSON = { stringify: JSON.stringify }),
          (o.exports = function (a, i, f) {
            return e.JSON.stringify.apply(null, arguments);
          });
      },
      function (o, n, t) {
        var e = t(5),
          r = t(36),
          a = t(11),
          i = r('JSON', 'stringify'),
          f = /[\uD800-\uDFFF]/g,
          g = /^[\uD800-\uDBFF]$/,
          s = /^[\uDC00-\uDFFF]$/,
          p = function (l, v, c) {
            var h = c.charAt(v - 1),
              d = c.charAt(v + 1);
            return (g.test(l) && !s.test(d)) || (s.test(l) && !g.test(h))
              ? '\\u' + l.charCodeAt(0).toString(16)
              : l;
          },
          u = a(function () {
            return i('\uDF06\uD834') !== '"\\udf06\\ud834"' || i('\uDEAD') !== '"\\udead"';
          });
        i &&
          e(
            { target: 'JSON', stat: !0, forced: u },
            {
              stringify: function (v, c, h) {
                var d = i.apply(null, arguments);
                return typeof d == 'string' ? d.replace(f, p) : d;
              },
            },
          );
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(17));
        (0, r.default)(n, '__esModule', { value: !0 });
        var i = t(2),
          f = i.__importDefault(t(38)),
          g = i.__importDefault(t(3)),
          s = i.__importDefault(t(322)),
          p = i.__importStar(t(96)),
          u = i.__importDefault(t(33)),
          l = i.__importDefault(t(324)),
          v = t(7),
          c = (function (h) {
            i.__extends(d, h);
            function d(m) {
              var A = this,
                y = g.default(
                  '<div class="w-e-menu" data-title="链接"><i class="w-e-icon-link"></i></div>',
                );
              return (A = h.call(this, y, m) || this), l.default(m), A;
            }
            return (
              (d.prototype.clickHandler = function () {
                var m = this.editor,
                  A,
                  y = m.selection.getSelectionContainerElem(),
                  x = m.$textElem,
                  S = x.html(),
                  D = (0, a.default)(S).call(S);
                if (D === v.EMPTY_P) {
                  var T = x.children();
                  m.selection.createRangeByElem(T, !0, !0),
                    (y = m.selection.getSelectionContainerElem());
                }
                if (!(y && m.$textElem.equal(y)))
                  if (this.isActive) {
                    var C = '',
                      E = '';
                    if (((A = m.selection.getSelectionContainerElem()), !A)) return;
                    if (A.getNodeName() !== 'A') {
                      var P = p.getParentNodeA(A);
                      A = g.default(P);
                    }
                    (C = A.elems[0].innerText), (E = A.attr('href')), this.createPanel(C, E);
                  } else
                    m.selection.isSelectionEmpty()
                      ? this.createPanel('', '')
                      : this.createPanel(m.selection.getSelectionText(), '');
              }),
              (d.prototype.createPanel = function (m, A) {
                var y = s.default(this.editor, m, A),
                  x = new u.default(this, y);
                x.create();
              }),
              (d.prototype.tryChangeActive = function () {
                var m = this.editor;
                p.default(m) ? this.active() : this.unActive();
              }),
              d
            );
          })(f.default);
        n.default = c;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(28)),
          i = e(t(17)),
          f = e(t(29));
        (0, r.default)(n, '__esModule', { value: !0 });
        var g = t(2),
          s = t(6),
          p = g.__importDefault(t(3)),
          u = g.__importStar(t(96)),
          l = t(323);
        function v(c, h, d) {
          var m = s.getRandom('input-link'),
            A = s.getRandom('input-text'),
            y = s.getRandom('btn-ok'),
            x = s.getRandom('btn-del'),
            S = u.default(c) ? 'inline-block' : 'none',
            D;
          function T() {
            if (u.default(c)) {
              var M = c.selection.getSelectionContainerElem();
              M && (c.selection.createRangeByElem(M), c.selection.restoreSelection(), (D = M));
            }
          }
          function C(M, N) {
            var L = M.replace(/</g, '&lt;').replace(/>/g, '&gt;'),
              B = p.default('<a target="_blank">' + L + '</a>'),
              F = B.elems[0];
            (F.innerText = M), (F.href = N), u.default(c) && T(), c.cmd.do('insertElem', B);
          }
          function E() {
            if (u.default(c))
              if ((T(), D.getNodeName() === 'A')) {
                var M,
                  N = D.elems[0],
                  L = N.parentElement;
                L && (0, a.default)((M = u.EXTRA_TAG)).call(M, L.nodeName)
                  ? (L.innerHTML = N.innerHTML)
                  : c.cmd.do('insertHTML', '<span>' + N.innerHTML + '</span>');
              } else {
                var B = u.getParentNodeA(D),
                  F = B.innerHTML;
                c.cmd.do('insertHTML', '<span>' + F + '</span>');
              }
          }
          function P(M, N) {
            var L = c.config.linkCheck(M, N);
            if (L !== void 0) {
              if (L === !0) return !0;
              c.config.customAlert(L, 'warning');
            }
            return !1;
          }
          var I = {
            width: 300,
            height: 0,
            tabs: [
              {
                title: c.i18next.t('menus.panelMenus.link.链接'),
                tpl:
                  `<div>
                        <input
                            id="` +
                  A +
                  `"
                            type="text"
                            class="block"
                            placeholder="` +
                  c.i18next.t('menus.panelMenus.link.链接文字') +
                  `"/>
                        </td>
                        <input
                            id="` +
                  m +
                  `"
                            type="text"
                            class="block"
                            placeholder="` +
                  c.i18next.t('如') +
                  ` https://..."/>
                        </td>
                        <div class="w-e-button-container">
                            <button type="button" id="` +
                  y +
                  `" class="right">
                                ` +
                  c.i18next.t('插入') +
                  `
                            </button>
                            <button type="button" id="` +
                  x +
                  '" class="gray right" style="display:' +
                  S +
                  `">
                                ` +
                  c.i18next.t('menus.panelMenus.link.取消链接') +
                  `
                            </button>
                        </div>
                    </div>`,
                events: [
                  {
                    selector: '#' + y,
                    type: 'click',
                    fn: function () {
                      var N,
                        L,
                        B,
                        F,
                        w,
                        b = c.selection.getSelectionContainerElem(),
                        H = b == null ? void 0 : b.elems[0];
                      c.selection.restoreSelection();
                      var j = c.selection.getSelectionRangeTopNodes()[0].getNode(),
                        K = window.getSelection(),
                        U = p.default('#' + m),
                        W = p.default('#' + A),
                        z = (0, i.default)((N = U.val())).call(N),
                        $ = (0, i.default)((L = W.val())).call(L),
                        Q = '';
                      K &&
                        !(K != null && K.isCollapsed) &&
                        (Q =
                          (F = l.insertHtml(K, j)) === null || F === void 0
                            ? void 0
                            : (0, i.default)(F).call(F));
                      var J = Q == null ? void 0 : Q.replace(/<.*?>/g, ''),
                        k = (w = J == null ? void 0 : J.length) !== null && w !== void 0 ? w : 0;
                      if (k <= $.length) {
                        var tt = $.substring(0, k),
                          rt = $.substring(k);
                        J === tt && ($ = J + rt);
                      }
                      if (z && ($ || ($ = z), !!P($, z))) {
                        if ((H == null ? void 0 : H.nodeName) === 'A')
                          return H.setAttribute('href', z), (H.innerText = $), !0;
                        if (
                          (H == null ? void 0 : H.nodeName) !== 'A' &&
                          (0, a.default)((B = u.EXTRA_TAG)).call(B, H.nodeName)
                        ) {
                          var lt = u.getParentNodeA(b);
                          if (lt) return lt.setAttribute('href', z), (H.innerText = $), !0;
                        }
                        return C($, z), !0;
                      }
                    },
                    bindEnter: !0,
                  },
                  {
                    selector: '#' + x,
                    type: 'click',
                    fn: function () {
                      return E(), !0;
                    },
                  },
                ],
              },
            ],
            setLinkValue: function (N, L) {
              var B = '',
                F = '',
                w;
              L === 'text' && ((B = '#' + A), (F = h)),
                L === 'link' && ((B = '#' + m), (F = d)),
                (w = (0, f.default)(N).call(N, B).elems[0]),
                (w.value = F);
            },
          };
          return I;
        }
        n.default = v;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(4));
        (0, r.default)(n, '__esModule', { value: !0 }),
          (n.insertHtml = n.createPartHtml = n.makeHtmlString = n.getTopNode = void 0);
        function i(l, v) {
          var c = l,
            h = l;
          do {
            if (c.textContent === v) break;
            (h = c), c.parentNode && (c = c == null ? void 0 : c.parentNode);
          } while ((c == null ? void 0 : c.nodeName) !== 'P');
          return h;
        }
        n.getTopNode = i;
        function f(l, v) {
          var c = l.nodeName,
            h = '';
          if (l.nodeType === 3 || /^(h|H)[1-6]$/.test(c)) return v;
          if (l.nodeType === 1) {
            var d = l.getAttribute('style'),
              m = l.getAttribute('face'),
              A = l.getAttribute('color');
            d && (h = h + (' style="' + d + '"')),
              m && (h = h + (' face="' + m + '"')),
              A && (h = h + (' color="' + A + '"'));
          }
          return (c = c.toLowerCase()), '<' + c + h + '>' + v + '</' + c + '>';
        }
        n.makeHtmlString = f;
        function g(l, v, c, h) {
          var d,
            m = (d = v.textContent) === null || d === void 0 ? void 0 : d.substring(c, h),
            A = v,
            y = '';
          do (y = f(A, m != null ? m : '')), (m = y), (A = A == null ? void 0 : A.parentElement);
          while (A && A.textContent !== l);
          return y;
        }
        n.createPartHtml = g;
        function s(l, v) {
          var c,
            h,
            d,
            m,
            A,
            y = l.anchorNode,
            x = l.focusNode,
            S = l.anchorOffset,
            D = l.focusOffset,
            T = (c = v.textContent) !== null && c !== void 0 ? c : '',
            C = p(v),
            E = '',
            P = '',
            I = '',
            M = '',
            N = y,
            L = x,
            B = y;
          if (y != null && y.isEqualNode(x != null ? x : null)) {
            var F = g(T, y, S, D);
            return (F = u(C, F)), F;
          }
          for (
            y && (P = g(T, y, S != null ? S : 0)),
              x && (M = g(T, x, 0, D)),
              y && (N = i(y, T)),
              x && (L = i(x, T)),
              B = (h = N == null ? void 0 : N.nextSibling) !== null && h !== void 0 ? h : y;
            !(B != null && B.isEqualNode(L != null ? L : null));

          ) {
            var w = B == null ? void 0 : B.nodeName;
            if (w === '#text') I = I + (B == null ? void 0 : B.textContent);
            else {
              var b =
                (m =
                  (d = B == null ? void 0 : B.firstChild) === null || d === void 0
                    ? void 0
                    : d.parentElement) === null || m === void 0
                  ? void 0
                  : m.innerHTML;
              B && (I = I + f(B, b != null ? b : ''));
            }
            var H = (A = B == null ? void 0 : B.nextSibling) !== null && A !== void 0 ? A : B;
            if (H === B) break;
            B = H;
          }
          return (E = '' + P + I + M), (E = u(C, E)), E;
        }
        n.insertHtml = s;
        function p(l) {
          for (
            var v, c = (v = l.textContent) !== null && v !== void 0 ? v : '', h = [];
            (l == null ? void 0 : l.textContent) === c;

          )
            l.nodeName !== 'P' && l.nodeName !== 'TABLE' && h.push(l), (l = l.childNodes[0]);
          return h;
        }
        function u(l, v) {
          return (
            (0, a.default)(l).call(l, function (c) {
              v = f(c, v);
            }),
            v
          );
        }
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(325));
        function f(g) {
          i.default(g);
        }
        n.default = f;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(28));
        (0, r.default)(n, '__esModule', { value: !0 });
        var i = t(2),
          f = i.__importDefault(t(3)),
          g = i.__importDefault(t(39)),
          s = t(96);
        function p(l) {
          var v;
          function c(d) {
            var m = [
              {
                $elem: f.default(
                  '<span>' + l.i18next.t('menus.panelMenus.link.查看链接') + '</span>',
                ),
                onClick: function (y, x) {
                  var S = x.attr('href');
                  return window.open(S, '_target'), !0;
                },
              },
              {
                $elem: f.default(
                  '<span>' + l.i18next.t('menus.panelMenus.link.取消链接') + '</span>',
                ),
                onClick: function (y, x) {
                  var S, D;
                  y.selection.createRangeByElem(x), y.selection.restoreSelection();
                  var T = x.childNodes();
                  if ((T == null ? void 0 : T.getNodeName()) === 'IMG') {
                    var C =
                      (D =
                        (S = y.selection.getSelectionContainerElem()) === null || S === void 0
                          ? void 0
                          : S.children()) === null || D === void 0
                        ? void 0
                        : D.elems[0].children[0];
                    y.cmd.do(
                      'insertHTML',
                      `<img 
                                src=` +
                        (C == null ? void 0 : C.getAttribute('src')) +
                        ` 
                                style=` +
                        (C == null ? void 0 : C.getAttribute('style')) +
                        '>',
                    );
                  } else {
                    var E,
                      P = x.elems[0],
                      I = P.innerHTML,
                      M = P.parentElement;
                    M && (0, a.default)((E = s.EXTRA_TAG)).call(E, M.nodeName)
                      ? (M.innerHTML = I)
                      : y.cmd.do('insertHTML', '<span>' + I + '</span>');
                  }
                  return !0;
                },
              },
            ];
            (v = new g.default(l, d, m)), v.create();
          }
          function h() {
            v && (v.remove(), (v = null));
          }
          return { showLinkTooltip: c, hideLinkTooltip: h };
        }
        function u(l) {
          var v = p(l),
            c = v.showLinkTooltip,
            h = v.hideLinkTooltip;
          l.txt.eventHooks.linkClickEvents.push(c),
            l.txt.eventHooks.clickEvents.push(h),
            l.txt.eventHooks.keyupEvents.push(h),
            l.txt.eventHooks.toolbarClickEvents.push(h),
            l.txt.eventHooks.menuClickEvents.push(h),
            l.txt.eventHooks.textScrollEvents.push(h);
        }
        n.default = u;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(23)),
          f = a.__importDefault(t(3)),
          g = (function (s) {
            a.__extends(p, s);
            function p(u) {
              var l = this,
                v = f.default(`<div class="w-e-menu" data-title="斜体">
                <i class="w-e-icon-italic"></i>
            </div>`);
              return (l = s.call(this, v, u) || this), l;
            }
            return (
              (p.prototype.clickHandler = function () {
                var u = this.editor,
                  l = u.selection.isSelectionEmpty();
                l && u.selection.createEmptyRange(),
                  u.cmd.do('italic'),
                  l && (u.selection.collapseRange(), u.selection.restoreSelection());
              }),
              (p.prototype.tryChangeActive = function () {
                var u = this.editor;
                u.cmd.queryCommandState('italic') ? this.active() : this.unActive();
              }),
              p
            );
          })(i.default);
        n.default = g;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(23)),
          f = a.__importDefault(t(3)),
          g = (function (s) {
            a.__extends(p, s);
            function p(u) {
              var l = this,
                v = f.default(`<div class="w-e-menu" data-title="下划线">
                <i class="w-e-icon-underline"></i>
            </div>`);
              return (l = s.call(this, v, u) || this), l;
            }
            return (
              (p.prototype.clickHandler = function () {
                var u = this.editor,
                  l = u.selection.isSelectionEmpty();
                l && u.selection.createEmptyRange(),
                  u.cmd.do('underline'),
                  l && (u.selection.collapseRange(), u.selection.restoreSelection());
              }),
              (p.prototype.tryChangeActive = function () {
                var u = this.editor;
                u.cmd.queryCommandState('underline') ? this.active() : this.unActive();
              }),
              p
            );
          })(i.default);
        n.default = g;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(23)),
          f = a.__importDefault(t(3)),
          g = (function (s) {
            a.__extends(p, s);
            function p(u) {
              var l = this,
                v = f.default(`<div class="w-e-menu" data-title="删除线">
                <i class="w-e-icon-strikethrough"></i>
            </div>`);
              return (l = s.call(this, v, u) || this), l;
            }
            return (
              (p.prototype.clickHandler = function () {
                var u = this.editor,
                  l = u.selection.isSelectionEmpty();
                l && u.selection.createEmptyRange(),
                  u.cmd.do('strikeThrough'),
                  l && (u.selection.collapseRange(), u.selection.restoreSelection());
              }),
              (p.prototype.tryChangeActive = function () {
                var u = this.editor;
                u.cmd.queryCommandState('strikeThrough') ? this.active() : this.unActive();
              }),
              p
            );
          })(i.default);
        n.default = g;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(24)),
          f = a.__importDefault(t(3)),
          g = a.__importDefault(t(330)),
          s = (function (p) {
            a.__extends(u, p);
            function u(l) {
              var v = this,
                c = f.default(`<div class="w-e-menu" data-title="字体">
                <i class="w-e-icon-font"></i>
            </div>`),
                h = new g.default(l.config.fontNames),
                d = {
                  width: 100,
                  title: '设置字体',
                  type: 'list',
                  list: h.getItemList(),
                  clickHandler: function (A) {
                    v.command(A);
                  },
                };
              return (v = p.call(this, c, l, d) || this), v;
            }
            return (
              (u.prototype.command = function (l) {
                var v,
                  c = this.editor,
                  h = c.selection.isSelectionEmpty(),
                  d =
                    (v = c.selection.getSelectionContainerElem()) === null || v === void 0
                      ? void 0
                      : v.elems[0];
                if (d != null) {
                  var m = (d == null ? void 0 : d.nodeName.toLowerCase()) !== 'p',
                    A = (d == null ? void 0 : d.getAttribute('face')) === l;
                  if (h) {
                    if (m && !A) {
                      var y = c.selection.getSelectionRangeTopNodes();
                      c.selection.createRangeByElem(y[0]), c.selection.moveCursor(y[0].elems[0]);
                    }
                    c.selection.setRangeToElem(d), c.selection.createEmptyRange();
                  }
                  c.cmd.do('fontName', l),
                    h && (c.selection.collapseRange(), c.selection.restoreSelection());
                }
              }),
              (u.prototype.tryChangeActive = function () {}),
              u
            );
          })(i.default);
        n.default = s;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(4));
        (0, r.default)(n, '__esModule', { value: !0 });
        var i = t(2),
          f = i.__importDefault(t(3)),
          g = (function () {
            function s(p) {
              var u = this;
              (this.itemList = []),
                (0, a.default)(p).call(p, function (l) {
                  var v = typeof l == 'string' ? l : l.value,
                    c = typeof l == 'string' ? l : l.name;
                  u.itemList.push({
                    $elem: f.default(`<p style="font-family:'` + v + `'">` + c + '</p>'),
                    value: c,
                  });
                });
            }
            return (
              (s.prototype.getItemList = function () {
                return this.itemList;
              }),
              s
            );
          })();
        n.default = g;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(24)),
          f = a.__importDefault(t(3)),
          g = a.__importDefault(t(332)),
          s = (function (p) {
            a.__extends(u, p);
            function u(l) {
              var v = this,
                c = f.default(`<div class="w-e-menu" data-title="字号">
                <i class="w-e-icon-text-heigh"></i>
            </div>`),
                h = new g.default(l.config.fontSizes),
                d = {
                  width: 160,
                  title: '设置字号',
                  type: 'list',
                  list: h.getItemList(),
                  clickHandler: function (A) {
                    v.command(A);
                  },
                };
              return (v = p.call(this, c, l, d) || this), v;
            }
            return (
              (u.prototype.command = function (l) {
                var v,
                  c = this.editor,
                  h = c.selection.isSelectionEmpty(),
                  d =
                    (v = c.selection.getSelectionContainerElem()) === null || v === void 0
                      ? void 0
                      : v.elems[0];
                d != null &&
                  (c.cmd.do('fontSize', l),
                  h && (c.selection.collapseRange(), c.selection.restoreSelection()));
              }),
              (u.prototype.tryChangeActive = function () {}),
              u
            );
          })(i.default);
        n.default = s;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(3)),
          f = (function () {
            function g(s) {
              this.itemList = [];
              for (var p in s) {
                var u = s[p];
                this.itemList.push({
                  $elem: i.default('<p style="font-size:' + p + '">' + u.name + '</p>'),
                  value: u.value,
                });
              }
            }
            return (
              (g.prototype.getItemList = function () {
                return this.itemList;
              }),
              g
            );
          })();
        n.default = f;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(4)),
          i = e(t(27));
        (0, r.default)(n, '__esModule', { value: !0 });
        var f = t(2),
          g = f.__importDefault(t(24)),
          s = f.__importDefault(t(3)),
          p = ['LI'],
          u = ['BLOCKQUOTE'],
          l = (function (v) {
            f.__extends(c, v);
            function c(h) {
              var d = this,
                m = s.default(
                  '<div class="w-e-menu" data-title="对齐"><i class="w-e-icon-paragraph-left"></i></div>',
                ),
                A = {
                  width: 100,
                  title: '对齐方式',
                  type: 'list',
                  list: [
                    {
                      $elem: s.default(
                        `<p>
                            <i class="w-e-icon-paragraph-left w-e-drop-list-item"></i>
                            ` +
                          h.i18next.t('menus.dropListMenu.justify.靠左') +
                          `
                        </p>`,
                      ),
                      value: 'left',
                    },
                    {
                      $elem: s.default(
                        `<p>
                            <i class="w-e-icon-paragraph-center w-e-drop-list-item"></i>
                            ` +
                          h.i18next.t('menus.dropListMenu.justify.居中') +
                          `
                        </p>`,
                      ),
                      value: 'center',
                    },
                    {
                      $elem: s.default(
                        `<p>
                            <i class="w-e-icon-paragraph-right w-e-drop-list-item"></i>
                            ` +
                          h.i18next.t('menus.dropListMenu.justify.靠右') +
                          `
                        </p>`,
                      ),
                      value: 'right',
                    },
                    {
                      $elem: s.default(
                        `<p>
                            <i class="w-e-icon-paragraph-justify w-e-drop-list-item"></i>
                            ` +
                          h.i18next.t('menus.dropListMenu.justify.两端') +
                          `
                        </p>`,
                      ),
                      value: 'justify',
                    },
                  ],
                  clickHandler: function (x) {
                    d.command(x);
                  },
                };
              return (d = v.call(this, m, h, A) || this), d;
            }
            return (
              (c.prototype.command = function (h) {
                var d = this.editor,
                  m = d.selection,
                  A = m.getSelectionContainerElem();
                m.saveRange();
                var y = d.selection.getSelectionRangeTopNodes();
                if (A != null && A.length)
                  if (this.isSpecialNode(A, y[0]) || this.isSpecialTopNode(y[0])) {
                    var x = this.getSpecialNodeUntilTop(A, y[0]);
                    if (x == null) return;
                    s.default(x).css('text-align', h);
                  } else
                    (0, a.default)(y).call(y, function (S) {
                      S.css('text-align', h);
                    });
                m.restoreSelection();
              }),
              (c.prototype.getSpecialNodeUntilTop = function (h, d) {
                for (var m = h.elems[0], A = d.elems[0]; m != null; ) {
                  if (
                    (0, i.default)(p).call(p, m == null ? void 0 : m.nodeName) !== -1 ||
                    m.parentNode === A
                  )
                    return m;
                  m = m.parentNode;
                }
                return m;
              }),
              (c.prototype.isSpecialNode = function (h, d) {
                var m = this.getSpecialNodeUntilTop(h, d);
                return m == null ? !1 : (0, i.default)(p).call(p, m.nodeName) !== -1;
              }),
              (c.prototype.isSpecialTopNode = function (h) {
                var d;
                return h == null
                  ? !1
                  : (0, i.default)(u).call(
                      u,
                      (d = h.elems[0]) === null || d === void 0 ? void 0 : d.nodeName,
                    ) !== -1;
              }),
              (c.prototype.tryChangeActive = function () {}),
              c
            );
          })(g.default);
        n.default = l;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(4));
        (0, r.default)(n, '__esModule', { value: !0 });
        var i = t(2),
          f = i.__importDefault(t(3)),
          g = i.__importDefault(t(23)),
          s = i.__importDefault(t(335)),
          p = i.__importDefault(t(336)),
          u = t(7),
          l = (function (v) {
            i.__extends(c, v);
            function c(h) {
              var d = this,
                m = f.default(`<div class="w-e-menu" data-title="引用">
                <i class="w-e-icon-quotes-left"></i>
            </div>`);
              return (d = v.call(this, m, h) || this), s.default(h), d;
            }
            return (
              (c.prototype.clickHandler = function () {
                var h,
                  d,
                  m = this.editor,
                  A = m.selection.isSelectionEmpty(),
                  y = m.selection.getSelectionRangeTopNodes(),
                  x = y[y.length - 1],
                  S = this.getTopNodeName();
                if (S === 'BLOCKQUOTE') {
                  var D = f.default(x.childNodes()),
                    T = D.length,
                    C = x;
                  (0, a.default)(D).call(D, function (M) {
                    var N = f.default(M);
                    N.insertAfter(C), (C = N);
                  }),
                    x.remove(),
                    m.selection.moveCursor(D.elems[T - 1]),
                    this.tryChangeActive();
                } else {
                  var E = p.default(y);
                  if (m.$textElem.equal(x)) {
                    var P =
                      (h = m.selection.getSelectionContainerElem()) === null || h === void 0
                        ? void 0
                        : h.elems[0];
                    m.selection.createRangeByElems(P.children[0], P.children[0]),
                      (y = m.selection.getSelectionRangeTopNodes()),
                      (E = p.default(y)),
                      x.append(E);
                  } else E.insertAfter(x);
                  this.delSelectNode(y);
                  var I =
                    (d = E.childNodes()) === null || d === void 0 ? void 0 : d.last().getNode();
                  if (I == null) return;
                  I.textContent ? m.selection.moveCursor(I) : m.selection.moveCursor(I, 0),
                    this.tryChangeActive(),
                    f.default(u.EMPTY_P).insertAfter(E);
                  return;
                }
                A && (m.selection.collapseRange(), m.selection.restoreSelection());
              }),
              (c.prototype.tryChangeActive = function () {
                var h,
                  d = this.editor,
                  m =
                    (h = d.selection.getSelectionRangeTopNodes()[0]) === null || h === void 0
                      ? void 0
                      : h.getNodeName();
                m === 'BLOCKQUOTE' ? this.active() : this.unActive();
              }),
              (c.prototype.getTopNodeName = function () {
                var h = this.editor,
                  d = h.selection.getSelectionRangeTopNodes()[0],
                  m = d == null ? void 0 : d.getNodeName();
                return m;
              }),
              (c.prototype.delSelectNode = function (h) {
                (0, a.default)(h).call(h, function (d) {
                  d.remove();
                });
              }),
              c
            );
          })(g.default);
        n.default = l;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 });
        var a = t(2),
          i = t(7),
          f = a.__importDefault(t(3));
        function g(s) {
          function p(u) {
            var l,
              v = s.selection.getSelectionContainerElem(),
              c = s.selection.getSelectionRangeTopNodes()[0];
            if ((c == null ? void 0 : c.getNodeName()) === 'BLOCKQUOTE') {
              if (v.getNodeName() === 'BLOCKQUOTE') {
                var h = (l = v.childNodes()) === null || l === void 0 ? void 0 : l.getNode();
                s.selection.moveCursor(h);
              }
              if (v.text() === '') {
                u.preventDefault(), v.remove();
                var d = f.default(i.EMPTY_P);
                d.insertAfter(c), s.selection.moveCursor(d.getNode(), 0);
              }
              c.text() === '' && c.remove();
            }
          }
          s.txt.eventHooks.enterDownEvents.push(p);
        }
        n.default = g;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(4));
        (0, r.default)(n, '__esModule', { value: !0 });
        var i = t(2),
          f = i.__importDefault(t(3));
        function g(s) {
          var p = f.default('<blockquote></blockquote>');
          return (
            (0, a.default)(s).call(s, function (u) {
              p.append(u.clone(!0));
            }),
            p
          );
        }
        n.default = g;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(26));
        (0, r.default)(n, '__esModule', { value: !0 });
        var i = t(2),
          f = i.__importDefault(t(24)),
          g = i.__importDefault(t(3)),
          s = t(6),
          p = (function (u) {
            i.__extends(l, u);
            function l(v) {
              var c,
                h = this,
                d = g.default(`<div class="w-e-menu" data-title="背景色">
                <i class="w-e-icon-paint-brush"></i>
            </div>`),
                m = {
                  width: 120,
                  title: '背景颜色',
                  type: 'inline-block',
                  list: (0, a.default)((c = v.config.colors)).call(c, function (A) {
                    return {
                      $elem: g.default(
                        '<i style="color:' + A + ';" class="w-e-icon-paint-brush"></i>',
                      ),
                      value: A,
                    };
                  }),
                  clickHandler: function (y) {
                    h.command(y);
                  },
                };
              return (h = u.call(this, d, v, m) || this), h;
            }
            return (
              (l.prototype.command = function (v) {
                var c,
                  h = this.editor,
                  d = h.selection.isSelectionEmpty(),
                  m =
                    (c = h.selection.getSelectionContainerElem()) === null || c === void 0
                      ? void 0
                      : c.elems[0];
                if (m != null) {
                  var A = (m == null ? void 0 : m.nodeName.toLowerCase()) !== 'p',
                    y = m == null ? void 0 : m.style.backgroundColor,
                    x = s.hexToRgb(v) === y;
                  if (d) {
                    if (A && !x) {
                      var S = h.selection.getSelectionRangeTopNodes();
                      h.selection.createRangeByElem(S[0]), h.selection.moveCursor(S[0].elems[0]);
                    }
                    h.selection.createEmptyRange();
                  }
                  h.cmd.do('backColor', v),
                    d && (h.selection.collapseRange(), h.selection.restoreSelection());
                }
              }),
              (l.prototype.tryChangeActive = function () {}),
              l
            );
          })(f.default);
        n.default = p;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(26));
        (0, r.default)(n, '__esModule', { value: !0 });
        var i = t(2),
          f = i.__importDefault(t(24)),
          g = i.__importDefault(t(3)),
          s = (function (p) {
            i.__extends(u, p);
            function u(l) {
              var v,
                c = this,
                h = g.default(`<div class="w-e-menu" data-title="文字颜色">
                <i class="w-e-icon-pencil2"></i>
            </div>`),
                d = {
                  width: 120,
                  title: '文字颜色',
                  type: 'inline-block',
                  list: (0, a.default)((v = l.config.colors)).call(v, function (m) {
                    return {
                      $elem: g.default('<i style="color:' + m + ';" class="w-e-icon-pencil2"></i>'),
                      value: m,
                    };
                  }),
                  clickHandler: function (A) {
                    c.command(A);
                  },
                };
              return (c = p.call(this, h, l, d) || this), c;
            }
            return (
              (u.prototype.command = function (l) {
                var v,
                  c = this.editor,
                  h = c.selection.isSelectionEmpty(),
                  d =
                    (v = c.selection.getSelectionContainerElem()) === null || v === void 0
                      ? void 0
                      : v.elems[0];
                if (d != null) {
                  var m = c.selection.getSelectionText();
                  if (d.nodeName === 'A' && d.textContent === m) {
                    var A = g.default('<span>&#8203;</span>').getNode();
                    d.appendChild(A);
                  }
                  c.cmd.do('foreColor', l),
                    h && (c.selection.collapseRange(), c.selection.restoreSelection());
                }
              }),
              (u.prototype.tryChangeActive = function () {}),
              u
            );
          })(f.default);
        n.default = s;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(3)),
          f = a.__importDefault(t(33)),
          g = a.__importDefault(t(38)),
          s = a.__importDefault(t(340)),
          p = a.__importDefault(t(346)),
          u = (function (l) {
            a.__extends(v, l);
            function v(c) {
              var h = this,
                d = i.default(`<div class="w-e-menu" data-title="视频">
                <i class="w-e-icon-play"></i>
            </div>`);
              return (h = l.call(this, d, c) || this), p.default(c), h;
            }
            return (
              (v.prototype.clickHandler = function () {
                this.createPanel('');
              }),
              (v.prototype.createPanel = function (c) {
                var h = s.default(this.editor, c),
                  d = new f.default(this, h);
                d.create();
              }),
              (v.prototype.tryChangeActive = function () {}),
              v
            );
          })(g.default);
        n.default = u;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(17));
        (0, r.default)(n, '__esModule', { value: !0 });
        var i = t(2),
          f = t(6),
          g = i.__importDefault(t(3)),
          s = i.__importDefault(t(341)),
          p = t(7);
        function u(l, v) {
          var c = l.config,
            h = new s.default(l),
            d = f.getRandom('input-iframe'),
            m = f.getRandom('btn-ok'),
            A = f.getRandom('input-upload'),
            y = f.getRandom('btn-local-ok');
          function x(C) {
            l.cmd.do('insertHTML', C + p.EMPTY_P), l.config.onlineVideoCallback(C);
          }
          function S(C) {
            var E = l.config.onlineVideoCheck(C);
            return E === !0 ? !0 : (typeof E == 'string' && l.config.customAlert(E, 'error'), !1);
          }
          var D = [
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
                      var E = g.default('#' + A),
                        P = E.elems[0];
                      if (P) P.click();
                      else return !0;
                    },
                  },
                  {
                    selector: '#' + A,
                    type: 'change',
                    fn: function () {
                      var E = g.default('#' + A),
                        P = E.elems[0];
                      if (!P) return !0;
                      var I = P.files;
                      return I.length && h.uploadVideo(I), !0;
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
                  d +
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
                      var E,
                        P = g.default('#' + d),
                        I = (0, a.default)((E = P.val())).call(E);
                      if (I && S(I)) return x(I), !0;
                    },
                    bindEnter: !0,
                  },
                ],
              },
            ],
            T = { width: 300, height: 0, tabs: [] };
          return (
            window.FileReader && (c.uploadVideoServer || c.customUploadVideo) && T.tabs.push(D[0]),
            c.showLinkVideo && T.tabs.push(D[1]),
            T
          );
        }
        n.default = u;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(133)),
          i = e(t(57)),
          f = e(t(4)),
          g = e(t(27));
        (0, r.default)(n, '__esModule', { value: !0 });
        var s = t(2),
          p = t(6),
          u = s.__importDefault(t(135)),
          l = s.__importDefault(t(136)),
          v = t(7),
          c = t(6),
          h = (function () {
            function d(m) {
              this.editor = m;
            }
            return (
              (d.prototype.uploadVideo = function (m) {
                var A = this;
                if (m.length) {
                  var y = this.editor,
                    x = y.config,
                    S = 'validate.',
                    D = function (J) {
                      return y.i18next.t(S + J);
                    },
                    T = x.uploadVideoServer,
                    C = x.uploadVideoMaxSize,
                    E = C / 1024,
                    P = x.uploadVideoName,
                    I = x.uploadVideoParams,
                    M = x.uploadVideoParamsWithUrl,
                    N = x.uploadVideoHeaders,
                    L = x.uploadVideoHooks,
                    B = x.uploadVideoTimeout,
                    F = x.withVideoCredentials,
                    w = x.customUploadVideo,
                    b = x.uploadVideoAccept,
                    H = [],
                    j = [];
                  if (
                    (p.arrForEach(m, function (Q) {
                      var J = Q.name,
                        k = Q.size / 1024 / 1024;
                      if (!(!J || !k)) {
                        if (!(b instanceof Array)) {
                          j.push('【' + b + '】' + D('uploadVideoAccept 不是Array'));
                          return;
                        }
                        if (
                          !(0, a.default)(b).call(b, function (tt) {
                            return tt === J.split('.')[J.split('.').length - 1];
                          })
                        ) {
                          j.push('【' + J + '】' + D('不是视频'));
                          return;
                        }
                        if (E < k) {
                          j.push('【' + J + '】' + D('大于') + ' ' + E + 'M');
                          return;
                        }
                        H.push(Q);
                      }
                    }),
                    j.length)
                  ) {
                    x.customAlert(
                      D('视频验证未通过') +
                        `: 
` +
                        j.join(`
`),
                      'warning',
                    );
                    return;
                  }
                  if (H.length === 0) {
                    x.customAlert(D('传入的文件不合法'), 'warning');
                    return;
                  }
                  if (w && typeof w == 'function') {
                    var K;
                    w(H, (0, i.default)((K = this.insertVideo)).call(K, this));
                    return;
                  }
                  var U = new FormData();
                  if (
                    ((0, f.default)(H).call(H, function (Q, J) {
                      var k = P || Q.name;
                      H.length > 1 && (k = k + (J + 1)), U.append(k, Q);
                    }),
                    T)
                  ) {
                    var W = T.split('#');
                    T = W[0];
                    var z = W[1] || '';
                    (0, f.default)(p).call(p, I, function (Q, J) {
                      M &&
                        ((0, g.default)(T).call(T, '?') > 0 ? (T += '&') : (T += '?'),
                        (T = T + Q + '=' + J)),
                        U.append(Q, J);
                    }),
                      z && (T += '#' + z);
                    var $ = u.default(T, {
                      timeout: B,
                      formData: U,
                      headers: N,
                      withCredentials: !!F,
                      beforeSend: function (J) {
                        if (L.before) return L.before(J, y, H);
                      },
                      onTimeout: function (J) {
                        x.customAlert(D('上传视频超时'), 'error'), L.timeout && L.timeout(J, y);
                      },
                      onProgress: function (J, k) {
                        var tt = new l.default(y);
                        k.lengthComputable && ((J = k.loaded / k.total), tt.show(J));
                      },
                      onError: function (J) {
                        x.customAlert(
                          D('上传视频错误'),
                          'error',
                          D('上传视频错误') + '，' + D('服务器返回状态') + ': ' + J.status,
                        ),
                          L.error && L.error(J, y);
                      },
                      onFail: function (J, k) {
                        x.customAlert(
                          D('上传视频失败'),
                          'error',
                          D('上传视频返回结果错误') + ('，' + D('返回结果') + ': ') + k,
                        ),
                          L.fail && L.fail(J, y, k);
                      },
                      onSuccess: function (J, k) {
                        if (L.customInsert) {
                          var tt;
                          L.customInsert((0, i.default)((tt = A.insertVideo)).call(tt, A), k, y);
                          return;
                        }
                        if (k.errno != '0') {
                          x.customAlert(
                            D('上传视频失败'),
                            'error',
                            D('上传视频返回结果错误') + '，' + D('返回结果') + ' errno=' + k.errno,
                          ),
                            L.fail && L.fail(J, y, k);
                          return;
                        }
                        var rt = k.data;
                        A.insertVideo(rt.url), L.success && L.success(J, y, k);
                      },
                    });
                    typeof $ == 'string' && x.customAlert($, 'error');
                  }
                }
              }),
              (d.prototype.insertVideo = function (m) {
                var A = this.editor,
                  y = A.config,
                  x = 'validate.',
                  S = function (C, E) {
                    return E === void 0 && (E = x), A.i18next.t(E + C);
                  };
                if (!y.customInsertVideo)
                  c.UA.isFirefox
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
                          v.EMPTY_P,
                      );
                else {
                  y.customInsertVideo(m);
                  return;
                }
                var D = document.createElement('video');
                (D.onload = function () {
                  D = null;
                }),
                  (D.onerror = function () {
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
                      (D = null);
                  }),
                  (D.onabort = function () {
                    return (D = null);
                  }),
                  (D.src = m);
              }),
              d
            );
          })();
        n.default = h;
      },
      function (o, n, t) {
        o.exports = t(343);
      },
      function (o, n, t) {
        var e = t(344);
        o.exports = e;
      },
      function (o, n, t) {
        t(345);
        var e = t(9);
        o.exports = e.Date.now;
      },
      function (o, n, t) {
        var e = t(5);
        e(
          { target: 'Date', stat: !0 },
          {
            now: function () {
              return new Date().getTime();
            },
          },
        );
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(347)),
          f = a.__importDefault(t(349));
        function g(s) {
          i.default(s), f.default(s);
        }
        n.default = g;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 }), (n.createShowHideFn = void 0);
        var a = t(2),
          i = a.__importDefault(t(3)),
          f = a.__importDefault(t(39)),
          g = a.__importDefault(t(348));
        function s(u) {
          var l,
            v = function (m, A) {
              return A === void 0 && (A = ''), u.i18next.t(A + m);
            };
          function c(d) {
            var m = [
              {
                $elem: i.default("<span class='w-e-icon-trash-o'></span>"),
                onClick: function (y, x) {
                  return x.remove(), !0;
                },
              },
              {
                $elem: i.default('<span>100%</span>'),
                onClick: function (y, x) {
                  return x.attr('width', '100%'), x.removeAttr('height'), !0;
                },
              },
              {
                $elem: i.default('<span>50%</span>'),
                onClick: function (y, x) {
                  return x.attr('width', '50%'), x.removeAttr('height'), !0;
                },
              },
              {
                $elem: i.default('<span>30%</span>'),
                onClick: function (y, x) {
                  return x.attr('width', '30%'), x.removeAttr('height'), !0;
                },
              },
              {
                $elem: i.default('<span>' + v('重置') + '</span>'),
                onClick: function (y, x) {
                  return x.removeAttr('width'), x.removeAttr('height'), !0;
                },
              },
              {
                $elem: i.default('<span>' + v('menus.justify.靠左') + '</span>'),
                onClick: function (y, x) {
                  return g.default(x, 'left'), !0;
                },
              },
              {
                $elem: i.default('<span>' + v('menus.justify.居中') + '</span>'),
                onClick: function (y, x) {
                  return g.default(x, 'center'), !0;
                },
              },
              {
                $elem: i.default('<span>' + v('menus.justify.靠右') + '</span>'),
                onClick: function (y, x) {
                  return g.default(x, 'right'), !0;
                },
              },
            ];
            (l = new f.default(u, d, m)), l.create();
          }
          function h() {
            l && (l.remove(), (l = null));
          }
          return { showVideoTooltip: c, hideVideoTooltip: h };
        }
        n.createShowHideFn = s;
        function p(u) {
          var l = s(u),
            v = l.showVideoTooltip,
            c = l.hideVideoTooltip;
          u.txt.eventHooks.videoClickEvents.push(v),
            u.txt.eventHooks.clickEvents.push(c),
            u.txt.eventHooks.keyupEvents.push(c),
            u.txt.eventHooks.toolbarClickEvents.push(c),
            u.txt.eventHooks.menuClickEvents.push(c),
            u.txt.eventHooks.textScrollEvents.push(c),
            u.txt.eventHooks.changeEvents.push(c);
        }
        n.default = p;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(28));
        (0, r.default)(n, '__esModule', { value: !0 });
        var i = t(2),
          f = i.__importDefault(t(3));
        function g(p, u) {
          var l = ['P'],
            v = s(p, l);
          v && f.default(v).css('text-align', u);
        }
        n.default = g;
        function s(p, u) {
          for (var l, v = p.elems[0]; v != null; ) {
            if ((0, a.default)(u).call(u, v == null ? void 0 : v.nodeName)) return v;
            if (
              ((l = v == null ? void 0 : v.parentNode) === null || l === void 0
                ? void 0
                : l.nodeName) === 'BODY'
            )
              return null;
            v = v.parentNode;
          }
          return v;
        }
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 });
        var a = t(6);
        function i(f) {
          if (a.UA.isFirefox) {
            var g = f.txt,
              s = f.selection,
              p = g.eventHooks.keydownEvents;
            p.push(function (u) {
              var l = s.getSelectionContainerElem();
              if (l) {
                var v = l.getNodeTop(f),
                  c = v.length && v.prev().length ? v.prev() : null;
                c &&
                  c.attr('data-we-video-p') &&
                  s.getCursorPos() === 0 &&
                  u.keyCode === 8 &&
                  c.remove();
              }
            });
          }
        }
        n.default = i;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(26));
        (0, r.default)(n, '__esModule', { value: !0 });
        var i = t(2),
          f = t(7),
          g = i.__importDefault(t(3)),
          s = i.__importDefault(t(33)),
          p = i.__importDefault(t(38)),
          u = i.__importDefault(t(351)),
          l = i.__importDefault(t(364)),
          v = (function (c) {
            i.__extends(h, c);
            function h(d) {
              var m = this,
                A = g.default(
                  '<div class="w-e-menu" data-title="图片"><i class="w-e-icon-image"></i></div>',
                ),
                y = l.default(d);
              if (y.onlyUploadConf) {
                var x;
                (A = y.onlyUploadConf.$elem),
                  (0, a.default)((x = y.onlyUploadConf.events)).call(x, function (S) {
                    var D = S.type,
                      T = S.fn || f.EMPTY_FN;
                    A.on(D, function (C) {
                      C.stopPropagation(), T(C);
                    });
                  });
              }
              return (m = c.call(this, A, d) || this), (m.imgPanelConfig = y), u.default(d), m;
            }
            return (
              (h.prototype.clickHandler = function () {
                this.imgPanelConfig.onlyUploadConf || this.createPanel();
              }),
              (h.prototype.createPanel = function () {
                var d = this.imgPanelConfig,
                  m = new s.default(this, d);
                this.setPanel(m), m.create();
              }),
              (h.prototype.tryChangeActive = function () {}),
              h
            );
          })(p.default);
        n.default = v;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(352)),
          f = a.__importDefault(t(353)),
          g = a.__importDefault(t(354)),
          s = a.__importDefault(t(362)),
          p = a.__importDefault(t(363));
        function u(l) {
          i.default(l), f.default(l), g.default(l), s.default(l), p.default(l);
        }
        n.default = u;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 });
        var a = t(2),
          i = t(131),
          f = a.__importDefault(t(97));
        function g(l, v) {
          var c = l.config,
            h = c.pasteFilterStyle,
            d = c.pasteIgnoreImg,
            m = i.getPasteHtml(v, h, d);
          if (m) return !0;
          var A = i.getPasteText(v);
          return !!A;
        }
        function s(l, v) {
          for (
            var c,
              h = ((c = v.clipboardData) === null || c === void 0 ? void 0 : c.types) || [],
              d = 0;
            d < h.length;
            d++
          ) {
            var m = h[d];
            if (m === 'Files') return !0;
          }
          return !1;
        }
        function p(l, v) {
          if (!(!s(v, l) && g(v, l))) {
            var c = i.getPasteImgs(l);
            if (c.length) {
              var h = new f.default(v);
              h.uploadImg(c);
            }
          }
        }
        function u(l) {
          l.txt.eventHooks.pasteEvents.unshift(function (v) {
            p(v, l);
          });
        }
        n.default = u;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(97));
        function f(g) {
          function s(p) {
            var u = p.dataTransfer && p.dataTransfer.files;
            if (!(!u || !u.length)) {
              var l = new i.default(g);
              l.uploadImg(u);
            }
          }
          g.txt.eventHooks.dropEvents.push(s);
        }
        n.default = f;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(29)),
          i = e(t(355));
        (0, r.default)(n, '__esModule', { value: !0 }), (n.createShowHideFn = void 0);
        var f = t(2),
          g = f.__importDefault(t(3));
        t(360);
        var s = t(6);
        function p(h, d, m, A, y) {
          h.attr(
            'style',
            'width:' + d + 'px; height:' + m + 'px; left:' + A + 'px; top:' + y + 'px;',
          );
        }
        function u(h, d) {
          var m = g.default(`<div class="w-e-img-drag-mask">
            <div class="w-e-img-drag-show-size"></div>
            <div class="w-e-img-drag-rb"></div>
         </div>`);
          return m.hide(), d.append(m), m;
        }
        function l(h, d, m) {
          var A = h.getBoundingClientRect(),
            y = m.getBoundingClientRect(),
            x = y.width.toFixed(2),
            S = y.height.toFixed(2);
          (0, a.default)(d)
            .call(d, '.w-e-img-drag-show-size')
            .text(x + 'px * ' + S + 'px'),
            p(d, (0, i.default)(x), (0, i.default)(S), y.left - A.left, y.top - A.top),
            d.show();
        }
        function v(h) {
          var d = h.$textContainerElem,
            m,
            A = u(h, d);
          function y(D, T) {
            D.on('click', function (C) {
              C.stopPropagation();
            }),
              D.on('mousedown', '.w-e-img-drag-rb', function (C) {
                if ((C.preventDefault(), !m)) return;
                var E = C.clientX,
                  P = C.clientY,
                  I = T.getBoundingClientRect(),
                  M = m.getBoundingClientRect(),
                  N = M.width,
                  L = M.height,
                  B = M.left - I.left,
                  F = M.top - I.top,
                  w = N / L,
                  b = N,
                  H = L,
                  j = g.default(document);
                function K() {
                  j.off('mousemove', U), j.off('mouseup', W);
                }
                function U(z) {
                  z.stopPropagation(),
                    z.preventDefault(),
                    (b = N + (z.clientX - E)),
                    (H = L + (z.clientY - P)),
                    b / H != w && (H = b / w),
                    (b = (0, i.default)(b.toFixed(2))),
                    (H = (0, i.default)(H.toFixed(2))),
                    (0, a.default)(D)
                      .call(D, '.w-e-img-drag-show-size')
                      .text(
                        b.toFixed(2).replace('.00', '') +
                          'px * ' +
                          H.toFixed(2).replace('.00', '') +
                          'px',
                      ),
                    p(D, b, H, B, F);
                }
                j.on('mousemove', U);
                function W() {
                  m.attr('width', b + ''), m.attr('height', H + '');
                  var z = m.getBoundingClientRect();
                  p(D, b, H, z.left - I.left, z.top - I.top), K();
                }
                j.on('mouseup', W), j.on('mouseleave', K);
              });
          }
          function x(D) {
            if (s.UA.isIE()) return !1;
            D && ((m = D), l(d, A, m));
          }
          function S() {
            (0, a.default)(d).call(d, '.w-e-img-drag-mask').hide();
          }
          return (
            y(A, d),
            g.default(document).on('click', S),
            h.beforeDestroy(function () {
              g.default(document).off('click', S);
            }),
            { showDrag: x, hideDrag: S }
          );
        }
        n.createShowHideFn = v;
        function c(h) {
          var d = v(h),
            m = d.showDrag,
            A = d.hideDrag;
          h.txt.eventHooks.imgClickEvents.push(m),
            h.txt.eventHooks.textScrollEvents.push(A),
            h.txt.eventHooks.keyupEvents.push(A),
            h.txt.eventHooks.toolbarClickEvents.push(A),
            h.txt.eventHooks.menuClickEvents.push(A),
            h.txt.eventHooks.changeEvents.push(A);
        }
        n.default = c;
      },
      function (o, n, t) {
        o.exports = t(356);
      },
      function (o, n, t) {
        var e = t(357);
        o.exports = e;
      },
      function (o, n, t) {
        t(358);
        var e = t(9);
        o.exports = e.parseFloat;
      },
      function (o, n, t) {
        var e = t(5),
          r = t(359);
        e({ global: !0, forced: parseFloat != r }, { parseFloat: r });
      },
      function (o, n, t) {
        var e = t(8),
          r = t(90).trim,
          a = t(68),
          i = e.parseFloat,
          f = 1 / i(a + '-0') !== -1 / 0;
        o.exports = f
          ? function (s) {
              var p = r(String(s)),
                u = i(p);
              return u === 0 && p.charAt(0) == '-' ? -0 : u;
            }
          : i;
      },
      function (o, n, t) {
        var e = t(20),
          r = t(361);
        (r = r.__esModule ? r.default : r), typeof r == 'string' && (r = [[o.i, r, '']]);
        var a = {};
        (a.insert = 'head'), (a.singleton = !1), e(r, a), (o.exports = r.locals || {});
      },
      function (o, n, t) {
        var e = t(21);
        (n = e(!1)),
          n.push([
            o.i,
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
          (o.exports = n);
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 }), (n.createShowHideFn = void 0);
        var a = t(2),
          i = a.__importDefault(t(3)),
          f = a.__importDefault(t(39));
        function g(p) {
          var u,
            l = function (d, m) {
              return m === void 0 && (m = ''), p.i18next.t(m + d);
            };
          function v(h) {
            var d = [
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
            d.push({
              $elem: i.default('<span>' + l('重置') + '</span>'),
              onClick: function (A, y) {
                return y.removeAttr('width'), y.removeAttr('height'), !0;
              },
            }),
              h.attr('data-href') &&
                d.push({
                  $elem: i.default('<span>' + l('查看链接') + '</span>'),
                  onClick: function (A, y) {
                    var x = y.attr('data-href');
                    return x && ((x = decodeURIComponent(x)), window.open(x, '_target')), !0;
                  },
                }),
              (u = new f.default(p, h, d)),
              u.create();
          }
          function c() {
            u && (u.remove(), (u = null));
          }
          return { showImgTooltip: v, hideImgTooltip: c };
        }
        n.createShowHideFn = g;
        function s(p) {
          var u = g(p),
            l = u.showImgTooltip,
            v = u.hideImgTooltip;
          p.txt.eventHooks.imgClickEvents.push(l),
            p.txt.eventHooks.clickEvents.push(v),
            p.txt.eventHooks.keyupEvents.push(v),
            p.txt.eventHooks.toolbarClickEvents.push(v),
            p.txt.eventHooks.menuClickEvents.push(v),
            p.txt.eventHooks.textScrollEvents.push(v),
            p.txt.eventHooks.imgDragBarMouseDownEvents.push(v),
            p.txt.eventHooks.changeEvents.push(v);
        }
        n.default = s;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 });
        function a(i) {
          var f = i.txt,
            g = i.selection,
            s = f.eventHooks.keydownEvents;
          s.push(function (p) {
            var u = g.getSelectionContainerElem(),
              l = g.getRange();
            if (!(!l || !u || p.keyCode !== 8 || !g.isSelectionEmpty())) {
              var v = l.startContainer,
                c = l.startOffset,
                h = null;
              if (c === 0)
                for (; v !== u.elems[0] && u.elems[0].contains(v) && v.parentNode && !h; ) {
                  if (v.previousSibling) {
                    h = v.previousSibling;
                    break;
                  }
                  v = v.parentNode;
                }
              else v.nodeType !== 3 && (h = v.childNodes[c - 1]);
              if (h) {
                for (var d = h; d.childNodes.length; ) d = d.childNodes[d.childNodes.length - 1];
                d instanceof HTMLElement && d.tagName === 'IMG' && (d.remove(), p.preventDefault());
              }
            }
          });
        }
        n.default = a;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(26)),
          i = e(t(17));
        (0, r.default)(n, '__esModule', { value: !0 });
        var f = t(2),
          g = f.__importDefault(t(3)),
          s = t(6),
          p = f.__importDefault(t(97));
        function u(l) {
          var v,
            c = l.config,
            h = new p.default(l),
            d = s.getRandom('up-trigger-id'),
            m = s.getRandom('up-file-id'),
            A = s.getRandom('input-link-url'),
            y = s.getRandom('input-link-url-alt'),
            x = s.getRandom('input-link-url-href'),
            S = s.getRandom('btn-link'),
            D = 'menus.panelMenus.image.',
            T = function (w, b) {
              return b === void 0 && (b = D), l.i18next.t(b + w);
            };
          function C(F, w, b) {
            var H = c.linkImgCheck(F);
            return H === !0 ? !0 : (typeof H == 'string' && c.customAlert(H, 'error'), !1);
          }
          var E = c.uploadImgMaxLength === 1 ? '' : 'multiple="multiple"',
            P = (0, a.default)((v = c.uploadImgAccept))
              .call(v, function (F) {
                return 'image/' + F;
              })
              .join(','),
            I = function (w, b, H) {
              return (
                '<div class="' +
                w +
                '" data-title="' +
                H +
                `">
            <div id="` +
                d +
                `" class="w-e-up-btn">
                <i class="` +
                b +
                `"></i>
            </div>
            <div style="display:none;">
                <input id="` +
                m +
                '" type="file" ' +
                E +
                ' accept="' +
                P +
                `"/>
            </div>
        </div>`
              );
            },
            M = [
              {
                selector: '#' + d,
                type: 'click',
                fn: function () {
                  var w = c.uploadImgFromMedia;
                  if (w && typeof w == 'function') return w(), !0;
                  var b = g.default('#' + m),
                    H = b.elems[0];
                  if (H) H.click();
                  else return !0;
                },
              },
              {
                selector: '#' + m,
                type: 'change',
                fn: function () {
                  var w = g.default('#' + m),
                    b = w.elems[0];
                  if (!b) return !0;
                  var H = b.files;
                  return H != null && H.length && h.uploadImg(H), b && (b.value = ''), !0;
                },
              },
            ],
            N = [
              `<input
            id="` +
                A +
                `"
            type="text"
            class="block"
            placeholder="` +
                T('图片地址') +
                '"/>',
            ];
          c.showLinkImgAlt &&
            N.push(
              `
        <input
            id="` +
                y +
                `"
            type="text"
            class="block"
            placeholder="` +
                T('图片文字说明') +
                '"/>',
            ),
            c.showLinkImgHref &&
              N.push(
                `
        <input
            id="` +
                  x +
                  `"
            type="text"
            class="block"
            placeholder="` +
                  T('跳转链接') +
                  '"/>',
              );
          var L = [
              {
                title: T('上传图片'),
                tpl: I('w-e-up-img-container', 'w-e-icon-upload2', ''),
                events: M,
              },
              {
                title: T('网络图片'),
                tpl:
                  `<div>
                    ` +
                  N.join('') +
                  `
                    <div class="w-e-button-container">
                        <button type="button" id="` +
                  S +
                  '" class="right">' +
                  T('插入', '') +
                  `</button>
                    </div>
                </div>`,
                events: [
                  {
                    selector: '#' + S,
                    type: 'click',
                    fn: function () {
                      var w,
                        b = g.default('#' + A),
                        H = (0, i.default)((w = b.val())).call(w);
                      if (H) {
                        var j;
                        if (c.showLinkImgAlt) {
                          var K;
                          j = (0, i.default)((K = g.default('#' + y).val())).call(K);
                        }
                        var U;
                        if (c.showLinkImgHref) {
                          var W;
                          U = (0, i.default)((W = g.default('#' + x).val())).call(W);
                        }
                        if (C(H)) return h.insertImg(H, j, U), !0;
                      }
                    },
                    bindEnter: !0,
                  },
                ],
              },
            ],
            B = {
              width: 300,
              height: 0,
              tabs: [],
              onlyUploadConf: {
                $elem: g.default(I('w-e-menu', 'w-e-icon-image', '图片')),
                events: M,
              },
            };
          return (
            window.FileReader &&
              (c.uploadImgShowBase64 ||
                c.uploadImgServer ||
                c.customUploadImg ||
                c.uploadImgFromMedia) &&
              B.tabs.push(L[0]),
            c.showLinkImg && (B.tabs.push(L[1]), (B.onlyUploadConf = void 0)),
            B
          );
        }
        n.default = u;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(4));
        (0, r.default)(n, '__esModule', { value: !0 });
        var i = t(2),
          f = i.__importDefault(t(3)),
          g = i.__importDefault(t(24)),
          s = i.__importDefault(t(366)),
          p = (function (u) {
            i.__extends(l, u);
            function l(v) {
              var c = this,
                h = f.default(`<div class="w-e-menu" data-title="缩进">
                <i class="w-e-icon-indent-increase"></i>
            </div>`),
                d = {
                  width: 130,
                  title: '设置缩进',
                  type: 'list',
                  list: [
                    {
                      $elem: f.default(
                        `<p>
                            <i class="w-e-icon-indent-increase w-e-drop-list-item"></i>
                            ` +
                          v.i18next.t('menus.dropListMenu.indent.增加缩进') +
                          `
                        <p>`,
                      ),
                      value: 'increase',
                    },
                    {
                      $elem: f.default(
                        `<p>
                            <i class="w-e-icon-indent-decrease w-e-drop-list-item"></i>
                            ` +
                          v.i18next.t('menus.dropListMenu.indent.减少缩进') +
                          `
                        <p>`,
                      ),
                      value: 'decrease',
                    },
                  ],
                  clickHandler: function (A) {
                    c.command(A);
                  },
                };
              return (c = u.call(this, h, v, d) || this), c;
            }
            return (
              (l.prototype.command = function (v) {
                var c = this.editor,
                  h = c.selection.getSelectionContainerElem();
                if (h && c.$textElem.equal(h)) {
                  var d = c.selection.getSelectionRangeTopNodes();
                  d.length > 0 &&
                    (0, a.default)(d).call(d, function (m) {
                      s.default(f.default(m), v, c);
                    });
                } else
                  h &&
                    h.length > 0 &&
                    (0, a.default)(h).call(h, function (m) {
                      s.default(f.default(m), v, c);
                    });
                c.selection.restoreSelection(), this.tryChangeActive();
              }),
              (l.prototype.tryChangeActive = function () {
                var v = this.editor,
                  c = v.selection.getSelectionStartElem(),
                  h = f.default(c).getNodeTop(v);
                h.length <= 0 ||
                  (h.elems[0].style.paddingLeft != '' ? this.active() : this.unActive());
              }),
              l
            );
          })(g.default);
        n.default = p;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(45)),
          i = e(t(17));
        (0, r.default)(n, '__esModule', { value: !0 });
        var f = t(2),
          g = f.__importDefault(t(367)),
          s = f.__importDefault(t(368)),
          p = /^(\d+)(\w+)$/,
          u = /^(\d+)%$/;
        function l(c) {
          var h = c.config.indentation;
          if (typeof h == 'string') {
            if (p.test(h)) {
              var d,
                m = (0, a.default)((d = (0, i.default)(h).call(h).match(p))).call(d, 1, 3),
                A = m[0],
                y = m[1];
              return { value: Number(A), unit: y };
            } else if (u.test(h))
              return { value: Number((0, i.default)(h).call(h).match(u)[1]), unit: '%' };
          } else if (h.value !== void 0 && h.unit) return h;
          return { value: 2, unit: 'em' };
        }
        function v(c, h, d) {
          var m = c.getNodeTop(d),
            A = /^(P|H[0-9]*)$/;
          A.test(m.getNodeName()) &&
            (h === 'increase' ? g.default(m, l(d)) : h === 'decrease' && s.default(m, l(d)));
        }
        n.default = v;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(45));
        (0, r.default)(n, '__esModule', { value: !0 });
        function i(f, g) {
          var s = f.elems[0];
          if (s.style.paddingLeft === '') f.css('padding-left', g.value + g.unit);
          else {
            var p = s.style.paddingLeft,
              u = (0, a.default)(p).call(p, 0, p.length - g.unit.length),
              l = Number(u) + g.value;
            f.css('padding-left', '' + l + g.unit);
          }
        }
        n.default = i;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(45));
        (0, r.default)(n, '__esModule', { value: !0 });
        function i(f, g) {
          var s = f.elems[0];
          if (s.style.paddingLeft !== '') {
            var p = s.style.paddingLeft,
              u = (0, a.default)(p).call(p, 0, p.length - g.unit.length),
              l = Number(u) - g.value;
            l > 0 ? f.css('padding-left', '' + l + g.unit) : f.css('padding-left', '');
          }
        }
        n.default = i;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(3)),
          f = a.__importDefault(t(38)),
          g = a.__importDefault(t(33)),
          s = a.__importDefault(t(370)),
          p = (function (u) {
            a.__extends(l, u);
            function l(v) {
              var c = this,
                h = i.default(`<div class="w-e-menu" data-title="表情">
                <i class="w-e-icon-happy"></i>
            </div>`);
              return (c = u.call(this, h, v) || this), c;
            }
            return (
              (l.prototype.createPanel = function () {
                var v = s.default(this.editor),
                  c = new g.default(this, v);
                c.create();
              }),
              (l.prototype.clickHandler = function () {
                this.createPanel();
              }),
              (l.prototype.tryChangeActive = function () {}),
              l
            );
          })(f.default);
        n.default = p;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(26)),
          i = e(t(70)),
          f = e(t(17));
        (0, r.default)(n, '__esModule', { value: !0 });
        var g = t(2),
          s = g.__importDefault(t(3));
        function p(u) {
          var l = u.config.emotions;
          function v(d) {
            var m = [];
            if (d.type == 'image') {
              var A;
              (m = (0, a.default)((A = d.content)).call(A, function (x) {
                return typeof x == 'string'
                  ? ''
                  : '<span  title="' +
                      x.alt +
                      `">
                    <img class="eleImg" data-emoji="` +
                      x.alt +
                      '" style src="' +
                      x.src +
                      '" alt="[' +
                      x.alt +
                      `]">
                </span>`;
              })),
                (m = (0, i.default)(m).call(m, function (x) {
                  return x !== '';
                }));
            } else {
              var y;
              m = (0, a.default)((y = d.content)).call(y, function (x) {
                return '<span class="eleImg" title="' + x + '">' + x + '</span>';
              });
            }
            return m.join('').replace(/&nbsp;/g, '');
          }
          var c = (0, a.default)(l).call(l, function (d) {
              return {
                title: u.i18next.t('menus.panelMenus.emoticon.' + d.title),
                tpl: '<div>' + v(d) + '</div>',
                events: [
                  {
                    selector: '.eleImg',
                    type: 'click',
                    fn: function (A) {
                      var y = s.default(A.target),
                        x = y.getNodeName(),
                        S;
                      if (x === 'IMG') {
                        var D;
                        S = (0, f.default)((D = y.parent().html())).call(D);
                      } else S = '<span>' + y.html() + '</span>';
                      return u.cmd.do('insertHTML', S), !0;
                    },
                  },
                ],
              };
            }),
            h = { width: 300, height: 230, tabs: c };
          return h;
        }
        n.default = p;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 }), (n.createListHandle = n.ClassType = void 0);
        var a = t(2),
          i = a.__importDefault(t(3)),
          f = a.__importDefault(t(372)),
          g = a.__importDefault(t(374)),
          s = a.__importDefault(t(375)),
          p = a.__importDefault(t(376)),
          u = a.__importDefault(t(377)),
          l;
        (function (d) {
          (d.Wrap = 'WrapListHandle'),
            (d.Join = 'JoinListHandle'),
            (d.StartJoin = 'StartJoinListHandle'),
            (d.EndJoin = 'EndJoinListHandle'),
            (d.Other = 'OtherListHandle');
        })((l = n.ClassType || (n.ClassType = {})));
        var v = {
          WrapListHandle: f.default,
          JoinListHandle: g.default,
          StartJoinListHandle: s.default,
          EndJoinListHandle: p.default,
          OtherListHandle: u.default,
        };
        function c(d, m, A) {
          if (d === l.Other && A === void 0) throw new Error('other 类需要传入 range');
          return d !== l.Other ? new v[d](m) : new v[d](m, A);
        }
        n.createListHandle = c;
        var h = (function () {
          function d(m) {
            (this.handle = m), this.handle.exec();
          }
          return (
            (d.prototype.getSelectionRangeElem = function () {
              return i.default(this.handle.selectionRangeElem.get());
            }),
            d
          );
        })();
        n.default = h;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(4));
        (0, r.default)(n, '__esModule', { value: !0 });
        var i = t(2),
          f = i.__importDefault(t(3)),
          g = t(58),
          s = t(47),
          p = (function (u) {
            i.__extends(l, u);
            function l(v) {
              return u.call(this, v) || this;
            }
            return (
              (l.prototype.exec = function () {
                var v = this.options,
                  c = v.listType,
                  h = v.listTarget,
                  d = v.$selectionElem,
                  m = v.$startElem,
                  A = v.$endElem,
                  y,
                  x = [],
                  S = d == null ? void 0 : d.getNodeName(),
                  D = m.prior,
                  T = A.prior;
                if (
                  (!m.prior && !A.prior) ||
                  (!(D != null && D.prev().length) && !(T != null && T.next().length))
                ) {
                  var C;
                  (0, a.default)((C = d == null ? void 0 : d.children())).call(C, function (B) {
                    x.push(f.default(B));
                  }),
                    S === c
                      ? (y = s.createElementFragment(x, s.createDocumentFragment(), 'p'))
                      : ((y = s.createElement(h)),
                        (0, a.default)(x).call(x, function (B) {
                          y.appendChild(B.elems[0]);
                        })),
                    this.selectionRangeElem.set(y),
                    s.insertBefore(d, y, d.elems[0]),
                    d.remove();
                } else {
                  for (var E = D; E.length; )
                    x.push(E), T != null && T.equal(E) ? (E = f.default(void 0)) : (E = E.next());
                  var P = D.prev(),
                    I = T.next();
                  if (
                    (S === c
                      ? (y = s.createElementFragment(x, s.createDocumentFragment(), 'p'))
                      : ((y = s.createElement(h)),
                        (0, a.default)(x).call(x, function (B) {
                          y.append(B.elems[0]);
                        })),
                    P.length && I.length)
                  ) {
                    for (var M = []; I.length; ) M.push(I), (I = I.next());
                    var N = s.createElement(S);
                    (0, a.default)(M).call(M, function (B) {
                      N.append(B.elems[0]);
                    }),
                      f.default(N).insertAfter(d),
                      this.selectionRangeElem.set(y);
                    var L = d.next();
                    L.length ? s.insertBefore(d, y, L.elems[0]) : d.parent().elems[0].append(y);
                  } else if (!P.length)
                    this.selectionRangeElem.set(y), s.insertBefore(d, y, d.elems[0]);
                  else {
                    this.selectionRangeElem.set(y);
                    var L = d.next();
                    L.length ? s.insertBefore(d, y, L.elems[0]) : d.parent().elems[0].append(y);
                  }
                }
              }),
              l
            );
          })(g.ListHandle);
        n.default = p;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(4));
        (0, r.default)(n, '__esModule', { value: !0 });
        var i = (function () {
          function f() {
            this._element = null;
          }
          return (
            (f.prototype.set = function (g) {
              if (g instanceof DocumentFragment) {
                var s,
                  p = [];
                (0, a.default)((s = g.childNodes)).call(s, function (u) {
                  p.push(u);
                }),
                  (g = p);
              }
              this._element = g;
            }),
            (f.prototype.get = function () {
              return this._element;
            }),
            (f.prototype.clear = function () {
              this._element = null;
            }),
            f
          );
        })();
        n.default = i;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(4));
        (0, r.default)(n, '__esModule', { value: !0 });
        var i = t(2),
          f = i.__importDefault(t(3)),
          g = t(58),
          s = t(47),
          p = (function (u) {
            i.__extends(l, u);
            function l(v) {
              return u.call(this, v) || this;
            }
            return (
              (l.prototype.exec = function () {
                var v,
                  c,
                  h,
                  d,
                  m,
                  A,
                  y,
                  x = this.options,
                  S = x.editor,
                  D = x.listType,
                  T = x.listTarget,
                  C = x.$startElem,
                  E = x.$endElem,
                  P,
                  I = S.selection.getSelectionRangeTopNodes(),
                  M = C == null ? void 0 : C.getNodeName(),
                  N = E == null ? void 0 : E.getNodeName();
                if (M === N)
                  if (I.length > 2)
                    if (
                      (I.shift(),
                      I.pop(),
                      (P = s.createElementFragment(
                        s.filterSelectionNodes(I),
                        s.createDocumentFragment(),
                      )),
                      M === D)
                    )
                      (v = E.children()) === null ||
                        v === void 0 ||
                        (0, a.default)(v).call(v, function (z) {
                          P.append(z);
                        }),
                        E.remove(),
                        this.selectionRangeElem.set(P),
                        C.elems[0].append(P);
                    else {
                      for (
                        var L = document.createDocumentFragment(),
                          B = document.createDocumentFragment(),
                          F = s.getStartPoint(C);
                        F.length;

                      ) {
                        var w = F.elems[0];
                        (F = F.next()), L.append(w);
                      }
                      for (var b = s.getEndPoint(E), H = []; b.length; )
                        H.unshift(b.elems[0]), (b = b.prev());
                      (0, a.default)(H).call(H, function (z) {
                        B.append(z);
                      });
                      var j = s.createElement(T);
                      j.append(L),
                        j.append(P),
                        j.append(B),
                        (P = j),
                        this.selectionRangeElem.set(P),
                        f.default(j).insertAfter(C),
                        !(!((c = C.children()) === null || c === void 0) && c.length) && C.remove(),
                        !(!((h = E.children()) === null || h === void 0) && h.length) && E.remove();
                    }
                  else {
                    I.length = 0;
                    for (var F = s.getStartPoint(C); F.length; ) I.push(F), (F = F.next());
                    for (var b = s.getEndPoint(E), H = []; b.length; ) H.unshift(b), (b = b.prev());
                    I.push.apply(I, H),
                      M === D
                        ? ((P = s.createElementFragment(I, s.createDocumentFragment(), 'p')),
                          this.selectionRangeElem.set(P),
                          s.insertBefore(C, P, E.elems[0]))
                        : ((P = s.createElement(T)),
                          (0, a.default)(I).call(I, function (J) {
                            P.append(J.elems[0]);
                          }),
                          this.selectionRangeElem.set(P),
                          f.default(P).insertAfter(C)),
                      !(!((d = C.children()) === null || d === void 0) && d.length) && E.remove(),
                      !(!((m = E.children()) === null || m === void 0) && m.length) && E.remove();
                  }
                else {
                  for (var K = [], b = s.getEndPoint(E); b.length; ) K.unshift(b), (b = b.prev());
                  for (var U = [], F = s.getStartPoint(C); F.length; ) U.push(F), (F = F.next());
                  if (
                    ((P = s.createDocumentFragment()),
                    I.shift(),
                    I.pop(),
                    (0, a.default)(U).call(U, function (Q) {
                      return P.append(Q.elems[0]);
                    }),
                    (P = s.createElementFragment(s.filterSelectionNodes(I), P)),
                    (0, a.default)(K).call(K, function (Q) {
                      return P.append(Q.elems[0]);
                    }),
                    this.selectionRangeElem.set(P),
                    M === D)
                  )
                    C.elems[0].append(P),
                      !(!((A = E.children()) === null || A === void 0) && A.length) && E.remove();
                  else if (!((y = E.children()) === null || y === void 0) && y.length) {
                    var W = E.children();
                    s.insertBefore(W, P, W.elems[0]);
                  } else E.elems[0].append(P);
                }
              }),
              l
            );
          })(g.ListHandle);
        n.default = p;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(4));
        (0, r.default)(n, '__esModule', { value: !0 });
        var i = t(2),
          f = i.__importDefault(t(3)),
          g = t(58),
          s = t(47),
          p = (function (u) {
            i.__extends(l, u);
            function l(v) {
              return u.call(this, v) || this;
            }
            return (
              (l.prototype.exec = function () {
                var v,
                  c = this.options,
                  h = c.editor,
                  d = c.listType,
                  m = c.listTarget,
                  A = c.$startElem,
                  y,
                  x = h.selection.getSelectionRangeTopNodes(),
                  S = A == null ? void 0 : A.getNodeName();
                x.shift();
                for (var D = [], T = s.getStartPoint(A); T.length; ) D.push(T), (T = T.next());
                S === d
                  ? ((y = s.createDocumentFragment()),
                    (0, a.default)(D).call(D, function (C) {
                      return y.append(C.elems[0]);
                    }),
                    (y = s.createElementFragment(s.filterSelectionNodes(x), y)),
                    this.selectionRangeElem.set(y),
                    A.elems[0].append(y))
                  : ((y = s.createElement(m)),
                    (0, a.default)(D).call(D, function (C) {
                      return y.append(C.elems[0]);
                    }),
                    (y = s.createElementFragment(s.filterSelectionNodes(x), y)),
                    this.selectionRangeElem.set(y),
                    f.default(y).insertAfter(A),
                    !(!((v = A.children()) === null || v === void 0) && v.length) && A.remove());
              }),
              l
            );
          })(g.ListHandle);
        n.default = p;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(4));
        (0, r.default)(n, '__esModule', { value: !0 });
        var i = t(2),
          f = i.__importDefault(t(3)),
          g = t(58),
          s = t(47),
          p = (function (u) {
            i.__extends(l, u);
            function l(v) {
              return u.call(this, v) || this;
            }
            return (
              (l.prototype.exec = function () {
                var v,
                  c,
                  h = this.options,
                  d = h.editor,
                  m = h.listType,
                  A = h.listTarget,
                  y = h.$endElem,
                  x,
                  S = d.selection.getSelectionRangeTopNodes(),
                  D = y == null ? void 0 : y.getNodeName();
                S.pop();
                for (var T = [], C = s.getEndPoint(y); C.length; ) T.unshift(C), (C = C.prev());
                if (D === m)
                  if (
                    ((x = s.createElementFragment(
                      s.filterSelectionNodes(S),
                      s.createDocumentFragment(),
                    )),
                    (0, a.default)(T).call(T, function (I) {
                      return x.append(I.elems[0]);
                    }),
                    this.selectionRangeElem.set(x),
                    !((v = y.children()) === null || v === void 0) && v.length)
                  ) {
                    var E = y.children();
                    s.insertBefore(E, x, E.elems[0]);
                  } else y.elems[0].append(x);
                else {
                  var P = s.filterSelectionNodes(S);
                  P.push.apply(P, T),
                    (x = s.createElementFragment(P, s.createElement(A))),
                    this.selectionRangeElem.set(x),
                    f.default(x).insertBefore(y),
                    !(!((c = y.children()) === null || c === void 0) && c.length) && y.remove();
                }
              }),
              l
            );
          })(g.ListHandle);
        n.default = p;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 });
        var a = t(2),
          i = t(58),
          f = t(47),
          g = (function (s) {
            a.__extends(p, s);
            function p(u, l) {
              var v = s.call(this, u) || this;
              return (v.range = l), v;
            }
            return (
              (p.prototype.exec = function () {
                var u = this.options,
                  l = u.editor,
                  v = u.listTarget,
                  c = l.selection.getSelectionRangeTopNodes(),
                  h = f.createElementFragment(f.filterSelectionNodes(c), f.createElement(v));
                this.selectionRangeElem.set(h), this.range.insertNode(h);
              }),
              p
            );
          })(i.ListHandle);
        n.default = g;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(4)),
          i = e(t(27));
        (0, r.default)(n, '__esModule', { value: !0 });
        var f = t(2),
          g = f.__importDefault(t(24)),
          s = f.__importDefault(t(3)),
          p = f.__importDefault(t(379)),
          u = (function (l) {
            f.__extends(v, l);
            function v(c) {
              var h = this,
                d = s.default(`<div class="w-e-menu" data-title="行高">
                    <i class="w-e-icon-row-height"></i>
                </div>`),
                m = new p.default(c, c.config.lineHeights),
                A = {
                  width: 100,
                  title: '设置行高',
                  type: 'list',
                  list: m.getItemList(),
                  clickHandler: function (x) {
                    c.selection.saveRange(), h.command(x);
                  },
                };
              return (h = l.call(this, d, c, A) || this), h;
            }
            return (
              (v.prototype.command = function (c) {
                var h = this.editor;
                h.selection.restoreSelection();
                var d = s.default(h.selection.getSelectionContainerElem());
                if (d.elems.length) {
                  if (d && h.$textElem.equal(d)) {
                    for (
                      var m = !1,
                        A = s.default(h.selection.getSelectionStartElem()).elems[0],
                        y = s.default(h.selection.getSelectionEndElem()).elems[0],
                        x = this.getDom(A),
                        S = this.getDom(y),
                        D = d.elems[0].children,
                        T = 0;
                      T < D.length;
                      T++
                    ) {
                      var C = D[T];
                      if (
                        s.default(C).getNodeName() === 'P' &&
                        (C === x && (m = !0), m && (s.default(C).css('line-height', c), C === S))
                      ) {
                        m = !1;
                        return;
                      }
                    }
                    h.selection.createRangeByElems(A, y);
                    return;
                  }
                  var E = d.elems[0],
                    P = this.getDom(E);
                  s.default(P).getNodeName() === 'P' &&
                    (s.default(P).css('line-height', c), h.selection.createRangeByElems(P, P));
                }
              }),
              (v.prototype.getDom = function (c) {
                var h = s.default(c).elems[0];
                if (!h.parentNode) return h;
                function d(m, A) {
                  var y = s.default(m.parentNode);
                  return A.$textElem.equal(y) ? m : d(y.elems[0], A);
                }
                return (h = d(h, this.editor)), h;
              }),
              (v.prototype.styleProcessing = function (c) {
                var h = '';
                return (
                  (0, a.default)(c).call(c, function (d) {
                    d !== '' &&
                      (0, i.default)(d).call(d, 'line-height') === -1 &&
                      (h = h + d + ';');
                  }),
                  h
                );
              }),
              (v.prototype.setRange = function (c, h) {
                var d = this.editor,
                  m = window.getSelection ? window.getSelection() : document.getSelection();
                m == null || m.removeAllRanges();
                var A = document.createRange(),
                  y = c,
                  x = h;
                A.setStart(y, 0),
                  A.setEnd(x, 1),
                  m == null || m.addRange(A),
                  d.selection.saveRange(),
                  m == null || m.removeAllRanges(),
                  d.selection.restoreSelection();
              }),
              (v.prototype.tryChangeActive = function () {
                var c = this.editor,
                  h = c.selection.getSelectionContainerElem();
                if (!(h && c.$textElem.equal(h))) {
                  var d = s.default(c.selection.getSelectionStartElem());
                  if (d.length !== 0) {
                    d = this.getDom(d.elems[0]);
                    var m = d.getAttribute('style') ? d.getAttribute('style') : '';
                    m && (0, i.default)(m).call(m, 'line-height') !== -1
                      ? this.active()
                      : this.unActive();
                  }
                }
              }),
              v
            );
          })(g.default);
        n.default = u;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(4));
        (0, r.default)(n, '__esModule', { value: !0 });
        var i = t(2),
          f = i.__importDefault(t(3)),
          g = (function () {
            function s(p, u) {
              var l = this;
              (this.itemList = [
                { $elem: f.default('<span>' + p.i18next.t('默认') + '</span>'), value: '' },
              ]),
                (0, a.default)(u).call(u, function (v) {
                  l.itemList.push({ $elem: f.default('<span>' + v + '</span>'), value: v });
                });
            }
            return (
              (s.prototype.getItemList = function () {
                return this.itemList;
              }),
              s
            );
          })();
        n.default = g;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(3)),
          f = a.__importDefault(t(23)),
          g = (function (s) {
            a.__extends(p, s);
            function p(u) {
              var l = this,
                v = i.default(`<div class="w-e-menu" data-title="撤销">
                <i class="w-e-icon-undo"></i>
            </div>`);
              return (l = s.call(this, v, u) || this), l;
            }
            return (
              (p.prototype.clickHandler = function () {
                var u = this.editor;
                u.history.revoke();
                var l = u.$textElem.children();
                if (l != null && l.length) {
                  var v = l.last();
                  u.selection.createRangeByElem(v, !1, !0), u.selection.restoreSelection();
                }
              }),
              (p.prototype.tryChangeActive = function () {
                this.editor.isCompatibleMode ||
                  (this.editor.history.size[0] ? this.active() : this.unActive());
              }),
              p
            );
          })(f.default);
        n.default = g;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(3)),
          f = a.__importDefault(t(23)),
          g = (function (s) {
            a.__extends(p, s);
            function p(u) {
              var l = this,
                v = i.default(`<div class="w-e-menu" data-title="恢复">
                <i class="w-e-icon-redo"></i>
            </div>`);
              return (l = s.call(this, v, u) || this), l;
            }
            return (
              (p.prototype.clickHandler = function () {
                var u = this.editor;
                u.history.restore();
                var l = u.$textElem.children();
                if (l != null && l.length) {
                  var v = l.last();
                  u.selection.createRangeByElem(v, !1, !0), u.selection.restoreSelection();
                }
              }),
              (p.prototype.tryChangeActive = function () {
                this.editor.isCompatibleMode ||
                  (this.editor.history.size[1] ? this.active() : this.unActive());
              }),
              p
            );
          })(f.default);
        n.default = g;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(38)),
          f = a.__importDefault(t(3)),
          g = a.__importDefault(t(383)),
          s = a.__importDefault(t(33)),
          p = a.__importDefault(t(392)),
          u = (function (l) {
            a.__extends(v, l);
            function v(c) {
              var h = this,
                d = f.default(
                  '<div class="w-e-menu" data-title="表格"><i class="w-e-icon-table2"></i></div>',
                );
              return (h = l.call(this, d, c) || this), p.default(c), h;
            }
            return (
              (v.prototype.clickHandler = function () {
                this.createPanel();
              }),
              (v.prototype.createPanel = function () {
                var c = g.default(this.editor),
                  h = new s.default(this, c);
                h.create();
              }),
              (v.prototype.tryChangeActive = function () {}),
              v
            );
          })(i.default);
        n.default = u;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(384));
        (0, r.default)(n, '__esModule', { value: !0 });
        var i = t(2),
          f = t(6),
          g = i.__importDefault(t(3));
        t(389);
        var s = i.__importDefault(t(391));
        function p(l) {
          return l > 0 && (0, a.default)(l);
        }
        function u(l) {
          var v = new s.default(l),
            c = f.getRandom('w-col-id'),
            h = f.getRandom('w-row-id'),
            d = f.getRandom('btn-link'),
            m = 'menus.panelMenus.table.',
            A = function (D) {
              return l.i18next.t(D);
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
                  h +
                  `"  type="text" class="w-e-table-input" value="5"/></td>
                        <span>` +
                  A(m + '行') +
                  `</span>
                        <input id="` +
                  c +
                  `" type="text" class="w-e-table-input" value="5"/></td>
                        <span>` +
                  (A(m + '列') + A(m + '的') + A(m + '表格')) +
                  `</span>
                    </div>
                    <div class="w-e-button-container">
                        <button type="button" id="` +
                  d +
                  '" class="right">' +
                  A('插入') +
                  `</button>
                    </div>
                </div>`,
                events: [
                  {
                    selector: '#' + d,
                    type: 'click',
                    fn: function () {
                      var D = Number(g.default('#' + c).val()),
                        T = Number(g.default('#' + h).val());
                      return p(T) && p(D)
                        ? (v.createAction(T, D), !0)
                        : (l.config.customAlert('表格行列请输入正整数', 'warning'), !1);
                    },
                    bindEnter: !0,
                  },
                ],
              },
            ],
            x = { width: 330, height: 0, tabs: [] };
          return x.tabs.push(y[0]), x;
        }
        n.default = u;
      },
      function (o, n, t) {
        o.exports = t(385);
      },
      function (o, n, t) {
        var e = t(386);
        o.exports = e;
      },
      function (o, n, t) {
        t(387);
        var e = t(9);
        o.exports = e.Number.isInteger;
      },
      function (o, n, t) {
        var e = t(5),
          r = t(388);
        e({ target: 'Number', stat: !0 }, { isInteger: r });
      },
      function (o, n, t) {
        var e = t(13),
          r = Math.floor;
        o.exports = function (i) {
          return !e(i) && isFinite(i) && r(i) === i;
        };
      },
      function (o, n, t) {
        var e = t(20),
          r = t(390);
        (r = r.__esModule ? r.default : r), typeof r == 'string' && (r = [[o.i, r, '']]);
        var a = {};
        (a.insert = 'head'), (a.singleton = !1), e(r, a), (o.exports = r.locals || {});
      },
      function (o, n, t) {
        var e = t(21);
        (n = e(!1)),
          n.push([
            o.i,
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
          (o.exports = n);
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 });
        var a = t(2),
          i = t(7),
          f = a.__importDefault(t(3)),
          g = (function () {
            function s(p) {
              this.editor = p;
            }
            return (
              (s.prototype.createAction = function (p, u) {
                var l = this.editor,
                  v = f.default(l.selection.getSelectionContainerElem()),
                  c = f.default(v.elems[0]).parentUntilEditor('UL', l),
                  h = f.default(v.elems[0]).parentUntilEditor('OL', l);
                if (!(c || h)) {
                  var d = this.createTableHtml(p, u);
                  l.cmd.do('insertHTML', d);
                }
              }),
              (s.prototype.createTableHtml = function (p, u) {
                for (var l = '', v = '', c = 0; c < p; c++) {
                  v = '';
                  for (var h = 0; h < u; h++)
                    c === 0 ? (v = v + '<th></th>') : (v = v + '<td></td>');
                  l = l + '<tr>' + v + '</tr>';
                }
                var d =
                  '<table border="0" width="100%" cellpadding="0" cellspacing="0"><tbody>' +
                  l +
                  ('</tbody></table>' + i.EMPTY_P);
                return d;
              }),
              s
            );
          })();
        n.default = g;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(393)),
          f = t(400);
        function g(s) {
          i.default(s), f.bindEventKeyboardEvent(s), f.bindClickEvent(s);
        }
        n.default = g;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(3)),
          f = a.__importDefault(t(39)),
          g = a.__importDefault(t(394)),
          s = a.__importDefault(t(399)),
          p = t(7);
        function u(h) {
          var d;
          function m(y) {
            var x = new s.default(h),
              S = 'menus.panelMenus.table.',
              D = function (E, P) {
                return P === void 0 && (P = S), h.i18next.t(P + E);
              },
              T = [
                {
                  $elem: i.default('<span>' + D('删除表格') + '</span>'),
                  onClick: function (E, P) {
                    return (
                      E.selection.createRangeByElem(P),
                      E.selection.restoreSelection(),
                      E.cmd.do('insertHTML', p.EMPTY_P),
                      !0
                    );
                  },
                },
                {
                  $elem: i.default('<span>' + D('添加行') + '</span>'),
                  onClick: function (E, P) {
                    var I = l(E);
                    if (I) return !0;
                    var M = i.default(E.selection.getSelectionStartElem()),
                      N = x.getRowNode(M.elems[0]);
                    if (!N) return !0;
                    var L = Number(x.getCurrentRowIndex(P.elems[0], N)),
                      B = x.getTableHtml(P.elems[0]),
                      F = x.getTableHtml(g.default.ProcessingRow(i.default(B), L).elems[0]);
                    return (
                      (F = c(P, F)),
                      E.selection.createRangeByElem(P),
                      E.selection.restoreSelection(),
                      E.cmd.do('insertHTML', F),
                      !0
                    );
                  },
                },
                {
                  $elem: i.default('<span>' + D('删除行') + '</span>'),
                  onClick: function (E, P) {
                    var I = l(E);
                    if (I) return !0;
                    var M = i.default(E.selection.getSelectionStartElem()),
                      N = x.getRowNode(M.elems[0]);
                    if (!N) return !0;
                    var L = Number(x.getCurrentRowIndex(P.elems[0], N)),
                      B = x.getTableHtml(P.elems[0]),
                      F = g.default.DeleteRow(i.default(B), L).elems[0].children[0].children.length,
                      w = '';
                    return (
                      E.selection.createRangeByElem(P),
                      E.selection.restoreSelection(),
                      F === 0
                        ? (w = p.EMPTY_P)
                        : (w = x.getTableHtml(g.default.DeleteRow(i.default(B), L).elems[0])),
                      (w = c(P, w)),
                      E.cmd.do('insertHTML', w),
                      !0
                    );
                  },
                },
                {
                  $elem: i.default('<span>' + D('添加列') + '</span>'),
                  onClick: function (E, P) {
                    var I = l(E);
                    if (I) return !0;
                    var M = i.default(E.selection.getSelectionStartElem()),
                      N = x.getCurrentColIndex(M.elems[0]),
                      L = x.getTableHtml(P.elems[0]),
                      B = x.getTableHtml(g.default.ProcessingCol(i.default(L), N).elems[0]);
                    return (
                      (B = c(P, B)),
                      E.selection.createRangeByElem(P),
                      E.selection.restoreSelection(),
                      E.cmd.do('insertHTML', B),
                      !0
                    );
                  },
                },
                {
                  $elem: i.default('<span>' + D('删除列') + '</span>'),
                  onClick: function (E, P) {
                    var I = l(E);
                    if (I) return !0;
                    var M = i.default(E.selection.getSelectionStartElem()),
                      N = x.getCurrentColIndex(M.elems[0]),
                      L = x.getTableHtml(P.elems[0]),
                      B = g.default.DeleteCol(i.default(L), N),
                      F = B.elems[0].children[0].children[0].children.length,
                      w = '';
                    return (
                      E.selection.createRangeByElem(P),
                      E.selection.restoreSelection(),
                      F === 0 ? (w = p.EMPTY_P) : (w = x.getTableHtml(B.elems[0])),
                      (w = c(P, w)),
                      E.cmd.do('insertHTML', w),
                      !0
                    );
                  },
                },
                {
                  $elem: i.default('<span>' + D('设置表头') + '</span>'),
                  onClick: function (E, P) {
                    var I = l(E);
                    if (I) return !0;
                    var M = i.default(E.selection.getSelectionStartElem()),
                      N = x.getRowNode(M.elems[0]);
                    if (!N) return !0;
                    var L = Number(x.getCurrentRowIndex(P.elems[0], N));
                    L !== 0 && (L = 0);
                    var B = x.getTableHtml(P.elems[0]),
                      F = x.getTableHtml(g.default.setTheHeader(i.default(B), L, 'th').elems[0]);
                    return (
                      (F = c(P, F)),
                      E.selection.createRangeByElem(P),
                      E.selection.restoreSelection(),
                      E.cmd.do('insertHTML', F),
                      !0
                    );
                  },
                },
                {
                  $elem: i.default('<span>' + D('取消表头') + '</span>'),
                  onClick: function (E, P) {
                    var I = i.default(E.selection.getSelectionStartElem()),
                      M = x.getRowNode(I.elems[0]);
                    if (!M) return !0;
                    var N = Number(x.getCurrentRowIndex(P.elems[0], M));
                    N !== 0 && (N = 0);
                    var L = x.getTableHtml(P.elems[0]),
                      B = x.getTableHtml(g.default.setTheHeader(i.default(L), N, 'td').elems[0]);
                    return (
                      (B = c(P, B)),
                      E.selection.createRangeByElem(P),
                      E.selection.restoreSelection(),
                      E.cmd.do('insertHTML', B),
                      !0
                    );
                  },
                },
              ];
            (d = new f.default(h, y, T)), d.create();
          }
          function A() {
            d && (d.remove(), (d = null));
          }
          return { showTableTooltip: m, hideTableTooltip: A };
        }
        function l(h) {
          var d = h.selection.getSelectionStartElem(),
            m = h.selection.getSelectionEndElem();
          return (d == null ? void 0 : d.elems[0]) !== (m == null ? void 0 : m.elems[0]);
        }
        function v(h) {
          var d = u(h),
            m = d.showTableTooltip,
            A = d.hideTableTooltip;
          h.txt.eventHooks.tableClickEvents.push(m),
            h.txt.eventHooks.clickEvents.push(A),
            h.txt.eventHooks.keyupEvents.push(A),
            h.txt.eventHooks.toolbarClickEvents.push(A),
            h.txt.eventHooks.menuClickEvents.push(A),
            h.txt.eventHooks.textScrollEvents.push(A);
        }
        n.default = v;
        function c(h, d) {
          var m = h.elems[0].nextSibling;
          return (!m || m.innerHTML === '<br>') && (d += '' + p.EMPTY_P), d;
        }
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(45)),
          i = e(t(91)),
          f = e(t(4)),
          g = e(t(138));
        (0, r.default)(n, '__esModule', { value: !0 });
        var s = t(2),
          p = s.__importDefault(t(3));
        function u(A, y) {
          for (
            var x = m(A),
              S = (0, a.default)(Array.prototype).apply(x.children),
              D = S[0].children.length,
              T = document.createElement('tr'),
              C = 0;
            C < D;
            C++
          ) {
            var E = document.createElement('td');
            T.appendChild(E);
          }
          return (0, i.default)(S).call(S, y + 1, 0, T), d(x, S), p.default(x.parentNode);
        }
        function l(A, y) {
          for (
            var x = m(A),
              S = (0, a.default)(Array.prototype).apply(x.children),
              D = function (E) {
                var P,
                  I = [];
                for (
                  (0, f.default)((P = (0, g.default)(S[E].children))).call(P, function (L) {
                    I.push(L);
                  });
                  S[E].children.length !== 0;

                )
                  S[E].removeChild(S[E].children[0]);
                var M =
                  p.default(I[0]).getNodeName() !== 'TH'
                    ? document.createElement('td')
                    : document.createElement('th');
                (0, i.default)(I).call(I, y + 1, 0, M);
                for (var N = 0; N < I.length; N++) S[E].appendChild(I[N]);
              },
              T = 0;
            T < S.length;
            T++
          )
            D(T);
          return d(x, S), p.default(x.parentNode);
        }
        function v(A, y) {
          var x = m(A),
            S = (0, a.default)(Array.prototype).apply(x.children);
          return (0, i.default)(S).call(S, y, 1), d(x, S), p.default(x.parentNode);
        }
        function c(A, y) {
          for (
            var x = m(A),
              S = (0, a.default)(Array.prototype).apply(x.children),
              D = function (E) {
                var P,
                  I = [];
                for (
                  (0, f.default)((P = (0, g.default)(S[E].children))).call(P, function (N) {
                    I.push(N);
                  });
                  S[E].children.length !== 0;

                )
                  S[E].removeChild(S[E].children[0]);
                (0, i.default)(I).call(I, y, 1);
                for (var M = 0; M < I.length; M++) S[E].appendChild(I[M]);
              },
              T = 0;
            T < S.length;
            T++
          )
            D(T);
          return d(x, S), p.default(x.parentNode);
        }
        function h(A, y, x) {
          for (
            var S = m(A),
              D = (0, a.default)(Array.prototype).apply(S.children),
              T = D[y].children,
              C = document.createElement('tr'),
              E = function (M) {
                var N,
                  L = document.createElement(x),
                  B = T[M];
                (0, f.default)((N = (0, g.default)(B.childNodes))).call(N, function (F) {
                  L.appendChild(F);
                }),
                  C.appendChild(L);
              },
              P = 0;
            P < T.length;
            P++
          )
            E(P);
          return (0, i.default)(D).call(D, y, 1, C), d(S, D), p.default(S.parentNode);
        }
        function d(A, y) {
          for (; A.children.length !== 0; ) A.removeChild(A.children[0]);
          for (var x = 0; x < y.length; x++) A.appendChild(y[x]);
        }
        function m(A) {
          var y = A.elems[0].children[0];
          return (
            y.nodeName === 'COLGROUP' && (y = A.elems[0].children[A.elems[0].children.length - 1]),
            y
          );
        }
        n.default = {
          ProcessingRow: u,
          ProcessingCol: l,
          DeleteRow: v,
          DeleteCol: c,
          setTheHeader: h,
        };
      },
      function (o, n, t) {
        var e = t(396);
        o.exports = e;
      },
      function (o, n, t) {
        t(50), t(397);
        var e = t(9);
        o.exports = e.Array.from;
      },
      function (o, n, t) {
        var e = t(5),
          r = t(398),
          a = t(115),
          i = !a(function (f) {
            Array.from(f);
          });
        e({ target: 'Array', stat: !0, forced: i }, { from: r });
      },
      function (o, n, t) {
        var e = t(40),
          r = t(31),
          a = t(114),
          i = t(112),
          f = t(35),
          g = t(69),
          s = t(113);
        o.exports = function (u) {
          var l = r(u),
            v = typeof this == 'function' ? this : Array,
            c = arguments.length,
            h = c > 1 ? arguments[1] : void 0,
            d = h !== void 0,
            m = s(l),
            A = 0,
            y,
            x,
            S,
            D,
            T,
            C;
          if (
            (d && (h = e(h, c > 2 ? arguments[2] : void 0, 2)), m != null && !(v == Array && i(m)))
          )
            for (D = m.call(l), T = D.next, x = new v(); !(S = T.call(D)).done; A++)
              (C = d ? a(D, h, [S.value, A], !0) : S.value), g(x, A, C);
          else
            for (y = f(l.length), x = new v(y); y > A; A++) (C = d ? h(l[A], A) : l[A]), g(x, A, C);
          return (x.length = A), x;
        };
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(4)),
          i = e(t(138));
        (0, r.default)(n, '__esModule', { value: !0 });
        var f = t(2),
          g = f.__importDefault(t(3)),
          s = (function () {
            function p(u) {
              this.editor = u;
            }
            return (
              (p.prototype.getRowNode = function (u) {
                var l,
                  v = g.default(u).elems[0];
                return (
                  v.parentNode &&
                    (v =
                      (l = g.default(v).parentUntil('TR', v)) === null || l === void 0
                        ? void 0
                        : l.elems[0]),
                  v
                );
              }),
              (p.prototype.getCurrentRowIndex = function (u, l) {
                var v,
                  c = 0,
                  h = u.children[0];
                return (
                  h.nodeName === 'COLGROUP' && (h = u.children[u.children.length - 1]),
                  (0, a.default)((v = (0, i.default)(h.children))).call(v, function (d, m) {
                    d === l && (c = m);
                  }),
                  c
                );
              }),
              (p.prototype.getCurrentColIndex = function (u) {
                var l,
                  v,
                  c = 0,
                  h =
                    g.default(u).getNodeName() === 'TD' || g.default(u).getNodeName() === 'TH'
                      ? u
                      : (v = g.default(u).parentUntil('TD', u)) === null || v === void 0
                      ? void 0
                      : v.elems[0],
                  d = g.default(h).parent();
                return (
                  (0, a.default)((l = (0, i.default)(d.elems[0].children))).call(
                    l,
                    function (m, A) {
                      m === h && (c = A);
                    },
                  ),
                  c
                );
              }),
              (p.prototype.getTableHtml = function (u) {
                var l =
                  '<table border="0" width="100%" cellpadding="0" cellspacing="0">' +
                  g.default(u).html() +
                  '</table>';
                return l;
              }),
              p
            );
          })();
        n.default = s;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 }),
          (n.bindEventKeyboardEvent = n.bindClickEvent = void 0);
        var a = t(2),
          i = a.__importDefault(t(3));
        function f(p) {
          if (!p.length) return !1;
          var u = p.elems[0];
          return u.nodeName === 'P' && u.innerHTML === '<br>';
        }
        function g(p) {
          function u(l, v) {
            if (v.detail >= 3) {
              var c = window.getSelection();
              if (c) {
                var h = c.focusNode,
                  d = c.anchorNode,
                  m = i.default(d == null ? void 0 : d.parentElement);
                if (!l.isContain(i.default(h))) {
                  var A = m.elems[0].tagName === 'TD' ? m : m.parentUntilEditor('td', p);
                  if (A) {
                    var y = p.selection.getRange();
                    y == null || y.setEnd(A.elems[0], A.elems[0].childNodes.length),
                      p.selection.restoreSelection();
                  }
                }
              }
            }
          }
          p.txt.eventHooks.tableClickEvents.push(u);
        }
        n.bindClickEvent = g;
        function s(p) {
          var u = p.txt,
            l = p.selection,
            v = u.eventHooks.keydownEvents;
          v.push(function (c) {
            p.selection.saveRange();
            var h = l.getSelectionContainerElem();
            if (h) {
              var d = h.getNodeTop(p),
                m = d.length && d.prev().length ? d.prev() : null;
              if (
                m &&
                m.getNodeName() === 'TABLE' &&
                l.isSelectionEmpty() &&
                l.getCursorPos() === 0 &&
                c.keyCode === 8
              ) {
                var A = d.next(),
                  y = !!A.length;
                y && f(d) && (d.remove(), p.selection.setRangeToElem(A.elems[0])),
                  c.preventDefault();
              }
            }
          });
        }
        n.bindEventKeyboardEvent = s;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(26));
        (0, r.default)(n, '__esModule', { value: !0 }), (n.formatCodeHtml = void 0);
        var i = t(2),
          f = i.__importDefault(t(38)),
          g = i.__importDefault(t(3)),
          s = t(6),
          p = i.__importDefault(t(402)),
          u = i.__importDefault(t(139)),
          l = i.__importDefault(t(33)),
          v = i.__importDefault(t(403));
        function c(d, m) {
          if (!m) return m;
          return (m = y(m)), (m = A(m)), (m = s.replaceSpecialSymbol(m)), m;
          function A(x) {
            var S = x.match(/<pre[\s|\S]+?\/pre>/g);
            return (
              S === null ||
                (0, a.default)(S).call(S, function (D) {
                  x = x.replace(
                    D,
                    D.replace(
                      /<\/code><code>/g,
                      `
`,
                    ).replace(/<br>/g, ''),
                  );
                }),
              x
            );
          }
          function y(x) {
            var S,
              D = x.match(/<span\sclass="hljs[\s|\S]+?\/span>/gm);
            if (!D || !D.length) return x;
            for (
              var T = (0, a.default)((S = s.deepClone(D))).call(S, function (E) {
                  return (E = E.replace(/<span\sclass="hljs[^>]+>/, '')), E.replace(/<\/span>/, '');
                }),
                C = 0;
              C < D.length;
              C++
            )
              x = x.replace(D[C], T[C]);
            return y(x);
          }
        }
        n.formatCodeHtml = c;
        var h = (function (d) {
          i.__extends(m, d);
          function m(A) {
            var y = this,
              x = g.default(
                '<div class="w-e-menu" data-title="代码"><i class="w-e-icon-terminal"></i></div>',
              );
            return (y = d.call(this, x, A) || this), v.default(A), y;
          }
          return (
            (m.prototype.insertLineCode = function (A) {
              var y = this.editor,
                x = g.default('<code>' + A + '</code>');
              y.cmd.do('insertElem', x),
                y.selection.createRangeByElem(x, !1),
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
              var x = p.default(this.editor, A, y),
                S = new l.default(this, x);
              S.create();
            }),
            (m.prototype.tryChangeActive = function () {
              var A = this.editor;
              u.default(A) ? this.active() : this.unActive();
            }),
            m
          );
        })(f.default);
        n.default = h;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(26));
        (0, r.default)(n, '__esModule', { value: !0 });
        var i = t(2),
          f = t(6),
          g = i.__importDefault(t(3)),
          s = i.__importDefault(t(139)),
          p = t(7);
        function u(l, v, c) {
          var h,
            d = f.getRandom('input-iframe'),
            m = f.getRandom('select'),
            A = f.getRandom('btn-ok');
          function y(T, C) {
            var E,
              P = s.default(l);
            P && x();
            var I =
              (E = l.selection.getSelectionStartElem()) === null || E === void 0
                ? void 0
                : E.elems[0].innerHTML;
            I && l.cmd.do('insertHTML', p.EMPTY_P);
            var M = C.replace(/</g, '&lt;').replace(/>/g, '&gt;');
            l.highlight && (M = l.highlight.highlightAuto(M).value),
              l.cmd.do('insertHTML', '<pre><code class="' + T + '">' + M + '</code></pre>');
            var N = l.selection.getSelectionStartElem(),
              L = N == null ? void 0 : N.getNodeTop(l);
            (L == null ? void 0 : L.getNextSibling().elems.length) === 0 &&
              g.default(p.EMPTY_P).insertAfter(L);
          }
          function x() {
            if (s.default(l)) {
              var T = l.selection.getSelectionStartElem(),
                C = T == null ? void 0 : T.getNodeTop(l);
              C && (l.selection.createRangeByElem(C), l.selection.restoreSelection());
            }
          }
          var S = function (C) {
              return l.i18next.t(C);
            },
            D = {
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
                    (0, a.default)((h = l.config.languageType)).call(h, function (T) {
                      return (
                        '<option ' +
                        (c == T ? 'selected' : '') +
                        ' value ="' +
                        T +
                        '">' +
                        T +
                        '</option>'
                      );
                    }) +
                    `
                        </select>
                        <textarea id="` +
                    d +
                    '" type="text" class="wang-code-textarea" placeholder="" style="height: 160px">' +
                    v.replace(/&quot;/g, '"') +
                    `</textarea>
                        <div class="w-e-button-container">
                            <button type="button" id="` +
                    A +
                    '" class="right">' +
                    (s.default(l) ? S('修改') : S('插入')) +
                    `</button>
                        </div>
                    </div>`,
                  events: [
                    {
                      selector: '#' + A,
                      type: 'click',
                      fn: function () {
                        var C = document.getElementById(d),
                          E = g.default('#' + m),
                          P = E.val(),
                          I = C.value;
                        if (I) return s.default(l) ? !1 : (y(P, I), !0);
                      },
                    },
                  ],
                },
              ],
            };
          return D;
        }
        n.default = u;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(404)),
          f = a.__importDefault(t(405));
        function g(s) {
          i.default(s), f.default(s);
        }
        n.default = g;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 }), (n.createShowHideFn = void 0);
        var a = t(2),
          i = a.__importDefault(t(3)),
          f = a.__importDefault(t(39));
        function g(p) {
          var u;
          function l(c) {
            var h = 'menus.panelMenus.code.',
              d = function (y, x) {
                return x === void 0 && (x = h), p.i18next.t(x + y);
              },
              m = [
                {
                  $elem: i.default('<span>' + d('删除代码') + '</span>'),
                  onClick: function (y, x) {
                    return x.remove(), !0;
                  },
                },
              ];
            (u = new f.default(p, c, m)), u.create();
          }
          function v() {
            u && (u.remove(), (u = null));
          }
          return { showCodeTooltip: l, hideCodeTooltip: v };
        }
        n.createShowHideFn = g;
        function s(p) {
          var u = g(p),
            l = u.showCodeTooltip,
            v = u.hideCodeTooltip;
          p.txt.eventHooks.codeClickEvents.push(l),
            p.txt.eventHooks.clickEvents.push(v),
            p.txt.eventHooks.toolbarClickEvents.push(v),
            p.txt.eventHooks.menuClickEvents.push(v),
            p.txt.eventHooks.textScrollEvents.push(v);
        }
        n.default = s;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 });
        var a = t(2),
          i = t(7),
          f = a.__importDefault(t(3));
        function g(s) {
          var p = s.$textElem,
            u = s.selection,
            l = s.txt,
            v = l.eventHooks.keydownEvents;
          v.push(function (c) {
            var h;
            if (c.keyCode === 40) {
              var d = u.getSelectionContainerElem(),
                m = (h = p.children()) === null || h === void 0 ? void 0 : h.last();
              if (
                (d == null ? void 0 : d.elems[0].tagName) === 'XMP' &&
                (m == null ? void 0 : m.elems[0].tagName) === 'PRE'
              ) {
                var A = f.default(i.EMPTY_P);
                p.append(A);
              }
            }
          }),
            v.push(function (c) {
              s.selection.saveRange();
              var h = u.getSelectionContainerElem();
              if (h) {
                var d = h.getNodeTop(s),
                  m = d == null ? void 0 : d.prev(),
                  A = d == null ? void 0 : d.getNextSibling();
                if (
                  m.length &&
                  (m == null ? void 0 : m.getNodeName()) === 'PRE' &&
                  A.length === 0 &&
                  u.getCursorPos() === 0 &&
                  c.keyCode === 8
                ) {
                  var y = f.default(i.EMPTY_P);
                  p.append(y);
                }
              }
            });
        }
        n.default = g;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(23)),
          f = a.__importDefault(t(3)),
          g = a.__importDefault(t(407)),
          s = t(6),
          p = t(7),
          u = (function (l) {
            a.__extends(v, l);
            function v(c) {
              var h = this,
                d = f.default(
                  '<div class="w-e-menu" data-title="分割线"><i class="w-e-icon-split-line"></i></div>',
                );
              return (h = l.call(this, d, c) || this), g.default(c), h;
            }
            return (
              (v.prototype.clickHandler = function () {
                var c = this.editor,
                  h = c.selection.getRange(),
                  d = c.selection.getSelectionContainerElem();
                if (d != null && d.length) {
                  var m = f.default(d.elems[0]),
                    A = m.parentUntil('TABLE', d.elems[0]),
                    y = m.children();
                  m.getNodeName() !== 'CODE' &&
                    ((A && f.default(A.elems[0]).getNodeName() === 'TABLE') ||
                      (y &&
                        y.length !== 0 &&
                        f.default(y.elems[0]).getNodeName() === 'IMG' &&
                        !(h != null && h.collapsed)) ||
                      this.createSplitLine());
                }
              }),
              (v.prototype.createSplitLine = function () {
                var c = '<hr/>' + p.EMPTY_P;
                s.UA.isFirefox && (c = '<hr/><p></p>'), this.editor.cmd.do('insertHTML', c);
              }),
              (v.prototype.tryChangeActive = function () {}),
              v
            );
          })(i.default);
        n.default = u;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(408));
        function f(g) {
          i.default(g);
        }
        n.default = f;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(3)),
          f = a.__importDefault(t(39));
        function g(p) {
          var u;
          function l(c) {
            var h = [
              {
                $elem: i.default('<span>' + p.i18next.t('menus.panelMenus.删除') + '</span>'),
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
            (u = new f.default(p, c, h)), u.create();
          }
          function v() {
            u && (u.remove(), (u = null));
          }
          return { showSplitLineTooltip: l, hideSplitLineTooltip: v };
        }
        function s(p) {
          var u = g(p),
            l = u.showSplitLineTooltip,
            v = u.hideSplitLineTooltip;
          p.txt.eventHooks.splitLineEvents.push(l),
            p.txt.eventHooks.clickEvents.push(v),
            p.txt.eventHooks.keyupEvents.push(v),
            p.txt.eventHooks.toolbarClickEvents.push(v),
            p.txt.eventHooks.menuClickEvents.push(v),
            p.txt.eventHooks.textScrollEvents.push(v);
        }
        n.default = s;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(4));
        (0, r.default)(n, '__esModule', { value: !0 });
        var i = t(2),
          f = i.__importDefault(t(3)),
          g = i.__importDefault(t(23)),
          s = t(98),
          p = i.__importDefault(t(415)),
          u = i.__importDefault(t(140)),
          l = (function (v) {
            i.__extends(c, v);
            function c(h) {
              var d = this,
                m = f.default(`<div class="w-e-menu" data-title="待办事项">
                    <i class="w-e-icon-checkbox-checked"></i>
                </div>`);
              return (d = v.call(this, m, h) || this), p.default(h), d;
            }
            return (
              (c.prototype.clickHandler = function () {
                var h = this.editor;
                s.isAllTodo(h) ? (this.cancelTodo(), this.tryChangeActive()) : this.setTodo();
              }),
              (c.prototype.tryChangeActive = function () {
                s.isAllTodo(this.editor) ? this.active() : this.unActive();
              }),
              (c.prototype.setTodo = function () {
                var h = this.editor,
                  d = h.selection.getSelectionRangeTopNodes();
                (0, a.default)(d).call(d, function (m) {
                  var A,
                    y = m == null ? void 0 : m.getNodeName();
                  if (y === 'P') {
                    var x = u.default(m),
                      S = x.getTodo(),
                      D = (A = S.children()) === null || A === void 0 ? void 0 : A.getNode();
                    S.insertAfter(m), h.selection.moveCursor(D), m.remove();
                  }
                }),
                  this.tryChangeActive();
              }),
              (c.prototype.cancelTodo = function () {
                var h = this.editor,
                  d = h.selection.getSelectionRangeTopNodes();
                (0, a.default)(d).call(d, function (m) {
                  var A,
                    y,
                    x,
                    S =
                      (y =
                        (A = m.childNodes()) === null || A === void 0 ? void 0 : A.childNodes()) ===
                        null || y === void 0
                        ? void 0
                        : y.clone(!0),
                    D = f.default('<p></p>');
                  D.append(S),
                    D.insertAfter(m),
                    (x = D.childNodes()) === null || x === void 0 || x.get(0).remove(),
                    h.selection.moveCursor(D.getNode()),
                    m.remove();
                });
              }),
              c
            );
          })(g.default);
        n.default = l;
      },
      function (o, n, t) {
        o.exports = t(411);
      },
      function (o, n, t) {
        var e = t(412);
        o.exports = e;
      },
      function (o, n, t) {
        var e = t(413),
          r = Array.prototype;
        o.exports = function (a) {
          var i = a.every;
          return a === r || (a instanceof Array && i === r.every) ? e : i;
        };
      },
      function (o, n, t) {
        t(414);
        var e = t(15);
        o.exports = e('Array').every;
      },
      function (o, n, t) {
        var e = t(5),
          r = t(32).every,
          a = t(67),
          i = t(22),
          f = a('every'),
          g = i('every');
        e(
          { target: 'Array', proto: !0, forced: !f || !g },
          {
            every: function (p) {
              return r(this, p, arguments.length > 1 ? arguments[1] : void 0);
            },
          },
        );
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(4));
        (0, r.default)(n, '__esModule', { value: !0 });
        var i = t(2),
          f = i.__importDefault(t(3)),
          g = t(98),
          s = i.__importDefault(t(140)),
          p = t(98),
          u = t(7);
        function l(v) {
          function c(A) {
            var y, x;
            if (g.isAllTodo(v)) {
              A.preventDefault();
              var S = v.selection,
                D = S.getSelectionRangeTopNodes()[0],
                T = (y = D.childNodes()) === null || y === void 0 ? void 0 : y.get(0),
                C = (x = window.getSelection()) === null || x === void 0 ? void 0 : x.anchorNode,
                E = S.getRange();
              if (!(E != null && E.collapsed)) {
                var P = E == null ? void 0 : E.commonAncestorContainer.childNodes,
                  I = E == null ? void 0 : E.startContainer,
                  M = E == null ? void 0 : E.endContainer,
                  N = E == null ? void 0 : E.startOffset,
                  L = E == null ? void 0 : E.endOffset,
                  B = 0,
                  F = 0,
                  w = [];
                P == null ||
                  (0, a.default)(P).call(P, function (J, k) {
                    J.contains(I) && (B = k), J.contains(M) && (F = k);
                  }),
                  F - B > 1 &&
                    (P == null ||
                      (0, a.default)(P).call(P, function (J, k) {
                        k <= B || k >= F || w.push(J);
                      }),
                    (0, a.default)(w).call(w, function (J) {
                      J.remove();
                    })),
                  p.dealTextNode(I, N),
                  p.dealTextNode(M, L, !1),
                  v.selection.moveCursor(M, 0);
              }
              if (D.text() === '') {
                var b = f.default(u.EMPTY_P);
                b.insertAfter(D), S.moveCursor(b.getNode()), D.remove();
                return;
              }
              var H = S.getCursorPos(),
                j = g.getCursorNextNode(T == null ? void 0 : T.getNode(), C, H),
                K = s.default(f.default(j)),
                U = K.getInputContainer(),
                W = U.parent().getNode(),
                z = K.getTodo(),
                $ = U.getNode().nextSibling;
              if (
                ((T == null ? void 0 : T.text()) === '' &&
                  (T == null || T.append(f.default('<br>'))),
                z.insertAfter(D),
                !$ || ($ == null ? void 0 : $.textContent) === '')
              ) {
                if (($ == null ? void 0 : $.nodeName) !== 'BR') {
                  var Q = f.default('<br>');
                  Q.insertAfter(U);
                }
                S.moveCursor(W, 1);
              } else S.moveCursor(W);
            }
          }
          function h(A) {
            var y, x;
            if (g.isAllTodo(v)) {
              var S = v.selection,
                D = S.getSelectionRangeTopNodes()[0],
                T = (y = D.childNodes()) === null || y === void 0 ? void 0 : y.getNode(),
                C = f.default('<p></p>'),
                E = C.getNode(),
                P = (x = window.getSelection()) === null || x === void 0 ? void 0 : x.anchorNode,
                I = S.getCursorPos(),
                M = P.previousSibling;
              if (D.text() === '') {
                A.preventDefault();
                var N = f.default(u.EMPTY_P);
                N.insertAfter(D), D.remove(), S.moveCursor(N.getNode(), 0);
                return;
              }
              if (
                (M == null ? void 0 : M.nodeName) === 'SPAN' &&
                M.childNodes[0].nodeName === 'INPUT' &&
                I === 0
              ) {
                var L;
                A.preventDefault(),
                  T == null ||
                    (0, a.default)((L = T.childNodes)).call(L, function (B, F) {
                      F !== 0 && E.appendChild(B.cloneNode(!0));
                    }),
                  C.insertAfter(D),
                  D.remove();
              }
            }
          }
          function d() {
            var A = v.selection,
              y = A.getSelectionRangeTopNodes()[0];
            y &&
              p.isTodo(y) &&
              y.text() === '' &&
              (f.default(u.EMPTY_P).insertAfter(y), y.remove());
          }
          function m(A) {
            A &&
              A.target instanceof HTMLInputElement &&
              A.target.type === 'checkbox' &&
              (A.target.checked
                ? A.target.setAttribute('checked', 'true')
                : A.target.removeAttribute('checked'));
          }
          v.txt.eventHooks.enterDownEvents.push(c),
            v.txt.eventHooks.deleteUpEvents.push(d),
            v.txt.eventHooks.deleteDownEvents.push(h),
            v.txt.eventHooks.clickEvents.push(m);
        }
        n.default = l;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 }), (n.selectorValidator = void 0);
        var a = t(2),
          i = a.__importDefault(t(3)),
          f = t(6),
          g = t(7),
          s = a.__importDefault(t(130)),
          p = {
            border: '1px solid #c9d8db',
            toolbarBgColor: '#FFF',
            toolbarBottomBorder: '1px solid #EEE',
          };
        function u(v) {
          var c = v.toolbarSelector,
            h = i.default(c),
            d = v.textSelector,
            m = v.config,
            A = m.height,
            y = v.i18next,
            x = i.default('<div></div>'),
            S = i.default('<div></div>'),
            D,
            T,
            C = null;
          d == null
            ? ((T = h.children()),
              h.append(x).append(S),
              x
                .css('background-color', p.toolbarBgColor)
                .css('border', p.border)
                .css('border-bottom', p.toolbarBottomBorder),
              S.css('border', p.border)
                .css('border-top', 'none')
                .css('height', A + 'px'))
            : (h.append(x),
              (C = i.default(d).children()),
              i.default(d).append(S),
              (T = S.children())),
            (D = i.default('<div></div>')),
            D.attr('contenteditable', 'true').css('width', '100%').css('height', '100%');
          var E,
            P = v.config.placeholder;
          P !== s.default.placeholder
            ? (E = i.default('<div>' + P + '</div>'))
            : (E = i.default('<div>' + y.t(P) + '</div>')),
            E.addClass('placeholder'),
            T && T.length ? (D.append(T), E.hide()) : D.append(i.default(g.EMPTY_P)),
            C && C.length && (D.append(C), E.hide()),
            S.append(D),
            S.append(E),
            x.addClass('w-e-toolbar').css('z-index', v.zIndex.get('toolbar')),
            S.addClass('w-e-text-container'),
            S.css('z-index', v.zIndex.get()),
            D.addClass('w-e-text');
          var I = f.getRandom('toolbar-elem');
          x.attr('id', I);
          var M = f.getRandom('text-elem');
          D.attr('id', M);
          var N = S.getBoundingClientRect().height,
            L = D.getBoundingClientRect().height;
          N !== L && D.css('min-height', N + 'px'),
            (v.$toolbarElem = x),
            (v.$textContainerElem = S),
            (v.$textElem = D),
            (v.toolbarElemId = I),
            (v.textElemId = M);
        }
        n.default = u;
        function l(v) {
          var c = 'data-we-id',
            h = /^wangEditor-\d+$/,
            d = v.textSelector,
            m = v.toolbarSelector,
            A = { bar: i.default('<div></div>'), text: i.default('<div></div>') };
          if (m == null) throw new Error('错误：初始化编辑器时候未传入任何参数，请查阅文档');
          if (((A.bar = i.default(m)), !A.bar.elems.length))
            throw new Error('无效的节点选择器：' + m);
          if (h.test(A.bar.attr(c)))
            throw new Error('初始化节点已存在编辑器实例，无法重复创建编辑器');
          if (d) {
            if (((A.text = i.default(d)), !A.text.elems.length))
              throw new Error('无效的节点选择器：' + d);
            if (h.test(A.text.attr(c)))
              throw new Error('初始化节点已存在编辑器实例，无法重复创建编辑器');
          }
          A.bar.attr(c, v.id),
            A.text.attr(c, v.id),
            v.beforeDestroy(function () {
              A.bar.removeAttr(c), A.text.removeAttr(c);
            });
        }
        n.selectorValidator = l;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(3)),
          f = t(7);
        function g(s, p) {
          var u = s.$textElem,
            l = u.children();
          if (!l || !l.length) {
            u.append(i.default(f.EMPTY_P)), g(s);
            return;
          }
          var v = l.last();
          if (p) {
            var c = v.html().toLowerCase(),
              h = v.getNodeName();
            if ((c !== '<br>' && c !== '<br/>') || h !== 'P') {
              u.append(i.default(f.EMPTY_P)), g(s);
              return;
            }
          }
          s.selection.createRangeByElem(v, !1, !0),
            s.config.focus
              ? s.selection.restoreSelection()
              : s.selection.clearWindowSelectionRange();
        }
        n.default = g;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(4));
        (0, r.default)(n, '__esModule', { value: !0 });
        var i = t(2),
          f = i.__importDefault(t(3));
        function g(c) {
          s(c), p(c), u(c);
        }
        function s(c) {
          c.txt.eventHooks.changeEvents.push(function () {
            var h = c.config.onchange;
            if (h) {
              var d = c.txt.html() || '';
              (c.isFocus = !0), h(d);
            }
            c.txt.togglePlaceholder();
          });
        }
        function p(c) {
          c.isFocus = !1;
          function h(d) {
            var m = d.target,
              A = f.default(m),
              y = c.$textElem,
              x = c.$toolbarElem,
              S = y.isContain(A),
              D = x.isContain(A),
              T = x.elems[0] == d.target;
            if (S) c.isFocus || v(c), (c.isFocus = !0);
            else {
              if ((D && !T) || !c.isFocus) return;
              l(c), (c.isFocus = !1);
            }
          }
          document.activeElement === c.$textElem.elems[0] &&
            c.config.focus &&
            (v(c), (c.isFocus = !0)),
            f.default(document).on('click', h),
            c.beforeDestroy(function () {
              f.default(document).off('click', h);
            });
        }
        function u(c) {
          c.$textElem
            .on('compositionstart', function () {
              (c.isComposing = !0), c.txt.togglePlaceholder();
            })
            .on('compositionend', function () {
              (c.isComposing = !1), c.txt.togglePlaceholder();
            });
        }
        function l(c) {
          var h,
            d = c.config,
            m = d.onblur,
            A = c.txt.html() || '';
          (0, a.default)((h = c.txt.eventHooks.onBlurEvents)).call(h, function (y) {
            return y();
          }),
            m(A);
        }
        function v(c) {
          var h = c.config,
            d = h.onfocus,
            m = c.txt.html() || '';
          d(m);
        }
        n.default = g;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 });
        function a(i) {
          var f = i.config,
            g = f.lang,
            s = f.languages;
          if (i.i18next != null) {
            try {
              i.i18next.init({ ns: 'wangEditor', lng: g, defaultNS: 'wangEditor', resources: s });
            } catch (p) {
              throw new Error('i18next:' + p);
            }
            return;
          }
          i.i18next = {
            t: function (u) {
              var l = u.split('.');
              return l[l.length - 1];
            },
          };
        }
        n.default = a;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(29));
        (0, r.default)(n, '__esModule', { value: !0 }),
          (n.setUnFullScreen = n.setFullScreen = void 0);
        var i = t(2),
          f = i.__importDefault(t(3));
        t(421);
        var g = 'w-e-icon-fullscreen',
          s = 'w-e-icon-fullscreen_exit',
          p = 'w-e-full-screen-editor';
        (n.setFullScreen = function (l) {
          var v = f.default(l.toolbarSelector),
            c = l.$textContainerElem,
            h = l.$toolbarElem,
            d = (0, a.default)(h).call(h, 'i.' + g),
            m = l.config;
          d.removeClass(g), d.addClass(s), v.addClass(p), v.css('z-index', m.zIndexFullScreen);
          var A = h.getBoundingClientRect();
          c.css('height', 'calc(100% - ' + A.height + 'px)');
        }),
          (n.setUnFullScreen = function (l) {
            var v = f.default(l.toolbarSelector),
              c = l.$textContainerElem,
              h = l.$toolbarElem,
              d = (0, a.default)(h).call(h, 'i.' + s),
              m = l.config;
            d.removeClass(s),
              d.addClass(g),
              v.removeClass(p),
              v.css('z-index', 'auto'),
              c.css('height', m.height + 'px');
          });
        var u = function (v) {
          if (!v.textSelector && v.config.showFullScreen) {
            var c = v.$toolbarElem,
              h = f.default(
                `<div class="w-e-menu" data-title="全屏">
            <i class="` +
                  g +
                  `"></i>
        </div>`,
              );
            h.on('click', function (d) {
              var m,
                A = (0, a.default)((m = f.default(d.currentTarget))).call(m, 'i');
              A.hasClass(g)
                ? (h.attr('data-title', '取消全屏'), n.setFullScreen(v))
                : (h.attr('data-title', '全屏'), n.setUnFullScreen(v));
            }),
              c.append(h);
          }
        };
        n.default = u;
      },
      function (o, n, t) {
        var e = t(20),
          r = t(422);
        (r = r.__esModule ? r.default : r), typeof r == 'string' && (r = [[o.i, r, '']]);
        var a = {};
        (a.insert = 'head'), (a.singleton = !1), e(r, a), (o.exports = r.locals || {});
      },
      function (o, n, t) {
        var e = t(21);
        (n = e(!1)),
          n.push([
            o.i,
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
          (o.exports = n);
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(29));
        (0, r.default)(n, '__esModule', { value: !0 });
        var i = function (g, s) {
          var p,
            u = g.isEnable
              ? g.$textElem
              : (0, a.default)((p = g.$textContainerElem)).call(p, '.w-e-content-mantle'),
            l = (0, a.default)(u).call(u, "[id='" + s + "']"),
            v = l.getOffsetData().top;
          u.scrollTop(v);
        };
        n.default = i;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(129)),
          f = { menu: 2, panel: 2, toolbar: 1, tooltip: 1, textContainer: 1 },
          g = (function () {
            function s() {
              (this.tier = f), (this.baseZIndex = i.default.zIndex);
            }
            return (
              (s.prototype.get = function (p) {
                return p && this.tier[p] ? this.baseZIndex + this.tier[p] : this.baseZIndex;
              }),
              (s.prototype.init = function (p) {
                this.baseZIndex == i.default.zIndex && (this.baseZIndex = p.config.zIndex);
              }),
              s
            );
          })();
        n.default = g;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(70)),
          i = e(t(4));
        (0, r.default)(n, '__esModule', { value: !0 });
        var f = t(2),
          g = f.__importDefault(t(426)),
          s = t(6),
          p = t(7);
        function u(v, c) {
          return (0, a.default)(v).call(v, function (h) {
            var d = h.type,
              m = h.target,
              A = h.attributeName;
            return d != 'attributes' || (d == 'attributes' && (A == 'contenteditable' || m != c));
          });
        }
        var l = (function (v) {
          f.__extends(c, v);
          function c(h) {
            var d =
              v.call(this, function (m, A) {
                var y;
                if (((m = u(m, A.target)), (y = d.data).push.apply(y, m), h.isCompatibleMode))
                  d.asyncSave();
                else if (!h.isComposing) return d.asyncSave();
              }) || this;
            return (d.editor = h), (d.data = []), (d.asyncSave = p.EMPTY_FN), d;
          }
          return (
            (c.prototype.save = function () {
              this.data.length &&
                (this.editor.history.save(this.data), (this.data.length = 0), this.emit());
            }),
            (c.prototype.emit = function () {
              var h;
              (0, i.default)((h = this.editor.txt.eventHooks.changeEvents)).call(h, function (d) {
                return d();
              });
            }),
            (c.prototype.observe = function () {
              var h = this;
              v.prototype.observe.call(this, this.editor.$textElem.elems[0]);
              var d = this.editor.config.onchangeTimeout;
              (this.asyncSave = s.debounce(function () {
                h.save();
              }, d)),
                this.editor.isCompatibleMode ||
                  this.editor.$textElem.on('compositionend', function () {
                    h.asyncSave();
                  });
            }),
            c
          );
        })(g.default);
        n.default = l;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 });
        var a = (function () {
          function i(f, g) {
            var s = this;
            (this.options = {
              subtree: !0,
              childList: !0,
              attributes: !0,
              attributeOldValue: !0,
              characterData: !0,
              characterDataOldValue: !0,
            }),
              (this.callback = function (p) {
                f(p, s);
              }),
              (this.observer = new MutationObserver(this.callback)),
              g && (this.options = g);
          }
          return (
            (0, r.default)(i.prototype, 'target', {
              get: function () {
                return this.node;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (i.prototype.observe = function (f) {
              this.node instanceof Node || ((this.node = f), this.connect());
            }),
            (i.prototype.connect = function () {
              if (this.node) return this.observer.observe(this.node, this.options), this;
              throw new Error('还未初始化绑定，请您先绑定有效的 Node 节点');
            }),
            (i.prototype.disconnect = function () {
              var f = this.observer.takeRecords();
              f.length && this.callback(f), this.observer.disconnect();
            }),
            i
          );
        })();
        n.default = a;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(428)),
          f = a.__importDefault(t(435)),
          g = a.__importDefault(t(436)),
          s = (function () {
            function p(u) {
              (this.editor = u),
                (this.content = new i.default(u)),
                (this.scroll = new f.default(u)),
                (this.range = new g.default(u));
            }
            return (
              (0, r.default)(p.prototype, 'size', {
                get: function () {
                  return this.scroll.size;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (p.prototype.observe = function () {
                this.content.observe(),
                  this.scroll.observe(),
                  !this.editor.isCompatibleMode && this.range.observe();
              }),
              (p.prototype.save = function (u) {
                u.length &&
                  (this.content.save(u),
                  this.scroll.save(),
                  !this.editor.isCompatibleMode && this.range.save());
              }),
              (p.prototype.revoke = function () {
                this.editor.change.disconnect();
                var u = this.content.revoke();
                u &&
                  (this.scroll.revoke(),
                  this.editor.isCompatibleMode ||
                    (this.range.revoke(), this.editor.$textElem.focus())),
                  this.editor.change.connect(),
                  u && this.editor.change.emit();
              }),
              (p.prototype.restore = function () {
                this.editor.change.disconnect();
                var u = this.content.restore();
                u &&
                  (this.scroll.restore(),
                  this.editor.isCompatibleMode ||
                    (this.range.restore(), this.editor.$textElem.focus())),
                  this.editor.change.connect(),
                  u && this.editor.change.emit();
              }),
              p
            );
          })();
        n.default = s;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(429)),
          f = a.__importDefault(t(433)),
          g = (function () {
            function s(p) {
              this.editor = p;
            }
            return (
              (s.prototype.observe = function () {
                this.editor.isCompatibleMode
                  ? (this.cache = new f.default(this.editor))
                  : (this.cache = new i.default(this.editor)),
                  this.cache.observe();
              }),
              (s.prototype.save = function (p) {
                this.editor.isCompatibleMode ? this.cache.save() : this.cache.compile(p);
              }),
              (s.prototype.revoke = function () {
                var p;
                return (p = this.cache) === null || p === void 0 ? void 0 : p.revoke();
              }),
              (s.prototype.restore = function () {
                var p;
                return (p = this.cache) === null || p === void 0 ? void 0 : p.restore();
              }),
              s
            );
          })();
        n.default = g;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(99)),
          f = a.__importDefault(t(431)),
          g = t(432),
          s = (function (p) {
            a.__extends(u, p);
            function u(l) {
              var v = p.call(this, l.config.historyMaxSize) || this;
              return (v.editor = l), v;
            }
            return (
              (u.prototype.observe = function () {
                this.resetMaxSize(this.editor.config.historyMaxSize);
              }),
              (u.prototype.compile = function (l) {
                return this.save(f.default(l)), this;
              }),
              (u.prototype.revoke = function () {
                return p.prototype.revoke.call(this, function (l) {
                  g.revoke(l);
                });
              }),
              (u.prototype.restore = function () {
                return p.prototype.restore.call(this, function (l) {
                  g.restore(l);
                });
              }),
              u
            );
          })(i.default);
        n.default = s;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 }), (n.CeilStack = void 0);
        var a = (function () {
          function i(f) {
            f === void 0 && (f = 0),
              (this.data = []),
              (this.max = 0),
              (this.reset = !1),
              (f = Math.abs(f)),
              f && (this.max = f);
          }
          return (
            (i.prototype.resetMax = function (f) {
              (f = Math.abs(f)), !this.reset && !isNaN(f) && ((this.max = f), (this.reset = !0));
            }),
            (0, r.default)(i.prototype, 'size', {
              get: function () {
                return this.data.length;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (i.prototype.instack = function (f) {
              return (
                this.data.unshift(f),
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
        n.CeilStack = a;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(4)),
          i = e(t(27));
        (0, r.default)(n, '__esModule', { value: !0 }),
          (n.compliePosition = n.complieNodes = n.compileValue = n.compileType = void 0);
        var f = t(6);
        function g(h) {
          switch (h) {
            case 'childList':
              return 'node';
            case 'attributes':
              return 'attr';
            default:
              return 'text';
          }
        }
        n.compileType = g;
        function s(h) {
          switch (h.type) {
            case 'attributes':
              return h.target.getAttribute(h.attributeName) || '';
            case 'characterData':
              return h.target.textContent;
            default:
              return '';
          }
        }
        n.compileValue = s;
        function p(h) {
          var d = {};
          return (
            h.addedNodes.length && (d.add = f.toArray(h.addedNodes)),
            h.removedNodes.length && (d.remove = f.toArray(h.removedNodes)),
            d
          );
        }
        n.complieNodes = p;
        function u(h) {
          var d;
          return (
            h.previousSibling
              ? (d = { type: 'before', target: h.previousSibling })
              : h.nextSibling
              ? (d = { type: 'after', target: h.nextSibling })
              : (d = { type: 'parent', target: h.target }),
            d
          );
        }
        n.compliePosition = u;
        var l = ['UL', 'OL', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6'];
        function v(h) {
          var d = [],
            m = !1,
            A = [];
          return (
            (0, a.default)(h).call(h, function (y, x) {
              var S = {
                type: g(y.type),
                target: y.target,
                attr: y.attributeName || '',
                value: s(y) || '',
                oldValue: y.oldValue || '',
                nodes: p(y),
                position: u(y),
              };
              if ((d.push(S), !!f.UA.isFirefox)) {
                if (m && y.addedNodes.length && y.addedNodes[0].nodeType == 1) {
                  var D = y.addedNodes[0],
                    T = {
                      type: 'node',
                      target: D,
                      attr: '',
                      value: '',
                      oldValue: '',
                      nodes: { add: [m] },
                      position: { type: 'parent', target: D },
                    };
                  (0, i.default)(l).call(l, D.nodeName) != -1
                    ? ((T.nodes.add = f.toArray(D.childNodes)), d.push(T))
                    : m.nodeType == 3
                    ? (c(D, A) && (T.nodes.add = f.toArray(D.childNodes)), d.push(T))
                    : (0, i.default)(l).call(l, y.target.nodeName) == -1 &&
                      c(D, A) &&
                      ((T.nodes.add = f.toArray(D.childNodes)), d.push(T));
                }
                S.type == 'node' && y.removedNodes.length == 1
                  ? ((m = y.removedNodes[0]), A.push(m))
                  : ((m = !1), (A.length = 0));
              }
            }),
            d
          );
        }
        n.default = v;
        function c(h, d) {
          for (var m = 0, A = d.length - 1; A > 0 && h.contains(d[A]); A--) m++;
          return m;
        }
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(4)),
          i = e(t(94));
        (0, r.default)(n, '__esModule', { value: !0 }), (n.restore = n.revoke = void 0);
        function f(A, y) {
          var x = A.position.target;
          switch (A.position.type) {
            case 'before':
              x.nextSibling
                ? ((x = x.nextSibling),
                  (0, a.default)(y).call(y, function (S) {
                    A.target.insertBefore(S, x);
                  }))
                : (0, a.default)(y).call(y, function (S) {
                    A.target.appendChild(S);
                  });
              break;
            case 'after':
              (0, a.default)(y).call(y, function (S) {
                A.target.insertBefore(S, x);
              });
              break;
            default:
              (0, a.default)(y).call(y, function (S) {
                x.appendChild(S);
              });
              break;
          }
        }
        function g(A) {
          for (var y = 0, x = (0, i.default)(A.nodes); y < x.length; y++) {
            var S = x[y],
              D = S[0],
              T = S[1];
            switch (D) {
              case 'add':
                (0, a.default)(T).call(T, function (C) {
                  A.target.removeChild(C);
                });
                break;
              default: {
                f(A, T);
                break;
              }
            }
          }
        }
        function s(A) {
          var y = A.target;
          A.oldValue == null ? y.removeAttribute(A.attr) : y.setAttribute(A.attr, A.oldValue);
        }
        function p(A) {
          A.target.textContent = A.oldValue;
        }
        var u = { node: g, text: p, attr: s };
        function l(A) {
          for (var y = A.length - 1; y > -1; y--) {
            var x = A[y];
            u[x.type](x);
          }
        }
        n.revoke = l;
        function v(A) {
          for (var y = 0, x = (0, i.default)(A.nodes); y < x.length; y++) {
            var S = x[y],
              D = S[0],
              T = S[1];
            switch (D) {
              case 'add': {
                f(A, T);
                break;
              }
              default: {
                (0, a.default)(T).call(T, function (C) {
                  C.parentNode.removeChild(C);
                });
                break;
              }
            }
          }
        }
        function c(A) {
          A.target.textContent = A.value;
        }
        function h(A) {
          A.target.setAttribute(A.attr, A.value);
        }
        var d = { node: v, text: c, attr: h };
        function m(A) {
          for (var y = 0, x = A; y < x.length; y++) {
            var S = x[y];
            d[S.type](S);
          }
        }
        n.restore = m;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 });
        var a = t(434),
          i = (function () {
            function f(g) {
              (this.editor = g), (this.data = new a.TailChain());
            }
            return (
              (f.prototype.observe = function () {
                this.data.resetMax(this.editor.config.historyMaxSize),
                  this.data.insertLast(this.editor.$textElem.html());
              }),
              (f.prototype.save = function () {
                return this.data.insertLast(this.editor.$textElem.html()), this;
              }),
              (f.prototype.revoke = function () {
                var g = this.data.prev();
                return g ? (this.editor.$textElem.html(g), !0) : !1;
              }),
              (f.prototype.restore = function () {
                var g = this.data.next();
                return g ? (this.editor.$textElem.html(g), !0) : !1;
              }),
              f
            );
          })();
        n.default = i;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(91));
        (0, r.default)(n, '__esModule', { value: !0 }), (n.TailChain = void 0);
        var i = (function () {
          function f() {
            (this.data = []), (this.max = 0), (this.point = 0), (this.isRe = !1);
          }
          return (
            (f.prototype.resetMax = function (g) {
              (g = Math.abs(g)), g && (this.max = g);
            }),
            (0, r.default)(f.prototype, 'size', {
              get: function () {
                return this.data.length;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (f.prototype.insertLast = function (g) {
              if (this.isRe) {
                var s;
                (0, a.default)((s = this.data)).call(s, this.point + 1), (this.isRe = !1);
              }
              for (this.data.push(g); this.max && this.size > this.max; ) this.data.shift();
              return (this.point = this.size - 1), this;
            }),
            (f.prototype.current = function () {
              return this.data[this.point];
            }),
            (f.prototype.prev = function () {
              if ((!this.isRe && (this.isRe = !0), this.point--, this.point < 0)) {
                this.point = 0;
                return;
              }
              return this.current();
            }),
            (f.prototype.next = function () {
              if ((!this.isRe && (this.isRe = !0), this.point++, this.point >= this.size)) {
                this.point = this.size - 1;
                return;
              }
              return this.current();
            }),
            f
          );
        })();
        n.TailChain = i;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(99)),
          f = (function (g) {
            a.__extends(s, g);
            function s(p) {
              var u = g.call(this, p.config.historyMaxSize) || this;
              return (u.editor = p), (u.last = 0), (u.target = p.$textElem.elems[0]), u;
            }
            return (
              (s.prototype.observe = function () {
                var p = this;
                (this.target = this.editor.$textElem.elems[0]),
                  this.editor.$textElem.on('scroll', function () {
                    p.last = p.target.scrollTop;
                  }),
                  this.resetMaxSize(this.editor.config.historyMaxSize);
              }),
              (s.prototype.save = function () {
                return g.prototype.save.call(this, [this.last, this.target.scrollTop]), this;
              }),
              (s.prototype.revoke = function () {
                var p = this;
                return g.prototype.revoke.call(this, function (u) {
                  p.target.scrollTop = u[0];
                });
              }),
              (s.prototype.restore = function () {
                var p = this;
                return g.prototype.restore.call(this, function (u) {
                  p.target.scrollTop = u[1];
                });
              }),
              s
            );
          })(i.default);
        n.default = f;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 });
        var a = t(2),
          i = a.__importDefault(t(99)),
          f = a.__importDefault(t(3)),
          g = t(6);
        function s(u) {
          return {
            start: [u.startContainer, u.startOffset],
            end: [u.endContainer, u.endOffset],
            root: u.commonAncestorContainer,
            collapsed: u.collapsed,
          };
        }
        var p = (function (u) {
          a.__extends(l, u);
          function l(v) {
            var c = u.call(this, v.config.historyMaxSize) || this;
            return (
              (c.editor = v),
              (c.lastRange = s(document.createRange())),
              (c.root = v.$textElem.elems[0]),
              (c.updateLastRange = g.debounce(function () {
                c.lastRange = s(c.rangeHandle);
              }, v.config.onchangeTimeout)),
              c
            );
          }
          return (
            (0, r.default)(l.prototype, 'rangeHandle', {
              get: function () {
                var c = document.getSelection();
                return c && c.rangeCount ? c.getRangeAt(0) : document.createRange();
              },
              enumerable: !1,
              configurable: !0,
            }),
            (l.prototype.observe = function () {
              var v = this;
              (this.root = this.editor.$textElem.elems[0]),
                this.resetMaxSize(this.editor.config.historyMaxSize);
              function c() {
                var d = v.rangeHandle;
                (v.root === d.commonAncestorContainer ||
                  v.root.contains(d.commonAncestorContainer)) &&
                  (v.editor.isComposing || v.updateLastRange());
              }
              function h(d) {
                (d.key == 'Backspace' || d.key == 'Delete') && v.updateLastRange();
              }
              f.default(document).on('selectionchange', c),
                this.editor.beforeDestroy(function () {
                  f.default(document).off('selectionchange', c);
                }),
                v.editor.$textElem.on('keydown', h);
            }),
            (l.prototype.save = function () {
              var v = s(this.rangeHandle);
              return u.prototype.save.call(this, [this.lastRange, v]), (this.lastRange = v), this;
            }),
            (l.prototype.set = function (v) {
              try {
                if (v) {
                  var c = this.rangeHandle;
                  return (
                    c.setStart.apply(c, v.start),
                    c.setEnd.apply(c, v.end),
                    this.editor.menus.changeActive(),
                    !0
                  );
                }
              } catch (h) {
                return !1;
              }
              return !1;
            }),
            (l.prototype.revoke = function () {
              var v = this;
              return u.prototype.revoke.call(this, function (c) {
                v.set(c[0]);
              });
            }),
            (l.prototype.restore = function () {
              var v = this;
              return u.prototype.restore.call(this, function (c) {
                v.set(c[1]);
              });
            }),
            l
          );
        })(i.default);
        n.default = p;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(29));
        (0, r.default)(n, '__esModule', { value: !0 });
        var i = t(2),
          f = i.__importDefault(t(3));
        t(438);
        function g(s) {
          var p = !1,
            u,
            l;
          s.txt.eventHooks.changeEvents.push(function () {
            p && (0, a.default)(u).call(u, '.w-e-content-preview').html(s.$textElem.html());
          });
          function v() {
            if (!p) {
              s.$textElem.hide();
              var h = s.zIndex.get('textContainer'),
                d = s.txt.html();
              (u = f.default(
                '<div class="w-e-content-mantle" style="z-index:' +
                  h +
                  `">
                <div class="w-e-content-preview w-e-text">` +
                  d +
                  `</div>
            </div>`,
              )),
                s.$textContainerElem.append(u);
              var m = s.zIndex.get('menu');
              (l = f.default('<div class="w-e-menue-mantle" style="z-index:' + m + '"></div>')),
                s.$toolbarElem.append(l),
                (p = !0),
                (s.isEnable = !1);
            }
          }
          function c() {
            p && (u.remove(), l.remove(), s.$textElem.show(), (p = !1), (s.isEnable = !0));
          }
          return { disable: v, enable: c };
        }
        n.default = g;
      },
      function (o, n, t) {
        var e = t(20),
          r = t(439);
        (r = r.__esModule ? r.default : r), typeof r == 'string' && (r = [[o.i, r, '']]);
        var a = {};
        (a.insert = 'head'), (a.singleton = !1), e(r, a), (o.exports = r.locals || {});
      },
      function (o, n, t) {
        var e = t(21);
        (n = e(!1)),
          n.push([
            o.i,
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
          (o.exports = n);
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 });
        var a = (function () {
          function i(f) {
            var g = this;
            this.editor = f;
            var s = function () {
              var u = document.activeElement;
              u === f.$textElem.elems[0] && g.emit();
            };
            window.document.addEventListener('selectionchange', s),
              this.editor.beforeDestroy(function () {
                window.document.removeEventListener('selectionchange', s);
              });
          }
          return (
            (i.prototype.emit = function () {
              var f,
                g = this.editor.config.onSelectionChange;
              if (g) {
                var s = this.editor.selection;
                s.saveRange(),
                  s.isSelectionEmpty() ||
                    g({
                      text: s.getSelectionText(),
                      html:
                        (f = s.getSelectionContainerElem()) === null || f === void 0
                          ? void 0
                          : f.elems[0].innerHTML,
                      selection: s,
                    });
              }
            }),
            i
          );
        })();
        n.default = a;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1)),
          a = e(t(128)),
          i = e(t(94)),
          f = e(t(4));
        (0, r.default)(n, '__esModule', { value: !0 }), (n.registerPlugin = void 0);
        var g = t(2),
          s = g.__importDefault(t(87)),
          p = t(6);
        function u(v, c, h) {
          if (!v) throw new TypeError('name is not define');
          if (!c) throw new TypeError('options is not define');
          if (!c.intention) throw new TypeError('options.intention is not define');
          if (c.intention && typeof c.intention != 'function')
            throw new TypeError('options.intention is not function');
          h[v] && console.warn('plugin ' + v + ' 已存在，已覆盖。'), (h[v] = c);
        }
        n.registerPlugin = u;
        function l(v) {
          var c = (0, a.default)(
              {},
              p.deepClone(s.default.globalPluginsFunctionList),
              p.deepClone(v.pluginsFunctionList),
            ),
            h = (0, i.default)(c);
          (0, f.default)(h).call(h, function (d) {
            var m = d[0],
              A = d[1];
            console.info('plugin ' + m + ' initializing');
            var y = A.intention,
              x = A.config;
            y(v, x), console.info('plugin ' + m + ' initialization complete');
          });
        }
        n.default = l;
      },
      function (o, n, t) {
        var e = t(0),
          r = e(t(1));
        (0, r.default)(n, '__esModule', { value: !0 });
      },
    ]).default;
  });
})(we);
const je = Ne(te);
function vt(O) {
  return (
    (vt =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (R) {
            return typeof R;
          }
        : function (R) {
            return R &&
              typeof Symbol == 'function' &&
              R.constructor === Symbol &&
              R !== Symbol.prototype
              ? 'symbol'
              : typeof R;
          }),
    vt(O)
  );
}
function At(O, R) {
  if (!(O instanceof R)) throw new TypeError('Cannot call a class as a function');
}
function Ue(O, R) {
  if (vt(O) !== 'object' || O === null) return O;
  var o = O[Symbol.toPrimitive];
  if (o !== void 0) {
    var n = o.call(O, R || 'default');
    if (vt(n) !== 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (R === 'string' ? String : Number)(O);
}
function Pe(O) {
  var R = Ue(O, 'string');
  return vt(R) === 'symbol' ? R : String(R);
}
function oe(O, R) {
  for (var o = 0; o < R.length; o++) {
    var n = R[o];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(O, Pe(n.key), n);
  }
}
function yt(O, R, o) {
  return (
    R && oe(O.prototype, R),
    o && oe(O, o),
    Object.defineProperty(O, 'prototype', { writable: !1 }),
    O
  );
}
function Dt(O) {
  if (O === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return O;
}
function ee(O, R) {
  return (
    (ee = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, t) {
          return (n.__proto__ = t), n;
        }),
    ee(O, R)
  );
}
function Xt(O, R) {
  if (typeof R != 'function' && R !== null)
    throw new TypeError('Super expression must either be null or a function');
  (O.prototype = Object.create(R && R.prototype, {
    constructor: { value: O, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(O, 'prototype', { writable: !1 }),
    R && ee(O, R);
}
function zt(O, R) {
  if (R && (vt(R) === 'object' || typeof R == 'function')) return R;
  if (R !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
  return Dt(O);
}
function mt(O) {
  return (
    (mt = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (o) {
          return o.__proto__ || Object.getPrototypeOf(o);
        }),
    mt(O)
  );
}
function Rt(O, R, o) {
  return (
    (R = Pe(R)),
    R in O
      ? Object.defineProperty(O, R, { value: o, enumerable: !0, configurable: !0, writable: !0 })
      : (O[R] = o),
    O
  );
}
function $e(O) {
  if (Array.isArray(O)) return O;
}
function Qe(O) {
  if ((typeof Symbol != 'undefined' && O[Symbol.iterator] != null) || O['@@iterator'] != null)
    return Array.from(O);
}
function ae(O, R) {
  (R == null || R > O.length) && (R = O.length);
  for (var o = 0, n = new Array(R); o < R; o++) n[o] = O[o];
  return n;
}
function Ye(O, R) {
  if (O) {
    if (typeof O == 'string') return ae(O, R);
    var o = Object.prototype.toString.call(O).slice(8, -1);
    if ((o === 'Object' && O.constructor && (o = O.constructor.name), o === 'Map' || o === 'Set'))
      return Array.from(O);
    if (o === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return ae(O, R);
  }
}
function ze() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ve(O) {
  return $e(O) || Qe(O) || Ye(O) || ze();
}
function ie(O, R) {
  var o = Object.keys(O);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(O);
    R &&
      (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(O, t).enumerable;
      })),
      o.push.apply(o, n);
  }
  return o;
}
function le(O) {
  for (var R = 1; R < arguments.length; R++) {
    var o = arguments[R] != null ? arguments[R] : {};
    R % 2
      ? ie(Object(o), !0).forEach(function (n) {
          Rt(O, n, o[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(O, Object.getOwnPropertyDescriptors(o))
      : ie(Object(o)).forEach(function (n) {
          Object.defineProperty(O, n, Object.getOwnPropertyDescriptor(o, n));
        });
  }
  return O;
}
var Ke = {
    type: 'logger',
    log: function (R) {
      this.output('log', R);
    },
    warn: function (R) {
      this.output('warn', R);
    },
    error: function (R) {
      this.output('error', R);
    },
    output: function (R, o) {
      console && console[R] && console[R].apply(console, o);
    },
  },
  Ge = (function () {
    function O(R) {
      var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      At(this, O), this.init(R, o);
    }
    return (
      yt(O, [
        {
          key: 'init',
          value: function (o) {
            var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            (this.prefix = n.prefix || 'i18next:'),
              (this.logger = o || Ke),
              (this.options = n),
              (this.debug = n.debug);
          },
        },
        {
          key: 'setDebug',
          value: function (o) {
            this.debug = o;
          },
        },
        {
          key: 'log',
          value: function () {
            for (var o = arguments.length, n = new Array(o), t = 0; t < o; t++) n[t] = arguments[t];
            return this.forward(n, 'log', '', !0);
          },
        },
        {
          key: 'warn',
          value: function () {
            for (var o = arguments.length, n = new Array(o), t = 0; t < o; t++) n[t] = arguments[t];
            return this.forward(n, 'warn', '', !0);
          },
        },
        {
          key: 'error',
          value: function () {
            for (var o = arguments.length, n = new Array(o), t = 0; t < o; t++) n[t] = arguments[t];
            return this.forward(n, 'error', '');
          },
        },
        {
          key: 'deprecate',
          value: function () {
            for (var o = arguments.length, n = new Array(o), t = 0; t < o; t++) n[t] = arguments[t];
            return this.forward(n, 'warn', 'WARNING DEPRECATED: ', !0);
          },
        },
        {
          key: 'forward',
          value: function (o, n, t, e) {
            return e && !this.debug
              ? null
              : (typeof o[0] == 'string' &&
                  (o[0] = ''.concat(t).concat(this.prefix, ' ').concat(o[0])),
                this.logger[n](o));
          },
        },
        {
          key: 'create',
          value: function (o) {
            return new O(
              this.logger,
              le(le({}, { prefix: ''.concat(this.prefix, ':').concat(o, ':') }), this.options),
            );
          },
        },
        {
          key: 'clone',
          value: function (o) {
            return (
              (o = o || this.options), (o.prefix = o.prefix || this.prefix), new O(this.logger, o)
            );
          },
        },
      ]),
      O
    );
  })(),
  gt = new Ge(),
  Tt = (function () {
    function O() {
      At(this, O), (this.observers = {});
    }
    return (
      yt(O, [
        {
          key: 'on',
          value: function (o, n) {
            var t = this;
            return (
              o.split(' ').forEach(function (e) {
                (t.observers[e] = t.observers[e] || []), t.observers[e].push(n);
              }),
              this
            );
          },
        },
        {
          key: 'off',
          value: function (o, n) {
            if (this.observers[o]) {
              if (!n) {
                delete this.observers[o];
                return;
              }
              this.observers[o] = this.observers[o].filter(function (t) {
                return t !== n;
              });
            }
          },
        },
        {
          key: 'emit',
          value: function (o) {
            for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), e = 1; e < n; e++)
              t[e - 1] = arguments[e];
            if (this.observers[o]) {
              var r = [].concat(this.observers[o]);
              r.forEach(function (i) {
                i.apply(void 0, t);
              });
            }
            if (this.observers['*']) {
              var a = [].concat(this.observers['*']);
              a.forEach(function (i) {
                i.apply(i, [o].concat(t));
              });
            }
          },
        },
      ]),
      O
    );
  })();
function Yt() {
  var O,
    R,
    o = new Promise(function (n, t) {
      (O = n), (R = t);
    });
  return (o.resolve = O), (o.reject = R), o;
}
function se(O) {
  return O == null ? '' : '' + O;
}
function Je(O, R, o) {
  O.forEach(function (n) {
    R[n] && (o[n] = R[n]);
  });
}
function ne(O, R, o) {
  function n(a) {
    return a && a.indexOf('###') > -1 ? a.replace(/###/g, '.') : a;
  }
  function t() {
    return !O || typeof O == 'string';
  }
  for (var e = typeof R != 'string' ? [].concat(R) : R.split('.'); e.length > 1; ) {
    if (t()) return {};
    var r = n(e.shift());
    !O[r] && o && (O[r] = new o()),
      Object.prototype.hasOwnProperty.call(O, r) ? (O = O[r]) : (O = {});
  }
  return t() ? {} : { obj: O, k: n(e.shift()) };
}
function ue(O, R, o) {
  var n = ne(O, R, Object),
    t = n.obj,
    e = n.k;
  t[e] = o;
}
function We(O, R, o, n) {
  var t = ne(O, R, Object),
    e = t.obj,
    r = t.k;
  (e[r] = e[r] || []), n && (e[r] = e[r].concat(o)), n || e[r].push(o);
}
function Jt(O, R) {
  var o = ne(O, R),
    n = o.obj,
    t = o.k;
  if (n) return n[t];
}
function fe(O, R, o) {
  var n = Jt(O, o);
  return n !== void 0 ? n : Jt(R, o);
}
function De(O, R, o) {
  for (var n in R)
    n !== '__proto__' &&
      n !== 'constructor' &&
      (n in O
        ? typeof O[n] == 'string' ||
          O[n] instanceof String ||
          typeof R[n] == 'string' ||
          R[n] instanceof String
          ? o && (O[n] = R[n])
          : De(O[n], R[n], o)
        : (O[n] = R[n]));
  return O;
}
function wt(O) {
  return O.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}
var Xe = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;', '/': '&#x2F;' };
function Ze(O) {
  return typeof O == 'string'
    ? O.replace(/[&<>"'\/]/g, function (R) {
        return Xe[R];
      })
    : O;
}
var Zt =
    typeof window != 'undefined' &&
    window.navigator &&
    typeof window.navigator.userAgentData == 'undefined' &&
    window.navigator.userAgent &&
    window.navigator.userAgent.indexOf('MSIE') > -1,
  ke = [' ', ',', '?', '!', ';'];
function qe(O, R, o) {
  (R = R || ''), (o = o || '');
  var n = ke.filter(function (a) {
    return R.indexOf(a) < 0 && o.indexOf(a) < 0;
  });
  if (n.length === 0) return !0;
  var t = new RegExp(
      '('.concat(
        n
          .map(function (a) {
            return a === '?' ? '\\?' : a;
          })
          .join('|'),
        ')',
      ),
    ),
    e = !t.test(O);
  if (!e) {
    var r = O.indexOf(o);
    r > 0 && !t.test(O.substring(0, r)) && (e = !0);
  }
  return e;
}
function ce(O, R) {
  var o = Object.keys(O);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(O);
    R &&
      (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(O, t).enumerable;
      })),
      o.push.apply(o, n);
  }
  return o;
}
function Kt(O) {
  for (var R = 1; R < arguments.length; R++) {
    var o = arguments[R] != null ? arguments[R] : {};
    R % 2
      ? ce(Object(o), !0).forEach(function (n) {
          Rt(O, n, o[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(O, Object.getOwnPropertyDescriptors(o))
      : ce(Object(o)).forEach(function (n) {
          Object.defineProperty(O, n, Object.getOwnPropertyDescriptor(o, n));
        });
  }
  return O;
}
function _e(O) {
  var R = tn();
  return function () {
    var n = mt(O),
      t;
    if (R) {
      var e = mt(this).constructor;
      t = Reflect.construct(n, arguments, e);
    } else t = n.apply(this, arguments);
    return zt(this, t);
  };
}
function tn() {
  if (typeof Reflect == 'undefined' || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == 'function') return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
  } catch (O) {
    return !1;
  }
}
function Te(O, R) {
  var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '.';
  if (O) {
    if (O[R]) return O[R];
    for (var n = R.split(o), t = O, e = 0; e < n.length; ++e) {
      if (!t || (typeof t[n[e]] == 'string' && e + 1 < n.length)) return;
      if (t[n[e]] === void 0) {
        for (var r = 2, a = n.slice(e, e + r).join(o), i = t[a]; i === void 0 && n.length > e + r; )
          r++, (a = n.slice(e, e + r).join(o)), (i = t[a]);
        if (i === void 0) return;
        if (i === null) return null;
        if (R.endsWith(a)) {
          if (typeof i == 'string') return i;
          if (a && typeof i[a] == 'string') return i[a];
        }
        var f = n.slice(e + r).join(o);
        return f ? Te(i, f, o) : void 0;
      }
      t = t[n[e]];
    }
    return t;
  }
}
var en = (function (O) {
    Xt(o, O);
    var R = _e(o);
    function o(n) {
      var t,
        e =
          arguments.length > 1 && arguments[1] !== void 0
            ? arguments[1]
            : { ns: ['translation'], defaultNS: 'translation' };
      return (
        At(this, o),
        (t = R.call(this)),
        Zt && Tt.call(Dt(t)),
        (t.data = n || {}),
        (t.options = e),
        t.options.keySeparator === void 0 && (t.options.keySeparator = '.'),
        t.options.ignoreJSONStructure === void 0 && (t.options.ignoreJSONStructure = !0),
        t
      );
    }
    return (
      yt(o, [
        {
          key: 'addNamespaces',
          value: function (t) {
            this.options.ns.indexOf(t) < 0 && this.options.ns.push(t);
          },
        },
        {
          key: 'removeNamespaces',
          value: function (t) {
            var e = this.options.ns.indexOf(t);
            e > -1 && this.options.ns.splice(e, 1);
          },
        },
        {
          key: 'getResource',
          value: function (t, e, r) {
            var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
              i = a.keySeparator !== void 0 ? a.keySeparator : this.options.keySeparator,
              f =
                a.ignoreJSONStructure !== void 0
                  ? a.ignoreJSONStructure
                  : this.options.ignoreJSONStructure,
              g = [t, e];
            r && typeof r != 'string' && (g = g.concat(r)),
              r && typeof r == 'string' && (g = g.concat(i ? r.split(i) : r)),
              t.indexOf('.') > -1 && (g = t.split('.'));
            var s = Jt(this.data, g);
            return s || !f || typeof r != 'string'
              ? s
              : Te(this.data && this.data[t] && this.data[t][e], r, i);
          },
        },
        {
          key: 'addResource',
          value: function (t, e, r, a) {
            var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : { silent: !1 },
              f = this.options.keySeparator;
            f === void 0 && (f = '.');
            var g = [t, e];
            r && (g = g.concat(f ? r.split(f) : r)),
              t.indexOf('.') > -1 && ((g = t.split('.')), (a = e), (e = g[1])),
              this.addNamespaces(e),
              ue(this.data, g, a),
              i.silent || this.emit('added', t, e, r, a);
          },
        },
        {
          key: 'addResources',
          value: function (t, e, r) {
            var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : { silent: !1 };
            for (var i in r)
              (typeof r[i] == 'string' ||
                Object.prototype.toString.apply(r[i]) === '[object Array]') &&
                this.addResource(t, e, i, r[i], { silent: !0 });
            a.silent || this.emit('added', t, e, r);
          },
        },
        {
          key: 'addResourceBundle',
          value: function (t, e, r, a, i) {
            var f = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : { silent: !1 },
              g = [t, e];
            t.indexOf('.') > -1 && ((g = t.split('.')), (a = r), (r = e), (e = g[1])),
              this.addNamespaces(e);
            var s = Jt(this.data, g) || {};
            a ? De(s, r, i) : (s = Kt(Kt({}, s), r)),
              ue(this.data, g, s),
              f.silent || this.emit('added', t, e, r);
          },
        },
        {
          key: 'removeResourceBundle',
          value: function (t, e) {
            this.hasResourceBundle(t, e) && delete this.data[t][e],
              this.removeNamespaces(e),
              this.emit('removed', t, e);
          },
        },
        {
          key: 'hasResourceBundle',
          value: function (t, e) {
            return this.getResource(t, e) !== void 0;
          },
        },
        {
          key: 'getResourceBundle',
          value: function (t, e) {
            return (
              e || (e = this.options.defaultNS),
              this.options.compatibilityAPI === 'v1'
                ? Kt(Kt({}, {}), this.getResource(t, e))
                : this.getResource(t, e)
            );
          },
        },
        {
          key: 'getDataByLanguage',
          value: function (t) {
            return this.data[t];
          },
        },
        {
          key: 'hasLanguageSomeTranslations',
          value: function (t) {
            var e = this.getDataByLanguage(t),
              r = (e && Object.keys(e)) || [];
            return !!r.find(function (a) {
              return e[a] && Object.keys(e[a]).length > 0;
            });
          },
        },
        {
          key: 'toJSON',
          value: function () {
            return this.data;
          },
        },
      ]),
      o
    );
  })(Tt),
  Re = {
    processors: {},
    addPostProcessor: function (R) {
      this.processors[R.name] = R;
    },
    handle: function (R, o, n, t, e) {
      var r = this;
      return (
        R.forEach(function (a) {
          r.processors[a] && (o = r.processors[a].process(o, n, t, e));
        }),
        o
      );
    },
  };
function de(O, R) {
  var o = Object.keys(O);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(O);
    R &&
      (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(O, t).enumerable;
      })),
      o.push.apply(o, n);
  }
  return o;
}
function it(O) {
  for (var R = 1; R < arguments.length; R++) {
    var o = arguments[R] != null ? arguments[R] : {};
    R % 2
      ? de(Object(o), !0).forEach(function (n) {
          Rt(O, n, o[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(O, Object.getOwnPropertyDescriptors(o))
      : de(Object(o)).forEach(function (n) {
          Object.defineProperty(O, n, Object.getOwnPropertyDescriptor(o, n));
        });
  }
  return O;
}
function nn(O) {
  var R = rn();
  return function () {
    var n = mt(O),
      t;
    if (R) {
      var e = mt(this).constructor;
      t = Reflect.construct(n, arguments, e);
    } else t = n.apply(this, arguments);
    return zt(this, t);
  };
}
function rn() {
  if (typeof Reflect == 'undefined' || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == 'function') return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
  } catch (O) {
    return !1;
  }
}
var ve = {},
  pe = (function (O) {
    Xt(o, O);
    var R = nn(o);
    function o(n) {
      var t,
        e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return (
        At(this, o),
        (t = R.call(this)),
        Zt && Tt.call(Dt(t)),
        Je(
          [
            'resourceStore',
            'languageUtils',
            'pluralResolver',
            'interpolator',
            'backendConnector',
            'i18nFormat',
            'utils',
          ],
          n,
          Dt(t),
        ),
        (t.options = e),
        t.options.keySeparator === void 0 && (t.options.keySeparator = '.'),
        (t.logger = gt.create('translator')),
        t
      );
    }
    return (
      yt(
        o,
        [
          {
            key: 'changeLanguage',
            value: function (t) {
              t && (this.language = t);
            },
          },
          {
            key: 'exists',
            value: function (t) {
              var e =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : { interpolation: {} };
              if (t == null) return !1;
              var r = this.resolve(t, e);
              return r && r.res !== void 0;
            },
          },
          {
            key: 'extractFromKey',
            value: function (t, e) {
              var r = e.nsSeparator !== void 0 ? e.nsSeparator : this.options.nsSeparator;
              r === void 0 && (r = ':');
              var a = e.keySeparator !== void 0 ? e.keySeparator : this.options.keySeparator,
                i = e.ns || this.options.defaultNS || [],
                f = r && t.indexOf(r) > -1,
                g =
                  !this.options.userDefinedKeySeparator &&
                  !e.keySeparator &&
                  !this.options.userDefinedNsSeparator &&
                  !e.nsSeparator &&
                  !qe(t, r, a);
              if (f && !g) {
                var s = t.match(this.interpolator.nestingRegexp);
                if (s && s.length > 0) return { key: t, namespaces: i };
                var p = t.split(r);
                (r !== a || (r === a && this.options.ns.indexOf(p[0]) > -1)) && (i = p.shift()),
                  (t = p.join(a));
              }
              return typeof i == 'string' && (i = [i]), { key: t, namespaces: i };
            },
          },
          {
            key: 'translate',
            value: function (t, e, r) {
              var a = this;
              if (
                (vt(e) !== 'object' &&
                  this.options.overloadTranslationOptionHandler &&
                  (e = this.options.overloadTranslationOptionHandler(arguments)),
                e || (e = {}),
                t == null)
              )
                return '';
              Array.isArray(t) || (t = [String(t)]);
              var i = e.returnDetails !== void 0 ? e.returnDetails : this.options.returnDetails,
                f = e.keySeparator !== void 0 ? e.keySeparator : this.options.keySeparator,
                g = this.extractFromKey(t[t.length - 1], e),
                s = g.key,
                p = g.namespaces,
                u = p[p.length - 1],
                l = e.lng || this.language,
                v = e.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
              if (l && l.toLowerCase() === 'cimode') {
                if (v) {
                  var c = e.nsSeparator || this.options.nsSeparator;
                  return i
                    ? {
                        res: ''.concat(u).concat(c).concat(s),
                        usedKey: s,
                        exactUsedKey: s,
                        usedLng: l,
                        usedNS: u,
                      }
                    : ''.concat(u).concat(c).concat(s);
                }
                return i ? { res: s, usedKey: s, exactUsedKey: s, usedLng: l, usedNS: u } : s;
              }
              var h = this.resolve(t, e),
                d = h && h.res,
                m = (h && h.usedKey) || s,
                A = (h && h.exactUsedKey) || s,
                y = Object.prototype.toString.apply(d),
                x = ['[object Number]', '[object Function]', '[object RegExp]'],
                S = e.joinArrays !== void 0 ? e.joinArrays : this.options.joinArrays,
                D = !this.i18nFormat || this.i18nFormat.handleAsObject,
                T = typeof d != 'string' && typeof d != 'boolean' && typeof d != 'number';
              if (
                D &&
                d &&
                T &&
                x.indexOf(y) < 0 &&
                !(typeof S == 'string' && y === '[object Array]')
              ) {
                if (!e.returnObjects && !this.options.returnObjects) {
                  this.options.returnedObjectHandler ||
                    this.logger.warn(
                      'accessing an object - but returnObjects options is not enabled!',
                    );
                  var C = this.options.returnedObjectHandler
                    ? this.options.returnedObjectHandler(m, d, it(it({}, e), {}, { ns: p }))
                    : "key '"
                        .concat(s, ' (')
                        .concat(this.language, ")' returned an object instead of string.");
                  return i ? ((h.res = C), h) : C;
                }
                if (f) {
                  var E = y === '[object Array]',
                    P = E ? [] : {},
                    I = E ? A : m;
                  for (var M in d)
                    if (Object.prototype.hasOwnProperty.call(d, M)) {
                      var N = ''.concat(I).concat(f).concat(M);
                      (P[M] = this.translate(N, it(it({}, e), { joinArrays: !1, ns: p }))),
                        P[M] === N && (P[M] = d[M]);
                    }
                  d = P;
                }
              } else if (D && typeof S == 'string' && y === '[object Array]')
                (d = d.join(S)), d && (d = this.extendTranslation(d, t, e, r));
              else {
                var L = !1,
                  B = !1,
                  F = e.count !== void 0 && typeof e.count != 'string',
                  w = o.hasDefaultValue(e),
                  b = F ? this.pluralResolver.getSuffix(l, e.count, e) : '',
                  H = e['defaultValue'.concat(b)] || e.defaultValue;
                !this.isValidLookup(d) && w && ((L = !0), (d = H)),
                  this.isValidLookup(d) || ((B = !0), (d = s));
                var j =
                    e.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey,
                  K = j && B ? void 0 : d,
                  U = w && H !== d && this.options.updateMissing;
                if (B || L || U) {
                  if ((this.logger.log(U ? 'updateKey' : 'missingKey', l, u, s, U ? H : d), f)) {
                    var W = this.resolve(s, it(it({}, e), {}, { keySeparator: !1 }));
                    W &&
                      W.res &&
                      this.logger.warn(
                        'Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.',
                      );
                  }
                  var z = [],
                    $ = this.languageUtils.getFallbackCodes(
                      this.options.fallbackLng,
                      e.lng || this.language,
                    );
                  if (this.options.saveMissingTo === 'fallback' && $ && $[0])
                    for (var Q = 0; Q < $.length; Q++) z.push($[Q]);
                  else
                    this.options.saveMissingTo === 'all'
                      ? (z = this.languageUtils.toResolveHierarchy(e.lng || this.language))
                      : z.push(e.lng || this.language);
                  var J = function (tt, rt, lt) {
                    var It = w && lt !== d ? lt : K;
                    a.options.missingKeyHandler
                      ? a.options.missingKeyHandler(tt, u, rt, It, U, e)
                      : a.backendConnector &&
                        a.backendConnector.saveMissing &&
                        a.backendConnector.saveMissing(tt, u, rt, It, U, e),
                      a.emit('missingKey', tt, u, rt, d);
                  };
                  this.options.saveMissing &&
                    (this.options.saveMissingPlurals && F
                      ? z.forEach(function (k) {
                          a.pluralResolver.getSuffixes(k, e).forEach(function (tt) {
                            J([k], s + tt, e['defaultValue'.concat(tt)] || H);
                          });
                        })
                      : J(z, s, H));
                }
                (d = this.extendTranslation(d, t, e, h, r)),
                  B &&
                    d === s &&
                    this.options.appendNamespaceToMissingKey &&
                    (d = ''.concat(u, ':').concat(s)),
                  (B || L) &&
                    this.options.parseMissingKeyHandler &&
                    (this.options.compatibilityAPI !== 'v1'
                      ? (d = this.options.parseMissingKeyHandler(
                          this.options.appendNamespaceToMissingKey
                            ? ''.concat(u, ':').concat(s)
                            : s,
                          L ? d : void 0,
                        ))
                      : (d = this.options.parseMissingKeyHandler(d)));
              }
              return i ? ((h.res = d), h) : d;
            },
          },
          {
            key: 'extendTranslation',
            value: function (t, e, r, a, i) {
              var f = this;
              if (this.i18nFormat && this.i18nFormat.parse)
                t = this.i18nFormat.parse(
                  t,
                  it(it({}, this.options.interpolation.defaultVariables), r),
                  a.usedLng,
                  a.usedNS,
                  a.usedKey,
                  { resolved: a },
                );
              else if (!r.skipInterpolation) {
                r.interpolation &&
                  this.interpolator.init(
                    it(it({}, r), {
                      interpolation: it(it({}, this.options.interpolation), r.interpolation),
                    }),
                  );
                var g =
                    typeof t == 'string' &&
                    (r && r.interpolation && r.interpolation.skipOnVariables !== void 0
                      ? r.interpolation.skipOnVariables
                      : this.options.interpolation.skipOnVariables),
                  s;
                if (g) {
                  var p = t.match(this.interpolator.nestingRegexp);
                  s = p && p.length;
                }
                var u = r.replace && typeof r.replace != 'string' ? r.replace : r;
                if (
                  (this.options.interpolation.defaultVariables &&
                    (u = it(it({}, this.options.interpolation.defaultVariables), u)),
                  (t = this.interpolator.interpolate(t, u, r.lng || this.language, r)),
                  g)
                ) {
                  var l = t.match(this.interpolator.nestingRegexp),
                    v = l && l.length;
                  s < v && (r.nest = !1);
                }
                r.nest !== !1 &&
                  (t = this.interpolator.nest(
                    t,
                    function () {
                      for (var d = arguments.length, m = new Array(d), A = 0; A < d; A++)
                        m[A] = arguments[A];
                      return i && i[0] === m[0] && !r.context
                        ? (f.logger.warn(
                            'It seems you are nesting recursively key: '
                              .concat(m[0], ' in key: ')
                              .concat(e[0]),
                          ),
                          null)
                        : f.translate.apply(f, m.concat([e]));
                    },
                    r,
                  )),
                  r.interpolation && this.interpolator.reset();
              }
              var c = r.postProcess || this.options.postProcess,
                h = typeof c == 'string' ? [c] : c;
              return (
                t != null &&
                  h &&
                  h.length &&
                  r.applyPostProcessor !== !1 &&
                  (t = Re.handle(
                    h,
                    t,
                    e,
                    this.options && this.options.postProcessPassResolved
                      ? it({ i18nResolved: a }, r)
                      : r,
                    this,
                  )),
                t
              );
            },
          },
          {
            key: 'resolve',
            value: function (t) {
              var e = this,
                r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                a,
                i,
                f,
                g,
                s;
              return (
                typeof t == 'string' && (t = [t]),
                t.forEach(function (p) {
                  if (!e.isValidLookup(a)) {
                    var u = e.extractFromKey(p, r),
                      l = u.key;
                    i = l;
                    var v = u.namespaces;
                    e.options.fallbackNS && (v = v.concat(e.options.fallbackNS));
                    var c = r.count !== void 0 && typeof r.count != 'string',
                      h = c && !r.ordinal && r.count === 0 && e.pluralResolver.shouldUseIntlApi(),
                      d =
                        r.context !== void 0 &&
                        (typeof r.context == 'string' || typeof r.context == 'number') &&
                        r.context !== '',
                      m = r.lngs
                        ? r.lngs
                        : e.languageUtils.toResolveHierarchy(r.lng || e.language, r.fallbackLng);
                    v.forEach(function (A) {
                      e.isValidLookup(a) ||
                        ((s = A),
                        !ve[''.concat(m[0], '-').concat(A)] &&
                          e.utils &&
                          e.utils.hasLoadedNamespace &&
                          !e.utils.hasLoadedNamespace(s) &&
                          ((ve[''.concat(m[0], '-').concat(A)] = !0),
                          e.logger.warn(
                            'key "'
                              .concat(i, '" for languages "')
                              .concat(m.join(', '), `" won't get resolved as namespace "`)
                              .concat(s, '" was not yet loaded'),
                            'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!',
                          )),
                        m.forEach(function (y) {
                          if (!e.isValidLookup(a)) {
                            g = y;
                            var x = [l];
                            if (e.i18nFormat && e.i18nFormat.addLookupKeys)
                              e.i18nFormat.addLookupKeys(x, l, y, A, r);
                            else {
                              var S;
                              c && (S = e.pluralResolver.getSuffix(y, r.count, r));
                              var D = ''.concat(e.options.pluralSeparator, 'zero');
                              if ((c && (x.push(l + S), h && x.push(l + D)), d)) {
                                var T = ''
                                  .concat(l)
                                  .concat(e.options.contextSeparator)
                                  .concat(r.context);
                                x.push(T), c && (x.push(T + S), h && x.push(T + D));
                              }
                            }
                            for (var C; (C = x.pop()); )
                              e.isValidLookup(a) || ((f = C), (a = e.getResource(y, A, C, r)));
                          }
                        }));
                    });
                  }
                }),
                { res: a, usedKey: i, exactUsedKey: f, usedLng: g, usedNS: s }
              );
            },
          },
          {
            key: 'isValidLookup',
            value: function (t) {
              return (
                t !== void 0 &&
                !(!this.options.returnNull && t === null) &&
                !(!this.options.returnEmptyString && t === '')
              );
            },
          },
          {
            key: 'getResource',
            value: function (t, e, r) {
              var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
              return this.i18nFormat && this.i18nFormat.getResource
                ? this.i18nFormat.getResource(t, e, r, a)
                : this.resourceStore.getResource(t, e, r, a);
            },
          },
        ],
        [
          {
            key: 'hasDefaultValue',
            value: function (t) {
              var e = 'defaultValue';
              for (var r in t)
                if (
                  Object.prototype.hasOwnProperty.call(t, r) &&
                  e === r.substring(0, e.length) &&
                  t[r] !== void 0
                )
                  return !0;
              return !1;
            },
          },
        ],
      ),
      o
    );
  })(Tt);
function _t(O) {
  return O.charAt(0).toUpperCase() + O.slice(1);
}
var he = (function () {
    function O(R) {
      At(this, O),
        (this.options = R),
        (this.supportedLngs = this.options.supportedLngs || !1),
        (this.logger = gt.create('languageUtils'));
    }
    return (
      yt(O, [
        {
          key: 'getScriptPartFromCode',
          value: function (o) {
            if (!o || o.indexOf('-') < 0) return null;
            var n = o.split('-');
            return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === 'x')
              ? null
              : this.formatLanguageCode(n.join('-'));
          },
        },
        {
          key: 'getLanguagePartFromCode',
          value: function (o) {
            if (!o || o.indexOf('-') < 0) return o;
            var n = o.split('-');
            return this.formatLanguageCode(n[0]);
          },
        },
        {
          key: 'formatLanguageCode',
          value: function (o) {
            if (typeof o == 'string' && o.indexOf('-') > -1) {
              var n = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab'],
                t = o.split('-');
              return (
                this.options.lowerCaseLng
                  ? (t = t.map(function (e) {
                      return e.toLowerCase();
                    }))
                  : t.length === 2
                  ? ((t[0] = t[0].toLowerCase()),
                    (t[1] = t[1].toUpperCase()),
                    n.indexOf(t[1].toLowerCase()) > -1 && (t[1] = _t(t[1].toLowerCase())))
                  : t.length === 3 &&
                    ((t[0] = t[0].toLowerCase()),
                    t[1].length === 2 && (t[1] = t[1].toUpperCase()),
                    t[0] !== 'sgn' && t[2].length === 2 && (t[2] = t[2].toUpperCase()),
                    n.indexOf(t[1].toLowerCase()) > -1 && (t[1] = _t(t[1].toLowerCase())),
                    n.indexOf(t[2].toLowerCase()) > -1 && (t[2] = _t(t[2].toLowerCase()))),
                t.join('-')
              );
            }
            return this.options.cleanCode || this.options.lowerCaseLng ? o.toLowerCase() : o;
          },
        },
        {
          key: 'isSupportedCode',
          value: function (o) {
            return (
              (this.options.load === 'languageOnly' || this.options.nonExplicitSupportedLngs) &&
                (o = this.getLanguagePartFromCode(o)),
              !this.supportedLngs ||
                !this.supportedLngs.length ||
                this.supportedLngs.indexOf(o) > -1
            );
          },
        },
        {
          key: 'getBestMatchFromCodes',
          value: function (o) {
            var n = this;
            if (!o) return null;
            var t;
            return (
              o.forEach(function (e) {
                if (!t) {
                  var r = n.formatLanguageCode(e);
                  (!n.options.supportedLngs || n.isSupportedCode(r)) && (t = r);
                }
              }),
              !t &&
                this.options.supportedLngs &&
                o.forEach(function (e) {
                  if (!t) {
                    var r = n.getLanguagePartFromCode(e);
                    if (n.isSupportedCode(r)) return (t = r);
                    t = n.options.supportedLngs.find(function (a) {
                      if (a.indexOf(r) === 0) return a;
                    });
                  }
                }),
              t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]),
              t
            );
          },
        },
        {
          key: 'getFallbackCodes',
          value: function (o, n) {
            if (!o) return [];
            if (
              (typeof o == 'function' && (o = o(n)),
              typeof o == 'string' && (o = [o]),
              Object.prototype.toString.apply(o) === '[object Array]')
            )
              return o;
            if (!n) return o.default || [];
            var t = o[n];
            return (
              t || (t = o[this.getScriptPartFromCode(n)]),
              t || (t = o[this.formatLanguageCode(n)]),
              t || (t = o[this.getLanguagePartFromCode(n)]),
              t || (t = o.default),
              t || []
            );
          },
        },
        {
          key: 'toResolveHierarchy',
          value: function (o, n) {
            var t = this,
              e = this.getFallbackCodes(n || this.options.fallbackLng || [], o),
              r = [],
              a = function (f) {
                f &&
                  (t.isSupportedCode(f)
                    ? r.push(f)
                    : t.logger.warn(
                        'rejecting language code not found in supportedLngs: '.concat(f),
                      ));
              };
            return (
              typeof o == 'string' && o.indexOf('-') > -1
                ? (this.options.load !== 'languageOnly' && a(this.formatLanguageCode(o)),
                  this.options.load !== 'languageOnly' &&
                    this.options.load !== 'currentOnly' &&
                    a(this.getScriptPartFromCode(o)),
                  this.options.load !== 'currentOnly' && a(this.getLanguagePartFromCode(o)))
                : typeof o == 'string' && a(this.formatLanguageCode(o)),
              e.forEach(function (i) {
                r.indexOf(i) < 0 && a(t.formatLanguageCode(i));
              }),
              r
            );
          },
        },
      ]),
      O
    );
  })(),
  on = [
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
  an = {
    1: function (R) {
      return Number(R > 1);
    },
    2: function (R) {
      return Number(R != 1);
    },
    3: function (R) {
      return 0;
    },
    4: function (R) {
      return Number(
        R % 10 == 1 && R % 100 != 11
          ? 0
          : R % 10 >= 2 && R % 10 <= 4 && (R % 100 < 10 || R % 100 >= 20)
          ? 1
          : 2,
      );
    },
    5: function (R) {
      return Number(
        R == 0
          ? 0
          : R == 1
          ? 1
          : R == 2
          ? 2
          : R % 100 >= 3 && R % 100 <= 10
          ? 3
          : R % 100 >= 11
          ? 4
          : 5,
      );
    },
    6: function (R) {
      return Number(R == 1 ? 0 : R >= 2 && R <= 4 ? 1 : 2);
    },
    7: function (R) {
      return Number(
        R == 1 ? 0 : R % 10 >= 2 && R % 10 <= 4 && (R % 100 < 10 || R % 100 >= 20) ? 1 : 2,
      );
    },
    8: function (R) {
      return Number(R == 1 ? 0 : R == 2 ? 1 : R != 8 && R != 11 ? 2 : 3);
    },
    9: function (R) {
      return Number(R >= 2);
    },
    10: function (R) {
      return Number(R == 1 ? 0 : R == 2 ? 1 : R < 7 ? 2 : R < 11 ? 3 : 4);
    },
    11: function (R) {
      return Number(R == 1 || R == 11 ? 0 : R == 2 || R == 12 ? 1 : R > 2 && R < 20 ? 2 : 3);
    },
    12: function (R) {
      return Number(R % 10 != 1 || R % 100 == 11);
    },
    13: function (R) {
      return Number(R !== 0);
    },
    14: function (R) {
      return Number(R == 1 ? 0 : R == 2 ? 1 : R == 3 ? 2 : 3);
    },
    15: function (R) {
      return Number(
        R % 10 == 1 && R % 100 != 11 ? 0 : R % 10 >= 2 && (R % 100 < 10 || R % 100 >= 20) ? 1 : 2,
      );
    },
    16: function (R) {
      return Number(R % 10 == 1 && R % 100 != 11 ? 0 : R !== 0 ? 1 : 2);
    },
    17: function (R) {
      return Number(R == 1 || (R % 10 == 1 && R % 100 != 11) ? 0 : 1);
    },
    18: function (R) {
      return Number(R == 0 ? 0 : R == 1 ? 1 : 2);
    },
    19: function (R) {
      return Number(
        R == 1
          ? 0
          : R == 0 || (R % 100 > 1 && R % 100 < 11)
          ? 1
          : R % 100 > 10 && R % 100 < 20
          ? 2
          : 3,
      );
    },
    20: function (R) {
      return Number(R == 1 ? 0 : R == 0 || (R % 100 > 0 && R % 100 < 20) ? 1 : 2);
    },
    21: function (R) {
      return Number(R % 100 == 1 ? 1 : R % 100 == 2 ? 2 : R % 100 == 3 || R % 100 == 4 ? 3 : 0);
    },
    22: function (R) {
      return Number(R == 1 ? 0 : R == 2 ? 1 : (R < 0 || R > 10) && R % 10 == 0 ? 2 : 3);
    },
  },
  ln = ['v1', 'v2', 'v3'],
  ge = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 };
function sn() {
  var O = {};
  return (
    on.forEach(function (R) {
      R.lngs.forEach(function (o) {
        O[o] = { numbers: R.nr, plurals: an[R.fc] };
      });
    }),
    O
  );
}
var un = (function () {
  function O(R) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    At(this, O),
      (this.languageUtils = R),
      (this.options = o),
      (this.logger = gt.create('pluralResolver')),
      (!this.options.compatibilityJSON || this.options.compatibilityJSON === 'v4') &&
        (typeof Intl == 'undefined' || !Intl.PluralRules) &&
        ((this.options.compatibilityJSON = 'v3'),
        this.logger.error(
          'Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.',
        )),
      (this.rules = sn());
  }
  return (
    yt(O, [
      {
        key: 'addRule',
        value: function (o, n) {
          this.rules[o] = n;
        },
      },
      {
        key: 'getRule',
        value: function (o) {
          var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          if (this.shouldUseIntlApi())
            try {
              return new Intl.PluralRules(o, { type: n.ordinal ? 'ordinal' : 'cardinal' });
            } catch (t) {
              return;
            }
          return this.rules[o] || this.rules[this.languageUtils.getLanguagePartFromCode(o)];
        },
      },
      {
        key: 'needsPlural',
        value: function (o) {
          var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            t = this.getRule(o, n);
          return this.shouldUseIntlApi()
            ? t && t.resolvedOptions().pluralCategories.length > 1
            : t && t.numbers.length > 1;
        },
      },
      {
        key: 'getPluralFormsOfKey',
        value: function (o, n) {
          var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return this.getSuffixes(o, t).map(function (e) {
            return ''.concat(n).concat(e);
          });
        },
      },
      {
        key: 'getSuffixes',
        value: function (o) {
          var n = this,
            t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            e = this.getRule(o, t);
          return e
            ? this.shouldUseIntlApi()
              ? e
                  .resolvedOptions()
                  .pluralCategories.sort(function (r, a) {
                    return ge[r] - ge[a];
                  })
                  .map(function (r) {
                    return ''.concat(n.options.prepend).concat(r);
                  })
              : e.numbers.map(function (r) {
                  return n.getSuffix(o, r, t);
                })
            : [];
        },
      },
      {
        key: 'getSuffix',
        value: function (o, n) {
          var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
            e = this.getRule(o, t);
          return e
            ? this.shouldUseIntlApi()
              ? ''.concat(this.options.prepend).concat(e.select(n))
              : this.getSuffixRetroCompatible(e, n)
            : (this.logger.warn('no plural rule found for: '.concat(o)), '');
        },
      },
      {
        key: 'getSuffixRetroCompatible',
        value: function (o, n) {
          var t = this,
            e = o.noAbs ? o.plurals(n) : o.plurals(Math.abs(n)),
            r = o.numbers[e];
          this.options.simplifyPluralSuffix &&
            o.numbers.length === 2 &&
            o.numbers[0] === 1 &&
            (r === 2 ? (r = 'plural') : r === 1 && (r = ''));
          var a = function () {
            return t.options.prepend && r.toString()
              ? t.options.prepend + r.toString()
              : r.toString();
          };
          return this.options.compatibilityJSON === 'v1'
            ? r === 1
              ? ''
              : typeof r == 'number'
              ? '_plural_'.concat(r.toString())
              : a()
            : this.options.compatibilityJSON === 'v2' ||
              (this.options.simplifyPluralSuffix && o.numbers.length === 2 && o.numbers[0] === 1)
            ? a()
            : this.options.prepend && e.toString()
            ? this.options.prepend + e.toString()
            : e.toString();
        },
      },
      {
        key: 'shouldUseIntlApi',
        value: function () {
          return !ln.includes(this.options.compatibilityJSON);
        },
      },
    ]),
    O
  );
})();
function me(O, R) {
  var o = Object.keys(O);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(O);
    R &&
      (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(O, t).enumerable;
      })),
      o.push.apply(o, n);
  }
  return o;
}
function dt(O) {
  for (var R = 1; R < arguments.length; R++) {
    var o = arguments[R] != null ? arguments[R] : {};
    R % 2
      ? me(Object(o), !0).forEach(function (n) {
          Rt(O, n, o[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(O, Object.getOwnPropertyDescriptors(o))
      : me(Object(o)).forEach(function (n) {
          Object.defineProperty(O, n, Object.getOwnPropertyDescriptor(o, n));
        });
  }
  return O;
}
var fn = (function () {
  function O() {
    var R = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    At(this, O),
      (this.logger = gt.create('interpolator')),
      (this.options = R),
      (this.format =
        (R.interpolation && R.interpolation.format) ||
        function (o) {
          return o;
        }),
      this.init(R);
  }
  return (
    yt(O, [
      {
        key: 'init',
        value: function () {
          var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          o.interpolation || (o.interpolation = { escapeValue: !0 });
          var n = o.interpolation;
          (this.escape = n.escape !== void 0 ? n.escape : Ze),
            (this.escapeValue = n.escapeValue !== void 0 ? n.escapeValue : !0),
            (this.useRawValueToEscape =
              n.useRawValueToEscape !== void 0 ? n.useRawValueToEscape : !1),
            (this.prefix = n.prefix ? wt(n.prefix) : n.prefixEscaped || '{{'),
            (this.suffix = n.suffix ? wt(n.suffix) : n.suffixEscaped || '}}'),
            (this.formatSeparator = n.formatSeparator
              ? n.formatSeparator
              : n.formatSeparator || ','),
            (this.unescapePrefix = n.unescapeSuffix ? '' : n.unescapePrefix || '-'),
            (this.unescapeSuffix = this.unescapePrefix ? '' : n.unescapeSuffix || ''),
            (this.nestingPrefix = n.nestingPrefix
              ? wt(n.nestingPrefix)
              : n.nestingPrefixEscaped || wt('$t(')),
            (this.nestingSuffix = n.nestingSuffix
              ? wt(n.nestingSuffix)
              : n.nestingSuffixEscaped || wt(')')),
            (this.nestingOptionsSeparator = n.nestingOptionsSeparator
              ? n.nestingOptionsSeparator
              : n.nestingOptionsSeparator || ','),
            (this.maxReplaces = n.maxReplaces ? n.maxReplaces : 1e3),
            (this.alwaysFormat = n.alwaysFormat !== void 0 ? n.alwaysFormat : !1),
            this.resetRegExp();
        },
      },
      {
        key: 'reset',
        value: function () {
          this.options && this.init(this.options);
        },
      },
      {
        key: 'resetRegExp',
        value: function () {
          var o = ''.concat(this.prefix, '(.+?)').concat(this.suffix);
          this.regexp = new RegExp(o, 'g');
          var n = ''
            .concat(this.prefix)
            .concat(this.unescapePrefix, '(.+?)')
            .concat(this.unescapeSuffix)
            .concat(this.suffix);
          this.regexpUnescape = new RegExp(n, 'g');
          var t = ''.concat(this.nestingPrefix, '(.+?)').concat(this.nestingSuffix);
          this.nestingRegexp = new RegExp(t, 'g');
        },
      },
      {
        key: 'interpolate',
        value: function (o, n, t, e) {
          var r = this,
            a,
            i,
            f,
            g =
              (this.options &&
                this.options.interpolation &&
                this.options.interpolation.defaultVariables) ||
              {};
          function s(c) {
            return c.replace(/\$/g, '$$$$');
          }
          var p = function (h) {
            if (h.indexOf(r.formatSeparator) < 0) {
              var d = fe(n, g, h);
              return r.alwaysFormat
                ? r.format(d, void 0, t, dt(dt(dt({}, e), n), {}, { interpolationkey: h }))
                : d;
            }
            var m = h.split(r.formatSeparator),
              A = m.shift().trim(),
              y = m.join(r.formatSeparator).trim();
            return r.format(fe(n, g, A), y, t, dt(dt(dt({}, e), n), {}, { interpolationkey: A }));
          };
          this.resetRegExp();
          var u = (e && e.missingInterpolationHandler) || this.options.missingInterpolationHandler,
            l =
              e && e.interpolation && e.interpolation.skipOnVariables !== void 0
                ? e.interpolation.skipOnVariables
                : this.options.interpolation.skipOnVariables,
            v = [
              {
                regex: this.regexpUnescape,
                safeValue: function (h) {
                  return s(h);
                },
              },
              {
                regex: this.regexp,
                safeValue: function (h) {
                  return r.escapeValue ? s(r.escape(h)) : s(h);
                },
              },
            ];
          return (
            v.forEach(function (c) {
              for (f = 0; (a = c.regex.exec(o)); ) {
                var h = a[1].trim();
                if (((i = p(h)), i === void 0))
                  if (typeof u == 'function') {
                    var d = u(o, a, e);
                    i = typeof d == 'string' ? d : '';
                  } else if (e && Object.prototype.hasOwnProperty.call(e, h)) i = '';
                  else if (l) {
                    i = a[0];
                    continue;
                  } else
                    r.logger.warn(
                      'missed to pass in variable '.concat(h, ' for interpolating ').concat(o),
                    ),
                      (i = '');
                else typeof i != 'string' && !r.useRawValueToEscape && (i = se(i));
                var m = c.safeValue(i);
                if (
                  ((o = o.replace(a[0], m)),
                  l
                    ? ((c.regex.lastIndex += i.length), (c.regex.lastIndex -= a[0].length))
                    : (c.regex.lastIndex = 0),
                  f++,
                  f >= r.maxReplaces)
                )
                  break;
              }
            }),
            o
          );
        },
      },
      {
        key: 'nest',
        value: function (o, n) {
          var t = this,
            e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
            r,
            a,
            i;
          function f(u, l) {
            var v = this.nestingOptionsSeparator;
            if (u.indexOf(v) < 0) return u;
            var c = u.split(new RegExp(''.concat(v, '[ ]*{'))),
              h = '{'.concat(c[1]);
            (u = c[0]), (h = this.interpolate(h, i));
            var d = h.match(/'/g),
              m = h.match(/"/g);
            ((d && d.length % 2 === 0 && !m) || m.length % 2 !== 0) && (h = h.replace(/'/g, '"'));
            try {
              (i = JSON.parse(h)), l && (i = dt(dt({}, l), i));
            } catch (A) {
              return (
                this.logger.warn('failed parsing options string in nesting for key '.concat(u), A),
                ''.concat(u).concat(v).concat(h)
              );
            }
            return delete i.defaultValue, u;
          }
          for (; (r = this.nestingRegexp.exec(o)); ) {
            var g = [];
            (i = dt({}, e)),
              (i = i.replace && typeof i.replace != 'string' ? i.replace : i),
              (i.applyPostProcessor = !1),
              delete i.defaultValue;
            var s = !1;
            if (r[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(r[1])) {
              var p = r[1].split(this.formatSeparator).map(function (u) {
                return u.trim();
              });
              (r[1] = p.shift()), (g = p), (s = !0);
            }
            if (((a = n(f.call(this, r[1].trim(), i), i)), a && r[0] === o && typeof a != 'string'))
              return a;
            typeof a != 'string' && (a = se(a)),
              a ||
                (this.logger.warn('missed to resolve '.concat(r[1], ' for nesting ').concat(o)),
                (a = '')),
              s &&
                (a = g.reduce(function (u, l) {
                  return t.format(
                    u,
                    l,
                    e.lng,
                    dt(dt({}, e), {}, { interpolationkey: r[1].trim() }),
                  );
                }, a.trim())),
              (o = o.replace(r[0], a)),
              (this.regexp.lastIndex = 0);
          }
          return o;
        },
      },
    ]),
    O
  );
})();
function Ae(O, R) {
  var o = Object.keys(O);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(O);
    R &&
      (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(O, t).enumerable;
      })),
      o.push.apply(o, n);
  }
  return o;
}
function Ct(O) {
  for (var R = 1; R < arguments.length; R++) {
    var o = arguments[R] != null ? arguments[R] : {};
    R % 2
      ? Ae(Object(o), !0).forEach(function (n) {
          Rt(O, n, o[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(O, Object.getOwnPropertyDescriptors(o))
      : Ae(Object(o)).forEach(function (n) {
          Object.defineProperty(O, n, Object.getOwnPropertyDescriptor(o, n));
        });
  }
  return O;
}
function cn(O) {
  var R = O.toLowerCase().trim(),
    o = {};
  if (O.indexOf('(') > -1) {
    var n = O.split('(');
    R = n[0].toLowerCase().trim();
    var t = n[1].substring(0, n[1].length - 1);
    if (R === 'currency' && t.indexOf(':') < 0) o.currency || (o.currency = t.trim());
    else if (R === 'relativetime' && t.indexOf(':') < 0) o.range || (o.range = t.trim());
    else {
      var e = t.split(';');
      e.forEach(function (r) {
        if (r) {
          var a = r.split(':'),
            i = Ve(a),
            f = i[0],
            g = i.slice(1),
            s = g
              .join(':')
              .trim()
              .replace(/^'+|'+$/g, '');
          o[f.trim()] || (o[f.trim()] = s),
            s === 'false' && (o[f.trim()] = !1),
            s === 'true' && (o[f.trim()] = !0),
            isNaN(s) || (o[f.trim()] = parseInt(s, 10));
        }
      });
    }
  }
  return { formatName: R, formatOptions: o };
}
function jt(O) {
  var R = {};
  return function (n, t, e) {
    var r = t + JSON.stringify(e),
      a = R[r];
    return a || ((a = O(t, e)), (R[r] = a)), a(n);
  };
}
var dn = (function () {
  function O() {
    var R = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    At(this, O),
      (this.logger = gt.create('formatter')),
      (this.options = R),
      (this.formats = {
        number: jt(function (o, n) {
          var t = new Intl.NumberFormat(o, Ct({}, n));
          return function (e) {
            return t.format(e);
          };
        }),
        currency: jt(function (o, n) {
          var t = new Intl.NumberFormat(o, Ct(Ct({}, n), {}, { style: 'currency' }));
          return function (e) {
            return t.format(e);
          };
        }),
        datetime: jt(function (o, n) {
          var t = new Intl.DateTimeFormat(o, Ct({}, n));
          return function (e) {
            return t.format(e);
          };
        }),
        relativetime: jt(function (o, n) {
          var t = new Intl.RelativeTimeFormat(o, Ct({}, n));
          return function (e) {
            return t.format(e, n.range || 'day');
          };
        }),
        list: jt(function (o, n) {
          var t = new Intl.ListFormat(o, Ct({}, n));
          return function (e) {
            return t.format(e);
          };
        }),
      }),
      this.init(R);
  }
  return (
    yt(O, [
      {
        key: 'init',
        value: function (o) {
          var n =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : { interpolation: {} },
            t = n.interpolation;
          this.formatSeparator = t.formatSeparator ? t.formatSeparator : t.formatSeparator || ',';
        },
      },
      {
        key: 'add',
        value: function (o, n) {
          this.formats[o.toLowerCase().trim()] = n;
        },
      },
      {
        key: 'addCached',
        value: function (o, n) {
          this.formats[o.toLowerCase().trim()] = jt(n);
        },
      },
      {
        key: 'format',
        value: function (o, n, t) {
          var e = this,
            r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
            a = n.split(this.formatSeparator),
            i = a.reduce(function (f, g) {
              var s = cn(g),
                p = s.formatName,
                u = s.formatOptions;
              if (e.formats[p]) {
                var l = f;
                try {
                  var v = (r && r.formatParams && r.formatParams[r.interpolationkey]) || {},
                    c = v.locale || v.lng || r.locale || r.lng || t;
                  l = e.formats[p](f, c, Ct(Ct(Ct({}, u), r), v));
                } catch (h) {
                  e.logger.warn(h);
                }
                return l;
              } else e.logger.warn('there was no format function for '.concat(p));
              return f;
            }, o);
          return i;
        },
      },
    ]),
    O
  );
})();
function ye(O, R) {
  var o = Object.keys(O);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(O);
    R &&
      (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(O, t).enumerable;
      })),
      o.push.apply(o, n);
  }
  return o;
}
function Ee(O) {
  for (var R = 1; R < arguments.length; R++) {
    var o = arguments[R] != null ? arguments[R] : {};
    R % 2
      ? ye(Object(o), !0).forEach(function (n) {
          Rt(O, n, o[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(O, Object.getOwnPropertyDescriptors(o))
      : ye(Object(o)).forEach(function (n) {
          Object.defineProperty(O, n, Object.getOwnPropertyDescriptor(o, n));
        });
  }
  return O;
}
function vn(O) {
  var R = pn();
  return function () {
    var n = mt(O),
      t;
    if (R) {
      var e = mt(this).constructor;
      t = Reflect.construct(n, arguments, e);
    } else t = n.apply(this, arguments);
    return zt(this, t);
  };
}
function pn() {
  if (typeof Reflect == 'undefined' || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == 'function') return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
  } catch (O) {
    return !1;
  }
}
function hn(O, R) {
  O.pending[R] !== void 0 && (delete O.pending[R], O.pendingCount--);
}
var gn = (function (O) {
  Xt(o, O);
  var R = vn(o);
  function o(n, t, e) {
    var r,
      a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return (
      At(this, o),
      (r = R.call(this)),
      Zt && Tt.call(Dt(r)),
      (r.backend = n),
      (r.store = t),
      (r.services = e),
      (r.languageUtils = e.languageUtils),
      (r.options = a),
      (r.logger = gt.create('backendConnector')),
      (r.waitingReads = []),
      (r.maxParallelReads = a.maxParallelReads || 10),
      (r.readingCalls = 0),
      (r.maxRetries = a.maxRetries >= 0 ? a.maxRetries : 5),
      (r.retryTimeout = a.retryTimeout >= 1 ? a.retryTimeout : 350),
      (r.state = {}),
      (r.queue = []),
      r.backend && r.backend.init && r.backend.init(e, a.backend, a),
      r
    );
  }
  return (
    yt(o, [
      {
        key: 'queueLoad',
        value: function (t, e, r, a) {
          var i = this,
            f = {},
            g = {},
            s = {},
            p = {};
          return (
            t.forEach(function (u) {
              var l = !0;
              e.forEach(function (v) {
                var c = ''.concat(u, '|').concat(v);
                !r.reload && i.store.hasResourceBundle(u, v)
                  ? (i.state[c] = 2)
                  : i.state[c] < 0 ||
                    (i.state[c] === 1
                      ? g[c] === void 0 && (g[c] = !0)
                      : ((i.state[c] = 1),
                        (l = !1),
                        g[c] === void 0 && (g[c] = !0),
                        f[c] === void 0 && (f[c] = !0),
                        p[v] === void 0 && (p[v] = !0)));
              }),
                l || (s[u] = !0);
            }),
            (Object.keys(f).length || Object.keys(g).length) &&
              this.queue.push({
                pending: g,
                pendingCount: Object.keys(g).length,
                loaded: {},
                errors: [],
                callback: a,
              }),
            {
              toLoad: Object.keys(f),
              pending: Object.keys(g),
              toLoadLanguages: Object.keys(s),
              toLoadNamespaces: Object.keys(p),
            }
          );
        },
      },
      {
        key: 'loaded',
        value: function (t, e, r) {
          var a = t.split('|'),
            i = a[0],
            f = a[1];
          e && this.emit('failedLoading', i, f, e),
            r && this.store.addResourceBundle(i, f, r),
            (this.state[t] = e ? -1 : 2);
          var g = {};
          this.queue.forEach(function (s) {
            We(s.loaded, [i], f),
              hn(s, t),
              e && s.errors.push(e),
              s.pendingCount === 0 &&
                !s.done &&
                (Object.keys(s.loaded).forEach(function (p) {
                  g[p] || (g[p] = {});
                  var u = s.loaded[p];
                  u.length &&
                    u.forEach(function (l) {
                      g[p][l] === void 0 && (g[p][l] = !0);
                    });
                }),
                (s.done = !0),
                s.errors.length ? s.callback(s.errors) : s.callback());
          }),
            this.emit('loaded', g),
            (this.queue = this.queue.filter(function (s) {
              return !s.done;
            }));
        },
      },
      {
        key: 'read',
        value: function (t, e, r) {
          var a = this,
            i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
            f = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout,
            g = arguments.length > 5 ? arguments[5] : void 0;
          if (!t.length) return g(null, {});
          if (this.readingCalls >= this.maxParallelReads) {
            this.waitingReads.push({ lng: t, ns: e, fcName: r, tried: i, wait: f, callback: g });
            return;
          }
          this.readingCalls++;
          var s = function (v, c) {
              if ((a.readingCalls--, a.waitingReads.length > 0)) {
                var h = a.waitingReads.shift();
                a.read(h.lng, h.ns, h.fcName, h.tried, h.wait, h.callback);
              }
              if (v && c && i < a.maxRetries) {
                setTimeout(function () {
                  a.read.call(a, t, e, r, i + 1, f * 2, g);
                }, f);
                return;
              }
              g(v, c);
            },
            p = this.backend[r].bind(this.backend);
          if (p.length === 2) {
            try {
              var u = p(t, e);
              u && typeof u.then == 'function'
                ? u
                    .then(function (l) {
                      return s(null, l);
                    })
                    .catch(s)
                : s(null, u);
            } catch (l) {
              s(l);
            }
            return;
          }
          return p(t, e, s);
        },
      },
      {
        key: 'prepareLoading',
        value: function (t, e) {
          var r = this,
            a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
            i = arguments.length > 3 ? arguments[3] : void 0;
          if (!this.backend)
            return (
              this.logger.warn('No backend was added via i18next.use. Will not load resources.'),
              i && i()
            );
          typeof t == 'string' && (t = this.languageUtils.toResolveHierarchy(t)),
            typeof e == 'string' && (e = [e]);
          var f = this.queueLoad(t, e, a, i);
          if (!f.toLoad.length) return f.pending.length || i(), null;
          f.toLoad.forEach(function (g) {
            r.loadOne(g);
          });
        },
      },
      {
        key: 'load',
        value: function (t, e, r) {
          this.prepareLoading(t, e, {}, r);
        },
      },
      {
        key: 'reload',
        value: function (t, e, r) {
          this.prepareLoading(t, e, { reload: !0 }, r);
        },
      },
      {
        key: 'loadOne',
        value: function (t) {
          var e = this,
            r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '',
            a = t.split('|'),
            i = a[0],
            f = a[1];
          this.read(i, f, 'read', void 0, void 0, function (g, s) {
            g &&
              e.logger.warn(
                ''.concat(r, 'loading namespace ').concat(f, ' for language ').concat(i, ' failed'),
                g,
              ),
              !g &&
                s &&
                e.logger.log(
                  ''.concat(r, 'loaded namespace ').concat(f, ' for language ').concat(i),
                  s,
                ),
              e.loaded(t, g, s);
          });
        },
      },
      {
        key: 'saveMissing',
        value: function (t, e, r, a, i) {
          var f = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {},
            g = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : function () {};
          if (
            this.services.utils &&
            this.services.utils.hasLoadedNamespace &&
            !this.services.utils.hasLoadedNamespace(e)
          ) {
            this.logger.warn(
              'did not save key "'
                .concat(r, '" as the namespace "')
                .concat(e, '" was not yet loaded'),
              'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!',
            );
            return;
          }
          if (!(r == null || r === '')) {
            if (this.backend && this.backend.create) {
              var s = Ee(Ee({}, f), {}, { isUpdate: i }),
                p = this.backend.create.bind(this.backend);
              if (p.length < 6)
                try {
                  var u;
                  p.length === 5 ? (u = p(t, e, r, a, s)) : (u = p(t, e, r, a)),
                    u && typeof u.then == 'function'
                      ? u
                          .then(function (l) {
                            return g(null, l);
                          })
                          .catch(g)
                      : g(null, u);
                } catch (l) {
                  g(l);
                }
              else p(t, e, r, a, g, s);
            }
            !t || !t[0] || this.store.addResource(t[0], e, r, a);
          }
        },
      },
    ]),
    o
  );
})(Tt);
function xe() {
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
    returnNull: !0,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: function (R) {
      var o = {};
      if (
        (vt(R[1]) === 'object' && (o = R[1]),
        typeof R[1] == 'string' && (o.defaultValue = R[1]),
        typeof R[2] == 'string' && (o.tDescription = R[2]),
        vt(R[2]) === 'object' || vt(R[3]) === 'object')
      ) {
        var n = R[3] || R[2];
        Object.keys(n).forEach(function (t) {
          o[t] = n[t];
        });
      }
      return o;
    },
    interpolation: {
      escapeValue: !0,
      format: function (R, o, n, t) {
        return R;
      },
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
function Se(O) {
  return (
    typeof O.ns == 'string' && (O.ns = [O.ns]),
    typeof O.fallbackLng == 'string' && (O.fallbackLng = [O.fallbackLng]),
    typeof O.fallbackNS == 'string' && (O.fallbackNS = [O.fallbackNS]),
    O.supportedLngs &&
      O.supportedLngs.indexOf('cimode') < 0 &&
      (O.supportedLngs = O.supportedLngs.concat(['cimode'])),
    O
  );
}
function Ce(O, R) {
  var o = Object.keys(O);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(O);
    R &&
      (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(O, t).enumerable;
      })),
      o.push.apply(o, n);
  }
  return o;
}
function ht(O) {
  for (var R = 1; R < arguments.length; R++) {
    var o = arguments[R] != null ? arguments[R] : {};
    R % 2
      ? Ce(Object(o), !0).forEach(function (n) {
          Rt(O, n, o[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(O, Object.getOwnPropertyDescriptors(o))
      : Ce(Object(o)).forEach(function (n) {
          Object.defineProperty(O, n, Object.getOwnPropertyDescriptor(o, n));
        });
  }
  return O;
}
function mn(O) {
  var R = An();
  return function () {
    var n = mt(O),
      t;
    if (R) {
      var e = mt(this).constructor;
      t = Reflect.construct(n, arguments, e);
    } else t = n.apply(this, arguments);
    return zt(this, t);
  };
}
function An() {
  if (typeof Reflect == 'undefined' || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == 'function') return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
  } catch (O) {
    return !1;
  }
}
function Gt() {}
function yn(O) {
  var R = Object.getOwnPropertyNames(Object.getPrototypeOf(O));
  R.forEach(function (o) {
    typeof O[o] == 'function' && (O[o] = O[o].bind(O));
  });
}
var Wt = (function (O) {
  Xt(o, O);
  var R = mn(o);
  function o() {
    var n,
      t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      e = arguments.length > 1 ? arguments[1] : void 0;
    if (
      (At(this, o),
      (n = R.call(this)),
      Zt && Tt.call(Dt(n)),
      (n.options = Se(t)),
      (n.services = {}),
      (n.logger = gt),
      (n.modules = { external: [] }),
      yn(Dt(n)),
      e && !n.isInitialized && !t.isClone)
    ) {
      if (!n.options.initImmediate) return n.init(t, e), zt(n, Dt(n));
      setTimeout(function () {
        n.init(t, e);
      }, 0);
    }
    return n;
  }
  return (
    yt(o, [
      {
        key: 'init',
        value: function () {
          var t = this,
            e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            r = arguments.length > 1 ? arguments[1] : void 0;
          typeof e == 'function' && ((r = e), (e = {})),
            !e.defaultNS &&
              e.defaultNS !== !1 &&
              e.ns &&
              (typeof e.ns == 'string'
                ? (e.defaultNS = e.ns)
                : e.ns.indexOf('translation') < 0 && (e.defaultNS = e.ns[0]));
          var a = xe();
          (this.options = ht(ht(ht({}, a), this.options), Se(e))),
            this.options.compatibilityAPI !== 'v1' &&
              (this.options.interpolation = ht(
                ht({}, a.interpolation),
                this.options.interpolation,
              )),
            e.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = e.keySeparator),
            e.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = e.nsSeparator);
          function i(h) {
            return h ? (typeof h == 'function' ? new h() : h) : null;
          }
          if (!this.options.isClone) {
            this.modules.logger
              ? gt.init(i(this.modules.logger), this.options)
              : gt.init(null, this.options);
            var f;
            this.modules.formatter
              ? (f = this.modules.formatter)
              : typeof Intl != 'undefined' && (f = dn);
            var g = new he(this.options);
            this.store = new en(this.options.resources, this.options);
            var s = this.services;
            (s.logger = gt),
              (s.resourceStore = this.store),
              (s.languageUtils = g),
              (s.pluralResolver = new un(g, {
                prepend: this.options.pluralSeparator,
                compatibilityJSON: this.options.compatibilityJSON,
                simplifyPluralSuffix: this.options.simplifyPluralSuffix,
              })),
              f &&
                (!this.options.interpolation.format ||
                  this.options.interpolation.format === a.interpolation.format) &&
                ((s.formatter = i(f)),
                s.formatter.init(s, this.options),
                (this.options.interpolation.format = s.formatter.format.bind(s.formatter))),
              (s.interpolator = new fn(this.options)),
              (s.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
              (s.backendConnector = new gn(
                i(this.modules.backend),
                s.resourceStore,
                s,
                this.options,
              )),
              s.backendConnector.on('*', function (h) {
                for (var d = arguments.length, m = new Array(d > 1 ? d - 1 : 0), A = 1; A < d; A++)
                  m[A - 1] = arguments[A];
                t.emit.apply(t, [h].concat(m));
              }),
              this.modules.languageDetector &&
                ((s.languageDetector = i(this.modules.languageDetector)),
                s.languageDetector.init &&
                  s.languageDetector.init(s, this.options.detection, this.options)),
              this.modules.i18nFormat &&
                ((s.i18nFormat = i(this.modules.i18nFormat)),
                s.i18nFormat.init && s.i18nFormat.init(this)),
              (this.translator = new pe(this.services, this.options)),
              this.translator.on('*', function (h) {
                for (var d = arguments.length, m = new Array(d > 1 ? d - 1 : 0), A = 1; A < d; A++)
                  m[A - 1] = arguments[A];
                t.emit.apply(t, [h].concat(m));
              }),
              this.modules.external.forEach(function (h) {
                h.init && h.init(t);
              });
          }
          if (
            ((this.format = this.options.interpolation.format),
            r || (r = Gt),
            this.options.fallbackLng && !this.services.languageDetector && !this.options.lng)
          ) {
            var p = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
            p.length > 0 && p[0] !== 'dev' && (this.options.lng = p[0]);
          }
          !this.services.languageDetector &&
            !this.options.lng &&
            this.logger.warn('init: no languageDetector is used and no lng is defined');
          var u = ['getResource', 'hasResourceBundle', 'getResourceBundle', 'getDataByLanguage'];
          u.forEach(function (h) {
            t[h] = function () {
              var d;
              return (d = t.store)[h].apply(d, arguments);
            };
          });
          var l = ['addResource', 'addResources', 'addResourceBundle', 'removeResourceBundle'];
          l.forEach(function (h) {
            t[h] = function () {
              var d;
              return (d = t.store)[h].apply(d, arguments), t;
            };
          });
          var v = Yt(),
            c = function () {
              var d = function (A, y) {
                t.isInitialized &&
                  !t.initializedStoreOnce &&
                  t.logger.warn(
                    'init: i18next is already initialized. You should call init just once!',
                  ),
                  (t.isInitialized = !0),
                  t.options.isClone || t.logger.log('initialized', t.options),
                  t.emit('initialized', t.options),
                  v.resolve(y),
                  r(A, y);
              };
              if (t.languages && t.options.compatibilityAPI !== 'v1' && !t.isInitialized)
                return d(null, t.t.bind(t));
              t.changeLanguage(t.options.lng, d);
            };
          return this.options.resources || !this.options.initImmediate ? c() : setTimeout(c, 0), v;
        },
      },
      {
        key: 'loadResources',
        value: function (t) {
          var e = this,
            r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Gt,
            a = r,
            i = typeof t == 'string' ? t : this.language;
          if (
            (typeof t == 'function' && (a = t),
            !this.options.resources || this.options.partialBundledLanguages)
          ) {
            if (i && i.toLowerCase() === 'cimode') return a();
            var f = [],
              g = function (u) {
                if (u) {
                  var l = e.services.languageUtils.toResolveHierarchy(u);
                  l.forEach(function (v) {
                    f.indexOf(v) < 0 && f.push(v);
                  });
                }
              };
            if (i) g(i);
            else {
              var s = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
              s.forEach(function (p) {
                return g(p);
              });
            }
            this.options.preload &&
              this.options.preload.forEach(function (p) {
                return g(p);
              }),
              this.services.backendConnector.load(f, this.options.ns, function (p) {
                !p && !e.resolvedLanguage && e.language && e.setResolvedLanguage(e.language), a(p);
              });
          } else a(null);
        },
      },
      {
        key: 'reloadResources',
        value: function (t, e, r) {
          var a = Yt();
          return (
            t || (t = this.languages),
            e || (e = this.options.ns),
            r || (r = Gt),
            this.services.backendConnector.reload(t, e, function (i) {
              a.resolve(), r(i);
            }),
            a
          );
        },
      },
      {
        key: 'use',
        value: function (t) {
          if (!t)
            throw new Error(
              'You are passing an undefined module! Please check the object you are passing to i18next.use()',
            );
          if (!t.type)
            throw new Error(
              'You are passing a wrong module! Please check the object you are passing to i18next.use()',
            );
          return (
            t.type === 'backend' && (this.modules.backend = t),
            (t.type === 'logger' || (t.log && t.warn && t.error)) && (this.modules.logger = t),
            t.type === 'languageDetector' && (this.modules.languageDetector = t),
            t.type === 'i18nFormat' && (this.modules.i18nFormat = t),
            t.type === 'postProcessor' && Re.addPostProcessor(t),
            t.type === 'formatter' && (this.modules.formatter = t),
            t.type === '3rdParty' && this.modules.external.push(t),
            this
          );
        },
      },
      {
        key: 'setResolvedLanguage',
        value: function (t) {
          if (!(!t || !this.languages) && !(['cimode', 'dev'].indexOf(t) > -1))
            for (var e = 0; e < this.languages.length; e++) {
              var r = this.languages[e];
              if (
                !(['cimode', 'dev'].indexOf(r) > -1) &&
                this.store.hasLanguageSomeTranslations(r)
              ) {
                this.resolvedLanguage = r;
                break;
              }
            }
        },
      },
      {
        key: 'changeLanguage',
        value: function (t, e) {
          var r = this;
          this.isLanguageChangingTo = t;
          var a = Yt();
          this.emit('languageChanging', t);
          var i = function (p) {
              (r.language = p),
                (r.languages = r.services.languageUtils.toResolveHierarchy(p)),
                (r.resolvedLanguage = void 0),
                r.setResolvedLanguage(p);
            },
            f = function (p, u) {
              u
                ? (i(u),
                  r.translator.changeLanguage(u),
                  (r.isLanguageChangingTo = void 0),
                  r.emit('languageChanged', u),
                  r.logger.log('languageChanged', u))
                : (r.isLanguageChangingTo = void 0),
                a.resolve(function () {
                  return r.t.apply(r, arguments);
                }),
                e &&
                  e(p, function () {
                    return r.t.apply(r, arguments);
                  });
            },
            g = function (p) {
              !t && !p && r.services.languageDetector && (p = []);
              var u = typeof p == 'string' ? p : r.services.languageUtils.getBestMatchFromCodes(p);
              u &&
                (r.language || i(u),
                r.translator.language || r.translator.changeLanguage(u),
                r.services.languageDetector &&
                  r.services.languageDetector.cacheUserLanguage &&
                  r.services.languageDetector.cacheUserLanguage(u)),
                r.loadResources(u, function (l) {
                  f(l, u);
                });
            };
          return (
            !t && this.services.languageDetector && !this.services.languageDetector.async
              ? g(this.services.languageDetector.detect())
              : !t && this.services.languageDetector && this.services.languageDetector.async
              ? this.services.languageDetector.detect.length === 0
                ? this.services.languageDetector.detect().then(g)
                : this.services.languageDetector.detect(g)
              : g(t),
            a
          );
        },
      },
      {
        key: 'getFixedT',
        value: function (t, e, r) {
          var a = this,
            i = function f(g, s) {
              var p;
              if (vt(s) !== 'object') {
                for (var u = arguments.length, l = new Array(u > 2 ? u - 2 : 0), v = 2; v < u; v++)
                  l[v - 2] = arguments[v];
                p = a.options.overloadTranslationOptionHandler([g, s].concat(l));
              } else p = ht({}, s);
              (p.lng = p.lng || f.lng),
                (p.lngs = p.lngs || f.lngs),
                (p.ns = p.ns || f.ns),
                (p.keyPrefix = p.keyPrefix || r || f.keyPrefix);
              var c = a.options.keySeparator || '.',
                h;
              return (
                p.keyPrefix && Array.isArray(g)
                  ? (h = g.map(function (d) {
                      return ''.concat(p.keyPrefix).concat(c).concat(d);
                    }))
                  : (h = p.keyPrefix ? ''.concat(p.keyPrefix).concat(c).concat(g) : g),
                a.t(h, p)
              );
            };
          return (
            typeof t == 'string' ? (i.lng = t) : (i.lngs = t), (i.ns = e), (i.keyPrefix = r), i
          );
        },
      },
      {
        key: 't',
        value: function () {
          var t;
          return this.translator && (t = this.translator).translate.apply(t, arguments);
        },
      },
      {
        key: 'exists',
        value: function () {
          var t;
          return this.translator && (t = this.translator).exists.apply(t, arguments);
        },
      },
      {
        key: 'setDefaultNamespace',
        value: function (t) {
          this.options.defaultNS = t;
        },
      },
      {
        key: 'hasLoadedNamespace',
        value: function (t) {
          var e = this,
            r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          if (!this.isInitialized)
            return (
              this.logger.warn('hasLoadedNamespace: i18next was not initialized', this.languages),
              !1
            );
          if (!this.languages || !this.languages.length)
            return (
              this.logger.warn(
                'hasLoadedNamespace: i18n.languages were undefined or empty',
                this.languages,
              ),
              !1
            );
          var a = this.resolvedLanguage || this.languages[0],
            i = this.options ? this.options.fallbackLng : !1,
            f = this.languages[this.languages.length - 1];
          if (a.toLowerCase() === 'cimode') return !0;
          var g = function (u, l) {
            var v = e.services.backendConnector.state[''.concat(u, '|').concat(l)];
            return v === -1 || v === 2;
          };
          if (r.precheck) {
            var s = r.precheck(this, g);
            if (s !== void 0) return s;
          }
          return !!(
            this.hasResourceBundle(a, t) ||
            !this.services.backendConnector.backend ||
            (this.options.resources && !this.options.partialBundledLanguages) ||
            (g(a, t) && (!i || g(f, t)))
          );
        },
      },
      {
        key: 'loadNamespaces',
        value: function (t, e) {
          var r = this,
            a = Yt();
          return this.options.ns
            ? (typeof t == 'string' && (t = [t]),
              t.forEach(function (i) {
                r.options.ns.indexOf(i) < 0 && r.options.ns.push(i);
              }),
              this.loadResources(function (i) {
                a.resolve(), e && e(i);
              }),
              a)
            : (e && e(), Promise.resolve());
        },
      },
      {
        key: 'loadLanguages',
        value: function (t, e) {
          var r = Yt();
          typeof t == 'string' && (t = [t]);
          var a = this.options.preload || [],
            i = t.filter(function (f) {
              return a.indexOf(f) < 0;
            });
          return i.length
            ? ((this.options.preload = a.concat(i)),
              this.loadResources(function (f) {
                r.resolve(), e && e(f);
              }),
              r)
            : (e && e(), Promise.resolve());
        },
      },
      {
        key: 'dir',
        value: function (t) {
          if (
            (t ||
              (t =
                this.resolvedLanguage ||
                (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)),
            !t)
          )
            return 'rtl';
          var e = [
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
            r = (this.services && this.services.languageUtils) || new he(xe());
          return e.indexOf(r.getLanguagePartFromCode(t)) > -1 ||
            t.toLowerCase().indexOf('-arab') > 1
            ? 'rtl'
            : 'ltr';
        },
      },
      {
        key: 'cloneInstance',
        value: function () {
          var t = this,
            e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Gt,
            a = ht(ht(ht({}, this.options), e), { isClone: !0 }),
            i = new o(a);
          (e.debug !== void 0 || e.prefix !== void 0) && (i.logger = i.logger.clone(e));
          var f = ['store', 'services', 'language'];
          return (
            f.forEach(function (g) {
              i[g] = t[g];
            }),
            (i.services = ht({}, this.services)),
            (i.services.utils = { hasLoadedNamespace: i.hasLoadedNamespace.bind(i) }),
            (i.translator = new pe(i.services, i.options)),
            i.translator.on('*', function (g) {
              for (var s = arguments.length, p = new Array(s > 1 ? s - 1 : 0), u = 1; u < s; u++)
                p[u - 1] = arguments[u];
              i.emit.apply(i, [g].concat(p));
            }),
            i.init(a, r),
            (i.translator.options = i.options),
            (i.translator.backendConnector.services.utils = {
              hasLoadedNamespace: i.hasLoadedNamespace.bind(i),
            }),
            i
          );
        },
      },
      {
        key: 'toJSON',
        value: function () {
          return {
            options: this.options,
            store: this.store,
            language: this.language,
            languages: this.languages,
            resolvedLanguage: this.resolvedLanguage,
          };
        },
      },
    ]),
    o
  );
})(Tt);
Rt(Wt, 'createInstance', function () {
  var O = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    R = arguments.length > 1 ? arguments[1] : void 0;
  return new Wt(O, R);
});
var at = Wt.createInstance();
at.createInstance = Wt.createInstance;
at.createInstance;
at.dir;
at.init;
at.loadResources;
at.reloadResources;
at.use;
at.changeLanguage;
at.getFixedT;
at.t;
at.exists;
at.setDefaultNamespace;
at.hasLoadedNamespace;
at.loadNamespaces;
at.loadLanguages;
const En = 'var(--main-bg-color)',
  xn = { mainBgColor: En },
  Sn = { class: 'page-container' },
  Cn = ['innerHTML'],
  Pn = Me({
    __name: 'index',
    setup(O) {
      console.log(xn.mainBgColor);
      const R = qt({}),
        o = qt({}),
        n = qt(''),
        { locale: t } = Oe();
      function e() {
        (o.value = new je(be(R))),
          console.log(o.value.config),
          (o.value.config.lang = t.value === 'zh-ch' ? 'zh-ch' : 'en'),
          (o.value.config.height = 500),
          (o.value.i18next = at),
          Object.assign(o.value.config, {
            onchange() {
              n.value = o.value.txt.html();
            },
          }),
          o.value.create();
      }
      return (
        Le(() => {
          e();
        }),
        (r, a) => (
          Be(),
          Fe('div', Sn, [
            re('div', { ref_key: 'editorELRef', ref: R }, null, 512),
            re('div', { class: 'innerHTML', innerHTML: n.value }, null, 8, Cn),
          ])
        )
      );
    },
  });
const Rn = He(Pn, [['__scopeId', 'data-v-c6bd8a30']]);
export { Rn as default };
