<template>
    
      <div class="pay-container">
        <!-- 页面标题 -->
        <mt-header title="订单详情" fixed>
            <router-link to="/Order" slot="left">
                <mt-button class="iconfont icon-return">返回</mt-button>
            </router-link>
        </mt-header>
        <!-- 防止溢出 -->
       <div style="margin-top:60px;"></div>
       <div class="order-box">
           <!-- 预定房型 -->
            <div class="orderMessage">
                <p>预定房型 &nbsp;<span>{{houseType}}</span></p>
                <p>入离日期 &nbsp;<span>{{houseData}}</span></p>
            </div>
            <!-- 入住信息 -->
            <div class="orderMessage">
                <p class="warning iconfont icon-huo">仅剩<span>1</span>间,请尽快预定以免被人抢订</p>
                <!-- 房间数 -->
                <div class="roomMount mflex">
                    <p>房间数</p>
                    <div class="roomButton">
                        <mt-button style="color:rgb(245, 156, 26)">-</mt-button>
                        <span>1</span>
                        <mt-button style="color:rgb(245, 156, 26)">+</mt-button>
                    </div>
                </div>
                <!-- 入住人 -->
                <div class="roomPeople mflex">
                    <p>入住人<i class="iconfont icon-tanhao"></i></p>
                    <div class="msg">
                        <p>客房1(需填一个人入住)</p>
                        <div class="mflex">
                            <mt-field placeholder="入住人姓名" type="text" v-model="uname" @blur.native.capture="checkInputName"></mt-field>
                            <button class="iconfont icon-tianjiayonghu" @click="go"></button>
                        </div>
                        
                    </div>
                </div>
                <!-- 联系电话 -->
                <div class="contact mflex">
                    <p>联系电话</p>
                    <p>+86</p>
                    <div class="mflex">
                        <mt-field  type="tel" v-model="phone" @blur.native.capture="checkInputPhone"></mt-field>
                        <button class="iconfont icon-tongxunlu"></button>
                    </div>
                    
                </div>
            </div>
            <!-- 保险信息-->
            <div class="insurance mflex" style="padding:0 3%;">
                <div class="insurance_icon mflex">
                    <div class="icon">
                        <img style="width:30px; text-align:center;" src="../../assets/Orderimage/san.png" alt="">
                    </div>
                    <div class="insurance_content" style="margin-left:10px;">
                        <p>住民宿免费赠送(意外保险)</p>
                        <span style="color:gray;font-size:10px;">迅速为您的人身安全保驾护航</span>
                    </div>
                </div> 
                <div class="insurance">
                  <mt-switch v-model="value"></mt-switch>
                </div>
            </div>
            <!-- 发票事宜 -->
            <div class="invoice">
                <p style="padding-left: 10px;color:gray">发票事宜请与房东协商</p>
            </div>
            <!-- 预定须知 -->
            <div class="orderPact">
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
           
       </div>
       <!-- 底部支付明细和提交按钮 -->
       <div class="orderPay">
           <div class="price">
            <p style="color:#FDC822;font-size:18px;" v-html="`¥${price}`"></p>
            <p>全网最低价</p>
           </div>
           <div class="submit">
               <mt-button  size="large" @click="goPay" fixed>提交订单
               </mt-button>
           </div>

       </div>
       <div style="margin-bottom:70px;"></div>
       
    </div>
    
</template>
<script>
export default {
    data() {
        return {
             houseType:""   ,
             houseData:"07-11-07-12 共1晚",
             uname:"",
             phone:"",
             card:"",
             price:"",
             value:"",
             sbumitPay:"",
             lid:""

             

        }
     
    }, 
      methods:{
         
          checkInputName(){
              var name=this.uname;
              var Rege=/^[\u4E00-\u9FA5]+$/;
              if(!Rege.test(name)){
                  this.$toast("入住人姓名格式不正确,入住人姓名必须和身份证一致")
              }
             
          },
           checkInputPhone(){
              var u_phone=this.phone;
              var Regx= /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
              if(!Regx.test(u_phone)){
                  this.$toast("无效的手机号码!请重新输入");
              }
            },
               goPay(){
               var u=this.uname;
               var p=this.phone;
            // 如果应户名为空 提示用户
            if(u.trim()==""){
                this.$toast("入住人不能为空");
                return;
            }else if(p.trim()==""){
                this.$toast("入住人联系方式不能为空");
                 
            }else{
                this.$router.push({path:'/Orderpay',query:{lid:this.lid}})
            }
          },
        
            go(){
                this.$router.push('/Add');
            },
        
            //axios请求(这步很关键)
            init(){
              var url="house/select";
              this.axios.get(url,{
                params:{lid:this.lid}
              })
              .then(result=>{
                console.log(result.data);
                //填充标题
                this.houseType=result.data.leaseroom.title;
                this.price=result.data.leaseroom.price;
              })
            },
        },
        created(){
            this.lid=this.$route.query.lid;
            console.log(this.lid);
            this.init();
        }
}
</script>
<style scoped>
*{
    padding:0;
    margin:0;
}
button{
    background:0;
    border:0;
}
.mflex{
    display:flex;
    justify-content: space-between;
}
.mint-button--default{
    border:0;
    background-color: transparent;
    box-shadow: transparent;
    box-shadow: 0 0 1px #fff;
}
.mint-button::after{
    background-color:transparent;
}
.mint-button--default{
    color:#fff;
}
.mint-cell-wrapper{
    background:transparent;
    padding:0;
}
.mint-field-core{
    font-size:14px;
}
.mint-cell:last-child{
    background:transparent;
    border-bottom:1px solid #eee;
}
.mint-header{
      background-color: rgb(245, 156, 26);
      height:55px;
      font-size:16px;
  }
  .mint-button-text{
      color:#fff
  }

 
.order-box{
    padding:10px 3%;
    background-color:#f7f7f7;
    overflow: scroll;
}
.orderMessage{
    background-color:#fff;
    border-radius:10px;
    min-height:50px;
    padding:10px;
    line-height:30px;
    margin-bottom:10px;
}
.warning{
    color:#e4393c;
    font-size:13px;
}
.roomMount{   
    height:50px;
    line-height:50px;
    border-bottom:1px solid #eee;
}
.msg{
    padding-top:8px;
    width:75%;
}
.msg p{
    font-size:13px;
}
.roomPeople>P{
    line-height:86px;
    width:25%;
}
.roomPeople .icon-tanhao{
    font-size:13px;
    color:#bbb;
}
.contact{
    height:60px;
    line-height:60px;
}
.contact .mint-cell:last-child{
    border-bottom:0;
}
.icon-tianjiayonghu,.icon-tongxunlu{
    font-size:23px;
    color:#aaa;
   
}
.insurance{
    background-color: #fff;
    height: 70px;
    align-items: center;
    border-radius: 10px;
}
.insurance .mint-switch{
    top: 30%;
    right: 10%;
}
.invoice{
    background-color: #fff;
    margin-top: 10px;
    height: 40px;
    line-height: 2.5;
    border-radius: 10px;
}
.orderPact{
    background-color: #eee;
    margin-top: 10px;
    padding: 13px;
}
li{
    color:gray;
}
ul>li p{
    color:gray;
    font-size: 15px;
    padding: 7px;
}
.orderPay{
    display:flex;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    z-index: 999;
    background-color: #fff;
    width: 100%;
   line-height: 1.3;
   padding: 10px;

   

}
.submit{
    background-color: rgb(245, 156, 26);
    width: 160px;
    border-radius: 25px;
    margin-right: 23px;
    
}
.pay-container .mint-button{
    box-shadow: none;
}
</style>

