import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible/index'
import './assets/border.css'
import * as filters from './util/filter';
import Vant from 'vant'

import 'vant/lib/index.css'
import './assets/iconfont.css'
import { Lazyload } from 'vant';
import vueResource from 'vue-resource'

import fastClick from 'fastclick'

import api from './api' // 导入api接口

Vue.prototype.$api = api; // 将api挂载到vue的原型上

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

fastClick.attach(document.body)
Vue.use(Vant);
Vue.use(Lazyload);
Vue.use(vueResource)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')