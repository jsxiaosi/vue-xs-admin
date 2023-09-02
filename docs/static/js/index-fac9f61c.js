import { t as j } from './index-2d76a7b7.js';
import {
  d as re,
  j as S,
  A as r,
  J as Ce,
  K as Fe,
  o as $,
  c as H,
  u as e,
  L as b,
  M as oe,
  n as Y,
  N as ae,
  g as v,
  O as $e,
  P as Oe,
  r as He,
  a as se,
  e as je,
  w as A,
  f as O,
  F as De,
  b as Pe,
  t as We,
  x as qe,
  y as Be,
} from './index-1eb240fe.js';
import { _ as Ee } from './plugin-vueexport-helper-c27b6911.js';
const f = window,
  Le = () => {
    (f.cancelAnimationFrame = (() =>
      f.cancelAnimationFrame ||
      f.webkitCancelAnimationFrame ||
      f.mozCancelAnimationFrame ||
      f.oCancelAnimationFrame ||
      f.msCancelAnimationFrame ||
      function (a) {
        return f.clearTimeout(a);
      })()),
      (f.requestAnimationFrame = (function () {
        return (
          f.requestAnimationFrame ||
          f.webkitRequestAnimationFrame ||
          f.mozRequestAnimationFrame ||
          f.oRequestAnimationFrame ||
          f.msRequestAnimationFrame ||
          function (a) {
            return f.setTimeout(a, 1e3 / 60);
          }
        );
      })());
  },
  ze = (a, d) => {
    if (a === d) return !0;
    if (a.length !== d.length) return !1;
    for (let s = 0; s < a.length; ++s) if (a[s] !== d[s]) return !1;
    return !0;
  };
function ue() {
  Array.isArray ||
    (Array.isArray = function (y) {
      return Object.prototype.toString.call(y) === '[object Array]';
    });
  let a,
    d,
    s,
    c,
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
    if ((d = arguments[t]) != null)
      for (a in d)
        (s = l[a]),
          (c = d[a]),
          (h = Array.isArray(c)),
          p && c && (typeof c == 'object' || h)
            ? (h
                ? ((h = !1), (_ = s && Array.isArray(s) ? s : []))
                : (_ = s && typeof s == 'object' ? s : {}),
              (l[a] = ue(p, _, c)))
            : c !== void 0 && (l[a] = c);
  return l;
}
const Ie = Object.freeze(
    Object.defineProperty(
      { __proto__: null, animationFrame: Le, arrayEqual: ze, copyObj: ue },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  Re = ['innerHTML'],
  Ne = re({
    name: 'SeamlessScroll',
    __name: 'index',
    props: {
      data: { type: Array, default: () => [] },
      classOption: { type: Object, default: () => {} },
    },
    emits: ['scrollEnd'],
    setup(a, { expose: d, emit: s }) {
      const c = a,
        { animationFrame: h, copyObj: _ } = Ie;
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
        U = 0,
        W,
        V = 0,
        X = 0,
        q = !1,
        B = 'ease-in',
        { classOption: g } = c;
      g.key === void 0 && (g.key = 0);
      const J = j(`wrap${g.key}`, null),
        K = j(`slotList${g.key}`, null),
        G = j(`realBox${g.key}`, null);
      let Q = r(() => e(t) < 0),
        Z = r(() => Math.abs(e(t)) < e(M) - e(y)),
        ce = r(() => ({
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
        n = r(() => _({}, e(ce), g));
      const fe = r(() => (e(Q) ? '' : e(n).switchDisabledClass));
      let de = r(() => (e(Z) ? '' : e(n).switchDisabledClass)),
        pe = r(() => ({
          position: 'absolute',
          margin: `${e(m) / 2}px 0 0 -${e(n).switchOffset}px`,
          transform: 'translate(-100%,-50%)',
        })),
        me = r(() => ({
          position: 'absolute',
          margin: `${e(m) / 2}px 0 0 ${e(y) + e(n).switchOffset}px`,
          transform: 'translateY(-50%)',
        })),
        E = r(() => e(n).direction !== 'bottom' && e(n).direction !== 'top'),
        ee = r(() => (e(E) ? { float: 'left', overflow: 'hidden' } : { overflow: 'hidden' })),
        he = r(() => ({
          transform: `translate(${e(t)}px,${e(l)}px)`,
          transition: `all ${B} ${e(p)}ms`,
          overflow: 'hidden',
        })),
        L = r(() => e(n).navigation),
        z = r(() => (e(L) ? !1 : e(n).autoPlay)),
        te = r(() => c.data.length >= e(n).limitMoveNum),
        le = r(() => e(n).hoverStop && e(z) && e(te)),
        I = r(() => e(n).openTouch),
        ie = r(() =>
          e(n).isSingleRemUnit
            ? parseInt(window.getComputedStyle(document.documentElement, null).fontSize)
            : 1,
        ),
        R = r(() => e(n).singleWidth * e(ie)),
        N = r(() => e(n).singleHeight * e(ie)),
        x = r(() => {
          let i,
            o = e(n).step;
          if ((e(E) ? (i = e(R)) : (i = e(N)), i > 0 && i % o > 0))
            throw '如果设置了单步滚动，step需是单步大小的约数，否则无法保证单步滚动结束的位置是否准确';
          return o;
        });
      function ve() {
        (t.value = 0), (l.value = 0), C(), ne();
      }
      function ye() {
        if (e(Q)) {
          if (Math.abs(e(t)) < e(n).switchSingleStep) {
            t.value = 0;
            return;
          }
          t.value += e(n).switchSingleStep;
        }
      }
      function ge() {
        if (e(Z)) {
          if (e(M) - e(y) + e(t) < e(n).switchSingleStep) {
            t.value = e(y) - e(M);
            return;
          }
          t.value -= e(n).switchSingleStep;
        }
      }
      function C() {
        cancelAnimationFrame(U);
      }
      function we(i) {
        if (!e(I)) return;
        let o;
        const u = i.targetTouches[0],
          { waitTime: w, singleHeight: F, singleWidth: Me } = e(n);
        (W = { x: u.pageX, y: u.pageY }),
          (V = e(l)),
          (X = e(t)),
          F && Me
            ? (o && clearTimeout(o),
              (o = setTimeout(() => {
                C();
              }, w + 20)))
            : C();
      }
      function Se(i) {
        if (!e(I) || i.targetTouches.length > 1 || (i.scale && i.scale !== 1)) return;
        const o = i.targetTouches[0],
          { direction: u } = e(n);
        let w = { x: o.pageX - W.x, y: o.pageY - W.y };
        i.preventDefault();
        const F = Math.abs(w.x) < Math.abs(w.y) ? 1 : 0;
        (F === 1 && u === 'bottom') || (F === 1 && u === 'top')
          ? (l.value = V + w.y)
          : ((F === 0 && u === 'left') || (F === 0 && u === 'right')) && (t.value = X + w.x);
      }
      function be() {
        if (!e(I)) return;
        let i;
        const o = e(n).direction;
        if (((p.value = 50), o === 'top')) e(l) > 0 && (l.value = 0);
        else if (o === 'bottom') {
          let u = (e(D) / 2) * -1;
          e(l) < u && (l.value = u);
        } else if (o === 'left') e(t) > 0 && (t.value = 0);
        else if (o === 'right') {
          let u = e(M) * -1;
          e(t) < u && (t.value = u);
        }
        i && clearTimeout(i),
          (i = setTimeout(() => {
            (p.value = 0), k();
          }, e(p)));
      }
      function _e() {
        e(le) && ke();
      }
      function Te() {
        e(le) && xe();
      }
      function k() {
        q ||
          (U = requestAnimationFrame(function () {
            const i = e(D) / 2,
              o = e(M) / 2;
            let { direction: u, waitTime: w } = e(n);
            u === 'top'
              ? (Math.abs(e(l)) >= i && (s('scrollEnd'), (l.value = 0)), (l.value -= x.value))
              : u === 'bottom'
              ? (e(l) >= 0 && (s('scrollEnd'), (l.value = i * -1)), (l.value += x.value))
              : u === 'left'
              ? (Math.abs(e(t)) >= o && (s('scrollEnd'), (t.value = 0)), (t.value -= x.value))
              : u === 'right' &&
                (e(t) >= 0 && (s('scrollEnd'), (t.value = o * -1)), (t.value += x.value)),
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
      function ne() {
        $e(() => {
          const { switchDelay: i } = e(n);
          if (((P.value = ''), e(E))) {
            (m.value = e(J).offsetHeight), (y.value = e(J).offsetWidth);
            let o = e(K).offsetWidth;
            e(z) && (o = o * 2 + 1), (e(G).style.width = o + 'px'), (M.value = o);
          }
          if (e(z)) (B = 'ease-in'), (p.value = 0);
          else {
            (B = 'linear'), (p.value = i);
            return;
          }
          e(te)
            ? ((P.value = e(K).innerHTML),
              setTimeout(() => {
                (D.value = e(G).offsetHeight), k();
              }, 0))
            : (C(), (l.value = t.value = 0));
        });
      }
      function xe() {
        (q = !1), k();
      }
      function ke() {
        (q = !0), T && clearTimeout(T), C();
      }
      function Ae(i) {
        i.preventDefault(),
          !(e(n).direction === 'left' || e(n).direction === 'right') &&
            Oe(() => {
              i.deltaY > 0 ? (l.value -= x.value) : (l.value += x.value);
            }, 50)();
      }
      return (
        Ce(() => {
          ne();
        }),
        Fe(() => {
          C(), T && clearTimeout(T);
        }),
        d({ reset: ve }),
        (i, o) => (
          $(),
          H(
            'div',
            { ref: 'wrap' + e(g).key },
            [
              e(L)
                ? ($(),
                  H(
                    'div',
                    { key: 0, style: b(e(pe)), class: oe(fe.value), onClick: ye },
                    [Y(i.$slots, 'left-switch')],
                    6,
                  ))
                : ae('', !0),
              e(L)
                ? ($(),
                  H(
                    'div',
                    { key: 1, style: b(e(me)), class: oe(e(de)), onClick: ge },
                    [Y(i.$slots, 'right-switch')],
                    6,
                  ))
                : ae('', !0),
              v(
                'div',
                {
                  ref: 'realBox' + e(g).key,
                  style: b(e(he)),
                  onMouseenter: _e,
                  onMouseleave: Te,
                  onTouchstart: we,
                  onTouchmove: Se,
                  onTouchend: be,
                  onMousewheel: Ae,
                },
                [
                  v(
                    'div',
                    { ref: 'slotList' + e(g).key, style: b(e(ee)) },
                    [Y(i.$slots, 'default')],
                    4,
                  ),
                  v('div', { style: b(e(ee)), innerHTML: e(P) }, null, 12, Re),
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
  Ye = (a) => (qe('data-v-b6e12e9c'), (a = a()), Be(), a),
  Ue = { class: 'card-header' },
  Ve = Ye(() => v('span', null, '无缝滚动示例', -1)),
  Xe = { class: 'item' },
  Je = re({
    __name: 'index',
    setup(a) {
      const d = j('scroll', null);
      let s = S([
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
        c = He({ direction: 'top' });
      function h(_) {
        e(d).reset(), (e(c).direction = _);
      }
      return (_, t) => {
        const l = se('el-button'),
          p = se('el-card');
        return (
          $(),
          je(
            p,
            { class: 'box-card' },
            {
              header: A(() => [
                v('div', Ue, [
                  Ve,
                  O(
                    l,
                    { class: 'button', onClick: t[0] || (t[0] = (m) => h('top')) },
                    {
                      default: A(() => [
                        v(
                          'span',
                          { style: b({ color: e(c).direction === 'top' ? 'red' : '' }) },
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
                          { style: b({ color: e(c).direction === 'bottom' ? 'red' : '' }) },
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
                          { style: b({ color: e(c).direction === 'left' ? 'red' : '' }) },
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
                          { style: b({ color: e(c).direction === 'right' ? 'red' : '' }) },
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
                  Ne,
                  { ref_key: 'scroll', ref: d, data: e(s), 'class-option': e(c), class: 'warp' },
                  {
                    default: A(() => [
                      v('ul', Xe, [
                        ($(!0),
                        H(
                          De,
                          null,
                          Pe(e(s), (m, y) => ($(), H('li', { key: y }, We(m.title), 1))),
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
const Ze = Ee(Je, [['__scopeId', 'data-v-b6e12e9c']]);
export { Ze as default };
