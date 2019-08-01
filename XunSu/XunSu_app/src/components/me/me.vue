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
    <div class="content">
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
        <router-link to="/" slot="left">
          <!-- <mt-button icon="cross"></mt-button> -->
          <mt-button  @click="closePop">×</mt-button>
        </router-link>
        <mt-button slot="right">保存</mt-button>
      </mt-header>
    <!-- <div class="userheader">
      <van-icon name="cross" />
      <h4>编辑个人资料</h4>
      <span>保存</span>

    </div> -->
    </van-popup>
    <mt-button @click="imhouster" size="large" class="imhouster">我是房东</mt-button>
    <Tabbar :selected="selected"></Tabbar>
  </div>
</template>
<script>
import { Row, Col } from "vant";
import Tabbar from "../tabbar";
export default {
  data() {
    return {
      selected:"me",
      imgurl: "",
      title: "",
      showlogout: true,
      showlogin: false,
      show:false
    };
  },
  created: function() {
    this.islogin();
  },
  methods: {
    islogin() {
      var uid = sessionStorage.getItem("uid");
      if (!uid) {
        this.title = "未登录";
        // this.$messagebox("提示", "您还未登录，请登录");
        this.showlogout = false;
        this.showlogin = true;
        // this.$router.push('./home')
      } else {
        this.showlogout = true;
        this.showlogin = false;
        var obj = { uid };
        var url = "house/myhouse";
        this.axios.get(url,{params:obj}).then(result => {
          console.log(124234234);
          if (result.data.code == 200) {
            console.log(result.data.msg);
            if (result.data.msg.user.uname == null) {
              this.title = "未设置用户名";
            } else {
              this.title = result.data.msg.user.uname;
            }
            this.imgurl = result.data.msg.user.avatar;
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
      }
    },
    closePop(){
      this.how=false;
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
      if (!this.imgurl || this.imgurl == null) {
        url = "http://127.0.0.1:3000/images/avatar/1564045657591.jpeg";
      } else {
        url = "http://127.0.0.1:3000" + this.imgurl;
      }
      return url;
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
    }
  },
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    Tabbar
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
</style>
