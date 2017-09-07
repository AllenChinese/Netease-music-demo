<template>
  <div class="footerComponent">
      <div class="selfResume">
          <ul>
              <li><span>地址：</span><span v-text="selfResume.address"></span></li>
              <li><span>姓名：</span><span v-text="selfResume.name"></span></li>
              <li><span>职业：</span><span v-text="selfResume.job"></span></li>
              <li><span>联系方式：</span><span v-text="selfResume.link"></span></li>
          </ul>
      </div>
      <div class="blogLink">
        <img src="../assets/image/wchat.jpg" alt="" height="100">
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
                    link: '13967395932'
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
        margin-left: -320px;
        width: 620px;
        height: 30px;
    }
    .footerComponent .selfResume ul{
        width: 100%;
        height: 100%;
    }
    .footerComponent .selfResume ul li{
        float: left;
        width: 155px;
        height: 30px;
        line-height: 30px;
        font-size: .75em;
        color: #555;
        text-align: center;
    }
    .footerComponent .selfResume ul li span:nth-child(1){
        display: inline-block;
        width: 60px;
        text-align: right;
    }

    .footerComponent .blogLink{
        position: absolute;
        right: 10%;
        width: 160px;
        height: 100px;
    }
</style>
