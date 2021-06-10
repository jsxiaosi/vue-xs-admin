/* Layout */
import Layout from '@/layouts/index.vue'



export const safeManagerRoutes = [
  {
    path: '/useradmin',
    component: Layout,
    redirect: '/useradmin/userlist/',
    name: '用户管理',
    alwaysShow:true,
    meta: { title: '用户管理', icon: 'getdata' },
    children: [
      {
        path: 'userlist',
        name: 'userlist',
        component: () => import('@/views/useradmin/userlist/index.vue'),
        meta: { title: '用户列表' }
      },
      {
        path: 'index',
        name: 'index',
        component: () => import('@/views/index/index.vue'),
        meta: { title: 'index' }
      }
    ]
  }
]


