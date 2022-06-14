<template>
  <div class="page-container">
    <span>切换权限：</span>
    <el-button @click="powerChange"> {{ power }} </el-button>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { initAsyncRoute } from '@/router/utils';
  const userInfo = JSON.parse(localStorage.getItem('userInfo') || '');
  const power = ref<string>(userInfo.power);
  const powerChange = async () => {
    power.value = power.value === 'admin' ? 'test' : 'admin';
    initAsyncRoute(power.value);
  };
</script>

<style scoped lang="scss"></style>
