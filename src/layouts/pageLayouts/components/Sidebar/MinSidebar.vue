<template>
  <el-menu
    ref="menu"
    :default-active="activeMenyu"
    :active="activeMenyu"
    class="horizontal-header-menu"
    mode="horizontal"
  >
    <app-link
      v-for="menusRoute in usePermissionStoreHook().wholeMenus"
      :key="menusRoute.path"
      :to="menusRoute.path"
    >
      <el-menu-item :index="menusRoute.path">
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

  const route = useRoute();

  const activeMenyu = computed<string>(() => {
    const { path } = route;
    return '/' + path.split('/')[1];
  });
</script>
