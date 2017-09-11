<template>
  <div class="hyComponent">
      <div class="hot-box-content">
        <ul>
            <li v-for="item in musicMes" @click="showMusicDetail(item.img, item.title)">
                <div class="imgBox">
                    <img :src="item.img" alt="">
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
        <img :src="detail.img" alt="">
        <h5 v-text="detail.title"></h5>
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
                }
            }
        },
        computed: {
             
        },

        methods: {
            // 展示音乐信息详情
            showMusicDetail(img, title) {
                this.detail.dialogVisible = true;
                this.detail.img = img;
                this.detail.title = title;
            }
        },

        mounted: function() {
            this.musicMes = this.$store.state.musicMes;
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