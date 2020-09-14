import Vue from 'vue'
import App from './App'
import api from './utils/http/comment.js'
import store from './store/index.js'   //引入vuex


Vue.config.productionTip = false

Vue.prototype.$api = api

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
