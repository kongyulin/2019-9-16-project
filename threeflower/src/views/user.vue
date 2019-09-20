<template>
  <div id="user">
    <Navbar></Navbar>
    <!-- 登录后 -->
    <div v-if="this.userinfo.name" class="user">
      <UserInfor></UserInfor>
    </div>

    <!-- 未登录时 -->
    <div v-else>
      <div>
        <h2>请登录后查看个人中心</h2>
      </div>
      <div id="noUser">
        <div class="image">
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568796967382&di=84839eee555a1225da2292abf58b049f&imgtype=0&src=http%3A%2F%2Fpic.16pic.com%2F00%2F37%2F10%2F16pic_3710864_b.jpg"
            alt
          />
        </div>
        <div class="forms">
          <div class="forms1">
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
                <el-input v-model="ruleForm.pass" placeholder="请输入密码" show-password></el-input>
              </el-form-item>

              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserInfor from '../components/userInfor.vue'
import Navbar from '../components/navbar.vue'
export default {
  name: "user",
  data() {
    return {
      // 用户
      userinfo: {},
      // 登录信息
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
  components: {
      UserInfor,
      Navbar
  },
  methods: {
    //登录
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let that = this;
          this.$ajax
            .post("http://localhost:8081/user/login", this.ruleForm)
            .then(function(response) {
              // window.console.log(response.data.userinfo);
              that.userinfo = response.data.userinfo;
              if (response.data.msg == "same") {
                alert("登录成功");
                that.$store.dispatch("setAccount", that.userinfo);
                that.$router.push("/user");
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
/* 未登录时 */
h2 {
  text-align: center;
}
#noUser {
  width: 75%;
  height: 400px;
  margin: 40px auto;
  border: 1px solid gainsboro;
  display: flex;
  flex-flow: wrap;
}
.image {
  width: 49%;
  height: 400px;
  border-right: 1px solid gainsboro;
  position: relative;
}
.image > img {
  width: 400px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.forms {
  width: 50%;
  height: 400px;
  position: relative;
}
.forms1 {
  width: 360px;
  height: 180px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
/* 登录后 */
.user {
  margin: 10px auto;
  width: 80%;
}

</style>
