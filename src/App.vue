<template>
  <el-config-provider :locale="tolocale">
    <router-view />
  </el-config-provider>
</template>

<script setup lang="ts">
  import { ElConfigProvider } from 'element-plus';
  import { deffElementLocale } from '@/hooks/web/useI18n';

  const { tolocale } = deffElementLocale();
</script>
