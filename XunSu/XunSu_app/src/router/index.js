import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Detail from '../components/detail/Detail.vue'
import DetailMap from '../components/detail/DetailMap.vue'
//引入Find_order_page组件
import Order from "../components/Order/Order.vue"
// 引入Home组件
import Orderdetail from "../components/Order/Orderdetail.vue"
//引入添加入住人Add组件
import Add from "../components/Order/Add.vue"
//引入Orderpay组件
import Orderpay from "../components/Order/Orderpay.vue"
// 引入Home及子组件
import Home from "../components/Home.vue"
import Home2 from "../components/Home2.vue"
import Collect from "../components/common/Collect.vue"
import Container from "../components/common/Container.vue"
import Container2 from "../components/common/Container2.vue"
import Container3 from "../components/common/Container3.vue"
import Container4 from "../components/common/Container4.vue"
import Odds from "../components/common/Odds.vue"
import Odds2 from "../components/common/Odds2.vue"
import Odds3 from "../components/common/Odds3.vue"

import Signin from "../components/common/signin.vue"
import Login from "../components/common/login.vue"
import Housting from "../components/common/ImHousting/Housting.vue"
import HoustLocation from "../components/common/ImHousting/HoustLocation.vue"
import UserMsg from "../components/common/ImHousting/usermsg.vue"
import UserImage from "../components/common/ImHousting/userimage.vue"
import Houstingmsg from "../components/common/ImHousting/Houstingmsg.vue"
import HoustingFacility from "../components/common/ImHousting/HoustingFacility.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name: 'HelloWorld',component: HelloWorld},
    {path:'/Order',component:Order},
    {path: '/Detail',name: 'Detail',component: Detail},
    {path: '/DetailMap',name: 'DetailMap',component: DetailMap},
    {path:'/Orderdetail',component:Orderdetail},
    {path:'/Signin',component:Signin},
    {path:'/Login',component:Login},
    {path:'/Housting',component:Housting},
    {path:'/Houstlocation',component:HoustLocation},
    {path:'/Home',component:Home},
    {path:'/Home2',component:Home2},
    {path:'/Collect',component:Collect},
    {path:'/Container',component:Container},
    {path:'/Container2',component:Container2},
    {path:'/Container3',component:Container3},
    {path:'/Container4',component:Container4},
    {path:'/Odds',component:Odds},
    {path:'/Odds2',component:Odds2},
    {path:'/Odds3',component:Odds3},
    {path:'/Add',component:Add},
    {path:'/Orderpay',component:Orderpay},
    {path:'/Usermsg',component:UserMsg},
    {path:'/Userimage',component:UserImage},
    {path:'/Houstingmsg',component:Houstingmsg},
    {path:'/HoustingFacility',component:HoustingFacility}
  ]
})
