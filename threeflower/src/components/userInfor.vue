<template>
  <div id="app">
    <div class="users">
      <div class="touxiang">
        <img v-if='this.$store.getters.getuname.img' :src='this.$store.getters.getuname.img' alt />
        <img v-else :src="circleUrl" alt />
      </div>
      <br />
      <div class="username">
        <h3 v-if="this.$store.getters.getuname.nickname">{{this.$store.getters.getuname.nickname}}</h3>
        <h3 v-else>{{this.$store.getters.getuname.name}}</h3>
      </div>
    </div>
    <div class="infor">
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="我的信息" name="1">
          <MyInfor></MyInfor>
        </el-collapse-item>
        <el-collapse-item title="我的购物车" name="2"></el-collapse-item>
        <el-collapse-item title="我的订单" name="3"></el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
import MyInfor from '../components/myInfor.vue'
export default {
  name: "app",
  data() {
    return {
      activeNames: ["1"],

      // 头像
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
    };
  },
  components: {
    MyInfor
  },
  methods: {
    handleChange(val) {
      window.console.log(val);
    }
  },
  mounted: function() {
    // window.console.log(this.$store.getters.getuname);
  }
};
</script>

<style scoped>
.users {
  height: 200px;
  background-color: aqua;
  background-image: url('http://pic.58pic.com/58pic/15/91/56/258PICG58PICQ3T_1024.jpg');
  background-size:100% 100%;
}
.touxiang {
  width: 100px;
  height: 100px;
  /* background-color: red; */
}
.touxiang > img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-top: 30px;
  margin-left: 20px;
}
.username {
  margin-top: 20px;
  margin-left: 20px;
  /* background-color: yellowgreen; */
  width: 100px;
  text-align: center;
}
</style>