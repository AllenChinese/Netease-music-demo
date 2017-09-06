<template>
  <div id="app">
    <headerComponent></headerComponent>
    <navComponent></navComponent>
    <router-view></router-view>
  </div>
</template>

<script>
let musicMes = require('./data/detail.json');
import headerComponent from './components/headerComponent'
import navComponent from './components/navComponent'
export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components: {
    headerComponent,
    navComponent,
  },

  methods:{
    // initMusicMes() {
    //   if ( musicMes !== '' ) {//保存到
    //     // console.log(musicMes)
    //     this.$store.dispatch('initmusicmes', musicMes)
    //   }
    // }
  },

  mounted: function() {
    // this.initMusicMes();
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
  overflow: hidden;
}
</style>
