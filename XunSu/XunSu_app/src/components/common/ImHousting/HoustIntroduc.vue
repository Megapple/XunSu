<template>
  <div>
    <div class="body">
    <mt-header title="房源介绍">
      <router-link to="/housting" slot="left">
        <mt-button icon="back" class="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="content">
      <h4>房源标题</h4>
      <van-cell-group>
        <van-field
          v-model="title"
          type="textarea"
          placeholder="请输入房源标题"
          rows="1"
          autosize
          maxlength="60"
        />
      </van-cell-group>
      <h4>房源介绍</h4>
      <van-cell-group class="msg">
        <van-field
          v-model="describe"
          type="textarea"
          placeholder="请详细介绍下您出租的房源，您可以详细介绍下房源位置，装修，周边风景，便利设置，使用方式等"
          rows="10"
          autosize
          maxlength="2000" 
          onchange="this.value=this.value.substring(0, 2000)" 
          onkeydown="this.value=this.value.substring(0, 2000)" 
          onkeyup="this.value=this.value.substring(0, 2000)"
        />
      </van-cell-group>
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
    title:"",
    describe:"",
    selected:""
    }
  },
  methods:{
    tonext(){
      var title=this.title;
      var describe=this.describe;
      var url="house/title";
      var lid=this.$route.query.lid;
      var obj={title,describe,lid};
      this.axios.get(url,{params:obj}).then(result=>{
          if(result.data.code>0){  
             this.$toast("上传成功",1000);
           this.$router.push(`./`);
          }else{
             this.$toast("上传失败，请重新填写",1000);
           }
      }) 
    },
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
 .housetitle{
   height:100px;
   border-radius:20px;
 }
 div.van-cell-group{
   border-radius:10px;
   border:0;
   height:100px;
   overflow: hidden;
 }
 .van-hairline--top-bottom::after{
   border-width:0;
 }
 div.van-cell-group.msg{
  margin-bottom:30px;
  height:300px;
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
