import { defineStore } from 'pinia';
import { store } from '@/store';
import type { AppState, appConfig } from '../types';

let localAppConfig: appConfig = {
  collapseMenu: false,
  sidebarMode: 'vertical',
  themeMode: 'day',
  locale: 'zh-ch',
};

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
      console.log(appConfigMode);
      localStorage.setItem('appConfigMode', JSON.stringify(appConfigMode));
      this.appConfigMode = appConfigMode;
    },
  },
});

export function useAppStoreHook() {
  return useAppStore(store);
}

export const setWindowAppConfig = (appConfig: appConfig) => {
  if (appConfig) localAppConfig = appConfig;
};
