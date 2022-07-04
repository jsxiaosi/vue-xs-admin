import vue from '@vitejs/plugin-vue';

import vueJsx from '@vitejs/plugin-vue-jsx';

import type { Plugin, ConfigEnv } from 'vite';

// 按需加载样式配置
import { configStylePlugin } from './style';
// svg配置
import { configSvgPlugin } from './svg';
// 压缩
import { configCompressPlugin } from './compress';
// mock
import { configMockPlugin } from './mock';
// pwd
import { configPwaPlugin } from './pwa';
// 按需element样式
import ElementPlus from 'unplugin-element-plus/vite';
// setip使用Options API
import DefineOptions from 'unplugin-vue-define-options/vite';

// eslint
// import { configEsLinterPlugin } from './eslinter'

export function createVitePlugins(isBuild = false, _configEnv: ConfigEnv) {
  const vitePlugins: (Plugin | Plugin[])[] = [
    vue({
      reactivityTransform: true,
    }),
  ];

  vitePlugins.push(vueJsx());

  vitePlugins.push(configStylePlugin());

  vitePlugins.push(configSvgPlugin());

  vitePlugins.push(configCompressPlugin('gzip', true));

  vitePlugins.push(configMockPlugin(isBuild));

  vitePlugins.push(configPwaPlugin());

  vitePlugins.push(DefineOptions());

  /* 会重复引入与组件数量相等的主题变量 */
  vitePlugins.push(
    ElementPlus({
      useSource: true,
    }),
  );

  // 使用此插件会导致vite启动变慢 100ms左右
  // vitePlugins.push(configEsLinterPlugin(configEnv))

  return vitePlugins;
}
