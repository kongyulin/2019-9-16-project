<template>
<div id="cont">
      <div class="swpervideo">
      <el-carousel trigger="click" height=" 460px" :interval="12000" arrow="always">
        <el-carousel-item v-for="item in Videoswper" :key="item.id">
          <video  id='my-video' loop muted style="visibility: visible;" class='video-js'  preload='auto' width='1349' height='460' data-setup='{}'>
          <source :src="item.video1" type='video/mp4'>
          </video>
        </el-carousel-item>
      </el-carousel>
    </div> 
  </div>
</template>
<script>
export default {
  name: "cont",
  components: {
    
  },
  data() {
    return {
      Videoswper:[]
    };
  },
   methods: {
 
    },
  mounted: function() {
        var that = this;
    this.$ajax
      .get("http://localhost:8081/home")
      .then(function(response) {
        window.console.log(response);
        var homeArr=response.data;
     for(let index=0;index<homeArr.length;index++){
         if(homeArr[index].classify=="video"){
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
#cont{
    width: 100%;
    height: 460px;
    background: yellow;
}
.swpervideo {
  width: 1349px;
  height: 460px;
  margin: 0 auto;
  /* background: red; */
}
.swpervideo video {
  width: 1226px;
  height: 460px;
}
   
</style>