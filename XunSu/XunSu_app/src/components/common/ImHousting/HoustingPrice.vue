<template>
  <div>
    <div class="body">
    <mt-header title="房源价格和预定规则">
      <router-link to="/housting" slot="left">
        <mt-button icon="back" class="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="content">
      <h4>基础价格</h4>
       <van-cell-group>
          <van-cell title="平日价格" label="周日~周四及其他正常上班日期">
            <van-cell-group>
                <van-field v-model="price1" placeholder="请输入价格" />
            </van-cell-group>
              <span>元/晚</span>
          </van-cell>
          <van-cell title="节假日价格" label="周五、周六及法定节假日、情人节、圣诞节等">
            <van-cell-group>
              <van-field v-model="price2" placeholder="请输入价格" />
            </van-cell-group>
            <span>元/晚</span>
          </van-cell>
        </van-cell-group>  
      <h4>预定规则</h4>
        <van-cell-group>
          <van-cell title="最少入住时间">
             <van-stepper v-model="value" />天
          </van-cell>
          <van-cell title="对房客要求" @click="showPicker" is-link>
          </van-cell>
          <van-cell title="退订规则" @click="showPicker2" is-link label="【宽松】入住前1天12:00前提前退订，可获得100%退款。之后退订不退款">
          
          </van-cell>
        </van-cell-group>   
    </div>
    <!-- 退订 -->
    <van-popup v-model="show" position="bottom" :style="{ height: '100%' }">
      <div class="childcontent">
        <van-icon name="cross" @click="close" class="cross"/>
          <div class="childcontent_header">
             <span>退订政策</span> 
          </div>
        <van-radio-group v-model="radio">
          
          <van-cell-group>
            
            <van-cell title="宽松" clickable @click="radio = '1';show=false" label="入住前1天12:00前提前退订，可获得100%退款。之后退订不退款">
              <van-radio slot="right-icon" name="1" />
            </van-cell>
            <van-cell title="适中" clickable @click="radio = '2';show=false" label="入住前5天12:00前提前退订，可获得100%退款。之后退订不退款">
              <van-radio slot="right-icon" name="2" />
            </van-cell>
            <van-cell title="严格" clickable @click="radio = '3';show=false" label="入住前7天12:00前提前退订，可获得100%退款。之后退订不退款">
              <van-radio slot="right-icon" name="3" />
            </van-cell>
          </van-cell-group>
        </van-radio-group>
      </div>
    </van-popup>
    <!-- 对房客要求 -->
    <van-popup v-model="show2" position="bottom" :style="{ height: '100%' }">
      <div class="childcontent">
        <van-icon name="cross" @click="close" class="cross"/>
        <div class="childcontent_header">
             <span>房客要求</span> 
        </div>
        <van-checkbox-group v-model="result">
          <van-cell-group>
            <van-cell
              v-for="(item, index) in list"
              clickable
              :key="item"
              :title="`${item}`"
              @click="toggle(index)"
            >
              <van-checkbox
                :name="index"
                ref="checkboxes"
                slot="right-icon"
              />
            </van-cell>
          </van-cell-group>
        </van-checkbox-group>
      </div>
    </van-popup>
    
   </div> 
   <mt-tabbar v-model="selected" class="bottom">
     <mt-tab-item id="tab2">
      <mt-button class="nex" @click="tonext">存储并前往下一页</mt-button>
    </mt-tab-item>
  </mt-tabbar> 
  </div>
</template>
<script>
export default {
  data(){
    return {
      selected:"",
      show:false,
      show2:false,
      price1:"",
      price2:"",
      value:"",
      radio:"1",
      result:[],
      list:['允许携带宠物','允许做饭','允许聚会','允许吸烟','适合老人','适合儿童','适合婴幼儿'],
      l:[0,0,0,0,0,0,0]
    }
  },
  methods:{
    tonext(){
      var r=this.result;
      for(var key in r){
        var num=r[key];
        this.l[num]=1;
      }
      console.log(this.price1);
      console.log(this.price2);
      console.log(this.value);
      console.log(this.radio);
      console.log(this.l);
      var url="house/needKnow";
      var lid=this.$route.query.lid;
      var price1=this.price1;      //平常价格
      var price2=this.price2;     //节假日价格
      var minimumDay=this.value;  //最少入住天数
      var checkTime=this.radio;   //入住时是否宽松
      var needknow=this.l;
      var obj= {lid,price1,price2,minimumDay,checkTime,needknow};
      this.axios.get(url,{params:obj}).then(result=>{
          if(result.data.code==200){  
            this.$toast('房源设施添加成功',1000);
           this.$router.push(`/HoustIntroduce?lid=${lid}`);
          }else{
             this.$messagebox("提示","提交错误，请重新提交");
           }
      }) 
    },
    showPicker(){
       this.show2=true;
    },
    showPicker2(){
      this.show=true;
    },
    close(){
      this.show=false;
      this.show2=false;
    },
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
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
 .body{
    width: 100%;
    background-color: #f5f5f5;
    min-height:650px;
 }
  .content{
   width:90%;
   margin:auto;
   padding:10px 0;
 }

 

 .mint-button.nex{
   width:60%;
   height:33px;
   font-size:16px;
   background-color:#ff9c1a;
   color:#fff;
   border-radius:20px;  

 }
 .bottom{
   position:fixed;
 }
 .van-cell__value{
   color:#000;
   
 }
 .van-hairline--top-bottom::after{
   border-width:0;
 }
 .van-field_control{
   width:20rpx;
 }
 .cross{
   float:right;
 }
 .childcontent{
   width:90%;
   margin:20px auto;
 }
.childcontent_header{
  text-align:center;
}
</style>