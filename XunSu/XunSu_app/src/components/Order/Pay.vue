<template>
    
      <div class="pay-container">
        <mt-header title="订单支付">
            <router-link to="/Order" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
       
        <div class="orderMessage">
             <!-- 支付页面订单内容 -->
             <div class="houseMsg">
                 <p v-text="houseType"></p>
                 <p v-html="houseData"></p>
             </div>
        </div>
        <div class="orderMessage">
             <div class="roomMsg">
                  <p class="dec">仅剩一间,请尽快预定以免别人抢了去哦!!</p>
                  <div class="roomMount">
                      <p>房间数</p>
                      <div class="roomNum">
                        <mt-button>-</mt-button>
                        <span>1</span>
                        <mt-button>+</mt-button>
                      </div>
                  </div>
                  
                  <h3 class="pMsg">入住人信息:</h3>
                    <mt-field label="入住人姓名:" placeholder="请输入姓名" type="text" v-model="username"></mt-field>
                    <mt-field label="联系方式(+86):" placeholder="请输入手机号码" type="phone" v-model=phone></mt-field>
             </div>
        </div>
    </div>
    
</template>
<script>
export default {
    data() {
        return {
             houseType:"预定房型:修水大床房"   ,
             houseData:"入离日期:07-11-07-12 共1晚",
             username:"",
             phone:"",

        }
     
    }, 
      methods:{
            
        }
}
</script>
<style scope>
    .mint-header{
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
    margin-left: 25px;
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

</style>

