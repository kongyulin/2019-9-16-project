<template>
  <div id="app">
    <div id="navbar">
  <router-link to="/">首页</router-link>
    <router-link to="/login">注册</router-link>
</div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {},
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
