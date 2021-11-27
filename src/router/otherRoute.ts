/* Layout */
import Layout from '@/layouts/index.vue'
import { AppRouteRecordRaw } from '#/route'
import { t } from '@/hooks/useI18n'

export const safeManagerRoutes: Array<AppRouteRecordRaw> = [
	{
		path: '/useradmin',
		component: Layout,
		redirect: '/useradmin/userlist/',
		name: '用户管理',
		alwaysShow: true,
		meta: { title: t('route.userInfo'), icon: 'iEL-avatar' },
		children: [
			{
				path: 'userlist',
				name: 'userlist',
				component: () => import('@/views/useradmin/userlist/index.vue'),
				meta: { title: t('route.userList'), icon: 'daosanjiao' },
			},
			{
				path: 'index',
				name: 'index',
				component: () => import('@/views/index/index.vue'),
				meta: { title: t('route.userDateil'), icon: 'daosanjiao' },
			},
		],
	},
	{
		path: '/external-link',
		component: Layout,
		children: [
			{
				path: 'https://gitlab.com/SuperCuteXiaoSi/vite-vue3-template',
				meta: { title: t('route.thirdParty'), icon: 'iEL-operation' },
			},
		],
	},
	// {
	// 	path: '/date',
	// 	component: Layout,
	// 	redirect: '/date/dateList/',
	// 	name: 'date',
	// 	alwaysShow: true,
	// 	meta: { title: '详情管理', icon: 'el-icon-user-solid' },
	// 	children: [
	// 		{
	// 			path: 'dateList',
	// 			name: 'dateList',
	// 			component: () => import('@/views/useradmin/userlist/index.vue'),
	// 			meta: { title: '详情列表', icon: 'el-icon-s-tools' },
	// 		},
	// 	],
	// },
	// {
	// 	path: '/info',
	// 	name: 'info',
	// 	component: Layout,
	// 	children: [
	// 		{
	// 			path: 'infoList',
	// 			name: 'infoList',
	// 			component: () => import('@/views/index/index.vue'),
	// 			meta: { title: '首页列表', icon: 'el-icon-s-tools' },
	// 		},
	// 	],
	// 	meta: { title: '首页列表', icon: 'el-icon-s-tools' },
	// },
]
