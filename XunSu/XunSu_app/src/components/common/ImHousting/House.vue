<template>
  <div>
      <!-- <router-link to="/home" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link> -->
      <div class="header">
        <van-icon name="wap-home" @click="tohome" color="white" size="30px" class="tohome"/>
        <span>发布的房源</span>
      </div>
    <div class="content">
      <div v-if="show">
          <img src="../../../assets/img/4188bb0b93fc3d2d58af022818ad15ff.png" alt="" class="img-style">
      </div>
      <div v-if="!show">
        <div class="house-item"  v-for="(item,index) in list" :key="index" >
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
      
    </div>
    <mt-button type="primary" size="large" class="buttonPosition" @click="issue">{{house}}</mt-button>
  </div>
</template>
<script>
import { Image } from "vant";
export default {
  data() {
    return {
      list:[],
      imgurl:[],
      uid:"",
      house:"发布房源",
      show:""
    };
  },
  components: {
    [Image.name]: Image
  },
  created: function() {
    var uid = sessionStorage.getItem("uid");
    //  if(this.list.length==0){
    //    this.$messagebox("提示","您还未发布房源");
    //  } 
    var obj = { uid };
    var url = "house/myhouse";
    this.axios.get(url, { params: obj }).then(result => {
      if (result.data.code == 200) {
        this.list=result.data.msg.leaseroom;
        console.log(this.list);
        this.imgurl=result.data.msg.homePic;
        var length=this.imgurl.length-1;
        if(this.list.length==0){
          this.show=true;
        }else{
          this.show=false;
        }
      } else {
        console.log("错误");
      }
    }); 
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
    },
    tohome(){
      this.$router.push('./home')
    //   var length=this.imgurl.length-1;
    //   var obj={lid:this.list[length].lid,imgurl:this.imgurl[length].imgurl}
    //   var url="house/img";
    //   console.log(obj)
    //    this.axios.get(url, { params: obj }).then(result => {
    //   if (result.data.code == 200) {
    //     this.$router.push('./home');
    //   } else {
    //     console.log("错误");
    //   }
    // });
    }
  }
};
</script>
<style scoped>
/* .mint-header {
  background-color: rgba(255, 255, 255, 0);
  color: #ff9c1a;
  letter-spacing: 1px;
  height: 40px;
}
.mint-header .mint-header-title {
  font-weight: bold;
} */
.header{
  height:40px;
  background-color:#ff9c1a;
  text-align: center;
  line-height: 40px;
  color:#fff;
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
  height: 50px;
  border-radius: 0;
  letter-spacing: 2px;
  font-size: 16px;
  font-weight: 600;
  background-color: #ff9c1a;
  position:absolute;
  bottom:0;
}
.tohome{
  float:left;
  position:absolute;
  top:5px;
  left:20px;
}
.img-style{
  width:100%;
  margin-top:100px;
}
</style>