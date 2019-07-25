<template>
  <div>
    <mt-header title="已发布的房源">
      <router-link to="/me" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="content">
      <div class="house-item"  v-for="(item,index) in list" :key="index">
        <van-image
          width="10rem"
          height="7rem"
          fit="cover"
           :src="geturl(index)"
        />
        <div class="right-msg">
          <p>{{item.title}}</p>
          <p class="adreess">
            地址：
            <span>{{item.province}} {{item.city}}</span>
          </p>
          <p class="isload">已发布房源</p>
        </div>
      </div>
    </div>
    <mt-button type="primary" size="large" class="buttonPosition" @click="issue">继续发布房源</mt-button>
  </div>
</template>
<script>
import { Image } from "vant";
export default {
  data() {
    return {
      list:[],
      imgurl:[]
    };
  },
  components: {
    [Image.name]: Image
  },
  created: function() {
    var uid = sessionStorage.getItem("uid");
    console.log(uid);
    if(!uid){
      this.$messagebox("提示","您还未登录，请登录");
      this.$router.push('./login')
   }else{
    var obj = { uid };
    var url = "house/myhouse";
    this.axios.get(url, { params: obj }).then(result => {
      if (result.data.code == 200) {
        this.list=result.data.msg.leaseroom;
        this.imgurl=result.data.msg.homePic;
        console.log(this.imgurl);
      } else {
        console.log("错误");
      }
    });
   }
    
  },
  methods: {
    issue() {
      this.$router.push("./Houstingmsg");
    },
    geturl(index){
      var url="";
      if(!this.imgurl[index]){
        url="http://127.0.0.1:3000/images/house/1564066568617.jpeg";
      }else{
        url="http://127.0.0.1:3000"+this.imgurl[index].imgurl;
      }
      return url;
    }
  }
};
</script>
<style scoped>
.mint-header {
  background-color: rgba(255, 255, 255, 0);
  color: #ff9c1a;
  letter-spacing: 1px;
  height: 40px;
}
.mint-header .mint-header-title {
  font-weight: bold;
}
.mint-button.back {
  color: #ff9c1a;
}
.content {
  width: 90%;
  margin:auto;
  padding: 0 0 30px 0 ;
}
.house-item {
  background: rgba(0, 0, 0, 0.01);
  border-radius: 10px;
  padding: 10px;
  display: flex;
  margin: 20px 0;
}
.van-image {
  border-radius: 10px;
  overflow: hidden;
}
.right-msg {
  margin-left: 10px;
  font-size: 14px;
  position:relative;
}
p {
  margin: 0;
  padding: 0;
}
.adreess {
  font-size: 12px;
  letter-spacing: 1px;
  margin-top: 10px;
  color: #ccc;
}
.adreess span {
  color: #ff9c1a;
}
.isload {
  margin-top: 10px;
  border: 1px solid firebrick;
  color: firebrick;
  text-align: center;
  font-size: 12px;
  padding: 2px 0;
  width: 100px;
  border-radius: 10px;
  opacity: 0.6;
  position:absolute;
  bottom:10px;
}
.buttonPosition {
  position: fixed;
  bottom: 0;
  height: 50px;
  border-radius: 0;
  letter-spacing: 2px;
  font-size: 16px;
  font-weight: 600;
  background-color: #ff9c1a;
}
</style>