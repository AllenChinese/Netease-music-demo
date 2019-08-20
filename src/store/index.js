/**
 * 主要入口文件
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 引入actions、mutations
import actions from './actions.js'
import mutations from './mutations.js'
import state from './state.js'

// 设置暴露接口
export default new Vuex.Store({
  state,
  mutations,
  actions
})
