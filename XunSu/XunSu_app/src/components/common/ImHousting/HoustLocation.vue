<template>
  <div class="body">
    <mt-header title="房源位置">
      <router-link to="/housting" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="msgWidth">
      <h4>房源地址</h4>
      <div class="content">
        <ul>
          <li>
            <span>城市区域</span>
            <van-button type="primary" @click="showPopup" class="select">
             选择 >
           </van-button>
          </li>
          <li>
            <span>街道地址</span>
            <mt-field placeholder="请输入" type="text" v-model="active"></mt-field>
          </li>
          <li>
            <span>小区名称</span>
            <mt-field type="text" v-model="ID_number" placeholder="请输入"></mt-field>
          </li>
          <li>
            <span>楼、单元、门牌号</span>
            <mt-field class="de_address" placeholder="请填写详细的楼、单元、门牌号"></mt-field>
          </li>
        </ul>
      </div>
    </div>
    <van-popup v-model="show" position="bottom" :style="{ height: '40%' }" loading round>
      <van-area :area-list="areaList" value="110101" title="标题"  />
    </van-popup>
  </div>
</template>

<script>
import area from '../../../../static/area.js';
export default {
  components:{area},
  data(){
    return {
       show:false,
       areaList:area,
    }
  },
  methods:{
    showPopup() {
      this.show = true;
    }
  }
}
</script>
<style scoped>
  .mint-header{
   background-color:rgba(255,255,255,0);
   color:#000;
   letter-spacing:1px;
   font-weight:900;
   height:40px;
 }
 .body{
    width: 100%;
    height:800px;
    background-color: #f5f5f5;
 }
 .msgWidth{
   width:90%;
   margin:auto;
   letter-spacing:1px;
 }
 .content{
   width:100%;
   height:400px;
   background-color:#fff;
   border-radius:10px;
 }
 ul{
   list-style-type:none;
   margin:0;
   padding:0;
   font-size:14px;
   color:#383838;
 }
 li{
   padding:10px 5px;
 }
 .de_address{
   border:1px solid #eee;
   border-radius:10px;
   height:100px;
 }
 .select{
   float:right;
 }
</style>