<template>
 <div>
<mt-tab-container v-model="selected">
    <mt-tab-container-item id="hotel">
    <!-- 顶部轮播 -->
 <mt-swipe :auto="2000">
  <mt-swipe-item v-for="(item,i) of items" :key="i">
    <a :href="item.href" rel="external nofollow">
       <img :src="require('../assets/img/1.jpg')" class="img"/>
    </a>
  </mt-swipe-item>
    <mt-swipe-item v-for="(item,i) of items" :key="i">
    <a :href="item.href" rel="external nofollow">
       <img :src="require('../assets/img/2.jpg')" class="img"/>
    </a>
  </mt-swipe-item>
 </mt-swipe>
 <!-- 搜索框 -->
 <div class="searchdiv clearfix">
    <input placeholder="搜索目的地/酒店" class="search"/>
    <img :src="require('../assets/img/glass.png')"  class="searchImg "/>
    <span>|</span>
    <div class="location">
      <a href="#">
        <img :src="require('../assets/img/option.png')"  class="locationImg"/>
        <span class="locationtxt">搜附近</span>
      </a>
    </div>
 </div>
 <div class="index clearfix">
     <!-- 一楼 -->
    <div>
    <div class="city">
        <mt-button size="small" v-for="(item,i) of lists" :key="i" @click="setActive" :data-idx="i">{{item}}
        </mt-button>
    </div>
    <div>
    <mt-tab-container v-model="active">
        <mt-tab-container-item id="tab1">
            <container :img_dali1="require('../assets/img/dlgc.jpg')" 
            :img_dali2="require('../assets/img/dlyc.jpg')" 
            :img_dali3="require('../assets/img/dljz.jpg')"
            :img_dali4="require('../assets/img/dljr.jpg')" ></container>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab2">
            <container2 :img_hz1="require('../assets/img/hzbj.jpg')" 
            :img_hz2="require('../assets/img/hzmj.jpg')"
            :img_hz3="require('../assets/img/hzys.jpg')"
            :img_hz4="require('../assets/img/hzxh.jpg')"></container2>
        </mt-tab-container-item>        
        <mt-tab-container-item id="tab3">
            <container3 :img_cd1="require('../assets/img/cdqs2.jpg')" 
            :img_cd2="require('../assets/img/cdsx1.jpg')"
            :img_cd3="require('../assets/img/cdsx2.jpg')"
            :img_cd4="require('../assets/img/cdcz.jpg')"></container3>
        </mt-tab-container-item>        
        <mt-tab-container-item id="tab4">
            <container4 :img_gl1="require('../assets/img/yszj.jpg')" 
            :img_gl2="require('../assets/img/ysgs.jpg')"
            :img_gl3="require('../assets/img/yswb.jpg')"
            :img_gl4="require('../assets/img/ysxs.jpg')"></container4>
        </mt-tab-container-item>
    </mt-tab-container>
    <!-- <mt-button><a href="#">查看更多酒店 ></a></mt-button> -->
    </div>
    </div>
    <!-- 中间过渡 -->
    <div class="middle">
        <img src="../assets/img/picture/dnkss.png" alt="" >
    </div>
    <!-- 二楼 -->
<<<<<<< HEAD
 <mt-swipe :auto="2000">
=======
    <div class="mdswipe">
 <mt-swipe :auto="2000" >
>>>>>>> d17a36463f255597412e81471a4516a4b678bb08
  <mt-swipe-item v-for="(item,i) of items" :key="i">
    <a :href="item.href" rel="external nofollow">
       <img :src="require('../assets/img/1.jpg')" class="img"/>
    </a>
  </mt-swipe-item>
    <mt-swipe-item v-for="(item,i) of items" :key="i">
    <a :href="item.href" rel="external nofollow">
       <img :src="require('../assets/img/2.jpg')" class="img"/>
    </a>
  </mt-swipe-item>
 </mt-swipe>
<<<<<<< HEAD
=======
 </div>
>>>>>>> d17a36463f255597412e81471a4516a4b678bb08
   <div class="tb">
       <div class="tb_bar">
           <i class="iconfont icon-gongwenbao"></i>
           <span>商旅合作</span>
        </div>
       <div class="tb_bar">
           <i class="iconfont icon-jinqian"></i>
           <span>免押入住</span>
        </div>
       <div class="tb_bar">
           <i class="iconfont icon-huabeizhangdan"></i>
           <span>蚂蚁花呗</span>
        </div>
       <div class="tb_bar">
           <i class="iconfont icon-ziyuan"></i>
           <span>金融保险</span>
        </div>
   </div>


    <div class="odds">
        <div class="odd_first">
        <h3>超值特惠酒店</h3>
        <p>限时折扣 专享冰点价</p>
        </div>
        <div class="oddstitle">
            <div class="oddbtns">
            <mt-button v-for="(odd,idx) of odds" :key="idx"  @click.prevent="setActive2" :data-id="idx" class="oddbtn "> 
                <span>{{odd.title}}</span>
                <span>{{odd.subtitle}}</span>
            </mt-button>
            </div>
        </div>
        <mt-tab-container v-model="active2">
            <mt-tab-container-item id="odd1">
                <odds :img_dali1="require('../assets/img/dlgc.jpg')" 
                :img_dali2="require('../assets/img/dlyc.jpg')" 
                :img_dali3="require('../assets/img/dljz.jpg')"
                :img_dali4="require('../assets/img/dljr.jpg')"></odds>
            </mt-tab-container-item>
            <mt-tab-container-item id="odd2">
                <odds2 :img_hz1="require('../assets/img/hzbj.jpg')" 
                :img_hz2="require('../assets/img/hzmj.jpg')"
                :img_hz3="require('../assets/img/hzys.jpg')"
                :img_hz4="require('../assets/img/hzxh.jpg')"></odds2>
            </mt-tab-container-item>
            <mt-tab-container-item id="odd3">
                <odds3 :img_gl1="require('../assets/img/yszj.jpg')" 
                :img_gl2="require('../assets/img/ysgs.jpg')"
                :img_gl3="require('../assets/img/yswb.jpg')"
                :img_gl4="require('../assets/img/ysxs.jpg')"></odds3>
            </mt-tab-container-item>
        </mt-tab-container>
        <mt-button><a href="#">查看更多超值特惠酒店 ></a></mt-button>
    </div>
  </div>
  </mt-tab-container-item>
  <mt-tab-container-item id="collect">
      <collect></collect>
  </mt-tab-container-item>
  <mt-tab-container-item id="order">
      <order></order>
  </mt-tab-container-item>
  <mt-tab-container-item id="me">
      我
  </mt-tab-container-item>
</mt-tab-container>
 <!--底部导航栏-->
 <mt-tabbar v-model="selected" fixed>
     <mt-tab-item id="hotel">
        <div class="bar">
        <i class="iconfont icon-fangzi"></i>
        <span>酒店</span>
        </div>
     </mt-tab-item>
     <mt-tab-item id="collect">
        <div class="bar">
        <i class="iconfont icon-shoucang5"></i>
        <span>收藏</span>  
        </div>  
     </mt-tab-item>
     <mt-tab-item id="order">
        <div class="bar">
        <i class="iconfont icon-dingdan"></i>
        <span>订单</span>
        </div> 
     </mt-tab-item>
     <mt-tab-item id="me">
        <div class="bar">
        <i class="iconfont icon-huiyuan-1"></i>
        <span>我的</span> 
        </div>
     </mt-tab-item>
 </mt-tabbar>
</div>
</template>
<script>
// 导入城市子组件
import Container from "./common/Container.vue"
import Container2 from "./common/Container2.vue"
import Container3 from "./common/Container3.vue"
import Container4 from "./common/Container4.vue"
import Odds from "./common/Odds.vue"
import Odds2 from "./common/Odds2.vue"
import Odds3 from "./common/Odds3.vue"
// 引入底部导航栏其他子组件
import Collect from "./common/Collect.vue"
import Order from "./Order/Order.vue"
// 引入底部导航栏图标
import "../font/font_tabbar/iconfont.css"
export default {
   components: {
       "container":Container,
       "container2":Container2,
       "container3":Container3,
       "container4":Container4,
       "collect":Collect,
       "order":Order,
       "odds":Odds,
       "odds2":Odds2,
       "odds3":Odds3,
   },
   data(){
       return{
           lists:["大理","杭州","成都","桂林"],
           odds:[
               {title:"今夜甩卖",subtitle:"海量特惠6折起"},
               {title:"天天特价",subtitle:"惊喜价天天有"},
               {title:"连住优惠",subtitle:"连住惊爆价"},
           ],
           active:"tab1",
           active2:"odd1",
           selected:"hotel",
           items: [
            {title: '你的名字',
            href: 'http://google.com',   
            url: 'http://127.0.0.1:3000/img/'
            }, 
            {title: '我的名字',
            href: 'http://baidu.com',   
            url: 'http://127.0.0.1:3000/img/'
            }],

       }
   },
   methods:{
        setActive(e){
            var idx=parseInt(e.target.dataset.idx);
            console.log(idx,typeof idx)
            this.active="tab"+(idx+1)
        },
        setActive2(e){
            var id=parseInt(e.target.dataset.id);
            this.active2="odd"+(id+1);
        }
   }
 }
</script>
<style>
*{margin:0;padding:0px;}
body{
    background-color:#f5f5f56e;
}
/* 轮播 */
 .mint-swipe { height: 218px;}
 .img {width: 100%;}
 /* 轮播下标 */
.mint-swipe-indicator{margin:23px 3px ;}
.mint-swipe-indicator.is-active{background-color:rgb(245, 156, 26);opacity:0.6;}
/* 搜索框 */
.searchdiv{
    width:85%;   
    height:40px;
    display:flex;
    justify-content:space-around;
    background-color:rgba(255, 255, 255);
    border-radius: 50%;
    box-shadow: 0 0 30px #b8bbbf;
    margin:-20px 29px;
    position:relative;
    z-index:10;
}
.clearfix::after{
    content:"";
    display: block;
    clear:both;
}
.search{
    width:100%;
    height:40px;
    border:0;
    padding:0 30px;
    border-radius: 30px;
    color:#ccc;
    outline: none;
}
.searchImg{
    width:20px;height:20px;
    position:absolute;
    top:12px; left:10px;
    }
.searchdiv>span{
    position: absolute;
    top:13px;right:95px;
    color:#ccc;
}
.location{display: flex;}
.locationImg{
    width:25px;height:25px;
    position: absolute;
    top:10px;right:65px;
    }
.locationtxt{
    font-size:14px;color:#ccc;
    position: absolute;
    top:12px;right:20px;
}
/* 城市 */ 
.index{
    margin-top:40px;
}
.city{margin:0 19px;}
.mint-button--small{
    height:22px;
    margin:0 15px;
    padding:0 15px;
    font-size:12px;
}
.mint-button{
    border-radius: 9px;
}
/* 中间过渡 */
.middle{text-align:center; margin:20px 40px;}
/* 二楼 */
<<<<<<< HEAD
.tb{
    display:flex;
    justify-content: space-around;
    margin-top:15px;
=======
.mdswipe {
    width:350px;height:300px;
    border-radius:8px;
    margin-left:10px;
}
.mdswipe img{height:300px;border-radius:8px;}
.tb{
    display:flex;
    justify-content: space-around;
    margin-top:-55px;
>>>>>>> d17a36463f255597412e81471a4516a4b678bb08
}
.tb .tb_bar{
    display: flex;
    flex-flow: column;
    color:pink;
}
.tb_bar i{font-size:27px;text-align: center; }
.tb_bar span{font-size:14px;text-align: center;margin-top:5px;}













.odd_first{margin-left:20px;margin-top:25px;}
.odd_first p{font-size:13px;color:#979696;margin:6px 0;}
.oddbtns{
    width:375px;height:120px;
    display:flex;
    align-items: center;
    }
.oddbtn{
    width:120px !important;
    height:100px !important;
    margin:0 10px !important;
    background-color:rgb(246, 248, 250);
    /* color:#f5f5f5; */
}
.oddbtn span:first-child{font-size:17px;}
.oddbtn span:nth-child(2){font-size:12px;}
<<<<<<< HEAD









/* 底部导航栏 */
/* .page-wrap{height:35px;} */
=======
/* 底部导航栏 */
>>>>>>> d17a36463f255597412e81471a4516a4b678bb08
.bar{
    display:flex;
    flex-flow:column;
    align-items: center;
    padding:5px 0; 
    margin-top:-8px;
}
.bar span{font-size:10px;margin-top:5px;margin-bottom:-11px; }
.icon-fangzi,.icon-shoucang5,.icon-huiyuan-1,.icon-dingdan{font-size:23px;}
/* 修改tabbar 默认文字颜色 */
.mint-tabbar>.mint-tab-item{color:#ccc;}
/* 修改tabbar 选中时图标颜色及背景 */
.mint-tabbar>.mint-tab-item.is-selected{
    background-color:#fafafa;
<<<<<<< HEAD
    color:rgb(245, 156, 26);
=======
    color:#ff8f9f;
>>>>>>> d17a36463f255597412e81471a4516a4b678bb08
}
.mint-tabbar>.mint-tab-item.is-selected span{color:rgb(131, 129, 129);}

</style>