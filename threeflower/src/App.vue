<template>
  <div id="app">
   <Home></Home>
   <Login></Login>
  </div>
</template>

<script>
import Home from './views/home.vue'

import Login from './components/login.vue'

export default {
  name: 'app',
  components: {
    Home,
    Login
  }
}
</script>

<style>
body{
  padding: 0px;
  margin: 0px;
}

</style>
