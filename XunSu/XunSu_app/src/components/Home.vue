<template>
 <div>
 <mt-swipe :auto="2000">
  <mt-swipe-item v-for="(item,i) of items" :key="i">
    <a :href="item.href" rel="external nofollow">
       <img :src="require('../assets/img/ad.png')" class="img"/>
    </a>
  </mt-swipe-item>
    <mt-swipe-item v-for="(item,i) of items" :key="i">
    <a :href="item.href" rel="external nofollow">
       <img :src="require('../assets/img/mm.png')" class="img"/>
    </a>
  </mt-swipe-item>
 </mt-swipe>
 <div class="searchdiv clearfix">
    <input placeholder="搜索目的地/酒店" class="search"/>
    <img :src="require('../assets/img/ye.png')"  class="searchImg "/>
    <span>|</span>
    <div class="location">
      <img :src="require('../assets/img/ye.png')"  class="locationImg"/>
      <span class="locationtxt">搜附近</span>
    </div>
 </div>
 <div class="index">
    <div class="city">
        <mt-button size="small" v-for="(item,i) of lists" :key="i" @click="setActive" :data-idx="i">{{item}}</mt-button>
    </div>
    <mt-tab-container v-model="active">
        <mt-tab-container-item id="tab1">
            <container></container>
        </mt-tab-container-item>
    </mt-tab-container>
    
 </div>
 </div>
</template>
<script>
// 导入城市子组件
import Container from "./common/Container.vue"
export default {
   components: {
       container:"Container"
   },
   data(){
       return{
           lists:["大理","杭州","成都","桂林"],
           active:"tab1",
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
           this.active="tab"+(idx+1);
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
.mint-swipe-indicator.is-active{background:rgba(255, 145, 0,0.9);}
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
.mint-button--small{
    height:22px;
    margin:0 15px;
    padding:0 15px;
    font-size:12px;
}
.mint-button{
    border-radius: 9px;
}
/* .mint-button .mint-button--default .mint-button--small{
    padding:0 21px;
} */
</style>