import { t } from '@/hooks/web/useI18n';
import type { AppRouteRecordRaw } from '@/router/type';

const system: AppRouteRecordRaw[] = [
  {
    path: '/system',
    redirect: '/system/power',
    name: 'RtSystem',
    meta: { title: 'route.pathName.system', icon: 'guide', position: 7 },
    children: [
      {
        path: 'power',
        name: 'RtPower',
        component: () => import('@/views/system/power/index.vue'),
        meta: { title: t('route.pathName.power'), keepAlive: true },
      },
    ],
  },
];

export default system;
