import mitt from 'mitt';
import type { AppRouteRecordRaw } from '@/router/type';
import type { Emitter } from 'mitt';

interface Events {
  siteBarChange: {
    routeRaw: AppRouteRecordRaw;
  };
  [key: string | symbol]: Recordable;
}

export const emitter: Emitter<Events> = mitt<Events>();
