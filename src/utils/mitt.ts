import type { AppRouteRecordRaw } from '#/route';
import type { Emitter } from 'mitt';
import mitt from 'mitt';

interface Events {
  siteBarChange: {
    routeRaw: AppRouteRecordRaw;
  };
}

export const emitter: Emitter<Events> = mitt<Events>();
