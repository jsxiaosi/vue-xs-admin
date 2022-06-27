// import { useStore } from '@/store'
import { computed } from 'vue';
import { useAppStoreHook } from '@/store/modules/app';
import { appConfig } from '@/store/types';

export const getAppCollapseMenu = () => {
  // const store = useStore()
  const appStore = useAppStoreHook();
  const appConfigMode = computed<appConfig>(() => appStore.getAppConfigMode);
  return { appConfigMode };
};
