import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { App } from 'vue';
import { configRouteList } from './modules';
import { handleAliveRoute, initAsyncRoute } from './utils';
import { usePermissionStoreHook } from '@/store/modules/permission';

const { whiteRouteModulesList, routeModulesList } = configRouteList();

// 在导航栏上的路由
export const sidebarRouteList = routeModulesList;

export const router = createRouter({
  history: createWebHistory(''),
  routes: whiteRouteModulesList as unknown as RouteRecordRaw[],
});

export const configMainRouter = async (app: App<Element>) => {
  app.use(router);
  await router.isReady();
};

// 路由守卫
router.beforeEach((to, from, next) => {
  if (to.meta?.keepAlive) {
    const newMatched = to.matched;
    handleAliveRoute(newMatched, 'add');
    // 页面整体刷新
    if (from.name === undefined || from.name === 'Redirect') {
      handleAliveRoute(newMatched);
    }
  }

  const userInfo = localStorage.getItem('userInfo');
  if (userInfo) {
    if (from.name) {
      // 已登陆状态不允许去登录页
      if (to.path === '/login') {
        next({
          path: from.path,
          query: from.query,
        });
      } else {
        next();
      }
    } else {
      if (usePermissionStoreHook().wholeMenus.length === 0) {
        initAsyncRoute(JSON.parse(userInfo).power || '').then((res) => {
          if (res.length) {
            router.push({
              path: to.path,
              query: to.query,
            });
          } else {
            localStorage.removeItem('userInfo');
            router.push('login');
          }
        });
      } else {
        next();
      }
    }
  } else {
    if (to.path !== '/login') {
      next({ path: '/login' });
    } else {
      next();
    }
  }
});
