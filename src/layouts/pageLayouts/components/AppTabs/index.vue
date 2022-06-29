<template>
  <div class="main-container-tabs">
    <el-tabs
      v-model="editableTabsValue"
      type="card"
      class="demo-tabs"
      :closable="multiTabs.length > 1"
      @tab-remove="removeTab"
      @tab-change="changeTab"
    >
      <el-tab-pane
        v-for="item in multiTabs"
        :key="item.path"
        :label="t(item.meta.title as string)"
        :name="item.path"
      >
      </el-tab-pane>
    </el-tabs>
    <ul>
      <li class="cursor" @click="onFresh">
        <svg-icon class="rotate" name="iEL-refresh"></svg-icon>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from '@/hooks/web/useI18n';
  import { usePermissionStoreHook } from '@/store/modules/permission';
  import type { MultiTabsType } from '@/store/types';
  import { ref, onMounted, computed, watch, unref } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import SvgIcon from '@/components/SvgIcon/index.vue';
  import { removeClass, toggleClass } from '@/utils/operate';
  import { sidebarRouteList } from '@/router/modules';
  import { findRouteByPath } from '@/router/utils';
  const { t } = useI18n();

  const route = useRoute();
  const router = useRouter();

  const multiTabs = computed<MultiTabsType[]>(() => usePermissionStoreHook().multiTabs);
  const editableTabsValue = ref(route.path);

  watch(
    () => route.path,
    () => {
      editableTabsValue.value = route.path;
      addRouteTabs();
    },
  );

  onMounted(() => {
    addRouteTabs();
  });

  const addRouteTabs = () => {
    const { path, name, query, meta } = route;

    const routeIndex = findRouteByPath(path, sidebarRouteList);
    if (!routeIndex) return;
    const currentRoute = { path, query, meta, name };
    usePermissionStoreHook().handleMultiTabs('add', currentRoute);
  };

  const removeTab = (e: string) => {
    const valueIndex = multiTabs.value.findIndex((i) => i.path === e);
    const tabsLength = multiTabs.value.length;
    let value,
      toRoute = {};
    if (valueIndex === tabsLength - 1) {
      value = multiTabs.value[valueIndex - 1];
      toRoute = {
        path: value.path,
        query: value.query,
      };
    } else {
      value = multiTabs.value[tabsLength - 1];
      toRoute = {
        path: value.path,
        query: value.query,
      };
    }
    router.push(toRoute);
    usePermissionStoreHook().cacheOperate({
      mode: 'delete',
      name: multiTabs.value[valueIndex].name || '',
    });
    usePermissionStoreHook().handleMultiTabs('delete', e);
  };

  // 重新加载
  function onFresh() {
    const refreshButton = 'refresh-button';
    toggleClass(true, refreshButton, document.querySelector('.rotate'));
    const { fullPath, query } = unref(route);
    router.replace({
      path: '/redirect' + fullPath,
      query: query,
    });
    setTimeout(() => {
      removeClass(document.querySelector('.rotate'), refreshButton);
    }, 600);
  }

  const changeTab = (e: string) => {
    router.push(e);
  };
</script>

<style lang="scss" scoped>
  .main-container-tabs {
    display: flex;
    ul {
      li {
        width: $tabsPageHeight;
        height: 100%;
        text-align: center;
        line-height: $tabsPageHeight;
        font-size: 16px;
        border: 1px solid var(--border-color-light);
      }
    }
    // .el-tabs :deep(.el-tabs__header) {
    //   margin: 0;
    // }
    .el-tabs {
      width: 0;
      height: $tabsPageHeight;
      flex: 1;
      margin: 0 10px;
      :deep(.el-tabs__header) {
        height: 100%;
        margin: 0;
        border: none;
        // display: flex;
        // align-items: center;
        .el-tabs__nav-wrap,
        .el-tabs__nav-scroll {
          height: 100%;
        }

        .el-tabs__nav-scroll {
          display: flex;
          align-items: center;
          .el-tabs__nav {
            border: none;
            border-radius: 0;
            .el-tabs__item {
              height: 100%;
              line-height: $tabsPageHeight - 10;
              border-radius: 4px;
              border: 1px solid var(--border-color-light);
              margin-right: 4px;
            }
          }
        }

        .el-tabs__nav-next,
        .el-tabs__nav-prev {
          height: $tabsPageHeight;
          line-height: $tabsPageHeight;
        }
        // .el-tabs__nav-*{

        // }
      }
    }
    /* 刷新按钮动画效果 */
    .refresh-button {
      animation: rotate 600ms linear infinite;
    }

    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }

      to {
        transform: rotate(-360deg);
      }
    }
  }
</style>
