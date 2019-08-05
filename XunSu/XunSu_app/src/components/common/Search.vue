<template>
<div>
    <div class="header">
        <mt-header>
            <router-link slot="left" to="">
               <mt-button icon="back" @click.native="$router.back(-1)"></mt-button>
            </router-link>
            
        </mt-header>
            <van-search
                v-model="value"
                placeholder="请输入搜索关键词"
                show-action
                shape="round"
                @search="onSearch"
                >
                <div slot="action" @click="onSearch">搜索</div>
            </van-search>

        <!-- <div class="search">
            <van-icon name="search"></van-icon>
            <span>西安 | </span>
            <input class="mysearch" type="text" placeholder="搜索位置、地标、房源标题">
        </div> -->
    </div>
    <div class="content" v-if="value==''">
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
    <div v-if="value!=''" class="searchlist">
        <ul class="list">
            <li v-for="(item,index) in newlist.slice(0,10)" :key="index" @click="tonext(item.lid)">
                <img src="../../assets/img/38.png" alt="" class="imgstyle">
                <span class="left">{{item.title}}</span> 
                <span class="right">{{item.city}}|{{item.houseDistrict}}</span>   
            </li>
        </ul>
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
            value:"",
            list:[],
            user:[],
            uid:[]
            // leaseroomlist:[]
        }   
    },
    created:function(){
        this.axios.get('/home').then(result=>{
            // console.log(result.data)
            this.list=result.data.msg.leaseroom;
            this.user=result.data.msg.user;
        })
        .catch(err=>{console.log(err)})
    },
    methods:{
        onSearch(){
            var that=this;
            if (this.value==""){
                this.$router.push('/Home2'); 
            }else{
                    that.newlist.forEach(function(value,key,arr){
                that.user.forEach(function(value1){
                    if(value.uid==value1.uid){
                        that.uid=that.uid.concat(value1);
                    }
                })
            })
            this.$router.push({path:'/Home2',query:{list:this.newlist,uid:this.uid}})
            }
        
        },
        onclear(){
            this.value="";
            for(var key of this.list){
                if (key.province==this.value){
                    this.leaseroomlist=this.leaseroomlist.concat(key);
                    // console.log(this.leaseroomlist)
                };
            }
        },
        tonext(lid){
            this.$router.push({path:'/Detail',query:{lid:lid}})
        }
    },
    computed:{
        newlist:function(){
            var value=this.value;
            if(value){
                return this.list.filter(
                    function(lists){
                        return Object.keys(lists).some(
                            function(key){
                                return String(lists[key]).toLowerCase().indexOf(value)>-1;
                                    }
                            )
                    }
                )
            }
        },
       
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
.van-search.van-search--show-action{
    /* width:80%;height:25px;
    position: absolute;
    top:13px;left:50px;
    border-radius: 15px;
    background-color: #efeeee;
    z-index:10;
    padding:2px;
    line-height: 25px; */
    width:80%; 
    background-color:transparent !important;
}
.van-search__content{
    background:#fff;
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
.list{
    width:90%;
    /* background:#fff; */
    border-radius:5px;
    font-size:14px;
    margin:auto;
}
.list li{
    height:50px;
    border-bottom:1px solid #ccc;
    line-height:50px;
    position:relative;
}
.list li .left{
    padding-left:10px;
    display: inline-block;
    width:200px;   
    white-space:nowrap;   
    word-break:keep-all;   
    overflow:hidden;   
    text-overflow:ellipsis;  
}
.list li .right{
    /* float:right; */
    margin-right:20px;
    color:#ff9c1a;
    display: inline-block;
    white-space:nowrap;
    font-size:12px;
    letter-spacing: 1px;
    width:90px;   
    position: absolute;
    overflow:hidden;
    text-overflow: ellipsis;
}
.van-cell{
    color:#ff9c1a;
    font-size:12px;
}
.searchlist{
    background-color:#fff;
}
.imgstyle{
    width:24px;
    margin-bottom:13px;
}
</style>
