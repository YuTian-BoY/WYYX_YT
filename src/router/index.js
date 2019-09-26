// 引入Vue
import Vue from 'vue'
// 引入VueRouter
import VueRouter from 'vue-router'
// 引入路由的配置数组
import routes from './routes.js'
import VueLazyload from 'vue-lazyload'
// 声明使用
Vue.use(VueRouter)
// Vue.use(VueLazyload, {
//   loading: loadingGIF
// })
// 配置路由
export default new VueRouter({
  mode: 'history',
  routes
})
