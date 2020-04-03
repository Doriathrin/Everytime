import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fontname: '/',
    str: 1,
    user_id: '',
    token: '',
    smscodeData:''
  },
  mutations: {
    tiao (state, str) {
      state.fontname = str
      console.log(str);
    },
    token (state, str) {
      state.token=str
    },
    user (state, str) {
      state.user_id=str
    },
    getsmscode (state, str) {
      state.smscodeData=str
    }
  },
  actions: {
  },
  modules: {
  },
})
