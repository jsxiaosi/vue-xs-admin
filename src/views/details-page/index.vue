<script setup lang="ts">
  import { useRouter } from 'vue-router';
  import { usePermissionStoreHook } from '@/store/modules/permission';

  const router = useRouter();

  const toPath = (item: number) => {
    const query = { id: `${item}` };
    usePermissionStoreHook().handleMultiTabs('add', {
      path: `/details_page/details_info`,
      name: 'RtDetailsInfo',
      query,
      meta: {
        title: { 'zh-ch': `详情页-${item}`, en: `pageDatails-${item}` },
      },
    });
    router.push({ name: 'RtDetailsInfo', query });
  };
</script>

<template>
  <div class="page-container">
    <el-button v-for="item in 6" :key="item" @click="toPath(item)">详情页{{ item }}</el-button>
  </div>
</template>

<style lang="scss"></style>
