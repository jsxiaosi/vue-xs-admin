import { AppRouteRecordRaw } from '#/route';
import { t } from '@/hooks/web/useI18n';

const error: AppRouteRecordRaw[] = [
  {
    path: '/error',
    redirect: '/error/404',
    name: 'error',
    meta: {
      title: 'route.pathName.error',
      icon: 'iEL-remove-filled',
      whiteList: true,
      position: 9,
    },
    children: [
      {
        path: '404',
        name: '404',
        component: () => import('@/views/error/404.vue'),
        meta: { title: t('route.pathName.error404') },
      },
    ],
  },
];

export default error;
