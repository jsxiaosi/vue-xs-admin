import {
  ac as E,
  E as B,
  y as v,
  j as k,
  d as U,
  a as M,
  o as D,
  c as $,
  g as h,
  h as s,
  f as u,
  w as m,
  Z as I,
} from './index-ae766c94.js';
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
function V() {
  const e = document.createElement('div');
  return (e.id = O.toString()), (e.className = 'water-mark'), e.setAttribute('style', `${z}`), e;
}
const C = (e = k(document.body), l) => {
  const a = E(),
    p = (o) => {
      const t = v(a);
      t && (t.style.background = `url(${y(o, l)}) left top repeat`);
    },
    r = (o) => {
      if (v(a)) {
        p(o);
        return;
      }
      const t = V();
      a.value = t;
      const n = v(e);
      n && (p(o), (n.style.position = 'relative'), n.appendChild(t));
    },
    d = (o) => {
      r(o);
    };
  B(() => {
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
  const a = V();
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
        console.log(), i && (i.style.background = `url(${y(d)}) left top repeat`);
      }
    },
  },
  j = { class: 'config' },
  q = { class: 'config' },
  L = { class: 'config' },
  P = { class: 'region' },
  Z = U({
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
        { setWaterMark: b, close: N } = C(x),
        g = k('这是一个水印'),
        W = () => {
          b(g.value);
        },
        S = () => {
          N();
        };
      return (F, c) => {
        const _ = M('el-button'),
          w = M('ElInput');
        return (
          D(),
          $('div', null, [
            h('div', j, [
              s(' 修改水印名称： '),
              u(
                w,
                {
                  modelValue: r.value,
                  'onUpdate:modelValue': c[0] || (c[0] = (f) => (r.value = f)),
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
                  'onUpdate:modelValue': c[2] || (c[2] = (f) => (g.value = f)),
                  style: { width: '200px' },
                },
                {
                  append: m(() => [
                    u(
                      _,
                      { onClick: c[1] || (c[1] = (f) => W()) },
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
            h('div', L, [
              s(' 修改水印名称： '),
              u(
                w,
                {
                  modelValue: o.value,
                  'onUpdate:modelValue': c[3] || (c[3] = (f) => (o.value = f)),
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
            I(h('div', P, null, 512), [[v(l), t.value]]),
          ])
        );
      };
    },
  });
const J = A(Z, [['__scopeId', 'data-v-5c5d7fa1']]);
export { J as default };
