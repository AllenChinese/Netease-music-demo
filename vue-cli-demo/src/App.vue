<template>
  <div id="app">
    <headerComponent></headerComponent>
    <navComponent></navComponent>
    <router-view></router-view>
    <footerComponent></footerComponent>
  </div>
</template>

<script>
import headerComponent from './components/headerComponent'
import navComponent from './components/navComponent'
import footerComponent from './components/footerComponent'
export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components: {
    headerComponent,
    navComponent,
    footerComponent
  },

  methods:{

  },

  mounted: function() {
    // 指定初始路由
    this.$router.push('/findMusicComponent');
  }
}
</script>

<style>
#app {
  width: 100%;
  min-width: 1120px;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #F5F5F5;
  overflow: auto;
}
</style>
