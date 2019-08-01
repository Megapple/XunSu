<template>
  <div id="tabbar">
    <div class="page-tabbar">
       <mt-tabbar v-model="message" fixed>
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
  </div>
</template>
<script>
export default {
  name:"tabbar",
  component:{},
  props:{
    page:String,
    selected:String
  },
  data(){
    return {
      message:this.selected
    }
  },
   watch: {
        message: function(val, oldVal) {
        // 这里就可以通过 val 的值变更来确定去向
        console.log(111);
            switch (val) {
                case "hotel":
                this.$router.push("/home");
                break;
                case "collect":
                this.$router.push("/collect");
                break;
                case "order":
                this.$router.push("/order");
                break;
                case "me":
                this.$router.push("/me");
                break;
            }
        }
    }
}
</script>
<style scoped>
.mt{margin-bottom: 30px;}
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
  .mint-tabbar>.mint-tab-item{color:#ccc;}
/* 修改tabbar 选中时图标颜色及背景 */
.mint-tabbar>.mint-tab-item.is-selected{
    background-color:#fafafa;
    color:rgb(245, 156, 26);
}
.mint-tabbar>.mint-tab-item.is-selected span{color:rgb(245, 156, 26);}
</style>