<template>
  <div class="hyComponent">
      <div class="hot-box-content">
        <ul>
            <li v-for="item in musicMes">
                <div class="imgBox">
                    <img :src="item.img" alt="">
                </div>
                <div class="titleBox">
                    <span v-text="item.title"></span>
                </div>
            </li>
        </ul>
      </div>
  </div>
</template>
<script>
// let musicMes = require('../../../data/detail.json');
    export default {
        data () {
            return {
                musicMes: null,
            }
        },
        computed: {
             
        },

        methods: {
            
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