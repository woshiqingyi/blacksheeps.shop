import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/home-page'
import login from '@/components/login'
import ShoppingCart from '@/components/shopping-cart'
import CommodityDetails from '@/components/commodity-details'

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
    },
    {
      path: '/shopping-cart',
      name: 'ShoppingCart',
      component: ShoppingCart
    },
    {
      path: '/commodity-details',
      name: 'CommodityDetails',
      component: CommodityDetails
    }
  ]
})
