<template>
  <div class="navbar">
    <div class="navbar-left">
      <Breadcrumb v-if="appConfigMode.sidebarMode !== 'horizontal'" />
      <div v-else class="app-logo">
        <SvgIcon name="Vue"></SvgIcon>
        <span class="name">xiaosiAdmin</span>
      </div>
    </div>
    <div class="navbar-center">
      <Sidebar
        v-if="appConfigMode.sidebarMode === 'horizontal'"
        class="sidebar-horizontal"
        mode="horizontal"
      />
      <MinSidebar
        v-if="appConfigMode.sidebarMode === 'blend'"
        class="sidebar-horizontal"
        mode="horizontal"
      />
    </div>
    <div class="navbar-right">
      <AppTheme></AppTheme>
      <AppLocale class="icon"></AppLocale>
      <AppAccount></AppAccount>
      <SvgIcon class="icon" name="iEL-setting" @click="drawer = true"></SvgIcon>
    </div>

    <Setting v-model:modelValue="drawer"></Setting>
  </div>
</template>

<script setup lang="ts">
  // import { ref } from 'vue'
  import Sidebar from '../../components/Sidebar/index.vue';
  import MinSidebar from '../../components/Sidebar/MinSidebar.vue';
  import Setting from '../../components/Seting/index.vue';
  import Breadcrumb from '../../components/Breadcrumb/index.vue';

  import { AppLocale, AppTheme, AppAccount } from '@/components/Application';

  import SvgIcon from '@/components/SvgIcon/index.vue';
  import { ref } from 'vue';
  import { getAppCollapseMenu } from '@/hooks/userAppWindow';

  const drawer = ref(false);

  const { appConfigMode } = getAppCollapseMenu();
</script>

<style lang="scss" scoped>
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    // margin-left: #{$sideBarWidth};
    height: #{$navBarHeight};
    padding: 0 20px;
    background-color: $navBarColor;
    border-bottom: 1px solid var(--border-color-light);
    box-shadow: 1px 0 20px rgb(0 0 0 / 8%);

    .navbar-left {
    }

    .navbar-center {
      height: 100%;
      min-width: 0;
      flex: 1;
    }

    .navbar-right {
      display: flex;
      // flex: 1;
      align-items: center;

      .icon {
        margin-left: 12px;
        font-size: 20px;
      }
    }
  }
</style>
