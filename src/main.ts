import { createApp } from 'vue'

import App from './App.vue'

import {
	configMainElementPlus,
	configMainGlobalProperties,
	getServerConfig,
} from './utils/mainConfig'
import { configMainStore } from './store'
import { configMainI18n } from './locales'
import { configMainRouter } from './router'

const app = createApp(App)

getServerConfig().then((_config) => {
	// 全局钩子
	configMainGlobalProperties(app)

	// Vuex
	configMainStore(app)

	// 路由
	configMainRouter(app)

	// 国际化
	configMainI18n(app)

	// ElementPlus
	configMainElementPlus(app)

	app.mount('#app')
})
