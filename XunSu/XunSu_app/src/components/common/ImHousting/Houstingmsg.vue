<template>
  <div>
  <div class="body">
    <mt-header title="房源信息">
      <router-link to="/housting" slot="left">
        <mt-button icon="back" class="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="content">
      <h4>房屋</h4>
        <van-cell-group>
          <van-cell title="出租形式" @click="showPopup" is-link>
            <span>{{radiomsg}}</span>
          </van-cell>
          <van-cell title="房间个数" @click="showPicker = true" is-link>
            <span>{{bedroomvalue}}室</span>
          </van-cell>
          <van-cell title="房间面积">
            <!-- 房间面积 -->
            <mt-field placeholder="填写房间面积" v-model="housearea">㎡</mt-field>
          </van-cell>
        </van-cell-group>   
      <h4>其他</h4>
      <div class="housemsg">
           <!-- 床数 -->
         <van-cell-group>
          <van-cell title="床数" @click="showPicker2 = true" is-link>
            <span>{{bedvalue}}张床</span>
          </van-cell>  
          <!-- 卫生间数 -->
          <van-cell title="卫生间">
            <van-radio-group v-model="radio" @change="totoilet">
            <van-radio name="1" class="float-r">独卫</van-radio>
            <van-radio name="2" class="float-r">公卫</van-radio>
          </van-radio-group>
          </van-cell>
          <!-- 可住人数 -->
          <van-cell title="可住人数">
            <van-stepper v-model="value1" />
          </van-cell>
        </van-cell-group>   
      </div>
      
    </div>
  </div> 
  <mt-tabbar v-model="selected">
    <!-- <mt-tab-item id="tab1">
      <mt-button class="nex" @click="tosave">保存</mt-button>
    </mt-tab-item> -->
    <mt-tab-item id="tab2">
      <mt-button class="nex" @click="tonext">存储并前往下一页</mt-button>
    </mt-tab-item>
  </mt-tabbar>
     <!-- 整套出租 -->
    <van-popup v-model="show" position="bottom" :style="{ height: '40%' }">
      <div class="content">
        <van-icon name="success" @click="closed" size="30px" info/>
        确定
          <van-radio-group v-model="radio">
          <van-cell-group>
            <van-cell title="整套出租" clickable @click="radio = '1'">
              <van-radio slot="right-icon" name="1" />
            </van-cell>
            <van-cell title="单间出租" clickable @click="radio = '2'">
              <van-radio slot="right-icon" name="2" />
            </van-cell>
            <van-cell title="合住房间" clickable @click="radio = '3'">
              <van-radio slot="right-icon" name="3" />
            </van-cell>
          </van-cell-group>
        </van-radio-group>
      </div>
    </van-popup>
    <van-popup v-model="showPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @cancel="showPicker = false"
        @confirm="onConfirm1"
      />
    </van-popup>
    <van-popup v-model="showPicker2" position="bottom">
      <van-picker
        show-toolbar
        :columns="columns2"
        @cancel="showPicker2 = false"
        @confirm="onConfirm2"
      />
    </van-popup>
      
  </div> 
</template>

<script>
export default {
  data(){
    return {
      show:false,
      housearea:"",
      radio: '1',
      radiomsg:'整套出租',
      selected:"",
      columns: ['1', '2', '3', '4', '5','6','7','8','9','10'],
      columns2: ['1', '2', '3', '4', '5', '6','7','8','9','10','11','12','13','14','15','16','17','18'],
      showPicker: false,
      showPicker2: false,
      value:"",
      value1:"",
      bedroomvalue:"1",
      bedvalue:"1",
      toilet:""
    }
  },
  methods:{
    tonext(){
       var area=this.housearea; //面积
      var bedroom=this.bedroomvalue; //几室
      var bed=this.bedvalue;   //几床
      var toilet=this.toilet;  //卫生间
      var htType=this.radiomsg;  //整套出租
      var tenant=this.value1;  //几人
      var url="house/reg";
      var uid = sessionStorage.getItem("uid");
      var obj= {area,bedroom,bed,toilet,htType,tenant,uid};
      this.axios.get(url,{params:obj}).then(result=>{
          if(result.data.code>0){  
             this.$toast("上传成功",1000);
             console.log(result.data.msg.insertId);
           this.$router.push("./housting");
          }else{
             this.$toast("上传失败，请重新填写",1000);
           }
      }) 
    },
    showPopup() {
      this.show = true;
    },
    closed(){
      this.show=false;
      if(this.radio==1){
        this.radiomsg="整套出租";
      }else if(this.radio==2){
        this.radiomsg="单间出租";
      }else{
        this.radiomsg="合住房间";
      }
    },
    onConfirm1(value) {
      this.bedroomvalue = value;
      this.showPicker = false;
    },
    onConfirm2(value) {
      this.bedvalue = value;
      this.showPicker2 = false;
    },
    totoilet(e){
      console.log(e);
      if(e==1){
        this.toilet="独立卫生间";
      }else{
        this.toilet="公共卫生间";
      }
   }
  }
}
</script>
<style scoped>
  .mint-header{
   background-color:rgba(255,255,255,0);
   color:#ff9c1a;
   letter-spacing:1px;
   height:40px;
 }
 .mint-header .mint-header-title{
  font-weight:bold;
 }
 .mint-button.back{
   color:#ff9c1a;
 }
 .ran-radio{
   display:inline-block;
 }
 .mint-button.nex{
   width:60%;
   height:33px;
   font-size:16px;
   background-color:#ff9c1a;
   color:#fff;
   margin:3px 0;
   border-radius:20px;
 }
 .body{
    width: 100%;
    background-color: #f5f5f5;
    height:650px;
 }
 .content{
   width:90%;
   margin:auto;
   padding:10px 0;
 }

.van-cell-grouop{
  border-radius:10px;
}
.van-cell .van-cell__value{
  color:#3f3e3f;
  font-weight:600;
}
.float-r{
  float:right;
  margin:0 6px;
}
</style>