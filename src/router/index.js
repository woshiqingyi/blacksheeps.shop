import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Router from 'vue-router'
import login from '@/components/login'
// import homepage from '@/components/homepage/homepage'
import introduce from '@/components/productpage/introduce'
import manage from '@/components/manage'
import register from '@/components/register'

import shoppingcart from '@/components/shoppingcart/shoppingcart'
import productdetails from '@/components/productdetails/productdetails'

Vue.use(ElementUI)
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'manage',
      component: manage,
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
        },
        {
          path: '/register',
          name: 'register',
          component: register
        },
        {
          path: '/shoppingcart',
          name: 'shoppingcart',
          component: shoppingcart
        },
        {
          path: '/productdetails',
          name: 'productdetails',
          component: productdetails
        }
      ]
    }
  ]
})
