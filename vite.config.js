import { defineConfig, loadEnv } from 'vite'
import path from 'path'

import { createVitePlugins } from './build/vite/plugin'

// https://vitejs.dev/config/
export default defineConfig((ConfigEnv) => {
  const { mode, command } = ConfigEnv

  const root = process.cwd()

  const env = loadEnv(mode, root)

  console.log(mode, process.cwd(), env)
  return {
    resolve: {
      // 引用别名配置
      alias: {
        // 配置@别名
        '@': `${path.resolve(__dirname, 'src')}`,
        // 解决警告You are running the esm-bundler build of vue-i18n. It is recommended to configure your bundler to explicitly replace feature flag globals with boolean literals to get proper tree-shaking in the final bundle.
        'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js'
      }
    },
    plugins: createVitePlugins(),
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
          additionalData: '@import "./src/styles/index.scss";'
        }
      }
    },
    build: {
      assetsDir: 'static',
      chunkSizeWarningLimit: 2000
    },
    optimizeDeps: {
      include: [
        'element-plus/lib/locale/lang/zh-tw',
        'element-plus/lib/locale/lang/en'
      ],
      exclude: []
    }
  }
})
