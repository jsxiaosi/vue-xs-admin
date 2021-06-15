import styleImport from 'vite-plugin-style-import'

export function configStylePlugin(){
  const options = {
    libs: [{
      libraryName: 'element-plus',
      esModule: true,
      ensureStyleFile: true,
      resolveStyle: (name) => {
        name = name.slice(3)
        // 使用element scss样式
        return `element-plus/packages/theme-chalk/src/${name}.scss`;
        // 使用element css样式
        // return `element-plus/lib/theme-chalk/${name}.css`;
      },
      resolveComponent: (name) => {
        return `element-plus/lib/${name}`;
      },
    }]
  }
  const plugin = [
    styleImport(options)
  ]
  return plugin
}