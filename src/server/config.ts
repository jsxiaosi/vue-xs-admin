import { appConfig } from '@/store/types';
import { deffHttp } from '@/utils/axios';

enum Api {
  ROUTE_CONFIG_INFO = '/serverConfig.json',
}

export const getConfigInfo = () => deffHttp.get<appConfig>({ url: Api.ROUTE_CONFIG_INFO });
