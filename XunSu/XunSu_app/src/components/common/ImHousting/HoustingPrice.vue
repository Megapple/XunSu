<template>
  <div>
    <div class="body">
    <mt-header title="房源价格和预定规则">
      <router-link to="/housting" slot="left">
        <mt-button icon="back" class="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="content">
     
     
    </div>
   </div> 
   <mt-tabbar v-model="selected" class="bottom">
     <mt-tab-item id="tab2">
      <mt-button class="nex" @click="tonext">存储并前往下一页</mt-button>
    </mt-tab-item>
  </mt-tabbar> 
  </div>
</template>
<script>
export default {
  data(){
    return {
      selected:""
    }
  },
  methods:{
    tonext(){

    }
  }
}
</script>
<style scoped>
   .mint-header{
   background-color:rgba(255,255,255,0);
   color:#ff9c1a;
   letter-spacing:1px;
   height:40px;
 }
 .mint-header .mint-header-title{
  font-weight:bold;
 }
 .mint-button.back{
   color:#ff9c1a;
 }
 .body{
    width: 100%;
    background-color: #f5f5f5;
    min-height:650px;
 }
  .content{
   width:90%;
   margin:auto;
   padding:10px 0;
 }

 

 .mint-button.nex{
   width:60%;
   height:33px;
   font-size:16px;
   background-color:#ff9c1a;
   color:#fff;
   border-radius:20px;  

 }
 .bottom{
   position:fixed;
 }
</style>