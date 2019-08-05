<template>
  <div>
    <div class="me-header">
      <img class="user-poster" :src="geturl()" />
      <span class="user-poster user-shade"></span>
      <div class="user-name">
        <span>{{title}}</span>
        <img src="../../assets/img/编辑.png" class="compileIcon" @click="showPopup"/>
      </div>
      <span class="logout" v-if="showlogout" @click="logout">退出登录</span>
      <span class="logout" v-show="showlogin" @click="logout">登录</span>
    </div>
    <div>
      <van-image round width="5rem" height="5rem" :src="geturl()" class="user-img" />
      <van-row class="user-links">
        <van-col span="8">
          <van-icon name="envelop-o" class="icon-style" />系统消息
        </van-col>
        <van-col span="8">
          <van-icon name="phone-circle-o" class="icon-style" />联系客服
        </van-col>
        <van-col span="8">
          <van-icon name="clock-o" class="icon-style" />浏览历史
        </van-col>
      </van-row>

      <van-cell-group class="user-group">
        <van-cell icon="records" title="全部订单" is-link />
        <van-cell icon="points" title="我的积分" is-link />
        <van-cell icon="gold-coin-o" title="我的优惠券" is-link />
        <van-cell icon="gift-o" title="我收到的礼物" is-link />
      </van-cell-group>
    </div>
    <!-- 弹出层 -->
    <van-popup
      v-model="show"
      position="bottom"
      :style="{ height: '100%' }"
       get-container="body"
    >
      <mt-header title="编辑个人资料">
        <router-link to="" slot="left">
          <mt-button  @click="closePop">×</mt-button>
        </router-link>
        <mt-button slot="right" @click="save">保存</mt-button>
      </mt-header>
      <div class="content">
        <div class="pictureimg">
          <van-image round width="6rem" height="6rem" :src="img" class="user-update" ref="goodsImg" fit="cover">
         </van-image>
          <van-uploader :after-read="afterRead" accept="image/*">
           <van-button icon="photo" class="picture"></van-button>
          </van-uploader>
           <!-- <img class="compileIcon bianji" src="../../assets/img/编辑.png" /> -->
         
        </div>
          <div>
              <van-cell-group class="uname-update">
                <van-field v-model="uname" right-icon="edit" placeholder="用户名长度3~9位" maxlength="9" clearable/>
              </van-cell-group>
              <van-cell-group>
                <van-cell title="手机号" :value="phone"/>
                <van-cell title="邮箱地址" value="内容">
                    <van-field v-model="email" placeholder="填写正确的邮箱地址" class="email" :value="email" :error-message="errormsg" @input="emailchange"></van-field>
                </van-cell>
                <van-cell title="性别">
                  <van-radio-group v-model="radio">
                    <van-radio name="1" checked-color="#ff9c1a" class="float-r">男</van-radio>
                    <van-radio name="2" checked-color="#ff9c1a" class="float-r">女</van-radio>
                  </van-radio-group>
                </van-cell>
                <van-cell title="个人简介">
                  <van-field
                      v-model="message"
                      type="textarea"
                      placeholder="请输入您的个人简介"
                      rows="2"
                      autosize
                      maxlength="50" 
                      class="email" 
                  />
                </van-cell>
              </van-cell-group>
          </div>

      </div>
    </van-popup>
  
    <mt-button @click="imhouster" size="large" class="imhouster">我是房东</mt-button>
    <Tabbar :selected="selected"></Tabbar>
  </div>
</template>
<script>
import { Row, Col } from "vant";
import Tabbar from "../tabbar";
import { Dialog } from 'vant';
export default {
  name:'me',
  data() {
    return {
      selected:"me",
      title: "",
      showlogout: true,
      showlogin: false,
      show:false,
      uname:"",
      list:[],
      phone:"",
      radio:"",
      email:"",
      message:"",
      errormsg:"",
      imgurl:"",
      img:"",
      uid:"",
      file:[]
    };
  },
  created: function() {
    this.islogin();
  },
  methods: {
    islogin() {
      var uid = sessionStorage.getItem("uid");
      this.uid=uid;
      if (!uid) {
        this.title = "未登录";
        this.showlogout = false;
        this.showlogin = true;
      } else {
        this.showlogout = true;
        this.showlogin = false;
        var obj = { uid };
        var url = "house/myhouse";
        this.axios.get(url,{params:obj}).then(result => {
          if (result.data.code == 200) {
            if (result.data.msg.user.uname == null) {
              this.title = "未设置用户名";
            } else {
              this.title = result.data.msg.user.uname;
            }
            this.list=result.data.msg.user;
              console.log(this.list)
              var phone=this.list.phone;
              this.phone=phone.slice(0,3)+"****"+phone.slice(-4);
              this.email=this.list.email;
              this.message=this.list.remark;
              if(this.list.gender=='1'){
                this.radio=1;
              }else{
                this.radio=2;
              }
          } else {
            console.log("错误");
          }
        });
      }
    },
    showPopup() {
      if(this.title=="未登录"){
         this.$messagebox("提示", "您还未登录，请登录");
      }else{ 
        this.show=true;
        this.uname=this.title;
        this.img=this.imgurl;
      }
    },
    closePop(){
      Dialog.confirm({
        title: '提示',
        message: '您还未保存，确定要退出吗'
      }).then(() => {
        this.show=false;
      }).catch(() => {
      });
    },
    imhouster() {
      if(sessionStorage.getItem("uid")){
        this.$router.push("./housting"); 
      }else{
        this.$messagebox("提示", "您还未登录，请登录");
      } 
    },
    geturl() {
      var url = "";
      if (!this.list.avatar || this.list.avatar == null) {
        url = "http://127.0.0.1:3000/images/avatar/1564045657591.jpeg";
      } else {
        url = "http://127.0.0.1:3000" + this.list.avatar;
      }
      this.imgurl=url;
      return url;
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      this.img=file.content; 
      // this.$refs.goodsImg.src=this.imgurl;
      this.file=file;
    },
    logout() {
      if (this.showlogin == false) {
        this.$messagebox
          .confirm("提示", "您确定要退出吗")
          .then(action => {
            sessionStorage.removeItem("uid");
            this.$toast("您已经退出", 1000);
            this.$router.go("/home");
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        this.$router.push("./login");
      }
    },
    emailchange(){
      var regex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
      if(!regex.test(this.email) && !this.email==""){
        this.errormsg="邮箱格式不正确";
        // console.log(this.radio)
      }else{
        this.errormsg=""
      }
    },
    save(){
      console.log(this.errormsg)
      if(this.errormsg==""){
        var url="user/updateuser";
        let formData = new FormData();
        var uid=this.uid;
        var uname=this.uname;
        var email=this.email;
        var gender;
        var remark=this.message;
        var file=this.file.file;
        if(this.radio==1){
          gender=1;
        }else{
          gender=0;
        }
        formData.append('test',file);
        formData.append('test',this.uid);
        formData.append('test',uname);
        formData.append('test',email);
        formData.append('test',gender);
        formData.append('test',remark);
        let config = {
            header:{'Content-Type':'multipart/form-data'}
          }
        const instance=this.axios.create({
            withCredentials: true
          }) 
        instance.post("http://127.0.0.1:3000/user/updateuser",formData,config).then((result)=>{
          if(result.data.code==200){
            this.$toast("修改成功",1000);
            // window.reload();
            this.$router.push('/kong');
          }else{
            this.$toast("修改失败",1000);
          }
        })
      }else{
        Dialog.alert({
          message: '您的邮箱格式不正确'
        }).then(() => {
          // on close
        });
      } 
    }
  },
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    Tabbar,
    [Dialog.Component.name]: Dialog.Component
  }
};
</script>
<style scoped>
h4{
  margin:0;padding:0;
}
.imhouster {
  color: #fff;
  background-color: #ffb453;
  letter-spacing: 3px;
  margin: 90px 0 60px 0;
}
.user-links {
  width: 100%;
  height: 15vw;
  padding: 20px 0 30px 0;
  font-size: 14px;
  text-align: center;
  color: #474747;
}
.van-icon {
  display: block;
  font-size: 24px;
  margin-bottom: 10px;
}
.van-icon.icon-style {
  font-size: 30px;
  color: #7e7e7e;
}
img {
  width: 100%;
}
.user-poster {
  height: 200px;
  filter: blur(10px);
  /* border-bottom-left-radius: 300px; */
  /* border-bottom-right-radius: 100px; */
}
.user-poster.user-shade {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  /* filter: blur(50px); */
}
.user-img {
  position: absolute;
  top: 90px;
  right: 30px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid rgba(255, 255, 255, 0.8);
}
.user-name {
  position: absolute;
  top: 90px;
  left: 50px;
  color: rgb(65, 65, 65);
  font-size: 16px;
  letter-spacing: 2px;
  font-weight: bold;
}
.user-group {
  margin: 0px 10px 50px;
}
.me-header {
  overflow: hidden;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  position: relative;
  /* filter: blur(10px); */
}
.logout {
  font-size: 12px;
  position: absolute;
  top: 10px;
  right: 30px;
  color: rgb(68, 68, 68);
}
.compileIcon {
  width: 30px;
  height: 30px;
  vertical-align: -webkit-baseline-middle;
  margin-bottom: 10px;
}
.userheader{
  display:flex;
  justify-content: space-around;
  align-items: baseline;
}
.mint-header{
  background-color:#ffb453;
}
.content{
  width:90%;
  margin:auto;
  position: relative;
}
.user-update{
  border: 4px solid rgba(255, 255, 255, 0.8);
  border-radius:50%;
  overflow:hidden;
}
.pictureimg{
  color:#aaa;
  width:96px;
  margin:auto;
  margin-top:30px;
}
.picture{
  display:block;
  margin:auto;
}
.van-hairline--top-bottom::after {
    border-width:0;
}
.uname-update{
  width:50%;
  margin:auto;
  /* padding-left:2Z0px; */
}
.float-r{
  float:right;
  margin:0 10px;
}
.van-cell.email{
  padding:0;
}
.compileIcon.bianji{
  margin-top:-60px;
  margin-left:90px;
}
.van-uploader{
  position:absolute;
  top:70px;
  right:110px;

}
.picture.van-button{
  background-color:rgba(0,0,0,0);
  border:0;
  padding:0 -5px;
  color:rgb(63, 63, 63);
}
</style>
