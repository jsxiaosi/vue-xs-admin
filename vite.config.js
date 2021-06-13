import { defineConfig } from 'vite'
import path from "path";
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'

import themePreprocessorPlugin, {
  getModulesScopeGenerater,
} from "@zougt/vite-plugin-theme-preprocessor";

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    // 引用别名配置
    alias:{
      '@':`${path.resolve(__dirname, 'src')}`
    }
  }, 
  plugins: [
    vue(),
    // 按需引入组件库样式
    styleImport({
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
    }),
    themePreprocessorPlugin({
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
    }),
  ],
  server: {
    // 服务器主机名，如果允许外部访问，可设置为"0.0.0.0"
    host: '0.0.0.0',
    // 服务器端口号
    port: 3000,
    // boolean | string 启动项目时自动在浏览器打开应用程序；如果为string，比如"/index.html"，会打开http://localhost:3000/index.html
    open: true,
    // 自定义代理规则
    proxy: {
      '/api': {
          target: '',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  css: {
    preprocessorOptions: {
      // 配置scss全局样式以及变量
      scss: {
        additionalData: `@import "./src/styles/index.scss";`
      }
    }
  },
  build:{
    assetsDir:'static',
    chunkSizeWarningLimit: 2000,

  }

})
