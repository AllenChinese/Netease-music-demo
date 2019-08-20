export default {
  // 小写
  initmusicmes({ commit }, value) {
    console.log(value)
    commit('INITMUSICMES', value)
  },
  // 语言切换保存到状态管理
  update_current_lang({ commit }, payload) {
    commit('UPDATE_CURRENT_LANG', payload)
  }
}
