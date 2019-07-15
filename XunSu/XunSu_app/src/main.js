// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'


import router from './router'
import axios from './axios'

import MintUI from '../node_modules/mint-ui'
import'mint-ui/lib/style.css'
Vue.use(MintUI)
import './font/detail_iconfont_style/iconfont.css'
import './font/order_iconfont_style/iconfont.css'
import './font/housting_iconfont_style/iconfont.css'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
