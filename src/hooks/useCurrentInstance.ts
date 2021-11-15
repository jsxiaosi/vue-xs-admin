import { ComponentInternalInstance, getCurrentInstance } from 'vue'

export function useCurrentInstance() {
	const { appContext } = getCurrentInstance() as ComponentInternalInstance
	const globalProperties = appContext.config.globalProperties
	return {
		globalProperties,
	}
}

export function getProxy() {
	const { proxy } = getCurrentInstance() as ComponentInternalInstance
	return {
		proxy,
	}
}