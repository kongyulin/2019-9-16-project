<template>
  <div id="myOrder">
    <div @click="toMyorder()" style="font-size:20px;color:orange;cursor: pointer;">查看我的订单</div>
    <div v-show="this.flage">
      <div v-if="orderarr.length">
        <div
          v-for="(item,index) in orderarr"
          :key="index"
          class="myOrder"
        >
          <el-table :data="orderarr[index]" stripe style="width: 100%">
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
              <span>{{totalPrice(orderarr[index])}}</span>元
            </div>
          </div>
        </div>
      </div>

      <div v-else>
        <div style="width:100%;text-align: center;">
          <span style="font-size:30px;">还没有订单</span>
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
  data() {
    return {
      flage: false,
      orderarr: []
    };
  },
  methods: {
    toMyorder() {
      if (!this.flage) {
        this.flage = true;
      } else {
        this.flage = false;
      }
    },
    toShopping() {
      this.$router.push("/");
    },
    //计算并获取总价
    totalPrice(arr) {
      let total = 0;
      for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        total += item.price * item.count;
      }
      return total;
    }
  },
  mounted: function() {
    this.$ajax
      .get(this.$store.state.address + "/shopcar/getMyorder",{
        params: { username: this.$store.getters.getuname.name }
      })
      .then(response => {
        let arr = response.data;

        // 将返回的数据根据时间存入不同的数组
        let types = [];
        for (let i in arr) {
          if (types.indexOf(arr[i].time) === -1) {
            types.push(arr[i].time);
          }
        }
        let obj = {};
        for (let k in types) {
          for (let j in arr) {
            if (arr[j].time == types[k]) {
              obj[types[k]] = obj[types[k]] || [];
              obj[types[k]].push(arr[j]);
            }
          }
        }
        for (let index in obj) {
          this.orderarr.push(obj[index]);
        }
      });
  }
};
</script>

<style scoped>
.myOrder{
  width: 90%;
  border:1px solid #EBEEF5;
  margin:40px auto;
}
</style>
