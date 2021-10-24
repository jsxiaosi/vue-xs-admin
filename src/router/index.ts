import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { safeManagerRoutes } from './otherRoute'
import { AppRouteRecordRaw } from '#/route'
// import Layout from '@/layouts/index.vue'

const routes: Array<AppRouteRecordRaw> = [
	...safeManagerRoutes, // 管理端
	{
		path: '/',
		redirect: '/useradmin',
		meta: { title: '用户管理' },
	},
]

export default createRouter({
	history: createWebHistory(''),
	routes: routes as unknown as RouteRecordRaw[],
})
