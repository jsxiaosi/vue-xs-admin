import { AppRouteRecordRaw } from '#/route';
import { findRouteByPath } from '@/router/utils';
import { usePermissionStoreHook } from '@/store/modules/permission';
import { emitter } from '@/utils/mitt';
import { useRouter } from 'vue-router';

export const useNavSideBar = () => {
  const router = (useRouter().options.routes.find((i) => i.path === '/') ||
    []) as AppRouteRecordRaw;

  const selectMenu = (path: string) => {
    const findRoute = findRouteByPath(path, router.children || []);
    if (findRoute) {
      if (findRoute.redirect && findRoute.children && findRoute.children.length) {
        selectMenu(findRoute.children[0].path);
        return;
      }
      emitter.emit('siteBarChange', {
        routeRaw: findRoute,
      });
    }
  };

  const logout = () => {
    usePermissionStoreHook().handleRemoveMultiTabs();
  };

  return { selectMenu, logout };
};
