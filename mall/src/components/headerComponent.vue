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
      </div>
  </div>
</template>
<script>
    export default {
        data () {
            return {

            }
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
    color: #cccccc;
}
</style>

