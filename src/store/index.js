/**
 * 主要入口文件
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 引入actions、mutations
import actions from './actions.js'
import mutations from './mutations.js'

// 定义状态state
const state = {
    musicMes: [
        { "img":"http://p1.music.126.net/tWObIWPB5xNH0PICMpdqRA==/18979769718980043.jpg?param=140y140" , "title":"Gospel Music‖慢节奏，静享一段悠然时光" , "url":"http://www.170mv.com/kw/other.web.rb01.sycdn.kuwo.cn/resource/n2/44/87/3952172493.mp3" },
        { "img":"http://p1.music.126.net/G3cHCM-p17eW3CLvJf16-w==/19041342370152117.jpg?param=140y140" , "title":"启程‖“中国味儿”旅行——路线图" , "url":"http://www.170mv.com/kw/other.web.rb01.sycdn.kuwo.cn/resource/n2/44/87/3952172493.mp3" },
        { "img":"http://p1.music.126.net/4Abjlr5eVYF9CGRQI12Osw==/109951163004900022.jpg?param=140y140" , "title": "「粤语」人人路过都像你 但你是你" , "url":"http://www.170mv.com/kw/other.web.rb01.sycdn.kuwo.cn/resource/n2/44/87/3952172493.mp3"},
        { "img":"http://p1.music.126.net/dRntJd8qpWv97MPRtMUaKA==/109951163017327329.jpg?param=140y140" , "title": "《离经叛道》：创新者们的这些行为和你不一样" , "url":"http://www.170mv.com/kw/other.web.rb01.sycdn.kuwo.cn/resource/n2/44/87/3952172493.mp3"},
        { "img":"http://p1.music.126.net/w8d2pw2DGKNCPPKaEARfWg==/18700493767196733.jpg?param=140y140" , "title": "古风｜百听不厌~咱的珍藏 ( •̀∀•́ )" , "url":"http://www.170mv.com/kw/other.web.rb01.sycdn.kuwo.cn/resource/n2/44/87/3952172493.mp3"},
        { "img":"http://p1.music.126.net/UaSTJK03_kSyYUz-2L6tBA==/18697195232178550.jpg?param=140y140" , "title": "杨振宁和李政道（五 首度联手战缪子）" , "url":"http://www.170mv.com/kw/other.web.rb01.sycdn.kuwo.cn/resource/n2/44/87/3952172493.mp3"},
        { "img":"http://p1.music.126.net/9EHl0lDnN0vIgT8AYjiTxQ==/18929192184112281.jpg?param=140y140" , "title": "「Acapella」空灵至幻 迷境失若绿茵林" , "url":"http://www.170mv.com/kw/other.web.rb01.sycdn.kuwo.cn/resource/n2/44/87/3952172493.mp3"},
        { "img":"http://p1.music.126.net/qfJg2DnB79sLxs0VDONJHQ==/18908301463197572.jpg?param=140y140" , "title": "孟婆，请再给我一碗汤" , "url":"http://www.170mv.com/kw/other.web.rb01.sycdn.kuwo.cn/resource/n2/44/87/3952172493.mp3"}
    ],
    loginType: [
        '手机号登录',
        '微信登录',
        'QQ登录',
        '新浪微博登录',
        '网易邮箱号登录'
    ]
}

// 设置暴露接口
export default new Vuex.Store({
    state,
    mutations,
    actions
});
