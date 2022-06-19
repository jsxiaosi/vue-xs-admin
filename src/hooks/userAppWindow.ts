// import { useStore } from '@/store'
import { computed } from 'vue';
import { useAppStore } from '@/store/modules/app';
import { appConfig } from '@/store/types';

export const getAppCollapseMenu = () => {
  // const store = useStore()
  const appStore = useAppStore();
  const appConfigMode = computed<appConfig>(() => appStore.getAppConfigMode);
  return { appConfigMode };
};
