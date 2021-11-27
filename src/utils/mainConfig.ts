import { App } from 'vue'
import mutation from '../store/mutation'
import * as ElIconModules from '@element-plus/icons'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'es6-promise/auto'
import 'virtual:svg-icons-register'

// 注册element-plus icon
export const configMainElementPlus = (app: App<Element>) => {
	app.use(ElementPlus)
	const myElIconModules: any = ElIconModules
	for (const iconName in myElIconModules) {
		app.component(iconName, myElIconModules[iconName])
	}
}

// 定义全局钩子
export const configMainGlobalProperties = (app: App<Element>) => {
	// 全局定义属性
	app.config.globalProperties.foo = 'bar'
	app.config.globalProperties.$mutation = mutation
	/**
	 * 页面使用方法：
	 * import { getCurrentInstance } from 'vue';
	 * const { proxy } = getCurrentInstance()
	 * proxy.foo
	 */
}

// function transElIconName(iconName: string) {
//   return 'i' + iconName.replace(/[A-Z]/g, (match) => '-' + match.toLowerCase())
// }
