var Pt = Object.defineProperty,
  xt = Object.defineProperties;
var At = Object.getOwnPropertyDescriptors;
var et = Object.getOwnPropertySymbols;
var Ct = Object.prototype.hasOwnProperty,
  Tt = Object.prototype.propertyIsEnumerable;
var tt = (X, V, w) =>
    V in X ? Pt(X, V, { enumerable: !0, configurable: !0, writable: !0, value: w }) : (X[V] = w),
  Te = (X, V) => {
    for (var w in V || (V = {})) Ct.call(V, w) && tt(X, w, V[w]);
    if (et) for (var w of et(V)) Tt.call(V, w) && tt(X, w, V[w]);
    return X;
  },
  Ee = (X, V) => xt(X, At(V));
var be = (X, V, w) =>
  new Promise((B, T) => {
    var k = (l) => {
        try {
          e(w.next(l));
        } catch (t) {
          T(t);
        }
      },
      y = (l) => {
        try {
          e(w.throw(l));
        } catch (t) {
          T(t);
        }
      },
      e = (l) => (l.done ? B(l.value) : Promise.resolve(l.value).then(k, y));
    e((w = w.apply(X, V)).next());
  });
import {
  c0 as Ye,
  c1 as pt,
  c2 as Ie,
  c3 as ue,
  c4 as Xe,
  c5 as me,
  d as xe,
  c6 as Et,
  c7 as Fe,
  c8 as $e,
  j as We,
  o as ce,
  e as Ce,
  w as ge,
  c as ke,
  F as Dt,
  b as Nt,
  M as de,
  u as G,
  bY as mt,
  n as ve,
  N as he,
  g as ze,
  a0 as Ne,
  f as ye,
  c9 as De,
  ca as Bt,
  t as rt,
  cb as Rt,
  L as Ot,
  cc as zt,
  cd as Ft,
  ce as It,
  cf as Mt,
  cg as Lt,
  ac as jt,
  ch as He,
  ci as Ut,
  aZ as $t,
  ah as Ge,
  cj as at,
  ck as nt,
  ad as Wt,
  cl as Ht,
  cm as Zt,
  B as qe,
  cn as Vt,
  bK as Xt,
  A as st,
  H as Gt,
  bh as qt,
  bA as Kt,
  l as it,
  m as ot,
  co as Yt,
  a5 as je,
  cp as Ue,
  k as Jt,
  a6 as Qt,
  a as er,
  h as tr,
} from './index-1eb240fe.js';
import { _ as rr } from './plugin-vueexport-helper-c27b6911.js';
const gt = Symbol('uploadContextKey'),
  ar = 'ElUpload';
class nr extends Error {
  constructor(V, w, B, T) {
    super(V), (this.name = 'UploadAjaxError'), (this.status = w), (this.method = B), (this.url = T);
  }
}
function lt(X, V, w) {
  let B;
  return (
    w.response
      ? (B = `${w.response.error || w.response}`)
      : w.responseText
      ? (B = `${w.responseText}`)
      : (B = `fail to ${V.method} ${X} ${w.status}`),
    new nr(B, w.status, V.method, X)
  );
}
function sr(X) {
  const V = X.responseText || X.response;
  if (!V) return V;
  try {
    return JSON.parse(V);
  } catch (w) {
    return V;
  }
}
const ir = (X) => {
    typeof XMLHttpRequest == 'undefined' && Ye(ar, 'XMLHttpRequest is undefined');
    const V = new XMLHttpRequest(),
      w = X.action;
    V.upload &&
      V.upload.addEventListener('progress', (k) => {
        const y = k;
        (y.percent = k.total > 0 ? (k.loaded / k.total) * 100 : 0), X.onProgress(y);
      });
    const B = new FormData();
    if (X.data)
      for (const [k, y] of Object.entries(X.data))
        Array.isArray(y) ? B.append(k, ...y) : B.append(k, y);
    B.append(X.filename, X.file, X.file.name),
      V.addEventListener('error', () => {
        X.onError(lt(w, X, V));
      }),
      V.addEventListener('load', () => {
        if (V.status < 200 || V.status >= 300) return X.onError(lt(w, X, V));
        X.onSuccess(sr(V));
      }),
      V.open(X.method, w, !0),
      X.withCredentials && 'withCredentials' in V && (V.withCredentials = !0);
    const T = X.headers || {};
    if (T instanceof Headers) T.forEach((k, y) => V.setRequestHeader(y, k));
    else for (const [k, y] of Object.entries(T)) pt(y) || V.setRequestHeader(k, String(y));
    return V.send(B), V;
  },
  bt = ['text', 'picture', 'picture-card'];
let or = 1;
const Ke = () => Date.now() + or++,
  yt = Ie({
    action: { type: String, default: '#' },
    headers: { type: ue(Object) },
    method: { type: String, default: 'post' },
    data: { type: Object, default: () => Xe({}) },
    multiple: { type: Boolean, default: !1 },
    name: { type: String, default: 'file' },
    drag: { type: Boolean, default: !1 },
    withCredentials: Boolean,
    showFileList: { type: Boolean, default: !0 },
    accept: { type: String, default: '' },
    type: { type: String, default: 'select' },
    fileList: { type: ue(Array), default: () => Xe([]) },
    autoUpload: { type: Boolean, default: !0 },
    listType: { type: String, values: bt, default: 'text' },
    httpRequest: { type: ue(Function), default: ir },
    disabled: Boolean,
    limit: Number,
  }),
  lr = Ie(
    Ee(Te({}, yt), {
      beforeUpload: { type: ue(Function), default: me },
      beforeRemove: { type: ue(Function) },
      onRemove: { type: ue(Function), default: me },
      onChange: { type: ue(Function), default: me },
      onPreview: { type: ue(Function), default: me },
      onSuccess: { type: ue(Function), default: me },
      onProgress: { type: ue(Function), default: me },
      onError: { type: ue(Function), default: me },
      onExceed: { type: ue(Function), default: me },
    }),
  ),
  cr = Ie({
    files: { type: ue(Array), default: () => Xe([]) },
    disabled: { type: Boolean, default: !1 },
    handlePreview: { type: ue(Function), default: me },
    listType: { type: String, values: bt, default: 'text' },
  }),
  ur = { remove: (X) => !!X },
  dr = ['onKeydown'],
  hr = ['src'],
  fr = ['onClick'],
  pr = ['title'],
  mr = ['onClick'],
  gr = ['onClick'],
  br = xe({ name: 'ElUploadList' }),
  yr = xe(
    Ee(Te({}, br), {
      props: cr,
      emits: ur,
      setup(X, { emit: V }) {
        const { t: w } = Et(),
          B = Fe('upload'),
          T = Fe('icon'),
          k = Fe('list'),
          y = $e(),
          e = We(!1),
          l = (t) => {
            V('remove', t);
          };
        return (t, g) => (
          ce(),
          Ce(
            jt,
            {
              tag: 'ul',
              class: de([G(B).b('list'), G(B).bm('list', t.listType), G(B).is('disabled', G(y))]),
              name: G(k).b(),
            },
            {
              default: ge(() => [
                (ce(!0),
                ke(
                  Dt,
                  null,
                  Nt(
                    t.files,
                    (m) => (
                      ce(),
                      ke(
                        'li',
                        {
                          key: m.uid || m.name,
                          class: de([
                            G(B).be('list', 'item'),
                            G(B).is(m.status),
                            { focusing: e.value },
                          ]),
                          tabindex: '0',
                          onKeydown: mt((a) => !G(y) && l(m), ['delete']),
                          onFocus: g[0] || (g[0] = (a) => (e.value = !0)),
                          onBlur: g[1] || (g[1] = (a) => (e.value = !1)),
                          onClick: g[2] || (g[2] = (a) => (e.value = !1)),
                        },
                        [
                          ve(t.$slots, 'default', { file: m }, () => [
                            t.listType === 'picture' ||
                            (m.status !== 'uploading' && t.listType === 'picture-card')
                              ? (ce(),
                                ke(
                                  'img',
                                  {
                                    key: 0,
                                    class: de(G(B).be('list', 'item-thumbnail')),
                                    src: m.url,
                                    alt: '',
                                  },
                                  null,
                                  10,
                                  hr,
                                ))
                              : he('v-if', !0),
                            m.status === 'uploading' || t.listType !== 'picture-card'
                              ? (ce(),
                                ke(
                                  'div',
                                  { key: 1, class: de(G(B).be('list', 'item-info')) },
                                  [
                                    ze(
                                      'a',
                                      {
                                        class: de(G(B).be('list', 'item-name')),
                                        onClick: Ne((a) => t.handlePreview(m), ['prevent']),
                                      },
                                      [
                                        ye(
                                          G(De),
                                          { class: de(G(T).m('document')) },
                                          { default: ge(() => [ye(G(Bt))]), _: 1 },
                                          8,
                                          ['class'],
                                        ),
                                        ze(
                                          'span',
                                          {
                                            class: de(G(B).be('list', 'item-file-name')),
                                            title: m.name,
                                          },
                                          rt(m.name),
                                          11,
                                          pr,
                                        ),
                                      ],
                                      10,
                                      fr,
                                    ),
                                    m.status === 'uploading'
                                      ? (ce(),
                                        Ce(
                                          G(Rt),
                                          {
                                            key: 0,
                                            type: t.listType === 'picture-card' ? 'circle' : 'line',
                                            'stroke-width': t.listType === 'picture-card' ? 6 : 2,
                                            percentage: Number(m.percentage),
                                            style: Ot(
                                              t.listType === 'picture-card'
                                                ? ''
                                                : 'margin-top: 0.5rem',
                                            ),
                                          },
                                          null,
                                          8,
                                          ['type', 'stroke-width', 'percentage', 'style'],
                                        ))
                                      : he('v-if', !0),
                                  ],
                                  2,
                                ))
                              : he('v-if', !0),
                            ze(
                              'label',
                              { class: de(G(B).be('list', 'item-status-label')) },
                              [
                                t.listType === 'text'
                                  ? (ce(),
                                    Ce(
                                      G(De),
                                      {
                                        key: 0,
                                        class: de([
                                          G(T).m('upload-success'),
                                          G(T).m('circle-check'),
                                        ]),
                                      },
                                      { default: ge(() => [ye(G(zt))]), _: 1 },
                                      8,
                                      ['class'],
                                    ))
                                  : ['picture-card', 'picture'].includes(t.listType)
                                  ? (ce(),
                                    Ce(
                                      G(De),
                                      {
                                        key: 1,
                                        class: de([G(T).m('upload-success'), G(T).m('check')]),
                                      },
                                      { default: ge(() => [ye(G(Ft))]), _: 1 },
                                      8,
                                      ['class'],
                                    ))
                                  : he('v-if', !0),
                              ],
                              2,
                            ),
                            G(y)
                              ? he('v-if', !0)
                              : (ce(),
                                Ce(
                                  G(De),
                                  { key: 2, class: de(G(T).m('close')), onClick: (a) => l(m) },
                                  { default: ge(() => [ye(G(It))]), _: 2 },
                                  1032,
                                  ['class', 'onClick'],
                                )),
                            he(
                              ' Due to close btn only appears when li gets focused disappears after li gets blurred, thus keyboard navigation can never reach close btn',
                            ),
                            he(' This is a bug which needs to be fixed '),
                            he(' TODO: Fix the incorrect navigation interaction '),
                            G(y)
                              ? he('v-if', !0)
                              : (ce(),
                                ke(
                                  'i',
                                  { key: 3, class: de(G(T).m('close-tip')) },
                                  rt(G(w)('el.upload.deleteTip')),
                                  3,
                                )),
                            t.listType === 'picture-card'
                              ? (ce(),
                                ke(
                                  'span',
                                  { key: 4, class: de(G(B).be('list', 'item-actions')) },
                                  [
                                    ze(
                                      'span',
                                      {
                                        class: de(G(B).be('list', 'item-preview')),
                                        onClick: (a) => t.handlePreview(m),
                                      },
                                      [
                                        ye(
                                          G(De),
                                          { class: de(G(T).m('zoom-in')) },
                                          { default: ge(() => [ye(G(Mt))]), _: 1 },
                                          8,
                                          ['class'],
                                        ),
                                      ],
                                      10,
                                      mr,
                                    ),
                                    G(y)
                                      ? he('v-if', !0)
                                      : (ce(),
                                        ke(
                                          'span',
                                          {
                                            key: 0,
                                            class: de(G(B).be('list', 'item-delete')),
                                            onClick: (a) => l(m),
                                          },
                                          [
                                            ye(
                                              G(De),
                                              { class: de(G(T).m('delete')) },
                                              { default: ge(() => [ye(G(Lt))]), _: 1 },
                                              8,
                                              ['class'],
                                            ),
                                          ],
                                          10,
                                          gr,
                                        )),
                                  ],
                                  2,
                                ))
                              : he('v-if', !0),
                          ]),
                        ],
                        42,
                        dr,
                      )
                    ),
                  ),
                  128,
                )),
                ve(t.$slots, 'append'),
              ]),
              _: 3,
            },
            8,
            ['class', 'name'],
          )
        );
      },
    }),
  );
var ct = He(yr, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-list.vue',
  ],
]);
const vr = Ie({ disabled: { type: Boolean, default: !1 } }),
  _r = { file: (X) => Ut(X) },
  kr = ['onDrop', 'onDragover'],
  vt = 'ElUploadDrag',
  wr = xe({ name: vt }),
  Sr = xe(
    Ee(Te({}, wr), {
      props: vr,
      emits: _r,
      setup(X, { emit: V }) {
        const w = $t(gt);
        w || Ye(vt, 'usage: <el-upload><el-upload-dragger /></el-upload>');
        const B = Fe('upload'),
          T = We(!1),
          k = $e(),
          y = (l) => {
            if (k.value) return;
            (T.value = !1), l.stopPropagation();
            const t = Array.from(l.dataTransfer.files),
              g = w.accept.value;
            if (!g) {
              V('file', t);
              return;
            }
            const m = t.filter((a) => {
              const { type: n, name: p } = a,
                i = p.includes('.') ? `.${p.split('.').pop()}` : '',
                f = n.replace(/\/.*$/, '');
              return g
                .split(',')
                .map((u) => u.trim())
                .filter((u) => u)
                .some((u) =>
                  u.startsWith('.')
                    ? i === u
                    : /\/\*$/.test(u)
                    ? f === u.replace(/\/\*$/, '')
                    : /^[^/]+\/[^/]+$/.test(u)
                    ? n === u
                    : !1,
                );
            });
            V('file', m);
          },
          e = () => {
            k.value || (T.value = !0);
          };
        return (l, t) => (
          ce(),
          ke(
            'div',
            {
              class: de([G(B).b('dragger'), G(B).is('dragover', T.value)]),
              onDrop: Ne(y, ['prevent']),
              onDragover: Ne(e, ['prevent']),
              onDragleave: t[0] || (t[0] = Ne((g) => (T.value = !1), ['prevent'])),
            },
            [ve(l.$slots, 'default')],
            42,
            kr,
          )
        );
      },
    }),
  );
var Pr = He(Sr, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-dragger.vue',
  ],
]);
const xr = Ie(
    Ee(Te({}, yt), {
      beforeUpload: { type: ue(Function), default: me },
      onRemove: { type: ue(Function), default: me },
      onStart: { type: ue(Function), default: me },
      onSuccess: { type: ue(Function), default: me },
      onProgress: { type: ue(Function), default: me },
      onError: { type: ue(Function), default: me },
      onExceed: { type: ue(Function), default: me },
    }),
  ),
  Ar = ['onKeydown'],
  Cr = ['name', 'multiple', 'accept'],
  Tr = xe({ name: 'ElUploadContent', inheritAttrs: !1 }),
  Er = xe(
    Ee(Te({}, Tr), {
      props: xr,
      setup(X, { expose: V }) {
        const w = X,
          B = Fe('upload'),
          T = $e(),
          k = Ge({}),
          y = Ge(),
          e = (p) => {
            if (p.length === 0) return;
            const {
              autoUpload: i,
              limit: f,
              fileList: u,
              multiple: b,
              onStart: P,
              onExceed: C,
            } = w;
            if (f && u.length + p.length > f) {
              C(p, u);
              return;
            }
            b || (p = p.slice(0, 1));
            for (const s of p) {
              const o = s;
              (o.uid = Ke()), P(o), i && l(o);
            }
          },
          l = (p) =>
            be(this, null, function* () {
              if (((y.value.value = ''), !w.beforeUpload)) return t(p);
              let i,
                f = {};
              try {
                const b = w.data,
                  P = w.beforeUpload(p);
                (f = at(w.data) ? nt(w.data) : w.data),
                  (i = yield P),
                  at(w.data) && Wt(b, f) && (f = nt(w.data));
              } catch (b) {
                i = !1;
              }
              if (i === !1) {
                w.onRemove(p);
                return;
              }
              let u = p;
              i instanceof Blob &&
                (i instanceof File ? (u = i) : (u = new File([i], p.name, { type: p.type }))),
                t(Object.assign(u, { uid: p.uid }), f);
            }),
          t = (p, i) => {
            const {
                headers: f,
                data: u,
                method: b,
                withCredentials: P,
                name: C,
                action: s,
                onProgress: o,
                onSuccess: r,
                onError: d,
                httpRequest: v,
              } = w,
              { uid: S } = p,
              D = {
                headers: f || {},
                withCredentials: P,
                file: p,
                data: i != null ? i : u,
                method: b,
                filename: C,
                action: s,
                onProgress: (E) => {
                  o(E, p);
                },
                onSuccess: (E) => {
                  r(E, p), delete k.value[S];
                },
                onError: (E) => {
                  d(E, p), delete k.value[S];
                },
              },
              _ = v(D);
            (k.value[S] = _), _ instanceof Promise && _.then(D.onSuccess, D.onError);
          },
          g = (p) => {
            const i = p.target.files;
            i && e(Array.from(i));
          },
          m = () => {
            T.value || ((y.value.value = ''), y.value.click());
          },
          a = () => {
            m();
          };
        return (
          V({
            abort: (p) => {
              Ht(k.value)
                .filter(p ? ([f]) => String(p.uid) === f : () => !0)
                .forEach(([f, u]) => {
                  u instanceof XMLHttpRequest && u.abort(), delete k.value[f];
                });
            },
            upload: l,
          }),
          (p, i) => (
            ce(),
            ke(
              'div',
              {
                class: de([G(B).b(), G(B).m(p.listType), G(B).is('drag', p.drag)]),
                tabindex: '0',
                onClick: m,
                onKeydown: mt(Ne(a, ['self']), ['enter', 'space']),
              },
              [
                p.drag
                  ? (ce(),
                    Ce(
                      Pr,
                      { key: 0, disabled: G(T), onFile: e },
                      { default: ge(() => [ve(p.$slots, 'default')]), _: 3 },
                      8,
                      ['disabled'],
                    ))
                  : ve(p.$slots, 'default', { key: 1 }),
                ze(
                  'input',
                  {
                    ref_key: 'inputRef',
                    ref: y,
                    class: de(G(B).e('input')),
                    name: p.name,
                    multiple: p.multiple,
                    accept: p.accept,
                    type: 'file',
                    onChange: g,
                    onClick: i[0] || (i[0] = Ne(() => {}, ['stop'])),
                  },
                  null,
                  42,
                  Cr,
                ),
              ],
              42,
              Ar,
            )
          )
        );
      },
    }),
  );
var ut = He(Er, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-content.vue',
  ],
]);
const dt = 'ElUpload',
  Dr = (X) => {
    var V;
    (V = X.url) != null && V.startsWith('blob:') && URL.revokeObjectURL(X.url);
  },
  Nr = (X, V) => {
    const w = Zt(X, 'fileList', void 0, { passive: !0 }),
      B = (a) => w.value.find((n) => n.uid === a.uid);
    function T(a) {
      var n;
      (n = V.value) == null || n.abort(a);
    }
    function k(a = ['ready', 'uploading', 'success', 'fail']) {
      w.value = w.value.filter((n) => !a.includes(n.status));
    }
    const y = (a, n) => {
        const p = B(n);
        p &&
          (console.error(a),
          (p.status = 'fail'),
          w.value.splice(w.value.indexOf(p), 1),
          X.onError(a, p, w.value),
          X.onChange(p, w.value));
      },
      e = (a, n) => {
        const p = B(n);
        p &&
          (X.onProgress(a, p, w.value),
          (p.status = 'uploading'),
          (p.percentage = Math.round(a.percent)));
      },
      l = (a, n) => {
        const p = B(n);
        p &&
          ((p.status = 'success'),
          (p.response = a),
          X.onSuccess(a, p, w.value),
          X.onChange(p, w.value));
      },
      t = (a) => {
        pt(a.uid) && (a.uid = Ke());
        const n = {
          name: a.name,
          percentage: 0,
          status: 'ready',
          size: a.size,
          raw: a,
          uid: a.uid,
        };
        if (X.listType === 'picture-card' || X.listType === 'picture')
          try {
            n.url = URL.createObjectURL(a);
          } catch (p) {
            Vt(dt, p.message), X.onError(p, n, w.value);
          }
        (w.value = [...w.value, n]), X.onChange(n, w.value);
      },
      g = (a) =>
        be(void 0, null, function* () {
          const n = a instanceof File ? B(a) : a;
          n || Ye(dt, 'file to be removed not found');
          const p = (i) => {
            T(i);
            const f = w.value;
            f.splice(f.indexOf(i), 1), X.onRemove(i, f), Dr(i);
          };
          X.beforeRemove ? (yield X.beforeRemove(n, w.value)) !== !1 && p(n) : p(n);
        });
    function m() {
      w.value
        .filter(({ status: a }) => a === 'ready')
        .forEach(({ raw: a }) => {
          var n;
          return a && ((n = V.value) == null ? void 0 : n.upload(a));
        });
    }
    return (
      qe(
        () => X.listType,
        (a) => {
          (a !== 'picture-card' && a !== 'picture') ||
            (w.value = w.value.map((n) => {
              const { raw: p, url: i } = n;
              if (!i && p)
                try {
                  n.url = URL.createObjectURL(p);
                } catch (f) {
                  X.onError(f, n, w.value);
                }
              return n;
            }));
        },
      ),
      qe(
        w,
        (a) => {
          for (const n of a) n.uid || (n.uid = Ke()), n.status || (n.status = 'success');
        },
        { immediate: !0, deep: !0 },
      ),
      {
        uploadFiles: w,
        abort: T,
        clearFiles: k,
        handleError: y,
        handleProgress: e,
        handleStart: t,
        handleSuccess: l,
        handleRemove: g,
        submit: m,
      }
    );
  },
  Br = xe({ name: 'ElUpload' }),
  Rr = xe(
    Ee(Te({}, Br), {
      props: lr,
      setup(X, { expose: V }) {
        const w = X,
          B = Xt(),
          T = $e(),
          k = Ge(),
          {
            abort: y,
            submit: e,
            clearFiles: l,
            uploadFiles: t,
            handleStart: g,
            handleError: m,
            handleRemove: a,
            handleSuccess: n,
            handleProgress: p,
          } = Nr(w, k),
          i = st(() => w.listType === 'picture-card'),
          f = st(() =>
            Ee(Te({}, w), {
              fileList: t.value,
              onStart: g,
              onProgress: p,
              onSuccess: n,
              onError: m,
              onRemove: a,
            }),
          );
        return (
          Gt(() => {
            t.value.forEach(({ url: u }) => {
              u != null && u.startsWith('blob:') && URL.revokeObjectURL(u);
            });
          }),
          qt(gt, { accept: Kt(w, 'accept') }),
          V({ abort: y, submit: e, clearFiles: l, handleStart: g, handleRemove: a }),
          (u, b) => (
            ce(),
            ke('div', null, [
              G(i) && u.showFileList
                ? (ce(),
                  Ce(
                    ct,
                    {
                      key: 0,
                      disabled: G(T),
                      'list-type': u.listType,
                      files: G(t),
                      'handle-preview': u.onPreview,
                      onRemove: G(a),
                    },
                    it(
                      {
                        append: ge(() => [
                          ye(
                            ut,
                            ot({ ref_key: 'uploadRef', ref: k }, G(f)),
                            {
                              default: ge(() => [
                                G(B).trigger ? ve(u.$slots, 'trigger', { key: 0 }) : he('v-if', !0),
                                !G(B).trigger && G(B).default
                                  ? ve(u.$slots, 'default', { key: 1 })
                                  : he('v-if', !0),
                              ]),
                              _: 3,
                            },
                            16,
                          ),
                        ]),
                        _: 2,
                      },
                      [
                        u.$slots.file
                          ? {
                              name: 'default',
                              fn: ge(({ file: P }) => [ve(u.$slots, 'file', { file: P })]),
                            }
                          : void 0,
                      ],
                    ),
                    1032,
                    ['disabled', 'list-type', 'files', 'handle-preview', 'onRemove'],
                  ))
                : he('v-if', !0),
              !G(i) || (G(i) && !u.showFileList)
                ? (ce(),
                  Ce(
                    ut,
                    ot({ key: 1, ref_key: 'uploadRef', ref: k }, G(f)),
                    {
                      default: ge(() => [
                        G(B).trigger ? ve(u.$slots, 'trigger', { key: 0 }) : he('v-if', !0),
                        !G(B).trigger && G(B).default
                          ? ve(u.$slots, 'default', { key: 1 })
                          : he('v-if', !0),
                      ]),
                      _: 3,
                    },
                    16,
                  ))
                : he('v-if', !0),
              u.$slots.trigger ? ve(u.$slots, 'default', { key: 2 }) : he('v-if', !0),
              ve(u.$slots, 'tip'),
              !G(i) && u.showFileList
                ? (ce(),
                  Ce(
                    ct,
                    {
                      key: 3,
                      disabled: G(T),
                      'list-type': u.listType,
                      files: G(t),
                      'handle-preview': u.onPreview,
                      onRemove: G(a),
                    },
                    it({ _: 2 }, [
                      u.$slots.file
                        ? {
                            name: 'default',
                            fn: ge(({ file: P }) => [ve(u.$slots, 'file', { file: P })]),
                          }
                        : void 0,
                    ]),
                    1032,
                    ['disabled', 'list-type', 'files', 'handle-preview', 'onRemove'],
                  ))
                : he('v-if', !0),
            ])
          )
        );
      },
    }),
  );
var Or = He(Rr, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload.vue',
  ],
]);
const zr = Yt(Or);
function Fr(X) {
  return new Promise(function (V) {
    var w = new FileReader();
    w.readAsArrayBuffer(X),
      (w.onload = function () {
        V(this.result);
      });
  });
}
var _t = { exports: {} },
  Ve = { exports: {} };
/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/ var ht;
function Ir() {
  return (
    ht ||
      ((ht = 1),
      (function (X, V) {
        (function (w) {
          X.exports = w();
        })(function () {
          return (function w(B, T, k) {
            function y(t, g) {
              if (!T[t]) {
                if (!B[t]) {
                  var m = typeof Ue == 'function' && Ue;
                  if (!g && m) return m(t, !0);
                  if (e) return e(t, !0);
                  var a = new Error("Cannot find module '" + t + "'");
                  throw ((a.code = 'MODULE_NOT_FOUND'), a);
                }
                var n = (T[t] = { exports: {} });
                B[t][0].call(
                  n.exports,
                  function (p) {
                    var i = B[t][1][p];
                    return y(i || p);
                  },
                  n,
                  n.exports,
                  w,
                  B,
                  T,
                  k,
                );
              }
              return T[t].exports;
            }
            for (var e = typeof Ue == 'function' && Ue, l = 0; l < k.length; l++) y(k[l]);
            return y;
          })(
            {
              1: [
                function (w, B, T) {
                  var k = w('./utils'),
                    y = w('./support'),
                    e = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
                  (T.encode = function (l) {
                    for (
                      var t,
                        g,
                        m,
                        a,
                        n,
                        p,
                        i,
                        f = [],
                        u = 0,
                        b = l.length,
                        P = b,
                        C = k.getTypeOf(l) !== 'string';
                      u < l.length;

                    )
                      (P = b - u),
                        (m = C
                          ? ((t = l[u++]), (g = u < b ? l[u++] : 0), u < b ? l[u++] : 0)
                          : ((t = l.charCodeAt(u++)),
                            (g = u < b ? l.charCodeAt(u++) : 0),
                            u < b ? l.charCodeAt(u++) : 0)),
                        (a = t >> 2),
                        (n = ((3 & t) << 4) | (g >> 4)),
                        (p = 1 < P ? ((15 & g) << 2) | (m >> 6) : 64),
                        (i = 2 < P ? 63 & m : 64),
                        f.push(e.charAt(a) + e.charAt(n) + e.charAt(p) + e.charAt(i));
                    return f.join('');
                  }),
                    (T.decode = function (l) {
                      var t,
                        g,
                        m,
                        a,
                        n,
                        p,
                        i = 0,
                        f = 0,
                        u = 'data:';
                      if (l.substr(0, u.length) === u)
                        throw new Error('Invalid base64 input, it looks like a data url.');
                      var b,
                        P = (3 * (l = l.replace(/[^A-Za-z0-9+/=]/g, '')).length) / 4;
                      if (
                        (l.charAt(l.length - 1) === e.charAt(64) && P--,
                        l.charAt(l.length - 2) === e.charAt(64) && P--,
                        P % 1 != 0)
                      )
                        throw new Error('Invalid base64 input, bad content length.');
                      for (
                        b = y.uint8array ? new Uint8Array(0 | P) : new Array(0 | P);
                        i < l.length;

                      )
                        (t =
                          (e.indexOf(l.charAt(i++)) << 2) | ((a = e.indexOf(l.charAt(i++))) >> 4)),
                          (g = ((15 & a) << 4) | ((n = e.indexOf(l.charAt(i++))) >> 2)),
                          (m = ((3 & n) << 6) | (p = e.indexOf(l.charAt(i++)))),
                          (b[f++] = t),
                          n !== 64 && (b[f++] = g),
                          p !== 64 && (b[f++] = m);
                      return b;
                    });
                },
                { './support': 30, './utils': 32 },
              ],
              2: [
                function (w, B, T) {
                  var k = w('./external'),
                    y = w('./stream/DataWorker'),
                    e = w('./stream/Crc32Probe'),
                    l = w('./stream/DataLengthProbe');
                  function t(g, m, a, n, p) {
                    (this.compressedSize = g),
                      (this.uncompressedSize = m),
                      (this.crc32 = a),
                      (this.compression = n),
                      (this.compressedContent = p);
                  }
                  (t.prototype = {
                    getContentWorker: function () {
                      var g = new y(k.Promise.resolve(this.compressedContent))
                          .pipe(this.compression.uncompressWorker())
                          .pipe(new l('data_length')),
                        m = this;
                      return (
                        g.on('end', function () {
                          if (this.streamInfo.data_length !== m.uncompressedSize)
                            throw new Error('Bug : uncompressed data size mismatch');
                        }),
                        g
                      );
                    },
                    getCompressedWorker: function () {
                      return new y(k.Promise.resolve(this.compressedContent))
                        .withStreamInfo('compressedSize', this.compressedSize)
                        .withStreamInfo('uncompressedSize', this.uncompressedSize)
                        .withStreamInfo('crc32', this.crc32)
                        .withStreamInfo('compression', this.compression);
                    },
                  }),
                    (t.createWorkerFrom = function (g, m, a) {
                      return g
                        .pipe(new e())
                        .pipe(new l('uncompressedSize'))
                        .pipe(m.compressWorker(a))
                        .pipe(new l('compressedSize'))
                        .withStreamInfo('compression', m);
                    }),
                    (B.exports = t);
                },
                {
                  './external': 6,
                  './stream/Crc32Probe': 25,
                  './stream/DataLengthProbe': 26,
                  './stream/DataWorker': 27,
                },
              ],
              3: [
                function (w, B, T) {
                  var k = w('./stream/GenericWorker');
                  (T.STORE = {
                    magic: '\0\0',
                    compressWorker: function () {
                      return new k('STORE compression');
                    },
                    uncompressWorker: function () {
                      return new k('STORE decompression');
                    },
                  }),
                    (T.DEFLATE = w('./flate'));
                },
                { './flate': 7, './stream/GenericWorker': 28 },
              ],
              4: [
                function (w, B, T) {
                  var k = w('./utils'),
                    y = (function () {
                      for (var e, l = [], t = 0; t < 256; t++) {
                        e = t;
                        for (var g = 0; g < 8; g++) e = 1 & e ? 3988292384 ^ (e >>> 1) : e >>> 1;
                        l[t] = e;
                      }
                      return l;
                    })();
                  B.exports = function (e, l) {
                    return e !== void 0 && e.length
                      ? k.getTypeOf(e) !== 'string'
                        ? (function (t, g, m, a) {
                            var n = y,
                              p = a + m;
                            t ^= -1;
                            for (var i = a; i < p; i++) t = (t >>> 8) ^ n[255 & (t ^ g[i])];
                            return -1 ^ t;
                          })(0 | l, e, e.length, 0)
                        : (function (t, g, m, a) {
                            var n = y,
                              p = a + m;
                            t ^= -1;
                            for (var i = a; i < p; i++)
                              t = (t >>> 8) ^ n[255 & (t ^ g.charCodeAt(i))];
                            return -1 ^ t;
                          })(0 | l, e, e.length, 0)
                      : 0;
                  };
                },
                { './utils': 32 },
              ],
              5: [
                function (w, B, T) {
                  (T.base64 = !1),
                    (T.binary = !1),
                    (T.dir = !1),
                    (T.createFolders = !0),
                    (T.date = null),
                    (T.compression = null),
                    (T.compressionOptions = null),
                    (T.comment = null),
                    (T.unixPermissions = null),
                    (T.dosPermissions = null);
                },
                {},
              ],
              6: [
                function (w, B, T) {
                  var k = null;
                  (k = typeof Promise != 'undefined' ? Promise : w('lie')),
                    (B.exports = { Promise: k });
                },
                { lie: 37 },
              ],
              7: [
                function (w, B, T) {
                  var k =
                      typeof Uint8Array != 'undefined' &&
                      typeof Uint16Array != 'undefined' &&
                      typeof Uint32Array != 'undefined',
                    y = w('pako'),
                    e = w('./utils'),
                    l = w('./stream/GenericWorker'),
                    t = k ? 'uint8array' : 'array';
                  function g(m, a) {
                    l.call(this, 'FlateWorker/' + m),
                      (this._pako = null),
                      (this._pakoAction = m),
                      (this._pakoOptions = a),
                      (this.meta = {});
                  }
                  (T.magic = '\b\0'),
                    e.inherits(g, l),
                    (g.prototype.processChunk = function (m) {
                      (this.meta = m.meta),
                        this._pako === null && this._createPako(),
                        this._pako.push(e.transformTo(t, m.data), !1);
                    }),
                    (g.prototype.flush = function () {
                      l.prototype.flush.call(this),
                        this._pako === null && this._createPako(),
                        this._pako.push([], !0);
                    }),
                    (g.prototype.cleanUp = function () {
                      l.prototype.cleanUp.call(this), (this._pako = null);
                    }),
                    (g.prototype._createPako = function () {
                      this._pako = new y[this._pakoAction]({
                        raw: !0,
                        level: this._pakoOptions.level || -1,
                      });
                      var m = this;
                      this._pako.onData = function (a) {
                        m.push({ data: a, meta: m.meta });
                      };
                    }),
                    (T.compressWorker = function (m) {
                      return new g('Deflate', m);
                    }),
                    (T.uncompressWorker = function () {
                      return new g('Inflate', {});
                    });
                },
                { './stream/GenericWorker': 28, './utils': 32, pako: 38 },
              ],
              8: [
                function (w, B, T) {
                  function k(n, p) {
                    var i,
                      f = '';
                    for (i = 0; i < p; i++) (f += String.fromCharCode(255 & n)), (n >>>= 8);
                    return f;
                  }
                  function y(n, p, i, f, u, b) {
                    var P,
                      C,
                      s = n.file,
                      o = n.compression,
                      r = b !== t.utf8encode,
                      d = e.transformTo('string', b(s.name)),
                      v = e.transformTo('string', t.utf8encode(s.name)),
                      S = s.comment,
                      D = e.transformTo('string', b(S)),
                      _ = e.transformTo('string', t.utf8encode(S)),
                      E = v.length !== s.name.length,
                      c = _.length !== S.length,
                      z = '',
                      q = '',
                      L = '',
                      J = s.dir,
                      $ = s.date,
                      te = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
                    (p && !i) ||
                      ((te.crc32 = n.crc32),
                      (te.compressedSize = n.compressedSize),
                      (te.uncompressedSize = n.uncompressedSize));
                    var F = 0;
                    p && (F |= 8), r || (!E && !c) || (F |= 2048);
                    var O = 0,
                      ee = 0;
                    J && (O |= 16),
                      u === 'UNIX'
                        ? ((ee = 798),
                          (O |= (function (Z, ie) {
                            var pe = Z;
                            return Z || (pe = ie ? 16893 : 33204), (65535 & pe) << 16;
                          })(s.unixPermissions, J)))
                        : ((ee = 20),
                          (O |= (function (Z) {
                            return 63 & (Z || 0);
                          })(s.dosPermissions))),
                      (P = $.getUTCHours()),
                      (P <<= 6),
                      (P |= $.getUTCMinutes()),
                      (P <<= 5),
                      (P |= $.getUTCSeconds() / 2),
                      (C = $.getUTCFullYear() - 1980),
                      (C <<= 4),
                      (C |= $.getUTCMonth() + 1),
                      (C <<= 5),
                      (C |= $.getUTCDate()),
                      E && ((q = k(1, 1) + k(g(d), 4) + v), (z += 'up' + k(q.length, 2) + q)),
                      c && ((L = k(1, 1) + k(g(D), 4) + _), (z += 'uc' + k(L.length, 2) + L));
                    var K = '';
                    return (
                      (K += `
\0`),
                      (K += k(F, 2)),
                      (K += o.magic),
                      (K += k(P, 2)),
                      (K += k(C, 2)),
                      (K += k(te.crc32, 4)),
                      (K += k(te.compressedSize, 4)),
                      (K += k(te.uncompressedSize, 4)),
                      (K += k(d.length, 2)),
                      (K += k(z.length, 2)),
                      {
                        fileRecord: m.LOCAL_FILE_HEADER + K + d + z,
                        dirRecord:
                          m.CENTRAL_FILE_HEADER +
                          k(ee, 2) +
                          K +
                          k(D.length, 2) +
                          '\0\0\0\0' +
                          k(O, 4) +
                          k(f, 4) +
                          d +
                          z +
                          D,
                      }
                    );
                  }
                  var e = w('../utils'),
                    l = w('../stream/GenericWorker'),
                    t = w('../utf8'),
                    g = w('../crc32'),
                    m = w('../signature');
                  function a(n, p, i, f) {
                    l.call(this, 'ZipFileWorker'),
                      (this.bytesWritten = 0),
                      (this.zipComment = p),
                      (this.zipPlatform = i),
                      (this.encodeFileName = f),
                      (this.streamFiles = n),
                      (this.accumulate = !1),
                      (this.contentBuffer = []),
                      (this.dirRecords = []),
                      (this.currentSourceOffset = 0),
                      (this.entriesCount = 0),
                      (this.currentFile = null),
                      (this._sources = []);
                  }
                  e.inherits(a, l),
                    (a.prototype.push = function (n) {
                      var p = n.meta.percent || 0,
                        i = this.entriesCount,
                        f = this._sources.length;
                      this.accumulate
                        ? this.contentBuffer.push(n)
                        : ((this.bytesWritten += n.data.length),
                          l.prototype.push.call(this, {
                            data: n.data,
                            meta: {
                              currentFile: this.currentFile,
                              percent: i ? (p + 100 * (i - f - 1)) / i : 100,
                            },
                          }));
                    }),
                    (a.prototype.openedSource = function (n) {
                      (this.currentSourceOffset = this.bytesWritten),
                        (this.currentFile = n.file.name);
                      var p = this.streamFiles && !n.file.dir;
                      if (p) {
                        var i = y(
                          n,
                          p,
                          !1,
                          this.currentSourceOffset,
                          this.zipPlatform,
                          this.encodeFileName,
                        );
                        this.push({ data: i.fileRecord, meta: { percent: 0 } });
                      } else this.accumulate = !0;
                    }),
                    (a.prototype.closedSource = function (n) {
                      this.accumulate = !1;
                      var p = this.streamFiles && !n.file.dir,
                        i = y(
                          n,
                          p,
                          !0,
                          this.currentSourceOffset,
                          this.zipPlatform,
                          this.encodeFileName,
                        );
                      if ((this.dirRecords.push(i.dirRecord), p))
                        this.push({
                          data: (function (f) {
                            return (
                              m.DATA_DESCRIPTOR +
                              k(f.crc32, 4) +
                              k(f.compressedSize, 4) +
                              k(f.uncompressedSize, 4)
                            );
                          })(n),
                          meta: { percent: 100 },
                        });
                      else
                        for (
                          this.push({ data: i.fileRecord, meta: { percent: 0 } });
                          this.contentBuffer.length;

                        )
                          this.push(this.contentBuffer.shift());
                      this.currentFile = null;
                    }),
                    (a.prototype.flush = function () {
                      for (var n = this.bytesWritten, p = 0; p < this.dirRecords.length; p++)
                        this.push({ data: this.dirRecords[p], meta: { percent: 100 } });
                      var i = this.bytesWritten - n,
                        f = (function (u, b, P, C, s) {
                          var o = e.transformTo('string', s(C));
                          return (
                            m.CENTRAL_DIRECTORY_END +
                            '\0\0\0\0' +
                            k(u, 2) +
                            k(u, 2) +
                            k(b, 4) +
                            k(P, 4) +
                            k(o.length, 2) +
                            o
                          );
                        })(this.dirRecords.length, i, n, this.zipComment, this.encodeFileName);
                      this.push({ data: f, meta: { percent: 100 } });
                    }),
                    (a.prototype.prepareNextSource = function () {
                      (this.previous = this._sources.shift()),
                        this.openedSource(this.previous.streamInfo),
                        this.isPaused ? this.previous.pause() : this.previous.resume();
                    }),
                    (a.prototype.registerPrevious = function (n) {
                      this._sources.push(n);
                      var p = this;
                      return (
                        n.on('data', function (i) {
                          p.processChunk(i);
                        }),
                        n.on('end', function () {
                          p.closedSource(p.previous.streamInfo),
                            p._sources.length ? p.prepareNextSource() : p.end();
                        }),
                        n.on('error', function (i) {
                          p.error(i);
                        }),
                        this
                      );
                    }),
                    (a.prototype.resume = function () {
                      return (
                        !!l.prototype.resume.call(this) &&
                        (!this.previous && this._sources.length
                          ? (this.prepareNextSource(), !0)
                          : this.previous || this._sources.length || this.generatedError
                          ? void 0
                          : (this.end(), !0))
                      );
                    }),
                    (a.prototype.error = function (n) {
                      var p = this._sources;
                      if (!l.prototype.error.call(this, n)) return !1;
                      for (var i = 0; i < p.length; i++)
                        try {
                          p[i].error(n);
                        } catch (f) {}
                      return !0;
                    }),
                    (a.prototype.lock = function () {
                      l.prototype.lock.call(this);
                      for (var n = this._sources, p = 0; p < n.length; p++) n[p].lock();
                    }),
                    (B.exports = a);
                },
                {
                  '../crc32': 4,
                  '../signature': 23,
                  '../stream/GenericWorker': 28,
                  '../utf8': 31,
                  '../utils': 32,
                },
              ],
              9: [
                function (w, B, T) {
                  var k = w('../compressions'),
                    y = w('./ZipFileWorker');
                  T.generateWorker = function (e, l, t) {
                    var g = new y(l.streamFiles, t, l.platform, l.encodeFileName),
                      m = 0;
                    try {
                      e.forEach(function (a, n) {
                        m++;
                        var p = (function (b, P) {
                            var C = b || P,
                              s = k[C];
                            if (!s) throw new Error(C + ' is not a valid compression method !');
                            return s;
                          })(n.options.compression, l.compression),
                          i = n.options.compressionOptions || l.compressionOptions || {},
                          f = n.dir,
                          u = n.date;
                        n._compressWorker(p, i)
                          .withStreamInfo('file', {
                            name: a,
                            dir: f,
                            date: u,
                            comment: n.comment || '',
                            unixPermissions: n.unixPermissions,
                            dosPermissions: n.dosPermissions,
                          })
                          .pipe(g);
                      }),
                        (g.entriesCount = m);
                    } catch (a) {
                      g.error(a);
                    }
                    return g;
                  };
                },
                { '../compressions': 3, './ZipFileWorker': 8 },
              ],
              10: [
                function (w, B, T) {
                  function k() {
                    if (!(this instanceof k)) return new k();
                    if (arguments.length)
                      throw new Error(
                        'The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.',
                      );
                    (this.files = Object.create(null)),
                      (this.comment = null),
                      (this.root = ''),
                      (this.clone = function () {
                        var y = new k();
                        for (var e in this) typeof this[e] != 'function' && (y[e] = this[e]);
                        return y;
                      });
                  }
                  ((k.prototype = w('./object')).loadAsync = w('./load')),
                    (k.support = w('./support')),
                    (k.defaults = w('./defaults')),
                    (k.version = '3.10.1'),
                    (k.loadAsync = function (y, e) {
                      return new k().loadAsync(y, e);
                    }),
                    (k.external = w('./external')),
                    (B.exports = k);
                },
                { './defaults': 5, './external': 6, './load': 11, './object': 15, './support': 30 },
              ],
              11: [
                function (w, B, T) {
                  var k = w('./utils'),
                    y = w('./external'),
                    e = w('./utf8'),
                    l = w('./zipEntries'),
                    t = w('./stream/Crc32Probe'),
                    g = w('./nodejsUtils');
                  function m(a) {
                    return new y.Promise(function (n, p) {
                      var i = a.decompressed.getContentWorker().pipe(new t());
                      i.on('error', function (f) {
                        p(f);
                      })
                        .on('end', function () {
                          i.streamInfo.crc32 !== a.decompressed.crc32
                            ? p(new Error('Corrupted zip : CRC32 mismatch'))
                            : n();
                        })
                        .resume();
                    });
                  }
                  B.exports = function (a, n) {
                    var p = this;
                    return (
                      (n = k.extend(n || {}, {
                        base64: !1,
                        checkCRC32: !1,
                        optimizedBinaryString: !1,
                        createFolders: !1,
                        decodeFileName: e.utf8decode,
                      })),
                      g.isNode && g.isStream(a)
                        ? y.Promise.reject(
                            new Error("JSZip can't accept a stream when loading a zip file."),
                          )
                        : k
                            .prepareContent(
                              'the loaded zip file',
                              a,
                              !0,
                              n.optimizedBinaryString,
                              n.base64,
                            )
                            .then(function (i) {
                              var f = new l(n);
                              return f.load(i), f;
                            })
                            .then(function (i) {
                              var f = [y.Promise.resolve(i)],
                                u = i.files;
                              if (n.checkCRC32) for (var b = 0; b < u.length; b++) f.push(m(u[b]));
                              return y.Promise.all(f);
                            })
                            .then(function (i) {
                              for (var f = i.shift(), u = f.files, b = 0; b < u.length; b++) {
                                var P = u[b],
                                  C = P.fileNameStr,
                                  s = k.resolve(P.fileNameStr);
                                p.file(s, P.decompressed, {
                                  binary: !0,
                                  optimizedBinaryString: !0,
                                  date: P.date,
                                  dir: P.dir,
                                  comment: P.fileCommentStr.length ? P.fileCommentStr : null,
                                  unixPermissions: P.unixPermissions,
                                  dosPermissions: P.dosPermissions,
                                  createFolders: n.createFolders,
                                }),
                                  P.dir || (p.file(s).unsafeOriginalName = C);
                              }
                              return f.zipComment.length && (p.comment = f.zipComment), p;
                            })
                    );
                  };
                },
                {
                  './external': 6,
                  './nodejsUtils': 14,
                  './stream/Crc32Probe': 25,
                  './utf8': 31,
                  './utils': 32,
                  './zipEntries': 33,
                },
              ],
              12: [
                function (w, B, T) {
                  var k = w('../utils'),
                    y = w('../stream/GenericWorker');
                  function e(l, t) {
                    y.call(this, 'Nodejs stream input adapter for ' + l),
                      (this._upstreamEnded = !1),
                      this._bindStream(t);
                  }
                  k.inherits(e, y),
                    (e.prototype._bindStream = function (l) {
                      var t = this;
                      (this._stream = l).pause(),
                        l
                          .on('data', function (g) {
                            t.push({ data: g, meta: { percent: 0 } });
                          })
                          .on('error', function (g) {
                            t.isPaused ? (this.generatedError = g) : t.error(g);
                          })
                          .on('end', function () {
                            t.isPaused ? (t._upstreamEnded = !0) : t.end();
                          });
                    }),
                    (e.prototype.pause = function () {
                      return !!y.prototype.pause.call(this) && (this._stream.pause(), !0);
                    }),
                    (e.prototype.resume = function () {
                      return (
                        !!y.prototype.resume.call(this) &&
                        (this._upstreamEnded ? this.end() : this._stream.resume(), !0)
                      );
                    }),
                    (B.exports = e);
                },
                { '../stream/GenericWorker': 28, '../utils': 32 },
              ],
              13: [
                function (w, B, T) {
                  var k = w('readable-stream').Readable;
                  function y(e, l, t) {
                    k.call(this, l), (this._helper = e);
                    var g = this;
                    e.on('data', function (m, a) {
                      g.push(m) || g._helper.pause(), t && t(a);
                    })
                      .on('error', function (m) {
                        g.emit('error', m);
                      })
                      .on('end', function () {
                        g.push(null);
                      });
                  }
                  w('../utils').inherits(y, k),
                    (y.prototype._read = function () {
                      this._helper.resume();
                    }),
                    (B.exports = y);
                },
                { '../utils': 32, 'readable-stream': 16 },
              ],
              14: [
                function (w, B, T) {
                  B.exports = {
                    isNode: typeof Buffer != 'undefined',
                    newBufferFrom: function (k, y) {
                      if (Buffer.from && Buffer.from !== Uint8Array.from) return Buffer.from(k, y);
                      if (typeof k == 'number')
                        throw new Error('The "data" argument must not be a number');
                      return new Buffer(k, y);
                    },
                    allocBuffer: function (k) {
                      if (Buffer.alloc) return Buffer.alloc(k);
                      var y = new Buffer(k);
                      return y.fill(0), y;
                    },
                    isBuffer: function (k) {
                      return Buffer.isBuffer(k);
                    },
                    isStream: function (k) {
                      return (
                        k &&
                        typeof k.on == 'function' &&
                        typeof k.pause == 'function' &&
                        typeof k.resume == 'function'
                      );
                    },
                  };
                },
                {},
              ],
              15: [
                function (w, B, T) {
                  function k(s, o, r) {
                    var d,
                      v = e.getTypeOf(o),
                      S = e.extend(r || {}, g);
                    (S.date = S.date || new Date()),
                      S.compression !== null && (S.compression = S.compression.toUpperCase()),
                      typeof S.unixPermissions == 'string' &&
                        (S.unixPermissions = parseInt(S.unixPermissions, 8)),
                      S.unixPermissions && 16384 & S.unixPermissions && (S.dir = !0),
                      S.dosPermissions && 16 & S.dosPermissions && (S.dir = !0),
                      S.dir && (s = u(s)),
                      S.createFolders && (d = f(s)) && b.call(this, d, !0);
                    var D = v === 'string' && S.binary === !1 && S.base64 === !1;
                    (r && r.binary !== void 0) || (S.binary = !D),
                      ((o instanceof m && o.uncompressedSize === 0) ||
                        S.dir ||
                        !o ||
                        o.length === 0) &&
                        ((S.base64 = !1),
                        (S.binary = !0),
                        (o = ''),
                        (S.compression = 'STORE'),
                        (v = 'string'));
                    var _ = null;
                    _ =
                      o instanceof m || o instanceof l
                        ? o
                        : p.isNode && p.isStream(o)
                        ? new i(s, o)
                        : e.prepareContent(s, o, S.binary, S.optimizedBinaryString, S.base64);
                    var E = new a(s, _, S);
                    this.files[s] = E;
                  }
                  var y = w('./utf8'),
                    e = w('./utils'),
                    l = w('./stream/GenericWorker'),
                    t = w('./stream/StreamHelper'),
                    g = w('./defaults'),
                    m = w('./compressedObject'),
                    a = w('./zipObject'),
                    n = w('./generate'),
                    p = w('./nodejsUtils'),
                    i = w('./nodejs/NodejsStreamInputAdapter'),
                    f = function (s) {
                      s.slice(-1) === '/' && (s = s.substring(0, s.length - 1));
                      var o = s.lastIndexOf('/');
                      return 0 < o ? s.substring(0, o) : '';
                    },
                    u = function (s) {
                      return s.slice(-1) !== '/' && (s += '/'), s;
                    },
                    b = function (s, o) {
                      return (
                        (o = o !== void 0 ? o : g.createFolders),
                        (s = u(s)),
                        this.files[s] || k.call(this, s, null, { dir: !0, createFolders: o }),
                        this.files[s]
                      );
                    };
                  function P(s) {
                    return Object.prototype.toString.call(s) === '[object RegExp]';
                  }
                  var C = {
                    load: function () {
                      throw new Error(
                        'This method has been removed in JSZip 3.0, please check the upgrade guide.',
                      );
                    },
                    forEach: function (s) {
                      var o, r, d;
                      for (o in this.files)
                        (d = this.files[o]),
                          (r = o.slice(this.root.length, o.length)) &&
                            o.slice(0, this.root.length) === this.root &&
                            s(r, d);
                    },
                    filter: function (s) {
                      var o = [];
                      return (
                        this.forEach(function (r, d) {
                          s(r, d) && o.push(d);
                        }),
                        o
                      );
                    },
                    file: function (s, o, r) {
                      if (arguments.length !== 1)
                        return (s = this.root + s), k.call(this, s, o, r), this;
                      if (P(s)) {
                        var d = s;
                        return this.filter(function (S, D) {
                          return !D.dir && d.test(S);
                        });
                      }
                      var v = this.files[this.root + s];
                      return v && !v.dir ? v : null;
                    },
                    folder: function (s) {
                      if (!s) return this;
                      if (P(s))
                        return this.filter(function (v, S) {
                          return S.dir && s.test(v);
                        });
                      var o = this.root + s,
                        r = b.call(this, o),
                        d = this.clone();
                      return (d.root = r.name), d;
                    },
                    remove: function (s) {
                      s = this.root + s;
                      var o = this.files[s];
                      if (
                        (o || (s.slice(-1) !== '/' && (s += '/'), (o = this.files[s])), o && !o.dir)
                      )
                        delete this.files[s];
                      else
                        for (
                          var r = this.filter(function (v, S) {
                              return S.name.slice(0, s.length) === s;
                            }),
                            d = 0;
                          d < r.length;
                          d++
                        )
                          delete this.files[r[d].name];
                      return this;
                    },
                    generate: function () {
                      throw new Error(
                        'This method has been removed in JSZip 3.0, please check the upgrade guide.',
                      );
                    },
                    generateInternalStream: function (s) {
                      var o,
                        r = {};
                      try {
                        if (
                          (((r = e.extend(s || {}, {
                            streamFiles: !1,
                            compression: 'STORE',
                            compressionOptions: null,
                            type: '',
                            platform: 'DOS',
                            comment: null,
                            mimeType: 'application/zip',
                            encodeFileName: y.utf8encode,
                          })).type = r.type.toLowerCase()),
                          (r.compression = r.compression.toUpperCase()),
                          r.type === 'binarystring' && (r.type = 'string'),
                          !r.type)
                        )
                          throw new Error('No output type specified.');
                        e.checkSupport(r.type),
                          (r.platform !== 'darwin' &&
                            r.platform !== 'freebsd' &&
                            r.platform !== 'linux' &&
                            r.platform !== 'sunos') ||
                            (r.platform = 'UNIX'),
                          r.platform === 'win32' && (r.platform = 'DOS');
                        var d = r.comment || this.comment || '';
                        o = n.generateWorker(this, r, d);
                      } catch (v) {
                        (o = new l('error')).error(v);
                      }
                      return new t(o, r.type || 'string', r.mimeType);
                    },
                    generateAsync: function (s, o) {
                      return this.generateInternalStream(s).accumulate(o);
                    },
                    generateNodeStream: function (s, o) {
                      return (
                        (s = s || {}).type || (s.type = 'nodebuffer'),
                        this.generateInternalStream(s).toNodejsStream(o)
                      );
                    },
                  };
                  B.exports = C;
                },
                {
                  './compressedObject': 2,
                  './defaults': 5,
                  './generate': 9,
                  './nodejs/NodejsStreamInputAdapter': 12,
                  './nodejsUtils': 14,
                  './stream/GenericWorker': 28,
                  './stream/StreamHelper': 29,
                  './utf8': 31,
                  './utils': 32,
                  './zipObject': 35,
                },
              ],
              16: [
                function (w, B, T) {
                  B.exports = w('stream');
                },
                { stream: void 0 },
              ],
              17: [
                function (w, B, T) {
                  var k = w('./DataReader');
                  function y(e) {
                    k.call(this, e);
                    for (var l = 0; l < this.data.length; l++) e[l] = 255 & e[l];
                  }
                  w('../utils').inherits(y, k),
                    (y.prototype.byteAt = function (e) {
                      return this.data[this.zero + e];
                    }),
                    (y.prototype.lastIndexOfSignature = function (e) {
                      for (
                        var l = e.charCodeAt(0),
                          t = e.charCodeAt(1),
                          g = e.charCodeAt(2),
                          m = e.charCodeAt(3),
                          a = this.length - 4;
                        0 <= a;
                        --a
                      )
                        if (
                          this.data[a] === l &&
                          this.data[a + 1] === t &&
                          this.data[a + 2] === g &&
                          this.data[a + 3] === m
                        )
                          return a - this.zero;
                      return -1;
                    }),
                    (y.prototype.readAndCheckSignature = function (e) {
                      var l = e.charCodeAt(0),
                        t = e.charCodeAt(1),
                        g = e.charCodeAt(2),
                        m = e.charCodeAt(3),
                        a = this.readData(4);
                      return l === a[0] && t === a[1] && g === a[2] && m === a[3];
                    }),
                    (y.prototype.readData = function (e) {
                      if ((this.checkOffset(e), e === 0)) return [];
                      var l = this.data.slice(this.zero + this.index, this.zero + this.index + e);
                      return (this.index += e), l;
                    }),
                    (B.exports = y);
                },
                { '../utils': 32, './DataReader': 18 },
              ],
              18: [
                function (w, B, T) {
                  var k = w('../utils');
                  function y(e) {
                    (this.data = e), (this.length = e.length), (this.index = 0), (this.zero = 0);
                  }
                  (y.prototype = {
                    checkOffset: function (e) {
                      this.checkIndex(this.index + e);
                    },
                    checkIndex: function (e) {
                      if (this.length < this.zero + e || e < 0)
                        throw new Error(
                          'End of data reached (data length = ' +
                            this.length +
                            ', asked index = ' +
                            e +
                            '). Corrupted zip ?',
                        );
                    },
                    setIndex: function (e) {
                      this.checkIndex(e), (this.index = e);
                    },
                    skip: function (e) {
                      this.setIndex(this.index + e);
                    },
                    byteAt: function () {},
                    readInt: function (e) {
                      var l,
                        t = 0;
                      for (this.checkOffset(e), l = this.index + e - 1; l >= this.index; l--)
                        t = (t << 8) + this.byteAt(l);
                      return (this.index += e), t;
                    },
                    readString: function (e) {
                      return k.transformTo('string', this.readData(e));
                    },
                    readData: function () {},
                    lastIndexOfSignature: function () {},
                    readAndCheckSignature: function () {},
                    readDate: function () {
                      var e = this.readInt(4);
                      return new Date(
                        Date.UTC(
                          1980 + ((e >> 25) & 127),
                          ((e >> 21) & 15) - 1,
                          (e >> 16) & 31,
                          (e >> 11) & 31,
                          (e >> 5) & 63,
                          (31 & e) << 1,
                        ),
                      );
                    },
                  }),
                    (B.exports = y);
                },
                { '../utils': 32 },
              ],
              19: [
                function (w, B, T) {
                  var k = w('./Uint8ArrayReader');
                  function y(e) {
                    k.call(this, e);
                  }
                  w('../utils').inherits(y, k),
                    (y.prototype.readData = function (e) {
                      this.checkOffset(e);
                      var l = this.data.slice(this.zero + this.index, this.zero + this.index + e);
                      return (this.index += e), l;
                    }),
                    (B.exports = y);
                },
                { '../utils': 32, './Uint8ArrayReader': 21 },
              ],
              20: [
                function (w, B, T) {
                  var k = w('./DataReader');
                  function y(e) {
                    k.call(this, e);
                  }
                  w('../utils').inherits(y, k),
                    (y.prototype.byteAt = function (e) {
                      return this.data.charCodeAt(this.zero + e);
                    }),
                    (y.prototype.lastIndexOfSignature = function (e) {
                      return this.data.lastIndexOf(e) - this.zero;
                    }),
                    (y.prototype.readAndCheckSignature = function (e) {
                      return e === this.readData(4);
                    }),
                    (y.prototype.readData = function (e) {
                      this.checkOffset(e);
                      var l = this.data.slice(this.zero + this.index, this.zero + this.index + e);
                      return (this.index += e), l;
                    }),
                    (B.exports = y);
                },
                { '../utils': 32, './DataReader': 18 },
              ],
              21: [
                function (w, B, T) {
                  var k = w('./ArrayReader');
                  function y(e) {
                    k.call(this, e);
                  }
                  w('../utils').inherits(y, k),
                    (y.prototype.readData = function (e) {
                      if ((this.checkOffset(e), e === 0)) return new Uint8Array(0);
                      var l = this.data.subarray(
                        this.zero + this.index,
                        this.zero + this.index + e,
                      );
                      return (this.index += e), l;
                    }),
                    (B.exports = y);
                },
                { '../utils': 32, './ArrayReader': 17 },
              ],
              22: [
                function (w, B, T) {
                  var k = w('../utils'),
                    y = w('../support'),
                    e = w('./ArrayReader'),
                    l = w('./StringReader'),
                    t = w('./NodeBufferReader'),
                    g = w('./Uint8ArrayReader');
                  B.exports = function (m) {
                    var a = k.getTypeOf(m);
                    return (
                      k.checkSupport(a),
                      a !== 'string' || y.uint8array
                        ? a === 'nodebuffer'
                          ? new t(m)
                          : y.uint8array
                          ? new g(k.transformTo('uint8array', m))
                          : new e(k.transformTo('array', m))
                        : new l(m)
                    );
                  };
                },
                {
                  '../support': 30,
                  '../utils': 32,
                  './ArrayReader': 17,
                  './NodeBufferReader': 19,
                  './StringReader': 20,
                  './Uint8ArrayReader': 21,
                },
              ],
              23: [
                function (w, B, T) {
                  (T.LOCAL_FILE_HEADER = 'PK'),
                    (T.CENTRAL_FILE_HEADER = 'PK'),
                    (T.CENTRAL_DIRECTORY_END = 'PK'),
                    (T.ZIP64_CENTRAL_DIRECTORY_LOCATOR = 'PK\x07'),
                    (T.ZIP64_CENTRAL_DIRECTORY_END = 'PK'),
                    (T.DATA_DESCRIPTOR = 'PK\x07\b');
                },
                {},
              ],
              24: [
                function (w, B, T) {
                  var k = w('./GenericWorker'),
                    y = w('../utils');
                  function e(l) {
                    k.call(this, 'ConvertWorker to ' + l), (this.destType = l);
                  }
                  y.inherits(e, k),
                    (e.prototype.processChunk = function (l) {
                      this.push({ data: y.transformTo(this.destType, l.data), meta: l.meta });
                    }),
                    (B.exports = e);
                },
                { '../utils': 32, './GenericWorker': 28 },
              ],
              25: [
                function (w, B, T) {
                  var k = w('./GenericWorker'),
                    y = w('../crc32');
                  function e() {
                    k.call(this, 'Crc32Probe'), this.withStreamInfo('crc32', 0);
                  }
                  w('../utils').inherits(e, k),
                    (e.prototype.processChunk = function (l) {
                      (this.streamInfo.crc32 = y(l.data, this.streamInfo.crc32 || 0)), this.push(l);
                    }),
                    (B.exports = e);
                },
                { '../crc32': 4, '../utils': 32, './GenericWorker': 28 },
              ],
              26: [
                function (w, B, T) {
                  var k = w('../utils'),
                    y = w('./GenericWorker');
                  function e(l) {
                    y.call(this, 'DataLengthProbe for ' + l),
                      (this.propName = l),
                      this.withStreamInfo(l, 0);
                  }
                  k.inherits(e, y),
                    (e.prototype.processChunk = function (l) {
                      if (l) {
                        var t = this.streamInfo[this.propName] || 0;
                        this.streamInfo[this.propName] = t + l.data.length;
                      }
                      y.prototype.processChunk.call(this, l);
                    }),
                    (B.exports = e);
                },
                { '../utils': 32, './GenericWorker': 28 },
              ],
              27: [
                function (w, B, T) {
                  var k = w('../utils'),
                    y = w('./GenericWorker');
                  function e(l) {
                    y.call(this, 'DataWorker');
                    var t = this;
                    (this.dataIsReady = !1),
                      (this.index = 0),
                      (this.max = 0),
                      (this.data = null),
                      (this.type = ''),
                      (this._tickScheduled = !1),
                      l.then(
                        function (g) {
                          (t.dataIsReady = !0),
                            (t.data = g),
                            (t.max = (g && g.length) || 0),
                            (t.type = k.getTypeOf(g)),
                            t.isPaused || t._tickAndRepeat();
                        },
                        function (g) {
                          t.error(g);
                        },
                      );
                  }
                  k.inherits(e, y),
                    (e.prototype.cleanUp = function () {
                      y.prototype.cleanUp.call(this), (this.data = null);
                    }),
                    (e.prototype.resume = function () {
                      return (
                        !!y.prototype.resume.call(this) &&
                        (!this._tickScheduled &&
                          this.dataIsReady &&
                          ((this._tickScheduled = !0), k.delay(this._tickAndRepeat, [], this)),
                        !0)
                      );
                    }),
                    (e.prototype._tickAndRepeat = function () {
                      (this._tickScheduled = !1),
                        this.isPaused ||
                          this.isFinished ||
                          (this._tick(),
                          this.isFinished ||
                            (k.delay(this._tickAndRepeat, [], this), (this._tickScheduled = !0)));
                    }),
                    (e.prototype._tick = function () {
                      if (this.isPaused || this.isFinished) return !1;
                      var l = null,
                        t = Math.min(this.max, this.index + 16384);
                      if (this.index >= this.max) return this.end();
                      switch (this.type) {
                        case 'string':
                          l = this.data.substring(this.index, t);
                          break;
                        case 'uint8array':
                          l = this.data.subarray(this.index, t);
                          break;
                        case 'array':
                        case 'nodebuffer':
                          l = this.data.slice(this.index, t);
                      }
                      return (
                        (this.index = t),
                        this.push({
                          data: l,
                          meta: { percent: this.max ? (this.index / this.max) * 100 : 0 },
                        })
                      );
                    }),
                    (B.exports = e);
                },
                { '../utils': 32, './GenericWorker': 28 },
              ],
              28: [
                function (w, B, T) {
                  function k(y) {
                    (this.name = y || 'default'),
                      (this.streamInfo = {}),
                      (this.generatedError = null),
                      (this.extraStreamInfo = {}),
                      (this.isPaused = !0),
                      (this.isFinished = !1),
                      (this.isLocked = !1),
                      (this._listeners = { data: [], end: [], error: [] }),
                      (this.previous = null);
                  }
                  (k.prototype = {
                    push: function (y) {
                      this.emit('data', y);
                    },
                    end: function () {
                      if (this.isFinished) return !1;
                      this.flush();
                      try {
                        this.emit('end'), this.cleanUp(), (this.isFinished = !0);
                      } catch (y) {
                        this.emit('error', y);
                      }
                      return !0;
                    },
                    error: function (y) {
                      return (
                        !this.isFinished &&
                        (this.isPaused
                          ? (this.generatedError = y)
                          : ((this.isFinished = !0),
                            this.emit('error', y),
                            this.previous && this.previous.error(y),
                            this.cleanUp()),
                        !0)
                      );
                    },
                    on: function (y, e) {
                      return this._listeners[y].push(e), this;
                    },
                    cleanUp: function () {
                      (this.streamInfo = this.generatedError = this.extraStreamInfo = null),
                        (this._listeners = []);
                    },
                    emit: function (y, e) {
                      if (this._listeners[y])
                        for (var l = 0; l < this._listeners[y].length; l++)
                          this._listeners[y][l].call(this, e);
                    },
                    pipe: function (y) {
                      return y.registerPrevious(this);
                    },
                    registerPrevious: function (y) {
                      if (this.isLocked)
                        throw new Error("The stream '" + this + "' has already been used.");
                      (this.streamInfo = y.streamInfo), this.mergeStreamInfo(), (this.previous = y);
                      var e = this;
                      return (
                        y.on('data', function (l) {
                          e.processChunk(l);
                        }),
                        y.on('end', function () {
                          e.end();
                        }),
                        y.on('error', function (l) {
                          e.error(l);
                        }),
                        this
                      );
                    },
                    pause: function () {
                      return (
                        !this.isPaused &&
                        !this.isFinished &&
                        ((this.isPaused = !0), this.previous && this.previous.pause(), !0)
                      );
                    },
                    resume: function () {
                      if (!this.isPaused || this.isFinished) return !1;
                      var y = (this.isPaused = !1);
                      return (
                        this.generatedError && (this.error(this.generatedError), (y = !0)),
                        this.previous && this.previous.resume(),
                        !y
                      );
                    },
                    flush: function () {},
                    processChunk: function (y) {
                      this.push(y);
                    },
                    withStreamInfo: function (y, e) {
                      return (this.extraStreamInfo[y] = e), this.mergeStreamInfo(), this;
                    },
                    mergeStreamInfo: function () {
                      for (var y in this.extraStreamInfo)
                        Object.prototype.hasOwnProperty.call(this.extraStreamInfo, y) &&
                          (this.streamInfo[y] = this.extraStreamInfo[y]);
                    },
                    lock: function () {
                      if (this.isLocked)
                        throw new Error("The stream '" + this + "' has already been used.");
                      (this.isLocked = !0), this.previous && this.previous.lock();
                    },
                    toString: function () {
                      var y = 'Worker ' + this.name;
                      return this.previous ? this.previous + ' -> ' + y : y;
                    },
                  }),
                    (B.exports = k);
                },
                {},
              ],
              29: [
                function (w, B, T) {
                  var k = w('../utils'),
                    y = w('./ConvertWorker'),
                    e = w('./GenericWorker'),
                    l = w('../base64'),
                    t = w('../support'),
                    g = w('../external'),
                    m = null;
                  if (t.nodestream)
                    try {
                      m = w('../nodejs/NodejsStreamOutputAdapter');
                    } catch (p) {}
                  function a(p, i) {
                    return new g.Promise(function (f, u) {
                      var b = [],
                        P = p._internalType,
                        C = p._outputType,
                        s = p._mimeType;
                      p.on('data', function (o, r) {
                        b.push(o), i && i(r);
                      })
                        .on('error', function (o) {
                          (b = []), u(o);
                        })
                        .on('end', function () {
                          try {
                            var o = (function (r, d, v) {
                              switch (r) {
                                case 'blob':
                                  return k.newBlob(k.transformTo('arraybuffer', d), v);
                                case 'base64':
                                  return l.encode(d);
                                default:
                                  return k.transformTo(r, d);
                              }
                            })(
                              C,
                              (function (r, d) {
                                var v,
                                  S = 0,
                                  D = null,
                                  _ = 0;
                                for (v = 0; v < d.length; v++) _ += d[v].length;
                                switch (r) {
                                  case 'string':
                                    return d.join('');
                                  case 'array':
                                    return Array.prototype.concat.apply([], d);
                                  case 'uint8array':
                                    for (D = new Uint8Array(_), v = 0; v < d.length; v++)
                                      D.set(d[v], S), (S += d[v].length);
                                    return D;
                                  case 'nodebuffer':
                                    return Buffer.concat(d);
                                  default:
                                    throw new Error("concat : unsupported type '" + r + "'");
                                }
                              })(P, b),
                              s,
                            );
                            f(o);
                          } catch (r) {
                            u(r);
                          }
                          b = [];
                        })
                        .resume();
                    });
                  }
                  function n(p, i, f) {
                    var u = i;
                    switch (i) {
                      case 'blob':
                      case 'arraybuffer':
                        u = 'uint8array';
                        break;
                      case 'base64':
                        u = 'string';
                    }
                    try {
                      (this._internalType = u),
                        (this._outputType = i),
                        (this._mimeType = f),
                        k.checkSupport(u),
                        (this._worker = p.pipe(new y(u))),
                        p.lock();
                    } catch (b) {
                      (this._worker = new e('error')), this._worker.error(b);
                    }
                  }
                  (n.prototype = {
                    accumulate: function (p) {
                      return a(this, p);
                    },
                    on: function (p, i) {
                      var f = this;
                      return (
                        p === 'data'
                          ? this._worker.on(p, function (u) {
                              i.call(f, u.data, u.meta);
                            })
                          : this._worker.on(p, function () {
                              k.delay(i, arguments, f);
                            }),
                        this
                      );
                    },
                    resume: function () {
                      return k.delay(this._worker.resume, [], this._worker), this;
                    },
                    pause: function () {
                      return this._worker.pause(), this;
                    },
                    toNodejsStream: function (p) {
                      if ((k.checkSupport('nodestream'), this._outputType !== 'nodebuffer'))
                        throw new Error(this._outputType + ' is not supported by this method');
                      return new m(this, { objectMode: this._outputType !== 'nodebuffer' }, p);
                    },
                  }),
                    (B.exports = n);
                },
                {
                  '../base64': 1,
                  '../external': 6,
                  '../nodejs/NodejsStreamOutputAdapter': 13,
                  '../support': 30,
                  '../utils': 32,
                  './ConvertWorker': 24,
                  './GenericWorker': 28,
                },
              ],
              30: [
                function (w, B, T) {
                  if (
                    ((T.base64 = !0),
                    (T.array = !0),
                    (T.string = !0),
                    (T.arraybuffer =
                      typeof ArrayBuffer != 'undefined' && typeof Uint8Array != 'undefined'),
                    (T.nodebuffer = typeof Buffer != 'undefined'),
                    (T.uint8array = typeof Uint8Array != 'undefined'),
                    typeof ArrayBuffer == 'undefined')
                  )
                    T.blob = !1;
                  else {
                    var k = new ArrayBuffer(0);
                    try {
                      T.blob = new Blob([k], { type: 'application/zip' }).size === 0;
                    } catch (e) {
                      try {
                        var y = new (self.BlobBuilder ||
                          self.WebKitBlobBuilder ||
                          self.MozBlobBuilder ||
                          self.MSBlobBuilder)();
                        y.append(k), (T.blob = y.getBlob('application/zip').size === 0);
                      } catch (l) {
                        T.blob = !1;
                      }
                    }
                  }
                  try {
                    T.nodestream = !!w('readable-stream').Readable;
                  } catch (e) {
                    T.nodestream = !1;
                  }
                },
                { 'readable-stream': 16 },
              ],
              31: [
                function (w, B, T) {
                  for (
                    var k = w('./utils'),
                      y = w('./support'),
                      e = w('./nodejsUtils'),
                      l = w('./stream/GenericWorker'),
                      t = new Array(256),
                      g = 0;
                    g < 256;
                    g++
                  )
                    t[g] =
                      252 <= g ? 6 : 248 <= g ? 5 : 240 <= g ? 4 : 224 <= g ? 3 : 192 <= g ? 2 : 1;
                  t[254] = t[254] = 1;
                  function m() {
                    l.call(this, 'utf-8 decode'), (this.leftOver = null);
                  }
                  function a() {
                    l.call(this, 'utf-8 encode');
                  }
                  (T.utf8encode = function (n) {
                    return y.nodebuffer
                      ? e.newBufferFrom(n, 'utf-8')
                      : (function (p) {
                          var i,
                            f,
                            u,
                            b,
                            P,
                            C = p.length,
                            s = 0;
                          for (b = 0; b < C; b++)
                            (64512 & (f = p.charCodeAt(b))) == 55296 &&
                              b + 1 < C &&
                              (64512 & (u = p.charCodeAt(b + 1))) == 56320 &&
                              ((f = 65536 + ((f - 55296) << 10) + (u - 56320)), b++),
                              (s += f < 128 ? 1 : f < 2048 ? 2 : f < 65536 ? 3 : 4);
                          for (
                            i = y.uint8array ? new Uint8Array(s) : new Array(s), b = P = 0;
                            P < s;
                            b++
                          )
                            (64512 & (f = p.charCodeAt(b))) == 55296 &&
                              b + 1 < C &&
                              (64512 & (u = p.charCodeAt(b + 1))) == 56320 &&
                              ((f = 65536 + ((f - 55296) << 10) + (u - 56320)), b++),
                              f < 128
                                ? (i[P++] = f)
                                : (f < 2048
                                    ? (i[P++] = 192 | (f >>> 6))
                                    : (f < 65536
                                        ? (i[P++] = 224 | (f >>> 12))
                                        : ((i[P++] = 240 | (f >>> 18)),
                                          (i[P++] = 128 | ((f >>> 12) & 63))),
                                      (i[P++] = 128 | ((f >>> 6) & 63))),
                                  (i[P++] = 128 | (63 & f)));
                          return i;
                        })(n);
                  }),
                    (T.utf8decode = function (n) {
                      return y.nodebuffer
                        ? k.transformTo('nodebuffer', n).toString('utf-8')
                        : (function (p) {
                            var i,
                              f,
                              u,
                              b,
                              P = p.length,
                              C = new Array(2 * P);
                            for (i = f = 0; i < P; )
                              if ((u = p[i++]) < 128) C[f++] = u;
                              else if (4 < (b = t[u])) (C[f++] = 65533), (i += b - 1);
                              else {
                                for (u &= b === 2 ? 31 : b === 3 ? 15 : 7; 1 < b && i < P; )
                                  (u = (u << 6) | (63 & p[i++])), b--;
                                1 < b
                                  ? (C[f++] = 65533)
                                  : u < 65536
                                  ? (C[f++] = u)
                                  : ((u -= 65536),
                                    (C[f++] = 55296 | ((u >> 10) & 1023)),
                                    (C[f++] = 56320 | (1023 & u)));
                              }
                            return (
                              C.length !== f &&
                                (C.subarray ? (C = C.subarray(0, f)) : (C.length = f)),
                              k.applyFromCharCode(C)
                            );
                          })((n = k.transformTo(y.uint8array ? 'uint8array' : 'array', n)));
                    }),
                    k.inherits(m, l),
                    (m.prototype.processChunk = function (n) {
                      var p = k.transformTo(y.uint8array ? 'uint8array' : 'array', n.data);
                      if (this.leftOver && this.leftOver.length) {
                        if (y.uint8array) {
                          var i = p;
                          (p = new Uint8Array(i.length + this.leftOver.length)).set(
                            this.leftOver,
                            0,
                          ),
                            p.set(i, this.leftOver.length);
                        } else p = this.leftOver.concat(p);
                        this.leftOver = null;
                      }
                      var f = (function (b, P) {
                          var C;
                          for (
                            (P = P || b.length) > b.length && (P = b.length), C = P - 1;
                            0 <= C && (192 & b[C]) == 128;

                          )
                            C--;
                          return C < 0 || C === 0 ? P : C + t[b[C]] > P ? C : P;
                        })(p),
                        u = p;
                      f !== p.length &&
                        (y.uint8array
                          ? ((u = p.subarray(0, f)), (this.leftOver = p.subarray(f, p.length)))
                          : ((u = p.slice(0, f)), (this.leftOver = p.slice(f, p.length)))),
                        this.push({ data: T.utf8decode(u), meta: n.meta });
                    }),
                    (m.prototype.flush = function () {
                      this.leftOver &&
                        this.leftOver.length &&
                        (this.push({ data: T.utf8decode(this.leftOver), meta: {} }),
                        (this.leftOver = null));
                    }),
                    (T.Utf8DecodeWorker = m),
                    k.inherits(a, l),
                    (a.prototype.processChunk = function (n) {
                      this.push({ data: T.utf8encode(n.data), meta: n.meta });
                    }),
                    (T.Utf8EncodeWorker = a);
                },
                {
                  './nodejsUtils': 14,
                  './stream/GenericWorker': 28,
                  './support': 30,
                  './utils': 32,
                },
              ],
              32: [
                function (w, B, T) {
                  var k = w('./support'),
                    y = w('./base64'),
                    e = w('./nodejsUtils'),
                    l = w('./external');
                  function t(i) {
                    return i;
                  }
                  function g(i, f) {
                    for (var u = 0; u < i.length; ++u) f[u] = 255 & i.charCodeAt(u);
                    return f;
                  }
                  w('setimmediate'),
                    (T.newBlob = function (i, f) {
                      T.checkSupport('blob');
                      try {
                        return new Blob([i], { type: f });
                      } catch (b) {
                        try {
                          var u = new (self.BlobBuilder ||
                            self.WebKitBlobBuilder ||
                            self.MozBlobBuilder ||
                            self.MSBlobBuilder)();
                          return u.append(i), u.getBlob(f);
                        } catch (P) {
                          throw new Error("Bug : can't construct the Blob.");
                        }
                      }
                    });
                  var m = {
                    stringifyByChunk: function (i, f, u) {
                      var b = [],
                        P = 0,
                        C = i.length;
                      if (C <= u) return String.fromCharCode.apply(null, i);
                      for (; P < C; )
                        f === 'array' || f === 'nodebuffer'
                          ? b.push(String.fromCharCode.apply(null, i.slice(P, Math.min(P + u, C))))
                          : b.push(
                              String.fromCharCode.apply(null, i.subarray(P, Math.min(P + u, C))),
                            ),
                          (P += u);
                      return b.join('');
                    },
                    stringifyByChar: function (i) {
                      for (var f = '', u = 0; u < i.length; u++) f += String.fromCharCode(i[u]);
                      return f;
                    },
                    applyCanBeUsed: {
                      uint8array: (function () {
                        try {
                          return (
                            k.uint8array &&
                            String.fromCharCode.apply(null, new Uint8Array(1)).length === 1
                          );
                        } catch (i) {
                          return !1;
                        }
                      })(),
                      nodebuffer: (function () {
                        try {
                          return (
                            k.nodebuffer &&
                            String.fromCharCode.apply(null, e.allocBuffer(1)).length === 1
                          );
                        } catch (i) {
                          return !1;
                        }
                      })(),
                    },
                  };
                  function a(i) {
                    var f = 65536,
                      u = T.getTypeOf(i),
                      b = !0;
                    if (
                      (u === 'uint8array'
                        ? (b = m.applyCanBeUsed.uint8array)
                        : u === 'nodebuffer' && (b = m.applyCanBeUsed.nodebuffer),
                      b)
                    )
                      for (; 1 < f; )
                        try {
                          return m.stringifyByChunk(i, u, f);
                        } catch (P) {
                          f = Math.floor(f / 2);
                        }
                    return m.stringifyByChar(i);
                  }
                  function n(i, f) {
                    for (var u = 0; u < i.length; u++) f[u] = i[u];
                    return f;
                  }
                  T.applyFromCharCode = a;
                  var p = {};
                  (p.string = {
                    string: t,
                    array: function (i) {
                      return g(i, new Array(i.length));
                    },
                    arraybuffer: function (i) {
                      return p.string.uint8array(i).buffer;
                    },
                    uint8array: function (i) {
                      return g(i, new Uint8Array(i.length));
                    },
                    nodebuffer: function (i) {
                      return g(i, e.allocBuffer(i.length));
                    },
                  }),
                    (p.array = {
                      string: a,
                      array: t,
                      arraybuffer: function (i) {
                        return new Uint8Array(i).buffer;
                      },
                      uint8array: function (i) {
                        return new Uint8Array(i);
                      },
                      nodebuffer: function (i) {
                        return e.newBufferFrom(i);
                      },
                    }),
                    (p.arraybuffer = {
                      string: function (i) {
                        return a(new Uint8Array(i));
                      },
                      array: function (i) {
                        return n(new Uint8Array(i), new Array(i.byteLength));
                      },
                      arraybuffer: t,
                      uint8array: function (i) {
                        return new Uint8Array(i);
                      },
                      nodebuffer: function (i) {
                        return e.newBufferFrom(new Uint8Array(i));
                      },
                    }),
                    (p.uint8array = {
                      string: a,
                      array: function (i) {
                        return n(i, new Array(i.length));
                      },
                      arraybuffer: function (i) {
                        return i.buffer;
                      },
                      uint8array: t,
                      nodebuffer: function (i) {
                        return e.newBufferFrom(i);
                      },
                    }),
                    (p.nodebuffer = {
                      string: a,
                      array: function (i) {
                        return n(i, new Array(i.length));
                      },
                      arraybuffer: function (i) {
                        return p.nodebuffer.uint8array(i).buffer;
                      },
                      uint8array: function (i) {
                        return n(i, new Uint8Array(i.length));
                      },
                      nodebuffer: t,
                    }),
                    (T.transformTo = function (i, f) {
                      if (((f = f || ''), !i)) return f;
                      T.checkSupport(i);
                      var u = T.getTypeOf(f);
                      return p[u][i](f);
                    }),
                    (T.resolve = function (i) {
                      for (var f = i.split('/'), u = [], b = 0; b < f.length; b++) {
                        var P = f[b];
                        P === '.' ||
                          (P === '' && b !== 0 && b !== f.length - 1) ||
                          (P === '..' ? u.pop() : u.push(P));
                      }
                      return u.join('/');
                    }),
                    (T.getTypeOf = function (i) {
                      return typeof i == 'string'
                        ? 'string'
                        : Object.prototype.toString.call(i) === '[object Array]'
                        ? 'array'
                        : k.nodebuffer && e.isBuffer(i)
                        ? 'nodebuffer'
                        : k.uint8array && i instanceof Uint8Array
                        ? 'uint8array'
                        : k.arraybuffer && i instanceof ArrayBuffer
                        ? 'arraybuffer'
                        : void 0;
                    }),
                    (T.checkSupport = function (i) {
                      if (!k[i.toLowerCase()])
                        throw new Error(i + ' is not supported by this platform');
                    }),
                    (T.MAX_VALUE_16BITS = 65535),
                    (T.MAX_VALUE_32BITS = -1),
                    (T.pretty = function (i) {
                      var f,
                        u,
                        b = '';
                      for (u = 0; u < (i || '').length; u++)
                        b +=
                          '\\x' +
                          ((f = i.charCodeAt(u)) < 16 ? '0' : '') +
                          f.toString(16).toUpperCase();
                      return b;
                    }),
                    (T.delay = function (i, f, u) {
                      setImmediate(function () {
                        i.apply(u || null, f || []);
                      });
                    }),
                    (T.inherits = function (i, f) {
                      function u() {}
                      (u.prototype = f.prototype), (i.prototype = new u());
                    }),
                    (T.extend = function () {
                      var i,
                        f,
                        u = {};
                      for (i = 0; i < arguments.length; i++)
                        for (f in arguments[i])
                          Object.prototype.hasOwnProperty.call(arguments[i], f) &&
                            u[f] === void 0 &&
                            (u[f] = arguments[i][f]);
                      return u;
                    }),
                    (T.prepareContent = function (i, f, u, b, P) {
                      return l.Promise.resolve(f)
                        .then(function (C) {
                          return k.blob &&
                            (C instanceof Blob ||
                              ['[object File]', '[object Blob]'].indexOf(
                                Object.prototype.toString.call(C),
                              ) !== -1) &&
                            typeof FileReader != 'undefined'
                            ? new l.Promise(function (s, o) {
                                var r = new FileReader();
                                (r.onload = function (d) {
                                  s(d.target.result);
                                }),
                                  (r.onerror = function (d) {
                                    o(d.target.error);
                                  }),
                                  r.readAsArrayBuffer(C);
                              })
                            : C;
                        })
                        .then(function (C) {
                          var s = T.getTypeOf(C);
                          return s
                            ? (s === 'arraybuffer'
                                ? (C = T.transformTo('uint8array', C))
                                : s === 'string' &&
                                  (P
                                    ? (C = y.decode(C))
                                    : u &&
                                      b !== !0 &&
                                      (C = (function (o) {
                                        return g(
                                          o,
                                          k.uint8array
                                            ? new Uint8Array(o.length)
                                            : new Array(o.length),
                                        );
                                      })(C))),
                              C)
                            : l.Promise.reject(
                                new Error(
                                  "Can't read the data of '" +
                                    i +
                                    "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?",
                                ),
                              );
                        });
                    });
                },
                {
                  './base64': 1,
                  './external': 6,
                  './nodejsUtils': 14,
                  './support': 30,
                  setimmediate: 54,
                },
              ],
              33: [
                function (w, B, T) {
                  var k = w('./reader/readerFor'),
                    y = w('./utils'),
                    e = w('./signature'),
                    l = w('./zipEntry'),
                    t = w('./support');
                  function g(m) {
                    (this.files = []), (this.loadOptions = m);
                  }
                  (g.prototype = {
                    checkSignature: function (m) {
                      if (!this.reader.readAndCheckSignature(m)) {
                        this.reader.index -= 4;
                        var a = this.reader.readString(4);
                        throw new Error(
                          'Corrupted zip or bug: unexpected signature (' +
                            y.pretty(a) +
                            ', expected ' +
                            y.pretty(m) +
                            ')',
                        );
                      }
                    },
                    isSignature: function (m, a) {
                      var n = this.reader.index;
                      this.reader.setIndex(m);
                      var p = this.reader.readString(4) === a;
                      return this.reader.setIndex(n), p;
                    },
                    readBlockEndOfCentral: function () {
                      (this.diskNumber = this.reader.readInt(2)),
                        (this.diskWithCentralDirStart = this.reader.readInt(2)),
                        (this.centralDirRecordsOnThisDisk = this.reader.readInt(2)),
                        (this.centralDirRecords = this.reader.readInt(2)),
                        (this.centralDirSize = this.reader.readInt(4)),
                        (this.centralDirOffset = this.reader.readInt(4)),
                        (this.zipCommentLength = this.reader.readInt(2));
                      var m = this.reader.readData(this.zipCommentLength),
                        a = t.uint8array ? 'uint8array' : 'array',
                        n = y.transformTo(a, m);
                      this.zipComment = this.loadOptions.decodeFileName(n);
                    },
                    readBlockZip64EndOfCentral: function () {
                      (this.zip64EndOfCentralSize = this.reader.readInt(8)),
                        this.reader.skip(4),
                        (this.diskNumber = this.reader.readInt(4)),
                        (this.diskWithCentralDirStart = this.reader.readInt(4)),
                        (this.centralDirRecordsOnThisDisk = this.reader.readInt(8)),
                        (this.centralDirRecords = this.reader.readInt(8)),
                        (this.centralDirSize = this.reader.readInt(8)),
                        (this.centralDirOffset = this.reader.readInt(8)),
                        (this.zip64ExtensibleData = {});
                      for (var m, a, n, p = this.zip64EndOfCentralSize - 44; 0 < p; )
                        (m = this.reader.readInt(2)),
                          (a = this.reader.readInt(4)),
                          (n = this.reader.readData(a)),
                          (this.zip64ExtensibleData[m] = { id: m, length: a, value: n });
                    },
                    readBlockZip64EndOfCentralLocator: function () {
                      if (
                        ((this.diskWithZip64CentralDirStart = this.reader.readInt(4)),
                        (this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8)),
                        (this.disksCount = this.reader.readInt(4)),
                        1 < this.disksCount)
                      )
                        throw new Error('Multi-volumes zip are not supported');
                    },
                    readLocalFiles: function () {
                      var m, a;
                      for (m = 0; m < this.files.length; m++)
                        (a = this.files[m]),
                          this.reader.setIndex(a.localHeaderOffset),
                          this.checkSignature(e.LOCAL_FILE_HEADER),
                          a.readLocalPart(this.reader),
                          a.handleUTF8(),
                          a.processAttributes();
                    },
                    readCentralDir: function () {
                      var m;
                      for (
                        this.reader.setIndex(this.centralDirOffset);
                        this.reader.readAndCheckSignature(e.CENTRAL_FILE_HEADER);

                      )
                        (m = new l({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(
                          this.reader,
                        ),
                          this.files.push(m);
                      if (
                        this.centralDirRecords !== this.files.length &&
                        this.centralDirRecords !== 0 &&
                        this.files.length === 0
                      )
                        throw new Error(
                          'Corrupted zip or bug: expected ' +
                            this.centralDirRecords +
                            ' records in central dir, got ' +
                            this.files.length,
                        );
                    },
                    readEndOfCentral: function () {
                      var m = this.reader.lastIndexOfSignature(e.CENTRAL_DIRECTORY_END);
                      if (m < 0)
                        throw this.isSignature(0, e.LOCAL_FILE_HEADER)
                          ? new Error("Corrupted zip: can't find end of central directory")
                          : new Error(
                              "Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html",
                            );
                      this.reader.setIndex(m);
                      var a = m;
                      if (
                        (this.checkSignature(e.CENTRAL_DIRECTORY_END),
                        this.readBlockEndOfCentral(),
                        this.diskNumber === y.MAX_VALUE_16BITS ||
                          this.diskWithCentralDirStart === y.MAX_VALUE_16BITS ||
                          this.centralDirRecordsOnThisDisk === y.MAX_VALUE_16BITS ||
                          this.centralDirRecords === y.MAX_VALUE_16BITS ||
                          this.centralDirSize === y.MAX_VALUE_32BITS ||
                          this.centralDirOffset === y.MAX_VALUE_32BITS)
                      ) {
                        if (
                          ((this.zip64 = !0),
                          (m = this.reader.lastIndexOfSignature(
                            e.ZIP64_CENTRAL_DIRECTORY_LOCATOR,
                          )) < 0)
                        )
                          throw new Error(
                            "Corrupted zip: can't find the ZIP64 end of central directory locator",
                          );
                        if (
                          (this.reader.setIndex(m),
                          this.checkSignature(e.ZIP64_CENTRAL_DIRECTORY_LOCATOR),
                          this.readBlockZip64EndOfCentralLocator(),
                          !this.isSignature(
                            this.relativeOffsetEndOfZip64CentralDir,
                            e.ZIP64_CENTRAL_DIRECTORY_END,
                          ) &&
                            ((this.relativeOffsetEndOfZip64CentralDir =
                              this.reader.lastIndexOfSignature(e.ZIP64_CENTRAL_DIRECTORY_END)),
                            this.relativeOffsetEndOfZip64CentralDir < 0))
                        )
                          throw new Error(
                            "Corrupted zip: can't find the ZIP64 end of central directory",
                          );
                        this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),
                          this.checkSignature(e.ZIP64_CENTRAL_DIRECTORY_END),
                          this.readBlockZip64EndOfCentral();
                      }
                      var n = this.centralDirOffset + this.centralDirSize;
                      this.zip64 && ((n += 20), (n += 12 + this.zip64EndOfCentralSize));
                      var p = a - n;
                      if (0 < p)
                        this.isSignature(a, e.CENTRAL_FILE_HEADER) || (this.reader.zero = p);
                      else if (p < 0)
                        throw new Error('Corrupted zip: missing ' + Math.abs(p) + ' bytes.');
                    },
                    prepareReader: function (m) {
                      this.reader = k(m);
                    },
                    load: function (m) {
                      this.prepareReader(m),
                        this.readEndOfCentral(),
                        this.readCentralDir(),
                        this.readLocalFiles();
                    },
                  }),
                    (B.exports = g);
                },
                {
                  './reader/readerFor': 22,
                  './signature': 23,
                  './support': 30,
                  './utils': 32,
                  './zipEntry': 34,
                },
              ],
              34: [
                function (w, B, T) {
                  var k = w('./reader/readerFor'),
                    y = w('./utils'),
                    e = w('./compressedObject'),
                    l = w('./crc32'),
                    t = w('./utf8'),
                    g = w('./compressions'),
                    m = w('./support');
                  function a(n, p) {
                    (this.options = n), (this.loadOptions = p);
                  }
                  (a.prototype = {
                    isEncrypted: function () {
                      return (1 & this.bitFlag) == 1;
                    },
                    useUTF8: function () {
                      return (2048 & this.bitFlag) == 2048;
                    },
                    readLocalPart: function (n) {
                      var p, i;
                      if (
                        (n.skip(22),
                        (this.fileNameLength = n.readInt(2)),
                        (i = n.readInt(2)),
                        (this.fileName = n.readData(this.fileNameLength)),
                        n.skip(i),
                        this.compressedSize === -1 || this.uncompressedSize === -1)
                      )
                        throw new Error(
                          "Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)",
                        );
                      if (
                        (p = (function (f) {
                          for (var u in g)
                            if (Object.prototype.hasOwnProperty.call(g, u) && g[u].magic === f)
                              return g[u];
                          return null;
                        })(this.compressionMethod)) === null
                      )
                        throw new Error(
                          'Corrupted zip : compression ' +
                            y.pretty(this.compressionMethod) +
                            ' unknown (inner file : ' +
                            y.transformTo('string', this.fileName) +
                            ')',
                        );
                      this.decompressed = new e(
                        this.compressedSize,
                        this.uncompressedSize,
                        this.crc32,
                        p,
                        n.readData(this.compressedSize),
                      );
                    },
                    readCentralPart: function (n) {
                      (this.versionMadeBy = n.readInt(2)),
                        n.skip(2),
                        (this.bitFlag = n.readInt(2)),
                        (this.compressionMethod = n.readString(2)),
                        (this.date = n.readDate()),
                        (this.crc32 = n.readInt(4)),
                        (this.compressedSize = n.readInt(4)),
                        (this.uncompressedSize = n.readInt(4));
                      var p = n.readInt(2);
                      if (
                        ((this.extraFieldsLength = n.readInt(2)),
                        (this.fileCommentLength = n.readInt(2)),
                        (this.diskNumberStart = n.readInt(2)),
                        (this.internalFileAttributes = n.readInt(2)),
                        (this.externalFileAttributes = n.readInt(4)),
                        (this.localHeaderOffset = n.readInt(4)),
                        this.isEncrypted())
                      )
                        throw new Error('Encrypted zip are not supported');
                      n.skip(p),
                        this.readExtraFields(n),
                        this.parseZIP64ExtraField(n),
                        (this.fileComment = n.readData(this.fileCommentLength));
                    },
                    processAttributes: function () {
                      (this.unixPermissions = null), (this.dosPermissions = null);
                      var n = this.versionMadeBy >> 8;
                      (this.dir = !!(16 & this.externalFileAttributes)),
                        n == 0 && (this.dosPermissions = 63 & this.externalFileAttributes),
                        n == 3 &&
                          (this.unixPermissions = (this.externalFileAttributes >> 16) & 65535),
                        this.dir || this.fileNameStr.slice(-1) !== '/' || (this.dir = !0);
                    },
                    parseZIP64ExtraField: function () {
                      if (this.extraFields[1]) {
                        var n = k(this.extraFields[1].value);
                        this.uncompressedSize === y.MAX_VALUE_32BITS &&
                          (this.uncompressedSize = n.readInt(8)),
                          this.compressedSize === y.MAX_VALUE_32BITS &&
                            (this.compressedSize = n.readInt(8)),
                          this.localHeaderOffset === y.MAX_VALUE_32BITS &&
                            (this.localHeaderOffset = n.readInt(8)),
                          this.diskNumberStart === y.MAX_VALUE_32BITS &&
                            (this.diskNumberStart = n.readInt(4));
                      }
                    },
                    readExtraFields: function (n) {
                      var p,
                        i,
                        f,
                        u = n.index + this.extraFieldsLength;
                      for (this.extraFields || (this.extraFields = {}); n.index + 4 < u; )
                        (p = n.readInt(2)),
                          (i = n.readInt(2)),
                          (f = n.readData(i)),
                          (this.extraFields[p] = { id: p, length: i, value: f });
                      n.setIndex(u);
                    },
                    handleUTF8: function () {
                      var n = m.uint8array ? 'uint8array' : 'array';
                      if (this.useUTF8())
                        (this.fileNameStr = t.utf8decode(this.fileName)),
                          (this.fileCommentStr = t.utf8decode(this.fileComment));
                      else {
                        var p = this.findExtraFieldUnicodePath();
                        if (p !== null) this.fileNameStr = p;
                        else {
                          var i = y.transformTo(n, this.fileName);
                          this.fileNameStr = this.loadOptions.decodeFileName(i);
                        }
                        var f = this.findExtraFieldUnicodeComment();
                        if (f !== null) this.fileCommentStr = f;
                        else {
                          var u = y.transformTo(n, this.fileComment);
                          this.fileCommentStr = this.loadOptions.decodeFileName(u);
                        }
                      }
                    },
                    findExtraFieldUnicodePath: function () {
                      var n = this.extraFields[28789];
                      if (n) {
                        var p = k(n.value);
                        return p.readInt(1) !== 1 || l(this.fileName) !== p.readInt(4)
                          ? null
                          : t.utf8decode(p.readData(n.length - 5));
                      }
                      return null;
                    },
                    findExtraFieldUnicodeComment: function () {
                      var n = this.extraFields[25461];
                      if (n) {
                        var p = k(n.value);
                        return p.readInt(1) !== 1 || l(this.fileComment) !== p.readInt(4)
                          ? null
                          : t.utf8decode(p.readData(n.length - 5));
                      }
                      return null;
                    },
                  }),
                    (B.exports = a);
                },
                {
                  './compressedObject': 2,
                  './compressions': 3,
                  './crc32': 4,
                  './reader/readerFor': 22,
                  './support': 30,
                  './utf8': 31,
                  './utils': 32,
                },
              ],
              35: [
                function (w, B, T) {
                  function k(p, i, f) {
                    (this.name = p),
                      (this.dir = f.dir),
                      (this.date = f.date),
                      (this.comment = f.comment),
                      (this.unixPermissions = f.unixPermissions),
                      (this.dosPermissions = f.dosPermissions),
                      (this._data = i),
                      (this._dataBinary = f.binary),
                      (this.options = {
                        compression: f.compression,
                        compressionOptions: f.compressionOptions,
                      });
                  }
                  var y = w('./stream/StreamHelper'),
                    e = w('./stream/DataWorker'),
                    l = w('./utf8'),
                    t = w('./compressedObject'),
                    g = w('./stream/GenericWorker');
                  k.prototype = {
                    internalStream: function (p) {
                      var i = null,
                        f = 'string';
                      try {
                        if (!p) throw new Error('No output type specified.');
                        var u = (f = p.toLowerCase()) === 'string' || f === 'text';
                        (f !== 'binarystring' && f !== 'text') || (f = 'string'),
                          (i = this._decompressWorker());
                        var b = !this._dataBinary;
                        b && !u && (i = i.pipe(new l.Utf8EncodeWorker())),
                          !b && u && (i = i.pipe(new l.Utf8DecodeWorker()));
                      } catch (P) {
                        (i = new g('error')).error(P);
                      }
                      return new y(i, f, '');
                    },
                    async: function (p, i) {
                      return this.internalStream(p).accumulate(i);
                    },
                    nodeStream: function (p, i) {
                      return this.internalStream(p || 'nodebuffer').toNodejsStream(i);
                    },
                    _compressWorker: function (p, i) {
                      if (this._data instanceof t && this._data.compression.magic === p.magic)
                        return this._data.getCompressedWorker();
                      var f = this._decompressWorker();
                      return (
                        this._dataBinary || (f = f.pipe(new l.Utf8EncodeWorker())),
                        t.createWorkerFrom(f, p, i)
                      );
                    },
                    _decompressWorker: function () {
                      return this._data instanceof t
                        ? this._data.getContentWorker()
                        : this._data instanceof g
                        ? this._data
                        : new e(this._data);
                    },
                  };
                  for (
                    var m = ['asText', 'asBinary', 'asNodeBuffer', 'asUint8Array', 'asArrayBuffer'],
                      a = function () {
                        throw new Error(
                          'This method has been removed in JSZip 3.0, please check the upgrade guide.',
                        );
                      },
                      n = 0;
                    n < m.length;
                    n++
                  )
                    k.prototype[m[n]] = a;
                  B.exports = k;
                },
                {
                  './compressedObject': 2,
                  './stream/DataWorker': 27,
                  './stream/GenericWorker': 28,
                  './stream/StreamHelper': 29,
                  './utf8': 31,
                },
              ],
              36: [
                function (w, B, T) {
                  (function (k) {
                    var y,
                      e,
                      l = k.MutationObserver || k.WebKitMutationObserver;
                    if (l) {
                      var t = 0,
                        g = new l(p),
                        m = k.document.createTextNode('');
                      g.observe(m, { characterData: !0 }),
                        (y = function () {
                          m.data = t = ++t % 2;
                        });
                    } else if (k.setImmediate || k.MessageChannel === void 0)
                      y =
                        'document' in k &&
                        'onreadystatechange' in k.document.createElement('script')
                          ? function () {
                              var i = k.document.createElement('script');
                              (i.onreadystatechange = function () {
                                p(),
                                  (i.onreadystatechange = null),
                                  i.parentNode.removeChild(i),
                                  (i = null);
                              }),
                                k.document.documentElement.appendChild(i);
                            }
                          : function () {
                              setTimeout(p, 0);
                            };
                    else {
                      var a = new k.MessageChannel();
                      (a.port1.onmessage = p),
                        (y = function () {
                          a.port2.postMessage(0);
                        });
                    }
                    var n = [];
                    function p() {
                      var i, f;
                      e = !0;
                      for (var u = n.length; u; ) {
                        for (f = n, n = [], i = -1; ++i < u; ) f[i]();
                        u = n.length;
                      }
                      e = !1;
                    }
                    B.exports = function (i) {
                      n.push(i) !== 1 || e || y();
                    };
                  }).call(
                    this,
                    typeof je != 'undefined'
                      ? je
                      : typeof self != 'undefined'
                      ? self
                      : typeof window != 'undefined'
                      ? window
                      : {},
                  );
                },
                {},
              ],
              37: [
                function (w, B, T) {
                  var k = w('immediate');
                  function y() {}
                  var e = {},
                    l = ['REJECTED'],
                    t = ['FULFILLED'],
                    g = ['PENDING'];
                  function m(u) {
                    if (typeof u != 'function') throw new TypeError('resolver must be a function');
                    (this.state = g),
                      (this.queue = []),
                      (this.outcome = void 0),
                      u !== y && i(this, u);
                  }
                  function a(u, b, P) {
                    (this.promise = u),
                      typeof b == 'function' &&
                        ((this.onFulfilled = b), (this.callFulfilled = this.otherCallFulfilled)),
                      typeof P == 'function' &&
                        ((this.onRejected = P), (this.callRejected = this.otherCallRejected));
                  }
                  function n(u, b, P) {
                    k(function () {
                      var C;
                      try {
                        C = b(P);
                      } catch (s) {
                        return e.reject(u, s);
                      }
                      C === u
                        ? e.reject(u, new TypeError('Cannot resolve promise with itself'))
                        : e.resolve(u, C);
                    });
                  }
                  function p(u) {
                    var b = u && u.then;
                    if (
                      u &&
                      (typeof u == 'object' || typeof u == 'function') &&
                      typeof b == 'function'
                    )
                      return function () {
                        b.apply(u, arguments);
                      };
                  }
                  function i(u, b) {
                    var P = !1;
                    function C(r) {
                      P || ((P = !0), e.reject(u, r));
                    }
                    function s(r) {
                      P || ((P = !0), e.resolve(u, r));
                    }
                    var o = f(function () {
                      b(s, C);
                    });
                    o.status === 'error' && C(o.value);
                  }
                  function f(u, b) {
                    var P = {};
                    try {
                      (P.value = u(b)), (P.status = 'success');
                    } catch (C) {
                      (P.status = 'error'), (P.value = C);
                    }
                    return P;
                  }
                  ((B.exports = m).prototype.finally = function (u) {
                    if (typeof u != 'function') return this;
                    var b = this.constructor;
                    return this.then(
                      function (P) {
                        return b.resolve(u()).then(function () {
                          return P;
                        });
                      },
                      function (P) {
                        return b.resolve(u()).then(function () {
                          throw P;
                        });
                      },
                    );
                  }),
                    (m.prototype.catch = function (u) {
                      return this.then(null, u);
                    }),
                    (m.prototype.then = function (u, b) {
                      if (
                        (typeof u != 'function' && this.state === t) ||
                        (typeof b != 'function' && this.state === l)
                      )
                        return this;
                      var P = new this.constructor(y);
                      return (
                        this.state !== g
                          ? n(P, this.state === t ? u : b, this.outcome)
                          : this.queue.push(new a(P, u, b)),
                        P
                      );
                    }),
                    (a.prototype.callFulfilled = function (u) {
                      e.resolve(this.promise, u);
                    }),
                    (a.prototype.otherCallFulfilled = function (u) {
                      n(this.promise, this.onFulfilled, u);
                    }),
                    (a.prototype.callRejected = function (u) {
                      e.reject(this.promise, u);
                    }),
                    (a.prototype.otherCallRejected = function (u) {
                      n(this.promise, this.onRejected, u);
                    }),
                    (e.resolve = function (u, b) {
                      var P = f(p, b);
                      if (P.status === 'error') return e.reject(u, P.value);
                      var C = P.value;
                      if (C) i(u, C);
                      else {
                        (u.state = t), (u.outcome = b);
                        for (var s = -1, o = u.queue.length; ++s < o; ) u.queue[s].callFulfilled(b);
                      }
                      return u;
                    }),
                    (e.reject = function (u, b) {
                      (u.state = l), (u.outcome = b);
                      for (var P = -1, C = u.queue.length; ++P < C; ) u.queue[P].callRejected(b);
                      return u;
                    }),
                    (m.resolve = function (u) {
                      return u instanceof this ? u : e.resolve(new this(y), u);
                    }),
                    (m.reject = function (u) {
                      var b = new this(y);
                      return e.reject(b, u);
                    }),
                    (m.all = function (u) {
                      var b = this;
                      if (Object.prototype.toString.call(u) !== '[object Array]')
                        return this.reject(new TypeError('must be an array'));
                      var P = u.length,
                        C = !1;
                      if (!P) return this.resolve([]);
                      for (var s = new Array(P), o = 0, r = -1, d = new this(y); ++r < P; )
                        v(u[r], r);
                      return d;
                      function v(S, D) {
                        b.resolve(S).then(
                          function (_) {
                            (s[D] = _), ++o !== P || C || ((C = !0), e.resolve(d, s));
                          },
                          function (_) {
                            C || ((C = !0), e.reject(d, _));
                          },
                        );
                      }
                    }),
                    (m.race = function (u) {
                      var b = this;
                      if (Object.prototype.toString.call(u) !== '[object Array]')
                        return this.reject(new TypeError('must be an array'));
                      var P = u.length,
                        C = !1;
                      if (!P) return this.resolve([]);
                      for (var s = -1, o = new this(y); ++s < P; )
                        (r = u[s]),
                          b.resolve(r).then(
                            function (d) {
                              C || ((C = !0), e.resolve(o, d));
                            },
                            function (d) {
                              C || ((C = !0), e.reject(o, d));
                            },
                          );
                      var r;
                      return o;
                    });
                },
                { immediate: 36 },
              ],
              38: [
                function (w, B, T) {
                  var k = {};
                  (0, w('./lib/utils/common').assign)(
                    k,
                    w('./lib/deflate'),
                    w('./lib/inflate'),
                    w('./lib/zlib/constants'),
                  ),
                    (B.exports = k);
                },
                {
                  './lib/deflate': 39,
                  './lib/inflate': 40,
                  './lib/utils/common': 41,
                  './lib/zlib/constants': 44,
                },
              ],
              39: [
                function (w, B, T) {
                  var k = w('./zlib/deflate'),
                    y = w('./utils/common'),
                    e = w('./utils/strings'),
                    l = w('./zlib/messages'),
                    t = w('./zlib/zstream'),
                    g = Object.prototype.toString,
                    m = 0,
                    a = -1,
                    n = 0,
                    p = 8;
                  function i(u) {
                    if (!(this instanceof i)) return new i(u);
                    this.options = y.assign(
                      {
                        level: a,
                        method: p,
                        chunkSize: 16384,
                        windowBits: 15,
                        memLevel: 8,
                        strategy: n,
                        to: '',
                      },
                      u || {},
                    );
                    var b = this.options;
                    b.raw && 0 < b.windowBits
                      ? (b.windowBits = -b.windowBits)
                      : b.gzip && 0 < b.windowBits && b.windowBits < 16 && (b.windowBits += 16),
                      (this.err = 0),
                      (this.msg = ''),
                      (this.ended = !1),
                      (this.chunks = []),
                      (this.strm = new t()),
                      (this.strm.avail_out = 0);
                    var P = k.deflateInit2(
                      this.strm,
                      b.level,
                      b.method,
                      b.windowBits,
                      b.memLevel,
                      b.strategy,
                    );
                    if (P !== m) throw new Error(l[P]);
                    if ((b.header && k.deflateSetHeader(this.strm, b.header), b.dictionary)) {
                      var C;
                      if (
                        ((C =
                          typeof b.dictionary == 'string'
                            ? e.string2buf(b.dictionary)
                            : g.call(b.dictionary) === '[object ArrayBuffer]'
                            ? new Uint8Array(b.dictionary)
                            : b.dictionary),
                        (P = k.deflateSetDictionary(this.strm, C)) !== m)
                      )
                        throw new Error(l[P]);
                      this._dict_set = !0;
                    }
                  }
                  function f(u, b) {
                    var P = new i(b);
                    if ((P.push(u, !0), P.err)) throw P.msg || l[P.err];
                    return P.result;
                  }
                  (i.prototype.push = function (u, b) {
                    var P,
                      C,
                      s = this.strm,
                      o = this.options.chunkSize;
                    if (this.ended) return !1;
                    (C = b === ~~b ? b : b === !0 ? 4 : 0),
                      typeof u == 'string'
                        ? (s.input = e.string2buf(u))
                        : g.call(u) === '[object ArrayBuffer]'
                        ? (s.input = new Uint8Array(u))
                        : (s.input = u),
                      (s.next_in = 0),
                      (s.avail_in = s.input.length);
                    do {
                      if (
                        (s.avail_out === 0 &&
                          ((s.output = new y.Buf8(o)), (s.next_out = 0), (s.avail_out = o)),
                        (P = k.deflate(s, C)) !== 1 && P !== m)
                      )
                        return this.onEnd(P), !(this.ended = !0);
                      (s.avail_out !== 0 && (s.avail_in !== 0 || (C !== 4 && C !== 2))) ||
                        (this.options.to === 'string'
                          ? this.onData(e.buf2binstring(y.shrinkBuf(s.output, s.next_out)))
                          : this.onData(y.shrinkBuf(s.output, s.next_out)));
                    } while ((0 < s.avail_in || s.avail_out === 0) && P !== 1);
                    return C === 4
                      ? ((P = k.deflateEnd(this.strm)), this.onEnd(P), (this.ended = !0), P === m)
                      : C !== 2 || (this.onEnd(m), !(s.avail_out = 0));
                  }),
                    (i.prototype.onData = function (u) {
                      this.chunks.push(u);
                    }),
                    (i.prototype.onEnd = function (u) {
                      u === m &&
                        (this.options.to === 'string'
                          ? (this.result = this.chunks.join(''))
                          : (this.result = y.flattenChunks(this.chunks))),
                        (this.chunks = []),
                        (this.err = u),
                        (this.msg = this.strm.msg);
                    }),
                    (T.Deflate = i),
                    (T.deflate = f),
                    (T.deflateRaw = function (u, b) {
                      return ((b = b || {}).raw = !0), f(u, b);
                    }),
                    (T.gzip = function (u, b) {
                      return ((b = b || {}).gzip = !0), f(u, b);
                    });
                },
                {
                  './utils/common': 41,
                  './utils/strings': 42,
                  './zlib/deflate': 46,
                  './zlib/messages': 51,
                  './zlib/zstream': 53,
                },
              ],
              40: [
                function (w, B, T) {
                  var k = w('./zlib/inflate'),
                    y = w('./utils/common'),
                    e = w('./utils/strings'),
                    l = w('./zlib/constants'),
                    t = w('./zlib/messages'),
                    g = w('./zlib/zstream'),
                    m = w('./zlib/gzheader'),
                    a = Object.prototype.toString;
                  function n(i) {
                    if (!(this instanceof n)) return new n(i);
                    this.options = y.assign({ chunkSize: 16384, windowBits: 0, to: '' }, i || {});
                    var f = this.options;
                    f.raw &&
                      0 <= f.windowBits &&
                      f.windowBits < 16 &&
                      ((f.windowBits = -f.windowBits), f.windowBits === 0 && (f.windowBits = -15)),
                      !(0 <= f.windowBits && f.windowBits < 16) ||
                        (i && i.windowBits) ||
                        (f.windowBits += 32),
                      15 < f.windowBits &&
                        f.windowBits < 48 &&
                        !(15 & f.windowBits) &&
                        (f.windowBits |= 15),
                      (this.err = 0),
                      (this.msg = ''),
                      (this.ended = !1),
                      (this.chunks = []),
                      (this.strm = new g()),
                      (this.strm.avail_out = 0);
                    var u = k.inflateInit2(this.strm, f.windowBits);
                    if (u !== l.Z_OK) throw new Error(t[u]);
                    (this.header = new m()), k.inflateGetHeader(this.strm, this.header);
                  }
                  function p(i, f) {
                    var u = new n(f);
                    if ((u.push(i, !0), u.err)) throw u.msg || t[u.err];
                    return u.result;
                  }
                  (n.prototype.push = function (i, f) {
                    var u,
                      b,
                      P,
                      C,
                      s,
                      o,
                      r = this.strm,
                      d = this.options.chunkSize,
                      v = this.options.dictionary,
                      S = !1;
                    if (this.ended) return !1;
                    (b = f === ~~f ? f : f === !0 ? l.Z_FINISH : l.Z_NO_FLUSH),
                      typeof i == 'string'
                        ? (r.input = e.binstring2buf(i))
                        : a.call(i) === '[object ArrayBuffer]'
                        ? (r.input = new Uint8Array(i))
                        : (r.input = i),
                      (r.next_in = 0),
                      (r.avail_in = r.input.length);
                    do {
                      if (
                        (r.avail_out === 0 &&
                          ((r.output = new y.Buf8(d)), (r.next_out = 0), (r.avail_out = d)),
                        (u = k.inflate(r, l.Z_NO_FLUSH)) === l.Z_NEED_DICT &&
                          v &&
                          ((o =
                            typeof v == 'string'
                              ? e.string2buf(v)
                              : a.call(v) === '[object ArrayBuffer]'
                              ? new Uint8Array(v)
                              : v),
                          (u = k.inflateSetDictionary(this.strm, o))),
                        u === l.Z_BUF_ERROR && S === !0 && ((u = l.Z_OK), (S = !1)),
                        u !== l.Z_STREAM_END && u !== l.Z_OK)
                      )
                        return this.onEnd(u), !(this.ended = !0);
                      r.next_out &&
                        ((r.avail_out !== 0 &&
                          u !== l.Z_STREAM_END &&
                          (r.avail_in !== 0 || (b !== l.Z_FINISH && b !== l.Z_SYNC_FLUSH))) ||
                          (this.options.to === 'string'
                            ? ((P = e.utf8border(r.output, r.next_out)),
                              (C = r.next_out - P),
                              (s = e.buf2string(r.output, P)),
                              (r.next_out = C),
                              (r.avail_out = d - C),
                              C && y.arraySet(r.output, r.output, P, C, 0),
                              this.onData(s))
                            : this.onData(y.shrinkBuf(r.output, r.next_out)))),
                        r.avail_in === 0 && r.avail_out === 0 && (S = !0);
                    } while ((0 < r.avail_in || r.avail_out === 0) && u !== l.Z_STREAM_END);
                    return (
                      u === l.Z_STREAM_END && (b = l.Z_FINISH),
                      b === l.Z_FINISH
                        ? ((u = k.inflateEnd(this.strm)),
                          this.onEnd(u),
                          (this.ended = !0),
                          u === l.Z_OK)
                        : b !== l.Z_SYNC_FLUSH || (this.onEnd(l.Z_OK), !(r.avail_out = 0))
                    );
                  }),
                    (n.prototype.onData = function (i) {
                      this.chunks.push(i);
                    }),
                    (n.prototype.onEnd = function (i) {
                      i === l.Z_OK &&
                        (this.options.to === 'string'
                          ? (this.result = this.chunks.join(''))
                          : (this.result = y.flattenChunks(this.chunks))),
                        (this.chunks = []),
                        (this.err = i),
                        (this.msg = this.strm.msg);
                    }),
                    (T.Inflate = n),
                    (T.inflate = p),
                    (T.inflateRaw = function (i, f) {
                      return ((f = f || {}).raw = !0), p(i, f);
                    }),
                    (T.ungzip = p);
                },
                {
                  './utils/common': 41,
                  './utils/strings': 42,
                  './zlib/constants': 44,
                  './zlib/gzheader': 47,
                  './zlib/inflate': 49,
                  './zlib/messages': 51,
                  './zlib/zstream': 53,
                },
              ],
              41: [
                function (w, B, T) {
                  var k =
                    typeof Uint8Array != 'undefined' &&
                    typeof Uint16Array != 'undefined' &&
                    typeof Int32Array != 'undefined';
                  (T.assign = function (l) {
                    for (var t = Array.prototype.slice.call(arguments, 1); t.length; ) {
                      var g = t.shift();
                      if (g) {
                        if (typeof g != 'object') throw new TypeError(g + 'must be non-object');
                        for (var m in g) g.hasOwnProperty(m) && (l[m] = g[m]);
                      }
                    }
                    return l;
                  }),
                    (T.shrinkBuf = function (l, t) {
                      return l.length === t
                        ? l
                        : l.subarray
                        ? l.subarray(0, t)
                        : ((l.length = t), l);
                    });
                  var y = {
                      arraySet: function (l, t, g, m, a) {
                        if (t.subarray && l.subarray) l.set(t.subarray(g, g + m), a);
                        else for (var n = 0; n < m; n++) l[a + n] = t[g + n];
                      },
                      flattenChunks: function (l) {
                        var t, g, m, a, n, p;
                        for (t = m = 0, g = l.length; t < g; t++) m += l[t].length;
                        for (p = new Uint8Array(m), t = a = 0, g = l.length; t < g; t++)
                          (n = l[t]), p.set(n, a), (a += n.length);
                        return p;
                      },
                    },
                    e = {
                      arraySet: function (l, t, g, m, a) {
                        for (var n = 0; n < m; n++) l[a + n] = t[g + n];
                      },
                      flattenChunks: function (l) {
                        return [].concat.apply([], l);
                      },
                    };
                  (T.setTyped = function (l) {
                    l
                      ? ((T.Buf8 = Uint8Array),
                        (T.Buf16 = Uint16Array),
                        (T.Buf32 = Int32Array),
                        T.assign(T, y))
                      : ((T.Buf8 = Array), (T.Buf16 = Array), (T.Buf32 = Array), T.assign(T, e));
                  }),
                    T.setTyped(k);
                },
                {},
              ],
              42: [
                function (w, B, T) {
                  var k = w('./common'),
                    y = !0,
                    e = !0;
                  try {
                    String.fromCharCode.apply(null, [0]);
                  } catch (m) {
                    y = !1;
                  }
                  try {
                    String.fromCharCode.apply(null, new Uint8Array(1));
                  } catch (m) {
                    e = !1;
                  }
                  for (var l = new k.Buf8(256), t = 0; t < 256; t++)
                    l[t] =
                      252 <= t ? 6 : 248 <= t ? 5 : 240 <= t ? 4 : 224 <= t ? 3 : 192 <= t ? 2 : 1;
                  function g(m, a) {
                    if (a < 65537 && ((m.subarray && e) || (!m.subarray && y)))
                      return String.fromCharCode.apply(null, k.shrinkBuf(m, a));
                    for (var n = '', p = 0; p < a; p++) n += String.fromCharCode(m[p]);
                    return n;
                  }
                  (l[254] = l[254] = 1),
                    (T.string2buf = function (m) {
                      var a,
                        n,
                        p,
                        i,
                        f,
                        u = m.length,
                        b = 0;
                      for (i = 0; i < u; i++)
                        (64512 & (n = m.charCodeAt(i))) == 55296 &&
                          i + 1 < u &&
                          (64512 & (p = m.charCodeAt(i + 1))) == 56320 &&
                          ((n = 65536 + ((n - 55296) << 10) + (p - 56320)), i++),
                          (b += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4);
                      for (a = new k.Buf8(b), i = f = 0; f < b; i++)
                        (64512 & (n = m.charCodeAt(i))) == 55296 &&
                          i + 1 < u &&
                          (64512 & (p = m.charCodeAt(i + 1))) == 56320 &&
                          ((n = 65536 + ((n - 55296) << 10) + (p - 56320)), i++),
                          n < 128
                            ? (a[f++] = n)
                            : (n < 2048
                                ? (a[f++] = 192 | (n >>> 6))
                                : (n < 65536
                                    ? (a[f++] = 224 | (n >>> 12))
                                    : ((a[f++] = 240 | (n >>> 18)),
                                      (a[f++] = 128 | ((n >>> 12) & 63))),
                                  (a[f++] = 128 | ((n >>> 6) & 63))),
                              (a[f++] = 128 | (63 & n)));
                      return a;
                    }),
                    (T.buf2binstring = function (m) {
                      return g(m, m.length);
                    }),
                    (T.binstring2buf = function (m) {
                      for (var a = new k.Buf8(m.length), n = 0, p = a.length; n < p; n++)
                        a[n] = m.charCodeAt(n);
                      return a;
                    }),
                    (T.buf2string = function (m, a) {
                      var n,
                        p,
                        i,
                        f,
                        u = a || m.length,
                        b = new Array(2 * u);
                      for (n = p = 0; n < u; )
                        if ((i = m[n++]) < 128) b[p++] = i;
                        else if (4 < (f = l[i])) (b[p++] = 65533), (n += f - 1);
                        else {
                          for (i &= f === 2 ? 31 : f === 3 ? 15 : 7; 1 < f && n < u; )
                            (i = (i << 6) | (63 & m[n++])), f--;
                          1 < f
                            ? (b[p++] = 65533)
                            : i < 65536
                            ? (b[p++] = i)
                            : ((i -= 65536),
                              (b[p++] = 55296 | ((i >> 10) & 1023)),
                              (b[p++] = 56320 | (1023 & i)));
                        }
                      return g(b, p);
                    }),
                    (T.utf8border = function (m, a) {
                      var n;
                      for (
                        (a = a || m.length) > m.length && (a = m.length), n = a - 1;
                        0 <= n && (192 & m[n]) == 128;

                      )
                        n--;
                      return n < 0 || n === 0 ? a : n + l[m[n]] > a ? n : a;
                    });
                },
                { './common': 41 },
              ],
              43: [
                function (w, B, T) {
                  B.exports = function (k, y, e, l) {
                    for (var t = (65535 & k) | 0, g = ((k >>> 16) & 65535) | 0, m = 0; e !== 0; ) {
                      for (
                        e -= m = 2e3 < e ? 2e3 : e;
                        (g = (g + (t = (t + y[l++]) | 0)) | 0), --m;

                      );
                      (t %= 65521), (g %= 65521);
                    }
                    return t | (g << 16) | 0;
                  };
                },
                {},
              ],
              44: [
                function (w, B, T) {
                  B.exports = {
                    Z_NO_FLUSH: 0,
                    Z_PARTIAL_FLUSH: 1,
                    Z_SYNC_FLUSH: 2,
                    Z_FULL_FLUSH: 3,
                    Z_FINISH: 4,
                    Z_BLOCK: 5,
                    Z_TREES: 6,
                    Z_OK: 0,
                    Z_STREAM_END: 1,
                    Z_NEED_DICT: 2,
                    Z_ERRNO: -1,
                    Z_STREAM_ERROR: -2,
                    Z_DATA_ERROR: -3,
                    Z_BUF_ERROR: -5,
                    Z_NO_COMPRESSION: 0,
                    Z_BEST_SPEED: 1,
                    Z_BEST_COMPRESSION: 9,
                    Z_DEFAULT_COMPRESSION: -1,
                    Z_FILTERED: 1,
                    Z_HUFFMAN_ONLY: 2,
                    Z_RLE: 3,
                    Z_FIXED: 4,
                    Z_DEFAULT_STRATEGY: 0,
                    Z_BINARY: 0,
                    Z_TEXT: 1,
                    Z_UNKNOWN: 2,
                    Z_DEFLATED: 8,
                  };
                },
                {},
              ],
              45: [
                function (w, B, T) {
                  var k = (function () {
                    for (var y, e = [], l = 0; l < 256; l++) {
                      y = l;
                      for (var t = 0; t < 8; t++) y = 1 & y ? 3988292384 ^ (y >>> 1) : y >>> 1;
                      e[l] = y;
                    }
                    return e;
                  })();
                  B.exports = function (y, e, l, t) {
                    var g = k,
                      m = t + l;
                    y ^= -1;
                    for (var a = t; a < m; a++) y = (y >>> 8) ^ g[255 & (y ^ e[a])];
                    return -1 ^ y;
                  };
                },
                {},
              ],
              46: [
                function (w, B, T) {
                  var k,
                    y = w('../utils/common'),
                    e = w('./trees'),
                    l = w('./adler32'),
                    t = w('./crc32'),
                    g = w('./messages'),
                    m = 0,
                    a = 4,
                    n = 0,
                    p = -2,
                    i = -1,
                    f = 4,
                    u = 2,
                    b = 8,
                    P = 9,
                    C = 286,
                    s = 30,
                    o = 19,
                    r = 2 * C + 1,
                    d = 15,
                    v = 3,
                    S = 258,
                    D = S + v + 1,
                    _ = 42,
                    E = 113,
                    c = 1,
                    z = 2,
                    q = 3,
                    L = 4;
                  function J(h, M) {
                    return (h.msg = g[M]), M;
                  }
                  function $(h) {
                    return (h << 1) - (4 < h ? 9 : 0);
                  }
                  function te(h) {
                    for (var M = h.length; 0 <= --M; ) h[M] = 0;
                  }
                  function F(h) {
                    var M = h.state,
                      I = M.pending;
                    I > h.avail_out && (I = h.avail_out),
                      I !== 0 &&
                        (y.arraySet(h.output, M.pending_buf, M.pending_out, I, h.next_out),
                        (h.next_out += I),
                        (M.pending_out += I),
                        (h.total_out += I),
                        (h.avail_out -= I),
                        (M.pending -= I),
                        M.pending === 0 && (M.pending_out = 0));
                  }
                  function O(h, M) {
                    e._tr_flush_block(
                      h,
                      0 <= h.block_start ? h.block_start : -1,
                      h.strstart - h.block_start,
                      M,
                    ),
                      (h.block_start = h.strstart),
                      F(h.strm);
                  }
                  function ee(h, M) {
                    h.pending_buf[h.pending++] = M;
                  }
                  function K(h, M) {
                    (h.pending_buf[h.pending++] = (M >>> 8) & 255),
                      (h.pending_buf[h.pending++] = 255 & M);
                  }
                  function Z(h, M) {
                    var I,
                      A,
                      x = h.max_chain_length,
                      N = h.strstart,
                      j = h.prev_length,
                      U = h.nice_match,
                      R = h.strstart > h.w_size - D ? h.strstart - (h.w_size - D) : 0,
                      W = h.window,
                      Y = h.w_mask,
                      H = h.prev,
                      Q = h.strstart + S,
                      se = W[N + j - 1],
                      ae = W[N + j];
                    h.prev_length >= h.good_match && (x >>= 2),
                      U > h.lookahead && (U = h.lookahead);
                    do
                      if (
                        W[(I = M) + j] === ae &&
                        W[I + j - 1] === se &&
                        W[I] === W[N] &&
                        W[++I] === W[N + 1]
                      ) {
                        (N += 2), I++;
                        do;
                        while (
                          W[++N] === W[++I] &&
                          W[++N] === W[++I] &&
                          W[++N] === W[++I] &&
                          W[++N] === W[++I] &&
                          W[++N] === W[++I] &&
                          W[++N] === W[++I] &&
                          W[++N] === W[++I] &&
                          W[++N] === W[++I] &&
                          N < Q
                        );
                        if (((A = S - (Q - N)), (N = Q - S), j < A)) {
                          if (((h.match_start = M), U <= (j = A))) break;
                          (se = W[N + j - 1]), (ae = W[N + j]);
                        }
                      }
                    while ((M = H[M & Y]) > R && --x != 0);
                    return j <= h.lookahead ? j : h.lookahead;
                  }
                  function ie(h) {
                    var M,
                      I,
                      A,
                      x,
                      N,
                      j,
                      U,
                      R,
                      W,
                      Y,
                      H = h.w_size;
                    do {
                      if (
                        ((x = h.window_size - h.lookahead - h.strstart), h.strstart >= H + (H - D))
                      ) {
                        for (
                          y.arraySet(h.window, h.window, H, H, 0),
                            h.match_start -= H,
                            h.strstart -= H,
                            h.block_start -= H,
                            M = I = h.hash_size;
                          (A = h.head[--M]), (h.head[M] = H <= A ? A - H : 0), --I;

                        );
                        for (M = I = H; (A = h.prev[--M]), (h.prev[M] = H <= A ? A - H : 0), --I; );
                        x += H;
                      }
                      if (h.strm.avail_in === 0) break;
                      if (
                        ((j = h.strm),
                        (U = h.window),
                        (R = h.strstart + h.lookahead),
                        (W = x),
                        (Y = void 0),
                        (Y = j.avail_in),
                        W < Y && (Y = W),
                        (I =
                          Y === 0
                            ? 0
                            : ((j.avail_in -= Y),
                              y.arraySet(U, j.input, j.next_in, Y, R),
                              j.state.wrap === 1
                                ? (j.adler = l(j.adler, U, Y, R))
                                : j.state.wrap === 2 && (j.adler = t(j.adler, U, Y, R)),
                              (j.next_in += Y),
                              (j.total_in += Y),
                              Y)),
                        (h.lookahead += I),
                        h.lookahead + h.insert >= v)
                      )
                        for (
                          N = h.strstart - h.insert,
                            h.ins_h = h.window[N],
                            h.ins_h = ((h.ins_h << h.hash_shift) ^ h.window[N + 1]) & h.hash_mask;
                          h.insert &&
                          ((h.ins_h =
                            ((h.ins_h << h.hash_shift) ^ h.window[N + v - 1]) & h.hash_mask),
                          (h.prev[N & h.w_mask] = h.head[h.ins_h]),
                          (h.head[h.ins_h] = N),
                          N++,
                          h.insert--,
                          !(h.lookahead + h.insert < v));

                        );
                    } while (h.lookahead < D && h.strm.avail_in !== 0);
                  }
                  function pe(h, M) {
                    for (var I, A; ; ) {
                      if (h.lookahead < D) {
                        if ((ie(h), h.lookahead < D && M === m)) return c;
                        if (h.lookahead === 0) break;
                      }
                      if (
                        ((I = 0),
                        h.lookahead >= v &&
                          ((h.ins_h =
                            ((h.ins_h << h.hash_shift) ^ h.window[h.strstart + v - 1]) &
                            h.hash_mask),
                          (I = h.prev[h.strstart & h.w_mask] = h.head[h.ins_h]),
                          (h.head[h.ins_h] = h.strstart)),
                        I !== 0 && h.strstart - I <= h.w_size - D && (h.match_length = Z(h, I)),
                        h.match_length >= v)
                      )
                        if (
                          ((A = e._tr_tally(h, h.strstart - h.match_start, h.match_length - v)),
                          (h.lookahead -= h.match_length),
                          h.match_length <= h.max_lazy_match && h.lookahead >= v)
                        ) {
                          for (
                            h.match_length--;
                            h.strstart++,
                              (h.ins_h =
                                ((h.ins_h << h.hash_shift) ^ h.window[h.strstart + v - 1]) &
                                h.hash_mask),
                              (I = h.prev[h.strstart & h.w_mask] = h.head[h.ins_h]),
                              (h.head[h.ins_h] = h.strstart),
                              --h.match_length != 0;

                          );
                          h.strstart++;
                        } else
                          (h.strstart += h.match_length),
                            (h.match_length = 0),
                            (h.ins_h = h.window[h.strstart]),
                            (h.ins_h =
                              ((h.ins_h << h.hash_shift) ^ h.window[h.strstart + 1]) & h.hash_mask);
                      else
                        (A = e._tr_tally(h, 0, h.window[h.strstart])), h.lookahead--, h.strstart++;
                      if (A && (O(h, !1), h.strm.avail_out === 0)) return c;
                    }
                    return (
                      (h.insert = h.strstart < v - 1 ? h.strstart : v - 1),
                      M === a
                        ? (O(h, !0), h.strm.avail_out === 0 ? q : L)
                        : h.last_lit && (O(h, !1), h.strm.avail_out === 0)
                        ? c
                        : z
                    );
                  }
                  function re(h, M) {
                    for (var I, A, x; ; ) {
                      if (h.lookahead < D) {
                        if ((ie(h), h.lookahead < D && M === m)) return c;
                        if (h.lookahead === 0) break;
                      }
                      if (
                        ((I = 0),
                        h.lookahead >= v &&
                          ((h.ins_h =
                            ((h.ins_h << h.hash_shift) ^ h.window[h.strstart + v - 1]) &
                            h.hash_mask),
                          (I = h.prev[h.strstart & h.w_mask] = h.head[h.ins_h]),
                          (h.head[h.ins_h] = h.strstart)),
                        (h.prev_length = h.match_length),
                        (h.prev_match = h.match_start),
                        (h.match_length = v - 1),
                        I !== 0 &&
                          h.prev_length < h.max_lazy_match &&
                          h.strstart - I <= h.w_size - D &&
                          ((h.match_length = Z(h, I)),
                          h.match_length <= 5 &&
                            (h.strategy === 1 ||
                              (h.match_length === v && 4096 < h.strstart - h.match_start)) &&
                            (h.match_length = v - 1)),
                        h.prev_length >= v && h.match_length <= h.prev_length)
                      ) {
                        for (
                          x = h.strstart + h.lookahead - v,
                            A = e._tr_tally(h, h.strstart - 1 - h.prev_match, h.prev_length - v),
                            h.lookahead -= h.prev_length - 1,
                            h.prev_length -= 2;
                          ++h.strstart <= x &&
                            ((h.ins_h =
                              ((h.ins_h << h.hash_shift) ^ h.window[h.strstart + v - 1]) &
                              h.hash_mask),
                            (I = h.prev[h.strstart & h.w_mask] = h.head[h.ins_h]),
                            (h.head[h.ins_h] = h.strstart)),
                            --h.prev_length != 0;

                        );
                        if (
                          ((h.match_available = 0),
                          (h.match_length = v - 1),
                          h.strstart++,
                          A && (O(h, !1), h.strm.avail_out === 0))
                        )
                          return c;
                      } else if (h.match_available) {
                        if (
                          ((A = e._tr_tally(h, 0, h.window[h.strstart - 1])) && O(h, !1),
                          h.strstart++,
                          h.lookahead--,
                          h.strm.avail_out === 0)
                        )
                          return c;
                      } else (h.match_available = 1), h.strstart++, h.lookahead--;
                    }
                    return (
                      h.match_available &&
                        ((A = e._tr_tally(h, 0, h.window[h.strstart - 1])),
                        (h.match_available = 0)),
                      (h.insert = h.strstart < v - 1 ? h.strstart : v - 1),
                      M === a
                        ? (O(h, !0), h.strm.avail_out === 0 ? q : L)
                        : h.last_lit && (O(h, !1), h.strm.avail_out === 0)
                        ? c
                        : z
                    );
                  }
                  function ne(h, M, I, A, x) {
                    (this.good_length = h),
                      (this.max_lazy = M),
                      (this.nice_length = I),
                      (this.max_chain = A),
                      (this.func = x);
                  }
                  function fe() {
                    (this.strm = null),
                      (this.status = 0),
                      (this.pending_buf = null),
                      (this.pending_buf_size = 0),
                      (this.pending_out = 0),
                      (this.pending = 0),
                      (this.wrap = 0),
                      (this.gzhead = null),
                      (this.gzindex = 0),
                      (this.method = b),
                      (this.last_flush = -1),
                      (this.w_size = 0),
                      (this.w_bits = 0),
                      (this.w_mask = 0),
                      (this.window = null),
                      (this.window_size = 0),
                      (this.prev = null),
                      (this.head = null),
                      (this.ins_h = 0),
                      (this.hash_size = 0),
                      (this.hash_bits = 0),
                      (this.hash_mask = 0),
                      (this.hash_shift = 0),
                      (this.block_start = 0),
                      (this.match_length = 0),
                      (this.prev_match = 0),
                      (this.match_available = 0),
                      (this.strstart = 0),
                      (this.match_start = 0),
                      (this.lookahead = 0),
                      (this.prev_length = 0),
                      (this.max_chain_length = 0),
                      (this.max_lazy_match = 0),
                      (this.level = 0),
                      (this.strategy = 0),
                      (this.good_match = 0),
                      (this.nice_match = 0),
                      (this.dyn_ltree = new y.Buf16(2 * r)),
                      (this.dyn_dtree = new y.Buf16(2 * (2 * s + 1))),
                      (this.bl_tree = new y.Buf16(2 * (2 * o + 1))),
                      te(this.dyn_ltree),
                      te(this.dyn_dtree),
                      te(this.bl_tree),
                      (this.l_desc = null),
                      (this.d_desc = null),
                      (this.bl_desc = null),
                      (this.bl_count = new y.Buf16(d + 1)),
                      (this.heap = new y.Buf16(2 * C + 1)),
                      te(this.heap),
                      (this.heap_len = 0),
                      (this.heap_max = 0),
                      (this.depth = new y.Buf16(2 * C + 1)),
                      te(this.depth),
                      (this.l_buf = 0),
                      (this.lit_bufsize = 0),
                      (this.last_lit = 0),
                      (this.d_buf = 0),
                      (this.opt_len = 0),
                      (this.static_len = 0),
                      (this.matches = 0),
                      (this.insert = 0),
                      (this.bi_buf = 0),
                      (this.bi_valid = 0);
                  }
                  function oe(h) {
                    var M;
                    return h && h.state
                      ? ((h.total_in = h.total_out = 0),
                        (h.data_type = u),
                        ((M = h.state).pending = 0),
                        (M.pending_out = 0),
                        M.wrap < 0 && (M.wrap = -M.wrap),
                        (M.status = M.wrap ? _ : E),
                        (h.adler = M.wrap === 2 ? 0 : 1),
                        (M.last_flush = m),
                        e._tr_init(M),
                        n)
                      : J(h, p);
                  }
                  function Se(h) {
                    var M = oe(h);
                    return (
                      M === n &&
                        (function (I) {
                          (I.window_size = 2 * I.w_size),
                            te(I.head),
                            (I.max_lazy_match = k[I.level].max_lazy),
                            (I.good_match = k[I.level].good_length),
                            (I.nice_match = k[I.level].nice_length),
                            (I.max_chain_length = k[I.level].max_chain),
                            (I.strstart = 0),
                            (I.block_start = 0),
                            (I.lookahead = 0),
                            (I.insert = 0),
                            (I.match_length = I.prev_length = v - 1),
                            (I.match_available = 0),
                            (I.ins_h = 0);
                        })(h.state),
                      M
                    );
                  }
                  function we(h, M, I, A, x, N) {
                    if (!h) return p;
                    var j = 1;
                    if (
                      (M === i && (M = 6),
                      A < 0 ? ((j = 0), (A = -A)) : 15 < A && ((j = 2), (A -= 16)),
                      x < 1 ||
                        P < x ||
                        I !== b ||
                        A < 8 ||
                        15 < A ||
                        M < 0 ||
                        9 < M ||
                        N < 0 ||
                        f < N)
                    )
                      return J(h, p);
                    A === 8 && (A = 9);
                    var U = new fe();
                    return (
                      ((h.state = U).strm = h),
                      (U.wrap = j),
                      (U.gzhead = null),
                      (U.w_bits = A),
                      (U.w_size = 1 << U.w_bits),
                      (U.w_mask = U.w_size - 1),
                      (U.hash_bits = x + 7),
                      (U.hash_size = 1 << U.hash_bits),
                      (U.hash_mask = U.hash_size - 1),
                      (U.hash_shift = ~~((U.hash_bits + v - 1) / v)),
                      (U.window = new y.Buf8(2 * U.w_size)),
                      (U.head = new y.Buf16(U.hash_size)),
                      (U.prev = new y.Buf16(U.w_size)),
                      (U.lit_bufsize = 1 << (x + 6)),
                      (U.pending_buf_size = 4 * U.lit_bufsize),
                      (U.pending_buf = new y.Buf8(U.pending_buf_size)),
                      (U.d_buf = 1 * U.lit_bufsize),
                      (U.l_buf = 3 * U.lit_bufsize),
                      (U.level = M),
                      (U.strategy = N),
                      (U.method = I),
                      Se(h)
                    );
                  }
                  (k = [
                    new ne(0, 0, 0, 0, function (h, M) {
                      var I = 65535;
                      for (I > h.pending_buf_size - 5 && (I = h.pending_buf_size - 5); ; ) {
                        if (h.lookahead <= 1) {
                          if ((ie(h), h.lookahead === 0 && M === m)) return c;
                          if (h.lookahead === 0) break;
                        }
                        (h.strstart += h.lookahead), (h.lookahead = 0);
                        var A = h.block_start + I;
                        if (
                          ((h.strstart === 0 || h.strstart >= A) &&
                            ((h.lookahead = h.strstart - A),
                            (h.strstart = A),
                            O(h, !1),
                            h.strm.avail_out === 0)) ||
                          (h.strstart - h.block_start >= h.w_size - D &&
                            (O(h, !1), h.strm.avail_out === 0))
                        )
                          return c;
                      }
                      return (
                        (h.insert = 0),
                        M === a
                          ? (O(h, !0), h.strm.avail_out === 0 ? q : L)
                          : (h.strstart > h.block_start && (O(h, !1), h.strm.avail_out), c)
                      );
                    }),
                    new ne(4, 4, 8, 4, pe),
                    new ne(4, 5, 16, 8, pe),
                    new ne(4, 6, 32, 32, pe),
                    new ne(4, 4, 16, 16, re),
                    new ne(8, 16, 32, 32, re),
                    new ne(8, 16, 128, 128, re),
                    new ne(8, 32, 128, 256, re),
                    new ne(32, 128, 258, 1024, re),
                    new ne(32, 258, 258, 4096, re),
                  ]),
                    (T.deflateInit = function (h, M) {
                      return we(h, M, b, 15, 8, 0);
                    }),
                    (T.deflateInit2 = we),
                    (T.deflateReset = Se),
                    (T.deflateResetKeep = oe),
                    (T.deflateSetHeader = function (h, M) {
                      return h && h.state
                        ? h.state.wrap !== 2
                          ? p
                          : ((h.state.gzhead = M), n)
                        : p;
                    }),
                    (T.deflate = function (h, M) {
                      var I, A, x, N;
                      if (!h || !h.state || 5 < M || M < 0) return h ? J(h, p) : p;
                      if (
                        ((A = h.state),
                        !h.output ||
                          (!h.input && h.avail_in !== 0) ||
                          (A.status === 666 && M !== a))
                      )
                        return J(h, h.avail_out === 0 ? -5 : p);
                      if (((A.strm = h), (I = A.last_flush), (A.last_flush = M), A.status === _))
                        if (A.wrap === 2)
                          (h.adler = 0),
                            ee(A, 31),
                            ee(A, 139),
                            ee(A, 8),
                            A.gzhead
                              ? (ee(
                                  A,
                                  (A.gzhead.text ? 1 : 0) +
                                    (A.gzhead.hcrc ? 2 : 0) +
                                    (A.gzhead.extra ? 4 : 0) +
                                    (A.gzhead.name ? 8 : 0) +
                                    (A.gzhead.comment ? 16 : 0),
                                ),
                                ee(A, 255 & A.gzhead.time),
                                ee(A, (A.gzhead.time >> 8) & 255),
                                ee(A, (A.gzhead.time >> 16) & 255),
                                ee(A, (A.gzhead.time >> 24) & 255),
                                ee(A, A.level === 9 ? 2 : 2 <= A.strategy || A.level < 2 ? 4 : 0),
                                ee(A, 255 & A.gzhead.os),
                                A.gzhead.extra &&
                                  A.gzhead.extra.length &&
                                  (ee(A, 255 & A.gzhead.extra.length),
                                  ee(A, (A.gzhead.extra.length >> 8) & 255)),
                                A.gzhead.hcrc &&
                                  (h.adler = t(h.adler, A.pending_buf, A.pending, 0)),
                                (A.gzindex = 0),
                                (A.status = 69))
                              : (ee(A, 0),
                                ee(A, 0),
                                ee(A, 0),
                                ee(A, 0),
                                ee(A, 0),
                                ee(A, A.level === 9 ? 2 : 2 <= A.strategy || A.level < 2 ? 4 : 0),
                                ee(A, 3),
                                (A.status = E));
                        else {
                          var j = (b + ((A.w_bits - 8) << 4)) << 8;
                          (j |=
                            (2 <= A.strategy || A.level < 2
                              ? 0
                              : A.level < 6
                              ? 1
                              : A.level === 6
                              ? 2
                              : 3) << 6),
                            A.strstart !== 0 && (j |= 32),
                            (j += 31 - (j % 31)),
                            (A.status = E),
                            K(A, j),
                            A.strstart !== 0 && (K(A, h.adler >>> 16), K(A, 65535 & h.adler)),
                            (h.adler = 1);
                        }
                      if (A.status === 69)
                        if (A.gzhead.extra) {
                          for (
                            x = A.pending;
                            A.gzindex < (65535 & A.gzhead.extra.length) &&
                            (A.pending !== A.pending_buf_size ||
                              (A.gzhead.hcrc &&
                                A.pending > x &&
                                (h.adler = t(h.adler, A.pending_buf, A.pending - x, x)),
                              F(h),
                              (x = A.pending),
                              A.pending !== A.pending_buf_size));

                          )
                            ee(A, 255 & A.gzhead.extra[A.gzindex]), A.gzindex++;
                          A.gzhead.hcrc &&
                            A.pending > x &&
                            (h.adler = t(h.adler, A.pending_buf, A.pending - x, x)),
                            A.gzindex === A.gzhead.extra.length &&
                              ((A.gzindex = 0), (A.status = 73));
                        } else A.status = 73;
                      if (A.status === 73)
                        if (A.gzhead.name) {
                          x = A.pending;
                          do {
                            if (
                              A.pending === A.pending_buf_size &&
                              (A.gzhead.hcrc &&
                                A.pending > x &&
                                (h.adler = t(h.adler, A.pending_buf, A.pending - x, x)),
                              F(h),
                              (x = A.pending),
                              A.pending === A.pending_buf_size)
                            ) {
                              N = 1;
                              break;
                            }
                            (N =
                              A.gzindex < A.gzhead.name.length
                                ? 255 & A.gzhead.name.charCodeAt(A.gzindex++)
                                : 0),
                              ee(A, N);
                          } while (N !== 0);
                          A.gzhead.hcrc &&
                            A.pending > x &&
                            (h.adler = t(h.adler, A.pending_buf, A.pending - x, x)),
                            N === 0 && ((A.gzindex = 0), (A.status = 91));
                        } else A.status = 91;
                      if (A.status === 91)
                        if (A.gzhead.comment) {
                          x = A.pending;
                          do {
                            if (
                              A.pending === A.pending_buf_size &&
                              (A.gzhead.hcrc &&
                                A.pending > x &&
                                (h.adler = t(h.adler, A.pending_buf, A.pending - x, x)),
                              F(h),
                              (x = A.pending),
                              A.pending === A.pending_buf_size)
                            ) {
                              N = 1;
                              break;
                            }
                            (N =
                              A.gzindex < A.gzhead.comment.length
                                ? 255 & A.gzhead.comment.charCodeAt(A.gzindex++)
                                : 0),
                              ee(A, N);
                          } while (N !== 0);
                          A.gzhead.hcrc &&
                            A.pending > x &&
                            (h.adler = t(h.adler, A.pending_buf, A.pending - x, x)),
                            N === 0 && (A.status = 103);
                        } else A.status = 103;
                      if (
                        (A.status === 103 &&
                          (A.gzhead.hcrc
                            ? (A.pending + 2 > A.pending_buf_size && F(h),
                              A.pending + 2 <= A.pending_buf_size &&
                                (ee(A, 255 & h.adler),
                                ee(A, (h.adler >> 8) & 255),
                                (h.adler = 0),
                                (A.status = E)))
                            : (A.status = E)),
                        A.pending !== 0)
                      ) {
                        if ((F(h), h.avail_out === 0)) return (A.last_flush = -1), n;
                      } else if (h.avail_in === 0 && $(M) <= $(I) && M !== a) return J(h, -5);
                      if (A.status === 666 && h.avail_in !== 0) return J(h, -5);
                      if (h.avail_in !== 0 || A.lookahead !== 0 || (M !== m && A.status !== 666)) {
                        var U =
                          A.strategy === 2
                            ? (function (R, W) {
                                for (var Y; ; ) {
                                  if (R.lookahead === 0 && (ie(R), R.lookahead === 0)) {
                                    if (W === m) return c;
                                    break;
                                  }
                                  if (
                                    ((R.match_length = 0),
                                    (Y = e._tr_tally(R, 0, R.window[R.strstart])),
                                    R.lookahead--,
                                    R.strstart++,
                                    Y && (O(R, !1), R.strm.avail_out === 0))
                                  )
                                    return c;
                                }
                                return (
                                  (R.insert = 0),
                                  W === a
                                    ? (O(R, !0), R.strm.avail_out === 0 ? q : L)
                                    : R.last_lit && (O(R, !1), R.strm.avail_out === 0)
                                    ? c
                                    : z
                                );
                              })(A, M)
                            : A.strategy === 3
                            ? (function (R, W) {
                                for (var Y, H, Q, se, ae = R.window; ; ) {
                                  if (R.lookahead <= S) {
                                    if ((ie(R), R.lookahead <= S && W === m)) return c;
                                    if (R.lookahead === 0) break;
                                  }
                                  if (
                                    ((R.match_length = 0),
                                    R.lookahead >= v &&
                                      0 < R.strstart &&
                                      (H = ae[(Q = R.strstart - 1)]) === ae[++Q] &&
                                      H === ae[++Q] &&
                                      H === ae[++Q])
                                  ) {
                                    se = R.strstart + S;
                                    do;
                                    while (
                                      H === ae[++Q] &&
                                      H === ae[++Q] &&
                                      H === ae[++Q] &&
                                      H === ae[++Q] &&
                                      H === ae[++Q] &&
                                      H === ae[++Q] &&
                                      H === ae[++Q] &&
                                      H === ae[++Q] &&
                                      Q < se
                                    );
                                    (R.match_length = S - (se - Q)),
                                      R.match_length > R.lookahead &&
                                        (R.match_length = R.lookahead);
                                  }
                                  if (
                                    (R.match_length >= v
                                      ? ((Y = e._tr_tally(R, 1, R.match_length - v)),
                                        (R.lookahead -= R.match_length),
                                        (R.strstart += R.match_length),
                                        (R.match_length = 0))
                                      : ((Y = e._tr_tally(R, 0, R.window[R.strstart])),
                                        R.lookahead--,
                                        R.strstart++),
                                    Y && (O(R, !1), R.strm.avail_out === 0))
                                  )
                                    return c;
                                }
                                return (
                                  (R.insert = 0),
                                  W === a
                                    ? (O(R, !0), R.strm.avail_out === 0 ? q : L)
                                    : R.last_lit && (O(R, !1), R.strm.avail_out === 0)
                                    ? c
                                    : z
                                );
                              })(A, M)
                            : k[A.level].func(A, M);
                        if (((U !== q && U !== L) || (A.status = 666), U === c || U === q))
                          return h.avail_out === 0 && (A.last_flush = -1), n;
                        if (
                          U === z &&
                          (M === 1
                            ? e._tr_align(A)
                            : M !== 5 &&
                              (e._tr_stored_block(A, 0, 0, !1),
                              M === 3 &&
                                (te(A.head),
                                A.lookahead === 0 &&
                                  ((A.strstart = 0), (A.block_start = 0), (A.insert = 0)))),
                          F(h),
                          h.avail_out === 0)
                        )
                          return (A.last_flush = -1), n;
                      }
                      return M !== a
                        ? n
                        : A.wrap <= 0
                        ? 1
                        : (A.wrap === 2
                            ? (ee(A, 255 & h.adler),
                              ee(A, (h.adler >> 8) & 255),
                              ee(A, (h.adler >> 16) & 255),
                              ee(A, (h.adler >> 24) & 255),
                              ee(A, 255 & h.total_in),
                              ee(A, (h.total_in >> 8) & 255),
                              ee(A, (h.total_in >> 16) & 255),
                              ee(A, (h.total_in >> 24) & 255))
                            : (K(A, h.adler >>> 16), K(A, 65535 & h.adler)),
                          F(h),
                          0 < A.wrap && (A.wrap = -A.wrap),
                          A.pending !== 0 ? n : 1);
                    }),
                    (T.deflateEnd = function (h) {
                      var M;
                      return h && h.state
                        ? (M = h.state.status) !== _ &&
                          M !== 69 &&
                          M !== 73 &&
                          M !== 91 &&
                          M !== 103 &&
                          M !== E &&
                          M !== 666
                          ? J(h, p)
                          : ((h.state = null), M === E ? J(h, -3) : n)
                        : p;
                    }),
                    (T.deflateSetDictionary = function (h, M) {
                      var I,
                        A,
                        x,
                        N,
                        j,
                        U,
                        R,
                        W,
                        Y = M.length;
                      if (
                        !h ||
                        !h.state ||
                        (N = (I = h.state).wrap) === 2 ||
                        (N === 1 && I.status !== _) ||
                        I.lookahead
                      )
                        return p;
                      for (
                        N === 1 && (h.adler = l(h.adler, M, Y, 0)),
                          I.wrap = 0,
                          Y >= I.w_size &&
                            (N === 0 &&
                              (te(I.head), (I.strstart = 0), (I.block_start = 0), (I.insert = 0)),
                            (W = new y.Buf8(I.w_size)),
                            y.arraySet(W, M, Y - I.w_size, I.w_size, 0),
                            (M = W),
                            (Y = I.w_size)),
                          j = h.avail_in,
                          U = h.next_in,
                          R = h.input,
                          h.avail_in = Y,
                          h.next_in = 0,
                          h.input = M,
                          ie(I);
                        I.lookahead >= v;

                      ) {
                        for (
                          A = I.strstart, x = I.lookahead - (v - 1);
                          (I.ins_h =
                            ((I.ins_h << I.hash_shift) ^ I.window[A + v - 1]) & I.hash_mask),
                            (I.prev[A & I.w_mask] = I.head[I.ins_h]),
                            (I.head[I.ins_h] = A),
                            A++,
                            --x;

                        );
                        (I.strstart = A), (I.lookahead = v - 1), ie(I);
                      }
                      return (
                        (I.strstart += I.lookahead),
                        (I.block_start = I.strstart),
                        (I.insert = I.lookahead),
                        (I.lookahead = 0),
                        (I.match_length = I.prev_length = v - 1),
                        (I.match_available = 0),
                        (h.next_in = U),
                        (h.input = R),
                        (h.avail_in = j),
                        (I.wrap = N),
                        n
                      );
                    }),
                    (T.deflateInfo = 'pako deflate (from Nodeca project)');
                },
                {
                  '../utils/common': 41,
                  './adler32': 43,
                  './crc32': 45,
                  './messages': 51,
                  './trees': 52,
                },
              ],
              47: [
                function (w, B, T) {
                  B.exports = function () {
                    (this.text = 0),
                      (this.time = 0),
                      (this.xflags = 0),
                      (this.os = 0),
                      (this.extra = null),
                      (this.extra_len = 0),
                      (this.name = ''),
                      (this.comment = ''),
                      (this.hcrc = 0),
                      (this.done = !1);
                  };
                },
                {},
              ],
              48: [
                function (w, B, T) {
                  B.exports = function (k, y) {
                    var e, l, t, g, m, a, n, p, i, f, u, b, P, C, s, o, r, d, v, S, D, _, E, c, z;
                    (e = k.state),
                      (l = k.next_in),
                      (c = k.input),
                      (t = l + (k.avail_in - 5)),
                      (g = k.next_out),
                      (z = k.output),
                      (m = g - (y - k.avail_out)),
                      (a = g + (k.avail_out - 257)),
                      (n = e.dmax),
                      (p = e.wsize),
                      (i = e.whave),
                      (f = e.wnext),
                      (u = e.window),
                      (b = e.hold),
                      (P = e.bits),
                      (C = e.lencode),
                      (s = e.distcode),
                      (o = (1 << e.lenbits) - 1),
                      (r = (1 << e.distbits) - 1);
                    e: do {
                      P < 15 && ((b += c[l++] << P), (P += 8), (b += c[l++] << P), (P += 8)),
                        (d = C[b & o]);
                      t: for (;;) {
                        if (((b >>>= v = d >>> 24), (P -= v), (v = (d >>> 16) & 255) === 0))
                          z[g++] = 65535 & d;
                        else {
                          if (!(16 & v)) {
                            if (!(64 & v)) {
                              d = C[(65535 & d) + (b & ((1 << v) - 1))];
                              continue t;
                            }
                            if (32 & v) {
                              e.mode = 12;
                              break e;
                            }
                            (k.msg = 'invalid literal/length code'), (e.mode = 30);
                            break e;
                          }
                          (S = 65535 & d),
                            (v &= 15) &&
                              (P < v && ((b += c[l++] << P), (P += 8)),
                              (S += b & ((1 << v) - 1)),
                              (b >>>= v),
                              (P -= v)),
                            P < 15 && ((b += c[l++] << P), (P += 8), (b += c[l++] << P), (P += 8)),
                            (d = s[b & r]);
                          r: for (;;) {
                            if (((b >>>= v = d >>> 24), (P -= v), !(16 & (v = (d >>> 16) & 255)))) {
                              if (!(64 & v)) {
                                d = s[(65535 & d) + (b & ((1 << v) - 1))];
                                continue r;
                              }
                              (k.msg = 'invalid distance code'), (e.mode = 30);
                              break e;
                            }
                            if (
                              ((D = 65535 & d),
                              P < (v &= 15) &&
                                ((b += c[l++] << P),
                                (P += 8) < v && ((b += c[l++] << P), (P += 8))),
                              n < (D += b & ((1 << v) - 1)))
                            ) {
                              (k.msg = 'invalid distance too far back'), (e.mode = 30);
                              break e;
                            }
                            if (((b >>>= v), (P -= v), (v = g - m) < D)) {
                              if (i < (v = D - v) && e.sane) {
                                (k.msg = 'invalid distance too far back'), (e.mode = 30);
                                break e;
                              }
                              if (((E = u), (_ = 0) === f)) {
                                if (((_ += p - v), v < S)) {
                                  for (S -= v; (z[g++] = u[_++]), --v; );
                                  (_ = g - D), (E = z);
                                }
                              } else if (f < v) {
                                if (((_ += p + f - v), (v -= f) < S)) {
                                  for (S -= v; (z[g++] = u[_++]), --v; );
                                  if (((_ = 0), f < S)) {
                                    for (S -= v = f; (z[g++] = u[_++]), --v; );
                                    (_ = g - D), (E = z);
                                  }
                                }
                              } else if (((_ += f - v), v < S)) {
                                for (S -= v; (z[g++] = u[_++]), --v; );
                                (_ = g - D), (E = z);
                              }
                              for (; 2 < S; )
                                (z[g++] = E[_++]), (z[g++] = E[_++]), (z[g++] = E[_++]), (S -= 3);
                              S && ((z[g++] = E[_++]), 1 < S && (z[g++] = E[_++]));
                            } else {
                              for (
                                _ = g - D;
                                (z[g++] = z[_++]),
                                  (z[g++] = z[_++]),
                                  (z[g++] = z[_++]),
                                  2 < (S -= 3);

                              );
                              S && ((z[g++] = z[_++]), 1 < S && (z[g++] = z[_++]));
                            }
                            break;
                          }
                        }
                        break;
                      }
                    } while (l < t && g < a);
                    (l -= S = P >> 3),
                      (b &= (1 << (P -= S << 3)) - 1),
                      (k.next_in = l),
                      (k.next_out = g),
                      (k.avail_in = l < t ? t - l + 5 : 5 - (l - t)),
                      (k.avail_out = g < a ? a - g + 257 : 257 - (g - a)),
                      (e.hold = b),
                      (e.bits = P);
                  };
                },
                {},
              ],
              49: [
                function (w, B, T) {
                  var k = w('../utils/common'),
                    y = w('./adler32'),
                    e = w('./crc32'),
                    l = w('./inffast'),
                    t = w('./inftrees'),
                    g = 1,
                    m = 2,
                    a = 0,
                    n = -2,
                    p = 1,
                    i = 852,
                    f = 592;
                  function u(_) {
                    return (
                      ((_ >>> 24) & 255) +
                      ((_ >>> 8) & 65280) +
                      ((65280 & _) << 8) +
                      ((255 & _) << 24)
                    );
                  }
                  function b() {
                    (this.mode = 0),
                      (this.last = !1),
                      (this.wrap = 0),
                      (this.havedict = !1),
                      (this.flags = 0),
                      (this.dmax = 0),
                      (this.check = 0),
                      (this.total = 0),
                      (this.head = null),
                      (this.wbits = 0),
                      (this.wsize = 0),
                      (this.whave = 0),
                      (this.wnext = 0),
                      (this.window = null),
                      (this.hold = 0),
                      (this.bits = 0),
                      (this.length = 0),
                      (this.offset = 0),
                      (this.extra = 0),
                      (this.lencode = null),
                      (this.distcode = null),
                      (this.lenbits = 0),
                      (this.distbits = 0),
                      (this.ncode = 0),
                      (this.nlen = 0),
                      (this.ndist = 0),
                      (this.have = 0),
                      (this.next = null),
                      (this.lens = new k.Buf16(320)),
                      (this.work = new k.Buf16(288)),
                      (this.lendyn = null),
                      (this.distdyn = null),
                      (this.sane = 0),
                      (this.back = 0),
                      (this.was = 0);
                  }
                  function P(_) {
                    var E;
                    return _ && _.state
                      ? ((E = _.state),
                        (_.total_in = _.total_out = E.total = 0),
                        (_.msg = ''),
                        E.wrap && (_.adler = 1 & E.wrap),
                        (E.mode = p),
                        (E.last = 0),
                        (E.havedict = 0),
                        (E.dmax = 32768),
                        (E.head = null),
                        (E.hold = 0),
                        (E.bits = 0),
                        (E.lencode = E.lendyn = new k.Buf32(i)),
                        (E.distcode = E.distdyn = new k.Buf32(f)),
                        (E.sane = 1),
                        (E.back = -1),
                        a)
                      : n;
                  }
                  function C(_) {
                    var E;
                    return _ && _.state
                      ? (((E = _.state).wsize = 0), (E.whave = 0), (E.wnext = 0), P(_))
                      : n;
                  }
                  function s(_, E) {
                    var c, z;
                    return _ && _.state
                      ? ((z = _.state),
                        E < 0 ? ((c = 0), (E = -E)) : ((c = 1 + (E >> 4)), E < 48 && (E &= 15)),
                        E && (E < 8 || 15 < E)
                          ? n
                          : (z.window !== null && z.wbits !== E && (z.window = null),
                            (z.wrap = c),
                            (z.wbits = E),
                            C(_)))
                      : n;
                  }
                  function o(_, E) {
                    var c, z;
                    return _
                      ? ((z = new b()),
                        ((_.state = z).window = null),
                        (c = s(_, E)) !== a && (_.state = null),
                        c)
                      : n;
                  }
                  var r,
                    d,
                    v = !0;
                  function S(_) {
                    if (v) {
                      var E;
                      for (r = new k.Buf32(512), d = new k.Buf32(32), E = 0; E < 144; )
                        _.lens[E++] = 8;
                      for (; E < 256; ) _.lens[E++] = 9;
                      for (; E < 280; ) _.lens[E++] = 7;
                      for (; E < 288; ) _.lens[E++] = 8;
                      for (t(g, _.lens, 0, 288, r, 0, _.work, { bits: 9 }), E = 0; E < 32; )
                        _.lens[E++] = 5;
                      t(m, _.lens, 0, 32, d, 0, _.work, { bits: 5 }), (v = !1);
                    }
                    (_.lencode = r), (_.lenbits = 9), (_.distcode = d), (_.distbits = 5);
                  }
                  function D(_, E, c, z) {
                    var q,
                      L = _.state;
                    return (
                      L.window === null &&
                        ((L.wsize = 1 << L.wbits),
                        (L.wnext = 0),
                        (L.whave = 0),
                        (L.window = new k.Buf8(L.wsize))),
                      z >= L.wsize
                        ? (k.arraySet(L.window, E, c - L.wsize, L.wsize, 0),
                          (L.wnext = 0),
                          (L.whave = L.wsize))
                        : (z < (q = L.wsize - L.wnext) && (q = z),
                          k.arraySet(L.window, E, c - z, q, L.wnext),
                          (z -= q)
                            ? (k.arraySet(L.window, E, c - z, z, 0),
                              (L.wnext = z),
                              (L.whave = L.wsize))
                            : ((L.wnext += q),
                              L.wnext === L.wsize && (L.wnext = 0),
                              L.whave < L.wsize && (L.whave += q))),
                      0
                    );
                  }
                  (T.inflateReset = C),
                    (T.inflateReset2 = s),
                    (T.inflateResetKeep = P),
                    (T.inflateInit = function (_) {
                      return o(_, 15);
                    }),
                    (T.inflateInit2 = o),
                    (T.inflate = function (_, E) {
                      var c,
                        z,
                        q,
                        L,
                        J,
                        $,
                        te,
                        F,
                        O,
                        ee,
                        K,
                        Z,
                        ie,
                        pe,
                        re,
                        ne,
                        fe,
                        oe,
                        Se,
                        we,
                        h,
                        M,
                        I,
                        A,
                        x = 0,
                        N = new k.Buf8(4),
                        j = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
                      if (!_ || !_.state || !_.output || (!_.input && _.avail_in !== 0)) return n;
                      (c = _.state).mode === 12 && (c.mode = 13),
                        (J = _.next_out),
                        (q = _.output),
                        (te = _.avail_out),
                        (L = _.next_in),
                        (z = _.input),
                        ($ = _.avail_in),
                        (F = c.hold),
                        (O = c.bits),
                        (ee = $),
                        (K = te),
                        (M = a);
                      e: for (;;)
                        switch (c.mode) {
                          case p:
                            if (c.wrap === 0) {
                              c.mode = 13;
                              break;
                            }
                            for (; O < 16; ) {
                              if ($ === 0) break e;
                              $--, (F += z[L++] << O), (O += 8);
                            }
                            if (2 & c.wrap && F === 35615) {
                              (N[(c.check = 0)] = 255 & F),
                                (N[1] = (F >>> 8) & 255),
                                (c.check = e(c.check, N, 2, 0)),
                                (O = F = 0),
                                (c.mode = 2);
                              break;
                            }
                            if (
                              ((c.flags = 0),
                              c.head && (c.head.done = !1),
                              !(1 & c.wrap) || (((255 & F) << 8) + (F >> 8)) % 31)
                            ) {
                              (_.msg = 'incorrect header check'), (c.mode = 30);
                              break;
                            }
                            if ((15 & F) != 8) {
                              (_.msg = 'unknown compression method'), (c.mode = 30);
                              break;
                            }
                            if (((O -= 4), (h = 8 + (15 & (F >>>= 4))), c.wbits === 0)) c.wbits = h;
                            else if (h > c.wbits) {
                              (_.msg = 'invalid window size'), (c.mode = 30);
                              break;
                            }
                            (c.dmax = 1 << h),
                              (_.adler = c.check = 1),
                              (c.mode = 512 & F ? 10 : 12),
                              (O = F = 0);
                            break;
                          case 2:
                            for (; O < 16; ) {
                              if ($ === 0) break e;
                              $--, (F += z[L++] << O), (O += 8);
                            }
                            if (((c.flags = F), (255 & c.flags) != 8)) {
                              (_.msg = 'unknown compression method'), (c.mode = 30);
                              break;
                            }
                            if (57344 & c.flags) {
                              (_.msg = 'unknown header flags set'), (c.mode = 30);
                              break;
                            }
                            c.head && (c.head.text = (F >> 8) & 1),
                              512 & c.flags &&
                                ((N[0] = 255 & F),
                                (N[1] = (F >>> 8) & 255),
                                (c.check = e(c.check, N, 2, 0))),
                              (O = F = 0),
                              (c.mode = 3);
                          case 3:
                            for (; O < 32; ) {
                              if ($ === 0) break e;
                              $--, (F += z[L++] << O), (O += 8);
                            }
                            c.head && (c.head.time = F),
                              512 & c.flags &&
                                ((N[0] = 255 & F),
                                (N[1] = (F >>> 8) & 255),
                                (N[2] = (F >>> 16) & 255),
                                (N[3] = (F >>> 24) & 255),
                                (c.check = e(c.check, N, 4, 0))),
                              (O = F = 0),
                              (c.mode = 4);
                          case 4:
                            for (; O < 16; ) {
                              if ($ === 0) break e;
                              $--, (F += z[L++] << O), (O += 8);
                            }
                            c.head && ((c.head.xflags = 255 & F), (c.head.os = F >> 8)),
                              512 & c.flags &&
                                ((N[0] = 255 & F),
                                (N[1] = (F >>> 8) & 255),
                                (c.check = e(c.check, N, 2, 0))),
                              (O = F = 0),
                              (c.mode = 5);
                          case 5:
                            if (1024 & c.flags) {
                              for (; O < 16; ) {
                                if ($ === 0) break e;
                                $--, (F += z[L++] << O), (O += 8);
                              }
                              (c.length = F),
                                c.head && (c.head.extra_len = F),
                                512 & c.flags &&
                                  ((N[0] = 255 & F),
                                  (N[1] = (F >>> 8) & 255),
                                  (c.check = e(c.check, N, 2, 0))),
                                (O = F = 0);
                            } else c.head && (c.head.extra = null);
                            c.mode = 6;
                          case 6:
                            if (
                              1024 & c.flags &&
                              ($ < (Z = c.length) && (Z = $),
                              Z &&
                                (c.head &&
                                  ((h = c.head.extra_len - c.length),
                                  c.head.extra || (c.head.extra = new Array(c.head.extra_len)),
                                  k.arraySet(c.head.extra, z, L, Z, h)),
                                512 & c.flags && (c.check = e(c.check, z, Z, L)),
                                ($ -= Z),
                                (L += Z),
                                (c.length -= Z)),
                              c.length)
                            )
                              break e;
                            (c.length = 0), (c.mode = 7);
                          case 7:
                            if (2048 & c.flags) {
                              if ($ === 0) break e;
                              for (
                                Z = 0;
                                (h = z[L + Z++]),
                                  c.head &&
                                    h &&
                                    c.length < 65536 &&
                                    (c.head.name += String.fromCharCode(h)),
                                  h && Z < $;

                              );
                              if (
                                (512 & c.flags && (c.check = e(c.check, z, Z, L)),
                                ($ -= Z),
                                (L += Z),
                                h)
                              )
                                break e;
                            } else c.head && (c.head.name = null);
                            (c.length = 0), (c.mode = 8);
                          case 8:
                            if (4096 & c.flags) {
                              if ($ === 0) break e;
                              for (
                                Z = 0;
                                (h = z[L + Z++]),
                                  c.head &&
                                    h &&
                                    c.length < 65536 &&
                                    (c.head.comment += String.fromCharCode(h)),
                                  h && Z < $;

                              );
                              if (
                                (512 & c.flags && (c.check = e(c.check, z, Z, L)),
                                ($ -= Z),
                                (L += Z),
                                h)
                              )
                                break e;
                            } else c.head && (c.head.comment = null);
                            c.mode = 9;
                          case 9:
                            if (512 & c.flags) {
                              for (; O < 16; ) {
                                if ($ === 0) break e;
                                $--, (F += z[L++] << O), (O += 8);
                              }
                              if (F !== (65535 & c.check)) {
                                (_.msg = 'header crc mismatch'), (c.mode = 30);
                                break;
                              }
                              O = F = 0;
                            }
                            c.head && ((c.head.hcrc = (c.flags >> 9) & 1), (c.head.done = !0)),
                              (_.adler = c.check = 0),
                              (c.mode = 12);
                            break;
                          case 10:
                            for (; O < 32; ) {
                              if ($ === 0) break e;
                              $--, (F += z[L++] << O), (O += 8);
                            }
                            (_.adler = c.check = u(F)), (O = F = 0), (c.mode = 11);
                          case 11:
                            if (c.havedict === 0)
                              return (
                                (_.next_out = J),
                                (_.avail_out = te),
                                (_.next_in = L),
                                (_.avail_in = $),
                                (c.hold = F),
                                (c.bits = O),
                                2
                              );
                            (_.adler = c.check = 1), (c.mode = 12);
                          case 12:
                            if (E === 5 || E === 6) break e;
                          case 13:
                            if (c.last) {
                              (F >>>= 7 & O), (O -= 7 & O), (c.mode = 27);
                              break;
                            }
                            for (; O < 3; ) {
                              if ($ === 0) break e;
                              $--, (F += z[L++] << O), (O += 8);
                            }
                            switch (((c.last = 1 & F), (O -= 1), 3 & (F >>>= 1))) {
                              case 0:
                                c.mode = 14;
                                break;
                              case 1:
                                if ((S(c), (c.mode = 20), E !== 6)) break;
                                (F >>>= 2), (O -= 2);
                                break e;
                              case 2:
                                c.mode = 17;
                                break;
                              case 3:
                                (_.msg = 'invalid block type'), (c.mode = 30);
                            }
                            (F >>>= 2), (O -= 2);
                            break;
                          case 14:
                            for (F >>>= 7 & O, O -= 7 & O; O < 32; ) {
                              if ($ === 0) break e;
                              $--, (F += z[L++] << O), (O += 8);
                            }
                            if ((65535 & F) != ((F >>> 16) ^ 65535)) {
                              (_.msg = 'invalid stored block lengths'), (c.mode = 30);
                              break;
                            }
                            if (((c.length = 65535 & F), (O = F = 0), (c.mode = 15), E === 6))
                              break e;
                          case 15:
                            c.mode = 16;
                          case 16:
                            if ((Z = c.length)) {
                              if (($ < Z && (Z = $), te < Z && (Z = te), Z === 0)) break e;
                              k.arraySet(q, z, L, Z, J),
                                ($ -= Z),
                                (L += Z),
                                (te -= Z),
                                (J += Z),
                                (c.length -= Z);
                              break;
                            }
                            c.mode = 12;
                            break;
                          case 17:
                            for (; O < 14; ) {
                              if ($ === 0) break e;
                              $--, (F += z[L++] << O), (O += 8);
                            }
                            if (
                              ((c.nlen = 257 + (31 & F)),
                              (F >>>= 5),
                              (O -= 5),
                              (c.ndist = 1 + (31 & F)),
                              (F >>>= 5),
                              (O -= 5),
                              (c.ncode = 4 + (15 & F)),
                              (F >>>= 4),
                              (O -= 4),
                              286 < c.nlen || 30 < c.ndist)
                            ) {
                              (_.msg = 'too many length or distance symbols'), (c.mode = 30);
                              break;
                            }
                            (c.have = 0), (c.mode = 18);
                          case 18:
                            for (; c.have < c.ncode; ) {
                              for (; O < 3; ) {
                                if ($ === 0) break e;
                                $--, (F += z[L++] << O), (O += 8);
                              }
                              (c.lens[j[c.have++]] = 7 & F), (F >>>= 3), (O -= 3);
                            }
                            for (; c.have < 19; ) c.lens[j[c.have++]] = 0;
                            if (
                              ((c.lencode = c.lendyn),
                              (c.lenbits = 7),
                              (I = { bits: c.lenbits }),
                              (M = t(0, c.lens, 0, 19, c.lencode, 0, c.work, I)),
                              (c.lenbits = I.bits),
                              M)
                            ) {
                              (_.msg = 'invalid code lengths set'), (c.mode = 30);
                              break;
                            }
                            (c.have = 0), (c.mode = 19);
                          case 19:
                            for (; c.have < c.nlen + c.ndist; ) {
                              for (
                                ;
                                (ne = ((x = c.lencode[F & ((1 << c.lenbits) - 1)]) >>> 16) & 255),
                                  (fe = 65535 & x),
                                  !((re = x >>> 24) <= O);

                              ) {
                                if ($ === 0) break e;
                                $--, (F += z[L++] << O), (O += 8);
                              }
                              if (fe < 16) (F >>>= re), (O -= re), (c.lens[c.have++] = fe);
                              else {
                                if (fe === 16) {
                                  for (A = re + 2; O < A; ) {
                                    if ($ === 0) break e;
                                    $--, (F += z[L++] << O), (O += 8);
                                  }
                                  if (((F >>>= re), (O -= re), c.have === 0)) {
                                    (_.msg = 'invalid bit length repeat'), (c.mode = 30);
                                    break;
                                  }
                                  (h = c.lens[c.have - 1]), (Z = 3 + (3 & F)), (F >>>= 2), (O -= 2);
                                } else if (fe === 17) {
                                  for (A = re + 3; O < A; ) {
                                    if ($ === 0) break e;
                                    $--, (F += z[L++] << O), (O += 8);
                                  }
                                  (O -= re),
                                    (h = 0),
                                    (Z = 3 + (7 & (F >>>= re))),
                                    (F >>>= 3),
                                    (O -= 3);
                                } else {
                                  for (A = re + 7; O < A; ) {
                                    if ($ === 0) break e;
                                    $--, (F += z[L++] << O), (O += 8);
                                  }
                                  (O -= re),
                                    (h = 0),
                                    (Z = 11 + (127 & (F >>>= re))),
                                    (F >>>= 7),
                                    (O -= 7);
                                }
                                if (c.have + Z > c.nlen + c.ndist) {
                                  (_.msg = 'invalid bit length repeat'), (c.mode = 30);
                                  break;
                                }
                                for (; Z--; ) c.lens[c.have++] = h;
                              }
                            }
                            if (c.mode === 30) break;
                            if (c.lens[256] === 0) {
                              (_.msg = 'invalid code -- missing end-of-block'), (c.mode = 30);
                              break;
                            }
                            if (
                              ((c.lenbits = 9),
                              (I = { bits: c.lenbits }),
                              (M = t(g, c.lens, 0, c.nlen, c.lencode, 0, c.work, I)),
                              (c.lenbits = I.bits),
                              M)
                            ) {
                              (_.msg = 'invalid literal/lengths set'), (c.mode = 30);
                              break;
                            }
                            if (
                              ((c.distbits = 6),
                              (c.distcode = c.distdyn),
                              (I = { bits: c.distbits }),
                              (M = t(m, c.lens, c.nlen, c.ndist, c.distcode, 0, c.work, I)),
                              (c.distbits = I.bits),
                              M)
                            ) {
                              (_.msg = 'invalid distances set'), (c.mode = 30);
                              break;
                            }
                            if (((c.mode = 20), E === 6)) break e;
                          case 20:
                            c.mode = 21;
                          case 21:
                            if (6 <= $ && 258 <= te) {
                              (_.next_out = J),
                                (_.avail_out = te),
                                (_.next_in = L),
                                (_.avail_in = $),
                                (c.hold = F),
                                (c.bits = O),
                                l(_, K),
                                (J = _.next_out),
                                (q = _.output),
                                (te = _.avail_out),
                                (L = _.next_in),
                                (z = _.input),
                                ($ = _.avail_in),
                                (F = c.hold),
                                (O = c.bits),
                                c.mode === 12 && (c.back = -1);
                              break;
                            }
                            for (
                              c.back = 0;
                              (ne = ((x = c.lencode[F & ((1 << c.lenbits) - 1)]) >>> 16) & 255),
                                (fe = 65535 & x),
                                !((re = x >>> 24) <= O);

                            ) {
                              if ($ === 0) break e;
                              $--, (F += z[L++] << O), (O += 8);
                            }
                            if (ne && !(240 & ne)) {
                              for (
                                oe = re, Se = ne, we = fe;
                                (ne =
                                  ((x = c.lencode[we + ((F & ((1 << (oe + Se)) - 1)) >> oe)]) >>>
                                    16) &
                                  255),
                                  (fe = 65535 & x),
                                  !(oe + (re = x >>> 24) <= O);

                              ) {
                                if ($ === 0) break e;
                                $--, (F += z[L++] << O), (O += 8);
                              }
                              (F >>>= oe), (O -= oe), (c.back += oe);
                            }
                            if (
                              ((F >>>= re), (O -= re), (c.back += re), (c.length = fe), ne === 0)
                            ) {
                              c.mode = 26;
                              break;
                            }
                            if (32 & ne) {
                              (c.back = -1), (c.mode = 12);
                              break;
                            }
                            if (64 & ne) {
                              (_.msg = 'invalid literal/length code'), (c.mode = 30);
                              break;
                            }
                            (c.extra = 15 & ne), (c.mode = 22);
                          case 22:
                            if (c.extra) {
                              for (A = c.extra; O < A; ) {
                                if ($ === 0) break e;
                                $--, (F += z[L++] << O), (O += 8);
                              }
                              (c.length += F & ((1 << c.extra) - 1)),
                                (F >>>= c.extra),
                                (O -= c.extra),
                                (c.back += c.extra);
                            }
                            (c.was = c.length), (c.mode = 23);
                          case 23:
                            for (
                              ;
                              (ne = ((x = c.distcode[F & ((1 << c.distbits) - 1)]) >>> 16) & 255),
                                (fe = 65535 & x),
                                !((re = x >>> 24) <= O);

                            ) {
                              if ($ === 0) break e;
                              $--, (F += z[L++] << O), (O += 8);
                            }
                            if (!(240 & ne)) {
                              for (
                                oe = re, Se = ne, we = fe;
                                (ne =
                                  ((x = c.distcode[we + ((F & ((1 << (oe + Se)) - 1)) >> oe)]) >>>
                                    16) &
                                  255),
                                  (fe = 65535 & x),
                                  !(oe + (re = x >>> 24) <= O);

                              ) {
                                if ($ === 0) break e;
                                $--, (F += z[L++] << O), (O += 8);
                              }
                              (F >>>= oe), (O -= oe), (c.back += oe);
                            }
                            if (((F >>>= re), (O -= re), (c.back += re), 64 & ne)) {
                              (_.msg = 'invalid distance code'), (c.mode = 30);
                              break;
                            }
                            (c.offset = fe), (c.extra = 15 & ne), (c.mode = 24);
                          case 24:
                            if (c.extra) {
                              for (A = c.extra; O < A; ) {
                                if ($ === 0) break e;
                                $--, (F += z[L++] << O), (O += 8);
                              }
                              (c.offset += F & ((1 << c.extra) - 1)),
                                (F >>>= c.extra),
                                (O -= c.extra),
                                (c.back += c.extra);
                            }
                            if (c.offset > c.dmax) {
                              (_.msg = 'invalid distance too far back'), (c.mode = 30);
                              break;
                            }
                            c.mode = 25;
                          case 25:
                            if (te === 0) break e;
                            if (((Z = K - te), c.offset > Z)) {
                              if ((Z = c.offset - Z) > c.whave && c.sane) {
                                (_.msg = 'invalid distance too far back'), (c.mode = 30);
                                break;
                              }
                              (ie = Z > c.wnext ? ((Z -= c.wnext), c.wsize - Z) : c.wnext - Z),
                                Z > c.length && (Z = c.length),
                                (pe = c.window);
                            } else (pe = q), (ie = J - c.offset), (Z = c.length);
                            for (
                              te < Z && (Z = te), te -= Z, c.length -= Z;
                              (q[J++] = pe[ie++]), --Z;

                            );
                            c.length === 0 && (c.mode = 21);
                            break;
                          case 26:
                            if (te === 0) break e;
                            (q[J++] = c.length), te--, (c.mode = 21);
                            break;
                          case 27:
                            if (c.wrap) {
                              for (; O < 32; ) {
                                if ($ === 0) break e;
                                $--, (F |= z[L++] << O), (O += 8);
                              }
                              if (
                                ((K -= te),
                                (_.total_out += K),
                                (c.total += K),
                                K &&
                                  (_.adler = c.check =
                                    c.flags ? e(c.check, q, K, J - K) : y(c.check, q, K, J - K)),
                                (K = te),
                                (c.flags ? F : u(F)) !== c.check)
                              ) {
                                (_.msg = 'incorrect data check'), (c.mode = 30);
                                break;
                              }
                              O = F = 0;
                            }
                            c.mode = 28;
                          case 28:
                            if (c.wrap && c.flags) {
                              for (; O < 32; ) {
                                if ($ === 0) break e;
                                $--, (F += z[L++] << O), (O += 8);
                              }
                              if (F !== (4294967295 & c.total)) {
                                (_.msg = 'incorrect length check'), (c.mode = 30);
                                break;
                              }
                              O = F = 0;
                            }
                            c.mode = 29;
                          case 29:
                            M = 1;
                            break e;
                          case 30:
                            M = -3;
                            break e;
                          case 31:
                            return -4;
                          case 32:
                          default:
                            return n;
                        }
                      return (
                        (_.next_out = J),
                        (_.avail_out = te),
                        (_.next_in = L),
                        (_.avail_in = $),
                        (c.hold = F),
                        (c.bits = O),
                        (c.wsize ||
                          (K !== _.avail_out && c.mode < 30 && (c.mode < 27 || E !== 4))) &&
                        D(_, _.output, _.next_out, K - _.avail_out)
                          ? ((c.mode = 31), -4)
                          : ((ee -= _.avail_in),
                            (K -= _.avail_out),
                            (_.total_in += ee),
                            (_.total_out += K),
                            (c.total += K),
                            c.wrap &&
                              K &&
                              (_.adler = c.check =
                                c.flags
                                  ? e(c.check, q, K, _.next_out - K)
                                  : y(c.check, q, K, _.next_out - K)),
                            (_.data_type =
                              c.bits +
                              (c.last ? 64 : 0) +
                              (c.mode === 12 ? 128 : 0) +
                              (c.mode === 20 || c.mode === 15 ? 256 : 0)),
                            ((ee == 0 && K === 0) || E === 4) && M === a && (M = -5),
                            M)
                      );
                    }),
                    (T.inflateEnd = function (_) {
                      if (!_ || !_.state) return n;
                      var E = _.state;
                      return E.window && (E.window = null), (_.state = null), a;
                    }),
                    (T.inflateGetHeader = function (_, E) {
                      var c;
                      return _ && _.state && 2 & (c = _.state).wrap
                        ? (((c.head = E).done = !1), a)
                        : n;
                    }),
                    (T.inflateSetDictionary = function (_, E) {
                      var c,
                        z = E.length;
                      return _ && _.state
                        ? (c = _.state).wrap !== 0 && c.mode !== 11
                          ? n
                          : c.mode === 11 && y(1, E, z, 0) !== c.check
                          ? -3
                          : D(_, E, z, z)
                          ? ((c.mode = 31), -4)
                          : ((c.havedict = 1), a)
                        : n;
                    }),
                    (T.inflateInfo = 'pako inflate (from Nodeca project)');
                },
                {
                  '../utils/common': 41,
                  './adler32': 43,
                  './crc32': 45,
                  './inffast': 48,
                  './inftrees': 50,
                },
              ],
              50: [
                function (w, B, T) {
                  var k = w('../utils/common'),
                    y = [
                      3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67,
                      83, 99, 115, 131, 163, 195, 227, 258, 0, 0,
                    ],
                    e = [
                      16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19,
                      19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78,
                    ],
                    l = [
                      1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769,
                      1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0,
                    ],
                    t = [
                      16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24,
                      24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64,
                    ];
                  B.exports = function (g, m, a, n, p, i, f, u) {
                    var b,
                      P,
                      C,
                      s,
                      o,
                      r,
                      d,
                      v,
                      S,
                      D = u.bits,
                      _ = 0,
                      E = 0,
                      c = 0,
                      z = 0,
                      q = 0,
                      L = 0,
                      J = 0,
                      $ = 0,
                      te = 0,
                      F = 0,
                      O = null,
                      ee = 0,
                      K = new k.Buf16(16),
                      Z = new k.Buf16(16),
                      ie = null,
                      pe = 0;
                    for (_ = 0; _ <= 15; _++) K[_] = 0;
                    for (E = 0; E < n; E++) K[m[a + E]]++;
                    for (q = D, z = 15; 1 <= z && K[z] === 0; z--);
                    if ((z < q && (q = z), z === 0))
                      return (p[i++] = 20971520), (p[i++] = 20971520), (u.bits = 1), 0;
                    for (c = 1; c < z && K[c] === 0; c++);
                    for (q < c && (q = c), _ = $ = 1; _ <= 15; _++)
                      if ((($ <<= 1), ($ -= K[_]) < 0)) return -1;
                    if (0 < $ && (g === 0 || z !== 1)) return -1;
                    for (Z[1] = 0, _ = 1; _ < 15; _++) Z[_ + 1] = Z[_] + K[_];
                    for (E = 0; E < n; E++) m[a + E] !== 0 && (f[Z[m[a + E]]++] = E);
                    if (
                      ((r =
                        g === 0
                          ? ((O = ie = f), 19)
                          : g === 1
                          ? ((O = y), (ee -= 257), (ie = e), (pe -= 257), 256)
                          : ((O = l), (ie = t), -1)),
                      (_ = c),
                      (o = i),
                      (J = E = F = 0),
                      (C = -1),
                      (s = (te = 1 << (L = q)) - 1),
                      (g === 1 && 852 < te) || (g === 2 && 592 < te))
                    )
                      return 1;
                    for (;;) {
                      for (
                        d = _ - J,
                          S =
                            f[E] < r
                              ? ((v = 0), f[E])
                              : f[E] > r
                              ? ((v = ie[pe + f[E]]), O[ee + f[E]])
                              : ((v = 96), 0),
                          b = 1 << (_ - J),
                          c = P = 1 << L;
                        (p[o + (F >> J) + (P -= b)] = (d << 24) | (v << 16) | S | 0), P !== 0;

                      );
                      for (b = 1 << (_ - 1); F & b; ) b >>= 1;
                      if ((b !== 0 ? ((F &= b - 1), (F += b)) : (F = 0), E++, --K[_] == 0)) {
                        if (_ === z) break;
                        _ = m[a + f[E]];
                      }
                      if (q < _ && (F & s) !== C) {
                        for (
                          J === 0 && (J = q), o += c, $ = 1 << (L = _ - J);
                          L + J < z && !(($ -= K[L + J]) <= 0);

                        )
                          L++, ($ <<= 1);
                        if (((te += 1 << L), (g === 1 && 852 < te) || (g === 2 && 592 < te)))
                          return 1;
                        p[(C = F & s)] = (q << 24) | (L << 16) | (o - i) | 0;
                      }
                    }
                    return (
                      F !== 0 && (p[o + F] = ((_ - J) << 24) | (64 << 16) | 0), (u.bits = q), 0
                    );
                  };
                },
                { '../utils/common': 41 },
              ],
              51: [
                function (w, B, T) {
                  B.exports = {
                    2: 'need dictionary',
                    1: 'stream end',
                    0: '',
                    '-1': 'file error',
                    '-2': 'stream error',
                    '-3': 'data error',
                    '-4': 'insufficient memory',
                    '-5': 'buffer error',
                    '-6': 'incompatible version',
                  };
                },
                {},
              ],
              52: [
                function (w, B, T) {
                  var k = w('../utils/common'),
                    y = 0,
                    e = 1;
                  function l(x) {
                    for (var N = x.length; 0 <= --N; ) x[N] = 0;
                  }
                  var t = 0,
                    g = 29,
                    m = 256,
                    a = m + 1 + g,
                    n = 30,
                    p = 19,
                    i = 2 * a + 1,
                    f = 15,
                    u = 16,
                    b = 7,
                    P = 256,
                    C = 16,
                    s = 17,
                    o = 18,
                    r = [
                      0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5,
                      5, 5, 0,
                    ],
                    d = [
                      0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11,
                      11, 12, 12, 13, 13,
                    ],
                    v = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
                    S = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
                    D = new Array(2 * (a + 2));
                  l(D);
                  var _ = new Array(2 * n);
                  l(_);
                  var E = new Array(512);
                  l(E);
                  var c = new Array(256);
                  l(c);
                  var z = new Array(g);
                  l(z);
                  var q,
                    L,
                    J,
                    $ = new Array(n);
                  function te(x, N, j, U, R) {
                    (this.static_tree = x),
                      (this.extra_bits = N),
                      (this.extra_base = j),
                      (this.elems = U),
                      (this.max_length = R),
                      (this.has_stree = x && x.length);
                  }
                  function F(x, N) {
                    (this.dyn_tree = x), (this.max_code = 0), (this.stat_desc = N);
                  }
                  function O(x) {
                    return x < 256 ? E[x] : E[256 + (x >>> 7)];
                  }
                  function ee(x, N) {
                    (x.pending_buf[x.pending++] = 255 & N),
                      (x.pending_buf[x.pending++] = (N >>> 8) & 255);
                  }
                  function K(x, N, j) {
                    x.bi_valid > u - j
                      ? ((x.bi_buf |= (N << x.bi_valid) & 65535),
                        ee(x, x.bi_buf),
                        (x.bi_buf = N >> (u - x.bi_valid)),
                        (x.bi_valid += j - u))
                      : ((x.bi_buf |= (N << x.bi_valid) & 65535), (x.bi_valid += j));
                  }
                  function Z(x, N, j) {
                    K(x, j[2 * N], j[2 * N + 1]);
                  }
                  function ie(x, N) {
                    for (var j = 0; (j |= 1 & x), (x >>>= 1), (j <<= 1), 0 < --N; );
                    return j >>> 1;
                  }
                  function pe(x, N, j) {
                    var U,
                      R,
                      W = new Array(f + 1),
                      Y = 0;
                    for (U = 1; U <= f; U++) W[U] = Y = (Y + j[U - 1]) << 1;
                    for (R = 0; R <= N; R++) {
                      var H = x[2 * R + 1];
                      H !== 0 && (x[2 * R] = ie(W[H]++, H));
                    }
                  }
                  function re(x) {
                    var N;
                    for (N = 0; N < a; N++) x.dyn_ltree[2 * N] = 0;
                    for (N = 0; N < n; N++) x.dyn_dtree[2 * N] = 0;
                    for (N = 0; N < p; N++) x.bl_tree[2 * N] = 0;
                    (x.dyn_ltree[2 * P] = 1),
                      (x.opt_len = x.static_len = 0),
                      (x.last_lit = x.matches = 0);
                  }
                  function ne(x) {
                    8 < x.bi_valid
                      ? ee(x, x.bi_buf)
                      : 0 < x.bi_valid && (x.pending_buf[x.pending++] = x.bi_buf),
                      (x.bi_buf = 0),
                      (x.bi_valid = 0);
                  }
                  function fe(x, N, j, U) {
                    var R = 2 * N,
                      W = 2 * j;
                    return x[R] < x[W] || (x[R] === x[W] && U[N] <= U[j]);
                  }
                  function oe(x, N, j) {
                    for (
                      var U = x.heap[j], R = j << 1;
                      R <= x.heap_len &&
                      (R < x.heap_len && fe(N, x.heap[R + 1], x.heap[R], x.depth) && R++,
                      !fe(N, U, x.heap[R], x.depth));

                    )
                      (x.heap[j] = x.heap[R]), (j = R), (R <<= 1);
                    x.heap[j] = U;
                  }
                  function Se(x, N, j) {
                    var U,
                      R,
                      W,
                      Y,
                      H = 0;
                    if (x.last_lit !== 0)
                      for (
                        ;
                        (U =
                          (x.pending_buf[x.d_buf + 2 * H] << 8) |
                          x.pending_buf[x.d_buf + 2 * H + 1]),
                          (R = x.pending_buf[x.l_buf + H]),
                          H++,
                          U === 0
                            ? Z(x, R, N)
                            : (Z(x, (W = c[R]) + m + 1, N),
                              (Y = r[W]) !== 0 && K(x, (R -= z[W]), Y),
                              Z(x, (W = O(--U)), j),
                              (Y = d[W]) !== 0 && K(x, (U -= $[W]), Y)),
                          H < x.last_lit;

                      );
                    Z(x, P, N);
                  }
                  function we(x, N) {
                    var j,
                      U,
                      R,
                      W = N.dyn_tree,
                      Y = N.stat_desc.static_tree,
                      H = N.stat_desc.has_stree,
                      Q = N.stat_desc.elems,
                      se = -1;
                    for (x.heap_len = 0, x.heap_max = i, j = 0; j < Q; j++)
                      W[2 * j] !== 0
                        ? ((x.heap[++x.heap_len] = se = j), (x.depth[j] = 0))
                        : (W[2 * j + 1] = 0);
                    for (; x.heap_len < 2; )
                      (W[2 * (R = x.heap[++x.heap_len] = se < 2 ? ++se : 0)] = 1),
                        (x.depth[R] = 0),
                        x.opt_len--,
                        H && (x.static_len -= Y[2 * R + 1]);
                    for (N.max_code = se, j = x.heap_len >> 1; 1 <= j; j--) oe(x, W, j);
                    for (
                      R = Q;
                      (j = x.heap[1]),
                        (x.heap[1] = x.heap[x.heap_len--]),
                        oe(x, W, 1),
                        (U = x.heap[1]),
                        (x.heap[--x.heap_max] = j),
                        (x.heap[--x.heap_max] = U),
                        (W[2 * R] = W[2 * j] + W[2 * U]),
                        (x.depth[R] = (x.depth[j] >= x.depth[U] ? x.depth[j] : x.depth[U]) + 1),
                        (W[2 * j + 1] = W[2 * U + 1] = R),
                        (x.heap[1] = R++),
                        oe(x, W, 1),
                        2 <= x.heap_len;

                    );
                    (x.heap[--x.heap_max] = x.heap[1]),
                      (function (ae, _e) {
                        var Be,
                          Pe,
                          Re,
                          le,
                          Me,
                          Ze,
                          Ae = _e.dyn_tree,
                          Je = _e.max_code,
                          kt = _e.stat_desc.static_tree,
                          wt = _e.stat_desc.has_stree,
                          St = _e.stat_desc.extra_bits,
                          Qe = _e.stat_desc.extra_base,
                          Oe = _e.stat_desc.max_length,
                          Le = 0;
                        for (le = 0; le <= f; le++) ae.bl_count[le] = 0;
                        for (
                          Ae[2 * ae.heap[ae.heap_max] + 1] = 0, Be = ae.heap_max + 1;
                          Be < i;
                          Be++
                        )
                          Oe < (le = Ae[2 * Ae[2 * (Pe = ae.heap[Be]) + 1] + 1] + 1) &&
                            ((le = Oe), Le++),
                            (Ae[2 * Pe + 1] = le),
                            Je < Pe ||
                              (ae.bl_count[le]++,
                              (Me = 0),
                              Qe <= Pe && (Me = St[Pe - Qe]),
                              (Ze = Ae[2 * Pe]),
                              (ae.opt_len += Ze * (le + Me)),
                              wt && (ae.static_len += Ze * (kt[2 * Pe + 1] + Me)));
                        if (Le !== 0) {
                          do {
                            for (le = Oe - 1; ae.bl_count[le] === 0; ) le--;
                            ae.bl_count[le]--,
                              (ae.bl_count[le + 1] += 2),
                              ae.bl_count[Oe]--,
                              (Le -= 2);
                          } while (0 < Le);
                          for (le = Oe; le !== 0; le--)
                            for (Pe = ae.bl_count[le]; Pe !== 0; )
                              Je < (Re = ae.heap[--Be]) ||
                                (Ae[2 * Re + 1] !== le &&
                                  ((ae.opt_len += (le - Ae[2 * Re + 1]) * Ae[2 * Re]),
                                  (Ae[2 * Re + 1] = le)),
                                Pe--);
                        }
                      })(x, N),
                      pe(W, se, x.bl_count);
                  }
                  function h(x, N, j) {
                    var U,
                      R,
                      W = -1,
                      Y = N[1],
                      H = 0,
                      Q = 7,
                      se = 4;
                    for (
                      Y === 0 && ((Q = 138), (se = 3)), N[2 * (j + 1) + 1] = 65535, U = 0;
                      U <= j;
                      U++
                    )
                      (R = Y),
                        (Y = N[2 * (U + 1) + 1]),
                        (++H < Q && R === Y) ||
                          (H < se
                            ? (x.bl_tree[2 * R] += H)
                            : R !== 0
                            ? (R !== W && x.bl_tree[2 * R]++, x.bl_tree[2 * C]++)
                            : H <= 10
                            ? x.bl_tree[2 * s]++
                            : x.bl_tree[2 * o]++,
                          (W = R),
                          (se =
                            (H = 0) === Y
                              ? ((Q = 138), 3)
                              : R === Y
                              ? ((Q = 6), 3)
                              : ((Q = 7), 4)));
                  }
                  function M(x, N, j) {
                    var U,
                      R,
                      W = -1,
                      Y = N[1],
                      H = 0,
                      Q = 7,
                      se = 4;
                    for (Y === 0 && ((Q = 138), (se = 3)), U = 0; U <= j; U++)
                      if (((R = Y), (Y = N[2 * (U + 1) + 1]), !(++H < Q && R === Y))) {
                        if (H < se) for (; Z(x, R, x.bl_tree), --H != 0; );
                        else
                          R !== 0
                            ? (R !== W && (Z(x, R, x.bl_tree), H--),
                              Z(x, C, x.bl_tree),
                              K(x, H - 3, 2))
                            : H <= 10
                            ? (Z(x, s, x.bl_tree), K(x, H - 3, 3))
                            : (Z(x, o, x.bl_tree), K(x, H - 11, 7));
                        (W = R),
                          (se =
                            (H = 0) === Y ? ((Q = 138), 3) : R === Y ? ((Q = 6), 3) : ((Q = 7), 4));
                      }
                  }
                  l($);
                  var I = !1;
                  function A(x, N, j, U) {
                    K(x, (t << 1) + (U ? 1 : 0), 3),
                      (function (R, W, Y, H) {
                        ne(R),
                          H && (ee(R, Y), ee(R, ~Y)),
                          k.arraySet(R.pending_buf, R.window, W, Y, R.pending),
                          (R.pending += Y);
                      })(x, N, j, !0);
                  }
                  (T._tr_init = function (x) {
                    I ||
                      ((function () {
                        var N,
                          j,
                          U,
                          R,
                          W,
                          Y = new Array(f + 1);
                        for (R = U = 0; R < g - 1; R++)
                          for (z[R] = U, N = 0; N < 1 << r[R]; N++) c[U++] = R;
                        for (c[U - 1] = R, R = W = 0; R < 16; R++)
                          for ($[R] = W, N = 0; N < 1 << d[R]; N++) E[W++] = R;
                        for (W >>= 7; R < n; R++)
                          for ($[R] = W << 7, N = 0; N < 1 << (d[R] - 7); N++) E[256 + W++] = R;
                        for (j = 0; j <= f; j++) Y[j] = 0;
                        for (N = 0; N <= 143; ) (D[2 * N + 1] = 8), N++, Y[8]++;
                        for (; N <= 255; ) (D[2 * N + 1] = 9), N++, Y[9]++;
                        for (; N <= 279; ) (D[2 * N + 1] = 7), N++, Y[7]++;
                        for (; N <= 287; ) (D[2 * N + 1] = 8), N++, Y[8]++;
                        for (pe(D, a + 1, Y), N = 0; N < n; N++)
                          (_[2 * N + 1] = 5), (_[2 * N] = ie(N, 5));
                        (q = new te(D, r, m + 1, a, f)),
                          (L = new te(_, d, 0, n, f)),
                          (J = new te(new Array(0), v, 0, p, b));
                      })(),
                      (I = !0)),
                      (x.l_desc = new F(x.dyn_ltree, q)),
                      (x.d_desc = new F(x.dyn_dtree, L)),
                      (x.bl_desc = new F(x.bl_tree, J)),
                      (x.bi_buf = 0),
                      (x.bi_valid = 0),
                      re(x);
                  }),
                    (T._tr_stored_block = A),
                    (T._tr_flush_block = function (x, N, j, U) {
                      var R,
                        W,
                        Y = 0;
                      0 < x.level
                        ? (x.strm.data_type === 2 &&
                            (x.strm.data_type = (function (H) {
                              var Q,
                                se = 4093624447;
                              for (Q = 0; Q <= 31; Q++, se >>>= 1)
                                if (1 & se && H.dyn_ltree[2 * Q] !== 0) return y;
                              if (
                                H.dyn_ltree[18] !== 0 ||
                                H.dyn_ltree[20] !== 0 ||
                                H.dyn_ltree[26] !== 0
                              )
                                return e;
                              for (Q = 32; Q < m; Q++) if (H.dyn_ltree[2 * Q] !== 0) return e;
                              return y;
                            })(x)),
                          we(x, x.l_desc),
                          we(x, x.d_desc),
                          (Y = (function (H) {
                            var Q;
                            for (
                              h(H, H.dyn_ltree, H.l_desc.max_code),
                                h(H, H.dyn_dtree, H.d_desc.max_code),
                                we(H, H.bl_desc),
                                Q = p - 1;
                              3 <= Q && H.bl_tree[2 * S[Q] + 1] === 0;
                              Q--
                            );
                            return (H.opt_len += 3 * (Q + 1) + 5 + 5 + 4), Q;
                          })(x)),
                          (R = (x.opt_len + 3 + 7) >>> 3),
                          (W = (x.static_len + 3 + 7) >>> 3) <= R && (R = W))
                        : (R = W = j + 5),
                        j + 4 <= R && N !== -1
                          ? A(x, N, j, U)
                          : x.strategy === 4 || W === R
                          ? (K(x, 2 + (U ? 1 : 0), 3), Se(x, D, _))
                          : (K(x, 4 + (U ? 1 : 0), 3),
                            (function (H, Q, se, ae) {
                              var _e;
                              for (
                                K(H, Q - 257, 5), K(H, se - 1, 5), K(H, ae - 4, 4), _e = 0;
                                _e < ae;
                                _e++
                              )
                                K(H, H.bl_tree[2 * S[_e] + 1], 3);
                              M(H, H.dyn_ltree, Q - 1), M(H, H.dyn_dtree, se - 1);
                            })(x, x.l_desc.max_code + 1, x.d_desc.max_code + 1, Y + 1),
                            Se(x, x.dyn_ltree, x.dyn_dtree)),
                        re(x),
                        U && ne(x);
                    }),
                    (T._tr_tally = function (x, N, j) {
                      return (
                        (x.pending_buf[x.d_buf + 2 * x.last_lit] = (N >>> 8) & 255),
                        (x.pending_buf[x.d_buf + 2 * x.last_lit + 1] = 255 & N),
                        (x.pending_buf[x.l_buf + x.last_lit] = 255 & j),
                        x.last_lit++,
                        N === 0
                          ? x.dyn_ltree[2 * j]++
                          : (x.matches++,
                            N--,
                            x.dyn_ltree[2 * (c[j] + m + 1)]++,
                            x.dyn_dtree[2 * O(N)]++),
                        x.last_lit === x.lit_bufsize - 1
                      );
                    }),
                    (T._tr_align = function (x) {
                      K(x, 2, 3),
                        Z(x, P, D),
                        (function (N) {
                          N.bi_valid === 16
                            ? (ee(N, N.bi_buf), (N.bi_buf = 0), (N.bi_valid = 0))
                            : 8 <= N.bi_valid &&
                              ((N.pending_buf[N.pending++] = 255 & N.bi_buf),
                              (N.bi_buf >>= 8),
                              (N.bi_valid -= 8));
                        })(x);
                    });
                },
                { '../utils/common': 41 },
              ],
              53: [
                function (w, B, T) {
                  B.exports = function () {
                    (this.input = null),
                      (this.next_in = 0),
                      (this.avail_in = 0),
                      (this.total_in = 0),
                      (this.output = null),
                      (this.next_out = 0),
                      (this.avail_out = 0),
                      (this.total_out = 0),
                      (this.msg = ''),
                      (this.state = null),
                      (this.data_type = 2),
                      (this.adler = 0);
                  };
                },
                {},
              ],
              54: [
                function (w, B, T) {
                  (function (k) {
                    (function (y, e) {
                      if (!y.setImmediate) {
                        var l,
                          t,
                          g,
                          m,
                          a = 1,
                          n = {},
                          p = !1,
                          i = y.document,
                          f = Object.getPrototypeOf && Object.getPrototypeOf(y);
                        (f = f && f.setTimeout ? f : y),
                          (l =
                            {}.toString.call(y.process) === '[object process]'
                              ? function (C) {
                                  process.nextTick(function () {
                                    b(C);
                                  });
                                }
                              : (function () {
                                  if (y.postMessage && !y.importScripts) {
                                    var C = !0,
                                      s = y.onmessage;
                                    return (
                                      (y.onmessage = function () {
                                        C = !1;
                                      }),
                                      y.postMessage('', '*'),
                                      (y.onmessage = s),
                                      C
                                    );
                                  }
                                })()
                              ? ((m = 'setImmediate$' + Math.random() + '$'),
                                y.addEventListener
                                  ? y.addEventListener('message', P, !1)
                                  : y.attachEvent('onmessage', P),
                                function (C) {
                                  y.postMessage(m + C, '*');
                                })
                              : y.MessageChannel
                              ? (((g = new MessageChannel()).port1.onmessage = function (C) {
                                  b(C.data);
                                }),
                                function (C) {
                                  g.port2.postMessage(C);
                                })
                              : i && 'onreadystatechange' in i.createElement('script')
                              ? ((t = i.documentElement),
                                function (C) {
                                  var s = i.createElement('script');
                                  (s.onreadystatechange = function () {
                                    b(C),
                                      (s.onreadystatechange = null),
                                      t.removeChild(s),
                                      (s = null);
                                  }),
                                    t.appendChild(s);
                                })
                              : function (C) {
                                  setTimeout(b, 0, C);
                                }),
                          (f.setImmediate = function (C) {
                            typeof C != 'function' && (C = new Function('' + C));
                            for (var s = new Array(arguments.length - 1), o = 0; o < s.length; o++)
                              s[o] = arguments[o + 1];
                            var r = { callback: C, args: s };
                            return (n[a] = r), l(a), a++;
                          }),
                          (f.clearImmediate = u);
                      }
                      function u(C) {
                        delete n[C];
                      }
                      function b(C) {
                        if (p) setTimeout(b, 0, C);
                        else {
                          var s = n[C];
                          if (s) {
                            p = !0;
                            try {
                              (function (o) {
                                var r = o.callback,
                                  d = o.args;
                                switch (d.length) {
                                  case 0:
                                    r();
                                    break;
                                  case 1:
                                    r(d[0]);
                                    break;
                                  case 2:
                                    r(d[0], d[1]);
                                    break;
                                  case 3:
                                    r(d[0], d[1], d[2]);
                                    break;
                                  default:
                                    r.apply(e, d);
                                }
                              })(s);
                            } finally {
                              u(C), (p = !1);
                            }
                          }
                        }
                      }
                      function P(C) {
                        C.source === y &&
                          typeof C.data == 'string' &&
                          C.data.indexOf(m) === 0 &&
                          b(+C.data.slice(m.length));
                      }
                    })(typeof self == 'undefined' ? (k === void 0 ? this : k) : self);
                  }).call(
                    this,
                    typeof je != 'undefined'
                      ? je
                      : typeof self != 'undefined'
                      ? self
                      : typeof window != 'undefined'
                      ? window
                      : {},
                  );
                },
                {},
              ],
            },
            {},
            [10],
          )(10);
        });
      })(Ve)),
    Ve.exports
  );
}
(function (X, V) {
  (function (w, B) {
    X.exports = B(Ir());
  })(globalThis, (w) =>
    (() => {
      var B = {
          438: (y, e, l) => {
            l.r(e), l.d(e, { default: () => b });
            var t = l(537),
              g = l.n(t),
              m = l(645),
              a = l.n(m),
              n = l(806),
              p = l.n(n),
              i = new URL(l(583), l.b),
              f = a()(g()),
              u = p()(i);
            f.push([
              y.id,
              `@namespace "http://www.w3.org/1998/Math/MathML";math{display:inline-block;line-height:initial}mfrac{display:inline-block;vertical-align:-50%;text-align:center}mfrac>:first-child{border-bottom:solid thin currentColor}mfrac>*{display:block}msub>:nth-child(2){font-size:smaller;vertical-align:sub}msup>:nth-child(2){font-size:smaller;vertical-align:super}munder,mover,munderover{display:inline-flex;flex-flow:column nowrap;vertical-align:middle;text-align:center}munder>:not(:first-child),mover>:not(:first-child),munderover>:not(:first-child){font-size:smaller}munderover>:last-child{order:-1}mroot,msqrt{position:relative;display:inline-block;border-top:solid thin currentColor;margin-top:.5px;vertical-align:middle;margin-left:1ch}mroot:before,msqrt:before{content:"";display:inline-block;position:absolute;width:1ch;left:-1ch;top:-1px;bottom:0;background-image:url(${u})}`,
              '',
              {
                version: 3,
                sources: ['webpack://./src/mathml.scss'],
                names: [],
                mappings:
                  'AAAA,+CAAA,CAEA,KACI,oBAAA,CACA,mBAAA,CAGJ,MACI,oBAAA,CACA,mBAAA,CACA,iBAAA,CAEA,mBACI,qCAAA,CAGJ,QACI,aAAA,CAKJ,mBACI,iBAAA,CACA,kBAAA,CAKJ,mBACI,iBAAA,CACA,oBAAA,CAIR,wBACI,mBAAA,CACA,uBAAA,CACA,qBAAA,CACA,iBAAA,CAEA,iFACI,iBAAA,CAKJ,uBAAA,QAAA,CAGJ,YACI,iBAAA,CACA,oBAAA,CACA,kCAAA,CACA,eAAA,CACA,qBAAA,CACA,eAAA,CAEA,0BACI,UAAA,CACA,oBAAA,CACA,iBAAA,CACA,SAAA,CACA,SAAA,CACA,QAAA,CACA,QAAA,CACA,wDAAA',
                sourcesContent: [
                  `@namespace "http://www.w3.org/1998/Math/MathML";\r
\r
math {\r
    display: inline-block;\r
    line-height: initial;\r
}\r
\r
mfrac {\r
    display: inline-block;\r
    vertical-align: -50%;\r
    text-align: center;\r
\r
    &>:first-child {\r
        border-bottom: solid thin currentColor;\r
    }\r
\r
    &>* {\r
        display: block;\r
    }\r
}\r
\r
msub {\r
    &>:nth-child(2) {\r
        font-size: smaller;\r
        vertical-align: sub;\r
    }\r
}\r
\r
msup {\r
    &>:nth-child(2) {\r
        font-size: smaller;\r
        vertical-align: super;\r
    }\r
}\r
\r
munder, mover, munderover {\r
    display: inline-flex;\r
    flex-flow: column nowrap;\r
    vertical-align: middle;\r
    text-align: center;\r
\r
    &>:not(:first-child) {\r
        font-size: smaller;\r
    }\r
}\r
\r
munderover {\r
    &>:last-child { order: -1; }\r
}\r
\r
mroot, msqrt {\r
    position: relative;\r
    display: inline-block;\r
    border-top: solid thin currentColor;  \r
    margin-top: 0.5px;\r
    vertical-align: middle;  \r
    margin-left: 1ch; \r
\r
    &:before {\r
        content: "";\r
        display: inline-block;\r
        position: absolute;\r
        width: 1ch;\r
        left: -1ch;\r
        top: -1px;\r
        bottom: 0;\r
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 100' preserveAspectRatio='none'%3E%3Cpath d='m0,75 l5,0 l5,25 l10,-100' stroke='black' fill='none' vector-effect='non-scaling-stroke'/%3E%3C/svg%3E");\r
    }\r
}`,
                ],
                sourceRoot: '',
              },
            ]);
            const b = f.toString();
          },
          645: (y) => {
            y.exports = function (e) {
              var l = [];
              return (
                (l.toString = function () {
                  return this.map(function (t) {
                    var g = '',
                      m = t[5] !== void 0;
                    return (
                      t[4] && (g += '@supports ('.concat(t[4], ') {')),
                      t[2] && (g += '@media '.concat(t[2], ' {')),
                      m && (g += '@layer'.concat(t[5].length > 0 ? ' '.concat(t[5]) : '', ' {')),
                      (g += e(t)),
                      m && (g += '}'),
                      t[2] && (g += '}'),
                      t[4] && (g += '}'),
                      g
                    );
                  }).join('');
                }),
                (l.i = function (t, g, m, a, n) {
                  typeof t == 'string' && (t = [[null, t, void 0]]);
                  var p = {};
                  if (m)
                    for (var i = 0; i < this.length; i++) {
                      var f = this[i][0];
                      f != null && (p[f] = !0);
                    }
                  for (var u = 0; u < t.length; u++) {
                    var b = [].concat(t[u]);
                    (m && p[b[0]]) ||
                      (n !== void 0 &&
                        (b[5] === void 0 ||
                          (b[1] = '@layer'
                            .concat(b[5].length > 0 ? ' '.concat(b[5]) : '', ' {')
                            .concat(b[1], '}')),
                        (b[5] = n)),
                      g &&
                        (b[2] && (b[1] = '@media '.concat(b[2], ' {').concat(b[1], '}')),
                        (b[2] = g)),
                      a &&
                        (b[4]
                          ? ((b[1] = '@supports ('.concat(b[4], ') {').concat(b[1], '}')),
                            (b[4] = a))
                          : (b[4] = ''.concat(a))),
                      l.push(b));
                  }
                }),
                l
              );
            };
          },
          806: (y) => {
            y.exports = function (e, l) {
              return (
                l || (l = {}),
                e &&
                  ((e = String(e.__esModule ? e.default : e)),
                  /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
                  l.hash && (e += l.hash),
                  /["'() \t\n]|(%20)/.test(e) || l.needQuotes
                    ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, '\\n'), '"')
                    : e)
              );
            };
          },
          537: (y) => {
            y.exports = function (e) {
              var l = e[1],
                t = e[3];
              if (!t) return l;
              if (typeof btoa == 'function') {
                var g = btoa(unescape(encodeURIComponent(JSON.stringify(t)))),
                  m = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(g),
                  a = '/*# '.concat(m, ' */');
                return [l].concat([a]).join(`
`);
              }
              return [l].join(`
`);
            };
          },
          522: (y, e, l) => {
            Object.defineProperty(e, '__esModule', { value: !0 }), (e.OpenXmlPackage = void 0);
            const t = l(626),
              g = l(472),
              m = l(593),
              a = l(461);
            class n {
              constructor(i, f) {
                (this._zip = i), (this.options = f), (this.xmlParser = new g.XmlParser());
              }
              get(i) {
                return this._zip.files[
                  (function (f) {
                    return f.startsWith('/') ? f.substr(1) : f;
                  })(i)
                ];
              }
              update(i, f) {
                this._zip.file(i, f);
              }
              static load(i, f) {
                return be(this, null, function* () {
                  const u = yield t.loadAsync(i);
                  return new n(u, f);
                });
              }
              save(i = 'blob') {
                return this._zip.generateAsync({ type: i });
              }
              load(i, f = 'string') {
                var u, b;
                return (b = (u = this.get(i)) === null || u === void 0 ? void 0 : u.async(f)) !==
                  null && b !== void 0
                  ? b
                  : Promise.resolve(null);
              }
              loadRelationships(i = null) {
                return be(this, null, function* () {
                  let f = '_rels/.rels';
                  if (i != null) {
                    const [b, P] = (0, m.splitPath)(i);
                    f = `${b}_rels/${P}.rels`;
                  }
                  const u = yield this.load(f);
                  return u
                    ? (0, a.parseRelationships)(
                        this.parseXmlDocument(u).firstElementChild,
                        this.xmlParser,
                      )
                    : null;
                });
              }
              parseXmlDocument(i) {
                return (0, g.parseXmlString)(i, this.options.trimXmlDeclaration);
              }
            }
            e.OpenXmlPackage = n;
          },
          530: (y, e, l) => {
            Object.defineProperty(e, '__esModule', { value: !0 }), (e.Part = void 0);
            const t = l(472);
            e.Part = class {
              constructor(g, m) {
                (this._package = g), (this.path = m);
              }
              load() {
                return be(this, null, function* () {
                  this.rels = yield this._package.loadRelationships(this.path);
                  const g = yield this._package.load(this.path),
                    m = this._package.parseXmlDocument(g);
                  this._package.options.keepOrigin && (this._xmlDocument = m),
                    this.parseXml(m.firstElementChild);
                });
              }
              save() {
                this._package.update(this.path, (0, t.serializeXmlString)(this._xmlDocument));
              }
              parseXml(g) {}
            };
          },
          461: (y, e) => {
            var l;
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.parseRelationships = e.RelationshipTypes = void 0),
              (function (t) {
                (t.OfficeDocument =
                  'http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument'),
                  (t.FontTable =
                    'http://schemas.openxmlformats.org/officeDocument/2006/relationships/fontTable'),
                  (t.Image =
                    'http://schemas.openxmlformats.org/officeDocument/2006/relationships/image'),
                  (t.Numbering =
                    'http://schemas.openxmlformats.org/officeDocument/2006/relationships/numbering'),
                  (t.Styles =
                    'http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles'),
                  (t.StylesWithEffects =
                    'http://schemas.microsoft.com/office/2007/relationships/stylesWithEffects'),
                  (t.Theme =
                    'http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme'),
                  (t.Settings =
                    'http://schemas.openxmlformats.org/officeDocument/2006/relationships/settings'),
                  (t.WebSettings =
                    'http://schemas.openxmlformats.org/officeDocument/2006/relationships/webSettings'),
                  (t.Hyperlink =
                    'http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink'),
                  (t.Footnotes =
                    'http://schemas.openxmlformats.org/officeDocument/2006/relationships/footnotes'),
                  (t.Endnotes =
                    'http://schemas.openxmlformats.org/officeDocument/2006/relationships/endnotes'),
                  (t.Footer =
                    'http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer'),
                  (t.Header =
                    'http://schemas.openxmlformats.org/officeDocument/2006/relationships/header'),
                  (t.ExtendedProperties =
                    'http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties'),
                  (t.CoreProperties =
                    'http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties'),
                  (t.CustomProperties =
                    'http://schemas.openxmlformats.org/package/2006/relationships/metadata/custom-properties');
              })(l || (e.RelationshipTypes = l = {})),
              (e.parseRelationships = function (t, g) {
                return g
                  .elements(t)
                  .map((m) => ({
                    id: g.attr(m, 'Id'),
                    type: g.attr(m, 'Type'),
                    target: g.attr(m, 'Target'),
                    targetMode: g.attr(m, 'TargetMode'),
                  }));
              });
          },
          168: (y, e, l) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.DocumentParser = e.autos = void 0);
            const t = l(120),
              g = l(109),
              m = l(59),
              a = l(472),
              n = l(488),
              p = l(172),
              i = l(149),
              f = l(320);
            e.autos = {
              shd: 'inherit',
              color: 'black',
              borderColor: 'black',
              highlight: 'transparent',
            };
            const u = [],
              b = {
                oMath: t.DomType.MmlMath,
                oMathPara: t.DomType.MmlMathParagraph,
                f: t.DomType.MmlFraction,
                num: t.DomType.MmlNumerator,
                den: t.DomType.MmlDenominator,
                rad: t.DomType.MmlRadical,
                deg: t.DomType.MmlDegree,
                e: t.DomType.MmlBase,
                sSup: t.DomType.MmlSuperscript,
                sSub: t.DomType.MmlSubscript,
                sup: t.DomType.MmlSuperArgument,
                sub: t.DomType.MmlSubArgument,
                d: t.DomType.MmlDelimiter,
                nary: t.DomType.MmlNary,
              };
            e.DocumentParser = class {
              constructor(o) {
                this.options = Object.assign({ ignoreWidth: !1, debug: !1 }, o);
              }
              parseNotes(o, r, d) {
                var v = [];
                for (let S of a.default.elements(o, r)) {
                  const D = new d();
                  (D.id = a.default.attr(S, 'id')),
                    (D.noteType = a.default.attr(S, 'type')),
                    (D.children = this.parseBodyElements(S)),
                    v.push(D);
                }
                return v;
              }
              parseDocumentFile(o) {
                var r = a.default.element(o, 'body'),
                  d = a.default.element(o, 'background'),
                  v = a.default.element(r, 'sectPr');
                return {
                  type: t.DomType.Document,
                  children: this.parseBodyElements(r),
                  props: v ? (0, m.parseSectionProperties)(v, a.default) : {},
                  cssStyle: d ? this.parseBackground(d) : {},
                };
              }
              parseBackground(o) {
                var r = {},
                  d = C.colorAttr(o, 'color');
                return d && (r['background-color'] = d), r;
              }
              parseBodyElements(o) {
                var r = [];
                for (let d of a.default.elements(o))
                  switch (d.localName) {
                    case 'p':
                      r.push(this.parseParagraph(d));
                      break;
                    case 'tbl':
                      r.push(this.parseTable(d));
                      break;
                    case 'sdt':
                      r.push(...this.parseSdt(d, (v) => this.parseBodyElements(v)));
                  }
                return r;
              }
              parseStylesFile(o) {
                var r = [];
                return (
                  C.foreach(o, (d) => {
                    switch (d.localName) {
                      case 'style':
                        r.push(this.parseStyle(d));
                        break;
                      case 'docDefaults':
                        r.push(this.parseDefaultStyles(d));
                    }
                  }),
                  r
                );
              }
              parseDefaultStyles(o) {
                var r = { id: null, name: null, target: null, basedOn: null, styles: [] };
                return (
                  C.foreach(o, (d) => {
                    switch (d.localName) {
                      case 'rPrDefault':
                        var v = a.default.element(d, 'rPr');
                        v &&
                          r.styles.push({
                            target: 'span',
                            values: this.parseDefaultProperties(v, {}),
                          });
                        break;
                      case 'pPrDefault':
                        var S = a.default.element(d, 'pPr');
                        S &&
                          r.styles.push({
                            target: 'p',
                            values: this.parseDefaultProperties(S, {}),
                          });
                    }
                  }),
                  r
                );
              }
              parseStyle(o) {
                var r = {
                  id: a.default.attr(o, 'styleId'),
                  isDefault: a.default.boolAttr(o, 'default'),
                  name: null,
                  target: null,
                  basedOn: null,
                  styles: [],
                  linked: null,
                };
                switch (a.default.attr(o, 'type')) {
                  case 'paragraph':
                    r.target = 'p';
                    break;
                  case 'table':
                    r.target = 'table';
                    break;
                  case 'character':
                    r.target = 'span';
                }
                return (
                  C.foreach(o, (d) => {
                    switch (d.localName) {
                      case 'basedOn':
                        r.basedOn = a.default.attr(d, 'val');
                        break;
                      case 'name':
                        r.name = a.default.attr(d, 'val');
                        break;
                      case 'link':
                        r.linked = a.default.attr(d, 'val');
                        break;
                      case 'next':
                        r.next = a.default.attr(d, 'val');
                        break;
                      case 'aliases':
                        r.aliases = a.default.attr(d, 'val').split(',');
                        break;
                      case 'pPr':
                        r.styles.push({ target: 'p', values: this.parseDefaultProperties(d, {}) }),
                          (r.paragraphProps = (0, g.parseParagraphProperties)(d, a.default));
                        break;
                      case 'rPr':
                        r.styles.push({
                          target: 'span',
                          values: this.parseDefaultProperties(d, {}),
                        }),
                          (r.runProps = (0, n.parseRunProperties)(d, a.default));
                        break;
                      case 'tblPr':
                      case 'tcPr':
                        r.styles.push({ target: 'td', values: this.parseDefaultProperties(d, {}) });
                        break;
                      case 'tblStylePr':
                        for (let v of this.parseTableStyle(d)) r.styles.push(v);
                        break;
                      case 'rsid':
                      case 'qFormat':
                      case 'hidden':
                      case 'semiHidden':
                      case 'unhideWhenUsed':
                      case 'autoRedefine':
                      case 'uiPriority':
                        break;
                      default:
                        this.options.debug &&
                          console.warn(`DOCX: Unknown style element: ${d.localName}`);
                    }
                  }),
                  r
                );
              }
              parseTableStyle(o) {
                var r = [],
                  d = a.default.attr(o, 'type'),
                  v = '',
                  S = '';
                switch (d) {
                  case 'firstRow':
                    (S = '.first-row'), (v = 'tr.first-row td');
                    break;
                  case 'lastRow':
                    (S = '.last-row'), (v = 'tr.last-row td');
                    break;
                  case 'firstCol':
                    (S = '.first-col'), (v = 'td.first-col');
                    break;
                  case 'lastCol':
                    (S = '.last-col'), (v = 'td.last-col');
                    break;
                  case 'band1Vert':
                    (S = ':not(.no-vband)'), (v = 'td.odd-col');
                    break;
                  case 'band2Vert':
                    (S = ':not(.no-vband)'), (v = 'td.even-col');
                    break;
                  case 'band1Horz':
                    (S = ':not(.no-hband)'), (v = 'tr.odd-row');
                    break;
                  case 'band2Horz':
                    (S = ':not(.no-hband)'), (v = 'tr.even-row');
                    break;
                  default:
                    return [];
                }
                return (
                  C.foreach(o, (D) => {
                    switch (D.localName) {
                      case 'pPr':
                        r.push({
                          target: `${v} p`,
                          mod: S,
                          values: this.parseDefaultProperties(D, {}),
                        });
                        break;
                      case 'rPr':
                        r.push({
                          target: `${v} span`,
                          mod: S,
                          values: this.parseDefaultProperties(D, {}),
                        });
                        break;
                      case 'tblPr':
                      case 'tcPr':
                        r.push({ target: v, mod: S, values: this.parseDefaultProperties(D, {}) });
                    }
                  }),
                  r
                );
              }
              parseNumberingFile(o) {
                var r = [],
                  d = {},
                  v = [];
                return (
                  C.foreach(o, (S) => {
                    switch (S.localName) {
                      case 'abstractNum':
                        this.parseAbstractNumbering(S, v).forEach((E) => r.push(E));
                        break;
                      case 'numPicBullet':
                        v.push(this.parseNumberingPicBullet(S));
                        break;
                      case 'num':
                        var D = a.default.attr(S, 'numId'),
                          _ = a.default.elementAttr(S, 'abstractNumId', 'val');
                        d[_] = D;
                    }
                  }),
                  r.forEach((S) => (S.id = d[S.id])),
                  r
                );
              }
              parseNumberingPicBullet(o) {
                var r = a.default.element(o, 'pict'),
                  d = r && a.default.element(r, 'shape'),
                  v = d && a.default.element(d, 'imagedata');
                return v
                  ? {
                      id: a.default.intAttr(o, 'numPicBulletId'),
                      src: a.default.attr(v, 'id'),
                      style: a.default.attr(d, 'style'),
                    }
                  : null;
              }
              parseAbstractNumbering(o, r) {
                var d = [],
                  v = a.default.attr(o, 'abstractNumId');
                return (
                  C.foreach(o, (S) => {
                    S.localName === 'lvl' && d.push(this.parseNumberingLevel(v, S, r));
                  }),
                  d
                );
              }
              parseNumberingLevel(o, r, d) {
                var v = {
                  id: o,
                  level: a.default.intAttr(r, 'ilvl'),
                  pStyleName: void 0,
                  pStyle: {},
                  rStyle: {},
                  suff: 'tab',
                };
                return (
                  C.foreach(r, (S) => {
                    switch (S.localName) {
                      case 'pPr':
                        this.parseDefaultProperties(S, v.pStyle);
                        break;
                      case 'rPr':
                        this.parseDefaultProperties(S, v.rStyle);
                        break;
                      case 'lvlPicBulletId':
                        var D = a.default.intAttr(S, 'val');
                        v.bullet = d.find((_) => _.id == D);
                        break;
                      case 'lvlText':
                        v.levelText = a.default.attr(S, 'val');
                        break;
                      case 'pStyle':
                        v.pStyleName = a.default.attr(S, 'val');
                        break;
                      case 'numFmt':
                        v.format = a.default.attr(S, 'val');
                        break;
                      case 'suff':
                        v.suff = a.default.attr(S, 'val');
                    }
                  }),
                  v
                );
              }
              parseSdt(o, r) {
                const d = a.default.element(o, 'sdtContent');
                return d ? r(d) : [];
              }
              parseInserted(o, r) {
                var d, v;
                return {
                  type: t.DomType.Inserted,
                  children:
                    (v = (d = r(o)) === null || d === void 0 ? void 0 : d.children) !== null &&
                    v !== void 0
                      ? v
                      : [],
                };
              }
              parseDeleted(o, r) {
                var d, v;
                return {
                  type: t.DomType.Deleted,
                  children:
                    (v = (d = r(o)) === null || d === void 0 ? void 0 : d.children) !== null &&
                    v !== void 0
                      ? v
                      : [],
                };
              }
              parseParagraph(o) {
                var r = { type: t.DomType.Paragraph, children: [] };
                for (let d of a.default.elements(o))
                  switch (d.localName) {
                    case 'pPr':
                      this.parseParagraphProperties(d, r);
                      break;
                    case 'r':
                      r.children.push(this.parseRun(d, r));
                      break;
                    case 'hyperlink':
                      r.children.push(this.parseHyperlink(d, r));
                      break;
                    case 'bookmarkStart':
                      r.children.push((0, p.parseBookmarkStart)(d, a.default));
                      break;
                    case 'bookmarkEnd':
                      r.children.push((0, p.parseBookmarkEnd)(d, a.default));
                      break;
                    case 'oMath':
                    case 'oMathPara':
                      r.children.push(this.parseMathElement(d));
                      break;
                    case 'sdt':
                      r.children.push(...this.parseSdt(d, (v) => this.parseParagraph(v).children));
                      break;
                    case 'ins':
                      r.children.push(this.parseInserted(d, (v) => this.parseParagraph(v)));
                      break;
                    case 'del':
                      r.children.push(this.parseDeleted(d, (v) => this.parseParagraph(v)));
                  }
                return r;
              }
              parseParagraphProperties(o, r) {
                this.parseDefaultProperties(o, (r.cssStyle = {}), null, (d) => {
                  if ((0, g.parseParagraphProperty)(d, r, a.default)) return !0;
                  switch (d.localName) {
                    case 'pStyle':
                      r.styleName = a.default.attr(d, 'val');
                      break;
                    case 'cnfStyle':
                      r.className = s.classNameOfCnfStyle(d);
                      break;
                    case 'framePr':
                      this.parseFrame(d, r);
                      break;
                    case 'rPr':
                      break;
                    default:
                      return !1;
                  }
                  return !0;
                });
              }
              parseFrame(o, r) {
                a.default.attr(o, 'dropCap') == 'drop' && (r.cssStyle.float = 'left');
              }
              parseHyperlink(o, r) {
                var d = { type: t.DomType.Hyperlink, parent: r, children: [] },
                  v = a.default.attr(o, 'anchor'),
                  S = a.default.attr(o, 'id');
                return (
                  v && (d.href = '#' + v),
                  S && (d.id = S),
                  C.foreach(o, (D) => {
                    D.localName === 'r' && d.children.push(this.parseRun(D, d));
                  }),
                  d
                );
              }
              parseRun(o, r) {
                var d = { type: t.DomType.Run, parent: r, children: [] };
                return (
                  C.foreach(o, (v) => {
                    switch ((v = this.checkAlternateContent(v)).localName) {
                      case 't':
                        d.children.push({ type: t.DomType.Text, text: v.textContent });
                        break;
                      case 'delText':
                        d.children.push({ type: t.DomType.DeletedText, text: v.textContent });
                        break;
                      case 'fldSimple':
                        d.children.push({
                          type: t.DomType.SimpleField,
                          instruction: a.default.attr(v, 'instr'),
                          lock: a.default.boolAttr(v, 'lock', !1),
                          dirty: a.default.boolAttr(v, 'dirty', !1),
                        });
                        break;
                      case 'instrText':
                        (d.fieldRun = !0),
                          d.children.push({ type: t.DomType.Instruction, text: v.textContent });
                        break;
                      case 'fldChar':
                        (d.fieldRun = !0),
                          d.children.push({
                            type: t.DomType.ComplexField,
                            charType: a.default.attr(v, 'fldCharType'),
                            lock: a.default.boolAttr(v, 'lock', !1),
                            dirty: a.default.boolAttr(v, 'dirty', !1),
                          });
                        break;
                      case 'noBreakHyphen':
                        d.children.push({ type: t.DomType.NoBreakHyphen });
                        break;
                      case 'br':
                        d.children.push({
                          type: t.DomType.Break,
                          break: a.default.attr(v, 'type') || 'textWrapping',
                        });
                        break;
                      case 'lastRenderedPageBreak':
                        d.children.push({ type: t.DomType.Break, break: 'lastRenderedPageBreak' });
                        break;
                      case 'sym':
                        d.children.push({
                          type: t.DomType.Symbol,
                          font: a.default.attr(v, 'font'),
                          char: a.default.attr(v, 'char'),
                        });
                        break;
                      case 'tab':
                        d.children.push({ type: t.DomType.Tab });
                        break;
                      case 'footnoteReference':
                        d.children.push({
                          type: t.DomType.FootnoteReference,
                          id: a.default.attr(v, 'id'),
                        });
                        break;
                      case 'endnoteReference':
                        d.children.push({
                          type: t.DomType.EndnoteReference,
                          id: a.default.attr(v, 'id'),
                        });
                        break;
                      case 'drawing':
                        let S = this.parseDrawing(v);
                        S && (d.children = [S]);
                        break;
                      case 'pict':
                        d.children.push(this.parseVmlPicture(v));
                        break;
                      case 'rPr':
                        this.parseRunProperties(v, d);
                    }
                  }),
                  d
                );
              }
              parseMathElement(o) {
                const r = `${o.localName}Pr`,
                  d = { type: b[o.localName], children: [] };
                for (const S of a.default.elements(o))
                  if (b[S.localName]) d.children.push(this.parseMathElement(S));
                  else if (S.localName == 'r') {
                    var v = this.parseRun(S);
                    (v.type = t.DomType.MmlRun), d.children.push(v);
                  } else S.localName == r && (d.props = this.parseMathProperies(S));
                return d;
              }
              parseMathProperies(o) {
                const r = {};
                for (const d of a.default.elements(o))
                  switch (d.localName) {
                    case 'chr':
                      r.char = a.default.attr(d, 'val');
                      break;
                    case 'degHide':
                      r.hideDegree = a.default.boolAttr(d, 'val');
                      break;
                    case 'begChr':
                      r.beginChar = a.default.attr(d, 'val');
                      break;
                    case 'endChr':
                      r.endChar = a.default.attr(d, 'val');
                  }
                return r;
              }
              parseRunProperties(o, r) {
                this.parseDefaultProperties(o, (r.cssStyle = {}), null, (d) => {
                  switch (d.localName) {
                    case 'rStyle':
                      r.styleName = a.default.attr(d, 'val');
                      break;
                    case 'vertAlign':
                      r.verticalAlign = s.valueOfVertAlign(d, !0);
                      break;
                    default:
                      return !1;
                  }
                  return !0;
                });
              }
              parseVmlPicture(o) {
                const r = { type: t.DomType.VmlPicture, children: [] };
                for (const d of a.default.elements(o)) {
                  const v = (0, f.parseVmlElement)(d);
                  v && r.children.push(v);
                }
                return r;
              }
              checkAlternateContent(o) {
                var r;
                if (o.localName != 'AlternateContent') return o;
                var d = a.default.element(o, 'Choice');
                if (d) {
                  var v = a.default.attr(d, 'Requires'),
                    S = o.lookupNamespaceURI(v);
                  if (u.includes(S)) return d.firstElementChild;
                }
                return (r = a.default.element(o, 'Fallback')) === null || r === void 0
                  ? void 0
                  : r.firstElementChild;
              }
              parseDrawing(o) {
                for (var r of a.default.elements(o))
                  switch (r.localName) {
                    case 'inline':
                    case 'anchor':
                      return this.parseDrawingWrapper(r);
                  }
              }
              parseDrawingWrapper(o) {
                var r,
                  d = { type: t.DomType.Drawing, children: [], cssStyle: {} },
                  v = o.localName == 'anchor';
                let S = null,
                  D = a.default.boolAttr(o, 'simplePos'),
                  _ = { relative: 'page', align: 'left', offset: '0' },
                  E = { relative: 'page', align: 'top', offset: '0' };
                for (var c of a.default.elements(o))
                  switch (c.localName) {
                    case 'simplePos':
                      D &&
                        ((_.offset = a.default.lengthAttr(c, 'x', i.LengthUsage.Emu)),
                        (E.offset = a.default.lengthAttr(c, 'y', i.LengthUsage.Emu)));
                      break;
                    case 'extent':
                      (d.cssStyle.width = a.default.lengthAttr(c, 'cx', i.LengthUsage.Emu)),
                        (d.cssStyle.height = a.default.lengthAttr(c, 'cy', i.LengthUsage.Emu));
                      break;
                    case 'positionH':
                    case 'positionV':
                      if (!D) {
                        let J = c.localName == 'positionH' ? _ : E;
                        var z = a.default.element(c, 'align'),
                          q = a.default.element(c, 'posOffset');
                        (J.relative =
                          (r = a.default.attr(c, 'relativeFrom')) !== null && r !== void 0
                            ? r
                            : J.relative),
                          z && (J.align = z.textContent),
                          q && (J.offset = C.sizeValue(q, i.LengthUsage.Emu));
                      }
                      break;
                    case 'wrapTopAndBottom':
                      S = 'wrapTopAndBottom';
                      break;
                    case 'wrapNone':
                      S = 'wrapNone';
                      break;
                    case 'graphic':
                      var L = this.parseGraphic(c);
                      L && d.children.push(L);
                  }
                return (
                  S == 'wrapTopAndBottom'
                    ? ((d.cssStyle.display = 'block'),
                      _.align &&
                        ((d.cssStyle['text-align'] = _.align), (d.cssStyle.width = '100%')))
                    : S == 'wrapNone'
                    ? ((d.cssStyle.display = 'block'),
                      (d.cssStyle.position = 'relative'),
                      (d.cssStyle.width = '0px'),
                      (d.cssStyle.height = '0px'),
                      _.offset && (d.cssStyle.left = _.offset),
                      E.offset && (d.cssStyle.top = E.offset))
                    : !v ||
                      (_.align != 'left' && _.align != 'right') ||
                      (d.cssStyle.float = _.align),
                  d
                );
              }
              parseGraphic(o) {
                var r = a.default.element(o, 'graphicData');
                for (let d of a.default.elements(r))
                  if (d.localName === 'pic') return this.parsePicture(d);
                return null;
              }
              parsePicture(o) {
                var r = { type: t.DomType.Image, src: '', cssStyle: {} },
                  d = a.default.element(o, 'blipFill'),
                  v = a.default.element(d, 'blip');
                r.src = a.default.attr(v, 'embed');
                var S = a.default.element(o, 'spPr'),
                  D = a.default.element(S, 'xfrm');
                for (var _ of ((r.cssStyle.position = 'relative'), a.default.elements(D)))
                  switch (_.localName) {
                    case 'ext':
                      (r.cssStyle.width = a.default.lengthAttr(_, 'cx', i.LengthUsage.Emu)),
                        (r.cssStyle.height = a.default.lengthAttr(_, 'cy', i.LengthUsage.Emu));
                      break;
                    case 'off':
                      (r.cssStyle.left = a.default.lengthAttr(_, 'x', i.LengthUsage.Emu)),
                        (r.cssStyle.top = a.default.lengthAttr(_, 'y', i.LengthUsage.Emu));
                  }
                return r;
              }
              parseTable(o) {
                var r = { type: t.DomType.Table, children: [] };
                return (
                  C.foreach(o, (d) => {
                    switch (d.localName) {
                      case 'tr':
                        r.children.push(this.parseTableRow(d));
                        break;
                      case 'tblGrid':
                        r.columns = this.parseTableColumns(d);
                        break;
                      case 'tblPr':
                        this.parseTableProperties(d, r);
                    }
                  }),
                  r
                );
              }
              parseTableColumns(o) {
                var r = [];
                return (
                  C.foreach(o, (d) => {
                    d.localName === 'gridCol' && r.push({ width: a.default.lengthAttr(d, 'w') });
                  }),
                  r
                );
              }
              parseTableProperties(o, r) {
                switch (
                  ((r.cssStyle = {}),
                  (r.cellStyle = {}),
                  this.parseDefaultProperties(o, r.cssStyle, r.cellStyle, (d) => {
                    switch (d.localName) {
                      case 'tblStyle':
                        r.styleName = a.default.attr(d, 'val');
                        break;
                      case 'tblLook':
                        r.className = s.classNameOftblLook(d);
                        break;
                      case 'tblpPr':
                        this.parseTablePosition(d, r);
                        break;
                      case 'tblStyleColBandSize':
                        r.colBandSize = a.default.intAttr(d, 'val');
                        break;
                      case 'tblStyleRowBandSize':
                        r.rowBandSize = a.default.intAttr(d, 'val');
                        break;
                      default:
                        return !1;
                    }
                    return !0;
                  }),
                  r.cssStyle['text-align'])
                ) {
                  case 'center':
                    delete r.cssStyle['text-align'],
                      (r.cssStyle['margin-left'] = 'auto'),
                      (r.cssStyle['margin-right'] = 'auto');
                    break;
                  case 'right':
                    delete r.cssStyle['text-align'], (r.cssStyle['margin-left'] = 'auto');
                }
              }
              parseTablePosition(o, r) {
                var d = a.default.lengthAttr(o, 'topFromText'),
                  v = a.default.lengthAttr(o, 'bottomFromText'),
                  S = a.default.lengthAttr(o, 'rightFromText'),
                  D = a.default.lengthAttr(o, 'leftFromText');
                (r.cssStyle.float = 'left'),
                  (r.cssStyle['margin-bottom'] = s.addSize(r.cssStyle['margin-bottom'], v)),
                  (r.cssStyle['margin-left'] = s.addSize(r.cssStyle['margin-left'], D)),
                  (r.cssStyle['margin-right'] = s.addSize(r.cssStyle['margin-right'], S)),
                  (r.cssStyle['margin-top'] = s.addSize(r.cssStyle['margin-top'], d));
              }
              parseTableRow(o) {
                var r = { type: t.DomType.Row, children: [] };
                return (
                  C.foreach(o, (d) => {
                    switch (d.localName) {
                      case 'tc':
                        r.children.push(this.parseTableCell(d));
                        break;
                      case 'trPr':
                        this.parseTableRowProperties(d, r);
                    }
                  }),
                  r
                );
              }
              parseTableRowProperties(o, r) {
                r.cssStyle = this.parseDefaultProperties(o, {}, null, (d) => {
                  switch (d.localName) {
                    case 'cnfStyle':
                      r.className = s.classNameOfCnfStyle(d);
                      break;
                    case 'tblHeader':
                      r.isHeader = a.default.boolAttr(d, 'val');
                      break;
                    default:
                      return !1;
                  }
                  return !0;
                });
              }
              parseTableCell(o) {
                var r = { type: t.DomType.Cell, children: [] };
                return (
                  C.foreach(o, (d) => {
                    switch (d.localName) {
                      case 'tbl':
                        r.children.push(this.parseTable(d));
                        break;
                      case 'p':
                        r.children.push(this.parseParagraph(d));
                        break;
                      case 'tcPr':
                        this.parseTableCellProperties(d, r);
                    }
                  }),
                  r
                );
              }
              parseTableCellProperties(o, r) {
                r.cssStyle = this.parseDefaultProperties(o, {}, null, (d) => {
                  var v;
                  switch (d.localName) {
                    case 'gridSpan':
                      r.span = a.default.intAttr(d, 'val', null);
                      break;
                    case 'vMerge':
                      r.verticalMerge =
                        (v = a.default.attr(d, 'val')) !== null && v !== void 0 ? v : 'continue';
                      break;
                    case 'cnfStyle':
                      r.className = s.classNameOfCnfStyle(d);
                      break;
                    default:
                      return !1;
                  }
                  return !0;
                });
              }
              parseDefaultProperties(o, r = null, d = null, v = null) {
                return (
                  (r = r || {}),
                  C.foreach(o, (S) => {
                    if (!(v != null && v(S)))
                      switch (S.localName) {
                        case 'jc':
                          r['text-align'] = s.valueOfJc(S);
                          break;
                        case 'textAlignment':
                          r['vertical-align'] = s.valueOfTextAlignment(S);
                          break;
                        case 'color':
                          r.color = C.colorAttr(S, 'val', null, e.autos.color);
                          break;
                        case 'sz':
                          r['font-size'] = r['min-height'] = a.default.lengthAttr(
                            S,
                            'val',
                            i.LengthUsage.FontSize,
                          );
                          break;
                        case 'shd':
                          r['background-color'] = C.colorAttr(S, 'fill', null, e.autos.shd);
                          break;
                        case 'highlight':
                          r['background-color'] = C.colorAttr(S, 'val', null, e.autos.highlight);
                          break;
                        case 'vertAlign':
                          break;
                        case 'position':
                          r.verticalAlign = a.default.lengthAttr(S, 'val', i.LengthUsage.FontSize);
                          break;
                        case 'tcW':
                          if (this.options.ignoreWidth) break;
                        case 'tblW':
                          r.width = s.valueOfSize(S, 'w');
                          break;
                        case 'trHeight':
                          this.parseTrHeight(S, r);
                          break;
                        case 'strike':
                          r['text-decoration'] = a.default.boolAttr(S, 'val', !0)
                            ? 'line-through'
                            : 'none';
                          break;
                        case 'b':
                          r['font-weight'] = a.default.boolAttr(S, 'val', !0) ? 'bold' : 'normal';
                          break;
                        case 'i':
                          r['font-style'] = a.default.boolAttr(S, 'val', !0) ? 'italic' : 'normal';
                          break;
                        case 'caps':
                          r['text-transform'] = a.default.boolAttr(S, 'val', !0)
                            ? 'uppercase'
                            : 'none';
                          break;
                        case 'smallCaps':
                          r['text-transform'] = a.default.boolAttr(S, 'val', !0)
                            ? 'lowercase'
                            : 'none';
                          break;
                        case 'u':
                          this.parseUnderline(S, r);
                          break;
                        case 'ind':
                        case 'tblInd':
                          this.parseIndentation(S, r);
                          break;
                        case 'rFonts':
                          this.parseFont(S, r);
                          break;
                        case 'tblBorders':
                          this.parseBorderProperties(S, d || r);
                          break;
                        case 'tblCellSpacing':
                          (r['border-spacing'] = s.valueOfMargin(S)),
                            (r['border-collapse'] = 'separate');
                          break;
                        case 'pBdr':
                          this.parseBorderProperties(S, r);
                          break;
                        case 'bdr':
                          r.border = s.valueOfBorder(S);
                          break;
                        case 'tcBorders':
                          this.parseBorderProperties(S, r);
                          break;
                        case 'vanish':
                          a.default.boolAttr(S, 'val', !0) && (r.display = 'none');
                          break;
                        case 'kern':
                        case 'noWrap':
                          break;
                        case 'tblCellMar':
                        case 'tcMar':
                          this.parseMarginProperties(S, d || r);
                          break;
                        case 'tblLayout':
                          r['table-layout'] = s.valueOfTblLayout(S);
                          break;
                        case 'vAlign':
                          r['vertical-align'] = s.valueOfTextAlignment(S);
                          break;
                        case 'spacing':
                          o.localName == 'pPr' && this.parseSpacing(S, r);
                          break;
                        case 'wordWrap':
                          a.default.boolAttr(S, 'val') && (r['overflow-wrap'] = 'break-word');
                          break;
                        case 'bCs':
                        case 'iCs':
                        case 'szCs':
                        case 'tabs':
                        case 'outlineLvl':
                        case 'contextualSpacing':
                        case 'tblStyleColBandSize':
                        case 'tblStyleRowBandSize':
                        case 'webHidden':
                        case 'pageBreakBefore':
                        case 'suppressLineNumbers':
                        case 'keepLines':
                        case 'keepNext':
                        case 'lang':
                        case 'widowControl':
                        case 'bidi':
                        case 'rtl':
                        case 'noProof':
                          break;
                        default:
                          this.options.debug &&
                            console.warn(
                              `DOCX: Unknown document element: ${o.localName}.${S.localName}`,
                            );
                      }
                  }),
                  r
                );
              }
              parseUnderline(o, r) {
                var d = a.default.attr(o, 'val');
                if (d != null) {
                  switch (d) {
                    case 'dash':
                    case 'dashDotDotHeavy':
                    case 'dashDotHeavy':
                    case 'dashedHeavy':
                    case 'dashLong':
                    case 'dashLongHeavy':
                    case 'dotDash':
                    case 'dotDotDash':
                      r['text-decoration-style'] = 'dashed';
                      break;
                    case 'dotted':
                    case 'dottedHeavy':
                      r['text-decoration-style'] = 'dotted';
                      break;
                    case 'double':
                      r['text-decoration-style'] = 'double';
                      break;
                    case 'single':
                    case 'thick':
                    case 'words':
                      r['text-decoration'] = 'underline';
                      break;
                    case 'wave':
                    case 'wavyDouble':
                    case 'wavyHeavy':
                      r['text-decoration-style'] = 'wavy';
                      break;
                    case 'none':
                      r['text-decoration'] = 'none';
                  }
                  var v = C.colorAttr(o, 'color');
                  v && (r['text-decoration-color'] = v);
                }
              }
              parseFont(o, r) {
                var d = [a.default.attr(o, 'ascii'), s.themeValue(o, 'asciiTheme')]
                  .filter((v) => v)
                  .join(', ');
                d.length > 0 && (r['font-family'] = d);
              }
              parseIndentation(o, r) {
                var d = a.default.lengthAttr(o, 'firstLine'),
                  v = a.default.lengthAttr(o, 'hanging'),
                  S = a.default.lengthAttr(o, 'left'),
                  D = a.default.lengthAttr(o, 'start'),
                  _ = a.default.lengthAttr(o, 'right'),
                  E = a.default.lengthAttr(o, 'end');
                d && (r['text-indent'] = d),
                  v && (r['text-indent'] = `-${v}`),
                  (S || D) && (r['margin-left'] = S || D),
                  (_ || E) && (r['margin-right'] = _ || E);
              }
              parseSpacing(o, r) {
                var d = a.default.lengthAttr(o, 'before'),
                  v = a.default.lengthAttr(o, 'after'),
                  S = a.default.intAttr(o, 'line', null),
                  D = a.default.attr(o, 'lineRule');
                if ((d && (r['margin-top'] = d), v && (r['margin-bottom'] = v), S !== null))
                  switch (D) {
                    case 'auto':
                      r['line-height'] = `${(S / 240).toFixed(2)}`;
                      break;
                    case 'atLeast':
                      r['line-height'] = `calc(100% + ${S / 20}pt)`;
                      break;
                    default:
                      r['line-height'] = r['min-height'] = S / 20 + 'pt';
                  }
              }
              parseMarginProperties(o, r) {
                C.foreach(o, (d) => {
                  switch (d.localName) {
                    case 'left':
                      r['padding-left'] = s.valueOfMargin(d);
                      break;
                    case 'right':
                      r['padding-right'] = s.valueOfMargin(d);
                      break;
                    case 'top':
                      r['padding-top'] = s.valueOfMargin(d);
                      break;
                    case 'bottom':
                      r['padding-bottom'] = s.valueOfMargin(d);
                  }
                });
              }
              parseTrHeight(o, r) {
                a.default.attr(o, 'hRule'), (r.height = a.default.lengthAttr(o, 'val'));
              }
              parseBorderProperties(o, r) {
                C.foreach(o, (d) => {
                  switch (d.localName) {
                    case 'start':
                    case 'left':
                      r['border-left'] = s.valueOfBorder(d);
                      break;
                    case 'end':
                    case 'right':
                      r['border-right'] = s.valueOfBorder(d);
                      break;
                    case 'top':
                      r['border-top'] = s.valueOfBorder(d);
                      break;
                    case 'bottom':
                      r['border-bottom'] = s.valueOfBorder(d);
                  }
                });
              }
            };
            const P = [
              'black',
              'blue',
              'cyan',
              'darkBlue',
              'darkCyan',
              'darkGray',
              'darkGreen',
              'darkMagenta',
              'darkRed',
              'darkYellow',
              'green',
              'lightGray',
              'magenta',
              'none',
              'red',
              'white',
              'yellow',
            ];
            class C {
              static foreach(r, d) {
                for (var v = 0; v < r.childNodes.length; v++) {
                  let S = r.childNodes[v];
                  S.nodeType == Node.ELEMENT_NODE && d(S);
                }
              }
              static colorAttr(r, d, v = null, S = 'black') {
                var D = a.default.attr(r, d);
                if (D) return D == 'auto' ? S : P.includes(D) ? D : `#${D}`;
                var _ = a.default.attr(r, 'themeColor');
                return _ ? `var(--docx-${_}-color)` : v;
              }
              static sizeValue(r, d = i.LengthUsage.Dxa) {
                return (0, i.convertLength)(r.textContent, d);
              }
            }
            class s {
              static themeValue(r, d) {
                var v = a.default.attr(r, d);
                return v ? `var(--docx-${v}-font)` : null;
              }
              static valueOfSize(r, d) {
                var v = i.LengthUsage.Dxa;
                switch (a.default.attr(r, 'type')) {
                  case 'dxa':
                    break;
                  case 'pct':
                    v = i.LengthUsage.Percent;
                    break;
                  case 'auto':
                    return 'auto';
                }
                return a.default.lengthAttr(r, d, v);
              }
              static valueOfMargin(r) {
                return a.default.lengthAttr(r, 'w');
              }
              static valueOfBorder(r) {
                if (a.default.attr(r, 'val') == 'nil') return 'none';
                var d = C.colorAttr(r, 'color');
                return `${a.default.lengthAttr(r, 'sz', i.LengthUsage.Border)} solid ${
                  d == 'auto' ? e.autos.borderColor : d
                }`;
              }
              static valueOfTblLayout(r) {
                return a.default.attr(r, 'val') == 'fixed' ? 'fixed' : 'auto';
              }
              static classNameOfCnfStyle(r) {
                const d = a.default.attr(r, 'val');
                return [
                  'first-row',
                  'last-row',
                  'first-col',
                  'last-col',
                  'odd-col',
                  'even-col',
                  'odd-row',
                  'even-row',
                  'ne-cell',
                  'nw-cell',
                  'se-cell',
                  'sw-cell',
                ]
                  .filter((v, S) => d[S] == '1')
                  .join(' ');
              }
              static valueOfJc(r) {
                var d = a.default.attr(r, 'val');
                switch (d) {
                  case 'start':
                  case 'left':
                    return 'left';
                  case 'center':
                    return 'center';
                  case 'end':
                  case 'right':
                    return 'right';
                  case 'both':
                    return 'justify';
                }
                return d;
              }
              static valueOfVertAlign(r, d = !1) {
                var v = a.default.attr(r, 'val');
                switch (v) {
                  case 'subscript':
                    return 'sub';
                  case 'superscript':
                    return d ? 'sup' : 'super';
                }
                return d ? null : v;
              }
              static valueOfTextAlignment(r) {
                var d = a.default.attr(r, 'val');
                switch (d) {
                  case 'auto':
                  case 'baseline':
                    return 'baseline';
                  case 'top':
                    return 'top';
                  case 'center':
                    return 'middle';
                  case 'bottom':
                    return 'bottom';
                }
                return d;
              }
              static addSize(r, d) {
                return r == null ? d : d == null ? r : `calc(${r} + ${d})`;
              }
              static classNameOftblLook(r) {
                const d = a.default.hexAttr(r, 'val', 0);
                let v = '';
                return (
                  (a.default.boolAttr(r, 'firstRow') || 32 & d) && (v += ' first-row'),
                  (a.default.boolAttr(r, 'lastRow') || 64 & d) && (v += ' last-row'),
                  (a.default.boolAttr(r, 'firstColumn') || 128 & d) && (v += ' first-col'),
                  (a.default.boolAttr(r, 'lastColumn') || 256 & d) && (v += ' last-col'),
                  (a.default.boolAttr(r, 'noHBand') || 512 & d) && (v += ' no-hband'),
                  (a.default.boolAttr(r, 'noVBand') || 1024 & d) && (v += ' no-vband'),
                  v.trim()
                );
              }
            }
          },
          162: (y, e, l) => {
            Object.defineProperty(e, '__esModule', { value: !0 }), (e.CorePropsPart = void 0);
            const t = l(530),
              g = l(614);
            class m extends t.Part {
              parseXml(n) {
                this.props = (0, g.parseCoreProps)(n, this._package.xmlParser);
              }
            }
            e.CorePropsPart = m;
          },
          614: (y, e) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.parseCoreProps = void 0),
              (e.parseCoreProps = function (l, t) {
                const g = {};
                for (let m of t.elements(l))
                  switch (m.localName) {
                    case 'title':
                      g.title = m.textContent;
                      break;
                    case 'description':
                      g.description = m.textContent;
                      break;
                    case 'subject':
                      g.subject = m.textContent;
                      break;
                    case 'creator':
                      g.creator = m.textContent;
                      break;
                    case 'keywords':
                      g.keywords = m.textContent;
                      break;
                    case 'language':
                      g.language = m.textContent;
                      break;
                    case 'lastModifiedBy':
                      g.lastModifiedBy = m.textContent;
                      break;
                    case 'revision':
                      m.textContent && (g.revision = parseInt(m.textContent));
                  }
                return g;
              });
          },
          177: (y, e, l) => {
            Object.defineProperty(e, '__esModule', { value: !0 }), (e.CustomPropsPart = void 0);
            const t = l(530),
              g = l(821);
            class m extends t.Part {
              parseXml(n) {
                this.props = (0, g.parseCustomProps)(n, this._package.xmlParser);
              }
            }
            e.CustomPropsPart = m;
          },
          821: (y, e) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.parseCustomProps = void 0),
              (e.parseCustomProps = function (l, t) {
                return t.elements(l, 'property').map((g) => {
                  const m = g.firstChild;
                  return {
                    formatId: t.attr(g, 'fmtid'),
                    name: t.attr(g, 'name'),
                    type: m.nodeName,
                    value: m.textContent,
                  };
                });
              });
          },
          665: (y, e, l) => {
            Object.defineProperty(e, '__esModule', { value: !0 }), (e.ExtendedPropsPart = void 0);
            const t = l(530),
              g = l(668);
            class m extends t.Part {
              parseXml(n) {
                this.props = (0, g.parseExtendedProps)(n, this._package.xmlParser);
              }
            }
            e.ExtendedPropsPart = m;
          },
          668: (y, e) => {
            function l(t) {
              if (t !== void 0) return parseInt(t);
            }
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.parseExtendedProps = void 0),
              (e.parseExtendedProps = function (t, g) {
                const m = {};
                for (let a of g.elements(t))
                  switch (a.localName) {
                    case 'Template':
                      m.template = a.textContent;
                      break;
                    case 'Pages':
                      m.pages = l(a.textContent);
                      break;
                    case 'Words':
                      m.words = l(a.textContent);
                      break;
                    case 'Characters':
                      m.characters = l(a.textContent);
                      break;
                    case 'Application':
                      m.application = a.textContent;
                      break;
                    case 'Lines':
                      m.lines = l(a.textContent);
                      break;
                    case 'Paragraphs':
                      m.paragraphs = l(a.textContent);
                      break;
                    case 'Company':
                      m.company = a.textContent;
                      break;
                    case 'AppVersion':
                      m.appVersion = a.textContent;
                  }
                return m;
              });
          },
          172: (y, e, l) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.parseBookmarkEnd = e.parseBookmarkStart = void 0);
            const t = l(120);
            (e.parseBookmarkStart = function (g, m) {
              return {
                type: t.DomType.BookmarkStart,
                id: m.attr(g, 'id'),
                name: m.attr(g, 'name'),
                colFirst: m.intAttr(g, 'colFirst'),
                colLast: m.intAttr(g, 'colLast'),
              };
            }),
              (e.parseBookmarkEnd = function (g, m) {
                return { type: t.DomType.BookmarkEnd, id: m.attr(g, 'id') };
              });
          },
          191: (y, e, l) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.parseBorders = e.parseBorder = void 0);
            const t = l(149);
            function g(m, a) {
              return {
                type: a.attr(m, 'val'),
                color: a.attr(m, 'color'),
                size: a.lengthAttr(m, 'sz', t.LengthUsage.Border),
                offset: a.lengthAttr(m, 'space', t.LengthUsage.Point),
                frame: a.boolAttr(m, 'frame'),
                shadow: a.boolAttr(m, 'shadow'),
              };
            }
            (e.parseBorder = g),
              (e.parseBorders = function (m, a) {
                var n = {};
                for (let p of a.elements(m))
                  switch (p.localName) {
                    case 'left':
                      n.left = g(p, a);
                      break;
                    case 'top':
                      n.top = g(p, a);
                      break;
                    case 'right':
                      n.right = g(p, a);
                      break;
                    case 'bottom':
                      n.bottom = g(p, a);
                  }
                return n;
              });
          },
          149: (y, e) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.parseCommonProperty =
                e.convertPercentage =
                e.convertBoolean =
                e.convertLength =
                e.LengthUsage =
                e.ns =
                  void 0),
              (e.ns = {
                wordml: 'http://schemas.openxmlformats.org/wordprocessingml/2006/main',
                drawingml: 'http://schemas.openxmlformats.org/drawingml/2006/main',
                picture: 'http://schemas.openxmlformats.org/drawingml/2006/picture',
                compatibility: 'http://schemas.openxmlformats.org/markup-compatibility/2006',
                math: 'http://schemas.openxmlformats.org/officeDocument/2006/math',
              }),
              (e.LengthUsage = {
                Dxa: { mul: 0.05, unit: 'pt' },
                Emu: { mul: 7874015748031496e-20, unit: 'pt' },
                FontSize: { mul: 0.5, unit: 'pt' },
                Border: { mul: 0.125, unit: 'pt' },
                Point: { mul: 1, unit: 'pt' },
                Percent: { mul: 0.02, unit: '%' },
                LineHeight: { mul: 0.004166666666666667, unit: '' },
                VmlEmu: { mul: 7874015748031496e-20, unit: '' },
              }),
              (e.convertLength = function (l, t = e.LengthUsage.Dxa) {
                return l == null || /.+(p[xt]|[%])$/.test(l)
                  ? l
                  : `${(parseInt(l) * t.mul).toFixed(2)}${t.unit}`;
              }),
              (e.convertBoolean = function (l, t = !1) {
                switch (l) {
                  case '1':
                  case 'on':
                  case 'true':
                    return !0;
                  case '0':
                  case 'off':
                  case 'false':
                    return !1;
                  default:
                    return t;
                }
              }),
              (e.convertPercentage = function (l) {
                return l ? parseInt(l) / 100 : null;
              }),
              (e.parseCommonProperty = function (l, t, g) {
                if (l.namespaceURI != e.ns.wordml) return !1;
                switch (l.localName) {
                  case 'color':
                    t.color = g.attr(l, 'val');
                    break;
                  case 'sz':
                    t.fontSize = g.lengthAttr(l, 'val', e.LengthUsage.FontSize);
                    break;
                  default:
                    return !1;
                }
                return !0;
              });
          },
          448: (y, e, l) => {
            Object.defineProperty(e, '__esModule', { value: !0 }), (e.DocumentPart = void 0);
            const t = l(530);
            class g extends t.Part {
              constructor(a, n, p) {
                super(a, n), (this._documentParser = p);
              }
              parseXml(a) {
                this.body = this._documentParser.parseDocumentFile(a);
              }
            }
            e.DocumentPart = g;
          },
          120: (y, e) => {
            var l;
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.DomType = void 0),
              (function (t) {
                (t.Document = 'document'),
                  (t.Paragraph = 'paragraph'),
                  (t.Run = 'run'),
                  (t.Break = 'break'),
                  (t.NoBreakHyphen = 'noBreakHyphen'),
                  (t.Table = 'table'),
                  (t.Row = 'row'),
                  (t.Cell = 'cell'),
                  (t.Hyperlink = 'hyperlink'),
                  (t.Drawing = 'drawing'),
                  (t.Image = 'image'),
                  (t.Text = 'text'),
                  (t.Tab = 'tab'),
                  (t.Symbol = 'symbol'),
                  (t.BookmarkStart = 'bookmarkStart'),
                  (t.BookmarkEnd = 'bookmarkEnd'),
                  (t.Footer = 'footer'),
                  (t.Header = 'header'),
                  (t.FootnoteReference = 'footnoteReference'),
                  (t.EndnoteReference = 'endnoteReference'),
                  (t.Footnote = 'footnote'),
                  (t.Endnote = 'endnote'),
                  (t.SimpleField = 'simpleField'),
                  (t.ComplexField = 'complexField'),
                  (t.Instruction = 'instruction'),
                  (t.VmlPicture = 'vmlPicture'),
                  (t.MmlMath = 'mmlMath'),
                  (t.MmlMathParagraph = 'mmlMathParagraph'),
                  (t.MmlFraction = 'mmlFraction'),
                  (t.MmlNumerator = 'mmlNumerator'),
                  (t.MmlDenominator = 'mmlDenominator'),
                  (t.MmlRadical = 'mmlRadical'),
                  (t.MmlBase = 'mmlBase'),
                  (t.MmlDegree = 'mmlDegree'),
                  (t.MmlSuperscript = 'mmlSuperscript'),
                  (t.MmlSubscript = 'mmlSubscript'),
                  (t.MmlSubArgument = 'mmlSubArgument'),
                  (t.MmlSuperArgument = 'mmlSuperArgument'),
                  (t.MmlNary = 'mmlNary'),
                  (t.MmlDelimiter = 'mmlDelimiter'),
                  (t.MmlRun = 'mmlRun'),
                  (t.VmlElement = 'vmlElement'),
                  (t.Inserted = 'inserted'),
                  (t.Deleted = 'deleted'),
                  (t.DeletedText = 'deletedText');
              })(l || (e.DomType = l = {}));
          },
          931: (y, e) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.parseLineSpacing = void 0),
              (e.parseLineSpacing = function (l, t) {
                return {
                  before: t.lengthAttr(l, 'before'),
                  after: t.lengthAttr(l, 'after'),
                  line: t.intAttr(l, 'line'),
                  lineRule: t.attr(l, 'lineRule'),
                };
              });
          },
          109: (y, e, l) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.parseNumbering =
                e.parseTabs =
                e.parseParagraphProperty =
                e.parseParagraphProperties =
                  void 0);
            const t = l(149),
              g = l(59),
              m = l(931),
              a = l(488);
            function n(f, u, b) {
              if (f.namespaceURI != t.ns.wordml) return !1;
              if ((0, t.parseCommonProperty)(f, u, b)) return !0;
              switch (f.localName) {
                case 'tabs':
                  u.tabs = p(f, b);
                  break;
                case 'sectPr':
                  u.sectionProps = (0, g.parseSectionProperties)(f, b);
                  break;
                case 'numPr':
                  u.numbering = i(f, b);
                  break;
                case 'spacing':
                  return (u.lineSpacing = (0, m.parseLineSpacing)(f, b)), !1;
                case 'textAlignment':
                  return (u.textAlignment = b.attr(f, 'val')), !1;
                case 'keepNext':
                  u.keepLines = b.boolAttr(f, 'val', !0);
                  break;
                case 'keepNext':
                  u.keepNext = b.boolAttr(f, 'val', !0);
                  break;
                case 'pageBreakBefore':
                  u.pageBreakBefore = b.boolAttr(f, 'val', !0);
                  break;
                case 'outlineLvl':
                  u.outlineLevel = b.intAttr(f, 'val');
                  break;
                case 'pStyle':
                  u.styleName = b.attr(f, 'val');
                  break;
                case 'rPr':
                  u.runProps = (0, a.parseRunProperties)(f, b);
                  break;
                default:
                  return !1;
              }
              return !0;
            }
            function p(f, u) {
              return u
                .elements(f, 'tab')
                .map((b) => ({
                  position: u.lengthAttr(b, 'pos'),
                  leader: u.attr(b, 'leader'),
                  style: u.attr(b, 'val'),
                }));
            }
            function i(f, u) {
              var b = {};
              for (let P of u.elements(f))
                switch (P.localName) {
                  case 'numId':
                    b.id = u.attr(P, 'val');
                    break;
                  case 'ilvl':
                    b.level = u.intAttr(P, 'val');
                }
              return b;
            }
            (e.parseParagraphProperties = function (f, u) {
              let b = {};
              for (let P of u.elements(f)) n(P, b, u);
              return b;
            }),
              (e.parseParagraphProperty = n),
              (e.parseTabs = p),
              (e.parseNumbering = i);
          },
          488: (y, e, l) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.parseRunProperty = e.parseRunProperties = void 0);
            const t = l(149);
            function g(m, a, n) {
              return !!(0, t.parseCommonProperty)(m, a, n);
            }
            (e.parseRunProperties = function (m, a) {
              let n = {};
              for (let p of a.elements(m)) g(p, n, a);
              return n;
            }),
              (e.parseRunProperty = g);
          },
          59: (y, e, l) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.parseSectionProperties = e.SectionType = void 0);
            const t = l(472),
              g = l(191);
            var m;
            function a(i, f) {
              return {
                numberOfColumns: f.intAttr(i, 'num'),
                space: f.lengthAttr(i, 'space'),
                separator: f.boolAttr(i, 'sep'),
                equalWidth: f.boolAttr(i, 'equalWidth', !0),
                columns: f
                  .elements(i, 'col')
                  .map((u) => ({ width: f.lengthAttr(u, 'w'), space: f.lengthAttr(u, 'space') })),
              };
            }
            function n(i, f) {
              return {
                chapSep: f.attr(i, 'chapSep'),
                chapStyle: f.attr(i, 'chapStyle'),
                format: f.attr(i, 'fmt'),
                start: f.intAttr(i, 'start'),
              };
            }
            function p(i, f) {
              return { id: f.attr(i, 'id'), type: f.attr(i, 'type') };
            }
            (function (i) {
              (i.Continuous = 'continuous'),
                (i.NextPage = 'nextPage'),
                (i.NextColumn = 'nextColumn'),
                (i.EvenPage = 'evenPage'),
                (i.OddPage = 'oddPage');
            })(m || (e.SectionType = m = {})),
              (e.parseSectionProperties = function (i, f = t.default) {
                var u,
                  b,
                  P = {};
                for (let C of f.elements(i))
                  switch (C.localName) {
                    case 'pgSz':
                      P.pageSize = {
                        width: f.lengthAttr(C, 'w'),
                        height: f.lengthAttr(C, 'h'),
                        orientation: f.attr(C, 'orient'),
                      };
                      break;
                    case 'type':
                      P.type = f.attr(C, 'val');
                      break;
                    case 'pgMar':
                      P.pageMargins = {
                        left: f.lengthAttr(C, 'left'),
                        right: f.lengthAttr(C, 'right'),
                        top: f.lengthAttr(C, 'top'),
                        bottom: f.lengthAttr(C, 'bottom'),
                        header: f.lengthAttr(C, 'header'),
                        footer: f.lengthAttr(C, 'footer'),
                        gutter: f.lengthAttr(C, 'gutter'),
                      };
                      break;
                    case 'cols':
                      P.columns = a(C, f);
                      break;
                    case 'headerReference':
                      ((u = P.headerRefs) !== null && u !== void 0 ? u : (P.headerRefs = [])).push(
                        p(C, f),
                      );
                      break;
                    case 'footerReference':
                      ((b = P.footerRefs) !== null && b !== void 0 ? b : (P.footerRefs = [])).push(
                        p(C, f),
                      );
                      break;
                    case 'titlePg':
                      P.titlePage = f.boolAttr(C, 'val', !0);
                      break;
                    case 'pgBorders':
                      P.pageBorders = (0, g.parseBorders)(C, f);
                      break;
                    case 'pgNumType':
                      P.pageNumber = n(C, f);
                  }
                return P;
              });
          },
          667: (y, e, l) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.renderAsync = e.praseAsync = e.defaultOptions = void 0);
            const t = l(213),
              g = l(168),
              m = l(932);
            (e.defaultOptions = {
              ignoreHeight: !1,
              ignoreWidth: !1,
              ignoreFonts: !1,
              breakPages: !0,
              debug: !1,
              experimental: !1,
              className: 'docx',
              inWrapper: !0,
              trimXmlDeclaration: !0,
              ignoreLastRenderedPageBreak: !0,
              renderHeaders: !0,
              renderFooters: !0,
              renderFootnotes: !0,
              renderEndnotes: !0,
              useBase64URL: !1,
              useMathMLPolyfill: !1,
              renderChanges: !1,
            }),
              (e.praseAsync = function (a, n = null) {
                const p = Object.assign(Object.assign({}, e.defaultOptions), n);
                return t.WordDocument.load(a, new g.DocumentParser(p), p);
              }),
              (e.renderAsync = function (a, n, p = null, i = null) {
                return be(this, null, function* () {
                  const f = Object.assign(Object.assign({}, e.defaultOptions), i),
                    u = new m.HtmlRenderer(window.document),
                    b = yield t.WordDocument.load(a, new g.DocumentParser(f), f);
                  return u.render(b, n, p, f), b;
                });
              });
          },
          380: (y, e, l) => {
            Object.defineProperty(e, '__esModule', { value: !0 }), (e.FontTablePart = void 0);
            const t = l(530),
              g = l(512);
            class m extends t.Part {
              parseXml(n) {
                this.fonts = (0, g.parseFonts)(n, this._package.xmlParser);
              }
            }
            e.FontTablePart = m;
          },
          512: (y, e) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.parseEmbedFontRef = e.parseFont = e.parseFonts = void 0);
            const l = {
              embedRegular: 'regular',
              embedBold: 'bold',
              embedItalic: 'italic',
              embedBoldItalic: 'boldItalic',
            };
            function t(m, a) {
              let n = { name: a.attr(m, 'name'), embedFontRefs: [] };
              for (let p of a.elements(m))
                switch (p.localName) {
                  case 'family':
                    n.family = a.attr(p, 'val');
                    break;
                  case 'altName':
                    n.altName = a.attr(p, 'val');
                    break;
                  case 'embedRegular':
                  case 'embedBold':
                  case 'embedItalic':
                  case 'embedBoldItalic':
                    n.embedFontRefs.push(g(p, a));
                }
              return n;
            }
            function g(m, a) {
              return { id: a.attr(m, 'id'), key: a.attr(m, 'fontKey'), type: l[m.localName] };
            }
            (e.parseFonts = function (m, a) {
              return a.elements(m).map((n) => t(n, a));
            }),
              (e.parseFont = t),
              (e.parseEmbedFontRef = g);
          },
          984: (y, e, l) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.WmlFooter = e.WmlHeader = void 0);
            const t = l(120);
            (e.WmlHeader = class {
              constructor() {
                (this.type = t.DomType.Header), (this.children = []), (this.cssStyle = {});
              }
            }),
              (e.WmlFooter = class {
                constructor() {
                  (this.type = t.DomType.Footer), (this.children = []), (this.cssStyle = {});
                }
              });
          },
          985: (y, e, l) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.FooterPart = e.HeaderPart = e.BaseHeaderFooterPart = void 0);
            const t = l(530),
              g = l(984);
            class m extends t.Part {
              constructor(n, p, i) {
                super(n, p), (this._documentParser = i);
              }
              parseXml(n) {
                (this.rootElement = this.createRootElement()),
                  (this.rootElement.children = this._documentParser.parseBodyElements(n));
              }
            }
            (e.BaseHeaderFooterPart = m),
              (e.HeaderPart = class extends m {
                createRootElement() {
                  return new g.WmlHeader();
                }
              }),
              (e.FooterPart = class extends m {
                createRootElement() {
                  return new g.WmlFooter();
                }
              });
          },
          932: (y, e, l) => {
            Object.defineProperty(e, '__esModule', { value: !0 }), (e.HtmlRenderer = void 0);
            const t = l(120),
              g = l(593),
              m = l(630),
              a = l(438),
              n = 'http://www.w3.org/1998/Math/MathML';
            function p(s, o, r) {
              return f(void 0, s, o, r);
            }
            function i(s, o, r) {
              return f('http://www.w3.org/2000/svg', s, o, r);
            }
            function f(s, o, r, d) {
              var v = s ? document.createElementNS(s, o) : document.createElement(o);
              return Object.assign(v, r), d && b(v, d), v;
            }
            function u(s) {
              s.innerHTML = '';
            }
            function b(s, o) {
              o.forEach((r) => s.appendChild((0, g.isString)(r) ? document.createTextNode(r) : r));
            }
            function P(s) {
              return p('style', { innerHTML: s });
            }
            function C(s, o) {
              s.appendChild(document.createComment(o));
            }
            e.HtmlRenderer = class {
              constructor(s) {
                (this.htmlDocument = s),
                  (this.className = 'docx'),
                  (this.styleMap = {}),
                  (this.currentPart = null),
                  (this.tableVerticalMerges = []),
                  (this.currentVerticalMerge = null),
                  (this.tableCellPositions = []),
                  (this.currentCellPosition = null),
                  (this.footnoteMap = {}),
                  (this.endnoteMap = {}),
                  (this.currentEndnoteIds = []),
                  (this.usedHederFooterParts = []),
                  (this.currentTabs = []),
                  (this.tabsTimeout = 0),
                  (this.createElement = p);
              }
              render(s, o, r = null, d) {
                var v;
                (this.document = s),
                  (this.options = d),
                  (this.className = d.className),
                  (this.rootSelector = d.inWrapper ? `.${this.className}-wrapper` : ':root'),
                  (this.styleMap = null),
                  u((r = r || o)),
                  u(o),
                  C(r, 'docxjs library predefined styles'),
                  r.appendChild(this.renderDefaultStyle()),
                  !window.MathMLElement &&
                    d.useMathMLPolyfill &&
                    (C(r, 'docxjs mathml polyfill styles'), r.appendChild(P(a.default))),
                  s.themePart &&
                    (C(r, 'docxjs document theme values'), this.renderTheme(s.themePart, r)),
                  s.stylesPart != null &&
                    ((this.styleMap = this.processStyles(s.stylesPart.styles)),
                    C(r, 'docxjs document styles'),
                    r.appendChild(this.renderStyles(s.stylesPart.styles))),
                  s.numberingPart &&
                    (this.prodessNumberings(s.numberingPart.domNumberings),
                    C(r, 'docxjs document numbering styles'),
                    r.appendChild(this.renderNumbering(s.numberingPart.domNumberings, r))),
                  s.footnotesPart &&
                    (this.footnoteMap = (0, g.keyBy)(s.footnotesPart.notes, (D) => D.id)),
                  s.endnotesPart &&
                    (this.endnoteMap = (0, g.keyBy)(s.endnotesPart.notes, (D) => D.id)),
                  s.settingsPart &&
                    (this.defaultTabSize =
                      (v = s.settingsPart.settings) === null || v === void 0
                        ? void 0
                        : v.defaultTabStop),
                  !d.ignoreFonts && s.fontTablePart && this.renderFontTable(s.fontTablePart, r);
                var S = this.renderSections(s.documentPart.body);
                this.options.inWrapper ? o.appendChild(this.renderWrapper(S)) : b(o, S),
                  this.refreshTabStops();
              }
              renderTheme(s, o) {
                var r, d;
                const v = {},
                  S = (r = s.theme) === null || r === void 0 ? void 0 : r.fontScheme;
                S &&
                  (S.majorFont && (v['--docx-majorHAnsi-font'] = S.majorFont.latinTypeface),
                  S.minorFont && (v['--docx-minorHAnsi-font'] = S.minorFont.latinTypeface));
                const D = (d = s.theme) === null || d === void 0 ? void 0 : d.colorScheme;
                if (D)
                  for (let [E, c] of Object.entries(D.colors)) v[`--docx-${E}-color`] = `#${c}`;
                const _ = this.styleToString(`.${this.className}`, v);
                o.appendChild(P(_));
              }
              renderFontTable(s, o) {
                for (let r of s.fonts)
                  for (let d of r.embedFontRefs)
                    this.document.loadFont(d.id, d.key).then((v) => {
                      const S = { 'font-family': r.name, src: `url(${v})` };
                      (d.type != 'bold' && d.type != 'boldItalic') || (S['font-weight'] = 'bold'),
                        (d.type != 'italic' && d.type != 'boldItalic') ||
                          (S['font-style'] = 'italic'),
                        C(o, `docxjs ${r.name} font`);
                      const D = this.styleToString('@font-face', S);
                      o.appendChild(P(D)), this.refreshTabStops();
                    });
              }
              processStyleName(s) {
                return s ? `${this.className}_${(0, g.escapeClassName)(s)}` : this.className;
              }
              processStyles(s) {
                const o = (0, g.keyBy)(
                  s.filter((d) => d.id != null),
                  (d) => d.id,
                );
                for (const d of s.filter((v) => v.basedOn)) {
                  var r = o[d.basedOn];
                  if (r) {
                    (d.paragraphProps = (0, g.mergeDeep)(d.paragraphProps, r.paragraphProps)),
                      (d.runProps = (0, g.mergeDeep)(d.runProps, r.runProps));
                    for (const v of r.styles) {
                      const S = d.styles.find((D) => D.target == v.target);
                      S
                        ? this.copyStyleProperties(v.values, S.values)
                        : d.styles.push(
                            Object.assign(Object.assign({}, v), {
                              values: Object.assign({}, v.values),
                            }),
                          );
                    }
                  } else this.options.debug && console.warn(`Can't find base style ${d.basedOn}`);
                }
                for (let d of s) d.cssName = this.processStyleName(d.id);
                return o;
              }
              prodessNumberings(s) {
                var o;
                for (let r of s.filter((d) => d.pStyleName)) {
                  const d = this.findStyle(r.pStyleName);
                  !((o = d == null ? void 0 : d.paragraphProps) === null || o === void 0) &&
                    o.numbering &&
                    (d.paragraphProps.numbering.level = r.level);
                }
              }
              processElement(s) {
                if (s.children)
                  for (var o of s.children)
                    (o.parent = s),
                      o.type == t.DomType.Table ? this.processTable(o) : this.processElement(o);
              }
              processTable(s) {
                for (var o of s.children)
                  for (var r of o.children)
                    (r.cssStyle = this.copyStyleProperties(s.cellStyle, r.cssStyle, [
                      'border-left',
                      'border-right',
                      'border-top',
                      'border-bottom',
                      'padding-left',
                      'padding-right',
                      'padding-top',
                      'padding-bottom',
                    ])),
                      this.processElement(r);
              }
              copyStyleProperties(s, o, r = null) {
                if (!s) return o;
                for (var d of (o == null && (o = {}),
                r == null && (r = Object.getOwnPropertyNames(s)),
                r))
                  s.hasOwnProperty(d) && !o.hasOwnProperty(d) && (o[d] = s[d]);
                return o;
              }
              createSection(s, o) {
                var r = this.createElement('section', { className: s });
                return (
                  o &&
                    (o.pageMargins &&
                      ((r.style.paddingLeft = o.pageMargins.left),
                      (r.style.paddingRight = o.pageMargins.right),
                      (r.style.paddingTop = o.pageMargins.top),
                      (r.style.paddingBottom = o.pageMargins.bottom)),
                    o.pageSize &&
                      (this.options.ignoreWidth || (r.style.width = o.pageSize.width),
                      this.options.ignoreHeight || (r.style.minHeight = o.pageSize.height)),
                    o.columns &&
                      o.columns.numberOfColumns &&
                      ((r.style.columnCount = `${o.columns.numberOfColumns}`),
                      (r.style.columnGap = o.columns.space),
                      o.columns.separator && (r.style.columnRule = '1px solid black'))),
                  r
                );
              }
              renderSections(s) {
                const o = [];
                this.processElement(s);
                const r = this.splitBySection(s.children);
                let d = null;
                for (let S = 0, D = r.length; S < D; S++) {
                  this.currentFootnoteIds = [];
                  const _ = r[S],
                    E = _.sectProps || s.props,
                    c = this.createSection(this.className, E);
                  this.renderStyleValues(s.cssStyle, c),
                    this.options.renderHeaders &&
                      this.renderHeaderFooter(E.headerRefs, E, o.length, d != E, c);
                  var v = this.createElement('article');
                  this.renderElements(_.elements, v),
                    c.appendChild(v),
                    this.options.renderFootnotes &&
                      this.renderNotes(this.currentFootnoteIds, this.footnoteMap, c),
                    this.options.renderEndnotes &&
                      S == D - 1 &&
                      this.renderNotes(this.currentEndnoteIds, this.endnoteMap, c),
                    this.options.renderFooters &&
                      this.renderHeaderFooter(E.footerRefs, E, o.length, d != E, c),
                    o.push(c),
                    (d = E);
                }
                return o;
              }
              renderHeaderFooter(s, o, r, d, v) {
                var S, D;
                if (s) {
                  var _ =
                      (D =
                        (S = o.titlePage && d ? s.find((c) => c.type == 'first') : null) !== null &&
                        S !== void 0
                          ? S
                          : r % 2 == 1
                          ? s.find((c) => c.type == 'even')
                          : null) !== null && D !== void 0
                        ? D
                        : s.find((c) => c.type == 'default'),
                    E = _ && this.document.findPartByRelId(_.id, this.document.documentPart);
                  E &&
                    ((this.currentPart = E),
                    this.usedHederFooterParts.includes(E.path) ||
                      (this.processElement(E.rootElement), this.usedHederFooterParts.push(E.path)),
                    this.renderElements([E.rootElement], v),
                    (this.currentPart = null));
                }
              }
              isPageBreakElement(s) {
                return (
                  s.type == t.DomType.Break &&
                  (s.break == 'lastRenderedPageBreak'
                    ? !this.options.ignoreLastRenderedPageBreak
                    : s.break == 'page')
                );
              }
              splitBySection(s) {
                var o,
                  r = { sectProps: null, elements: [] },
                  d = [r];
                for (let z of s) {
                  if (z.type == t.DomType.Paragraph) {
                    const q = this.findStyle(z.styleName);
                    !((o = q == null ? void 0 : q.paragraphProps) === null || o === void 0) &&
                      o.pageBreakBefore &&
                      ((r.sectProps = v), (r = { sectProps: null, elements: [] }), d.push(r));
                  }
                  if ((r.elements.push(z), z.type == t.DomType.Paragraph)) {
                    const q = z;
                    var v = q.sectionProps,
                      S = -1,
                      D = -1;
                    if (
                      (this.options.breakPages &&
                        q.children &&
                        (S = q.children.findIndex((L) => {
                          var J, $;
                          return (
                            (D =
                              ($ =
                                (J = L.children) === null || J === void 0
                                  ? void 0
                                  : J.findIndex(this.isPageBreakElement.bind(this))) !== null &&
                              $ !== void 0
                                ? $
                                : -1) != -1
                          );
                        })),
                      (v || S != -1) &&
                        ((r.sectProps = v), (r = { sectProps: null, elements: [] }), d.push(r)),
                      S != -1)
                    ) {
                      let L = q.children[S],
                        J = D < L.children.length - 1;
                      if (S < q.children.length - 1 || J) {
                        var _ = z.children,
                          E = Object.assign(Object.assign({}, z), { children: _.slice(S) });
                        if (((z.children = _.slice(0, S)), r.elements.push(E), J)) {
                          let $ = L.children,
                            te = Object.assign(Object.assign({}, L), { children: $.slice(0, D) });
                          z.children.push(te), (L.children = $.slice(D));
                        }
                      }
                    }
                  }
                }
                let c = null;
                for (let z = d.length - 1; z >= 0; z--)
                  d[z].sectProps == null ? (d[z].sectProps = c) : (c = d[z].sectProps);
                return d;
              }
              renderWrapper(s) {
                return this.createElement('div', { className: `${this.className}-wrapper` }, s);
              }
              renderDefaultStyle() {
                var s = this.className;
                return P(`
.${s}-wrapper { background: gray; padding: 30px; padding-bottom: 0px; display: flex; flex-flow: column; align-items: center; } 
.${s}-wrapper>section.${s} { background: white; box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); margin-bottom: 30px; }
.${s} { color: black; }
section.${s} { box-sizing: border-box; display: flex; flex-flow: column nowrap; position: relative; overflow: hidden; }
section.${s}>article { margin-bottom: auto; }
.${s} table { border-collapse: collapse; }
.${s} table td, .${s} table th { vertical-align: top; }
.${s} p { margin: 0pt; min-height: 1em; }
.${s} span { white-space: pre-wrap; overflow-wrap: break-word; }
.${s} a { color: inherit; text-decoration: inherit; }
`);
              }
              renderNumbering(s, o) {
                var r = '',
                  d = [];
                for (var v of s) {
                  var S = `p.${this.numberingClass(v.id, v.level)}`,
                    D = 'none';
                  if (v.bullet) {
                    let _ = `--${this.className}-${v.bullet.src}`.toLowerCase();
                    (r += this.styleToString(
                      `${S}:before`,
                      { content: "' '", display: 'inline-block', background: `var(${_})` },
                      v.bullet.style,
                    )),
                      this.document.loadNumberingImage(v.bullet.src).then((E) => {
                        var c = `${this.rootSelector} { ${_}: url(${E}) }`;
                        o.appendChild(P(c));
                      });
                  } else if (v.levelText) {
                    let _ = this.numberingCounter(v.id, v.level);
                    v.level > 0
                      ? (r += this.styleToString(`p.${this.numberingClass(v.id, v.level - 1)}`, {
                          'counter-reset': _,
                        }))
                      : d.push(_),
                      (r += this.styleToString(
                        `${S}:before`,
                        Object.assign(
                          {
                            content: this.levelTextToContent(
                              v.levelText,
                              v.suff,
                              v.id,
                              this.numFormatToCssValue(v.format),
                            ),
                            'counter-increment': _,
                          },
                          v.rStyle,
                        ),
                      ));
                  } else D = this.numFormatToCssValue(v.format);
                  r += this.styleToString(
                    S,
                    Object.assign(
                      {
                        display: 'list-item',
                        'list-style-position': 'inside',
                        'list-style-type': D,
                      },
                      v.pStyle,
                    ),
                  );
                }
                return (
                  d.length > 0 &&
                    (r += this.styleToString(this.rootSelector, { 'counter-reset': d.join(' ') })),
                  P(r)
                );
              }
              renderStyles(s) {
                var o,
                  r = '';
                const d = this.styleMap,
                  v = (0, g.keyBy)(
                    s.filter((E) => E.isDefault),
                    (E) => E.target,
                  );
                for (const E of s) {
                  var S = E.styles;
                  if (E.linked) {
                    var D = E.linked && d[E.linked];
                    D
                      ? (S = S.concat(D.styles))
                      : this.options.debug && console.warn(`Can't find linked style ${E.linked}`);
                  }
                  for (const c of S) {
                    var _ = `${(o = E.target) !== null && o !== void 0 ? o : ''}.${E.cssName}`;
                    E.target != c.target && (_ += ` ${c.target}`),
                      v[E.target] == E && (_ = `.${this.className} ${E.target}, ` + _),
                      (r += this.styleToString(_, c.values));
                  }
                }
                return P(r);
              }
              renderNotes(s, o, r) {
                var d = s.map((S) => o[S]).filter((S) => S);
                if (d.length > 0) {
                  var v = this.createElement('ol', null, this.renderElements(d));
                  r.appendChild(v);
                }
              }
              renderElement(s) {
                switch (s.type) {
                  case t.DomType.Paragraph:
                    return this.renderParagraph(s);
                  case t.DomType.BookmarkStart:
                    return this.renderBookmarkStart(s);
                  case t.DomType.BookmarkEnd:
                    return null;
                  case t.DomType.Run:
                    return this.renderRun(s);
                  case t.DomType.Table:
                    return this.renderTable(s);
                  case t.DomType.Row:
                    return this.renderTableRow(s);
                  case t.DomType.Cell:
                    return this.renderTableCell(s);
                  case t.DomType.Hyperlink:
                    return this.renderHyperlink(s);
                  case t.DomType.Drawing:
                    return this.renderDrawing(s);
                  case t.DomType.Image:
                    return this.renderImage(s);
                  case t.DomType.Text:
                  case t.DomType.Text:
                    return this.renderText(s);
                  case t.DomType.DeletedText:
                    return this.renderDeletedText(s);
                  case t.DomType.Tab:
                    return this.renderTab(s);
                  case t.DomType.Symbol:
                    return this.renderSymbol(s);
                  case t.DomType.Break:
                    return this.renderBreak(s);
                  case t.DomType.Footer:
                    return this.renderContainer(s, 'footer');
                  case t.DomType.Header:
                    return this.renderContainer(s, 'header');
                  case t.DomType.Footnote:
                  case t.DomType.Endnote:
                    return this.renderContainer(s, 'li');
                  case t.DomType.FootnoteReference:
                    return this.renderFootnoteReference(s);
                  case t.DomType.EndnoteReference:
                    return this.renderEndnoteReference(s);
                  case t.DomType.NoBreakHyphen:
                    return this.createElement('wbr');
                  case t.DomType.VmlPicture:
                    return this.renderVmlPicture(s);
                  case t.DomType.VmlElement:
                    return this.renderVmlElement(s);
                  case t.DomType.MmlMath:
                    return this.renderContainerNS(s, n, 'math', { xmlns: n });
                  case t.DomType.MmlMathParagraph:
                    return this.renderContainer(s, 'span');
                  case t.DomType.MmlFraction:
                    return this.renderContainerNS(s, n, 'mfrac');
                  case t.DomType.MmlNumerator:
                  case t.DomType.MmlDenominator:
                    return this.renderContainerNS(s, n, 'mrow');
                  case t.DomType.MmlRadical:
                    return this.renderMmlRadical(s);
                  case t.DomType.MmlDegree:
                    return this.renderContainerNS(s, n, 'mn');
                  case t.DomType.MmlSuperscript:
                    return this.renderContainerNS(s, n, 'msup');
                  case t.DomType.MmlSubscript:
                    return this.renderContainerNS(s, n, 'msub');
                  case t.DomType.MmlBase:
                    return this.renderContainerNS(s, n, 'mrow');
                  case t.DomType.MmlSuperArgument:
                  case t.DomType.MmlSubArgument:
                    return this.renderContainerNS(s, n, 'mn');
                  case t.DomType.MmlDelimiter:
                    return this.renderMmlDelimiter(s);
                  case t.DomType.MmlRun:
                    return this.renderMmlRun(s);
                  case t.DomType.MmlNary:
                    return this.renderMmlNary(s);
                  case t.DomType.Inserted:
                    return this.renderInserted(s);
                  case t.DomType.Deleted:
                    return this.renderDeleted(s);
                }
                return null;
              }
              renderChildren(s, o) {
                return this.renderElements(s.children, o);
              }
              renderElements(s, o) {
                if (s == null) return null;
                var r = s.flatMap((d) => this.renderElement(d)).filter((d) => d != null);
                return o && b(o, r), r;
              }
              renderContainer(s, o, r) {
                return this.createElement(o, r, this.renderChildren(s));
              }
              renderContainerNS(s, o, r, d) {
                return f(o, r, d, this.renderChildren(s));
              }
              renderParagraph(s) {
                var o,
                  r,
                  d,
                  v,
                  S = this.createElement('p');
                const D = this.findStyle(s.styleName);
                ((o = s.tabs) !== null && o !== void 0) ||
                  (s.tabs =
                    (r = D == null ? void 0 : D.paragraphProps) === null || r === void 0
                      ? void 0
                      : r.tabs),
                  this.renderClass(s, S),
                  this.renderChildren(s, S),
                  this.renderStyleValues(s.cssStyle, S),
                  this.renderCommonProperties(S.style, s);
                const _ =
                  (d = s.numbering) !== null && d !== void 0
                    ? d
                    : (v = D == null ? void 0 : D.paragraphProps) === null || v === void 0
                    ? void 0
                    : v.numbering;
                return _ && S.classList.add(this.numberingClass(_.id, _.level)), S;
              }
              renderRunProperties(s, o) {
                this.renderCommonProperties(s, o);
              }
              renderCommonProperties(s, o) {
                o != null &&
                  (o.color && (s.color = o.color), o.fontSize && (s['font-size'] = o.fontSize));
              }
              renderHyperlink(s) {
                var o = this.createElement('a');
                if ((this.renderChildren(s, o), this.renderStyleValues(s.cssStyle, o), s.href))
                  o.href = s.href;
                else if (s.id) {
                  const r = this.document.documentPart.rels.find(
                    (d) => d.id == s.id && d.targetMode === 'External',
                  );
                  o.href = r == null ? void 0 : r.target;
                }
                return o;
              }
              renderDrawing(s) {
                var o = this.createElement('div');
                return (
                  (o.style.display = 'inline-block'),
                  (o.style.position = 'relative'),
                  (o.style.textIndent = '0px'),
                  this.renderChildren(s, o),
                  this.renderStyleValues(s.cssStyle, o),
                  o
                );
              }
              renderImage(s) {
                let o = this.createElement('img');
                return (
                  this.renderStyleValues(s.cssStyle, o),
                  this.document &&
                    this.document.loadDocumentImage(s.src, this.currentPart).then((r) => {
                      o.src = r;
                    }),
                  o
                );
              }
              renderText(s) {
                return this.htmlDocument.createTextNode(s.text);
              }
              renderDeletedText(s) {
                return this.options.renderEndnotes
                  ? this.htmlDocument.createTextNode(s.text)
                  : null;
              }
              renderBreak(s) {
                return s.break == 'textWrapping' ? this.createElement('br') : null;
              }
              renderInserted(s) {
                return this.options.renderChanges
                  ? this.renderContainer(s, 'ins')
                  : this.renderChildren(s);
              }
              renderDeleted(s) {
                return this.options.renderChanges ? this.renderContainer(s, 'del') : null;
              }
              renderSymbol(s) {
                var o = this.createElement('span');
                return (o.style.fontFamily = s.font), (o.innerHTML = `&#x${s.char};`), o;
              }
              renderFootnoteReference(s) {
                var o = this.createElement('sup');
                return (
                  this.currentFootnoteIds.push(s.id),
                  (o.textContent = `${this.currentFootnoteIds.length}`),
                  o
                );
              }
              renderEndnoteReference(s) {
                var o = this.createElement('sup');
                return (
                  this.currentEndnoteIds.push(s.id),
                  (o.textContent = `${this.currentEndnoteIds.length}`),
                  o
                );
              }
              renderTab(s) {
                var o,
                  r = this.createElement('span');
                if (((r.innerHTML = '&emsp;'), this.options.experimental)) {
                  r.className = this.tabStopClass();
                  var d =
                    (o = (function (v, S) {
                      for (var D = v.parent; D != null && D.type != S; ) D = D.parent;
                      return D;
                    })(s, t.DomType.Paragraph)) === null || o === void 0
                      ? void 0
                      : o.tabs;
                  this.currentTabs.push({ stops: d, span: r });
                }
                return r;
              }
              renderBookmarkStart(s) {
                var o = this.createElement('span');
                return (o.id = s.name), o;
              }
              renderRun(s) {
                if (s.fieldRun) return null;
                const o = this.createElement('span');
                if (
                  (s.id && (o.id = s.id),
                  this.renderClass(s, o),
                  this.renderStyleValues(s.cssStyle, o),
                  s.verticalAlign)
                ) {
                  const r = this.createElement(s.verticalAlign);
                  this.renderChildren(s, r), o.appendChild(r);
                } else this.renderChildren(s, o);
                return o;
              }
              renderTable(s) {
                let o = this.createElement('table');
                return (
                  this.tableCellPositions.push(this.currentCellPosition),
                  this.tableVerticalMerges.push(this.currentVerticalMerge),
                  (this.currentVerticalMerge = {}),
                  (this.currentCellPosition = { col: 0, row: 0 }),
                  s.columns && o.appendChild(this.renderTableColumns(s.columns)),
                  this.renderClass(s, o),
                  this.renderChildren(s, o),
                  this.renderStyleValues(s.cssStyle, o),
                  (this.currentVerticalMerge = this.tableVerticalMerges.pop()),
                  (this.currentCellPosition = this.tableCellPositions.pop()),
                  o
                );
              }
              renderTableColumns(s) {
                let o = this.createElement('colgroup');
                for (let r of s) {
                  let d = this.createElement('col');
                  r.width && (d.style.width = r.width), o.appendChild(d);
                }
                return o;
              }
              renderTableRow(s) {
                let o = this.createElement('tr');
                return (
                  (this.currentCellPosition.col = 0),
                  this.renderClass(s, o),
                  this.renderChildren(s, o),
                  this.renderStyleValues(s.cssStyle, o),
                  this.currentCellPosition.row++,
                  o
                );
              }
              renderTableCell(s) {
                let o = this.createElement('td');
                const r = this.currentCellPosition.col;
                return (
                  s.verticalMerge
                    ? s.verticalMerge == 'restart'
                      ? ((this.currentVerticalMerge[r] = o), (o.rowSpan = 1))
                      : this.currentVerticalMerge[r] &&
                        ((this.currentVerticalMerge[r].rowSpan += 1), (o.style.display = 'none'))
                    : (this.currentVerticalMerge[r] = null),
                  this.renderClass(s, o),
                  this.renderChildren(s, o),
                  this.renderStyleValues(s.cssStyle, o),
                  s.span && (o.colSpan = s.span),
                  (this.currentCellPosition.col += o.colSpan),
                  o
                );
              }
              renderVmlPicture(s) {
                var o = p('div');
                return this.renderChildren(s, o), o;
              }
              renderVmlElement(s) {
                var o,
                  r,
                  d = i('svg');
                d.setAttribute('style', s.cssStyleText);
                const v = i(s.tagName);
                return (
                  Object.entries(s.attrs).forEach(([S, D]) => v.setAttribute(S, D)),
                  !((o = s.imageHref) === null || o === void 0) &&
                    o.id &&
                    ((r = this.document) === null ||
                      r === void 0 ||
                      r
                        .loadDocumentImage(s.imageHref.id, this.currentPart)
                        .then((S) => v.setAttribute('href', S))),
                  d.appendChild(v),
                  requestAnimationFrame(() => {
                    const S = d.firstElementChild.getBBox();
                    d.setAttribute('width', `${Math.ceil(S.x + S.width)}`),
                      d.setAttribute('height', `${Math.ceil(S.y + S.height)}`);
                  }),
                  d
                );
              }
              renderMmlRadical(s) {
                var o;
                const r = s.children.find((v) => v.type == t.DomType.MmlBase);
                if (!((o = s.props) === null || o === void 0) && o.hideDegree)
                  return f(n, 'msqrt', null, this.renderElements([r]));
                const d = s.children.find((v) => v.type == t.DomType.MmlDegree);
                return f(n, 'mroot', null, this.renderElements([r, d]));
              }
              renderMmlDelimiter(s) {
                var o, r;
                const d = [];
                return (
                  d.push(
                    f(n, 'mo', null, [(o = s.props.beginChar) !== null && o !== void 0 ? o : '(']),
                  ),
                  d.push(...this.renderElements(s.children)),
                  d.push(
                    f(n, 'mo', null, [(r = s.props.endChar) !== null && r !== void 0 ? r : ')']),
                  ),
                  f(n, 'mrow', null, d)
                );
              }
              renderMmlNary(s) {
                var o;
                const r = [],
                  d = (0, g.keyBy)(s.children, (E) => E.type),
                  v = d[t.DomType.MmlSuperArgument],
                  S = d[t.DomType.MmlSubArgument],
                  D = v ? f(n, 'mo', null, (0, g.asArray)(this.renderElement(v))) : null,
                  _ = S ? f(n, 'mo', null, (0, g.asArray)(this.renderElement(S))) : null;
                if (!((o = s.props) === null || o === void 0) && o.char) {
                  const E = f(n, 'mo', null, [s.props.char]);
                  D || _
                    ? r.push(f(n, 'munderover', null, [E, _, D]))
                    : D
                    ? r.push(f(n, 'mover', null, [E, D]))
                    : _
                    ? r.push(f(n, 'munder', null, [E, _]))
                    : r.push(E);
                }
                return (
                  r.push(...this.renderElements(d[t.DomType.MmlBase].children)),
                  f(n, 'mrow', null, r)
                );
              }
              renderMmlRun(s) {
                const o = f(n, 'ms');
                return (
                  this.renderClass(s, o),
                  this.renderStyleValues(s.cssStyle, o),
                  this.renderChildren(s, o),
                  o
                );
              }
              renderStyleValues(s, o) {
                Object.assign(o.style, s);
              }
              renderClass(s, o) {
                s.className && (o.className = s.className),
                  s.styleName && o.classList.add(this.processStyleName(s.styleName));
              }
              findStyle(s) {
                var o;
                return s && ((o = this.styleMap) === null || o === void 0 ? void 0 : o[s]);
              }
              numberingClass(s, o) {
                return `${this.className}-num-${s}-${o}`;
              }
              tabStopClass() {
                return `${this.className}-tab-stop`;
              }
              styleToString(s, o, r = null) {
                let d = `${s} {\r
`;
                for (const v in o)
                  d += `  ${v}: ${o[v]};\r
`;
                return (
                  r && (d += r),
                  d +
                    `}\r
`
                );
              }
              numberingCounter(s, o) {
                return `${this.className}-num-${s}-${o}`;
              }
              levelTextToContent(s, o, r, d) {
                var v;
                return `"${s.replace(/%\d*/g, (S) => {
                  let D = parseInt(S.substring(1), 10) - 1;
                  return `"counter(${this.numberingCounter(r, D)}, ${d})"`;
                })}${(v = { tab: '\\9', space: '\\a0' }[o]) !== null && v !== void 0 ? v : ''}"`;
              }
              numFormatToCssValue(s) {
                var o;
                return (o = {
                  none: 'none',
                  bullet: 'disc',
                  decimal: 'decimal',
                  lowerLetter: 'lower-alpha',
                  upperLetter: 'upper-alpha',
                  lowerRoman: 'lower-roman',
                  upperRoman: 'upper-roman',
                  decimalZero: 'decimal-leading-zero',
                  aiueo: 'katakana',
                  aiueoFullWidth: 'katakana',
                  chineseCounting: 'simp-chinese-informal',
                  chineseCountingThousand: 'simp-chinese-informal',
                  chineseLegalSimplified: 'simp-chinese-formal',
                  chosung: 'hangul-consonant',
                  ideographDigital: 'cjk-ideographic',
                  ideographTraditional: 'cjk-heavenly-stem',
                  ideographLegalTraditional: 'trad-chinese-formal',
                  ideographZodiac: 'cjk-earthly-branch',
                  iroha: 'katakana-iroha',
                  irohaFullWidth: 'katakana-iroha',
                  japaneseCounting: 'japanese-informal',
                  japaneseDigitalTenThousand: 'cjk-decimal',
                  japaneseLegal: 'japanese-formal',
                  thaiNumbers: 'thai',
                  koreanCounting: 'korean-hangul-formal',
                  koreanDigital: 'korean-hangul-formal',
                  koreanDigital2: 'korean-hanja-informal',
                  hebrew1: 'hebrew',
                  hebrew2: 'hebrew',
                  hindiNumbers: 'devanagari',
                  ganada: 'hangul',
                  taiwaneseCounting: 'cjk-ideographic',
                  taiwaneseCountingThousand: 'cjk-ideographic',
                  taiwaneseDigital: 'cjk-decimal',
                }[s]) !== null && o !== void 0
                  ? o
                  : s;
              }
              refreshTabStops() {
                this.options.experimental &&
                  (clearTimeout(this.tabsTimeout),
                  (this.tabsTimeout = setTimeout(() => {
                    const s = (0, m.computePixelToPoint)();
                    for (let o of this.currentTabs)
                      (0, m.updateTabStop)(o.span, o.stops, this.defaultTabSize, s);
                  }, 500)));
              }
            };
          },
          630: (y, e) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.updateTabStop = e.computePixelToPoint = void 0);
            const l = { pos: 0, leader: 'none', style: 'left' };
            function t(g) {
              return parseFloat(g);
            }
            (e.computePixelToPoint = function (g = document.body) {
              const m = document.createElement('div');
              (m.style.width = '100pt'), g.appendChild(m);
              const a = 100 / m.offsetWidth;
              return g.removeChild(m), a;
            }),
              (e.updateTabStop = function (g, m, a, n = 0.75) {
                const p = g.closest('p'),
                  i = g.getBoundingClientRect(),
                  f = p.getBoundingClientRect(),
                  u = getComputedStyle(p),
                  b =
                    (m == null ? void 0 : m.length) > 0
                      ? m
                          .map((_) => ({ pos: t(_.position), leader: _.leader, style: _.style }))
                          .sort((_, E) => _.pos - E.pos)
                      : [l],
                  P = b[b.length - 1],
                  C = f.width * n,
                  s = t(a);
                let o = P.pos + s;
                if (o < C)
                  for (; o < C && b.length < 50; o += s)
                    b.push(Object.assign(Object.assign({}, l), { pos: o }));
                const r = parseFloat(u.marginLeft),
                  d = f.left + r,
                  v = (i.left - d) * n,
                  S = b.find((_) => _.style != 'clear' && _.pos > v);
                if (S == null) return;
                let D = 1;
                if (S.style == 'right' || S.style == 'center') {
                  const _ = Array.from(p.querySelectorAll(`.${g.className}`)),
                    E = _.indexOf(g) + 1,
                    c = document.createRange();
                  c.setStart(g, 1), E < _.length ? c.setEndBefore(_[E]) : c.setEndAfter(p);
                  const z = S.style == 'center' ? 0.5 : 1,
                    q = c.getBoundingClientRect(),
                    L = q.left + z * q.width - (f.left - r);
                  D = S.pos - L * n;
                } else D = S.pos - v;
                switch (
                  ((g.innerHTML = '&nbsp;'),
                  (g.style.textDecoration = 'inherit'),
                  (g.style.wordSpacing = `${D.toFixed(0)}pt`),
                  S.leader)
                ) {
                  case 'dot':
                  case 'middleDot':
                    (g.style.textDecoration = 'underline'),
                      (g.style.textDecorationStyle = 'dotted');
                    break;
                  case 'hyphen':
                  case 'heavy':
                  case 'underscore':
                    g.style.textDecoration = 'underline';
                }
              });
          },
          881: (y, e, l) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.WmlEndnote = e.WmlFootnote = e.WmlBaseNote = void 0);
            const t = l(120);
            class g {
              constructor() {
                (this.children = []), (this.cssStyle = {});
              }
            }
            (e.WmlBaseNote = g),
              (e.WmlFootnote = class extends g {
                constructor() {
                  super(...arguments), (this.type = t.DomType.Footnote);
                }
              }),
              (e.WmlEndnote = class extends g {
                constructor() {
                  super(...arguments), (this.type = t.DomType.Endnote);
                }
              });
          },
          735: (y, e, l) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.EndnotesPart = e.FootnotesPart = e.BaseNotePart = void 0);
            const t = l(530),
              g = l(881);
            class m extends t.Part {
              constructor(n, p, i) {
                super(n, p), (this._documentParser = i);
              }
            }
            (e.BaseNotePart = m),
              (e.FootnotesPart = class extends m {
                constructor(a, n, p) {
                  super(a, n, p);
                }
                parseXml(a) {
                  this.notes = this._documentParser.parseNotes(a, 'footnote', g.WmlFootnote);
                }
              }),
              (e.EndnotesPart = class extends m {
                constructor(a, n, p) {
                  super(a, n, p);
                }
                parseXml(a) {
                  this.notes = this._documentParser.parseNotes(a, 'endnote', g.WmlEndnote);
                }
              });
          },
          527: (y, e, l) => {
            Object.defineProperty(e, '__esModule', { value: !0 }), (e.NumberingPart = void 0);
            const t = l(530),
              g = l(682);
            class m extends t.Part {
              constructor(n, p, i) {
                super(n, p), (this._documentParser = i);
              }
              parseXml(n) {
                Object.assign(this, (0, g.parseNumberingPart)(n, this._package.xmlParser)),
                  (this.domNumberings = this._documentParser.parseNumberingFile(n));
              }
            }
            e.NumberingPart = m;
          },
          682: (y, e, l) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.parseNumberingBulletPicture =
                e.parseNumberingLevelOverrride =
                e.parseNumberingLevel =
                e.parseAbstractNumbering =
                e.parseNumbering =
                e.parseNumberingPart =
                  void 0);
            const t = l(109),
              g = l(488);
            function m(f, u) {
              let b = { id: u.attr(f, 'numId'), overrides: [] };
              for (let P of u.elements(f))
                switch (P.localName) {
                  case 'abstractNumId':
                    b.abstractId = u.attr(P, 'val');
                    break;
                  case 'lvlOverride':
                    b.overrides.push(p(P, u));
                }
              return b;
            }
            function a(f, u) {
              let b = { id: u.attr(f, 'abstractNumId'), levels: [] };
              for (let P of u.elements(f))
                switch (P.localName) {
                  case 'name':
                    b.name = u.attr(P, 'val');
                    break;
                  case 'multiLevelType':
                    b.multiLevelType = u.attr(P, 'val');
                    break;
                  case 'numStyleLink':
                    b.numberingStyleLink = u.attr(P, 'val');
                    break;
                  case 'styleLink':
                    b.styleLink = u.attr(P, 'val');
                    break;
                  case 'lvl':
                    b.levels.push(n(P, u));
                }
              return b;
            }
            function n(f, u) {
              let b = { level: u.intAttr(f, 'ilvl') };
              for (let P of u.elements(f))
                switch (P.localName) {
                  case 'start':
                    b.start = u.attr(P, 'val');
                    break;
                  case 'lvlRestart':
                    b.restart = u.intAttr(P, 'val');
                    break;
                  case 'numFmt':
                    b.format = u.attr(P, 'val');
                    break;
                  case 'lvlText':
                    b.text = u.attr(P, 'val');
                    break;
                  case 'lvlJc':
                    b.justification = u.attr(P, 'val');
                    break;
                  case 'lvlPicBulletId':
                    b.bulletPictureId = u.attr(P, 'val');
                    break;
                  case 'pStyle':
                    b.paragraphStyle = u.attr(P, 'val');
                    break;
                  case 'pPr':
                    b.paragraphProps = (0, t.parseParagraphProperties)(P, u);
                    break;
                  case 'rPr':
                    b.runProps = (0, g.parseRunProperties)(P, u);
                }
              return b;
            }
            function p(f, u) {
              let b = { level: u.intAttr(f, 'ilvl') };
              for (let P of u.elements(f))
                switch (P.localName) {
                  case 'startOverride':
                    b.start = u.intAttr(P, 'val');
                    break;
                  case 'lvl':
                    b.numberingLevel = n(P, u);
                }
              return b;
            }
            function i(f, u) {
              var b = u.element(f, 'pict'),
                P = b && u.element(b, 'shape'),
                C = P && u.element(P, 'imagedata');
              return C
                ? {
                    id: u.attr(f, 'numPicBulletId'),
                    referenceId: u.attr(C, 'id'),
                    style: u.attr(P, 'style'),
                  }
                : null;
            }
            (e.parseNumberingPart = function (f, u) {
              let b = { numberings: [], abstractNumberings: [], bulletPictures: [] };
              for (let P of u.elements(f))
                switch (P.localName) {
                  case 'num':
                    b.numberings.push(m(P, u));
                    break;
                  case 'abstractNum':
                    b.abstractNumberings.push(a(P, u));
                    break;
                  case 'numPicBullet':
                    b.bulletPictures.push(i(P, u));
                }
              return b;
            }),
              (e.parseNumbering = m),
              (e.parseAbstractNumbering = a),
              (e.parseNumberingLevel = n),
              (e.parseNumberingLevelOverrride = p),
              (e.parseNumberingBulletPicture = i);
          },
          472: (y, e, l) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.XmlParser = e.serializeXmlString = e.parseXmlString = void 0);
            const t = l(149);
            (e.parseXmlString = function (a, n = !1) {
              var p;
              n && (a = a.replace(/<[?].*[?]>/, '')),
                (a = (p = a).charCodeAt(0) === 65279 ? p.substring(1) : p);
              const i = new DOMParser().parseFromString(a, 'application/xml'),
                f =
                  (u = i.getElementsByTagName('parsererror')[0]) === null || u === void 0
                    ? void 0
                    : u.textContent;
              var u;
              if (f) throw new Error(f);
              return i;
            }),
              (e.serializeXmlString = function (a) {
                return new XMLSerializer().serializeToString(a);
              });
            class g {
              elements(n, p = null) {
                const i = [];
                for (let f = 0, u = n.childNodes.length; f < u; f++) {
                  let b = n.childNodes.item(f);
                  b.nodeType != 1 || (p != null && b.localName != p) || i.push(b);
                }
                return i;
              }
              element(n, p) {
                for (let i = 0, f = n.childNodes.length; i < f; i++) {
                  let u = n.childNodes.item(i);
                  if (u.nodeType == 1 && u.localName == p) return u;
                }
                return null;
              }
              elementAttr(n, p, i) {
                var f = this.element(n, p);
                return f ? this.attr(f, i) : void 0;
              }
              attrs(n) {
                return Array.from(n.attributes);
              }
              attr(n, p) {
                for (let i = 0, f = n.attributes.length; i < f; i++) {
                  let u = n.attributes.item(i);
                  if (u.localName == p) return u.value;
                }
                return null;
              }
              intAttr(n, p, i = null) {
                var f = this.attr(n, p);
                return f ? parseInt(f) : i;
              }
              hexAttr(n, p, i = null) {
                var f = this.attr(n, p);
                return f ? parseInt(f, 16) : i;
              }
              floatAttr(n, p, i = null) {
                var f = this.attr(n, p);
                return f ? parseFloat(f) : i;
              }
              boolAttr(n, p, i = null) {
                return (0, t.convertBoolean)(this.attr(n, p), i);
              }
              lengthAttr(n, p, i = t.LengthUsage.Dxa) {
                return (0, t.convertLength)(this.attr(n, p), i);
              }
            }
            e.XmlParser = g;
            const m = new g();
            e.default = m;
          },
          287: (y, e, l) => {
            Object.defineProperty(e, '__esModule', { value: !0 }), (e.SettingsPart = void 0);
            const t = l(530),
              g = l(846);
            class m extends t.Part {
              constructor(n, p) {
                super(n, p);
              }
              parseXml(n) {
                this.settings = (0, g.parseSettings)(n, this._package.xmlParser);
              }
            }
            e.SettingsPart = m;
          },
          846: (y, e) => {
            function l(t, g) {
              var m = { defaultNoteIds: [] };
              for (let a of g.elements(t))
                switch (a.localName) {
                  case 'numFmt':
                    m.nummeringFormat = g.attr(a, 'val');
                    break;
                  case 'footnote':
                  case 'endnote':
                    m.defaultNoteIds.push(g.attr(a, 'id'));
                }
              return m;
            }
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.parseNoteProperties = e.parseSettings = void 0),
              (e.parseSettings = function (t, g) {
                var m = {};
                for (let a of g.elements(t))
                  switch (a.localName) {
                    case 'defaultTabStop':
                      m.defaultTabStop = g.lengthAttr(a, 'val');
                      break;
                    case 'footnotePr':
                      m.footnoteProps = l(a, g);
                      break;
                    case 'endnotePr':
                      m.endnoteProps = l(a, g);
                      break;
                    case 'autoHyphenation':
                      m.autoHyphenation = g.boolAttr(a, 'val');
                  }
                return m;
              }),
              (e.parseNoteProperties = l);
          },
          240: (y, e, l) => {
            Object.defineProperty(e, '__esModule', { value: !0 }), (e.StylesPart = void 0);
            const t = l(530);
            class g extends t.Part {
              constructor(a, n, p) {
                super(a, n), (this._documentParser = p);
              }
              parseXml(a) {
                this.styles = this._documentParser.parseStylesFile(a);
              }
            }
            e.StylesPart = g;
          },
          893: (y, e, l) => {
            Object.defineProperty(e, '__esModule', { value: !0 }), (e.ThemePart = void 0);
            const t = l(530),
              g = l(55);
            class m extends t.Part {
              constructor(n, p) {
                super(n, p);
              }
              parseXml(n) {
                this.theme = (0, g.parseTheme)(n, this._package.xmlParser);
              }
            }
            e.ThemePart = m;
          },
          55: (y, e) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.parseFontInfo =
                e.parseFontScheme =
                e.parseColorScheme =
                e.parseTheme =
                e.DmlTheme =
                  void 0);
            class l {}
            function t(a, n) {
              var p = { name: n.attr(a, 'name'), colors: {} };
              for (let u of n.elements(a)) {
                var i = n.element(u, 'srgbClr'),
                  f = n.element(u, 'sysClr');
                i
                  ? (p.colors[u.localName] = n.attr(i, 'val'))
                  : f && (p.colors[u.localName] = n.attr(f, 'lastClr'));
              }
              return p;
            }
            function g(a, n) {
              var p = { name: n.attr(a, 'name') };
              for (let i of n.elements(a))
                switch (i.localName) {
                  case 'majorFont':
                    p.majorFont = m(i, n);
                    break;
                  case 'minorFont':
                    p.minorFont = m(i, n);
                }
              return p;
            }
            function m(a, n) {
              return {
                latinTypeface: n.elementAttr(a, 'latin', 'typeface'),
                eaTypeface: n.elementAttr(a, 'ea', 'typeface'),
                csTypeface: n.elementAttr(a, 'cs', 'typeface'),
              };
            }
            (e.DmlTheme = l),
              (e.parseTheme = function (a, n) {
                var p = new l(),
                  i = n.element(a, 'themeElements');
                for (let f of n.elements(i))
                  switch (f.localName) {
                    case 'clrScheme':
                      p.colorScheme = t(f, n);
                      break;
                    case 'fontScheme':
                      p.fontScheme = g(f, n);
                  }
                return p;
              }),
              (e.parseColorScheme = t),
              (e.parseFontScheme = g),
              (e.parseFontInfo = m);
          },
          593: (y, e) => {
            function l(t) {
              return t && typeof t == 'object' && !Array.isArray(t);
            }
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.asArray =
                e.formatCssRules =
                e.parseCssRules =
                e.mergeDeep =
                e.isString =
                e.isObject =
                e.blobToBase64 =
                e.keyBy =
                e.resolvePath =
                e.splitPath =
                e.escapeClassName =
                  void 0),
              (e.escapeClassName = function (t) {
                return t == null
                  ? void 0
                  : t.replace(/[ .]+/g, '-').replace(/[&]+/g, 'and').toLowerCase();
              }),
              (e.splitPath = function (t) {
                let g = t.lastIndexOf('/') + 1;
                return [g == 0 ? '' : t.substring(0, g), g == 0 ? t : t.substring(g)];
              }),
              (e.resolvePath = function (t, g) {
                try {
                  const m = 'http://docx/';
                  return new URL(t, m + g).toString().substring(m.length);
                } catch (m) {
                  return `${g}${t}`;
                }
              }),
              (e.keyBy = function (t, g) {
                return t.reduce((m, a) => ((m[g(a)] = a), m), {});
              }),
              (e.blobToBase64 = function (t) {
                return new Promise((g, m) => {
                  const a = new FileReader();
                  (a.onloadend = () => g(a.result)), (a.onerror = () => m()), a.readAsDataURL(t);
                });
              }),
              (e.isObject = l),
              (e.isString = function (t) {
                return (t && typeof t == 'string') || t instanceof String;
              }),
              (e.mergeDeep = function t(g, ...m) {
                var a;
                if (!m.length) return g;
                const n = m.shift();
                if (l(g) && l(n))
                  for (const p in n)
                    l(n[p])
                      ? t((a = g[p]) !== null && a !== void 0 ? a : (g[p] = {}), n[p])
                      : (g[p] = n[p]);
                return t(g, ...m);
              }),
              (e.parseCssRules = function (t) {
                const g = {};
                for (const m of t.split(';')) {
                  const [a, n] = m.split(':');
                  g[a] = n;
                }
                return g;
              }),
              (e.formatCssRules = function (t) {
                return Object.entries(t)
                  .map((g, m) => `${g}: ${m}`)
                  .join(';');
              }),
              (e.asArray = function (t) {
                return Array.isArray(t) ? t : [t];
              });
          },
          320: (y, e, l) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.parseVmlElement = e.VmlElement = void 0);
            const t = l(149),
              g = l(120),
              m = l(472);
            class a {
              constructor() {
                (this.type = g.DomType.VmlElement), (this.attrs = {}), (this.chidren = []);
              }
            }
            function n(i) {
              var f;
              return {
                stroke: m.default.attr(i, 'color'),
                'stroke-width':
                  (f = m.default.lengthAttr(i, 'weight', t.LengthUsage.Emu)) !== null &&
                  f !== void 0
                    ? f
                    : '1px',
              };
            }
            function p(i) {
              return i.split(',');
            }
            (e.VmlElement = a),
              (e.parseVmlElement = function i(f) {
                var u = new a();
                switch (f.localName) {
                  case 'rect':
                    (u.tagName = 'rect'), Object.assign(u.attrs, { width: '100%', height: '100%' });
                    break;
                  case 'oval':
                    (u.tagName = 'ellipse'),
                      Object.assign(u.attrs, { cx: '50%', cy: '50%', rx: '50%', ry: '50%' });
                    break;
                  case 'line':
                    u.tagName = 'line';
                    break;
                  case 'shape':
                    u.tagName = 'g';
                    break;
                  default:
                    return null;
                }
                for (const b of m.default.attrs(f))
                  switch (b.localName) {
                    case 'style':
                      u.cssStyleText = b.value;
                      break;
                    case 'fillcolor':
                      u.attrs.fill = b.value;
                      break;
                    case 'from':
                      const [P, C] = p(b.value);
                      Object.assign(u.attrs, { x1: P, y1: C });
                      break;
                    case 'to':
                      const [s, o] = p(b.value);
                      Object.assign(u.attrs, { x2: s, y2: o });
                  }
                for (const b of m.default.elements(f))
                  switch (b.localName) {
                    case 'stroke':
                      Object.assign(u.attrs, n(b));
                      break;
                    case 'fill':
                      Object.assign(u.attrs, {});
                      break;
                    case 'imagedata':
                      (u.tagName = 'image'),
                        Object.assign(u.attrs, { width: '100%', height: '100%' }),
                        (u.imageHref = {
                          id: m.default.attr(b, 'id'),
                          title: m.default.attr(b, 'title'),
                        });
                      break;
                    default:
                      const P = i(b);
                      P && u.chidren.push(P);
                  }
                return u;
              });
          },
          213: (y, e, l) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.deobfuscate = e.WordDocument = void 0);
            const t = l(461),
              g = l(380),
              m = l(522),
              a = l(448),
              n = l(593),
              p = l(527),
              i = l(240),
              f = l(985),
              u = l(665),
              b = l(162),
              P = l(893),
              C = l(735),
              s = l(287),
              o = l(177),
              r = [
                { type: t.RelationshipTypes.OfficeDocument, target: 'word/document.xml' },
                { type: t.RelationshipTypes.ExtendedProperties, target: 'docProps/app.xml' },
                { type: t.RelationshipTypes.CoreProperties, target: 'docProps/core.xml' },
                { type: t.RelationshipTypes.CustomProperties, target: 'docProps/custom.xml' },
              ];
            class d {
              constructor() {
                (this.parts = []), (this.partsMap = {});
              }
              static load(D, _, E) {
                return be(this, null, function* () {
                  var c = new d();
                  return (
                    (c._options = E),
                    (c._parser = _),
                    (c._package = yield m.OpenXmlPackage.load(D, E)),
                    (c.rels = yield c._package.loadRelationships()),
                    yield Promise.all(
                      r.map((z) => {
                        var q;
                        const L =
                          (q = c.rels.find((J) => J.type === z.type)) !== null && q !== void 0
                            ? q
                            : z;
                        return c.loadRelationshipPart(L.target, L.type);
                      }),
                    ),
                    c
                  );
                });
              }
              save(D = 'blob') {
                return this._package.save(D);
              }
              loadRelationshipPart(D, _) {
                return be(this, null, function* () {
                  var E;
                  if (this.partsMap[D]) return this.partsMap[D];
                  if (!this._package.get(D)) return null;
                  let c = null;
                  switch (_) {
                    case t.RelationshipTypes.OfficeDocument:
                      this.documentPart = c = new a.DocumentPart(this._package, D, this._parser);
                      break;
                    case t.RelationshipTypes.FontTable:
                      this.fontTablePart = c = new g.FontTablePart(this._package, D);
                      break;
                    case t.RelationshipTypes.Numbering:
                      this.numberingPart = c = new p.NumberingPart(this._package, D, this._parser);
                      break;
                    case t.RelationshipTypes.Styles:
                      this.stylesPart = c = new i.StylesPart(this._package, D, this._parser);
                      break;
                    case t.RelationshipTypes.Theme:
                      this.themePart = c = new P.ThemePart(this._package, D);
                      break;
                    case t.RelationshipTypes.Footnotes:
                      this.footnotesPart = c = new C.FootnotesPart(this._package, D, this._parser);
                      break;
                    case t.RelationshipTypes.Endnotes:
                      this.endnotesPart = c = new C.EndnotesPart(this._package, D, this._parser);
                      break;
                    case t.RelationshipTypes.Footer:
                      c = new f.FooterPart(this._package, D, this._parser);
                      break;
                    case t.RelationshipTypes.Header:
                      c = new f.HeaderPart(this._package, D, this._parser);
                      break;
                    case t.RelationshipTypes.CoreProperties:
                      this.corePropsPart = c = new b.CorePropsPart(this._package, D);
                      break;
                    case t.RelationshipTypes.ExtendedProperties:
                      this.extendedPropsPart = c = new u.ExtendedPropsPart(this._package, D);
                      break;
                    case t.RelationshipTypes.CustomProperties:
                      c = new o.CustomPropsPart(this._package, D);
                      break;
                    case t.RelationshipTypes.Settings:
                      this.settingsPart = c = new s.SettingsPart(this._package, D);
                  }
                  if (c == null) return Promise.resolve(null);
                  if (
                    ((this.partsMap[D] = c),
                    this.parts.push(c),
                    yield c.load(),
                    ((E = c.rels) === null || E === void 0 ? void 0 : E.length) > 0)
                  ) {
                    const [z] = (0, n.splitPath)(c.path);
                    yield Promise.all(
                      c.rels.map((q) =>
                        this.loadRelationshipPart((0, n.resolvePath)(q.target, z), q.type),
                      ),
                    );
                  }
                  return c;
                });
              }
              loadDocumentImage(D, _) {
                return be(this, null, function* () {
                  const E = yield this.loadResource(_ != null ? _ : this.documentPart, D, 'blob');
                  return this.blobToURL(E);
                });
              }
              loadNumberingImage(D) {
                return be(this, null, function* () {
                  const _ = yield this.loadResource(this.numberingPart, D, 'blob');
                  return this.blobToURL(_);
                });
              }
              loadFont(D, _) {
                return be(this, null, function* () {
                  const E = yield this.loadResource(this.fontTablePart, D, 'uint8array');
                  return E && this.blobToURL(new Blob([v(E, _)]));
                });
              }
              blobToURL(D) {
                return D
                  ? this._options.useBase64URL
                    ? (0, n.blobToBase64)(D)
                    : URL.createObjectURL(D)
                  : null;
              }
              findPartByRelId(D, _ = null) {
                var E,
                  c = ((E = _.rels) !== null && E !== void 0 ? E : this.rels).find(
                    (q) => q.id == D,
                  );
                const z = _ ? (0, n.splitPath)(_.path)[0] : '';
                return c ? this.partsMap[(0, n.resolvePath)(c.target, z)] : null;
              }
              getPathById(D, _) {
                const E = D.rels.find((z) => z.id == _),
                  [c] = (0, n.splitPath)(D.path);
                return E ? (0, n.resolvePath)(E.target, c) : null;
              }
              loadResource(D, _, E) {
                const c = this.getPathById(D, _);
                return c ? this._package.load(c, E) : Promise.resolve(null);
              }
            }
            function v(S, D) {
              const _ = D.replace(/{|}|-/g, ''),
                E = new Array(16);
              for (let c = 0; c < 16; c++) E[16 - c - 1] = parseInt(_.substr(2 * c, 2), 16);
              for (let c = 0; c < 32; c++) S[c] = S[c] ^ E[c % 16];
              return S;
            }
            (e.WordDocument = d), (e.deobfuscate = v);
          },
          583: (y) => {
            y.exports =
              'data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 100%27 preserveAspectRatio=%27none%27%3E%3Cpath d=%27m0,75 l5,0 l5,25 l10,-100%27 stroke=%27black%27 fill=%27none%27 vector-effect=%27non-scaling-stroke%27/%3E%3C/svg%3E';
          },
          626: (y) => {
            y.exports = w;
          },
        },
        T = {};
      function k(y) {
        var e = T[y];
        if (e !== void 0) return e.exports;
        var l = (T[y] = { id: y, exports: {} });
        return B[y](l, l.exports, k), l.exports;
      }
      return (
        (k.m = B),
        (k.n = (y) => {
          var e = y && y.__esModule ? () => y.default : () => y;
          return k.d(e, { a: e }), e;
        }),
        (k.d = (y, e) => {
          for (var l in e)
            k.o(e, l) && !k.o(y, l) && Object.defineProperty(y, l, { enumerable: !0, get: e[l] });
        }),
        (k.o = (y, e) => Object.prototype.hasOwnProperty.call(y, e)),
        (k.r = (y) => {
          typeof Symbol != 'undefined' &&
            Symbol.toStringTag &&
            Object.defineProperty(y, Symbol.toStringTag, { value: 'Module' }),
            Object.defineProperty(y, '__esModule', { value: !0 });
        }),
        (k.b = document.baseURI || self.location.href),
        k(667)
      );
    })(),
  );
})(_t);
var ft = _t.exports;
const Mr = xe({
  __name: 'index',
  props: { src: {}, requestOption: {} },
  setup(X) {
    const V = X,
      w = We();
    qe(
      () => V.src,
      () => {
        B();
      },
    ),
      Jt(() => {
        V.src && B();
      });
    const B = () => {
        let k;
        if (Qt(V.src) && typeof V.src == 'string') {
          T(V.src);
          return;
        } else
          V.src instanceof ArrayBuffer
            ? (k = new Blob([V.src]))
            : V.src instanceof Blob && (k = V.src);
        w.value && ((w.value.innerHTML = ''), ft.renderAsync(k, w.value));
      },
      T = (k) =>
        be(this, null, function* () {
          const y = yield fetch(k, V.requestOption);
          y.status === 200 && w.value && ft.renderAsync(y.blob(), w.value);
        });
    return (k, y) => (
      ce(), ke('div', { ref_key: 'officeDocx', ref: w, class: 'office-docx' }, null, 512)
    );
  },
});
const Lr = rr(Mr, [['__scopeId', 'data-v-30ab067e']]),
  Wr = xe({
    __name: 'index',
    setup(X) {
      const V = We('https://supercutexiaosi.top/resource/develop_docx.docx'),
        w = (B) =>
          be(this, null, function* () {
            return (V.value = yield Fr(B)), !1;
          });
      return (B, T) => {
        const k = er('ElButton');
        return (
          ce(),
          ke('div', null, [
            ye(
              G(zr),
              { limit: 1, accept: '.docx,.doc', 'before-upload': w, action: '' },
              {
                default: ge(() => [
                  ye(
                    k,
                    { style: { 'margin-bottom': '12px' } },
                    { default: ge(() => [tr('点击上传')]), _: 1 },
                  ),
                ]),
                _: 1,
              },
            ),
            ye(Lr, { src: V.value }, null, 8, ['src']),
          ])
        );
      };
    },
  });
export { Wr as default };
