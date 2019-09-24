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
        <el-collapse-item title="我的购物车" name="2">
          <MyShop></MyShop>
        </el-collapse-item>
        <el-collapse-item title="我的订单" name="3">
          <MyOrder></MyOrder>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
import MyInfor from './myInfor.vue'
import MyShop from './myShop.vue'
import MyOrder from './myOrder.vue'
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
    MyInfor,
    MyShop,
    MyOrder
  },
  methods: {
    handleChange(val) {
      // window.console.log(val);
    }
  },
  mounted: function() {
  }
};
</script>

<style scoped>
.users {
  height: 200px;
  background-image: url('http://img2.imgtn.bdimg.com/it/u=3635631015,3134581665&fm=26&gp=0.jpg');
  background-size:100% 100%;
}
.touxiang {
  width: 100px;
  height: 100px;
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
  width: 100px;
  text-align: center;
}
.infor{
  margin-top: 20px;
}
.infor /deep/ .el-collapse-item__header{
  font-size: 24px;
  color: brown;
}
</style>