import Vue from 'vue'
import App from './App.vue'
//引入router
import router from './router'
//引入饿了么UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入vuex
import store from './store'

//制作Vue插件
import { postRequest } from './utils/api';
import { putRequest } from './utils/api';
import { getRequest } from './utils/api';
import { deleteRequest } from './utils/api';
import { postKeyValueRequest } from './utils/api';

//将自定义方法绑定到Vue实例上
Vue.prototype.postRequest = postRequest
Vue.prototype.putRequest = putRequest
Vue.prototype.getRequest = getRequest
Vue.prototype.deleteRequest = deleteRequest
Vue.prototype.postKeyValueRequest = postKeyValueRequest

Vue.config.productionTip = false
//使用饿了么UI
Vue.use(ElementUI);

const vm = new Vue({
  router,
  store,
  render: h => h(App)//渲染App.vue的id标签
}).$mount('#app')
