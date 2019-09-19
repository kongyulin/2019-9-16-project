import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    account:{},
    search:""
  },
  mutations: {
    //用户名密码
    SET_ACCOUNT (state, platform) {
        state.account = platform;
      },
      //搜索框
    SET_Search (state, platform) {
      state.search = platform;
    }
  },
  getters: {
    //用户名密码
    getuname: (state) => state.account,
     //搜索框
     getsearch: (state) => state.search
  },

  actions: {
    //用户名密码
    setAccount ({commit}, platform) {
        commit('SET_ACCOUNT', platform);
      },
      // 搜索框
      setSearch ({commit}, platform) {
        commit('SET_Search', platform);
      },

  }
})
