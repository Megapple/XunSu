<template>
    <div class="orderPay">
        <!-- 页面标题 -->
        <div class="header">
            <mt-header title="订单支付" fixed>
                <router-link to="/Orderdetail" slot="left">
                    <mt-button class="iconfont icon-return">返回</mt-button>
                </router-link>
            </mt-header>
        </div>
        <div style="margin-top:60px;"></div>
        <!-- 订单信息 -->
        <div class="orderMsg">
            <div class="orderDetail">
                <h3>待付款: <span>{{time}} &nbsp;后将自动取消</span></h3>
                <p v-text="title"></p>
                <p v-text="date">共1晚</p>
            </div>
            <div class="orderNo">
                <p style="line-height:1;">订单编号: <span v-text="orderNo"></span></p>
                <mt-button type="default"  @click="canOrd">取消订单</mt-button>
            </div>
        </div>
        <!-- 入住人员和 -->
        <div class="orderContent" >
            <div class="backDetail" @click="goDetail">
                <p class="iconfont icon-return" slot="right" v-text="title_Pname"></p>
            </div>
            <div class="backDetail">
                <p>莫干山风景区  |  莫干山</p>
                <p>德清县筏头乡瑶坞村35-37号</p>
            </div>
            <div class="statPeople">
                <p>入住人:&nbsp; <span v-text="uname"></span></p>
                <p>联系电话: &nbsp;<span v-text="tel"></span></p>
                <p style="text-algin:center;">如需发票,请联系前台!</p>
            </div>
        </div>
        <!-- 费用明细 -->
        <div class="costList">
            <div class="orderPrice">
                <p>房费</p>
                <p>{{count_F}}间共{{count_T}}晚 <span v-text="`¥${price.toFixed(2)}`"></span></p>
            </div>    
            <div class="orderPrice">
                <p>金卡会员9.5折</p>
                <span v-html="`-¥${agio_price}`"></span>
            </div>
            <div class="orderPrice">
                <p>首单优惠</p>
                <span v-html="`-¥${first_price}`"></span>
            </div>
           
        </div>
        <!-- 支付按钮 -->
         <div class="costPay">
            <div class="price">
                <p style="color:#FDC822;font-size:18px;" v-html="`¥${price}`"></p>
               
            </div>
        
            <div class="submit">
               <mt-button  size="large" v-model="submitPay" @click="submitPay=true" fixed>去支付</mt-button>
               <mt-popup v-model="submitPay" position="bottom">
                    <mt-radio title="请选择支付方式" v-model="value" :options="list" @change="selectPay">
                    </mt-radio>
                </mt-popup>
            </div>
        </div>
        <div class="reimburse">
           
                <h4>预定须知</h4>
                <ul style="padding-left:17px">
                    <li><p>酒店于入住当天14:00办理入住,如提前到达酒店,酒店视客房情况是否给予提前入住</p></li>
                    <li><p>官网预定入住保留时间为入住次日12:00,所有会员可延迟至14:00(视客房情况而定);</p></li>
                </ul>
                <h4>退订政策</h4>
                <ul style="padding-left:17px">
                    <li>
                        <p>预定且未入住的订单可在入住日前72小时通过App进行取消</p>
                    </li>
                    <li>
                        <p>超过取消时限,已支付的房费不予以退还
                        </p>
                    </li>
                </ul>
            

        </div>
         <div style="margin-bottom:70px;"></div>
            
           
        
         
    </div>
</template>
<script>
export default {
    data(){
        return{
            time:"14分42秒",
            title:"慧然大床房(双早)共一间",
            date:"2019-07-14至2019-07-15",
            orderNo:1234556786434545,
            title_Pname:"阿尔卡迪亚国际假日酒店",
            uname:"oldwang",
            tel:"13120234945",
            count_F:1,
            count_T:1,
            price:1000,
            agio_price:"9.5",
            first_price:15,
            submitPay:false,
            value:"",
            timer:'',
            
            list:['微信支付', '支付宝扫支付', '银联卡支付']


        }//return 结束
    },//data 结束
   
    methods:{
         
        selectPay(){
            var list=this.list
            var val=this.value
            for(var i of list){
                console.log(111)
                if(i==val){
                    this.$toast({
                        message:`${i}支付成功`,
                        
                        iconClass: 'icon icon-tanhao'  
                     });                      
                      this.$router.push('/Order')   
                }
            }
          
                           
                            
                         
            //console.log(this.value)
            // if(this.value="微信支付"){
            //     this.$toast("正在打开微信")
            // }
            // var list=this.list;
            // console.log(list)
            // for(var i of list ){
            //     if(list[i]=value){
            //         console.log(123);
            //     }
            // }
        },
        goDetail(){
             console.log(123);
        },
        go(){
            this.$router.push('/Orderdetail')
        },
        canOrd(){
            console.log(123);
        }
    }

}
</script>
<style scoped>

.orderPay{
    background-color: #eee;
   
    
    
}
    .mint-header{
      background-color: rgb(245, 156, 26);
      height:55px;
      font-size:16px;
      
  }
  .orderMsg{
    background-color:rgb(245, 156, 26);
    padding: 8px;
    margin: 10px;
    border-radius: 10px;
   
  }
  .orderNo{
      display: flex;
      justify-content:space-between;
  }
  .mint-button--normal{
    background-color: rgb(245, 156, 26);
      height:55px;
    color: #ffff;
    font-size: 15px;
    line-height: 3;
  }
  .mint-button::after{
      background-color: transparent;
      border: none;
  }
  .mint-button--large{
    background-color: rgb(245, 156, 26);
      height:55px;
    border-radius: 10px;
    margin-right: 10px;
}
.mint-button--default{
    box-shadow:none;
    -webkit-box-shadow:none;
    color: #fff;
}
.mint-popup-bottom{
   /* background-color:rgb(245, 156, 26); */
    width: 100%;
    color:rgb(245, 156, 26);
}
.mint-radiolist-title {
    font-size: 20px;
    margin: 8px;
    display: block;
    color: rgb(245, 156, 26);
    height: 50px;
}
  .orderContent{
    margin: 10px;
    background-color:#fff;
     padding: 8px;
    margin: 10px;
    border-radius: 10px;
   
  }
  .backDetail{
    border-bottom:1px solid #eeeeee;
  }
  .costList{
   
    background-color: #fff;
    padding: 8px;
    margin: 10px;
    border-radius: 10px;
  }
.costPay{
    display:flex;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    z-index: 999;
    background-color: #fff;
    width: 100%;
   line-height: 0;
   padding: 10px;
}    
.submit{
    
    width: 160px;
  
    margin-right: 23px;
    
}
.reimburse{
    background-color: #eee;
    margin-top: 10px;
    padding: 13px;
}
.orderPrice{
    display: flex;
    justify-content: space-between;
}
li{
    color:gray;
}
ul>li p{
    color:gray;
    font-size: 15px;
    padding: 7px;
}

</style>


