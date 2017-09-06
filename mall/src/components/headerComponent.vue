<template>
  <div class="headerComponent">
      <div class="h-controller">
          <a href="/#" class="h-logo">
            网易云音乐
          </a>
          <div class="h-tab">
              <ul>
                  <router-link to="/"><li class="active"><span><a href="">发现音乐</a></span></li></router-link>
                  <router-link to="/myMusicComponent"><li><span><a href="">我的音乐</a></span></li></router-link>
                  <router-link to="/friendComponent"><li><span><a href="">朋友</a></span></li></router-link>
                  <router-link to="/musicManComponent"><li><span><a href="">音乐人</a></span></li></router-link>
                  <router-link to="/downLoadComponent"><li><span><a href="">下载客户端</a></span></li></router-link>   
              </ul>
          </div>
          <div class="h-search">
              <input type="text" placeholder="音乐/电台/用户">
          </div>
          <div class="h-login">
              <span @mouseover="showLoginType" @mouseout="hideLoginType">登录</span>
              <div class="h-login-type" v-if="layout.isShowLoginType">
                  <ul>
                      <li v-for="(item, index) in loginType">
                          {{item}}
                      </li>
                  </ul>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
    export default {
        data () {
            return {
                layout:{
                    isShowLoginType: false
                },
                loginType: null,
            }
        },

        methods: {
            showLoginType() {
                this.layout.isShowLoginType = true;
            },

            hideLoginType() {
                this.layout.isShowLoginType = false;
            }
        },

        mounted: function() {
            this.loginType = this.$store.state.loginType
        }
    }
</script>
<style scoped>
.headerComponent{
    width: 100%;
    height: 70px;
    background-color: #242424;
}
.h-controller{
    width: 50%;
    min-width: 960px;
    height: 70px;
    line-height: 70px;
    margin: 0 auto;
}
.h-controller .h-logo{
    float: left;
    margin-right: 30px;
    font-size: 1.5rem;
    font-weight: 600;
    color: #fff;
}
.h-controller .h-tab{
    float: left;
    width: 50%;
    height: 70px;
}
.h-controller .h-tab ul{
    float: left;
    width: 100%;
}
.h-controller .h-tab li{
    float: left;
    width: 20%;
    min-width: 95px;
    cursor: pointer;
}
.h-controller .h-tab li:hover{
    background-color: #000;
}
.h-controller .h-tab li.active{
    background-color: #000;
}
.h-controller .h-tab span{
    display: inline-block;
    width: 100%;
}
.h-controller .h-tab a{
    font-size: .9rem;
    color: #ccc;
}
.h-controller .h-search{
    float: left;
    margin-left: 20px;
}
.h-controller .h-search input{
    width: 160px;
    height: 25px;
    line-height: 25px;
    padding-left: 10px; 
    border-radius: 5px;
    box-sizing: border-box;
}
.h-controller .h-login{
    position: relative;
    float: left;
    margin-left: 20px;
}
.h-controller .h-login span{
    font-size: .80em;
    color: #929292;
    cursor: pointer;
}
.h-controller .h-login .h-login-type{
    z-index: 10;
    position: absolute;
    right: -65px;
    top: 60px;
    width: 150px;
    height: 200px;
    background-color: #333;
}
.h-controller .h-login .h-login-type li{
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: .85em;
    color: #ccc;
}
</style>

