<script setup lang="ts">
  import { ref, unref } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { initAsyncRoute } from '@/router/utils';
  import type { UseInfoType } from '@/server/useInfo';
  import { getStorage } from '@/utils/storage';
  const userInfo = getStorage<UseInfoType>('userInfo');
  const route = useRoute();
  const router = useRouter();

  const power = ref<string>(userInfo ? userInfo.power : '');
  const powerChange = async () => {
    power.value = power.value === 'admin' ? 'test' : 'admin';
    initAsyncRoute(power.value);

    const { fullPath, query } = unref(route);
    router.replace({
      path: '/redirect' + fullPath,
      query: query,
    });
  };
</script>

<template>
  <div class="page-container">
    <span>切换权限：</span>
    <el-button @click="powerChange"> {{ power }} </el-button>
  </div>
</template>

<style scoped lang="scss"></style>
