<template>
  <div class="page-container">
    <el-button @click="handlerForm('vertical')">垂直</el-button>
    <el-button @click="handlerForm('horizontal')">水平</el-button>
    <Form :form-option="formOption"></Form>
  </div>
</template>

<script lang="ts" setup>
  import Form from '@/components/Form/index.vue';
  import { FormProps } from '@/components/Form/types/from';
  import { reactive } from 'vue';

  const formOption = reactive<FormProps>({
    labelPosition: 'right',
    formIten: [
      {
        gutter: 30,
        itemList: [
          {
            type: 'input',
            label: '输入框1号',
            prop: 'name',
          },
          {
            type: 'input',
            label: '输入框2号',
            prop: 'password',
          },
          {
            type: 'dateTime',
            label: '时间选择器',
            prop: 'dateTime',
          },
        ],
      },
      {
        gutter: 30,
        itemList: [
          {
            type: 'radio',
            label: '晚上吃什么',
            prop: 'radio',
            options: [
              { label: '吃吃吃就知道吃', value: '吃吃吃就知道吃' },
              { label: '饿着吧！饿死算了', value: '饿着吧！饿死算了' },
            ],
          },
          {
            type: 'select',
            label: '晚上吃什么',
            prop: 'select',
            options: [
              { label: '吃吃吃就知道吃', value: '吃吃吃就知道吃' },
              { label: '饿着吧！饿死算了', value: '饿着吧！饿死算了' },
            ],
          },
          {
            type: 'checkbox',
            label: '晚上吃什么',
            prop: 'checkbox',
            options: [
              { label: '选项1', value: '' },
              { label: '选项2', value: '' },
              { label: '选项3', value: '' },
              { label: '选项4', value: '' },
            ],
          },
        ],
      },
      {
        gutter: 30,
        md: 24,
        lg: 24,
        xl: 24,
        itemList: [
          {
            type: 'input',
            label: '长长的输入框',
            inputType: 'textarea',
            prop: 'textarea',
          },
        ],
      },
    ],
  });

  const handlerForm = (val: string) => {
    if (val == 'vertical') {
      formOption.formIten.map((res) => {
        res.md = 24;
        res.lg = 24;
        res.xl = 24;
        return res;
      });
    } else if (val == 'horizontal') {
      formOption.formIten.map((res) => {
        delete res.md;
        delete res.lg;
        delete res.xl;
        return res;
      });
    }
  };
  handlerForm('vertical');
</script>

<style scoped lang="scss">
  .page-container {
    padding: 20px;
    background-color: #{$main-bg-color};
  }
</style>
