import Vue from 'vue'
import App from './App.vue'
import router from './router'
//引入饿了么UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
//使用饿了么UI
Vue.use(ElementUI);

const vm = new Vue({
  router,
  render: h => h(App)//渲染App.vue的id标签
}).$mount('#app')
