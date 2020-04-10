import Vue from 'vue'
import Vuex from 'vuex'
import http from '../api/index'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fontname: '/',
    str: 1,
    config:'',
    user_id: '',
    token: '',
    smscodeData: '',
    personInfo: {},
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
    },
    SET_USERINFO: (state, person) => {
      state.personInfo = person
    },
  },
  actions: {
    async getPerson(content) {
      const userInfo = await http.$api.userInfo.userInfo();
      localStorage.user_id = userInfo.id
      content.commit('SET_USERINFO', userInfo)
    },
  },
  modules: {
  },
})
