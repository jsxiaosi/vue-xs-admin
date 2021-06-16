// https://github.com/GitOfZGT/vite-plugin-theme-preprocessor

import path from 'path'
import themePreprocessorPlugin, {
  getModulesScopeGenerater,
} from "@zougt/vite-plugin-theme-preprocessor";

export function configThemePlugin() {
  let options = {
    scss: {
      multipleScopeVars: [
        {
          scopeName: "variables-theme-day",
          path: path.resolve("src/styles/variables-day.scss"),
        },
        {
          scopeName: "variables-theme-dark",
          path: path.resolve("src/styles/variables-dark.scss"),
        },
      ],
      // 默认取 multipleScopeVars[0].scopeName
      defaultScopeName: "",
      // 在生产模式是否抽取独立的主题css文件，extract为true以下属性有效
      extract: false,
      // 独立主题css文件的输出路径，默认取 viteConfig.build.assetsDir 相对于 (viteConfig.build.outDir)
      outputDir: "",
      // 会选取defaultScopeName对应的主题css文件在html添加link
      // themeLinkTagId: "theme-link-tag",
      // // "head"||"head-prepend" || "body" ||"body-prepend"
      // themeLinkTagInjectTo: "head",
      // 是否对抽取的css文件内对应scopeName的权重类名移除
      removeCssScopeName: false,
      // 可以自定义css文件名称的函数
      customThemeCssFileName: (scopeName) => scopeName,
    },
    // less: {
    //   multipleScopeVars: [
    //     {
    //       scopeName: "theme-default",
    //       path: path.resolve("src/theme/default-vars.less"),
    //     },
    //     {
    //       scopeName: "theme-mauve",
    //       path: path.resolve("src/theme/mauve-vars.less"),
    //     },
    //   ],
    // },
  }

  const plugin = [
    themePreprocessorPlugin(options),
  ]
  return plugin
}