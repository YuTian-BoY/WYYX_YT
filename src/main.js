// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'lib-flexible/flexible'
import VueLazyLoad from 'vue-lazyload'
import App from './App'
// 引入路由器 并注册
import router from './router'
import ShopList from './pages/ShopList/ShopList.vue'
// 引入mock文件
import './mockData/mockServer.js'
// 引入store
import store from './store'
// 引入Header.vue,并注册成一个全局组件
import Header from './components/Header/Header.vue'
Vue.component('Header', Header)
Vue.config.productionTip = false
Vue.use(VueLazyLoad, {
  loading: 'static/imags/wh.gif'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  router, // 注册路由器
  store, // 注册仓库
  ShopList // 注册路由
})
