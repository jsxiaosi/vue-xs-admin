import { merge } from 'lodash-es';
import { storeToRefs } from 'pinia';
import type { AppConfig } from '@/store/types';
import { useAppStoreHook } from '@/store/modules/app';

export function useRootSetting() {
  const appStore = useAppStoreHook();
  const { appConfigMode } = storeToRefs(appStore);

  function setAppConfigMode(config: Partial<AppConfig>) {
    appStore.setAppConfigMode(merge(appStore.appConfigMode, config));
  }

  return { appConfig: appConfigMode, setAppConfigMode };
}
