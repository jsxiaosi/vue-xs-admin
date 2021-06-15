import vue from '@vitejs/plugin-vue'

import { configStylePlugin } from './style'
import { configThemePlugin } from './theme';
import { configSvgPlugin } from './svg';

export function createVitePlugins() {
  const vitePlugins = [
    vue()
  ]
  vitePlugins.push(configStylePlugin())
  vitePlugins.push(configThemePlugin())
  vitePlugins.push(configSvgPlugin())
  
  return vitePlugins
}
