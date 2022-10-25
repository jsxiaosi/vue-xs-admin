<script setup lang="ts">
  import { ElConfigProvider } from 'element-plus';
  import { useColorMode } from '@vueuse/core';
  import { useAppStoreHook } from './store/modules/app';
  import { deffElementLocale } from '@/hooks/web/useI18n';
  const { tolocale } = deffElementLocale();

  const appStore = useAppStoreHook();
  const color = useColorMode();

  console.log(color);
  console.log(JSON.parse(JSON.stringify(appStore.appConfigMode)));
</script>

<template>
  <ElConfigProvider :locale="tolocale">
    <router-view />
  </ElConfigProvider>
</template>
