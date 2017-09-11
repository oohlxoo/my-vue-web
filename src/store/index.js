import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
	state:{
		menuList:[
			{id:null,
				title:null,
				url:null
			}
		]
	},
	getters:{},
	mutations:{
		setMenuList:(state,data)=>{
			state.menuList=data
		}
	},
	actions:{
		fetchMenuList(Store,data){
			Vue.http.get('/api/getNewsList').
			then((res)=>{
				store.commit('setMenuList',res.data);
			},
			(err)=>{
					console.log(err);
			})
		}
	}
})
 export default store