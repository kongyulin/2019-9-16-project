<template>
  <div id="myOrder">
    <div @click="toMyorder()" style="font-size:20px;color:orange;cursor: pointer;">查看我的订单</div>
    <div v-show="this.flage">
      <div v-if="this.$store.getters.getmyorder.length">
        <el-table :data="this.$store.getters.getmyorder" stripe style="width: 100%">
          <el-table-column prop=" " label=" " width="80">
            <template slot-scope="scope">{{scope.$index+1}}</template>
          </el-table-column>
          <el-table-column prop="img" label=" " width="200">
            <template slot-scope="scope">
              <img :src="scope.row.img" width="80" height="80" />
            </template>
          </el-table-column>
          <el-table-column prop="title" label="商品名" width="180"></el-table-column>
          <el-table-column prop="price" label="价格" width="180"></el-table-column>
          <el-table-column prop="count" label="数量"></el-table-column>
        </el-table>
        <div style="margin-top: 20px">
          <div class="total">
            合计：¥
            <span>{{totalPrice}}</span>元
          </div>
        </div>
      </div>

      <div v-else>
          <div style="width:100%;text-align: center;">
              <span style="font-size:30px;">
              还没有订单
          </span>
          <span @click="toShopping()" style="color:orangered;cursor: pointer;">去逛逛</span>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "myOrder",
  components: {},
  computed: {
    //计算并获取总价
    totalPrice() {
      let total = 0;
      for (let i = 0; i < this.$store.getters.getmyorder.length; i++) {
        let item = this.$store.getters.getmyorder[i];
        total += item.price * item.count;
      }
      return total;
    }
  },
  data() {
    return {
      flage: false
    };
  },
  methods: {
    toMyorder() {
      if (!this.flage) {
        this.flage = true;
        console.log(this.$store.getters.getmyorder);
      } else {
        this.flage = false;
      }
    },
    toShopping(){
        this.$router.push('/')
    }
  }
};
</script>

<style scoped>

/* div:{
    text-align: center;
} */
</style>
