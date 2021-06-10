import { defineConfig } from 'vite'
import path from "path";
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'

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
    // 按需引入组件库样式(目前使用element引入方式是完整引入)
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
    })
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
})
