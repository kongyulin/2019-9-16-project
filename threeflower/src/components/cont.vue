<template>
  <div id="cont">
    <div class="swpervideo">
      <el-carousel trigger="click" height=" 560px" :interval="12000" arrow="always">
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
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
export default {
  name: "cont",
  components: {},
  data() {
    return {
      Videoswper: []
    };
  },
  methods: {},
  mounted: function() {
    var that = this;
    this.$ajax
      .get("http://localhost:8081/home")
      .then(function(response) {
        window.console.log(response);
        var homeArr = response.data;
        for (let index = 0; index < homeArr.length; index++) {
          if (homeArr[index].classify == "video") {
            that.Videoswper.push(homeArr[index]);
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
  background: yellow;
}
.swpervideo {
  width: 1349px;
  height: 560px;
  margin: 0 auto;
  /* background: red; */
}
</style>