import vue from '@vitejs/plugin-vue'

// 按需加载样式配置
import { configStylePlugin } from './style'
// 主题切换配置
import { configThemePlugin } from './theme';
// svg配置
import { configSvgPlugin } from './svg';
// 国际化翻译配置
import { configI18nPlugin } from './i18n'
import { configCompressPlugin } from './compress'

export function createVitePlugins() {
  const vitePlugins = [
    vue()
  ]
  vitePlugins.push(configStylePlugin())

  vitePlugins.push(configThemePlugin())

  vitePlugins.push(configSvgPlugin())

  vitePlugins.push(configI18nPlugin())

  vitePlugins.push(configCompressPlugin('gzip',true))


  return vitePlugins
}
