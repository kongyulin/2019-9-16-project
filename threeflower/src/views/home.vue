<template>
  <div id="home">
    <Navbar></Navbar>
    <Cont></Cont>
  </div>
</template>
<script>
import Navbar from '../components/navbar.vue'
import Cont from '../components/cont.vue'
export default {
  name: "home",
  components: {
    Navbar,
    Cont
  },
  data() {
    return {
     
    };
  },
   methods: {
        
    },
  mounted: function() {
    // window.console.log(this.$store.getters.getuname)
  }
};
</script>

<style scoped>
#home{
  width: 100%;
}
</style>
