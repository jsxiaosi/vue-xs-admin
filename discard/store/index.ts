import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { App, InjectionKey } from 'vue'
import { AnyObject } from '#/vuex'

export interface State {
	[key: string]: any
}

export const key: InjectionKey<Store<State>> = Symbol('vuex')

const modules: AnyObject[] = ((r) => {
	return Object.keys(r).map((key) => {
		const name: Array<string> =
			key.match(/^\.\/module\/([\s\S]+)\/index\.ts$/) || []
		return {
			name: name[1],
			module: r[key].default,
		}
	})
})(import.meta.globEager('./module/**/index.ts'))

const modulesObj: AnyObject = {}

modules.forEach((item) => {
	modulesObj[item.name] = item.module
})

const store = createStore<State>({
	modules: modulesObj,
	strict: process.env.NODE_ENV !== 'production',
})

// 热重载
if (import.meta.hot) {
	import.meta.hot?.accept(Object.keys(modulesObj), () => {
		console.log(modulesObj)
		store.hotUpdate({
			modules: modulesObj,
		})
	})
}

export const configMainStore = (app: App<Element>) => {
	app.use(store, key)
}

// 定义自己的 `useStore` 组合式函数
export function useStore() {
	return baseUseStore(key)
}
