import { deffHttp } from '@/utils/axios';
import type { AppConfig } from '@/store/types';

enum Api {
  ROUTE_CONFIG_INFO = '/vue-xs-admin/serverConfig.json',
}

export const getConfigInfo = () => deffHttp.get<AppConfig>({ url: Api.ROUTE_CONFIG_INFO });
