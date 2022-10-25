import type { RouteRecordName, _RouteLocationBase } from 'vue-router';
import type { StorageConfig } from '#/global';
import type { AppRouteRecordRaw } from '#/route';

export interface AppState {
  appConfigMode: AppConfig;
}

export type SidebarMode = 'vertical' | 'horizontal' | 'blend';

export interface AppConfig {
  title: string;
  collapseMenu: boolean;
  sidebarMode: SidebarMode;
  themeMode: string;
  locale: string;
  StorageConfig: StorageConfig;
  drawerSidebar?: boolean;
  primaryColor: string;
  greyMode: boolean;
  colorWeaknessMode: boolean;
}

export type MultiTabsType = Omit<
  _RouteLocationBase,
  'fullPath' | 'hash' | 'params' | 'redirectedFrom'
>;
export interface PermissionState {
  wholeMenus: AppRouteRecordRaw[];
  cachePageList: RouteRecordName[];
  multiTabs: MultiTabsType[];
}
