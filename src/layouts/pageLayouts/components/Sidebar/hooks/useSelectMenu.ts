import { sidebarRouteList } from '@/router';
import { findRouteByPath } from '@/router/utils';
import { emitter } from '@/utils/mitt';

export const useSelectMenu = () => {
  const selectMenu = (path: string) => {
    const findRoute = findRouteByPath(path, sidebarRouteList);
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
