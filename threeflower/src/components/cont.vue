<template>
  <div id="cont">
    <div class="swpervideo">
      <el-carousel trigger="click" height="560px" :interval="12000" arrow="always">
        <el-carousel-item v-for="item in Videoswper" :key="item.id">
          <video
            id="my-video"
            loop
            muted
            style="visibility: visible;object-fit: fill;width: 100%;height='560px'"
            class="video-js vjs-fluid"
            preload="metadata"
            autoplay="true"
          >
            <source :src="item.video1" type="video/mp4" />
          </video>
          <img :src="item.img1" alt class="videoimg" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="title">耀舞东方</div>
    <div class="da_earth">
      <div v-for="item in danceArr" :key="item.id">
        <img :src="item.img1" alt />
        <div>{{item.text}}</div>
      </div>
    </div>
    <div class="pechion">
      <div>
        <div v-for="item in PechArr" :key="item.id">
          <img :src="item.img1" alt />
        </div>
      </div>
      <div class="pectitle">PECHONE</div>
    </div>

    <div class="swper">
      <div>
        <el-carousel
          indicator-position="outside"
          trigger="click"
          height=" 350px"
          width="1169px"
          :interval="2000"
          arrow="always"
        >
          <el-carousel-item v-for="item in swperArr" :key="item.id">
            <div class="swperlist">
              <div>
                <div class="smallimg">
                  <img :src="item.img1" alt />
                </div>
                <div>
                  <h2>{{item.text}}</h2>
                </div>
                <div>
                  <a style=" text-decoration: none;" href="http://localhost:8081/roots.html" target="_blank">查看详情</a>
                </div>
              </div>
              <div>
                <img :src="item.img2" alt />
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "cont",
  components: {},
  data() {
    return {
      Videoswper: [],
      danceArr: [],
      PechArr: [],
      swperArr: []
    };
  },

  mounted: function() {
    var that = this;
    this.$ajax
      .get(this.$store.state.address+"/home")
      .then(function(response) {
        var homeArr = response.data;
        for (let index = 0; index < homeArr.length; index++) {
          if (homeArr[index].classify == "video") {
            that.Videoswper.push(homeArr[index]);
          } else if (homeArr[index].classify == "dance_earth") {
            that.danceArr.push(homeArr[index]);
          } else if (homeArr[index].classify == "pechoin") {
            that.PechArr.push(homeArr[index]);
          } else if (homeArr[index].classify == "swper") {
            that.swperArr.push(homeArr[index]);
          }
        }
      })
      .catch(function(error) {
        window.console.log(error);
      });
  }
};
</script>

<style scoped>
#cont {
  width: 100%;
  height: 560px;
}
#my-video {
  height: 560px;
}
.swpervideo {
  width: 1349px;
  height: 560px;
  margin: 0 auto;
  position: relative;
}
.videoimg {
  width: 500px;
  height: 300px;
  position: absolute;
  top: 120px;
  left: 420px;
}
.da_earth {
  width: 1169px;
  height: 400px;
  display: flex;
  justify-content: space-between;
  margin: 0px auto;
}
.da_earth > div {
  width: 275px;
  height: 300px;
}
.da_earth img {
  width: 275px;
  height: 250px;
}
.title {
  width: 1169px;
  height: 120px;
  margin: 0px auto;

  font-size: 28px;
  line-height: 100px;
}
.pechion {
  width: 100%;
  height: 400px;
  background: red;
}
.pechion > div {
  width: 100%;
  height: 300px;
  background: #1d4b84;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.pechion div > img {
  width: 201px;
  height: 172px;
}
.pechion > .pectitle {
  width: 100%;
  height: 100px;
  font-size: 36px;
  font-weight: 900;
  background: white;
}
.swper {
  width: 100%;
  height: 425px;
  background: #e5e5e5;
  padding-top: 80px;
}
.swper > div {
  height: 350px;
  width: 1169px;
  margin: 0px auto;
}
.swperlist {
  height: 350px;
  width: 1169px;
  display: flex;
}
.swperlist > div {
  height: 100%;
  width: 50%;
  background: white;
}
.swperlist > div > div {
  width: 100%;
  text-align: center;
  padding: 5px 0px;
}
.swperlist > div > div > a {
  border: 2px solid #2cce6c;
  padding: 10px;
  color: #2cce6c;
}
.swperlist > div > img {
  height: 100%;
  width: 100%;
  background: white;
}
.swperlist > div:nth-child(1) {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
}
#my-video {
  height: 560px;
}
</style>