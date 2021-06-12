import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import Router from "./router";
import App from './App.vue'

createApp(App)
.use(Router)
.use(ElementPlus)
.mount('#app')

