<template>
  <div id="app">
    
      
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {},
  mounted: function() {
    let that = this;
    this.$ajax
      .post("http://localhost:8081/shop/shoplist")
      .then(function(response) {
        window.console.log(response)
      })
      .catch(function(error) {
        window.console.log(error);
      });
  }
}
</script>

<style scoped>

</style>