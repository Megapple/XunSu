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
import { Popup } from 'vant';
import { Area } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Icon } from 'vant';
import { RadioGroup, Radio } from 'vant';
import { Picker } from 'vant';
import { Stepper } from 'vant';

Vue.use(Stepper);

Vue.use(Picker);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(Icon);
Vue.use(Cell).use(CellGroup);
Vue.use(Popup);
Vue.use(Area);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
