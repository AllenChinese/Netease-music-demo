import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({

	state:{
		music: {
            musicMes: null
        }
	},
	mutations:{
		INITMUSICMES(state, value) {
			state.music.musicMes = value
		}
		
	},
	actions:{
		initmusicmes({commit}, value){
			commit('INITMUSICMES', value)
		}
	}
}) 

export default store