import { createApp } from 'vue'
import ElementPlus from 'element-plus'

import 'element-plus/dist/index.css'
import 'es6-promise/auto'
import 'virtual:svg-icons-register'

import Store from './store'
import Router from './router'
import I18n from './locales'
import App from './App.vue'

const app = createApp(App)

// 全局定义属性
app.config.globalProperties.foo = 'bar'
/**
 * 页面使用方法：
 * import { getCurrentInstance } from 'vue';
 * const { proxy } = getCurrentInstance()
 * proxy.foo
 */

app
	.use(Store)
	.use(Router)
	.use(ElementPlus, {
		i18n: I18n.global.t,
	})
	.use(I18n)
	.mount('#app')
