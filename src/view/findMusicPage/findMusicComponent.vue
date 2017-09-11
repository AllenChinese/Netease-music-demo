<template>
    <div class="findMusicComponent">
        <carousel :slides="slides" :inv="invTime"></carousel> 
        <div class="hot-box">
            <div class="hot-box-nav">
                <ul>
                    <li><h2>热门推荐</h2></li>
                    <router-link to="/findMusicComponent"><li><span class="active">华语</span></li></router-link>
                    <router-link to="/findMusicComponent/gtComponent"><li><span>港台</span></li></router-link>
                    <router-link to="/findMusicComponent/rhComponent"><li><span>日韩</span></li></router-link>
                    <router-link to="/findMusicComponent/omComponent"><li><span>欧美</span></li></router-link>
                </ul>
            </div>
            <router-view></router-view>
        </div>
    </div> 
</template>
<script>
// import {findMusic} from '../service/dataProcessing'
import carousel from '../../components/Carousel'
    export default {
        data () {
            return {
                invTime: 2000,
                slides: [
                    {
                        src:'http://p1.music.126.net/GLq4i55VpNCaWH1OH0ZFpw==/18829136627696081.jpg',
                        title:'满江', 
                        bgColor: '#171717'
                    },
                    {
                        src:'http://p1.music.126.net/qphcaszAF_hdF1LRg_Qxeg==/18623527953315547.jpg',
                        title:'网易严选',
                        bgColor:'#FFF0F3'
                    },
                    {
                        src:'http://p1.music.126.net/LCWAkiQckQrSxcI6vwkEsw==/18527870441694923.jpg',
                        title:'泰勒·斯威夫特',
                        bgColor:'#FEFEFE'
                    },
                    {
                        src:'http://p1.music.126.net/oXsNqiOROt7NGIH9JtcXVg==/18623527953315541.jpg',
                        title:'GD',
                        bgColor:'#074367'
                    }
                ]
            }
        },

        components: {
            carousel
        },

        computed:{

        },

        methods: {
           async findAllMusic() {
            // 获取所有歌曲信息
            let musicMes = await findMusic();
            console.log(musicMes)
           },
        },

        mounted: function() {
            // this.findAllMusic();
        }
    }
</script>
<style scoped>
    .findMusicComponent{
        width: 100%;
        height: auto;
    }
    .hot-box{
        width: 730px;
        height: auto;
        margin: 0 auto;
        border: 1px solid #eee;
        box-sizing: border-box;
    }
    .hot-box .hot-box-nav{
        width: 100%;
        height: 70px;
        padding-left: 20px;
        border-bottom: 3px solid #C20C0C;
        box-sizing: border-box;
    }
    .hot-box .hot-box-nav ul{
        float: left;
        width: 100%;
        height: 100%;
    }
    .hot-box .hot-box-nav li{
        float: left;
        width: 100px;
        height: 100%;
        cursor: pointer;
    }
    .hot-box .hot-box-nav li span{
        display: inline-block;
        width: 100%;
        height: 50px;      
        line-height: 70px;
        font-size: .95rem;
    }

    .hot-box .hot-box-nav li span.active{
        color: #C20C0C;
    }

</style>