import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { App } from 'vue';
import { AppRouteRecordRaw } from '#/route';
import routeModuleList from './modules';
import { handleAliveRoute, initAsyncRoute } from './utils';
import { usePermissionStoreHook } from '@/store/modules/permission';

const routes: Array<AppRouteRecordRaw> = [
  ...routeModuleList, // 管理端
  {
    path: '/',
    // redirect: routeModuleList[0].path,
    name: '/',
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login',
  },
];
// console.log(routes)
export const router = createRouter({
  history: createWebHistory(''),
  routes: routes as unknown as RouteRecordRaw[],
});

export const configMainRouter = (app: App<Element>) => {
  app.use(router);
};

// 路由守卫
router.beforeEach((to, from, next) => {
  if (to.meta?.keepAlive) {
    const newMatched = to.matched;
    handleAliveRoute(newMatched, 'add');
    // 页面整体刷新
    if (from.name === undefined || from.name === 'redirect') {
      handleAliveRoute(newMatched);
    }
  }

  const userInfo = localStorage.getItem('userInfo');
  if (userInfo) {
    if (from.name) {
      // 已登陆状态不允许去登录页
      if (to.path === '/login') {
        next({ path: from.path });
      } else {
        next();
      }
    } else {
      if (usePermissionStoreHook().wholeMenus.length === 0) {
        initAsyncRoute(JSON.parse(userInfo).power || '').then((res) => {
          if (res.length) {
            router.push(to.path);
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
