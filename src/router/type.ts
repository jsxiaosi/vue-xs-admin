import type { RouteRecordRaw, RouteMeta } from 'vue-router';
import type { RoleEnum } from '@/enum/role';

export interface Menu extends RouteMeta {
  // 菜单标题
  title: string;
  // 设置菜单图标
  icon?: string;
  // 是否显示面包屑
  breadcrumb?: boolean;
  // 是否开启缓存
  keepAlive?: boolean;
  // 权限路由白名单（只有后端路由模式才生效）
  whiteList?: boolean;
  // 路由层级（扁平化路由时自动添加）
  pathList?: number[];
  //排序位置 （子路由无效）
  position?: number;
  // 角色权限
  roles?: RoleEnum[];
}

export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta' | 'children'> {
  path: string;
  name?: string; // 命名路由
  alias?: string | Array<string>;
  alwaysShow?: boolean; //单个路由的时候是否开启折叠
  hidden?: boolean;
  children?: AppRouteRecordRaw[];
  meta?: Menu;
  basePath?: string; // 父级路由
}
