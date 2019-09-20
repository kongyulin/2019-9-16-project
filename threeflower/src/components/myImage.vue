<template>
  <div id="myImage">
    <!-- 用户头像修改 -->
    <div>我的头像</div>
    <div class="item_bock head_p">
      <div class="head_img">
        <img v-if='this.$store.getters.getuname.img' :src='this.$store.getters.getuname.img' alt />
        <img v-else :src="circleUrl" alt />
      </div>
      <div class="setting_right" @click.stop="uploadHeadImg">
        <div class="caption">选择图片</div>
      </div>
      <input type="file" accept="image/*" @change="handleFile" class="hiddenInput" />
    </div>
  </div>
</template>

<script>
export default {
  name: "myImage",
  components: {},
  data() {
    return {
        circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
    };
  },
  methods: {
    // // 打开图片上传
    uploadHeadImg: function() {
      this.$el.querySelector(".hiddenInput").click();
    },
    // 将头像显示
    handleFile: function(e) {
      let $target = e.target || e.srcElement;
      let file = $target.files[0];
      var reader = new FileReader();
      reader.onload = data => {
        let res = data.target || data.srcElement;
        this.circleUrl = res.result;
        this.$store.getters.getuname.img=res.result
        // console.log( res.result)
      };
      reader.readAsDataURL(file);
    }
  }
};
</script>

<style scoped>
.item_bock {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 94px;
  width: 300px;
  padding: 0px 24px 0px 38px;
  border-bottom: 1px solid #f7f7f7;
  background: #fff;
}
.head_p {
  height: 132px;
}
.head_img {
  height: 90px;
}
.head_img img {
  width: 90px;
  height: 90px;
  border-radius: 50px;
}
.setting_right {
  display: flex;
  height: 37px;
  justify-content: flex-end;
  align-items: center;
}
.hiddenInput {
  display: none;
}
.caption {
  color: #8f8f8f;
  font-size: 26px;
  height: 37px;
}
</style>
