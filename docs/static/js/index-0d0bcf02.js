var Pt = Object.defineProperty,
  xt = Object.defineProperties;
var St = Object.getOwnPropertyDescriptors;
var rt = Object.getOwnPropertySymbols;
var At = Object.prototype.hasOwnProperty,
  Ct = Object.prototype.propertyIsEnumerable;
var nt = (Z, G, P) =>
    G in Z ? Pt(Z, G, { enumerable: !0, configurable: !0, writable: !0, value: P }) : (Z[G] = P),
  Ce = (Z, G) => {
    for (var P in G || (G = {})) At.call(G, P) && nt(Z, P, G[P]);
    if (rt) for (var P of rt(G)) Ct.call(G, P) && nt(Z, P, G[P]);
    return Z;
  },
  Te = (Z, G) => xt(Z, St(G));
var Oe = (Z, G, P) =>
  new Promise((R, T) => {
    var _ = (n) => {
        try {
          e(P.next(n));
        } catch (i) {
          T(i);
        }
      },
      y = (n) => {
        try {
          e(P.throw(n));
        } catch (i) {
          T(i);
        }
      },
      e = (n) => (n.done ? R(n.value) : Promise.resolve(n.value).then(_, y));
    e((P = P.apply(Z, G)).next());
  });
import {
  bT as Qe,
  bU as pt,
  bV as Me,
  bW as ue,
  bX as Ge,
  bY as me,
  d as xe,
  bZ as Tt,
  b_ as Fe,
  b$ as He,
  j as Ze,
  o as ce,
  e as Ae,
  w as ge,
  c as _e,
  F as Et,
  a as Dt,
  K as de,
  y as q,
  bP as mt,
  n as ye,
  L as he,
  g as ze,
  Y as De,
  f as be,
  c0 as Ee,
  c1 as Rt,
  t as at,
  c2 as Nt,
  J as Bt,
  c3 as Ot,
  c4 as zt,
  c5 as It,
  c6 as Ft,
  c7 as Mt,
  aa as Lt,
  c8 as Ve,
  c9 as jt,
  aR as Ut,
  af as qe,
  ca as $t,
  cb as Wt,
  A as Ke,
  cc as Ht,
  bB as Zt,
  z as st,
  E as Vt,
  b9 as Xt,
  bt as Gt,
  l as it,
  m as ot,
  cd as qt,
  a5 as Ie,
  ce as Ue,
  k as Kt,
  a4 as Jt,
  h as Yt,
  b as Qt,
} from './index-dfb446be.js';
import { _ as er } from './plugin-vueexport-helper-c27b6911.js';
const gt = Symbol('uploadContextKey'),
  tr = 'ElUpload';
class rr extends Error {
  constructor(G, P, R, T) {
    super(G), (this.name = 'UploadAjaxError'), (this.status = P), (this.method = R), (this.url = T);
  }
}
function lt(Z, G, P) {
  let R;
  return (
    P.response
      ? (R = `${P.response.error || P.response}`)
      : P.responseText
      ? (R = `${P.responseText}`)
      : (R = `fail to ${G.method} ${Z} ${P.status}`),
    new rr(R, P.status, G.method, Z)
  );
}
function nr(Z) {
  const G = Z.responseText || Z.response;
  if (!G) return G;
  try {
    return JSON.parse(G);
  } catch (P) {
    return G;
  }
}
const ar = (Z) => {
    typeof XMLHttpRequest == 'undefined' && Qe(tr, 'XMLHttpRequest is undefined');
    const G = new XMLHttpRequest(),
      P = Z.action;
    G.upload &&
      G.upload.addEventListener('progress', (_) => {
        const y = _;
        (y.percent = _.total > 0 ? (_.loaded / _.total) * 100 : 0), Z.onProgress(y);
      });
    const R = new FormData();
    if (Z.data)
      for (const [_, y] of Object.entries(Z.data))
        Array.isArray(y) ? R.append(_, ...y) : R.append(_, y);
    R.append(Z.filename, Z.file, Z.file.name),
      G.addEventListener('error', () => {
        Z.onError(lt(P, Z, G));
      }),
      G.addEventListener('load', () => {
        if (G.status < 200 || G.status >= 300) return Z.onError(lt(P, Z, G));
        Z.onSuccess(nr(G));
      }),
      G.open(Z.method, P, !0),
      Z.withCredentials && 'withCredentials' in G && (G.withCredentials = !0);
    const T = Z.headers || {};
    if (T instanceof Headers) T.forEach((_, y) => G.setRequestHeader(y, _));
    else for (const [_, y] of Object.entries(T)) pt(y) || G.setRequestHeader(_, String(y));
    return G.send(R), G;
  },
  bt = ['text', 'picture', 'picture-card'];
let sr = 1;
const Je = () => Date.now() + sr++,
  yt = Me({
    action: { type: String, default: '#' },
    headers: { type: ue(Object) },
    method: { type: String, default: 'post' },
    data: { type: Object, default: () => Ge({}) },
    multiple: { type: Boolean, default: !1 },
    name: { type: String, default: 'file' },
    drag: { type: Boolean, default: !1 },
    withCredentials: Boolean,
    showFileList: { type: Boolean, default: !0 },
    accept: { type: String, default: '' },
    type: { type: String, default: 'select' },
    fileList: { type: ue(Array), default: () => Ge([]) },
    autoUpload: { type: Boolean, default: !0 },
    listType: { type: String, values: bt, default: 'text' },
    httpRequest: { type: ue(Function), default: ar },
    disabled: Boolean,
    limit: Number,
  }),
  ir = Me(
    Te(Ce({}, yt), {
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
  or = Me({
    files: { type: ue(Array), default: () => Ge([]) },
    disabled: { type: Boolean, default: !1 },
    handlePreview: { type: ue(Function), default: me },
    listType: { type: String, values: bt, default: 'text' },
  }),
  lr = { remove: (Z) => !!Z },
  cr = ['onKeydown'],
  ur = ['src'],
  dr = ['onClick'],
  hr = ['onClick'],
  fr = ['onClick'],
  pr = xe({ name: 'ElUploadList' }),
  mr = xe(
    Te(Ce({}, pr), {
      props: or,
      emits: lr,
      setup(Z, { emit: G }) {
        const { t: P } = Tt(),
          R = Fe('upload'),
          T = Fe('icon'),
          _ = Fe('list'),
          y = He(),
          e = Ze(!1),
          n = (i) => {
            G('remove', i);
          };
        return (i, b) => (
          ce(),
          Ae(
            Lt,
            {
              tag: 'ul',
              class: de([q(R).b('list'), q(R).bm('list', i.listType), q(R).is('disabled', q(y))]),
              name: q(_).b(),
            },
            {
              default: ge(() => [
                (ce(!0),
                _e(
                  Et,
                  null,
                  Dt(
                    i.files,
                    (g) => (
                      ce(),
                      _e(
                        'li',
                        {
                          key: g.uid || g.name,
                          class: de([
                            q(R).be('list', 'item'),
                            q(R).is(g.status),
                            { focusing: e.value },
                          ]),
                          tabindex: '0',
                          onKeydown: mt((r) => !q(y) && n(g), ['delete']),
                          onFocus: b[0] || (b[0] = (r) => (e.value = !0)),
                          onBlur: b[1] || (b[1] = (r) => (e.value = !1)),
                          onClick: b[2] || (b[2] = (r) => (e.value = !1)),
                        },
                        [
                          ye(i.$slots, 'default', { file: g }, () => [
                            i.listType === 'picture' ||
                            (g.status !== 'uploading' && i.listType === 'picture-card')
                              ? (ce(),
                                _e(
                                  'img',
                                  {
                                    key: 0,
                                    class: de(q(R).be('list', 'item-thumbnail')),
                                    src: g.url,
                                    alt: '',
                                  },
                                  null,
                                  10,
                                  ur,
                                ))
                              : he('v-if', !0),
                            g.status === 'uploading' || i.listType !== 'picture-card'
                              ? (ce(),
                                _e(
                                  'div',
                                  { key: 1, class: de(q(R).be('list', 'item-info')) },
                                  [
                                    ze(
                                      'a',
                                      {
                                        class: de(q(R).be('list', 'item-name')),
                                        onClick: De((r) => i.handlePreview(g), ['prevent']),
                                      },
                                      [
                                        be(
                                          q(Ee),
                                          { class: de(q(T).m('document')) },
                                          { default: ge(() => [be(q(Rt))]), _: 1 },
                                          8,
                                          ['class'],
                                        ),
                                        ze(
                                          'span',
                                          { class: de(q(R).be('list', 'item-file-name')) },
                                          at(g.name),
                                          3,
                                        ),
                                      ],
                                      10,
                                      dr,
                                    ),
                                    g.status === 'uploading'
                                      ? (ce(),
                                        Ae(
                                          q(Nt),
                                          {
                                            key: 0,
                                            type: i.listType === 'picture-card' ? 'circle' : 'line',
                                            'stroke-width': i.listType === 'picture-card' ? 6 : 2,
                                            percentage: Number(g.percentage),
                                            style: Bt(
                                              i.listType === 'picture-card'
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
                              { class: de(q(R).be('list', 'item-status-label')) },
                              [
                                i.listType === 'text'
                                  ? (ce(),
                                    Ae(
                                      q(Ee),
                                      {
                                        key: 0,
                                        class: de([
                                          q(T).m('upload-success'),
                                          q(T).m('circle-check'),
                                        ]),
                                      },
                                      { default: ge(() => [be(q(Ot))]), _: 1 },
                                      8,
                                      ['class'],
                                    ))
                                  : ['picture-card', 'picture'].includes(i.listType)
                                  ? (ce(),
                                    Ae(
                                      q(Ee),
                                      {
                                        key: 1,
                                        class: de([q(T).m('upload-success'), q(T).m('check')]),
                                      },
                                      { default: ge(() => [be(q(zt))]), _: 1 },
                                      8,
                                      ['class'],
                                    ))
                                  : he('v-if', !0),
                              ],
                              2,
                            ),
                            q(y)
                              ? he('v-if', !0)
                              : (ce(),
                                Ae(
                                  q(Ee),
                                  { key: 2, class: de(q(T).m('close')), onClick: (r) => n(g) },
                                  { default: ge(() => [be(q(It))]), _: 2 },
                                  1032,
                                  ['class', 'onClick'],
                                )),
                            he(
                              ' Due to close btn only appears when li gets focused disappears after li gets blurred, thus keyboard navigation can never reach close btn',
                            ),
                            he(' This is a bug which needs to be fixed '),
                            he(' TODO: Fix the incorrect navigation interaction '),
                            q(y)
                              ? he('v-if', !0)
                              : (ce(),
                                _e(
                                  'i',
                                  { key: 3, class: de(q(T).m('close-tip')) },
                                  at(q(P)('el.upload.deleteTip')),
                                  3,
                                )),
                            i.listType === 'picture-card'
                              ? (ce(),
                                _e(
                                  'span',
                                  { key: 4, class: de(q(R).be('list', 'item-actions')) },
                                  [
                                    ze(
                                      'span',
                                      {
                                        class: de(q(R).be('list', 'item-preview')),
                                        onClick: (r) => i.handlePreview(g),
                                      },
                                      [
                                        be(
                                          q(Ee),
                                          { class: de(q(T).m('zoom-in')) },
                                          { default: ge(() => [be(q(Ft))]), _: 1 },
                                          8,
                                          ['class'],
                                        ),
                                      ],
                                      10,
                                      hr,
                                    ),
                                    q(y)
                                      ? he('v-if', !0)
                                      : (ce(),
                                        _e(
                                          'span',
                                          {
                                            key: 0,
                                            class: de(q(R).be('list', 'item-delete')),
                                            onClick: (r) => n(g),
                                          },
                                          [
                                            be(
                                              q(Ee),
                                              { class: de(q(T).m('delete')) },
                                              { default: ge(() => [be(q(Mt))]), _: 1 },
                                              8,
                                              ['class'],
                                            ),
                                          ],
                                          10,
                                          fr,
                                        )),
                                  ],
                                  2,
                                ))
                              : he('v-if', !0),
                          ]),
                        ],
                        42,
                        cr,
                      )
                    ),
                  ),
                  128,
                )),
                ye(i.$slots, 'append'),
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
var ct = Ve(mr, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-list.vue',
  ],
]);
const gr = Me({ disabled: { type: Boolean, default: !1 } }),
  br = { file: (Z) => jt(Z) },
  yr = ['onDrop', 'onDragover'],
  vt = 'ElUploadDrag',
  vr = xe({ name: vt }),
  _r = xe(
    Te(Ce({}, vr), {
      props: gr,
      emits: br,
      setup(Z, { emit: G }) {
        const P = Ut(gt);
        P || Qe(vt, 'usage: <el-upload><el-upload-dragger /></el-upload>');
        const R = Fe('upload'),
          T = Ze(!1),
          _ = He(),
          y = (n) => {
            if (_.value) return;
            (T.value = !1), n.stopPropagation();
            const i = Array.from(n.dataTransfer.files),
              b = P.accept.value;
            if (!b) {
              G('file', i);
              return;
            }
            const g = i.filter((r) => {
              const { type: o, name: m } = r,
                c = m.includes('.') ? `.${m.split('.').pop()}` : '',
                h = o.replace(/\/.*$/, '');
              return b
                .split(',')
                .map((d) => d.trim())
                .filter((d) => d)
                .some((d) =>
                  d.startsWith('.')
                    ? c === d
                    : /\/\*$/.test(d)
                    ? h === d.replace(/\/\*$/, '')
                    : /^[^/]+\/[^/]+$/.test(d)
                    ? o === d
                    : !1,
                );
            });
            G('file', g);
          },
          e = () => {
            _.value || (T.value = !0);
          };
        return (n, i) => (
          ce(),
          _e(
            'div',
            {
              class: de([q(R).b('dragger'), q(R).is('dragover', T.value)]),
              onDrop: De(y, ['prevent']),
              onDragover: De(e, ['prevent']),
              onDragleave: i[0] || (i[0] = De((b) => (T.value = !1), ['prevent'])),
            },
            [ye(n.$slots, 'default')],
            42,
            yr,
          )
        );
      },
    }),
  );
var kr = Ve(_r, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-dragger.vue',
  ],
]);
const wr = Me(
    Te(Ce({}, yt), {
      beforeUpload: { type: ue(Function), default: me },
      onRemove: { type: ue(Function), default: me },
      onStart: { type: ue(Function), default: me },
      onSuccess: { type: ue(Function), default: me },
      onProgress: { type: ue(Function), default: me },
      onError: { type: ue(Function), default: me },
      onExceed: { type: ue(Function), default: me },
    }),
  ),
  Pr = ['onKeydown'],
  xr = ['name', 'multiple', 'accept'],
  Sr = xe({ name: 'ElUploadContent', inheritAttrs: !1 }),
  Ar = xe(
    Te(Ce({}, Sr), {
      props: wr,
      setup(Z, { expose: G }) {
        const P = Z,
          R = Fe('upload'),
          T = He(),
          _ = qe({}),
          y = qe(),
          e = (m) => {
            if (m.length === 0) return;
            const {
              autoUpload: c,
              limit: h,
              fileList: d,
              multiple: v,
              onStart: x,
              onExceed: E,
            } = P;
            if (h && d.length + m.length > h) {
              E(m, d);
              return;
            }
            v || (m = m.slice(0, 1));
            for (const l of m) {
              const a = l;
              (a.uid = Je()), x(a), c && n(a);
            }
          },
          n = (m) =>
            Oe(this, null, function* () {
              if (((y.value.value = ''), !P.beforeUpload)) return i(m);
              let c;
              try {
                c = yield P.beforeUpload(m);
              } catch (d) {
                c = !1;
              }
              if (c === !1) {
                P.onRemove(m);
                return;
              }
              let h = m;
              c instanceof Blob &&
                (c instanceof File ? (h = c) : (h = new File([c], m.name, { type: m.type }))),
                i(Object.assign(h, { uid: m.uid }));
            }),
          i = (m) => {
            const {
                headers: c,
                data: h,
                method: d,
                withCredentials: v,
                name: x,
                action: E,
                onProgress: l,
                onSuccess: a,
                onError: t,
                httpRequest: s,
              } = P,
              { uid: p } = m,
              w = {
                headers: c || {},
                withCredentials: v,
                file: m,
                data: h,
                method: d,
                filename: x,
                action: E,
                onProgress: (k) => {
                  l(k, m);
                },
                onSuccess: (k) => {
                  a(k, m), delete _.value[p];
                },
                onError: (k) => {
                  t(k, m), delete _.value[p];
                },
              },
              D = s(w);
            (_.value[p] = D), D instanceof Promise && D.then(w.onSuccess, w.onError);
          },
          b = (m) => {
            const c = m.target.files;
            c && e(Array.from(c));
          },
          g = () => {
            T.value || ((y.value.value = ''), y.value.click());
          },
          r = () => {
            g();
          };
        return (
          G({
            abort: (m) => {
              $t(_.value)
                .filter(m ? ([h]) => String(m.uid) === h : () => !0)
                .forEach(([h, d]) => {
                  d instanceof XMLHttpRequest && d.abort(), delete _.value[h];
                });
            },
            upload: n,
          }),
          (m, c) => (
            ce(),
            _e(
              'div',
              {
                class: de([q(R).b(), q(R).m(m.listType), q(R).is('drag', m.drag)]),
                tabindex: '0',
                onClick: g,
                onKeydown: mt(De(r, ['self']), ['enter', 'space']),
              },
              [
                m.drag
                  ? (ce(),
                    Ae(
                      kr,
                      { key: 0, disabled: q(T), onFile: e },
                      { default: ge(() => [ye(m.$slots, 'default')]), _: 3 },
                      8,
                      ['disabled'],
                    ))
                  : ye(m.$slots, 'default', { key: 1 }),
                ze(
                  'input',
                  {
                    ref_key: 'inputRef',
                    ref: y,
                    class: de(q(R).e('input')),
                    name: m.name,
                    multiple: m.multiple,
                    accept: m.accept,
                    type: 'file',
                    onChange: b,
                    onClick: c[0] || (c[0] = De(() => {}, ['stop'])),
                  },
                  null,
                  42,
                  xr,
                ),
              ],
              42,
              Pr,
            )
          )
        );
      },
    }),
  );
var ut = Ve(Ar, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-content.vue',
  ],
]);
const dt = 'ElUpload',
  Cr = (Z) => {
    var G;
    (G = Z.url) != null && G.startsWith('blob:') && URL.revokeObjectURL(Z.url);
  },
  Tr = (Z, G) => {
    const P = Wt(Z, 'fileList', void 0, { passive: !0 }),
      R = (r) => P.value.find((o) => o.uid === r.uid);
    function T(r) {
      var o;
      (o = G.value) == null || o.abort(r);
    }
    function _(r = ['ready', 'uploading', 'success', 'fail']) {
      P.value = P.value.filter((o) => !r.includes(o.status));
    }
    const y = (r, o) => {
        const m = R(o);
        m &&
          (console.error(r),
          (m.status = 'fail'),
          P.value.splice(P.value.indexOf(m), 1),
          Z.onError(r, m, P.value),
          Z.onChange(m, P.value));
      },
      e = (r, o) => {
        const m = R(o);
        m &&
          (Z.onProgress(r, m, P.value),
          (m.status = 'uploading'),
          (m.percentage = Math.round(r.percent)));
      },
      n = (r, o) => {
        const m = R(o);
        m &&
          ((m.status = 'success'),
          (m.response = r),
          Z.onSuccess(r, m, P.value),
          Z.onChange(m, P.value));
      },
      i = (r) => {
        pt(r.uid) && (r.uid = Je());
        const o = {
          name: r.name,
          percentage: 0,
          status: 'ready',
          size: r.size,
          raw: r,
          uid: r.uid,
        };
        if (Z.listType === 'picture-card' || Z.listType === 'picture')
          try {
            o.url = URL.createObjectURL(r);
          } catch (m) {
            Ht(dt, m.message), Z.onError(m, o, P.value);
          }
        (P.value = [...P.value, o]), Z.onChange(o, P.value);
      },
      b = (r) =>
        Oe(void 0, null, function* () {
          const o = r instanceof File ? R(r) : r;
          o || Qe(dt, 'file to be removed not found');
          const m = (c) => {
            T(c);
            const h = P.value;
            h.splice(h.indexOf(c), 1), Z.onRemove(c, h), Cr(c);
          };
          Z.beforeRemove ? (yield Z.beforeRemove(o, P.value)) !== !1 && m(o) : m(o);
        });
    function g() {
      P.value
        .filter(({ status: r }) => r === 'ready')
        .forEach(({ raw: r }) => {
          var o;
          return r && ((o = G.value) == null ? void 0 : o.upload(r));
        });
    }
    return (
      Ke(
        () => Z.listType,
        (r) => {
          (r !== 'picture-card' && r !== 'picture') ||
            (P.value = P.value.map((o) => {
              const { raw: m, url: c } = o;
              if (!c && m)
                try {
                  o.url = URL.createObjectURL(m);
                } catch (h) {
                  Z.onError(h, o, P.value);
                }
              return o;
            }));
        },
      ),
      Ke(
        P,
        (r) => {
          for (const o of r) o.uid || (o.uid = Je()), o.status || (o.status = 'success');
        },
        { immediate: !0, deep: !0 },
      ),
      {
        uploadFiles: P,
        abort: T,
        clearFiles: _,
        handleError: y,
        handleProgress: e,
        handleStart: i,
        handleSuccess: n,
        handleRemove: b,
        submit: g,
      }
    );
  },
  Er = xe({ name: 'ElUpload' }),
  Dr = xe(
    Te(Ce({}, Er), {
      props: ir,
      setup(Z, { expose: G }) {
        const P = Z,
          R = Zt(),
          T = He(),
          _ = qe(),
          {
            abort: y,
            submit: e,
            clearFiles: n,
            uploadFiles: i,
            handleStart: b,
            handleError: g,
            handleRemove: r,
            handleSuccess: o,
            handleProgress: m,
          } = Tr(P, _),
          c = st(() => P.listType === 'picture-card'),
          h = st(() =>
            Te(Ce({}, P), {
              fileList: i.value,
              onStart: b,
              onProgress: m,
              onSuccess: o,
              onError: g,
              onRemove: r,
            }),
          );
        return (
          Vt(() => {
            i.value.forEach(({ url: d }) => {
              d != null && d.startsWith('blob:') && URL.revokeObjectURL(d);
            });
          }),
          Xt(gt, { accept: Gt(P, 'accept') }),
          G({ abort: y, submit: e, clearFiles: n, handleStart: b, handleRemove: r }),
          (d, v) => (
            ce(),
            _e('div', null, [
              q(c) && d.showFileList
                ? (ce(),
                  Ae(
                    ct,
                    {
                      key: 0,
                      disabled: q(T),
                      'list-type': d.listType,
                      files: q(i),
                      'handle-preview': d.onPreview,
                      onRemove: q(r),
                    },
                    it(
                      {
                        append: ge(() => [
                          be(
                            ut,
                            ot({ ref_key: 'uploadRef', ref: _ }, q(h)),
                            {
                              default: ge(() => [
                                q(R).trigger ? ye(d.$slots, 'trigger', { key: 0 }) : he('v-if', !0),
                                !q(R).trigger && q(R).default
                                  ? ye(d.$slots, 'default', { key: 1 })
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
                        d.$slots.file
                          ? {
                              name: 'default',
                              fn: ge(({ file: x }) => [ye(d.$slots, 'file', { file: x })]),
                            }
                          : void 0,
                      ],
                    ),
                    1032,
                    ['disabled', 'list-type', 'files', 'handle-preview', 'onRemove'],
                  ))
                : he('v-if', !0),
              !q(c) || (q(c) && !d.showFileList)
                ? (ce(),
                  Ae(
                    ut,
                    ot({ key: 1, ref_key: 'uploadRef', ref: _ }, q(h)),
                    {
                      default: ge(() => [
                        q(R).trigger ? ye(d.$slots, 'trigger', { key: 0 }) : he('v-if', !0),
                        !q(R).trigger && q(R).default
                          ? ye(d.$slots, 'default', { key: 1 })
                          : he('v-if', !0),
                      ]),
                      _: 3,
                    },
                    16,
                  ))
                : he('v-if', !0),
              d.$slots.trigger ? ye(d.$slots, 'default', { key: 2 }) : he('v-if', !0),
              ye(d.$slots, 'tip'),
              !q(c) && d.showFileList
                ? (ce(),
                  Ae(
                    ct,
                    {
                      key: 3,
                      disabled: q(T),
                      'list-type': d.listType,
                      files: q(i),
                      'handle-preview': d.onPreview,
                      onRemove: q(r),
                    },
                    it({ _: 2 }, [
                      d.$slots.file
                        ? {
                            name: 'default',
                            fn: ge(({ file: x }) => [ye(d.$slots, 'file', { file: x })]),
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
var Rr = Ve(Dr, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload.vue',
  ],
]);
const Nr = qt(Rr);
var ht = {},
  Br = {
    get exports() {
      return ht;
    },
    set exports(Z) {
      ht = Z;
    },
  },
  Ye = {},
  Or = {
    get exports() {
      return Ye;
    },
    set exports(Z) {
      Ye = Z;
    },
  };
(function (Z, G) {
  (function (P, R) {
    Z.exports = R();
  })(Ie, function () {
    return (function (P) {
      var R = {};
      function T(_) {
        if (R[_]) return R[_].exports;
        var y = (R[_] = { i: _, l: !1, exports: {} });
        return P[_].call(y.exports, y, y.exports, T), (y.l = !0), y.exports;
      }
      return (
        (T.m = P),
        (T.c = R),
        (T.d = function (_, y, e) {
          T.o(_, y) || Object.defineProperty(_, y, { enumerable: !0, get: e });
        }),
        (T.r = function (_) {
          typeof Symbol != 'undefined' &&
            Symbol.toStringTag &&
            Object.defineProperty(_, Symbol.toStringTag, { value: 'Module' }),
            Object.defineProperty(_, '__esModule', { value: !0 });
        }),
        (T.t = function (_, y) {
          if ((1 & y && (_ = T(_)), 8 & y || (4 & y && typeof _ == 'object' && _ && _.__esModule)))
            return _;
          var e = Object.create(null);
          if (
            (T.r(e),
            Object.defineProperty(e, 'default', { enumerable: !0, value: _ }),
            2 & y && typeof _ != 'string')
          )
            for (var n in _)
              T.d(
                e,
                n,
                function (i) {
                  return _[i];
                }.bind(null, n),
              );
          return e;
        }),
        (T.n = function (_) {
          var y =
            _ && _.__esModule
              ? function () {
                  return _.default;
                }
              : function () {
                  return _;
                };
          return T.d(y, 'a', y), y;
        }),
        (T.o = function (_, y) {
          return Object.prototype.hasOwnProperty.call(_, y);
        }),
        (T.p = ''),
        T((T.s = 0))
      );
    })([
      function (P, R, T) {
        var _;
        function y(a) {
          return ['image/png', 'image/jpeg', 'image/gif'].some((t) => t === a);
        }
        T.r(R),
          T.d(R, 'canvastoDataURL', function () {
            return n;
          }),
          T.d(R, 'canvastoFile', function () {
            return i;
          }),
          T.d(R, 'dataURLtoFile', function () {
            return g;
          }),
          T.d(R, 'dataURLtoImage', function () {
            return r;
          }),
          T.d(R, 'downloadFile', function () {
            return o;
          }),
          T.d(R, 'filetoDataURL', function () {
            return m;
          }),
          T.d(R, 'imagetoCanvas', function () {
            return h;
          }),
          T.d(R, 'urltoBlob', function () {
            return d;
          }),
          T.d(R, 'urltoImage', function () {
            return v;
          }),
          T.d(R, 'compress', function () {
            return E;
          }),
          T.d(R, 'compressAccurately', function () {
            return l;
          }),
          T.d(R, 'EImageType', function () {
            return _;
          }),
          (function (a) {
            (a.PNG = 'image/png'), (a.JPEG = 'image/jpeg'), (a.GIF = 'image/gif');
          })(_ || (_ = {}));
        var e = function (a, t, s, p) {
          return new (s || (s = Promise))(function (w, D) {
            function k(B) {
              try {
                u(p.next(B));
              } catch (j) {
                D(j);
              }
            }
            function A(B) {
              try {
                u(p.throw(B));
              } catch (j) {
                D(j);
              }
            }
            function u(B) {
              var j;
              B.done
                ? w(B.value)
                : ((j = B.value),
                  j instanceof s
                    ? j
                    : new s(function (M) {
                        M(j);
                      })).then(k, A);
            }
            u((p = p.apply(a, t || [])).next());
          });
        };
        function n(a, t = 0.92, s = _.JPEG) {
          return e(this, void 0, void 0, function* () {
            return y(s) || (s = _.JPEG), a.toDataURL(s, t);
          });
        }
        function i(a, t = 0.92, s = _.JPEG) {
          return new Promise((p) => a.toBlob((w) => p(w), s, t));
        }
        var b = function (a, t, s, p) {
          return new (s || (s = Promise))(function (w, D) {
            function k(B) {
              try {
                u(p.next(B));
              } catch (j) {
                D(j);
              }
            }
            function A(B) {
              try {
                u(p.throw(B));
              } catch (j) {
                D(j);
              }
            }
            function u(B) {
              var j;
              B.done
                ? w(B.value)
                : ((j = B.value),
                  j instanceof s
                    ? j
                    : new s(function (M) {
                        M(j);
                      })).then(k, A);
            }
            u((p = p.apply(a, t || [])).next());
          });
        };
        function g(a, t) {
          return b(this, void 0, void 0, function* () {
            const s = a.split(',');
            let p = s[0].match(/:(.*?);/)[1];
            const w = atob(s[1]);
            let D = w.length;
            const k = new Uint8Array(D);
            for (; D--; ) k[D] = w.charCodeAt(D);
            return y(t) && (p = t), new Blob([k], { type: p });
          });
        }
        function r(a) {
          return new Promise((t, s) => {
            const p = new Image();
            (p.onload = () => t(p)),
              (p.onerror = () => s(new Error('dataURLtoImage(): dataURL is illegal'))),
              (p.src = a);
          });
        }
        function o(a, t) {
          const s = document.createElement('a');
          (s.href = window.URL.createObjectURL(a)),
            (s.download = t || Date.now().toString(36)),
            document.body.appendChild(s);
          const p = document.createEvent('MouseEvents');
          p.initEvent('click', !1, !1), s.dispatchEvent(p), document.body.removeChild(s);
        }
        function m(a) {
          return new Promise((t) => {
            const s = new FileReader();
            (s.onloadend = (p) => t(p.target.result)), s.readAsDataURL(a);
          });
        }
        var c = function (a, t, s, p) {
          return new (s || (s = Promise))(function (w, D) {
            function k(B) {
              try {
                u(p.next(B));
              } catch (j) {
                D(j);
              }
            }
            function A(B) {
              try {
                u(p.throw(B));
              } catch (j) {
                D(j);
              }
            }
            function u(B) {
              var j;
              B.done
                ? w(B.value)
                : ((j = B.value),
                  j instanceof s
                    ? j
                    : new s(function (M) {
                        M(j);
                      })).then(k, A);
            }
            u((p = p.apply(a, t || [])).next());
          });
        };
        function h(a, t = {}) {
          return c(this, void 0, void 0, function* () {
            const s = Object.assign({}, t),
              p = document.createElement('canvas'),
              w = p.getContext('2d');
            let D, k;
            for (const A in s) Object.prototype.hasOwnProperty.call(s, A) && (s[A] = Number(s[A]));
            if (s.scale) {
              const A = s.scale > 0 && s.scale < 10 ? s.scale : 1;
              (k = a.width * A), (D = a.height * A);
            } else (k = s.width || (s.height * a.width) / a.height || a.width), (D = s.height || (s.width * a.height) / a.width || a.height);
            switch (
              ([5, 6, 7, 8].some((A) => A === s.orientation)
                ? ((p.height = k), (p.width = D))
                : ((p.height = D), (p.width = k)),
              s.orientation)
            ) {
              case 3:
                w.rotate((180 * Math.PI) / 180),
                  w.drawImage(a, -p.width, -p.height, p.width, p.height);
                break;
              case 6:
                w.rotate((90 * Math.PI) / 180), w.drawImage(a, 0, -p.width, p.height, p.width);
                break;
              case 8:
                w.rotate((270 * Math.PI) / 180), w.drawImage(a, -p.height, 0, p.height, p.width);
                break;
              case 2:
                w.translate(p.width, 0), w.scale(-1, 1), w.drawImage(a, 0, 0, p.width, p.height);
                break;
              case 4:
                w.translate(p.width, 0),
                  w.scale(-1, 1),
                  w.rotate((180 * Math.PI) / 180),
                  w.drawImage(a, -p.width, -p.height, p.width, p.height);
                break;
              case 5:
                w.translate(p.width, 0),
                  w.scale(-1, 1),
                  w.rotate((90 * Math.PI) / 180),
                  w.drawImage(a, 0, -p.width, p.height, p.width);
                break;
              case 7:
                w.translate(p.width, 0),
                  w.scale(-1, 1),
                  w.rotate((270 * Math.PI) / 180),
                  w.drawImage(a, -p.height, 0, p.height, p.width);
                break;
              default:
                w.drawImage(a, 0, 0, p.width, p.height);
            }
            return p;
          });
        }
        function d(a) {
          return fetch(a).then((t) => t.blob());
        }
        function v(a) {
          return new Promise((t, s) => {
            const p = new Image();
            (p.onload = () => t(p)),
              (p.onerror = () =>
                s(new Error('urltoImage(): Image failed to load, please check the image URL'))),
              (p.src = a);
          });
        }
        var x = function (a, t, s, p) {
          return new (s || (s = Promise))(function (w, D) {
            function k(B) {
              try {
                u(p.next(B));
              } catch (j) {
                D(j);
              }
            }
            function A(B) {
              try {
                u(p.throw(B));
              } catch (j) {
                D(j);
              }
            }
            function u(B) {
              var j;
              B.done
                ? w(B.value)
                : ((j = B.value),
                  j instanceof s
                    ? j
                    : new s(function (M) {
                        M(j);
                      })).then(k, A);
            }
            u((p = p.apply(a, t || [])).next());
          });
        };
        function E(a, t = {}) {
          return x(this, void 0, void 0, function* () {
            if (!(a instanceof Blob))
              throw new Error('compress(): First arg must be a Blob object or a File object.');
            if (
              (typeof t != 'object' && (t = Object.assign({ quality: t })),
              (t.quality = Number(t.quality)),
              Number.isNaN(t.quality))
            )
              return a;
            const s = yield m(a);
            let p = s.split(',')[0].match(/:(.*?);/)[1],
              w = _.JPEG;
            y(t.type) && ((w = t.type), (p = t.type));
            const D = yield r(s),
              k = yield h(D, Object.assign({}, t)),
              A = yield n(k, t.quality, w),
              u = yield g(A, p);
            return u.size > a.size ? a : u;
          });
        }
        function l(a, t = {}) {
          return x(this, void 0, void 0, function* () {
            if (!(a instanceof Blob))
              throw new Error(
                'compressAccurately(): First arg must be a Blob object or a File object.',
              );
            if (
              (typeof t != 'object' && (t = Object.assign({ size: t })),
              (t.size = Number(t.size)),
              Number.isNaN(t.size) || 1024 * t.size > a.size)
            )
              return a;
            (t.accuracy = Number(t.accuracy)),
              (!t.accuracy || t.accuracy < 0.8 || t.accuracy > 0.99) && (t.accuracy = 0.95);
            const s = t.size * (2 - t.accuracy) * 1024,
              p = 1024 * t.size,
              w = t.size * t.accuracy * 1024,
              D = yield m(a);
            let k = D.split(',')[0].match(/:(.*?);/)[1],
              A = _.JPEG;
            y(t.type) && ((A = t.type), (k = t.type));
            const u = yield r(D),
              B = yield h(u, Object.assign({}, t));
            let j,
              M = 0.5;
            const Y = [null, null];
            for (let Q = 1; Q <= 7; Q++) {
              j = yield n(B, M, A);
              const I = 0.75 * j.length;
              if (Q === 7) {
                (s < I || w > I) &&
                  (j = [j, ...Y]
                    .filter((z) => z)
                    .sort(
                      (z, ee) => Math.abs(0.75 * z.length - p) - Math.abs(0.75 * ee.length - p),
                    )[0]);
                break;
              }
              if (s < I) (Y[1] = j), (M -= Math.pow(0.5, Q + 1));
              else {
                if (!(w > I)) break;
                (Y[0] = j), (M += Math.pow(0.5, Q + 1));
              }
            }
            const $ = yield g(j, k);
            return $.size > a.size ? a : $;
          });
        }
      },
    ]);
  });
})(Or);
(function (Z) {
  Z.exports = Ye;
})(Br);
function zr(Z) {
  return new Promise(function (G) {
    const P = new FileReader();
    P.readAsArrayBuffer(Z),
      (P.onload = function () {
        G(this.result);
      });
  });
}
var $e = {},
  Ir = {
    get exports() {
      return $e;
    },
    set exports(Z) {
      $e = Z;
    },
  },
  We = {},
  Fr = {
    get exports() {
      return We;
    },
    set exports(Z) {
      We = Z;
    },
  };
/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/ var ft;
function Mr() {
  return (
    ft ||
      ((ft = 1),
      (function (Z, G) {
        (function (P) {
          Z.exports = P();
        })(function () {
          return (function P(R, T, _) {
            function y(i, b) {
              if (!T[i]) {
                if (!R[i]) {
                  var g = typeof Ue == 'function' && Ue;
                  if (!b && g) return g(i, !0);
                  if (e) return e(i, !0);
                  var r = new Error("Cannot find module '" + i + "'");
                  throw ((r.code = 'MODULE_NOT_FOUND'), r);
                }
                var o = (T[i] = { exports: {} });
                R[i][0].call(
                  o.exports,
                  function (m) {
                    var c = R[i][1][m];
                    return y(c || m);
                  },
                  o,
                  o.exports,
                  P,
                  R,
                  T,
                  _,
                );
              }
              return T[i].exports;
            }
            for (var e = typeof Ue == 'function' && Ue, n = 0; n < _.length; n++) y(_[n]);
            return y;
          })(
            {
              1: [
                function (P, R, T) {
                  var _ = P('./utils'),
                    y = P('./support'),
                    e = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
                  (T.encode = function (n) {
                    for (
                      var i,
                        b,
                        g,
                        r,
                        o,
                        m,
                        c,
                        h = [],
                        d = 0,
                        v = n.length,
                        x = v,
                        E = _.getTypeOf(n) !== 'string';
                      d < n.length;

                    )
                      (x = v - d),
                        (g = E
                          ? ((i = n[d++]), (b = d < v ? n[d++] : 0), d < v ? n[d++] : 0)
                          : ((i = n.charCodeAt(d++)),
                            (b = d < v ? n.charCodeAt(d++) : 0),
                            d < v ? n.charCodeAt(d++) : 0)),
                        (r = i >> 2),
                        (o = ((3 & i) << 4) | (b >> 4)),
                        (m = 1 < x ? ((15 & b) << 2) | (g >> 6) : 64),
                        (c = 2 < x ? 63 & g : 64),
                        h.push(e.charAt(r) + e.charAt(o) + e.charAt(m) + e.charAt(c));
                    return h.join('');
                  }),
                    (T.decode = function (n) {
                      var i,
                        b,
                        g,
                        r,
                        o,
                        m,
                        c = 0,
                        h = 0,
                        d = 'data:';
                      if (n.substr(0, d.length) === d)
                        throw new Error('Invalid base64 input, it looks like a data url.');
                      var v,
                        x = (3 * (n = n.replace(/[^A-Za-z0-9+/=]/g, '')).length) / 4;
                      if (
                        (n.charAt(n.length - 1) === e.charAt(64) && x--,
                        n.charAt(n.length - 2) === e.charAt(64) && x--,
                        x % 1 != 0)
                      )
                        throw new Error('Invalid base64 input, bad content length.');
                      for (
                        v = y.uint8array ? new Uint8Array(0 | x) : new Array(0 | x);
                        c < n.length;

                      )
                        (i =
                          (e.indexOf(n.charAt(c++)) << 2) | ((r = e.indexOf(n.charAt(c++))) >> 4)),
                          (b = ((15 & r) << 4) | ((o = e.indexOf(n.charAt(c++))) >> 2)),
                          (g = ((3 & o) << 6) | (m = e.indexOf(n.charAt(c++)))),
                          (v[h++] = i),
                          o !== 64 && (v[h++] = b),
                          m !== 64 && (v[h++] = g);
                      return v;
                    });
                },
                { './support': 30, './utils': 32 },
              ],
              2: [
                function (P, R, T) {
                  var _ = P('./external'),
                    y = P('./stream/DataWorker'),
                    e = P('./stream/Crc32Probe'),
                    n = P('./stream/DataLengthProbe');
                  function i(b, g, r, o, m) {
                    (this.compressedSize = b),
                      (this.uncompressedSize = g),
                      (this.crc32 = r),
                      (this.compression = o),
                      (this.compressedContent = m);
                  }
                  (i.prototype = {
                    getContentWorker: function () {
                      var b = new y(_.Promise.resolve(this.compressedContent))
                          .pipe(this.compression.uncompressWorker())
                          .pipe(new n('data_length')),
                        g = this;
                      return (
                        b.on('end', function () {
                          if (this.streamInfo.data_length !== g.uncompressedSize)
                            throw new Error('Bug : uncompressed data size mismatch');
                        }),
                        b
                      );
                    },
                    getCompressedWorker: function () {
                      return new y(_.Promise.resolve(this.compressedContent))
                        .withStreamInfo('compressedSize', this.compressedSize)
                        .withStreamInfo('uncompressedSize', this.uncompressedSize)
                        .withStreamInfo('crc32', this.crc32)
                        .withStreamInfo('compression', this.compression);
                    },
                  }),
                    (i.createWorkerFrom = function (b, g, r) {
                      return b
                        .pipe(new e())
                        .pipe(new n('uncompressedSize'))
                        .pipe(g.compressWorker(r))
                        .pipe(new n('compressedSize'))
                        .withStreamInfo('compression', g);
                    }),
                    (R.exports = i);
                },
                {
                  './external': 6,
                  './stream/Crc32Probe': 25,
                  './stream/DataLengthProbe': 26,
                  './stream/DataWorker': 27,
                },
              ],
              3: [
                function (P, R, T) {
                  var _ = P('./stream/GenericWorker');
                  (T.STORE = {
                    magic: '\0\0',
                    compressWorker: function () {
                      return new _('STORE compression');
                    },
                    uncompressWorker: function () {
                      return new _('STORE decompression');
                    },
                  }),
                    (T.DEFLATE = P('./flate'));
                },
                { './flate': 7, './stream/GenericWorker': 28 },
              ],
              4: [
                function (P, R, T) {
                  var _ = P('./utils'),
                    y = (function () {
                      for (var e, n = [], i = 0; i < 256; i++) {
                        e = i;
                        for (var b = 0; b < 8; b++) e = 1 & e ? 3988292384 ^ (e >>> 1) : e >>> 1;
                        n[i] = e;
                      }
                      return n;
                    })();
                  R.exports = function (e, n) {
                    return e !== void 0 && e.length
                      ? _.getTypeOf(e) !== 'string'
                        ? (function (i, b, g, r) {
                            var o = y,
                              m = r + g;
                            i ^= -1;
                            for (var c = r; c < m; c++) i = (i >>> 8) ^ o[255 & (i ^ b[c])];
                            return -1 ^ i;
                          })(0 | n, e, e.length, 0)
                        : (function (i, b, g, r) {
                            var o = y,
                              m = r + g;
                            i ^= -1;
                            for (var c = r; c < m; c++)
                              i = (i >>> 8) ^ o[255 & (i ^ b.charCodeAt(c))];
                            return -1 ^ i;
                          })(0 | n, e, e.length, 0)
                      : 0;
                  };
                },
                { './utils': 32 },
              ],
              5: [
                function (P, R, T) {
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
                function (P, R, T) {
                  var _ = null;
                  (_ = typeof Promise != 'undefined' ? Promise : P('lie')),
                    (R.exports = { Promise: _ });
                },
                { lie: 37 },
              ],
              7: [
                function (P, R, T) {
                  var _ =
                      typeof Uint8Array != 'undefined' &&
                      typeof Uint16Array != 'undefined' &&
                      typeof Uint32Array != 'undefined',
                    y = P('pako'),
                    e = P('./utils'),
                    n = P('./stream/GenericWorker'),
                    i = _ ? 'uint8array' : 'array';
                  function b(g, r) {
                    n.call(this, 'FlateWorker/' + g),
                      (this._pako = null),
                      (this._pakoAction = g),
                      (this._pakoOptions = r),
                      (this.meta = {});
                  }
                  (T.magic = '\b\0'),
                    e.inherits(b, n),
                    (b.prototype.processChunk = function (g) {
                      (this.meta = g.meta),
                        this._pako === null && this._createPako(),
                        this._pako.push(e.transformTo(i, g.data), !1);
                    }),
                    (b.prototype.flush = function () {
                      n.prototype.flush.call(this),
                        this._pako === null && this._createPako(),
                        this._pako.push([], !0);
                    }),
                    (b.prototype.cleanUp = function () {
                      n.prototype.cleanUp.call(this), (this._pako = null);
                    }),
                    (b.prototype._createPako = function () {
                      this._pako = new y[this._pakoAction]({
                        raw: !0,
                        level: this._pakoOptions.level || -1,
                      });
                      var g = this;
                      this._pako.onData = function (r) {
                        g.push({ data: r, meta: g.meta });
                      };
                    }),
                    (T.compressWorker = function (g) {
                      return new b('Deflate', g);
                    }),
                    (T.uncompressWorker = function () {
                      return new b('Inflate', {});
                    });
                },
                { './stream/GenericWorker': 28, './utils': 32, pako: 38 },
              ],
              8: [
                function (P, R, T) {
                  function _(o, m) {
                    var c,
                      h = '';
                    for (c = 0; c < m; c++) (h += String.fromCharCode(255 & o)), (o >>>= 8);
                    return h;
                  }
                  function y(o, m, c, h, d, v) {
                    var x,
                      E,
                      l = o.file,
                      a = o.compression,
                      t = v !== i.utf8encode,
                      s = e.transformTo('string', v(l.name)),
                      p = e.transformTo('string', i.utf8encode(l.name)),
                      w = l.comment,
                      D = e.transformTo('string', v(w)),
                      k = e.transformTo('string', i.utf8encode(w)),
                      A = p.length !== l.name.length,
                      u = k.length !== w.length,
                      B = '',
                      j = '',
                      M = '',
                      Y = l.dir,
                      $ = l.date,
                      Q = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
                    (m && !c) ||
                      ((Q.crc32 = o.crc32),
                      (Q.compressedSize = o.compressedSize),
                      (Q.uncompressedSize = o.uncompressedSize));
                    var I = 0;
                    m && (I |= 8), t || (!A && !u) || (I |= 2048);
                    var z = 0,
                      ee = 0;
                    Y && (z |= 16),
                      d === 'UNIX'
                        ? ((ee = 798),
                          (z |= (function (X, ie) {
                            var pe = X;
                            return X || (pe = ie ? 16893 : 33204), (65535 & pe) << 16;
                          })(l.unixPermissions, Y)))
                        : ((ee = 20),
                          (z |= (function (X) {
                            return 63 & (X || 0);
                          })(l.dosPermissions))),
                      (x = $.getUTCHours()),
                      (x <<= 6),
                      (x |= $.getUTCMinutes()),
                      (x <<= 5),
                      (x |= $.getUTCSeconds() / 2),
                      (E = $.getUTCFullYear() - 1980),
                      (E <<= 4),
                      (E |= $.getUTCMonth() + 1),
                      (E <<= 5),
                      (E |= $.getUTCDate()),
                      A && ((j = _(1, 1) + _(b(s), 4) + p), (B += 'up' + _(j.length, 2) + j)),
                      u && ((M = _(1, 1) + _(b(D), 4) + k), (B += 'uc' + _(M.length, 2) + M));
                    var K = '';
                    return (
                      (K += `
\0`),
                      (K += _(I, 2)),
                      (K += a.magic),
                      (K += _(x, 2)),
                      (K += _(E, 2)),
                      (K += _(Q.crc32, 4)),
                      (K += _(Q.compressedSize, 4)),
                      (K += _(Q.uncompressedSize, 4)),
                      (K += _(s.length, 2)),
                      (K += _(B.length, 2)),
                      {
                        fileRecord: g.LOCAL_FILE_HEADER + K + s + B,
                        dirRecord:
                          g.CENTRAL_FILE_HEADER +
                          _(ee, 2) +
                          K +
                          _(D.length, 2) +
                          '\0\0\0\0' +
                          _(z, 4) +
                          _(h, 4) +
                          s +
                          B +
                          D,
                      }
                    );
                  }
                  var e = P('../utils'),
                    n = P('../stream/GenericWorker'),
                    i = P('../utf8'),
                    b = P('../crc32'),
                    g = P('../signature');
                  function r(o, m, c, h) {
                    n.call(this, 'ZipFileWorker'),
                      (this.bytesWritten = 0),
                      (this.zipComment = m),
                      (this.zipPlatform = c),
                      (this.encodeFileName = h),
                      (this.streamFiles = o),
                      (this.accumulate = !1),
                      (this.contentBuffer = []),
                      (this.dirRecords = []),
                      (this.currentSourceOffset = 0),
                      (this.entriesCount = 0),
                      (this.currentFile = null),
                      (this._sources = []);
                  }
                  e.inherits(r, n),
                    (r.prototype.push = function (o) {
                      var m = o.meta.percent || 0,
                        c = this.entriesCount,
                        h = this._sources.length;
                      this.accumulate
                        ? this.contentBuffer.push(o)
                        : ((this.bytesWritten += o.data.length),
                          n.prototype.push.call(this, {
                            data: o.data,
                            meta: {
                              currentFile: this.currentFile,
                              percent: c ? (m + 100 * (c - h - 1)) / c : 100,
                            },
                          }));
                    }),
                    (r.prototype.openedSource = function (o) {
                      (this.currentSourceOffset = this.bytesWritten),
                        (this.currentFile = o.file.name);
                      var m = this.streamFiles && !o.file.dir;
                      if (m) {
                        var c = y(
                          o,
                          m,
                          !1,
                          this.currentSourceOffset,
                          this.zipPlatform,
                          this.encodeFileName,
                        );
                        this.push({ data: c.fileRecord, meta: { percent: 0 } });
                      } else this.accumulate = !0;
                    }),
                    (r.prototype.closedSource = function (o) {
                      this.accumulate = !1;
                      var m = this.streamFiles && !o.file.dir,
                        c = y(
                          o,
                          m,
                          !0,
                          this.currentSourceOffset,
                          this.zipPlatform,
                          this.encodeFileName,
                        );
                      if ((this.dirRecords.push(c.dirRecord), m))
                        this.push({
                          data: (function (h) {
                            return (
                              g.DATA_DESCRIPTOR +
                              _(h.crc32, 4) +
                              _(h.compressedSize, 4) +
                              _(h.uncompressedSize, 4)
                            );
                          })(o),
                          meta: { percent: 100 },
                        });
                      else
                        for (
                          this.push({ data: c.fileRecord, meta: { percent: 0 } });
                          this.contentBuffer.length;

                        )
                          this.push(this.contentBuffer.shift());
                      this.currentFile = null;
                    }),
                    (r.prototype.flush = function () {
                      for (var o = this.bytesWritten, m = 0; m < this.dirRecords.length; m++)
                        this.push({ data: this.dirRecords[m], meta: { percent: 100 } });
                      var c = this.bytesWritten - o,
                        h = (function (d, v, x, E, l) {
                          var a = e.transformTo('string', l(E));
                          return (
                            g.CENTRAL_DIRECTORY_END +
                            '\0\0\0\0' +
                            _(d, 2) +
                            _(d, 2) +
                            _(v, 4) +
                            _(x, 4) +
                            _(a.length, 2) +
                            a
                          );
                        })(this.dirRecords.length, c, o, this.zipComment, this.encodeFileName);
                      this.push({ data: h, meta: { percent: 100 } });
                    }),
                    (r.prototype.prepareNextSource = function () {
                      (this.previous = this._sources.shift()),
                        this.openedSource(this.previous.streamInfo),
                        this.isPaused ? this.previous.pause() : this.previous.resume();
                    }),
                    (r.prototype.registerPrevious = function (o) {
                      this._sources.push(o);
                      var m = this;
                      return (
                        o.on('data', function (c) {
                          m.processChunk(c);
                        }),
                        o.on('end', function () {
                          m.closedSource(m.previous.streamInfo),
                            m._sources.length ? m.prepareNextSource() : m.end();
                        }),
                        o.on('error', function (c) {
                          m.error(c);
                        }),
                        this
                      );
                    }),
                    (r.prototype.resume = function () {
                      return (
                        !!n.prototype.resume.call(this) &&
                        (!this.previous && this._sources.length
                          ? (this.prepareNextSource(), !0)
                          : this.previous || this._sources.length || this.generatedError
                          ? void 0
                          : (this.end(), !0))
                      );
                    }),
                    (r.prototype.error = function (o) {
                      var m = this._sources;
                      if (!n.prototype.error.call(this, o)) return !1;
                      for (var c = 0; c < m.length; c++)
                        try {
                          m[c].error(o);
                        } catch (h) {}
                      return !0;
                    }),
                    (r.prototype.lock = function () {
                      n.prototype.lock.call(this);
                      for (var o = this._sources, m = 0; m < o.length; m++) o[m].lock();
                    }),
                    (R.exports = r);
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
                function (P, R, T) {
                  var _ = P('../compressions'),
                    y = P('./ZipFileWorker');
                  T.generateWorker = function (e, n, i) {
                    var b = new y(n.streamFiles, i, n.platform, n.encodeFileName),
                      g = 0;
                    try {
                      e.forEach(function (r, o) {
                        g++;
                        var m = (function (v, x) {
                            var E = v || x,
                              l = _[E];
                            if (!l) throw new Error(E + ' is not a valid compression method !');
                            return l;
                          })(o.options.compression, n.compression),
                          c = o.options.compressionOptions || n.compressionOptions || {},
                          h = o.dir,
                          d = o.date;
                        o._compressWorker(m, c)
                          .withStreamInfo('file', {
                            name: r,
                            dir: h,
                            date: d,
                            comment: o.comment || '',
                            unixPermissions: o.unixPermissions,
                            dosPermissions: o.dosPermissions,
                          })
                          .pipe(b);
                      }),
                        (b.entriesCount = g);
                    } catch (r) {
                      b.error(r);
                    }
                    return b;
                  };
                },
                { '../compressions': 3, './ZipFileWorker': 8 },
              ],
              10: [
                function (P, R, T) {
                  function _() {
                    if (!(this instanceof _)) return new _();
                    if (arguments.length)
                      throw new Error(
                        'The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.',
                      );
                    (this.files = Object.create(null)),
                      (this.comment = null),
                      (this.root = ''),
                      (this.clone = function () {
                        var y = new _();
                        for (var e in this) typeof this[e] != 'function' && (y[e] = this[e]);
                        return y;
                      });
                  }
                  ((_.prototype = P('./object')).loadAsync = P('./load')),
                    (_.support = P('./support')),
                    (_.defaults = P('./defaults')),
                    (_.version = '3.10.1'),
                    (_.loadAsync = function (y, e) {
                      return new _().loadAsync(y, e);
                    }),
                    (_.external = P('./external')),
                    (R.exports = _);
                },
                { './defaults': 5, './external': 6, './load': 11, './object': 15, './support': 30 },
              ],
              11: [
                function (P, R, T) {
                  var _ = P('./utils'),
                    y = P('./external'),
                    e = P('./utf8'),
                    n = P('./zipEntries'),
                    i = P('./stream/Crc32Probe'),
                    b = P('./nodejsUtils');
                  function g(r) {
                    return new y.Promise(function (o, m) {
                      var c = r.decompressed.getContentWorker().pipe(new i());
                      c.on('error', function (h) {
                        m(h);
                      })
                        .on('end', function () {
                          c.streamInfo.crc32 !== r.decompressed.crc32
                            ? m(new Error('Corrupted zip : CRC32 mismatch'))
                            : o();
                        })
                        .resume();
                    });
                  }
                  R.exports = function (r, o) {
                    var m = this;
                    return (
                      (o = _.extend(o || {}, {
                        base64: !1,
                        checkCRC32: !1,
                        optimizedBinaryString: !1,
                        createFolders: !1,
                        decodeFileName: e.utf8decode,
                      })),
                      b.isNode && b.isStream(r)
                        ? y.Promise.reject(
                            new Error("JSZip can't accept a stream when loading a zip file."),
                          )
                        : _.prepareContent(
                            'the loaded zip file',
                            r,
                            !0,
                            o.optimizedBinaryString,
                            o.base64,
                          )
                            .then(function (c) {
                              var h = new n(o);
                              return h.load(c), h;
                            })
                            .then(function (c) {
                              var h = [y.Promise.resolve(c)],
                                d = c.files;
                              if (o.checkCRC32) for (var v = 0; v < d.length; v++) h.push(g(d[v]));
                              return y.Promise.all(h);
                            })
                            .then(function (c) {
                              for (var h = c.shift(), d = h.files, v = 0; v < d.length; v++) {
                                var x = d[v],
                                  E = x.fileNameStr,
                                  l = _.resolve(x.fileNameStr);
                                m.file(l, x.decompressed, {
                                  binary: !0,
                                  optimizedBinaryString: !0,
                                  date: x.date,
                                  dir: x.dir,
                                  comment: x.fileCommentStr.length ? x.fileCommentStr : null,
                                  unixPermissions: x.unixPermissions,
                                  dosPermissions: x.dosPermissions,
                                  createFolders: o.createFolders,
                                }),
                                  x.dir || (m.file(l).unsafeOriginalName = E);
                              }
                              return h.zipComment.length && (m.comment = h.zipComment), m;
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
                function (P, R, T) {
                  var _ = P('../utils'),
                    y = P('../stream/GenericWorker');
                  function e(n, i) {
                    y.call(this, 'Nodejs stream input adapter for ' + n),
                      (this._upstreamEnded = !1),
                      this._bindStream(i);
                  }
                  _.inherits(e, y),
                    (e.prototype._bindStream = function (n) {
                      var i = this;
                      (this._stream = n).pause(),
                        n
                          .on('data', function (b) {
                            i.push({ data: b, meta: { percent: 0 } });
                          })
                          .on('error', function (b) {
                            i.isPaused ? (this.generatedError = b) : i.error(b);
                          })
                          .on('end', function () {
                            i.isPaused ? (i._upstreamEnded = !0) : i.end();
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
                function (P, R, T) {
                  var _ = P('readable-stream').Readable;
                  function y(e, n, i) {
                    _.call(this, n), (this._helper = e);
                    var b = this;
                    e.on('data', function (g, r) {
                      b.push(g) || b._helper.pause(), i && i(r);
                    })
                      .on('error', function (g) {
                        b.emit('error', g);
                      })
                      .on('end', function () {
                        b.push(null);
                      });
                  }
                  P('../utils').inherits(y, _),
                    (y.prototype._read = function () {
                      this._helper.resume();
                    }),
                    (R.exports = y);
                },
                { '../utils': 32, 'readable-stream': 16 },
              ],
              14: [
                function (P, R, T) {
                  R.exports = {
                    isNode: typeof Buffer != 'undefined',
                    newBufferFrom: function (_, y) {
                      if (Buffer.from && Buffer.from !== Uint8Array.from) return Buffer.from(_, y);
                      if (typeof _ == 'number')
                        throw new Error('The "data" argument must not be a number');
                      return new Buffer(_, y);
                    },
                    allocBuffer: function (_) {
                      if (Buffer.alloc) return Buffer.alloc(_);
                      var y = new Buffer(_);
                      return y.fill(0), y;
                    },
                    isBuffer: function (_) {
                      return Buffer.isBuffer(_);
                    },
                    isStream: function (_) {
                      return (
                        _ &&
                        typeof _.on == 'function' &&
                        typeof _.pause == 'function' &&
                        typeof _.resume == 'function'
                      );
                    },
                  };
                },
                {},
              ],
              15: [
                function (P, R, T) {
                  function _(l, a, t) {
                    var s,
                      p = e.getTypeOf(a),
                      w = e.extend(t || {}, b);
                    (w.date = w.date || new Date()),
                      w.compression !== null && (w.compression = w.compression.toUpperCase()),
                      typeof w.unixPermissions == 'string' &&
                        (w.unixPermissions = parseInt(w.unixPermissions, 8)),
                      w.unixPermissions && 16384 & w.unixPermissions && (w.dir = !0),
                      w.dosPermissions && 16 & w.dosPermissions && (w.dir = !0),
                      w.dir && (l = d(l)),
                      w.createFolders && (s = h(l)) && v.call(this, s, !0);
                    var D = p === 'string' && w.binary === !1 && w.base64 === !1;
                    (t && t.binary !== void 0) || (w.binary = !D),
                      ((a instanceof g && a.uncompressedSize === 0) ||
                        w.dir ||
                        !a ||
                        a.length === 0) &&
                        ((w.base64 = !1),
                        (w.binary = !0),
                        (a = ''),
                        (w.compression = 'STORE'),
                        (p = 'string'));
                    var k = null;
                    k =
                      a instanceof g || a instanceof n
                        ? a
                        : m.isNode && m.isStream(a)
                        ? new c(l, a)
                        : e.prepareContent(l, a, w.binary, w.optimizedBinaryString, w.base64);
                    var A = new r(l, k, w);
                    this.files[l] = A;
                  }
                  var y = P('./utf8'),
                    e = P('./utils'),
                    n = P('./stream/GenericWorker'),
                    i = P('./stream/StreamHelper'),
                    b = P('./defaults'),
                    g = P('./compressedObject'),
                    r = P('./zipObject'),
                    o = P('./generate'),
                    m = P('./nodejsUtils'),
                    c = P('./nodejs/NodejsStreamInputAdapter'),
                    h = function (l) {
                      l.slice(-1) === '/' && (l = l.substring(0, l.length - 1));
                      var a = l.lastIndexOf('/');
                      return 0 < a ? l.substring(0, a) : '';
                    },
                    d = function (l) {
                      return l.slice(-1) !== '/' && (l += '/'), l;
                    },
                    v = function (l, a) {
                      return (
                        (a = a !== void 0 ? a : b.createFolders),
                        (l = d(l)),
                        this.files[l] || _.call(this, l, null, { dir: !0, createFolders: a }),
                        this.files[l]
                      );
                    };
                  function x(l) {
                    return Object.prototype.toString.call(l) === '[object RegExp]';
                  }
                  var E = {
                    load: function () {
                      throw new Error(
                        'This method has been removed in JSZip 3.0, please check the upgrade guide.',
                      );
                    },
                    forEach: function (l) {
                      var a, t, s;
                      for (a in this.files)
                        (s = this.files[a]),
                          (t = a.slice(this.root.length, a.length)) &&
                            a.slice(0, this.root.length) === this.root &&
                            l(t, s);
                    },
                    filter: function (l) {
                      var a = [];
                      return (
                        this.forEach(function (t, s) {
                          l(t, s) && a.push(s);
                        }),
                        a
                      );
                    },
                    file: function (l, a, t) {
                      if (arguments.length !== 1)
                        return (l = this.root + l), _.call(this, l, a, t), this;
                      if (x(l)) {
                        var s = l;
                        return this.filter(function (w, D) {
                          return !D.dir && s.test(w);
                        });
                      }
                      var p = this.files[this.root + l];
                      return p && !p.dir ? p : null;
                    },
                    folder: function (l) {
                      if (!l) return this;
                      if (x(l))
                        return this.filter(function (p, w) {
                          return w.dir && l.test(p);
                        });
                      var a = this.root + l,
                        t = v.call(this, a),
                        s = this.clone();
                      return (s.root = t.name), s;
                    },
                    remove: function (l) {
                      l = this.root + l;
                      var a = this.files[l];
                      if (
                        (a || (l.slice(-1) !== '/' && (l += '/'), (a = this.files[l])), a && !a.dir)
                      )
                        delete this.files[l];
                      else
                        for (
                          var t = this.filter(function (p, w) {
                              return w.name.slice(0, l.length) === l;
                            }),
                            s = 0;
                          s < t.length;
                          s++
                        )
                          delete this.files[t[s].name];
                      return this;
                    },
                    generate: function () {
                      throw new Error(
                        'This method has been removed in JSZip 3.0, please check the upgrade guide.',
                      );
                    },
                    generateInternalStream: function (l) {
                      var a,
                        t = {};
                      try {
                        if (
                          (((t = e.extend(l || {}, {
                            streamFiles: !1,
                            compression: 'STORE',
                            compressionOptions: null,
                            type: '',
                            platform: 'DOS',
                            comment: null,
                            mimeType: 'application/zip',
                            encodeFileName: y.utf8encode,
                          })).type = t.type.toLowerCase()),
                          (t.compression = t.compression.toUpperCase()),
                          t.type === 'binarystring' && (t.type = 'string'),
                          !t.type)
                        )
                          throw new Error('No output type specified.');
                        e.checkSupport(t.type),
                          (t.platform !== 'darwin' &&
                            t.platform !== 'freebsd' &&
                            t.platform !== 'linux' &&
                            t.platform !== 'sunos') ||
                            (t.platform = 'UNIX'),
                          t.platform === 'win32' && (t.platform = 'DOS');
                        var s = t.comment || this.comment || '';
                        a = o.generateWorker(this, t, s);
                      } catch (p) {
                        (a = new n('error')).error(p);
                      }
                      return new i(a, t.type || 'string', t.mimeType);
                    },
                    generateAsync: function (l, a) {
                      return this.generateInternalStream(l).accumulate(a);
                    },
                    generateNodeStream: function (l, a) {
                      return (
                        (l = l || {}).type || (l.type = 'nodebuffer'),
                        this.generateInternalStream(l).toNodejsStream(a)
                      );
                    },
                  };
                  R.exports = E;
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
                function (P, R, T) {
                  R.exports = P('stream');
                },
                { stream: void 0 },
              ],
              17: [
                function (P, R, T) {
                  var _ = P('./DataReader');
                  function y(e) {
                    _.call(this, e);
                    for (var n = 0; n < this.data.length; n++) e[n] = 255 & e[n];
                  }
                  P('../utils').inherits(y, _),
                    (y.prototype.byteAt = function (e) {
                      return this.data[this.zero + e];
                    }),
                    (y.prototype.lastIndexOfSignature = function (e) {
                      for (
                        var n = e.charCodeAt(0),
                          i = e.charCodeAt(1),
                          b = e.charCodeAt(2),
                          g = e.charCodeAt(3),
                          r = this.length - 4;
                        0 <= r;
                        --r
                      )
                        if (
                          this.data[r] === n &&
                          this.data[r + 1] === i &&
                          this.data[r + 2] === b &&
                          this.data[r + 3] === g
                        )
                          return r - this.zero;
                      return -1;
                    }),
                    (y.prototype.readAndCheckSignature = function (e) {
                      var n = e.charCodeAt(0),
                        i = e.charCodeAt(1),
                        b = e.charCodeAt(2),
                        g = e.charCodeAt(3),
                        r = this.readData(4);
                      return n === r[0] && i === r[1] && b === r[2] && g === r[3];
                    }),
                    (y.prototype.readData = function (e) {
                      if ((this.checkOffset(e), e === 0)) return [];
                      var n = this.data.slice(this.zero + this.index, this.zero + this.index + e);
                      return (this.index += e), n;
                    }),
                    (R.exports = y);
                },
                { '../utils': 32, './DataReader': 18 },
              ],
              18: [
                function (P, R, T) {
                  var _ = P('../utils');
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
                      var n,
                        i = 0;
                      for (this.checkOffset(e), n = this.index + e - 1; n >= this.index; n--)
                        i = (i << 8) + this.byteAt(n);
                      return (this.index += e), i;
                    },
                    readString: function (e) {
                      return _.transformTo('string', this.readData(e));
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
                function (P, R, T) {
                  var _ = P('./Uint8ArrayReader');
                  function y(e) {
                    _.call(this, e);
                  }
                  P('../utils').inherits(y, _),
                    (y.prototype.readData = function (e) {
                      this.checkOffset(e);
                      var n = this.data.slice(this.zero + this.index, this.zero + this.index + e);
                      return (this.index += e), n;
                    }),
                    (R.exports = y);
                },
                { '../utils': 32, './Uint8ArrayReader': 21 },
              ],
              20: [
                function (P, R, T) {
                  var _ = P('./DataReader');
                  function y(e) {
                    _.call(this, e);
                  }
                  P('../utils').inherits(y, _),
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
                      var n = this.data.slice(this.zero + this.index, this.zero + this.index + e);
                      return (this.index += e), n;
                    }),
                    (R.exports = y);
                },
                { '../utils': 32, './DataReader': 18 },
              ],
              21: [
                function (P, R, T) {
                  var _ = P('./ArrayReader');
                  function y(e) {
                    _.call(this, e);
                  }
                  P('../utils').inherits(y, _),
                    (y.prototype.readData = function (e) {
                      if ((this.checkOffset(e), e === 0)) return new Uint8Array(0);
                      var n = this.data.subarray(
                        this.zero + this.index,
                        this.zero + this.index + e,
                      );
                      return (this.index += e), n;
                    }),
                    (R.exports = y);
                },
                { '../utils': 32, './ArrayReader': 17 },
              ],
              22: [
                function (P, R, T) {
                  var _ = P('../utils'),
                    y = P('../support'),
                    e = P('./ArrayReader'),
                    n = P('./StringReader'),
                    i = P('./NodeBufferReader'),
                    b = P('./Uint8ArrayReader');
                  R.exports = function (g) {
                    var r = _.getTypeOf(g);
                    return (
                      _.checkSupport(r),
                      r !== 'string' || y.uint8array
                        ? r === 'nodebuffer'
                          ? new i(g)
                          : y.uint8array
                          ? new b(_.transformTo('uint8array', g))
                          : new e(_.transformTo('array', g))
                        : new n(g)
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
                function (P, R, T) {
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
                function (P, R, T) {
                  var _ = P('./GenericWorker'),
                    y = P('../utils');
                  function e(n) {
                    _.call(this, 'ConvertWorker to ' + n), (this.destType = n);
                  }
                  y.inherits(e, _),
                    (e.prototype.processChunk = function (n) {
                      this.push({ data: y.transformTo(this.destType, n.data), meta: n.meta });
                    }),
                    (R.exports = e);
                },
                { '../utils': 32, './GenericWorker': 28 },
              ],
              25: [
                function (P, R, T) {
                  var _ = P('./GenericWorker'),
                    y = P('../crc32');
                  function e() {
                    _.call(this, 'Crc32Probe'), this.withStreamInfo('crc32', 0);
                  }
                  P('../utils').inherits(e, _),
                    (e.prototype.processChunk = function (n) {
                      (this.streamInfo.crc32 = y(n.data, this.streamInfo.crc32 || 0)), this.push(n);
                    }),
                    (R.exports = e);
                },
                { '../crc32': 4, '../utils': 32, './GenericWorker': 28 },
              ],
              26: [
                function (P, R, T) {
                  var _ = P('../utils'),
                    y = P('./GenericWorker');
                  function e(n) {
                    y.call(this, 'DataLengthProbe for ' + n),
                      (this.propName = n),
                      this.withStreamInfo(n, 0);
                  }
                  _.inherits(e, y),
                    (e.prototype.processChunk = function (n) {
                      if (n) {
                        var i = this.streamInfo[this.propName] || 0;
                        this.streamInfo[this.propName] = i + n.data.length;
                      }
                      y.prototype.processChunk.call(this, n);
                    }),
                    (R.exports = e);
                },
                { '../utils': 32, './GenericWorker': 28 },
              ],
              27: [
                function (P, R, T) {
                  var _ = P('../utils'),
                    y = P('./GenericWorker');
                  function e(n) {
                    y.call(this, 'DataWorker');
                    var i = this;
                    (this.dataIsReady = !1),
                      (this.index = 0),
                      (this.max = 0),
                      (this.data = null),
                      (this.type = ''),
                      (this._tickScheduled = !1),
                      n.then(
                        function (b) {
                          (i.dataIsReady = !0),
                            (i.data = b),
                            (i.max = (b && b.length) || 0),
                            (i.type = _.getTypeOf(b)),
                            i.isPaused || i._tickAndRepeat();
                        },
                        function (b) {
                          i.error(b);
                        },
                      );
                  }
                  _.inherits(e, y),
                    (e.prototype.cleanUp = function () {
                      y.prototype.cleanUp.call(this), (this.data = null);
                    }),
                    (e.prototype.resume = function () {
                      return (
                        !!y.prototype.resume.call(this) &&
                        (!this._tickScheduled &&
                          this.dataIsReady &&
                          ((this._tickScheduled = !0), _.delay(this._tickAndRepeat, [], this)),
                        !0)
                      );
                    }),
                    (e.prototype._tickAndRepeat = function () {
                      (this._tickScheduled = !1),
                        this.isPaused ||
                          this.isFinished ||
                          (this._tick(),
                          this.isFinished ||
                            (_.delay(this._tickAndRepeat, [], this), (this._tickScheduled = !0)));
                    }),
                    (e.prototype._tick = function () {
                      if (this.isPaused || this.isFinished) return !1;
                      var n = null,
                        i = Math.min(this.max, this.index + 16384);
                      if (this.index >= this.max) return this.end();
                      switch (this.type) {
                        case 'string':
                          n = this.data.substring(this.index, i);
                          break;
                        case 'uint8array':
                          n = this.data.subarray(this.index, i);
                          break;
                        case 'array':
                        case 'nodebuffer':
                          n = this.data.slice(this.index, i);
                      }
                      return (
                        (this.index = i),
                        this.push({
                          data: n,
                          meta: { percent: this.max ? (this.index / this.max) * 100 : 0 },
                        })
                      );
                    }),
                    (R.exports = e);
                },
                { '../utils': 32, './GenericWorker': 28 },
              ],
              28: [
                function (P, R, T) {
                  function _(y) {
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
                  (_.prototype = {
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
                        for (var n = 0; n < this._listeners[y].length; n++)
                          this._listeners[y][n].call(this, e);
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
                        y.on('data', function (n) {
                          e.processChunk(n);
                        }),
                        y.on('end', function () {
                          e.end();
                        }),
                        y.on('error', function (n) {
                          e.error(n);
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
                    (R.exports = _);
                },
                {},
              ],
              29: [
                function (P, R, T) {
                  var _ = P('../utils'),
                    y = P('./ConvertWorker'),
                    e = P('./GenericWorker'),
                    n = P('../base64'),
                    i = P('../support'),
                    b = P('../external'),
                    g = null;
                  if (i.nodestream)
                    try {
                      g = P('../nodejs/NodejsStreamOutputAdapter');
                    } catch (m) {}
                  function r(m, c) {
                    return new b.Promise(function (h, d) {
                      var v = [],
                        x = m._internalType,
                        E = m._outputType,
                        l = m._mimeType;
                      m.on('data', function (a, t) {
                        v.push(a), c && c(t);
                      })
                        .on('error', function (a) {
                          (v = []), d(a);
                        })
                        .on('end', function () {
                          try {
                            var a = (function (t, s, p) {
                              switch (t) {
                                case 'blob':
                                  return _.newBlob(_.transformTo('arraybuffer', s), p);
                                case 'base64':
                                  return n.encode(s);
                                default:
                                  return _.transformTo(t, s);
                              }
                            })(
                              E,
                              (function (t, s) {
                                var p,
                                  w = 0,
                                  D = null,
                                  k = 0;
                                for (p = 0; p < s.length; p++) k += s[p].length;
                                switch (t) {
                                  case 'string':
                                    return s.join('');
                                  case 'array':
                                    return Array.prototype.concat.apply([], s);
                                  case 'uint8array':
                                    for (D = new Uint8Array(k), p = 0; p < s.length; p++)
                                      D.set(s[p], w), (w += s[p].length);
                                    return D;
                                  case 'nodebuffer':
                                    return Buffer.concat(s);
                                  default:
                                    throw new Error("concat : unsupported type '" + t + "'");
                                }
                              })(x, v),
                              l,
                            );
                            h(a);
                          } catch (t) {
                            d(t);
                          }
                          v = [];
                        })
                        .resume();
                    });
                  }
                  function o(m, c, h) {
                    var d = c;
                    switch (c) {
                      case 'blob':
                      case 'arraybuffer':
                        d = 'uint8array';
                        break;
                      case 'base64':
                        d = 'string';
                    }
                    try {
                      (this._internalType = d),
                        (this._outputType = c),
                        (this._mimeType = h),
                        _.checkSupport(d),
                        (this._worker = m.pipe(new y(d))),
                        m.lock();
                    } catch (v) {
                      (this._worker = new e('error')), this._worker.error(v);
                    }
                  }
                  (o.prototype = {
                    accumulate: function (m) {
                      return r(this, m);
                    },
                    on: function (m, c) {
                      var h = this;
                      return (
                        m === 'data'
                          ? this._worker.on(m, function (d) {
                              c.call(h, d.data, d.meta);
                            })
                          : this._worker.on(m, function () {
                              _.delay(c, arguments, h);
                            }),
                        this
                      );
                    },
                    resume: function () {
                      return _.delay(this._worker.resume, [], this._worker), this;
                    },
                    pause: function () {
                      return this._worker.pause(), this;
                    },
                    toNodejsStream: function (m) {
                      if ((_.checkSupport('nodestream'), this._outputType !== 'nodebuffer'))
                        throw new Error(this._outputType + ' is not supported by this method');
                      return new g(this, { objectMode: this._outputType !== 'nodebuffer' }, m);
                    },
                  }),
                    (R.exports = o);
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
                function (P, R, T) {
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
                    var _ = new ArrayBuffer(0);
                    try {
                      T.blob = new Blob([_], { type: 'application/zip' }).size === 0;
                    } catch (e) {
                      try {
                        var y = new (self.BlobBuilder ||
                          self.WebKitBlobBuilder ||
                          self.MozBlobBuilder ||
                          self.MSBlobBuilder)();
                        y.append(_), (T.blob = y.getBlob('application/zip').size === 0);
                      } catch (n) {
                        T.blob = !1;
                      }
                    }
                  }
                  try {
                    T.nodestream = !!P('readable-stream').Readable;
                  } catch (e) {
                    T.nodestream = !1;
                  }
                },
                { 'readable-stream': 16 },
              ],
              31: [
                function (P, R, T) {
                  for (
                    var _ = P('./utils'),
                      y = P('./support'),
                      e = P('./nodejsUtils'),
                      n = P('./stream/GenericWorker'),
                      i = new Array(256),
                      b = 0;
                    b < 256;
                    b++
                  )
                    i[b] =
                      252 <= b ? 6 : 248 <= b ? 5 : 240 <= b ? 4 : 224 <= b ? 3 : 192 <= b ? 2 : 1;
                  i[254] = i[254] = 1;
                  function g() {
                    n.call(this, 'utf-8 decode'), (this.leftOver = null);
                  }
                  function r() {
                    n.call(this, 'utf-8 encode');
                  }
                  (T.utf8encode = function (o) {
                    return y.nodebuffer
                      ? e.newBufferFrom(o, 'utf-8')
                      : (function (m) {
                          var c,
                            h,
                            d,
                            v,
                            x,
                            E = m.length,
                            l = 0;
                          for (v = 0; v < E; v++)
                            (64512 & (h = m.charCodeAt(v))) == 55296 &&
                              v + 1 < E &&
                              (64512 & (d = m.charCodeAt(v + 1))) == 56320 &&
                              ((h = 65536 + ((h - 55296) << 10) + (d - 56320)), v++),
                              (l += h < 128 ? 1 : h < 2048 ? 2 : h < 65536 ? 3 : 4);
                          for (
                            c = y.uint8array ? new Uint8Array(l) : new Array(l), v = x = 0;
                            x < l;
                            v++
                          )
                            (64512 & (h = m.charCodeAt(v))) == 55296 &&
                              v + 1 < E &&
                              (64512 & (d = m.charCodeAt(v + 1))) == 56320 &&
                              ((h = 65536 + ((h - 55296) << 10) + (d - 56320)), v++),
                              h < 128
                                ? (c[x++] = h)
                                : (h < 2048
                                    ? (c[x++] = 192 | (h >>> 6))
                                    : (h < 65536
                                        ? (c[x++] = 224 | (h >>> 12))
                                        : ((c[x++] = 240 | (h >>> 18)),
                                          (c[x++] = 128 | ((h >>> 12) & 63))),
                                      (c[x++] = 128 | ((h >>> 6) & 63))),
                                  (c[x++] = 128 | (63 & h)));
                          return c;
                        })(o);
                  }),
                    (T.utf8decode = function (o) {
                      return y.nodebuffer
                        ? _.transformTo('nodebuffer', o).toString('utf-8')
                        : (function (m) {
                            var c,
                              h,
                              d,
                              v,
                              x = m.length,
                              E = new Array(2 * x);
                            for (c = h = 0; c < x; )
                              if ((d = m[c++]) < 128) E[h++] = d;
                              else if (4 < (v = i[d])) (E[h++] = 65533), (c += v - 1);
                              else {
                                for (d &= v === 2 ? 31 : v === 3 ? 15 : 7; 1 < v && c < x; )
                                  (d = (d << 6) | (63 & m[c++])), v--;
                                1 < v
                                  ? (E[h++] = 65533)
                                  : d < 65536
                                  ? (E[h++] = d)
                                  : ((d -= 65536),
                                    (E[h++] = 55296 | ((d >> 10) & 1023)),
                                    (E[h++] = 56320 | (1023 & d)));
                              }
                            return (
                              E.length !== h &&
                                (E.subarray ? (E = E.subarray(0, h)) : (E.length = h)),
                              _.applyFromCharCode(E)
                            );
                          })((o = _.transformTo(y.uint8array ? 'uint8array' : 'array', o)));
                    }),
                    _.inherits(g, n),
                    (g.prototype.processChunk = function (o) {
                      var m = _.transformTo(y.uint8array ? 'uint8array' : 'array', o.data);
                      if (this.leftOver && this.leftOver.length) {
                        if (y.uint8array) {
                          var c = m;
                          (m = new Uint8Array(c.length + this.leftOver.length)).set(
                            this.leftOver,
                            0,
                          ),
                            m.set(c, this.leftOver.length);
                        } else m = this.leftOver.concat(m);
                        this.leftOver = null;
                      }
                      var h = (function (v, x) {
                          var E;
                          for (
                            (x = x || v.length) > v.length && (x = v.length), E = x - 1;
                            0 <= E && (192 & v[E]) == 128;

                          )
                            E--;
                          return E < 0 || E === 0 ? x : E + i[v[E]] > x ? E : x;
                        })(m),
                        d = m;
                      h !== m.length &&
                        (y.uint8array
                          ? ((d = m.subarray(0, h)), (this.leftOver = m.subarray(h, m.length)))
                          : ((d = m.slice(0, h)), (this.leftOver = m.slice(h, m.length)))),
                        this.push({ data: T.utf8decode(d), meta: o.meta });
                    }),
                    (g.prototype.flush = function () {
                      this.leftOver &&
                        this.leftOver.length &&
                        (this.push({ data: T.utf8decode(this.leftOver), meta: {} }),
                        (this.leftOver = null));
                    }),
                    (T.Utf8DecodeWorker = g),
                    _.inherits(r, n),
                    (r.prototype.processChunk = function (o) {
                      this.push({ data: T.utf8encode(o.data), meta: o.meta });
                    }),
                    (T.Utf8EncodeWorker = r);
                },
                {
                  './nodejsUtils': 14,
                  './stream/GenericWorker': 28,
                  './support': 30,
                  './utils': 32,
                },
              ],
              32: [
                function (P, R, T) {
                  var _ = P('./support'),
                    y = P('./base64'),
                    e = P('./nodejsUtils'),
                    n = P('./external');
                  function i(c) {
                    return c;
                  }
                  function b(c, h) {
                    for (var d = 0; d < c.length; ++d) h[d] = 255 & c.charCodeAt(d);
                    return h;
                  }
                  P('setimmediate'),
                    (T.newBlob = function (c, h) {
                      T.checkSupport('blob');
                      try {
                        return new Blob([c], { type: h });
                      } catch (v) {
                        try {
                          var d = new (self.BlobBuilder ||
                            self.WebKitBlobBuilder ||
                            self.MozBlobBuilder ||
                            self.MSBlobBuilder)();
                          return d.append(c), d.getBlob(h);
                        } catch (x) {
                          throw new Error("Bug : can't construct the Blob.");
                        }
                      }
                    });
                  var g = {
                    stringifyByChunk: function (c, h, d) {
                      var v = [],
                        x = 0,
                        E = c.length;
                      if (E <= d) return String.fromCharCode.apply(null, c);
                      for (; x < E; )
                        h === 'array' || h === 'nodebuffer'
                          ? v.push(String.fromCharCode.apply(null, c.slice(x, Math.min(x + d, E))))
                          : v.push(
                              String.fromCharCode.apply(null, c.subarray(x, Math.min(x + d, E))),
                            ),
                          (x += d);
                      return v.join('');
                    },
                    stringifyByChar: function (c) {
                      for (var h = '', d = 0; d < c.length; d++) h += String.fromCharCode(c[d]);
                      return h;
                    },
                    applyCanBeUsed: {
                      uint8array: (function () {
                        try {
                          return (
                            _.uint8array &&
                            String.fromCharCode.apply(null, new Uint8Array(1)).length === 1
                          );
                        } catch (c) {
                          return !1;
                        }
                      })(),
                      nodebuffer: (function () {
                        try {
                          return (
                            _.nodebuffer &&
                            String.fromCharCode.apply(null, e.allocBuffer(1)).length === 1
                          );
                        } catch (c) {
                          return !1;
                        }
                      })(),
                    },
                  };
                  function r(c) {
                    var h = 65536,
                      d = T.getTypeOf(c),
                      v = !0;
                    if (
                      (d === 'uint8array'
                        ? (v = g.applyCanBeUsed.uint8array)
                        : d === 'nodebuffer' && (v = g.applyCanBeUsed.nodebuffer),
                      v)
                    )
                      for (; 1 < h; )
                        try {
                          return g.stringifyByChunk(c, d, h);
                        } catch (x) {
                          h = Math.floor(h / 2);
                        }
                    return g.stringifyByChar(c);
                  }
                  function o(c, h) {
                    for (var d = 0; d < c.length; d++) h[d] = c[d];
                    return h;
                  }
                  T.applyFromCharCode = r;
                  var m = {};
                  (m.string = {
                    string: i,
                    array: function (c) {
                      return b(c, new Array(c.length));
                    },
                    arraybuffer: function (c) {
                      return m.string.uint8array(c).buffer;
                    },
                    uint8array: function (c) {
                      return b(c, new Uint8Array(c.length));
                    },
                    nodebuffer: function (c) {
                      return b(c, e.allocBuffer(c.length));
                    },
                  }),
                    (m.array = {
                      string: r,
                      array: i,
                      arraybuffer: function (c) {
                        return new Uint8Array(c).buffer;
                      },
                      uint8array: function (c) {
                        return new Uint8Array(c);
                      },
                      nodebuffer: function (c) {
                        return e.newBufferFrom(c);
                      },
                    }),
                    (m.arraybuffer = {
                      string: function (c) {
                        return r(new Uint8Array(c));
                      },
                      array: function (c) {
                        return o(new Uint8Array(c), new Array(c.byteLength));
                      },
                      arraybuffer: i,
                      uint8array: function (c) {
                        return new Uint8Array(c);
                      },
                      nodebuffer: function (c) {
                        return e.newBufferFrom(new Uint8Array(c));
                      },
                    }),
                    (m.uint8array = {
                      string: r,
                      array: function (c) {
                        return o(c, new Array(c.length));
                      },
                      arraybuffer: function (c) {
                        return c.buffer;
                      },
                      uint8array: i,
                      nodebuffer: function (c) {
                        return e.newBufferFrom(c);
                      },
                    }),
                    (m.nodebuffer = {
                      string: r,
                      array: function (c) {
                        return o(c, new Array(c.length));
                      },
                      arraybuffer: function (c) {
                        return m.nodebuffer.uint8array(c).buffer;
                      },
                      uint8array: function (c) {
                        return o(c, new Uint8Array(c.length));
                      },
                      nodebuffer: i,
                    }),
                    (T.transformTo = function (c, h) {
                      if (((h = h || ''), !c)) return h;
                      T.checkSupport(c);
                      var d = T.getTypeOf(h);
                      return m[d][c](h);
                    }),
                    (T.resolve = function (c) {
                      for (var h = c.split('/'), d = [], v = 0; v < h.length; v++) {
                        var x = h[v];
                        x === '.' ||
                          (x === '' && v !== 0 && v !== h.length - 1) ||
                          (x === '..' ? d.pop() : d.push(x));
                      }
                      return d.join('/');
                    }),
                    (T.getTypeOf = function (c) {
                      return typeof c == 'string'
                        ? 'string'
                        : Object.prototype.toString.call(c) === '[object Array]'
                        ? 'array'
                        : _.nodebuffer && e.isBuffer(c)
                        ? 'nodebuffer'
                        : _.uint8array && c instanceof Uint8Array
                        ? 'uint8array'
                        : _.arraybuffer && c instanceof ArrayBuffer
                        ? 'arraybuffer'
                        : void 0;
                    }),
                    (T.checkSupport = function (c) {
                      if (!_[c.toLowerCase()])
                        throw new Error(c + ' is not supported by this platform');
                    }),
                    (T.MAX_VALUE_16BITS = 65535),
                    (T.MAX_VALUE_32BITS = -1),
                    (T.pretty = function (c) {
                      var h,
                        d,
                        v = '';
                      for (d = 0; d < (c || '').length; d++)
                        v +=
                          '\\x' +
                          ((h = c.charCodeAt(d)) < 16 ? '0' : '') +
                          h.toString(16).toUpperCase();
                      return v;
                    }),
                    (T.delay = function (c, h, d) {
                      setImmediate(function () {
                        c.apply(d || null, h || []);
                      });
                    }),
                    (T.inherits = function (c, h) {
                      function d() {}
                      (d.prototype = h.prototype), (c.prototype = new d());
                    }),
                    (T.extend = function () {
                      var c,
                        h,
                        d = {};
                      for (c = 0; c < arguments.length; c++)
                        for (h in arguments[c])
                          Object.prototype.hasOwnProperty.call(arguments[c], h) &&
                            d[h] === void 0 &&
                            (d[h] = arguments[c][h]);
                      return d;
                    }),
                    (T.prepareContent = function (c, h, d, v, x) {
                      return n.Promise.resolve(h)
                        .then(function (E) {
                          return _.blob &&
                            (E instanceof Blob ||
                              ['[object File]', '[object Blob]'].indexOf(
                                Object.prototype.toString.call(E),
                              ) !== -1) &&
                            typeof FileReader != 'undefined'
                            ? new n.Promise(function (l, a) {
                                var t = new FileReader();
                                (t.onload = function (s) {
                                  l(s.target.result);
                                }),
                                  (t.onerror = function (s) {
                                    a(s.target.error);
                                  }),
                                  t.readAsArrayBuffer(E);
                              })
                            : E;
                        })
                        .then(function (E) {
                          var l = T.getTypeOf(E);
                          return l
                            ? (l === 'arraybuffer'
                                ? (E = T.transformTo('uint8array', E))
                                : l === 'string' &&
                                  (x
                                    ? (E = y.decode(E))
                                    : d &&
                                      v !== !0 &&
                                      (E = (function (a) {
                                        return b(
                                          a,
                                          _.uint8array
                                            ? new Uint8Array(a.length)
                                            : new Array(a.length),
                                        );
                                      })(E))),
                              E)
                            : n.Promise.reject(
                                new Error(
                                  "Can't read the data of '" +
                                    c +
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
                function (P, R, T) {
                  var _ = P('./reader/readerFor'),
                    y = P('./utils'),
                    e = P('./signature'),
                    n = P('./zipEntry'),
                    i = P('./support');
                  function b(g) {
                    (this.files = []), (this.loadOptions = g);
                  }
                  (b.prototype = {
                    checkSignature: function (g) {
                      if (!this.reader.readAndCheckSignature(g)) {
                        this.reader.index -= 4;
                        var r = this.reader.readString(4);
                        throw new Error(
                          'Corrupted zip or bug: unexpected signature (' +
                            y.pretty(r) +
                            ', expected ' +
                            y.pretty(g) +
                            ')',
                        );
                      }
                    },
                    isSignature: function (g, r) {
                      var o = this.reader.index;
                      this.reader.setIndex(g);
                      var m = this.reader.readString(4) === r;
                      return this.reader.setIndex(o), m;
                    },
                    readBlockEndOfCentral: function () {
                      (this.diskNumber = this.reader.readInt(2)),
                        (this.diskWithCentralDirStart = this.reader.readInt(2)),
                        (this.centralDirRecordsOnThisDisk = this.reader.readInt(2)),
                        (this.centralDirRecords = this.reader.readInt(2)),
                        (this.centralDirSize = this.reader.readInt(4)),
                        (this.centralDirOffset = this.reader.readInt(4)),
                        (this.zipCommentLength = this.reader.readInt(2));
                      var g = this.reader.readData(this.zipCommentLength),
                        r = i.uint8array ? 'uint8array' : 'array',
                        o = y.transformTo(r, g);
                      this.zipComment = this.loadOptions.decodeFileName(o);
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
                      for (var g, r, o, m = this.zip64EndOfCentralSize - 44; 0 < m; )
                        (g = this.reader.readInt(2)),
                          (r = this.reader.readInt(4)),
                          (o = this.reader.readData(r)),
                          (this.zip64ExtensibleData[g] = { id: g, length: r, value: o });
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
                      var g, r;
                      for (g = 0; g < this.files.length; g++)
                        (r = this.files[g]),
                          this.reader.setIndex(r.localHeaderOffset),
                          this.checkSignature(e.LOCAL_FILE_HEADER),
                          r.readLocalPart(this.reader),
                          r.handleUTF8(),
                          r.processAttributes();
                    },
                    readCentralDir: function () {
                      var g;
                      for (
                        this.reader.setIndex(this.centralDirOffset);
                        this.reader.readAndCheckSignature(e.CENTRAL_FILE_HEADER);

                      )
                        (g = new n({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(
                          this.reader,
                        ),
                          this.files.push(g);
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
                      var g = this.reader.lastIndexOfSignature(e.CENTRAL_DIRECTORY_END);
                      if (g < 0)
                        throw this.isSignature(0, e.LOCAL_FILE_HEADER)
                          ? new Error("Corrupted zip: can't find end of central directory")
                          : new Error(
                              "Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html",
                            );
                      this.reader.setIndex(g);
                      var r = g;
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
                          (g = this.reader.lastIndexOfSignature(
                            e.ZIP64_CENTRAL_DIRECTORY_LOCATOR,
                          )) < 0)
                        )
                          throw new Error(
                            "Corrupted zip: can't find the ZIP64 end of central directory locator",
                          );
                        if (
                          (this.reader.setIndex(g),
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
                      var o = this.centralDirOffset + this.centralDirSize;
                      this.zip64 && ((o += 20), (o += 12 + this.zip64EndOfCentralSize));
                      var m = r - o;
                      if (0 < m)
                        this.isSignature(r, e.CENTRAL_FILE_HEADER) || (this.reader.zero = m);
                      else if (m < 0)
                        throw new Error('Corrupted zip: missing ' + Math.abs(m) + ' bytes.');
                    },
                    prepareReader: function (g) {
                      this.reader = _(g);
                    },
                    load: function (g) {
                      this.prepareReader(g),
                        this.readEndOfCentral(),
                        this.readCentralDir(),
                        this.readLocalFiles();
                    },
                  }),
                    (R.exports = b);
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
                function (P, R, T) {
                  var _ = P('./reader/readerFor'),
                    y = P('./utils'),
                    e = P('./compressedObject'),
                    n = P('./crc32'),
                    i = P('./utf8'),
                    b = P('./compressions'),
                    g = P('./support');
                  function r(o, m) {
                    (this.options = o), (this.loadOptions = m);
                  }
                  (r.prototype = {
                    isEncrypted: function () {
                      return (1 & this.bitFlag) == 1;
                    },
                    useUTF8: function () {
                      return (2048 & this.bitFlag) == 2048;
                    },
                    readLocalPart: function (o) {
                      var m, c;
                      if (
                        (o.skip(22),
                        (this.fileNameLength = o.readInt(2)),
                        (c = o.readInt(2)),
                        (this.fileName = o.readData(this.fileNameLength)),
                        o.skip(c),
                        this.compressedSize === -1 || this.uncompressedSize === -1)
                      )
                        throw new Error(
                          "Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)",
                        );
                      if (
                        (m = (function (h) {
                          for (var d in b)
                            if (Object.prototype.hasOwnProperty.call(b, d) && b[d].magic === h)
                              return b[d];
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
                        m,
                        o.readData(this.compressedSize),
                      );
                    },
                    readCentralPart: function (o) {
                      (this.versionMadeBy = o.readInt(2)),
                        o.skip(2),
                        (this.bitFlag = o.readInt(2)),
                        (this.compressionMethod = o.readString(2)),
                        (this.date = o.readDate()),
                        (this.crc32 = o.readInt(4)),
                        (this.compressedSize = o.readInt(4)),
                        (this.uncompressedSize = o.readInt(4));
                      var m = o.readInt(2);
                      if (
                        ((this.extraFieldsLength = o.readInt(2)),
                        (this.fileCommentLength = o.readInt(2)),
                        (this.diskNumberStart = o.readInt(2)),
                        (this.internalFileAttributes = o.readInt(2)),
                        (this.externalFileAttributes = o.readInt(4)),
                        (this.localHeaderOffset = o.readInt(4)),
                        this.isEncrypted())
                      )
                        throw new Error('Encrypted zip are not supported');
                      o.skip(m),
                        this.readExtraFields(o),
                        this.parseZIP64ExtraField(o),
                        (this.fileComment = o.readData(this.fileCommentLength));
                    },
                    processAttributes: function () {
                      (this.unixPermissions = null), (this.dosPermissions = null);
                      var o = this.versionMadeBy >> 8;
                      (this.dir = !!(16 & this.externalFileAttributes)),
                        o == 0 && (this.dosPermissions = 63 & this.externalFileAttributes),
                        o == 3 &&
                          (this.unixPermissions = (this.externalFileAttributes >> 16) & 65535),
                        this.dir || this.fileNameStr.slice(-1) !== '/' || (this.dir = !0);
                    },
                    parseZIP64ExtraField: function () {
                      if (this.extraFields[1]) {
                        var o = _(this.extraFields[1].value);
                        this.uncompressedSize === y.MAX_VALUE_32BITS &&
                          (this.uncompressedSize = o.readInt(8)),
                          this.compressedSize === y.MAX_VALUE_32BITS &&
                            (this.compressedSize = o.readInt(8)),
                          this.localHeaderOffset === y.MAX_VALUE_32BITS &&
                            (this.localHeaderOffset = o.readInt(8)),
                          this.diskNumberStart === y.MAX_VALUE_32BITS &&
                            (this.diskNumberStart = o.readInt(4));
                      }
                    },
                    readExtraFields: function (o) {
                      var m,
                        c,
                        h,
                        d = o.index + this.extraFieldsLength;
                      for (this.extraFields || (this.extraFields = {}); o.index + 4 < d; )
                        (m = o.readInt(2)),
                          (c = o.readInt(2)),
                          (h = o.readData(c)),
                          (this.extraFields[m] = { id: m, length: c, value: h });
                      o.setIndex(d);
                    },
                    handleUTF8: function () {
                      var o = g.uint8array ? 'uint8array' : 'array';
                      if (this.useUTF8())
                        (this.fileNameStr = i.utf8decode(this.fileName)),
                          (this.fileCommentStr = i.utf8decode(this.fileComment));
                      else {
                        var m = this.findExtraFieldUnicodePath();
                        if (m !== null) this.fileNameStr = m;
                        else {
                          var c = y.transformTo(o, this.fileName);
                          this.fileNameStr = this.loadOptions.decodeFileName(c);
                        }
                        var h = this.findExtraFieldUnicodeComment();
                        if (h !== null) this.fileCommentStr = h;
                        else {
                          var d = y.transformTo(o, this.fileComment);
                          this.fileCommentStr = this.loadOptions.decodeFileName(d);
                        }
                      }
                    },
                    findExtraFieldUnicodePath: function () {
                      var o = this.extraFields[28789];
                      if (o) {
                        var m = _(o.value);
                        return m.readInt(1) !== 1 || n(this.fileName) !== m.readInt(4)
                          ? null
                          : i.utf8decode(m.readData(o.length - 5));
                      }
                      return null;
                    },
                    findExtraFieldUnicodeComment: function () {
                      var o = this.extraFields[25461];
                      if (o) {
                        var m = _(o.value);
                        return m.readInt(1) !== 1 || n(this.fileComment) !== m.readInt(4)
                          ? null
                          : i.utf8decode(m.readData(o.length - 5));
                      }
                      return null;
                    },
                  }),
                    (R.exports = r);
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
                function (P, R, T) {
                  function _(m, c, h) {
                    (this.name = m),
                      (this.dir = h.dir),
                      (this.date = h.date),
                      (this.comment = h.comment),
                      (this.unixPermissions = h.unixPermissions),
                      (this.dosPermissions = h.dosPermissions),
                      (this._data = c),
                      (this._dataBinary = h.binary),
                      (this.options = {
                        compression: h.compression,
                        compressionOptions: h.compressionOptions,
                      });
                  }
                  var y = P('./stream/StreamHelper'),
                    e = P('./stream/DataWorker'),
                    n = P('./utf8'),
                    i = P('./compressedObject'),
                    b = P('./stream/GenericWorker');
                  _.prototype = {
                    internalStream: function (m) {
                      var c = null,
                        h = 'string';
                      try {
                        if (!m) throw new Error('No output type specified.');
                        var d = (h = m.toLowerCase()) === 'string' || h === 'text';
                        (h !== 'binarystring' && h !== 'text') || (h = 'string'),
                          (c = this._decompressWorker());
                        var v = !this._dataBinary;
                        v && !d && (c = c.pipe(new n.Utf8EncodeWorker())),
                          !v && d && (c = c.pipe(new n.Utf8DecodeWorker()));
                      } catch (x) {
                        (c = new b('error')).error(x);
                      }
                      return new y(c, h, '');
                    },
                    async: function (m, c) {
                      return this.internalStream(m).accumulate(c);
                    },
                    nodeStream: function (m, c) {
                      return this.internalStream(m || 'nodebuffer').toNodejsStream(c);
                    },
                    _compressWorker: function (m, c) {
                      if (this._data instanceof i && this._data.compression.magic === m.magic)
                        return this._data.getCompressedWorker();
                      var h = this._decompressWorker();
                      return (
                        this._dataBinary || (h = h.pipe(new n.Utf8EncodeWorker())),
                        i.createWorkerFrom(h, m, c)
                      );
                    },
                    _decompressWorker: function () {
                      return this._data instanceof i
                        ? this._data.getContentWorker()
                        : this._data instanceof b
                        ? this._data
                        : new e(this._data);
                    },
                  };
                  for (
                    var g = ['asText', 'asBinary', 'asNodeBuffer', 'asUint8Array', 'asArrayBuffer'],
                      r = function () {
                        throw new Error(
                          'This method has been removed in JSZip 3.0, please check the upgrade guide.',
                        );
                      },
                      o = 0;
                    o < g.length;
                    o++
                  )
                    _.prototype[g[o]] = r;
                  R.exports = _;
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
                function (P, R, T) {
                  (function (_) {
                    var y,
                      e,
                      n = _.MutationObserver || _.WebKitMutationObserver;
                    if (n) {
                      var i = 0,
                        b = new n(m),
                        g = _.document.createTextNode('');
                      b.observe(g, { characterData: !0 }),
                        (y = function () {
                          g.data = i = ++i % 2;
                        });
                    } else if (_.setImmediate || _.MessageChannel === void 0)
                      y =
                        'document' in _ &&
                        'onreadystatechange' in _.document.createElement('script')
                          ? function () {
                              var c = _.document.createElement('script');
                              (c.onreadystatechange = function () {
                                m(),
                                  (c.onreadystatechange = null),
                                  c.parentNode.removeChild(c),
                                  (c = null);
                              }),
                                _.document.documentElement.appendChild(c);
                            }
                          : function () {
                              setTimeout(m, 0);
                            };
                    else {
                      var r = new _.MessageChannel();
                      (r.port1.onmessage = m),
                        (y = function () {
                          r.port2.postMessage(0);
                        });
                    }
                    var o = [];
                    function m() {
                      var c, h;
                      e = !0;
                      for (var d = o.length; d; ) {
                        for (h = o, o = [], c = -1; ++c < d; ) h[c]();
                        d = o.length;
                      }
                      e = !1;
                    }
                    R.exports = function (c) {
                      o.push(c) !== 1 || e || y();
                    };
                  }).call(
                    this,
                    typeof Ie != 'undefined'
                      ? Ie
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
                function (P, R, T) {
                  var _ = P('immediate');
                  function y() {}
                  var e = {},
                    n = ['REJECTED'],
                    i = ['FULFILLED'],
                    b = ['PENDING'];
                  function g(d) {
                    if (typeof d != 'function') throw new TypeError('resolver must be a function');
                    (this.state = b),
                      (this.queue = []),
                      (this.outcome = void 0),
                      d !== y && c(this, d);
                  }
                  function r(d, v, x) {
                    (this.promise = d),
                      typeof v == 'function' &&
                        ((this.onFulfilled = v), (this.callFulfilled = this.otherCallFulfilled)),
                      typeof x == 'function' &&
                        ((this.onRejected = x), (this.callRejected = this.otherCallRejected));
                  }
                  function o(d, v, x) {
                    _(function () {
                      var E;
                      try {
                        E = v(x);
                      } catch (l) {
                        return e.reject(d, l);
                      }
                      E === d
                        ? e.reject(d, new TypeError('Cannot resolve promise with itself'))
                        : e.resolve(d, E);
                    });
                  }
                  function m(d) {
                    var v = d && d.then;
                    if (
                      d &&
                      (typeof d == 'object' || typeof d == 'function') &&
                      typeof v == 'function'
                    )
                      return function () {
                        v.apply(d, arguments);
                      };
                  }
                  function c(d, v) {
                    var x = !1;
                    function E(t) {
                      x || ((x = !0), e.reject(d, t));
                    }
                    function l(t) {
                      x || ((x = !0), e.resolve(d, t));
                    }
                    var a = h(function () {
                      v(l, E);
                    });
                    a.status === 'error' && E(a.value);
                  }
                  function h(d, v) {
                    var x = {};
                    try {
                      (x.value = d(v)), (x.status = 'success');
                    } catch (E) {
                      (x.status = 'error'), (x.value = E);
                    }
                    return x;
                  }
                  ((R.exports = g).prototype.finally = function (d) {
                    if (typeof d != 'function') return this;
                    var v = this.constructor;
                    return this.then(
                      function (x) {
                        return v.resolve(d()).then(function () {
                          return x;
                        });
                      },
                      function (x) {
                        return v.resolve(d()).then(function () {
                          throw x;
                        });
                      },
                    );
                  }),
                    (g.prototype.catch = function (d) {
                      return this.then(null, d);
                    }),
                    (g.prototype.then = function (d, v) {
                      if (
                        (typeof d != 'function' && this.state === i) ||
                        (typeof v != 'function' && this.state === n)
                      )
                        return this;
                      var x = new this.constructor(y);
                      return (
                        this.state !== b
                          ? o(x, this.state === i ? d : v, this.outcome)
                          : this.queue.push(new r(x, d, v)),
                        x
                      );
                    }),
                    (r.prototype.callFulfilled = function (d) {
                      e.resolve(this.promise, d);
                    }),
                    (r.prototype.otherCallFulfilled = function (d) {
                      o(this.promise, this.onFulfilled, d);
                    }),
                    (r.prototype.callRejected = function (d) {
                      e.reject(this.promise, d);
                    }),
                    (r.prototype.otherCallRejected = function (d) {
                      o(this.promise, this.onRejected, d);
                    }),
                    (e.resolve = function (d, v) {
                      var x = h(m, v);
                      if (x.status === 'error') return e.reject(d, x.value);
                      var E = x.value;
                      if (E) c(d, E);
                      else {
                        (d.state = i), (d.outcome = v);
                        for (var l = -1, a = d.queue.length; ++l < a; ) d.queue[l].callFulfilled(v);
                      }
                      return d;
                    }),
                    (e.reject = function (d, v) {
                      (d.state = n), (d.outcome = v);
                      for (var x = -1, E = d.queue.length; ++x < E; ) d.queue[x].callRejected(v);
                      return d;
                    }),
                    (g.resolve = function (d) {
                      return d instanceof this ? d : e.resolve(new this(y), d);
                    }),
                    (g.reject = function (d) {
                      var v = new this(y);
                      return e.reject(v, d);
                    }),
                    (g.all = function (d) {
                      var v = this;
                      if (Object.prototype.toString.call(d) !== '[object Array]')
                        return this.reject(new TypeError('must be an array'));
                      var x = d.length,
                        E = !1;
                      if (!x) return this.resolve([]);
                      for (var l = new Array(x), a = 0, t = -1, s = new this(y); ++t < x; )
                        p(d[t], t);
                      return s;
                      function p(w, D) {
                        v.resolve(w).then(
                          function (k) {
                            (l[D] = k), ++a !== x || E || ((E = !0), e.resolve(s, l));
                          },
                          function (k) {
                            E || ((E = !0), e.reject(s, k));
                          },
                        );
                      }
                    }),
                    (g.race = function (d) {
                      var v = this;
                      if (Object.prototype.toString.call(d) !== '[object Array]')
                        return this.reject(new TypeError('must be an array'));
                      var x = d.length,
                        E = !1;
                      if (!x) return this.resolve([]);
                      for (var l = -1, a = new this(y); ++l < x; )
                        (t = d[l]),
                          v.resolve(t).then(
                            function (s) {
                              E || ((E = !0), e.resolve(a, s));
                            },
                            function (s) {
                              E || ((E = !0), e.reject(a, s));
                            },
                          );
                      var t;
                      return a;
                    });
                },
                { immediate: 36 },
              ],
              38: [
                function (P, R, T) {
                  var _ = {};
                  (0, P('./lib/utils/common').assign)(
                    _,
                    P('./lib/deflate'),
                    P('./lib/inflate'),
                    P('./lib/zlib/constants'),
                  ),
                    (R.exports = _);
                },
                {
                  './lib/deflate': 39,
                  './lib/inflate': 40,
                  './lib/utils/common': 41,
                  './lib/zlib/constants': 44,
                },
              ],
              39: [
                function (P, R, T) {
                  var _ = P('./zlib/deflate'),
                    y = P('./utils/common'),
                    e = P('./utils/strings'),
                    n = P('./zlib/messages'),
                    i = P('./zlib/zstream'),
                    b = Object.prototype.toString,
                    g = 0,
                    r = -1,
                    o = 0,
                    m = 8;
                  function c(d) {
                    if (!(this instanceof c)) return new c(d);
                    this.options = y.assign(
                      {
                        level: r,
                        method: m,
                        chunkSize: 16384,
                        windowBits: 15,
                        memLevel: 8,
                        strategy: o,
                        to: '',
                      },
                      d || {},
                    );
                    var v = this.options;
                    v.raw && 0 < v.windowBits
                      ? (v.windowBits = -v.windowBits)
                      : v.gzip && 0 < v.windowBits && v.windowBits < 16 && (v.windowBits += 16),
                      (this.err = 0),
                      (this.msg = ''),
                      (this.ended = !1),
                      (this.chunks = []),
                      (this.strm = new i()),
                      (this.strm.avail_out = 0);
                    var x = _.deflateInit2(
                      this.strm,
                      v.level,
                      v.method,
                      v.windowBits,
                      v.memLevel,
                      v.strategy,
                    );
                    if (x !== g) throw new Error(n[x]);
                    if ((v.header && _.deflateSetHeader(this.strm, v.header), v.dictionary)) {
                      var E;
                      if (
                        ((E =
                          typeof v.dictionary == 'string'
                            ? e.string2buf(v.dictionary)
                            : b.call(v.dictionary) === '[object ArrayBuffer]'
                            ? new Uint8Array(v.dictionary)
                            : v.dictionary),
                        (x = _.deflateSetDictionary(this.strm, E)) !== g)
                      )
                        throw new Error(n[x]);
                      this._dict_set = !0;
                    }
                  }
                  function h(d, v) {
                    var x = new c(v);
                    if ((x.push(d, !0), x.err)) throw x.msg || n[x.err];
                    return x.result;
                  }
                  (c.prototype.push = function (d, v) {
                    var x,
                      E,
                      l = this.strm,
                      a = this.options.chunkSize;
                    if (this.ended) return !1;
                    (E = v === ~~v ? v : v === !0 ? 4 : 0),
                      typeof d == 'string'
                        ? (l.input = e.string2buf(d))
                        : b.call(d) === '[object ArrayBuffer]'
                        ? (l.input = new Uint8Array(d))
                        : (l.input = d),
                      (l.next_in = 0),
                      (l.avail_in = l.input.length);
                    do {
                      if (
                        (l.avail_out === 0 &&
                          ((l.output = new y.Buf8(a)), (l.next_out = 0), (l.avail_out = a)),
                        (x = _.deflate(l, E)) !== 1 && x !== g)
                      )
                        return this.onEnd(x), !(this.ended = !0);
                      (l.avail_out !== 0 && (l.avail_in !== 0 || (E !== 4 && E !== 2))) ||
                        (this.options.to === 'string'
                          ? this.onData(e.buf2binstring(y.shrinkBuf(l.output, l.next_out)))
                          : this.onData(y.shrinkBuf(l.output, l.next_out)));
                    } while ((0 < l.avail_in || l.avail_out === 0) && x !== 1);
                    return E === 4
                      ? ((x = _.deflateEnd(this.strm)), this.onEnd(x), (this.ended = !0), x === g)
                      : E !== 2 || (this.onEnd(g), !(l.avail_out = 0));
                  }),
                    (c.prototype.onData = function (d) {
                      this.chunks.push(d);
                    }),
                    (c.prototype.onEnd = function (d) {
                      d === g &&
                        (this.options.to === 'string'
                          ? (this.result = this.chunks.join(''))
                          : (this.result = y.flattenChunks(this.chunks))),
                        (this.chunks = []),
                        (this.err = d),
                        (this.msg = this.strm.msg);
                    }),
                    (T.Deflate = c),
                    (T.deflate = h),
                    (T.deflateRaw = function (d, v) {
                      return ((v = v || {}).raw = !0), h(d, v);
                    }),
                    (T.gzip = function (d, v) {
                      return ((v = v || {}).gzip = !0), h(d, v);
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
                function (P, R, T) {
                  var _ = P('./zlib/inflate'),
                    y = P('./utils/common'),
                    e = P('./utils/strings'),
                    n = P('./zlib/constants'),
                    i = P('./zlib/messages'),
                    b = P('./zlib/zstream'),
                    g = P('./zlib/gzheader'),
                    r = Object.prototype.toString;
                  function o(c) {
                    if (!(this instanceof o)) return new o(c);
                    this.options = y.assign({ chunkSize: 16384, windowBits: 0, to: '' }, c || {});
                    var h = this.options;
                    h.raw &&
                      0 <= h.windowBits &&
                      h.windowBits < 16 &&
                      ((h.windowBits = -h.windowBits), h.windowBits === 0 && (h.windowBits = -15)),
                      !(0 <= h.windowBits && h.windowBits < 16) ||
                        (c && c.windowBits) ||
                        (h.windowBits += 32),
                      15 < h.windowBits &&
                        h.windowBits < 48 &&
                        !(15 & h.windowBits) &&
                        (h.windowBits |= 15),
                      (this.err = 0),
                      (this.msg = ''),
                      (this.ended = !1),
                      (this.chunks = []),
                      (this.strm = new b()),
                      (this.strm.avail_out = 0);
                    var d = _.inflateInit2(this.strm, h.windowBits);
                    if (d !== n.Z_OK) throw new Error(i[d]);
                    (this.header = new g()), _.inflateGetHeader(this.strm, this.header);
                  }
                  function m(c, h) {
                    var d = new o(h);
                    if ((d.push(c, !0), d.err)) throw d.msg || i[d.err];
                    return d.result;
                  }
                  (o.prototype.push = function (c, h) {
                    var d,
                      v,
                      x,
                      E,
                      l,
                      a,
                      t = this.strm,
                      s = this.options.chunkSize,
                      p = this.options.dictionary,
                      w = !1;
                    if (this.ended) return !1;
                    (v = h === ~~h ? h : h === !0 ? n.Z_FINISH : n.Z_NO_FLUSH),
                      typeof c == 'string'
                        ? (t.input = e.binstring2buf(c))
                        : r.call(c) === '[object ArrayBuffer]'
                        ? (t.input = new Uint8Array(c))
                        : (t.input = c),
                      (t.next_in = 0),
                      (t.avail_in = t.input.length);
                    do {
                      if (
                        (t.avail_out === 0 &&
                          ((t.output = new y.Buf8(s)), (t.next_out = 0), (t.avail_out = s)),
                        (d = _.inflate(t, n.Z_NO_FLUSH)) === n.Z_NEED_DICT &&
                          p &&
                          ((a =
                            typeof p == 'string'
                              ? e.string2buf(p)
                              : r.call(p) === '[object ArrayBuffer]'
                              ? new Uint8Array(p)
                              : p),
                          (d = _.inflateSetDictionary(this.strm, a))),
                        d === n.Z_BUF_ERROR && w === !0 && ((d = n.Z_OK), (w = !1)),
                        d !== n.Z_STREAM_END && d !== n.Z_OK)
                      )
                        return this.onEnd(d), !(this.ended = !0);
                      t.next_out &&
                        ((t.avail_out !== 0 &&
                          d !== n.Z_STREAM_END &&
                          (t.avail_in !== 0 || (v !== n.Z_FINISH && v !== n.Z_SYNC_FLUSH))) ||
                          (this.options.to === 'string'
                            ? ((x = e.utf8border(t.output, t.next_out)),
                              (E = t.next_out - x),
                              (l = e.buf2string(t.output, x)),
                              (t.next_out = E),
                              (t.avail_out = s - E),
                              E && y.arraySet(t.output, t.output, x, E, 0),
                              this.onData(l))
                            : this.onData(y.shrinkBuf(t.output, t.next_out)))),
                        t.avail_in === 0 && t.avail_out === 0 && (w = !0);
                    } while ((0 < t.avail_in || t.avail_out === 0) && d !== n.Z_STREAM_END);
                    return (
                      d === n.Z_STREAM_END && (v = n.Z_FINISH),
                      v === n.Z_FINISH
                        ? ((d = _.inflateEnd(this.strm)),
                          this.onEnd(d),
                          (this.ended = !0),
                          d === n.Z_OK)
                        : v !== n.Z_SYNC_FLUSH || (this.onEnd(n.Z_OK), !(t.avail_out = 0))
                    );
                  }),
                    (o.prototype.onData = function (c) {
                      this.chunks.push(c);
                    }),
                    (o.prototype.onEnd = function (c) {
                      c === n.Z_OK &&
                        (this.options.to === 'string'
                          ? (this.result = this.chunks.join(''))
                          : (this.result = y.flattenChunks(this.chunks))),
                        (this.chunks = []),
                        (this.err = c),
                        (this.msg = this.strm.msg);
                    }),
                    (T.Inflate = o),
                    (T.inflate = m),
                    (T.inflateRaw = function (c, h) {
                      return ((h = h || {}).raw = !0), m(c, h);
                    }),
                    (T.ungzip = m);
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
                function (P, R, T) {
                  var _ =
                    typeof Uint8Array != 'undefined' &&
                    typeof Uint16Array != 'undefined' &&
                    typeof Int32Array != 'undefined';
                  (T.assign = function (n) {
                    for (var i = Array.prototype.slice.call(arguments, 1); i.length; ) {
                      var b = i.shift();
                      if (b) {
                        if (typeof b != 'object') throw new TypeError(b + 'must be non-object');
                        for (var g in b) b.hasOwnProperty(g) && (n[g] = b[g]);
                      }
                    }
                    return n;
                  }),
                    (T.shrinkBuf = function (n, i) {
                      return n.length === i
                        ? n
                        : n.subarray
                        ? n.subarray(0, i)
                        : ((n.length = i), n);
                    });
                  var y = {
                      arraySet: function (n, i, b, g, r) {
                        if (i.subarray && n.subarray) n.set(i.subarray(b, b + g), r);
                        else for (var o = 0; o < g; o++) n[r + o] = i[b + o];
                      },
                      flattenChunks: function (n) {
                        var i, b, g, r, o, m;
                        for (i = g = 0, b = n.length; i < b; i++) g += n[i].length;
                        for (m = new Uint8Array(g), i = r = 0, b = n.length; i < b; i++)
                          (o = n[i]), m.set(o, r), (r += o.length);
                        return m;
                      },
                    },
                    e = {
                      arraySet: function (n, i, b, g, r) {
                        for (var o = 0; o < g; o++) n[r + o] = i[b + o];
                      },
                      flattenChunks: function (n) {
                        return [].concat.apply([], n);
                      },
                    };
                  (T.setTyped = function (n) {
                    n
                      ? ((T.Buf8 = Uint8Array),
                        (T.Buf16 = Uint16Array),
                        (T.Buf32 = Int32Array),
                        T.assign(T, y))
                      : ((T.Buf8 = Array), (T.Buf16 = Array), (T.Buf32 = Array), T.assign(T, e));
                  }),
                    T.setTyped(_);
                },
                {},
              ],
              42: [
                function (P, R, T) {
                  var _ = P('./common'),
                    y = !0,
                    e = !0;
                  try {
                    String.fromCharCode.apply(null, [0]);
                  } catch (g) {
                    y = !1;
                  }
                  try {
                    String.fromCharCode.apply(null, new Uint8Array(1));
                  } catch (g) {
                    e = !1;
                  }
                  for (var n = new _.Buf8(256), i = 0; i < 256; i++)
                    n[i] =
                      252 <= i ? 6 : 248 <= i ? 5 : 240 <= i ? 4 : 224 <= i ? 3 : 192 <= i ? 2 : 1;
                  function b(g, r) {
                    if (r < 65537 && ((g.subarray && e) || (!g.subarray && y)))
                      return String.fromCharCode.apply(null, _.shrinkBuf(g, r));
                    for (var o = '', m = 0; m < r; m++) o += String.fromCharCode(g[m]);
                    return o;
                  }
                  (n[254] = n[254] = 1),
                    (T.string2buf = function (g) {
                      var r,
                        o,
                        m,
                        c,
                        h,
                        d = g.length,
                        v = 0;
                      for (c = 0; c < d; c++)
                        (64512 & (o = g.charCodeAt(c))) == 55296 &&
                          c + 1 < d &&
                          (64512 & (m = g.charCodeAt(c + 1))) == 56320 &&
                          ((o = 65536 + ((o - 55296) << 10) + (m - 56320)), c++),
                          (v += o < 128 ? 1 : o < 2048 ? 2 : o < 65536 ? 3 : 4);
                      for (r = new _.Buf8(v), c = h = 0; h < v; c++)
                        (64512 & (o = g.charCodeAt(c))) == 55296 &&
                          c + 1 < d &&
                          (64512 & (m = g.charCodeAt(c + 1))) == 56320 &&
                          ((o = 65536 + ((o - 55296) << 10) + (m - 56320)), c++),
                          o < 128
                            ? (r[h++] = o)
                            : (o < 2048
                                ? (r[h++] = 192 | (o >>> 6))
                                : (o < 65536
                                    ? (r[h++] = 224 | (o >>> 12))
                                    : ((r[h++] = 240 | (o >>> 18)),
                                      (r[h++] = 128 | ((o >>> 12) & 63))),
                                  (r[h++] = 128 | ((o >>> 6) & 63))),
                              (r[h++] = 128 | (63 & o)));
                      return r;
                    }),
                    (T.buf2binstring = function (g) {
                      return b(g, g.length);
                    }),
                    (T.binstring2buf = function (g) {
                      for (var r = new _.Buf8(g.length), o = 0, m = r.length; o < m; o++)
                        r[o] = g.charCodeAt(o);
                      return r;
                    }),
                    (T.buf2string = function (g, r) {
                      var o,
                        m,
                        c,
                        h,
                        d = r || g.length,
                        v = new Array(2 * d);
                      for (o = m = 0; o < d; )
                        if ((c = g[o++]) < 128) v[m++] = c;
                        else if (4 < (h = n[c])) (v[m++] = 65533), (o += h - 1);
                        else {
                          for (c &= h === 2 ? 31 : h === 3 ? 15 : 7; 1 < h && o < d; )
                            (c = (c << 6) | (63 & g[o++])), h--;
                          1 < h
                            ? (v[m++] = 65533)
                            : c < 65536
                            ? (v[m++] = c)
                            : ((c -= 65536),
                              (v[m++] = 55296 | ((c >> 10) & 1023)),
                              (v[m++] = 56320 | (1023 & c)));
                        }
                      return b(v, m);
                    }),
                    (T.utf8border = function (g, r) {
                      var o;
                      for (
                        (r = r || g.length) > g.length && (r = g.length), o = r - 1;
                        0 <= o && (192 & g[o]) == 128;

                      )
                        o--;
                      return o < 0 || o === 0 ? r : o + n[g[o]] > r ? o : r;
                    });
                },
                { './common': 41 },
              ],
              43: [
                function (P, R, T) {
                  R.exports = function (_, y, e, n) {
                    for (var i = (65535 & _) | 0, b = ((_ >>> 16) & 65535) | 0, g = 0; e !== 0; ) {
                      for (
                        e -= g = 2e3 < e ? 2e3 : e;
                        (b = (b + (i = (i + y[n++]) | 0)) | 0), --g;

                      );
                      (i %= 65521), (b %= 65521);
                    }
                    return i | (b << 16) | 0;
                  };
                },
                {},
              ],
              44: [
                function (P, R, T) {
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
                function (P, R, T) {
                  var _ = (function () {
                    for (var y, e = [], n = 0; n < 256; n++) {
                      y = n;
                      for (var i = 0; i < 8; i++) y = 1 & y ? 3988292384 ^ (y >>> 1) : y >>> 1;
                      e[n] = y;
                    }
                    return e;
                  })();
                  R.exports = function (y, e, n, i) {
                    var b = _,
                      g = i + n;
                    y ^= -1;
                    for (var r = i; r < g; r++) y = (y >>> 8) ^ b[255 & (y ^ e[r])];
                    return -1 ^ y;
                  };
                },
                {},
              ],
              46: [
                function (P, R, T) {
                  var _,
                    y = P('../utils/common'),
                    e = P('./trees'),
                    n = P('./adler32'),
                    i = P('./crc32'),
                    b = P('./messages'),
                    g = 0,
                    r = 4,
                    o = 0,
                    m = -2,
                    c = -1,
                    h = 4,
                    d = 2,
                    v = 8,
                    x = 9,
                    E = 286,
                    l = 30,
                    a = 19,
                    t = 2 * E + 1,
                    s = 15,
                    p = 3,
                    w = 258,
                    D = w + p + 1,
                    k = 42,
                    A = 113,
                    u = 1,
                    B = 2,
                    j = 3,
                    M = 4;
                  function Y(f, L) {
                    return (f.msg = b[L]), L;
                  }
                  function $(f) {
                    return (f << 1) - (4 < f ? 9 : 0);
                  }
                  function Q(f) {
                    for (var L = f.length; 0 <= --L; ) f[L] = 0;
                  }
                  function I(f) {
                    var L = f.state,
                      F = L.pending;
                    F > f.avail_out && (F = f.avail_out),
                      F !== 0 &&
                        (y.arraySet(f.output, L.pending_buf, L.pending_out, F, f.next_out),
                        (f.next_out += F),
                        (L.pending_out += F),
                        (f.total_out += F),
                        (f.avail_out -= F),
                        (L.pending -= F),
                        L.pending === 0 && (L.pending_out = 0));
                  }
                  function z(f, L) {
                    e._tr_flush_block(
                      f,
                      0 <= f.block_start ? f.block_start : -1,
                      f.strstart - f.block_start,
                      L,
                    ),
                      (f.block_start = f.strstart),
                      I(f.strm);
                  }
                  function ee(f, L) {
                    f.pending_buf[f.pending++] = L;
                  }
                  function K(f, L) {
                    (f.pending_buf[f.pending++] = (L >>> 8) & 255),
                      (f.pending_buf[f.pending++] = 255 & L);
                  }
                  function X(f, L) {
                    var F,
                      C,
                      S = f.max_chain_length,
                      N = f.strstart,
                      U = f.prev_length,
                      W = f.nice_match,
                      O = f.strstart > f.w_size - D ? f.strstart - (f.w_size - D) : 0,
                      H = f.window,
                      J = f.w_mask,
                      V = f.prev,
                      te = f.strstart + w,
                      se = H[N + U - 1],
                      ne = H[N + U];
                    f.prev_length >= f.good_match && (S >>= 2),
                      W > f.lookahead && (W = f.lookahead);
                    do
                      if (
                        H[(F = L) + U] === ne &&
                        H[F + U - 1] === se &&
                        H[F] === H[N] &&
                        H[++F] === H[N + 1]
                      ) {
                        (N += 2), F++;
                        do;
                        while (
                          H[++N] === H[++F] &&
                          H[++N] === H[++F] &&
                          H[++N] === H[++F] &&
                          H[++N] === H[++F] &&
                          H[++N] === H[++F] &&
                          H[++N] === H[++F] &&
                          H[++N] === H[++F] &&
                          H[++N] === H[++F] &&
                          N < te
                        );
                        if (((C = w - (te - N)), (N = te - w), U < C)) {
                          if (((f.match_start = L), W <= (U = C))) break;
                          (se = H[N + U - 1]), (ne = H[N + U]);
                        }
                      }
                    while ((L = V[L & J]) > O && --S != 0);
                    return U <= f.lookahead ? U : f.lookahead;
                  }
                  function ie(f) {
                    var L,
                      F,
                      C,
                      S,
                      N,
                      U,
                      W,
                      O,
                      H,
                      J,
                      V = f.w_size;
                    do {
                      if (
                        ((S = f.window_size - f.lookahead - f.strstart), f.strstart >= V + (V - D))
                      ) {
                        for (
                          y.arraySet(f.window, f.window, V, V, 0),
                            f.match_start -= V,
                            f.strstart -= V,
                            f.block_start -= V,
                            L = F = f.hash_size;
                          (C = f.head[--L]), (f.head[L] = V <= C ? C - V : 0), --F;

                        );
                        for (L = F = V; (C = f.prev[--L]), (f.prev[L] = V <= C ? C - V : 0), --F; );
                        S += V;
                      }
                      if (f.strm.avail_in === 0) break;
                      if (
                        ((U = f.strm),
                        (W = f.window),
                        (O = f.strstart + f.lookahead),
                        (H = S),
                        (J = void 0),
                        (J = U.avail_in),
                        H < J && (J = H),
                        (F =
                          J === 0
                            ? 0
                            : ((U.avail_in -= J),
                              y.arraySet(W, U.input, U.next_in, J, O),
                              U.state.wrap === 1
                                ? (U.adler = n(U.adler, W, J, O))
                                : U.state.wrap === 2 && (U.adler = i(U.adler, W, J, O)),
                              (U.next_in += J),
                              (U.total_in += J),
                              J)),
                        (f.lookahead += F),
                        f.lookahead + f.insert >= p)
                      )
                        for (
                          N = f.strstart - f.insert,
                            f.ins_h = f.window[N],
                            f.ins_h = ((f.ins_h << f.hash_shift) ^ f.window[N + 1]) & f.hash_mask;
                          f.insert &&
                          ((f.ins_h =
                            ((f.ins_h << f.hash_shift) ^ f.window[N + p - 1]) & f.hash_mask),
                          (f.prev[N & f.w_mask] = f.head[f.ins_h]),
                          (f.head[f.ins_h] = N),
                          N++,
                          f.insert--,
                          !(f.lookahead + f.insert < p));

                        );
                    } while (f.lookahead < D && f.strm.avail_in !== 0);
                  }
                  function pe(f, L) {
                    for (var F, C; ; ) {
                      if (f.lookahead < D) {
                        if ((ie(f), f.lookahead < D && L === g)) return u;
                        if (f.lookahead === 0) break;
                      }
                      if (
                        ((F = 0),
                        f.lookahead >= p &&
                          ((f.ins_h =
                            ((f.ins_h << f.hash_shift) ^ f.window[f.strstart + p - 1]) &
                            f.hash_mask),
                          (F = f.prev[f.strstart & f.w_mask] = f.head[f.ins_h]),
                          (f.head[f.ins_h] = f.strstart)),
                        F !== 0 && f.strstart - F <= f.w_size - D && (f.match_length = X(f, F)),
                        f.match_length >= p)
                      )
                        if (
                          ((C = e._tr_tally(f, f.strstart - f.match_start, f.match_length - p)),
                          (f.lookahead -= f.match_length),
                          f.match_length <= f.max_lazy_match && f.lookahead >= p)
                        ) {
                          for (
                            f.match_length--;
                            f.strstart++,
                              (f.ins_h =
                                ((f.ins_h << f.hash_shift) ^ f.window[f.strstart + p - 1]) &
                                f.hash_mask),
                              (F = f.prev[f.strstart & f.w_mask] = f.head[f.ins_h]),
                              (f.head[f.ins_h] = f.strstart),
                              --f.match_length != 0;

                          );
                          f.strstart++;
                        } else
                          (f.strstart += f.match_length),
                            (f.match_length = 0),
                            (f.ins_h = f.window[f.strstart]),
                            (f.ins_h =
                              ((f.ins_h << f.hash_shift) ^ f.window[f.strstart + 1]) & f.hash_mask);
                      else
                        (C = e._tr_tally(f, 0, f.window[f.strstart])), f.lookahead--, f.strstart++;
                      if (C && (z(f, !1), f.strm.avail_out === 0)) return u;
                    }
                    return (
                      (f.insert = f.strstart < p - 1 ? f.strstart : p - 1),
                      L === r
                        ? (z(f, !0), f.strm.avail_out === 0 ? j : M)
                        : f.last_lit && (z(f, !1), f.strm.avail_out === 0)
                        ? u
                        : B
                    );
                  }
                  function re(f, L) {
                    for (var F, C, S; ; ) {
                      if (f.lookahead < D) {
                        if ((ie(f), f.lookahead < D && L === g)) return u;
                        if (f.lookahead === 0) break;
                      }
                      if (
                        ((F = 0),
                        f.lookahead >= p &&
                          ((f.ins_h =
                            ((f.ins_h << f.hash_shift) ^ f.window[f.strstart + p - 1]) &
                            f.hash_mask),
                          (F = f.prev[f.strstart & f.w_mask] = f.head[f.ins_h]),
                          (f.head[f.ins_h] = f.strstart)),
                        (f.prev_length = f.match_length),
                        (f.prev_match = f.match_start),
                        (f.match_length = p - 1),
                        F !== 0 &&
                          f.prev_length < f.max_lazy_match &&
                          f.strstart - F <= f.w_size - D &&
                          ((f.match_length = X(f, F)),
                          f.match_length <= 5 &&
                            (f.strategy === 1 ||
                              (f.match_length === p && 4096 < f.strstart - f.match_start)) &&
                            (f.match_length = p - 1)),
                        f.prev_length >= p && f.match_length <= f.prev_length)
                      ) {
                        for (
                          S = f.strstart + f.lookahead - p,
                            C = e._tr_tally(f, f.strstart - 1 - f.prev_match, f.prev_length - p),
                            f.lookahead -= f.prev_length - 1,
                            f.prev_length -= 2;
                          ++f.strstart <= S &&
                            ((f.ins_h =
                              ((f.ins_h << f.hash_shift) ^ f.window[f.strstart + p - 1]) &
                              f.hash_mask),
                            (F = f.prev[f.strstart & f.w_mask] = f.head[f.ins_h]),
                            (f.head[f.ins_h] = f.strstart)),
                            --f.prev_length != 0;

                        );
                        if (
                          ((f.match_available = 0),
                          (f.match_length = p - 1),
                          f.strstart++,
                          C && (z(f, !1), f.strm.avail_out === 0))
                        )
                          return u;
                      } else if (f.match_available) {
                        if (
                          ((C = e._tr_tally(f, 0, f.window[f.strstart - 1])) && z(f, !1),
                          f.strstart++,
                          f.lookahead--,
                          f.strm.avail_out === 0)
                        )
                          return u;
                      } else (f.match_available = 1), f.strstart++, f.lookahead--;
                    }
                    return (
                      f.match_available &&
                        ((C = e._tr_tally(f, 0, f.window[f.strstart - 1])),
                        (f.match_available = 0)),
                      (f.insert = f.strstart < p - 1 ? f.strstart : p - 1),
                      L === r
                        ? (z(f, !0), f.strm.avail_out === 0 ? j : M)
                        : f.last_lit && (z(f, !1), f.strm.avail_out === 0)
                        ? u
                        : B
                    );
                  }
                  function ae(f, L, F, C, S) {
                    (this.good_length = f),
                      (this.max_lazy = L),
                      (this.nice_length = F),
                      (this.max_chain = C),
                      (this.func = S);
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
                      (this.method = v),
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
                      (this.dyn_ltree = new y.Buf16(2 * t)),
                      (this.dyn_dtree = new y.Buf16(2 * (2 * l + 1))),
                      (this.bl_tree = new y.Buf16(2 * (2 * a + 1))),
                      Q(this.dyn_ltree),
                      Q(this.dyn_dtree),
                      Q(this.bl_tree),
                      (this.l_desc = null),
                      (this.d_desc = null),
                      (this.bl_desc = null),
                      (this.bl_count = new y.Buf16(s + 1)),
                      (this.heap = new y.Buf16(2 * E + 1)),
                      Q(this.heap),
                      (this.heap_len = 0),
                      (this.heap_max = 0),
                      (this.depth = new y.Buf16(2 * E + 1)),
                      Q(this.depth),
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
                  function oe(f) {
                    var L;
                    return f && f.state
                      ? ((f.total_in = f.total_out = 0),
                        (f.data_type = d),
                        ((L = f.state).pending = 0),
                        (L.pending_out = 0),
                        L.wrap < 0 && (L.wrap = -L.wrap),
                        (L.status = L.wrap ? k : A),
                        (f.adler = L.wrap === 2 ? 0 : 1),
                        (L.last_flush = g),
                        e._tr_init(L),
                        o)
                      : Y(f, m);
                  }
                  function we(f) {
                    var L = oe(f);
                    return (
                      L === o &&
                        (function (F) {
                          (F.window_size = 2 * F.w_size),
                            Q(F.head),
                            (F.max_lazy_match = _[F.level].max_lazy),
                            (F.good_match = _[F.level].good_length),
                            (F.nice_match = _[F.level].nice_length),
                            (F.max_chain_length = _[F.level].max_chain),
                            (F.strstart = 0),
                            (F.block_start = 0),
                            (F.lookahead = 0),
                            (F.insert = 0),
                            (F.match_length = F.prev_length = p - 1),
                            (F.match_available = 0),
                            (F.ins_h = 0);
                        })(f.state),
                      L
                    );
                  }
                  function ke(f, L, F, C, S, N) {
                    if (!f) return m;
                    var U = 1;
                    if (
                      (L === c && (L = 6),
                      C < 0 ? ((U = 0), (C = -C)) : 15 < C && ((U = 2), (C -= 16)),
                      S < 1 ||
                        x < S ||
                        F !== v ||
                        C < 8 ||
                        15 < C ||
                        L < 0 ||
                        9 < L ||
                        N < 0 ||
                        h < N)
                    )
                      return Y(f, m);
                    C === 8 && (C = 9);
                    var W = new fe();
                    return (
                      ((f.state = W).strm = f),
                      (W.wrap = U),
                      (W.gzhead = null),
                      (W.w_bits = C),
                      (W.w_size = 1 << W.w_bits),
                      (W.w_mask = W.w_size - 1),
                      (W.hash_bits = S + 7),
                      (W.hash_size = 1 << W.hash_bits),
                      (W.hash_mask = W.hash_size - 1),
                      (W.hash_shift = ~~((W.hash_bits + p - 1) / p)),
                      (W.window = new y.Buf8(2 * W.w_size)),
                      (W.head = new y.Buf16(W.hash_size)),
                      (W.prev = new y.Buf16(W.w_size)),
                      (W.lit_bufsize = 1 << (S + 6)),
                      (W.pending_buf_size = 4 * W.lit_bufsize),
                      (W.pending_buf = new y.Buf8(W.pending_buf_size)),
                      (W.d_buf = 1 * W.lit_bufsize),
                      (W.l_buf = 3 * W.lit_bufsize),
                      (W.level = L),
                      (W.strategy = N),
                      (W.method = F),
                      we(f)
                    );
                  }
                  (_ = [
                    new ae(0, 0, 0, 0, function (f, L) {
                      var F = 65535;
                      for (F > f.pending_buf_size - 5 && (F = f.pending_buf_size - 5); ; ) {
                        if (f.lookahead <= 1) {
                          if ((ie(f), f.lookahead === 0 && L === g)) return u;
                          if (f.lookahead === 0) break;
                        }
                        (f.strstart += f.lookahead), (f.lookahead = 0);
                        var C = f.block_start + F;
                        if (
                          ((f.strstart === 0 || f.strstart >= C) &&
                            ((f.lookahead = f.strstart - C),
                            (f.strstart = C),
                            z(f, !1),
                            f.strm.avail_out === 0)) ||
                          (f.strstart - f.block_start >= f.w_size - D &&
                            (z(f, !1), f.strm.avail_out === 0))
                        )
                          return u;
                      }
                      return (
                        (f.insert = 0),
                        L === r
                          ? (z(f, !0), f.strm.avail_out === 0 ? j : M)
                          : (f.strstart > f.block_start && (z(f, !1), f.strm.avail_out), u)
                      );
                    }),
                    new ae(4, 4, 8, 4, pe),
                    new ae(4, 5, 16, 8, pe),
                    new ae(4, 6, 32, 32, pe),
                    new ae(4, 4, 16, 16, re),
                    new ae(8, 16, 32, 32, re),
                    new ae(8, 16, 128, 128, re),
                    new ae(8, 32, 128, 256, re),
                    new ae(32, 128, 258, 1024, re),
                    new ae(32, 258, 258, 4096, re),
                  ]),
                    (T.deflateInit = function (f, L) {
                      return ke(f, L, v, 15, 8, 0);
                    }),
                    (T.deflateInit2 = ke),
                    (T.deflateReset = we),
                    (T.deflateResetKeep = oe),
                    (T.deflateSetHeader = function (f, L) {
                      return f && f.state
                        ? f.state.wrap !== 2
                          ? m
                          : ((f.state.gzhead = L), o)
                        : m;
                    }),
                    (T.deflate = function (f, L) {
                      var F, C, S, N;
                      if (!f || !f.state || 5 < L || L < 0) return f ? Y(f, m) : m;
                      if (
                        ((C = f.state),
                        !f.output ||
                          (!f.input && f.avail_in !== 0) ||
                          (C.status === 666 && L !== r))
                      )
                        return Y(f, f.avail_out === 0 ? -5 : m);
                      if (((C.strm = f), (F = C.last_flush), (C.last_flush = L), C.status === k))
                        if (C.wrap === 2)
                          (f.adler = 0),
                            ee(C, 31),
                            ee(C, 139),
                            ee(C, 8),
                            C.gzhead
                              ? (ee(
                                  C,
                                  (C.gzhead.text ? 1 : 0) +
                                    (C.gzhead.hcrc ? 2 : 0) +
                                    (C.gzhead.extra ? 4 : 0) +
                                    (C.gzhead.name ? 8 : 0) +
                                    (C.gzhead.comment ? 16 : 0),
                                ),
                                ee(C, 255 & C.gzhead.time),
                                ee(C, (C.gzhead.time >> 8) & 255),
                                ee(C, (C.gzhead.time >> 16) & 255),
                                ee(C, (C.gzhead.time >> 24) & 255),
                                ee(C, C.level === 9 ? 2 : 2 <= C.strategy || C.level < 2 ? 4 : 0),
                                ee(C, 255 & C.gzhead.os),
                                C.gzhead.extra &&
                                  C.gzhead.extra.length &&
                                  (ee(C, 255 & C.gzhead.extra.length),
                                  ee(C, (C.gzhead.extra.length >> 8) & 255)),
                                C.gzhead.hcrc &&
                                  (f.adler = i(f.adler, C.pending_buf, C.pending, 0)),
                                (C.gzindex = 0),
                                (C.status = 69))
                              : (ee(C, 0),
                                ee(C, 0),
                                ee(C, 0),
                                ee(C, 0),
                                ee(C, 0),
                                ee(C, C.level === 9 ? 2 : 2 <= C.strategy || C.level < 2 ? 4 : 0),
                                ee(C, 3),
                                (C.status = A));
                        else {
                          var U = (v + ((C.w_bits - 8) << 4)) << 8;
                          (U |=
                            (2 <= C.strategy || C.level < 2
                              ? 0
                              : C.level < 6
                              ? 1
                              : C.level === 6
                              ? 2
                              : 3) << 6),
                            C.strstart !== 0 && (U |= 32),
                            (U += 31 - (U % 31)),
                            (C.status = A),
                            K(C, U),
                            C.strstart !== 0 && (K(C, f.adler >>> 16), K(C, 65535 & f.adler)),
                            (f.adler = 1);
                        }
                      if (C.status === 69)
                        if (C.gzhead.extra) {
                          for (
                            S = C.pending;
                            C.gzindex < (65535 & C.gzhead.extra.length) &&
                            (C.pending !== C.pending_buf_size ||
                              (C.gzhead.hcrc &&
                                C.pending > S &&
                                (f.adler = i(f.adler, C.pending_buf, C.pending - S, S)),
                              I(f),
                              (S = C.pending),
                              C.pending !== C.pending_buf_size));

                          )
                            ee(C, 255 & C.gzhead.extra[C.gzindex]), C.gzindex++;
                          C.gzhead.hcrc &&
                            C.pending > S &&
                            (f.adler = i(f.adler, C.pending_buf, C.pending - S, S)),
                            C.gzindex === C.gzhead.extra.length &&
                              ((C.gzindex = 0), (C.status = 73));
                        } else C.status = 73;
                      if (C.status === 73)
                        if (C.gzhead.name) {
                          S = C.pending;
                          do {
                            if (
                              C.pending === C.pending_buf_size &&
                              (C.gzhead.hcrc &&
                                C.pending > S &&
                                (f.adler = i(f.adler, C.pending_buf, C.pending - S, S)),
                              I(f),
                              (S = C.pending),
                              C.pending === C.pending_buf_size)
                            ) {
                              N = 1;
                              break;
                            }
                            (N =
                              C.gzindex < C.gzhead.name.length
                                ? 255 & C.gzhead.name.charCodeAt(C.gzindex++)
                                : 0),
                              ee(C, N);
                          } while (N !== 0);
                          C.gzhead.hcrc &&
                            C.pending > S &&
                            (f.adler = i(f.adler, C.pending_buf, C.pending - S, S)),
                            N === 0 && ((C.gzindex = 0), (C.status = 91));
                        } else C.status = 91;
                      if (C.status === 91)
                        if (C.gzhead.comment) {
                          S = C.pending;
                          do {
                            if (
                              C.pending === C.pending_buf_size &&
                              (C.gzhead.hcrc &&
                                C.pending > S &&
                                (f.adler = i(f.adler, C.pending_buf, C.pending - S, S)),
                              I(f),
                              (S = C.pending),
                              C.pending === C.pending_buf_size)
                            ) {
                              N = 1;
                              break;
                            }
                            (N =
                              C.gzindex < C.gzhead.comment.length
                                ? 255 & C.gzhead.comment.charCodeAt(C.gzindex++)
                                : 0),
                              ee(C, N);
                          } while (N !== 0);
                          C.gzhead.hcrc &&
                            C.pending > S &&
                            (f.adler = i(f.adler, C.pending_buf, C.pending - S, S)),
                            N === 0 && (C.status = 103);
                        } else C.status = 103;
                      if (
                        (C.status === 103 &&
                          (C.gzhead.hcrc
                            ? (C.pending + 2 > C.pending_buf_size && I(f),
                              C.pending + 2 <= C.pending_buf_size &&
                                (ee(C, 255 & f.adler),
                                ee(C, (f.adler >> 8) & 255),
                                (f.adler = 0),
                                (C.status = A)))
                            : (C.status = A)),
                        C.pending !== 0)
                      ) {
                        if ((I(f), f.avail_out === 0)) return (C.last_flush = -1), o;
                      } else if (f.avail_in === 0 && $(L) <= $(F) && L !== r) return Y(f, -5);
                      if (C.status === 666 && f.avail_in !== 0) return Y(f, -5);
                      if (f.avail_in !== 0 || C.lookahead !== 0 || (L !== g && C.status !== 666)) {
                        var W =
                          C.strategy === 2
                            ? (function (O, H) {
                                for (var J; ; ) {
                                  if (O.lookahead === 0 && (ie(O), O.lookahead === 0)) {
                                    if (H === g) return u;
                                    break;
                                  }
                                  if (
                                    ((O.match_length = 0),
                                    (J = e._tr_tally(O, 0, O.window[O.strstart])),
                                    O.lookahead--,
                                    O.strstart++,
                                    J && (z(O, !1), O.strm.avail_out === 0))
                                  )
                                    return u;
                                }
                                return (
                                  (O.insert = 0),
                                  H === r
                                    ? (z(O, !0), O.strm.avail_out === 0 ? j : M)
                                    : O.last_lit && (z(O, !1), O.strm.avail_out === 0)
                                    ? u
                                    : B
                                );
                              })(C, L)
                            : C.strategy === 3
                            ? (function (O, H) {
                                for (var J, V, te, se, ne = O.window; ; ) {
                                  if (O.lookahead <= w) {
                                    if ((ie(O), O.lookahead <= w && H === g)) return u;
                                    if (O.lookahead === 0) break;
                                  }
                                  if (
                                    ((O.match_length = 0),
                                    O.lookahead >= p &&
                                      0 < O.strstart &&
                                      (V = ne[(te = O.strstart - 1)]) === ne[++te] &&
                                      V === ne[++te] &&
                                      V === ne[++te])
                                  ) {
                                    se = O.strstart + w;
                                    do;
                                    while (
                                      V === ne[++te] &&
                                      V === ne[++te] &&
                                      V === ne[++te] &&
                                      V === ne[++te] &&
                                      V === ne[++te] &&
                                      V === ne[++te] &&
                                      V === ne[++te] &&
                                      V === ne[++te] &&
                                      te < se
                                    );
                                    (O.match_length = w - (se - te)),
                                      O.match_length > O.lookahead &&
                                        (O.match_length = O.lookahead);
                                  }
                                  if (
                                    (O.match_length >= p
                                      ? ((J = e._tr_tally(O, 1, O.match_length - p)),
                                        (O.lookahead -= O.match_length),
                                        (O.strstart += O.match_length),
                                        (O.match_length = 0))
                                      : ((J = e._tr_tally(O, 0, O.window[O.strstart])),
                                        O.lookahead--,
                                        O.strstart++),
                                    J && (z(O, !1), O.strm.avail_out === 0))
                                  )
                                    return u;
                                }
                                return (
                                  (O.insert = 0),
                                  H === r
                                    ? (z(O, !0), O.strm.avail_out === 0 ? j : M)
                                    : O.last_lit && (z(O, !1), O.strm.avail_out === 0)
                                    ? u
                                    : B
                                );
                              })(C, L)
                            : _[C.level].func(C, L);
                        if (((W !== j && W !== M) || (C.status = 666), W === u || W === j))
                          return f.avail_out === 0 && (C.last_flush = -1), o;
                        if (
                          W === B &&
                          (L === 1
                            ? e._tr_align(C)
                            : L !== 5 &&
                              (e._tr_stored_block(C, 0, 0, !1),
                              L === 3 &&
                                (Q(C.head),
                                C.lookahead === 0 &&
                                  ((C.strstart = 0), (C.block_start = 0), (C.insert = 0)))),
                          I(f),
                          f.avail_out === 0)
                        )
                          return (C.last_flush = -1), o;
                      }
                      return L !== r
                        ? o
                        : C.wrap <= 0
                        ? 1
                        : (C.wrap === 2
                            ? (ee(C, 255 & f.adler),
                              ee(C, (f.adler >> 8) & 255),
                              ee(C, (f.adler >> 16) & 255),
                              ee(C, (f.adler >> 24) & 255),
                              ee(C, 255 & f.total_in),
                              ee(C, (f.total_in >> 8) & 255),
                              ee(C, (f.total_in >> 16) & 255),
                              ee(C, (f.total_in >> 24) & 255))
                            : (K(C, f.adler >>> 16), K(C, 65535 & f.adler)),
                          I(f),
                          0 < C.wrap && (C.wrap = -C.wrap),
                          C.pending !== 0 ? o : 1);
                    }),
                    (T.deflateEnd = function (f) {
                      var L;
                      return f && f.state
                        ? (L = f.state.status) !== k &&
                          L !== 69 &&
                          L !== 73 &&
                          L !== 91 &&
                          L !== 103 &&
                          L !== A &&
                          L !== 666
                          ? Y(f, m)
                          : ((f.state = null), L === A ? Y(f, -3) : o)
                        : m;
                    }),
                    (T.deflateSetDictionary = function (f, L) {
                      var F,
                        C,
                        S,
                        N,
                        U,
                        W,
                        O,
                        H,
                        J = L.length;
                      if (
                        !f ||
                        !f.state ||
                        (N = (F = f.state).wrap) === 2 ||
                        (N === 1 && F.status !== k) ||
                        F.lookahead
                      )
                        return m;
                      for (
                        N === 1 && (f.adler = n(f.adler, L, J, 0)),
                          F.wrap = 0,
                          J >= F.w_size &&
                            (N === 0 &&
                              (Q(F.head), (F.strstart = 0), (F.block_start = 0), (F.insert = 0)),
                            (H = new y.Buf8(F.w_size)),
                            y.arraySet(H, L, J - F.w_size, F.w_size, 0),
                            (L = H),
                            (J = F.w_size)),
                          U = f.avail_in,
                          W = f.next_in,
                          O = f.input,
                          f.avail_in = J,
                          f.next_in = 0,
                          f.input = L,
                          ie(F);
                        F.lookahead >= p;

                      ) {
                        for (
                          C = F.strstart, S = F.lookahead - (p - 1);
                          (F.ins_h =
                            ((F.ins_h << F.hash_shift) ^ F.window[C + p - 1]) & F.hash_mask),
                            (F.prev[C & F.w_mask] = F.head[F.ins_h]),
                            (F.head[F.ins_h] = C),
                            C++,
                            --S;

                        );
                        (F.strstart = C), (F.lookahead = p - 1), ie(F);
                      }
                      return (
                        (F.strstart += F.lookahead),
                        (F.block_start = F.strstart),
                        (F.insert = F.lookahead),
                        (F.lookahead = 0),
                        (F.match_length = F.prev_length = p - 1),
                        (F.match_available = 0),
                        (f.next_in = W),
                        (f.input = O),
                        (f.avail_in = U),
                        (F.wrap = N),
                        o
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
                function (P, R, T) {
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
                function (P, R, T) {
                  R.exports = function (_, y) {
                    var e, n, i, b, g, r, o, m, c, h, d, v, x, E, l, a, t, s, p, w, D, k, A, u, B;
                    (e = _.state),
                      (n = _.next_in),
                      (u = _.input),
                      (i = n + (_.avail_in - 5)),
                      (b = _.next_out),
                      (B = _.output),
                      (g = b - (y - _.avail_out)),
                      (r = b + (_.avail_out - 257)),
                      (o = e.dmax),
                      (m = e.wsize),
                      (c = e.whave),
                      (h = e.wnext),
                      (d = e.window),
                      (v = e.hold),
                      (x = e.bits),
                      (E = e.lencode),
                      (l = e.distcode),
                      (a = (1 << e.lenbits) - 1),
                      (t = (1 << e.distbits) - 1);
                    e: do {
                      x < 15 && ((v += u[n++] << x), (x += 8), (v += u[n++] << x), (x += 8)),
                        (s = E[v & a]);
                      t: for (;;) {
                        if (((v >>>= p = s >>> 24), (x -= p), (p = (s >>> 16) & 255) === 0))
                          B[b++] = 65535 & s;
                        else {
                          if (!(16 & p)) {
                            if (!(64 & p)) {
                              s = E[(65535 & s) + (v & ((1 << p) - 1))];
                              continue t;
                            }
                            if (32 & p) {
                              e.mode = 12;
                              break e;
                            }
                            (_.msg = 'invalid literal/length code'), (e.mode = 30);
                            break e;
                          }
                          (w = 65535 & s),
                            (p &= 15) &&
                              (x < p && ((v += u[n++] << x), (x += 8)),
                              (w += v & ((1 << p) - 1)),
                              (v >>>= p),
                              (x -= p)),
                            x < 15 && ((v += u[n++] << x), (x += 8), (v += u[n++] << x), (x += 8)),
                            (s = l[v & t]);
                          r: for (;;) {
                            if (((v >>>= p = s >>> 24), (x -= p), !(16 & (p = (s >>> 16) & 255)))) {
                              if (!(64 & p)) {
                                s = l[(65535 & s) + (v & ((1 << p) - 1))];
                                continue r;
                              }
                              (_.msg = 'invalid distance code'), (e.mode = 30);
                              break e;
                            }
                            if (
                              ((D = 65535 & s),
                              x < (p &= 15) &&
                                ((v += u[n++] << x),
                                (x += 8) < p && ((v += u[n++] << x), (x += 8))),
                              o < (D += v & ((1 << p) - 1)))
                            ) {
                              (_.msg = 'invalid distance too far back'), (e.mode = 30);
                              break e;
                            }
                            if (((v >>>= p), (x -= p), (p = b - g) < D)) {
                              if (c < (p = D - p) && e.sane) {
                                (_.msg = 'invalid distance too far back'), (e.mode = 30);
                                break e;
                              }
                              if (((A = d), (k = 0) === h)) {
                                if (((k += m - p), p < w)) {
                                  for (w -= p; (B[b++] = d[k++]), --p; );
                                  (k = b - D), (A = B);
                                }
                              } else if (h < p) {
                                if (((k += m + h - p), (p -= h) < w)) {
                                  for (w -= p; (B[b++] = d[k++]), --p; );
                                  if (((k = 0), h < w)) {
                                    for (w -= p = h; (B[b++] = d[k++]), --p; );
                                    (k = b - D), (A = B);
                                  }
                                }
                              } else if (((k += h - p), p < w)) {
                                for (w -= p; (B[b++] = d[k++]), --p; );
                                (k = b - D), (A = B);
                              }
                              for (; 2 < w; )
                                (B[b++] = A[k++]), (B[b++] = A[k++]), (B[b++] = A[k++]), (w -= 3);
                              w && ((B[b++] = A[k++]), 1 < w && (B[b++] = A[k++]));
                            } else {
                              for (
                                k = b - D;
                                (B[b++] = B[k++]),
                                  (B[b++] = B[k++]),
                                  (B[b++] = B[k++]),
                                  2 < (w -= 3);

                              );
                              w && ((B[b++] = B[k++]), 1 < w && (B[b++] = B[k++]));
                            }
                            break;
                          }
                        }
                        break;
                      }
                    } while (n < i && b < r);
                    (n -= w = x >> 3),
                      (v &= (1 << (x -= w << 3)) - 1),
                      (_.next_in = n),
                      (_.next_out = b),
                      (_.avail_in = n < i ? i - n + 5 : 5 - (n - i)),
                      (_.avail_out = b < r ? r - b + 257 : 257 - (b - r)),
                      (e.hold = v),
                      (e.bits = x);
                  };
                },
                {},
              ],
              49: [
                function (P, R, T) {
                  var _ = P('../utils/common'),
                    y = P('./adler32'),
                    e = P('./crc32'),
                    n = P('./inffast'),
                    i = P('./inftrees'),
                    b = 1,
                    g = 2,
                    r = 0,
                    o = -2,
                    m = 1,
                    c = 852,
                    h = 592;
                  function d(k) {
                    return (
                      ((k >>> 24) & 255) +
                      ((k >>> 8) & 65280) +
                      ((65280 & k) << 8) +
                      ((255 & k) << 24)
                    );
                  }
                  function v() {
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
                      (this.lens = new _.Buf16(320)),
                      (this.work = new _.Buf16(288)),
                      (this.lendyn = null),
                      (this.distdyn = null),
                      (this.sane = 0),
                      (this.back = 0),
                      (this.was = 0);
                  }
                  function x(k) {
                    var A;
                    return k && k.state
                      ? ((A = k.state),
                        (k.total_in = k.total_out = A.total = 0),
                        (k.msg = ''),
                        A.wrap && (k.adler = 1 & A.wrap),
                        (A.mode = m),
                        (A.last = 0),
                        (A.havedict = 0),
                        (A.dmax = 32768),
                        (A.head = null),
                        (A.hold = 0),
                        (A.bits = 0),
                        (A.lencode = A.lendyn = new _.Buf32(c)),
                        (A.distcode = A.distdyn = new _.Buf32(h)),
                        (A.sane = 1),
                        (A.back = -1),
                        r)
                      : o;
                  }
                  function E(k) {
                    var A;
                    return k && k.state
                      ? (((A = k.state).wsize = 0), (A.whave = 0), (A.wnext = 0), x(k))
                      : o;
                  }
                  function l(k, A) {
                    var u, B;
                    return k && k.state
                      ? ((B = k.state),
                        A < 0 ? ((u = 0), (A = -A)) : ((u = 1 + (A >> 4)), A < 48 && (A &= 15)),
                        A && (A < 8 || 15 < A)
                          ? o
                          : (B.window !== null && B.wbits !== A && (B.window = null),
                            (B.wrap = u),
                            (B.wbits = A),
                            E(k)))
                      : o;
                  }
                  function a(k, A) {
                    var u, B;
                    return k
                      ? ((B = new v()),
                        ((k.state = B).window = null),
                        (u = l(k, A)) !== r && (k.state = null),
                        u)
                      : o;
                  }
                  var t,
                    s,
                    p = !0;
                  function w(k) {
                    if (p) {
                      var A;
                      for (t = new _.Buf32(512), s = new _.Buf32(32), A = 0; A < 144; )
                        k.lens[A++] = 8;
                      for (; A < 256; ) k.lens[A++] = 9;
                      for (; A < 280; ) k.lens[A++] = 7;
                      for (; A < 288; ) k.lens[A++] = 8;
                      for (i(b, k.lens, 0, 288, t, 0, k.work, { bits: 9 }), A = 0; A < 32; )
                        k.lens[A++] = 5;
                      i(g, k.lens, 0, 32, s, 0, k.work, { bits: 5 }), (p = !1);
                    }
                    (k.lencode = t), (k.lenbits = 9), (k.distcode = s), (k.distbits = 5);
                  }
                  function D(k, A, u, B) {
                    var j,
                      M = k.state;
                    return (
                      M.window === null &&
                        ((M.wsize = 1 << M.wbits),
                        (M.wnext = 0),
                        (M.whave = 0),
                        (M.window = new _.Buf8(M.wsize))),
                      B >= M.wsize
                        ? (_.arraySet(M.window, A, u - M.wsize, M.wsize, 0),
                          (M.wnext = 0),
                          (M.whave = M.wsize))
                        : (B < (j = M.wsize - M.wnext) && (j = B),
                          _.arraySet(M.window, A, u - B, j, M.wnext),
                          (B -= j)
                            ? (_.arraySet(M.window, A, u - B, B, 0),
                              (M.wnext = B),
                              (M.whave = M.wsize))
                            : ((M.wnext += j),
                              M.wnext === M.wsize && (M.wnext = 0),
                              M.whave < M.wsize && (M.whave += j))),
                      0
                    );
                  }
                  (T.inflateReset = E),
                    (T.inflateReset2 = l),
                    (T.inflateResetKeep = x),
                    (T.inflateInit = function (k) {
                      return a(k, 15);
                    }),
                    (T.inflateInit2 = a),
                    (T.inflate = function (k, A) {
                      var u,
                        B,
                        j,
                        M,
                        Y,
                        $,
                        Q,
                        I,
                        z,
                        ee,
                        K,
                        X,
                        ie,
                        pe,
                        re,
                        ae,
                        fe,
                        oe,
                        we,
                        ke,
                        f,
                        L,
                        F,
                        C,
                        S = 0,
                        N = new _.Buf8(4),
                        U = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
                      if (!k || !k.state || !k.output || (!k.input && k.avail_in !== 0)) return o;
                      (u = k.state).mode === 12 && (u.mode = 13),
                        (Y = k.next_out),
                        (j = k.output),
                        (Q = k.avail_out),
                        (M = k.next_in),
                        (B = k.input),
                        ($ = k.avail_in),
                        (I = u.hold),
                        (z = u.bits),
                        (ee = $),
                        (K = Q),
                        (L = r);
                      e: for (;;)
                        switch (u.mode) {
                          case m:
                            if (u.wrap === 0) {
                              u.mode = 13;
                              break;
                            }
                            for (; z < 16; ) {
                              if ($ === 0) break e;
                              $--, (I += B[M++] << z), (z += 8);
                            }
                            if (2 & u.wrap && I === 35615) {
                              (N[(u.check = 0)] = 255 & I),
                                (N[1] = (I >>> 8) & 255),
                                (u.check = e(u.check, N, 2, 0)),
                                (z = I = 0),
                                (u.mode = 2);
                              break;
                            }
                            if (
                              ((u.flags = 0),
                              u.head && (u.head.done = !1),
                              !(1 & u.wrap) || (((255 & I) << 8) + (I >> 8)) % 31)
                            ) {
                              (k.msg = 'incorrect header check'), (u.mode = 30);
                              break;
                            }
                            if ((15 & I) != 8) {
                              (k.msg = 'unknown compression method'), (u.mode = 30);
                              break;
                            }
                            if (((z -= 4), (f = 8 + (15 & (I >>>= 4))), u.wbits === 0)) u.wbits = f;
                            else if (f > u.wbits) {
                              (k.msg = 'invalid window size'), (u.mode = 30);
                              break;
                            }
                            (u.dmax = 1 << f),
                              (k.adler = u.check = 1),
                              (u.mode = 512 & I ? 10 : 12),
                              (z = I = 0);
                            break;
                          case 2:
                            for (; z < 16; ) {
                              if ($ === 0) break e;
                              $--, (I += B[M++] << z), (z += 8);
                            }
                            if (((u.flags = I), (255 & u.flags) != 8)) {
                              (k.msg = 'unknown compression method'), (u.mode = 30);
                              break;
                            }
                            if (57344 & u.flags) {
                              (k.msg = 'unknown header flags set'), (u.mode = 30);
                              break;
                            }
                            u.head && (u.head.text = (I >> 8) & 1),
                              512 & u.flags &&
                                ((N[0] = 255 & I),
                                (N[1] = (I >>> 8) & 255),
                                (u.check = e(u.check, N, 2, 0))),
                              (z = I = 0),
                              (u.mode = 3);
                          case 3:
                            for (; z < 32; ) {
                              if ($ === 0) break e;
                              $--, (I += B[M++] << z), (z += 8);
                            }
                            u.head && (u.head.time = I),
                              512 & u.flags &&
                                ((N[0] = 255 & I),
                                (N[1] = (I >>> 8) & 255),
                                (N[2] = (I >>> 16) & 255),
                                (N[3] = (I >>> 24) & 255),
                                (u.check = e(u.check, N, 4, 0))),
                              (z = I = 0),
                              (u.mode = 4);
                          case 4:
                            for (; z < 16; ) {
                              if ($ === 0) break e;
                              $--, (I += B[M++] << z), (z += 8);
                            }
                            u.head && ((u.head.xflags = 255 & I), (u.head.os = I >> 8)),
                              512 & u.flags &&
                                ((N[0] = 255 & I),
                                (N[1] = (I >>> 8) & 255),
                                (u.check = e(u.check, N, 2, 0))),
                              (z = I = 0),
                              (u.mode = 5);
                          case 5:
                            if (1024 & u.flags) {
                              for (; z < 16; ) {
                                if ($ === 0) break e;
                                $--, (I += B[M++] << z), (z += 8);
                              }
                              (u.length = I),
                                u.head && (u.head.extra_len = I),
                                512 & u.flags &&
                                  ((N[0] = 255 & I),
                                  (N[1] = (I >>> 8) & 255),
                                  (u.check = e(u.check, N, 2, 0))),
                                (z = I = 0);
                            } else u.head && (u.head.extra = null);
                            u.mode = 6;
                          case 6:
                            if (
                              1024 & u.flags &&
                              ($ < (X = u.length) && (X = $),
                              X &&
                                (u.head &&
                                  ((f = u.head.extra_len - u.length),
                                  u.head.extra || (u.head.extra = new Array(u.head.extra_len)),
                                  _.arraySet(u.head.extra, B, M, X, f)),
                                512 & u.flags && (u.check = e(u.check, B, X, M)),
                                ($ -= X),
                                (M += X),
                                (u.length -= X)),
                              u.length)
                            )
                              break e;
                            (u.length = 0), (u.mode = 7);
                          case 7:
                            if (2048 & u.flags) {
                              if ($ === 0) break e;
                              for (
                                X = 0;
                                (f = B[M + X++]),
                                  u.head &&
                                    f &&
                                    u.length < 65536 &&
                                    (u.head.name += String.fromCharCode(f)),
                                  f && X < $;

                              );
                              if (
                                (512 & u.flags && (u.check = e(u.check, B, X, M)),
                                ($ -= X),
                                (M += X),
                                f)
                              )
                                break e;
                            } else u.head && (u.head.name = null);
                            (u.length = 0), (u.mode = 8);
                          case 8:
                            if (4096 & u.flags) {
                              if ($ === 0) break e;
                              for (
                                X = 0;
                                (f = B[M + X++]),
                                  u.head &&
                                    f &&
                                    u.length < 65536 &&
                                    (u.head.comment += String.fromCharCode(f)),
                                  f && X < $;

                              );
                              if (
                                (512 & u.flags && (u.check = e(u.check, B, X, M)),
                                ($ -= X),
                                (M += X),
                                f)
                              )
                                break e;
                            } else u.head && (u.head.comment = null);
                            u.mode = 9;
                          case 9:
                            if (512 & u.flags) {
                              for (; z < 16; ) {
                                if ($ === 0) break e;
                                $--, (I += B[M++] << z), (z += 8);
                              }
                              if (I !== (65535 & u.check)) {
                                (k.msg = 'header crc mismatch'), (u.mode = 30);
                                break;
                              }
                              z = I = 0;
                            }
                            u.head && ((u.head.hcrc = (u.flags >> 9) & 1), (u.head.done = !0)),
                              (k.adler = u.check = 0),
                              (u.mode = 12);
                            break;
                          case 10:
                            for (; z < 32; ) {
                              if ($ === 0) break e;
                              $--, (I += B[M++] << z), (z += 8);
                            }
                            (k.adler = u.check = d(I)), (z = I = 0), (u.mode = 11);
                          case 11:
                            if (u.havedict === 0)
                              return (
                                (k.next_out = Y),
                                (k.avail_out = Q),
                                (k.next_in = M),
                                (k.avail_in = $),
                                (u.hold = I),
                                (u.bits = z),
                                2
                              );
                            (k.adler = u.check = 1), (u.mode = 12);
                          case 12:
                            if (A === 5 || A === 6) break e;
                          case 13:
                            if (u.last) {
                              (I >>>= 7 & z), (z -= 7 & z), (u.mode = 27);
                              break;
                            }
                            for (; z < 3; ) {
                              if ($ === 0) break e;
                              $--, (I += B[M++] << z), (z += 8);
                            }
                            switch (((u.last = 1 & I), (z -= 1), 3 & (I >>>= 1))) {
                              case 0:
                                u.mode = 14;
                                break;
                              case 1:
                                if ((w(u), (u.mode = 20), A !== 6)) break;
                                (I >>>= 2), (z -= 2);
                                break e;
                              case 2:
                                u.mode = 17;
                                break;
                              case 3:
                                (k.msg = 'invalid block type'), (u.mode = 30);
                            }
                            (I >>>= 2), (z -= 2);
                            break;
                          case 14:
                            for (I >>>= 7 & z, z -= 7 & z; z < 32; ) {
                              if ($ === 0) break e;
                              $--, (I += B[M++] << z), (z += 8);
                            }
                            if ((65535 & I) != ((I >>> 16) ^ 65535)) {
                              (k.msg = 'invalid stored block lengths'), (u.mode = 30);
                              break;
                            }
                            if (((u.length = 65535 & I), (z = I = 0), (u.mode = 15), A === 6))
                              break e;
                          case 15:
                            u.mode = 16;
                          case 16:
                            if ((X = u.length)) {
                              if (($ < X && (X = $), Q < X && (X = Q), X === 0)) break e;
                              _.arraySet(j, B, M, X, Y),
                                ($ -= X),
                                (M += X),
                                (Q -= X),
                                (Y += X),
                                (u.length -= X);
                              break;
                            }
                            u.mode = 12;
                            break;
                          case 17:
                            for (; z < 14; ) {
                              if ($ === 0) break e;
                              $--, (I += B[M++] << z), (z += 8);
                            }
                            if (
                              ((u.nlen = 257 + (31 & I)),
                              (I >>>= 5),
                              (z -= 5),
                              (u.ndist = 1 + (31 & I)),
                              (I >>>= 5),
                              (z -= 5),
                              (u.ncode = 4 + (15 & I)),
                              (I >>>= 4),
                              (z -= 4),
                              286 < u.nlen || 30 < u.ndist)
                            ) {
                              (k.msg = 'too many length or distance symbols'), (u.mode = 30);
                              break;
                            }
                            (u.have = 0), (u.mode = 18);
                          case 18:
                            for (; u.have < u.ncode; ) {
                              for (; z < 3; ) {
                                if ($ === 0) break e;
                                $--, (I += B[M++] << z), (z += 8);
                              }
                              (u.lens[U[u.have++]] = 7 & I), (I >>>= 3), (z -= 3);
                            }
                            for (; u.have < 19; ) u.lens[U[u.have++]] = 0;
                            if (
                              ((u.lencode = u.lendyn),
                              (u.lenbits = 7),
                              (F = { bits: u.lenbits }),
                              (L = i(0, u.lens, 0, 19, u.lencode, 0, u.work, F)),
                              (u.lenbits = F.bits),
                              L)
                            ) {
                              (k.msg = 'invalid code lengths set'), (u.mode = 30);
                              break;
                            }
                            (u.have = 0), (u.mode = 19);
                          case 19:
                            for (; u.have < u.nlen + u.ndist; ) {
                              for (
                                ;
                                (ae = ((S = u.lencode[I & ((1 << u.lenbits) - 1)]) >>> 16) & 255),
                                  (fe = 65535 & S),
                                  !((re = S >>> 24) <= z);

                              ) {
                                if ($ === 0) break e;
                                $--, (I += B[M++] << z), (z += 8);
                              }
                              if (fe < 16) (I >>>= re), (z -= re), (u.lens[u.have++] = fe);
                              else {
                                if (fe === 16) {
                                  for (C = re + 2; z < C; ) {
                                    if ($ === 0) break e;
                                    $--, (I += B[M++] << z), (z += 8);
                                  }
                                  if (((I >>>= re), (z -= re), u.have === 0)) {
                                    (k.msg = 'invalid bit length repeat'), (u.mode = 30);
                                    break;
                                  }
                                  (f = u.lens[u.have - 1]), (X = 3 + (3 & I)), (I >>>= 2), (z -= 2);
                                } else if (fe === 17) {
                                  for (C = re + 3; z < C; ) {
                                    if ($ === 0) break e;
                                    $--, (I += B[M++] << z), (z += 8);
                                  }
                                  (z -= re),
                                    (f = 0),
                                    (X = 3 + (7 & (I >>>= re))),
                                    (I >>>= 3),
                                    (z -= 3);
                                } else {
                                  for (C = re + 7; z < C; ) {
                                    if ($ === 0) break e;
                                    $--, (I += B[M++] << z), (z += 8);
                                  }
                                  (z -= re),
                                    (f = 0),
                                    (X = 11 + (127 & (I >>>= re))),
                                    (I >>>= 7),
                                    (z -= 7);
                                }
                                if (u.have + X > u.nlen + u.ndist) {
                                  (k.msg = 'invalid bit length repeat'), (u.mode = 30);
                                  break;
                                }
                                for (; X--; ) u.lens[u.have++] = f;
                              }
                            }
                            if (u.mode === 30) break;
                            if (u.lens[256] === 0) {
                              (k.msg = 'invalid code -- missing end-of-block'), (u.mode = 30);
                              break;
                            }
                            if (
                              ((u.lenbits = 9),
                              (F = { bits: u.lenbits }),
                              (L = i(b, u.lens, 0, u.nlen, u.lencode, 0, u.work, F)),
                              (u.lenbits = F.bits),
                              L)
                            ) {
                              (k.msg = 'invalid literal/lengths set'), (u.mode = 30);
                              break;
                            }
                            if (
                              ((u.distbits = 6),
                              (u.distcode = u.distdyn),
                              (F = { bits: u.distbits }),
                              (L = i(g, u.lens, u.nlen, u.ndist, u.distcode, 0, u.work, F)),
                              (u.distbits = F.bits),
                              L)
                            ) {
                              (k.msg = 'invalid distances set'), (u.mode = 30);
                              break;
                            }
                            if (((u.mode = 20), A === 6)) break e;
                          case 20:
                            u.mode = 21;
                          case 21:
                            if (6 <= $ && 258 <= Q) {
                              (k.next_out = Y),
                                (k.avail_out = Q),
                                (k.next_in = M),
                                (k.avail_in = $),
                                (u.hold = I),
                                (u.bits = z),
                                n(k, K),
                                (Y = k.next_out),
                                (j = k.output),
                                (Q = k.avail_out),
                                (M = k.next_in),
                                (B = k.input),
                                ($ = k.avail_in),
                                (I = u.hold),
                                (z = u.bits),
                                u.mode === 12 && (u.back = -1);
                              break;
                            }
                            for (
                              u.back = 0;
                              (ae = ((S = u.lencode[I & ((1 << u.lenbits) - 1)]) >>> 16) & 255),
                                (fe = 65535 & S),
                                !((re = S >>> 24) <= z);

                            ) {
                              if ($ === 0) break e;
                              $--, (I += B[M++] << z), (z += 8);
                            }
                            if (ae && !(240 & ae)) {
                              for (
                                oe = re, we = ae, ke = fe;
                                (ae =
                                  ((S = u.lencode[ke + ((I & ((1 << (oe + we)) - 1)) >> oe)]) >>>
                                    16) &
                                  255),
                                  (fe = 65535 & S),
                                  !(oe + (re = S >>> 24) <= z);

                              ) {
                                if ($ === 0) break e;
                                $--, (I += B[M++] << z), (z += 8);
                              }
                              (I >>>= oe), (z -= oe), (u.back += oe);
                            }
                            if (
                              ((I >>>= re), (z -= re), (u.back += re), (u.length = fe), ae === 0)
                            ) {
                              u.mode = 26;
                              break;
                            }
                            if (32 & ae) {
                              (u.back = -1), (u.mode = 12);
                              break;
                            }
                            if (64 & ae) {
                              (k.msg = 'invalid literal/length code'), (u.mode = 30);
                              break;
                            }
                            (u.extra = 15 & ae), (u.mode = 22);
                          case 22:
                            if (u.extra) {
                              for (C = u.extra; z < C; ) {
                                if ($ === 0) break e;
                                $--, (I += B[M++] << z), (z += 8);
                              }
                              (u.length += I & ((1 << u.extra) - 1)),
                                (I >>>= u.extra),
                                (z -= u.extra),
                                (u.back += u.extra);
                            }
                            (u.was = u.length), (u.mode = 23);
                          case 23:
                            for (
                              ;
                              (ae = ((S = u.distcode[I & ((1 << u.distbits) - 1)]) >>> 16) & 255),
                                (fe = 65535 & S),
                                !((re = S >>> 24) <= z);

                            ) {
                              if ($ === 0) break e;
                              $--, (I += B[M++] << z), (z += 8);
                            }
                            if (!(240 & ae)) {
                              for (
                                oe = re, we = ae, ke = fe;
                                (ae =
                                  ((S = u.distcode[ke + ((I & ((1 << (oe + we)) - 1)) >> oe)]) >>>
                                    16) &
                                  255),
                                  (fe = 65535 & S),
                                  !(oe + (re = S >>> 24) <= z);

                              ) {
                                if ($ === 0) break e;
                                $--, (I += B[M++] << z), (z += 8);
                              }
                              (I >>>= oe), (z -= oe), (u.back += oe);
                            }
                            if (((I >>>= re), (z -= re), (u.back += re), 64 & ae)) {
                              (k.msg = 'invalid distance code'), (u.mode = 30);
                              break;
                            }
                            (u.offset = fe), (u.extra = 15 & ae), (u.mode = 24);
                          case 24:
                            if (u.extra) {
                              for (C = u.extra; z < C; ) {
                                if ($ === 0) break e;
                                $--, (I += B[M++] << z), (z += 8);
                              }
                              (u.offset += I & ((1 << u.extra) - 1)),
                                (I >>>= u.extra),
                                (z -= u.extra),
                                (u.back += u.extra);
                            }
                            if (u.offset > u.dmax) {
                              (k.msg = 'invalid distance too far back'), (u.mode = 30);
                              break;
                            }
                            u.mode = 25;
                          case 25:
                            if (Q === 0) break e;
                            if (((X = K - Q), u.offset > X)) {
                              if ((X = u.offset - X) > u.whave && u.sane) {
                                (k.msg = 'invalid distance too far back'), (u.mode = 30);
                                break;
                              }
                              (ie = X > u.wnext ? ((X -= u.wnext), u.wsize - X) : u.wnext - X),
                                X > u.length && (X = u.length),
                                (pe = u.window);
                            } else (pe = j), (ie = Y - u.offset), (X = u.length);
                            for (
                              Q < X && (X = Q), Q -= X, u.length -= X;
                              (j[Y++] = pe[ie++]), --X;

                            );
                            u.length === 0 && (u.mode = 21);
                            break;
                          case 26:
                            if (Q === 0) break e;
                            (j[Y++] = u.length), Q--, (u.mode = 21);
                            break;
                          case 27:
                            if (u.wrap) {
                              for (; z < 32; ) {
                                if ($ === 0) break e;
                                $--, (I |= B[M++] << z), (z += 8);
                              }
                              if (
                                ((K -= Q),
                                (k.total_out += K),
                                (u.total += K),
                                K &&
                                  (k.adler = u.check =
                                    u.flags ? e(u.check, j, K, Y - K) : y(u.check, j, K, Y - K)),
                                (K = Q),
                                (u.flags ? I : d(I)) !== u.check)
                              ) {
                                (k.msg = 'incorrect data check'), (u.mode = 30);
                                break;
                              }
                              z = I = 0;
                            }
                            u.mode = 28;
                          case 28:
                            if (u.wrap && u.flags) {
                              for (; z < 32; ) {
                                if ($ === 0) break e;
                                $--, (I += B[M++] << z), (z += 8);
                              }
                              if (I !== (4294967295 & u.total)) {
                                (k.msg = 'incorrect length check'), (u.mode = 30);
                                break;
                              }
                              z = I = 0;
                            }
                            u.mode = 29;
                          case 29:
                            L = 1;
                            break e;
                          case 30:
                            L = -3;
                            break e;
                          case 31:
                            return -4;
                          case 32:
                          default:
                            return o;
                        }
                      return (
                        (k.next_out = Y),
                        (k.avail_out = Q),
                        (k.next_in = M),
                        (k.avail_in = $),
                        (u.hold = I),
                        (u.bits = z),
                        (u.wsize ||
                          (K !== k.avail_out && u.mode < 30 && (u.mode < 27 || A !== 4))) &&
                        D(k, k.output, k.next_out, K - k.avail_out)
                          ? ((u.mode = 31), -4)
                          : ((ee -= k.avail_in),
                            (K -= k.avail_out),
                            (k.total_in += ee),
                            (k.total_out += K),
                            (u.total += K),
                            u.wrap &&
                              K &&
                              (k.adler = u.check =
                                u.flags
                                  ? e(u.check, j, K, k.next_out - K)
                                  : y(u.check, j, K, k.next_out - K)),
                            (k.data_type =
                              u.bits +
                              (u.last ? 64 : 0) +
                              (u.mode === 12 ? 128 : 0) +
                              (u.mode === 20 || u.mode === 15 ? 256 : 0)),
                            ((ee == 0 && K === 0) || A === 4) && L === r && (L = -5),
                            L)
                      );
                    }),
                    (T.inflateEnd = function (k) {
                      if (!k || !k.state) return o;
                      var A = k.state;
                      return A.window && (A.window = null), (k.state = null), r;
                    }),
                    (T.inflateGetHeader = function (k, A) {
                      var u;
                      return k && k.state && 2 & (u = k.state).wrap
                        ? (((u.head = A).done = !1), r)
                        : o;
                    }),
                    (T.inflateSetDictionary = function (k, A) {
                      var u,
                        B = A.length;
                      return k && k.state
                        ? (u = k.state).wrap !== 0 && u.mode !== 11
                          ? o
                          : u.mode === 11 && y(1, A, B, 0) !== u.check
                          ? -3
                          : D(k, A, B, B)
                          ? ((u.mode = 31), -4)
                          : ((u.havedict = 1), r)
                        : o;
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
                function (P, R, T) {
                  var _ = P('../utils/common'),
                    y = [
                      3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67,
                      83, 99, 115, 131, 163, 195, 227, 258, 0, 0,
                    ],
                    e = [
                      16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19,
                      19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78,
                    ],
                    n = [
                      1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769,
                      1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0,
                    ],
                    i = [
                      16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24,
                      24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64,
                    ];
                  R.exports = function (b, g, r, o, m, c, h, d) {
                    var v,
                      x,
                      E,
                      l,
                      a,
                      t,
                      s,
                      p,
                      w,
                      D = d.bits,
                      k = 0,
                      A = 0,
                      u = 0,
                      B = 0,
                      j = 0,
                      M = 0,
                      Y = 0,
                      $ = 0,
                      Q = 0,
                      I = 0,
                      z = null,
                      ee = 0,
                      K = new _.Buf16(16),
                      X = new _.Buf16(16),
                      ie = null,
                      pe = 0;
                    for (k = 0; k <= 15; k++) K[k] = 0;
                    for (A = 0; A < o; A++) K[g[r + A]]++;
                    for (j = D, B = 15; 1 <= B && K[B] === 0; B--);
                    if ((B < j && (j = B), B === 0))
                      return (m[c++] = 20971520), (m[c++] = 20971520), (d.bits = 1), 0;
                    for (u = 1; u < B && K[u] === 0; u++);
                    for (j < u && (j = u), k = $ = 1; k <= 15; k++)
                      if ((($ <<= 1), ($ -= K[k]) < 0)) return -1;
                    if (0 < $ && (b === 0 || B !== 1)) return -1;
                    for (X[1] = 0, k = 1; k < 15; k++) X[k + 1] = X[k] + K[k];
                    for (A = 0; A < o; A++) g[r + A] !== 0 && (h[X[g[r + A]]++] = A);
                    if (
                      ((t =
                        b === 0
                          ? ((z = ie = h), 19)
                          : b === 1
                          ? ((z = y), (ee -= 257), (ie = e), (pe -= 257), 256)
                          : ((z = n), (ie = i), -1)),
                      (k = u),
                      (a = c),
                      (Y = A = I = 0),
                      (E = -1),
                      (l = (Q = 1 << (M = j)) - 1),
                      (b === 1 && 852 < Q) || (b === 2 && 592 < Q))
                    )
                      return 1;
                    for (;;) {
                      for (
                        s = k - Y,
                          w =
                            h[A] < t
                              ? ((p = 0), h[A])
                              : h[A] > t
                              ? ((p = ie[pe + h[A]]), z[ee + h[A]])
                              : ((p = 96), 0),
                          v = 1 << (k - Y),
                          u = x = 1 << M;
                        (m[a + (I >> Y) + (x -= v)] = (s << 24) | (p << 16) | w | 0), x !== 0;

                      );
                      for (v = 1 << (k - 1); I & v; ) v >>= 1;
                      if ((v !== 0 ? ((I &= v - 1), (I += v)) : (I = 0), A++, --K[k] == 0)) {
                        if (k === B) break;
                        k = g[r + h[A]];
                      }
                      if (j < k && (I & l) !== E) {
                        for (
                          Y === 0 && (Y = j), a += u, $ = 1 << (M = k - Y);
                          M + Y < B && !(($ -= K[M + Y]) <= 0);

                        )
                          M++, ($ <<= 1);
                        if (((Q += 1 << M), (b === 1 && 852 < Q) || (b === 2 && 592 < Q))) return 1;
                        m[(E = I & l)] = (j << 24) | (M << 16) | (a - c) | 0;
                      }
                    }
                    return (
                      I !== 0 && (m[a + I] = ((k - Y) << 24) | (64 << 16) | 0), (d.bits = j), 0
                    );
                  };
                },
                { '../utils/common': 41 },
              ],
              51: [
                function (P, R, T) {
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
                function (P, R, T) {
                  var _ = P('../utils/common'),
                    y = 0,
                    e = 1;
                  function n(S) {
                    for (var N = S.length; 0 <= --N; ) S[N] = 0;
                  }
                  var i = 0,
                    b = 29,
                    g = 256,
                    r = g + 1 + b,
                    o = 30,
                    m = 19,
                    c = 2 * r + 1,
                    h = 15,
                    d = 16,
                    v = 7,
                    x = 256,
                    E = 16,
                    l = 17,
                    a = 18,
                    t = [
                      0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5,
                      5, 5, 0,
                    ],
                    s = [
                      0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11,
                      11, 12, 12, 13, 13,
                    ],
                    p = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
                    w = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
                    D = new Array(2 * (r + 2));
                  n(D);
                  var k = new Array(2 * o);
                  n(k);
                  var A = new Array(512);
                  n(A);
                  var u = new Array(256);
                  n(u);
                  var B = new Array(b);
                  n(B);
                  var j,
                    M,
                    Y,
                    $ = new Array(o);
                  function Q(S, N, U, W, O) {
                    (this.static_tree = S),
                      (this.extra_bits = N),
                      (this.extra_base = U),
                      (this.elems = W),
                      (this.max_length = O),
                      (this.has_stree = S && S.length);
                  }
                  function I(S, N) {
                    (this.dyn_tree = S), (this.max_code = 0), (this.stat_desc = N);
                  }
                  function z(S) {
                    return S < 256 ? A[S] : A[256 + (S >>> 7)];
                  }
                  function ee(S, N) {
                    (S.pending_buf[S.pending++] = 255 & N),
                      (S.pending_buf[S.pending++] = (N >>> 8) & 255);
                  }
                  function K(S, N, U) {
                    S.bi_valid > d - U
                      ? ((S.bi_buf |= (N << S.bi_valid) & 65535),
                        ee(S, S.bi_buf),
                        (S.bi_buf = N >> (d - S.bi_valid)),
                        (S.bi_valid += U - d))
                      : ((S.bi_buf |= (N << S.bi_valid) & 65535), (S.bi_valid += U));
                  }
                  function X(S, N, U) {
                    K(S, U[2 * N], U[2 * N + 1]);
                  }
                  function ie(S, N) {
                    for (var U = 0; (U |= 1 & S), (S >>>= 1), (U <<= 1), 0 < --N; );
                    return U >>> 1;
                  }
                  function pe(S, N, U) {
                    var W,
                      O,
                      H = new Array(h + 1),
                      J = 0;
                    for (W = 1; W <= h; W++) H[W] = J = (J + U[W - 1]) << 1;
                    for (O = 0; O <= N; O++) {
                      var V = S[2 * O + 1];
                      V !== 0 && (S[2 * O] = ie(H[V]++, V));
                    }
                  }
                  function re(S) {
                    var N;
                    for (N = 0; N < r; N++) S.dyn_ltree[2 * N] = 0;
                    for (N = 0; N < o; N++) S.dyn_dtree[2 * N] = 0;
                    for (N = 0; N < m; N++) S.bl_tree[2 * N] = 0;
                    (S.dyn_ltree[2 * x] = 1),
                      (S.opt_len = S.static_len = 0),
                      (S.last_lit = S.matches = 0);
                  }
                  function ae(S) {
                    8 < S.bi_valid
                      ? ee(S, S.bi_buf)
                      : 0 < S.bi_valid && (S.pending_buf[S.pending++] = S.bi_buf),
                      (S.bi_buf = 0),
                      (S.bi_valid = 0);
                  }
                  function fe(S, N, U, W) {
                    var O = 2 * N,
                      H = 2 * U;
                    return S[O] < S[H] || (S[O] === S[H] && W[N] <= W[U]);
                  }
                  function oe(S, N, U) {
                    for (
                      var W = S.heap[U], O = U << 1;
                      O <= S.heap_len &&
                      (O < S.heap_len && fe(N, S.heap[O + 1], S.heap[O], S.depth) && O++,
                      !fe(N, W, S.heap[O], S.depth));

                    )
                      (S.heap[U] = S.heap[O]), (U = O), (O <<= 1);
                    S.heap[U] = W;
                  }
                  function we(S, N, U) {
                    var W,
                      O,
                      H,
                      J,
                      V = 0;
                    if (S.last_lit !== 0)
                      for (
                        ;
                        (W =
                          (S.pending_buf[S.d_buf + 2 * V] << 8) |
                          S.pending_buf[S.d_buf + 2 * V + 1]),
                          (O = S.pending_buf[S.l_buf + V]),
                          V++,
                          W === 0
                            ? X(S, O, N)
                            : (X(S, (H = u[O]) + g + 1, N),
                              (J = t[H]) !== 0 && K(S, (O -= B[H]), J),
                              X(S, (H = z(--W)), U),
                              (J = s[H]) !== 0 && K(S, (W -= $[H]), J)),
                          V < S.last_lit;

                      );
                    X(S, x, N);
                  }
                  function ke(S, N) {
                    var U,
                      W,
                      O,
                      H = N.dyn_tree,
                      J = N.stat_desc.static_tree,
                      V = N.stat_desc.has_stree,
                      te = N.stat_desc.elems,
                      se = -1;
                    for (S.heap_len = 0, S.heap_max = c, U = 0; U < te; U++)
                      H[2 * U] !== 0
                        ? ((S.heap[++S.heap_len] = se = U), (S.depth[U] = 0))
                        : (H[2 * U + 1] = 0);
                    for (; S.heap_len < 2; )
                      (H[2 * (O = S.heap[++S.heap_len] = se < 2 ? ++se : 0)] = 1),
                        (S.depth[O] = 0),
                        S.opt_len--,
                        V && (S.static_len -= J[2 * O + 1]);
                    for (N.max_code = se, U = S.heap_len >> 1; 1 <= U; U--) oe(S, H, U);
                    for (
                      O = te;
                      (U = S.heap[1]),
                        (S.heap[1] = S.heap[S.heap_len--]),
                        oe(S, H, 1),
                        (W = S.heap[1]),
                        (S.heap[--S.heap_max] = U),
                        (S.heap[--S.heap_max] = W),
                        (H[2 * O] = H[2 * U] + H[2 * W]),
                        (S.depth[O] = (S.depth[U] >= S.depth[W] ? S.depth[U] : S.depth[W]) + 1),
                        (H[2 * U + 1] = H[2 * W + 1] = O),
                        (S.heap[1] = O++),
                        oe(S, H, 1),
                        2 <= S.heap_len;

                    );
                    (S.heap[--S.heap_max] = S.heap[1]),
                      (function (ne, ve) {
                        var Re,
                          Pe,
                          Ne,
                          le,
                          Le,
                          Xe,
                          Se = ve.dyn_tree,
                          et = ve.max_code,
                          _t = ve.stat_desc.static_tree,
                          kt = ve.stat_desc.has_stree,
                          wt = ve.stat_desc.extra_bits,
                          tt = ve.stat_desc.extra_base,
                          Be = ve.stat_desc.max_length,
                          je = 0;
                        for (le = 0; le <= h; le++) ne.bl_count[le] = 0;
                        for (
                          Se[2 * ne.heap[ne.heap_max] + 1] = 0, Re = ne.heap_max + 1;
                          Re < c;
                          Re++
                        )
                          Be < (le = Se[2 * Se[2 * (Pe = ne.heap[Re]) + 1] + 1] + 1) &&
                            ((le = Be), je++),
                            (Se[2 * Pe + 1] = le),
                            et < Pe ||
                              (ne.bl_count[le]++,
                              (Le = 0),
                              tt <= Pe && (Le = wt[Pe - tt]),
                              (Xe = Se[2 * Pe]),
                              (ne.opt_len += Xe * (le + Le)),
                              kt && (ne.static_len += Xe * (_t[2 * Pe + 1] + Le)));
                        if (je !== 0) {
                          do {
                            for (le = Be - 1; ne.bl_count[le] === 0; ) le--;
                            ne.bl_count[le]--,
                              (ne.bl_count[le + 1] += 2),
                              ne.bl_count[Be]--,
                              (je -= 2);
                          } while (0 < je);
                          for (le = Be; le !== 0; le--)
                            for (Pe = ne.bl_count[le]; Pe !== 0; )
                              et < (Ne = ne.heap[--Re]) ||
                                (Se[2 * Ne + 1] !== le &&
                                  ((ne.opt_len += (le - Se[2 * Ne + 1]) * Se[2 * Ne]),
                                  (Se[2 * Ne + 1] = le)),
                                Pe--);
                        }
                      })(S, N),
                      pe(H, se, S.bl_count);
                  }
                  function f(S, N, U) {
                    var W,
                      O,
                      H = -1,
                      J = N[1],
                      V = 0,
                      te = 7,
                      se = 4;
                    for (
                      J === 0 && ((te = 138), (se = 3)), N[2 * (U + 1) + 1] = 65535, W = 0;
                      W <= U;
                      W++
                    )
                      (O = J),
                        (J = N[2 * (W + 1) + 1]),
                        (++V < te && O === J) ||
                          (V < se
                            ? (S.bl_tree[2 * O] += V)
                            : O !== 0
                            ? (O !== H && S.bl_tree[2 * O]++, S.bl_tree[2 * E]++)
                            : V <= 10
                            ? S.bl_tree[2 * l]++
                            : S.bl_tree[2 * a]++,
                          (H = O),
                          (se =
                            (V = 0) === J
                              ? ((te = 138), 3)
                              : O === J
                              ? ((te = 6), 3)
                              : ((te = 7), 4)));
                  }
                  function L(S, N, U) {
                    var W,
                      O,
                      H = -1,
                      J = N[1],
                      V = 0,
                      te = 7,
                      se = 4;
                    for (J === 0 && ((te = 138), (se = 3)), W = 0; W <= U; W++)
                      if (((O = J), (J = N[2 * (W + 1) + 1]), !(++V < te && O === J))) {
                        if (V < se) for (; X(S, O, S.bl_tree), --V != 0; );
                        else
                          O !== 0
                            ? (O !== H && (X(S, O, S.bl_tree), V--),
                              X(S, E, S.bl_tree),
                              K(S, V - 3, 2))
                            : V <= 10
                            ? (X(S, l, S.bl_tree), K(S, V - 3, 3))
                            : (X(S, a, S.bl_tree), K(S, V - 11, 7));
                        (H = O),
                          (se =
                            (V = 0) === J
                              ? ((te = 138), 3)
                              : O === J
                              ? ((te = 6), 3)
                              : ((te = 7), 4));
                      }
                  }
                  n($);
                  var F = !1;
                  function C(S, N, U, W) {
                    K(S, (i << 1) + (W ? 1 : 0), 3),
                      (function (O, H, J, V) {
                        ae(O),
                          V && (ee(O, J), ee(O, ~J)),
                          _.arraySet(O.pending_buf, O.window, H, J, O.pending),
                          (O.pending += J);
                      })(S, N, U, !0);
                  }
                  (T._tr_init = function (S) {
                    F ||
                      ((function () {
                        var N,
                          U,
                          W,
                          O,
                          H,
                          J = new Array(h + 1);
                        for (O = W = 0; O < b - 1; O++)
                          for (B[O] = W, N = 0; N < 1 << t[O]; N++) u[W++] = O;
                        for (u[W - 1] = O, O = H = 0; O < 16; O++)
                          for ($[O] = H, N = 0; N < 1 << s[O]; N++) A[H++] = O;
                        for (H >>= 7; O < o; O++)
                          for ($[O] = H << 7, N = 0; N < 1 << (s[O] - 7); N++) A[256 + H++] = O;
                        for (U = 0; U <= h; U++) J[U] = 0;
                        for (N = 0; N <= 143; ) (D[2 * N + 1] = 8), N++, J[8]++;
                        for (; N <= 255; ) (D[2 * N + 1] = 9), N++, J[9]++;
                        for (; N <= 279; ) (D[2 * N + 1] = 7), N++, J[7]++;
                        for (; N <= 287; ) (D[2 * N + 1] = 8), N++, J[8]++;
                        for (pe(D, r + 1, J), N = 0; N < o; N++)
                          (k[2 * N + 1] = 5), (k[2 * N] = ie(N, 5));
                        (j = new Q(D, t, g + 1, r, h)),
                          (M = new Q(k, s, 0, o, h)),
                          (Y = new Q(new Array(0), p, 0, m, v));
                      })(),
                      (F = !0)),
                      (S.l_desc = new I(S.dyn_ltree, j)),
                      (S.d_desc = new I(S.dyn_dtree, M)),
                      (S.bl_desc = new I(S.bl_tree, Y)),
                      (S.bi_buf = 0),
                      (S.bi_valid = 0),
                      re(S);
                  }),
                    (T._tr_stored_block = C),
                    (T._tr_flush_block = function (S, N, U, W) {
                      var O,
                        H,
                        J = 0;
                      0 < S.level
                        ? (S.strm.data_type === 2 &&
                            (S.strm.data_type = (function (V) {
                              var te,
                                se = 4093624447;
                              for (te = 0; te <= 31; te++, se >>>= 1)
                                if (1 & se && V.dyn_ltree[2 * te] !== 0) return y;
                              if (
                                V.dyn_ltree[18] !== 0 ||
                                V.dyn_ltree[20] !== 0 ||
                                V.dyn_ltree[26] !== 0
                              )
                                return e;
                              for (te = 32; te < g; te++) if (V.dyn_ltree[2 * te] !== 0) return e;
                              return y;
                            })(S)),
                          ke(S, S.l_desc),
                          ke(S, S.d_desc),
                          (J = (function (V) {
                            var te;
                            for (
                              f(V, V.dyn_ltree, V.l_desc.max_code),
                                f(V, V.dyn_dtree, V.d_desc.max_code),
                                ke(V, V.bl_desc),
                                te = m - 1;
                              3 <= te && V.bl_tree[2 * w[te] + 1] === 0;
                              te--
                            );
                            return (V.opt_len += 3 * (te + 1) + 5 + 5 + 4), te;
                          })(S)),
                          (O = (S.opt_len + 3 + 7) >>> 3),
                          (H = (S.static_len + 3 + 7) >>> 3) <= O && (O = H))
                        : (O = H = U + 5),
                        U + 4 <= O && N !== -1
                          ? C(S, N, U, W)
                          : S.strategy === 4 || H === O
                          ? (K(S, 2 + (W ? 1 : 0), 3), we(S, D, k))
                          : (K(S, 4 + (W ? 1 : 0), 3),
                            (function (V, te, se, ne) {
                              var ve;
                              for (
                                K(V, te - 257, 5), K(V, se - 1, 5), K(V, ne - 4, 4), ve = 0;
                                ve < ne;
                                ve++
                              )
                                K(V, V.bl_tree[2 * w[ve] + 1], 3);
                              L(V, V.dyn_ltree, te - 1), L(V, V.dyn_dtree, se - 1);
                            })(S, S.l_desc.max_code + 1, S.d_desc.max_code + 1, J + 1),
                            we(S, S.dyn_ltree, S.dyn_dtree)),
                        re(S),
                        W && ae(S);
                    }),
                    (T._tr_tally = function (S, N, U) {
                      return (
                        (S.pending_buf[S.d_buf + 2 * S.last_lit] = (N >>> 8) & 255),
                        (S.pending_buf[S.d_buf + 2 * S.last_lit + 1] = 255 & N),
                        (S.pending_buf[S.l_buf + S.last_lit] = 255 & U),
                        S.last_lit++,
                        N === 0
                          ? S.dyn_ltree[2 * U]++
                          : (S.matches++,
                            N--,
                            S.dyn_ltree[2 * (u[U] + g + 1)]++,
                            S.dyn_dtree[2 * z(N)]++),
                        S.last_lit === S.lit_bufsize - 1
                      );
                    }),
                    (T._tr_align = function (S) {
                      K(S, 2, 3),
                        X(S, x, D),
                        (function (N) {
                          N.bi_valid === 16
                            ? (ee(N, N.bi_buf), (N.bi_buf = 0), (N.bi_valid = 0))
                            : 8 <= N.bi_valid &&
                              ((N.pending_buf[N.pending++] = 255 & N.bi_buf),
                              (N.bi_buf >>= 8),
                              (N.bi_valid -= 8));
                        })(S);
                    });
                },
                { '../utils/common': 41 },
              ],
              53: [
                function (P, R, T) {
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
                function (P, R, T) {
                  (function (_) {
                    (function (y, e) {
                      if (!y.setImmediate) {
                        var n,
                          i,
                          b,
                          g,
                          r = 1,
                          o = {},
                          m = !1,
                          c = y.document,
                          h = Object.getPrototypeOf && Object.getPrototypeOf(y);
                        (h = h && h.setTimeout ? h : y),
                          (n =
                            {}.toString.call(y.process) === '[object process]'
                              ? function (E) {
                                  process.nextTick(function () {
                                    v(E);
                                  });
                                }
                              : (function () {
                                  if (y.postMessage && !y.importScripts) {
                                    var E = !0,
                                      l = y.onmessage;
                                    return (
                                      (y.onmessage = function () {
                                        E = !1;
                                      }),
                                      y.postMessage('', '*'),
                                      (y.onmessage = l),
                                      E
                                    );
                                  }
                                })()
                              ? ((g = 'setImmediate$' + Math.random() + '$'),
                                y.addEventListener
                                  ? y.addEventListener('message', x, !1)
                                  : y.attachEvent('onmessage', x),
                                function (E) {
                                  y.postMessage(g + E, '*');
                                })
                              : y.MessageChannel
                              ? (((b = new MessageChannel()).port1.onmessage = function (E) {
                                  v(E.data);
                                }),
                                function (E) {
                                  b.port2.postMessage(E);
                                })
                              : c && 'onreadystatechange' in c.createElement('script')
                              ? ((i = c.documentElement),
                                function (E) {
                                  var l = c.createElement('script');
                                  (l.onreadystatechange = function () {
                                    v(E),
                                      (l.onreadystatechange = null),
                                      i.removeChild(l),
                                      (l = null);
                                  }),
                                    i.appendChild(l);
                                })
                              : function (E) {
                                  setTimeout(v, 0, E);
                                }),
                          (h.setImmediate = function (E) {
                            typeof E != 'function' && (E = new Function('' + E));
                            for (var l = new Array(arguments.length - 1), a = 0; a < l.length; a++)
                              l[a] = arguments[a + 1];
                            var t = { callback: E, args: l };
                            return (o[r] = t), n(r), r++;
                          }),
                          (h.clearImmediate = d);
                      }
                      function d(E) {
                        delete o[E];
                      }
                      function v(E) {
                        if (m) setTimeout(v, 0, E);
                        else {
                          var l = o[E];
                          if (l) {
                            m = !0;
                            try {
                              (function (a) {
                                var t = a.callback,
                                  s = a.args;
                                switch (s.length) {
                                  case 0:
                                    t();
                                    break;
                                  case 1:
                                    t(s[0]);
                                    break;
                                  case 2:
                                    t(s[0], s[1]);
                                    break;
                                  case 3:
                                    t(s[0], s[1], s[2]);
                                    break;
                                  default:
                                    t.apply(e, s);
                                }
                              })(l);
                            } finally {
                              d(E), (m = !1);
                            }
                          }
                        }
                      }
                      function x(E) {
                        E.source === y &&
                          typeof E.data == 'string' &&
                          E.data.indexOf(g) === 0 &&
                          v(+E.data.slice(g.length));
                      }
                    })(typeof self == 'undefined' ? (_ === void 0 ? this : _) : self);
                  }).call(
                    this,
                    typeof Ie != 'undefined'
                      ? Ie
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
      })(Fr)),
    We
  );
}
(function (Z, G) {
  (function (P, R) {
    Z.exports = R(Mr());
  })(globalThis, (P) =>
    (() => {
      var R = {
          438: (y, e, n) => {
            n.r(e), n.d(e, { default: () => v });
            var i = n(537),
              b = n.n(i),
              g = n(645),
              r = n.n(g),
              o = n(806),
              m = n.n(o),
              c = new URL(n(583), n.b),
              h = r()(b()),
              d = m()(c);
            h.push([
              y.id,
              '@namespace "http://www.w3.org/1998/Math/MathML";math{display:inline-block;line-height:initial}mfrac{display:inline-block;vertical-align:-50%;text-align:center}mfrac>:first-child{border-bottom:solid thin currentColor}mfrac>*{display:block}msub>:nth-child(2){font-size:smaller;vertical-align:sub}msup>:nth-child(2){font-size:smaller;vertical-align:super}munder,mover,munderover{display:inline-flex;flex-flow:column nowrap;vertical-align:middle;text-align:center}munder>:not(:first-child),mover>:not(:first-child),munderover>:not(:first-child){font-size:smaller}munderover>:last-child{order:-1}mroot,msqrt{position:relative;display:inline-block;border-top:solid thin currentColor;margin-top:.5px;vertical-align:middle;margin-left:1ch}mroot:before,msqrt:before{content:"";display:inline-block;position:absolute;width:1ch;left:-1ch;top:-1px;bottom:0;background-image:url(' +
                d +
                ')}',
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
            const v = h.toString();
          },
          645: (y) => {
            y.exports = function (e) {
              var n = [];
              return (
                (n.toString = function () {
                  return this.map(function (i) {
                    var b = '',
                      g = i[5] !== void 0;
                    return (
                      i[4] && (b += '@supports ('.concat(i[4], ') {')),
                      i[2] && (b += '@media '.concat(i[2], ' {')),
                      g && (b += '@layer'.concat(i[5].length > 0 ? ' '.concat(i[5]) : '', ' {')),
                      (b += e(i)),
                      g && (b += '}'),
                      i[2] && (b += '}'),
                      i[4] && (b += '}'),
                      b
                    );
                  }).join('');
                }),
                (n.i = function (i, b, g, r, o) {
                  typeof i == 'string' && (i = [[null, i, void 0]]);
                  var m = {};
                  if (g)
                    for (var c = 0; c < this.length; c++) {
                      var h = this[c][0];
                      h != null && (m[h] = !0);
                    }
                  for (var d = 0; d < i.length; d++) {
                    var v = [].concat(i[d]);
                    (g && m[v[0]]) ||
                      (o !== void 0 &&
                        (v[5] === void 0 ||
                          (v[1] = '@layer'
                            .concat(v[5].length > 0 ? ' '.concat(v[5]) : '', ' {')
                            .concat(v[1], '}')),
                        (v[5] = o)),
                      b &&
                        (v[2] && (v[1] = '@media '.concat(v[2], ' {').concat(v[1], '}')),
                        (v[2] = b)),
                      r &&
                        (v[4]
                          ? ((v[1] = '@supports ('.concat(v[4], ') {').concat(v[1], '}')),
                            (v[4] = r))
                          : (v[4] = ''.concat(r))),
                      n.push(v));
                  }
                }),
                n
              );
            };
          },
          806: (y) => {
            y.exports = function (e, n) {
              return (
                n || (n = {}),
                e &&
                  ((e = String(e.__esModule ? e.default : e)),
                  /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
                  n.hash && (e += n.hash),
                  /["'() \t\n]|(%20)/.test(e) || n.needQuotes
                    ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, '\\n'), '"')
                    : e)
              );
            };
          },
          537: (y) => {
            y.exports = function (e) {
              var n = e[1],
                i = e[3];
              if (!i) return n;
              if (typeof btoa == 'function') {
                var b = btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                  g = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(b),
                  r = '/*# '.concat(g, ' */'),
                  o = i.sources.map(function (m) {
                    return '/*# sourceURL='.concat(i.sourceRoot || '').concat(m, ' */');
                  });
                return [n].concat(o).concat([r]).join(`
`);
              }
              return [n].join(`
`);
            };
          },
          522: (y, e, n) => {
            Object.defineProperty(e, '__esModule', { value: !0 }), (e.OpenXmlPackage = void 0);
            const i = n(626),
              b = n(472),
              g = n(593),
              r = n(461);
            class o {
              constructor(c, h) {
                (this._zip = c), (this.options = h), (this.xmlParser = new b.XmlParser());
              }
              get(c) {
                return this._zip.files[
                  (function (h) {
                    return h.startsWith('/') ? h.substr(1) : h;
                  })(c)
                ];
              }
              update(c, h) {
                this._zip.file(c, h);
              }
              static load(c, h) {
                return i.loadAsync(c).then((d) => new o(d, h));
              }
              save(c = 'blob') {
                return this._zip.generateAsync({ type: c });
              }
              load(c, h = 'string') {
                var d, v;
                return (v = (d = this.get(c)) === null || d === void 0 ? void 0 : d.async(h)) !==
                  null && v !== void 0
                  ? v
                  : Promise.resolve(null);
              }
              loadRelationships(c = null) {
                let h = '_rels/.rels';
                if (c != null) {
                  const [d, v] = (0, g.splitPath)(c);
                  h = `${d}_rels/${v}.rels`;
                }
                return this.load(h).then((d) =>
                  d
                    ? (0, r.parseRelationships)(
                        this.parseXmlDocument(d).firstElementChild,
                        this.xmlParser,
                      )
                    : null,
                );
              }
              parseXmlDocument(c) {
                return (0, b.parseXmlString)(c, this.options.trimXmlDeclaration);
              }
            }
            e.OpenXmlPackage = o;
          },
          530: (y, e, n) => {
            Object.defineProperty(e, '__esModule', { value: !0 }), (e.Part = void 0);
            const i = n(472);
            e.Part = class {
              constructor(b, g) {
                (this._package = b), (this.path = g);
              }
              load() {
                return Promise.all([
                  this._package.loadRelationships(this.path).then((b) => {
                    this.rels = b;
                  }),
                  this._package.load(this.path).then((b) => {
                    const g = this._package.parseXmlDocument(b);
                    this._package.options.keepOrigin && (this._xmlDocument = g),
                      this.parseXml(g.firstElementChild);
                  }),
                ]);
              }
              save() {
                this._package.update(this.path, (0, i.serializeXmlString)(this._xmlDocument));
              }
              parseXml(b) {}
            };
          },
          461: (y, e) => {
            var n;
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.parseRelationships = e.RelationshipTypes = void 0),
              ((n = e.RelationshipTypes || (e.RelationshipTypes = {})).OfficeDocument =
                'http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument'),
              (n.FontTable =
                'http://schemas.openxmlformats.org/officeDocument/2006/relationships/fontTable'),
              (n.Image =
                'http://schemas.openxmlformats.org/officeDocument/2006/relationships/image'),
              (n.Numbering =
                'http://schemas.openxmlformats.org/officeDocument/2006/relationships/numbering'),
              (n.Styles =
                'http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles'),
              (n.StylesWithEffects =
                'http://schemas.microsoft.com/office/2007/relationships/stylesWithEffects'),
              (n.Theme =
                'http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme'),
              (n.Settings =
                'http://schemas.openxmlformats.org/officeDocument/2006/relationships/settings'),
              (n.WebSettings =
                'http://schemas.openxmlformats.org/officeDocument/2006/relationships/webSettings'),
              (n.Hyperlink =
                'http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink'),
              (n.Footnotes =
                'http://schemas.openxmlformats.org/officeDocument/2006/relationships/footnotes'),
              (n.Endnotes =
                'http://schemas.openxmlformats.org/officeDocument/2006/relationships/endnotes'),
              (n.Footer =
                'http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer'),
              (n.Header =
                'http://schemas.openxmlformats.org/officeDocument/2006/relationships/header'),
              (n.ExtendedProperties =
                'http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties'),
              (n.CoreProperties =
                'http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties'),
              (n.CustomProperties =
                'http://schemas.openxmlformats.org/package/2006/relationships/metadata/custom-properties'),
              (e.parseRelationships = function (i, b) {
                return b
                  .elements(i)
                  .map((g) => ({
                    id: b.attr(g, 'Id'),
                    type: b.attr(g, 'Type'),
                    target: b.attr(g, 'Target'),
                    targetMode: b.attr(g, 'TargetMode'),
                  }));
              });
          },
          168: (y, e, n) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.DocumentParser = e.autos = void 0);
            const i = n(120),
              b = n(109),
              g = n(59),
              r = n(472),
              o = n(488),
              m = n(172),
              c = n(149),
              h = n(320);
            e.autos = {
              shd: 'inherit',
              color: 'black',
              borderColor: 'black',
              highlight: 'transparent',
            };
            const d = [],
              v = {
                oMath: i.DomType.MmlMath,
                oMathPara: i.DomType.MmlMathParagraph,
                f: i.DomType.MmlFraction,
                num: i.DomType.MmlNumerator,
                den: i.DomType.MmlDenominator,
                rad: i.DomType.MmlRadical,
                deg: i.DomType.MmlDegree,
                e: i.DomType.MmlBase,
                sSup: i.DomType.MmlSuperscript,
                sSub: i.DomType.MmlSubscript,
                sup: i.DomType.MmlSuperArgument,
                sub: i.DomType.MmlSubArgument,
                d: i.DomType.MmlDelimiter,
                nary: i.DomType.MmlNary,
              };
            e.DocumentParser = class {
              constructor(a) {
                this.options = Object.assign({ ignoreWidth: !1, debug: !1 }, a);
              }
              parseNotes(a, t, s) {
                var p = [];
                for (let w of r.default.elements(a, t)) {
                  const D = new s();
                  (D.id = r.default.attr(w, 'id')),
                    (D.noteType = r.default.attr(w, 'type')),
                    (D.children = this.parseBodyElements(w)),
                    p.push(D);
                }
                return p;
              }
              parseDocumentFile(a) {
                var t = r.default.element(a, 'body'),
                  s = r.default.element(a, 'background'),
                  p = r.default.element(t, 'sectPr');
                return {
                  type: i.DomType.Document,
                  children: this.parseBodyElements(t),
                  props: p ? (0, g.parseSectionProperties)(p, r.default) : {},
                  cssStyle: s ? this.parseBackground(s) : {},
                };
              }
              parseBackground(a) {
                var t = {},
                  s = E.colorAttr(a, 'color');
                return s && (t['background-color'] = s), t;
              }
              parseBodyElements(a) {
                var t = [];
                for (let s of r.default.elements(a))
                  switch (s.localName) {
                    case 'p':
                      t.push(this.parseParagraph(s));
                      break;
                    case 'tbl':
                      t.push(this.parseTable(s));
                      break;
                    case 'sdt':
                      t.push(...this.parseSdt(s, (p) => this.parseBodyElements(p)));
                  }
                return t;
              }
              parseStylesFile(a) {
                var t = [];
                return (
                  E.foreach(a, (s) => {
                    switch (s.localName) {
                      case 'style':
                        t.push(this.parseStyle(s));
                        break;
                      case 'docDefaults':
                        t.push(this.parseDefaultStyles(s));
                    }
                  }),
                  t
                );
              }
              parseDefaultStyles(a) {
                var t = { id: null, name: null, target: null, basedOn: null, styles: [] };
                return (
                  E.foreach(a, (s) => {
                    switch (s.localName) {
                      case 'rPrDefault':
                        var p = r.default.element(s, 'rPr');
                        p &&
                          t.styles.push({
                            target: 'span',
                            values: this.parseDefaultProperties(p, {}),
                          });
                        break;
                      case 'pPrDefault':
                        var w = r.default.element(s, 'pPr');
                        w &&
                          t.styles.push({
                            target: 'p',
                            values: this.parseDefaultProperties(w, {}),
                          });
                    }
                  }),
                  t
                );
              }
              parseStyle(a) {
                var t = {
                  id: r.default.attr(a, 'styleId'),
                  isDefault: r.default.boolAttr(a, 'default'),
                  name: null,
                  target: null,
                  basedOn: null,
                  styles: [],
                  linked: null,
                };
                switch (r.default.attr(a, 'type')) {
                  case 'paragraph':
                    t.target = 'p';
                    break;
                  case 'table':
                    t.target = 'table';
                    break;
                  case 'character':
                    t.target = 'span';
                }
                return (
                  E.foreach(a, (s) => {
                    switch (s.localName) {
                      case 'basedOn':
                        t.basedOn = r.default.attr(s, 'val');
                        break;
                      case 'name':
                        t.name = r.default.attr(s, 'val');
                        break;
                      case 'link':
                        t.linked = r.default.attr(s, 'val');
                        break;
                      case 'next':
                        t.next = r.default.attr(s, 'val');
                        break;
                      case 'aliases':
                        t.aliases = r.default.attr(s, 'val').split(',');
                        break;
                      case 'pPr':
                        t.styles.push({ target: 'p', values: this.parseDefaultProperties(s, {}) }),
                          (t.paragraphProps = (0, b.parseParagraphProperties)(s, r.default));
                        break;
                      case 'rPr':
                        t.styles.push({
                          target: 'span',
                          values: this.parseDefaultProperties(s, {}),
                        }),
                          (t.runProps = (0, o.parseRunProperties)(s, r.default));
                        break;
                      case 'tblPr':
                      case 'tcPr':
                        t.styles.push({ target: 'td', values: this.parseDefaultProperties(s, {}) });
                        break;
                      case 'tblStylePr':
                        for (let p of this.parseTableStyle(s)) t.styles.push(p);
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
                          console.warn(`DOCX: Unknown style element: ${s.localName}`);
                    }
                  }),
                  t
                );
              }
              parseTableStyle(a) {
                var t = [],
                  s = r.default.attr(a, 'type'),
                  p = '',
                  w = '';
                switch (s) {
                  case 'firstRow':
                    (w = '.first-row'), (p = 'tr.first-row td');
                    break;
                  case 'lastRow':
                    (w = '.last-row'), (p = 'tr.last-row td');
                    break;
                  case 'firstCol':
                    (w = '.first-col'), (p = 'td.first-col');
                    break;
                  case 'lastCol':
                    (w = '.last-col'), (p = 'td.last-col');
                    break;
                  case 'band1Vert':
                    (w = ':not(.no-vband)'), (p = 'td.odd-col');
                    break;
                  case 'band2Vert':
                    (w = ':not(.no-vband)'), (p = 'td.even-col');
                    break;
                  case 'band1Horz':
                    (w = ':not(.no-hband)'), (p = 'tr.odd-row');
                    break;
                  case 'band2Horz':
                    (w = ':not(.no-hband)'), (p = 'tr.even-row');
                    break;
                  default:
                    return [];
                }
                return (
                  E.foreach(a, (D) => {
                    switch (D.localName) {
                      case 'pPr':
                        t.push({
                          target: `${p} p`,
                          mod: w,
                          values: this.parseDefaultProperties(D, {}),
                        });
                        break;
                      case 'rPr':
                        t.push({
                          target: `${p} span`,
                          mod: w,
                          values: this.parseDefaultProperties(D, {}),
                        });
                        break;
                      case 'tblPr':
                      case 'tcPr':
                        t.push({ target: p, mod: w, values: this.parseDefaultProperties(D, {}) });
                    }
                  }),
                  t
                );
              }
              parseNumberingFile(a) {
                var t = [],
                  s = {},
                  p = [];
                return (
                  E.foreach(a, (w) => {
                    switch (w.localName) {
                      case 'abstractNum':
                        this.parseAbstractNumbering(w, p).forEach((A) => t.push(A));
                        break;
                      case 'numPicBullet':
                        p.push(this.parseNumberingPicBullet(w));
                        break;
                      case 'num':
                        var D = r.default.attr(w, 'numId'),
                          k = r.default.elementAttr(w, 'abstractNumId', 'val');
                        s[k] = D;
                    }
                  }),
                  t.forEach((w) => (w.id = s[w.id])),
                  t
                );
              }
              parseNumberingPicBullet(a) {
                var t = r.default.element(a, 'pict'),
                  s = t && r.default.element(t, 'shape'),
                  p = s && r.default.element(s, 'imagedata');
                return p
                  ? {
                      id: r.default.intAttr(a, 'numPicBulletId'),
                      src: r.default.attr(p, 'id'),
                      style: r.default.attr(s, 'style'),
                    }
                  : null;
              }
              parseAbstractNumbering(a, t) {
                var s = [],
                  p = r.default.attr(a, 'abstractNumId');
                return (
                  E.foreach(a, (w) => {
                    w.localName === 'lvl' && s.push(this.parseNumberingLevel(p, w, t));
                  }),
                  s
                );
              }
              parseNumberingLevel(a, t, s) {
                var p = {
                  id: a,
                  level: r.default.intAttr(t, 'ilvl'),
                  pStyleName: void 0,
                  pStyle: {},
                  rStyle: {},
                  suff: 'tab',
                };
                return (
                  E.foreach(t, (w) => {
                    switch (w.localName) {
                      case 'pPr':
                        this.parseDefaultProperties(w, p.pStyle);
                        break;
                      case 'rPr':
                        this.parseDefaultProperties(w, p.rStyle);
                        break;
                      case 'lvlPicBulletId':
                        var D = r.default.intAttr(w, 'val');
                        p.bullet = s.find((k) => k.id == D);
                        break;
                      case 'lvlText':
                        p.levelText = r.default.attr(w, 'val');
                        break;
                      case 'pStyle':
                        p.pStyleName = r.default.attr(w, 'val');
                        break;
                      case 'numFmt':
                        p.format = r.default.attr(w, 'val');
                        break;
                      case 'suff':
                        p.suff = r.default.attr(w, 'val');
                    }
                  }),
                  p
                );
              }
              parseSdt(a, t) {
                const s = r.default.element(a, 'sdtContent');
                return s ? t(s) : [];
              }
              parseInserted(a, t) {
                var s, p;
                return {
                  type: i.DomType.Inserted,
                  children:
                    (p = (s = t(a)) === null || s === void 0 ? void 0 : s.children) !== null &&
                    p !== void 0
                      ? p
                      : [],
                };
              }
              parseDeleted(a, t) {
                var s, p;
                return {
                  type: i.DomType.Deleted,
                  children:
                    (p = (s = t(a)) === null || s === void 0 ? void 0 : s.children) !== null &&
                    p !== void 0
                      ? p
                      : [],
                };
              }
              parseParagraph(a) {
                var t = { type: i.DomType.Paragraph, children: [] };
                for (let s of r.default.elements(a))
                  switch (s.localName) {
                    case 'pPr':
                      this.parseParagraphProperties(s, t);
                      break;
                    case 'r':
                      t.children.push(this.parseRun(s, t));
                      break;
                    case 'hyperlink':
                      t.children.push(this.parseHyperlink(s, t));
                      break;
                    case 'bookmarkStart':
                      t.children.push((0, m.parseBookmarkStart)(s, r.default));
                      break;
                    case 'bookmarkEnd':
                      t.children.push((0, m.parseBookmarkEnd)(s, r.default));
                      break;
                    case 'oMath':
                    case 'oMathPara':
                      t.children.push(this.parseMathElement(s));
                      break;
                    case 'sdt':
                      t.children.push(...this.parseSdt(s, (p) => this.parseParagraph(p).children));
                      break;
                    case 'ins':
                      t.children.push(this.parseInserted(s, (p) => this.parseParagraph(p)));
                      break;
                    case 'del':
                      t.children.push(this.parseDeleted(s, (p) => this.parseParagraph(p)));
                  }
                return t;
              }
              parseParagraphProperties(a, t) {
                this.parseDefaultProperties(a, (t.cssStyle = {}), null, (s) => {
                  if ((0, b.parseParagraphProperty)(s, t, r.default)) return !0;
                  switch (s.localName) {
                    case 'pStyle':
                      t.styleName = r.default.attr(s, 'val');
                      break;
                    case 'cnfStyle':
                      t.className = l.classNameOfCnfStyle(s);
                      break;
                    case 'framePr':
                      this.parseFrame(s, t);
                      break;
                    case 'rPr':
                      break;
                    default:
                      return !1;
                  }
                  return !0;
                });
              }
              parseFrame(a, t) {
                r.default.attr(a, 'dropCap') == 'drop' && (t.cssStyle.float = 'left');
              }
              parseHyperlink(a, t) {
                var s = { type: i.DomType.Hyperlink, parent: t, children: [] },
                  p = r.default.attr(a, 'anchor'),
                  w = r.default.attr(a, 'id');
                return (
                  p && (s.href = '#' + p),
                  w && (s.id = w),
                  E.foreach(a, (D) => {
                    D.localName === 'r' && s.children.push(this.parseRun(D, s));
                  }),
                  s
                );
              }
              parseRun(a, t) {
                var s = { type: i.DomType.Run, parent: t, children: [] };
                return (
                  E.foreach(a, (p) => {
                    switch ((p = this.checkAlternateContent(p)).localName) {
                      case 't':
                        s.children.push({ type: i.DomType.Text, text: p.textContent });
                        break;
                      case 'delText':
                        s.children.push({ type: i.DomType.DeletedText, text: p.textContent });
                        break;
                      case 'fldSimple':
                        s.children.push({
                          type: i.DomType.SimpleField,
                          instruction: r.default.attr(p, 'instr'),
                          lock: r.default.boolAttr(p, 'lock', !1),
                          dirty: r.default.boolAttr(p, 'dirty', !1),
                        });
                        break;
                      case 'instrText':
                        (s.fieldRun = !0),
                          s.children.push({ type: i.DomType.Instruction, text: p.textContent });
                        break;
                      case 'fldChar':
                        (s.fieldRun = !0),
                          s.children.push({
                            type: i.DomType.ComplexField,
                            charType: r.default.attr(p, 'fldCharType'),
                            lock: r.default.boolAttr(p, 'lock', !1),
                            dirty: r.default.boolAttr(p, 'dirty', !1),
                          });
                        break;
                      case 'noBreakHyphen':
                        s.children.push({ type: i.DomType.NoBreakHyphen });
                        break;
                      case 'br':
                        s.children.push({
                          type: i.DomType.Break,
                          break: r.default.attr(p, 'type') || 'textWrapping',
                        });
                        break;
                      case 'lastRenderedPageBreak':
                        s.children.push({ type: i.DomType.Break, break: 'lastRenderedPageBreak' });
                        break;
                      case 'sym':
                        s.children.push({
                          type: i.DomType.Symbol,
                          font: r.default.attr(p, 'font'),
                          char: r.default.attr(p, 'char'),
                        });
                        break;
                      case 'tab':
                        s.children.push({ type: i.DomType.Tab });
                        break;
                      case 'footnoteReference':
                        s.children.push({
                          type: i.DomType.FootnoteReference,
                          id: r.default.attr(p, 'id'),
                        });
                        break;
                      case 'endnoteReference':
                        s.children.push({
                          type: i.DomType.EndnoteReference,
                          id: r.default.attr(p, 'id'),
                        });
                        break;
                      case 'drawing':
                        let w = this.parseDrawing(p);
                        w && (s.children = [w]);
                        break;
                      case 'pict':
                        s.children.push(this.parseVmlPicture(p));
                        break;
                      case 'rPr':
                        this.parseRunProperties(p, s);
                    }
                  }),
                  s
                );
              }
              parseMathElement(a) {
                const t = `${a.localName}Pr`,
                  s = { type: v[a.localName], children: [] };
                for (const w of r.default.elements(a))
                  if (v[w.localName]) s.children.push(this.parseMathElement(w));
                  else if (w.localName == 'r') {
                    var p = this.parseRun(w);
                    (p.type = i.DomType.MmlRun), s.children.push(p);
                  } else w.localName == t && (s.props = this.parseMathProperies(w));
                return s;
              }
              parseMathProperies(a) {
                const t = {};
                for (const s of r.default.elements(a))
                  switch (s.localName) {
                    case 'chr':
                      t.char = r.default.attr(s, 'val');
                      break;
                    case 'degHide':
                      t.hideDegree = r.default.boolAttr(s, 'val');
                      break;
                    case 'begChr':
                      t.beginChar = r.default.attr(s, 'val');
                      break;
                    case 'endChr':
                      t.endChar = r.default.attr(s, 'val');
                  }
                return t;
              }
              parseRunProperties(a, t) {
                this.parseDefaultProperties(a, (t.cssStyle = {}), null, (s) => {
                  switch (s.localName) {
                    case 'rStyle':
                      t.styleName = r.default.attr(s, 'val');
                      break;
                    case 'vertAlign':
                      t.verticalAlign = l.valueOfVertAlign(s, !0);
                      break;
                    default:
                      return !1;
                  }
                  return !0;
                });
              }
              parseVmlPicture(a) {
                const t = { type: i.DomType.VmlPicture, children: [] };
                for (const s of r.default.elements(a)) {
                  const p = (0, h.parseVmlElement)(s);
                  p && t.children.push(p);
                }
                return t;
              }
              checkAlternateContent(a) {
                var t;
                if (a.localName != 'AlternateContent') return a;
                var s = r.default.element(a, 'Choice');
                if (s) {
                  var p = r.default.attr(s, 'Requires'),
                    w = a.lookupNamespaceURI(p);
                  if (d.includes(w)) return s.firstElementChild;
                }
                return (t = r.default.element(a, 'Fallback')) === null || t === void 0
                  ? void 0
                  : t.firstElementChild;
              }
              parseDrawing(a) {
                for (var t of r.default.elements(a))
                  switch (t.localName) {
                    case 'inline':
                    case 'anchor':
                      return this.parseDrawingWrapper(t);
                  }
              }
              parseDrawingWrapper(a) {
                var t,
                  s = { type: i.DomType.Drawing, children: [], cssStyle: {} },
                  p = a.localName == 'anchor';
                let w = null,
                  D = r.default.boolAttr(a, 'simplePos'),
                  k = { relative: 'page', align: 'left', offset: '0' },
                  A = { relative: 'page', align: 'top', offset: '0' };
                for (var u of r.default.elements(a))
                  switch (u.localName) {
                    case 'simplePos':
                      D &&
                        ((k.offset = r.default.lengthAttr(u, 'x', c.LengthUsage.Emu)),
                        (A.offset = r.default.lengthAttr(u, 'y', c.LengthUsage.Emu)));
                      break;
                    case 'extent':
                      (s.cssStyle.width = r.default.lengthAttr(u, 'cx', c.LengthUsage.Emu)),
                        (s.cssStyle.height = r.default.lengthAttr(u, 'cy', c.LengthUsage.Emu));
                      break;
                    case 'positionH':
                    case 'positionV':
                      if (!D) {
                        let Y = u.localName == 'positionH' ? k : A;
                        var B = r.default.element(u, 'align'),
                          j = r.default.element(u, 'posOffset');
                        (Y.relative =
                          (t = r.default.attr(u, 'relativeFrom')) !== null && t !== void 0
                            ? t
                            : Y.relative),
                          B && (Y.align = B.textContent),
                          j && (Y.offset = E.sizeValue(j, c.LengthUsage.Emu));
                      }
                      break;
                    case 'wrapTopAndBottom':
                      w = 'wrapTopAndBottom';
                      break;
                    case 'wrapNone':
                      w = 'wrapNone';
                      break;
                    case 'graphic':
                      var M = this.parseGraphic(u);
                      M && s.children.push(M);
                  }
                return (
                  w == 'wrapTopAndBottom'
                    ? ((s.cssStyle.display = 'block'),
                      k.align &&
                        ((s.cssStyle['text-align'] = k.align), (s.cssStyle.width = '100%')))
                    : w == 'wrapNone'
                    ? ((s.cssStyle.display = 'block'),
                      (s.cssStyle.position = 'relative'),
                      (s.cssStyle.width = '0px'),
                      (s.cssStyle.height = '0px'),
                      k.offset && (s.cssStyle.left = k.offset),
                      A.offset && (s.cssStyle.top = A.offset))
                    : !p ||
                      (k.align != 'left' && k.align != 'right') ||
                      (s.cssStyle.float = k.align),
                  s
                );
              }
              parseGraphic(a) {
                var t = r.default.element(a, 'graphicData');
                for (let s of r.default.elements(t))
                  if (s.localName === 'pic') return this.parsePicture(s);
                return null;
              }
              parsePicture(a) {
                var t = { type: i.DomType.Image, src: '', cssStyle: {} },
                  s = r.default.element(a, 'blipFill'),
                  p = r.default.element(s, 'blip');
                t.src = r.default.attr(p, 'embed');
                var w = r.default.element(a, 'spPr'),
                  D = r.default.element(w, 'xfrm');
                for (var k of ((t.cssStyle.position = 'relative'), r.default.elements(D)))
                  switch (k.localName) {
                    case 'ext':
                      (t.cssStyle.width = r.default.lengthAttr(k, 'cx', c.LengthUsage.Emu)),
                        (t.cssStyle.height = r.default.lengthAttr(k, 'cy', c.LengthUsage.Emu));
                      break;
                    case 'off':
                      (t.cssStyle.left = r.default.lengthAttr(k, 'x', c.LengthUsage.Emu)),
                        (t.cssStyle.top = r.default.lengthAttr(k, 'y', c.LengthUsage.Emu));
                  }
                return t;
              }
              parseTable(a) {
                var t = { type: i.DomType.Table, children: [] };
                return (
                  E.foreach(a, (s) => {
                    switch (s.localName) {
                      case 'tr':
                        t.children.push(this.parseTableRow(s));
                        break;
                      case 'tblGrid':
                        t.columns = this.parseTableColumns(s);
                        break;
                      case 'tblPr':
                        this.parseTableProperties(s, t);
                    }
                  }),
                  t
                );
              }
              parseTableColumns(a) {
                var t = [];
                return (
                  E.foreach(a, (s) => {
                    s.localName === 'gridCol' && t.push({ width: r.default.lengthAttr(s, 'w') });
                  }),
                  t
                );
              }
              parseTableProperties(a, t) {
                switch (
                  ((t.cssStyle = {}),
                  (t.cellStyle = {}),
                  this.parseDefaultProperties(a, t.cssStyle, t.cellStyle, (s) => {
                    switch (s.localName) {
                      case 'tblStyle':
                        t.styleName = r.default.attr(s, 'val');
                        break;
                      case 'tblLook':
                        t.className = l.classNameOftblLook(s);
                        break;
                      case 'tblpPr':
                        this.parseTablePosition(s, t);
                        break;
                      case 'tblStyleColBandSize':
                        t.colBandSize = r.default.intAttr(s, 'val');
                        break;
                      case 'tblStyleRowBandSize':
                        t.rowBandSize = r.default.intAttr(s, 'val');
                        break;
                      default:
                        return !1;
                    }
                    return !0;
                  }),
                  t.cssStyle['text-align'])
                ) {
                  case 'center':
                    delete t.cssStyle['text-align'],
                      (t.cssStyle['margin-left'] = 'auto'),
                      (t.cssStyle['margin-right'] = 'auto');
                    break;
                  case 'right':
                    delete t.cssStyle['text-align'], (t.cssStyle['margin-left'] = 'auto');
                }
              }
              parseTablePosition(a, t) {
                var s = r.default.lengthAttr(a, 'topFromText'),
                  p = r.default.lengthAttr(a, 'bottomFromText'),
                  w = r.default.lengthAttr(a, 'rightFromText'),
                  D = r.default.lengthAttr(a, 'leftFromText');
                (t.cssStyle.float = 'left'),
                  (t.cssStyle['margin-bottom'] = l.addSize(t.cssStyle['margin-bottom'], p)),
                  (t.cssStyle['margin-left'] = l.addSize(t.cssStyle['margin-left'], D)),
                  (t.cssStyle['margin-right'] = l.addSize(t.cssStyle['margin-right'], w)),
                  (t.cssStyle['margin-top'] = l.addSize(t.cssStyle['margin-top'], s));
              }
              parseTableRow(a) {
                var t = { type: i.DomType.Row, children: [] };
                return (
                  E.foreach(a, (s) => {
                    switch (s.localName) {
                      case 'tc':
                        t.children.push(this.parseTableCell(s));
                        break;
                      case 'trPr':
                        this.parseTableRowProperties(s, t);
                    }
                  }),
                  t
                );
              }
              parseTableRowProperties(a, t) {
                t.cssStyle = this.parseDefaultProperties(a, {}, null, (s) => {
                  switch (s.localName) {
                    case 'cnfStyle':
                      t.className = l.classNameOfCnfStyle(s);
                      break;
                    case 'tblHeader':
                      t.isHeader = r.default.boolAttr(s, 'val');
                      break;
                    default:
                      return !1;
                  }
                  return !0;
                });
              }
              parseTableCell(a) {
                var t = { type: i.DomType.Cell, children: [] };
                return (
                  E.foreach(a, (s) => {
                    switch (s.localName) {
                      case 'tbl':
                        t.children.push(this.parseTable(s));
                        break;
                      case 'p':
                        t.children.push(this.parseParagraph(s));
                        break;
                      case 'tcPr':
                        this.parseTableCellProperties(s, t);
                    }
                  }),
                  t
                );
              }
              parseTableCellProperties(a, t) {
                t.cssStyle = this.parseDefaultProperties(a, {}, null, (s) => {
                  var p;
                  switch (s.localName) {
                    case 'gridSpan':
                      t.span = r.default.intAttr(s, 'val', null);
                      break;
                    case 'vMerge':
                      t.verticalMerge =
                        (p = r.default.attr(s, 'val')) !== null && p !== void 0 ? p : 'continue';
                      break;
                    case 'cnfStyle':
                      t.className = l.classNameOfCnfStyle(s);
                      break;
                    default:
                      return !1;
                  }
                  return !0;
                });
              }
              parseDefaultProperties(a, t = null, s = null, p = null) {
                return (
                  (t = t || {}),
                  E.foreach(a, (w) => {
                    if (!(p != null && p(w)))
                      switch (w.localName) {
                        case 'jc':
                          t['text-align'] = l.valueOfJc(w);
                          break;
                        case 'textAlignment':
                          t['vertical-align'] = l.valueOfTextAlignment(w);
                          break;
                        case 'color':
                          t.color = E.colorAttr(w, 'val', null, e.autos.color);
                          break;
                        case 'sz':
                          t['font-size'] = t['min-height'] = r.default.lengthAttr(
                            w,
                            'val',
                            c.LengthUsage.FontSize,
                          );
                          break;
                        case 'shd':
                          t['background-color'] = E.colorAttr(w, 'fill', null, e.autos.shd);
                          break;
                        case 'highlight':
                          t['background-color'] = E.colorAttr(w, 'val', null, e.autos.highlight);
                          break;
                        case 'vertAlign':
                          break;
                        case 'position':
                          t.verticalAlign = r.default.lengthAttr(w, 'val', c.LengthUsage.FontSize);
                          break;
                        case 'tcW':
                          if (this.options.ignoreWidth) break;
                        case 'tblW':
                          t.width = l.valueOfSize(w, 'w');
                          break;
                        case 'trHeight':
                          this.parseTrHeight(w, t);
                          break;
                        case 'strike':
                          t['text-decoration'] = r.default.boolAttr(w, 'val', !0)
                            ? 'line-through'
                            : 'none';
                          break;
                        case 'b':
                          t['font-weight'] = r.default.boolAttr(w, 'val', !0) ? 'bold' : 'normal';
                          break;
                        case 'i':
                          t['font-style'] = r.default.boolAttr(w, 'val', !0) ? 'italic' : 'normal';
                          break;
                        case 'caps':
                          t['text-transform'] = r.default.boolAttr(w, 'val', !0)
                            ? 'uppercase'
                            : 'none';
                          break;
                        case 'smallCaps':
                          t['text-transform'] = r.default.boolAttr(w, 'val', !0)
                            ? 'lowercase'
                            : 'none';
                          break;
                        case 'u':
                          this.parseUnderline(w, t);
                          break;
                        case 'ind':
                        case 'tblInd':
                          this.parseIndentation(w, t);
                          break;
                        case 'rFonts':
                          this.parseFont(w, t);
                          break;
                        case 'tblBorders':
                          this.parseBorderProperties(w, s || t);
                          break;
                        case 'tblCellSpacing':
                          (t['border-spacing'] = l.valueOfMargin(w)),
                            (t['border-collapse'] = 'separate');
                          break;
                        case 'pBdr':
                          this.parseBorderProperties(w, t);
                          break;
                        case 'bdr':
                          t.border = l.valueOfBorder(w);
                          break;
                        case 'tcBorders':
                          this.parseBorderProperties(w, t);
                          break;
                        case 'vanish':
                          r.default.boolAttr(w, 'val', !0) && (t.display = 'none');
                          break;
                        case 'kern':
                        case 'noWrap':
                          break;
                        case 'tblCellMar':
                        case 'tcMar':
                          this.parseMarginProperties(w, s || t);
                          break;
                        case 'tblLayout':
                          t['table-layout'] = l.valueOfTblLayout(w);
                          break;
                        case 'vAlign':
                          t['vertical-align'] = l.valueOfTextAlignment(w);
                          break;
                        case 'spacing':
                          a.localName == 'pPr' && this.parseSpacing(w, t);
                          break;
                        case 'wordWrap':
                          r.default.boolAttr(w, 'val') && (t['overflow-wrap'] = 'break-word');
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
                              `DOCX: Unknown document element: ${a.localName}.${w.localName}`,
                            );
                      }
                  }),
                  t
                );
              }
              parseUnderline(a, t) {
                var s = r.default.attr(a, 'val');
                if (s != null) {
                  switch (s) {
                    case 'dash':
                    case 'dashDotDotHeavy':
                    case 'dashDotHeavy':
                    case 'dashedHeavy':
                    case 'dashLong':
                    case 'dashLongHeavy':
                    case 'dotDash':
                    case 'dotDotDash':
                      t['text-decoration-style'] = 'dashed';
                      break;
                    case 'dotted':
                    case 'dottedHeavy':
                      t['text-decoration-style'] = 'dotted';
                      break;
                    case 'double':
                      t['text-decoration-style'] = 'double';
                      break;
                    case 'single':
                    case 'thick':
                    case 'words':
                      t['text-decoration'] = 'underline';
                      break;
                    case 'wave':
                    case 'wavyDouble':
                    case 'wavyHeavy':
                      t['text-decoration-style'] = 'wavy';
                      break;
                    case 'none':
                      t['text-decoration'] = 'none';
                  }
                  var p = E.colorAttr(a, 'color');
                  p && (t['text-decoration-color'] = p);
                }
              }
              parseFont(a, t) {
                var s = [r.default.attr(a, 'ascii'), l.themeValue(a, 'asciiTheme')]
                  .filter((p) => p)
                  .join(', ');
                s.length > 0 && (t['font-family'] = s);
              }
              parseIndentation(a, t) {
                var s = r.default.lengthAttr(a, 'firstLine'),
                  p = r.default.lengthAttr(a, 'hanging'),
                  w = r.default.lengthAttr(a, 'left'),
                  D = r.default.lengthAttr(a, 'start'),
                  k = r.default.lengthAttr(a, 'right'),
                  A = r.default.lengthAttr(a, 'end');
                s && (t['text-indent'] = s),
                  p && (t['text-indent'] = `-${p}`),
                  (w || D) && (t['margin-left'] = w || D),
                  (k || A) && (t['margin-right'] = k || A);
              }
              parseSpacing(a, t) {
                var s = r.default.lengthAttr(a, 'before'),
                  p = r.default.lengthAttr(a, 'after'),
                  w = r.default.intAttr(a, 'line', null),
                  D = r.default.attr(a, 'lineRule');
                if ((s && (t['margin-top'] = s), p && (t['margin-bottom'] = p), w !== null))
                  switch (D) {
                    case 'auto':
                      t['line-height'] = `${(w / 240).toFixed(2)}`;
                      break;
                    case 'atLeast':
                      t['line-height'] = `calc(100% + ${w / 20}pt)`;
                      break;
                    default:
                      t['line-height'] = t['min-height'] = w / 20 + 'pt';
                  }
              }
              parseMarginProperties(a, t) {
                E.foreach(a, (s) => {
                  switch (s.localName) {
                    case 'left':
                      t['padding-left'] = l.valueOfMargin(s);
                      break;
                    case 'right':
                      t['padding-right'] = l.valueOfMargin(s);
                      break;
                    case 'top':
                      t['padding-top'] = l.valueOfMargin(s);
                      break;
                    case 'bottom':
                      t['padding-bottom'] = l.valueOfMargin(s);
                  }
                });
              }
              parseTrHeight(a, t) {
                r.default.attr(a, 'hRule'), (t.height = r.default.lengthAttr(a, 'val'));
              }
              parseBorderProperties(a, t) {
                E.foreach(a, (s) => {
                  switch (s.localName) {
                    case 'start':
                    case 'left':
                      t['border-left'] = l.valueOfBorder(s);
                      break;
                    case 'end':
                    case 'right':
                      t['border-right'] = l.valueOfBorder(s);
                      break;
                    case 'top':
                      t['border-top'] = l.valueOfBorder(s);
                      break;
                    case 'bottom':
                      t['border-bottom'] = l.valueOfBorder(s);
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
            class E {
              static foreach(t, s) {
                for (var p = 0; p < t.childNodes.length; p++) {
                  let w = t.childNodes[p];
                  w.nodeType == Node.ELEMENT_NODE && s(w);
                }
              }
              static colorAttr(t, s, p = null, w = 'black') {
                var D = r.default.attr(t, s);
                if (D) return D == 'auto' ? w : x.includes(D) ? D : `#${D}`;
                var k = r.default.attr(t, 'themeColor');
                return k ? `var(--docx-${k}-color)` : p;
              }
              static sizeValue(t, s = c.LengthUsage.Dxa) {
                return (0, c.convertLength)(t.textContent, s);
              }
            }
            class l {
              static themeValue(t, s) {
                var p = r.default.attr(t, s);
                return p ? `var(--docx-${p}-font)` : null;
              }
              static valueOfSize(t, s) {
                var p = c.LengthUsage.Dxa;
                switch (r.default.attr(t, 'type')) {
                  case 'dxa':
                    break;
                  case 'pct':
                    p = c.LengthUsage.Percent;
                    break;
                  case 'auto':
                    return 'auto';
                }
                return r.default.lengthAttr(t, s, p);
              }
              static valueOfMargin(t) {
                return r.default.lengthAttr(t, 'w');
              }
              static valueOfBorder(t) {
                if (r.default.attr(t, 'val') == 'nil') return 'none';
                var s = E.colorAttr(t, 'color');
                return `${r.default.lengthAttr(t, 'sz', c.LengthUsage.Border)} solid ${
                  s == 'auto' ? e.autos.borderColor : s
                }`;
              }
              static valueOfTblLayout(t) {
                return r.default.attr(t, 'val') == 'fixed' ? 'fixed' : 'auto';
              }
              static classNameOfCnfStyle(t) {
                const s = r.default.attr(t, 'val');
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
                  .filter((p, w) => s[w] == '1')
                  .join(' ');
              }
              static valueOfJc(t) {
                var s = r.default.attr(t, 'val');
                switch (s) {
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
                return s;
              }
              static valueOfVertAlign(t, s = !1) {
                var p = r.default.attr(t, 'val');
                switch (p) {
                  case 'subscript':
                    return 'sub';
                  case 'superscript':
                    return s ? 'sup' : 'super';
                }
                return s ? null : p;
              }
              static valueOfTextAlignment(t) {
                var s = r.default.attr(t, 'val');
                switch (s) {
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
                return s;
              }
              static addSize(t, s) {
                return t == null ? s : s == null ? t : `calc(${t} + ${s})`;
              }
              static classNameOftblLook(t) {
                const s = r.default.hexAttr(t, 'val', 0);
                let p = '';
                return (
                  (r.default.boolAttr(t, 'firstRow') || 32 & s) && (p += ' first-row'),
                  (r.default.boolAttr(t, 'lastRow') || 64 & s) && (p += ' last-row'),
                  (r.default.boolAttr(t, 'firstColumn') || 128 & s) && (p += ' first-col'),
                  (r.default.boolAttr(t, 'lastColumn') || 256 & s) && (p += ' last-col'),
                  (r.default.boolAttr(t, 'noHBand') || 512 & s) && (p += ' no-hband'),
                  (r.default.boolAttr(t, 'noVBand') || 1024 & s) && (p += ' no-vband'),
                  p.trim()
                );
              }
            }
          },
          162: (y, e, n) => {
            Object.defineProperty(e, '__esModule', { value: !0 }), (e.CorePropsPart = void 0);
            const i = n(530),
              b = n(614);
            class g extends i.Part {
              parseXml(o) {
                this.props = (0, b.parseCoreProps)(o, this._package.xmlParser);
              }
            }
            e.CorePropsPart = g;
          },
          614: (y, e) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.parseCoreProps = void 0),
              (e.parseCoreProps = function (n, i) {
                const b = {};
                for (let g of i.elements(n))
                  switch (g.localName) {
                    case 'title':
                      b.title = g.textContent;
                      break;
                    case 'description':
                      b.description = g.textContent;
                      break;
                    case 'subject':
                      b.subject = g.textContent;
                      break;
                    case 'creator':
                      b.creator = g.textContent;
                      break;
                    case 'keywords':
                      b.keywords = g.textContent;
                      break;
                    case 'language':
                      b.language = g.textContent;
                      break;
                    case 'lastModifiedBy':
                      b.lastModifiedBy = g.textContent;
                      break;
                    case 'revision':
                      g.textContent && (b.revision = parseInt(g.textContent));
                  }
                return b;
              });
          },
          177: (y, e, n) => {
            Object.defineProperty(e, '__esModule', { value: !0 }), (e.CustomPropsPart = void 0);
            const i = n(530),
              b = n(821);
            class g extends i.Part {
              parseXml(o) {
                this.props = (0, b.parseCustomProps)(o, this._package.xmlParser);
              }
            }
            e.CustomPropsPart = g;
          },
          821: (y, e) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.parseCustomProps = void 0),
              (e.parseCustomProps = function (n, i) {
                return i.elements(n, 'property').map((b) => {
                  const g = b.firstChild;
                  return {
                    formatId: i.attr(b, 'fmtid'),
                    name: i.attr(b, 'name'),
                    type: g.nodeName,
                    value: g.textContent,
                  };
                });
              });
          },
          665: (y, e, n) => {
            Object.defineProperty(e, '__esModule', { value: !0 }), (e.ExtendedPropsPart = void 0);
            const i = n(530),
              b = n(668);
            class g extends i.Part {
              parseXml(o) {
                this.props = (0, b.parseExtendedProps)(o, this._package.xmlParser);
              }
            }
            e.ExtendedPropsPart = g;
          },
          668: (y, e) => {
            function n(i) {
              if (i !== void 0) return parseInt(i);
            }
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.parseExtendedProps = void 0),
              (e.parseExtendedProps = function (i, b) {
                const g = {};
                for (let r of b.elements(i))
                  switch (r.localName) {
                    case 'Template':
                      g.template = r.textContent;
                      break;
                    case 'Pages':
                      g.pages = n(r.textContent);
                      break;
                    case 'Words':
                      g.words = n(r.textContent);
                      break;
                    case 'Characters':
                      g.characters = n(r.textContent);
                      break;
                    case 'Application':
                      g.application = r.textContent;
                      break;
                    case 'Lines':
                      g.lines = n(r.textContent);
                      break;
                    case 'Paragraphs':
                      g.paragraphs = n(r.textContent);
                      break;
                    case 'Company':
                      g.company = r.textContent;
                      break;
                    case 'AppVersion':
                      g.appVersion = r.textContent;
                  }
                return g;
              });
          },
          172: (y, e, n) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.parseBookmarkEnd = e.parseBookmarkStart = void 0);
            const i = n(120);
            (e.parseBookmarkStart = function (b, g) {
              return {
                type: i.DomType.BookmarkStart,
                id: g.attr(b, 'id'),
                name: g.attr(b, 'name'),
                colFirst: g.intAttr(b, 'colFirst'),
                colLast: g.intAttr(b, 'colLast'),
              };
            }),
              (e.parseBookmarkEnd = function (b, g) {
                return { type: i.DomType.BookmarkEnd, id: g.attr(b, 'id') };
              });
          },
          191: (y, e, n) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.parseBorders = e.parseBorder = void 0);
            const i = n(149);
            function b(g, r) {
              return {
                type: r.attr(g, 'val'),
                color: r.attr(g, 'color'),
                size: r.lengthAttr(g, 'sz', i.LengthUsage.Border),
                offset: r.lengthAttr(g, 'space', i.LengthUsage.Point),
                frame: r.boolAttr(g, 'frame'),
                shadow: r.boolAttr(g, 'shadow'),
              };
            }
            (e.parseBorder = b),
              (e.parseBorders = function (g, r) {
                var o = {};
                for (let m of r.elements(g))
                  switch (m.localName) {
                    case 'left':
                      o.left = b(m, r);
                      break;
                    case 'top':
                      o.top = b(m, r);
                      break;
                    case 'right':
                      o.right = b(m, r);
                      break;
                    case 'bottom':
                      o.bottom = b(m, r);
                  }
                return o;
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
              (e.convertLength = function (n, i = e.LengthUsage.Dxa) {
                return n == null || /.+(p[xt]|[%])$/.test(n)
                  ? n
                  : `${(parseInt(n) * i.mul).toFixed(2)}${i.unit}`;
              }),
              (e.convertBoolean = function (n, i = !1) {
                switch (n) {
                  case '1':
                  case 'on':
                  case 'true':
                    return !0;
                  case '0':
                  case 'off':
                  case 'false':
                    return !1;
                  default:
                    return i;
                }
              }),
              (e.convertPercentage = function (n) {
                return n ? parseInt(n) / 100 : null;
              }),
              (e.parseCommonProperty = function (n, i, b) {
                if (n.namespaceURI != e.ns.wordml) return !1;
                switch (n.localName) {
                  case 'color':
                    i.color = b.attr(n, 'val');
                    break;
                  case 'sz':
                    i.fontSize = b.lengthAttr(n, 'val', e.LengthUsage.FontSize);
                    break;
                  default:
                    return !1;
                }
                return !0;
              });
          },
          448: (y, e, n) => {
            Object.defineProperty(e, '__esModule', { value: !0 }), (e.DocumentPart = void 0);
            const i = n(530);
            class b extends i.Part {
              constructor(r, o, m) {
                super(r, o), (this._documentParser = m);
              }
              parseXml(r) {
                this.body = this._documentParser.parseDocumentFile(r);
              }
            }
            e.DocumentPart = b;
          },
          120: (y, e) => {
            var n;
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.DomType = void 0),
              ((n = e.DomType || (e.DomType = {})).Document = 'document'),
              (n.Paragraph = 'paragraph'),
              (n.Run = 'run'),
              (n.Break = 'break'),
              (n.NoBreakHyphen = 'noBreakHyphen'),
              (n.Table = 'table'),
              (n.Row = 'row'),
              (n.Cell = 'cell'),
              (n.Hyperlink = 'hyperlink'),
              (n.Drawing = 'drawing'),
              (n.Image = 'image'),
              (n.Text = 'text'),
              (n.Tab = 'tab'),
              (n.Symbol = 'symbol'),
              (n.BookmarkStart = 'bookmarkStart'),
              (n.BookmarkEnd = 'bookmarkEnd'),
              (n.Footer = 'footer'),
              (n.Header = 'header'),
              (n.FootnoteReference = 'footnoteReference'),
              (n.EndnoteReference = 'endnoteReference'),
              (n.Footnote = 'footnote'),
              (n.Endnote = 'endnote'),
              (n.SimpleField = 'simpleField'),
              (n.ComplexField = 'complexField'),
              (n.Instruction = 'instruction'),
              (n.VmlPicture = 'vmlPicture'),
              (n.MmlMath = 'mmlMath'),
              (n.MmlMathParagraph = 'mmlMathParagraph'),
              (n.MmlFraction = 'mmlFraction'),
              (n.MmlNumerator = 'mmlNumerator'),
              (n.MmlDenominator = 'mmlDenominator'),
              (n.MmlRadical = 'mmlRadical'),
              (n.MmlBase = 'mmlBase'),
              (n.MmlDegree = 'mmlDegree'),
              (n.MmlSuperscript = 'mmlSuperscript'),
              (n.MmlSubscript = 'mmlSubscript'),
              (n.MmlSubArgument = 'mmlSubArgument'),
              (n.MmlSuperArgument = 'mmlSuperArgument'),
              (n.MmlNary = 'mmlNary'),
              (n.MmlDelimiter = 'mmlDelimiter'),
              (n.MmlRun = 'mmlRun'),
              (n.VmlElement = 'vmlElement'),
              (n.Inserted = 'inserted'),
              (n.Deleted = 'deleted'),
              (n.DeletedText = 'deletedText');
          },
          931: (y, e) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.parseLineSpacing = void 0),
              (e.parseLineSpacing = function (n, i) {
                return {
                  before: i.lengthAttr(n, 'before'),
                  after: i.lengthAttr(n, 'after'),
                  line: i.intAttr(n, 'line'),
                  lineRule: i.attr(n, 'lineRule'),
                };
              });
          },
          109: (y, e, n) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.parseNumbering =
                e.parseTabs =
                e.parseParagraphProperty =
                e.parseParagraphProperties =
                  void 0);
            const i = n(149),
              b = n(59),
              g = n(931),
              r = n(488);
            function o(h, d, v) {
              if (h.namespaceURI != i.ns.wordml) return !1;
              if ((0, i.parseCommonProperty)(h, d, v)) return !0;
              switch (h.localName) {
                case 'tabs':
                  d.tabs = m(h, v);
                  break;
                case 'sectPr':
                  d.sectionProps = (0, b.parseSectionProperties)(h, v);
                  break;
                case 'numPr':
                  d.numbering = c(h, v);
                  break;
                case 'spacing':
                  return (d.lineSpacing = (0, g.parseLineSpacing)(h, v)), !1;
                case 'textAlignment':
                  return (d.textAlignment = v.attr(h, 'val')), !1;
                case 'keepNext':
                  d.keepLines = v.boolAttr(h, 'val', !0);
                  break;
                case 'keepNext':
                  d.keepNext = v.boolAttr(h, 'val', !0);
                  break;
                case 'pageBreakBefore':
                  d.pageBreakBefore = v.boolAttr(h, 'val', !0);
                  break;
                case 'outlineLvl':
                  d.outlineLevel = v.intAttr(h, 'val');
                  break;
                case 'pStyle':
                  d.styleName = v.attr(h, 'val');
                  break;
                case 'rPr':
                  d.runProps = (0, r.parseRunProperties)(h, v);
                  break;
                default:
                  return !1;
              }
              return !0;
            }
            function m(h, d) {
              return d
                .elements(h, 'tab')
                .map((v) => ({
                  position: d.lengthAttr(v, 'pos'),
                  leader: d.attr(v, 'leader'),
                  style: d.attr(v, 'val'),
                }));
            }
            function c(h, d) {
              var v = {};
              for (let x of d.elements(h))
                switch (x.localName) {
                  case 'numId':
                    v.id = d.attr(x, 'val');
                    break;
                  case 'ilvl':
                    v.level = d.intAttr(x, 'val');
                }
              return v;
            }
            (e.parseParagraphProperties = function (h, d) {
              let v = {};
              for (let x of d.elements(h)) o(x, v, d);
              return v;
            }),
              (e.parseParagraphProperty = o),
              (e.parseTabs = m),
              (e.parseNumbering = c);
          },
          488: (y, e, n) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.parseRunProperty = e.parseRunProperties = void 0);
            const i = n(149);
            function b(g, r, o) {
              return !!(0, i.parseCommonProperty)(g, r, o);
            }
            (e.parseRunProperties = function (g, r) {
              let o = {};
              for (let m of r.elements(g)) b(m, o, r);
              return o;
            }),
              (e.parseRunProperty = b);
          },
          59: (y, e, n) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.parseSectionProperties = e.SectionType = void 0);
            const i = n(472),
              b = n(191);
            function g(c, h) {
              return {
                numberOfColumns: h.intAttr(c, 'num'),
                space: h.lengthAttr(c, 'space'),
                separator: h.boolAttr(c, 'sep'),
                equalWidth: h.boolAttr(c, 'equalWidth', !0),
                columns: h
                  .elements(c, 'col')
                  .map((d) => ({ width: h.lengthAttr(d, 'w'), space: h.lengthAttr(d, 'space') })),
              };
            }
            function r(c, h) {
              return {
                chapSep: h.attr(c, 'chapSep'),
                chapStyle: h.attr(c, 'chapStyle'),
                format: h.attr(c, 'fmt'),
                start: h.intAttr(c, 'start'),
              };
            }
            function o(c, h) {
              return { id: h.attr(c, 'id'), type: h.attr(c, 'type') };
            }
            var m;
            ((m = e.SectionType || (e.SectionType = {})).Continuous = 'continuous'),
              (m.NextPage = 'nextPage'),
              (m.NextColumn = 'nextColumn'),
              (m.EvenPage = 'evenPage'),
              (m.OddPage = 'oddPage'),
              (e.parseSectionProperties = function (c, h = i.default) {
                var d,
                  v,
                  x = {};
                for (let E of h.elements(c))
                  switch (E.localName) {
                    case 'pgSz':
                      x.pageSize = {
                        width: h.lengthAttr(E, 'w'),
                        height: h.lengthAttr(E, 'h'),
                        orientation: h.attr(E, 'orient'),
                      };
                      break;
                    case 'type':
                      x.type = h.attr(E, 'val');
                      break;
                    case 'pgMar':
                      x.pageMargins = {
                        left: h.lengthAttr(E, 'left'),
                        right: h.lengthAttr(E, 'right'),
                        top: h.lengthAttr(E, 'top'),
                        bottom: h.lengthAttr(E, 'bottom'),
                        header: h.lengthAttr(E, 'header'),
                        footer: h.lengthAttr(E, 'footer'),
                        gutter: h.lengthAttr(E, 'gutter'),
                      };
                      break;
                    case 'cols':
                      x.columns = g(E, h);
                      break;
                    case 'headerReference':
                      ((d = x.headerRefs) !== null && d !== void 0 ? d : (x.headerRefs = [])).push(
                        o(E, h),
                      );
                      break;
                    case 'footerReference':
                      ((v = x.footerRefs) !== null && v !== void 0 ? v : (x.footerRefs = [])).push(
                        o(E, h),
                      );
                      break;
                    case 'titlePg':
                      x.titlePage = h.boolAttr(E, 'val', !0);
                      break;
                    case 'pgBorders':
                      x.pageBorders = (0, b.parseBorders)(E, h);
                      break;
                    case 'pgNumType':
                      x.pageNumber = r(E, h);
                  }
                return x;
              });
          },
          667: (y, e, n) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.renderAsync = e.praseAsync = e.defaultOptions = void 0);
            const i = n(213),
              b = n(168),
              g = n(932);
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
              (e.praseAsync = function (r, o = null) {
                const m = Object.assign(Object.assign({}, e.defaultOptions), o);
                return i.WordDocument.load(r, new b.DocumentParser(m), m);
              }),
              (e.renderAsync = function (r, o, m = null, c = null) {
                const h = Object.assign(Object.assign({}, e.defaultOptions), c),
                  d = new g.HtmlRenderer(window.document);
                return i.WordDocument.load(r, new b.DocumentParser(h), h).then(
                  (v) => (d.render(v, o, m, h), v),
                );
              });
          },
          380: (y, e, n) => {
            Object.defineProperty(e, '__esModule', { value: !0 }), (e.FontTablePart = void 0);
            const i = n(530),
              b = n(512);
            class g extends i.Part {
              parseXml(o) {
                this.fonts = (0, b.parseFonts)(o, this._package.xmlParser);
              }
            }
            e.FontTablePart = g;
          },
          512: (y, e) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.parseEmbedFontRef = e.parseFont = e.parseFonts = void 0);
            const n = {
              embedRegular: 'regular',
              embedBold: 'bold',
              embedItalic: 'italic',
              embedBoldItalic: 'boldItalic',
            };
            function i(g, r) {
              let o = { name: r.attr(g, 'name'), embedFontRefs: [] };
              for (let m of r.elements(g))
                switch (m.localName) {
                  case 'family':
                    o.family = r.attr(m, 'val');
                    break;
                  case 'altName':
                    o.altName = r.attr(m, 'val');
                    break;
                  case 'embedRegular':
                  case 'embedBold':
                  case 'embedItalic':
                  case 'embedBoldItalic':
                    o.embedFontRefs.push(b(m, r));
                }
              return o;
            }
            function b(g, r) {
              return { id: r.attr(g, 'id'), key: r.attr(g, 'fontKey'), type: n[g.localName] };
            }
            (e.parseFonts = function (g, r) {
              return r.elements(g).map((o) => i(o, r));
            }),
              (e.parseFont = i),
              (e.parseEmbedFontRef = b);
          },
          984: (y, e, n) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.WmlFooter = e.WmlHeader = void 0);
            const i = n(120);
            (e.WmlHeader = class {
              constructor() {
                (this.type = i.DomType.Header), (this.children = []), (this.cssStyle = {});
              }
            }),
              (e.WmlFooter = class {
                constructor() {
                  (this.type = i.DomType.Footer), (this.children = []), (this.cssStyle = {});
                }
              });
          },
          985: (y, e, n) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.FooterPart = e.HeaderPart = e.BaseHeaderFooterPart = void 0);
            const i = n(530),
              b = n(984);
            class g extends i.Part {
              constructor(o, m, c) {
                super(o, m), (this._documentParser = c);
              }
              parseXml(o) {
                (this.rootElement = this.createRootElement()),
                  (this.rootElement.children = this._documentParser.parseBodyElements(o));
              }
            }
            (e.BaseHeaderFooterPart = g),
              (e.HeaderPart = class extends g {
                createRootElement() {
                  return new b.WmlHeader();
                }
              }),
              (e.FooterPart = class extends g {
                createRootElement() {
                  return new b.WmlFooter();
                }
              });
          },
          932: (y, e, n) => {
            Object.defineProperty(e, '__esModule', { value: !0 }), (e.HtmlRenderer = void 0);
            const i = n(120),
              b = n(593),
              g = n(630),
              r = n(438),
              o = 'http://www.w3.org/1998/Math/MathML';
            function m(l, a, t) {
              return h(void 0, l, a, t);
            }
            function c(l, a, t) {
              return h('http://www.w3.org/2000/svg', l, a, t);
            }
            function h(l, a, t, s) {
              var p = l ? document.createElementNS(l, a) : document.createElement(a);
              return Object.assign(p, t), s && v(p, s), p;
            }
            function d(l) {
              l.innerHTML = '';
            }
            function v(l, a) {
              a.forEach((t) => l.appendChild((0, b.isString)(t) ? document.createTextNode(t) : t));
            }
            function x(l) {
              return m('style', { innerHTML: l });
            }
            function E(l, a) {
              l.appendChild(document.createComment(a));
            }
            e.HtmlRenderer = class {
              constructor(l) {
                (this.htmlDocument = l),
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
                  (this.createElement = m);
              }
              render(l, a, t = null, s) {
                var p;
                (this.document = l),
                  (this.options = s),
                  (this.className = s.className),
                  (this.rootSelector = s.inWrapper ? `.${this.className}-wrapper` : ':root'),
                  (this.styleMap = null),
                  d((t = t || a)),
                  d(a),
                  E(t, 'docxjs library predefined styles'),
                  t.appendChild(this.renderDefaultStyle()),
                  !window.MathMLElement &&
                    s.useMathMLPolyfill &&
                    (E(t, 'docxjs mathml polyfill styles'), t.appendChild(x(r.default))),
                  l.themePart &&
                    (E(t, 'docxjs document theme values'), this.renderTheme(l.themePart, t)),
                  l.stylesPart != null &&
                    ((this.styleMap = this.processStyles(l.stylesPart.styles)),
                    E(t, 'docxjs document styles'),
                    t.appendChild(this.renderStyles(l.stylesPart.styles))),
                  l.numberingPart &&
                    (this.prodessNumberings(l.numberingPart.domNumberings),
                    E(t, 'docxjs document numbering styles'),
                    t.appendChild(this.renderNumbering(l.numberingPart.domNumberings, t))),
                  l.footnotesPart &&
                    (this.footnoteMap = (0, b.keyBy)(l.footnotesPart.notes, (D) => D.id)),
                  l.endnotesPart &&
                    (this.endnoteMap = (0, b.keyBy)(l.endnotesPart.notes, (D) => D.id)),
                  l.settingsPart &&
                    (this.defaultTabSize =
                      (p = l.settingsPart.settings) === null || p === void 0
                        ? void 0
                        : p.defaultTabStop),
                  !s.ignoreFonts && l.fontTablePart && this.renderFontTable(l.fontTablePart, t);
                var w = this.renderSections(l.documentPart.body);
                this.options.inWrapper ? a.appendChild(this.renderWrapper(w)) : v(a, w),
                  this.refreshTabStops();
              }
              renderTheme(l, a) {
                var t, s;
                const p = {},
                  w = (t = l.theme) === null || t === void 0 ? void 0 : t.fontScheme;
                w &&
                  (w.majorFont && (p['--docx-majorHAnsi-font'] = w.majorFont.latinTypeface),
                  w.minorFont && (p['--docx-minorHAnsi-font'] = w.minorFont.latinTypeface));
                const D = (s = l.theme) === null || s === void 0 ? void 0 : s.colorScheme;
                if (D)
                  for (let [A, u] of Object.entries(D.colors)) p[`--docx-${A}-color`] = `#${u}`;
                const k = this.styleToString(`.${this.className}`, p);
                a.appendChild(x(k));
              }
              renderFontTable(l, a) {
                for (let t of l.fonts)
                  for (let s of t.embedFontRefs)
                    this.document.loadFont(s.id, s.key).then((p) => {
                      const w = { 'font-family': t.name, src: `url(${p})` };
                      (s.type != 'bold' && s.type != 'boldItalic') || (w['font-weight'] = 'bold'),
                        (s.type != 'italic' && s.type != 'boldItalic') ||
                          (w['font-style'] = 'italic'),
                        E(a, `docxjs ${t.name} font`);
                      const D = this.styleToString('@font-face', w);
                      a.appendChild(x(D)), this.refreshTabStops();
                    });
              }
              processStyleName(l) {
                return l ? `${this.className}_${(0, b.escapeClassName)(l)}` : this.className;
              }
              processStyles(l) {
                const a = (0, b.keyBy)(
                  l.filter((s) => s.id != null),
                  (s) => s.id,
                );
                for (const s of l.filter((p) => p.basedOn)) {
                  var t = a[s.basedOn];
                  if (t) {
                    (s.paragraphProps = (0, b.mergeDeep)(s.paragraphProps, t.paragraphProps)),
                      (s.runProps = (0, b.mergeDeep)(s.runProps, t.runProps));
                    for (const p of t.styles) {
                      const w = s.styles.find((D) => D.target == p.target);
                      w
                        ? this.copyStyleProperties(p.values, w.values)
                        : s.styles.push(
                            Object.assign(Object.assign({}, p), {
                              values: Object.assign({}, p.values),
                            }),
                          );
                    }
                  } else this.options.debug && console.warn(`Can't find base style ${s.basedOn}`);
                }
                for (let s of l) s.cssName = this.processStyleName(s.id);
                return a;
              }
              prodessNumberings(l) {
                var a;
                for (let t of l.filter((s) => s.pStyleName)) {
                  const s = this.findStyle(t.pStyleName);
                  !((a = s == null ? void 0 : s.paragraphProps) === null || a === void 0) &&
                    a.numbering &&
                    (s.paragraphProps.numbering.level = t.level);
                }
              }
              processElement(l) {
                if (l.children)
                  for (var a of l.children)
                    (a.parent = l),
                      a.type == i.DomType.Table ? this.processTable(a) : this.processElement(a);
              }
              processTable(l) {
                for (var a of l.children)
                  for (var t of a.children)
                    (t.cssStyle = this.copyStyleProperties(l.cellStyle, t.cssStyle, [
                      'border-left',
                      'border-right',
                      'border-top',
                      'border-bottom',
                      'padding-left',
                      'padding-right',
                      'padding-top',
                      'padding-bottom',
                    ])),
                      this.processElement(t);
              }
              copyStyleProperties(l, a, t = null) {
                if (!l) return a;
                for (var s of (a == null && (a = {}),
                t == null && (t = Object.getOwnPropertyNames(l)),
                t))
                  l.hasOwnProperty(s) && !a.hasOwnProperty(s) && (a[s] = l[s]);
                return a;
              }
              createSection(l, a) {
                var t = this.createElement('section', { className: l });
                return (
                  a &&
                    (a.pageMargins &&
                      ((t.style.paddingLeft = a.pageMargins.left),
                      (t.style.paddingRight = a.pageMargins.right),
                      (t.style.paddingTop = a.pageMargins.top),
                      (t.style.paddingBottom = a.pageMargins.bottom)),
                    a.pageSize &&
                      (this.options.ignoreWidth || (t.style.width = a.pageSize.width),
                      this.options.ignoreHeight || (t.style.minHeight = a.pageSize.height)),
                    a.columns &&
                      a.columns.numberOfColumns &&
                      ((t.style.columnCount = `${a.columns.numberOfColumns}`),
                      (t.style.columnGap = a.columns.space),
                      a.columns.separator && (t.style.columnRule = '1px solid black'))),
                  t
                );
              }
              renderSections(l) {
                const a = [];
                this.processElement(l);
                const t = this.splitBySection(l.children);
                let s = null;
                for (let w = 0, D = t.length; w < D; w++) {
                  this.currentFootnoteIds = [];
                  const k = t[w],
                    A = k.sectProps || l.props,
                    u = this.createSection(this.className, A);
                  this.renderStyleValues(l.cssStyle, u),
                    this.options.renderHeaders &&
                      this.renderHeaderFooter(A.headerRefs, A, a.length, s != A, u);
                  var p = this.createElement('article');
                  this.renderElements(k.elements, p),
                    u.appendChild(p),
                    this.options.renderFootnotes &&
                      this.renderNotes(this.currentFootnoteIds, this.footnoteMap, u),
                    this.options.renderEndnotes &&
                      w == D - 1 &&
                      this.renderNotes(this.currentEndnoteIds, this.endnoteMap, u),
                    this.options.renderFooters &&
                      this.renderHeaderFooter(A.footerRefs, A, a.length, s != A, u),
                    a.push(u),
                    (s = A);
                }
                return a;
              }
              renderHeaderFooter(l, a, t, s, p) {
                var w, D;
                if (l) {
                  var k =
                      (D =
                        (w = a.titlePage && s ? l.find((u) => u.type == 'first') : null) !== null &&
                        w !== void 0
                          ? w
                          : t % 2 == 1
                          ? l.find((u) => u.type == 'even')
                          : null) !== null && D !== void 0
                        ? D
                        : l.find((u) => u.type == 'default'),
                    A = k && this.document.findPartByRelId(k.id, this.document.documentPart);
                  A &&
                    ((this.currentPart = A),
                    this.usedHederFooterParts.includes(A.path) ||
                      (this.processElement(A.rootElement), this.usedHederFooterParts.push(A.path)),
                    this.renderElements([A.rootElement], p),
                    (this.currentPart = null));
                }
              }
              isPageBreakElement(l) {
                return (
                  l.type == i.DomType.Break &&
                  (l.break == 'lastRenderedPageBreak'
                    ? !this.options.ignoreLastRenderedPageBreak
                    : l.break == 'page')
                );
              }
              splitBySection(l) {
                var a,
                  t = { sectProps: null, elements: [] },
                  s = [t];
                for (let B of l) {
                  if (B.type == i.DomType.Paragraph) {
                    const j = this.findStyle(B.styleName);
                    !((a = j == null ? void 0 : j.paragraphProps) === null || a === void 0) &&
                      a.pageBreakBefore &&
                      ((t.sectProps = p), (t = { sectProps: null, elements: [] }), s.push(t));
                  }
                  if ((t.elements.push(B), B.type == i.DomType.Paragraph)) {
                    const j = B;
                    var p = j.sectionProps,
                      w = -1,
                      D = -1;
                    if (
                      (this.options.breakPages &&
                        j.children &&
                        (w = j.children.findIndex((M) => {
                          var Y, $;
                          return (
                            (D =
                              ($ =
                                (Y = M.children) === null || Y === void 0
                                  ? void 0
                                  : Y.findIndex(this.isPageBreakElement.bind(this))) !== null &&
                              $ !== void 0
                                ? $
                                : -1) != -1
                          );
                        })),
                      (p || w != -1) &&
                        ((t.sectProps = p), (t = { sectProps: null, elements: [] }), s.push(t)),
                      w != -1)
                    ) {
                      let M = j.children[w],
                        Y = D < M.children.length - 1;
                      if (w < j.children.length - 1 || Y) {
                        var k = B.children,
                          A = Object.assign(Object.assign({}, B), { children: k.slice(w) });
                        if (((B.children = k.slice(0, w)), t.elements.push(A), Y)) {
                          let $ = M.children,
                            Q = Object.assign(Object.assign({}, M), { children: $.slice(0, D) });
                          B.children.push(Q), (M.children = $.slice(D));
                        }
                      }
                    }
                  }
                }
                let u = null;
                for (let B = s.length - 1; B >= 0; B--)
                  s[B].sectProps == null ? (s[B].sectProps = u) : (u = s[B].sectProps);
                return s;
              }
              renderWrapper(l) {
                return this.createElement('div', { className: `${this.className}-wrapper` }, l);
              }
              renderDefaultStyle() {
                var l = this.className;
                return x(`
.${l}-wrapper { background: gray; padding: 30px; padding-bottom: 0px; display: flex; flex-flow: column; align-items: center; } 
.${l}-wrapper>section.${l} { background: white; box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); margin-bottom: 30px; }
.${l} { color: black; }
section.${l} { box-sizing: border-box; display: flex; flex-flow: column nowrap; position: relative; overflow: hidden; }
section.${l}>article { margin-bottom: auto; }
.${l} table { border-collapse: collapse; }
.${l} table td, .${l} table th { vertical-align: top; }
.${l} p { margin: 0pt; min-height: 1em; }
.${l} span { white-space: pre-wrap; overflow-wrap: break-word; }
.${l} a { color: inherit; text-decoration: inherit; }
`);
              }
              renderNumbering(l, a) {
                var t = '',
                  s = [];
                for (var p of l) {
                  var w = `p.${this.numberingClass(p.id, p.level)}`,
                    D = 'none';
                  if (p.bullet) {
                    let k = `--${this.className}-${p.bullet.src}`.toLowerCase();
                    (t += this.styleToString(
                      `${w}:before`,
                      { content: "' '", display: 'inline-block', background: `var(${k})` },
                      p.bullet.style,
                    )),
                      this.document.loadNumberingImage(p.bullet.src).then((A) => {
                        var u = `${this.rootSelector} { ${k}: url(${A}) }`;
                        a.appendChild(x(u));
                      });
                  } else if (p.levelText) {
                    let k = this.numberingCounter(p.id, p.level);
                    p.level > 0
                      ? (t += this.styleToString(`p.${this.numberingClass(p.id, p.level - 1)}`, {
                          'counter-reset': k,
                        }))
                      : s.push(k),
                      (t += this.styleToString(
                        `${w}:before`,
                        Object.assign(
                          {
                            content: this.levelTextToContent(
                              p.levelText,
                              p.suff,
                              p.id,
                              this.numFormatToCssValue(p.format),
                            ),
                            'counter-increment': k,
                          },
                          p.rStyle,
                        ),
                      ));
                  } else D = this.numFormatToCssValue(p.format);
                  t += this.styleToString(
                    w,
                    Object.assign(
                      {
                        display: 'list-item',
                        'list-style-position': 'inside',
                        'list-style-type': D,
                      },
                      p.pStyle,
                    ),
                  );
                }
                return (
                  s.length > 0 &&
                    (t += this.styleToString(this.rootSelector, { 'counter-reset': s.join(' ') })),
                  x(t)
                );
              }
              renderStyles(l) {
                var a,
                  t = '';
                const s = this.styleMap,
                  p = (0, b.keyBy)(
                    l.filter((A) => A.isDefault),
                    (A) => A.target,
                  );
                for (const A of l) {
                  var w = A.styles;
                  if (A.linked) {
                    var D = A.linked && s[A.linked];
                    D
                      ? (w = w.concat(D.styles))
                      : this.options.debug && console.warn(`Can't find linked style ${A.linked}`);
                  }
                  for (const u of w) {
                    var k = `${(a = A.target) !== null && a !== void 0 ? a : ''}.${A.cssName}`;
                    A.target != u.target && (k += ` ${u.target}`),
                      p[A.target] == A && (k = `.${this.className} ${A.target}, ` + k),
                      (t += this.styleToString(k, u.values));
                  }
                }
                return x(t);
              }
              renderNotes(l, a, t) {
                var s = l.map((w) => a[w]).filter((w) => w);
                if (s.length > 0) {
                  var p = this.createElement('ol', null, this.renderElements(s));
                  t.appendChild(p);
                }
              }
              renderElement(l) {
                switch (l.type) {
                  case i.DomType.Paragraph:
                    return this.renderParagraph(l);
                  case i.DomType.BookmarkStart:
                    return this.renderBookmarkStart(l);
                  case i.DomType.BookmarkEnd:
                    return null;
                  case i.DomType.Run:
                    return this.renderRun(l);
                  case i.DomType.Table:
                    return this.renderTable(l);
                  case i.DomType.Row:
                    return this.renderTableRow(l);
                  case i.DomType.Cell:
                    return this.renderTableCell(l);
                  case i.DomType.Hyperlink:
                    return this.renderHyperlink(l);
                  case i.DomType.Drawing:
                    return this.renderDrawing(l);
                  case i.DomType.Image:
                    return this.renderImage(l);
                  case i.DomType.Text:
                  case i.DomType.Text:
                    return this.renderText(l);
                  case i.DomType.DeletedText:
                    return this.renderDeletedText(l);
                  case i.DomType.Tab:
                    return this.renderTab(l);
                  case i.DomType.Symbol:
                    return this.renderSymbol(l);
                  case i.DomType.Break:
                    return this.renderBreak(l);
                  case i.DomType.Footer:
                    return this.renderContainer(l, 'footer');
                  case i.DomType.Header:
                    return this.renderContainer(l, 'header');
                  case i.DomType.Footnote:
                  case i.DomType.Endnote:
                    return this.renderContainer(l, 'li');
                  case i.DomType.FootnoteReference:
                    return this.renderFootnoteReference(l);
                  case i.DomType.EndnoteReference:
                    return this.renderEndnoteReference(l);
                  case i.DomType.NoBreakHyphen:
                    return this.createElement('wbr');
                  case i.DomType.VmlPicture:
                    return this.renderVmlPicture(l);
                  case i.DomType.VmlElement:
                    return this.renderVmlElement(l);
                  case i.DomType.MmlMath:
                    return this.renderContainerNS(l, o, 'math', { xmlns: o });
                  case i.DomType.MmlMathParagraph:
                    return this.renderContainer(l, 'span');
                  case i.DomType.MmlFraction:
                    return this.renderContainerNS(l, o, 'mfrac');
                  case i.DomType.MmlNumerator:
                  case i.DomType.MmlDenominator:
                    return this.renderContainerNS(l, o, 'mrow');
                  case i.DomType.MmlRadical:
                    return this.renderMmlRadical(l);
                  case i.DomType.MmlDegree:
                    return this.renderContainerNS(l, o, 'mn');
                  case i.DomType.MmlSuperscript:
                    return this.renderContainerNS(l, o, 'msup');
                  case i.DomType.MmlSubscript:
                    return this.renderContainerNS(l, o, 'msub');
                  case i.DomType.MmlBase:
                    return this.renderContainerNS(l, o, 'mrow');
                  case i.DomType.MmlSuperArgument:
                  case i.DomType.MmlSubArgument:
                    return this.renderContainerNS(l, o, 'mn');
                  case i.DomType.MmlDelimiter:
                    return this.renderMmlDelimiter(l);
                  case i.DomType.MmlRun:
                    return this.renderMmlRun(l);
                  case i.DomType.MmlNary:
                    return this.renderMmlNary(l);
                  case i.DomType.Inserted:
                    return this.renderInserted(l);
                  case i.DomType.Deleted:
                    return this.renderDeleted(l);
                }
                return null;
              }
              renderChildren(l, a) {
                return this.renderElements(l.children, a);
              }
              renderElements(l, a) {
                if (l == null) return null;
                var t = l.flatMap((s) => this.renderElement(s)).filter((s) => s != null);
                return a && v(a, t), t;
              }
              renderContainer(l, a, t) {
                return this.createElement(a, t, this.renderChildren(l));
              }
              renderContainerNS(l, a, t, s) {
                return h(a, t, s, this.renderChildren(l));
              }
              renderParagraph(l) {
                var a,
                  t,
                  s,
                  p,
                  w = this.createElement('p');
                const D = this.findStyle(l.styleName);
                ((a = l.tabs) !== null && a !== void 0) ||
                  (l.tabs =
                    (t = D == null ? void 0 : D.paragraphProps) === null || t === void 0
                      ? void 0
                      : t.tabs),
                  this.renderClass(l, w),
                  this.renderChildren(l, w),
                  this.renderStyleValues(l.cssStyle, w),
                  this.renderCommonProperties(w.style, l);
                const k =
                  (s = l.numbering) !== null && s !== void 0
                    ? s
                    : (p = D == null ? void 0 : D.paragraphProps) === null || p === void 0
                    ? void 0
                    : p.numbering;
                return k && w.classList.add(this.numberingClass(k.id, k.level)), w;
              }
              renderRunProperties(l, a) {
                this.renderCommonProperties(l, a);
              }
              renderCommonProperties(l, a) {
                a != null &&
                  (a.color && (l.color = a.color), a.fontSize && (l['font-size'] = a.fontSize));
              }
              renderHyperlink(l) {
                var a = this.createElement('a');
                if ((this.renderChildren(l, a), this.renderStyleValues(l.cssStyle, a), l.href))
                  a.href = l.href;
                else if (l.id) {
                  const t = this.document.documentPart.rels.find(
                    (s) => s.id == l.id && s.targetMode === 'External',
                  );
                  a.href = t == null ? void 0 : t.target;
                }
                return a;
              }
              renderDrawing(l) {
                var a = this.createElement('div');
                return (
                  (a.style.display = 'inline-block'),
                  (a.style.position = 'relative'),
                  (a.style.textIndent = '0px'),
                  this.renderChildren(l, a),
                  this.renderStyleValues(l.cssStyle, a),
                  a
                );
              }
              renderImage(l) {
                let a = this.createElement('img');
                return (
                  this.renderStyleValues(l.cssStyle, a),
                  this.document &&
                    this.document.loadDocumentImage(l.src, this.currentPart).then((t) => {
                      a.src = t;
                    }),
                  a
                );
              }
              renderText(l) {
                return this.htmlDocument.createTextNode(l.text);
              }
              renderDeletedText(l) {
                return this.options.renderEndnotes
                  ? this.htmlDocument.createTextNode(l.text)
                  : null;
              }
              renderBreak(l) {
                return l.break == 'textWrapping' ? this.createElement('br') : null;
              }
              renderInserted(l) {
                return this.options.renderChanges
                  ? this.renderContainer(l, 'ins')
                  : this.renderChildren(l);
              }
              renderDeleted(l) {
                return this.options.renderChanges ? this.renderContainer(l, 'del') : null;
              }
              renderSymbol(l) {
                var a = this.createElement('span');
                return (a.style.fontFamily = l.font), (a.innerHTML = `&#x${l.char};`), a;
              }
              renderFootnoteReference(l) {
                var a = this.createElement('sup');
                return (
                  this.currentFootnoteIds.push(l.id),
                  (a.textContent = `${this.currentFootnoteIds.length}`),
                  a
                );
              }
              renderEndnoteReference(l) {
                var a = this.createElement('sup');
                return (
                  this.currentEndnoteIds.push(l.id),
                  (a.textContent = `${this.currentEndnoteIds.length}`),
                  a
                );
              }
              renderTab(l) {
                var a,
                  t = this.createElement('span');
                if (((t.innerHTML = '&emsp;'), this.options.experimental)) {
                  t.className = this.tabStopClass();
                  var s =
                    (a = (function (p, w) {
                      for (var D = p.parent; D != null && D.type != w; ) D = D.parent;
                      return D;
                    })(l, i.DomType.Paragraph)) === null || a === void 0
                      ? void 0
                      : a.tabs;
                  this.currentTabs.push({ stops: s, span: t });
                }
                return t;
              }
              renderBookmarkStart(l) {
                var a = this.createElement('span');
                return (a.id = l.name), a;
              }
              renderRun(l) {
                if (l.fieldRun) return null;
                const a = this.createElement('span');
                if (
                  (l.id && (a.id = l.id),
                  this.renderClass(l, a),
                  this.renderStyleValues(l.cssStyle, a),
                  l.verticalAlign)
                ) {
                  const t = this.createElement(l.verticalAlign);
                  this.renderChildren(l, t), a.appendChild(t);
                } else this.renderChildren(l, a);
                return a;
              }
              renderTable(l) {
                let a = this.createElement('table');
                return (
                  this.tableCellPositions.push(this.currentCellPosition),
                  this.tableVerticalMerges.push(this.currentVerticalMerge),
                  (this.currentVerticalMerge = {}),
                  (this.currentCellPosition = { col: 0, row: 0 }),
                  l.columns && a.appendChild(this.renderTableColumns(l.columns)),
                  this.renderClass(l, a),
                  this.renderChildren(l, a),
                  this.renderStyleValues(l.cssStyle, a),
                  (this.currentVerticalMerge = this.tableVerticalMerges.pop()),
                  (this.currentCellPosition = this.tableCellPositions.pop()),
                  a
                );
              }
              renderTableColumns(l) {
                let a = this.createElement('colgroup');
                for (let t of l) {
                  let s = this.createElement('col');
                  t.width && (s.style.width = t.width), a.appendChild(s);
                }
                return a;
              }
              renderTableRow(l) {
                let a = this.createElement('tr');
                return (
                  (this.currentCellPosition.col = 0),
                  this.renderClass(l, a),
                  this.renderChildren(l, a),
                  this.renderStyleValues(l.cssStyle, a),
                  this.currentCellPosition.row++,
                  a
                );
              }
              renderTableCell(l) {
                let a = this.createElement('td');
                const t = this.currentCellPosition.col;
                return (
                  l.verticalMerge
                    ? l.verticalMerge == 'restart'
                      ? ((this.currentVerticalMerge[t] = a), (a.rowSpan = 1))
                      : this.currentVerticalMerge[t] &&
                        ((this.currentVerticalMerge[t].rowSpan += 1), (a.style.display = 'none'))
                    : (this.currentVerticalMerge[t] = null),
                  this.renderClass(l, a),
                  this.renderChildren(l, a),
                  this.renderStyleValues(l.cssStyle, a),
                  l.span && (a.colSpan = l.span),
                  (this.currentCellPosition.col += a.colSpan),
                  a
                );
              }
              renderVmlPicture(l) {
                var a = m('div');
                return this.renderChildren(l, a), a;
              }
              renderVmlElement(l) {
                var a,
                  t,
                  s = c('svg');
                s.setAttribute('style', l.cssStyleText);
                const p = c(l.tagName);
                return (
                  Object.entries(l.attrs).forEach(([w, D]) => p.setAttribute(w, D)),
                  !((a = l.imageHref) === null || a === void 0) &&
                    a.id &&
                    ((t = this.document) === null ||
                      t === void 0 ||
                      t
                        .loadDocumentImage(l.imageHref.id, this.currentPart)
                        .then((w) => p.setAttribute('href', w))),
                  s.appendChild(p),
                  setTimeout(() => {
                    const w = s.firstElementChild.getBBox();
                    s.setAttribute('width', `${Math.ceil(w.x + w.width)}`),
                      s.setAttribute('height', `${Math.ceil(w.y + w.height)}`);
                  }, 0),
                  s
                );
              }
              renderMmlRadical(l) {
                var a;
                const t = l.children.find((p) => p.type == i.DomType.MmlBase);
                if (!((a = l.props) === null || a === void 0) && a.hideDegree)
                  return h(o, 'msqrt', null, this.renderElements([t]));
                const s = l.children.find((p) => p.type == i.DomType.MmlDegree);
                return h(o, 'mroot', null, this.renderElements([t, s]));
              }
              renderMmlDelimiter(l) {
                var a, t;
                const s = [];
                return (
                  s.push(
                    h(o, 'mo', null, [(a = l.props.beginChar) !== null && a !== void 0 ? a : '(']),
                  ),
                  s.push(...this.renderElements(l.children)),
                  s.push(
                    h(o, 'mo', null, [(t = l.props.endChar) !== null && t !== void 0 ? t : ')']),
                  ),
                  h(o, 'mrow', null, s)
                );
              }
              renderMmlNary(l) {
                var a;
                const t = [],
                  s = (0, b.keyBy)(l.children, (A) => A.type),
                  p = s[i.DomType.MmlSuperArgument],
                  w = s[i.DomType.MmlSubArgument],
                  D = p ? h(o, 'mo', null, (0, b.asArray)(this.renderElement(p))) : null,
                  k = w ? h(o, 'mo', null, (0, b.asArray)(this.renderElement(w))) : null;
                if (!((a = l.props) === null || a === void 0) && a.char) {
                  const A = h(o, 'mo', null, [l.props.char]);
                  D || k
                    ? t.push(h(o, 'munderover', null, [A, k, D]))
                    : D
                    ? t.push(h(o, 'mover', null, [A, D]))
                    : k
                    ? t.push(h(o, 'munder', null, [A, k]))
                    : t.push(A);
                }
                return (
                  t.push(...this.renderElements(s[i.DomType.MmlBase].children)),
                  h(o, 'mrow', null, t)
                );
              }
              renderMmlRun(l) {
                const a = h(o, 'ms');
                return (
                  this.renderClass(l, a),
                  this.renderStyleValues(l.cssStyle, a),
                  this.renderChildren(l, a),
                  a
                );
              }
              renderStyleValues(l, a) {
                Object.assign(a.style, l);
              }
              renderClass(l, a) {
                l.className && (a.className = l.className),
                  l.styleName && a.classList.add(this.processStyleName(l.styleName));
              }
              findStyle(l) {
                var a;
                return l && ((a = this.styleMap) === null || a === void 0 ? void 0 : a[l]);
              }
              numberingClass(l, a) {
                return `${this.className}-num-${l}-${a}`;
              }
              tabStopClass() {
                return `${this.className}-tab-stop`;
              }
              styleToString(l, a, t = null) {
                let s = `${l} {\r
`;
                for (const p in a)
                  s += `  ${p}: ${a[p]};\r
`;
                return (
                  t && (s += t),
                  s +
                    `}\r
`
                );
              }
              numberingCounter(l, a) {
                return `${this.className}-num-${l}-${a}`;
              }
              levelTextToContent(l, a, t, s) {
                var p;
                return `"${l.replace(/%\d*/g, (w) => {
                  let D = parseInt(w.substring(1), 10) - 1;
                  return `"counter(${this.numberingCounter(t, D)}, ${s})"`;
                })}${(p = { tab: '\\9', space: '\\a0' }[a]) !== null && p !== void 0 ? p : ''}"`;
              }
              numFormatToCssValue(l) {
                return (
                  {
                    none: 'none',
                    bullet: 'disc',
                    decimal: 'decimal',
                    lowerLetter: 'lower-alpha',
                    upperLetter: 'upper-alpha',
                    lowerRoman: 'lower-roman',
                    upperRoman: 'upper-roman',
                  }[l] || l
                );
              }
              refreshTabStops() {
                this.options.experimental &&
                  (clearTimeout(this.tabsTimeout),
                  (this.tabsTimeout = setTimeout(() => {
                    const l = (0, g.computePixelToPoint)();
                    for (let a of this.currentTabs)
                      (0, g.updateTabStop)(a.span, a.stops, this.defaultTabSize, l);
                  }, 500)));
              }
            };
          },
          630: (y, e) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.updateTabStop = e.computePixelToPoint = void 0);
            const n = { pos: 0, leader: 'none', style: 'left' };
            function i(b) {
              return parseFloat(b);
            }
            (e.computePixelToPoint = function (b = document.body) {
              const g = document.createElement('div');
              (g.style.width = '100pt'), b.appendChild(g);
              const r = 100 / g.offsetWidth;
              return b.removeChild(g), r;
            }),
              (e.updateTabStop = function (b, g, r, o = 0.75) {
                const m = b.closest('p'),
                  c = b.getBoundingClientRect(),
                  h = m.getBoundingClientRect(),
                  d = getComputedStyle(m),
                  v =
                    (g == null ? void 0 : g.length) > 0
                      ? g
                          .map((k) => ({ pos: i(k.position), leader: k.leader, style: k.style }))
                          .sort((k, A) => k.pos - A.pos)
                      : [n],
                  x = v[v.length - 1],
                  E = h.width * o,
                  l = i(r);
                let a = x.pos + l;
                if (a < E)
                  for (; a < E && v.length < 50; a += l)
                    v.push(Object.assign(Object.assign({}, n), { pos: a }));
                const t = parseFloat(d.marginLeft),
                  s = h.left + t,
                  p = (c.left - s) * o,
                  w = v.find((k) => k.style != 'clear' && k.pos > p);
                if (w == null) return;
                let D = 1;
                if (w.style == 'right' || w.style == 'center') {
                  const k = Array.from(m.querySelectorAll(`.${b.className}`)),
                    A = k.indexOf(b) + 1,
                    u = document.createRange();
                  u.setStart(b, 1), A < k.length ? u.setEndBefore(k[A]) : u.setEndAfter(m);
                  const B = w.style == 'center' ? 0.5 : 1,
                    j = u.getBoundingClientRect(),
                    M = j.left + B * j.width - (h.left - t);
                  D = w.pos - M * o;
                } else D = w.pos - p;
                switch (
                  ((b.innerHTML = '&nbsp;'),
                  (b.style.textDecoration = 'inherit'),
                  (b.style.wordSpacing = `${D.toFixed(0)}pt`),
                  w.leader)
                ) {
                  case 'dot':
                  case 'middleDot':
                    (b.style.textDecoration = 'underline'),
                      (b.style.textDecorationStyle = 'dotted');
                    break;
                  case 'hyphen':
                  case 'heavy':
                  case 'underscore':
                    b.style.textDecoration = 'underline';
                }
              });
          },
          881: (y, e, n) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.WmlEndnote = e.WmlFootnote = e.WmlBaseNote = void 0);
            const i = n(120);
            class b {
              constructor() {
                (this.children = []), (this.cssStyle = {});
              }
            }
            (e.WmlBaseNote = b),
              (e.WmlFootnote = class extends b {
                constructor() {
                  super(...arguments), (this.type = i.DomType.Footnote);
                }
              }),
              (e.WmlEndnote = class extends b {
                constructor() {
                  super(...arguments), (this.type = i.DomType.Endnote);
                }
              });
          },
          735: (y, e, n) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.EndnotesPart = e.FootnotesPart = e.BaseNotePart = void 0);
            const i = n(530),
              b = n(881);
            class g extends i.Part {
              constructor(o, m, c) {
                super(o, m), (this._documentParser = c);
              }
            }
            (e.BaseNotePart = g),
              (e.FootnotesPart = class extends g {
                constructor(r, o, m) {
                  super(r, o, m);
                }
                parseXml(r) {
                  this.notes = this._documentParser.parseNotes(r, 'footnote', b.WmlFootnote);
                }
              }),
              (e.EndnotesPart = class extends g {
                constructor(r, o, m) {
                  super(r, o, m);
                }
                parseXml(r) {
                  this.notes = this._documentParser.parseNotes(r, 'endnote', b.WmlEndnote);
                }
              });
          },
          527: (y, e, n) => {
            Object.defineProperty(e, '__esModule', { value: !0 }), (e.NumberingPart = void 0);
            const i = n(530),
              b = n(682);
            class g extends i.Part {
              constructor(o, m, c) {
                super(o, m), (this._documentParser = c);
              }
              parseXml(o) {
                Object.assign(this, (0, b.parseNumberingPart)(o, this._package.xmlParser)),
                  (this.domNumberings = this._documentParser.parseNumberingFile(o));
              }
            }
            e.NumberingPart = g;
          },
          682: (y, e, n) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.parseNumberingBulletPicture =
                e.parseNumberingLevelOverrride =
                e.parseNumberingLevel =
                e.parseAbstractNumbering =
                e.parseNumbering =
                e.parseNumberingPart =
                  void 0);
            const i = n(109),
              b = n(488);
            function g(h, d) {
              let v = { id: d.attr(h, 'numId'), overrides: [] };
              for (let x of d.elements(h))
                switch (x.localName) {
                  case 'abstractNumId':
                    v.abstractId = d.attr(x, 'val');
                    break;
                  case 'lvlOverride':
                    v.overrides.push(m(x, d));
                }
              return v;
            }
            function r(h, d) {
              let v = { id: d.attr(h, 'abstractNumId'), levels: [] };
              for (let x of d.elements(h))
                switch (x.localName) {
                  case 'name':
                    v.name = d.attr(x, 'val');
                    break;
                  case 'multiLevelType':
                    v.multiLevelType = d.attr(x, 'val');
                    break;
                  case 'numStyleLink':
                    v.numberingStyleLink = d.attr(x, 'val');
                    break;
                  case 'styleLink':
                    v.styleLink = d.attr(x, 'val');
                    break;
                  case 'lvl':
                    v.levels.push(o(x, d));
                }
              return v;
            }
            function o(h, d) {
              let v = { level: d.intAttr(h, 'ilvl') };
              for (let x of d.elements(h))
                switch (x.localName) {
                  case 'start':
                    v.start = d.attr(x, 'val');
                    break;
                  case 'lvlRestart':
                    v.restart = d.intAttr(x, 'val');
                    break;
                  case 'numFmt':
                    v.format = d.attr(x, 'val');
                    break;
                  case 'lvlText':
                    v.text = d.attr(x, 'val');
                    break;
                  case 'lvlJc':
                    v.justification = d.attr(x, 'val');
                    break;
                  case 'lvlPicBulletId':
                    v.bulletPictureId = d.attr(x, 'val');
                    break;
                  case 'pStyle':
                    v.paragraphStyle = d.attr(x, 'val');
                    break;
                  case 'pPr':
                    v.paragraphProps = (0, i.parseParagraphProperties)(x, d);
                    break;
                  case 'rPr':
                    v.runProps = (0, b.parseRunProperties)(x, d);
                }
              return v;
            }
            function m(h, d) {
              let v = { level: d.intAttr(h, 'ilvl') };
              for (let x of d.elements(h))
                switch (x.localName) {
                  case 'startOverride':
                    v.start = d.intAttr(x, 'val');
                    break;
                  case 'lvl':
                    v.numberingLevel = o(x, d);
                }
              return v;
            }
            function c(h, d) {
              var v = d.element(h, 'pict'),
                x = v && d.element(v, 'shape'),
                E = x && d.element(x, 'imagedata');
              return E
                ? {
                    id: d.attr(h, 'numPicBulletId'),
                    referenceId: d.attr(E, 'id'),
                    style: d.attr(x, 'style'),
                  }
                : null;
            }
            (e.parseNumberingPart = function (h, d) {
              let v = { numberings: [], abstractNumberings: [], bulletPictures: [] };
              for (let x of d.elements(h))
                switch (x.localName) {
                  case 'num':
                    v.numberings.push(g(x, d));
                    break;
                  case 'abstractNum':
                    v.abstractNumberings.push(r(x, d));
                    break;
                  case 'numPicBullet':
                    v.bulletPictures.push(c(x, d));
                }
              return v;
            }),
              (e.parseNumbering = g),
              (e.parseAbstractNumbering = r),
              (e.parseNumberingLevel = o),
              (e.parseNumberingLevelOverrride = m),
              (e.parseNumberingBulletPicture = c);
          },
          472: (y, e, n) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.XmlParser = e.serializeXmlString = e.parseXmlString = void 0);
            const i = n(149);
            (e.parseXmlString = function (r, o = !1) {
              o && (r = r.replace(/<[?].*[?]>/, ''));
              const m = new DOMParser().parseFromString(r, 'application/xml'),
                c =
                  (h = m.getElementsByTagName('parsererror')[0]) === null || h === void 0
                    ? void 0
                    : h.textContent;
              var h;
              if (c) throw new Error(c);
              return m;
            }),
              (e.serializeXmlString = function (r) {
                return new XMLSerializer().serializeToString(r);
              });
            class b {
              elements(o, m = null) {
                const c = [];
                for (let h = 0, d = o.childNodes.length; h < d; h++) {
                  let v = o.childNodes.item(h);
                  v.nodeType != 1 || (m != null && v.localName != m) || c.push(v);
                }
                return c;
              }
              element(o, m) {
                for (let c = 0, h = o.childNodes.length; c < h; c++) {
                  let d = o.childNodes.item(c);
                  if (d.nodeType == 1 && d.localName == m) return d;
                }
                return null;
              }
              elementAttr(o, m, c) {
                var h = this.element(o, m);
                return h ? this.attr(h, c) : void 0;
              }
              attrs(o) {
                return Array.from(o.attributes);
              }
              attr(o, m) {
                for (let c = 0, h = o.attributes.length; c < h; c++) {
                  let d = o.attributes.item(c);
                  if (d.localName == m) return d.value;
                }
                return null;
              }
              intAttr(o, m, c = null) {
                var h = this.attr(o, m);
                return h ? parseInt(h) : c;
              }
              hexAttr(o, m, c = null) {
                var h = this.attr(o, m);
                return h ? parseInt(h, 16) : c;
              }
              floatAttr(o, m, c = null) {
                var h = this.attr(o, m);
                return h ? parseFloat(h) : c;
              }
              boolAttr(o, m, c = null) {
                return (0, i.convertBoolean)(this.attr(o, m), c);
              }
              lengthAttr(o, m, c = i.LengthUsage.Dxa) {
                return (0, i.convertLength)(this.attr(o, m), c);
              }
            }
            e.XmlParser = b;
            const g = new b();
            e.default = g;
          },
          287: (y, e, n) => {
            Object.defineProperty(e, '__esModule', { value: !0 }), (e.SettingsPart = void 0);
            const i = n(530),
              b = n(846);
            class g extends i.Part {
              constructor(o, m) {
                super(o, m);
              }
              parseXml(o) {
                this.settings = (0, b.parseSettings)(o, this._package.xmlParser);
              }
            }
            e.SettingsPart = g;
          },
          846: (y, e) => {
            function n(i, b) {
              var g = { defaultNoteIds: [] };
              for (let r of b.elements(i))
                switch (r.localName) {
                  case 'numFmt':
                    g.nummeringFormat = b.attr(r, 'val');
                    break;
                  case 'footnote':
                  case 'endnote':
                    g.defaultNoteIds.push(b.attr(r, 'id'));
                }
              return g;
            }
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.parseNoteProperties = e.parseSettings = void 0),
              (e.parseSettings = function (i, b) {
                var g = {};
                for (let r of b.elements(i))
                  switch (r.localName) {
                    case 'defaultTabStop':
                      g.defaultTabStop = b.lengthAttr(r, 'val');
                      break;
                    case 'footnotePr':
                      g.footnoteProps = n(r, b);
                      break;
                    case 'endnotePr':
                      g.endnoteProps = n(r, b);
                      break;
                    case 'autoHyphenation':
                      g.autoHyphenation = b.boolAttr(r, 'val');
                  }
                return g;
              }),
              (e.parseNoteProperties = n);
          },
          240: (y, e, n) => {
            Object.defineProperty(e, '__esModule', { value: !0 }), (e.StylesPart = void 0);
            const i = n(530);
            class b extends i.Part {
              constructor(r, o, m) {
                super(r, o), (this._documentParser = m);
              }
              parseXml(r) {
                this.styles = this._documentParser.parseStylesFile(r);
              }
            }
            e.StylesPart = b;
          },
          893: (y, e, n) => {
            Object.defineProperty(e, '__esModule', { value: !0 }), (e.ThemePart = void 0);
            const i = n(530),
              b = n(55);
            class g extends i.Part {
              constructor(o, m) {
                super(o, m);
              }
              parseXml(o) {
                this.theme = (0, b.parseTheme)(o, this._package.xmlParser);
              }
            }
            e.ThemePart = g;
          },
          55: (y, e) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.parseFontInfo =
                e.parseFontScheme =
                e.parseColorScheme =
                e.parseTheme =
                e.DmlTheme =
                  void 0);
            class n {}
            function i(r, o) {
              var m = { name: o.attr(r, 'name'), colors: {} };
              for (let d of o.elements(r)) {
                var c = o.element(d, 'srgbClr'),
                  h = o.element(d, 'sysClr');
                c
                  ? (m.colors[d.localName] = o.attr(c, 'val'))
                  : h && (m.colors[d.localName] = o.attr(h, 'lastClr'));
              }
              return m;
            }
            function b(r, o) {
              var m = { name: o.attr(r, 'name') };
              for (let c of o.elements(r))
                switch (c.localName) {
                  case 'majorFont':
                    m.majorFont = g(c, o);
                    break;
                  case 'minorFont':
                    m.minorFont = g(c, o);
                }
              return m;
            }
            function g(r, o) {
              return {
                latinTypeface: o.elementAttr(r, 'latin', 'typeface'),
                eaTypeface: o.elementAttr(r, 'ea', 'typeface'),
                csTypeface: o.elementAttr(r, 'cs', 'typeface'),
              };
            }
            (e.DmlTheme = n),
              (e.parseTheme = function (r, o) {
                var m = new n(),
                  c = o.element(r, 'themeElements');
                for (let h of o.elements(c))
                  switch (h.localName) {
                    case 'clrScheme':
                      m.colorScheme = i(h, o);
                      break;
                    case 'fontScheme':
                      m.fontScheme = b(h, o);
                  }
                return m;
              }),
              (e.parseColorScheme = i),
              (e.parseFontScheme = b),
              (e.parseFontInfo = g);
          },
          593: (y, e) => {
            function n(i) {
              return i && typeof i == 'object' && !Array.isArray(i);
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
              (e.escapeClassName = function (i) {
                return i == null
                  ? void 0
                  : i.replace(/[ .]+/g, '-').replace(/[&]+/g, 'and').toLowerCase();
              }),
              (e.splitPath = function (i) {
                let b = i.lastIndexOf('/') + 1;
                return [b == 0 ? '' : i.substring(0, b), b == 0 ? i : i.substring(b)];
              }),
              (e.resolvePath = function (i, b) {
                try {
                  const g = 'http://docx/';
                  return new URL(i, g + b).toString().substring(g.length);
                } catch (g) {
                  return `${b}${i}`;
                }
              }),
              (e.keyBy = function (i, b) {
                return i.reduce((g, r) => ((g[b(r)] = r), g), {});
              }),
              (e.blobToBase64 = function (i) {
                return new Promise((b, g) => {
                  const r = new FileReader();
                  (r.onloadend = () => b(r.result)), r.readAsDataURL(i);
                });
              }),
              (e.isObject = n),
              (e.isString = function (i) {
                return (i && typeof i == 'string') || i instanceof String;
              }),
              (e.mergeDeep = function i(b, ...g) {
                var r;
                if (!g.length) return b;
                const o = g.shift();
                if (n(b) && n(o))
                  for (const m in o)
                    n(o[m])
                      ? i((r = b[m]) !== null && r !== void 0 ? r : (b[m] = {}), o[m])
                      : (b[m] = o[m]);
                return i(b, ...g);
              }),
              (e.parseCssRules = function (i) {
                const b = {};
                for (const g of i.split(';')) {
                  const [r, o] = g.split(':');
                  b[r] = o;
                }
                return b;
              }),
              (e.formatCssRules = function (i) {
                return Object.entries(i)
                  .map((b, g) => `${b}: ${g}`)
                  .join(';');
              }),
              (e.asArray = function (i) {
                return Array.isArray(i) ? i : [i];
              });
          },
          320: (y, e, n) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.parseVmlElement = e.VmlElement = void 0);
            const i = n(149),
              b = n(120),
              g = n(472);
            class r {
              constructor() {
                (this.type = b.DomType.VmlElement), (this.attrs = {}), (this.chidren = []);
              }
            }
            function o(c) {
              var h;
              return {
                stroke: g.default.attr(c, 'color'),
                'stroke-width':
                  (h = g.default.lengthAttr(c, 'weight', i.LengthUsage.Emu)) !== null &&
                  h !== void 0
                    ? h
                    : '1px',
              };
            }
            function m(c) {
              return c.split(',');
            }
            (e.VmlElement = r),
              (e.parseVmlElement = function c(h) {
                var d = new r();
                switch (h.localName) {
                  case 'rect':
                    (d.tagName = 'rect'), Object.assign(d.attrs, { width: '100%', height: '100%' });
                    break;
                  case 'oval':
                    (d.tagName = 'ellipse'),
                      Object.assign(d.attrs, { cx: '50%', cy: '50%', rx: '50%', ry: '50%' });
                    break;
                  case 'line':
                    d.tagName = 'line';
                    break;
                  case 'shape':
                    d.tagName = 'g';
                    break;
                  default:
                    return null;
                }
                for (const v of g.default.attrs(h))
                  switch (v.localName) {
                    case 'style':
                      d.cssStyleText = v.value;
                      break;
                    case 'fillcolor':
                      d.attrs.fill = v.value;
                      break;
                    case 'from':
                      const [x, E] = m(v.value);
                      Object.assign(d.attrs, { x1: x, y1: E });
                      break;
                    case 'to':
                      const [l, a] = m(v.value);
                      Object.assign(d.attrs, { x2: l, y2: a });
                  }
                for (const v of g.default.elements(h))
                  switch (v.localName) {
                    case 'stroke':
                      Object.assign(d.attrs, o(v));
                      break;
                    case 'fill':
                      Object.assign(d.attrs, {});
                      break;
                    case 'imagedata':
                      (d.tagName = 'image'),
                        Object.assign(d.attrs, { width: '100%', height: '100%' }),
                        (d.imageHref = {
                          id: g.default.attr(v, 'id'),
                          title: g.default.attr(v, 'title'),
                        });
                      break;
                    default:
                      const x = c(v);
                      x && d.chidren.push(x);
                  }
                return d;
              });
          },
          213: (y, e, n) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.deobfuscate = e.WordDocument = void 0);
            const i = n(461),
              b = n(380),
              g = n(522),
              r = n(448),
              o = n(593),
              m = n(527),
              c = n(240),
              h = n(985),
              d = n(665),
              v = n(162),
              x = n(893),
              E = n(735),
              l = n(287),
              a = n(177),
              t = [
                { type: i.RelationshipTypes.OfficeDocument, target: 'word/document.xml' },
                { type: i.RelationshipTypes.ExtendedProperties, target: 'docProps/app.xml' },
                { type: i.RelationshipTypes.CoreProperties, target: 'docProps/core.xml' },
                { type: i.RelationshipTypes.CustomProperties, target: 'docProps/custom.xml' },
              ];
            class s {
              constructor() {
                (this.parts = []), (this.partsMap = {});
              }
              static load(D, k, A) {
                var u = new s();
                return (
                  (u._options = A),
                  (u._parser = k),
                  g.OpenXmlPackage.load(D, A)
                    .then((B) => ((u._package = B), u._package.loadRelationships()))
                    .then((B) => {
                      u.rels = B;
                      const j = t.map((M) => {
                        var Y;
                        const $ =
                          (Y = B.find((Q) => Q.type === M.type)) !== null && Y !== void 0 ? Y : M;
                        return u.loadRelationshipPart($.target, $.type);
                      });
                      return Promise.all(j);
                    })
                    .then(() => u)
                );
              }
              save(D = 'blob') {
                return this._package.save(D);
              }
              loadRelationshipPart(D, k) {
                if (this.partsMap[D]) return Promise.resolve(this.partsMap[D]);
                if (!this._package.get(D)) return Promise.resolve(null);
                let A = null;
                switch (k) {
                  case i.RelationshipTypes.OfficeDocument:
                    this.documentPart = A = new r.DocumentPart(this._package, D, this._parser);
                    break;
                  case i.RelationshipTypes.FontTable:
                    this.fontTablePart = A = new b.FontTablePart(this._package, D);
                    break;
                  case i.RelationshipTypes.Numbering:
                    this.numberingPart = A = new m.NumberingPart(this._package, D, this._parser);
                    break;
                  case i.RelationshipTypes.Styles:
                    this.stylesPart = A = new c.StylesPart(this._package, D, this._parser);
                    break;
                  case i.RelationshipTypes.Theme:
                    this.themePart = A = new x.ThemePart(this._package, D);
                    break;
                  case i.RelationshipTypes.Footnotes:
                    this.footnotesPart = A = new E.FootnotesPart(this._package, D, this._parser);
                    break;
                  case i.RelationshipTypes.Endnotes:
                    this.endnotesPart = A = new E.EndnotesPart(this._package, D, this._parser);
                    break;
                  case i.RelationshipTypes.Footer:
                    A = new h.FooterPart(this._package, D, this._parser);
                    break;
                  case i.RelationshipTypes.Header:
                    A = new h.HeaderPart(this._package, D, this._parser);
                    break;
                  case i.RelationshipTypes.CoreProperties:
                    this.corePropsPart = A = new v.CorePropsPart(this._package, D);
                    break;
                  case i.RelationshipTypes.ExtendedProperties:
                    this.extendedPropsPart = A = new d.ExtendedPropsPart(this._package, D);
                    break;
                  case i.RelationshipTypes.CustomProperties:
                    A = new a.CustomPropsPart(this._package, D);
                    break;
                  case i.RelationshipTypes.Settings:
                    this.settingsPart = A = new l.SettingsPart(this._package, D);
                }
                return A == null
                  ? Promise.resolve(null)
                  : ((this.partsMap[D] = A),
                    this.parts.push(A),
                    A.load().then(() => {
                      if (A.rels == null || A.rels.length == 0) return A;
                      const [u] = (0, o.splitPath)(A.path),
                        B = A.rels.map((j) =>
                          this.loadRelationshipPart((0, o.resolvePath)(j.target, u), j.type),
                        );
                      return Promise.all(B).then(() => A);
                    }));
              }
              loadDocumentImage(D, k) {
                return this.loadResource(k != null ? k : this.documentPart, D, 'blob').then((A) =>
                  this.blobToURL(A),
                );
              }
              loadNumberingImage(D) {
                return this.loadResource(this.numberingPart, D, 'blob').then((k) =>
                  this.blobToURL(k),
                );
              }
              loadFont(D, k) {
                return this.loadResource(this.fontTablePart, D, 'uint8array').then(
                  (A) => A && this.blobToURL(new Blob([p(A, k)])),
                );
              }
              blobToURL(D) {
                return D
                  ? this._options.useBase64URL
                    ? (0, o.blobToBase64)(D)
                    : URL.createObjectURL(D)
                  : null;
              }
              findPartByRelId(D, k = null) {
                var A,
                  u = ((A = k.rels) !== null && A !== void 0 ? A : this.rels).find(
                    (j) => j.id == D,
                  );
                const B = k ? (0, o.splitPath)(k.path)[0] : '';
                return u ? this.partsMap[(0, o.resolvePath)(u.target, B)] : null;
              }
              getPathById(D, k) {
                const A = D.rels.find((B) => B.id == k),
                  [u] = (0, o.splitPath)(D.path);
                return A ? (0, o.resolvePath)(A.target, u) : null;
              }
              loadResource(D, k, A) {
                const u = this.getPathById(D, k);
                return u ? this._package.load(u, A) : Promise.resolve(null);
              }
            }
            function p(w, D) {
              const k = D.replace(/{|}|-/g, ''),
                A = new Array(16);
              for (let u = 0; u < 16; u++) A[16 - u - 1] = parseInt(k.substr(2 * u, 2), 16);
              for (let u = 0; u < 32; u++) w[u] = w[u] ^ A[u % 16];
              return w;
            }
            (e.WordDocument = s), (e.deobfuscate = p);
          },
          583: (y) => {
            y.exports =
              'data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 100%27 preserveAspectRatio=%27none%27%3E%3Cpath d=%27m0,75 l5,0 l5,25 l10,-100%27 stroke=%27black%27 fill=%27none%27 vector-effect=%27non-scaling-stroke%27/%3E%3C/svg%3E';
          },
          626: (y) => {
            y.exports = P;
          },
        },
        T = {};
      function _(y) {
        var e = T[y];
        if (e !== void 0) return e.exports;
        var n = (T[y] = { id: y, exports: {} });
        return R[y](n, n.exports, _), n.exports;
      }
      return (
        (_.m = R),
        (_.n = (y) => {
          var e = y && y.__esModule ? () => y.default : () => y;
          return _.d(e, { a: e }), e;
        }),
        (_.d = (y, e) => {
          for (var n in e)
            _.o(e, n) && !_.o(y, n) && Object.defineProperty(y, n, { enumerable: !0, get: e[n] });
        }),
        (_.o = (y, e) => Object.prototype.hasOwnProperty.call(y, e)),
        (_.r = (y) => {
          typeof Symbol != 'undefined' &&
            Symbol.toStringTag &&
            Object.defineProperty(y, Symbol.toStringTag, { value: 'Module' }),
            Object.defineProperty(y, '__esModule', { value: !0 });
        }),
        (_.b = document.baseURI || self.location.href),
        _(667)
      );
    })(),
  );
})(Ir);
const Lr = xe({
  __name: 'index',
  props: { src: null, requestOption: null },
  setup(Z) {
    const G = Z,
      P = Ze();
    Ke(
      () => G.src,
      () => {
        R();
      },
    ),
      Kt(() => {
        G.src && R();
      });
    const R = () => {
        let _;
        if (Jt(G.src) && typeof G.src == 'string') {
          T(G.src);
          return;
        } else
          G.src instanceof ArrayBuffer
            ? (_ = new Blob([G.src]))
            : G.src instanceof Blob && (_ = G.src);
        P.value && ((P.value.innerHTML = ''), $e.renderAsync(_, P.value));
      },
      T = (_) =>
        Oe(this, null, function* () {
          const y = yield fetch(_, G.requestOption);
          y.status === 200 && P.value && $e.renderAsync(y.blob(), P.value);
        });
    return (_, y) => (
      ce(), _e('div', { ref_key: 'officeDocx', ref: P, class: 'office-docx' }, null, 512)
    );
  },
});
const jr = er(Lr, [['__scopeId', 'data-v-7a6699c8']]),
  Hr = xe({
    __name: 'index',
    setup(Z) {
      const G = Ze('https://supercutexiaosi.top/resource/develop_docx.docx'),
        P = (R) =>
          Oe(this, null, function* () {
            return (G.value = yield zr(R)), !1;
          });
      return (R, T) => {
        const _ = Qt('ElButton');
        return (
          ce(),
          _e('div', null, [
            be(
              q(Nr),
              { limit: 1, accept: '.docx,.doc', 'before-upload': P, action: '' },
              {
                default: ge(() => [
                  be(
                    _,
                    { style: { 'margin-bottom': '12px' } },
                    { default: ge(() => [Yt('点击上传')]), _: 1 },
                  ),
                ]),
                _: 1,
              },
            ),
            be(jr, { src: G.value }, null, 8, ['src']),
          ])
        );
      };
    },
  });
export { Hr as default };
