import { sidebarRouteList } from '@/router';
import { findRouteByPath } from '@/router/utils';
import { emitter } from '@/utils/mitt';

export const useSelectMenu = () => {
  const selectMenu = (path: string) => {
    const findRoute = findRouteByPath(path, sidebarRouteList);
    if (findRoute) {
      emitter.emit('siteBarChange', {
        routeRow: findRoute,
      });
    }
  };

  return { selectMenu };
};
