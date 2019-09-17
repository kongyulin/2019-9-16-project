<template>
  <div id="app">
   <Home></Home>
   <Login></Login>
  </div>
</template>

<script>
import Home from './components/home.vue'
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

</style>
