import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    account:{}
  },
  mutations: {
    //用户名密码
    SET_ACCOUNT (state, platform) {
        state.account = platform;
      }
  },
  getters: {
    //用户名密码
    getuname: (state) => state.account
  },

  actions: {
    //用户名密码
    setAccount ({commit}, platform) {
        commit('SET_ACCOUNT', platform);
      }
  }
})
