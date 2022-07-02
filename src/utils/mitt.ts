import { AppRouteRecordRaw } from '#/route';
import type { Emitter } from 'mitt';
import mitt from 'mitt';

type Events = {
  siteBarChange: {
    routeRow: AppRouteRecordRaw;
  };
};

export const emitter: Emitter<Events> = mitt<Events>();
