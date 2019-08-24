import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
// import homepage from '@/components/homepage/homepage'
import introduce from '@/components/productpage/introduce'
import manage from '@/components/manage'
import register from '@/components/register'
import shoppingcart from '@/components/shoppingcart/shoppingcart'
import productdetails from '@/components/productdetails/productdetails'

import accountmanage from '@/components/account/accountmanage'
import accountinfo from '@/components/account/accountinfo'
import bindaccount from '@/components/account/bindaccount'
import receiveaddress from '@/components/account/receiveaddress'

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
        },
        {
          path: '/accountmanage',
          name: 'accountmanage',
          component: accountmanage,
          redirect: 'accountinfo',
          children: [
            {
              path: '/accountinfo',
              name: 'accountinfo',
              component: accountinfo
            },
            {
              path: '/bindaccount',
              name: 'bindaccount',
              component: bindaccount
            },
            {
              path: '/receiveaddress',
              name: 'receiveaddress',
              component: receiveaddress
            }
          ]
        }
      ]
    }
  ]
})
