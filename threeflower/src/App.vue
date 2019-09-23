<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import Home from './views/home.vue'
export default {
  name: "app",
  components: {},
  data() {
    return {
      inputword: "",
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
    };
  },
  methods: {
    Search() {
    //  console.log(this.inputword)
     this.$store.dispatch('setSearch',this.inputword);
     this.$router.push("/search"); 
    },
  }
};
</script>

<style>
body {
  padding: 0px;
  margin: 0px;
}
#app #top {
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
