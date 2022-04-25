/* Layout */
// import Layout from '@/layouts/index.vue'
// import AppMain from '@/layouts/components/AppMain/index.vue'
import { AppRouteRecordRaw } from '#/route';
import { t } from '@/hooks/web/useI18n';

const Layout = () => import('@/layouts/pageLayouts/index.vue');
const emptyLayouts = () => import('@/layouts/emptyLayouts/index.vue');

const safeManagerRoutes: Array<AppRouteRecordRaw> = [
  {
    path: '',
    component: Layout,
    redirect: '/welcome',
    name: 'home',
    alwaysShow: false,
    meta: { title: '', icon: 'iEL-home-filled' },
    children: [
      {
        path: 'welcome',
        name: 'RtWelcome',
        component: () => import('@/views/index/index.vue'),
        meta: { title: t('route.pathName.index') },
      },
    ],
  },
  {
    path: '/components',
    component: Layout,
    redirect: '/components/form',
    name: 'components',
    alwaysShow: true,
    meta: { title: t('route.pathName.components'), icon: 'components' },
    children: [
      {
        path: 'form',
        name: 'RtForm',
        component: () => import('@/views/components/form/index.vue'),
        meta: { title: t('route.pathName.form'), keepAlive: true },
      },
      {
        path: 'table',
        name: 'RtTable',
        component: () => import('@/views/components/table/index.vue'),
        meta: { title: t('route.pathName.table') },
      },
      {
        path: 'drag',
        name: 'RtDrag',
        component: () => import('@/views/components/drag/index.vue'),
        meta: { title: t('route.pathName.dragCpts') },
      },
      {
        path: 'count-to',
        name: 'RtCountTo',
        component: () => import('@/views/components/count-to/index.vue'),
        meta: { title: t('route.pathName.countTo') },
      },
      {
        path: 'seamless-scroll',
        name: 'RtSeamlessScroll',
        component: () => import('@/views/components/seamless-scroll/index.vue'),
        meta: { title: t('route.pathName.seamlessScroll') },
      },
    ],
  },
  {
    path: '/echarts',
    component: Layout,
    redirect: '/echarts/bar/',
    name: 'echarts',
    alwaysShow: true,
    meta: { title: t('route.pathName.echarts'), icon: 'echarts' },
    children: [
      {
        path: 'bar',
        name: 'RtBar',
        component: () => import('@/views/echarts/bar/index.vue'),
        meta: { title: t('route.pathName.echarts_bar') },
      },
      {
        path: 'map',
        name: 'RtMap',
        component: () => import('@/views/echarts/map/index.vue'),
        meta: { title: t('route.pathName.echarts_map') },
      },
    ],
  },
  {
    path: '/editor',
    component: Layout,
    redirect: '/editor/logic-flow/',
    name: 'editor',
    alwaysShow: true,
    meta: { title: t('route.pathName.editor'), icon: 'editor' },
    children: [
      {
        path: 'rich-text',
        name: 'RtRichText',
        component: () => import('@/views/editor/richText/index.vue'),
        meta: { title: t('route.pathName.editor_richText') },
      },
      {
        path: 'markdown',
        name: 'RtMarkdown',
        component: () => import('@/views/editor/markdown/index.vue'),
        meta: { title: t('route.pathName.editor_markdown') },
      },
      {
        path: 'logic-flow',
        name: 'RtLogicFlow',
        component: () => import('@/views/editor/logicFlow/index.vue'),
        meta: { title: t('route.pathName.editor_logicFlow') },
      },
    ],
  },
  {
    path: '/useradmin',
    component: Layout,
    redirect: '/useradmin/userlist/',
    name: 'useradmin',
    alwaysShow: true,
    meta: { title: t('route.pathName.userInfo'), icon: 'iEL-avatar' },
    children: [
      {
        path: 'refSyntax',
        name: 'refSyntax',
        component: () => import('@/views/useradmin/refSyntax/index.vue'),
        meta: { title: t('route.pathName.refSyntax') },
      },
      {
        path: 'userlist',
        name: 'userlist',
        component: () => import('@/views/useradmin/userlist/index.vue'),
        meta: { title: t('route.pathName.userList') },
      },
    ],
  },
  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1/',
    name: 'Nested',
    meta: {
      title: t('route.pathName.nested'),
      icon: 'iEL-grid',
    },
    children: [
      {
        path: 'menu1',
        component: emptyLayouts, // Parent router-view
        name: 'Menu1',
        redirect: '/nested/menu1/menu1-1/',
        meta: { title: t('route.pathName.nested1') },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1/index.vue'),
            name: 'Menu1-1',
            meta: { title: t('route.pathName.nested1_1') },
          },
          {
            path: 'menu1-2',
            component: emptyLayouts,
            name: 'Menu1-2',
            redirect: '/nested/menu1/menu1-2/menu1-2-1/',
            meta: { title: t('route.pathName.nested1_2') },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1/index.vue'),
                name: 'Menu1-2',
                meta: { title: t('route.pathName.nested1_2_1') },
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2/index.vue'),
                name: 'Menu1-2-2',
                meta: { title: t('route.pathName.nested1_2_2') },
              },
            ],
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3/index.vue'),
            name: 'Menu1-3',
            meta: { title: t('route.pathName.nested1_3') },
          },
        ],
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index.vue'),
        name: 'Menu2',
        meta: { title: t('route.pathName.nested2') },
      },
    ],
  },
  {
    path: '',
    component: Layout,
    redirect: '/guide',
    name: '',
    alwaysShow: false,
    meta: { title: '', icon: 'guide' },
    children: [
      {
        path: 'guide',
        name: 'RtGuide',
        component: () => import('@/views/guide/index.vue'),
        meta: { title: t('route.pathName.guide') },
      },
    ],
  },
  {
    path: '/external-link',
    component: Layout,
    children: [
      {
        path: 'https://github.com/SuperCuteXiaoSi/xiaosiAdmin',
        meta: { title: t('route.pathName.thirdParty'), icon: 'link' },
      },
    ],
  },
  {
    path: '',
    component: Layout,
    redirect: '/about',
    name: '',
    alwaysShow: false,
    meta: { title: '', icon: 'about' },
    children: [
      {
        path: 'about',
        name: 'RtAbout',
        component: () => import('@/views/about/index.vue'),
        meta: { title: t('route.pathName.about') },
      },
    ],
  },
];

export default safeManagerRoutes;
