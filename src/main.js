// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import ElementUI from 'element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import globaldate from '@/assets/globaldate'
Vue.prototype.$ = globaldate



// import 'jquery.cookie'
import {Loading} from 'element-ui';
import {Message} from 'element-ui'
window.$loading=Loading
window.$message=Message
import $v from '@/assets/js/vcan.js'

Vue.config.productionTip = false
Vue.use(ElementUI)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
