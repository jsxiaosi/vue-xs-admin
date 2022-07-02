import { AppRouteRecordRaw } from '#/route';
import { t } from '@/hooks/web/useI18n';

const detailsPage: AppRouteRecordRaw[] = [
  {
    path: '/details_page',
    name: 'RtDetailsPage',
    meta: { title: t('route.pathName.detailsPage'), icon: 'iEL-management', position: 8 },
    component: () => import('@/views/details-page/index.vue'),
    children: [
      {
        path: 'details_info',
        name: 'RtDetailsInfo',
        hidden: true,
        meta: {
          title: t('route.pathName.detailsPage'),
          icon: 'iEL-management',
          whiteList: true,
          keepAlive: true,
        },
        component: () => import('@/views/details-page/datails-info/index.vue'),
      },
    ],
  },
];

export default detailsPage;
