import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    account: {},
    search: "",
    shopdetail: {},
    shopcar: [],
    order:[],
    myorder:[],
    
    // 网络请求的
    address:'http://localhost:8081'
  },
  mutations: {
    //用户名密码
    SET_ACCOUNT(state, platform) {
      state.account = platform;
    },
    //搜索框
    SET_SEARCH(state, platform) {
      state.search = platform;
    },
    // 商品细节
    SET_DETAIL(state, platform) {
      state.shopdetail = platform;
    },
    // 购物车
    SET_SHOPCAR(state, platform) {
      state.shopcar = platform;
    },
    // 订单
    SET_OEDER(state, platform) {
      state.order = platform;
    },
    // 我的订单
    SET_MYOEDER(state, platform) {
      state.myorder = platform;
    },
  },
  getters: {
    //用户名密码
    getuname: (state) => state.account,
    //搜索框
    getsearch: (state) => state.search,
    //商品细节
    getdetail: (state) => state.shopdetail,
    //购物车
    getcar: (state) => state.shopcar,
    //订单
    getorder:(state) => state.order,
    // 我的订单
    getmyorder:(state) => state.myorder
  },

  actions: {
    //用户名密码
    setAccount({ commit }, platform) {
      commit('SET_ACCOUNT', platform);
    },
    // 搜索框
    setSearch({ commit }, platform) {
      commit('SET_SEARCH', platform);
    },
    // 商品细节
    setDetail({ commit }, platform) {
      commit('SET_DETAIL', platform);
    },
    // 购物车
    setShopcar({ commit }, platform) {
      commit('SET_SHOPCAR', platform);
    },

    // 订单
    setOrder({ commit }, platform) {
      commit('SET_OEDER', platform);
    },
    // 我的订单
    setMyorder({ commit }, platform) {
      commit('SET_MYOEDER', platform);
    },
  }
})
