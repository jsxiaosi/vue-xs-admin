<script setup lang="ts">
  import { deffElementLocale } from '@/hooks/web/useI18n';
  import { ElConfigProvider } from 'element-plus';

  const { tolocale } = deffElementLocale();

  cosole.log(asdfas)
</script>

<template>
  <ElConfigProvider :locale="tolocale">
    <router-view />
  </ElConfigProvider>
</template>
