// 引入vue
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
// 引入相关的配置对象
import state from './state.js'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)
// 向外暴露store对象
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
