<template>
<div>
    <div class="header">
        <mt-header>
            <router-link to="/Home" slot="left">
               <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="search">
            <i class="iconfont icon-map"></i>
            <span>西安 | </span>
            <input class="mysearch" type="text" placeholder="搜索位置、地标、房源标题">
        </div>
    </div>
    <div class="content">
        <div class="history">
            <h4>历史记录</h4>
            <span class="history-p" v-for="(item,i) of history" :key="i">{{item}}</span>
        </div>
        <div class="remen">
            <h4>热门搜索</h4>
            <span class="remen-p" v-for="(item,i) of remen" :key="i">{{item}}</span>
        </div>
        <div class="pinpai">
            <h4>品牌名宿</h4>
            <span class="pinpai-p" v-for="(item,i) of pinpai" :key="i">{{item}}</span>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return{
            remen:["小寨","钟楼回民街","永兴坊","城墙","大雁塔","大唐不夜城","龙首原","西安火车站"],
            pinpai:["梵谷","一木一宿","南舍","拾柒","步止","设计师民宿","理想国","inhome在家"],
            history:["小寨"],
      }
}
}
</script>
<style scoped>
#app>div{
   background-color:#faf9f9; 
}
.mint-header{
    height:50px;
    background-color:#faf9f9; 
}
.mint-header .mint-button{color:rgb(116, 116, 116);}
.header{
    position: relative;
    display: flex;
    background-color:#faf9f9;
    border-bottom: 1px solid #ccc; 
}
.search{
    width:80%;height:25px;
    position: absolute;
    top:13px;left:50px;
    border-radius: 15px;
    background-color: #efeeee;
    z-index:10;
    padding:2px;
    line-height: 25px;
}
.iconfont.icon-map{font-size: 15px;margin:0 8px;}
.search span{font-size: 13px;margin-right:8px;}
.mysearch{
    background-color: #efeeee;
    border-radius: 15px;
    border: 0;
    outline: none;
    font-size:13px;
}
.content{height:595px;margin-left:10px;}
.content h4{margin-bottom:8px;}
.history-p,.remen-p,.pinpai-p{
    display: inline-block;
    background-color:  #efeeee;
    margin:10px;
    padding:5px;
    font-size:13px;
    border-radius: 6px;
}
</style>
