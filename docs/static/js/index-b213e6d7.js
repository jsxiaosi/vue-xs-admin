var G = Object.defineProperty;
var F = Object.getOwnPropertySymbols;
var U = Object.prototype.hasOwnProperty,
  q = Object.prototype.propertyIsEnumerable;
var P = (n, r, l) =>
    r in n ? G(n, r, { enumerable: !0, configurable: !0, writable: !0, value: l }) : (n[r] = l),
  x = (n, r) => {
    for (var l in r || (r = {})) U.call(r, l) && P(n, l, r[l]);
    if (F) for (var l of F(r)) q.call(r, l) && P(n, l, r[l]);
    return n;
  };
var T = (n, r, l) =>
  new Promise((i, u) => {
    var b = (a) => {
        try {
          e(l.next(a));
        } catch (t) {
          u(t);
        }
      },
      o = (a) => {
        try {
          e(l.throw(a));
        } catch (t) {
          u(t);
        }
      },
      e = (a) => (a.done ? i(a.value) : Promise.resolve(a.value).then(b, o));
    e((l = l.apply(n, r)).next());
  });
import {
  d as O,
  f as s,
  a as d,
  i as z,
  m as k,
  F as I,
  r as D,
  j,
  k as A,
  o as v,
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
  u as X,
  E as N,
  s as Y,
} from './index-1eb240fe.js';
import { g as Z } from './slotsHelper-2e523dd6.js';
import { _ as ee } from './plugin-vueexport-helper-c27b6911.js';
const le = { ElSelect: 'ElOption', ElCheckboxGroup: 'ElCheckbox', ElRadioGroup: 'ElRadio' };
function R(n) {
  return (
    typeof n == 'function' || (Object.prototype.toString.call(n) === '[object Object]' && !z(n))
  );
}
const oe = O({
    props: {
      formItem: { type: Object, default: () => {} },
      formModel: { type: Object, default: () => {} },
    },
    setup(n, { slots: r }) {
      const { formItem: l, formModel: i } = n;
      function u() {
        const o = d(l.component),
          e = le[l.component];
        if (e) {
          let a;
          return s(
            o,
            k({ modelValue: i[l.prop], 'onUpdate:modelValue': (t) => (i[l.prop] = t) }, l.props),
            R((a = b(e))) ? a : { default: () => [a] },
          );
        } else
          return s(
            o,
            k({ modelValue: i[l.prop], 'onUpdate:modelValue': (a) => (i[l.prop] = a) }, l.props),
            null,
          );
      }
      function b(o) {
        if (l.childrenComponent) {
          const { options: e } = l.childrenComponent,
            a = d(o);
          return s(I, null, [
            e == null
              ? void 0
              : e.map((t) => s(a, k({ label: t.label, value: t.value }, l.props), null)),
          ]);
        } else return;
      }
      return () => {
        let o;
        const { formItem: e } = n,
          { prop: a, render: t, rules: p, label: f } = e,
          _ = { formModel: i, formItem: e },
          g = Z(r, a, _),
          y = () => g || (t ? t(_) : u());
        return s(
          d('el-form-item'),
          { label: f, prop: a, rules: p },
          R((o = y())) ? o : { default: () => [o] },
        );
      };
    },
  }),
  ae = O({
    __name: 'index',
    props: {
      formData: { type: Object, default: () => {} },
      formOption: { type: Object, default: () => {} },
      rules: { type: Object, default: () => {} },
    },
    emits: ['submitForm'],
    setup(n, { expose: r, emit: l }) {
      const u = D(n.formData || {}),
        b = j();
      A(() => {});
      function o(t, p) {
        u[t] = p;
      }
      const e = () => {
          b.value.validate((t) => {
            console.log(t);
          }),
            console.log(u),
            l('submitForm', u);
        },
        a = () => {};
      return (
        r({ form: u }),
        (t, p) => {
          const f = d('el-col'),
            _ = d('el-row'),
            g = d('el-button'),
            y = d('el-form-item'),
            w = d('el-form');
          return (
            v(),
            h('div', null, [
              s(
                w,
                {
                  ref_key: 'formRef',
                  ref: b,
                  rules: n.rules,
                  model: u,
                  'label-position': n.formOption.labelPosition,
                  'label-width': '120px',
                },
                {
                  default: c(() => [
                    (v(!0),
                    h(
                      I,
                      null,
                      E(
                        n.formOption.formItem,
                        (m, B) => (
                          v(),
                          V(
                            _,
                            { key: B, gutter: m.gutter || 30 },
                            {
                              default: c(() => [
                                (v(!0),
                                h(
                                  I,
                                  null,
                                  E(
                                    m.itemList,
                                    ($, L) => (
                                      v(),
                                      V(
                                        f,
                                        {
                                          key: L,
                                          xs: m.xs || 24,
                                          sm: m.sm || 24,
                                          md: m.md || 12,
                                          lg: m.lg || 8,
                                          xl: m.xl || 8,
                                        },
                                        {
                                          default: c(() => [
                                            s(
                                              oe,
                                              {
                                                'form-item': $,
                                                'form-model': u,
                                                'set-form-model': o,
                                              },
                                              H({ _: 2 }, [
                                                E(Object.keys(t.$slots), (S) => ({
                                                  name: S,
                                                  fn: c((M) => [J(t.$slots, S, K(Q(M || {})))]),
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
                    s(y, null, {
                      default: c(() => [
                        s(
                          g,
                          { type: 'primary', onClick: p[0] || (p[0] = (m) => e()) },
                          { default: c(() => [C('Create')]), _: 1 },
                        ),
                        s(
                          g,
                          { onClick: p[1] || (p[1] = (m) => a()) },
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
  te = { class: 'page-container' },
  ne = { class: 'config' },
  re = O({
    name: 'RtForm',
    __name: 'index',
    setup(n) {
      const r = j({ textarea: 0 }),
        i = D({
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
                    Y(N, {
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
              ? i.formItem.map((e) => ((e.md = 24), (e.lg = 24), (e.xl = 24), e))
              : o == 'horizontal' &&
                i.formItem.map((e) => (delete e.md, delete e.lg, delete e.xl, e));
          });
      u('vertical');
      const b = (o) => {
        r.value = x(x({}, o), r.value);
      };
      return (o, e) => {
        const a = d('el-button');
        return (
          v(),
          h('div', te, [
            W('div', ne, [
              s(
                a,
                { onClick: e[0] || (e[0] = (t) => u('vertical')) },
                { default: c(() => [C('垂直')]), _: 1 },
              ),
              s(
                a,
                { onClick: e[1] || (e[1] = (t) => u('horizontal')) },
                { default: c(() => [C('水平')]), _: 1 },
              ),
            ]),
            s(
              ae,
              { ref: 'formRef', 'form-option': i, onSubmitForm: b },
              {
                slotInput: c(({ formModel: t, formItem: p }) => [
                  s(
                    X(N),
                    {
                      modelValue: t[p.prop],
                      'onUpdate:modelValue': (f) => (t[p.prop] = f),
                      type: p.inputType,
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
const ce = ee(re, [['__scopeId', 'data-v-167dce66']]);
export { ce as default };
