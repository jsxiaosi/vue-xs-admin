import { AppRouteRecordRaw } from '#/route';
import { RouteRecordName } from 'vue-router';

export type AppState = {
  appConfigMode: appConfig;
};

export interface appConfig {
  collapseMenu: boolean;
  sidebarMode: string;
  themeMode: string;
  locale: string;
}

export type PermissionState = {
  wholeMenus: AppRouteRecordRaw[];
  cachePageList: RouteRecordName[];
};
