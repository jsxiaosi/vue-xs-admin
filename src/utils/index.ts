import { App } from 'vue';
import 'virtual:svg-icons-register';
import { setWindowAppConfig } from '@/store/modules/app';

// 定义全局钩子
export const configMainGlobalProperties = (app: App<Element>): void => {
  // 全局定义属性
  app.config.globalProperties.foo = 'bar';
  /**
   * 页面使用方法：
   * import { getCurrentInstance } from 'vue';
   * const { proxy } = getCurrentInstance()
   * proxy.foo
   */
};

// 延迟进入vue，显示loding页
export const getServerConfig = (): Promise<string> => {
  const appConfigMode = localStorage.getItem('appConfigMode');
  if (appConfigMode) {
    setWindowAppConfig(JSON.parse(appConfigMode));
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('');
    }, 0);
  });
};

export const withInstall = <T>(component: T, alias?: string) => {
  const comp = component as any;
  comp.install = (app: App) => {
    app.component(comp.name || comp.displayName, component);
    if (alias) {
      app.config.globalProperties[alias] = component;
    }
  };
  return component as T & Plugin;
};

export const converToArray = (number: number): Array<Number> =>
  [...`${number}`].map((el) => parseInt(el));
