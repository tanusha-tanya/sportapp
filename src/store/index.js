import Vue from 'vue'
import Vuex from 'vuex'
import details from './details'
import exercises from './exercises'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    details,
    exercises
  }
})
