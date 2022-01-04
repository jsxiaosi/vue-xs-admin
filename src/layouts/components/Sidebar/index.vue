<template>
  <div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenyu"
        :unique-opened="false"
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
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
  import SidebarItem from './SidebarItem.vue';
  import routeModuleList from '@/router/modules';
  import { getAppCollapseMenu } from '@/hooks/appWindow';

  defineProps({
    mode: {
      type: String,
      default: 'vertical',
    },
  });

  const activeMenyu = computed(() => {
    const route = useRoute();
    const { meta, path } = route;
    if (meta.activeMenu) {
      return meta.activeMenu;
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
