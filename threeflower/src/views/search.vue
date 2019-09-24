<template>
<div>
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
 <div id="search"  >
    <div v-for="item in searchdata" :key="item.id" @click="toDetail(item)">
          <div class="alllist">
          <img :src="item.img" alt="">
           <div style="color:red">￥{{item.price}}</div>
           <div>{{item.title}}</div>
        </div>
    </div>
 </div>
 </div>
</template>
<script>

export default {
    name: "search",
  components: {

  },
    data(){
        return{
    inputword: "",
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      searchdata:[]
    }},
 mounted:function(){
       this.loaddata()
    } ,
 methods: {
   toDetail(data) {
      this.$store.dispatch("setDetail", data);
      this.$router.push("/shopdetail");
    },
    Search() {
     this.$store.dispatch('setSearch',this.inputword);
     this.loaddata()
    },
    loaddata(){
    let that = this;
    this.$ajax
      .get(this.$store.state.address+"/shop/searchlist",{params:{
            searchword: that.$store.getters.getsearch
          }})
      .then(function(response) {
        that.searchdata = response.data;
      })
      .catch(function(error) {
        window.console.log(error);
      }); 
    }
  } 
}
</script>
<style scoped>
#search{
    width: 1200px;
    min-height:200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    cursor: pointer;
}
.alllist{
  background: #F1F3F4;
  width: 290px;
  height: 400px;
  margin-top: 10px;
  border:1px solid #F4F4F4;
  margin-left: 7px;
}
.alllist>div{
 margin-left: 10px;
 padding-right: 10px;
}
.alllist>img{
  width: 280px;
  height: 300px;
   margin-left: 5px;
    margin-top: 10px;
   border:1px solid #F4F4F4;
   box-shadow: 2px 2px 2px #7B7676;
}

</style>