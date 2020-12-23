import Vue from 'vue'
import App from './App'
import store from '@/store'
import { RouterMount } from '@/router'
// 全局挂在方法
import storage from '@/utils/storage/index'
import debounce from '@/utils/debounce/debounce'
import uView from 'uview-ui'
Vue.use(uView)
Vue.config.productionTip = false
Vue.prototype.$store = store

Vue.prototype.debounce = debounce
Vue.prototype.storage = storage

App.mpType = 'app'

const app = new Vue({
  ...App
})
// v1.3.5起 H5端
// #ifdef H5
RouterMount(app, '#app')
// #endif

// 为了兼容小程序及app端必须这样写才有效果
// #ifndef H5
app.$mount()
// #endif
