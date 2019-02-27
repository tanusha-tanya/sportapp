import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import * as fb from 'firebase'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
  created(){
	fb.initializeAppconfig({
		apiKey: "AIzaSyBSIkH3UmSuovgrpK_AnlcxuREyA9XgDEU",
		authDomain: "sportapp-6746a.firebaseapp.com",
		databaseURL: "https://sportapp-6746a.firebaseio.com",
		projectId: "sportapp-6746a",
		storageBucket: "sportapp-6746a.appspot.com",
		messagingSenderId: "562579191770"
  })
  },
}).$mount('#app')

  
