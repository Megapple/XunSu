import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Detail from '../components/Detail.vue'
//引入Find_order_page组件
import Order from "../components/Order/Order.vue"
//引入Pay 组件
import Pay from "../components/Order/Pay.vue"
// 引入Home及子组件
import Home from "../components/Home.vue"
import Container from "../components/common/Container.vue"
import Container2 from "../components/common/Container2.vue"
import Container3 from "../components/common/Container3.vue"
import Container4 from "../components/common/Container4.vue"

import Signin from "../components/common/signin.vue"
import Login from "../components/common/login.vue"
import Housting from "../components/common/ImHousting/Housting.vue"
import HoustLocation from "../components/common/ImHousting/HoustLocation.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name: 'HelloWorld',component: HelloWorld},
    {path:'/Order',component:Order},
    {path: '/Detail',name: 'Detail',component: Detail},
    {path:'/Pay',component:Pay},
    {path:'/Signin',component:Signin},
    {path:'/Login',component:Login},
    {path:'/Housting',component:Housting},
    {path:'/Houstlocation',component:HoustLocation},
    {path:'/Home',component:Home},
    {path:'/Container',component:Container},
    {path:'/Container2',component:Container2},
    {path:'/Container3',component:Container3},
    {path:'/Container4',component:Container4}
  ]
})
