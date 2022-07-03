<template>
  <el-menu
    ref="menu"
    :default-active="activeMenyu"
    class="horizontal-header-menu"
    mode="horizontal"
    @select="(indexPath) => selectMenu(indexPath)"
  >
    <app-link
      v-for="menusRoute in usePermissionStoreHook().wholeMenus"
      :key="menusRoute.path"
      :to="resolvePath(menusRoute)"
    >
      <el-menu-item :index="resolvePath(menusRoute)">
        <item
          class-name="menu-item-svg"
          :icon="menusRoute.meta && menusRoute.meta.icon"
          :title="menusRoute.meta?.title"
        />
      </el-menu-item>
    </app-link>
  </el-menu>
</template>
<script setup lang="ts">
  import Item from './Item.vue';
  import AppLink from './Link.vue';
  import { usePermissionStoreHook } from '@/store/modules/permission';
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
  import { useSelectMenu } from './hooks/useSelectMenu';
  import { AppRouteRecordRaw } from '#/route';
  import { getParentPaths, findRouteByPath } from '@/router/utils';

  const { selectMenu } = useSelectMenu();

  const route = useRoute();

  const resolvePath = (routeRaw: AppRouteRecordRaw): string => {
    let path = routeRaw.path;
    if (routeRaw.children && routeRaw.children.length) {
      path = routeRaw.children[0].path;
    }
    return path;
  };

  const activeMenyu = computed<string>(() => {
    const { path } = route;
    const wholeMenus = usePermissionStoreHook().wholeMenus;
    // 当前路由的父级路径
    const parentRoutes = getParentPaths(path, wholeMenus)[0];
    const routeByPath = findRouteByPath(parentRoutes, wholeMenus);
    if (routeByPath?.children && routeByPath.children.length) {
      return routeByPath.children[0].path;
    }
    return path;
  });
</script>
