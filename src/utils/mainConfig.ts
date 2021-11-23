import * as ElIconModules from '@element-plus/icons'
import { App } from 'vue'
import mutation from '../store/mutation'

// 注册element-plus icon
export const configMainComponent = (app: App<Element>) => {
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
