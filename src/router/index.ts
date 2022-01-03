import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { App } from 'vue';
import { AppRouteRecordRaw } from '#/route';
import routeModuleList from './modules';

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
  const userInfo = localStorage.getItem('userInfo');
  if (userInfo) {
    next();
  } else {
    if (to.path !== '/login') {
      next({ path: '/login' });
    } else {
      next();
    }
  }
});
