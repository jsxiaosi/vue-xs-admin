<template>
  <div class="theme" :class="{ 'theme-dark': isDark === 'dark' }" @click="toggleDarkMode">
    <div class="theme-inner"></div>
    <SvgIcon name="sun"></SvgIcon>
    <SvgIcon name="moon"></SvgIcon>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import SvgIcon from '../SvgIcon/index.vue';
  import { toggleTheme } from '@zougt/vite-plugin-theme-preprocessor/dist/browser-utils';
  import { useAppStore } from '@/store/modules/app';
  import { getAppCollapseMenu } from '@/hooks/userAppWindow';

  // const toggleTheme = (scopeName = 'theme-default') => {
  // 	document.documentElement.className = scopeName
  // }

  const appStore = useAppStore();
  const { appConfigMode } = getAppCollapseMenu();
  const isDark = ref<string>(appConfigMode.value.themeMode);
  isDark.value = appConfigMode.value.themeMode;
  toggleTheme({
    scopeName: `variables-theme-${isDark.value}`,
  });

  const toggleDarkMode = () => {
    isDark.value = isDark.value === 'day' ? 'dark' : 'day';
    appConfigMode.value.themeMode = isDark.value;
    appStore.setAppConfigMode(appConfigMode.value);
    toggleTheme({
      scopeName: `variables-theme-${isDark.value}`,
    });
  };
</script>

<style lang="scss" scoped>
  .theme {
    position: relative;
    width: 50px;
    height: 26px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: 151515;
    border: 1px solid #{$text-color-primary};
    padding: 0 6px;
    font-size: 1em;
    border-radius: 30px;
    .theme-inner {
      position: absolute;
      z-index: 1;
      width: 18px;
      height: 18px;
      background-color: #{$text-color-primary};
      border-radius: 50%;
      transition: transform 0.5s, background-color 0.5s;
      will-change: transform;
    }
  }
  .theme-dark {
    .theme-inner {
      transform: translateX(calc(100% + 2px));
    }
  }
  .icon {
    font-size: 1em;
  }
</style>
