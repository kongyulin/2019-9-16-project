<template>
  <div id="pay">
      <Navbar></Navbar>
      <div>
        <h2>请选择支付方式</h2>
      </div>
      <div id="noUser">
          <!-- 微信支付 -->
        <div class="image">
          <div style="width:100%;text-align: center;margin-top:20px">微信支付</div>
          <img src="https://login.weixin.qq.com/qrcode/IYdtx1Gv8g==" alt="">
        </div>
        <!-- 支付宝支付 -->
        <div class="forms">
          <div style="width:100%;text-align: center;margin-top:20px">支付宝支付</div>
          <img src="http://img.alicdn.com/tfs/TB18W1cQFXXXXaWXXXXXXXXXXXX-160-160.png" alt="">
        </div>
      </div>
  </div>
</template>
<script>
import Navbar from '../components/navbar.vue'
export default {
  name: "pay",
  components: {
      Navbar
  },
  data() {
    return {
     
    };
  },
   methods: {
        
    },
  mounted: function() {
    // window.console.log(this.$store.getters.getuname)
  }
};
</script>

<style scoped>
h2 {
  text-align: center;
}
#noUser {
  width: 75%;
  height: 400px;
  margin: 40px auto;
  border: 1px solid gainsboro;
  display: flex;
  flex-flow: wrap;
}
.image {
  width: 49%;
  height: 400px;
  border-right: 1px solid gainsboro;
  position: relative;
}
.image > img {
  width: 300px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.forms {
  width: 50%;
  height: 400px;
  position: relative;
}
.forms>img{
    width: 250px;
  height: 250px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

</style>
