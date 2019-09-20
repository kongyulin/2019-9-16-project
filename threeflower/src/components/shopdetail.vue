<template>
<div>
     <Navbar></Navbar>
  <div id="shopdetail">
     <div class="detailleft">
     <div>
         <div><img :src="this.getdetail.img" alt=""></div>
         <div><img :src="this.getdetail.img1" alt=""></div>
         <div><img :src="this.getdetail.img2" alt=""></div>
         <div><img :src="this.getdetail.img3" alt=""></div>
         <div><img :src="this.getdetail.img4" alt=""></div>
     </div>
     <div>
         <div><img :src="this.getdetail.img" alt=""></div>
         <div><img :src="this.getdetail.img1" alt=""></div>
         <div><img :src="this.getdetail.img2" alt=""></div>
         <div><img :src="this.getdetail.img3" alt=""></div>
         <div><img :src="this.getdetail.img4" alt=""></div>
            
     </div>

     </div>
     <div class="detailright"></div>
   
    
  </div>
  </div>
</template>
<script>
import Navbar from './navbar.vue'

export default {
  name: "shopdetail",
  components: {
    Navbar
  },
  data() {
    return {
     getdetail:this.$store.getters.getdetail
    };
  },
   methods: {
        
    },
  mounted: function() {
    window.console.log(this.$store.getters.getdetail)
  }
};
</script>

<style scoped>
#shopdetail{
  width:1200px;
  height:610px;
  background:pink;
  margin:0px auto;
  display:flex;
  justify-content: space-around;
}
.detailleft{
    margin-top:20px;
    width:500px;
    height:570px;
    background:yellow;
}
.detailright{
     margin-top:20px;
    background:blue;
    width:650px;
  height:570px;
}
.detailleft>div:nth-child(1){
    background:blue;
    width:500px;
    height:470px;
}
.detailleft>div:nth-child(2){
    background:red;
    width:500px;
    height:90px;
    margin-top:5px;
     display:flex;
     justify-content:space-between;
}
.detailleft>div:nth-child(2)>div{
    width:90px;
    height:90px;
   
}
.detailleft>div:nth-child(2)>div>img{
    width:90px;
    height:90px;
}

</style>
