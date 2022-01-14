import { defineStore } from 'pinia';
import { store } from '@/store';
import { appConfig } from '#/piniaStore';

interface AppState {
  appConfigMode: appConfig;
}

let localAppConfig: appConfig = {
  collapseMenu: false,
  sidebarMode: 'vertical',
  themeMode: 'day',
  locale: 'zh-ch',
};

export const useAppStore = defineStore({
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

export const setWindowAppConfig = (appConfig: appConfig) => {
  if (appConfig) localAppConfig = appConfig;
};
