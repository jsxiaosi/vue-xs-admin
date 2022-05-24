<template>
  <div class="page-container">
    日期：
    <el-date-picker
      v-model="value"
      type="date"
      placeholder="Pick a day"
      :disabled-date="disabledDate"
    >
      <template #default="picker"> {{ reader(picker) }}</template>
    </el-date-picker>
  </div>
</template>

<script lang="ts" setup>
  import { DateCell } from 'element-plus/lib/components/date-picker/src/date-picker.type';
  import { ref } from 'vue';
  import calendar from './calendar/index.js';

  const value = ref<string>();

  const disabledDate = (time: Date) => {
    return time.getTime() < Date.now();
  };

  const reader = (v: DateCell) => {
    const { date } = v;
    var year = date?.getFullYear();
    var month = (date?.getMonth() as number) + 1;
    var day = date?.getDate();
    const day1 = calendar.solar2lunar(year, month, day);
    return day1.cDay;
  };
</script>

<style scoped lang="scss"></style>
