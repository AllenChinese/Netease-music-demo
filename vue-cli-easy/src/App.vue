<template>
  <div id="app">
    <div class="welcome">
      <img :src="welcome.img" alt="">
      <h4 v-text="welcome.msg"></h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      welcome: {
        img: require('./assets/logo.png'),
        msg: 'welcome, this is vue-cli-easy'
      }
    }
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  padding-top: 200px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
}
.welcome{
  width: 300px;
  height: 200px;
  margin: 0 auto;
}
</style>
