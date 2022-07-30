import { defineStore } from 'pinia';
import { getConfig } from '@/config';
import { store } from '@/store';
import type { AppState, appConfig } from '../types';

export const localAppConfig: appConfig = getConfig();

const useAppStore = defineStore({
  id: 'app',
  state: (): AppState => ({
    appConfigMode: localAppConfig,
  }),
  getters: {
    getAppConfigMode(): appConfig {
      return this.appConfigMode;
    },
  },
  actions: {
    setAppConfigMode(appConfigMode: appConfig): void {
      localStorage.setItem('appConfigMode', JSON.stringify(appConfigMode));
      this.appConfigMode = appConfigMode;
    },
  },
});

export function useAppStoreHook() {
  return useAppStore(store);
}
