import { getConfigInfo } from '@/server/config';
import { appConfig } from '@/store/types';
import { setStorageConfig } from '@/utils/storage';
import { App } from 'vue';

let config: appConfig = {} as appConfig;

export function getConfig(): appConfig {
  return config;
}

// 延迟进入vue，显示loding页
export async function getServerConfig(app: App): Promise<appConfig> {
  const appConfigMode = localStorage.getItem('appConfigMode');
  if (appConfigMode) {
    config = JSON.parse(appConfigMode);
  } else {
    const res = await getConfigInfo();
    if (res) {
      config = res.data;
      localStorage.setItem('appConfigMode', JSON.stringify(config));
    } else {
      throw `\npublic文件夹下无法查找到serverConfig配置文件\nUnable to find serverconfig configuration file under public folder`;
    }
  }
  setStorageConfig(config.StorageConfig);
  app.config.globalProperties.$config = getConfig();
  return config;
}
