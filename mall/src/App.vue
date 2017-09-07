<template>
  <div id="app">
    <headerComponent></headerComponent>
    <navComponent></navComponent>
    <router-view></router-view>
  </div>
</template>

<script>
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

  },

  mounted: function() {

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
