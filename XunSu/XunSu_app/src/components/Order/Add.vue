<template>
    <div class="addMsg">
        <div class="headers">
            <mt-header title="添加常用入住人">
                <router-link to="Pay" slot="left">
                    <mt-button icon="back">返回</mt-button>
                </router-link>
                    <mt-button  slot="right" @click="addData">保存</mt-button>
            </mt-header>
        </div>
        <!--输入信息并保存 -->
        <div class="dataMsg">
           <mt-field style="border-bottom:1px solid #eeeeee" label="入住人姓名:" placeholder="请输入入住人姓名" type="text" v-model="username"></mt-field>
           <mt-field style="border-bottom:1px solid #eeeeee" label="手机号+86:" placeholder="请输入手机号码" type="tel" v-model="phone"></mt-field>
            <div class="cardType">
                <div style="border-bottom: 1px solid #eee;line-height:3;">                  
                    <span class="nameCard">证件类型:</span>
                        <select class="cardType">
                            <option class="cad" value ="volvo">证件类型</option>
                            <option class="cad" value ="saab">身份证</option>
                            <option class="cad" value="opel">护照</option>
                            <option class="cad" value="audi">港澳通行证</option>
                        </select>
                </div>
                <mt-field style="border-bottom:1px solid #eeeeee;width:100%;" label="证件号码:" placeholder="请输入证件号码" type="text" v-model="idCard"></mt-field>

            </div>
           
        </div>
        <!-- 提示信息 -->
        <div class="warning">
            <div>
                <img src="../../assets/Orderimage/san.png" alt="">
            </div>
            <div class="warMsg">
                <h3 style="color:black">信息真实完整,免费获得住宿意外险!</h3>
                <p style="font-size:15px;color:gray;    ">迅速住宿意外险,最高可理赔20万.</p>

            </div>
           
        </div>
        <div class="warnMsg">
                <p>根据公安酒店管理条例,入住经营性质的酒店/名宿,需要提供入住人的身份证明信息.</p>
                <p>入住人身份信息只用于身份核实和理赔相关事务,迅速民宿会为您严格保密.</p>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            username:"",
            phone:"",
            idCard:""

        }//return 结束
    },//data结束
    methods:{
        addData(){
            console.log(11);
        }
    }
}
</script>
<style scoped>

    .mint-cell-wrapper{
         background-color:transparent;
         
    }
   .dataMsg {
       margin:15px;
   }
   .nameCard{
       font-size:16px;
       margin:10px;
   }

   .cardType{
        
        height: 35px;
        border: 0;
        font-size: 16px;
       
        line-height: 1;
   }
   .warning{
       margin: 10px;
        display:flex;
        justify-content: space-evenly;
        background-color: #eeeeee;
        margin-top:94px;
        border-radius: 10px;
        line-height: 1;
   }
    .warning img{
        width:50px;
       margin-top:22px;
         }
  .warMsg{
      font-size: 13px;
      color:gray;
      margin:16px;
      line-height: 1;
  }
  .warnMsg{
      margin:22px;
      color:gray;
      font-size:15px;
  }

  /* header style */
  .mint-header{
      background-color: #FDC822;
      height:55px;
      font-size:16px;
  }
</style>

