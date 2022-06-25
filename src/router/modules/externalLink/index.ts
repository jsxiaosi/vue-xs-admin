import { AppRouteRecordRaw } from '#/route';
import { t } from '@/hooks/web/useI18n';

const externalLink: AppRouteRecordRaw[] = [
  {
    path: '/external-link',
    // component: Layout,
    name: 'RtExternal',
    meta: { title: t('route.pathName.thirdParty'), icon: 'link', position: 9 },
    children: [
      {
        path: 'https://github.com/SuperCuteXiaoSi/xiaosiAdmin',
        name: 'RtGitLink',
        meta: { title: t('route.pathName.thirdParty'), icon: 'link' },
      },
    ],
  },
];

export default externalLink;
