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
/* .content{margin-top:10px;} */
</style>

