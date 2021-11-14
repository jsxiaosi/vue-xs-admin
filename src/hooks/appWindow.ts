import { useStore } from '@/store'
import { computed } from 'vue'

export const getAppCollapseMenu = () => {
	const store = useStore()
	const isCollapseMenu = computed(() => store.getters.collapseMenu)
	return isCollapseMenu
}
