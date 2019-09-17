<template>
  <div id="home">
   
  </div>
</template>

<script>


export default {
  name: 'home',
  components: {
    
  },
  mounted:function() {
        this.$ajax
        .get("http://localhost:8081/home")
        .then(function(response) {
          window.console.log(response);
          // that.buyArr = response.data;
        })
        .catch(function(error){
            window.console.log(error)
        })
  } 

}
</script>

<style>

</style>