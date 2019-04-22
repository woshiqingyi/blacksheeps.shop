import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/home-page'
import login from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home-page',
      component: HomePage
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
