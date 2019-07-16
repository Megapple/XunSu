<template>
 <div>
<mt-tab-container v-model="selected" class="mt">
    <mt-tab-container-item id="hotel">
    <!-- 顶部轮播 -->
 <mt-swipe :auto="2000">
  <mt-swipe-item ><!--v-for="(item,i) of items" :key="i"-->
    <!-- <a :href="item.href" rel="external nofollow"> -->
       <img :src="require('../assets/img/big7.jpeg')" class="img"/>
    <!-- </a> -->
  </mt-swipe-item>
  <mt-swipe-item ><!--v-for="(item,i) of items" :key="i"-->
    <!-- <a :href="item.href" rel="external nofollow"> -->
       <img :src="require('../assets/img/big.jpg')" class="img"/>
    <!-- </a> -->
  </mt-swipe-item>
  <mt-swipe-item ><!--v-for="(item,i) of items" :key="i"-->
    <!-- <a :href="item.href" rel="external nofollow"> -->
       <img :src="require('../assets/img/big2.jpeg')" class="img"/>
    <!-- </a> -->
  </mt-swipe-item>
  <mt-swipe-item ><!--v-for="(item,i) of items" :key="i"-->
    <!-- <a :href="item.href" rel="external nofollow"> -->
       <img :src="require('../assets/img/lb.jpg')" class="img"/>
    <!-- </a> -->
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
            <a href="#"><container :img_dali1="require('../assets/img/dlgc.jpg')" 
            :img_dali2="require('../assets/img/dlyc.jpg')" 
            :img_dali3="require('../assets/img/dljz.jpg')"
            :img_dali4="require('../assets/img/dljr.jpg')" ></container></a>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab2">
            <a href="#"><container2 :img_hz1="require('../assets/img/hzbj.jpg')" 
            :img_hz2="require('../assets/img/hzmj.jpg')"
            :img_hz3="require('../assets/img/hzys.jpg')"
            :img_hz4="require('../assets/img/hzxh.jpg')"></container2></a>
        </mt-tab-container-item>        
        <mt-tab-container-item id="tab3">
            <a href="#"><container3 :img_cd1="require('../assets/img/cdqs2.jpg')" 
            :img_cd2="require('../assets/img/cdsx1.jpg')"
            :img_cd3="require('../assets/img/cdsx2.jpg')"
            :img_cd4="require('../assets/img/cdcz.jpg')"></container3></a>
        </mt-tab-container-item>        
        <mt-tab-container-item id="tab4">
            <a href="#"><container4 :img_gl1="require('../assets/img/yszj.jpg')" 
            :img_gl2="require('../assets/img/ysgs.jpg')"
            :img_gl3="require('../assets/img/yswb.jpg')"
            :img_gl4="require('../assets/img/ysxs.jpg')"></container4></a>
        </mt-tab-container-item>
    </mt-tab-container>
    </div>
    </div>
    <!-- 中间过渡 -->
    <div class="middle">
        <img src="../assets/img/lb1.jpg" alt="" >
    </div>
    <!-- 二楼 -->
    <div class="theme">
        <div class="theme_first">
            <h3>主题酒店大搜索</h3>
            <p>一店一生活,发现最独特的入住体验</p>
        </div>
        <div class="theme_second">
            <div class="theme1">
                <div class="theme1_one">
                    <a href="#"><img src="../assets/img/big7.jpeg" alt=""></a>
                    <div class="theme_p">
                    <p>旅拍圣地</p>
                    </div>
                </div>
                <div class="theme1_two">
                    <a href="#"><img src="../assets/img/big9.jpg" alt=""></a>
                    <div class="theme_p">
                    <p>逛吃天堂</p>
                    </div>
                </div>
            </div>
            <div class="theme1">
                <div class="theme2_one">
                    <a href="#"><img src="../assets/img/big4.jpeg" alt=""></a>
                    <div class="theme_p"><p>古镇风情</p></div>                   
                </div>
                <div class="theme2_one">
                    <a href="#"><img src="../assets/img/big4.jpeg" alt=""></a>
                    <div class="theme_p"><p>蜜月圣地</p></div>
                </div>
                <div class="theme2_one">
                    <a href="#"><img src="../assets/img/big4.jpeg" alt=""></a>
                    <div class="theme_p"><p>亲自乐园</p></div>
                </div>
            </div>
        </div>
        <mt-button><a href="#">查看更多主题酒店 ></a></mt-button>
    </div>
    <div class="odds">
        <div class="odd_first">
        <h3>超值特惠酒店</h3>
        <p>限时折扣 专享冰点价</p>
        </div>
        <div class="oddstitle">
            <div class="oddbtns">
            <mt-button v-for="(odd,i) of odds" :key="i" @click.prevent="setActive2" :data-id="i"  class="oddbtn"> 
                <span>{{odd.title}}</span>
                <span>{{odd.subtitle}}</span>
            </mt-button>
         </div>   
        </div>
        <mt-tab-container v-model="active2">
            <mt-tab-container-item id="odd1">
                <a href="#"><odds :img_dali1="require('../assets/img/dlgc.jpg')" 
                :img_dali2="require('../assets/img/dlyc.jpg')" 
                :img_dali3="require('../assets/img/dljz.jpg')"
                :img_dali4="require('../assets/img/dljr.jpg')"></odds></a>
            </mt-tab-container-item>
            <mt-tab-container-item id="odd2">
                <a href="#"><odds2 :img_hz1="require('../assets/img/hzbj.jpg')" 
                :img_hz2="require('../assets/img/hzmj.jpg')"
                :img_hz3="require('../assets/img/hzys.jpg')"
                :img_hz4="require('../assets/img/hzxh.jpg')"></odds2></a>
            </mt-tab-container-item>
            <mt-tab-container-item id="odd3">
                <a href="#"><odds3 :img_gl1="require('../assets/img/yszj.jpg')" 
                :img_gl2="require('../assets/img/ysgs.jpg')"
                :img_gl3="require('../assets/img/yswb.jpg')"
                :img_gl4="require('../assets/img/ysxs.jpg')"></odds3></a>
            </mt-tab-container-item>
        </mt-tab-container>
        <mt-button><a href="#">查看更多超值特惠酒店 ></a></mt-button>
    </div>
    <div class="story_bottom ">
        <h3>我们の故事</h3>
        <mt-swipe :auto="2000">
            <mt-swipe-item>
                <a href="#"><img src="../assets/img/big9.jpg" alt=""></a>
            </mt-swipe-item>
            <mt-swipe-item>
                <a href="#"><img src="../assets/img/big9.jpg" alt=""></a>
            </mt-swipe-item>
            <mt-swipe-item>
                <a href="#"><img src="../assets/img/big9.jpg" alt=""></a>
            </mt-swipe-item>
            <mt-swipe-item>
                <a href="#"><img src="../assets/img/big9.jpg" alt=""></a>
            </mt-swipe-item>
        </mt-swipe>
        <a href="#"> ღ 快戳我</a>
        <!-- <a href="#"><img src="../assets/img/big9.jpg" alt=""></a> -->  
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
      <login></login>
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
import login from "./common/login.vue"
// 引入底部导航栏图标
import "../font/font_tabbar/iconfont.css"
export default {
   components: {
       "container":Container,
       "container2":Container2,
       "container3":Container3,
       "container4":Container4,
       "collect":Collect,
       "login":login,
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
        },
   }
 }
</script>
<style>
*{margin:0;padding:0px;}
body{
    background-color:#f5f5f56e;
}
a{text-decoration: none;}
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
    margin-bottom: 70px;
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
.middle{width:340px;height:80px;margin:30px auto;box-shadow: 0 0 20px #b8bbbf;}
.middle img{width:100%;height:80px;}
/* 二楼 */
.theme{margin-top:60px;}
.theme_first{
    margin-left:15px;
}
.theme_first p{font-size:13px;color:#979696;margin:6px 0;}
.theme_second{
    display:flex;
    flex-flow: column;
    margin-top:15px;
}
.theme1{
    display:flex;
    padding:5px 5px;
}
.theme1_one,.theme1_two,.theme2_one{
    width:250px;height:200px;
    position: relative;
    padding:0 5px;
}
.theme2_one{height:150px;margin-top:-50px;margin-bottom:-20px;}
.theme1_one img,.theme1_two img,.theme2_one img{width:100%;height:150px;border-radius: 8px;}
.theme2_one img{height:130px;}
.theme_p{
    width:65px;height:22px;
    line-height: 25px;
    text-align: center;
    position: absolute;
    top:0;left:5px;
    font-size:10px;
    color:#f5f5f5;
    border-top-left-radius: 8px;
    border-bottom-right-radius: 8px;
    padding:0 5px;
    background:linear-gradient(to right,rgb(255, 166, 0) 0%,rgb(252, 205, 78) 100%);
}
.theme1 .theme2_one:first-child .theme_p,.theme1 .theme2_one:nth-child(3) .theme_p{
    background:linear-gradient(to right,rgb(248, 155, 139) 0%,rgb(245, 115, 76) 100%);}
.theme1 .theme2_one:nth-child(2) .theme_p{
    background:linear-gradient(to right,rgb(136, 230, 217) 0%,rgb(105, 192, 243) 100%);}
.odd_first{margin-left:20px;margin-top:25px;}
.odd_first p{font-size:13px;color:#979696;margin:5px 0;}
.oddbtns{
    width:375px;height:120px;
    display:flex;
    align-items: center;
    margin-bottom:-20px;  
    margin-top:-10px;
    }
.oddbtn{
    width:120px !important;
    height:80px !important;
    margin:0 10px !important;
    /* background-color:rgb(245, 115, 76); */
    border-radius: 8px !important;
    outline: none;
    /* color:#f5f5f5; */
}
.oddbtn span:first-child{font-size:17px;}
.oddbtn span:nth-child(2){font-size:12px;}
.story_bottom{
    height:455px;
    text-align: center;
    margin-top:10px;
    padding:5px 0;
    box-shadow: 0 0 10px #ccc;
    position: relative;
    }
.story_bottom .mint-swipe {
   height:455px;
}
.story_bottom .mint-swipe-indicators{
    position: static;
}
.story_bottom img{
    width:320px;
    height: 400px;
    margin-top:10px;
    margin-bottom:0;
    box-shadow: 0 0 10px #ccc;
}
.story_bottom a{margin-top:-10px;z-index: 10; color:#656b79;}
/* 底部导航栏 */
.mt{margin-bottom: 35px;}
.bar{
    height:40px;
    display:flex;
    flex-flow:column;
    align-items: center;
    /* padding:5px 0;  */
    /* margin-top:-8px; */
    margin-bottom:-5px;   
}
.bar span{font-size:10px;margin-top:5px;margin-bottom:-11px; }
.icon-fangzi,.icon-shoucang5,.icon-huiyuan-1,.icon-dingdan{font-size:23px;}
/* 修改tabbar 默认文字颜色 */
.mint-tabbar>.mint-tab-item{color:#ccc;}
/* 修改tabbar 选中时图标颜色及背景 */
.mint-tabbar>.mint-tab-item.is-selected{
    background-color:#fafafa;
    color:rgb(245, 156, 26);
}
.mint-tabbar>.mint-tab-item.is-selected span{color:rgb(245, 156, 26);}

</style>