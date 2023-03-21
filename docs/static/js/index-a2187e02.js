var G = Object.defineProperty,
  U = Object.defineProperties;
var q = Object.getOwnPropertyDescriptors;
var F = Object.getOwnPropertySymbols;
var z = Object.prototype.hasOwnProperty,
  A = Object.prototype.propertyIsEnumerable;
var P = (t, n, l) =>
    n in t ? G(t, n, { enumerable: !0, configurable: !0, writable: !0, value: l }) : (t[n] = l),
  h = (t, n) => {
    for (var l in n || (n = {})) z.call(n, l) && P(t, l, n[l]);
    if (F) for (var l of F(n)) A.call(n, l) && P(t, l, n[l]);
    return t;
  },
  T = (t, n) => U(t, q(n));
var V = (t, n, l) =>
  new Promise((p, u) => {
    var b = (a) => {
        try {
          e(l.next(a));
        } catch (r) {
          u(r);
        }
      },
      o = (a) => {
        try {
          e(l.throw(a));
        } catch (r) {
          u(r);
        }
      },
      e = (a) => (a.done ? p(a.value) : Promise.resolve(a.value).then(b, o));
    e((l = l.apply(t, n)).next());
  });
import { g as H } from './slotsHelper-52a5be6b.js';
import {
  d as k,
  f as i,
  b as m,
  i as J,
  m as E,
  F as S,
  r as D,
  j,
  k as K,
  o as g,
  c as C,
  w as c,
  a as O,
  h as y,
  e as N,
  l as Q,
  n as W,
  p as X,
  q as Y,
  s as Z,
  g as ee,
} from './index-ad4df6b0.js';
import { _ as le } from './plugin-vueexport-helper-c27b6911.js';
const oe = { ElSelect: 'ElOption', ElCheckboxGroup: 'ElCheckbox', ElRadioGroup: 'ElRadio' };
function R(t) {
  return (
    typeof t == 'function' || (Object.prototype.toString.call(t) === '[object Object]' && !J(t))
  );
}
const ae = k({
    props: {
      formItem: { type: Object, default: () => {} },
      formModel: { type: Object, default: () => {} },
    },
    setup(t, { slots: n }) {
      const { formItem: l, formModel: p } = t;
      function u() {
        const o = m(l.component),
          e = oe[l.component];
        if (e) {
          let a;
          return i(
            o,
            E({ modelValue: p[l.prop], 'onUpdate:modelValue': (r) => (p[l.prop] = r) }, l.props),
            R((a = b(e))) ? a : { default: () => [a] },
          );
        } else
          return i(
            o,
            E({ modelValue: p[l.prop], 'onUpdate:modelValue': (a) => (p[l.prop] = a) }, l.props),
            null,
          );
      }
      function b(o) {
        if (l.childrenComponent) {
          const { options: e } = l.childrenComponent,
            a = m(o);
          return i(S, null, [
            e == null
              ? void 0
              : e.map((r) => i(a, E({ label: r.label, value: r.value }, l.props), null)),
          ]);
        } else return;
      }
      return () => {
        let o;
        const { formItem: e } = t,
          { prop: a, render: r, rules: s, label: v } = e,
          f = { formModel: p, formItem: e },
          _ = H(n, a, f),
          x = () => _ || (r ? r(f) : u());
        return i(
          m('el-form-item'),
          { label: v, prop: a, rules: s },
          R((o = x())) ? o : { default: () => [o] },
        );
      };
    },
  }),
  te = k({
    __name: 'index',
    props: {
      formData: { type: Object, default: () => {} },
      formOption: { type: Object, default: () => {} },
      rules: { type: Object, default: () => {} },
    },
    emits: ['submitForm'],
    setup(t, { expose: n, emit: l }) {
      const u = D(t.formData || {}),
        b = j();
      K(() => {});
      function o(r, s) {
        u[r] = s;
      }
      const e = () => {
          b.value.validate((r) => {
            console.log(r);
          }),
            console.log(u),
            l('submitForm', u);
        },
        a = () => {};
      return (
        n({ form: u }),
        (r, s) => {
          const v = m('el-col'),
            f = m('el-row'),
            _ = m('el-button'),
            x = m('el-form-item'),
            w = m('el-form');
          return (
            g(),
            C('div', null, [
              i(
                w,
                {
                  ref_key: 'formRef',
                  ref: b,
                  rules: t.rules,
                  model: u,
                  'label-position': t.formOption.labelPosition,
                  'label-width': '120px',
                },
                {
                  default: c(() => [
                    (g(!0),
                    C(
                      S,
                      null,
                      O(
                        t.formOption.formItem,
                        (d, B) => (
                          g(),
                          N(
                            f,
                            { key: B, gutter: d.gutter || 30 },
                            {
                              default: c(() => [
                                (g(!0),
                                C(
                                  S,
                                  null,
                                  O(
                                    d.itemList,
                                    ($, L) => (
                                      g(),
                                      N(
                                        v,
                                        {
                                          key: L,
                                          xs: d.xs || 24,
                                          sm: d.sm || 24,
                                          md: d.md || 12,
                                          lg: d.lg || 8,
                                          xl: d.xl || 8,
                                        },
                                        {
                                          default: c(() => [
                                            i(
                                              ae,
                                              {
                                                'form-item': $,
                                                'form-model': u,
                                                'set-form-model': o,
                                              },
                                              Q({ _: 2 }, [
                                                O(Object.keys(r.$slots), (I) => ({
                                                  name: I,
                                                  fn: c((M) => [W(r.$slots, I, X(Y(M || {})))]),
                                                })),
                                              ]),
                                              1032,
                                              ['form-item', 'form-model'],
                                            ),
                                          ]),
                                          _: 2,
                                        },
                                        1032,
                                        ['xs', 'sm', 'md', 'lg', 'xl'],
                                      )
                                    ),
                                  ),
                                  128,
                                )),
                              ]),
                              _: 2,
                            },
                            1032,
                            ['gutter'],
                          )
                        ),
                      ),
                      128,
                    )),
                    i(x, null, {
                      default: c(() => [
                        i(
                          _,
                          { type: 'primary', onClick: s[0] || (s[0] = (d) => e()) },
                          { default: c(() => [y('Create')]), _: 1 },
                        ),
                        i(
                          _,
                          { onClick: s[1] || (s[1] = (d) => a()) },
                          { default: c(() => [y('Reset')]), _: 1 },
                        ),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 3,
                },
                8,
                ['rules', 'model', 'label-position'],
              ),
            ])
          );
        }
      );
    },
  }),
  ne = { class: 'page-container' },
  re = { class: 'config' },
  ue = k({ name: 'RtForm' }),
  ie = k(
    T(h({}, ue), {
      setup(t) {
        const n = j({ textarea: 0 }),
          p = D({
            labelPosition: 'right',
            formItem: [
              {
                gutter: 30,
                itemList: [
                  {
                    component: 'ElInput',
                    label: '输入框1号',
                    prop: 'name',
                    rules: [{ required: !0, type: 'string' }],
                    props: {
                      onChange: (o) => {
                        console.log(o);
                      },
                    },
                  },
                  {
                    component: 'ElDatePicker',
                    label: '时间选择器',
                    prop: 'dateTime',
                    props: {
                      type: 'datetimerange',
                      rangeSeparator: 'To',
                      startPlaceholder: 'Start date',
                      endPlaceholder: 'End date',
                    },
                  },
                  {
                    component: 'ElCascader',
                    label: '多级选择器',
                    props: {
                      options: [
                        {
                          value: 'guide',
                          label: 'Guide',
                          children: [
                            {
                              value: 'disciplines',
                              label: 'Disciplines',
                              children: [
                                { value: 'consistency', label: 'Consistency' },
                                { value: 'feedback', label: 'Feedback' },
                                { value: 'efficiency', label: 'Efficiency' },
                                { value: 'controllability', label: 'Controllability' },
                              ],
                            },
                            {
                              value: 'navigation',
                              label: 'Navigation',
                              children: [
                                { value: 'side nav', label: 'Side Navigation' },
                                { value: 'top nav', label: 'Top Navigation' },
                              ],
                            },
                          ],
                        },
                        {
                          value: 'component',
                          label: 'Component',
                          children: [
                            {
                              value: 'basic',
                              label: 'Basic',
                              children: [
                                { value: 'layout', label: 'Layout' },
                                { value: 'color', label: 'Color' },
                                { value: 'typography', label: 'Typography' },
                                { value: 'icon', label: 'Icon' },
                                { value: 'button', label: 'Button' },
                              ],
                            },
                            {
                              value: 'form',
                              label: 'Form',
                              children: [
                                { value: 'radio', label: 'Radio' },
                                { value: 'checkbox', label: 'Checkbox' },
                                { value: 'input', label: 'Input' },
                                { value: 'input-number', label: 'InputNumber' },
                                { value: 'select', label: 'Select' },
                                { value: 'cascader', label: 'Cascader' },
                                { value: 'switch', label: 'Switch' },
                                { value: 'slider', label: 'Slider' },
                                { value: 'time-picker', label: 'TimePicker' },
                                { value: 'date-picker', label: 'DatePicker' },
                                { value: 'datetime-picker', label: 'DateTimePicker' },
                                { value: 'upload', label: 'Upload' },
                                { value: 'rate', label: 'Rate' },
                                { value: 'form', label: 'Form' },
                              ],
                            },
                            {
                              value: 'data',
                              label: 'Data',
                              children: [
                                { value: 'table', label: 'Table' },
                                { value: 'tag', label: 'Tag' },
                                { value: 'progress', label: 'Progress' },
                                { value: 'tree', label: 'Tree' },
                                { value: 'pagination', label: 'Pagination' },
                                { value: 'badge', label: 'Badge' },
                              ],
                            },
                            {
                              value: 'notice',
                              label: 'Notice',
                              children: [
                                { value: 'alert', label: 'Alert' },
                                { value: 'loading', label: 'Loading' },
                                { value: 'message', label: 'Message' },
                                { value: 'message-box', label: 'MessageBox' },
                                { value: 'notification', label: 'Notification' },
                              ],
                            },
                            {
                              value: 'navigation',
                              label: 'Navigation',
                              children: [
                                { value: 'menu', label: 'Menu' },
                                { value: 'tabs', label: 'Tabs' },
                                { value: 'breadcrumb', label: 'Breadcrumb' },
                                { value: 'dropdown', label: 'Dropdown' },
                                { value: 'steps', label: 'Steps' },
                              ],
                            },
                            {
                              value: 'others',
                              label: 'Others',
                              children: [
                                { value: 'dialog', label: 'Dialog' },
                                { value: 'tooltip', label: 'Tooltip' },
                                { value: 'popover', label: 'Popover' },
                                { value: 'card', label: 'Card' },
                                { value: 'carousel', label: 'Carousel' },
                                { value: 'collapse', label: 'Collapse' },
                              ],
                            },
                          ],
                        },
                        {
                          value: 'resource',
                          label: 'Resource',
                          children: [
                            { value: 'axure', label: 'Axure Components' },
                            { value: 'sketch', label: 'Sketch Templates' },
                            { value: 'docs', label: 'Design Documentation' },
                          ],
                        },
                      ],
                      onVisibleChange: (o) => {
                        console.log(o);
                      },
                    },
                    prop: 'cascader',
                  },
                ],
              },
              {
                gutter: 30,
                itemList: [
                  {
                    component: 'ElSelect',
                    label: '晚上吃什么',
                    prop: 'select',
                    childrenComponent: {
                      options: [
                        { label: '吃吃吃就知道吃', value: '吃吃吃就知道吃' },
                        { label: '饿着吧！饿死算了', value: '饿着吧！饿死算了' },
                      ],
                    },
                  },
                  {
                    component: 'ElCheckboxGroup',
                    label: '晚上吃什么',
                    prop: 'checkbox',
                    childrenComponent: {
                      options: [
                        { label: '选项1', value: '' },
                        { label: '选项2', value: '' },
                        { label: '选项3', value: '' },
                        { label: '选项4', value: '' },
                      ],
                    },
                  },
                  {
                    component: 'ElRadioGroup',
                    label: '晚上吃什么',
                    prop: 'radio',
                    childrenComponent: {
                      options: [
                        { label: '吃吃吃就知道吃', value: '吃吃吃就知道吃' },
                        { label: '饿着吧！饿死算了', value: '饿着吧！饿死算了' },
                      ],
                    },
                  },
                ],
              },
              {
                gutter: 30,
                itemList: [
                  {
                    component: 'ElInput',
                    label: 'slot组件',
                    prop: 'slotInput',
                    rules: [{ required: !0, type: 'string' }],
                  },
                  {
                    component: '',
                    label: 'render组件',
                    prop: 'renderInput',
                    render: ({ formModel: o, formItem: e }) =>
                      Z('input', {
                        placeholder: '请输入',
                        value: o[e.prop],
                        onChange: (a) => {
                          o[e.prop] = a.target.value;
                        },
                      }),
                  },
                ],
              },
            ],
          }),
          u = (o) =>
            V(this, null, function* () {
              o == 'vertical'
                ? p.formItem.map((e) => ((e.md = 24), (e.lg = 24), (e.xl = 24), e))
                : o == 'horizontal' &&
                  p.formItem.map((e) => (delete e.md, delete e.lg, delete e.xl, e));
            });
        u('vertical');
        const b = (o) => {
          n.value = h(h({}, o), n.value);
        };
        return (o, e) => {
          const a = m('el-button'),
            r = m('el-input');
          return (
            g(),
            C('div', ne, [
              ee('div', re, [
                i(
                  a,
                  { onClick: e[0] || (e[0] = (s) => u('vertical')) },
                  { default: c(() => [y('垂直')]), _: 1 },
                ),
                i(
                  a,
                  { onClick: e[1] || (e[1] = (s) => u('horizontal')) },
                  { default: c(() => [y('水平')]), _: 1 },
                ),
              ]),
              i(
                te,
                { ref: 'formRef', 'form-option': p, onSubmitForm: b },
                {
                  slotInput: c(({ formModel: s, formItem: v }) => [
                    i(
                      r,
                      {
                        modelValue: s[v.prop],
                        'onUpdate:modelValue': (f) => (s[v.prop] = f),
                        type: v.inputType,
                        placeholder: '自定义输入框',
                      },
                      null,
                      8,
                      ['modelValue', 'onUpdate:modelValue', 'type'],
                    ),
                  ]),
                  _: 1,
                },
                8,
                ['form-option'],
              ),
            ])
          );
        };
      },
    }),
  );
const de = le(ie, [['__scopeId', 'data-v-312ecbc6']]);
export { de as default };
