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
import { DatetimePicker } from 'vant';
import { DropdownMenu, DropdownItem } from 'vant';
import { Button } from 'vant';
import { TreeSelect } from 'vant';
import { Slider } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Icon } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';
import { RadioGroup, Radio } from 'vant';
import { Stepper } from 'vant';
import { Picker } from 'vant';
import { Field } from 'vant';
import { Uploader } from 'vant';
import { Image } from 'vant';
import { Tag } from 'vant';
import { Row, Col } from 'vant';

Vue.use(Row).use(Col);
Vue.use(Tag);
Vue.use(Image);
Vue.use(Uploader);
Vue.use(Field);
Vue.use(Picker);
Vue.use(Stepper);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(Checkbox).use(CheckboxGroup);
Vue.use(Icon);
Vue.use(Cell).use(CellGroup);
Vue.use(Slider);
Vue.use(TreeSelect);
Vue.use(Button);
Vue.use(DropdownMenu).use(DropdownItem);
Vue.use(DatetimePicker);
Vue.use(Popup);
Vue.use(Area);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App},
  template: '<App/>',
})
//判断是否需要登录权限

