import { defineStore } from 'pinia';
import { store } from '@/store';

interface AppState {
  collapseMenu: boolean;
  sidebarMode: string;
}

export const useAppStore = defineStore({
  id: 'app',
  state: (): AppState => ({
    collapseMenu: false,
    sidebarMode: 'vertical',
  }),
  getters: {
    getCollapseMenu(): boolean {
      return this.collapseMenu;
    },
    getSidebarMode(): string {
      return this.sidebarMode;
    },
  },
  actions: {
    setCollapseMenu(collapseMenu: boolean): void {
      this.collapseMenu = collapseMenu;
    },
    setSidebarMode(sidebarMode: string): void {
      this.sidebarMode = sidebarMode;
    },
  },
});

export function useAppStoreHook() {
  return useAppStore(store);
}
