import { usePermissionStoreHook } from '@/store/modules/permission';
import { RouteRecordName, RouteRecordNormalized } from 'vue-router';
import { useTimeoutFn } from '@vueuse/core';
import { getRouteApi, RouteDataItemType } from '@/server/route';
import { router } from './index';
import { AppRouteRecordRaw } from '#/route';

const whiteList = ['login', 'error'];

// 初始化路由
export const initAsyncRoute = async (power: string) => {
  const res = await getRouteApi({ name: power });
  let routeList = [];
  if (res.data.length) {
    routeList = handleRouteList(router.options.routes, res.data);
    routeList.forEach((item) => {
      router.addRoute(item);
    });
    router.addRoute({
      path: '/',
      redirect: routeList[0].redirect,
      name: '/',
    });
    usePermissionStoreHook().setWholeMenus(routeList as AppRouteRecordRaw[]);
  }

  return routeList;
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
      const white = whiteList.indexOf(i.name);
      if (white === -1) router.removeRoute(i.name as RouteRecordName);
      else newRouteList.push(i);
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

// 通过path获取父级路径
export const getParentPaths = (path: RouteRecordName, routes: AppRouteRecordRaw[]) => {
  // 深度遍历查找
  function dfs(routes: AppRouteRecordRaw[], path: RouteRecordName, parents: string[]) {
    for (let i = 0; i < routes.length; i++) {
      const item = routes[i];
      // 找到path则返回父级path
      if (item.name === path) return parents;
      // children不存在或为空则不递归
      if (!item.children || !item.children.length) continue;
      // 往下查找时将当前path入栈
      parents.push(item.path);

      if (dfs(item.children, path, parents).length) return parents;
      // 深度遍历查找未找到时当前path 出栈
      parents.pop();
    }
    // 未找到时返回空数组
    return [];
  }

  return dfs(routes, path, []);
};

// 查找对应path的路由信息
export const findRouteByPath: (
  path: RouteRecordName,
  routes: AppRouteRecordRaw[],
) => AppRouteRecordRaw | null = (path, routes) => {
  let res = routes.find((item: { path: RouteRecordName }) => item.path == path) || null;
  if (res) {
    return res;
  } else {
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].children instanceof Array && routes[i].children?.length) {
        res = findRouteByPath(path, routes[i].children as AppRouteRecordRaw[]);
        if (res) {
          return res;
        }
      }
    }
    return null;
  }
};
