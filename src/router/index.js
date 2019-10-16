import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
// import homepage from '@/components/homepage/homepage'
import introduce from '@/components/productpage/introduce'
import manage from '@/components/manage'
import register from '@/components/register'
import shoppingcart from '@/components/shoppingcart/shoppingcart'
import productdetails from '@/components/productdetails/productdetails'
import order from '@/components/order/order'
import orderlogistics from '@/components/order/orderlogistics'
import orderpayment from '@/components/order/orderpayment'

import accountmanage from '@/components/account/accountmanage'
import accountinfo from '@/components/account/accountinfo'
import bindaccount from '@/components/account/bindaccount'
import receiveaddress from '@/components/account/receiveaddress'
import helpcenter from '@/components/othersmatter/helpcenter'
import originalintention from '@/components/othersmatter/originalintention'
import contactme from '@/components/othersmatter/contactme'
import aftersale from '@/components/othersmatter/aftersale'
import returnedpurchase from '@/components/othersmatter/returnedpurchase'
import leavemessage from '@/components/othersmatter/leavemessage'

import collection from '@/components/collection'


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
          path: '/collection',
          name: 'collection',
          component: collection
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
          path: '/order',
          name: 'order',
          component: order
        },
        {
          path: '/orderlogistics',
          name: 'orderlogistics',
          component: orderlogistics
        },
        {
          path: '/helpcenter',
          name: 'helpcenter',
          component: helpcenter
        },
        {
          path: '/originalintention',
          name: 'originalintention',
          component: originalintention
        },
        {
          path: '/contactme',
          name: 'contactme',
          component: contactme
        },
        {
          path: '/aftersale',
          name: 'aftersale',
          component: aftersale
        },
        {
          path: '/returnedpurchase',
          name: 'returnedpurchase',
          component: returnedpurchase
        },
        {
          path: '/leavemessage',
          name: 'leavemessage',
          component: leavemessage
        },
        {
          path: '/orderpayment',
          name: 'orderpayment',
          component: orderpayment
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
