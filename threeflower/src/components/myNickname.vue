<template>
  <div id="myNickname">
    <!-- 昵称修改 -->
    <div>我的昵称：{{this.$store.getters.getuname.nickname}}</div>
    <div>
       <el-form :inline="true" :model="formInline" class="demo-form-inline">
  <el-form-item label="修改昵称">
    <el-input v-model="formInline.nickname" placeholder="请输入修改的昵称"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">确认修改</el-button>
  </el-form-item>
</el-form>
    </div>
  </div>
</template>
<script>

export default {
  name: "myNickname",
  components: {
  },
  data() {
    return {
         formInline: {
          nickname: '',
          id:this.$store.getters.getuname.id
        },
    };
  },
   methods: {
       onSubmit() {
            this.$ajax
            .post(this.$store.state.address+"/user/nickname", this.formInline)
            .then((response)=>{
              if (response.data[0].name == this.$store.getters.getuname.name) {
                alert("修改成功");
                this.$store.dispatch('setAccount',response.data[0]);
                // 再次请求数据
                this.$ajax.post(this.$store.state.address+"/user/login",this.$store.getters.getuname)
                .then((response)=>{
                    this.$store.dispatch('setAccount',response.data.userinfo);
                })
                
              }
            })
            .catch(function(error) {
              window.console.log(error);
            });
      }
    },
};
</script>

<style scoped>

</style>
