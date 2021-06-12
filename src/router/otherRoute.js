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
    path: '/deta',
    component: Layout,
    redirect: '/deta/datelist/',
    name: '客户',
    alwaysShow: true,
    meta: { title: '客户', icon: 'el-icon-user-solid' },
    children: [
      {
        path: 'datelist',
        name: 'datelist',
        component: () => import('@/views/useradmin/userlist/index.vue'),
        meta: { title: '客户列表', icon: 'el-icon-s-tools' }
      },
      {
        path: 'dateindex',
        name: '客户详情',
        component: () => import('@/views/index/index.vue'),
        meta: { title: '客户详情', icon: 'el-icon-phone-outline' }
      }
    ]
  }
]


