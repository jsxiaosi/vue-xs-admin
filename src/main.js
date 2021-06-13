import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import 'es6-promise/auto'
import Store from "./store"
import Router from "./router";
import App from './App.vue'

createApp(App)
.use(Store)
.use(Router)
.use(ElementPlus)
.mount('#app')

