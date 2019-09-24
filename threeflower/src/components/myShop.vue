<template>
  <div id="myShop">
    <!-- 购物车不为空时 -->
    <div v-if="this.$store.getters.getcar.length">
      <div style="width: 100%">
        <el-table
          ref="multipleTable"
          :data="this.$store.getters.getcar"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="img" label=" " width="200">
            <template slot-scope="scope">
              <img :src="scope.row.img" width="80" height="80" />
            </template>
          </el-table-column>
          <el-table-column prop="title" label="商品名" width="300"></el-table-column>
          <el-table-column prop="price" label="价格" width="120"></el-table-column>
          <el-table-column prop="count" label="数量" width="120">
            <template slot-scope="scope">
              <div class="contt">
                <span class="conts" @click="handleReduce(scope.$index)">-</span>
                {{scope.row.count}}
                <span
                  class="conts"
                  @click="handleAdd(scope.$index)"
                >+</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop=" " label=" " width="150">
            <template slot-scope="scope">
              <el-button @click="handleRemove(scope.row.id)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div style="margin-top: 20px">
          <div class="total">
            总价：¥
            <span>{{totalPrice}}</span>元
          </div>
          <el-button @click="toggleSelection()">取消选择</el-button>
          <el-button @click="togetCar()">去结算</el-button>
        </div>
      </div>
    </div>

    <!-- 购物车为空时 -->
    <div v-else>
      <div class="emptys1">您的购物车还是空的！</div>
      <div @click="toshouye" class="emptys2">马上去购物</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "myShop",
  components: {},
  computed: {
    //计算并获取总价
    totalPrice() {
      let total = 0;
      for (let i = 0; i < this.$store.getters.getorder.length; i++) {
        let item = this.$store.getters.getorder[i];
        total += item.price * item.count;
      }
      return total;
    }
  },
  data() {
    return {
    
    };
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.$store.dispatch("setOrder", val);
    },

    // 提交订单
    togetCar() {  
      this.$store.dispatch("setMyorder", this.$store.getters.getorder);
      this.$ajax.get(this.$store.state.address+'/shopcar/myOrder',{
        params: { myOrder: this.$store.getters.getorder}
      })
      this.$router.push('/pay')
    },

    //减少商品数量
    handleReduce(index) {
      if (this.$store.getters.getcar[index].count === 1) return;
      this.$store.getters.getcar[index].count--;
    },
    //增加商品数量
    handleAdd(index) {
      this.$store.getters.getcar[index].count++;
    },
    //从购物车中移除该商品
    handleRemove(index) {
      this.$ajax.get(this.$store.state.address+'/shopcar/deleteShopcar',{params: { id:index }})
      .then((response)=>{
        if(response.data.affectedRows==1){
          alert('删除成功')
          this.$ajax
      .get(this.$store.state.address+"/shopcar/searchCar", {
        params: { username: this.$store.getters.getuname.name }
      })
      .then(response => {
        this.$store.dispatch("setShopcar", response.data);
      });
        }
      })
    },

    // 购物车为空的时
    toshouye() {
      this.$router.push("/");
    }
  },
  mounted: function() {
    this.$ajax
      .get(this.$store.state.address+"/shopcar/searchCar", {
        params: { username: this.$store.getters.getuname.name }
      })
      .then(response => {
        this.$store.dispatch("setShopcar", response.data);
      });
  }
};
</script>

<style scoped>
#myShop{
  width: 90%;
  margin: 0 auto;
  border: 1px #EBEEF5 solid;
}
/* 购物车不为空时 */
.conts {
  display: inline-block;
  width: 20px;
  height: 20px;
  font-size: 16px;
  text-align: center;
  line-height: 20px;
}
.conts:hover {
  background-color: gainsboro;
  cursor: pointer;
}
.total > span {
  color: orangered;
  font-size: 20px;
}

/* 购物车为空时 */
.emptys {
  width: 100%;
  height: 400px;
}
.emptys1 {
  font-size: 40px;
  height: 100px;
  color: brown;
}
.emptys2 {
  font-size: 20px;
}
.emptys2:hover {
  color: orange;
  cursor: pointer;
}
</style>
