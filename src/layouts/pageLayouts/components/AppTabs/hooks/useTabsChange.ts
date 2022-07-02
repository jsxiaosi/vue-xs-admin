import { usePermissionStoreHook } from '@/store/modules/permission';
import { MultiTabsType } from '@/store/types';
import { removeClass, toggleClass } from '@/utils/operate';
import { Ref, unref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import qs from 'qs';

export const useTabsChange = (multiTabs: Ref<MultiTabsType[]>) => {
  const route = useRoute();
  const router = useRouter();

  const setTabPaneKey = (item: MultiTabsType): string => {
    return `${item.path}${
      item.query && Object.keys(item.query).length ? '?' + qs.stringify(item.query) : ''
    }`;
  };

  // 添加标签
  const addRouteTabs = (routeRaw: MultiTabsType) => {
    const { path, name, query, meta } = routeRaw;
    const currentRoute = { path, meta, query, name };
    if (!query) currentRoute.query = {};
    usePermissionStoreHook().handleMultiTabs('add', currentRoute);
  };

  // 关闭标签
  const closeTabsRoute = (e: string, type: 'other' | 'left' | 'right') => {
    const valueIndex = multiTabs.value.findIndex((i) => i.path === e);
    const mapList = multiTabs.value.filter((i, index) => {
      if (i.path !== e && type === 'other') return true;
      else if (index < valueIndex && type === 'left') return true;
      else if (index > valueIndex && type === 'right') return true;
      return false;
    });
    mapList.forEach((i) => {
      usePermissionStoreHook().cacheOperate({
        mode: 'delete',
        name: i.name || '',
      });
      usePermissionStoreHook().handleMultiTabs('delete', i.path);
    });

    router.push({
      path: multiTabs.value[valueIndex].path,
      query: multiTabs.value[valueIndex].query,
    });
  };

  // 关闭当前导航
  const removeTab = (e: string) => {
    const valueIndex = multiTabs.value.findIndex((i) => setTabPaneKey(i) === e);
    const tabsLength = multiTabs.value.length;
    let value, toRoute;
    if (valueIndex === tabsLength - 1) {
      value = multiTabs.value[valueIndex - 1];
      toRoute = {
        path: value.path,
        query: value.query,
      };
    } else if (multiTabs.value[valueIndex].name === route.name) {
      value = multiTabs.value[tabsLength - 1];
      toRoute = {
        path: value.path,
        query: value.query,
      };
    }
    if (toRoute) router.push(toRoute);
    usePermissionStoreHook().cacheOperate({
      mode: 'delete',
      name: multiTabs.value[valueIndex].name || '',
    });
    usePermissionStoreHook().handleMultiTabs('delete', multiTabs.value[valueIndex]);
  };

  // 重新加载
  function onFresh(item?: MultiTabsType) {
    const refreshButton = 'refresh-button';
    toggleClass(true, refreshButton, document.querySelector('.rotate'));
    const { path, query } = unref(item || route);
    router.replace({
      path: '/redirect' + path,
      query: query,
    });
    setTimeout(() => {
      removeClass(document.querySelector('.rotate'), refreshButton);
    }, 600);
  }

  return { setTabPaneKey, addRouteTabs, onFresh, closeTabsRoute, removeTab };
};
