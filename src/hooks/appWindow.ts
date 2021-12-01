import { useStore } from '@/store'
import { computed } from 'vue'

export const getAppCollapseMenu = () => {
	const store = useStore()
	const isCollapseMenu = computed<boolean>(() => store.getters.collapseMenu)
	const sidebarMode = computed<string>(() => store.getters.sidebarMode)
	console.log(sidebarMode)
	return { isCollapseMenu, sidebarMode }
}
