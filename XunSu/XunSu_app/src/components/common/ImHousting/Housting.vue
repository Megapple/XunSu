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
           <span :class="{upload:true,trueupload:!a}">{{istogo}}</span>
           <!--上传图像-->
          <input type="file"  name="file" accept='image/*' :class="{upfile:true,isdisplay:!a}" @change="upload($event)" id="userimage">
        </div> 
      </div> 
      <div class="content">
        <span class="iconfont icon-credentials_icon"></span>
        <div class="contenmsg">
          <i class="usermsg">证件号码 ></i>
          <span :class="{msg:true,msgfalse:b}">{{yourmsg}}</span>
          <span @click="tomsg" :class="{istrue:true,isfalse:b}">{{isCompleted}}</span>
        </div> 
      </div>
    </div>
    <mt-button type="primary" size="large" class="buttonPosition" @click="issue">开始发布房源</mt-button>
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
      b:true,
      istogo:"上传图像"

    } 
  },
  methods:{
    details:function(){
      var uid = sessionStorage.getItem("uid");
      var url="/user/detail";
      this.axios.get(url,{params:uid}).then(result=>{
          this.phone=result.data.msg[0].phone;
          if(result.data.code==200){  
            if(result.data.msg[0].avatar==null){
              this.yourimage="请上传图像";
              this.istogo="上传图像";
              this.a=true;
            }else{
              this.a=false;
              this.istogo="已完成";
              this.yourimage="已上传";
            }
             if(result.data.msg[0].user_name==null || result.data.msg[0].ID_number==null){
              this.yourmsg="请完善个人信息";
              this.isCompleted="> >";
              this.b=true;
            }else{
              this.yourmsg="已完善";
              this.isCompleted="已完成";
              this.b=false;
            }
          }else{
             this.$messagebox("提示","您还未登录，请登录");
           }
      }) 
    },
    tomsg(){
      if(this.b==true){
        this.$router.push({ path:'/usermsg' });
      }
    },
    upload(el){
     var file=el.target.files[0];
     var type=file.type.split('/');
    //  console.log(file);
    var uid = sessionStorage.getItem("uid");
     if(type[0]==='image'){
      var formData = new FormData();
        formData.append("test",file,file.name);
        // formData.append('test',112);
        formData.append('test',uid);
        // console.log(formData.get('test'));
        return this.axios.post("http://127.0.0.1:3000/upload/img",formData,{header:{"content-type":"multipart/form-data"}}).then((result)=>{
          if(result.data.code==200){
            this.$toast("上传成功",1000);
            this.details();
          }else{
            this.$toast("上传失败",1000);
          }
        })
     }else{
       alert('上传图片为非法图片');
     }
    },
    issue(){
      if (this.a==false && this.b==false){
        this.$router.push("./HoustLocation");
      }else{
        this.$toast("请完善信息");
      }
    }
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
.upload.trueupload{
  background-color:#ccc;
  margin-right:8px;
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
.isdisplay{
  display:none;
}
</style>