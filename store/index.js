/**
 * 采用vuex 它是状态管理
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const store = new Vuex.Store({
	state:{
		historyLists:[]
	},
	mutations:{
		SET_HISTORY_LISTS(state,historey){
		   state.historyLists = historey
		}
	},
	actions:{
		set_history({commit,state},historey){
			//获取现在的数据
			let oldList = state.historyLists
			oldList.unshift(historey)
			commit('SET_HISTORY_LISTS',oldList)
		}
	}
})

 
export default store
