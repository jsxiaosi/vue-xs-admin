import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { safeManagerRoutes } from './otherRoute'
import { AppRouteRecordRaw } from '#/route'
import { App } from 'vue'
// import Layout from '@/layouts/index.vue'

const routes: Array<AppRouteRecordRaw> = [
	...safeManagerRoutes, // 管理端
	{
		path: '/',
		redirect: '/useradmin',
		meta: { title: '用户管理' },
	},
	{
		path: '/404',
		meta: { title: '404' },
	},
]

const route = createRouter({
	history: createWebHistory(''),
	routes: routes as unknown as RouteRecordRaw[],
})

export const configMainRouter = (app: App<Element>) => {
	app.use(route)
}
