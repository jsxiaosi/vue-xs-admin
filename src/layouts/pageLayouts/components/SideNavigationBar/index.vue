<script setup lang="ts">
  import { useAppStoreHook } from '@/store/modules/app';
  import { computed, ref, watch } from 'vue';
  import VerticalSidebar from '../VerticalSidebar/index.vue';
  import { useDebounceFn, useEventListener, useMediaQuery } from '@vueuse/core';
  import type { AppConfig } from '@/store/types';

  const appStore = useAppStoreHook();

  const drawer = computed(() => !appStore.appConfigMode.collapseMenu);

  const setAppStore = (appData: Partial<AppConfig>) => {
    appStore.setAppConfigMode(appData);
  };

  const handleClose = () => {
    setAppStore({ collapseMenu: true });
  };

  const isPhoneScreen = ref<boolean>(false);

  const isSmallScreen = ref<boolean>(false);

  const mediaQuery = useDebounceFn(() => {
    isSmallScreen.value = useMediaQuery('(max-width: 1024px)').value;

    isPhoneScreen.value = useMediaQuery('(max-width: 750px)').value;
    if (isPhoneScreen.value) {
      setAppStore({ drawerSidebar: true });
    } else {
      setAppStore({ drawerSidebar: false });
    }
  }, 100);

  watch(isSmallScreen, () => {
    setAppStore({ collapseMenu: isSmallScreen.value });
  });

  useEventListener(window, 'resize', () => mediaQuery());

  mediaQuery();
</script>

<template>
  <el-drawer
    v-if="isPhoneScreen"
    v-model="drawer"
    :with-header="false"
    custom-class="drawer-sidebar"
    direction="ltr"
    :before-close="handleClose"
  >
    <VerticalSidebar />
  </el-drawer>

  <VerticalSidebar v-else></VerticalSidebar>
</template>

<style lang="scss">
  .drawer-sidebar {
    width: #{$sideBarWidth} !important;
    background-color: var(--main-bg-color);

    .el-drawer__body {
      padding: 0 !important;
      height: 100vh;
      overflow: hidden;

      .sidebar-container {
        height: 100%;
      }
    }
  }
</style>
