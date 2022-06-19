<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      :default-active="activeMenyu"
      :unique-opened="true"
      :collapse="appConfigMode.sidebarMode !== 'vertical' ? false : appConfigMode.collapseMenu"
      :mode="mode"
    >
      <sidebar-item
        v-for="menuRoute in menuData"
        :key="menuRoute.path"
        :item="menuRoute"
        :is-nest="false"
        :base-path="menuRoute.basePath || menuRoute.path"
      />
    </el-menu>
  </el-scrollbar>
</template>

<script setup lang="ts">
  import { computed, PropType, ref, watch } from 'vue';
  import { RouteRecordName, useRoute } from 'vue-router';
  import SidebarItem from './SidebarItem.vue';
  import { getAppCollapseMenu } from '@/hooks/userAppWindow';
  import { usePermissionStoreHook } from '@/store/modules/permission';
  import { AppRouteRecordRaw } from '#/route';
  import { getParentPaths, findRouteByPath } from '@/router/utils';

  const route = useRoute();
  const { appConfigMode } = getAppCollapseMenu();
  defineProps({
    mode: {
      type: String as PropType<'vertical' | 'horizontal'>,
      default: 'vertical',
    },
  });

  let subMenuData = ref(usePermissionStoreHook().wholeMenus);

  const menuData = computed<AppRouteRecordRaw[]>(() => {
    return appConfigMode.value.sidebarMode === 'blend'
      ? subMenuData.value
      : usePermissionStoreHook().wholeMenus;
  });

  function getSubMenuData(path: RouteRecordName) {
    // path的上级路由组成的数组
    const parentPathArr = getParentPaths(path, usePermissionStoreHook().wholeMenus);
    // 当前路由的父级路由信息
    const parenetRoute = findRouteByPath(
      parentPathArr[0] || path,
      usePermissionStoreHook().wholeMenus,
    );
    if (!parenetRoute?.children) return;
    let children = parenetRoute.children;
    children = children.map((i: AppRouteRecordRaw) => {
      i.basePath = parentPathArr[0] + '/' + i.path;
      return i;
    });
    subMenuData.value = children;
  }

  getSubMenuData(route.name as RouteRecordName);
  watch(
    () => route.path,
    () => {
      if (appConfigMode.value.sidebarMode === 'blend') {
        getSubMenuData(route.name as RouteRecordName);
      }
    },
  );

  const activeMenyu = computed<string>(() => {
    const { meta, path } = route;
    if (meta.activeMenu) {
      return meta.activeMenu as string;
    }
    return path;
  });

  // const isCollapse = ref(false)
</script>

<style lang="scss" scoped></style>
