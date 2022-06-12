import { defineStore } from 'pinia';
import { store } from '@/store';
import { RouteRecordName } from 'vue-router';
import type { PermissionState } from '../types';
import { AppRouteRecordRaw } from '#/route';

export const usePermissionStore = defineStore({
  id: 'permission',
  state: (): PermissionState => ({
    // 路由菜单
    wholeMenus: [],
    // 缓存页面keepAlive
    cachePageList: [],
  }),
  actions: {
    setWholeMenus(routeList: AppRouteRecordRaw[]) {
      this.wholeMenus = [...routeList];
    },
    cacheOperate({ mode, name = '' }: { mode: string; name: RouteRecordName }) {
      switch (mode) {
        case 'add':
          this.cachePageList.push(name);
          this.cachePageList = [...new Set(this.cachePageList)];
          break;
        case 'delete':
          const delIndex = this.cachePageList.findIndex((v) => v === name);
          delIndex !== -1 && this.cachePageList.splice(delIndex, 1);
          break;
      }
    },
    // 清空缓存页面
    clearAllCachePage() {
      this.cachePageList = [];
    },
  },
});

export function usePermissionStoreHook() {
  return usePermissionStore(store);
}
