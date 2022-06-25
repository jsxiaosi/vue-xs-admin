<template>
  <div class="page-container">
    <span>切换权限：</span>
    <el-button @click="powerChange"> {{ power }} </el-button>
    <el-button @click="routPush"> {{ power }} </el-button>
  </div>
</template>

<script setup lang="ts">
  import { ref, unref } from 'vue';
  import { initAsyncRoute } from '@/router/utils';
  import { useRoute, useRouter } from 'vue-router';
  const userInfo = JSON.parse(localStorage.getItem('userInfo') || '');
  const route = useRoute();

  const power = ref<string>(userInfo.power);
  const powerChange = async () => {
    power.value = power.value === 'admin' ? 'test' : 'admin';
    initAsyncRoute(power.value);

    console.log(route);
    const { fullPath, query } = unref(route);
    router.replace({
      path: '/redirect' + fullPath,
      query: query,
    });
  };

  const router = useRouter();

  const routPush = () => {
    router.push('/nested/menu1/menu1-2/menu1-2-2');
  };
</script>

<style scoped lang="scss"></style>
