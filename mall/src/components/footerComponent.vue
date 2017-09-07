<template>
  <div class="footerComponent">
      <div class="selfResume">
          <ul>
              <li><span>地址：</span><span v-text="selfResume.address"></span></li>
              <li><span>名字：</span><span v-text="selfResume.name"></span></li>
              <li><span>职业：</span><span v-text="selfResume.job"></span></li>
          </ul>
      </div>
      <div class="blogLink">
          <!-- <div>
              <img src="../assets/image/csdn.png" alt="" width="50%">
              <h3>csdn</h3>
          </div>
          <div>
              <img src="../assets/image/wechat.jpg" alt="" width="50%">
              <h3>微信</h3>
          </div> -->
      </div>
  </div>
</template>
<script>
    export default {
        data () {
            return {
                selfResume: {
                    address: '浙江·杭州·滨江',
                    name: '周嘉炜Allen',
                    job: '前端开发工程师',
                }
            }
        }
    }
</script>
<style scoped>
    .footerComponent{
        position: relative;
        width: 100%;
        height: 100px;
        border: 1px solid #ddd; 
        background-color: #F5F5F5;
        box-sizing: border-box;
    }
    .footerComponent .selfResume{
        position: absolute;
        bottom: 10px;
        left: 50%;
        margin-left: -210px;
        width: 420px;
        height: 30px;
    }
    .footerComponent .selfResume ul{
        width: 100%;
        height: 100%;
    }
    .footerComponent .selfResume ul li{
        float: left;
        width: 140px;
        height: 30px;
        line-height: 30px;
        font-size: .75em;
        color: #555;
        text-align: left;
    }
    .footerComponent .selfResume ul li span:nth-child(1){
        display: inline-block;
        width: 50px;
        text-align: right;
    }

    .footerComponent .blogLink{
        position: absolute;
        left: 50%;
        margin-left: -210px;
        width: 420px;
        height: 60px;
    }
    .footerComponent .blogLink div{
        float: left;
        width: 50%;
    }
</style>
