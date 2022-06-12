import { usePermissionStoreHook } from '@/store/modules/permission';
import { RouteRecordName, RouteRecordNormalized } from 'vue-router';
import { useTimeoutFn } from '@vueuse/core';
import { getRouteApi, RouteDataItemType } from '@/server/route';
import { router } from './index';
import { AppRouteRecordRaw } from '#/route';

// 初始化路由
export const initAsyncRoute = async (power: string) => {
  const res = await getRouteApi({ name: power });
  const routeList = handleRouteList(router.options.routes, res.data);
  router.addRoute({
    path: '/',
    redirect: routeList[1].redirect,
    name: '/',
  });

  usePermissionStoreHook().setWholeMenus(routeList as AppRouteRecordRaw[]);
  return res;
};

// 处理路由列表
const handleRouteList = (routerList: any[], dataRouter: RouteDataItemType[]) => {
  const newRouteList: any[] = [];
  routerList.forEach((i) => {
    const rItem = dataRouter.find((r) => r.name === i.name);
    if (rItem) {
      if (rItem.children && rItem.children.length) {
        const children = handleRouteList(i.children, rItem.children);
        i.children = children;
        if (children) newRouteList.push(i);
      } else {
        newRouteList.push(i);
      }
    } else {
      // 这里需要重置不在接口返回的路由，否则输入地址还是可以打开页面
      router.removeRoute(i.name as RouteRecordName);
    }
  });
  return newRouteList;
};

// 处理缓存路由（添加、删除、刷新）
export const handleAliveRoute = (matched: RouteRecordNormalized[], mode?: string) => {
  const name: RouteRecordName = matched[matched.length - 1].name as RouteRecordName;
  switch (mode) {
    case 'add':
      matched.forEach((v: RouteRecordNormalized) => {
        usePermissionStoreHook().cacheOperate({ mode: 'add', name: v.name as RouteRecordName });
      });
      break;
    case 'delete':
      usePermissionStoreHook().cacheOperate({
        mode: 'delete',
        name,
      });
      break;
    default:
      usePermissionStoreHook().cacheOperate({
        mode: 'delete',
        name,
      });
      useTimeoutFn(() => {
        matched.forEach((v: RouteRecordNormalized) => {
          usePermissionStoreHook().cacheOperate({ mode: 'add', name: v.name as RouteRecordName });
        });
      }, 100);
  }
};
