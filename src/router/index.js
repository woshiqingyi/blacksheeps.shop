import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Router from 'vue-router'
import login from '@/components/login'
import shoppingcart from '@/components/shoppingcart'
import commoditydetails from '@/components/commoditydetails'
import homepage from '@/components/homepage/homepage'
import introduce from '@/components/homepage/introduce'

Vue.use(ElementUI)
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: homepage,
      redirect: 'introduce',
      children: [
        {
          path: '/introduce',
          name: 'introduce',
          component: introduce
        },
        {
          path: '/login',
          name: 'login',
          component: login
        }
      ]
    },
    {
      path: '/shoppingcart',
      name: 'shoppingcart',
      component: shoppingcart
    },
    {
      path: '/commoditydetails',
      name: 'commoditydetails',
      component: commoditydetails
    }
  ]
})
