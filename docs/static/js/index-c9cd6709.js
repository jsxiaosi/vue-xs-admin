var He = Object.defineProperty,
  je = Object.defineProperties;
var De = Object.getOwnPropertyDescriptors;
var ae = Object.getOwnPropertySymbols;
var Pe = Object.prototype.hasOwnProperty,
  We = Object.prototype.propertyIsEnumerable;
var se = (i, s, n) =>
    s in i ? He(i, s, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (i[s] = n),
  re = (i, s) => {
    for (var n in s || (s = {})) Pe.call(s, n) && se(i, n, s[n]);
    if (ae) for (var n of ae(s)) We.call(s, n) && se(i, n, s[n]);
    return i;
  },
  ue = (i, s) => je(i, De(s));
import {
  d as U,
  j as S,
  H as j,
  z as u,
  y as e,
  x as qe,
  I as ze,
  o as $,
  c as H,
  J as b,
  K as ce,
  n as Y,
  L as fe,
  g as v,
  M as Be,
  N as Ee,
  r as Le,
  e as Ie,
  w as A,
  f as O,
  a as Re,
  F as Ne,
  b as de,
  u as Ye,
  v as Ue,
  t as Ve,
} from './index-dfb446be.js';
import { _ as Xe } from './plugin-vueexport-helper-c27b6911.js';
const d = window,
  Je = () => {
    (d.cancelAnimationFrame = (() =>
      d.cancelAnimationFrame ||
      d.webkitCancelAnimationFrame ||
      d.mozCancelAnimationFrame ||
      d.oCancelAnimationFrame ||
      d.msCancelAnimationFrame ||
      function (i) {
        return d.clearTimeout(i);
      })()),
      (d.requestAnimationFrame = (function () {
        return (
          d.requestAnimationFrame ||
          d.webkitRequestAnimationFrame ||
          d.mozRequestAnimationFrame ||
          d.oRequestAnimationFrame ||
          d.msRequestAnimationFrame ||
          function (i) {
            return d.setTimeout(i, 1e3 / 60);
          }
        );
      })());
  },
  Ke = (i, s) => {
    if (i === s) return !0;
    if (i.length !== s.length) return !1;
    for (let n = 0; n < i.length; ++n) if (i[n] !== s[n]) return !1;
    return !0;
  };
function pe() {
  Array.isArray ||
    (Array.isArray = function (y) {
      return Object.prototype.toString.call(y) === '[object Array]';
    });
  let i,
    s,
    n,
    f,
    h,
    _,
    t = 1,
    l = arguments[0] || {},
    p = !1,
    m = arguments.length;
  if (
    (typeof l == 'boolean' && ((p = l), (l = arguments[1] || {}), t++),
    typeof l != 'object' && typeof l != 'function' && (l = {}),
    t === m)
  )
    return l;
  for (; t < m; t++)
    if ((s = arguments[t]) != null)
      for (i in s)
        (n = l[i]),
          (f = s[i]),
          (h = Array.isArray(f)),
          p && f && (typeof f == 'object' || h)
            ? (h
                ? ((h = !1), (_ = n && Array.isArray(n) ? n : []))
                : (_ = n && typeof n == 'object' ? n : {}),
              (l[i] = pe(p, _, f)))
            : f !== void 0 && (l[i] = f);
  return l;
}
const Ge = Object.freeze(
    Object.defineProperty(
      { __proto__: null, animationFrame: Je, arrayEqual: Ke, copyObj: pe },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  Qe = ['innerHTML'],
  Ze = U({ name: 'SeamlessScroll' }),
  et = U(
    ue(re({}, Ze), {
      props: {
        data: { type: Array, default: () => [] },
        classOption: { type: Object, default: () => {} },
      },
      emits: ['scrollEnd'],
      setup(i, { expose: s, emit: n }) {
        const f = i,
          { animationFrame: h, copyObj: _ } = Ge;
        h();
        let t = S(0),
          l = S(0),
          p = S(0),
          m = S(0),
          y = S(0),
          M = S(0),
          D = S(0),
          P = S(''),
          T = null,
          V = 0,
          W,
          X = 0,
          J = 0,
          q = !1,
          z = 'ease-in',
          { classOption: g } = f;
        g.key === void 0 && (g.key = 0);
        const K = j(`wrap${g.key}`, null),
          G = j(`slotList${g.key}`, null),
          Q = j(`realBox${g.key}`, null);
        let Z = u(() => e(t) < 0),
          ee = u(() => Math.abs(e(t)) < e(M) - e(y)),
          me = u(() => ({
            step: 1,
            limitMoveNum: 5,
            hoverStop: !0,
            direction: 'top',
            openTouch: !0,
            singleHeight: 0,
            singleWidth: 0,
            waitTime: 1e3,
            switchOffset: 30,
            autoPlay: !0,
            navigation: !1,
            switchSingleStep: 134,
            switchDelay: 400,
            switchDisabledClass: 'disabled',
            isSingleRemUnit: !1,
          })),
          a = u(() => _({}, e(me), g));
        const he = u(() => (e(Z) ? '' : e(a).switchDisabledClass));
        let ve = u(() => (e(ee) ? '' : e(a).switchDisabledClass)),
          ye = u(() => ({
            position: 'absolute',
            margin: `${e(m) / 2}px 0 0 -${e(a).switchOffset}px`,
            transform: 'translate(-100%,-50%)',
          })),
          ge = u(() => ({
            position: 'absolute',
            margin: `${e(m) / 2}px 0 0 ${e(y) + e(a).switchOffset}px`,
            transform: 'translateY(-50%)',
          })),
          B = u(() => e(a).direction !== 'bottom' && e(a).direction !== 'top'),
          te = u(() => (e(B) ? { float: 'left', overflow: 'hidden' } : { overflow: 'hidden' })),
          we = u(() => ({
            transform: `translate(${e(t)}px,${e(l)}px)`,
            transition: `all ${z} ${e(p)}ms`,
            overflow: 'hidden',
          })),
          E = u(() => e(a).navigation),
          L = u(() => (e(E) ? !1 : e(a).autoPlay)),
          le = u(() => f.data.length >= e(a).limitMoveNum),
          ie = u(() => e(a).hoverStop && e(L) && e(le)),
          I = u(() => e(a).openTouch),
          ne = u(() =>
            e(a).isSingleRemUnit
              ? parseInt(window.getComputedStyle(document.documentElement, null).fontSize)
              : 1,
          ),
          R = u(() => e(a).singleWidth * e(ne)),
          N = u(() => e(a).singleHeight * e(ne)),
          x = u(() => {
            let o,
              r = e(a).step;
            if ((e(B) ? (o = e(R)) : (o = e(N)), o > 0 && o % r > 0))
              throw '如果设置了单步滚动，step需是单步大小的约数，否则无法保证单步滚动结束的位置是否准确';
            return r;
          });
        function Se() {
          (t.value = 0), (l.value = 0), C(), oe();
        }
        function be() {
          if (e(Z)) {
            if (Math.abs(e(t)) < e(a).switchSingleStep) {
              t.value = 0;
              return;
            }
            t.value += e(a).switchSingleStep;
          }
        }
        function _e() {
          if (e(ee)) {
            if (e(M) - e(y) + e(t) < e(a).switchSingleStep) {
              t.value = e(y) - e(M);
              return;
            }
            t.value -= e(a).switchSingleStep;
          }
        }
        function C() {
          cancelAnimationFrame(V);
        }
        function Te(o) {
          if (!e(I)) return;
          let r;
          const c = o.targetTouches[0],
            { waitTime: w, singleHeight: F, singleWidth: Oe } = e(a);
          (W = { x: c.pageX, y: c.pageY }),
            (X = e(l)),
            (J = e(t)),
            F && Oe
              ? (r && clearTimeout(r),
                (r = setTimeout(() => {
                  C();
                }, w + 20)))
              : C();
        }
        function xe(o) {
          if (!e(I) || o.targetTouches.length > 1 || (o.scale && o.scale !== 1)) return;
          const r = o.targetTouches[0],
            { direction: c } = e(a);
          let w = { x: r.pageX - W.x, y: r.pageY - W.y };
          o.preventDefault();
          const F = Math.abs(w.x) < Math.abs(w.y) ? 1 : 0;
          (F === 1 && c === 'bottom') || (F === 1 && c === 'top')
            ? (l.value = X + w.y)
            : ((F === 0 && c === 'left') || (F === 0 && c === 'right')) && (t.value = J + w.x);
        }
        function ke() {
          if (!e(I)) return;
          let o;
          const r = e(a).direction;
          if (((p.value = 50), r === 'top')) e(l) > 0 && (l.value = 0);
          else if (r === 'bottom') {
            let c = (e(D) / 2) * -1;
            e(l) < c && (l.value = c);
          } else if (r === 'left') e(t) > 0 && (t.value = 0);
          else if (r === 'right') {
            let c = e(M) * -1;
            e(t) < c && (t.value = c);
          }
          o && clearTimeout(o),
            (o = setTimeout(() => {
              (p.value = 0), k();
            }, e(p)));
        }
        function Ae() {
          e(ie) && Fe();
        }
        function Me() {
          e(ie) && Ce();
        }
        function k() {
          q ||
            (V = requestAnimationFrame(function () {
              const o = e(D) / 2,
                r = e(M) / 2;
              let { direction: c, waitTime: w } = e(a);
              c === 'top'
                ? (Math.abs(e(l)) >= o && (n('scrollEnd'), (l.value = 0)), (l.value -= x.value))
                : c === 'bottom'
                ? (e(l) >= 0 && (n('scrollEnd'), (l.value = o * -1)), (l.value += x.value))
                : c === 'left'
                ? (Math.abs(e(t)) >= r && (n('scrollEnd'), (t.value = 0)), (t.value -= x.value))
                : c === 'right' &&
                  (e(t) >= 0 && (n('scrollEnd'), (t.value = r * -1)), (t.value += x.value)),
                T && clearTimeout(T),
                e(N)
                  ? Math.abs(e(l)) % e(N) < e(x)
                    ? (T = setTimeout(() => {
                        k();
                      }, w))
                    : k()
                  : e(R) && Math.abs(e(t)) % e(R) < e(x)
                  ? (T = setTimeout(() => {
                      k();
                    }, w))
                  : k();
            }));
        }
        function oe() {
          Be(() => {
            const { switchDelay: o } = e(a);
            if (((P.value = ''), e(B))) {
              (m.value = e(K).offsetHeight), (y.value = e(K).offsetWidth);
              let r = e(G).offsetWidth;
              e(L) && (r = r * 2 + 1), (e(Q).style.width = r + 'px'), (M.value = r);
            }
            if (e(L)) (z = 'ease-in'), (p.value = 0);
            else {
              (z = 'linear'), (p.value = o);
              return;
            }
            e(le)
              ? ((P.value = e(G).innerHTML),
                setTimeout(() => {
                  (D.value = e(Q).offsetHeight), k();
                }, 0))
              : (C(), (l.value = t.value = 0));
          });
        }
        function Ce() {
          (q = !1), k();
        }
        function Fe() {
          (q = !0), T && clearTimeout(T), C();
        }
        function $e(o) {
          o.preventDefault(),
            !(e(a).direction === 'left' || e(a).direction === 'right') &&
              Ee(() => {
                o.deltaY > 0 ? (l.value -= x.value) : (l.value += x.value);
              }, 50)();
        }
        return (
          qe(() => {
            oe();
          }),
          ze(() => {
            C(), T && clearTimeout(T);
          }),
          s({ reset: Se }),
          (o, r) => (
            $(),
            H(
              'div',
              { ref: 'wrap' + e(g).key },
              [
                e(E)
                  ? ($(),
                    H(
                      'div',
                      { key: 0, style: b(e(ye)), class: ce(e(he)), onClick: be },
                      [Y(o.$slots, 'left-switch')],
                      6,
                    ))
                  : fe('', !0),
                e(E)
                  ? ($(),
                    H(
                      'div',
                      { key: 1, style: b(e(ge)), class: ce(e(ve)), onClick: _e },
                      [Y(o.$slots, 'right-switch')],
                      6,
                    ))
                  : fe('', !0),
                v(
                  'div',
                  {
                    ref: 'realBox' + e(g).key,
                    style: b(e(we)),
                    onMouseenter: Ae,
                    onMouseleave: Me,
                    onTouchstart: Te,
                    onTouchmove: xe,
                    onTouchend: ke,
                    onMousewheel: $e,
                  },
                  [
                    v(
                      'div',
                      { ref: 'slotList' + e(g).key, style: b(e(te)) },
                      [Y(o.$slots, 'default')],
                      4,
                    ),
                    v('div', { style: b(e(te)), innerHTML: e(P) }, null, 12, Qe),
                  ],
                  36,
                ),
              ],
              512,
            )
          )
        );
      },
    }),
  ),
  tt = (i) => (Ye('data-v-b6e12e9c'), (i = i()), Ue(), i),
  lt = { class: 'card-header' },
  it = tt(() => v('span', null, '无缝滚动示例', -1)),
  nt = { class: 'item' },
  ot = U({
    __name: 'index',
    setup(i) {
      const s = j('scroll', null);
      let n = S([
          { title: '无缝滚动第一行无缝滚动第一行！！！！！！！！！！' },
          { title: '无缝滚动第二行无缝滚动第二行！！！！！！！！！！' },
          { title: '无缝滚动第三行无缝滚动第三行！！！！！！！！！！' },
          { title: '无缝滚动第四行无缝滚动第四行！！！！！！！！！！' },
          { title: '无缝滚动第五行无缝滚动第五行！！！！！！！！！！' },
          { title: '无缝滚动第六行无缝滚动第六行！！！！！！！！！！' },
          { title: '无缝滚动第七行无缝滚动第七行！！！！！！！！！！' },
          { title: '无缝滚动第八行无缝滚动第八行！！！！！！！！！！' },
          { title: '无缝滚动第九行无缝滚动第九行！！！！！！！！！！' },
        ]),
        f = Le({ direction: 'top' });
      function h(_) {
        e(s).reset(), (e(f).direction = _);
      }
      return (_, t) => {
        const l = de('el-button'),
          p = de('el-card');
        return (
          $(),
          Ie(
            p,
            { class: 'box-card' },
            {
              header: A(() => [
                v('div', lt, [
                  it,
                  O(
                    l,
                    { class: 'button', onClick: t[0] || (t[0] = (m) => h('top')) },
                    {
                      default: A(() => [
                        v(
                          'span',
                          { style: b({ color: e(f).direction === 'top' ? 'red' : '' }) },
                          '向上滚动',
                          4,
                        ),
                      ]),
                      _: 1,
                    },
                  ),
                  O(
                    l,
                    { class: 'button', onClick: t[1] || (t[1] = (m) => h('bottom')) },
                    {
                      default: A(() => [
                        v(
                          'span',
                          { style: b({ color: e(f).direction === 'bottom' ? 'red' : '' }) },
                          '向下滚动',
                          4,
                        ),
                      ]),
                      _: 1,
                    },
                  ),
                  O(
                    l,
                    { class: 'button', onClick: t[2] || (t[2] = (m) => h('left')) },
                    {
                      default: A(() => [
                        v(
                          'span',
                          { style: b({ color: e(f).direction === 'left' ? 'red' : '' }) },
                          '向左滚动',
                          4,
                        ),
                      ]),
                      _: 1,
                    },
                  ),
                  O(
                    l,
                    { class: 'button', onClick: t[3] || (t[3] = (m) => h('right')) },
                    {
                      default: A(() => [
                        v(
                          'span',
                          { style: b({ color: e(f).direction === 'right' ? 'red' : '' }) },
                          '向右滚动',
                          4,
                        ),
                      ]),
                      _: 1,
                    },
                  ),
                ]),
              ]),
              default: A(() => [
                O(
                  et,
                  { ref_key: 'scroll', ref: s, data: e(n), 'class-option': e(f), class: 'warp' },
                  {
                    default: A(() => [
                      v('ul', nt, [
                        ($(!0),
                        H(
                          Ne,
                          null,
                          Re(e(n), (m, y) => ($(), H('li', { key: y }, Ve(m.title), 1))),
                          128,
                        )),
                      ]),
                    ]),
                    _: 1,
                  },
                  8,
                  ['data', 'class-option'],
                ),
              ]),
              _: 1,
            },
          )
        );
      };
    },
  });
const ut = Xe(ot, [['__scopeId', 'data-v-b6e12e9c']]);
export { ut as default };
