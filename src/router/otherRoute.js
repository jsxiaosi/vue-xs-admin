/* Layout */
import Layout from '@/layouts/index.vue'



export const safeManagerRoutes = [
  {
    path: '/useradmin',
    component: Layout,
    redirect: '/useradmin/userlist/',
    name: '用户管理',
    alwaysShow: true,
    meta: { title: '用户管理', icon: 'el-icon-user-solid' },
    children: [
      {
        path: 'userlist',
        name: 'userlist',
        component: () => import('@/views/useradmin/userlist/index.vue'),
        meta: { title: '用户列表', icon: 'el-icon-s-tools' }
      },
      {
        path: 'index',
        name: 'index',
        component: () => import('@/views/index/index.vue'),
        meta: { title: 'index', icon: 'el-icon-phone-outline' }
      }
    ]
  },
  {
    path: '/date',
    component: Layout,
    redirect: '/date/dateList/',
    name: 'date',
    alwaysShow: true,
    meta: { title: '详情管理', icon: 'el-icon-user-solid' },
    children: [
      {
        path: 'dateList',
        name: 'dateList',
        component: () => import('@/views/useradmin/userlist/index.vue'),
        meta: { title: '详情列表', icon: 'el-icon-s-tools' }
      }
    ]
  },
  {
    path: '/info',
    name: 'info',
    component: Layout,
    children: [
      {
        path: 'infoList',
        name: 'infoList',
        component: () => import('@/views/index/index.vue'),
        meta: { title: '首页列表', icon: 'el-icon-s-tools' }
      }
    ],
    meta: { title: '首页列表', icon: 'el-icon-s-tools' }
  }
]


