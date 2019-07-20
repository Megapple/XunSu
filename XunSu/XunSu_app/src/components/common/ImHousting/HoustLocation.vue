<template>
  <div>
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
            <span>{{addrInfo}}</span>
            <mt-button type="primary" @click="showPopup" class="select">
             选择 >
           </mt-button>
          </li>
          <li>
            <span>街道地址</span>
            <mt-field placeholder="请输入" type="text" v-model="sname"></mt-field>
          </li>
          <li>
            <span>小区名称</span>
            <mt-field type="text" placeholder="请输入" v-model="plot"></mt-field>
          </li>
          <li>
            <span>楼、单元、门牌号</span>
            <mt-field class="de_address" placeholder="请填写详细的楼、单元、门牌号" v-model="specific"></mt-field>
          </li>
        </ul>
      </div>
      <h4>地图位置</h4>
      <span @click="togo">dinwo </span>
    </div>
    <van-popup v-model="show" position="bottom" :style="{ height: '40%' }" loading round>
      <van-area :area-list="areaList" value="110101" title="" @confirm="onAddConfirm" @cancel="onAddrCancel" />
    </van-popup>
    
  </div>
  <mt-button size="large" type="primary" class="tonext" @click="tonext">确定信息</mt-button>
  </div> 
</template>

<script>
import area from '../../../../static/area.js';
export default {
  data(){
    return {
       show:false,
       areaList:area,
       addrInfo:"",
       lat:34,
       lng:108,
       titleName:"woshi表情",
       content:"你好啊",
       prname:"", //省
       ciname:"",  //室
       dname:"", //区
       sname:"", //街道
       plot:"", //小区
       specific:"" //门牌号等

    }
  },
  methods:{
    showPopup() {
      this.show = true;
    },
    onAddConfirm(val){
      this.show=false
      this.prname=val[0].name;
      this.ciname=val[1].name;
      this.dname=val[2].name;
      this.addrInfo=this.prname+" "+this.ciname+" "+this.dname;
    },
    onAddrCancel(){
      this.show=false;
    },
    togo(){
     window.location.href = "http://api.map.baidu.com/marker?location=" + this.lat + "," + this.lng + "&title=" + this.titleName + "&content=" +this.content+ "&output=html";
    },
    tonext(){
      var url="house/update";
      var lid=this.$route.query.lid;
      var address=this.plot+this.specific;
      var obj= {prname:this.prname,ciname:this.ciname,dname:this.dname,sname:this.sname,address:address,lid:lid};
      this.axios.get(url,{params:obj}).then(result=>{
          if(result.data.code==200){  
            this.$toast('房源地址添加成功',1000);
           this.$router.push(`./HoustingFacility?lid=${lid}`);
          }else{
             this.$messagebox("提示","提交错误，请重新提交");
           }
      }) 
      
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
    background-color: #f5f5f5;
 }
 .msgWidth{
   width:90%;
   margin:auto;
   letter-spacing:1px;
 }
 .content{
   width:100%;
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
 .tonext{
   position:absolute;
   bottom:10px;
   margin:0 auto;
   padding:0 20px;
 }
</style>