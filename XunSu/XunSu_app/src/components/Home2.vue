<template>
<div>
    <div class="header clearflex">
        <!-- 顶部返回 -->
        <mt-header>
            <router-link to="/Home" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>            
        </mt-header>
    <!-- 顶部时间和搜索 -->
    <div class="header_title">
        <div @click="openPicker" class="time">入住:{{stay}} | 离开:{{leave}}</div>
        <div class="datePicker">
        <mt-datetime-picker
                v-model="stay"
                type="date"
                ref="picker"
                year-format="{value} 年"
                month-format="{value} 月"
                date-format="{value} 日"
                @confirm="handleConfirm"
                :startDate="startDate"
                >
        </mt-datetime-picker >
        <!-- <mt-datetime-picker
                v-model="leave"
                type="date"
                ref="picker"
                year-format="{value} 年"
                month-format="{value} 月"
                date-format="{value} 日"
                @confirm="handleConfirm"
                :startDate="startDate"
                >
        </mt-datetime-picker> -->
        </div>  
        <input type="text" class="header_search" placeholder="搜索位置、地标、房源标题" @click="search">
    </div>      
    </div>
    <!-- 下拉列表 -->
    <div class="pull_down">
        <van-dropdown-menu>
            <van-dropdown-item title="人数" ref="item" :options="option1" v-model="value1"></van-dropdown-item>
            <van-dropdown-item title="位置" ref="item">
                <van-tree-select 
                :items="items" :main-active-index="mainActiveIndex" :active-id="activeId" 
                @navclick="onNavClick"  @itemclick="onItemClick"/>
            </van-dropdown-item>
            <van-dropdown-item title="筛选" ref="item">
                <div class="drop_select">
                    <h4>价格区间</h4>
                    <div class="prices">
                        <span v-for="(item,i) of prices" :key="i">{{"¥"+item}}</span>
                    </div>
                    <van-slider v-model="value3"  bar-height="4px" bar-width="300px" active-color="#f44" :step="10"/>
                    <h4>出租类型</h4>
                    <div class="rent_type">
                        <mt-navbar v-model="active1">
                            <mt-tab-item id="rent1">
                                <div class="type">
                                    <h5>整套出租</h5>
                                    <span>独享整个房源</span>
                                </div>
                            </mt-tab-item>
                            <mt-tab-item id="rent2">
                                <div class="type">
                                    <h5>独立单间</h5>
                                    <span>有自己的独立空间</span>
                                </div>
                            </mt-tab-item>
                            <mt-tab-item id="rent3">
                                <div class="type">
                                   <h5>合住房间</h5>
                                   <span>分享整个入住空间</span>
                                </div>
                            </mt-tab-item>
                        </mt-navbar>
                    </div>
                    <h4>配套设施</h4>
                    <div class="facility clearflex">
                        <van-checkbox-group v-model="result">
                            <van-checkbox  
                            v-for="(item,i) of facilities" :key="i"  :name="item" class="facility_check"  checked-color="#ff9c1a">
                            {{item}}
                            </van-checkbox> 
                        </van-checkbox-group>
                    </div>
                </div>
                <van-button block type="warning" @click="onConfirm">确认</van-button>
            </van-dropdown-item>
            <van-dropdown-item v-model="value2" :options="option2" title="推荐"></van-dropdown-item>
        </van-dropdown-menu>
    </div>
    <!-- 中间内容 -->
    <div class="content">
        <div class="tent">
                <div class="tent_info" v-for="(item,i) of list" :key='i'>
                    <img @click="tent_img(item.lid)" class="tent_img" :src="'http://127.0.0.1:3000/'+item.img" alt="">
                    <i :class="[item.heart=='1'?'iconfont icon-shoucang5 is-select':'iconfont icon-shoucang5']" @click="tent_collect($event,item.lid,item.title,item.img,item.htType,item.tenant,item.bedroom)"></i>
                    <div class="tent_detail">
                        <span >{{item.title}}</span>
                        <span>{{item.htType}} · {{item.toilet}} · {{item.bedSize}} · {{item.houseDistrict}}</span>
                        <div>
                        <span>{{"¥"+item.price}}</span>
                        <span>新人首单优惠</span>
                        </div>
                        <van-image
                            round
                            width="3rem"
                            height="3rem"
                            :src="geturl(item.uid)"
                            class="user-img"
                        />
                    </div>
                </div>
        </div>
    </div>
    <van-button @click="loadMore()" size="large" type="warning">加载更多</van-button>
</div>
</template>
<script>
export default {
    data(){
        return{
            stay:"",
            leave:"",
            visible:false,
            startDate:new Date(),
            value1:0,
            value2:0,  //推荐选择
            value3:0, //筛选中的价格
            // 人数
            option1:[
                {text:"1~2人",value:0},
                {text:"3~4人",value:1},
                {text:"5~6人",value:2},
                {text:"10人以上",value:3}],
            // 推荐
            option2:[
                {text:"推荐排序",value:0},
                {text:"好评优先",value:1},
                {text:"高价优先",value:2},
                {text:"距离优先",value:3}],
            // 位置
            activeId: "",
            mainActiveIndex: 0,
            items:[
                 {text: '热门景区',
                  // 该导航下所有的可选项
                   children: [
                    {text:'钟楼回民街',id:1}
                   ]
                  },
                  {text: '行政区',
                  // 该导航下所有的可选项
                   children: [
                    {text:'碑林区',id:1},
                    {text:'莲湖区',id:2},
                    {text:'长安区',id:3},
                    {text:'未央区',id:4},
                    {text:'雁塔区',id:5},
                   ]
                  },
                  {text:"商圈",
                    children:[{text:"钟鼓楼回民街(城中心)",id:1},{text:"南门(城中心)",id:2},
                    {text:"长安区大学城",id:3},{text:"行政中心",id:4},{text:"西稍门机场大巴站",id:5}]
                  }
            ],
            // 筛选
            prices:[0,200,300,400,500,600],
            facilities:["wifi","空调","电视","电梯","冰箱","停车位","洗浴","洗衣机","热水壶"],
            active1:"rent1",
            result:[],
            list:[],
            user:[],
            count:1,
            collected:[],
            uid:"",
        }
    },
    methods: {
        // 入离时间
        openPicker () {
            this.$refs.picker.open();
        },
        handleConfirm(data){
            var date=new Date();
            this.stay=date.getMonth()+1+"."+date.getDate();
            this.leave=date.getMonth()+1+"."+date.getDate();
            // this.stay=getDate(data)
        },
        onConfirm(e){
            this.$refs.item.toggle();    
        },
        // 切换搜索
        search(){
           this.$router.push("./Search")
        },
        // 位置
        onNavClick(index) {
            this.mainActiveIndex = index;
        },
        onItemClick(data) {
            this.activeId = data.id;
        },
        // 选择人数 房源信息改变
        // onbtn(){
        //     console.log(1111)
        // },
        // 点击进入收藏
        tent_collect(e,lid,title,img,htType,tenant,bedroom){
            var thisuid=sessionStorage.getItem("uid");
            if(thisuid){
                var i=e.target;
                var uid=this.uid;
                if(i.className=="iconfont icon-shoucang5"){
                    i.className="iconfont icon-shoucang5 is-select";
                    var obj={uid:uid,lid:lid,title:title,img:img,htType:htType,tenant:tenant,bedroom:bedroom};
                    this.axios.get("collect/insert", { params: obj }).then(result => {
                        if (result.data.code == 200) {
                            this.$toast("收藏成功",1000);
                            
                        } 
                    });
                }else{
                    i.className="iconfont icon-shoucang5";
                    var obj={lid:lid};
                    this.axios.get("collect/delete", { params: obj }).then(result => {
                        if (result.data.code == 200) {
                            this.$toast("取消收藏",1000);
                        } 
                    });
                }
            }else{
                this.$toast("你还未登录，登录后再来收藏吧");
            }
            
            // this.$router.push("./Collect")
        },
        // 房源信息加载
        loadMore(){
           var url="home";
           this.uid=sessionStorage.getItem("uid");
           var obj={start:this.list.length,count:this.count}
           this.axios.get(url,{params:obj}).then(result=>{
            var lists=result.data.msg.leaseroom;
            this.user=result.data.msg.user;
            if(this.uid){
                var url2="collect/iscollect";
                var obj={uid:this.uid};
                this.axios.get(url2,{params:obj}).then(result=>{
                    if(result.data.code==200){
                        var count=result.data.msg;
                        for(var index of count){
                            // console.log(list)
                            for(var index2 in lists){
                                if(index.colid==lists[index2].lid){
                                    // console.log(index.colid)
                                    lists[index2].heart='1';
                                    // i.className="iconfont icon-shoucang5 is-select";
                                }
                            }
                        }
                         this.list=lists;
                    }else{
                        console.log(22)
                        this.list=lists;
                    }
                })
            }else{
              this.list=lists;  
            }   
           })    
        },
        //头像显示
        geturl(uid){
        var url="";
            var index=this.user;
            console.log(this.user)
            for(var i of index){
                if(i.uid==uid){
                     if(!i.avatar || i.avatar==null){    
                    url="http://127.0.0.1:3000/images/avatar/1564045657591.jpeg";
                }else{
                url="http://127.0.0.1:3000"+i.avatar;
                }
            }
        }
        return url;
        },
        //跳转详情
        tent_img(lid){
            var url="home";
            this.axios.get(url).then(
                result=>{
                    this.$router.push({path:"/Detail",query:{lid:lid}})
                                  
            })
            .catch(err=>{console.log(err)})
        }
     },
    created(){
        var arr=Object.keys(this.$route.query);
        console.log(arr)
            if(arr.length==0){
                this.loadMore();
                console.log(1)
            }else{
                this.list=this.$route.query.list;
                this.user=this.$route.query.uid;
                console.log(2)
            }
            // this.list=this.$route.query.list;
    }
}
</script>
<style scoped>
#app>div{
    background-color:#f5f5f5;
}
.mint-header{
    height:50px;
    background-color:#faf9f9; 
}
.mint-header .mint-button{color:rgb(116, 116, 116);}
.header_title{
    width: 85%;
    display: flex;
    justify-content: space-between;
    margin-top:12px;
    position: absolute;
    top:0;left:36px;
    border-radius: 15px;
    background-color: #efeeee;
    padding:5px 8px;
}
.header_title .time{font-size:12px;}
.header_search{
    background-color: #efeeee;
    border-radius: 15px;
    border: 0;
    outline: none;
    font-size:12px;
}
.clearflex::after{content:"";display:block;clear: both;}
.pull_down .van-dropdown-menu{
    background-color: #faf9f9;
}
.drop_select{margin-left:10px;padding:0 10px;overflow: hidden;}
.drop_select h4{margin-top:40px;}
.drop_select h4:first-child{margin-top:20px;}
.drop_select .prices span{
    display:inline-block;
    padding:0 10px;
    margin-bottom: 20px;
}
.rent_type{display: flex; margin-top:-15px;margin-right:5px;margin-bottom:-40px;}
.type{
    width:100px;
    height:80px;
    line-height: 1.8;
    text-align: center;
    border:1px solid #ddd;
    margin:10px 5px;
}
.mint-navbar .mint-tab-item.is-selected .mint-tab-item-label .type{background-color: rgb(245, 156, 26);}
.mint-navbar .mint-tab-item.is-selected{border:0;color:#faf9f9;   }
.type h5{margin-bottom:1px;margin-top:10px; }
.type span{font-size: 11px; color:rgb(143, 140, 140);}
.facility_check.van-checkbox{
    width:80px;height:30px;
    font-size: 15px; color:rgb(116, 115, 115);
}
.facility{
  width:100%;
  display: flex;
}
.content{
   margin:15px 10px;
   height:100%;
}
.tent{
    width:98%;
    background-color: #faf9f9;
    padding:5px 5px;
    overflow: hidden;
}
.tent_info{
    padding:10px;
    position: relative;
}
.tent_img{
    width:100%;height:200px;
    box-shadow: 0 0 5px #000;
    border-radius: 5px;
}
.iconfont.icon-shoucang5{
    font-size:25px;
    position: absolute;
    top:10px;left:310px;
    color: #faf9f9;;
}
.iconfont.icon-shoucang5.is-select{color:rgb(245, 156, 26);}
.tent_detail{
    display: flex;
    flex-flow: column;
    padding:5px;
}
.tent_detail span:nth-child(2){
    font-size: 13px;
    color:#b3b3b3;
    margin:10px 0;
}
.tent_detail>div span:nth-child(1),.tent_detail>div span:nth-child(2){
    color: rgb(245, 156, 26);
}
.tent_detail>div span:nth-child(2){font-size:10px; margin-left:5px;}
.user-img{
position: absolute;
top:70%;right:20px;
  border-radius:50%;
  overflow: hidden;
  border:4px solid rgba(255,255,255,.8);
}
</style>

