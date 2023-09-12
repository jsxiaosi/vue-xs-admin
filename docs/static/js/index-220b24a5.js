var xt = Object.defineProperty,
  At = Object.defineProperties;
var Ct = Object.getOwnPropertyDescriptors;
var et = Object.getOwnPropertySymbols;
var Tt = Object.prototype.hasOwnProperty,
  Et = Object.prototype.propertyIsEnumerable;
var tt = (X, V, w) =>
    V in X ? xt(X, V, { enumerable: !0, configurable: !0, writable: !0, value: w }) : (X[V] = w),
  Te = (X, V) => {
    for (var w in V || (V = {})) Tt.call(V, w) && tt(X, w, V[w]);
    if (et) for (var w of et(V)) Et.call(V, w) && tt(X, w, V[w]);
    return X;
  },
  Ee = (X, V) => At(X, Ct(V));
var be = (X, V, w) =>
  new Promise((R, T) => {
    var k = (i) => {
        try {
          e(w.next(i));
        } catch (t) {
          T(t);
        }
      },
      y = (i) => {
        try {
          e(w.throw(i));
        } catch (t) {
          T(t);
        }
      },
      e = (i) => (i.done ? R(i.value) : Promise.resolve(i.value).then(k, y));
    e((w = w.apply(X, V)).next());
  });
import {
  dO as Ye,
  dP as pt,
  bA as mt,
  dQ as Ie,
  dR as ue,
  dS as Xe,
  dT as me,
  d as xe,
  dU as Dt,
  dV as Fe,
  dW as $e,
  j as We,
  o as ce,
  e as Ce,
  w as ge,
  c as ke,
  F as Nt,
  b as Bt,
  M as de,
  u as Y,
  dK as gt,
  n as ve,
  N as he,
  g as ze,
  bO as Ne,
  f as ye,
  dX as De,
  dY as Rt,
  t as rt,
  dZ as Ot,
  L as zt,
  d_ as Ft,
  d$ as It,
  e0 as Mt,
  e1 as Lt,
  e2 as jt,
  b_ as Ut,
  e3 as He,
  cK as $t,
  c2 as Ge,
  e4 as at,
  bw as nt,
  bx as Wt,
  e5 as Ht,
  e6 as Zt,
  B as qe,
  e7 as Vt,
  A as st,
  H as Xt,
  d2 as Gt,
  dl as qt,
  l as it,
  m as ot,
  e8 as Kt,
  bT as je,
  e9 as Ue,
  k as Yt,
  bU as Jt,
  a as Qt,
  h as er,
} from './index-70a96a1c.js';
import { _ as tr } from './plugin-vueexport-helper-c27b6911.js';
const bt = Symbol('uploadContextKey'),
  rr = 'ElUpload';
class ar extends Error {
  constructor(V, w, R, T) {
    super(V), (this.name = 'UploadAjaxError'), (this.status = w), (this.method = R), (this.url = T);
  }
}
function lt(X, V, w) {
  let R;
  return (
    w.response
      ? (R = `${w.response.error || w.response}`)
      : w.responseText
      ? (R = `${w.responseText}`)
      : (R = `fail to ${V.method} ${X} ${w.status}`),
    new ar(R, w.status, V.method, X)
  );
}
function nr(X) {
  const V = X.responseText || X.response;
  if (!V) return V;
  try {
    return JSON.parse(V);
  } catch (w) {
    return V;
  }
}
const sr = (X) => {
    typeof XMLHttpRequest == 'undefined' && Ye(rr, 'XMLHttpRequest is undefined');
    const V = new XMLHttpRequest(),
      w = X.action;
    V.upload &&
      V.upload.addEventListener('progress', (k) => {
        const y = k;
        (y.percent = k.total > 0 ? (k.loaded / k.total) * 100 : 0), X.onProgress(y);
      });
    const R = new FormData();
    if (X.data)
      for (const [k, y] of Object.entries(X.data))
        pt(y) && y.length ? R.append(k, ...y) : R.append(k, y);
    R.append(X.filename, X.file, X.file.name),
      V.addEventListener('error', () => {
        X.onError(lt(w, X, V));
      }),
      V.addEventListener('load', () => {
        if (V.status < 200 || V.status >= 300) return X.onError(lt(w, X, V));
        X.onSuccess(nr(V));
      }),
      V.open(X.method, w, !0),
      X.withCredentials && 'withCredentials' in V && (V.withCredentials = !0);
    const T = X.headers || {};
    if (T instanceof Headers) T.forEach((k, y) => V.setRequestHeader(y, k));
    else for (const [k, y] of Object.entries(T)) mt(y) || V.setRequestHeader(k, String(y));
    return V.send(R), V;
  },
  yt = ['text', 'picture', 'picture-card'];
let ir = 1;
const Ke = () => Date.now() + ir++,
  vt = Ie({
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
    listType: { type: String, values: yt, default: 'text' },
    httpRequest: { type: ue(Function), default: sr },
    disabled: Boolean,
    limit: Number,
  }),
  or = Ie(
    Ee(Te({}, vt), {
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
  lr = Ie({
    files: { type: ue(Array), default: () => Xe([]) },
    disabled: { type: Boolean, default: !1 },
    handlePreview: { type: ue(Function), default: me },
    listType: { type: String, values: yt, default: 'text' },
  }),
  cr = { remove: (X) => !!X },
  ur = ['onKeydown'],
  dr = ['src'],
  hr = ['onClick'],
  fr = ['title'],
  pr = ['onClick'],
  mr = ['onClick'],
  gr = xe({ name: 'ElUploadList' }),
  br = xe(
    Ee(Te({}, gr), {
      props: lr,
      emits: cr,
      setup(X, { emit: V }) {
        const { t: w } = Dt(),
          R = Fe('upload'),
          T = Fe('icon'),
          k = Fe('list'),
          y = $e(),
          e = We(!1),
          i = (t) => {
            V('remove', t);
          };
        return (t, g) => (
          ce(),
          Ce(
            Ut,
            {
              tag: 'ul',
              class: de([Y(R).b('list'), Y(R).bm('list', t.listType), Y(R).is('disabled', Y(y))]),
              name: Y(k).b(),
            },
            {
              default: ge(() => [
                (ce(!0),
                ke(
                  Nt,
                  null,
                  Bt(
                    t.files,
                    (m) => (
                      ce(),
                      ke(
                        'li',
                        {
                          key: m.uid || m.name,
                          class: de([
                            Y(R).be('list', 'item'),
                            Y(R).is(m.status),
                            { focusing: e.value },
                          ]),
                          tabindex: '0',
                          onKeydown: gt((a) => !Y(y) && i(m), ['delete']),
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
                                    class: de(Y(R).be('list', 'item-thumbnail')),
                                    src: m.url,
                                    alt: '',
                                  },
                                  null,
                                  10,
                                  dr,
                                ))
                              : he('v-if', !0),
                            m.status === 'uploading' || t.listType !== 'picture-card'
                              ? (ce(),
                                ke(
                                  'div',
                                  { key: 1, class: de(Y(R).be('list', 'item-info')) },
                                  [
                                    ze(
                                      'a',
                                      {
                                        class: de(Y(R).be('list', 'item-name')),
                                        onClick: Ne((a) => t.handlePreview(m), ['prevent']),
                                      },
                                      [
                                        ye(
                                          Y(De),
                                          { class: de(Y(T).m('document')) },
                                          { default: ge(() => [ye(Y(Rt))]), _: 1 },
                                          8,
                                          ['class'],
                                        ),
                                        ze(
                                          'span',
                                          {
                                            class: de(Y(R).be('list', 'item-file-name')),
                                            title: m.name,
                                          },
                                          rt(m.name),
                                          11,
                                          fr,
                                        ),
                                      ],
                                      10,
                                      hr,
                                    ),
                                    m.status === 'uploading'
                                      ? (ce(),
                                        Ce(
                                          Y(Ot),
                                          {
                                            key: 0,
                                            type: t.listType === 'picture-card' ? 'circle' : 'line',
                                            'stroke-width': t.listType === 'picture-card' ? 6 : 2,
                                            percentage: Number(m.percentage),
                                            style: zt(
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
                              { class: de(Y(R).be('list', 'item-status-label')) },
                              [
                                t.listType === 'text'
                                  ? (ce(),
                                    Ce(
                                      Y(De),
                                      {
                                        key: 0,
                                        class: de([
                                          Y(T).m('upload-success'),
                                          Y(T).m('circle-check'),
                                        ]),
                                      },
                                      { default: ge(() => [ye(Y(Ft))]), _: 1 },
                                      8,
                                      ['class'],
                                    ))
                                  : ['picture-card', 'picture'].includes(t.listType)
                                  ? (ce(),
                                    Ce(
                                      Y(De),
                                      {
                                        key: 1,
                                        class: de([Y(T).m('upload-success'), Y(T).m('check')]),
                                      },
                                      { default: ge(() => [ye(Y(It))]), _: 1 },
                                      8,
                                      ['class'],
                                    ))
                                  : he('v-if', !0),
                              ],
                              2,
                            ),
                            Y(y)
                              ? he('v-if', !0)
                              : (ce(),
                                Ce(
                                  Y(De),
                                  { key: 2, class: de(Y(T).m('close')), onClick: (a) => i(m) },
                                  { default: ge(() => [ye(Y(Mt))]), _: 2 },
                                  1032,
                                  ['class', 'onClick'],
                                )),
                            he(
                              ' Due to close btn only appears when li gets focused disappears after li gets blurred, thus keyboard navigation can never reach close btn',
                            ),
                            he(' This is a bug which needs to be fixed '),
                            he(' TODO: Fix the incorrect navigation interaction '),
                            Y(y)
                              ? he('v-if', !0)
                              : (ce(),
                                ke(
                                  'i',
                                  { key: 3, class: de(Y(T).m('close-tip')) },
                                  rt(Y(w)('el.upload.deleteTip')),
                                  3,
                                )),
                            t.listType === 'picture-card'
                              ? (ce(),
                                ke(
                                  'span',
                                  { key: 4, class: de(Y(R).be('list', 'item-actions')) },
                                  [
                                    ze(
                                      'span',
                                      {
                                        class: de(Y(R).be('list', 'item-preview')),
                                        onClick: (a) => t.handlePreview(m),
                                      },
                                      [
                                        ye(
                                          Y(De),
                                          { class: de(Y(T).m('zoom-in')) },
                                          { default: ge(() => [ye(Y(Lt))]), _: 1 },
                                          8,
                                          ['class'],
                                        ),
                                      ],
                                      10,
                                      pr,
                                    ),
                                    Y(y)
                                      ? he('v-if', !0)
                                      : (ce(),
                                        ke(
                                          'span',
                                          {
                                            key: 0,
                                            class: de(Y(R).be('list', 'item-delete')),
                                            onClick: (a) => i(m),
                                          },
                                          [
                                            ye(
                                              Y(De),
                                              { class: de(Y(T).m('delete')) },
                                              { default: ge(() => [ye(Y(jt))]), _: 1 },
                                              8,
                                              ['class'],
                                            ),
                                          ],
                                          10,
                                          mr,
                                        )),
                                  ],
                                  2,
                                ))
                              : he('v-if', !0),
                          ]),
                        ],
                        42,
                        ur,
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
var ct = He(br, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-list.vue',
  ],
]);
const yr = Ie({ disabled: { type: Boolean, default: !1 } }),
  vr = { file: (X) => pt(X) },
  _r = ['onDrop', 'onDragover'],
  _t = 'ElUploadDrag',
  kr = xe({ name: _t }),
  wr = xe(
    Ee(Te({}, kr), {
      props: yr,
      emits: vr,
      setup(X, { emit: V }) {
        const w = $t(bt);
        w || Ye(_t, 'usage: <el-upload><el-upload-dragger /></el-upload>');
        const R = Fe('upload'),
          T = We(!1),
          k = $e(),
          y = (i) => {
            if (k.value) return;
            (T.value = !1), i.stopPropagation();
            const t = Array.from(i.dataTransfer.files),
              g = w.accept.value;
            if (!g) {
              V('file', t);
              return;
            }
            const m = t.filter((a) => {
              const { type: n, name: p } = a,
                o = p.includes('.') ? `.${p.split('.').pop()}` : '',
                l = n.replace(/\/.*$/, '');
              return g
                .split(',')
                .map((f) => f.trim())
                .filter((f) => f)
                .some((f) =>
                  f.startsWith('.')
                    ? o === f
                    : /\/\*$/.test(f)
                    ? l === f.replace(/\/\*$/, '')
                    : /^[^/]+\/[^/]+$/.test(f)
                    ? n === f
                    : !1,
                );
            });
            V('file', m);
          },
          e = () => {
            k.value || (T.value = !0);
          };
        return (i, t) => (
          ce(),
          ke(
            'div',
            {
              class: de([Y(R).b('dragger'), Y(R).is('dragover', T.value)]),
              onDrop: Ne(y, ['prevent']),
              onDragover: Ne(e, ['prevent']),
              onDragleave: t[0] || (t[0] = Ne((g) => (T.value = !1), ['prevent'])),
            },
            [ve(i.$slots, 'default')],
            42,
            _r,
          )
        );
      },
    }),
  );
var Sr = He(wr, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-dragger.vue',
  ],
]);
const Pr = Ie(
    Ee(Te({}, vt), {
      beforeUpload: { type: ue(Function), default: me },
      onRemove: { type: ue(Function), default: me },
      onStart: { type: ue(Function), default: me },
      onSuccess: { type: ue(Function), default: me },
      onProgress: { type: ue(Function), default: me },
      onError: { type: ue(Function), default: me },
      onExceed: { type: ue(Function), default: me },
    }),
  ),
  xr = ['onKeydown'],
  Ar = ['name', 'multiple', 'accept'],
  Cr = xe({ name: 'ElUploadContent', inheritAttrs: !1 }),
  Tr = xe(
    Ee(Te({}, Cr), {
      props: Pr,
      setup(X, { expose: V }) {
        const w = X,
          R = Fe('upload'),
          T = $e(),
          k = Ge({}),
          y = Ge(),
          e = (p) => {
            if (p.length === 0) return;
            const {
              autoUpload: o,
              limit: l,
              fileList: f,
              multiple: b,
              onStart: x,
              onExceed: C,
            } = w;
            if (l && f.length + p.length > l) {
              C(p, f);
              return;
            }
            b || (p = p.slice(0, 1));
            for (const s of p) {
              const c = s;
              (c.uid = Ke()), x(c), o && i(c);
            }
          },
          i = (p) =>
            be(this, null, function* () {
              if (((y.value.value = ''), !w.beforeUpload)) return t(p);
              let o,
                l = {};
              try {
                const b = w.data,
                  x = w.beforeUpload(p);
                (l = at(w.data) ? nt(w.data) : w.data),
                  (o = yield x),
                  at(w.data) && Wt(b, l) && (l = nt(w.data));
              } catch (b) {
                o = !1;
              }
              if (o === !1) {
                w.onRemove(p);
                return;
              }
              let f = p;
              o instanceof Blob &&
                (o instanceof File ? (f = o) : (f = new File([o], p.name, { type: p.type }))),
                t(Object.assign(f, { uid: p.uid }), l);
            }),
          t = (p, o) => {
            const {
                headers: l,
                data: f,
                method: b,
                withCredentials: x,
                name: C,
                action: s,
                onProgress: c,
                onSuccess: r,
                onError: d,
                httpRequest: v,
              } = w,
              { uid: S } = p,
              D = {
                headers: l || {},
                withCredentials: x,
                file: p,
                data: o != null ? o : f,
                method: b,
                filename: C,
                action: s,
                onProgress: (E) => {
                  c(E, p);
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
            const o = p.target.files;
            o && e(Array.from(o));
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
                .filter(p ? ([l]) => String(p.uid) === l : () => !0)
                .forEach(([l, f]) => {
                  f instanceof XMLHttpRequest && f.abort(), delete k.value[l];
                });
            },
            upload: i,
          }),
          (p, o) => (
            ce(),
            ke(
              'div',
              {
                class: de([Y(R).b(), Y(R).m(p.listType), Y(R).is('drag', p.drag)]),
                tabindex: '0',
                onClick: m,
                onKeydown: gt(Ne(a, ['self']), ['enter', 'space']),
              },
              [
                p.drag
                  ? (ce(),
                    Ce(
                      Sr,
                      { key: 0, disabled: Y(T), onFile: e },
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
                    class: de(Y(R).e('input')),
                    name: p.name,
                    multiple: p.multiple,
                    accept: p.accept,
                    type: 'file',
                    onChange: g,
                    onClick: o[0] || (o[0] = Ne(() => {}, ['stop'])),
                  },
                  null,
                  42,
                  Ar,
                ),
              ],
              42,
              xr,
            )
          )
        );
      },
    }),
  );
var ut = He(Tr, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-content.vue',
  ],
]);
const dt = 'ElUpload',
  Er = (X) => {
    var V;
    (V = X.url) != null && V.startsWith('blob:') && URL.revokeObjectURL(X.url);
  },
  Dr = (X, V) => {
    const w = Zt(X, 'fileList', void 0, { passive: !0 }),
      R = (a) => w.value.find((n) => n.uid === a.uid);
    function T(a) {
      var n;
      (n = V.value) == null || n.abort(a);
    }
    function k(a = ['ready', 'uploading', 'success', 'fail']) {
      w.value = w.value.filter((n) => !a.includes(n.status));
    }
    const y = (a, n) => {
        const p = R(n);
        p &&
          (console.error(a),
          (p.status = 'fail'),
          w.value.splice(w.value.indexOf(p), 1),
          X.onError(a, p, w.value),
          X.onChange(p, w.value));
      },
      e = (a, n) => {
        const p = R(n);
        p &&
          (X.onProgress(a, p, w.value),
          (p.status = 'uploading'),
          (p.percentage = Math.round(a.percent)));
      },
      i = (a, n) => {
        const p = R(n);
        p &&
          ((p.status = 'success'),
          (p.response = a),
          X.onSuccess(a, p, w.value),
          X.onChange(p, w.value));
      },
      t = (a) => {
        mt(a.uid) && (a.uid = Ke());
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
          const n = a instanceof File ? R(a) : a;
          n || Ye(dt, 'file to be removed not found');
          const p = (o) => {
            T(o);
            const l = w.value;
            l.splice(l.indexOf(o), 1), X.onRemove(o, l), Er(o);
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
              const { raw: p, url: o } = n;
              if (!o && p)
                try {
                  n.url = URL.createObjectURL(p);
                } catch (l) {
                  X.onError(l, n, w.value);
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
        handleSuccess: i,
        handleRemove: g,
        submit: m,
      }
    );
  },
  Nr = xe({ name: 'ElUpload' }),
  Br = xe(
    Ee(Te({}, Nr), {
      props: or,
      setup(X, { expose: V }) {
        const w = X,
          R = $e(),
          T = Ge(),
          {
            abort: k,
            submit: y,
            clearFiles: e,
            uploadFiles: i,
            handleStart: t,
            handleError: g,
            handleRemove: m,
            handleSuccess: a,
            handleProgress: n,
          } = Dr(w, T),
          p = st(() => w.listType === 'picture-card'),
          o = st(() =>
            Ee(Te({}, w), {
              fileList: i.value,
              onStart: t,
              onProgress: n,
              onSuccess: a,
              onError: g,
              onRemove: m,
            }),
          );
        return (
          Xt(() => {
            i.value.forEach(({ url: l }) => {
              l != null && l.startsWith('blob:') && URL.revokeObjectURL(l);
            });
          }),
          Gt(bt, { accept: qt(w, 'accept') }),
          V({ abort: k, submit: y, clearFiles: e, handleStart: t, handleRemove: m }),
          (l, f) => (
            ce(),
            ke('div', null, [
              Y(p) && l.showFileList
                ? (ce(),
                  Ce(
                    ct,
                    {
                      key: 0,
                      disabled: Y(R),
                      'list-type': l.listType,
                      files: Y(i),
                      'handle-preview': l.onPreview,
                      onRemove: Y(m),
                    },
                    it(
                      {
                        append: ge(() => [
                          ye(
                            ut,
                            ot({ ref_key: 'uploadRef', ref: T }, Y(o)),
                            {
                              default: ge(() => [
                                l.$slots.trigger
                                  ? ve(l.$slots, 'trigger', { key: 0 })
                                  : he('v-if', !0),
                                !l.$slots.trigger && l.$slots.default
                                  ? ve(l.$slots, 'default', { key: 1 })
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
                        l.$slots.file
                          ? {
                              name: 'default',
                              fn: ge(({ file: b }) => [ve(l.$slots, 'file', { file: b })]),
                            }
                          : void 0,
                      ],
                    ),
                    1032,
                    ['disabled', 'list-type', 'files', 'handle-preview', 'onRemove'],
                  ))
                : he('v-if', !0),
              !Y(p) || (Y(p) && !l.showFileList)
                ? (ce(),
                  Ce(
                    ut,
                    ot({ key: 1, ref_key: 'uploadRef', ref: T }, Y(o)),
                    {
                      default: ge(() => [
                        l.$slots.trigger ? ve(l.$slots, 'trigger', { key: 0 }) : he('v-if', !0),
                        !l.$slots.trigger && l.$slots.default
                          ? ve(l.$slots, 'default', { key: 1 })
                          : he('v-if', !0),
                      ]),
                      _: 3,
                    },
                    16,
                  ))
                : he('v-if', !0),
              l.$slots.trigger ? ve(l.$slots, 'default', { key: 2 }) : he('v-if', !0),
              ve(l.$slots, 'tip'),
              !Y(p) && l.showFileList
                ? (ce(),
                  Ce(
                    ct,
                    {
                      key: 3,
                      disabled: Y(R),
                      'list-type': l.listType,
                      files: Y(i),
                      'handle-preview': l.onPreview,
                      onRemove: Y(m),
                    },
                    it({ _: 2 }, [
                      l.$slots.file
                        ? {
                            name: 'default',
                            fn: ge(({ file: b }) => [ve(l.$slots, 'file', { file: b })]),
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
var Rr = He(Br, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload.vue',
  ],
]);
const Or = Kt(Rr);
function zr(X) {
  return new Promise(function (V) {
    var w = new FileReader();
    w.readAsArrayBuffer(X),
      (w.onload = function () {
        V(this.result);
      });
  });
}
var kt = { exports: {} },
  Ve = { exports: {} };
/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/ var ht;
function Fr() {
  return (
    ht ||
      ((ht = 1),
      (function (X, V) {
        (function (w) {
          X.exports = w();
        })(function () {
          return (function w(R, T, k) {
            function y(t, g) {
              if (!T[t]) {
                if (!R[t]) {
                  var m = typeof Ue == 'function' && Ue;
                  if (!g && m) return m(t, !0);
                  if (e) return e(t, !0);
                  var a = new Error("Cannot find module '" + t + "'");
                  throw ((a.code = 'MODULE_NOT_FOUND'), a);
                }
                var n = (T[t] = { exports: {} });
                R[t][0].call(
                  n.exports,
                  function (p) {
                    var o = R[t][1][p];
                    return y(o || p);
                  },
                  n,
                  n.exports,
                  w,
                  R,
                  T,
                  k,
                );
              }
              return T[t].exports;
            }
            for (var e = typeof Ue == 'function' && Ue, i = 0; i < k.length; i++) y(k[i]);
            return y;
          })(
            {
              1: [
                function (w, R, T) {
                  var k = w('./utils'),
                    y = w('./support'),
                    e = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
                  (T.encode = function (i) {
                    for (
                      var t,
                        g,
                        m,
                        a,
                        n,
                        p,
                        o,
                        l = [],
                        f = 0,
                        b = i.length,
                        x = b,
                        C = k.getTypeOf(i) !== 'string';
                      f < i.length;

                    )
                      (x = b - f),
                        (m = C
                          ? ((t = i[f++]), (g = f < b ? i[f++] : 0), f < b ? i[f++] : 0)
                          : ((t = i.charCodeAt(f++)),
                            (g = f < b ? i.charCodeAt(f++) : 0),
                            f < b ? i.charCodeAt(f++) : 0)),
                        (a = t >> 2),
                        (n = ((3 & t) << 4) | (g >> 4)),
                        (p = 1 < x ? ((15 & g) << 2) | (m >> 6) : 64),
                        (o = 2 < x ? 63 & m : 64),
                        l.push(e.charAt(a) + e.charAt(n) + e.charAt(p) + e.charAt(o));
                    return l.join('');
                  }),
                    (T.decode = function (i) {
                      var t,
                        g,
                        m,
                        a,
                        n,
                        p,
                        o = 0,
                        l = 0,
                        f = 'data:';
                      if (i.substr(0, f.length) === f)
                        throw new Error('Invalid base64 input, it looks like a data url.');
                      var b,
                        x = (3 * (i = i.replace(/[^A-Za-z0-9+/=]/g, '')).length) / 4;
                      if (
                        (i.charAt(i.length - 1) === e.charAt(64) && x--,
                        i.charAt(i.length - 2) === e.charAt(64) && x--,
                        x % 1 != 0)
                      )
                        throw new Error('Invalid base64 input, bad content length.');
                      for (
                        b = y.uint8array ? new Uint8Array(0 | x) : new Array(0 | x);
                        o < i.length;

                      )
                        (t =
                          (e.indexOf(i.charAt(o++)) << 2) | ((a = e.indexOf(i.charAt(o++))) >> 4)),
                          (g = ((15 & a) << 4) | ((n = e.indexOf(i.charAt(o++))) >> 2)),
                          (m = ((3 & n) << 6) | (p = e.indexOf(i.charAt(o++)))),
                          (b[l++] = t),
                          n !== 64 && (b[l++] = g),
                          p !== 64 && (b[l++] = m);
                      return b;
                    });
                },
                { './support': 30, './utils': 32 },
              ],
              2: [
                function (w, R, T) {
                  var k = w('./external'),
                    y = w('./stream/DataWorker'),
                    e = w('./stream/Crc32Probe'),
                    i = w('./stream/DataLengthProbe');
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
                          .pipe(new i('data_length')),
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
                        .pipe(new i('uncompressedSize'))
                        .pipe(m.compressWorker(a))
                        .pipe(new i('compressedSize'))
                        .withStreamInfo('compression', m);
                    }),
                    (R.exports = t);
                },
                {
                  './external': 6,
                  './stream/Crc32Probe': 25,
                  './stream/DataLengthProbe': 26,
                  './stream/DataWorker': 27,
                },
              ],
              3: [
                function (w, R, T) {
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
                function (w, R, T) {
                  var k = w('./utils'),
                    y = (function () {
                      for (var e, i = [], t = 0; t < 256; t++) {
                        e = t;
                        for (var g = 0; g < 8; g++) e = 1 & e ? 3988292384 ^ (e >>> 1) : e >>> 1;
                        i[t] = e;
                      }
                      return i;
                    })();
                  R.exports = function (e, i) {
                    return e !== void 0 && e.length
                      ? k.getTypeOf(e) !== 'string'
                        ? (function (t, g, m, a) {
                            var n = y,
                              p = a + m;
                            t ^= -1;
                            for (var o = a; o < p; o++) t = (t >>> 8) ^ n[255 & (t ^ g[o])];
                            return -1 ^ t;
                          })(0 | i, e, e.length, 0)
                        : (function (t, g, m, a) {
                            var n = y,
                              p = a + m;
                            t ^= -1;
                            for (var o = a; o < p; o++)
                              t = (t >>> 8) ^ n[255 & (t ^ g.charCodeAt(o))];
                            return -1 ^ t;
                          })(0 | i, e, e.length, 0)
                      : 0;
                  };
                },
                { './utils': 32 },
              ],
              5: [
                function (w, R, T) {
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
                function (w, R, T) {
                  var k = null;
                  (k = typeof Promise != 'undefined' ? Promise : w('lie')),
                    (R.exports = { Promise: k });
                },
                { lie: 37 },
              ],
              7: [
                function (w, R, T) {
                  var k =
                      typeof Uint8Array != 'undefined' &&
                      typeof Uint16Array != 'undefined' &&
                      typeof Uint32Array != 'undefined',
                    y = w('pako'),
                    e = w('./utils'),
                    i = w('./stream/GenericWorker'),
                    t = k ? 'uint8array' : 'array';
                  function g(m, a) {
                    i.call(this, 'FlateWorker/' + m),
                      (this._pako = null),
                      (this._pakoAction = m),
                      (this._pakoOptions = a),
                      (this.meta = {});
                  }
                  (T.magic = '\b\0'),
                    e.inherits(g, i),
                    (g.prototype.processChunk = function (m) {
                      (this.meta = m.meta),
                        this._pako === null && this._createPako(),
                        this._pako.push(e.transformTo(t, m.data), !1);
                    }),
                    (g.prototype.flush = function () {
                      i.prototype.flush.call(this),
                        this._pako === null && this._createPako(),
                        this._pako.push([], !0);
                    }),
                    (g.prototype.cleanUp = function () {
                      i.prototype.cleanUp.call(this), (this._pako = null);
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
                function (w, R, T) {
                  function k(n, p) {
                    var o,
                      l = '';
                    for (o = 0; o < p; o++) (l += String.fromCharCode(255 & n)), (n >>>= 8);
                    return l;
                  }
                  function y(n, p, o, l, f, b) {
                    var x,
                      C,
                      s = n.file,
                      c = n.compression,
                      r = b !== t.utf8encode,
                      d = e.transformTo('string', b(s.name)),
                      v = e.transformTo('string', t.utf8encode(s.name)),
                      S = s.comment,
                      D = e.transformTo('string', b(S)),
                      _ = e.transformTo('string', t.utf8encode(S)),
                      E = v.length !== s.name.length,
                      u = _.length !== S.length,
                      z = '',
                      G = '',
                      L = '',
                      J = s.dir,
                      $ = s.date,
                      te = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
                    (p && !o) ||
                      ((te.crc32 = n.crc32),
                      (te.compressedSize = n.compressedSize),
                      (te.uncompressedSize = n.uncompressedSize));
                    var F = 0;
                    p && (F |= 8), r || (!E && !u) || (F |= 2048);
                    var O = 0,
                      ee = 0;
                    J && (O |= 16),
                      f === 'UNIX'
                        ? ((ee = 798),
                          (O |= (function (Z, ie) {
                            var pe = Z;
                            return Z || (pe = ie ? 16893 : 33204), (65535 & pe) << 16;
                          })(s.unixPermissions, J)))
                        : ((ee = 20),
                          (O |= (function (Z) {
                            return 63 & (Z || 0);
                          })(s.dosPermissions))),
                      (x = $.getUTCHours()),
                      (x <<= 6),
                      (x |= $.getUTCMinutes()),
                      (x <<= 5),
                      (x |= $.getUTCSeconds() / 2),
                      (C = $.getUTCFullYear() - 1980),
                      (C <<= 4),
                      (C |= $.getUTCMonth() + 1),
                      (C <<= 5),
                      (C |= $.getUTCDate()),
                      E && ((G = k(1, 1) + k(g(d), 4) + v), (z += 'up' + k(G.length, 2) + G)),
                      u && ((L = k(1, 1) + k(g(D), 4) + _), (z += 'uc' + k(L.length, 2) + L));
                    var q = '';
                    return (
                      (q += `
\0`),
                      (q += k(F, 2)),
                      (q += c.magic),
                      (q += k(x, 2)),
                      (q += k(C, 2)),
                      (q += k(te.crc32, 4)),
                      (q += k(te.compressedSize, 4)),
                      (q += k(te.uncompressedSize, 4)),
                      (q += k(d.length, 2)),
                      (q += k(z.length, 2)),
                      {
                        fileRecord: m.LOCAL_FILE_HEADER + q + d + z,
                        dirRecord:
                          m.CENTRAL_FILE_HEADER +
                          k(ee, 2) +
                          q +
                          k(D.length, 2) +
                          '\0\0\0\0' +
                          k(O, 4) +
                          k(l, 4) +
                          d +
                          z +
                          D,
                      }
                    );
                  }
                  var e = w('../utils'),
                    i = w('../stream/GenericWorker'),
                    t = w('../utf8'),
                    g = w('../crc32'),
                    m = w('../signature');
                  function a(n, p, o, l) {
                    i.call(this, 'ZipFileWorker'),
                      (this.bytesWritten = 0),
                      (this.zipComment = p),
                      (this.zipPlatform = o),
                      (this.encodeFileName = l),
                      (this.streamFiles = n),
                      (this.accumulate = !1),
                      (this.contentBuffer = []),
                      (this.dirRecords = []),
                      (this.currentSourceOffset = 0),
                      (this.entriesCount = 0),
                      (this.currentFile = null),
                      (this._sources = []);
                  }
                  e.inherits(a, i),
                    (a.prototype.push = function (n) {
                      var p = n.meta.percent || 0,
                        o = this.entriesCount,
                        l = this._sources.length;
                      this.accumulate
                        ? this.contentBuffer.push(n)
                        : ((this.bytesWritten += n.data.length),
                          i.prototype.push.call(this, {
                            data: n.data,
                            meta: {
                              currentFile: this.currentFile,
                              percent: o ? (p + 100 * (o - l - 1)) / o : 100,
                            },
                          }));
                    }),
                    (a.prototype.openedSource = function (n) {
                      (this.currentSourceOffset = this.bytesWritten),
                        (this.currentFile = n.file.name);
                      var p = this.streamFiles && !n.file.dir;
                      if (p) {
                        var o = y(
                          n,
                          p,
                          !1,
                          this.currentSourceOffset,
                          this.zipPlatform,
                          this.encodeFileName,
                        );
                        this.push({ data: o.fileRecord, meta: { percent: 0 } });
                      } else this.accumulate = !0;
                    }),
                    (a.prototype.closedSource = function (n) {
                      this.accumulate = !1;
                      var p = this.streamFiles && !n.file.dir,
                        o = y(
                          n,
                          p,
                          !0,
                          this.currentSourceOffset,
                          this.zipPlatform,
                          this.encodeFileName,
                        );
                      if ((this.dirRecords.push(o.dirRecord), p))
                        this.push({
                          data: (function (l) {
                            return (
                              m.DATA_DESCRIPTOR +
                              k(l.crc32, 4) +
                              k(l.compressedSize, 4) +
                              k(l.uncompressedSize, 4)
                            );
                          })(n),
                          meta: { percent: 100 },
                        });
                      else
                        for (
                          this.push({ data: o.fileRecord, meta: { percent: 0 } });
                          this.contentBuffer.length;

                        )
                          this.push(this.contentBuffer.shift());
                      this.currentFile = null;
                    }),
                    (a.prototype.flush = function () {
                      for (var n = this.bytesWritten, p = 0; p < this.dirRecords.length; p++)
                        this.push({ data: this.dirRecords[p], meta: { percent: 100 } });
                      var o = this.bytesWritten - n,
                        l = (function (f, b, x, C, s) {
                          var c = e.transformTo('string', s(C));
                          return (
                            m.CENTRAL_DIRECTORY_END +
                            '\0\0\0\0' +
                            k(f, 2) +
                            k(f, 2) +
                            k(b, 4) +
                            k(x, 4) +
                            k(c.length, 2) +
                            c
                          );
                        })(this.dirRecords.length, o, n, this.zipComment, this.encodeFileName);
                      this.push({ data: l, meta: { percent: 100 } });
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
                        n.on('data', function (o) {
                          p.processChunk(o);
                        }),
                        n.on('end', function () {
                          p.closedSource(p.previous.streamInfo),
                            p._sources.length ? p.prepareNextSource() : p.end();
                        }),
                        n.on('error', function (o) {
                          p.error(o);
                        }),
                        this
                      );
                    }),
                    (a.prototype.resume = function () {
                      return (
                        !!i.prototype.resume.call(this) &&
                        (!this.previous && this._sources.length
                          ? (this.prepareNextSource(), !0)
                          : this.previous || this._sources.length || this.generatedError
                          ? void 0
                          : (this.end(), !0))
                      );
                    }),
                    (a.prototype.error = function (n) {
                      var p = this._sources;
                      if (!i.prototype.error.call(this, n)) return !1;
                      for (var o = 0; o < p.length; o++)
                        try {
                          p[o].error(n);
                        } catch (l) {}
                      return !0;
                    }),
                    (a.prototype.lock = function () {
                      i.prototype.lock.call(this);
                      for (var n = this._sources, p = 0; p < n.length; p++) n[p].lock();
                    }),
                    (R.exports = a);
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
                function (w, R, T) {
                  var k = w('../compressions'),
                    y = w('./ZipFileWorker');
                  T.generateWorker = function (e, i, t) {
                    var g = new y(i.streamFiles, t, i.platform, i.encodeFileName),
                      m = 0;
                    try {
                      e.forEach(function (a, n) {
                        m++;
                        var p = (function (b, x) {
                            var C = b || x,
                              s = k[C];
                            if (!s) throw new Error(C + ' is not a valid compression method !');
                            return s;
                          })(n.options.compression, i.compression),
                          o = n.options.compressionOptions || i.compressionOptions || {},
                          l = n.dir,
                          f = n.date;
                        n._compressWorker(p, o)
                          .withStreamInfo('file', {
                            name: a,
                            dir: l,
                            date: f,
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
                function (w, R, T) {
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
                    (R.exports = k);
                },
                { './defaults': 5, './external': 6, './load': 11, './object': 15, './support': 30 },
              ],
              11: [
                function (w, R, T) {
                  var k = w('./utils'),
                    y = w('./external'),
                    e = w('./utf8'),
                    i = w('./zipEntries'),
                    t = w('./stream/Crc32Probe'),
                    g = w('./nodejsUtils');
                  function m(a) {
                    return new y.Promise(function (n, p) {
                      var o = a.decompressed.getContentWorker().pipe(new t());
                      o.on('error', function (l) {
                        p(l);
                      })
                        .on('end', function () {
                          o.streamInfo.crc32 !== a.decompressed.crc32
                            ? p(new Error('Corrupted zip : CRC32 mismatch'))
                            : n();
                        })
                        .resume();
                    });
                  }
                  R.exports = function (a, n) {
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
                            .then(function (o) {
                              var l = new i(n);
                              return l.load(o), l;
                            })
                            .then(function (o) {
                              var l = [y.Promise.resolve(o)],
                                f = o.files;
                              if (n.checkCRC32) for (var b = 0; b < f.length; b++) l.push(m(f[b]));
                              return y.Promise.all(l);
                            })
                            .then(function (o) {
                              for (var l = o.shift(), f = l.files, b = 0; b < f.length; b++) {
                                var x = f[b],
                                  C = x.fileNameStr,
                                  s = k.resolve(x.fileNameStr);
                                p.file(s, x.decompressed, {
                                  binary: !0,
                                  optimizedBinaryString: !0,
                                  date: x.date,
                                  dir: x.dir,
                                  comment: x.fileCommentStr.length ? x.fileCommentStr : null,
                                  unixPermissions: x.unixPermissions,
                                  dosPermissions: x.dosPermissions,
                                  createFolders: n.createFolders,
                                }),
                                  x.dir || (p.file(s).unsafeOriginalName = C);
                              }
                              return l.zipComment.length && (p.comment = l.zipComment), p;
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
                function (w, R, T) {
                  var k = w('../utils'),
                    y = w('../stream/GenericWorker');
                  function e(i, t) {
                    y.call(this, 'Nodejs stream input adapter for ' + i),
                      (this._upstreamEnded = !1),
                      this._bindStream(t);
                  }
                  k.inherits(e, y),
                    (e.prototype._bindStream = function (i) {
                      var t = this;
                      (this._stream = i).pause(),
                        i
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
                    (R.exports = e);
                },
                { '../stream/GenericWorker': 28, '../utils': 32 },
              ],
              13: [
                function (w, R, T) {
                  var k = w('readable-stream').Readable;
                  function y(e, i, t) {
                    k.call(this, i), (this._helper = e);
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
                    (R.exports = y);
                },
                { '../utils': 32, 'readable-stream': 16 },
              ],
              14: [
                function (w, R, T) {
                  R.exports = {
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
                function (w, R, T) {
                  function k(s, c, r) {
                    var d,
                      v = e.getTypeOf(c),
                      S = e.extend(r || {}, g);
                    (S.date = S.date || new Date()),
                      S.compression !== null && (S.compression = S.compression.toUpperCase()),
                      typeof S.unixPermissions == 'string' &&
                        (S.unixPermissions = parseInt(S.unixPermissions, 8)),
                      S.unixPermissions && 16384 & S.unixPermissions && (S.dir = !0),
                      S.dosPermissions && 16 & S.dosPermissions && (S.dir = !0),
                      S.dir && (s = f(s)),
                      S.createFolders && (d = l(s)) && b.call(this, d, !0);
                    var D = v === 'string' && S.binary === !1 && S.base64 === !1;
                    (r && r.binary !== void 0) || (S.binary = !D),
                      ((c instanceof m && c.uncompressedSize === 0) ||
                        S.dir ||
                        !c ||
                        c.length === 0) &&
                        ((S.base64 = !1),
                        (S.binary = !0),
                        (c = ''),
                        (S.compression = 'STORE'),
                        (v = 'string'));
                    var _ = null;
                    _ =
                      c instanceof m || c instanceof i
                        ? c
                        : p.isNode && p.isStream(c)
                        ? new o(s, c)
                        : e.prepareContent(s, c, S.binary, S.optimizedBinaryString, S.base64);
                    var E = new a(s, _, S);
                    this.files[s] = E;
                  }
                  var y = w('./utf8'),
                    e = w('./utils'),
                    i = w('./stream/GenericWorker'),
                    t = w('./stream/StreamHelper'),
                    g = w('./defaults'),
                    m = w('./compressedObject'),
                    a = w('./zipObject'),
                    n = w('./generate'),
                    p = w('./nodejsUtils'),
                    o = w('./nodejs/NodejsStreamInputAdapter'),
                    l = function (s) {
                      s.slice(-1) === '/' && (s = s.substring(0, s.length - 1));
                      var c = s.lastIndexOf('/');
                      return 0 < c ? s.substring(0, c) : '';
                    },
                    f = function (s) {
                      return s.slice(-1) !== '/' && (s += '/'), s;
                    },
                    b = function (s, c) {
                      return (
                        (c = c !== void 0 ? c : g.createFolders),
                        (s = f(s)),
                        this.files[s] || k.call(this, s, null, { dir: !0, createFolders: c }),
                        this.files[s]
                      );
                    };
                  function x(s) {
                    return Object.prototype.toString.call(s) === '[object RegExp]';
                  }
                  var C = {
                    load: function () {
                      throw new Error(
                        'This method has been removed in JSZip 3.0, please check the upgrade guide.',
                      );
                    },
                    forEach: function (s) {
                      var c, r, d;
                      for (c in this.files)
                        (d = this.files[c]),
                          (r = c.slice(this.root.length, c.length)) &&
                            c.slice(0, this.root.length) === this.root &&
                            s(r, d);
                    },
                    filter: function (s) {
                      var c = [];
                      return (
                        this.forEach(function (r, d) {
                          s(r, d) && c.push(d);
                        }),
                        c
                      );
                    },
                    file: function (s, c, r) {
                      if (arguments.length !== 1)
                        return (s = this.root + s), k.call(this, s, c, r), this;
                      if (x(s)) {
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
                      if (x(s))
                        return this.filter(function (v, S) {
                          return S.dir && s.test(v);
                        });
                      var c = this.root + s,
                        r = b.call(this, c),
                        d = this.clone();
                      return (d.root = r.name), d;
                    },
                    remove: function (s) {
                      s = this.root + s;
                      var c = this.files[s];
                      if (
                        (c || (s.slice(-1) !== '/' && (s += '/'), (c = this.files[s])), c && !c.dir)
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
                      var c,
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
                        c = n.generateWorker(this, r, d);
                      } catch (v) {
                        (c = new i('error')).error(v);
                      }
                      return new t(c, r.type || 'string', r.mimeType);
                    },
                    generateAsync: function (s, c) {
                      return this.generateInternalStream(s).accumulate(c);
                    },
                    generateNodeStream: function (s, c) {
                      return (
                        (s = s || {}).type || (s.type = 'nodebuffer'),
                        this.generateInternalStream(s).toNodejsStream(c)
                      );
                    },
                  };
                  R.exports = C;
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
                function (w, R, T) {
                  R.exports = w('stream');
                },
                { stream: void 0 },
              ],
              17: [
                function (w, R, T) {
                  var k = w('./DataReader');
                  function y(e) {
                    k.call(this, e);
                    for (var i = 0; i < this.data.length; i++) e[i] = 255 & e[i];
                  }
                  w('../utils').inherits(y, k),
                    (y.prototype.byteAt = function (e) {
                      return this.data[this.zero + e];
                    }),
                    (y.prototype.lastIndexOfSignature = function (e) {
                      for (
                        var i = e.charCodeAt(0),
                          t = e.charCodeAt(1),
                          g = e.charCodeAt(2),
                          m = e.charCodeAt(3),
                          a = this.length - 4;
                        0 <= a;
                        --a
                      )
                        if (
                          this.data[a] === i &&
                          this.data[a + 1] === t &&
                          this.data[a + 2] === g &&
                          this.data[a + 3] === m
                        )
                          return a - this.zero;
                      return -1;
                    }),
                    (y.prototype.readAndCheckSignature = function (e) {
                      var i = e.charCodeAt(0),
                        t = e.charCodeAt(1),
                        g = e.charCodeAt(2),
                        m = e.charCodeAt(3),
                        a = this.readData(4);
                      return i === a[0] && t === a[1] && g === a[2] && m === a[3];
                    }),
                    (y.prototype.readData = function (e) {
                      if ((this.checkOffset(e), e === 0)) return [];
                      var i = this.data.slice(this.zero + this.index, this.zero + this.index + e);
                      return (this.index += e), i;
                    }),
                    (R.exports = y);
                },
                { '../utils': 32, './DataReader': 18 },
              ],
              18: [
                function (w, R, T) {
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
                      var i,
                        t = 0;
                      for (this.checkOffset(e), i = this.index + e - 1; i >= this.index; i--)
                        t = (t << 8) + this.byteAt(i);
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
                    (R.exports = y);
                },
                { '../utils': 32 },
              ],
              19: [
                function (w, R, T) {
                  var k = w('./Uint8ArrayReader');
                  function y(e) {
                    k.call(this, e);
                  }
                  w('../utils').inherits(y, k),
                    (y.prototype.readData = function (e) {
                      this.checkOffset(e);
                      var i = this.data.slice(this.zero + this.index, this.zero + this.index + e);
                      return (this.index += e), i;
                    }),
                    (R.exports = y);
                },
                { '../utils': 32, './Uint8ArrayReader': 21 },
              ],
              20: [
                function (w, R, T) {
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
                      var i = this.data.slice(this.zero + this.index, this.zero + this.index + e);
                      return (this.index += e), i;
                    }),
                    (R.exports = y);
                },
                { '../utils': 32, './DataReader': 18 },
              ],
              21: [
                function (w, R, T) {
                  var k = w('./ArrayReader');
                  function y(e) {
                    k.call(this, e);
                  }
                  w('../utils').inherits(y, k),
                    (y.prototype.readData = function (e) {
                      if ((this.checkOffset(e), e === 0)) return new Uint8Array(0);
                      var i = this.data.subarray(
                        this.zero + this.index,
                        this.zero + this.index + e,
                      );
                      return (this.index += e), i;
                    }),
                    (R.exports = y);
                },
                { '../utils': 32, './ArrayReader': 17 },
              ],
              22: [
                function (w, R, T) {
                  var k = w('../utils'),
                    y = w('../support'),
                    e = w('./ArrayReader'),
                    i = w('./StringReader'),
                    t = w('./NodeBufferReader'),
                    g = w('./Uint8ArrayReader');
                  R.exports = function (m) {
                    var a = k.getTypeOf(m);
                    return (
                      k.checkSupport(a),
                      a !== 'string' || y.uint8array
                        ? a === 'nodebuffer'
                          ? new t(m)
                          : y.uint8array
                          ? new g(k.transformTo('uint8array', m))
                          : new e(k.transformTo('array', m))
                        : new i(m)
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
                function (w, R, T) {
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
                function (w, R, T) {
                  var k = w('./GenericWorker'),
                    y = w('../utils');
                  function e(i) {
                    k.call(this, 'ConvertWorker to ' + i), (this.destType = i);
                  }
                  y.inherits(e, k),
                    (e.prototype.processChunk = function (i) {
                      this.push({ data: y.transformTo(this.destType, i.data), meta: i.meta });
                    }),
                    (R.exports = e);
                },
                { '../utils': 32, './GenericWorker': 28 },
              ],
              25: [
                function (w, R, T) {
                  var k = w('./GenericWorker'),
                    y = w('../crc32');
                  function e() {
                    k.call(this, 'Crc32Probe'), this.withStreamInfo('crc32', 0);
                  }
                  w('../utils').inherits(e, k),
                    (e.prototype.processChunk = function (i) {
                      (this.streamInfo.crc32 = y(i.data, this.streamInfo.crc32 || 0)), this.push(i);
                    }),
                    (R.exports = e);
                },
                { '../crc32': 4, '../utils': 32, './GenericWorker': 28 },
              ],
              26: [
                function (w, R, T) {
                  var k = w('../utils'),
                    y = w('./GenericWorker');
                  function e(i) {
                    y.call(this, 'DataLengthProbe for ' + i),
                      (this.propName = i),
                      this.withStreamInfo(i, 0);
                  }
                  k.inherits(e, y),
                    (e.prototype.processChunk = function (i) {
                      if (i) {
                        var t = this.streamInfo[this.propName] || 0;
                        this.streamInfo[this.propName] = t + i.data.length;
                      }
                      y.prototype.processChunk.call(this, i);
                    }),
                    (R.exports = e);
                },
                { '../utils': 32, './GenericWorker': 28 },
              ],
              27: [
                function (w, R, T) {
                  var k = w('../utils'),
                    y = w('./GenericWorker');
                  function e(i) {
                    y.call(this, 'DataWorker');
                    var t = this;
                    (this.dataIsReady = !1),
                      (this.index = 0),
                      (this.max = 0),
                      (this.data = null),
                      (this.type = ''),
                      (this._tickScheduled = !1),
                      i.then(
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
                      var i = null,
                        t = Math.min(this.max, this.index + 16384);
                      if (this.index >= this.max) return this.end();
                      switch (this.type) {
                        case 'string':
                          i = this.data.substring(this.index, t);
                          break;
                        case 'uint8array':
                          i = this.data.subarray(this.index, t);
                          break;
                        case 'array':
                        case 'nodebuffer':
                          i = this.data.slice(this.index, t);
                      }
                      return (
                        (this.index = t),
                        this.push({
                          data: i,
                          meta: { percent: this.max ? (this.index / this.max) * 100 : 0 },
                        })
                      );
                    }),
                    (R.exports = e);
                },
                { '../utils': 32, './GenericWorker': 28 },
              ],
              28: [
                function (w, R, T) {
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
                        for (var i = 0; i < this._listeners[y].length; i++)
                          this._listeners[y][i].call(this, e);
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
                        y.on('data', function (i) {
                          e.processChunk(i);
                        }),
                        y.on('end', function () {
                          e.end();
                        }),
                        y.on('error', function (i) {
                          e.error(i);
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
                    (R.exports = k);
                },
                {},
              ],
              29: [
                function (w, R, T) {
                  var k = w('../utils'),
                    y = w('./ConvertWorker'),
                    e = w('./GenericWorker'),
                    i = w('../base64'),
                    t = w('../support'),
                    g = w('../external'),
                    m = null;
                  if (t.nodestream)
                    try {
                      m = w('../nodejs/NodejsStreamOutputAdapter');
                    } catch (p) {}
                  function a(p, o) {
                    return new g.Promise(function (l, f) {
                      var b = [],
                        x = p._internalType,
                        C = p._outputType,
                        s = p._mimeType;
                      p.on('data', function (c, r) {
                        b.push(c), o && o(r);
                      })
                        .on('error', function (c) {
                          (b = []), f(c);
                        })
                        .on('end', function () {
                          try {
                            var c = (function (r, d, v) {
                              switch (r) {
                                case 'blob':
                                  return k.newBlob(k.transformTo('arraybuffer', d), v);
                                case 'base64':
                                  return i.encode(d);
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
                              })(x, b),
                              s,
                            );
                            l(c);
                          } catch (r) {
                            f(r);
                          }
                          b = [];
                        })
                        .resume();
                    });
                  }
                  function n(p, o, l) {
                    var f = o;
                    switch (o) {
                      case 'blob':
                      case 'arraybuffer':
                        f = 'uint8array';
                        break;
                      case 'base64':
                        f = 'string';
                    }
                    try {
                      (this._internalType = f),
                        (this._outputType = o),
                        (this._mimeType = l),
                        k.checkSupport(f),
                        (this._worker = p.pipe(new y(f))),
                        p.lock();
                    } catch (b) {
                      (this._worker = new e('error')), this._worker.error(b);
                    }
                  }
                  (n.prototype = {
                    accumulate: function (p) {
                      return a(this, p);
                    },
                    on: function (p, o) {
                      var l = this;
                      return (
                        p === 'data'
                          ? this._worker.on(p, function (f) {
                              o.call(l, f.data, f.meta);
                            })
                          : this._worker.on(p, function () {
                              k.delay(o, arguments, l);
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
                    (R.exports = n);
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
                function (w, R, T) {
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
                      } catch (i) {
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
                function (w, R, T) {
                  for (
                    var k = w('./utils'),
                      y = w('./support'),
                      e = w('./nodejsUtils'),
                      i = w('./stream/GenericWorker'),
                      t = new Array(256),
                      g = 0;
                    g < 256;
                    g++
                  )
                    t[g] =
                      252 <= g ? 6 : 248 <= g ? 5 : 240 <= g ? 4 : 224 <= g ? 3 : 192 <= g ? 2 : 1;
                  t[254] = t[254] = 1;
                  function m() {
                    i.call(this, 'utf-8 decode'), (this.leftOver = null);
                  }
                  function a() {
                    i.call(this, 'utf-8 encode');
                  }
                  (T.utf8encode = function (n) {
                    return y.nodebuffer
                      ? e.newBufferFrom(n, 'utf-8')
                      : (function (p) {
                          var o,
                            l,
                            f,
                            b,
                            x,
                            C = p.length,
                            s = 0;
                          for (b = 0; b < C; b++)
                            (64512 & (l = p.charCodeAt(b))) == 55296 &&
                              b + 1 < C &&
                              (64512 & (f = p.charCodeAt(b + 1))) == 56320 &&
                              ((l = 65536 + ((l - 55296) << 10) + (f - 56320)), b++),
                              (s += l < 128 ? 1 : l < 2048 ? 2 : l < 65536 ? 3 : 4);
                          for (
                            o = y.uint8array ? new Uint8Array(s) : new Array(s), b = x = 0;
                            x < s;
                            b++
                          )
                            (64512 & (l = p.charCodeAt(b))) == 55296 &&
                              b + 1 < C &&
                              (64512 & (f = p.charCodeAt(b + 1))) == 56320 &&
                              ((l = 65536 + ((l - 55296) << 10) + (f - 56320)), b++),
                              l < 128
                                ? (o[x++] = l)
                                : (l < 2048
                                    ? (o[x++] = 192 | (l >>> 6))
                                    : (l < 65536
                                        ? (o[x++] = 224 | (l >>> 12))
                                        : ((o[x++] = 240 | (l >>> 18)),
                                          (o[x++] = 128 | ((l >>> 12) & 63))),
                                      (o[x++] = 128 | ((l >>> 6) & 63))),
                                  (o[x++] = 128 | (63 & l)));
                          return o;
                        })(n);
                  }),
                    (T.utf8decode = function (n) {
                      return y.nodebuffer
                        ? k.transformTo('nodebuffer', n).toString('utf-8')
                        : (function (p) {
                            var o,
                              l,
                              f,
                              b,
                              x = p.length,
                              C = new Array(2 * x);
                            for (o = l = 0; o < x; )
                              if ((f = p[o++]) < 128) C[l++] = f;
                              else if (4 < (b = t[f])) (C[l++] = 65533), (o += b - 1);
                              else {
                                for (f &= b === 2 ? 31 : b === 3 ? 15 : 7; 1 < b && o < x; )
                                  (f = (f << 6) | (63 & p[o++])), b--;
                                1 < b
                                  ? (C[l++] = 65533)
                                  : f < 65536
                                  ? (C[l++] = f)
                                  : ((f -= 65536),
                                    (C[l++] = 55296 | ((f >> 10) & 1023)),
                                    (C[l++] = 56320 | (1023 & f)));
                              }
                            return (
                              C.length !== l &&
                                (C.subarray ? (C = C.subarray(0, l)) : (C.length = l)),
                              k.applyFromCharCode(C)
                            );
                          })((n = k.transformTo(y.uint8array ? 'uint8array' : 'array', n)));
                    }),
                    k.inherits(m, i),
                    (m.prototype.processChunk = function (n) {
                      var p = k.transformTo(y.uint8array ? 'uint8array' : 'array', n.data);
                      if (this.leftOver && this.leftOver.length) {
                        if (y.uint8array) {
                          var o = p;
                          (p = new Uint8Array(o.length + this.leftOver.length)).set(
                            this.leftOver,
                            0,
                          ),
                            p.set(o, this.leftOver.length);
                        } else p = this.leftOver.concat(p);
                        this.leftOver = null;
                      }
                      var l = (function (b, x) {
                          var C;
                          for (
                            (x = x || b.length) > b.length && (x = b.length), C = x - 1;
                            0 <= C && (192 & b[C]) == 128;

                          )
                            C--;
                          return C < 0 || C === 0 ? x : C + t[b[C]] > x ? C : x;
                        })(p),
                        f = p;
                      l !== p.length &&
                        (y.uint8array
                          ? ((f = p.subarray(0, l)), (this.leftOver = p.subarray(l, p.length)))
                          : ((f = p.slice(0, l)), (this.leftOver = p.slice(l, p.length)))),
                        this.push({ data: T.utf8decode(f), meta: n.meta });
                    }),
                    (m.prototype.flush = function () {
                      this.leftOver &&
                        this.leftOver.length &&
                        (this.push({ data: T.utf8decode(this.leftOver), meta: {} }),
                        (this.leftOver = null));
                    }),
                    (T.Utf8DecodeWorker = m),
                    k.inherits(a, i),
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
                function (w, R, T) {
                  var k = w('./support'),
                    y = w('./base64'),
                    e = w('./nodejsUtils'),
                    i = w('./external');
                  function t(o) {
                    return o;
                  }
                  function g(o, l) {
                    for (var f = 0; f < o.length; ++f) l[f] = 255 & o.charCodeAt(f);
                    return l;
                  }
                  w('setimmediate'),
                    (T.newBlob = function (o, l) {
                      T.checkSupport('blob');
                      try {
                        return new Blob([o], { type: l });
                      } catch (b) {
                        try {
                          var f = new (self.BlobBuilder ||
                            self.WebKitBlobBuilder ||
                            self.MozBlobBuilder ||
                            self.MSBlobBuilder)();
                          return f.append(o), f.getBlob(l);
                        } catch (x) {
                          throw new Error("Bug : can't construct the Blob.");
                        }
                      }
                    });
                  var m = {
                    stringifyByChunk: function (o, l, f) {
                      var b = [],
                        x = 0,
                        C = o.length;
                      if (C <= f) return String.fromCharCode.apply(null, o);
                      for (; x < C; )
                        l === 'array' || l === 'nodebuffer'
                          ? b.push(String.fromCharCode.apply(null, o.slice(x, Math.min(x + f, C))))
                          : b.push(
                              String.fromCharCode.apply(null, o.subarray(x, Math.min(x + f, C))),
                            ),
                          (x += f);
                      return b.join('');
                    },
                    stringifyByChar: function (o) {
                      for (var l = '', f = 0; f < o.length; f++) l += String.fromCharCode(o[f]);
                      return l;
                    },
                    applyCanBeUsed: {
                      uint8array: (function () {
                        try {
                          return (
                            k.uint8array &&
                            String.fromCharCode.apply(null, new Uint8Array(1)).length === 1
                          );
                        } catch (o) {
                          return !1;
                        }
                      })(),
                      nodebuffer: (function () {
                        try {
                          return (
                            k.nodebuffer &&
                            String.fromCharCode.apply(null, e.allocBuffer(1)).length === 1
                          );
                        } catch (o) {
                          return !1;
                        }
                      })(),
                    },
                  };
                  function a(o) {
                    var l = 65536,
                      f = T.getTypeOf(o),
                      b = !0;
                    if (
                      (f === 'uint8array'
                        ? (b = m.applyCanBeUsed.uint8array)
                        : f === 'nodebuffer' && (b = m.applyCanBeUsed.nodebuffer),
                      b)
                    )
                      for (; 1 < l; )
                        try {
                          return m.stringifyByChunk(o, f, l);
                        } catch (x) {
                          l = Math.floor(l / 2);
                        }
                    return m.stringifyByChar(o);
                  }
                  function n(o, l) {
                    for (var f = 0; f < o.length; f++) l[f] = o[f];
                    return l;
                  }
                  T.applyFromCharCode = a;
                  var p = {};
                  (p.string = {
                    string: t,
                    array: function (o) {
                      return g(o, new Array(o.length));
                    },
                    arraybuffer: function (o) {
                      return p.string.uint8array(o).buffer;
                    },
                    uint8array: function (o) {
                      return g(o, new Uint8Array(o.length));
                    },
                    nodebuffer: function (o) {
                      return g(o, e.allocBuffer(o.length));
                    },
                  }),
                    (p.array = {
                      string: a,
                      array: t,
                      arraybuffer: function (o) {
                        return new Uint8Array(o).buffer;
                      },
                      uint8array: function (o) {
                        return new Uint8Array(o);
                      },
                      nodebuffer: function (o) {
                        return e.newBufferFrom(o);
                      },
                    }),
                    (p.arraybuffer = {
                      string: function (o) {
                        return a(new Uint8Array(o));
                      },
                      array: function (o) {
                        return n(new Uint8Array(o), new Array(o.byteLength));
                      },
                      arraybuffer: t,
                      uint8array: function (o) {
                        return new Uint8Array(o);
                      },
                      nodebuffer: function (o) {
                        return e.newBufferFrom(new Uint8Array(o));
                      },
                    }),
                    (p.uint8array = {
                      string: a,
                      array: function (o) {
                        return n(o, new Array(o.length));
                      },
                      arraybuffer: function (o) {
                        return o.buffer;
                      },
                      uint8array: t,
                      nodebuffer: function (o) {
                        return e.newBufferFrom(o);
                      },
                    }),
                    (p.nodebuffer = {
                      string: a,
                      array: function (o) {
                        return n(o, new Array(o.length));
                      },
                      arraybuffer: function (o) {
                        return p.nodebuffer.uint8array(o).buffer;
                      },
                      uint8array: function (o) {
                        return n(o, new Uint8Array(o.length));
                      },
                      nodebuffer: t,
                    }),
                    (T.transformTo = function (o, l) {
                      if (((l = l || ''), !o)) return l;
                      T.checkSupport(o);
                      var f = T.getTypeOf(l);
                      return p[f][o](l);
                    }),
                    (T.resolve = function (o) {
                      for (var l = o.split('/'), f = [], b = 0; b < l.length; b++) {
                        var x = l[b];
                        x === '.' ||
                          (x === '' && b !== 0 && b !== l.length - 1) ||
                          (x === '..' ? f.pop() : f.push(x));
                      }
                      return f.join('/');
                    }),
                    (T.getTypeOf = function (o) {
                      return typeof o == 'string'
                        ? 'string'
                        : Object.prototype.toString.call(o) === '[object Array]'
                        ? 'array'
                        : k.nodebuffer && e.isBuffer(o)
                        ? 'nodebuffer'
                        : k.uint8array && o instanceof Uint8Array
                        ? 'uint8array'
                        : k.arraybuffer && o instanceof ArrayBuffer
                        ? 'arraybuffer'
                        : void 0;
                    }),
                    (T.checkSupport = function (o) {
                      if (!k[o.toLowerCase()])
                        throw new Error(o + ' is not supported by this platform');
                    }),
                    (T.MAX_VALUE_16BITS = 65535),
                    (T.MAX_VALUE_32BITS = -1),
                    (T.pretty = function (o) {
                      var l,
                        f,
                        b = '';
                      for (f = 0; f < (o || '').length; f++)
                        b +=
                          '\\x' +
                          ((l = o.charCodeAt(f)) < 16 ? '0' : '') +
                          l.toString(16).toUpperCase();
                      return b;
                    }),
                    (T.delay = function (o, l, f) {
                      setImmediate(function () {
                        o.apply(f || null, l || []);
                      });
                    }),
                    (T.inherits = function (o, l) {
                      function f() {}
                      (f.prototype = l.prototype), (o.prototype = new f());
                    }),
                    (T.extend = function () {
                      var o,
                        l,
                        f = {};
                      for (o = 0; o < arguments.length; o++)
                        for (l in arguments[o])
                          Object.prototype.hasOwnProperty.call(arguments[o], l) &&
                            f[l] === void 0 &&
                            (f[l] = arguments[o][l]);
                      return f;
                    }),
                    (T.prepareContent = function (o, l, f, b, x) {
                      return i.Promise.resolve(l)
                        .then(function (C) {
                          return k.blob &&
                            (C instanceof Blob ||
                              ['[object File]', '[object Blob]'].indexOf(
                                Object.prototype.toString.call(C),
                              ) !== -1) &&
                            typeof FileReader != 'undefined'
                            ? new i.Promise(function (s, c) {
                                var r = new FileReader();
                                (r.onload = function (d) {
                                  s(d.target.result);
                                }),
                                  (r.onerror = function (d) {
                                    c(d.target.error);
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
                                  (x
                                    ? (C = y.decode(C))
                                    : f &&
                                      b !== !0 &&
                                      (C = (function (c) {
                                        return g(
                                          c,
                                          k.uint8array
                                            ? new Uint8Array(c.length)
                                            : new Array(c.length),
                                        );
                                      })(C))),
                              C)
                            : i.Promise.reject(
                                new Error(
                                  "Can't read the data of '" +
                                    o +
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
                function (w, R, T) {
                  var k = w('./reader/readerFor'),
                    y = w('./utils'),
                    e = w('./signature'),
                    i = w('./zipEntry'),
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
                        (m = new i({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(
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
                    (R.exports = g);
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
                function (w, R, T) {
                  var k = w('./reader/readerFor'),
                    y = w('./utils'),
                    e = w('./compressedObject'),
                    i = w('./crc32'),
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
                      var p, o;
                      if (
                        (n.skip(22),
                        (this.fileNameLength = n.readInt(2)),
                        (o = n.readInt(2)),
                        (this.fileName = n.readData(this.fileNameLength)),
                        n.skip(o),
                        this.compressedSize === -1 || this.uncompressedSize === -1)
                      )
                        throw new Error(
                          "Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)",
                        );
                      if (
                        (p = (function (l) {
                          for (var f in g)
                            if (Object.prototype.hasOwnProperty.call(g, f) && g[f].magic === l)
                              return g[f];
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
                        o,
                        l,
                        f = n.index + this.extraFieldsLength;
                      for (this.extraFields || (this.extraFields = {}); n.index + 4 < f; )
                        (p = n.readInt(2)),
                          (o = n.readInt(2)),
                          (l = n.readData(o)),
                          (this.extraFields[p] = { id: p, length: o, value: l });
                      n.setIndex(f);
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
                          var o = y.transformTo(n, this.fileName);
                          this.fileNameStr = this.loadOptions.decodeFileName(o);
                        }
                        var l = this.findExtraFieldUnicodeComment();
                        if (l !== null) this.fileCommentStr = l;
                        else {
                          var f = y.transformTo(n, this.fileComment);
                          this.fileCommentStr = this.loadOptions.decodeFileName(f);
                        }
                      }
                    },
                    findExtraFieldUnicodePath: function () {
                      var n = this.extraFields[28789];
                      if (n) {
                        var p = k(n.value);
                        return p.readInt(1) !== 1 || i(this.fileName) !== p.readInt(4)
                          ? null
                          : t.utf8decode(p.readData(n.length - 5));
                      }
                      return null;
                    },
                    findExtraFieldUnicodeComment: function () {
                      var n = this.extraFields[25461];
                      if (n) {
                        var p = k(n.value);
                        return p.readInt(1) !== 1 || i(this.fileComment) !== p.readInt(4)
                          ? null
                          : t.utf8decode(p.readData(n.length - 5));
                      }
                      return null;
                    },
                  }),
                    (R.exports = a);
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
                function (w, R, T) {
                  function k(p, o, l) {
                    (this.name = p),
                      (this.dir = l.dir),
                      (this.date = l.date),
                      (this.comment = l.comment),
                      (this.unixPermissions = l.unixPermissions),
                      (this.dosPermissions = l.dosPermissions),
                      (this._data = o),
                      (this._dataBinary = l.binary),
                      (this.options = {
                        compression: l.compression,
                        compressionOptions: l.compressionOptions,
                      });
                  }
                  var y = w('./stream/StreamHelper'),
                    e = w('./stream/DataWorker'),
                    i = w('./utf8'),
                    t = w('./compressedObject'),
                    g = w('./stream/GenericWorker');
                  k.prototype = {
                    internalStream: function (p) {
                      var o = null,
                        l = 'string';
                      try {
                        if (!p) throw new Error('No output type specified.');
                        var f = (l = p.toLowerCase()) === 'string' || l === 'text';
                        (l !== 'binarystring' && l !== 'text') || (l = 'string'),
                          (o = this._decompressWorker());
                        var b = !this._dataBinary;
                        b && !f && (o = o.pipe(new i.Utf8EncodeWorker())),
                          !b && f && (o = o.pipe(new i.Utf8DecodeWorker()));
                      } catch (x) {
                        (o = new g('error')).error(x);
                      }
                      return new y(o, l, '');
                    },
                    async: function (p, o) {
                      return this.internalStream(p).accumulate(o);
                    },
                    nodeStream: function (p, o) {
                      return this.internalStream(p || 'nodebuffer').toNodejsStream(o);
                    },
                    _compressWorker: function (p, o) {
                      if (this._data instanceof t && this._data.compression.magic === p.magic)
                        return this._data.getCompressedWorker();
                      var l = this._decompressWorker();
                      return (
                        this._dataBinary || (l = l.pipe(new i.Utf8EncodeWorker())),
                        t.createWorkerFrom(l, p, o)
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
                  R.exports = k;
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
                function (w, R, T) {
                  (function (k) {
                    var y,
                      e,
                      i = k.MutationObserver || k.WebKitMutationObserver;
                    if (i) {
                      var t = 0,
                        g = new i(p),
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
                              var o = k.document.createElement('script');
                              (o.onreadystatechange = function () {
                                p(),
                                  (o.onreadystatechange = null),
                                  o.parentNode.removeChild(o),
                                  (o = null);
                              }),
                                k.document.documentElement.appendChild(o);
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
                      var o, l;
                      e = !0;
                      for (var f = n.length; f; ) {
                        for (l = n, n = [], o = -1; ++o < f; ) l[o]();
                        f = n.length;
                      }
                      e = !1;
                    }
                    R.exports = function (o) {
                      n.push(o) !== 1 || e || y();
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
                function (w, R, T) {
                  var k = w('immediate');
                  function y() {}
                  var e = {},
                    i = ['REJECTED'],
                    t = ['FULFILLED'],
                    g = ['PENDING'];
                  function m(f) {
                    if (typeof f != 'function') throw new TypeError('resolver must be a function');
                    (this.state = g),
                      (this.queue = []),
                      (this.outcome = void 0),
                      f !== y && o(this, f);
                  }
                  function a(f, b, x) {
                    (this.promise = f),
                      typeof b == 'function' &&
                        ((this.onFulfilled = b), (this.callFulfilled = this.otherCallFulfilled)),
                      typeof x == 'function' &&
                        ((this.onRejected = x), (this.callRejected = this.otherCallRejected));
                  }
                  function n(f, b, x) {
                    k(function () {
                      var C;
                      try {
                        C = b(x);
                      } catch (s) {
                        return e.reject(f, s);
                      }
                      C === f
                        ? e.reject(f, new TypeError('Cannot resolve promise with itself'))
                        : e.resolve(f, C);
                    });
                  }
                  function p(f) {
                    var b = f && f.then;
                    if (
                      f &&
                      (typeof f == 'object' || typeof f == 'function') &&
                      typeof b == 'function'
                    )
                      return function () {
                        b.apply(f, arguments);
                      };
                  }
                  function o(f, b) {
                    var x = !1;
                    function C(r) {
                      x || ((x = !0), e.reject(f, r));
                    }
                    function s(r) {
                      x || ((x = !0), e.resolve(f, r));
                    }
                    var c = l(function () {
                      b(s, C);
                    });
                    c.status === 'error' && C(c.value);
                  }
                  function l(f, b) {
                    var x = {};
                    try {
                      (x.value = f(b)), (x.status = 'success');
                    } catch (C) {
                      (x.status = 'error'), (x.value = C);
                    }
                    return x;
                  }
                  ((R.exports = m).prototype.finally = function (f) {
                    if (typeof f != 'function') return this;
                    var b = this.constructor;
                    return this.then(
                      function (x) {
                        return b.resolve(f()).then(function () {
                          return x;
                        });
                      },
                      function (x) {
                        return b.resolve(f()).then(function () {
                          throw x;
                        });
                      },
                    );
                  }),
                    (m.prototype.catch = function (f) {
                      return this.then(null, f);
                    }),
                    (m.prototype.then = function (f, b) {
                      if (
                        (typeof f != 'function' && this.state === t) ||
                        (typeof b != 'function' && this.state === i)
                      )
                        return this;
                      var x = new this.constructor(y);
                      return (
                        this.state !== g
                          ? n(x, this.state === t ? f : b, this.outcome)
                          : this.queue.push(new a(x, f, b)),
                        x
                      );
                    }),
                    (a.prototype.callFulfilled = function (f) {
                      e.resolve(this.promise, f);
                    }),
                    (a.prototype.otherCallFulfilled = function (f) {
                      n(this.promise, this.onFulfilled, f);
                    }),
                    (a.prototype.callRejected = function (f) {
                      e.reject(this.promise, f);
                    }),
                    (a.prototype.otherCallRejected = function (f) {
                      n(this.promise, this.onRejected, f);
                    }),
                    (e.resolve = function (f, b) {
                      var x = l(p, b);
                      if (x.status === 'error') return e.reject(f, x.value);
                      var C = x.value;
                      if (C) o(f, C);
                      else {
                        (f.state = t), (f.outcome = b);
                        for (var s = -1, c = f.queue.length; ++s < c; ) f.queue[s].callFulfilled(b);
                      }
                      return f;
                    }),
                    (e.reject = function (f, b) {
                      (f.state = i), (f.outcome = b);
                      for (var x = -1, C = f.queue.length; ++x < C; ) f.queue[x].callRejected(b);
                      return f;
                    }),
                    (m.resolve = function (f) {
                      return f instanceof this ? f : e.resolve(new this(y), f);
                    }),
                    (m.reject = function (f) {
                      var b = new this(y);
                      return e.reject(b, f);
                    }),
                    (m.all = function (f) {
                      var b = this;
                      if (Object.prototype.toString.call(f) !== '[object Array]')
                        return this.reject(new TypeError('must be an array'));
                      var x = f.length,
                        C = !1;
                      if (!x) return this.resolve([]);
                      for (var s = new Array(x), c = 0, r = -1, d = new this(y); ++r < x; )
                        v(f[r], r);
                      return d;
                      function v(S, D) {
                        b.resolve(S).then(
                          function (_) {
                            (s[D] = _), ++c !== x || C || ((C = !0), e.resolve(d, s));
                          },
                          function (_) {
                            C || ((C = !0), e.reject(d, _));
                          },
                        );
                      }
                    }),
                    (m.race = function (f) {
                      var b = this;
                      if (Object.prototype.toString.call(f) !== '[object Array]')
                        return this.reject(new TypeError('must be an array'));
                      var x = f.length,
                        C = !1;
                      if (!x) return this.resolve([]);
                      for (var s = -1, c = new this(y); ++s < x; )
                        (r = f[s]),
                          b.resolve(r).then(
                            function (d) {
                              C || ((C = !0), e.resolve(c, d));
                            },
                            function (d) {
                              C || ((C = !0), e.reject(c, d));
                            },
                          );
                      var r;
                      return c;
                    });
                },
                { immediate: 36 },
              ],
              38: [
                function (w, R, T) {
                  var k = {};
                  (0, w('./lib/utils/common').assign)(
                    k,
                    w('./lib/deflate'),
                    w('./lib/inflate'),
                    w('./lib/zlib/constants'),
                  ),
                    (R.exports = k);
                },
                {
                  './lib/deflate': 39,
                  './lib/inflate': 40,
                  './lib/utils/common': 41,
                  './lib/zlib/constants': 44,
                },
              ],
              39: [
                function (w, R, T) {
                  var k = w('./zlib/deflate'),
                    y = w('./utils/common'),
                    e = w('./utils/strings'),
                    i = w('./zlib/messages'),
                    t = w('./zlib/zstream'),
                    g = Object.prototype.toString,
                    m = 0,
                    a = -1,
                    n = 0,
                    p = 8;
                  function o(f) {
                    if (!(this instanceof o)) return new o(f);
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
                      f || {},
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
                    var x = k.deflateInit2(
                      this.strm,
                      b.level,
                      b.method,
                      b.windowBits,
                      b.memLevel,
                      b.strategy,
                    );
                    if (x !== m) throw new Error(i[x]);
                    if ((b.header && k.deflateSetHeader(this.strm, b.header), b.dictionary)) {
                      var C;
                      if (
                        ((C =
                          typeof b.dictionary == 'string'
                            ? e.string2buf(b.dictionary)
                            : g.call(b.dictionary) === '[object ArrayBuffer]'
                            ? new Uint8Array(b.dictionary)
                            : b.dictionary),
                        (x = k.deflateSetDictionary(this.strm, C)) !== m)
                      )
                        throw new Error(i[x]);
                      this._dict_set = !0;
                    }
                  }
                  function l(f, b) {
                    var x = new o(b);
                    if ((x.push(f, !0), x.err)) throw x.msg || i[x.err];
                    return x.result;
                  }
                  (o.prototype.push = function (f, b) {
                    var x,
                      C,
                      s = this.strm,
                      c = this.options.chunkSize;
                    if (this.ended) return !1;
                    (C = b === ~~b ? b : b === !0 ? 4 : 0),
                      typeof f == 'string'
                        ? (s.input = e.string2buf(f))
                        : g.call(f) === '[object ArrayBuffer]'
                        ? (s.input = new Uint8Array(f))
                        : (s.input = f),
                      (s.next_in = 0),
                      (s.avail_in = s.input.length);
                    do {
                      if (
                        (s.avail_out === 0 &&
                          ((s.output = new y.Buf8(c)), (s.next_out = 0), (s.avail_out = c)),
                        (x = k.deflate(s, C)) !== 1 && x !== m)
                      )
                        return this.onEnd(x), !(this.ended = !0);
                      (s.avail_out !== 0 && (s.avail_in !== 0 || (C !== 4 && C !== 2))) ||
                        (this.options.to === 'string'
                          ? this.onData(e.buf2binstring(y.shrinkBuf(s.output, s.next_out)))
                          : this.onData(y.shrinkBuf(s.output, s.next_out)));
                    } while ((0 < s.avail_in || s.avail_out === 0) && x !== 1);
                    return C === 4
                      ? ((x = k.deflateEnd(this.strm)), this.onEnd(x), (this.ended = !0), x === m)
                      : C !== 2 || (this.onEnd(m), !(s.avail_out = 0));
                  }),
                    (o.prototype.onData = function (f) {
                      this.chunks.push(f);
                    }),
                    (o.prototype.onEnd = function (f) {
                      f === m &&
                        (this.options.to === 'string'
                          ? (this.result = this.chunks.join(''))
                          : (this.result = y.flattenChunks(this.chunks))),
                        (this.chunks = []),
                        (this.err = f),
                        (this.msg = this.strm.msg);
                    }),
                    (T.Deflate = o),
                    (T.deflate = l),
                    (T.deflateRaw = function (f, b) {
                      return ((b = b || {}).raw = !0), l(f, b);
                    }),
                    (T.gzip = function (f, b) {
                      return ((b = b || {}).gzip = !0), l(f, b);
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
                function (w, R, T) {
                  var k = w('./zlib/inflate'),
                    y = w('./utils/common'),
                    e = w('./utils/strings'),
                    i = w('./zlib/constants'),
                    t = w('./zlib/messages'),
                    g = w('./zlib/zstream'),
                    m = w('./zlib/gzheader'),
                    a = Object.prototype.toString;
                  function n(o) {
                    if (!(this instanceof n)) return new n(o);
                    this.options = y.assign({ chunkSize: 16384, windowBits: 0, to: '' }, o || {});
                    var l = this.options;
                    l.raw &&
                      0 <= l.windowBits &&
                      l.windowBits < 16 &&
                      ((l.windowBits = -l.windowBits), l.windowBits === 0 && (l.windowBits = -15)),
                      !(0 <= l.windowBits && l.windowBits < 16) ||
                        (o && o.windowBits) ||
                        (l.windowBits += 32),
                      15 < l.windowBits &&
                        l.windowBits < 48 &&
                        !(15 & l.windowBits) &&
                        (l.windowBits |= 15),
                      (this.err = 0),
                      (this.msg = ''),
                      (this.ended = !1),
                      (this.chunks = []),
                      (this.strm = new g()),
                      (this.strm.avail_out = 0);
                    var f = k.inflateInit2(this.strm, l.windowBits);
                    if (f !== i.Z_OK) throw new Error(t[f]);
                    (this.header = new m()), k.inflateGetHeader(this.strm, this.header);
                  }
                  function p(o, l) {
                    var f = new n(l);
                    if ((f.push(o, !0), f.err)) throw f.msg || t[f.err];
                    return f.result;
                  }
                  (n.prototype.push = function (o, l) {
                    var f,
                      b,
                      x,
                      C,
                      s,
                      c,
                      r = this.strm,
                      d = this.options.chunkSize,
                      v = this.options.dictionary,
                      S = !1;
                    if (this.ended) return !1;
                    (b = l === ~~l ? l : l === !0 ? i.Z_FINISH : i.Z_NO_FLUSH),
                      typeof o == 'string'
                        ? (r.input = e.binstring2buf(o))
                        : a.call(o) === '[object ArrayBuffer]'
                        ? (r.input = new Uint8Array(o))
                        : (r.input = o),
                      (r.next_in = 0),
                      (r.avail_in = r.input.length);
                    do {
                      if (
                        (r.avail_out === 0 &&
                          ((r.output = new y.Buf8(d)), (r.next_out = 0), (r.avail_out = d)),
                        (f = k.inflate(r, i.Z_NO_FLUSH)) === i.Z_NEED_DICT &&
                          v &&
                          ((c =
                            typeof v == 'string'
                              ? e.string2buf(v)
                              : a.call(v) === '[object ArrayBuffer]'
                              ? new Uint8Array(v)
                              : v),
                          (f = k.inflateSetDictionary(this.strm, c))),
                        f === i.Z_BUF_ERROR && S === !0 && ((f = i.Z_OK), (S = !1)),
                        f !== i.Z_STREAM_END && f !== i.Z_OK)
                      )
                        return this.onEnd(f), !(this.ended = !0);
                      r.next_out &&
                        ((r.avail_out !== 0 &&
                          f !== i.Z_STREAM_END &&
                          (r.avail_in !== 0 || (b !== i.Z_FINISH && b !== i.Z_SYNC_FLUSH))) ||
                          (this.options.to === 'string'
                            ? ((x = e.utf8border(r.output, r.next_out)),
                              (C = r.next_out - x),
                              (s = e.buf2string(r.output, x)),
                              (r.next_out = C),
                              (r.avail_out = d - C),
                              C && y.arraySet(r.output, r.output, x, C, 0),
                              this.onData(s))
                            : this.onData(y.shrinkBuf(r.output, r.next_out)))),
                        r.avail_in === 0 && r.avail_out === 0 && (S = !0);
                    } while ((0 < r.avail_in || r.avail_out === 0) && f !== i.Z_STREAM_END);
                    return (
                      f === i.Z_STREAM_END && (b = i.Z_FINISH),
                      b === i.Z_FINISH
                        ? ((f = k.inflateEnd(this.strm)),
                          this.onEnd(f),
                          (this.ended = !0),
                          f === i.Z_OK)
                        : b !== i.Z_SYNC_FLUSH || (this.onEnd(i.Z_OK), !(r.avail_out = 0))
                    );
                  }),
                    (n.prototype.onData = function (o) {
                      this.chunks.push(o);
                    }),
                    (n.prototype.onEnd = function (o) {
                      o === i.Z_OK &&
                        (this.options.to === 'string'
                          ? (this.result = this.chunks.join(''))
                          : (this.result = y.flattenChunks(this.chunks))),
                        (this.chunks = []),
                        (this.err = o),
                        (this.msg = this.strm.msg);
                    }),
                    (T.Inflate = n),
                    (T.inflate = p),
                    (T.inflateRaw = function (o, l) {
                      return ((l = l || {}).raw = !0), p(o, l);
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
                function (w, R, T) {
                  var k =
                    typeof Uint8Array != 'undefined' &&
                    typeof Uint16Array != 'undefined' &&
                    typeof Int32Array != 'undefined';
                  (T.assign = function (i) {
                    for (var t = Array.prototype.slice.call(arguments, 1); t.length; ) {
                      var g = t.shift();
                      if (g) {
                        if (typeof g != 'object') throw new TypeError(g + 'must be non-object');
                        for (var m in g) g.hasOwnProperty(m) && (i[m] = g[m]);
                      }
                    }
                    return i;
                  }),
                    (T.shrinkBuf = function (i, t) {
                      return i.length === t
                        ? i
                        : i.subarray
                        ? i.subarray(0, t)
                        : ((i.length = t), i);
                    });
                  var y = {
                      arraySet: function (i, t, g, m, a) {
                        if (t.subarray && i.subarray) i.set(t.subarray(g, g + m), a);
                        else for (var n = 0; n < m; n++) i[a + n] = t[g + n];
                      },
                      flattenChunks: function (i) {
                        var t, g, m, a, n, p;
                        for (t = m = 0, g = i.length; t < g; t++) m += i[t].length;
                        for (p = new Uint8Array(m), t = a = 0, g = i.length; t < g; t++)
                          (n = i[t]), p.set(n, a), (a += n.length);
                        return p;
                      },
                    },
                    e = {
                      arraySet: function (i, t, g, m, a) {
                        for (var n = 0; n < m; n++) i[a + n] = t[g + n];
                      },
                      flattenChunks: function (i) {
                        return [].concat.apply([], i);
                      },
                    };
                  (T.setTyped = function (i) {
                    i
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
                function (w, R, T) {
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
                  for (var i = new k.Buf8(256), t = 0; t < 256; t++)
                    i[t] =
                      252 <= t ? 6 : 248 <= t ? 5 : 240 <= t ? 4 : 224 <= t ? 3 : 192 <= t ? 2 : 1;
                  function g(m, a) {
                    if (a < 65537 && ((m.subarray && e) || (!m.subarray && y)))
                      return String.fromCharCode.apply(null, k.shrinkBuf(m, a));
                    for (var n = '', p = 0; p < a; p++) n += String.fromCharCode(m[p]);
                    return n;
                  }
                  (i[254] = i[254] = 1),
                    (T.string2buf = function (m) {
                      var a,
                        n,
                        p,
                        o,
                        l,
                        f = m.length,
                        b = 0;
                      for (o = 0; o < f; o++)
                        (64512 & (n = m.charCodeAt(o))) == 55296 &&
                          o + 1 < f &&
                          (64512 & (p = m.charCodeAt(o + 1))) == 56320 &&
                          ((n = 65536 + ((n - 55296) << 10) + (p - 56320)), o++),
                          (b += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4);
                      for (a = new k.Buf8(b), o = l = 0; l < b; o++)
                        (64512 & (n = m.charCodeAt(o))) == 55296 &&
                          o + 1 < f &&
                          (64512 & (p = m.charCodeAt(o + 1))) == 56320 &&
                          ((n = 65536 + ((n - 55296) << 10) + (p - 56320)), o++),
                          n < 128
                            ? (a[l++] = n)
                            : (n < 2048
                                ? (a[l++] = 192 | (n >>> 6))
                                : (n < 65536
                                    ? (a[l++] = 224 | (n >>> 12))
                                    : ((a[l++] = 240 | (n >>> 18)),
                                      (a[l++] = 128 | ((n >>> 12) & 63))),
                                  (a[l++] = 128 | ((n >>> 6) & 63))),
                              (a[l++] = 128 | (63 & n)));
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
                        o,
                        l,
                        f = a || m.length,
                        b = new Array(2 * f);
                      for (n = p = 0; n < f; )
                        if ((o = m[n++]) < 128) b[p++] = o;
                        else if (4 < (l = i[o])) (b[p++] = 65533), (n += l - 1);
                        else {
                          for (o &= l === 2 ? 31 : l === 3 ? 15 : 7; 1 < l && n < f; )
                            (o = (o << 6) | (63 & m[n++])), l--;
                          1 < l
                            ? (b[p++] = 65533)
                            : o < 65536
                            ? (b[p++] = o)
                            : ((o -= 65536),
                              (b[p++] = 55296 | ((o >> 10) & 1023)),
                              (b[p++] = 56320 | (1023 & o)));
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
                      return n < 0 || n === 0 ? a : n + i[m[n]] > a ? n : a;
                    });
                },
                { './common': 41 },
              ],
              43: [
                function (w, R, T) {
                  R.exports = function (k, y, e, i) {
                    for (var t = (65535 & k) | 0, g = ((k >>> 16) & 65535) | 0, m = 0; e !== 0; ) {
                      for (
                        e -= m = 2e3 < e ? 2e3 : e;
                        (g = (g + (t = (t + y[i++]) | 0)) | 0), --m;

                      );
                      (t %= 65521), (g %= 65521);
                    }
                    return t | (g << 16) | 0;
                  };
                },
                {},
              ],
              44: [
                function (w, R, T) {
                  R.exports = {
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
                function (w, R, T) {
                  var k = (function () {
                    for (var y, e = [], i = 0; i < 256; i++) {
                      y = i;
                      for (var t = 0; t < 8; t++) y = 1 & y ? 3988292384 ^ (y >>> 1) : y >>> 1;
                      e[i] = y;
                    }
                    return e;
                  })();
                  R.exports = function (y, e, i, t) {
                    var g = k,
                      m = t + i;
                    y ^= -1;
                    for (var a = t; a < m; a++) y = (y >>> 8) ^ g[255 & (y ^ e[a])];
                    return -1 ^ y;
                  };
                },
                {},
              ],
              46: [
                function (w, R, T) {
                  var k,
                    y = w('../utils/common'),
                    e = w('./trees'),
                    i = w('./adler32'),
                    t = w('./crc32'),
                    g = w('./messages'),
                    m = 0,
                    a = 4,
                    n = 0,
                    p = -2,
                    o = -1,
                    l = 4,
                    f = 2,
                    b = 8,
                    x = 9,
                    C = 286,
                    s = 30,
                    c = 19,
                    r = 2 * C + 1,
                    d = 15,
                    v = 3,
                    S = 258,
                    D = S + v + 1,
                    _ = 42,
                    E = 113,
                    u = 1,
                    z = 2,
                    G = 3,
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
                  function q(h, M) {
                    (h.pending_buf[h.pending++] = (M >>> 8) & 255),
                      (h.pending_buf[h.pending++] = 255 & M);
                  }
                  function Z(h, M) {
                    var I,
                      A,
                      P = h.max_chain_length,
                      N = h.strstart,
                      j = h.prev_length,
                      U = h.nice_match,
                      B = h.strstart > h.w_size - D ? h.strstart - (h.w_size - D) : 0,
                      W = h.window,
                      K = h.w_mask,
                      H = h.prev,
                      Q = h.strstart + S,
                      se = W[N + j - 1],
                      ae = W[N + j];
                    h.prev_length >= h.good_match && (P >>= 2),
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
                    while ((M = H[M & K]) > B && --P != 0);
                    return j <= h.lookahead ? j : h.lookahead;
                  }
                  function ie(h) {
                    var M,
                      I,
                      A,
                      P,
                      N,
                      j,
                      U,
                      B,
                      W,
                      K,
                      H = h.w_size;
                    do {
                      if (
                        ((P = h.window_size - h.lookahead - h.strstart), h.strstart >= H + (H - D))
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
                        P += H;
                      }
                      if (h.strm.avail_in === 0) break;
                      if (
                        ((j = h.strm),
                        (U = h.window),
                        (B = h.strstart + h.lookahead),
                        (W = P),
                        (K = void 0),
                        (K = j.avail_in),
                        W < K && (K = W),
                        (I =
                          K === 0
                            ? 0
                            : ((j.avail_in -= K),
                              y.arraySet(U, j.input, j.next_in, K, B),
                              j.state.wrap === 1
                                ? (j.adler = i(j.adler, U, K, B))
                                : j.state.wrap === 2 && (j.adler = t(j.adler, U, K, B)),
                              (j.next_in += K),
                              (j.total_in += K),
                              K)),
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
                        if ((ie(h), h.lookahead < D && M === m)) return u;
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
                      if (A && (O(h, !1), h.strm.avail_out === 0)) return u;
                    }
                    return (
                      (h.insert = h.strstart < v - 1 ? h.strstart : v - 1),
                      M === a
                        ? (O(h, !0), h.strm.avail_out === 0 ? G : L)
                        : h.last_lit && (O(h, !1), h.strm.avail_out === 0)
                        ? u
                        : z
                    );
                  }
                  function re(h, M) {
                    for (var I, A, P; ; ) {
                      if (h.lookahead < D) {
                        if ((ie(h), h.lookahead < D && M === m)) return u;
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
                          P = h.strstart + h.lookahead - v,
                            A = e._tr_tally(h, h.strstart - 1 - h.prev_match, h.prev_length - v),
                            h.lookahead -= h.prev_length - 1,
                            h.prev_length -= 2;
                          ++h.strstart <= P &&
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
                          return u;
                      } else if (h.match_available) {
                        if (
                          ((A = e._tr_tally(h, 0, h.window[h.strstart - 1])) && O(h, !1),
                          h.strstart++,
                          h.lookahead--,
                          h.strm.avail_out === 0)
                        )
                          return u;
                      } else (h.match_available = 1), h.strstart++, h.lookahead--;
                    }
                    return (
                      h.match_available &&
                        ((A = e._tr_tally(h, 0, h.window[h.strstart - 1])),
                        (h.match_available = 0)),
                      (h.insert = h.strstart < v - 1 ? h.strstart : v - 1),
                      M === a
                        ? (O(h, !0), h.strm.avail_out === 0 ? G : L)
                        : h.last_lit && (O(h, !1), h.strm.avail_out === 0)
                        ? u
                        : z
                    );
                  }
                  function ne(h, M, I, A, P) {
                    (this.good_length = h),
                      (this.max_lazy = M),
                      (this.nice_length = I),
                      (this.max_chain = A),
                      (this.func = P);
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
                      (this.bl_tree = new y.Buf16(2 * (2 * c + 1))),
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
                        (h.data_type = f),
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
                  function we(h, M, I, A, P, N) {
                    if (!h) return p;
                    var j = 1;
                    if (
                      (M === o && (M = 6),
                      A < 0 ? ((j = 0), (A = -A)) : 15 < A && ((j = 2), (A -= 16)),
                      P < 1 ||
                        x < P ||
                        I !== b ||
                        A < 8 ||
                        15 < A ||
                        M < 0 ||
                        9 < M ||
                        N < 0 ||
                        l < N)
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
                      (U.hash_bits = P + 7),
                      (U.hash_size = 1 << U.hash_bits),
                      (U.hash_mask = U.hash_size - 1),
                      (U.hash_shift = ~~((U.hash_bits + v - 1) / v)),
                      (U.window = new y.Buf8(2 * U.w_size)),
                      (U.head = new y.Buf16(U.hash_size)),
                      (U.prev = new y.Buf16(U.w_size)),
                      (U.lit_bufsize = 1 << (P + 6)),
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
                          if ((ie(h), h.lookahead === 0 && M === m)) return u;
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
                          return u;
                      }
                      return (
                        (h.insert = 0),
                        M === a
                          ? (O(h, !0), h.strm.avail_out === 0 ? G : L)
                          : (h.strstart > h.block_start && (O(h, !1), h.strm.avail_out), u)
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
                      var I, A, P, N;
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
                            q(A, j),
                            A.strstart !== 0 && (q(A, h.adler >>> 16), q(A, 65535 & h.adler)),
                            (h.adler = 1);
                        }
                      if (A.status === 69)
                        if (A.gzhead.extra) {
                          for (
                            P = A.pending;
                            A.gzindex < (65535 & A.gzhead.extra.length) &&
                            (A.pending !== A.pending_buf_size ||
                              (A.gzhead.hcrc &&
                                A.pending > P &&
                                (h.adler = t(h.adler, A.pending_buf, A.pending - P, P)),
                              F(h),
                              (P = A.pending),
                              A.pending !== A.pending_buf_size));

                          )
                            ee(A, 255 & A.gzhead.extra[A.gzindex]), A.gzindex++;
                          A.gzhead.hcrc &&
                            A.pending > P &&
                            (h.adler = t(h.adler, A.pending_buf, A.pending - P, P)),
                            A.gzindex === A.gzhead.extra.length &&
                              ((A.gzindex = 0), (A.status = 73));
                        } else A.status = 73;
                      if (A.status === 73)
                        if (A.gzhead.name) {
                          P = A.pending;
                          do {
                            if (
                              A.pending === A.pending_buf_size &&
                              (A.gzhead.hcrc &&
                                A.pending > P &&
                                (h.adler = t(h.adler, A.pending_buf, A.pending - P, P)),
                              F(h),
                              (P = A.pending),
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
                            A.pending > P &&
                            (h.adler = t(h.adler, A.pending_buf, A.pending - P, P)),
                            N === 0 && ((A.gzindex = 0), (A.status = 91));
                        } else A.status = 91;
                      if (A.status === 91)
                        if (A.gzhead.comment) {
                          P = A.pending;
                          do {
                            if (
                              A.pending === A.pending_buf_size &&
                              (A.gzhead.hcrc &&
                                A.pending > P &&
                                (h.adler = t(h.adler, A.pending_buf, A.pending - P, P)),
                              F(h),
                              (P = A.pending),
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
                            A.pending > P &&
                            (h.adler = t(h.adler, A.pending_buf, A.pending - P, P)),
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
                            ? (function (B, W) {
                                for (var K; ; ) {
                                  if (B.lookahead === 0 && (ie(B), B.lookahead === 0)) {
                                    if (W === m) return u;
                                    break;
                                  }
                                  if (
                                    ((B.match_length = 0),
                                    (K = e._tr_tally(B, 0, B.window[B.strstart])),
                                    B.lookahead--,
                                    B.strstart++,
                                    K && (O(B, !1), B.strm.avail_out === 0))
                                  )
                                    return u;
                                }
                                return (
                                  (B.insert = 0),
                                  W === a
                                    ? (O(B, !0), B.strm.avail_out === 0 ? G : L)
                                    : B.last_lit && (O(B, !1), B.strm.avail_out === 0)
                                    ? u
                                    : z
                                );
                              })(A, M)
                            : A.strategy === 3
                            ? (function (B, W) {
                                for (var K, H, Q, se, ae = B.window; ; ) {
                                  if (B.lookahead <= S) {
                                    if ((ie(B), B.lookahead <= S && W === m)) return u;
                                    if (B.lookahead === 0) break;
                                  }
                                  if (
                                    ((B.match_length = 0),
                                    B.lookahead >= v &&
                                      0 < B.strstart &&
                                      (H = ae[(Q = B.strstart - 1)]) === ae[++Q] &&
                                      H === ae[++Q] &&
                                      H === ae[++Q])
                                  ) {
                                    se = B.strstart + S;
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
                                    (B.match_length = S - (se - Q)),
                                      B.match_length > B.lookahead &&
                                        (B.match_length = B.lookahead);
                                  }
                                  if (
                                    (B.match_length >= v
                                      ? ((K = e._tr_tally(B, 1, B.match_length - v)),
                                        (B.lookahead -= B.match_length),
                                        (B.strstart += B.match_length),
                                        (B.match_length = 0))
                                      : ((K = e._tr_tally(B, 0, B.window[B.strstart])),
                                        B.lookahead--,
                                        B.strstart++),
                                    K && (O(B, !1), B.strm.avail_out === 0))
                                  )
                                    return u;
                                }
                                return (
                                  (B.insert = 0),
                                  W === a
                                    ? (O(B, !0), B.strm.avail_out === 0 ? G : L)
                                    : B.last_lit && (O(B, !1), B.strm.avail_out === 0)
                                    ? u
                                    : z
                                );
                              })(A, M)
                            : k[A.level].func(A, M);
                        if (((U !== G && U !== L) || (A.status = 666), U === u || U === G))
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
                            : (q(A, h.adler >>> 16), q(A, 65535 & h.adler)),
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
                        P,
                        N,
                        j,
                        U,
                        B,
                        W,
                        K = M.length;
                      if (
                        !h ||
                        !h.state ||
                        (N = (I = h.state).wrap) === 2 ||
                        (N === 1 && I.status !== _) ||
                        I.lookahead
                      )
                        return p;
                      for (
                        N === 1 && (h.adler = i(h.adler, M, K, 0)),
                          I.wrap = 0,
                          K >= I.w_size &&
                            (N === 0 &&
                              (te(I.head), (I.strstart = 0), (I.block_start = 0), (I.insert = 0)),
                            (W = new y.Buf8(I.w_size)),
                            y.arraySet(W, M, K - I.w_size, I.w_size, 0),
                            (M = W),
                            (K = I.w_size)),
                          j = h.avail_in,
                          U = h.next_in,
                          B = h.input,
                          h.avail_in = K,
                          h.next_in = 0,
                          h.input = M,
                          ie(I);
                        I.lookahead >= v;

                      ) {
                        for (
                          A = I.strstart, P = I.lookahead - (v - 1);
                          (I.ins_h =
                            ((I.ins_h << I.hash_shift) ^ I.window[A + v - 1]) & I.hash_mask),
                            (I.prev[A & I.w_mask] = I.head[I.ins_h]),
                            (I.head[I.ins_h] = A),
                            A++,
                            --P;

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
                        (h.input = B),
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
                function (w, R, T) {
                  R.exports = function () {
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
                function (w, R, T) {
                  R.exports = function (k, y) {
                    var e, i, t, g, m, a, n, p, o, l, f, b, x, C, s, c, r, d, v, S, D, _, E, u, z;
                    (e = k.state),
                      (i = k.next_in),
                      (u = k.input),
                      (t = i + (k.avail_in - 5)),
                      (g = k.next_out),
                      (z = k.output),
                      (m = g - (y - k.avail_out)),
                      (a = g + (k.avail_out - 257)),
                      (n = e.dmax),
                      (p = e.wsize),
                      (o = e.whave),
                      (l = e.wnext),
                      (f = e.window),
                      (b = e.hold),
                      (x = e.bits),
                      (C = e.lencode),
                      (s = e.distcode),
                      (c = (1 << e.lenbits) - 1),
                      (r = (1 << e.distbits) - 1);
                    e: do {
                      x < 15 && ((b += u[i++] << x), (x += 8), (b += u[i++] << x), (x += 8)),
                        (d = C[b & c]);
                      t: for (;;) {
                        if (((b >>>= v = d >>> 24), (x -= v), (v = (d >>> 16) & 255) === 0))
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
                              (x < v && ((b += u[i++] << x), (x += 8)),
                              (S += b & ((1 << v) - 1)),
                              (b >>>= v),
                              (x -= v)),
                            x < 15 && ((b += u[i++] << x), (x += 8), (b += u[i++] << x), (x += 8)),
                            (d = s[b & r]);
                          r: for (;;) {
                            if (((b >>>= v = d >>> 24), (x -= v), !(16 & (v = (d >>> 16) & 255)))) {
                              if (!(64 & v)) {
                                d = s[(65535 & d) + (b & ((1 << v) - 1))];
                                continue r;
                              }
                              (k.msg = 'invalid distance code'), (e.mode = 30);
                              break e;
                            }
                            if (
                              ((D = 65535 & d),
                              x < (v &= 15) &&
                                ((b += u[i++] << x),
                                (x += 8) < v && ((b += u[i++] << x), (x += 8))),
                              n < (D += b & ((1 << v) - 1)))
                            ) {
                              (k.msg = 'invalid distance too far back'), (e.mode = 30);
                              break e;
                            }
                            if (((b >>>= v), (x -= v), (v = g - m) < D)) {
                              if (o < (v = D - v) && e.sane) {
                                (k.msg = 'invalid distance too far back'), (e.mode = 30);
                                break e;
                              }
                              if (((E = f), (_ = 0) === l)) {
                                if (((_ += p - v), v < S)) {
                                  for (S -= v; (z[g++] = f[_++]), --v; );
                                  (_ = g - D), (E = z);
                                }
                              } else if (l < v) {
                                if (((_ += p + l - v), (v -= l) < S)) {
                                  for (S -= v; (z[g++] = f[_++]), --v; );
                                  if (((_ = 0), l < S)) {
                                    for (S -= v = l; (z[g++] = f[_++]), --v; );
                                    (_ = g - D), (E = z);
                                  }
                                }
                              } else if (((_ += l - v), v < S)) {
                                for (S -= v; (z[g++] = f[_++]), --v; );
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
                    } while (i < t && g < a);
                    (i -= S = x >> 3),
                      (b &= (1 << (x -= S << 3)) - 1),
                      (k.next_in = i),
                      (k.next_out = g),
                      (k.avail_in = i < t ? t - i + 5 : 5 - (i - t)),
                      (k.avail_out = g < a ? a - g + 257 : 257 - (g - a)),
                      (e.hold = b),
                      (e.bits = x);
                  };
                },
                {},
              ],
              49: [
                function (w, R, T) {
                  var k = w('../utils/common'),
                    y = w('./adler32'),
                    e = w('./crc32'),
                    i = w('./inffast'),
                    t = w('./inftrees'),
                    g = 1,
                    m = 2,
                    a = 0,
                    n = -2,
                    p = 1,
                    o = 852,
                    l = 592;
                  function f(_) {
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
                  function x(_) {
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
                        (E.lencode = E.lendyn = new k.Buf32(o)),
                        (E.distcode = E.distdyn = new k.Buf32(l)),
                        (E.sane = 1),
                        (E.back = -1),
                        a)
                      : n;
                  }
                  function C(_) {
                    var E;
                    return _ && _.state
                      ? (((E = _.state).wsize = 0), (E.whave = 0), (E.wnext = 0), x(_))
                      : n;
                  }
                  function s(_, E) {
                    var u, z;
                    return _ && _.state
                      ? ((z = _.state),
                        E < 0 ? ((u = 0), (E = -E)) : ((u = 1 + (E >> 4)), E < 48 && (E &= 15)),
                        E && (E < 8 || 15 < E)
                          ? n
                          : (z.window !== null && z.wbits !== E && (z.window = null),
                            (z.wrap = u),
                            (z.wbits = E),
                            C(_)))
                      : n;
                  }
                  function c(_, E) {
                    var u, z;
                    return _
                      ? ((z = new b()),
                        ((_.state = z).window = null),
                        (u = s(_, E)) !== a && (_.state = null),
                        u)
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
                  function D(_, E, u, z) {
                    var G,
                      L = _.state;
                    return (
                      L.window === null &&
                        ((L.wsize = 1 << L.wbits),
                        (L.wnext = 0),
                        (L.whave = 0),
                        (L.window = new k.Buf8(L.wsize))),
                      z >= L.wsize
                        ? (k.arraySet(L.window, E, u - L.wsize, L.wsize, 0),
                          (L.wnext = 0),
                          (L.whave = L.wsize))
                        : (z < (G = L.wsize - L.wnext) && (G = z),
                          k.arraySet(L.window, E, u - z, G, L.wnext),
                          (z -= G)
                            ? (k.arraySet(L.window, E, u - z, z, 0),
                              (L.wnext = z),
                              (L.whave = L.wsize))
                            : ((L.wnext += G),
                              L.wnext === L.wsize && (L.wnext = 0),
                              L.whave < L.wsize && (L.whave += G))),
                      0
                    );
                  }
                  (T.inflateReset = C),
                    (T.inflateReset2 = s),
                    (T.inflateResetKeep = x),
                    (T.inflateInit = function (_) {
                      return c(_, 15);
                    }),
                    (T.inflateInit2 = c),
                    (T.inflate = function (_, E) {
                      var u,
                        z,
                        G,
                        L,
                        J,
                        $,
                        te,
                        F,
                        O,
                        ee,
                        q,
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
                        P = 0,
                        N = new k.Buf8(4),
                        j = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
                      if (!_ || !_.state || !_.output || (!_.input && _.avail_in !== 0)) return n;
                      (u = _.state).mode === 12 && (u.mode = 13),
                        (J = _.next_out),
                        (G = _.output),
                        (te = _.avail_out),
                        (L = _.next_in),
                        (z = _.input),
                        ($ = _.avail_in),
                        (F = u.hold),
                        (O = u.bits),
                        (ee = $),
                        (q = te),
                        (M = a);
                      e: for (;;)
                        switch (u.mode) {
                          case p:
                            if (u.wrap === 0) {
                              u.mode = 13;
                              break;
                            }
                            for (; O < 16; ) {
                              if ($ === 0) break e;
                              $--, (F += z[L++] << O), (O += 8);
                            }
                            if (2 & u.wrap && F === 35615) {
                              (N[(u.check = 0)] = 255 & F),
                                (N[1] = (F >>> 8) & 255),
                                (u.check = e(u.check, N, 2, 0)),
                                (O = F = 0),
                                (u.mode = 2);
                              break;
                            }
                            if (
                              ((u.flags = 0),
                              u.head && (u.head.done = !1),
                              !(1 & u.wrap) || (((255 & F) << 8) + (F >> 8)) % 31)
                            ) {
                              (_.msg = 'incorrect header check'), (u.mode = 30);
                              break;
                            }
                            if ((15 & F) != 8) {
                              (_.msg = 'unknown compression method'), (u.mode = 30);
                              break;
                            }
                            if (((O -= 4), (h = 8 + (15 & (F >>>= 4))), u.wbits === 0)) u.wbits = h;
                            else if (h > u.wbits) {
                              (_.msg = 'invalid window size'), (u.mode = 30);
                              break;
                            }
                            (u.dmax = 1 << h),
                              (_.adler = u.check = 1),
                              (u.mode = 512 & F ? 10 : 12),
                              (O = F = 0);
                            break;
                          case 2:
                            for (; O < 16; ) {
                              if ($ === 0) break e;
                              $--, (F += z[L++] << O), (O += 8);
                            }
                            if (((u.flags = F), (255 & u.flags) != 8)) {
                              (_.msg = 'unknown compression method'), (u.mode = 30);
                              break;
                            }
                            if (57344 & u.flags) {
                              (_.msg = 'unknown header flags set'), (u.mode = 30);
                              break;
                            }
                            u.head && (u.head.text = (F >> 8) & 1),
                              512 & u.flags &&
                                ((N[0] = 255 & F),
                                (N[1] = (F >>> 8) & 255),
                                (u.check = e(u.check, N, 2, 0))),
                              (O = F = 0),
                              (u.mode = 3);
                          case 3:
                            for (; O < 32; ) {
                              if ($ === 0) break e;
                              $--, (F += z[L++] << O), (O += 8);
                            }
                            u.head && (u.head.time = F),
                              512 & u.flags &&
                                ((N[0] = 255 & F),
                                (N[1] = (F >>> 8) & 255),
                                (N[2] = (F >>> 16) & 255),
                                (N[3] = (F >>> 24) & 255),
                                (u.check = e(u.check, N, 4, 0))),
                              (O = F = 0),
                              (u.mode = 4);
                          case 4:
                            for (; O < 16; ) {
                              if ($ === 0) break e;
                              $--, (F += z[L++] << O), (O += 8);
                            }
                            u.head && ((u.head.xflags = 255 & F), (u.head.os = F >> 8)),
                              512 & u.flags &&
                                ((N[0] = 255 & F),
                                (N[1] = (F >>> 8) & 255),
                                (u.check = e(u.check, N, 2, 0))),
                              (O = F = 0),
                              (u.mode = 5);
                          case 5:
                            if (1024 & u.flags) {
                              for (; O < 16; ) {
                                if ($ === 0) break e;
                                $--, (F += z[L++] << O), (O += 8);
                              }
                              (u.length = F),
                                u.head && (u.head.extra_len = F),
                                512 & u.flags &&
                                  ((N[0] = 255 & F),
                                  (N[1] = (F >>> 8) & 255),
                                  (u.check = e(u.check, N, 2, 0))),
                                (O = F = 0);
                            } else u.head && (u.head.extra = null);
                            u.mode = 6;
                          case 6:
                            if (
                              1024 & u.flags &&
                              ($ < (Z = u.length) && (Z = $),
                              Z &&
                                (u.head &&
                                  ((h = u.head.extra_len - u.length),
                                  u.head.extra || (u.head.extra = new Array(u.head.extra_len)),
                                  k.arraySet(u.head.extra, z, L, Z, h)),
                                512 & u.flags && (u.check = e(u.check, z, Z, L)),
                                ($ -= Z),
                                (L += Z),
                                (u.length -= Z)),
                              u.length)
                            )
                              break e;
                            (u.length = 0), (u.mode = 7);
                          case 7:
                            if (2048 & u.flags) {
                              if ($ === 0) break e;
                              for (
                                Z = 0;
                                (h = z[L + Z++]),
                                  u.head &&
                                    h &&
                                    u.length < 65536 &&
                                    (u.head.name += String.fromCharCode(h)),
                                  h && Z < $;

                              );
                              if (
                                (512 & u.flags && (u.check = e(u.check, z, Z, L)),
                                ($ -= Z),
                                (L += Z),
                                h)
                              )
                                break e;
                            } else u.head && (u.head.name = null);
                            (u.length = 0), (u.mode = 8);
                          case 8:
                            if (4096 & u.flags) {
                              if ($ === 0) break e;
                              for (
                                Z = 0;
                                (h = z[L + Z++]),
                                  u.head &&
                                    h &&
                                    u.length < 65536 &&
                                    (u.head.comment += String.fromCharCode(h)),
                                  h && Z < $;

                              );
                              if (
                                (512 & u.flags && (u.check = e(u.check, z, Z, L)),
                                ($ -= Z),
                                (L += Z),
                                h)
                              )
                                break e;
                            } else u.head && (u.head.comment = null);
                            u.mode = 9;
                          case 9:
                            if (512 & u.flags) {
                              for (; O < 16; ) {
                                if ($ === 0) break e;
                                $--, (F += z[L++] << O), (O += 8);
                              }
                              if (F !== (65535 & u.check)) {
                                (_.msg = 'header crc mismatch'), (u.mode = 30);
                                break;
                              }
                              O = F = 0;
                            }
                            u.head && ((u.head.hcrc = (u.flags >> 9) & 1), (u.head.done = !0)),
                              (_.adler = u.check = 0),
                              (u.mode = 12);
                            break;
                          case 10:
                            for (; O < 32; ) {
                              if ($ === 0) break e;
                              $--, (F += z[L++] << O), (O += 8);
                            }
                            (_.adler = u.check = f(F)), (O = F = 0), (u.mode = 11);
                          case 11:
                            if (u.havedict === 0)
                              return (
                                (_.next_out = J),
                                (_.avail_out = te),
                                (_.next_in = L),
                                (_.avail_in = $),
                                (u.hold = F),
                                (u.bits = O),
                                2
                              );
                            (_.adler = u.check = 1), (u.mode = 12);
                          case 12:
                            if (E === 5 || E === 6) break e;
                          case 13:
                            if (u.last) {
                              (F >>>= 7 & O), (O -= 7 & O), (u.mode = 27);
                              break;
                            }
                            for (; O < 3; ) {
                              if ($ === 0) break e;
                              $--, (F += z[L++] << O), (O += 8);
                            }
                            switch (((u.last = 1 & F), (O -= 1), 3 & (F >>>= 1))) {
                              case 0:
                                u.mode = 14;
                                break;
                              case 1:
                                if ((S(u), (u.mode = 20), E !== 6)) break;
                                (F >>>= 2), (O -= 2);
                                break e;
                              case 2:
                                u.mode = 17;
                                break;
                              case 3:
                                (_.msg = 'invalid block type'), (u.mode = 30);
                            }
                            (F >>>= 2), (O -= 2);
                            break;
                          case 14:
                            for (F >>>= 7 & O, O -= 7 & O; O < 32; ) {
                              if ($ === 0) break e;
                              $--, (F += z[L++] << O), (O += 8);
                            }
                            if ((65535 & F) != ((F >>> 16) ^ 65535)) {
                              (_.msg = 'invalid stored block lengths'), (u.mode = 30);
                              break;
                            }
                            if (((u.length = 65535 & F), (O = F = 0), (u.mode = 15), E === 6))
                              break e;
                          case 15:
                            u.mode = 16;
                          case 16:
                            if ((Z = u.length)) {
                              if (($ < Z && (Z = $), te < Z && (Z = te), Z === 0)) break e;
                              k.arraySet(G, z, L, Z, J),
                                ($ -= Z),
                                (L += Z),
                                (te -= Z),
                                (J += Z),
                                (u.length -= Z);
                              break;
                            }
                            u.mode = 12;
                            break;
                          case 17:
                            for (; O < 14; ) {
                              if ($ === 0) break e;
                              $--, (F += z[L++] << O), (O += 8);
                            }
                            if (
                              ((u.nlen = 257 + (31 & F)),
                              (F >>>= 5),
                              (O -= 5),
                              (u.ndist = 1 + (31 & F)),
                              (F >>>= 5),
                              (O -= 5),
                              (u.ncode = 4 + (15 & F)),
                              (F >>>= 4),
                              (O -= 4),
                              286 < u.nlen || 30 < u.ndist)
                            ) {
                              (_.msg = 'too many length or distance symbols'), (u.mode = 30);
                              break;
                            }
                            (u.have = 0), (u.mode = 18);
                          case 18:
                            for (; u.have < u.ncode; ) {
                              for (; O < 3; ) {
                                if ($ === 0) break e;
                                $--, (F += z[L++] << O), (O += 8);
                              }
                              (u.lens[j[u.have++]] = 7 & F), (F >>>= 3), (O -= 3);
                            }
                            for (; u.have < 19; ) u.lens[j[u.have++]] = 0;
                            if (
                              ((u.lencode = u.lendyn),
                              (u.lenbits = 7),
                              (I = { bits: u.lenbits }),
                              (M = t(0, u.lens, 0, 19, u.lencode, 0, u.work, I)),
                              (u.lenbits = I.bits),
                              M)
                            ) {
                              (_.msg = 'invalid code lengths set'), (u.mode = 30);
                              break;
                            }
                            (u.have = 0), (u.mode = 19);
                          case 19:
                            for (; u.have < u.nlen + u.ndist; ) {
                              for (
                                ;
                                (ne = ((P = u.lencode[F & ((1 << u.lenbits) - 1)]) >>> 16) & 255),
                                  (fe = 65535 & P),
                                  !((re = P >>> 24) <= O);

                              ) {
                                if ($ === 0) break e;
                                $--, (F += z[L++] << O), (O += 8);
                              }
                              if (fe < 16) (F >>>= re), (O -= re), (u.lens[u.have++] = fe);
                              else {
                                if (fe === 16) {
                                  for (A = re + 2; O < A; ) {
                                    if ($ === 0) break e;
                                    $--, (F += z[L++] << O), (O += 8);
                                  }
                                  if (((F >>>= re), (O -= re), u.have === 0)) {
                                    (_.msg = 'invalid bit length repeat'), (u.mode = 30);
                                    break;
                                  }
                                  (h = u.lens[u.have - 1]), (Z = 3 + (3 & F)), (F >>>= 2), (O -= 2);
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
                                if (u.have + Z > u.nlen + u.ndist) {
                                  (_.msg = 'invalid bit length repeat'), (u.mode = 30);
                                  break;
                                }
                                for (; Z--; ) u.lens[u.have++] = h;
                              }
                            }
                            if (u.mode === 30) break;
                            if (u.lens[256] === 0) {
                              (_.msg = 'invalid code -- missing end-of-block'), (u.mode = 30);
                              break;
                            }
                            if (
                              ((u.lenbits = 9),
                              (I = { bits: u.lenbits }),
                              (M = t(g, u.lens, 0, u.nlen, u.lencode, 0, u.work, I)),
                              (u.lenbits = I.bits),
                              M)
                            ) {
                              (_.msg = 'invalid literal/lengths set'), (u.mode = 30);
                              break;
                            }
                            if (
                              ((u.distbits = 6),
                              (u.distcode = u.distdyn),
                              (I = { bits: u.distbits }),
                              (M = t(m, u.lens, u.nlen, u.ndist, u.distcode, 0, u.work, I)),
                              (u.distbits = I.bits),
                              M)
                            ) {
                              (_.msg = 'invalid distances set'), (u.mode = 30);
                              break;
                            }
                            if (((u.mode = 20), E === 6)) break e;
                          case 20:
                            u.mode = 21;
                          case 21:
                            if (6 <= $ && 258 <= te) {
                              (_.next_out = J),
                                (_.avail_out = te),
                                (_.next_in = L),
                                (_.avail_in = $),
                                (u.hold = F),
                                (u.bits = O),
                                i(_, q),
                                (J = _.next_out),
                                (G = _.output),
                                (te = _.avail_out),
                                (L = _.next_in),
                                (z = _.input),
                                ($ = _.avail_in),
                                (F = u.hold),
                                (O = u.bits),
                                u.mode === 12 && (u.back = -1);
                              break;
                            }
                            for (
                              u.back = 0;
                              (ne = ((P = u.lencode[F & ((1 << u.lenbits) - 1)]) >>> 16) & 255),
                                (fe = 65535 & P),
                                !((re = P >>> 24) <= O);

                            ) {
                              if ($ === 0) break e;
                              $--, (F += z[L++] << O), (O += 8);
                            }
                            if (ne && !(240 & ne)) {
                              for (
                                oe = re, Se = ne, we = fe;
                                (ne =
                                  ((P = u.lencode[we + ((F & ((1 << (oe + Se)) - 1)) >> oe)]) >>>
                                    16) &
                                  255),
                                  (fe = 65535 & P),
                                  !(oe + (re = P >>> 24) <= O);

                              ) {
                                if ($ === 0) break e;
                                $--, (F += z[L++] << O), (O += 8);
                              }
                              (F >>>= oe), (O -= oe), (u.back += oe);
                            }
                            if (
                              ((F >>>= re), (O -= re), (u.back += re), (u.length = fe), ne === 0)
                            ) {
                              u.mode = 26;
                              break;
                            }
                            if (32 & ne) {
                              (u.back = -1), (u.mode = 12);
                              break;
                            }
                            if (64 & ne) {
                              (_.msg = 'invalid literal/length code'), (u.mode = 30);
                              break;
                            }
                            (u.extra = 15 & ne), (u.mode = 22);
                          case 22:
                            if (u.extra) {
                              for (A = u.extra; O < A; ) {
                                if ($ === 0) break e;
                                $--, (F += z[L++] << O), (O += 8);
                              }
                              (u.length += F & ((1 << u.extra) - 1)),
                                (F >>>= u.extra),
                                (O -= u.extra),
                                (u.back += u.extra);
                            }
                            (u.was = u.length), (u.mode = 23);
                          case 23:
                            for (
                              ;
                              (ne = ((P = u.distcode[F & ((1 << u.distbits) - 1)]) >>> 16) & 255),
                                (fe = 65535 & P),
                                !((re = P >>> 24) <= O);

                            ) {
                              if ($ === 0) break e;
                              $--, (F += z[L++] << O), (O += 8);
                            }
                            if (!(240 & ne)) {
                              for (
                                oe = re, Se = ne, we = fe;
                                (ne =
                                  ((P = u.distcode[we + ((F & ((1 << (oe + Se)) - 1)) >> oe)]) >>>
                                    16) &
                                  255),
                                  (fe = 65535 & P),
                                  !(oe + (re = P >>> 24) <= O);

                              ) {
                                if ($ === 0) break e;
                                $--, (F += z[L++] << O), (O += 8);
                              }
                              (F >>>= oe), (O -= oe), (u.back += oe);
                            }
                            if (((F >>>= re), (O -= re), (u.back += re), 64 & ne)) {
                              (_.msg = 'invalid distance code'), (u.mode = 30);
                              break;
                            }
                            (u.offset = fe), (u.extra = 15 & ne), (u.mode = 24);
                          case 24:
                            if (u.extra) {
                              for (A = u.extra; O < A; ) {
                                if ($ === 0) break e;
                                $--, (F += z[L++] << O), (O += 8);
                              }
                              (u.offset += F & ((1 << u.extra) - 1)),
                                (F >>>= u.extra),
                                (O -= u.extra),
                                (u.back += u.extra);
                            }
                            if (u.offset > u.dmax) {
                              (_.msg = 'invalid distance too far back'), (u.mode = 30);
                              break;
                            }
                            u.mode = 25;
                          case 25:
                            if (te === 0) break e;
                            if (((Z = q - te), u.offset > Z)) {
                              if ((Z = u.offset - Z) > u.whave && u.sane) {
                                (_.msg = 'invalid distance too far back'), (u.mode = 30);
                                break;
                              }
                              (ie = Z > u.wnext ? ((Z -= u.wnext), u.wsize - Z) : u.wnext - Z),
                                Z > u.length && (Z = u.length),
                                (pe = u.window);
                            } else (pe = G), (ie = J - u.offset), (Z = u.length);
                            for (
                              te < Z && (Z = te), te -= Z, u.length -= Z;
                              (G[J++] = pe[ie++]), --Z;

                            );
                            u.length === 0 && (u.mode = 21);
                            break;
                          case 26:
                            if (te === 0) break e;
                            (G[J++] = u.length), te--, (u.mode = 21);
                            break;
                          case 27:
                            if (u.wrap) {
                              for (; O < 32; ) {
                                if ($ === 0) break e;
                                $--, (F |= z[L++] << O), (O += 8);
                              }
                              if (
                                ((q -= te),
                                (_.total_out += q),
                                (u.total += q),
                                q &&
                                  (_.adler = u.check =
                                    u.flags ? e(u.check, G, q, J - q) : y(u.check, G, q, J - q)),
                                (q = te),
                                (u.flags ? F : f(F)) !== u.check)
                              ) {
                                (_.msg = 'incorrect data check'), (u.mode = 30);
                                break;
                              }
                              O = F = 0;
                            }
                            u.mode = 28;
                          case 28:
                            if (u.wrap && u.flags) {
                              for (; O < 32; ) {
                                if ($ === 0) break e;
                                $--, (F += z[L++] << O), (O += 8);
                              }
                              if (F !== (4294967295 & u.total)) {
                                (_.msg = 'incorrect length check'), (u.mode = 30);
                                break;
                              }
                              O = F = 0;
                            }
                            u.mode = 29;
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
                        (u.hold = F),
                        (u.bits = O),
                        (u.wsize ||
                          (q !== _.avail_out && u.mode < 30 && (u.mode < 27 || E !== 4))) &&
                        D(_, _.output, _.next_out, q - _.avail_out)
                          ? ((u.mode = 31), -4)
                          : ((ee -= _.avail_in),
                            (q -= _.avail_out),
                            (_.total_in += ee),
                            (_.total_out += q),
                            (u.total += q),
                            u.wrap &&
                              q &&
                              (_.adler = u.check =
                                u.flags
                                  ? e(u.check, G, q, _.next_out - q)
                                  : y(u.check, G, q, _.next_out - q)),
                            (_.data_type =
                              u.bits +
                              (u.last ? 64 : 0) +
                              (u.mode === 12 ? 128 : 0) +
                              (u.mode === 20 || u.mode === 15 ? 256 : 0)),
                            ((ee == 0 && q === 0) || E === 4) && M === a && (M = -5),
                            M)
                      );
                    }),
                    (T.inflateEnd = function (_) {
                      if (!_ || !_.state) return n;
                      var E = _.state;
                      return E.window && (E.window = null), (_.state = null), a;
                    }),
                    (T.inflateGetHeader = function (_, E) {
                      var u;
                      return _ && _.state && 2 & (u = _.state).wrap
                        ? (((u.head = E).done = !1), a)
                        : n;
                    }),
                    (T.inflateSetDictionary = function (_, E) {
                      var u,
                        z = E.length;
                      return _ && _.state
                        ? (u = _.state).wrap !== 0 && u.mode !== 11
                          ? n
                          : u.mode === 11 && y(1, E, z, 0) !== u.check
                          ? -3
                          : D(_, E, z, z)
                          ? ((u.mode = 31), -4)
                          : ((u.havedict = 1), a)
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
                function (w, R, T) {
                  var k = w('../utils/common'),
                    y = [
                      3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67,
                      83, 99, 115, 131, 163, 195, 227, 258, 0, 0,
                    ],
                    e = [
                      16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19,
                      19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78,
                    ],
                    i = [
                      1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769,
                      1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0,
                    ],
                    t = [
                      16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24,
                      24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64,
                    ];
                  R.exports = function (g, m, a, n, p, o, l, f) {
                    var b,
                      x,
                      C,
                      s,
                      c,
                      r,
                      d,
                      v,
                      S,
                      D = f.bits,
                      _ = 0,
                      E = 0,
                      u = 0,
                      z = 0,
                      G = 0,
                      L = 0,
                      J = 0,
                      $ = 0,
                      te = 0,
                      F = 0,
                      O = null,
                      ee = 0,
                      q = new k.Buf16(16),
                      Z = new k.Buf16(16),
                      ie = null,
                      pe = 0;
                    for (_ = 0; _ <= 15; _++) q[_] = 0;
                    for (E = 0; E < n; E++) q[m[a + E]]++;
                    for (G = D, z = 15; 1 <= z && q[z] === 0; z--);
                    if ((z < G && (G = z), z === 0))
                      return (p[o++] = 20971520), (p[o++] = 20971520), (f.bits = 1), 0;
                    for (u = 1; u < z && q[u] === 0; u++);
                    for (G < u && (G = u), _ = $ = 1; _ <= 15; _++)
                      if ((($ <<= 1), ($ -= q[_]) < 0)) return -1;
                    if (0 < $ && (g === 0 || z !== 1)) return -1;
                    for (Z[1] = 0, _ = 1; _ < 15; _++) Z[_ + 1] = Z[_] + q[_];
                    for (E = 0; E < n; E++) m[a + E] !== 0 && (l[Z[m[a + E]]++] = E);
                    if (
                      ((r =
                        g === 0
                          ? ((O = ie = l), 19)
                          : g === 1
                          ? ((O = y), (ee -= 257), (ie = e), (pe -= 257), 256)
                          : ((O = i), (ie = t), -1)),
                      (_ = u),
                      (c = o),
                      (J = E = F = 0),
                      (C = -1),
                      (s = (te = 1 << (L = G)) - 1),
                      (g === 1 && 852 < te) || (g === 2 && 592 < te))
                    )
                      return 1;
                    for (;;) {
                      for (
                        d = _ - J,
                          S =
                            l[E] < r
                              ? ((v = 0), l[E])
                              : l[E] > r
                              ? ((v = ie[pe + l[E]]), O[ee + l[E]])
                              : ((v = 96), 0),
                          b = 1 << (_ - J),
                          u = x = 1 << L;
                        (p[c + (F >> J) + (x -= b)] = (d << 24) | (v << 16) | S | 0), x !== 0;

                      );
                      for (b = 1 << (_ - 1); F & b; ) b >>= 1;
                      if ((b !== 0 ? ((F &= b - 1), (F += b)) : (F = 0), E++, --q[_] == 0)) {
                        if (_ === z) break;
                        _ = m[a + l[E]];
                      }
                      if (G < _ && (F & s) !== C) {
                        for (
                          J === 0 && (J = G), c += u, $ = 1 << (L = _ - J);
                          L + J < z && !(($ -= q[L + J]) <= 0);

                        )
                          L++, ($ <<= 1);
                        if (((te += 1 << L), (g === 1 && 852 < te) || (g === 2 && 592 < te)))
                          return 1;
                        p[(C = F & s)] = (G << 24) | (L << 16) | (c - o) | 0;
                      }
                    }
                    return (
                      F !== 0 && (p[c + F] = ((_ - J) << 24) | (64 << 16) | 0), (f.bits = G), 0
                    );
                  };
                },
                { '../utils/common': 41 },
              ],
              51: [
                function (w, R, T) {
                  R.exports = {
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
                function (w, R, T) {
                  var k = w('../utils/common'),
                    y = 0,
                    e = 1;
                  function i(P) {
                    for (var N = P.length; 0 <= --N; ) P[N] = 0;
                  }
                  var t = 0,
                    g = 29,
                    m = 256,
                    a = m + 1 + g,
                    n = 30,
                    p = 19,
                    o = 2 * a + 1,
                    l = 15,
                    f = 16,
                    b = 7,
                    x = 256,
                    C = 16,
                    s = 17,
                    c = 18,
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
                  i(D);
                  var _ = new Array(2 * n);
                  i(_);
                  var E = new Array(512);
                  i(E);
                  var u = new Array(256);
                  i(u);
                  var z = new Array(g);
                  i(z);
                  var G,
                    L,
                    J,
                    $ = new Array(n);
                  function te(P, N, j, U, B) {
                    (this.static_tree = P),
                      (this.extra_bits = N),
                      (this.extra_base = j),
                      (this.elems = U),
                      (this.max_length = B),
                      (this.has_stree = P && P.length);
                  }
                  function F(P, N) {
                    (this.dyn_tree = P), (this.max_code = 0), (this.stat_desc = N);
                  }
                  function O(P) {
                    return P < 256 ? E[P] : E[256 + (P >>> 7)];
                  }
                  function ee(P, N) {
                    (P.pending_buf[P.pending++] = 255 & N),
                      (P.pending_buf[P.pending++] = (N >>> 8) & 255);
                  }
                  function q(P, N, j) {
                    P.bi_valid > f - j
                      ? ((P.bi_buf |= (N << P.bi_valid) & 65535),
                        ee(P, P.bi_buf),
                        (P.bi_buf = N >> (f - P.bi_valid)),
                        (P.bi_valid += j - f))
                      : ((P.bi_buf |= (N << P.bi_valid) & 65535), (P.bi_valid += j));
                  }
                  function Z(P, N, j) {
                    q(P, j[2 * N], j[2 * N + 1]);
                  }
                  function ie(P, N) {
                    for (var j = 0; (j |= 1 & P), (P >>>= 1), (j <<= 1), 0 < --N; );
                    return j >>> 1;
                  }
                  function pe(P, N, j) {
                    var U,
                      B,
                      W = new Array(l + 1),
                      K = 0;
                    for (U = 1; U <= l; U++) W[U] = K = (K + j[U - 1]) << 1;
                    for (B = 0; B <= N; B++) {
                      var H = P[2 * B + 1];
                      H !== 0 && (P[2 * B] = ie(W[H]++, H));
                    }
                  }
                  function re(P) {
                    var N;
                    for (N = 0; N < a; N++) P.dyn_ltree[2 * N] = 0;
                    for (N = 0; N < n; N++) P.dyn_dtree[2 * N] = 0;
                    for (N = 0; N < p; N++) P.bl_tree[2 * N] = 0;
                    (P.dyn_ltree[2 * x] = 1),
                      (P.opt_len = P.static_len = 0),
                      (P.last_lit = P.matches = 0);
                  }
                  function ne(P) {
                    8 < P.bi_valid
                      ? ee(P, P.bi_buf)
                      : 0 < P.bi_valid && (P.pending_buf[P.pending++] = P.bi_buf),
                      (P.bi_buf = 0),
                      (P.bi_valid = 0);
                  }
                  function fe(P, N, j, U) {
                    var B = 2 * N,
                      W = 2 * j;
                    return P[B] < P[W] || (P[B] === P[W] && U[N] <= U[j]);
                  }
                  function oe(P, N, j) {
                    for (
                      var U = P.heap[j], B = j << 1;
                      B <= P.heap_len &&
                      (B < P.heap_len && fe(N, P.heap[B + 1], P.heap[B], P.depth) && B++,
                      !fe(N, U, P.heap[B], P.depth));

                    )
                      (P.heap[j] = P.heap[B]), (j = B), (B <<= 1);
                    P.heap[j] = U;
                  }
                  function Se(P, N, j) {
                    var U,
                      B,
                      W,
                      K,
                      H = 0;
                    if (P.last_lit !== 0)
                      for (
                        ;
                        (U =
                          (P.pending_buf[P.d_buf + 2 * H] << 8) |
                          P.pending_buf[P.d_buf + 2 * H + 1]),
                          (B = P.pending_buf[P.l_buf + H]),
                          H++,
                          U === 0
                            ? Z(P, B, N)
                            : (Z(P, (W = u[B]) + m + 1, N),
                              (K = r[W]) !== 0 && q(P, (B -= z[W]), K),
                              Z(P, (W = O(--U)), j),
                              (K = d[W]) !== 0 && q(P, (U -= $[W]), K)),
                          H < P.last_lit;

                      );
                    Z(P, x, N);
                  }
                  function we(P, N) {
                    var j,
                      U,
                      B,
                      W = N.dyn_tree,
                      K = N.stat_desc.static_tree,
                      H = N.stat_desc.has_stree,
                      Q = N.stat_desc.elems,
                      se = -1;
                    for (P.heap_len = 0, P.heap_max = o, j = 0; j < Q; j++)
                      W[2 * j] !== 0
                        ? ((P.heap[++P.heap_len] = se = j), (P.depth[j] = 0))
                        : (W[2 * j + 1] = 0);
                    for (; P.heap_len < 2; )
                      (W[2 * (B = P.heap[++P.heap_len] = se < 2 ? ++se : 0)] = 1),
                        (P.depth[B] = 0),
                        P.opt_len--,
                        H && (P.static_len -= K[2 * B + 1]);
                    for (N.max_code = se, j = P.heap_len >> 1; 1 <= j; j--) oe(P, W, j);
                    for (
                      B = Q;
                      (j = P.heap[1]),
                        (P.heap[1] = P.heap[P.heap_len--]),
                        oe(P, W, 1),
                        (U = P.heap[1]),
                        (P.heap[--P.heap_max] = j),
                        (P.heap[--P.heap_max] = U),
                        (W[2 * B] = W[2 * j] + W[2 * U]),
                        (P.depth[B] = (P.depth[j] >= P.depth[U] ? P.depth[j] : P.depth[U]) + 1),
                        (W[2 * j + 1] = W[2 * U + 1] = B),
                        (P.heap[1] = B++),
                        oe(P, W, 1),
                        2 <= P.heap_len;

                    );
                    (P.heap[--P.heap_max] = P.heap[1]),
                      (function (ae, _e) {
                        var Be,
                          Pe,
                          Re,
                          le,
                          Me,
                          Ze,
                          Ae = _e.dyn_tree,
                          Je = _e.max_code,
                          wt = _e.stat_desc.static_tree,
                          St = _e.stat_desc.has_stree,
                          Pt = _e.stat_desc.extra_bits,
                          Qe = _e.stat_desc.extra_base,
                          Oe = _e.stat_desc.max_length,
                          Le = 0;
                        for (le = 0; le <= l; le++) ae.bl_count[le] = 0;
                        for (
                          Ae[2 * ae.heap[ae.heap_max] + 1] = 0, Be = ae.heap_max + 1;
                          Be < o;
                          Be++
                        )
                          Oe < (le = Ae[2 * Ae[2 * (Pe = ae.heap[Be]) + 1] + 1] + 1) &&
                            ((le = Oe), Le++),
                            (Ae[2 * Pe + 1] = le),
                            Je < Pe ||
                              (ae.bl_count[le]++,
                              (Me = 0),
                              Qe <= Pe && (Me = Pt[Pe - Qe]),
                              (Ze = Ae[2 * Pe]),
                              (ae.opt_len += Ze * (le + Me)),
                              St && (ae.static_len += Ze * (wt[2 * Pe + 1] + Me)));
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
                      })(P, N),
                      pe(W, se, P.bl_count);
                  }
                  function h(P, N, j) {
                    var U,
                      B,
                      W = -1,
                      K = N[1],
                      H = 0,
                      Q = 7,
                      se = 4;
                    for (
                      K === 0 && ((Q = 138), (se = 3)), N[2 * (j + 1) + 1] = 65535, U = 0;
                      U <= j;
                      U++
                    )
                      (B = K),
                        (K = N[2 * (U + 1) + 1]),
                        (++H < Q && B === K) ||
                          (H < se
                            ? (P.bl_tree[2 * B] += H)
                            : B !== 0
                            ? (B !== W && P.bl_tree[2 * B]++, P.bl_tree[2 * C]++)
                            : H <= 10
                            ? P.bl_tree[2 * s]++
                            : P.bl_tree[2 * c]++,
                          (W = B),
                          (se =
                            (H = 0) === K
                              ? ((Q = 138), 3)
                              : B === K
                              ? ((Q = 6), 3)
                              : ((Q = 7), 4)));
                  }
                  function M(P, N, j) {
                    var U,
                      B,
                      W = -1,
                      K = N[1],
                      H = 0,
                      Q = 7,
                      se = 4;
                    for (K === 0 && ((Q = 138), (se = 3)), U = 0; U <= j; U++)
                      if (((B = K), (K = N[2 * (U + 1) + 1]), !(++H < Q && B === K))) {
                        if (H < se) for (; Z(P, B, P.bl_tree), --H != 0; );
                        else
                          B !== 0
                            ? (B !== W && (Z(P, B, P.bl_tree), H--),
                              Z(P, C, P.bl_tree),
                              q(P, H - 3, 2))
                            : H <= 10
                            ? (Z(P, s, P.bl_tree), q(P, H - 3, 3))
                            : (Z(P, c, P.bl_tree), q(P, H - 11, 7));
                        (W = B),
                          (se =
                            (H = 0) === K ? ((Q = 138), 3) : B === K ? ((Q = 6), 3) : ((Q = 7), 4));
                      }
                  }
                  i($);
                  var I = !1;
                  function A(P, N, j, U) {
                    q(P, (t << 1) + (U ? 1 : 0), 3),
                      (function (B, W, K, H) {
                        ne(B),
                          H && (ee(B, K), ee(B, ~K)),
                          k.arraySet(B.pending_buf, B.window, W, K, B.pending),
                          (B.pending += K);
                      })(P, N, j, !0);
                  }
                  (T._tr_init = function (P) {
                    I ||
                      ((function () {
                        var N,
                          j,
                          U,
                          B,
                          W,
                          K = new Array(l + 1);
                        for (B = U = 0; B < g - 1; B++)
                          for (z[B] = U, N = 0; N < 1 << r[B]; N++) u[U++] = B;
                        for (u[U - 1] = B, B = W = 0; B < 16; B++)
                          for ($[B] = W, N = 0; N < 1 << d[B]; N++) E[W++] = B;
                        for (W >>= 7; B < n; B++)
                          for ($[B] = W << 7, N = 0; N < 1 << (d[B] - 7); N++) E[256 + W++] = B;
                        for (j = 0; j <= l; j++) K[j] = 0;
                        for (N = 0; N <= 143; ) (D[2 * N + 1] = 8), N++, K[8]++;
                        for (; N <= 255; ) (D[2 * N + 1] = 9), N++, K[9]++;
                        for (; N <= 279; ) (D[2 * N + 1] = 7), N++, K[7]++;
                        for (; N <= 287; ) (D[2 * N + 1] = 8), N++, K[8]++;
                        for (pe(D, a + 1, K), N = 0; N < n; N++)
                          (_[2 * N + 1] = 5), (_[2 * N] = ie(N, 5));
                        (G = new te(D, r, m + 1, a, l)),
                          (L = new te(_, d, 0, n, l)),
                          (J = new te(new Array(0), v, 0, p, b));
                      })(),
                      (I = !0)),
                      (P.l_desc = new F(P.dyn_ltree, G)),
                      (P.d_desc = new F(P.dyn_dtree, L)),
                      (P.bl_desc = new F(P.bl_tree, J)),
                      (P.bi_buf = 0),
                      (P.bi_valid = 0),
                      re(P);
                  }),
                    (T._tr_stored_block = A),
                    (T._tr_flush_block = function (P, N, j, U) {
                      var B,
                        W,
                        K = 0;
                      0 < P.level
                        ? (P.strm.data_type === 2 &&
                            (P.strm.data_type = (function (H) {
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
                            })(P)),
                          we(P, P.l_desc),
                          we(P, P.d_desc),
                          (K = (function (H) {
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
                          })(P)),
                          (B = (P.opt_len + 3 + 7) >>> 3),
                          (W = (P.static_len + 3 + 7) >>> 3) <= B && (B = W))
                        : (B = W = j + 5),
                        j + 4 <= B && N !== -1
                          ? A(P, N, j, U)
                          : P.strategy === 4 || W === B
                          ? (q(P, 2 + (U ? 1 : 0), 3), Se(P, D, _))
                          : (q(P, 4 + (U ? 1 : 0), 3),
                            (function (H, Q, se, ae) {
                              var _e;
                              for (
                                q(H, Q - 257, 5), q(H, se - 1, 5), q(H, ae - 4, 4), _e = 0;
                                _e < ae;
                                _e++
                              )
                                q(H, H.bl_tree[2 * S[_e] + 1], 3);
                              M(H, H.dyn_ltree, Q - 1), M(H, H.dyn_dtree, se - 1);
                            })(P, P.l_desc.max_code + 1, P.d_desc.max_code + 1, K + 1),
                            Se(P, P.dyn_ltree, P.dyn_dtree)),
                        re(P),
                        U && ne(P);
                    }),
                    (T._tr_tally = function (P, N, j) {
                      return (
                        (P.pending_buf[P.d_buf + 2 * P.last_lit] = (N >>> 8) & 255),
                        (P.pending_buf[P.d_buf + 2 * P.last_lit + 1] = 255 & N),
                        (P.pending_buf[P.l_buf + P.last_lit] = 255 & j),
                        P.last_lit++,
                        N === 0
                          ? P.dyn_ltree[2 * j]++
                          : (P.matches++,
                            N--,
                            P.dyn_ltree[2 * (u[j] + m + 1)]++,
                            P.dyn_dtree[2 * O(N)]++),
                        P.last_lit === P.lit_bufsize - 1
                      );
                    }),
                    (T._tr_align = function (P) {
                      q(P, 2, 3),
                        Z(P, x, D),
                        (function (N) {
                          N.bi_valid === 16
                            ? (ee(N, N.bi_buf), (N.bi_buf = 0), (N.bi_valid = 0))
                            : 8 <= N.bi_valid &&
                              ((N.pending_buf[N.pending++] = 255 & N.bi_buf),
                              (N.bi_buf >>= 8),
                              (N.bi_valid -= 8));
                        })(P);
                    });
                },
                { '../utils/common': 41 },
              ],
              53: [
                function (w, R, T) {
                  R.exports = function () {
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
                function (w, R, T) {
                  (function (k) {
                    (function (y, e) {
                      if (!y.setImmediate) {
                        var i,
                          t,
                          g,
                          m,
                          a = 1,
                          n = {},
                          p = !1,
                          o = y.document,
                          l = Object.getPrototypeOf && Object.getPrototypeOf(y);
                        (l = l && l.setTimeout ? l : y),
                          (i =
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
                                  ? y.addEventListener('message', x, !1)
                                  : y.attachEvent('onmessage', x),
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
                              : o && 'onreadystatechange' in o.createElement('script')
                              ? ((t = o.documentElement),
                                function (C) {
                                  var s = o.createElement('script');
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
                          (l.setImmediate = function (C) {
                            typeof C != 'function' && (C = new Function('' + C));
                            for (var s = new Array(arguments.length - 1), c = 0; c < s.length; c++)
                              s[c] = arguments[c + 1];
                            var r = { callback: C, args: s };
                            return (n[a] = r), i(a), a++;
                          }),
                          (l.clearImmediate = f);
                      }
                      function f(C) {
                        delete n[C];
                      }
                      function b(C) {
                        if (p) setTimeout(b, 0, C);
                        else {
                          var s = n[C];
                          if (s) {
                            p = !0;
                            try {
                              (function (c) {
                                var r = c.callback,
                                  d = c.args;
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
                              f(C), (p = !1);
                            }
                          }
                        }
                      }
                      function x(C) {
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
  (function (w, R) {
    X.exports = R(Fr());
  })(globalThis, (w) =>
    (() => {
      var R = {
          438: (y, e, i) => {
            i.r(e), i.d(e, { default: () => b });
            var t = i(537),
              g = i.n(t),
              m = i(645),
              a = i.n(m),
              n = i(806),
              p = i.n(n),
              o = new URL(i(583), i.b),
              l = a()(g()),
              f = p()(o);
            l.push([
              y.id,
              `@namespace "http://www.w3.org/1998/Math/MathML";math{display:inline-block;line-height:initial}mfrac{display:inline-block;vertical-align:-50%;text-align:center}mfrac>:first-child{border-bottom:solid thin currentColor}mfrac>*{display:block}msub>:nth-child(2){font-size:smaller;vertical-align:sub}msup>:nth-child(2){font-size:smaller;vertical-align:super}munder,mover,munderover{display:inline-flex;flex-flow:column nowrap;vertical-align:middle;text-align:center}munder>:not(:first-child),mover>:not(:first-child),munderover>:not(:first-child){font-size:smaller}munderover>:last-child{order:-1}mroot,msqrt{position:relative;display:inline-block;border-top:solid thin currentColor;margin-top:.5px;vertical-align:middle;margin-left:1ch}mroot:before,msqrt:before{content:"";display:inline-block;position:absolute;width:1ch;left:-1ch;top:-1px;bottom:0;background-image:url(${f})}`,
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
            const b = l.toString();
          },
          645: (y) => {
            y.exports = function (e) {
              var i = [];
              return (
                (i.toString = function () {
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
                (i.i = function (t, g, m, a, n) {
                  typeof t == 'string' && (t = [[null, t, void 0]]);
                  var p = {};
                  if (m)
                    for (var o = 0; o < this.length; o++) {
                      var l = this[o][0];
                      l != null && (p[l] = !0);
                    }
                  for (var f = 0; f < t.length; f++) {
                    var b = [].concat(t[f]);
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
                      i.push(b));
                  }
                }),
                i
              );
            };
          },
          806: (y) => {
            y.exports = function (e, i) {
              return (
                i || (i = {}),
                e &&
                  ((e = String(e.__esModule ? e.default : e)),
                  /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
                  i.hash && (e += i.hash),
                  /["'() \t\n]|(%20)/.test(e) || i.needQuotes
                    ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, '\\n'), '"')
                    : e)
              );
            };
          },
          537: (y) => {
            y.exports = function (e) {
              var i = e[1],
                t = e[3];
              if (!t) return i;
              if (typeof btoa == 'function') {
                var g = btoa(unescape(encodeURIComponent(JSON.stringify(t)))),
                  m = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(g),
                  a = '/*# '.concat(m, ' */');
                return [i].concat([a]).join(`
`);
              }
              return [i].join(`
`);
            };
          },
          522: (y, e, i) => {
            Object.defineProperty(e, '__esModule', { value: !0 }), (e.OpenXmlPackage = void 0);
            const t = i(626),
              g = i(472),
              m = i(593),
              a = i(461);
            class n {
              constructor(o, l) {
                (this._zip = o), (this.options = l), (this.xmlParser = new g.XmlParser());
              }
              get(o) {
                return this._zip.files[
                  (function (l) {
                    return l.startsWith('/') ? l.substr(1) : l;
                  })(o)
                ];
              }
              update(o, l) {
                this._zip.file(o, l);
              }
              static load(o, l) {
                return be(this, null, function* () {
                  const f = yield t.loadAsync(o);
                  return new n(f, l);
                });
              }
              save(o = 'blob') {
                return this._zip.generateAsync({ type: o });
              }
              load(o, l = 'string') {
                var f, b;
                return (b = (f = this.get(o)) === null || f === void 0 ? void 0 : f.async(l)) !==
                  null && b !== void 0
                  ? b
                  : Promise.resolve(null);
              }
              loadRelationships(o = null) {
                return be(this, null, function* () {
                  let l = '_rels/.rels';
                  if (o != null) {
                    const [b, x] = (0, m.splitPath)(o);
                    l = `${b}_rels/${x}.rels`;
                  }
                  const f = yield this.load(l);
                  return f
                    ? (0, a.parseRelationships)(
                        this.parseXmlDocument(f).firstElementChild,
                        this.xmlParser,
                      )
                    : null;
                });
              }
              parseXmlDocument(o) {
                return (0, g.parseXmlString)(o, this.options.trimXmlDeclaration);
              }
            }
            e.OpenXmlPackage = n;
          },
          530: (y, e, i) => {
            Object.defineProperty(e, '__esModule', { value: !0 }), (e.Part = void 0);
            const t = i(472);
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
            var i;
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
              })(i || (e.RelationshipTypes = i = {})),
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
          168: (y, e, i) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.DocumentParser = e.autos = void 0);
            const t = i(120),
              g = i(109),
              m = i(59),
              a = i(472),
              n = i(488),
              p = i(172),
              o = i(149),
              l = i(320);
            e.autos = {
              shd: 'inherit',
              color: 'black',
              borderColor: 'black',
              highlight: 'transparent',
            };
            const f = [],
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
              constructor(c) {
                this.options = Object.assign({ ignoreWidth: !1, debug: !1 }, c);
              }
              parseNotes(c, r, d) {
                var v = [];
                for (let S of a.default.elements(c, r)) {
                  const D = new d();
                  (D.id = a.default.attr(S, 'id')),
                    (D.noteType = a.default.attr(S, 'type')),
                    (D.children = this.parseBodyElements(S)),
                    v.push(D);
                }
                return v;
              }
              parseDocumentFile(c) {
                var r = a.default.element(c, 'body'),
                  d = a.default.element(c, 'background'),
                  v = a.default.element(r, 'sectPr');
                return {
                  type: t.DomType.Document,
                  children: this.parseBodyElements(r),
                  props: v ? (0, m.parseSectionProperties)(v, a.default) : {},
                  cssStyle: d ? this.parseBackground(d) : {},
                };
              }
              parseBackground(c) {
                var r = {},
                  d = C.colorAttr(c, 'color');
                return d && (r['background-color'] = d), r;
              }
              parseBodyElements(c) {
                var r = [];
                for (let d of a.default.elements(c))
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
              parseStylesFile(c) {
                var r = [];
                return (
                  C.foreach(c, (d) => {
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
              parseDefaultStyles(c) {
                var r = { id: null, name: null, target: null, basedOn: null, styles: [] };
                return (
                  C.foreach(c, (d) => {
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
              parseStyle(c) {
                var r = {
                  id: a.default.attr(c, 'styleId'),
                  isDefault: a.default.boolAttr(c, 'default'),
                  name: null,
                  target: null,
                  basedOn: null,
                  styles: [],
                  linked: null,
                };
                switch (a.default.attr(c, 'type')) {
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
                  C.foreach(c, (d) => {
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
              parseTableStyle(c) {
                var r = [],
                  d = a.default.attr(c, 'type'),
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
                  C.foreach(c, (D) => {
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
              parseNumberingFile(c) {
                var r = [],
                  d = {},
                  v = [];
                return (
                  C.foreach(c, (S) => {
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
              parseNumberingPicBullet(c) {
                var r = a.default.element(c, 'pict'),
                  d = r && a.default.element(r, 'shape'),
                  v = d && a.default.element(d, 'imagedata');
                return v
                  ? {
                      id: a.default.intAttr(c, 'numPicBulletId'),
                      src: a.default.attr(v, 'id'),
                      style: a.default.attr(d, 'style'),
                    }
                  : null;
              }
              parseAbstractNumbering(c, r) {
                var d = [],
                  v = a.default.attr(c, 'abstractNumId');
                return (
                  C.foreach(c, (S) => {
                    S.localName === 'lvl' && d.push(this.parseNumberingLevel(v, S, r));
                  }),
                  d
                );
              }
              parseNumberingLevel(c, r, d) {
                var v = {
                  id: c,
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
              parseSdt(c, r) {
                const d = a.default.element(c, 'sdtContent');
                return d ? r(d) : [];
              }
              parseInserted(c, r) {
                var d, v;
                return {
                  type: t.DomType.Inserted,
                  children:
                    (v = (d = r(c)) === null || d === void 0 ? void 0 : d.children) !== null &&
                    v !== void 0
                      ? v
                      : [],
                };
              }
              parseDeleted(c, r) {
                var d, v;
                return {
                  type: t.DomType.Deleted,
                  children:
                    (v = (d = r(c)) === null || d === void 0 ? void 0 : d.children) !== null &&
                    v !== void 0
                      ? v
                      : [],
                };
              }
              parseParagraph(c) {
                var r = { type: t.DomType.Paragraph, children: [] };
                for (let d of a.default.elements(c))
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
              parseParagraphProperties(c, r) {
                this.parseDefaultProperties(c, (r.cssStyle = {}), null, (d) => {
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
              parseFrame(c, r) {
                a.default.attr(c, 'dropCap') == 'drop' && (r.cssStyle.float = 'left');
              }
              parseHyperlink(c, r) {
                var d = { type: t.DomType.Hyperlink, parent: r, children: [] },
                  v = a.default.attr(c, 'anchor'),
                  S = a.default.attr(c, 'id');
                return (
                  v && (d.href = '#' + v),
                  S && (d.id = S),
                  C.foreach(c, (D) => {
                    D.localName === 'r' && d.children.push(this.parseRun(D, d));
                  }),
                  d
                );
              }
              parseRun(c, r) {
                var d = { type: t.DomType.Run, parent: r, children: [] };
                return (
                  C.foreach(c, (v) => {
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
              parseMathElement(c) {
                const r = `${c.localName}Pr`,
                  d = { type: b[c.localName], children: [] };
                for (const S of a.default.elements(c))
                  if (b[S.localName]) d.children.push(this.parseMathElement(S));
                  else if (S.localName == 'r') {
                    var v = this.parseRun(S);
                    (v.type = t.DomType.MmlRun), d.children.push(v);
                  } else S.localName == r && (d.props = this.parseMathProperies(S));
                return d;
              }
              parseMathProperies(c) {
                const r = {};
                for (const d of a.default.elements(c))
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
              parseRunProperties(c, r) {
                this.parseDefaultProperties(c, (r.cssStyle = {}), null, (d) => {
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
              parseVmlPicture(c) {
                const r = { type: t.DomType.VmlPicture, children: [] };
                for (const d of a.default.elements(c)) {
                  const v = (0, l.parseVmlElement)(d);
                  v && r.children.push(v);
                }
                return r;
              }
              checkAlternateContent(c) {
                var r;
                if (c.localName != 'AlternateContent') return c;
                var d = a.default.element(c, 'Choice');
                if (d) {
                  var v = a.default.attr(d, 'Requires'),
                    S = c.lookupNamespaceURI(v);
                  if (f.includes(S)) return d.firstElementChild;
                }
                return (r = a.default.element(c, 'Fallback')) === null || r === void 0
                  ? void 0
                  : r.firstElementChild;
              }
              parseDrawing(c) {
                for (var r of a.default.elements(c))
                  switch (r.localName) {
                    case 'inline':
                    case 'anchor':
                      return this.parseDrawingWrapper(r);
                  }
              }
              parseDrawingWrapper(c) {
                var r,
                  d = { type: t.DomType.Drawing, children: [], cssStyle: {} },
                  v = c.localName == 'anchor';
                let S = null,
                  D = a.default.boolAttr(c, 'simplePos'),
                  _ = { relative: 'page', align: 'left', offset: '0' },
                  E = { relative: 'page', align: 'top', offset: '0' };
                for (var u of a.default.elements(c))
                  switch (u.localName) {
                    case 'simplePos':
                      D &&
                        ((_.offset = a.default.lengthAttr(u, 'x', o.LengthUsage.Emu)),
                        (E.offset = a.default.lengthAttr(u, 'y', o.LengthUsage.Emu)));
                      break;
                    case 'extent':
                      (d.cssStyle.width = a.default.lengthAttr(u, 'cx', o.LengthUsage.Emu)),
                        (d.cssStyle.height = a.default.lengthAttr(u, 'cy', o.LengthUsage.Emu));
                      break;
                    case 'positionH':
                    case 'positionV':
                      if (!D) {
                        let J = u.localName == 'positionH' ? _ : E;
                        var z = a.default.element(u, 'align'),
                          G = a.default.element(u, 'posOffset');
                        (J.relative =
                          (r = a.default.attr(u, 'relativeFrom')) !== null && r !== void 0
                            ? r
                            : J.relative),
                          z && (J.align = z.textContent),
                          G && (J.offset = C.sizeValue(G, o.LengthUsage.Emu));
                      }
                      break;
                    case 'wrapTopAndBottom':
                      S = 'wrapTopAndBottom';
                      break;
                    case 'wrapNone':
                      S = 'wrapNone';
                      break;
                    case 'graphic':
                      var L = this.parseGraphic(u);
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
              parseGraphic(c) {
                var r = a.default.element(c, 'graphicData');
                for (let d of a.default.elements(r))
                  if (d.localName === 'pic') return this.parsePicture(d);
                return null;
              }
              parsePicture(c) {
                var r = { type: t.DomType.Image, src: '', cssStyle: {} },
                  d = a.default.element(c, 'blipFill'),
                  v = a.default.element(d, 'blip');
                r.src = a.default.attr(v, 'embed');
                var S = a.default.element(c, 'spPr'),
                  D = a.default.element(S, 'xfrm');
                for (var _ of ((r.cssStyle.position = 'relative'), a.default.elements(D)))
                  switch (_.localName) {
                    case 'ext':
                      (r.cssStyle.width = a.default.lengthAttr(_, 'cx', o.LengthUsage.Emu)),
                        (r.cssStyle.height = a.default.lengthAttr(_, 'cy', o.LengthUsage.Emu));
                      break;
                    case 'off':
                      (r.cssStyle.left = a.default.lengthAttr(_, 'x', o.LengthUsage.Emu)),
                        (r.cssStyle.top = a.default.lengthAttr(_, 'y', o.LengthUsage.Emu));
                  }
                return r;
              }
              parseTable(c) {
                var r = { type: t.DomType.Table, children: [] };
                return (
                  C.foreach(c, (d) => {
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
              parseTableColumns(c) {
                var r = [];
                return (
                  C.foreach(c, (d) => {
                    d.localName === 'gridCol' && r.push({ width: a.default.lengthAttr(d, 'w') });
                  }),
                  r
                );
              }
              parseTableProperties(c, r) {
                switch (
                  ((r.cssStyle = {}),
                  (r.cellStyle = {}),
                  this.parseDefaultProperties(c, r.cssStyle, r.cellStyle, (d) => {
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
              parseTablePosition(c, r) {
                var d = a.default.lengthAttr(c, 'topFromText'),
                  v = a.default.lengthAttr(c, 'bottomFromText'),
                  S = a.default.lengthAttr(c, 'rightFromText'),
                  D = a.default.lengthAttr(c, 'leftFromText');
                (r.cssStyle.float = 'left'),
                  (r.cssStyle['margin-bottom'] = s.addSize(r.cssStyle['margin-bottom'], v)),
                  (r.cssStyle['margin-left'] = s.addSize(r.cssStyle['margin-left'], D)),
                  (r.cssStyle['margin-right'] = s.addSize(r.cssStyle['margin-right'], S)),
                  (r.cssStyle['margin-top'] = s.addSize(r.cssStyle['margin-top'], d));
              }
              parseTableRow(c) {
                var r = { type: t.DomType.Row, children: [] };
                return (
                  C.foreach(c, (d) => {
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
              parseTableRowProperties(c, r) {
                r.cssStyle = this.parseDefaultProperties(c, {}, null, (d) => {
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
              parseTableCell(c) {
                var r = { type: t.DomType.Cell, children: [] };
                return (
                  C.foreach(c, (d) => {
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
              parseTableCellProperties(c, r) {
                r.cssStyle = this.parseDefaultProperties(c, {}, null, (d) => {
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
              parseDefaultProperties(c, r = null, d = null, v = null) {
                return (
                  (r = r || {}),
                  C.foreach(c, (S) => {
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
                            o.LengthUsage.FontSize,
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
                          r.verticalAlign = a.default.lengthAttr(S, 'val', o.LengthUsage.FontSize);
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
                          c.localName == 'pPr' && this.parseSpacing(S, r);
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
                              `DOCX: Unknown document element: ${c.localName}.${S.localName}`,
                            );
                      }
                  }),
                  r
                );
              }
              parseUnderline(c, r) {
                var d = a.default.attr(c, 'val');
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
                  var v = C.colorAttr(c, 'color');
                  v && (r['text-decoration-color'] = v);
                }
              }
              parseFont(c, r) {
                var d = [a.default.attr(c, 'ascii'), s.themeValue(c, 'asciiTheme')]
                  .filter((v) => v)
                  .join(', ');
                d.length > 0 && (r['font-family'] = d);
              }
              parseIndentation(c, r) {
                var d = a.default.lengthAttr(c, 'firstLine'),
                  v = a.default.lengthAttr(c, 'hanging'),
                  S = a.default.lengthAttr(c, 'left'),
                  D = a.default.lengthAttr(c, 'start'),
                  _ = a.default.lengthAttr(c, 'right'),
                  E = a.default.lengthAttr(c, 'end');
                d && (r['text-indent'] = d),
                  v && (r['text-indent'] = `-${v}`),
                  (S || D) && (r['margin-left'] = S || D),
                  (_ || E) && (r['margin-right'] = _ || E);
              }
              parseSpacing(c, r) {
                var d = a.default.lengthAttr(c, 'before'),
                  v = a.default.lengthAttr(c, 'after'),
                  S = a.default.intAttr(c, 'line', null),
                  D = a.default.attr(c, 'lineRule');
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
              parseMarginProperties(c, r) {
                C.foreach(c, (d) => {
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
              parseTrHeight(c, r) {
                a.default.attr(c, 'hRule'), (r.height = a.default.lengthAttr(c, 'val'));
              }
              parseBorderProperties(c, r) {
                C.foreach(c, (d) => {
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
            const x = [
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
                if (D) return D == 'auto' ? S : x.includes(D) ? D : `#${D}`;
                var _ = a.default.attr(r, 'themeColor');
                return _ ? `var(--docx-${_}-color)` : v;
              }
              static sizeValue(r, d = o.LengthUsage.Dxa) {
                return (0, o.convertLength)(r.textContent, d);
              }
            }
            class s {
              static themeValue(r, d) {
                var v = a.default.attr(r, d);
                return v ? `var(--docx-${v}-font)` : null;
              }
              static valueOfSize(r, d) {
                var v = o.LengthUsage.Dxa;
                switch (a.default.attr(r, 'type')) {
                  case 'dxa':
                    break;
                  case 'pct':
                    v = o.LengthUsage.Percent;
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
                return `${a.default.lengthAttr(r, 'sz', o.LengthUsage.Border)} solid ${
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
          162: (y, e, i) => {
            Object.defineProperty(e, '__esModule', { value: !0 }), (e.CorePropsPart = void 0);
            const t = i(530),
              g = i(614);
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
              (e.parseCoreProps = function (i, t) {
                const g = {};
                for (let m of t.elements(i))
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
          177: (y, e, i) => {
            Object.defineProperty(e, '__esModule', { value: !0 }), (e.CustomPropsPart = void 0);
            const t = i(530),
              g = i(821);
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
              (e.parseCustomProps = function (i, t) {
                return t.elements(i, 'property').map((g) => {
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
          665: (y, e, i) => {
            Object.defineProperty(e, '__esModule', { value: !0 }), (e.ExtendedPropsPart = void 0);
            const t = i(530),
              g = i(668);
            class m extends t.Part {
              parseXml(n) {
                this.props = (0, g.parseExtendedProps)(n, this._package.xmlParser);
              }
            }
            e.ExtendedPropsPart = m;
          },
          668: (y, e) => {
            function i(t) {
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
                      m.pages = i(a.textContent);
                      break;
                    case 'Words':
                      m.words = i(a.textContent);
                      break;
                    case 'Characters':
                      m.characters = i(a.textContent);
                      break;
                    case 'Application':
                      m.application = a.textContent;
                      break;
                    case 'Lines':
                      m.lines = i(a.textContent);
                      break;
                    case 'Paragraphs':
                      m.paragraphs = i(a.textContent);
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
          172: (y, e, i) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.parseBookmarkEnd = e.parseBookmarkStart = void 0);
            const t = i(120);
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
          191: (y, e, i) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.parseBorders = e.parseBorder = void 0);
            const t = i(149);
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
              (e.convertLength = function (i, t = e.LengthUsage.Dxa) {
                return i == null || /.+(p[xt]|[%])$/.test(i)
                  ? i
                  : `${(parseInt(i) * t.mul).toFixed(2)}${t.unit}`;
              }),
              (e.convertBoolean = function (i, t = !1) {
                switch (i) {
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
              (e.convertPercentage = function (i) {
                return i ? parseInt(i) / 100 : null;
              }),
              (e.parseCommonProperty = function (i, t, g) {
                if (i.namespaceURI != e.ns.wordml) return !1;
                switch (i.localName) {
                  case 'color':
                    t.color = g.attr(i, 'val');
                    break;
                  case 'sz':
                    t.fontSize = g.lengthAttr(i, 'val', e.LengthUsage.FontSize);
                    break;
                  default:
                    return !1;
                }
                return !0;
              });
          },
          448: (y, e, i) => {
            Object.defineProperty(e, '__esModule', { value: !0 }), (e.DocumentPart = void 0);
            const t = i(530);
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
            var i;
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
              })(i || (e.DomType = i = {}));
          },
          931: (y, e) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.parseLineSpacing = void 0),
              (e.parseLineSpacing = function (i, t) {
                return {
                  before: t.lengthAttr(i, 'before'),
                  after: t.lengthAttr(i, 'after'),
                  line: t.intAttr(i, 'line'),
                  lineRule: t.attr(i, 'lineRule'),
                };
              });
          },
          109: (y, e, i) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.parseNumbering =
                e.parseTabs =
                e.parseParagraphProperty =
                e.parseParagraphProperties =
                  void 0);
            const t = i(149),
              g = i(59),
              m = i(931),
              a = i(488);
            function n(l, f, b) {
              if (l.namespaceURI != t.ns.wordml) return !1;
              if ((0, t.parseCommonProperty)(l, f, b)) return !0;
              switch (l.localName) {
                case 'tabs':
                  f.tabs = p(l, b);
                  break;
                case 'sectPr':
                  f.sectionProps = (0, g.parseSectionProperties)(l, b);
                  break;
                case 'numPr':
                  f.numbering = o(l, b);
                  break;
                case 'spacing':
                  return (f.lineSpacing = (0, m.parseLineSpacing)(l, b)), !1;
                case 'textAlignment':
                  return (f.textAlignment = b.attr(l, 'val')), !1;
                case 'keepNext':
                  f.keepLines = b.boolAttr(l, 'val', !0);
                  break;
                case 'keepNext':
                  f.keepNext = b.boolAttr(l, 'val', !0);
                  break;
                case 'pageBreakBefore':
                  f.pageBreakBefore = b.boolAttr(l, 'val', !0);
                  break;
                case 'outlineLvl':
                  f.outlineLevel = b.intAttr(l, 'val');
                  break;
                case 'pStyle':
                  f.styleName = b.attr(l, 'val');
                  break;
                case 'rPr':
                  f.runProps = (0, a.parseRunProperties)(l, b);
                  break;
                default:
                  return !1;
              }
              return !0;
            }
            function p(l, f) {
              return f
                .elements(l, 'tab')
                .map((b) => ({
                  position: f.lengthAttr(b, 'pos'),
                  leader: f.attr(b, 'leader'),
                  style: f.attr(b, 'val'),
                }));
            }
            function o(l, f) {
              var b = {};
              for (let x of f.elements(l))
                switch (x.localName) {
                  case 'numId':
                    b.id = f.attr(x, 'val');
                    break;
                  case 'ilvl':
                    b.level = f.intAttr(x, 'val');
                }
              return b;
            }
            (e.parseParagraphProperties = function (l, f) {
              let b = {};
              for (let x of f.elements(l)) n(x, b, f);
              return b;
            }),
              (e.parseParagraphProperty = n),
              (e.parseTabs = p),
              (e.parseNumbering = o);
          },
          488: (y, e, i) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.parseRunProperty = e.parseRunProperties = void 0);
            const t = i(149);
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
          59: (y, e, i) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.parseSectionProperties = e.SectionType = void 0);
            const t = i(472),
              g = i(191);
            var m;
            function a(o, l) {
              return {
                numberOfColumns: l.intAttr(o, 'num'),
                space: l.lengthAttr(o, 'space'),
                separator: l.boolAttr(o, 'sep'),
                equalWidth: l.boolAttr(o, 'equalWidth', !0),
                columns: l
                  .elements(o, 'col')
                  .map((f) => ({ width: l.lengthAttr(f, 'w'), space: l.lengthAttr(f, 'space') })),
              };
            }
            function n(o, l) {
              return {
                chapSep: l.attr(o, 'chapSep'),
                chapStyle: l.attr(o, 'chapStyle'),
                format: l.attr(o, 'fmt'),
                start: l.intAttr(o, 'start'),
              };
            }
            function p(o, l) {
              return { id: l.attr(o, 'id'), type: l.attr(o, 'type') };
            }
            (function (o) {
              (o.Continuous = 'continuous'),
                (o.NextPage = 'nextPage'),
                (o.NextColumn = 'nextColumn'),
                (o.EvenPage = 'evenPage'),
                (o.OddPage = 'oddPage');
            })(m || (e.SectionType = m = {})),
              (e.parseSectionProperties = function (o, l = t.default) {
                var f,
                  b,
                  x = {};
                for (let C of l.elements(o))
                  switch (C.localName) {
                    case 'pgSz':
                      x.pageSize = {
                        width: l.lengthAttr(C, 'w'),
                        height: l.lengthAttr(C, 'h'),
                        orientation: l.attr(C, 'orient'),
                      };
                      break;
                    case 'type':
                      x.type = l.attr(C, 'val');
                      break;
                    case 'pgMar':
                      x.pageMargins = {
                        left: l.lengthAttr(C, 'left'),
                        right: l.lengthAttr(C, 'right'),
                        top: l.lengthAttr(C, 'top'),
                        bottom: l.lengthAttr(C, 'bottom'),
                        header: l.lengthAttr(C, 'header'),
                        footer: l.lengthAttr(C, 'footer'),
                        gutter: l.lengthAttr(C, 'gutter'),
                      };
                      break;
                    case 'cols':
                      x.columns = a(C, l);
                      break;
                    case 'headerReference':
                      ((f = x.headerRefs) !== null && f !== void 0 ? f : (x.headerRefs = [])).push(
                        p(C, l),
                      );
                      break;
                    case 'footerReference':
                      ((b = x.footerRefs) !== null && b !== void 0 ? b : (x.footerRefs = [])).push(
                        p(C, l),
                      );
                      break;
                    case 'titlePg':
                      x.titlePage = l.boolAttr(C, 'val', !0);
                      break;
                    case 'pgBorders':
                      x.pageBorders = (0, g.parseBorders)(C, l);
                      break;
                    case 'pgNumType':
                      x.pageNumber = n(C, l);
                  }
                return x;
              });
          },
          667: (y, e, i) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.renderAsync = e.praseAsync = e.defaultOptions = void 0);
            const t = i(213),
              g = i(168),
              m = i(932);
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
              (e.renderAsync = function (a, n, p = null, o = null) {
                return be(this, null, function* () {
                  const l = Object.assign(Object.assign({}, e.defaultOptions), o),
                    f = new m.HtmlRenderer(window.document),
                    b = yield t.WordDocument.load(a, new g.DocumentParser(l), l);
                  return f.render(b, n, p, l), b;
                });
              });
          },
          380: (y, e, i) => {
            Object.defineProperty(e, '__esModule', { value: !0 }), (e.FontTablePart = void 0);
            const t = i(530),
              g = i(512);
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
            const i = {
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
              return { id: a.attr(m, 'id'), key: a.attr(m, 'fontKey'), type: i[m.localName] };
            }
            (e.parseFonts = function (m, a) {
              return a.elements(m).map((n) => t(n, a));
            }),
              (e.parseFont = t),
              (e.parseEmbedFontRef = g);
          },
          984: (y, e, i) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.WmlFooter = e.WmlHeader = void 0);
            const t = i(120);
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
          985: (y, e, i) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.FooterPart = e.HeaderPart = e.BaseHeaderFooterPart = void 0);
            const t = i(530),
              g = i(984);
            class m extends t.Part {
              constructor(n, p, o) {
                super(n, p), (this._documentParser = o);
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
          932: (y, e, i) => {
            Object.defineProperty(e, '__esModule', { value: !0 }), (e.HtmlRenderer = void 0);
            const t = i(120),
              g = i(593),
              m = i(630),
              a = i(438),
              n = 'http://www.w3.org/1998/Math/MathML';
            function p(s, c, r) {
              return l(void 0, s, c, r);
            }
            function o(s, c, r) {
              return l('http://www.w3.org/2000/svg', s, c, r);
            }
            function l(s, c, r, d) {
              var v = s ? document.createElementNS(s, c) : document.createElement(c);
              return Object.assign(v, r), d && b(v, d), v;
            }
            function f(s) {
              s.innerHTML = '';
            }
            function b(s, c) {
              c.forEach((r) => s.appendChild((0, g.isString)(r) ? document.createTextNode(r) : r));
            }
            function x(s) {
              return p('style', { innerHTML: s });
            }
            function C(s, c) {
              s.appendChild(document.createComment(c));
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
              render(s, c, r = null, d) {
                var v;
                (this.document = s),
                  (this.options = d),
                  (this.className = d.className),
                  (this.rootSelector = d.inWrapper ? `.${this.className}-wrapper` : ':root'),
                  (this.styleMap = null),
                  f((r = r || c)),
                  f(c),
                  C(r, 'docxjs library predefined styles'),
                  r.appendChild(this.renderDefaultStyle()),
                  !window.MathMLElement &&
                    d.useMathMLPolyfill &&
                    (C(r, 'docxjs mathml polyfill styles'), r.appendChild(x(a.default))),
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
                this.options.inWrapper ? c.appendChild(this.renderWrapper(S)) : b(c, S),
                  this.refreshTabStops();
              }
              renderTheme(s, c) {
                var r, d;
                const v = {},
                  S = (r = s.theme) === null || r === void 0 ? void 0 : r.fontScheme;
                S &&
                  (S.majorFont && (v['--docx-majorHAnsi-font'] = S.majorFont.latinTypeface),
                  S.minorFont && (v['--docx-minorHAnsi-font'] = S.minorFont.latinTypeface));
                const D = (d = s.theme) === null || d === void 0 ? void 0 : d.colorScheme;
                if (D)
                  for (let [E, u] of Object.entries(D.colors)) v[`--docx-${E}-color`] = `#${u}`;
                const _ = this.styleToString(`.${this.className}`, v);
                c.appendChild(x(_));
              }
              renderFontTable(s, c) {
                for (let r of s.fonts)
                  for (let d of r.embedFontRefs)
                    this.document.loadFont(d.id, d.key).then((v) => {
                      const S = { 'font-family': r.name, src: `url(${v})` };
                      (d.type != 'bold' && d.type != 'boldItalic') || (S['font-weight'] = 'bold'),
                        (d.type != 'italic' && d.type != 'boldItalic') ||
                          (S['font-style'] = 'italic'),
                        C(c, `docxjs ${r.name} font`);
                      const D = this.styleToString('@font-face', S);
                      c.appendChild(x(D)), this.refreshTabStops();
                    });
              }
              processStyleName(s) {
                return s ? `${this.className}_${(0, g.escapeClassName)(s)}` : this.className;
              }
              processStyles(s) {
                const c = (0, g.keyBy)(
                  s.filter((d) => d.id != null),
                  (d) => d.id,
                );
                for (const d of s.filter((v) => v.basedOn)) {
                  var r = c[d.basedOn];
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
                return c;
              }
              prodessNumberings(s) {
                var c;
                for (let r of s.filter((d) => d.pStyleName)) {
                  const d = this.findStyle(r.pStyleName);
                  !((c = d == null ? void 0 : d.paragraphProps) === null || c === void 0) &&
                    c.numbering &&
                    (d.paragraphProps.numbering.level = r.level);
                }
              }
              processElement(s) {
                if (s.children)
                  for (var c of s.children)
                    (c.parent = s),
                      c.type == t.DomType.Table ? this.processTable(c) : this.processElement(c);
              }
              processTable(s) {
                for (var c of s.children)
                  for (var r of c.children)
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
              copyStyleProperties(s, c, r = null) {
                if (!s) return c;
                for (var d of (c == null && (c = {}),
                r == null && (r = Object.getOwnPropertyNames(s)),
                r))
                  s.hasOwnProperty(d) && !c.hasOwnProperty(d) && (c[d] = s[d]);
                return c;
              }
              createSection(s, c) {
                var r = this.createElement('section', { className: s });
                return (
                  c &&
                    (c.pageMargins &&
                      ((r.style.paddingLeft = c.pageMargins.left),
                      (r.style.paddingRight = c.pageMargins.right),
                      (r.style.paddingTop = c.pageMargins.top),
                      (r.style.paddingBottom = c.pageMargins.bottom)),
                    c.pageSize &&
                      (this.options.ignoreWidth || (r.style.width = c.pageSize.width),
                      this.options.ignoreHeight || (r.style.minHeight = c.pageSize.height)),
                    c.columns &&
                      c.columns.numberOfColumns &&
                      ((r.style.columnCount = `${c.columns.numberOfColumns}`),
                      (r.style.columnGap = c.columns.space),
                      c.columns.separator && (r.style.columnRule = '1px solid black'))),
                  r
                );
              }
              renderSections(s) {
                const c = [];
                this.processElement(s);
                const r = this.splitBySection(s.children);
                let d = null;
                for (let S = 0, D = r.length; S < D; S++) {
                  this.currentFootnoteIds = [];
                  const _ = r[S],
                    E = _.sectProps || s.props,
                    u = this.createSection(this.className, E);
                  this.renderStyleValues(s.cssStyle, u),
                    this.options.renderHeaders &&
                      this.renderHeaderFooter(E.headerRefs, E, c.length, d != E, u);
                  var v = this.createElement('article');
                  this.renderElements(_.elements, v),
                    u.appendChild(v),
                    this.options.renderFootnotes &&
                      this.renderNotes(this.currentFootnoteIds, this.footnoteMap, u),
                    this.options.renderEndnotes &&
                      S == D - 1 &&
                      this.renderNotes(this.currentEndnoteIds, this.endnoteMap, u),
                    this.options.renderFooters &&
                      this.renderHeaderFooter(E.footerRefs, E, c.length, d != E, u),
                    c.push(u),
                    (d = E);
                }
                return c;
              }
              renderHeaderFooter(s, c, r, d, v) {
                var S, D;
                if (s) {
                  var _ =
                      (D =
                        (S = c.titlePage && d ? s.find((u) => u.type == 'first') : null) !== null &&
                        S !== void 0
                          ? S
                          : r % 2 == 1
                          ? s.find((u) => u.type == 'even')
                          : null) !== null && D !== void 0
                        ? D
                        : s.find((u) => u.type == 'default'),
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
                var c,
                  r = { sectProps: null, elements: [] },
                  d = [r];
                for (let z of s) {
                  if (z.type == t.DomType.Paragraph) {
                    const G = this.findStyle(z.styleName);
                    !((c = G == null ? void 0 : G.paragraphProps) === null || c === void 0) &&
                      c.pageBreakBefore &&
                      ((r.sectProps = v), (r = { sectProps: null, elements: [] }), d.push(r));
                  }
                  if ((r.elements.push(z), z.type == t.DomType.Paragraph)) {
                    const G = z;
                    var v = G.sectionProps,
                      S = -1,
                      D = -1;
                    if (
                      (this.options.breakPages &&
                        G.children &&
                        (S = G.children.findIndex((L) => {
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
                      let L = G.children[S],
                        J = D < L.children.length - 1;
                      if (S < G.children.length - 1 || J) {
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
                let u = null;
                for (let z = d.length - 1; z >= 0; z--)
                  d[z].sectProps == null ? (d[z].sectProps = u) : (u = d[z].sectProps);
                return d;
              }
              renderWrapper(s) {
                return this.createElement('div', { className: `${this.className}-wrapper` }, s);
              }
              renderDefaultStyle() {
                var s = this.className;
                return x(`
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
              renderNumbering(s, c) {
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
                        var u = `${this.rootSelector} { ${_}: url(${E}) }`;
                        c.appendChild(x(u));
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
                  x(r)
                );
              }
              renderStyles(s) {
                var c,
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
                  for (const u of S) {
                    var _ = `${(c = E.target) !== null && c !== void 0 ? c : ''}.${E.cssName}`;
                    E.target != u.target && (_ += ` ${u.target}`),
                      v[E.target] == E && (_ = `.${this.className} ${E.target}, ` + _),
                      (r += this.styleToString(_, u.values));
                  }
                }
                return x(r);
              }
              renderNotes(s, c, r) {
                var d = s.map((S) => c[S]).filter((S) => S);
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
              renderChildren(s, c) {
                return this.renderElements(s.children, c);
              }
              renderElements(s, c) {
                if (s == null) return null;
                var r = s.flatMap((d) => this.renderElement(d)).filter((d) => d != null);
                return c && b(c, r), r;
              }
              renderContainer(s, c, r) {
                return this.createElement(c, r, this.renderChildren(s));
              }
              renderContainerNS(s, c, r, d) {
                return l(c, r, d, this.renderChildren(s));
              }
              renderParagraph(s) {
                var c,
                  r,
                  d,
                  v,
                  S = this.createElement('p');
                const D = this.findStyle(s.styleName);
                ((c = s.tabs) !== null && c !== void 0) ||
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
              renderRunProperties(s, c) {
                this.renderCommonProperties(s, c);
              }
              renderCommonProperties(s, c) {
                c != null &&
                  (c.color && (s.color = c.color), c.fontSize && (s['font-size'] = c.fontSize));
              }
              renderHyperlink(s) {
                var c = this.createElement('a');
                if ((this.renderChildren(s, c), this.renderStyleValues(s.cssStyle, c), s.href))
                  c.href = s.href;
                else if (s.id) {
                  const r = this.document.documentPart.rels.find(
                    (d) => d.id == s.id && d.targetMode === 'External',
                  );
                  c.href = r == null ? void 0 : r.target;
                }
                return c;
              }
              renderDrawing(s) {
                var c = this.createElement('div');
                return (
                  (c.style.display = 'inline-block'),
                  (c.style.position = 'relative'),
                  (c.style.textIndent = '0px'),
                  this.renderChildren(s, c),
                  this.renderStyleValues(s.cssStyle, c),
                  c
                );
              }
              renderImage(s) {
                let c = this.createElement('img');
                return (
                  this.renderStyleValues(s.cssStyle, c),
                  this.document &&
                    this.document.loadDocumentImage(s.src, this.currentPart).then((r) => {
                      c.src = r;
                    }),
                  c
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
                var c = this.createElement('span');
                return (c.style.fontFamily = s.font), (c.innerHTML = `&#x${s.char};`), c;
              }
              renderFootnoteReference(s) {
                var c = this.createElement('sup');
                return (
                  this.currentFootnoteIds.push(s.id),
                  (c.textContent = `${this.currentFootnoteIds.length}`),
                  c
                );
              }
              renderEndnoteReference(s) {
                var c = this.createElement('sup');
                return (
                  this.currentEndnoteIds.push(s.id),
                  (c.textContent = `${this.currentEndnoteIds.length}`),
                  c
                );
              }
              renderTab(s) {
                var c,
                  r = this.createElement('span');
                if (((r.innerHTML = '&emsp;'), this.options.experimental)) {
                  r.className = this.tabStopClass();
                  var d =
                    (c = (function (v, S) {
                      for (var D = v.parent; D != null && D.type != S; ) D = D.parent;
                      return D;
                    })(s, t.DomType.Paragraph)) === null || c === void 0
                      ? void 0
                      : c.tabs;
                  this.currentTabs.push({ stops: d, span: r });
                }
                return r;
              }
              renderBookmarkStart(s) {
                var c = this.createElement('span');
                return (c.id = s.name), c;
              }
              renderRun(s) {
                if (s.fieldRun) return null;
                const c = this.createElement('span');
                if (
                  (s.id && (c.id = s.id),
                  this.renderClass(s, c),
                  this.renderStyleValues(s.cssStyle, c),
                  s.verticalAlign)
                ) {
                  const r = this.createElement(s.verticalAlign);
                  this.renderChildren(s, r), c.appendChild(r);
                } else this.renderChildren(s, c);
                return c;
              }
              renderTable(s) {
                let c = this.createElement('table');
                return (
                  this.tableCellPositions.push(this.currentCellPosition),
                  this.tableVerticalMerges.push(this.currentVerticalMerge),
                  (this.currentVerticalMerge = {}),
                  (this.currentCellPosition = { col: 0, row: 0 }),
                  s.columns && c.appendChild(this.renderTableColumns(s.columns)),
                  this.renderClass(s, c),
                  this.renderChildren(s, c),
                  this.renderStyleValues(s.cssStyle, c),
                  (this.currentVerticalMerge = this.tableVerticalMerges.pop()),
                  (this.currentCellPosition = this.tableCellPositions.pop()),
                  c
                );
              }
              renderTableColumns(s) {
                let c = this.createElement('colgroup');
                for (let r of s) {
                  let d = this.createElement('col');
                  r.width && (d.style.width = r.width), c.appendChild(d);
                }
                return c;
              }
              renderTableRow(s) {
                let c = this.createElement('tr');
                return (
                  (this.currentCellPosition.col = 0),
                  this.renderClass(s, c),
                  this.renderChildren(s, c),
                  this.renderStyleValues(s.cssStyle, c),
                  this.currentCellPosition.row++,
                  c
                );
              }
              renderTableCell(s) {
                let c = this.createElement('td');
                const r = this.currentCellPosition.col;
                return (
                  s.verticalMerge
                    ? s.verticalMerge == 'restart'
                      ? ((this.currentVerticalMerge[r] = c), (c.rowSpan = 1))
                      : this.currentVerticalMerge[r] &&
                        ((this.currentVerticalMerge[r].rowSpan += 1), (c.style.display = 'none'))
                    : (this.currentVerticalMerge[r] = null),
                  this.renderClass(s, c),
                  this.renderChildren(s, c),
                  this.renderStyleValues(s.cssStyle, c),
                  s.span && (c.colSpan = s.span),
                  (this.currentCellPosition.col += c.colSpan),
                  c
                );
              }
              renderVmlPicture(s) {
                var c = p('div');
                return this.renderChildren(s, c), c;
              }
              renderVmlElement(s) {
                var c,
                  r,
                  d = o('svg');
                d.setAttribute('style', s.cssStyleText);
                const v = o(s.tagName);
                return (
                  Object.entries(s.attrs).forEach(([S, D]) => v.setAttribute(S, D)),
                  !((c = s.imageHref) === null || c === void 0) &&
                    c.id &&
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
                var c;
                const r = s.children.find((v) => v.type == t.DomType.MmlBase);
                if (!((c = s.props) === null || c === void 0) && c.hideDegree)
                  return l(n, 'msqrt', null, this.renderElements([r]));
                const d = s.children.find((v) => v.type == t.DomType.MmlDegree);
                return l(n, 'mroot', null, this.renderElements([r, d]));
              }
              renderMmlDelimiter(s) {
                var c, r;
                const d = [];
                return (
                  d.push(
                    l(n, 'mo', null, [(c = s.props.beginChar) !== null && c !== void 0 ? c : '(']),
                  ),
                  d.push(...this.renderElements(s.children)),
                  d.push(
                    l(n, 'mo', null, [(r = s.props.endChar) !== null && r !== void 0 ? r : ')']),
                  ),
                  l(n, 'mrow', null, d)
                );
              }
              renderMmlNary(s) {
                var c;
                const r = [],
                  d = (0, g.keyBy)(s.children, (E) => E.type),
                  v = d[t.DomType.MmlSuperArgument],
                  S = d[t.DomType.MmlSubArgument],
                  D = v ? l(n, 'mo', null, (0, g.asArray)(this.renderElement(v))) : null,
                  _ = S ? l(n, 'mo', null, (0, g.asArray)(this.renderElement(S))) : null;
                if (!((c = s.props) === null || c === void 0) && c.char) {
                  const E = l(n, 'mo', null, [s.props.char]);
                  D || _
                    ? r.push(l(n, 'munderover', null, [E, _, D]))
                    : D
                    ? r.push(l(n, 'mover', null, [E, D]))
                    : _
                    ? r.push(l(n, 'munder', null, [E, _]))
                    : r.push(E);
                }
                return (
                  r.push(...this.renderElements(d[t.DomType.MmlBase].children)),
                  l(n, 'mrow', null, r)
                );
              }
              renderMmlRun(s) {
                const c = l(n, 'ms');
                return (
                  this.renderClass(s, c),
                  this.renderStyleValues(s.cssStyle, c),
                  this.renderChildren(s, c),
                  c
                );
              }
              renderStyleValues(s, c) {
                Object.assign(c.style, s);
              }
              renderClass(s, c) {
                s.className && (c.className = s.className),
                  s.styleName && c.classList.add(this.processStyleName(s.styleName));
              }
              findStyle(s) {
                var c;
                return s && ((c = this.styleMap) === null || c === void 0 ? void 0 : c[s]);
              }
              numberingClass(s, c) {
                return `${this.className}-num-${s}-${c}`;
              }
              tabStopClass() {
                return `${this.className}-tab-stop`;
              }
              styleToString(s, c, r = null) {
                let d = `${s} {\r
`;
                for (const v in c)
                  d += `  ${v}: ${c[v]};\r
`;
                return (
                  r && (d += r),
                  d +
                    `}\r
`
                );
              }
              numberingCounter(s, c) {
                return `${this.className}-num-${s}-${c}`;
              }
              levelTextToContent(s, c, r, d) {
                var v;
                return `"${s.replace(/%\d*/g, (S) => {
                  let D = parseInt(S.substring(1), 10) - 1;
                  return `"counter(${this.numberingCounter(r, D)}, ${d})"`;
                })}${(v = { tab: '\\9', space: '\\a0' }[c]) !== null && v !== void 0 ? v : ''}"`;
              }
              numFormatToCssValue(s) {
                var c;
                return (c = {
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
                }[s]) !== null && c !== void 0
                  ? c
                  : s;
              }
              refreshTabStops() {
                this.options.experimental &&
                  (clearTimeout(this.tabsTimeout),
                  (this.tabsTimeout = setTimeout(() => {
                    const s = (0, m.computePixelToPoint)();
                    for (let c of this.currentTabs)
                      (0, m.updateTabStop)(c.span, c.stops, this.defaultTabSize, s);
                  }, 500)));
              }
            };
          },
          630: (y, e) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.updateTabStop = e.computePixelToPoint = void 0);
            const i = { pos: 0, leader: 'none', style: 'left' };
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
                  o = g.getBoundingClientRect(),
                  l = p.getBoundingClientRect(),
                  f = getComputedStyle(p),
                  b =
                    (m == null ? void 0 : m.length) > 0
                      ? m
                          .map((_) => ({ pos: t(_.position), leader: _.leader, style: _.style }))
                          .sort((_, E) => _.pos - E.pos)
                      : [i],
                  x = b[b.length - 1],
                  C = l.width * n,
                  s = t(a);
                let c = x.pos + s;
                if (c < C)
                  for (; c < C && b.length < 50; c += s)
                    b.push(Object.assign(Object.assign({}, i), { pos: c }));
                const r = parseFloat(f.marginLeft),
                  d = l.left + r,
                  v = (o.left - d) * n,
                  S = b.find((_) => _.style != 'clear' && _.pos > v);
                if (S == null) return;
                let D = 1;
                if (S.style == 'right' || S.style == 'center') {
                  const _ = Array.from(p.querySelectorAll(`.${g.className}`)),
                    E = _.indexOf(g) + 1,
                    u = document.createRange();
                  u.setStart(g, 1), E < _.length ? u.setEndBefore(_[E]) : u.setEndAfter(p);
                  const z = S.style == 'center' ? 0.5 : 1,
                    G = u.getBoundingClientRect(),
                    L = G.left + z * G.width - (l.left - r);
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
          881: (y, e, i) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.WmlEndnote = e.WmlFootnote = e.WmlBaseNote = void 0);
            const t = i(120);
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
          735: (y, e, i) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.EndnotesPart = e.FootnotesPart = e.BaseNotePart = void 0);
            const t = i(530),
              g = i(881);
            class m extends t.Part {
              constructor(n, p, o) {
                super(n, p), (this._documentParser = o);
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
          527: (y, e, i) => {
            Object.defineProperty(e, '__esModule', { value: !0 }), (e.NumberingPart = void 0);
            const t = i(530),
              g = i(682);
            class m extends t.Part {
              constructor(n, p, o) {
                super(n, p), (this._documentParser = o);
              }
              parseXml(n) {
                Object.assign(this, (0, g.parseNumberingPart)(n, this._package.xmlParser)),
                  (this.domNumberings = this._documentParser.parseNumberingFile(n));
              }
            }
            e.NumberingPart = m;
          },
          682: (y, e, i) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.parseNumberingBulletPicture =
                e.parseNumberingLevelOverrride =
                e.parseNumberingLevel =
                e.parseAbstractNumbering =
                e.parseNumbering =
                e.parseNumberingPart =
                  void 0);
            const t = i(109),
              g = i(488);
            function m(l, f) {
              let b = { id: f.attr(l, 'numId'), overrides: [] };
              for (let x of f.elements(l))
                switch (x.localName) {
                  case 'abstractNumId':
                    b.abstractId = f.attr(x, 'val');
                    break;
                  case 'lvlOverride':
                    b.overrides.push(p(x, f));
                }
              return b;
            }
            function a(l, f) {
              let b = { id: f.attr(l, 'abstractNumId'), levels: [] };
              for (let x of f.elements(l))
                switch (x.localName) {
                  case 'name':
                    b.name = f.attr(x, 'val');
                    break;
                  case 'multiLevelType':
                    b.multiLevelType = f.attr(x, 'val');
                    break;
                  case 'numStyleLink':
                    b.numberingStyleLink = f.attr(x, 'val');
                    break;
                  case 'styleLink':
                    b.styleLink = f.attr(x, 'val');
                    break;
                  case 'lvl':
                    b.levels.push(n(x, f));
                }
              return b;
            }
            function n(l, f) {
              let b = { level: f.intAttr(l, 'ilvl') };
              for (let x of f.elements(l))
                switch (x.localName) {
                  case 'start':
                    b.start = f.attr(x, 'val');
                    break;
                  case 'lvlRestart':
                    b.restart = f.intAttr(x, 'val');
                    break;
                  case 'numFmt':
                    b.format = f.attr(x, 'val');
                    break;
                  case 'lvlText':
                    b.text = f.attr(x, 'val');
                    break;
                  case 'lvlJc':
                    b.justification = f.attr(x, 'val');
                    break;
                  case 'lvlPicBulletId':
                    b.bulletPictureId = f.attr(x, 'val');
                    break;
                  case 'pStyle':
                    b.paragraphStyle = f.attr(x, 'val');
                    break;
                  case 'pPr':
                    b.paragraphProps = (0, t.parseParagraphProperties)(x, f);
                    break;
                  case 'rPr':
                    b.runProps = (0, g.parseRunProperties)(x, f);
                }
              return b;
            }
            function p(l, f) {
              let b = { level: f.intAttr(l, 'ilvl') };
              for (let x of f.elements(l))
                switch (x.localName) {
                  case 'startOverride':
                    b.start = f.intAttr(x, 'val');
                    break;
                  case 'lvl':
                    b.numberingLevel = n(x, f);
                }
              return b;
            }
            function o(l, f) {
              var b = f.element(l, 'pict'),
                x = b && f.element(b, 'shape'),
                C = x && f.element(x, 'imagedata');
              return C
                ? {
                    id: f.attr(l, 'numPicBulletId'),
                    referenceId: f.attr(C, 'id'),
                    style: f.attr(x, 'style'),
                  }
                : null;
            }
            (e.parseNumberingPart = function (l, f) {
              let b = { numberings: [], abstractNumberings: [], bulletPictures: [] };
              for (let x of f.elements(l))
                switch (x.localName) {
                  case 'num':
                    b.numberings.push(m(x, f));
                    break;
                  case 'abstractNum':
                    b.abstractNumberings.push(a(x, f));
                    break;
                  case 'numPicBullet':
                    b.bulletPictures.push(o(x, f));
                }
              return b;
            }),
              (e.parseNumbering = m),
              (e.parseAbstractNumbering = a),
              (e.parseNumberingLevel = n),
              (e.parseNumberingLevelOverrride = p),
              (e.parseNumberingBulletPicture = o);
          },
          472: (y, e, i) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.XmlParser = e.serializeXmlString = e.parseXmlString = void 0);
            const t = i(149);
            (e.parseXmlString = function (a, n = !1) {
              var p;
              n && (a = a.replace(/<[?].*[?]>/, '')),
                (a = (p = a).charCodeAt(0) === 65279 ? p.substring(1) : p);
              const o = new DOMParser().parseFromString(a, 'application/xml'),
                l =
                  (f = o.getElementsByTagName('parsererror')[0]) === null || f === void 0
                    ? void 0
                    : f.textContent;
              var f;
              if (l) throw new Error(l);
              return o;
            }),
              (e.serializeXmlString = function (a) {
                return new XMLSerializer().serializeToString(a);
              });
            class g {
              elements(n, p = null) {
                const o = [];
                for (let l = 0, f = n.childNodes.length; l < f; l++) {
                  let b = n.childNodes.item(l);
                  b.nodeType != 1 || (p != null && b.localName != p) || o.push(b);
                }
                return o;
              }
              element(n, p) {
                for (let o = 0, l = n.childNodes.length; o < l; o++) {
                  let f = n.childNodes.item(o);
                  if (f.nodeType == 1 && f.localName == p) return f;
                }
                return null;
              }
              elementAttr(n, p, o) {
                var l = this.element(n, p);
                return l ? this.attr(l, o) : void 0;
              }
              attrs(n) {
                return Array.from(n.attributes);
              }
              attr(n, p) {
                for (let o = 0, l = n.attributes.length; o < l; o++) {
                  let f = n.attributes.item(o);
                  if (f.localName == p) return f.value;
                }
                return null;
              }
              intAttr(n, p, o = null) {
                var l = this.attr(n, p);
                return l ? parseInt(l) : o;
              }
              hexAttr(n, p, o = null) {
                var l = this.attr(n, p);
                return l ? parseInt(l, 16) : o;
              }
              floatAttr(n, p, o = null) {
                var l = this.attr(n, p);
                return l ? parseFloat(l) : o;
              }
              boolAttr(n, p, o = null) {
                return (0, t.convertBoolean)(this.attr(n, p), o);
              }
              lengthAttr(n, p, o = t.LengthUsage.Dxa) {
                return (0, t.convertLength)(this.attr(n, p), o);
              }
            }
            e.XmlParser = g;
            const m = new g();
            e.default = m;
          },
          287: (y, e, i) => {
            Object.defineProperty(e, '__esModule', { value: !0 }), (e.SettingsPart = void 0);
            const t = i(530),
              g = i(846);
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
            function i(t, g) {
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
                      m.footnoteProps = i(a, g);
                      break;
                    case 'endnotePr':
                      m.endnoteProps = i(a, g);
                      break;
                    case 'autoHyphenation':
                      m.autoHyphenation = g.boolAttr(a, 'val');
                  }
                return m;
              }),
              (e.parseNoteProperties = i);
          },
          240: (y, e, i) => {
            Object.defineProperty(e, '__esModule', { value: !0 }), (e.StylesPart = void 0);
            const t = i(530);
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
          893: (y, e, i) => {
            Object.defineProperty(e, '__esModule', { value: !0 }), (e.ThemePart = void 0);
            const t = i(530),
              g = i(55);
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
            class i {}
            function t(a, n) {
              var p = { name: n.attr(a, 'name'), colors: {} };
              for (let f of n.elements(a)) {
                var o = n.element(f, 'srgbClr'),
                  l = n.element(f, 'sysClr');
                o
                  ? (p.colors[f.localName] = n.attr(o, 'val'))
                  : l && (p.colors[f.localName] = n.attr(l, 'lastClr'));
              }
              return p;
            }
            function g(a, n) {
              var p = { name: n.attr(a, 'name') };
              for (let o of n.elements(a))
                switch (o.localName) {
                  case 'majorFont':
                    p.majorFont = m(o, n);
                    break;
                  case 'minorFont':
                    p.minorFont = m(o, n);
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
            (e.DmlTheme = i),
              (e.parseTheme = function (a, n) {
                var p = new i(),
                  o = n.element(a, 'themeElements');
                for (let l of n.elements(o))
                  switch (l.localName) {
                    case 'clrScheme':
                      p.colorScheme = t(l, n);
                      break;
                    case 'fontScheme':
                      p.fontScheme = g(l, n);
                  }
                return p;
              }),
              (e.parseColorScheme = t),
              (e.parseFontScheme = g),
              (e.parseFontInfo = m);
          },
          593: (y, e) => {
            function i(t) {
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
              (e.isObject = i),
              (e.isString = function (t) {
                return (t && typeof t == 'string') || t instanceof String;
              }),
              (e.mergeDeep = function t(g, ...m) {
                var a;
                if (!m.length) return g;
                const n = m.shift();
                if (i(g) && i(n))
                  for (const p in n)
                    i(n[p])
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
          320: (y, e, i) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.parseVmlElement = e.VmlElement = void 0);
            const t = i(149),
              g = i(120),
              m = i(472);
            class a {
              constructor() {
                (this.type = g.DomType.VmlElement), (this.attrs = {}), (this.chidren = []);
              }
            }
            function n(o) {
              var l;
              return {
                stroke: m.default.attr(o, 'color'),
                'stroke-width':
                  (l = m.default.lengthAttr(o, 'weight', t.LengthUsage.Emu)) !== null &&
                  l !== void 0
                    ? l
                    : '1px',
              };
            }
            function p(o) {
              return o.split(',');
            }
            (e.VmlElement = a),
              (e.parseVmlElement = function o(l) {
                var f = new a();
                switch (l.localName) {
                  case 'rect':
                    (f.tagName = 'rect'), Object.assign(f.attrs, { width: '100%', height: '100%' });
                    break;
                  case 'oval':
                    (f.tagName = 'ellipse'),
                      Object.assign(f.attrs, { cx: '50%', cy: '50%', rx: '50%', ry: '50%' });
                    break;
                  case 'line':
                    f.tagName = 'line';
                    break;
                  case 'shape':
                    f.tagName = 'g';
                    break;
                  default:
                    return null;
                }
                for (const b of m.default.attrs(l))
                  switch (b.localName) {
                    case 'style':
                      f.cssStyleText = b.value;
                      break;
                    case 'fillcolor':
                      f.attrs.fill = b.value;
                      break;
                    case 'from':
                      const [x, C] = p(b.value);
                      Object.assign(f.attrs, { x1: x, y1: C });
                      break;
                    case 'to':
                      const [s, c] = p(b.value);
                      Object.assign(f.attrs, { x2: s, y2: c });
                  }
                for (const b of m.default.elements(l))
                  switch (b.localName) {
                    case 'stroke':
                      Object.assign(f.attrs, n(b));
                      break;
                    case 'fill':
                      Object.assign(f.attrs, {});
                      break;
                    case 'imagedata':
                      (f.tagName = 'image'),
                        Object.assign(f.attrs, { width: '100%', height: '100%' }),
                        (f.imageHref = {
                          id: m.default.attr(b, 'id'),
                          title: m.default.attr(b, 'title'),
                        });
                      break;
                    default:
                      const x = o(b);
                      x && f.chidren.push(x);
                  }
                return f;
              });
          },
          213: (y, e, i) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.deobfuscate = e.WordDocument = void 0);
            const t = i(461),
              g = i(380),
              m = i(522),
              a = i(448),
              n = i(593),
              p = i(527),
              o = i(240),
              l = i(985),
              f = i(665),
              b = i(162),
              x = i(893),
              C = i(735),
              s = i(287),
              c = i(177),
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
                  var u = new d();
                  return (
                    (u._options = E),
                    (u._parser = _),
                    (u._package = yield m.OpenXmlPackage.load(D, E)),
                    (u.rels = yield u._package.loadRelationships()),
                    yield Promise.all(
                      r.map((z) => {
                        var G;
                        const L =
                          (G = u.rels.find((J) => J.type === z.type)) !== null && G !== void 0
                            ? G
                            : z;
                        return u.loadRelationshipPart(L.target, L.type);
                      }),
                    ),
                    u
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
                  let u = null;
                  switch (_) {
                    case t.RelationshipTypes.OfficeDocument:
                      this.documentPart = u = new a.DocumentPart(this._package, D, this._parser);
                      break;
                    case t.RelationshipTypes.FontTable:
                      this.fontTablePart = u = new g.FontTablePart(this._package, D);
                      break;
                    case t.RelationshipTypes.Numbering:
                      this.numberingPart = u = new p.NumberingPart(this._package, D, this._parser);
                      break;
                    case t.RelationshipTypes.Styles:
                      this.stylesPart = u = new o.StylesPart(this._package, D, this._parser);
                      break;
                    case t.RelationshipTypes.Theme:
                      this.themePart = u = new x.ThemePart(this._package, D);
                      break;
                    case t.RelationshipTypes.Footnotes:
                      this.footnotesPart = u = new C.FootnotesPart(this._package, D, this._parser);
                      break;
                    case t.RelationshipTypes.Endnotes:
                      this.endnotesPart = u = new C.EndnotesPart(this._package, D, this._parser);
                      break;
                    case t.RelationshipTypes.Footer:
                      u = new l.FooterPart(this._package, D, this._parser);
                      break;
                    case t.RelationshipTypes.Header:
                      u = new l.HeaderPart(this._package, D, this._parser);
                      break;
                    case t.RelationshipTypes.CoreProperties:
                      this.corePropsPart = u = new b.CorePropsPart(this._package, D);
                      break;
                    case t.RelationshipTypes.ExtendedProperties:
                      this.extendedPropsPart = u = new f.ExtendedPropsPart(this._package, D);
                      break;
                    case t.RelationshipTypes.CustomProperties:
                      u = new c.CustomPropsPart(this._package, D);
                      break;
                    case t.RelationshipTypes.Settings:
                      this.settingsPart = u = new s.SettingsPart(this._package, D);
                  }
                  if (u == null) return Promise.resolve(null);
                  if (
                    ((this.partsMap[D] = u),
                    this.parts.push(u),
                    yield u.load(),
                    ((E = u.rels) === null || E === void 0 ? void 0 : E.length) > 0)
                  ) {
                    const [z] = (0, n.splitPath)(u.path);
                    yield Promise.all(
                      u.rels.map((G) =>
                        this.loadRelationshipPart((0, n.resolvePath)(G.target, z), G.type),
                      ),
                    );
                  }
                  return u;
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
                  u = ((E = _.rels) !== null && E !== void 0 ? E : this.rels).find(
                    (G) => G.id == D,
                  );
                const z = _ ? (0, n.splitPath)(_.path)[0] : '';
                return u ? this.partsMap[(0, n.resolvePath)(u.target, z)] : null;
              }
              getPathById(D, _) {
                const E = D.rels.find((z) => z.id == _),
                  [u] = (0, n.splitPath)(D.path);
                return E ? (0, n.resolvePath)(E.target, u) : null;
              }
              loadResource(D, _, E) {
                const u = this.getPathById(D, _);
                return u ? this._package.load(u, E) : Promise.resolve(null);
              }
            }
            function v(S, D) {
              const _ = D.replace(/{|}|-/g, ''),
                E = new Array(16);
              for (let u = 0; u < 16; u++) E[16 - u - 1] = parseInt(_.substr(2 * u, 2), 16);
              for (let u = 0; u < 32; u++) S[u] = S[u] ^ E[u % 16];
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
        var i = (T[y] = { id: y, exports: {} });
        return R[y](i, i.exports, k), i.exports;
      }
      return (
        (k.m = R),
        (k.n = (y) => {
          var e = y && y.__esModule ? () => y.default : () => y;
          return k.d(e, { a: e }), e;
        }),
        (k.d = (y, e) => {
          for (var i in e)
            k.o(e, i) && !k.o(y, i) && Object.defineProperty(y, i, { enumerable: !0, get: e[i] });
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
})(kt);
var ft = kt.exports;
const Ir = xe({
  __name: 'index',
  props: { src: {}, requestOption: {} },
  setup(X) {
    const V = X,
      w = We();
    qe(
      () => V.src,
      () => {
        R();
      },
    ),
      Yt(() => {
        V.src && R();
      });
    const R = () => {
        let k;
        if (Jt(V.src) && typeof V.src == 'string') {
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
const Mr = tr(Ir, [['__scopeId', 'data-v-30ab067e']]),
  $r = xe({
    __name: 'index',
    setup(X) {
      const V = We('https://supercutexiaosi.top/resource/develop_docx.docx'),
        w = (R) =>
          be(this, null, function* () {
            return (V.value = yield zr(R)), !1;
          });
      return (R, T) => {
        const k = Qt('ElButton');
        return (
          ce(),
          ke('div', null, [
            ye(
              Y(Or),
              { limit: 1, accept: '.docx,.doc', 'before-upload': w, action: '' },
              {
                default: ge(() => [
                  ye(
                    k,
                    { style: { 'margin-bottom': '12px' } },
                    { default: ge(() => [er('点击上传')]), _: 1 },
                  ),
                ]),
                _: 1,
              },
            ),
            ye(Mr, { src: V.value }, null, 8, ['src']),
          ])
        );
      };
    },
  });
export { $r as default };
