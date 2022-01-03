// import { useStore } from '@/store'
import { computed } from 'vue';
import { useAppStore } from '@/store/modules/app';

export const getAppCollapseMenu = () => {
  // const store = useStore()
  const appStore = useAppStore();
  const isCollapseMenu = computed(() => appStore.getCollapseMenu);
  const sidebarMode = computed(() => appStore.getSidebarMode);
  return { isCollapseMenu, sidebarMode };
};
