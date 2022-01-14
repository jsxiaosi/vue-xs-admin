<template>
  <div class="page-container">
    <el-form
      ref="formRef"
      :rules="rules"
      :model="form"
      :label-position="formOption.labelPosition"
      label-width="120px"
    >
      <h1>{{ formOption }}</h1>
      <!-- <div class="">标题</div> -->
      <el-row v-for="(f, fix) in formOption.formIten" :key="fix" :gutter="f.gutter || 30">
        <el-col
          v-for="(fItem, fItemIx) in f.itemList"
          :key="fItemIx"
          :xs="f.xs || 24"
          :sm="f.sm || 24"
          :md="f.md || 12"
          :lg="f.lg || 8"
          :xl="f.xl || 8"
        >
          <el-form-item :label="fItem.label" :prop="fItem.prop">
            <slot
              v-if="fItem.isSlot"
              :form-item="fItem"
              :form-mode="form"
              :name="fItem.prop"
            ></slot>
            <!-- 输入框 -->
            <el-input
              v-else-if="fItem.type === 'input'"
              v-model="form[fItem.prop]"
              :type="fItem.inputType"
            ></el-input>
            <!-- 日期选择器 -->
            <el-date-picker
              v-else-if="fItem.type === 'dateTime'"
              v-model="form[fItem.prop]"
              type="datetimerange"
              range-separator="To"
              start-placeholder="Start date"
              end-placeholder="End date"
            >
            </el-date-picker>
            <!-- 单选框 -->
            <el-radio-group v-else-if="fItem.type === 'radio'" v-model="form.resource">
              <el-radio
                v-for="(radio, radioIx) in fItem.options"
                :key="radioIx"
                :label="radio.label"
              ></el-radio>
            </el-radio-group>
            <!-- 下拉选择框 -->
            <el-select
              v-else-if="fItem.type === 'select'"
              v-model="form[fItem.prop]"
              :placeholder="fItem.placeholder"
            >
              <el-option
                v-for="(select, selectIx) in fItem.options"
                :key="selectIx"
                :label="select.label"
                :value="select.value"
              ></el-option>
            </el-select>
            <el-checkbox-group v-else-if="fItem.type === 'checkbox'" v-model="form[fItem.prop]">
              <el-checkbox
                v-for="(checkbox, checkboxIx) in fItem.options"
                :key="checkboxIx"
                :label="checkbox.label"
                :name="form[fItem.prop]"
              ></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item>
        <el-button type="primary" @click="submitForm()">Create</el-button>
        <el-button @click="resetForm()">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, reactive, PropType, ref } from 'vue';
  import { FormProps, FormItemListProps } from './types/from';

  defineProps({
    formOption: {
      type: Object as PropType<FormProps>,
      default: () => {},
    },
    rules: {
      type: Object,
      default: () => {},
    },
  });

  const emit = defineEmits<{
    (e: 'submitForm', form: FormItemListProps): void;
  }>();
  const form = reactive<any>({});

  const formRef = ref();

  onMounted(() => {});

  const submitForm = () => {
    formRef.value.validate((value: any) => {
      console.log(value);
    });
    // console.log(formRef.value.validate());
    emit('submitForm', form);
  };
  const resetForm = () => {};

  defineExpose({
    form,
  });
</script>

<style scoped lang="scss">
  .page-container {
    padding: 20px;
    background-color: #{$main-bg-color};
  }
</style>
