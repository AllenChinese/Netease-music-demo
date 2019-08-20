export default {
  // 大写
  INITMUSICMES(state, value) {
    state.musicMes = value
    console.log(state.musicMes)
  },
  UPDATE_CURRENT_LANG(state, currentLang) {
    state.currentLang = currentLang
  }
}
