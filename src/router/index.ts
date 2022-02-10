import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { App } from 'vue';
import { AppRouteRecordRaw } from '#/route';
import routeModuleList from './modules';
import { handleAliveRoute } from './utils';

const routes: Array<AppRouteRecordRaw> = [
  ...routeModuleList, // 管理端
  {
    path: '/',
    redirect: routeModuleList[0].path,
    meta: routeModuleList[0].meta,
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login',
    // meta: { title: 'login' },
  },
];
// console.log(routes)
const route = createRouter({
  history: createWebHistory(''),
  routes: routes as unknown as RouteRecordRaw[],
});

export const configMainRouter = (app: App<Element>) => {
  app.use(route);
};

route.beforeEach((to, _from, next) => {
  if (to.meta?.keepAlive) {
    const newMatched = to.matched;
    handleAliveRoute(newMatched, 'add');
    // 页面整体刷新和点击标签页刷新
    if (_from.name === undefined || _from.name === 'redirect') {
      handleAliveRoute(newMatched);
    }
  }

  const userInfo = localStorage.getItem('userInfo');
  if (userInfo) {
    if (to.path === '/login') next(_from.path);
    else next();
  } else {
    if (to.path !== '/login') {
      next({ path: '/login' });
    } else {
      next();
    }
  }
});
