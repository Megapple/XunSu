<template>
  <div class="content">
    <div>
    <img class="user-poster" :src="geturl()">
    <span class="user-poster user-shade"></span>
    <span class="user-name">小罗比</span>
    <van-image
        round
        width="5rem"
        height="5rem"
        :src="geturl()"
         class="user-img"
      />
    <van-row class="user-links">
      <van-col span="6">
        <van-icon name="pending-payment" />
        待付款
      </van-col>
      <van-col span="6">
        <van-icon name="records" />
        待接单
      </van-col>
      <van-col span="6">
        <van-icon name="tosend" />
        待发货
      </van-col>
      <van-col span="6">
        <van-icon name="logistics" />
        已发货
      </van-col>
    </van-row>

    <van-cell-group class="user-group">
      <van-cell icon="records" title="全部订单" is-link />
      <van-cell icon="points" title="我的积分" is-link />
      <van-cell icon="gold-coin-o" title="我的优惠券" is-link />
      <van-cell icon="gift-o" title="我收到的礼物" is-link />
    </van-cell-group>
  </div>
    <mt-button @click="imhouster"  size="large" class="imhouster">我是房东</mt-button>  
  </div>
</template>
<script>
import { Row, Col} from 'vant';
export default {
  data () {
    return {
      phone:"",
      upwd:""
    }
  },
  methods:{
    imhouster(){
      this.$router.push("./housting");
    },
    geturl(){
      var url="";
      if(!this.imgurl){
        url="http://127.0.0.1:3000/images/house/1564066568617.jpeg";
      }else{
        url="http://127.0.0.1:3000"+this.imgurl[index].imgurl;
      }
      return url;
    }
  },
  components: {
    [Row.name]: Row,
    [Col.name]: Col
  }
}
</script>
<style scoped>
.content{
  padding-bottom:60px;
}
.imhouster{
  position:absolute;
  bottom:0x;
  left:0;
  color:#fff;
  background-color:#ffb453;
  letter-spacing: 3px;
}
.user-links{
  width: 100%;
  height: 15vw;
  padding:30px 0;
  font-size:12px;
  text-align:center;
}
.van-icon {
  display: block;
  font-size: 24px;
  margin-bottom:5px;
}

img{
  width:100%;
}
.user-poster{
height:200px;
filter: blur(20px);
/* border-bottom-left-radius: 300px; */
/* border-bottom-right-radius: 100px; */
}
.user-poster.user-shade{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  background-color: rgba(0,0,0,.05);
  filter: blur(1px);
}
.user-img{
  position:absolute;
  top:60px;
  right:30px;
  border-radius:50%;
  overflow: hidden;
  border:6px solid rgba(0,0,0,.05);
}
.user-name{
  position:absolute;
  top:90px;
  left:30px;
  color:rgb(136, 136, 136);
  font-size: 20px;
  letter-spacing: 3px;
  font-weight: bold;
}
.user-group{
  margin:0px 10px 50px;
}
</style>
