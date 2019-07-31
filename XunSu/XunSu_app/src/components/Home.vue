<template>
 <div>
<mt-tab-container v-model="selected" class="mt">
    <mt-tab-container-item id="hotel">
    <!-- 顶部轮播 -->
 <mt-swipe :auto="2000" class="top_swipe" >
  <mt-swipe-item v-for="(item,i) of list.slice(0,4)"  :key="i">
       <img :src="'http://127.0.0.1:3000'+item.img" class="img"/>
  </mt-swipe-item>
 </mt-swipe>
 <!-- 搜索框 -->
 <div class="searchdiv clearfix">
    <input placeholder="搜索目的地/酒店" class="search" @click="search"/>
    <img :src="require('../assets/img/glass.png')"  class="searchImg "/>
    <span>|</span>
    <div class="location" @click="location">
        <img :src="require('../assets/img/option.png')"  class="locationImg" />
        <span class="locationtxt">搜附近</span>
    </div>
 </div>
  <div class="index clearfix">
     <!-- 一楼 -->
    <div>
    <div class="city">
        <mt-navbar v-model="active" class="city_navbar">
            <mt-tab-item id="tab1">大理</mt-tab-item>
            <mt-tab-item id="tab2">杭州</mt-tab-item>
            <mt-tab-item id="tab3">成都</mt-tab-item>
            <mt-tab-item id="tab4">厦门</mt-tab-item>
        </mt-navbar>
    </div>
    <div>
    <mt-tab-container v-model="active" >
        <mt-tab-container-item id="tab1">
            <container :cityadd="myadds"></container>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab2">
            <container2 :cityadd="myadds"></container2>
        </mt-tab-container-item>        
        <mt-tab-container-item id="tab3">
            <container3 :cityadd="myadds"></container3>
        </mt-tab-container-item>        
        <mt-tab-container-item id="tab4">
            <container4 :cityadd="myadds"></container4>
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
        <div class="theme_second" >
            <div class="theme1" >
                <div class="theme1_one" @click="myadd">
                    <img src="../assets/img/big4.jpeg" alt="">
                    <div class="theme_p"><p>旅行圣地</p></div>
                </div>
                <div class="theme1_two"  @click="myadd">
                    <img src="../assets/img/big4.jpeg" alt="">
                    <div class="theme_p">
                    <p>逛吃天堂</p>
                    </div>
                </div>
            </div>
            <div class="theme1">
                <div class="theme2_one">
                    <img src="../assets/img/big4.jpeg" alt="">
                    <div class="theme_p"><p>古镇风情</p></div>                   
                </div>
                <div class="theme2_one">
                    <img src="../assets/img/big4.jpeg" alt="">
                    <div class="theme_p"><p>蜜月圣地</p></div>
                </div>
                <div class="theme2_one">
                   <img src="../assets/img/big4.jpeg" alt="">
                    <div class="theme_p"><p>亲自乐园</p></div>
                </div>
            </div>
        </div>
        <mt-button class="oddsbom">查看更多主题酒店 ></mt-button>
    </div>
    <div class="odds">
        <div class="odd_first">
        <h3>超值特惠酒店</h3>
        <p>限时折扣 专享冰点价</p>
        </div>
        <div class="oddstitle">
            <div class="oddbtns">
                <mt-navbar v-model="active2" class="odd_navbar">
                    <mt-tab-item  class="oddbtn" id="odd1">
                        <div class="oddbtn">
                            <span>今夜甩卖</span>
                            <span>海量特惠6折起</span>
                        </div>
                    </mt-tab-item>
                    <mt-tab-item  class="oddbtn" id="odd2">
                        <div class="oddbtn">
                            <span>天天特价</span>
                            <span>惊喜价天天有</span>
                        </div>
                    </mt-tab-item>
                    <mt-tab-item  class="oddbtn" id="odd3">
                        <div class="oddbtn">
                            <span>连住优惠</span>
                            <span>连住惊爆价</span>
                        </div>
                    </mt-tab-item>
                </mt-navbar>
            </div>   
        </div>
        <mt-tab-container v-model="active2">
            <mt-tab-container-item id="odd1">
                <odds :add="myadd"></odds>
            </mt-tab-container-item>
            <mt-tab-container-item id="odd2">
                <odds2 :add="myadd"></odds2>
            </mt-tab-container-item>
            <mt-tab-container-item id="odd3">
                <odds3 :add="myadd"></odds3>
            </mt-tab-container-item>
        </mt-tab-container>
        <mt-button class="oddsbom" @click="myadds">查看更多超值特惠酒店</mt-button>
    </div>
    <div class="story_bottom ">
        <h3>我们の故事</h3>
        <mt-swipe :auto="2000">
            <mt-swipe-item v-for="(item,i) of list.slice(0,4)" :key="i">
                <img :src="'http://127.0.0.1:3000'+item.img" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <a href="#"> ღ 快戳我</a>
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
      <me></me>
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
import me from "./me/me.vue"
// 引入底部导航栏图标
import "../font/font_tabbar/iconfont.css"
export default {
   components: {
       "container":Container,
       "container2":Container2,
       "container3":Container3,
       "container4":Container4,
       "collect":Collect,
       "me":me,
       "order":Order,
       "odds":Odds,
       "odds2":Odds2,
       "odds3":Odds3,
   },
   data(){
       return{
           active:"tab1",
           active2:"odd1",
           selected:"hotel",
           list:[]
       }
   },
   methods:{
       myadd(){
            var url="index";
            this.axios.get(url).then(
                result=>{
                    console.log(result.data)
                    var a=result.data;
                    console.log(a)
                    for(var item of a){
                        this.$router.push({path:"/Detail",query:{lid:item.lid}})
                    }                                    
            })
            .catch(err=>{console.log(err)})
       },
       myadds(){
           this.$router.push("./Home2")
       },
       location(){
           this.$router.push("./Home2")
       },
       search(){
           this.$router.push("./Search")
       },
       loadMore(){
           var url="index";
           this.axios.get(url).then(result=>{               
               console.log(result.data)
               this.list=result.data;
           })
       }
   },
   created(){
       this.loadMore();
   }
 }
</script>
<style scoped>
*{margin:0;padding:0px;}
body{
    background-color:#ccc;
}
a{text-decoration: none;}
/* 轮播 */
 .mint-swipe.top_swipe { height: 218px;}
 .img {width: 100%;}
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
    font-size:13px;
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
.city{margin:0 25px;}
.mint-navbar.city_navbar .mint-tab-item{
    height:12px;
    margin:-2px 10px;
    padding:6px 10px;
    border-radius: 10px;
    border:0;
    color:rgb(129, 128, 128);
    background-color:#f5f5f5;
}

.mint-navbar.city_navbar .mint-tab-item.is-selected{
    background-color:rgb(252, 157, 128);
    color:#f5f5f5;
}
/* 中间过渡 */
.middle{width:340px;height:80px;margin:30px auto;box-shadow: 0 0 20px #b8bbbf;}
.middle img{width:100%;height:80px;}
/* 二楼 */
.theme{margin-top:50px;}
.theme_first{
    margin-left:15px;
}
.theme_first p{font-size:13px;color:#979696;margin:5px 0;}
.theme_second{
    display:flex;
    flex-flow: column;  
    margin-top:12px;
}
.theme1{
    display:flex;    
    padding:5px 8px;
}
.theme1_one,.theme1_two,.theme2_one{
    width:200px;height:200px;
    position: relative;
    padding:0 5px;
}
.theme2_one{height:150px;margin-top:-50px;margin-bottom:-20px;}
.theme1_one img,.theme1_two img,.theme2_one img{width:100%;height:150px;border-radius: 8px;box-shadow: 0 0 10px #b8bbbf;}
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
    overflow: hidden;
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
.mint-navbar.odd_navbar .mint-tab-item .oddbtn{
    width:90px;
    height:80px;
    line-height: 40px;
    margin-left:14px ;
    padding:0px 8px;
    background-color:#f5f5f5;
    border-radius: 8px;
    color:#707274;
    display: flex;
    flex-flow:column;
}
.mint-navbar.odd_navbar .mint-tab-item.is-selected{border:0;}
.mint-navbar.odd_navbar .mint-tab-item.is-selected .oddbtn{
    background-color:rgb(252, 157, 128);
    color:#f5f5f5;
}
.oddbtn  span:first-child{font-size:17px;margin-top:10px;margin-bottom:-15px;}
.oddbtn  span:nth-child(2){font-size:12px;}
.oddsbom{
    height:25px;
    margin:12px 110px;
    padding:5px 5px;
    font-size:13px;
}
.story_bottom{
    height:455px;
    text-align: center;
    margin-top:15px;
    padding:5px 0;
    box-shadow: 0 0 10px #ccc;
    position: relative;
    }
.story_bottom  .mint-swipe-indicators{bottom:20px;}
.story_bottom  .mint-swipe-indicators.is-active{background-color:rgb(245, 156, 26);}
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
    height:55px;
    display:flex;
    flex-flow:column;
    align-items: center;
    padding:5px 0; 
    /* margin-top:-8px; */
    margin-bottom:-17px;   
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