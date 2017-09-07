import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		musicMes: [
			{ "img":"http://p1.music.126.net/tWObIWPB5xNH0PICMpdqRA==/18979769718980043.jpg?param=140y140" , "title":"Gospel Music‖慢节奏，静享一段悠然时光" },
			{ "img":"http://p1.music.126.net/G3cHCM-p17eW3CLvJf16-w==/19041342370152117.jpg?param=140y140" , "title":"启程‖“中国味儿”旅行——路线图" },
			{ "img":"http://p1.music.126.net/4Abjlr5eVYF9CGRQI12Osw==/109951163004900022.jpg?param=140y140" , "title": "「粤语」人人路过都像你 但你是你" },
			{ "img":"http://p1.music.126.net/dRntJd8qpWv97MPRtMUaKA==/109951163017327329.jpg?param=140y140" , "title": "《离经叛道》：创新者们的这些行为和你不一样" },
			{ "img":"http://p1.music.126.net/w8d2pw2DGKNCPPKaEARfWg==/18700493767196733.jpg?param=140y140" , "title": "古风｜百听不厌~咱的珍藏 ( •̀∀•́ )" },
			{ "img":"http://p1.music.126.net/UaSTJK03_kSyYUz-2L6tBA==/18697195232178550.jpg?param=140y140" , "title": "杨振宁和李政道（五 首度联手战缪子）" },
			{ "img":"http://p1.music.126.net/9EHl0lDnN0vIgT8AYjiTxQ==/18929192184112281.jpg?param=140y140" , "title": "「Acapella」空灵至幻 迷境失若绿茵林" },
			{ "img":"http://p1.music.126.net/qfJg2DnB79sLxs0VDONJHQ==/18908301463197572.jpg?param=140y140" , "title": "孟婆，请再给我一碗汤" }
		],
	},
	mutations:{
		INITMUSICMES(state, value) {
			console.log(state)
			state.musicMes = value
		},		
	},
	actions:{
		initmusicmes({commit}, value){
			commit('INITMUSICMES', value)
		},
	}
}) 
export default store