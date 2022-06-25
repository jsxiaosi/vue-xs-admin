import { t } from '@/hooks/web/useI18n';

const Layout = () => import('@/layouts/pageLayouts/index.vue');

export default [
  {
    path: '/',
    component: Layout,
    name: 'RtRoot',
    meta: { title: t('route.pathName.index'), icon: 'iEL-home-filled', whiteList: true },
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login',
  },
];
