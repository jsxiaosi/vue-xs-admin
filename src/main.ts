import { createApp } from 'vue'
import ElementPlus from 'element-plus'

import 'element-plus/dist/index.css'
import 'es6-promise/auto'
import 'virtual:svg-icons-register'

import { store, key } from './store'
import mutation from './store/mutation'
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

console.log(mutation)
app.config.globalProperties.$mutation = mutation

app
	.use(store, key)
	.use(Router)
	.use(ElementPlus, {
		i18n: I18n.global.t,
	})
	.use(I18n)
	.mount('#app')
