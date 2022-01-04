<template>
  <div class="theme" :class="{ 'theme-dark': isDark }" @click="toggleDarkMode">
    <div class="theme-inner"></div>
    <SvgIcon name="sun"></SvgIcon>
    <SvgIcon name="moon"></SvgIcon>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import SvgIcon from '../SvgIcon/index.vue';
  import { toggleTheme } from '@zougt/vite-plugin-theme-preprocessor/dist/browser-utils';

  // const toggleTheme = (scopeName = 'theme-default') => {
  // 	document.documentElement.className = scopeName
  // }
  const isDark = ref<boolean>(false);
  const toggleDarkMode = () => {
    isDark.value = !isDark.value;
    console.log(isDark.value);
    let scopeName = 'variables-theme-day';
    if (isDark.value) scopeName = 'variables-theme-dark';
    else scopeName = 'variables-theme-day';
    console.log(scopeName);
    toggleTheme({
      scopeName,
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
    border: 1px solid #{$textColor};
    padding: 0 6px;
    font-size: 1em;
    border-radius: 30px;
    .theme-inner {
      position: absolute;
      z-index: 1;
      width: 18px;
      height: 18px;
      background-color: #{$textColor};
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
