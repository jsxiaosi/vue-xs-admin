<script setup lang="ts">
  // import { ref } from 'vue'
  import { getCurrentInstance, ref } from 'vue';
  import Sidebar from '../../components/Sidebar/index.vue';
  import MinSidebar from '../../components/Sidebar/MinSidebar.vue';
  import Setting from '../../components/Seting/index.vue';
  import Breadcrumb from '../../components/Breadcrumb/index.vue';

  import { AppLocale, AppTheme, AppAccount } from '@/components/Application';

  import SvgIcon from '@/components/SvgIcon/index.vue';
  import { useRootSetting } from '@/hooks/setting/useRootSetting';

  const drawer = ref(false);

  const config = getCurrentInstance()?.appContext.config.globalProperties.$config;

  const { appConfig } = useRootSetting();

  const full_screen = ref<'full_screen' | 'full_screen_close'>('full_screen');

  const fullScreenChange = () => {
    // https://developer.mozilla.org/zh-CN/docs/Web/API/Document/exitFullscreen
    if (document.fullscreenElement) {
      document.exitFullscreen();
      full_screen.value = 'full_screen';
    } else {
      full_screen.value = 'full_screen_close';
      document.documentElement.requestFullscreen();
    }
  };
</script>

<template>
  <div class="navbar">
    <div v-show="!appConfig.hideNavbart" class="navbar-content">
      <div class="navbar-left">
        <Breadcrumb v-if="appConfig.sidebarMode !== 'horizontal' || appConfig.drawerSidebar" />
        <div v-else class="app-logo">
          <!-- <SvgIcon name="Vue"></SvgIcon> -->
          <img class="logo_img" src="@/assets/logo.png" mode="scaleToFill" />
          <span class="name">{{ config.title }}</span>
        </div>
      </div>
      <div class="navbar-center">
        <template v-if="!appConfig.drawerSidebar">
          <Sidebar
            v-if="appConfig.sidebarMode === 'horizontal'"
            class="sidebar-horizontal"
            mode="horizontal"
          />
          <MinSidebar
            v-if="appConfig.sidebarMode === 'blend'"
            class="sidebar-horizontal"
            mode="horizontal"
          />
        </template>
      </div>
      <div class="navbar-right">
        <el-tooltip :content="$t('layout.navbar.fullScreen')" placement="bottom">
          <SvgIcon class="cursor" :name="full_screen" @click="fullScreenChange"></SvgIcon>
        </el-tooltip>
        <AppLocale class="icon"></AppLocale>
        <AppTheme></AppTheme>
        <AppAccount></AppAccount>
        <SvgIcon class="cursor" name="iEL-setting" @click="drawer = true"></SvgIcon>
      </div>
    </div>
    <div v-show="appConfig.hideNavbart" class="setting-icon cursor">
      <SvgIcon name="iEL-setting" @click="drawer = true"></SvgIcon>
    </div>
    <Setting v-model:modelValue="drawer"></Setting>
  </div>
</template>

<style lang="scss" scoped>
  .navbar {
    width: 100%;
    // margin-left: #{$sideBarWidth};

    background-color: $navBarColor;
    border-bottom: 1px solid var(--border-color-light);
    box-shadow: 1px 0 20px rgb(0 0 0 / 8%);
    .navbar-content {
      width: 100%;
      height: #{$navBarHeight};
      display: flex;
      padding: 0 20px;
      align-items: center;
      justify-content: space-between;

      // .navbar-left {
      // }

      .logo_img {
        width: 38px;
        height: 38px;
      }

      .navbar-center {
        height: 100%;
        min-width: 0;
        flex: 1;
      }

      .navbar-right {
        display: grid;
        grid-auto-flow: column;
        align-items: center;
        grid-gap: 12px;
        font-size: var(--font-size-extra-large);
      }
    }

    .setting-icon {
      position: fixed;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      z-index: 99;
      display: flex;
      padding: 8px;
      background-color: var(--main-color);
      color: #fff;
      font-size: var(--font-size-extra-large);
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
  }
</style>
