import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Detail from '../components/Detail.vue'
//引入Find_order_page组件
import Order from "../components/Order/Order.vue"
//引入Pay 组件
import Pay from "../components/Order/Pay.vue"

import Signin from "../components/common/signin.vue"
import Login from "../components/common/login.vue"
import Housting from "../components/common/ImHousting/Housting.vue"
import HoustLocation from "../components/common/ImHousting/HoustLocation.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name: 'HelloWorld',component: HelloWorld},
    {path:'/Order',component:Order},
    {path: '/detail',name: 'Detail',component: Detail},
    {path:'/Pay',component:Pay},
    {path:'/signin',component:Signin},
    {path:'/login',component:Login},
    {path:'/housting',component:Housting},
    {path:'/houstlocation',component:HoustLocation}
  ]
})
