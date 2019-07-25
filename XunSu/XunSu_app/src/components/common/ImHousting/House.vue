<template>
  <div>
    <mt-header title="已发布的房源">
      <router-link to="/me" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="content">
      <div class="house-item">
          <van-image
              width="10rem"
              height="7rem"
              fit="cover"
              src="http://127.0.0.1:3000/images/house/1a8cad81-5292-4d41-bb3d-68c67c32483b.jpg"
          />
        <div class="right-msg">
          <p>茶室主题民宿</p>
          <p class="adreess">地址：<span>青岛市 市北区</span></p>
          <p class="isload">已发布房源</p>
        </div>
      </div>
    </div>
    <mt-button type="primary" size="large" class="buttonPosition" @click="issue">继续发布房源</mt-button>
  </div>
</template>
<script>
import { Image} from 'vant';
export default {
  data(){
    return {
      
    }
  },
  components: {
    [Image.name]:Image
  },
  // created:function(){
  //   var uid = sessionStorage.getItem("uid");
  //   var url="house/hashouse";
  //    var obj= {uid};
  //     this.axios.get(url,{params:obj}).then(result=>{
  //         if(result.data.code==200){  
  //           console.log(123);
  //         }else{
  //          console.log(456);
  //          }
  //     }) 
  // },
  methods:{
    issue(){
      
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
   .content{
   width:90%;
   margin:auto;
   padding:10px 0;
 }
 .house-item{
   background:rgba(0,0,0,.01);
   border-radius:10px;
   padding:10px;
   display:flex;
   margin:20px 0;
 }
 .van-image{
   border-radius:10px;
   overflow:hidden;
 }
 .right-msg{
   margin-left:10px;
   font-size:14px;
 }
 p{
   margin:0;
   padding:0;
 }
 .adreess{
   font-size:12px;
   letter-spacing: 1px;
   margin-top:10px;
   color:#ccc;
 }
 .adreess span{
   color:#ff9c1a;
 }
 .isload{
   margin-top:10px;
   border:1px solid firebrick;
   color:firebrick;
   text-align:center;
   font-size:12px;
   padding:2px 0;
   width:100px;
   border-radius:10px;
   opacity: 0.6;
   float:right;
 }
 .buttonPosition{
  position:absolute;
   bottom:0;
   height:50px;
   border-radius:0;
   letter-spacing:2px;
   font-size:16px;
   font-weight:600;
  background-color:#ff9c1a;
 }
</style>