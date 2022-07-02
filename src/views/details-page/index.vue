<template>
  <div class="page-container">
    <el-button v-for="item in 6" :key="item" @click="toPath(item)">详情页{{ item }}</el-button>
  </div>
</template>
<script setup lang="ts">
  import { usePermissionStoreHook } from '@/store/modules/permission';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const toPath = (item: number) => {
    const query = { id: `${item}` };
    usePermissionStoreHook().handleMultiTabs('add', {
      path: `/details_page/details_info`,
      name: 'RtDetailsInfo',
      query,
      meta: {
        title: `详情页-${item}`,
      },
    });
    router.push({ name: 'RtDetailsInfo', query });
  };
</script>
<style lang="scss"></style>
