<script setup lang="ts">
  import { getCurrentInstance } from 'vue';
  import Sidebar from '../Sidebar/index.vue';
  import { useRootSetting } from '@/hooks/setting/useRootSetting';
  const { appConfig } = useRootSetting();
  const config = getCurrentInstance()?.appContext.config.globalProperties.$config;
</script>

<template>
  <div
    v-show="
      !appConfig.hideSidebar && (appConfig.sidebarMode !== 'horizontal' || appConfig.drawerSidebar)
    "
    class="sidebar-container"
    :class="{ hideSidebar: appConfig.collapseMenu }"
  >
    <div class="app-logo" :class="{ 'app-logo-hide': appConfig.collapseMenu }">
      <div class="logo">
        <img class="logo_img" src="@/assets/logo.png" mode="scaleToFill" />
      </div>

      <span class="name">{{ config.title }}</span>
    </div>
    <Sidebar mode="vertical" />
  </div>
</template>

<style lang="scss" scoped>
  .app-logo {
    .logo_img {
      width: 38px;
      height: 38px;
    }
    .name {
      transition: all 0.5s;
    }
  }
  .app-logo-hide {
    width: $sideHideBarWidth;
    .name {
      opacity: 0;
      transform: translateX(-20px);
    }
  }
</style>
