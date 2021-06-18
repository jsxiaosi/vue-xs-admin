import vue from '@vitejs/plugin-vue'

// 按需加载样式配置
import { configStylePlugin } from './style'
// 主题切换配置
import { configThemePlugin } from './theme'
// svg配置
import { configSvgPlugin } from './svg'
// 压缩
import { configCompressPlugin } from './compress'

// import viteESLint from '@ehutch79/vite-eslint'

export function createVitePlugins () {
  const vitePlugins = [vue()]
  vitePlugins.push(configStylePlugin())

  vitePlugins.push(configThemePlugin())

  vitePlugins.push(configSvgPlugin())

  vitePlugins.push(configCompressPlugin('gzip', true))

  // vitePlugins.push(viteESLint())
  return vitePlugins
}
