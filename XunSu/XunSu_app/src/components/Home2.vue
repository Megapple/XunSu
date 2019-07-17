<template>
<div>
    <div class="header clearflex">
        <mt-header>
            <router-link to="/Home" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>            
        </mt-header>   
    <div class="header_title">
        <p @click="location">| 上海 |</p>
        <input type="text" class="header_search" placeholder="搜索位置、地标、房源标题">
    </div>      
    </div>
    <div class="content">12333333</div>
                    <div class="birth">
          <div @click="openPicker">入:{{stay}}</div>
        </div>
        <div class="datePicker">
        <mt-datetime-picker
                v-model="stay"
                type="date"
                ref="picker"
                year-format="{value} 年"
                month-format="{value} 月"
                date-format="{value} 日"
                @confirm="handleConfirm"
                :startDate="startDate">
        </mt-datetime-picker>
        </div>   
</div>
</template>
<script>
export default {
    data(){
        return{
            stay:"",
            startDate:new Date(),
        }
    },
    methods: {
        openPicker () {
          this.$refs.picker.open()
        },
        handleConfirm(){
            var date=new Date()
            this.stay=date.getMonth()+1+"/"+date.getDate();
        },
    }
}
</script>
<style scoped>
body{background-color:#ccc;}
.header_title{
    display: flex;
    margin-top:10px;
    position: absolute;
    top:0;left:50px;
    border-radius: 8px;
    background-color: #f5f5f5;
}
.header_search{
    background-color: #f5f5f5;
    border-radius: 8px;
    border: 0;
    outline: none;}
.clearflex::after{content:"";display:block;clear: both;}
/* .content{margin-top:10px;} */
</style>

