import { App } from 'vue'
import * as ElIconModules from '@element-plus/icons'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'es6-promise/auto'
import 'virtual:svg-icons-register'

// 注册element-plus icon
export const configMainElementPlus = (app: App<Element>): void => {
	app.use(ElementPlus)
	const myElIconModules: any = ElIconModules
	for (const iconName in myElIconModules) {
		app.component(transElIconName(iconName), myElIconModules[iconName])
	}
}

const transElIconName = (iconName: string): string => {
	return (
		'iEL' + iconName.replace(/[A-Z]/g, (match) => '-' + match.toLowerCase())
	)
}

// 定义全局钩子
export const configMainGlobalProperties = (app: App<Element>): void => {
	// 全局定义属性
	app.config.globalProperties.foo = 'bar'
	/**
	 * 页面使用方法：
	 * import { getCurrentInstance } from 'vue';
	 * const { proxy } = getCurrentInstance()
	 * proxy.foo
	 */
}

// 延迟进入vue，显示loding页
export const getServerConfig = (): Promise<string> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve('')
		}, 0)
	})
}
