/**
 * 动态引入组件库样式
 * https://github.com/anncwb/vite-plugin-style-import/blob/main/README.zh_CN.md
 */
// import styleImport from 'vite-plugin-style-import';
import type { Plugin } from 'vite';

export function configStylePlugin(): Plugin | Plugin[] {
  // const options = {
  //   // libs: [
  //   //   {
  //   //     libraryName: 'element-plus',
  //   //     esModule: true,
  //   //     ensureStyleFile: true,
  //   //     resolveStyle: (name: any) => {
  //   //       name = name.slice(3);
  //   //       // 使用element scss样式
  //   //       return `element-plus/packages/theme-chalk/src/${name}.scss`;
  //   //       // 使用element css样式
  //   //       // return `element-plus/lib/theme-chalk/${name}.css`;
  //   //     },
  //   //     // resolveComponent: (name: any) => {
  //   //     // 	console.log(name)
  //   //     // 	return `element-plus/lib/${name}`
  //   //     // },
  //   //   },
  //   // ],
  // };
  // const plugin: Plugin[] = [styleImport(options)];
  const plugin: Plugin[] = [];
  return plugin;
}
