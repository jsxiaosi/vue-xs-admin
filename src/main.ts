import { createApp } from 'vue'
import ElementPlus from 'element-plus'

import 'element-plus/dist/index.css'
import 'es6-promise/auto'
import 'virtual:svg-icons-register'

import { store, key } from './store'
import Router from './router'
import I18n from './locales'
import App from './App.vue'

import {
	configMainComponent,
	configMainGlobalProperties,
} from './utils/mainConfig'

const app = createApp(App)

configMainComponent(app)

configMainGlobalProperties(app)

app
	.use(store, key)
	.use(Router)
	.use(ElementPlus, {
		i18n: I18n.global.t,
	})
	.use(I18n)
	.mount('#app')
