<template>
  <div
    v-show="appConfigMode.sidebarMode !== 'horizontal'"
    class="sidebar-container"
    :class="{ hideSidebar: appConfigMode.collapseMenu }"
  >
    <div class="app-logo" :class="{ 'app-logo-hide': appConfigMode.collapseMenu }">
      <div class="logo">
        <SvgIcon name="Vue"></SvgIcon>
      </div>
      <span class="name">xiaosiAdmin</span>
    </div>
    <Sidebar mode="vertical" />
  </div>
</template>

<script setup lang="ts">
  import Sidebar from '../Sidebar/index.vue';
  import SvgIcon from '@/components/SvgIcon/index.vue';
  import { getAppCollapseMenu } from '@/hooks/userAppWindow';

  const { appConfigMode } = getAppCollapseMenu();
</script>

<style lang="scss" scoped>
  .app-logo {
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
