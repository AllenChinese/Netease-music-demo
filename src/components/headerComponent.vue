<template>
  <div class="headerComponent">
      <div class="h-controller"> 
          <a href="#/findMusicComponent" class="h-logo" @click="changeLangEvent()">
            {{$t('m.music')}}
          </a>
          <div class="h-tab">
              <ul>
                  <router-link to="/findMusicComponent"><li v-bind:class="{ active: layout.changeColor[0] }" @click="changeBgcEvent(0)"><span><a href="">{{$t('m.findMusic')}}</a></span></li></router-link>
                  <router-link to="/myMusicComponent"><li v-bind:class="{ active: layout.changeColor[1] }" @click="changeBgcEvent(1)"><span><a href="">{{$t('m.myMusic')}}</a></span></li></router-link>
                  <router-link to="/friendComponent"><li v-bind:class="{ active: layout.changeColor[2] }" @click="changeBgcEvent(2)"><span><a href="">{{$t('m.friend')}}</a></span></li></router-link>
                  <router-link to="/musicManComponent"><li v-bind:class="{ active: layout.changeColor[3] }" @click="changeBgcEvent(3)"><span><a href="">{{$t('m.musician')}}</a></span></li></router-link>
                  <router-link to="/downLoadComponent"><li v-bind:class="{ active: layout.changeColor[4] }" @click="changeBgcEvent(4)"><span><a href="">{{$t('m.download')}}</a></span></li></router-link>   
              </ul>
          </div>
          <div class="h-search">
              <input type="text" placeholder="音乐/电台/用户">
          </div>
          <div class="h-login" @mouseover="showLoginType" @mouseout="hideLoginType" @click="showLoginBox">
              <span>登录</span>
              <div class="h-login-type" v-if="layout.isShowLoginType">
                  <ul>
                      <li v-for="(item, index) in loginType">
                          {{item}}
                      </li>
                  </ul>
              </div>
              <span v-text="loginName"></span>
          </div>
      </div>
      <!-- 登录弹出框 -->
      <el-dialog
        :title="loginTitle"
        :visible.sync="layout.login.dialogVisible"
        class="loginModal">
        <div class="loginIndex" v-if="layout.login.isShowLoginIndex">
            <div class="leftBox">
              <div class="upPic"></div>
              <div class="block">
                <el-button type="primary" @click="showLogin">登录</el-button>
              </div>
              <div class="block">
                <el-button @click="showRegister">注册</el-button>
              </div>
            </div>
        </div>
        <div class="login sameBox" v-if="layout.login.isShowLogin">
          <div class="loginContent">
            <el-form>
              <el-form-item label="账号">
                <el-input v-model="login.name"></el-input>
              </el-form-item>

              <el-form-item label="密码">
                <el-input v-model="login.password"></el-input>
              </el-form-item>
              <span class="hint" v-if="layout.login.isShowHint">您还没有注册</span>
              <div class="block">
                <el-button type="primary" @click="loginEvent">登录</el-button>
              </div>
            </el-form>
          </div>
          <div class="loginFooter">
            <span @click="showRegister">免费注册</span>
          </div>
        </div>
        <div class="register sameBox" v-if="layout.login.isShowRegister">
          <div class="registerContent">
            <el-form>
              <el-form-item label="账号">
                <el-input v-model="register.name"></el-input>
              </el-form-item>

              <el-form-item label="密码">
                <el-input v-model="register.password"></el-input>
              </el-form-item>
              <span class="hint" v-if="layout.login.isShowHint">请输入完整</span>
              <div class="block">
                <el-button type="primary" @click="registerEvent">下一步</el-button>
              </div>
            </el-form>
          </div>
          <div class="registerFooter">
            <span @click="showLogin">返回登录</span>
          </div>
        </div>
      </el-dialog>
  </div>
</template>
<script>
import {cookie} from '../../static/js/util'
import { Loading } from 'element-ui'
    export default {
        data () {
          return {
            layout:{
              isShowLoginType: false,
              changeColor: [true, false, false, false, false],
              login:{
                dialogVisible: false,
                isShowLoginIndex: true,
                isShowLogin: false,
                isShowRegister: false,  
                isShowHint: false  
              }
            },
            loginType: null, 
            loginTitle: '登录',
            loginName: '',
            login: {
              name: null,
              password: null
            },
            register: {
              name: null,
              password: null
            },
            lang: 'zh-CN'
          }
        },

        methods: {
            /**
             * 切换语言 
             */ 
            changeLangEvent() {
              this.$confirm('确定切换语言吗?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
              }).then(() => {
                if ( this.lang === 'zh-CN' ) {
                  this.lang = 'en-US';
                  this.$i18n.locale = this.lang;
                }else {
                  this.lang = 'zh-CN';
                  this.$i18n.locale = this.lang;
                }
              }).catch(() => {
                this.$message({
                  type: 'info',
                });          
              });
            },

            showLoginType() {
              this.layout.isShowLoginType = true;
            },

            hideLoginType() {
              this.layout.isShowLoginType = false;
            },

            showLoginBox() {
              this.loginTitle = '登录';
              this.layout.login.dialogVisible = true;
              this.layout.login.isShowLoginIndex = true;
              this.layout.login.isShowLogin = false;
              this.layout.login.isShowRegister = false;
            },

            showLogin() {
              this.login.name = null;
              this.login.password = null;

              this.loginTitle = '登录';
              this.layout.login.isShowLoginIndex = false;
              this.layout.login.isShowLogin = true;
              this.layout.login.isShowRegister = false;
              this.layout.login.isShowHint = false;
            },

            showRegister() {
              this.register.name = null;
              this.register.password = null;  

              this.loginTitle = '注册';
              this.layout.login.isShowLoginIndex = false;
              this.layout.login.isShowLogin = false;
              this.layout.login.isShowRegister = true;
              this.layout.login.isShowHint = false;
            },
            /**
             * @argument e: 传入的参数 代表数组中 index 位置
             * 实现的方式不优雅，希望你能够有好的方式。
             */ 
            changeBgcEvent(e) {
                let arr = [];
                for( let elem in this.layout.changeColor ) { 
                    parseInt(elem)
                    if ( e == elem ) {
                        arr.push(true);
                    }else {
                        arr.push(false)
                    }
                }
                this.layout.changeColor = arr;
            },

            loginEvent() {
              let name = cookie.get('name');
              let password = cookie.get('password');

              if ( name == null || password == null ) {
                this.layout.login.isShowHint = true;
              }else{
                if ( name == this.login.name && password == this.login.password ) {
                  this.loginName = name;
                  // 关闭登录框
                  this.layout.login.dialogVisible = false;
                }else{
                  alert('账号和密码没有对上');
                }
              }
            },

            registerEvent() {
              if ( this.register.name == null || this.register.password == null ) {
                this.layout.login.isShowHint = true;
              }else{
                /**
                 * 注册并登录，将账号密码写入cookie
                 */
                cookie.set('name', this.register.name);
                cookie.set('password', this.register.password);

                // 关闭登录框
                this.layout.login.dialogVisible = false;

                let loadingInstance = Loading.service({ fullscreen: true , text: '3秒后自动登录'});
                setTimeout(() => {
                  loadingInstance.close();
                  this.loginName = cookie.get('name');
                }, 3000);

              }
            },

            isLogined() {
              let name = cookie.get('name');
              let password = cookie.get('password');

              if ( name !== null && password !== null ) {
                  this.loginName = name;
              }
            }
        },

        mounted: function() {
          this.loginType = this.$store.state.loginType;
          this.isLogined();
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

/* 
 * loginModal登录框
 */
 .loginModal{
   text-align: left;
 }
 .el-dialog{
   width: 475px;
 }
 .loginModal .loginIndex{
   width: 100%;
   height: 100%;
 }
 .loginModal .loginIndex .leftBox {
   width: 60%;
   height: 100%;
   border-right: 1px solid #eee;
 }
 .loginModal .loginIndex .leftBox .upPic{
   height: 120px;
   background: url('https://s2.music.126.net/style/web2/img/platform.png?42ab2cc5cda8e048cc14758bc2071133') no-repeat 13px 0;
 }
 .block button{
   width: 90%;
   height: 35px;
   margin-top: 5px;
 }
.loginModal .sameBox{
   width: 70%;
   height: 80%;
   margin: 0 auto;
 }
 .loginModal .sameBox .el-input{
   width: 85%!important;
 }
 .loginModal .sameBox .block button{
   width: 85%;
   margin-left: 40px;
 }
 .loginModal .sameBox .loginFooter{
   width: 100%;
   height: 35px;
   line-height: 35px;
   text-align: right;
 }
 .loginModal .sameBox .registerFooter{
   width: 100%;
   height: 35px;
   line-height: 35px;
   text-align: left;
 }
 .loginModal .sameBox .loginFooter span{
   cursor: pointer;
 }
 .loginModal .sameBox .registerFooter span{
   cursor: pointer;
 }
 .hint{
   color: #C20C0C;
 }
</style>

