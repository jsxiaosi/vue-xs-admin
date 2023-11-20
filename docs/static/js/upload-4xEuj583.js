var Pe = Object.defineProperty,
  Ce = Object.defineProperties;
var Fe = Object.getOwnPropertyDescriptors;
var te = Object.getOwnPropertySymbols;
var _e = Object.prototype.hasOwnProperty,
  Le = Object.prototype.propertyIsEnumerable;
var se = (t, s, e) =>
    s in t ? Pe(t, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : (t[s] = e),
  S = (t, s) => {
    for (var e in s || (s = {})) _e.call(s, e) && se(t, e, s[e]);
    if (te) for (var e of te(s)) Le.call(s, e) && se(t, e, s[e]);
    return t;
  },
  T = (t, s) => Ce(t, Fe(s));
var N = (t, s, e) =>
  new Promise((p, u) => {
    var d = (m) => {
        try {
          $(e.next(m));
        } catch (k) {
          u(k);
        }
      },
      f = (m) => {
        try {
          $(e.throw(m));
        } catch (k) {
          u(k);
        }
      },
      $ = (m) => (m.done ? p(m.value) : Promise.resolve(m.value).then(d, f));
    $((e = e.apply(t, s)).next());
  });
import {
  dP as ee,
  dQ as me,
  bA as ve,
  dR as H,
  dS as y,
  dT as Q,
  dU as E,
  d as O,
  dV as Ue,
  dW as M,
  dX as z,
  j as ye,
  A as Y,
  o as h,
  e as U,
  w as P,
  F as Se,
  u as n,
  M as g,
  dK as ge,
  c as L,
  N as b,
  bP as j,
  dY as D,
  dZ as Te,
  h as _,
  t as ae,
  f as K,
  d_ as Oe,
  L as Be,
  d$ as De,
  e0 as je,
  e1 as Ae,
  e2 as qe,
  e3 as Ne,
  p as w,
  b as Ke,
  b_ as Me,
  e4 as I,
  cK as He,
  c2 as Z,
  e5 as ne,
  bw as oe,
  bx as ze,
  e6 as Ie,
  e7 as Ve,
  e8 as Xe,
  B as le,
  e9 as We,
  H as Ge,
  d2 as Je,
  dl as Qe,
  q as re,
  m as ie,
  ea as Ye,
} from './index-nnTfcizh.js';
const he = Symbol('uploadContextKey'),
  Ze = 'ElUpload';
class xe extends Error {
  constructor(s, e, p, u) {
    super(s), (this.name = 'UploadAjaxError'), (this.status = e), (this.method = p), (this.url = u);
  }
}
function ue(t, s, e) {
  let p;
  return (
    e.response
      ? (p = `${e.response.error || e.response}`)
      : e.responseText
      ? (p = `${e.responseText}`)
      : (p = `fail to ${s.method} ${t} ${e.status}`),
    new xe(p, e.status, s.method, t)
  );
}
function et(t) {
  const s = t.responseText || t.response;
  if (!s) return s;
  try {
    return JSON.parse(s);
  } catch (e) {
    return s;
  }
}
const tt = (t) => {
    typeof XMLHttpRequest == 'undefined' && ee(Ze, 'XMLHttpRequest is undefined');
    const s = new XMLHttpRequest(),
      e = t.action;
    s.upload &&
      s.upload.addEventListener('progress', (d) => {
        const f = d;
        (f.percent = d.total > 0 ? (d.loaded / d.total) * 100 : 0), t.onProgress(f);
      });
    const p = new FormData();
    if (t.data)
      for (const [d, f] of Object.entries(t.data))
        me(f) && f.length ? p.append(d, ...f) : p.append(d, f);
    p.append(t.filename, t.file, t.file.name),
      s.addEventListener('error', () => {
        t.onError(ue(e, t, s));
      }),
      s.addEventListener('load', () => {
        if (s.status < 200 || s.status >= 300) return t.onError(ue(e, t, s));
        t.onSuccess(et(s));
      }),
      s.open(t.method, e, !0),
      t.withCredentials && 'withCredentials' in s && (s.withCredentials = !0);
    const u = t.headers || {};
    if (u instanceof Headers) u.forEach((d, f) => s.setRequestHeader(f, d));
    else for (const [d, f] of Object.entries(u)) ve(f) || s.setRequestHeader(d, String(f));
    return s.send(p), s;
  },
  be = ['text', 'picture', 'picture-card'];
let st = 1;
const x = () => Date.now() + st++,
  ke = H({
    action: { type: String, default: '#' },
    headers: { type: y(Object) },
    method: { type: String, default: 'post' },
    data: { type: y([Object, Function, Promise]), default: () => Q({}) },
    multiple: { type: Boolean, default: !1 },
    name: { type: String, default: 'file' },
    drag: { type: Boolean, default: !1 },
    withCredentials: Boolean,
    showFileList: { type: Boolean, default: !0 },
    accept: { type: String, default: '' },
    fileList: { type: y(Array), default: () => Q([]) },
    autoUpload: { type: Boolean, default: !0 },
    listType: { type: String, values: be, default: 'text' },
    httpRequest: { type: y(Function), default: tt },
    disabled: Boolean,
    limit: Number,
  }),
  at = H(
    T(S({}, ke), {
      beforeUpload: { type: y(Function), default: E },
      beforeRemove: { type: y(Function) },
      onRemove: { type: y(Function), default: E },
      onChange: { type: y(Function), default: E },
      onPreview: { type: y(Function), default: E },
      onSuccess: { type: y(Function), default: E },
      onProgress: { type: y(Function), default: E },
      onError: { type: y(Function), default: E },
      onExceed: { type: y(Function), default: E },
    }),
  ),
  nt = H({
    files: { type: y(Array), default: () => Q([]) },
    disabled: { type: Boolean, default: !1 },
    handlePreview: { type: y(Function), default: E },
    listType: { type: String, values: be, default: 'text' },
  }),
  ot = { remove: (t) => !!t },
  lt = ['onKeydown'],
  rt = ['src'],
  it = ['onClick'],
  ut = ['title'],
  dt = ['onClick'],
  ct = ['onClick'],
  pt = O({ name: 'ElUploadList' }),
  ft = O(
    T(S({}, pt), {
      props: nt,
      emits: ot,
      setup(t, { emit: s }) {
        const e = t,
          { t: p } = Ue(),
          u = M('upload'),
          d = M('icon'),
          f = M('list'),
          $ = z(),
          m = ye(!1),
          k = Y(() => [u.b('list'), u.bm('list', e.listType), u.is('disabled', e.disabled)]),
          R = (v) => {
            s('remove', v);
          };
        return (v, l) => (
          h(),
          U(
            Me,
            { tag: 'ul', class: g(n(k)), name: n(f).b() },
            {
              default: P(() => [
                (h(!0),
                L(
                  Se,
                  null,
                  Ke(
                    v.files,
                    (a) => (
                      h(),
                      L(
                        'li',
                        {
                          key: a.uid || a.name,
                          class: g([
                            n(u).be('list', 'item'),
                            n(u).is(a.status),
                            { focusing: m.value },
                          ]),
                          tabindex: '0',
                          onKeydown: ge((i) => !n($) && R(a), ['delete']),
                          onFocus: l[0] || (l[0] = (i) => (m.value = !0)),
                          onBlur: l[1] || (l[1] = (i) => (m.value = !1)),
                          onClick: l[2] || (l[2] = (i) => (m.value = !1)),
                        },
                        [
                          w(v.$slots, 'default', { file: a }, () => [
                            v.listType === 'picture' ||
                            (a.status !== 'uploading' && v.listType === 'picture-card')
                              ? (h(),
                                L(
                                  'img',
                                  {
                                    key: 0,
                                    class: g(n(u).be('list', 'item-thumbnail')),
                                    src: a.url,
                                    alt: '',
                                  },
                                  null,
                                  10,
                                  rt,
                                ))
                              : b('v-if', !0),
                            a.status === 'uploading' || v.listType !== 'picture-card'
                              ? (h(),
                                L(
                                  'div',
                                  { key: 1, class: g(n(u).be('list', 'item-info')) },
                                  [
                                    K(
                                      'a',
                                      {
                                        class: g(n(u).be('list', 'item-name')),
                                        onClick: j((i) => v.handlePreview(a), ['prevent']),
                                      },
                                      [
                                        _(
                                          n(D),
                                          { class: g(n(d).m('document')) },
                                          { default: P(() => [_(n(Te))]), _: 1 },
                                          8,
                                          ['class'],
                                        ),
                                        K(
                                          'span',
                                          {
                                            class: g(n(u).be('list', 'item-file-name')),
                                            title: a.name,
                                          },
                                          ae(a.name),
                                          11,
                                          ut,
                                        ),
                                      ],
                                      10,
                                      it,
                                    ),
                                    a.status === 'uploading'
                                      ? (h(),
                                        U(
                                          n(Oe),
                                          {
                                            key: 0,
                                            type: v.listType === 'picture-card' ? 'circle' : 'line',
                                            'stroke-width': v.listType === 'picture-card' ? 6 : 2,
                                            percentage: Number(a.percentage),
                                            style: Be(
                                              v.listType === 'picture-card'
                                                ? ''
                                                : 'margin-top: 0.5rem',
                                            ),
                                          },
                                          null,
                                          8,
                                          ['type', 'stroke-width', 'percentage', 'style'],
                                        ))
                                      : b('v-if', !0),
                                  ],
                                  2,
                                ))
                              : b('v-if', !0),
                            K(
                              'label',
                              { class: g(n(u).be('list', 'item-status-label')) },
                              [
                                v.listType === 'text'
                                  ? (h(),
                                    U(
                                      n(D),
                                      {
                                        key: 0,
                                        class: g([
                                          n(d).m('upload-success'),
                                          n(d).m('circle-check'),
                                        ]),
                                      },
                                      { default: P(() => [_(n(De))]), _: 1 },
                                      8,
                                      ['class'],
                                    ))
                                  : ['picture-card', 'picture'].includes(v.listType)
                                  ? (h(),
                                    U(
                                      n(D),
                                      {
                                        key: 1,
                                        class: g([n(d).m('upload-success'), n(d).m('check')]),
                                      },
                                      { default: P(() => [_(n(je))]), _: 1 },
                                      8,
                                      ['class'],
                                    ))
                                  : b('v-if', !0),
                              ],
                              2,
                            ),
                            n($)
                              ? b('v-if', !0)
                              : (h(),
                                U(
                                  n(D),
                                  { key: 2, class: g(n(d).m('close')), onClick: (i) => R(a) },
                                  { default: P(() => [_(n(Ae))]), _: 2 },
                                  1032,
                                  ['class', 'onClick'],
                                )),
                            b(
                              ' Due to close btn only appears when li gets focused disappears after li gets blurred, thus keyboard navigation can never reach close btn',
                            ),
                            b(' This is a bug which needs to be fixed '),
                            b(' TODO: Fix the incorrect navigation interaction '),
                            n($)
                              ? b('v-if', !0)
                              : (h(),
                                L(
                                  'i',
                                  { key: 3, class: g(n(d).m('close-tip')) },
                                  ae(n(p)('el.upload.deleteTip')),
                                  3,
                                )),
                            v.listType === 'picture-card'
                              ? (h(),
                                L(
                                  'span',
                                  { key: 4, class: g(n(u).be('list', 'item-actions')) },
                                  [
                                    K(
                                      'span',
                                      {
                                        class: g(n(u).be('list', 'item-preview')),
                                        onClick: (i) => v.handlePreview(a),
                                      },
                                      [
                                        _(
                                          n(D),
                                          { class: g(n(d).m('zoom-in')) },
                                          { default: P(() => [_(n(qe))]), _: 1 },
                                          8,
                                          ['class'],
                                        ),
                                      ],
                                      10,
                                      dt,
                                    ),
                                    n($)
                                      ? b('v-if', !0)
                                      : (h(),
                                        L(
                                          'span',
                                          {
                                            key: 0,
                                            class: g(n(u).be('list', 'item-delete')),
                                            onClick: (i) => R(a),
                                          },
                                          [
                                            _(
                                              n(D),
                                              { class: g(n(d).m('delete')) },
                                              { default: P(() => [_(n(Ne))]), _: 1 },
                                              8,
                                              ['class'],
                                            ),
                                          ],
                                          10,
                                          ct,
                                        )),
                                  ],
                                  2,
                                ))
                              : b('v-if', !0),
                          ]),
                        ],
                        42,
                        lt,
                      )
                    ),
                  ),
                  128,
                )),
                w(v.$slots, 'append'),
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
var de = I(ft, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-list.vue',
  ],
]);
const mt = H({ disabled: { type: Boolean, default: !1 } }),
  vt = { file: (t) => me(t) },
  yt = ['onDrop', 'onDragover'],
  $e = 'ElUploadDrag',
  gt = O({ name: $e }),
  ht = O(
    T(S({}, gt), {
      props: mt,
      emits: vt,
      setup(t, { emit: s }) {
        const e = He(he);
        e || ee($e, 'usage: <el-upload><el-upload-dragger /></el-upload>');
        const p = M('upload'),
          u = ye(!1),
          d = z(),
          f = (m) => {
            if (d.value) return;
            (u.value = !1), m.stopPropagation();
            const k = Array.from(m.dataTransfer.files),
              R = e.accept.value;
            if (!R) {
              s('file', k);
              return;
            }
            const v = k.filter((l) => {
              const { type: a, name: i } = l,
                o = i.includes('.') ? `.${i.split('.').pop()}` : '',
                c = a.replace(/\/.*$/, '');
              return R.split(',')
                .map((r) => r.trim())
                .filter((r) => r)
                .some((r) =>
                  r.startsWith('.')
                    ? o === r
                    : /\/\*$/.test(r)
                    ? c === r.replace(/\/\*$/, '')
                    : /^[^/]+\/[^/]+$/.test(r)
                    ? a === r
                    : !1,
                );
            });
            s('file', v);
          },
          $ = () => {
            d.value || (u.value = !0);
          };
        return (m, k) => (
          h(),
          L(
            'div',
            {
              class: g([n(p).b('dragger'), n(p).is('dragover', u.value)]),
              onDrop: j(f, ['prevent']),
              onDragover: j($, ['prevent']),
              onDragleave: k[0] || (k[0] = j((R) => (u.value = !1), ['prevent'])),
            },
            [w(m.$slots, 'default')],
            42,
            yt,
          )
        );
      },
    }),
  );
var bt = I(ht, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-dragger.vue',
  ],
]);
const kt = H(
    T(S({}, ke), {
      beforeUpload: { type: y(Function), default: E },
      onRemove: { type: y(Function), default: E },
      onStart: { type: y(Function), default: E },
      onSuccess: { type: y(Function), default: E },
      onProgress: { type: y(Function), default: E },
      onError: { type: y(Function), default: E },
      onExceed: { type: y(Function), default: E },
    }),
  ),
  $t = ['onKeydown'],
  Et = ['name', 'multiple', 'accept'],
  Rt = O({ name: 'ElUploadContent', inheritAttrs: !1 }),
  wt = O(
    T(S({}, Rt), {
      props: kt,
      setup(t, { expose: s }) {
        const e = t,
          p = M('upload'),
          u = z(),
          d = Z({}),
          f = Z(),
          $ = (o) => {
            if (o.length === 0) return;
            const {
              autoUpload: c,
              limit: r,
              fileList: C,
              multiple: F,
              onStart: A,
              onExceed: V,
            } = e;
            if (r && C.length + o.length > r) {
              V(o, C);
              return;
            }
            F || (o = o.slice(0, 1));
            for (const X of o) {
              const q = X;
              (q.uid = x()), A(q), c && m(q);
            }
          },
          m = (o) =>
            N(this, null, function* () {
              if (((f.value.value = ''), !e.beforeUpload)) return R(o);
              let c,
                r = {};
              try {
                const F = e.data,
                  A = e.beforeUpload(o);
                (r = ne(e.data) ? oe(e.data) : e.data),
                  (c = yield A),
                  ne(e.data) && ze(F, r) && (r = oe(e.data));
              } catch (F) {
                c = !1;
              }
              if (c === !1) {
                e.onRemove(o);
                return;
              }
              let C = o;
              c instanceof Blob &&
                (c instanceof File ? (C = c) : (C = new File([c], o.name, { type: o.type }))),
                R(Object.assign(C, { uid: o.uid }), r);
            }),
          k = (o, c) =>
            N(this, null, function* () {
              return Ve(o) ? o(c) : o;
            }),
          R = (o, c) =>
            N(this, null, function* () {
              const {
                headers: r,
                data: C,
                method: F,
                withCredentials: A,
                name: V,
                action: X,
                onProgress: q,
                onSuccess: Ee,
                onError: Re,
                httpRequest: we,
              } = e;
              try {
                c = yield k(c != null ? c : C, o);
              } catch (B) {
                e.onRemove(o);
                return;
              }
              const { uid: W } = o,
                G = {
                  headers: r || {},
                  withCredentials: A,
                  file: o,
                  data: c,
                  method: F,
                  filename: V,
                  action: X,
                  onProgress: (B) => {
                    q(B, o);
                  },
                  onSuccess: (B) => {
                    Ee(B, o), delete d.value[W];
                  },
                  onError: (B) => {
                    Re(B, o), delete d.value[W];
                  },
                },
                J = we(G);
              (d.value[W] = J), J instanceof Promise && J.then(G.onSuccess, G.onError);
            }),
          v = (o) => {
            const c = o.target.files;
            c && $(Array.from(c));
          },
          l = () => {
            u.value || ((f.value.value = ''), f.value.click());
          },
          a = () => {
            l();
          };
        return (
          s({
            abort: (o) => {
              Ie(d.value)
                .filter(o ? ([r]) => String(o.uid) === r : () => !0)
                .forEach(([r, C]) => {
                  C instanceof XMLHttpRequest && C.abort(), delete d.value[r];
                });
            },
            upload: m,
          }),
          (o, c) => (
            h(),
            L(
              'div',
              {
                class: g([n(p).b(), n(p).m(o.listType), n(p).is('drag', o.drag)]),
                tabindex: '0',
                onClick: l,
                onKeydown: ge(j(a, ['self']), ['enter', 'space']),
              },
              [
                o.drag
                  ? (h(),
                    U(
                      bt,
                      { key: 0, disabled: n(u), onFile: $ },
                      { default: P(() => [w(o.$slots, 'default')]), _: 3 },
                      8,
                      ['disabled'],
                    ))
                  : w(o.$slots, 'default', { key: 1 }),
                K(
                  'input',
                  {
                    ref_key: 'inputRef',
                    ref: f,
                    class: g(n(p).e('input')),
                    name: o.name,
                    multiple: o.multiple,
                    accept: o.accept,
                    type: 'file',
                    onChange: v,
                    onClick: c[0] || (c[0] = j(() => {}, ['stop'])),
                  },
                  null,
                  42,
                  Et,
                ),
              ],
              42,
              $t,
            )
          )
        );
      },
    }),
  );
var ce = I(wt, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-content.vue',
  ],
]);
const pe = 'ElUpload',
  fe = (t) => {
    var s;
    (s = t.url) != null && s.startsWith('blob:') && URL.revokeObjectURL(t.url);
  },
  Pt = (t, s) => {
    const e = Xe(t, 'fileList', void 0, { passive: !0 }),
      p = (l) => e.value.find((a) => a.uid === l.uid);
    function u(l) {
      var a;
      (a = s.value) == null || a.abort(l);
    }
    function d(l = ['ready', 'uploading', 'success', 'fail']) {
      e.value = e.value.filter((a) => !l.includes(a.status));
    }
    const f = (l, a) => {
        const i = p(a);
        i &&
          (console.error(l),
          (i.status = 'fail'),
          e.value.splice(e.value.indexOf(i), 1),
          t.onError(l, i, e.value),
          t.onChange(i, e.value));
      },
      $ = (l, a) => {
        const i = p(a);
        i &&
          (t.onProgress(l, i, e.value),
          (i.status = 'uploading'),
          (i.percentage = Math.round(l.percent)));
      },
      m = (l, a) => {
        const i = p(a);
        i &&
          ((i.status = 'success'),
          (i.response = l),
          t.onSuccess(l, i, e.value),
          t.onChange(i, e.value));
      },
      k = (l) => {
        ve(l.uid) && (l.uid = x());
        const a = {
          name: l.name,
          percentage: 0,
          status: 'ready',
          size: l.size,
          raw: l,
          uid: l.uid,
        };
        if (t.listType === 'picture-card' || t.listType === 'picture')
          try {
            a.url = URL.createObjectURL(l);
          } catch (i) {
            We(pe, i.message), t.onError(i, a, e.value);
          }
        (e.value = [...e.value, a]), t.onChange(a, e.value);
      },
      R = (l) =>
        N(void 0, null, function* () {
          const a = l instanceof File ? p(l) : l;
          a || ee(pe, 'file to be removed not found');
          const i = (o) => {
            u(o);
            const c = e.value;
            c.splice(c.indexOf(o), 1), t.onRemove(o, c), fe(o);
          };
          t.beforeRemove ? (yield t.beforeRemove(a, e.value)) !== !1 && i(a) : i(a);
        });
    function v() {
      e.value
        .filter(({ status: l }) => l === 'ready')
        .forEach(({ raw: l }) => {
          var a;
          return l && ((a = s.value) == null ? void 0 : a.upload(l));
        });
    }
    return (
      le(
        () => t.listType,
        (l) => {
          (l !== 'picture-card' && l !== 'picture') ||
            (e.value = e.value.map((a) => {
              const { raw: i, url: o } = a;
              if (!o && i)
                try {
                  a.url = URL.createObjectURL(i);
                } catch (c) {
                  t.onError(c, a, e.value);
                }
              return a;
            }));
        },
      ),
      le(
        e,
        (l) => {
          for (const a of l) a.uid || (a.uid = x()), a.status || (a.status = 'success');
        },
        { immediate: !0, deep: !0 },
      ),
      {
        uploadFiles: e,
        abort: u,
        clearFiles: d,
        handleError: f,
        handleProgress: $,
        handleStart: k,
        handleSuccess: m,
        handleRemove: R,
        submit: v,
        revokeFileObjectURL: fe,
      }
    );
  },
  Ct = O({ name: 'ElUpload' }),
  Ft = O(
    T(S({}, Ct), {
      props: at,
      setup(t, { expose: s }) {
        const e = t,
          p = z(),
          u = Z(),
          {
            abort: d,
            submit: f,
            clearFiles: $,
            uploadFiles: m,
            handleStart: k,
            handleError: R,
            handleRemove: v,
            handleSuccess: l,
            handleProgress: a,
            revokeFileObjectURL: i,
          } = Pt(e, u),
          o = Y(() => e.listType === 'picture-card'),
          c = Y(() =>
            T(S({}, e), {
              fileList: m.value,
              onStart: k,
              onProgress: a,
              onSuccess: l,
              onError: R,
              onRemove: v,
            }),
          );
        return (
          Ge(() => {
            m.value.forEach(i);
          }),
          Je(he, { accept: Qe(e, 'accept') }),
          s({ abort: d, submit: f, clearFiles: $, handleStart: k, handleRemove: v }),
          (r, C) => (
            h(),
            L('div', null, [
              n(o) && r.showFileList
                ? (h(),
                  U(
                    de,
                    {
                      key: 0,
                      disabled: n(p),
                      'list-type': r.listType,
                      files: n(m),
                      'handle-preview': r.onPreview,
                      onRemove: n(v),
                    },
                    re(
                      {
                        append: P(() => [
                          _(
                            ce,
                            ie({ ref_key: 'uploadRef', ref: u }, n(c)),
                            {
                              default: P(() => [
                                r.$slots.trigger
                                  ? w(r.$slots, 'trigger', { key: 0 })
                                  : b('v-if', !0),
                                !r.$slots.trigger && r.$slots.default
                                  ? w(r.$slots, 'default', { key: 1 })
                                  : b('v-if', !0),
                              ]),
                              _: 3,
                            },
                            16,
                          ),
                        ]),
                        _: 2,
                      },
                      [
                        r.$slots.file
                          ? {
                              name: 'default',
                              fn: P(({ file: F }) => [w(r.$slots, 'file', { file: F })]),
                            }
                          : void 0,
                      ],
                    ),
                    1032,
                    ['disabled', 'list-type', 'files', 'handle-preview', 'onRemove'],
                  ))
                : b('v-if', !0),
              !n(o) || (n(o) && !r.showFileList)
                ? (h(),
                  U(
                    ce,
                    ie({ key: 1, ref_key: 'uploadRef', ref: u }, n(c)),
                    {
                      default: P(() => [
                        r.$slots.trigger ? w(r.$slots, 'trigger', { key: 0 }) : b('v-if', !0),
                        !r.$slots.trigger && r.$slots.default
                          ? w(r.$slots, 'default', { key: 1 })
                          : b('v-if', !0),
                      ]),
                      _: 3,
                    },
                    16,
                  ))
                : b('v-if', !0),
              r.$slots.trigger ? w(r.$slots, 'default', { key: 2 }) : b('v-if', !0),
              w(r.$slots, 'tip'),
              !n(o) && r.showFileList
                ? (h(),
                  U(
                    de,
                    {
                      key: 3,
                      disabled: n(p),
                      'list-type': r.listType,
                      files: n(m),
                      'handle-preview': r.onPreview,
                      onRemove: n(v),
                    },
                    re({ _: 2 }, [
                      r.$slots.file
                        ? {
                            name: 'default',
                            fn: P(({ file: F }) => [w(r.$slots, 'file', { file: F })]),
                          }
                        : void 0,
                    ]),
                    1032,
                    ['disabled', 'list-type', 'files', 'handle-preview', 'onRemove'],
                  ))
                : b('v-if', !0),
            ])
          )
        );
      },
    }),
  );
var _t = I(Ft, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload.vue',
  ],
]);
const Tt = Ye(_t);
function Lt(t) {
  return new Promise(function (s) {
    var e = new FileReader();
    e.readAsDataURL(t),
      (e.onload = function () {
        s(this.result);
      });
  });
}
function Ot(t) {
  return Lt(t);
}
function Bt(t) {
  return new Promise(function (s) {
    var e = new FileReader();
    e.readAsArrayBuffer(t),
      (e.onload = function () {
        s(this.result);
      });
  });
}
export { Tt as E, Bt as a, Ot as f };
