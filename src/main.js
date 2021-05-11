import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import * as echarts from 'echarts';

createApp(App).use(ElementPlus, echarts).mount('#app');