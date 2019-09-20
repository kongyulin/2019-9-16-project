<template>
 
    <div id="top">
      <div id="navbar">
        <div>
          <router-link to="/">首页</router-link>
          <router-link to="/shoplist">商品列表</router-link>
        </div>
        <div class="inputbox">
         <el-input placeholder="请输入内容" v-model="inputword" class="input-with-select">
          <el-button slot="append" icon="el-icon-search" @click="Search()"></el-button>
        </el-input>
        </div>
        <div style="height:50px;line-height:50px;">
          <span v-if="this.$store.getters.getuname.name" style="color:white">
            <span class="touxiang">
              <img
                v-if="this.$store.getters.getuname.img"
                :src="this.$store.getters.getuname.img"
                alt
              />
              <img v-else :src="circleUrl" alt />
            </span>
            <span style="margin-left:10px">{{this.$store.getters.getuname.name}}</span>
          </span>
          <span v-else>
            <router-link to="/login">登录</router-link>
            <router-link to="/register">注册</router-link>
          </span>
          <router-link to="/user">个人中心</router-link>
        </div>
      </div>
  </div>
</template>

<script>
// import Home from './views/home.vue'
export default {
  name: "app",

  data() {
    return {
      inputword: "",
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
    };
  },
  methods: {
    Search() {
    //  window.console.log(this.inputword)

     this.$store.dispatch('setSearch',this.inputword);
     this.$router.push("/search"); 
    },
  }
};
</script>

<style scoped>
body {
  padding: 0px;
  margin: 0px;
}
 #top {
  height: 50px;
  width: 100%;
  background: #0b0808;
}
#navbar {
  /* background: pink; */
  height: 50px;
  width: 1200px;
  display: flex;
  align-items: center;
  margin: 0px auto;
  justify-content: space-between;
}
#navbar a {
  text-decoration: none;
  margin-left: 40px;
  color: white;
}
.inputbox {
  width: 300px;
  height: 30px;
  margin-left: 350px;
}
.inputbox /deep/ .el-input {
  height: 30px;
  border-radius: 30px;
  overflow: hidden;
}
.inputbox /deep/.input-with-select{
    height: 30px;
}
.inputbox /deep/ .el-input__inner {
  height: 30px; 
}

.inputbox /deep/ .el-input-group__append{
  padding:0px 10px;
}

/* 头像 */
.touxiang {
  width: 25px;
  height: 25px;
  /* background-color: red; */
  
  display: inline-block;
}
.touxiang > img {
  width: 25px;
  height: 25px;
  border-radius: 50%;

}
</style>
