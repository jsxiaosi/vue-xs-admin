import { AppRouteRecordRaw } from '#/route';
import { findRouteByPath } from '@/router/utils';
import { emitter } from '@/utils/mitt';
import { useRouter } from 'vue-router';

export const useSelectMenu = () => {
  const router = useRouter().options.routes as AppRouteRecordRaw[];
  const selectMenu = (path: string) => {
    const findRoute = findRouteByPath(path, router[0]?.children || []);
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

  return { selectMenu };
};
