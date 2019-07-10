import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Detail from '../components/Detail.vue'
//引入Find_order_page组件
import Find_order_page from "../components/FindHomeStay/Find_order_page.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/Find_order_page',component:Find_order_page},
    {path: '/',name: 'HelloWorld',component: HelloWorld},
    {path: '/detail',name: 'Detail',component: Detail}
  ]
})
