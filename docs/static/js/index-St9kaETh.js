import { t as D } from './index-dGxlNsTe.js';
import {
  d as ue,
  j as w,
  A as s,
  J as Fe,
  K as $e,
  o as $,
  c as j,
  u as e,
  L as S,
  M as ae,
  p as U,
  N as se,
  f as v,
  O as Oe,
  P as He,
  r as je,
  a as re,
  e as De,
  w as A,
  h as H,
  F as Pe,
  t as We,
  b as qe,
  x as Be,
  y as Ee,
} from './index-nnTfcizh.js';
import { _ as Le } from './plugin-vueexport-helper-x3n3nnut.js';
const p = window,
  ze = () => {
    (p.cancelAnimationFrame = (() =>
      p.cancelAnimationFrame ||
      p.webkitCancelAnimationFrame ||
      p.mozCancelAnimationFrame ||
      p.oCancelAnimationFrame ||
      p.msCancelAnimationFrame ||
      function (a) {
        return p.clearTimeout(a);
      })()),
      (p.requestAnimationFrame = (function () {
        return (
          p.requestAnimationFrame ||
          p.webkitRequestAnimationFrame ||
          p.mozRequestAnimationFrame ||
          p.oRequestAnimationFrame ||
          p.msRequestAnimationFrame ||
          function (a) {
            return p.setTimeout(a, 1e3 / 60);
          }
        );
      })());
  },
  Ie = (a, h) => {
    if (a === h) return !0;
    if (a.length !== h.length) return !1;
    for (let u = 0; u < a.length; ++u) if (a[u] !== h[u]) return !1;
    return !0;
  };
function ce() {
  Array.isArray ||
    (Array.isArray = function (k) {
      return Object.prototype.toString.call(k) === '[object Array]';
    });
  let a,
    h,
    u,
    c,
    m,
    b,
    f = 1,
    t = arguments[0] || {},
    n = !1,
    d = arguments.length;
  if (
    (typeof t == 'boolean' && ((n = t), (t = arguments[1] || {}), f++),
    typeof t != 'object' && typeof t != 'function' && (t = {}),
    f === d)
  )
    return t;
  for (; f < d; f++)
    if ((h = arguments[f]) != null)
      for (a in h)
        (u = t[a]),
          (c = h[a]),
          (m = Array.isArray(c)),
          n && c && (typeof c == 'object' || m)
            ? (m
                ? ((m = !1), (b = u && Array.isArray(u) ? u : []))
                : (b = u && typeof u == 'object' ? u : {}),
              (t[a] = ce(n, b, c)))
            : c !== void 0 && (t[a] = c);
  return t;
}
const Re = Object.freeze(
    Object.defineProperty(
      { __proto__: null, animationFrame: ze, arrayEqual: Ie, copyObj: ce },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  Ne = ['innerHTML'],
  Ye = ue({
    name: 'SeamlessScroll',
    __name: 'index',
    props: {
      data: { type: Array, default: () => [] },
      classOption: { type: Object, default: () => {} },
    },
    emits: ['scrollEnd'],
    setup(a, { expose: h, emit: u }) {
      const c = a,
        m = u,
        { animationFrame: b, copyObj: f } = Re;
      b();
      let t = w(0),
        n = w(0),
        d = w(0),
        k = w(0),
        O = w(0),
        M = w(0),
        P = w(0),
        W = w(''),
        _,
        V = 0,
        q,
        X = 0,
        J = 0,
        B = !1,
        E = 'ease-in',
        { classOption: y } = c;
      y.key === void 0 && (y.key = 0);
      const K = D(`wrap${y.key}`, null),
        G = D(`slotList${y.key}`, null),
        Q = D(`realBox${y.key}`, null);
      let Z = s(() => e(t) < 0),
        ee = s(() => Math.abs(e(t)) < e(M) - e(O)),
        fe = s(() => ({
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
        l = s(() => f({}, e(fe), y));
      const de = s(() => (e(Z) ? '' : e(l).switchDisabledClass));
      let me = s(() => (e(ee) ? '' : e(l).switchDisabledClass)),
        pe = s(() => ({
          position: 'absolute',
          margin: `${e(k) / 2}px 0 0 -${e(l).switchOffset}px`,
          transform: 'translate(-100%,-50%)',
        })),
        he = s(() => ({
          position: 'absolute',
          margin: `${e(k) / 2}px 0 0 ${e(O) + e(l).switchOffset}px`,
          transform: 'translateY(-50%)',
        })),
        L = s(() => e(l).direction !== 'bottom' && e(l).direction !== 'top'),
        te = s(() => (e(L) ? { float: 'left', overflow: 'hidden' } : { overflow: 'hidden' })),
        ve = s(() => ({
          transform: `translate(${e(t)}px,${e(n)}px)`,
          transition: `all ${E} ${e(d)}ms`,
          overflow: 'hidden',
        })),
        z = s(() => e(l).navigation),
        I = s(() => (e(z) ? !1 : e(l).autoPlay)),
        ie = s(() => c.data.length >= e(l).limitMoveNum),
        le = s(() => e(l).hoverStop && e(I) && e(ie)),
        R = s(() => e(l).openTouch),
        ne = s(() =>
          e(l).isSingleRemUnit
            ? parseInt(window.getComputedStyle(document.documentElement, null).fontSize)
            : 1,
        ),
        N = s(() => e(l).singleWidth * e(ne)),
        Y = s(() => e(l).singleHeight * e(ne)),
        T = s(() => {
          let i,
            o = e(l).step;
          if ((e(L) ? (i = e(N)) : (i = e(Y)), i > 0 && i % o > 0))
            throw '如果设置了单步滚动，step需是单步大小的约数，否则无法保证单步滚动结束的位置是否准确';
          return o;
        });
      function ye() {
        (t.value = 0), (n.value = 0), C(), oe();
      }
      function ge() {
        if (e(Z)) {
          if (Math.abs(e(t)) < e(l).switchSingleStep) {
            t.value = 0;
            return;
          }
          t.value += e(l).switchSingleStep;
        }
      }
      function we() {
        if (e(ee)) {
          if (e(M) - e(O) + e(t) < e(l).switchSingleStep) {
            t.value = e(O) - e(M);
            return;
          }
          t.value -= e(l).switchSingleStep;
        }
      }
      function C() {
        cancelAnimationFrame(V);
      }
      function Se(i) {
        if (!e(R)) return;
        let o;
        const r = i.targetTouches[0],
          { waitTime: g, singleHeight: F, singleWidth: Ce } = e(l);
        (q = { x: r.pageX, y: r.pageY }),
          (X = e(n)),
          (J = e(t)),
          F && Ce
            ? (o && clearTimeout(o),
              (o = setTimeout(() => {
                C();
              }, g + 20)))
            : C();
      }
      function be(i) {
        if (!e(R) || i.targetTouches.length > 1 || (i.scale && i.scale !== 1)) return;
        const o = i.targetTouches[0],
          { direction: r } = e(l);
        let g = { x: o.pageX - q.x, y: o.pageY - q.y };
        i.preventDefault();
        const F = Math.abs(g.x) < Math.abs(g.y) ? 1 : 0;
        (F === 1 && r === 'bottom') || (F === 1 && r === 'top')
          ? (n.value = X + g.y)
          : ((F === 0 && r === 'left') || (F === 0 && r === 'right')) && (t.value = J + g.x);
      }
      function _e() {
        if (!e(R)) return;
        let i;
        const o = e(l).direction;
        if (((d.value = 50), o === 'top')) e(n) > 0 && (n.value = 0);
        else if (o === 'bottom') {
          let r = (e(P) / 2) * -1;
          e(n) < r && (n.value = r);
        } else if (o === 'left') e(t) > 0 && (t.value = 0);
        else if (o === 'right') {
          let r = e(M) * -1;
          e(t) < r && (t.value = r);
        }
        i && clearTimeout(i),
          (i = setTimeout(() => {
            (d.value = 0), x();
          }, e(d)));
      }
      function Te() {
        e(le) && Ae();
      }
      function xe() {
        e(le) && ke();
      }
      function x() {
        B ||
          (V = requestAnimationFrame(function () {
            const i = e(P) / 2,
              o = e(M) / 2;
            let { direction: r, waitTime: g } = e(l);
            r === 'top'
              ? (Math.abs(e(n)) >= i && (m('scrollEnd'), (n.value = 0)), (n.value -= T.value))
              : r === 'bottom'
              ? (e(n) >= 0 && (m('scrollEnd'), (n.value = i * -1)), (n.value += T.value))
              : r === 'left'
              ? (Math.abs(e(t)) >= o && (m('scrollEnd'), (t.value = 0)), (t.value -= T.value))
              : r === 'right' &&
                (e(t) >= 0 && (m('scrollEnd'), (t.value = o * -1)), (t.value += T.value)),
              _ && clearTimeout(_),
              e(Y)
                ? Math.abs(e(n)) % e(Y) < e(T)
                  ? (_ = setTimeout(() => {
                      x();
                    }, g))
                  : x()
                : e(N) && Math.abs(e(t)) % e(N) < e(T)
                ? (_ = setTimeout(() => {
                    x();
                  }, g))
                : x();
          }));
      }
      function oe() {
        Oe(() => {
          const { switchDelay: i } = e(l);
          if (((W.value = ''), e(L))) {
            (k.value = e(K).offsetHeight), (O.value = e(K).offsetWidth);
            let o = e(G).offsetWidth;
            e(I) && (o = o * 2 + 1), (e(Q).style.width = o + 'px'), (M.value = o);
          }
          if (e(I)) (E = 'ease-in'), (d.value = 0);
          else {
            (E = 'linear'), (d.value = i);
            return;
          }
          e(ie)
            ? ((W.value = e(G).innerHTML),
              setTimeout(() => {
                (P.value = e(Q).offsetHeight), x();
              }, 0))
            : (C(), (n.value = t.value = 0));
        });
      }
      function ke() {
        (B = !1), x();
      }
      function Ae() {
        (B = !0), _ && clearTimeout(_), C();
      }
      function Me(i) {
        i.preventDefault(),
          !(e(l).direction === 'left' || e(l).direction === 'right') &&
            He(() => {
              i.deltaY > 0 ? (n.value -= T.value) : (n.value += T.value);
            }, 50)();
      }
      return (
        Fe(() => {
          oe();
        }),
        $e(() => {
          C(), _ && clearTimeout(_);
        }),
        h({ reset: ye }),
        (i, o) => (
          $(),
          j(
            'div',
            { ref: 'wrap' + e(y).key },
            [
              e(z)
                ? ($(),
                  j(
                    'div',
                    { key: 0, style: S(e(pe)), class: ae(de.value), onClick: ge },
                    [U(i.$slots, 'left-switch')],
                    6,
                  ))
                : se('', !0),
              e(z)
                ? ($(),
                  j(
                    'div',
                    { key: 1, style: S(e(he)), class: ae(e(me)), onClick: we },
                    [U(i.$slots, 'right-switch')],
                    6,
                  ))
                : se('', !0),
              v(
                'div',
                {
                  ref: 'realBox' + e(y).key,
                  style: S(e(ve)),
                  onMouseenter: Te,
                  onMouseleave: xe,
                  onTouchstart: Se,
                  onTouchmove: be,
                  onTouchend: _e,
                  onMousewheel: Me,
                },
                [
                  v(
                    'div',
                    { ref: 'slotList' + e(y).key, style: S(e(te)) },
                    [U(i.$slots, 'default')],
                    4,
                  ),
                  v('div', { style: S(e(te)), innerHTML: e(W) }, null, 12, Ne),
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
  Ue = (a) => (Be('data-v-e2ef7d38'), (a = a()), Ee(), a),
  Ve = { class: 'card-header' },
  Xe = Ue(() => v('span', null, '无缝滚动示例', -1)),
  Je = { class: 'item' },
  Ke = ue({
    __name: 'index',
    setup(a) {
      const h = D('scroll', null);
      let u = w([
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
        c = je({ direction: 'top' });
      function m(b) {
        e(h).reset(), (e(c).direction = b);
      }
      return (b, f) => {
        const t = re('el-button'),
          n = re('el-card');
        return (
          $(),
          De(
            n,
            { class: 'box-card' },
            {
              header: A(() => [
                v('div', Ve, [
                  Xe,
                  H(
                    t,
                    { class: 'button', onClick: f[0] || (f[0] = (d) => m('top')) },
                    {
                      default: A(() => [
                        v(
                          'span',
                          { style: S({ color: e(c).direction === 'top' ? 'red' : '' }) },
                          '向上滚动',
                          4,
                        ),
                      ]),
                      _: 1,
                    },
                  ),
                  H(
                    t,
                    { class: 'button', onClick: f[1] || (f[1] = (d) => m('bottom')) },
                    {
                      default: A(() => [
                        v(
                          'span',
                          { style: S({ color: e(c).direction === 'bottom' ? 'red' : '' }) },
                          '向下滚动',
                          4,
                        ),
                      ]),
                      _: 1,
                    },
                  ),
                  H(
                    t,
                    { class: 'button', onClick: f[2] || (f[2] = (d) => m('left')) },
                    {
                      default: A(() => [
                        v(
                          'span',
                          { style: S({ color: e(c).direction === 'left' ? 'red' : '' }) },
                          '向左滚动',
                          4,
                        ),
                      ]),
                      _: 1,
                    },
                  ),
                  H(
                    t,
                    { class: 'button', onClick: f[3] || (f[3] = (d) => m('right')) },
                    {
                      default: A(() => [
                        v(
                          'span',
                          { style: S({ color: e(c).direction === 'right' ? 'red' : '' }) },
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
                H(
                  Ye,
                  { ref_key: 'scroll', ref: h, data: e(u), 'class-option': e(c), class: 'warp' },
                  {
                    default: A(() => [
                      v('ul', Je, [
                        ($(!0),
                        j(
                          Pe,
                          null,
                          qe(e(u), (d, k) => ($(), j('li', { key: k }, We(d.title), 1))),
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
  }),
  et = Le(Ke, [['__scopeId', 'data-v-e2ef7d38']]);
export { et as default };
