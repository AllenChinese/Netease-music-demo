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
import { initUser } from './service/dataProcessing'
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
    async initUser() {
      let user;
      let res = await initUser();

      if ( res.success == true ) {
        user = res.data[0].user;
        const h = this.$createElement;

        this.$notify({
          title: user.name,
          message: h('i', { style: 'color: teal'}, user.msg)
        });       
      }
    }

  },

  mounted: function() {
    // 指定初始路由
    this.$router.push('/findMusicComponent');
    this.initUser();
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
