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
        <mt-datetime-picker
                v-model="leave"
                type="date"
                ref="picker"
                year-format="{value} 年"
                month-format="{value} 月"
                date-format="{value} 日"
                @confirm="handleConfirm"
                :startDate="startDate"
                >
        </mt-datetime-picker>
        </div>  
        <input type="text" class="header_search" placeholder="搜索位置、地标、房源标题">
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
                        <div class="type">
                            <h5>整套出租</h5>
                            <span>独享整个房源</span>
                        </div>
                        <div class="type">
                            <h5>独立单间</h5>
                            <span>有自己的独立空间</span>
                        </div>
                        <div class="type">
                            <h5>合住房间</h5>
                            <span>分享整个入住空间</span>
                        </div>
                    </div>
                    <h4>配套设施</h4>
                    <div class="facility" >       
                        <span v-for="(item,i) of facilities" :key="i">{{item}}</span>
                    </div>
                </div>
                <van-button block type="warning" @click="onConfirm">确认</van-button>
            </van-dropdown-item>
            <van-dropdown-item v-model="value2" :options="option2" title="推荐"></van-dropdown-item>
        </van-dropdown-menu>
    </div>
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
            console.log(this.stay,this.leave);
        },
        onConfirm(e){
            this.$refs.item.toggle();    
            e.stopPropagation();  
        },
        // 位置
        onNavClick(index) {
            this.mainActiveIndex = index;
        },
        onItemClick(data) {
            this.activeId = data.id;
        },
        // 选择人数 房源信息改变
        onbtn(){
            console.log(1111)
        }
    }
}
</script>
<style scoped>
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
.drop_select{margin-left:10px;padding:0 10px;}
.drop_select h4{margin-top:40px;}
.drop_select h4:first-child{margin-top:20px;}
.drop_select .prices span{
    display:inline-block;
    padding:0 10px;
    margin-bottom: 20px;
}
.rent_type{display: flex; margin-top:-5px;margin-left:-5px;margin-right:5px;margin-bottom:-15px;}
.type{
    width:120px;
    height:80px;
    line-height: 1.8;
    text-align: center;
    border:1px solid #ddd;
    margin:10px 5px;
}
.type h5{margin-bottom:1px;margin-top:10px; }
.type span{font-size: 11px; color:rgb(143, 140, 140);}
.facility{
    width:88%;
    text-align: center;
    margin-top:-10px;
}
.facility span{
    display:inline-block;
    width:55px;
    height:30px;
    text-align: center;
    line-height: 1.8;
    border:1px solid #ddd;
    padding:5px 5px;
    margin:5px 5px;
    font-size: 15px; color:rgb(116, 115, 115);
}
</style>

