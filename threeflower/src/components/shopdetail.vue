<template>
<div>
     <Navbar></Navbar>
  <div id="shopdetail">
     <div class="detailleft">
     <div  @mouseenter="showmask()" @mouseleave="hiddenmask()" @mousemove="movemask">
         <div v-if="showimg&&this.getdetail.img">
           <img :src="this.getdetail.img" alt="">
           <div class="mask" v-show="maskshow" :style="this.positionxy"></div>
         </div>
         <div v-if="showimg1&&this.getdetail.img1">
           <img :src="this.getdetail.img1" alt="">
           <div class="mask" v-show="maskshow" :style="this.positionxy"></div>
           </div>
         <div v-if="showimg2&&this.getdetail.img2">
           <img :src="this.getdetail.img2" alt="">
           <div class="mask" v-show="maskshow" :style="this.positionxy"></div>
          </div>
         <div v-if="showimg3&&this.getdetail.img3">
           <img :src="this.getdetail.img3" alt="">
           <div class="mask" v-show="maskshow" :style="this.positionxy"></div>
           </div>
         <div v-if="showimg4&&this.getdetail.img4">
           <img :src="this.getdetail.img4" alt="">
           <div class="mask" v-show="maskshow" :style="this.positionxy"></div>
           </div>
     </div>
     <div>
         <div @mouseenter="showpic()" v-if="this.getdetail.img" :style="this.borderimg"><img :src="this.getdetail.img" alt=""></div>
         <div @mouseenter="showpic1()" v-if="this.getdetail.img1" :style="this.borderimg1"><img :src="this.getdetail.img1" alt=""></div>
         <div @mouseenter="showpic2()" v-if="this.getdetail.img2" :style="this.borderimg2"><img :src="this.getdetail.img2" alt=""></div>
         <div @mouseenter="showpic3()" v-if="this.getdetail.img3" :style="this.borderimg3"><img :src="this.getdetail.img3" alt=""></div>
         <div @mouseenter="showpic4()" v-if="this.getdetail.img4" :style="this.borderimg4"><img :src="this.getdetail.img4" alt=""></div>    
     </div>
     <div class="big" v-show="this.showbig">
          <div v-if="showimg&&this.getdetail.img"><img :src="this.getdetail.img" :style="this.imgxy" alt=""></div>
         <div v-if="showimg1&&this.getdetail.img1"><img :src="this.getdetail.img1" :style="this.imgxy" alt=""></div>
         <div v-if="showimg2&&this.getdetail.img2"><img :src="this.getdetail.img2" :style="this.imgxy" alt=""></div>
         <div v-if="showimg3&&this.getdetail.img3"><img :src="this.getdetail.img3" :style="this.imgxy" alt=""></div>
         <div v-if="showimg4&&this.getdetail.img4"><img :src="this.getdetail.img4" :style="this.imgxy" alt=""></div>
     </div>

     </div>
     <div class="detailright">
      <div>
        {{this.getdetail.title}}
      </div>
      <div>
        <span>价格：</span><b>￥{{this.getdetail.price}}</b>
      </div>
      <div><span>运费</span><span>浙江杭州</span>至<span>成都</span><span>快递包邮</span></div>
       <div>
        <div>销量<span>{{this.getdetail.sale}}</span></div>
        <div>累计评价<span>{{this.getdetail.sale}}</span></div>
        <div>送天猫积分<span>{{this.getdetail.sale}}</span></div>
      </div>
      <div>
        化妆品净含量<span>500g/ml</span>
      </div>
       <div>
        <div>数量：</div>
        <div><div>-</div><div>{{this.count}}</div><div>+</div></div>
      </div>
        
        <div><div>立即购买</div><div>加入购物车</div></div>
        <div>
          <div>服务承诺</div>
          <div>增保价险</div>
          <div>过敏包退</div>
          <div>正品保证</div>
          <div>极速退款</div>
          <div>支付方式</div>
          <div>赠运费险</div>   
          <div>七天无理由退货</div>     
          </div>
     </div>
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
     getdetail:this.$store.getters.getdetail,
     showimg:true,
     showimg1:false,
     showimg2:false,
     showimg3:false,
     showimg4:false,
     maskshow:false,
     showbig:false,
     borderimg:{
       border:"none"
     },
      borderimg1:{
       border:"none"
     },
     borderimg2:{
       border:"none"
     },
     borderimg3:{
       border:"none"
     },
    borderimg4:{
       border:"none"
     },
     positionxy:{
       top:"0px",
       left:"0px"
     },
    imgxy:{
       top:"0px",
       left:"0px"
     },
     count:1,
    };
  },
   methods: {
       showpic(){
           this.showimg=true;
           this.showimg1=false;
           this.showimg2=false;
           this.showimg3=false;
           this.showimg4=false; 
           this.borderimg.border="1px solid #333"
          this.borderimg2.border="none"   
           this.borderimg3.border="none" 
           this.borderimg4.border="none" 
           this.borderimg1.border="none"            
       },
        showpic1(){
           this.showimg=false;
           this.showimg1=true;
           this.showimg2=false;
           this.showimg3=false;
           this.showimg4=false; 
           this.borderimg1.border="1px solid #333" 
           this.borderimg2.border="none"   
           this.borderimg3.border="none" 
           this.borderimg4.border="none" 
           this.borderimg.border="none"   
       },
         showpic2(){
           this.showimg=false;
           this.showimg1=false;
           this.showimg2=true;
           this.showimg3=false;
           this.showimg4=false;
           this.borderimg2.border="1px solid #333"
           this.borderimg1.border="none"   
           this.borderimg3.border="none" 
           this.borderimg4.border="none" 
           this.borderimg.border="none"      
       },
       showpic3(){
           this.showimg=false;
           this.showimg1=false;
           this.showimg2=false;
           this.showimg3=true;
           this.showimg4=false;
           this.borderimg3.border="1px solid #333" 
           this.borderimg2.border="none"   
           this.borderimg1.border="none" 
           this.borderimg4.border="none" 
           this.borderimg.border="none"      
       },
       showpic4(){
           this.showimg=false;
           this.showimg1=false;
           this.showimg2=false;
           this.showimg3=false;
           this.showimg4=true; 
           this.borderimg4.border="1px solid #333" 
           this.borderimg2.border="none"   
           this.borderimg3.border="none" 
           this.borderimg1.border="none" 
           this.borderimg.border="none"   
       },
       showmask(){
        this.maskshow=true; 
        this.showbig=true;   
       },
       hiddenmask(){
         this.maskshow=false;  
         this.showbig=false;    
       },
       // 当鼠标移动时触发
        movemask(e) {
        // window.console.log(e)
      var x=e.clientX;
			var y=e.clientY;
           // 获取当前位置x
        this.positionxy.top=y-125+"px";
        // window.console.log(this.positionxy.top)
        this.positionxy.left=x-125+"px";
        this.imgxy.top=-(y-125)*5+"px";
        this.imgxy.left=-(x-125)*5+"px";
        if (x>525) {
				this.positionxy.left=400+"px";
			  this.imgxy.left=-2000+"px";
				
			}else if(x<125){
				 this.positionxy.left=0+"px";
			   this.imgxy.left=0+"px";
			}
			if (y>525) {
				 this.positionxy.top=400+"px";
			   this.imgxy.top=-2000+"px";
				
			}else if(y<125){
				this.positionxy.top=0+"px";
			  this.imgxy.top=0+"px";
			}
    }
       

        
    },
  mounted: function() {
    window.console.log(this.$store.getters.getdetail)
  }
};
</script>

<style scoped>
#shopdetail{
  width:1200px;
  height:650px;
  background:pink;
  margin:0px auto;
  display:flex;
  justify-content: space-around;
}
/* 左边 */
.detailleft{
    margin-top:20px;
    width:500px;
    height:600px;
    /* background:yellow; */
    position: relative;
}

.detailleft>div:nth-child(1){
    /* background:blue; */
    width:500px;
    height:500px;
}
.detailleft>div:nth-child(1)>div>img{
    width:500px;
    height:500px;
}
.detailleft>div:nth-child(2)>div>img{
    width:90px;
    height:90px;
}
.detailleft>div:nth-child(2){
    /* background:red; */
    width:500px;
    height:90px;
    margin-top:5px;
     display:flex;
}
.detailleft>div:nth-child(2)>div{
    width:90px;
    height:90px;
    margin-left: 5px;
   
}
.detailleft>div:nth-child(2)>div>img{
    width:90px;
    height:90px;
}
			.big{
				overflow: hidden;
				position: absolute;
				left: 520px;
				top: 0px;
        width:500px;
        height:500px;
				background-color:red;
				/* display: none; */
			}
      	.big img{
        width:2500px;
        height:2500px;
        position: absolute;
			}
			.mask {
				width: 100px;
				height: 100px;
				position: absolute;
        z-index: 10;
        background:rgba(233, 77,77,0.5);
			}
      /* 右边 */
    .detailright{
     margin-top:20px;
    background:blue;
    width:650px;
  height:600px;
}
.detailright>div:nth-child(1){
    font-size: 24px;
    margin-top: 10px;
}

</style>
