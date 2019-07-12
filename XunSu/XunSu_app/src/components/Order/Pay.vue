<template>
    
      <div class="pay-container">
        <!-- 页面标题 -->
        <mt-header title="订单支付">
            <router-link to="/Order" slot="left">
                <mt-button class="iconfont icon-return">返回</mt-button>
            </router-link>
        </mt-header>
       
       <div class="order-box">
           <!-- 预定房型 -->
            <div class="orderMessage">
                <p>预定房型 &nbsp;<span>{{houseType}}</span></p>
                <p>入离日期 &nbsp;<span>{{houseData}}</span></p>
            </div>
            <!-- 入住信息 -->
            <div class="orderMessage">
                <!-- <div class="roomMsg">
                    <p class="dec iconfont icon-huo">仅剩一间,请尽快预定以免别人抢了去哦!!</p>
                    <div class="roomMount">
                        <p>房间数</p>
                        <div class="roomNum">
                            <mt-button>-</mt-button>
                            <span>1</span>
                            <mt-button>+</mt-button>
                        </div>
                    </div>
                    
                    <h3 class="pMsg">入住人信息:
                        <button class="iconfont icon-wenhao"></button>
                    </h3>
                        <mt-field label="入住人姓名:" placeholder="请输入姓名" type="text" v-model="username"></mt-field>
                        <mt-field label="联系方式(+86):" placeholder="请输入手机号码" type="phone" v-model=phone></mt-field>
                        <div class="idcard">                  
                            <span class="namecard">证件类型:</span>
                            <select class="cardType">
                                <option value ="volvo">证件类型</option>
                                <option value ="saab">身份证</option>
                                <option value="opel">护照</option>
                                <option value="audi">港澳通行证</option>
                            </select>
                        </div>
                        
                        
                        <mt-field label="证件号码" placeholder="请输入证件号码" v-model="card"></mt-field>
                </div> -->
                <p class="warning iconfont icon-huo">仅剩<span>1</span>间,请尽快预定以免被人抢订</p>
                <!-- 房间数 -->
                <div class="roomMount mflex">
                    <p>房间数</p>
                    <div class="roomButton">
                        <mt-button>-</mt-button>
                        <span>1</span>
                        <mt-button>+</mt-button>
                    </div>
                </div>
                <!-- 入住人 -->
                <div class="roomPeople mflex">
                    <p>入住人<i class="iconfont icon-tanhao"></i></p>
                    <div class="msg">
                        <p>客房1(需填一个人入住)</p>
                        <div class="mflex">
                            <mt-field placeholder="入住人姓名" type="text" v-model="uname"></mt-field>
                            <button class="iconfont icon-tianjiayonghu"></button>
                        </div>
                        
                    </div>
                </div>
                <!-- 联系电话 -->
                <div class="contact mflex">
                    <p>联系电话</p>
                    <p>+86</p>
                    <div class="mflex">
                        <mt-field  type="phone" v-model="phone"></mt-field>
                        <button class="iconfont icon-tongxunlu"></button>
                    </div>
                    
                </div>
            </div>
            <!-- 升级钻石会员 -->
            <div class="orderMessage">
                
            </div>
       </div>
       
    </div>
    
</template>
<script>
export default {
    data() {
        return {
             houseType:"修水大床房"   ,
             houseData:"07-11-07-12 共1晚",
             username:"",
             phone:"",
             card:""

        }
     
    }, 
      methods:{
            
        }
}
</script>
<style scope>
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
}
.mint-button::after{
    background-color:transparent;
}
.mint-button--default{
    color:#1DA261;
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
    /* .mint-header{
        height:50px;
    }
.mint-header-title {
    font-size:23px;
    color:bisque;
}
.orderMessage{
    
    border:1px solid #FEFEFE;
    border-radius: 25px;
    padding: 4px;
    background:#F7F7F7;
    width:96%;
    margin-left: 4px;
    margin-top: 10px;
}
.houseMsg{
    height: 15%;
    text-align: left;
}
.dec{
    text-align: left;
    font-size: 11px;
    color: red;
    margin-left: 10px;
}
.roomMount{
    display: flex;
    justify-content: space-between;
    border-bottom:solid #eeeeee;
    margin:10px;
}
.pMsg{
    text-align: left;
    margin: 5px;
}
.idcard{
    display: flex;
    justify-content: space-between;
}
.cardType{
    width:255px;
    height:35px;
    margin-top:8px;
}
.namecard{
    text-align: center;
    line-height: 50px;
} */
.order-box{
    padding:10px 3%;
    background-color:#f7f7f7;
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
</style>

