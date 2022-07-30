import { StorageConfig } from '#/global';
import { AppRouteRecordRaw } from '#/route';
import { RouteRecordName, _RouteLocationBase } from 'vue-router';

export type AppState = {
  appConfigMode: appConfig;
};

export type SidebarMode = 'vertical' | 'horizontal' | 'blend';

export interface appConfig {
  title: string;
  collapseMenu: boolean;
  sidebarMode: SidebarMode;
  themeMode: string;
  locale: string;
  StorageConfig: StorageConfig;
}

export type MultiTabsType = Omit<
  _RouteLocationBase,
  'fullPath' | 'hash' | 'params' | 'redirectedFrom'
>;
export type PermissionState = {
  wholeMenus: AppRouteRecordRaw[];
  cachePageList: RouteRecordName[];
  multiTabs: MultiTabsType[];
};
