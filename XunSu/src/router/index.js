import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Detail from '../components/Detail.vue'
//引入Find_order_page组件
import Order from "../components/Order/Order.vue"
//引入Pay 组件
import Pay from "../components/Order/Pay.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name: 'HelloWorld',component: HelloWorld},
    {path:'/Order',component:Order},
    {path: '/detail',name: 'Detail',component: Detail},
    {path:'/Pay',component:Pay}
  ]
})
