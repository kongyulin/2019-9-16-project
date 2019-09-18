<template>
<div id="navbar">
    <router-link to="/">首页</router-link>
    <router-link to="/login">登录</router-link>
    <router-link to="/register">注册</router-link>
</div>
</template>
<script>
export default {
  name: "navbar",
  components: {
    
  },
  data() {
    return {
     
    };
  },
   methods: {
        
    },
  mounted: function() {
    
  }
};
</script>

<style scoped>
#navbar{
    background: pink;
    height: 50px;
}
   
</style>