<template>
  <div class="page-container">
    <el-button @click="handlerForm('vertical')">垂直</el-button>
    <el-button @click="handlerForm('horizontal')">水平</el-button>
    <Form ref="formRef" :form-option="formOption" @submit-form="submitForm">
      <template #slotInput="{ formModel, formItem }">
        <el-input
          v-model="formModel[formItem.prop]"
          :type="formItem.inputType"
          placeholder="自定义输入框"
        ></el-input>
      </template>
    </Form>
  </div>
</template>

<script lang="ts" setup>
  import Form from '@/components/Form/index.vue';
  import { FormProps } from '@/components/Form/types/from';
  import { h, reactive, ref } from 'vue';

  const form = ref<{
    textarea: number;
  }>({ textarea: 0 });

  const cascaderOptions = [
    {
      value: 'guide',
      label: 'Guide',
      children: [
        {
          value: 'disciplines',
          label: 'Disciplines',
          children: [
            {
              value: 'consistency',
              label: 'Consistency',
            },
            {
              value: 'feedback',
              label: 'Feedback',
            },
            {
              value: 'efficiency',
              label: 'Efficiency',
            },
            {
              value: 'controllability',
              label: 'Controllability',
            },
          ],
        },
        {
          value: 'navigation',
          label: 'Navigation',
          children: [
            {
              value: 'side nav',
              label: 'Side Navigation',
            },
            {
              value: 'top nav',
              label: 'Top Navigation',
            },
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
            {
              value: 'layout',
              label: 'Layout',
            },
            {
              value: 'color',
              label: 'Color',
            },
            {
              value: 'typography',
              label: 'Typography',
            },
            {
              value: 'icon',
              label: 'Icon',
            },
            {
              value: 'button',
              label: 'Button',
            },
          ],
        },
        {
          value: 'form',
          label: 'Form',
          children: [
            {
              value: 'radio',
              label: 'Radio',
            },
            {
              value: 'checkbox',
              label: 'Checkbox',
            },
            {
              value: 'input',
              label: 'Input',
            },
            {
              value: 'input-number',
              label: 'InputNumber',
            },
            {
              value: 'select',
              label: 'Select',
            },
            {
              value: 'cascader',
              label: 'Cascader',
            },
            {
              value: 'switch',
              label: 'Switch',
            },
            {
              value: 'slider',
              label: 'Slider',
            },
            {
              value: 'time-picker',
              label: 'TimePicker',
            },
            {
              value: 'date-picker',
              label: 'DatePicker',
            },
            {
              value: 'datetime-picker',
              label: 'DateTimePicker',
            },
            {
              value: 'upload',
              label: 'Upload',
            },
            {
              value: 'rate',
              label: 'Rate',
            },
            {
              value: 'form',
              label: 'Form',
            },
          ],
        },
        {
          value: 'data',
          label: 'Data',
          children: [
            {
              value: 'table',
              label: 'Table',
            },
            {
              value: 'tag',
              label: 'Tag',
            },
            {
              value: 'progress',
              label: 'Progress',
            },
            {
              value: 'tree',
              label: 'Tree',
            },
            {
              value: 'pagination',
              label: 'Pagination',
            },
            {
              value: 'badge',
              label: 'Badge',
            },
          ],
        },
        {
          value: 'notice',
          label: 'Notice',
          children: [
            {
              value: 'alert',
              label: 'Alert',
            },
            {
              value: 'loading',
              label: 'Loading',
            },
            {
              value: 'message',
              label: 'Message',
            },
            {
              value: 'message-box',
              label: 'MessageBox',
            },
            {
              value: 'notification',
              label: 'Notification',
            },
          ],
        },
        {
          value: 'navigation',
          label: 'Navigation',
          children: [
            {
              value: 'menu',
              label: 'Menu',
            },
            {
              value: 'tabs',
              label: 'Tabs',
            },
            {
              value: 'breadcrumb',
              label: 'Breadcrumb',
            },
            {
              value: 'dropdown',
              label: 'Dropdown',
            },
            {
              value: 'steps',
              label: 'Steps',
            },
          ],
        },
        {
          value: 'others',
          label: 'Others',
          children: [
            {
              value: 'dialog',
              label: 'Dialog',
            },
            {
              value: 'tooltip',
              label: 'Tooltip',
            },
            {
              value: 'popover',
              label: 'Popover',
            },
            {
              value: 'card',
              label: 'Card',
            },
            {
              value: 'carousel',
              label: 'Carousel',
            },
            {
              value: 'collapse',
              label: 'Collapse',
            },
          ],
        },
      ],
    },
    {
      value: 'resource',
      label: 'Resource',
      children: [
        {
          value: 'axure',
          label: 'Axure Components',
        },
        {
          value: 'sketch',
          label: 'Sketch Templates',
        },
        {
          value: 'docs',
          label: 'Design Documentation',
        },
      ],
    },
  ];

  const formOption = reactive<FormProps>({
    labelPosition: 'right',
    formItem: [
      {
        gutter: 30,
        itemList: [
          {
            component: 'ElInput',
            label: '输入框1号',
            prop: 'name',
            rules: [{ required: true, type: 'string' }],
            props: {
              onChange: (e: any) => {
                console.log(e);
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
            prop: 'cascader',
            props: {
              options: cascaderOptions,
              props: {
                value: 'value',
                label: 'label',
              },
              onVisibleChange: (e: any) => {
                console.log(e);
              },
            },
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
            isSlot: true,
            rules: [{ required: true, type: 'string' }],
          },
          {
            component: '',
            label: 'render组件',
            prop: 'renderInput',
            render: ({ formModel, formItem }) => {
              return h('input', {
                placeholder: '请输入',
                value: formModel[formItem.prop],
                onChange: (e: any) => {
                  formModel[formItem.prop] = e.target.value;
                },
              });
            },
          },
        ],
      },
    ],
    // formIten: [
    //   {
    //     gutter: 30,
    //     itemList: [
    //       {
    //         type: 'input',
    //         label: '输入框1号',
    //         prop: 'name',
    //         render: ({ formMode, formItem }) => {
    //           return h('input', {
    //             placeholder: '请输入',
    //             modelValue: formMode[formItem.prop],
    //             onChange: () => {
    //             },
    //           });
    //         },
    //       },
    //       {
    //         isSlot: true,
    //         type: 'input',
    //         label: '自定义',
    //         prop: 'password',
    //       },
    //       {
    //         type: 'dateTime',
    //         label: '时间选择器',
    //         prop: 'dateTime',
    //       },
    //     ],
    //   },
    //   {
    //     gutter: 30,
    //     itemList: [
    //       {
    //         type: 'radio',
    //         label: '晚上吃什么',
    //         prop: 'radio',
    //         options: [
    //           { label: '吃吃吃就知道吃', value: '吃吃吃就知道吃' },
    //           { label: '饿着吧！饿死算了', value: '饿着吧！饿死算了' },
    //         ],
    //       },
    //       {
    //         type: 'ElSelect',
    //         label: '晚上吃什么',
    //         prop: 'select',
    //         options: [
    //           { label: '吃吃吃就知道吃', value: '吃吃吃就知道吃' },
    //           { label: '饿着吧！饿死算了', value: '饿着吧！饿死算了' },
    //         ],
    //       },
    //       {
    //         type: 'checkbox',
    //         label: '晚上吃什么',
    //         prop: 'checkbox',
    //         options: [
    //           { label: '选项1', value: '' },
    //           { label: '选项2', value: '' },
    //           { label: '选项3', value: '' },
    //           { label: '选项4', value: '' },
    //         ],
    //       },
    //     ],
    //   },
    //   {
    //     gutter: 30,
    //     md: 24,
    //     lg: 24,
    //     xl: 24,
    //     itemList: [
    //       {
    //         type: 'input',
    //         label: '长长的输入框',
    //         inputType: 'textarea',
    //         prop: 'textarea',
    //       },
    //     ],
    //   },
    // ],
  });

  // // 自定义规则需要获取组件里面的数据进行校验的话通过 formRef.value.form 获取组件里面的form数据
  // const validatePass = (rule: any, value: any, callback: any) => {
  //   callback(new Error('自定义校验规则'));
  // };
  // const validatePass2 = (rule: any, value: any, callback: any) => {
  //   if (!value) {
  //     callback(new Error('Please input the password'));
  //   } else {
  //     callback();
  //   }
  // };

  // const rules = reactive({
  //   name: [
  //     { required: true, message: '只有表单里面的组件才能使用默认规则', trigger: 'blur' },
  //     { validator: validatePass, trigger: 'blur' },
  //   ],
  //   textarea: [{ validator: validatePass2, trigger: 'blur' }],
  // });

  const handlerForm = async (val: string) => {
    if (val == 'vertical') {
      formOption.formItem.map((res) => {
        res.md = 24;
        res.lg = 24;
        res.xl = 24;
        return res;
      });
    } else if (val == 'horizontal') {
      formOption.formItem.map((res) => {
        delete res.md;
        delete res.lg;
        delete res.xl;
        return res;
      });
    }
  };
  handlerForm('vertical');

  const submitForm = (value: object) => {
    form.value = { ...value, ...form.value };
    // console.log(form.value);
  };
</script>

<style scoped lang="scss">
  .page-container {
    padding: 20px;
    background-color: #{$main-bg-color};
  }
</style>
