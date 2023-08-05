import { createApp } from 'vue';

import App from './App.vue';

import { getServerConfig } from './config';
import { configMainGlobalProperties } from './utils';
import { configMainStore } from './store';
import { configMainI18n } from './locales';
import { configMainRouter } from './router';
import { useElementPlus } from './utils/plugin/element';

import '@/styles/index.scss';

const app = createApp(App);

getServerConfig(app).then(async (config) => {
  // 路由
  await configMainRouter(app);

  // 全局钩子
  configMainGlobalProperties(app);

  // Pinia
  configMainStore(app);

  // 国际化
  configMainI18n(app, config.locale);

  // ElementPlus
  useElementPlus(app);

  app.mount('#app');
});
