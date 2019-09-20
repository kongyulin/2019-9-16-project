import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    account:{},
    search:"",
    shopdetail:{}
  },
  mutations: {
    //用户名密码
    SET_ACCOUNT (state, platform) {
        state.account = platform;
      },
      //搜索框
    SET_SEARCH (state, platform) {
      state.search = platform;
    },
    // 商品细节
    SET_DETAIL(state,platform){
      state.shopdetail=platform;
    }
  },
  getters: {
    //用户名密码
    getuname: (state) => state.account,
     //搜索框
     getsearch: (state) => state.search,
     //商品细节
     getdetail: (state) => state.shopdetail
  },

  actions: {
    //用户名密码
    setAccount ({commit}, platform) {
        commit('SET_ACCOUNT', platform);
      },
      // 搜索框
      setSearch ({commit}, platform) {
        commit('SET_SEARCH', platform);
      },
        // 商品细节
        setDetail ({commit}, platform) {
        commit('SET_DETAIL', platform);
      },

  }
})
