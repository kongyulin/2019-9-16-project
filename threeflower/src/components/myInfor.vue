<template>
  <div id="myInfor">
    <!-- 昵称修改 -->
    <MyNickname></MyNickname>

    <!-- 用户头像修改 -->
    <MyImage></MyImage>
  </div>
</template>

<script>
import MyNickname from './myNickname.vue'
import MyImage from './myImage.vue'
export default {
  name: "home",
  components: {
    MyNickname,
    MyImage
  },
  data() {
    return {
     
    };
  },
   methods: {
        
    },
};
</script>

<style scoped>

</style>
