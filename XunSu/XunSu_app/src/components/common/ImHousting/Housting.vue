<template>
  <div class="body">
    <mt-header title="请完善个人信息">
      <router-link to="/login" slot="left">
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
          <span class="msg">+86 {{phone}}</span>
          <span class="istrue">已完成</span>
          <span class="msg">{{details()}}</span>
        </div> 
      </div>
      <div class="content">
        <span class="iconfont icon-unie64d"></span>
        <div class="contenmsg">
          <i class="usermsg">真实头像 ></i>
          <span :class="{msg:true,msgfalse:a}">{{yourimage}}</span>
          <!-- <router-link :to="{path:'/userimage'}" :class="{istrue:true,isfalse:b}">{{isCompleted}}</router-link>-->
           <span class="upload">上传图像</span>
          <input type="file"  name="file" onchange="fileup(event)" class="upfile">
          <!--  <span :class="{istrue:true,isfalse:a}" @click="actionSheet">{{isCompleted}}</span>
        <mt-actionsheet
             :actions= "action"
             v-model="sheetVisible">234234
           </mt-actionsheet> -->
        </div> 
      </div> 
      <div class="content">
        <span class="iconfont icon-credentials_icon"></span>
        <div class="contenmsg">
          <i class="usermsg">证件号码 ></i>
          <span :class="{msg:true,msgfalse:b}">{{yourmsg}}</span>
          <router-link :to="{path:'/usermsg'}" :class="{istrue:true,isfalse:b}">{{isCompleted}}</router-link>
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
      phone:"",
      yourimage:"请上传图像",
      yourmsg:"请完善您的信息",
      isCompleted:"> >",
      a:true,
      b:true
      // action:[{name:"拍照",method:this.getCamera},{name:"从相册中选择",method:this.getLibrary}],
      // sheetVisible:false
    } 
  },
  methods:{
    details:function(){
      var lastname = sessionStorage.getItem("phone");
      this.phone=lastname;
      var url="/user/detail"
      this.axios.get(url,{params:lastname}).then(result=>{
          if(result.data.code==200){  
            console.log(result);
            if(result.data.msg[0].avatar==null){
              this.yourimage="请上传图像";
              this.isCompleted="> >";
              this.a="true";
            }else{
              this.yourimage="已上传";
              this.isCompleted="已完成";
              this.a="false";
            }
             if(result.data.msg[0].user_name==null || result.data.msg[0].ID_number==null){
              this.yourmsg="请完善个人信息";
              this.isCompleted="> >";
              this.b="true";
            }else{
              this.yourmsg="已完善";
              this.isCompleted="已完成";
              this.b="false";
            }
          }else{
             this.$messagebox("提示","您还未登录，请登录");
           }
      }) 
    },
    fileup(event){
      　var formData = new FormData();
　　    formData.append('file', e.target.files[0]);
       var index = layer.load(0, {shade: false});
    }
//     //拍照
//     actionSheet: function(){
//     	// 打开action sheet
//       this.sheetVisible = true;
//     },
//     getCamera: function(){
//       console.log("打开照相机")
//     },
//     getLibrary: function(){
//       console.log("打开相册")
//     }
  },
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
  text-decoration:none;
}
.isfalse{
  color:#000;
}
.upload{
  color:#fff;
  font-size:12px;
  display:inline-block;
  border:0;
  border-radius:10px;
  padding:4px 10px;
  float:right;
  background:#ff9c1a;
  margin-top:-3px;
}
.upfile{
  position:absolute;
  top:0;
  right:0;
  z-index:2;
  overflow:hidden;
  width:70px;
  padding:1px 0;
  opacity:0;
}
</style>