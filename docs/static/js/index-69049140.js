var M = Object.defineProperty;
var F = Object.getOwnPropertySymbols;
var G = Object.prototype.hasOwnProperty,
  U = Object.prototype.propertyIsEnumerable;
var P = (t, r, l) =>
    r in t ? M(t, r, { enumerable: !0, configurable: !0, writable: !0, value: l }) : (t[r] = l),
  x = (t, r) => {
    for (var l in r || (r = {})) G.call(r, l) && P(t, l, r[l]);
    if (F) for (var l of F(r)) U.call(r, l) && P(t, l, r[l]);
    return t;
  };
var T = (t, r, l) =>
  new Promise((p, u) => {
    var b = (a) => {
        try {
          e(l.next(a));
        } catch (n) {
          u(n);
        }
      },
      o = (a) => {
        try {
          e(l.throw(a));
        } catch (n) {
          u(n);
        }
      },
      e = (a) => (a.done ? p(a.value) : Promise.resolve(a.value).then(b, o));
    e((l = l.apply(t, r)).next());
  });
import { g as q } from './slotsHelper-d9161ce2.js';
import {
  d as S,
  f as i,
  a as m,
  i as z,
  m as k,
  F as O,
  r as R,
  j as D,
  k as A,
  o as g,
  c as h,
  w as c,
  b as E,
  e as V,
  l as H,
  n as J,
  p as K,
  q as Q,
  h as C,
  g as W,
  s as X,
} from './index-4053894a.js';
import { _ as Y } from './plugin-vueexport-helper-c27b6911.js';
const Z = { ElSelect: 'ElOption', ElCheckboxGroup: 'ElCheckbox', ElRadioGroup: 'ElRadio' };
function N(t) {
  return (
    typeof t == 'function' || (Object.prototype.toString.call(t) === '[object Object]' && !z(t))
  );
}
const ee = S({
    props: {
      formItem: { type: Object, default: () => {} },
      formModel: { type: Object, default: () => {} },
    },
    setup(t, { slots: r }) {
      const { formItem: l, formModel: p } = t;
      function u() {
        const o = m(l.component),
          e = Z[l.component];
        if (e) {
          let a;
          return i(
            o,
            k({ modelValue: p[l.prop], 'onUpdate:modelValue': (n) => (p[l.prop] = n) }, l.props),
            N((a = b(e))) ? a : { default: () => [a] },
          );
        } else
          return i(
            o,
            k({ modelValue: p[l.prop], 'onUpdate:modelValue': (a) => (p[l.prop] = a) }, l.props),
            null,
          );
      }
      function b(o) {
        if (l.childrenComponent) {
          const { options: e } = l.childrenComponent,
            a = m(o);
          return i(O, null, [
            e == null
              ? void 0
              : e.map((n) => i(a, k({ label: n.label, value: n.value }, l.props), null)),
          ]);
        } else return;
      }
      return () => {
        let o;
        const { formItem: e } = t,
          { prop: a, render: n, rules: s, label: v } = e,
          f = { formModel: p, formItem: e },
          _ = q(r, a, f),
          y = () => _ || (n ? n(f) : u());
        return i(
          m('el-form-item'),
          { label: v, prop: a, rules: s },
          N((o = y())) ? o : { default: () => [o] },
        );
      };
    },
  }),
  le = S({
    __name: 'index',
    props: {
      formData: { type: Object, default: () => {} },
      formOption: { type: Object, default: () => {} },
      rules: { type: Object, default: () => {} },
    },
    emits: ['submitForm'],
    setup(t, { expose: r, emit: l }) {
      const u = R(t.formData || {}),
        b = D();
      A(() => {});
      function o(n, s) {
        u[n] = s;
      }
      const e = () => {
          b.value.validate((n) => {
            console.log(n);
          }),
            console.log(u),
            l('submitForm', u);
        },
        a = () => {};
      return (
        r({ form: u }),
        (n, s) => {
          const v = m('el-col'),
            f = m('el-row'),
            _ = m('el-button'),
            y = m('el-form-item'),
            j = m('el-form');
          return (
            g(),
            h('div', null, [
              i(
                j,
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
                    h(
                      O,
                      null,
                      E(
                        t.formOption.formItem,
                        (d, w) => (
                          g(),
                          V(
                            f,
                            { key: w, gutter: d.gutter || 30 },
                            {
                              default: c(() => [
                                (g(!0),
                                h(
                                  O,
                                  null,
                                  E(
                                    d.itemList,
                                    (B, $) => (
                                      g(),
                                      V(
                                        v,
                                        {
                                          key: $,
                                          xs: d.xs || 24,
                                          sm: d.sm || 24,
                                          md: d.md || 12,
                                          lg: d.lg || 8,
                                          xl: d.xl || 8,
                                        },
                                        {
                                          default: c(() => [
                                            i(
                                              ee,
                                              {
                                                'form-item': B,
                                                'form-model': u,
                                                'set-form-model': o,
                                              },
                                              H({ _: 2 }, [
                                                E(Object.keys(n.$slots), (I) => ({
                                                  name: I,
                                                  fn: c((L) => [J(n.$slots, I, K(Q(L || {})))]),
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
                    i(y, null, {
                      default: c(() => [
                        i(
                          _,
                          { type: 'primary', onClick: s[0] || (s[0] = (d) => e()) },
                          { default: c(() => [C('Create')]), _: 1 },
                        ),
                        i(
                          _,
                          { onClick: s[1] || (s[1] = (d) => a()) },
                          { default: c(() => [C('Reset')]), _: 1 },
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
  oe = { class: 'page-container' },
  ae = { class: 'config' },
  te = S({
    name: 'RtForm',
    __name: 'index',
    setup(t) {
      const r = D({ textarea: 0 }),
        p = R({
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
                    X('input', {
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
          T(this, null, function* () {
            o == 'vertical'
              ? p.formItem.map((e) => ((e.md = 24), (e.lg = 24), (e.xl = 24), e))
              : o == 'horizontal' &&
                p.formItem.map((e) => (delete e.md, delete e.lg, delete e.xl, e));
          });
      u('vertical');
      const b = (o) => {
        r.value = x(x({}, o), r.value);
      };
      return (o, e) => {
        const a = m('el-button'),
          n = m('el-input');
        return (
          g(),
          h('div', oe, [
            W('div', ae, [
              i(
                a,
                { onClick: e[0] || (e[0] = (s) => u('vertical')) },
                { default: c(() => [C('垂直')]), _: 1 },
              ),
              i(
                a,
                { onClick: e[1] || (e[1] = (s) => u('horizontal')) },
                { default: c(() => [C('水平')]), _: 1 },
              ),
            ]),
            i(
              le,
              { ref: 'formRef', 'form-option': p, onSubmitForm: b },
              {
                slotInput: c(({ formModel: s, formItem: v }) => [
                  i(
                    n,
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
  });
const se = Y(te, [['__scopeId', 'data-v-9562b054']]);
export { se as default };
