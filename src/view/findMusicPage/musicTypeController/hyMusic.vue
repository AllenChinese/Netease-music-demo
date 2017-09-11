<template>
  <div class="hyComponent">
      <div class="hot-box-content">
        <ul>
            <li v-for="item in musicMes" @click="showMusicDetail(item.img, item.title, item.url)">
                <div class="imgBox">
                    <img :src="item.img" alt="图片">
                </div>
                <div class="titleBox">
                    <span v-text="item.title"></span>
                </div>
            </li>
        </ul>
      </div>

      <!-- 音乐详情模态框 -->
      <el-dialog
        title="music"
        :visible.sync="detail.dialogVisible"
        size="small">
        <img :src="detail.img" alt="图片">
        <h5 v-text="detail.title"></h5>
        <audio controls="controls" loop="loop" id="myAudio" ref="myAudio">
            <source :src="detail.url" type="audio/mpeg" />
            Your browser does not support the audio element.
        </audio>
      </el-dialog>

  </div>
</template>
<script>
// let musicMes = require('../../../data/detail.json');
    export default {
        data () {
            return {
                musicMes: null,
                
                detail: {
                    dialogVisible: false,
                    img: null,
                    title: null,
                    url: null
                }
            }
        },
        computed: {
            
        },

        methods: {
            // 展示音乐信息详情，模块框形式
            showMusicDetail(img, title, url) {
              this.detail.dialogVisible = true;

              this.detail.img = img;
              this.detail.title = title;
              this.detail.url = url;
            },
            
            autoplay() {
                let myAudio = this.$refs.myAudio;
                if ( myAudio === undefined ) {
                  return false;
                }else {
                  if ( this.detail.dialogVisible == false ) {
                    myAudio.pause();
                  }else if( this.detail.dialogVisible == true ) {
                    myAudio.play();
                  }
                }
                
                
            }
        },

        mounted: function() {
          this.musicMes = this.$store.state.musicMes;           
        },

        updated() {
          this.autoplay();
        }
    }
</script>
<style scoped>
    .hyComponent{
        padding-bottom: 20px; 
        overflow: hidden;
    }
    .hot-box .hot-box-content ul{
        float: left;
        width: 100%;
        height: 100%;
    }
    .hot-box .hot-box-content li{
        float: left;
        width: 25%;
        height: 50%;
        margin-top: 20px;
    }
    .hot-box .hot-box-content li .titleBox{
        font-size: .75rem;
    }
</style>