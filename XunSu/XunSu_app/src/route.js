import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
// 1.引入组件
import Home from "./components/Home.vue"
Vue.use(Router)
//2.为组件配置路径
export default new Router({
    routes:[
        {path:'/',component:HelloContainer},
        {path:'/Home',component:Home},
    ]
})