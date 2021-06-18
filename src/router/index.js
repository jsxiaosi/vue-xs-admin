import { createRouter, createWebHistory } from 'vue-router'
import { safeManagerRoutes } from './otherRoute'
// import Layout from '@/layouts/index.vue'

const routes = [
  ...safeManagerRoutes, // 管理端
  {
    path: '/',
    redirect: '/useradmin',
    meta: { title: '用户管理' }
  }

]

export default createRouter({
  history: createWebHistory(''),
  routes
})
