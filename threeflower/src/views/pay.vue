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
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569301834183&di=0652220f5a6620da0d25ba31b091a7d2&imgtype=0&src=http%3A%2F%2Fimg3.cache.netease.com%2Fgame%2F2013%2F11%2F26%2F20131126143638f53f4.png" alt="">
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
  width: 250px;
  height: 250px;
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
