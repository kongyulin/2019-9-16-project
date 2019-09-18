<template>
  <div id="app">
    <div id="navbar">
      <router-link to="/">首页</router-link>
      <router-link to="/shoplist">商品列表</router-link>
      <router-link to="/login">登录</router-link>
      <router-link to="/register">注册</router-link>
      <router-link to="/user">个人中心</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
// import Home from './views/home.vue'
export default {
  name: 'app',
  components: {
    
  },
}
</script>

<style>
body{
  padding: 0px;
  margin: 0px;
}
#navbar{
    background: pink;
    height: 50px;
}
</style>
