  
import Vue from 'vue'
import Router from 'vue-router'
import Homepage from './views/Homepage.vue'
import Dashboard from './views/Dashboard.vue'
import About from './views/About.vue'
import SignIn from './views/SignIn.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    }
  ]
})