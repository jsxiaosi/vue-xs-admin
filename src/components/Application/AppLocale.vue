<template>
  <el-dropdown class="popover-content" trigger="click" @command="tolochos">
    <span>
      <SvgIcon class="icon" name="locales"></SvgIcon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="zh-ch">中文简体</el-dropdown-item>
        <el-dropdown-item command="en">English</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
  import { useI18n } from '@/hooks/useI18n';
  import SvgIcon from '@/components/SvgIcon/index.vue';

  const i18n = useI18n();
  // const availableLocales = i18n.availableLocales;
  const tolochos = (key: string) => {
    i18n.locale.value = key;
  };

  console.log(i18n);

  // const options = ref([
  // 	{ name: '123', value: 'variables-theme-day' },
  // 	{ name: '456', value: 'variables-theme-dark' },
  // ])

  // const value = ref()

  // const toggleTheme = (scopeName = 'theme-default') => {
  // 	document.documentElement.className = scopeName
  // }
</script>

<style lang="scss" scoped>
  .icon {
    font-size: 1em;
  }
</style>
