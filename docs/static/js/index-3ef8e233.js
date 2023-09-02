import {
  ah as B,
  H as E,
  u as f,
  j as k,
  d as U,
  a as b,
  o as D,
  c as $,
  g as h,
  h as s,
  f as u,
  w as m,
  a2 as I,
} from './index-fcaa205b.js';
import { _ as A } from './plugin-vueexport-helper-c27b6911.js';
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
function C() {
  const e = document.createElement('div');
  return (e.id = O.toString()), (e.className = 'water-mark'), e.setAttribute('style', `${z}`), e;
}
const M = (e = k(document.body), l) => {
  const a = B(),
    p = (o) => {
      const t = f(a);
      t && (t.style.background = `url(${y(o, l)}) left top repeat`);
    },
    r = (o) => {
      if (f(a)) {
        p(o);
        return;
      }
      const t = C();
      a.value = t;
      const n = f(e);
      n && (p(o), (n.style.position = 'relative'), n.appendChild(t));
    },
    d = (o) => {
      r(o);
    };
  E(() => {
    i();
  });
  const i = () => {
    const o = f(e);
    if (!o) return;
    const t = f(a);
    t && ((a.value = void 0), o.removeChild(t));
  };
  return { setWaterMark: d, close: i };
};
function R(e, l) {
  const a = C();
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
        { setWaterMark: a, close: p } = M(),
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
        { setWaterMark: V, close: N } = M(x),
        g = k('这是一个水印'),
        W = () => {
          V(g.value);
        },
        S = () => {
          N();
        };
      return (F, c) => {
        const _ = b('el-button'),
          w = b('ElInput');
        return (
          D(),
          $('div', null, [
            h('div', j, [
              s(' 修改水印名称： '),
              u(
                w,
                {
                  modelValue: r.value,
                  'onUpdate:modelValue': c[0] || (c[0] = (v) => (r.value = v)),
                  style: { width: '200px' },
                },
                {
                  append: m(() => [u(_, { onClick: d }, { default: m(() => [s('确定')]), _: 1 })]),
                  _: 1,
                },
                8,
                ['modelValue'],
              ),
              s(' （全局） '),
              u(_, { onClick: i }, { default: m(() => [s('清除')]), _: 1 }),
            ]),
            h('div', q, [
              s(' 修改水印名称： '),
              u(
                w,
                {
                  modelValue: g.value,
                  'onUpdate:modelValue': c[2] || (c[2] = (v) => (g.value = v)),
                  style: { width: '200px' },
                },
                {
                  append: m(() => [
                    u(
                      _,
                      { onClick: c[1] || (c[1] = (v) => W()) },
                      { default: m(() => [s('确定')]), _: 1 },
                    ),
                  ]),
                  _: 1,
                },
                8,
                ['modelValue'],
              ),
              s(' （hooks） '),
              u(_, { onClick: S }, { default: m(() => [s('清除')]), _: 1 }),
            ]),
            h('div', { ref_key: 'hooksDeom', ref: x, class: 'region' }, null, 512),
            h('div', H, [
              s(' 修改水印名称： '),
              u(
                w,
                {
                  modelValue: o.value,
                  'onUpdate:modelValue': c[3] || (c[3] = (v) => (o.value = v)),
                  style: { width: '200px' },
                },
                {
                  append: m(() => [u(_, { onClick: n }, { default: m(() => [s('确定')]), _: 1 })]),
                  _: 1,
                },
                8,
                ['modelValue'],
              ),
              s(' （指令） '),
            ]),
            I(h('div', L, null, 512), [[f(l), t.value]]),
          ])
        );
      };
    },
  });
const K = A(P, [['__scopeId', 'data-v-409b1bec']]);
export { K as default };
