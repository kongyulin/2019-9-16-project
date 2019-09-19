<template>
  <div id="shoplist">
  <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="全部" name="first" class="list">
      <div v-for="item in shoplist" :key="item.id">
        <div class="alllist">
          <img :src="item.img" alt="">
           <div style="color:red">￥{{item.price}}</div>
           <div>{{item.title}}</div>
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="百雀羚草木" name="second" class="list">
       <div v-for="item in shop1" :key="item.id">
        <div class="alllist">
          <img :src="item.img" alt="">
           <div style="color:red">￥{{item.price}}</div>
           <div>{{item.title}}</div>
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="三生花" name="third" class="list">
        <div v-for="item in shop2" :key="item.id">
        <div class="alllist">
          <img :src="item.img" alt="">
           <div style="color:red">￥{{item.price}}</div>
           <div>{{item.title}}</div>
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="气韵" name="fourth" class="list">
        <div v-for="item in shop3" :key="item.id">
        <div class="alllist">
          <img :src="item.img" alt="">
           <div style="color:red">￥{{item.price}}</div>
           <div>{{item.title}}</div>
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="海之秘" name="fifth" class="list">
        <div v-for="item in shop4" :key="item.id" class="alllist">
          <img :src="item.img" alt="">
           <div style="color:red">￥{{item.price}}</div>
          <div>{{item.title}}</div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="小雀幸" name="sixth" class="list">
        <div v-for="item in shop5" :key="item.id">
        <div class="alllist">
          <img :src="item.img" alt="">
           <div style="color:red">￥{{item.price}}</div>
           <div>{{item.title}}</div>
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="小幸韵" name="seventh" class="list">
        <div v-for="item in shop6" :key="item.id">
        <div class="alllist">
          <img :src="item.img" alt="">
           <div style="color:red">￥{{item.price}}</div>
           <div>{{item.title}}</div>
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="百雀羚男士" name="eight" class="list">
         <div v-for="item in shop7" :key="item.id">
        <div class="alllist">
          <img :src="item.img" alt="">
           <div style="color:red">￥{{item.price}}</div>
           <div>{{item.title}}</div>
        </div>
      </div>
    </el-tab-pane>
  </el-tabs>
  </div>
</template>

<script>
export default {
  name: "app",
    data() {
      return {
        activeName: 'first',
        shoplist:[],
        shop1:[],
        shop2:[],
        shop3:[],
        shop4:[],
        shop5:[],
        shop6:[],
        shop7:[],
      };
    },
        methods: {
      handleClick() {
       
      }
    }, 
  components: {},
  mounted: function() {
    let that = this;
    this.$ajax
      .post("http://localhost:8081/shop/shoplist")
      .then(function(response) {
        window.console.log(response);
        that.shoplist = response.data;
        var ShopArr = response.data;
        for (let index = 0; index < ShopArr.length; index++) {
          if (ShopArr[index].classify == "百雀羚草木") {
            that.shop1.push(ShopArr[index]);
          }else if(ShopArr[index].classify == "三生花"){
             that.shop2.push(ShopArr[index]);
          }else if(ShopArr[index].classify == "气韵"){
             that.shop3.push(ShopArr[index]);
          }else if(ShopArr[index].classify == "海之秘"){
             that.shop4.push(ShopArr[index]);
          }else if(ShopArr[index].classify == "小雀幸"){
             that.shop5.push(ShopArr[index]);
          }else if(ShopArr[index].classify == "小幸韵"){
             that.shop6.push(ShopArr[index]);
          }else if(ShopArr[index].classify == "百雀羚男士"){
             that.shop7.push(ShopArr[index]);
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
#shoplist {
  width: 1200px;
  min-height: 500px;
  margin: 0px auto;
  margin-top: 10px;
}
.list{
  width: 1200px;
display: flex;
justify-content: space-around;
flex-wrap: wrap;
}

.alllist{
  background: #F1F3F4;
  width: 290px;
  height: 400px;
  margin-top: 10px;
  border:1px solid #F4F4F4;
}
.alllist>div{
 margin-left: 10px;
 padding-right: 10px;
}
.alllist>img{
  width: 280px;
  height: 300px;
   margin-left: 5px;
    margin-top: 10px;
   border:1px solid #F4F4F4;
   box-shadow: 2px 2px 2px #7B7676;
}
</style>