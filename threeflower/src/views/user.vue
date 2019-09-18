<template>
  <div id="user">
    <!-- <div>{{this.userinfo.name}}</div> -->
    <div v-if="this.userinfo.name">jmklml</div>

    <div v-else>
      <div class="image">
        <img src="http://www.pechoin.com/wp-content/uploads/2018/09/img-logo-01.png" alt />
      </div>
      <div class="forms">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="用户名" prop="name">
            <el-input v-model="ruleForm.name" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input v-model="ruleForm.pass" placeholder="请输入密码"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "user",
  data() {
    return {
      // 用户
      userinfo: {},
      ruleForm: {
        name: "",
        pass: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        pass: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          }
        ]
      }
    };
  },
  components: {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let that = this;
          this.$ajax
            .post("http://localhost:8081/user/login", this.ruleForm)
            .then(function(response) {
              window.console.log(response.data.userinfo);
              that.userinfo = response.data.userinfo;
              if (response.data.msg == "same") {
                alert("登录成功");
                that.$store.dispatch("setAccount", that.userinfo);
                that.$router.push("/");
              } else if (response.data.msg == "different") {
                alert("密码错误");
              } else if (response.data.msg == "none") {
                alert("用户不存在");
              }
            })
            .catch(function(error) {
              window.console.log(error);
            });
        } else {
          window.console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  mounted: function() {
    this.userinfo = this.$store.getters.getuname;
    // window.console.log( this.$store.getters.getuname)
  }
};
</script>

<style scoped>
</style>
