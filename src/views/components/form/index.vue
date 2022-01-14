<template>
  <div class="page-container">
    <el-button @click="handlerForm('vertical')">垂直</el-button>
    <el-button @click="handlerForm('horizontal')">水平</el-button>
    <Form ref="formRef" :form-option="formOption" @submit-form="submitForm">
      <template #password="{ formMode, formItem }">
        <el-input
          v-model="formMode[formItem.prop]"
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
  import { reactive, ref } from 'vue';

  const form = ref<{
    textarea: number;
  }>({ textarea: 0 });

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
            isSlot: true,
            type: 'input',
            label: '自定义',
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
