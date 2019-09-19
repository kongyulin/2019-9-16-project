<template>
  <div id="app">
    <div id="top">
    <div id="navbar">
      <div>
      <router-link to="/">首页</router-link>
      <router-link to="/shoplist">商品列表</router-link>
      </div>
 <div class="inputbox">
    <el-input
    placeholder="请输入内容"
    v-model="inputword"
    @click="Search('inputword')">
    <i slot="prefix" class="el-input__icon el-icon-search"></i>
  </el-input>
  </div>
      <div>
      <span v-if='this.$store.getters.getuname.name' style="color:white">
        {{this.$store.getters.getuname.name}}
      </span>
      <span v-else>
      <router-link to="/login">登录</router-link>
      <router-link to="/register">注册</router-link>
      </span>
      <router-link to="/user">个人中心</router-link>
      </div>
    </div>
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
  data(){
    return {
      inputword:""
    }
  },
  methods:{
    Search(inputword){

    }
  }
}
</script>

<style>
body{
  padding: 0px;
  margin: 0px;
}
#app #top{
     height: 50px;
    width: 100%; 
    background: #0B0808;
}
#navbar{
    /* background: pink; */
    height: 50px;
    width: 1200px;
    display: flex;
    align-items: center;
    margin: 0px auto;
    justify-content: space-between;
}
#navbar a{
    text-decoration: none;
    margin-left: 40px;
    color: white;
}
.inputbox{
  width: 300px;
  height: 30px;
  margin-left: 350px;
}
.inputbox /deep/ .el-input{
    height: 30px;
    border-radius: 30px;
    overflow: hidden;
   
}
.inputbox /deep/ .el-input__inner{
    height: 30px;
    /* background: none; */
     /* border-radius: 30px; */
}
.inputbox /deep/ .el-input__icon{
margin-top: -5px;
}

</style>
