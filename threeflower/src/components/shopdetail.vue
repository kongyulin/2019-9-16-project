<template>
  <div>
    <Navbar></Navbar>
    <div id="shopdetail">
      <div class="detailleft">
        <div @mouseenter="showmask()" @mouseleave="hiddenmask()" @mousemove="movemask">
          <div v-if="showimg&&this.getdetail.img">
            <img :src="this.getdetail.img" alt />
            <div class="mask" v-show="maskshow" :style="this.positionxy"></div>
          </div>
          <div v-if="showimg1&&this.getdetail.img1">
            <img :src="this.getdetail.img1" alt />
            <div class="mask" v-show="maskshow" :style="this.positionxy"></div>
          </div>
          <div v-if="showimg2&&this.getdetail.img2">
            <img :src="this.getdetail.img2" alt />
            <div class="mask" v-show="maskshow" :style="this.positionxy"></div>
          </div>
          <div v-if="showimg3&&this.getdetail.img3">
            <img :src="this.getdetail.img3" alt />
            <div class="mask" v-show="maskshow" :style="this.positionxy"></div>
          </div>
          <div v-if="showimg4&&this.getdetail.img4">
            <img :src="this.getdetail.img4" alt />
            <div class="mask" v-show="maskshow" :style="this.positionxy"></div>
          </div>
        </div>
        <div>
          <div @mouseenter="showpic()" v-if="this.getdetail.img" :style="this.borderimg">
            <img :src="this.getdetail.img" alt />
          </div>
          <div @mouseenter="showpic1()" v-if="this.getdetail.img1" :style="this.borderimg1">
            <img :src="this.getdetail.img1" alt />
          </div>
          <div @mouseenter="showpic2()" v-if="this.getdetail.img2" :style="this.borderimg2">
            <img :src="this.getdetail.img2" alt />
          </div>
          <div @mouseenter="showpic3()" v-if="this.getdetail.img3" :style="this.borderimg3">
            <img :src="this.getdetail.img3" alt />
          </div>
          <div @mouseenter="showpic4()" v-if="this.getdetail.img4" :style="this.borderimg4">
            <img :src="this.getdetail.img4" alt />
          </div>
        </div>
        <div class="bigimg" v-show="this.showbig">
          <div v-if="showimg&&this.getdetail.img">
            <img :src="this.getdetail.img" :style="this.imgxy" alt />
          </div>
          <div v-if="showimg1&&this.getdetail.img1">
            <img :src="this.getdetail.img1" :style="this.imgxy" alt />
          </div>
          <div v-if="showimg2&&this.getdetail.img2">
            <img :src="this.getdetail.img2" :style="this.imgxy" alt />
          </div>
          <div v-if="showimg3&&this.getdetail.img3">
            <img :src="this.getdetail.img3" :style="this.imgxy" alt />
          </div>
          <div v-if="showimg4&&this.getdetail.img4">
            <img :src="this.getdetail.img4" :style="this.imgxy" alt />
          </div>
        </div>
      </div>
      <div class="detailright">
        <div>{{this.getdetail.title}}</div>
        <div>
          <span>价格</span>
          <b style="color:#EA3131;font-size:24px">￥{{this.getdetail.price}}</b>
        </div>
        <div>
          <span>运费</span>
          <span style="padding-right:10px">浙江杭州</span>至
          <span style="padding-left:10px">成都</span>
          <span style="padding-left:10px">快递包邮</span>
        </div>
        <div class="storecount">
          <div>
            <span>销量</span>
            <span style="color:red;padding-left:10px">{{this.getdetail.sale}}</span>
          </div>
          <div>
            累计评价
            <span style="color:red;padding-left:10px">345</span>
          </div>
          <div>
            送天猫积分
            <span style="color:green;padding-left:10px">50</span>
          </div>
        </div>
        <div>
          <span>化妆品净含量</span>
          <span>500g/ml</span>
        </div>
        <div class="addcount">
          <div style="padding-right:20px">数量</div>
          <div class="countbox">
            <div @click="countdown()">
              <img :src="this.reduce" alt />
            </div>
            <div>{{this.count}}</div>
            <div @click="countup()">
              <img :src="this.add" alt />
            </div>
          </div>
        </div>
        <div class="shopcar">
          <div @click="buynow()">立即购买</div>
          <div @click="toshopcar()">加入购物车</div>
        </div>
        <div class="serve" style="font-size:14px">
          <div>服务承诺</div>
          <div>增保价险</div>
          <div>过敏包退</div>
          <div>正品保证</div>
          <div>极速退款</div>
          <div>赠运费险</div>
          <div>七天无理由退货</div>
          <div>支付方式</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "./navbar.vue";
export default {
  name: "shopdetail",
  components: {
    Navbar
  },
  data() {
    return {
      getdetail: {},
      userinfo: "",
      showimg: true,
      showimg1: false,
      showimg2: false,
      showimg3: false,
      showimg4: false,
      maskshow: false,
      showbig: false,
      borderimg: {
        border: "none"
      },
      borderimg1: {
        border: "none"
      },
      borderimg2: {
        border: "none"
      },
      borderimg3: {
        border: "none"
      },
      borderimg4: {
        border: "none"
      },
      positionxy: {
        top: "0px",
        left: "0px"
      },
      imgxy: {
        top: "0px",
        left: "0px"
      },
      count: 1,
      add: require("../../public/add.png"),
      reduce: require("../../public/reduce.png")
    };
  },
  methods: {
    showpic() {
      this.showimg = true;
      this.showimg1 = false;
      this.showimg2 = false;
      this.showimg3 = false;
      this.showimg4 = false;
      this.borderimg.border = "1px solid #333";
      this.borderimg2.border = "none";
      this.borderimg3.border = "none";
      this.borderimg4.border = "none";
      this.borderimg1.border = "none";
    },
    showpic1() {
      this.showimg = false;
      this.showimg1 = true;
      this.showimg2 = false;
      this.showimg3 = false;
      this.showimg4 = false;
      this.borderimg1.border = "1px solid #333";
      this.borderimg2.border = "none";
      this.borderimg3.border = "none";
      this.borderimg4.border = "none";
      this.borderimg.border = "none";
    },
    showpic2() {
      this.showimg = false;
      this.showimg1 = false;
      this.showimg2 = true;
      this.showimg3 = false;
      this.showimg4 = false;
      this.borderimg2.border = "1px solid #333";
      this.borderimg1.border = "none";
      this.borderimg3.border = "none";
      this.borderimg4.border = "none";
      this.borderimg.border = "none";
    },
    showpic3() {
      this.showimg = false;
      this.showimg1 = false;
      this.showimg2 = false;
      this.showimg3 = true;
      this.showimg4 = false;
      this.borderimg3.border = "1px solid #333";
      this.borderimg2.border = "none";
      this.borderimg1.border = "none";
      this.borderimg4.border = "none";
      this.borderimg.border = "none";
    },
    showpic4() {
      this.showimg = false;
      this.showimg1 = false;
      this.showimg2 = false;
      this.showimg3 = false;
      this.showimg4 = true;
      this.borderimg4.border = "1px solid #333";
      this.borderimg2.border = "none";
      this.borderimg3.border = "none";
      this.borderimg1.border = "none";
      this.borderimg.border = "none";
    },
    showmask() {
      this.maskshow = true;
      this.showbig = true;
    },
    hiddenmask() {
      this.maskshow = false;
      this.showbig = false;
    },
    // 当鼠标移动时触发
    movemask(e) {
      // window.console.log(e)
      var x = e.clientX;
      var y = e.clientY;
      // 获取当前位置x
      this.positionxy.top = y - 120 + "px";
      // window.console.log(this.positionxy.top)
      this.positionxy.left = x - 130 + "px";
      this.imgxy.top = -(y - 120) * 5 + "px";
      this.imgxy.left = -(x - 130) * 5 + "px";
      if (x > 525) {
        this.positionxy.left = 400 + "px";
        this.imgxy.left = -2000 + "px";
      } else if (x < 125) {
        this.positionxy.left = 0 + "px";
        this.imgxy.left = 0 + "px";
      }
      if (y > 525) {
        this.positionxy.top = 400 + "px";
        this.imgxy.top = -2000 + "px";
      } else if (y < 125) {
        this.positionxy.top = 0 + "px";
        this.imgxy.top = 0 + "px";
      }
    },
    countup() {
      this.count++;
    },
    countdown() {
      if (this.count <= 1) {
        this.count = 1;
      } else {
        this.count--;
      }
    },
    buynow() {
      if (this.userinfo.name) {
        this.$ajax
          .get(this.$store.state.address+"/shopcar/buynow", {
            params: {
              inform: this.getdetail,
              count: this.count,
              username: this.userinfo.name
            }
          })
          .then(response => {
            if (response.data.code == 1) {
              alert(response.data.msg);
            } else if (response.data.shopData.affectedRows == 1) {
              alert(response.data.msg);
              this.$router.push("/pay");
            }
          });
      } else {
        alert("请先登录");
        this.$router.push("/login");
      }
    },
    toshopcar() {
      if (this.userinfo.name) {
        this.$ajax
          .get(this.$store.state.address+"/shopcar/addcar", {
            params: {
              inform: this.getdetail,
              count: this.count,
              username: this.userinfo.name
            }
          })
          .then(response => {
            if (response.data.code == 1) {
              alert(response.data.msg);
            } else if (response.data.shopData.affectedRows == 1) {
              alert(response.data.msg);
            }
          });
      } else {
        alert("请先登录");
        this.$router.push("/login");
      }
    }
  },
  mounted: function() {
    this.userinfo = this.$store.getters.getuname;
    this.getdetail = this.$store.getters.getdetail;
  }
};
</script>

<style scoped>
#shopdetail {
  width: 1200px;
  height: 650px;
  /* background-color: #f2f2f2; */
  margin: 0px auto;
  display: flex;
  justify-content: space-around;
}
/* 左边 */
.detailleft {
  margin-top: 20px;
  width: 500px;
  height: 600px;
  position: relative;
  cursor: pointer;
}

.detailleft > div:nth-child(1) {
  width: 500px;
  height: 500px;
  
}
.detailleft > div:nth-child(1) > div > img {
  width: 500px;
  height: 500px;
  border:  1px solid #f1f3f4;
}
.detailleft > div:nth-child(2) > div > img {
  width: 90px;
  height: 90px;
}
.detailleft > div:nth-child(2) {
  width: 500px;
  height: 90px;
  margin-top: 5px;
  display: flex;
}
.detailleft > div:nth-child(2) > div {
  width: 90px;
  height: 90px;
  margin-left: 5px;
}
.detailleft > div:nth-child(2) > div > img {
  width: 90px;
  height: 90px;
}
.bigimg {
  overflow: hidden;
  position: absolute;
  left: 520px;
  top: 0px;
  width: 500px;
  height: 500px;
}
.bigimg img {
  width: 2500px;
  height: 2500px;
  position: absolute;
}
.mask {
  width: 100px;
  height: 100px;
  position: absolute;
  z-index: 10;
  background: rgba(233, 77, 77, 0.5);
}
/* 右边 */
.detailright {
  margin-top: 20px;
  border-left: 1px solid #f1f3f4;
  width: 630px;
  height:600px;
  font-size: 16px;
  color: #999fa3;
}
.detailright > div:nth-child(1) {
  width: 620px;
  padding-left: 10px;
  font-size: 20px;
  margin-top: 10px;
  line-height: 70px;
  height: 70px;
  color: #161313;
}
.detailright > div:nth-child(2) {
  width: 600px;
  margin-left: 10px;
  padding-left: 10px;
  background: #f1f3f4;
  height: 70px;
  line-height: 70px;
}
.detailright > div:nth-child(5) {
  width: 610px;
  margin-left: 10px;
  height: 120px;
  line-height: 120px;
}
.detailright > div:nth-child(5) > span:nth-child(2) {
  padding: 10px;
  border: 2px solid white;
}
.detailright > div > span:nth-child(1) {
  padding-right: 20px;
}

.detailright > div:nth-child(3) {
  width: 620px;
  padding-left: 10px;
  height: 70px;
  line-height: 70px;
}
.storecount {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 70px;
  width: 610px;
  margin-left: 10px;
  border-top: 1px solid #e5e4e4;
  border-bottom: 1px solid #e5e4e4;
}
.serve {
  height: 70px;
  width: 620px;
  padding-left: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.addcount {
  display: flex;
  height: 70px;
  width: 610px;
  margin-left: 10px;
  line-height: 70px;
  align-items: center;
}
.countbox {
  display: flex;
  border: 1px solid white;
  width: 120px;
  height: 40px;
}
.countbox div {
  width: 40px;
  height: 40px;
  line-height: 40px;
  border: 1px solid white;
  text-align: center;
}
.countbox img {
  width: 20px;
  height: 20px;
  margin-top: 10px;
}
.shopcar {
  height: 70px;
  width: 610px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.shopcar > div {
  height: 50px;
  width: 200px;
  margin-left: 40px;
  background: #ffeded;
  border: 1px solid #ff0036;
  font-size: 20px;
  color: #ff0036;
  line-height: 50px;
  text-align: center;
}
.shopcar > div:nth-child(2) {
  height: 50px;
  width: 200px;
  margin-left: 40px;
  background: #ff0036;
  font-size: 20px;
  color: white;
  line-height: 50px;
  text-align: center;
}
</style>
