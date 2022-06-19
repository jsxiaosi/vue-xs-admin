import { AppRouteRecordRaw } from '#/route';
import { RouteRecordName } from 'vue-router';

export type AppState = {
  appConfigMode: appConfig;
};

export type SidebarMode = 'vertical' | 'horizontal' | 'blend';

export interface appConfig {
  collapseMenu: boolean;
  sidebarMode: SidebarMode;
  themeMode: string;
  locale: string;
}

export type PermissionState = {
  wholeMenus: AppRouteRecordRaw[];
  cachePageList: RouteRecordName[];
};
