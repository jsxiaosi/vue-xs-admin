import { createApp } from 'vue';

import App from './App.vue';

// import 'virtual:windi-base.css';
// import 'virtual:windi-components.css'
// import 'virtual:windi-utilities.css'
// Register icon sprite
// import 'virtual:svg-icons-register'
import { configMainGlobalProperties, getServerConfig } from './utils';
import { configMainStore } from './store';
import { configMainI18n } from './locales';
import { configMainRouter } from './router';
import { useElementPlus } from './utils/plugin/element';

import '@/styles/index.scss';

const app = createApp(App);

getServerConfig().then(async (_config) => {
  // 路由
  await configMainRouter(app);

  // 全局钩子
  configMainGlobalProperties(app);

  // Vuex
  configMainStore(app);

  // 国际化
  configMainI18n(app);

  // ElementPlus
  useElementPlus(app);

  app.mount('#app');
});
