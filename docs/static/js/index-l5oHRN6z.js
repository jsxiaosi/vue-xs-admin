import {
  c2 as B,
  H as E,
  u as v,
  j as k,
  d as U,
  a as M,
  o as D,
  c as $,
  f as _,
  g as s,
  h as u,
  w as m,
  bS as I,
} from './index-nnTfcizh.js';
import { _ as A } from './plugin-vueexport-helper-x3n3nnut.js';
const z = `
display: inline-block;
overflow: hidden;
position: absolute;
left: 0;
top: 0;
width: 100%;
height: 100%;
pointer-events: none;
background-repeat: repeat;
z-index: 1000;
`,
  O = Symbol('watermark-dom');
function y(e, l) {
  const { width: a, height: p, rotate: r, fontSize: d, fillStyle: i, textAlign: o } = l || {},
    t = document.createElement('canvas');
  (t.width = a || 240), (t.height = p || 100);
  const n = t.getContext('2d');
  return (
    n &&
      e &&
      (n.rotate(r || (-20 * Math.PI) / 180),
      (n.font = d || '14px normal'),
      (n.fillStyle = i || 'rgba(180, 180, 180, 0.3)'),
      (n.textAlign = o || 'left'),
      (n.textBaseline = 'middle'),
      n.fillText(e, t.width / 20, t.height / 1.5)),
    t.toDataURL('image/png')
  );
}
function b() {
  const e = document.createElement('div');
  return (e.id = O.toString()), (e.className = 'water-mark'), e.setAttribute('style', `${z}`), e;
}
const C = (e = k(document.body), l) => {
  const a = B(),
    p = (o) => {
      const t = v(a);
      t && (t.style.background = `url(${y(o, l)}) left top repeat`);
    },
    r = (o) => {
      if (v(a)) {
        p(o);
        return;
      }
      const t = b();
      a.value = t;
      const n = v(e);
      n && (p(o), (n.style.position = 'relative'), n.appendChild(t));
    },
    d = (o) => {
      r(o);
    };
  E(() => {
    i();
  });
  const i = () => {
    const o = v(e);
    if (!o) return;
    const t = v(a);
    t && ((a.value = void 0), o.removeChild(t));
  };
  return { setWaterMark: d, close: i };
};
function R(e, l) {
  const a = b();
  (a.style.background = `url(${y(l)}) left top repeat`),
    e && (e.style.position || (e.style.position = 'relative'), e.appendChild(a));
}
const T = {
    mounted(e, l, a) {
      R(e, l.value);
    },
    updated(e, l, a, p) {
      const { oldValue: r, value: d } = l;
      if (r !== d) {
        const i = e.querySelector('.water-mark');
        i && (i.style.background = `url(${y(d)}) left top repeat`);
      }
    },
  },
  j = { class: 'config' },
  q = { class: 'config' },
  H = { class: 'config' },
  L = { class: 'region' },
  P = U({
    __name: 'index',
    setup(e) {
      const l = T,
        { setWaterMark: a, close: p } = C(),
        r = k('vue-xs-admin'),
        d = () => {
          a(r.value);
        },
        i = () => {
          p();
        },
        o = k('vue-xs-admin'),
        t = k(o.value),
        n = () => {
          t.value = o.value;
        },
        x = k(),
        { setWaterMark: V, close: N } = C(x),
        w = k('这是一个水印'),
        S = () => {
          V(w.value);
        },
        W = () => {
          N();
        };
      return (F, c) => {
        const h = M('el-button'),
          g = M('ElInput');
        return (
          D(),
          $('div', null, [
            _('div', j, [
              s(' 修改水印名称： '),
              u(
                g,
                {
                  modelValue: r.value,
                  'onUpdate:modelValue': c[0] || (c[0] = (f) => (r.value = f)),
                  style: { width: '200px' },
                },
                {
                  append: m(() => [u(h, { onClick: d }, { default: m(() => [s('确定')]), _: 1 })]),
                  _: 1,
                },
                8,
                ['modelValue'],
              ),
              s(' （全局） '),
              u(h, { onClick: i }, { default: m(() => [s('清除')]), _: 1 }),
            ]),
            _('div', q, [
              s(' 修改水印名称： '),
              u(
                g,
                {
                  modelValue: w.value,
                  'onUpdate:modelValue': c[2] || (c[2] = (f) => (w.value = f)),
                  style: { width: '200px' },
                },
                {
                  append: m(() => [
                    u(
                      h,
                      { onClick: c[1] || (c[1] = (f) => S()) },
                      { default: m(() => [s('确定')]), _: 1 },
                    ),
                  ]),
                  _: 1,
                },
                8,
                ['modelValue'],
              ),
              s(' （hooks） '),
              u(h, { onClick: W }, { default: m(() => [s('清除')]), _: 1 }),
            ]),
            _('div', { ref_key: 'hooksDeom', ref: x, class: 'region' }, null, 512),
            _('div', H, [
              s(' 修改水印名称： '),
              u(
                g,
                {
                  modelValue: o.value,
                  'onUpdate:modelValue': c[3] || (c[3] = (f) => (o.value = f)),
                  style: { width: '200px' },
                },
                {
                  append: m(() => [u(h, { onClick: n }, { default: m(() => [s('确定')]), _: 1 })]),
                  _: 1,
                },
                8,
                ['modelValue'],
              ),
              s(' （指令） '),
            ]),
            I(_('div', L, null, 512), [[v(l), t.value]]),
          ])
        );
      };
    },
  }),
  K = A(P, [['__scopeId', 'data-v-a59d66f2']]);
export { K as default };
