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
    <div class="pull_down">
        <van-dropdown-menu>
            <van-dropdown-item title="人数" ref="item">
                1人 2人
            </van-dropdown-item>
            <van-dropdown-item title="位置" ref="item">
                <van-tree-select 
                :items="items" :main-active-index="mainActiveIndex" :active-id="activeId" 
                @navclick="onNavClick"  @itemclick="onItemClick"/>
                <van-button block type="info" @click="onTree">确认</van-button>
            </van-dropdown-item>
            <van-dropdown-item title="筛选" ref="item">
                <van-slider v-model="value2"  bar-height="4px" active-color="#f44" :step="10"/>
                <van-button block type="info" @click="onConfirm">确认</van-button>
            </van-dropdown-item>
            <van-dropdown-item v-model="value1" :options="option1"></van-dropdown-item>
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
            value2:10,
            option1:[
                {text:"推荐排序",value:0},
                {text:"好评优先",value:1},
                {text:"高价优先",value:2},
                {text:"距离优先",value:3}],
            activeId: "",
            mainActiveIndex: 0,
            items:[
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
            ]
        }
    },
    methods: {
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
        onConfirm(){
            this.$refs.item.toggle();      
        },
        onNavClick(index) {
            this.mainActiveIndex = index;
        },
        onItemClick(data) {
            this.activeId = data.id;
        },
        onTree(){
            this.$refs.item.toggle();    
        }
    }
}
</script>
<style scoped>
.mint-header{
    height:50px;
    background-color:#e6e6e6;
}
.header_title{
    width: 85%;
    display: flex;
    justify-content: space-between;
    margin-top:12px;
    position: absolute;
    top:0;left:36px;
    border-radius: 15px;
    background-color: #f5f5f5;
    padding:5px 8px;
}
.header_title .time{font-size:12px;}
.header_search{
    background-color: #f5f5f5;
    border-radius: 15px;
    border: 0;
    outline: none;
    font-size:12px;
}
.clearflex::after{content:"";display:block;clear: both;}
</style>

