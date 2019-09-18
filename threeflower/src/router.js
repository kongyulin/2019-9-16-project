import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home.vue'
import Login from './views/login.vue'
import Register from './views/register.vue'
import User from './views/user.vue'
import Shoplist from './views/shoplist.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/user',
      component: User
    },
    {
      path: '/shoplist',
      component: Shoplist
    }
  ]
})