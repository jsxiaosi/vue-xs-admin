<template>
  <div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenyu"
        :unique-opened="true"
        :collapse="appConfigMode.sidebarMode === 'horizontal' ? false : appConfigMode.collapseMenu"
        :mode="mode"
      >
        <sidebar-item
          v-for="route in routeModuleList"
          :key="route.path"
          :item="route"
          :is-nest="false"
          :base-path="route.path"
        />
      </el-menu>
      <!-- <i class="breadcrumb-icon" :class="'el-icon-s-unfold'"></i> -->
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
  import { computed, PropType } from 'vue';
  import { useRoute } from 'vue-router';
  import SidebarItem from './SidebarItem.vue';
  import { getAppCollapseMenu } from '@/hooks/userAppWindow';
  import { usePermissionStoreHook } from '@/store/modules/permission';

  const routeModuleList = computed(() => usePermissionStoreHook().wholeMenus);

  defineProps({
    mode: {
      type: String as PropType<'vertical' | 'horizontal'>,
      default: 'vertical',
    },
  });

  const activeMenyu = computed<string>(() => {
    const route = useRoute();
    const { meta, path } = route;
    if (meta.activeMenu) {
      return meta.activeMenu as string;
    }
    return path;
  });

  const { appConfigMode } = getAppCollapseMenu();

  // const isCollapse = ref(false)
</script>

<style lang="scss" scoped>
  .tac {
    height: 100%;
  }

  .breadcrumb-icon {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 56px;
    height: 56px;
    font-size: 20px;
    line-height: 56px;
    text-align: center;
  }
</style>
