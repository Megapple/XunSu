<template>
  <div class="body">
    <mt-header title="请完善个人信息">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div>
      <img src="../../../assets/housting/housting1.jpg" class="imgstyle"></img>
    </div>
    <div class="middle">
      <div class="content">
        <span class="iconfont icon-shouji"></span>
        <div class="contenmsg">
          <i class="usermsg">手机号码 ></i>
          <span class="msg">+86 18329585879</span>
          <span class="istrue">已完成</span>
        </div> 
      </div>
      <div class="content">
        <span class="iconfont icon-unie64d"></span>
        <div class="contenmsg">
          <i class="usermsg">真实头像 ></i>
          <span class="msg msgfalse">请完善您的信息</span>
          <span class="istrue isfalse">未完成</span>
        </div> 
      </div> 
      <div class="content">
        <span class="iconfont icon-credentials_icon"></span>
        <div class="contenmsg">
          <i class="usermsg">证件号码 ></i>
          <span class="msg msgfalse">请完善您的信息</span>
          <span class="istrue isfalse">未完成</span>
        </div> 
      </div>  
    </div>
    <mt-button type="primary" size="large" class="buttonPosition">开始发布房源</mt-button>
  </div>
</template>
<script>
export default {
  data(){
    return {

    }
  }
}
</script>
<style scoped>
 .imgstyle{
   width:100%;
   margin-bottom:10px;
 }
 .mint-header{
   background-color:#fafafa;
   color:#000;
   letter-spacing:1px;
   box-shadow:0px 1px 5px #b2b2b2;
   font-weight:900;
   height:40px;
 }
 .buttonPosition{
  position:absolute;
   bottom:0;
   height:50px;
   border-radius:0;
   letter-spacing:2px;
   font-size:16px;
   font-weight:600;
 }
  .mint-button--primary{
  background-color:#ff9c1a;
  }
 .mint-button:not(.is-disabled):active::after {
  opacity: .2 /* .6 */
}
.content{
  width:90%;
  margin:auto;
  padding-top:20px;
  position:relative;
  height:30px;
}
.contenmsg{
  display:inline-block;
  border-bottom:1px solid #ccc;
  right:10px;
  width:80%;
  margin-left:20px;
  position:absolute;
  top:10px;
}
.usermsg{
  font-style:normal;
  margin-bottom:10px;
  display:inline-block;
  font-size:12px;
  color:#ff9c1a;
  font-weight:400;
}
.msg{
  font-size:12px;
  display:inline-block;
  color:#ccc;
  margin-left:10px;
}
.msg.msgfalse{
  color:#4d4d4d;
}
.iconfont{
  font-size:25px;
  position:absolute;
  top:10px;
  left:10px;
}
.istrue{
  display:inline-block;
  position:absolute;
  right:0;
  bottom:5px;
  padding:5px 18px;
  font-size:12px;
  color:#ccc;
}
.istrue.isfalse{
  color:#000;
}
</style>