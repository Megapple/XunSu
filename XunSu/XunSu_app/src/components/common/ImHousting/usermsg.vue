<template>
  <div class="body">
    <mt-header title="完善真实身份">
      <router-link to="/housting" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
       <mt-button slot="right"  class="myButton" @click = "affirmMsg">确定</mt-button>
    </mt-header>
     <mt-field label="身份证号" type="text" v-model="ID_number" placeholder="请输入您的身份证号"></mt-field>
    <mt-field label="真实姓名" type="text" v-model="user_name" placeholder="请输入您的姓名"></mt-field> 
    
    
  </div>
</template>
<script>
export default {
  data(){
    return {
      ID_number:"",
      user_name:""
    } 
  },
  methods:{
    affirmMsg:function(){
      var ID_number=this.ID_number;
      var user_name=this.user_name;
      if (ID_number.length != 15 && ID_number.length != 18){
        this.$toast("请输入正确的身份证号码",1000);
        return;
      }
      else if (ID_number.length == 15 && !(/^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$/.test(ID_number))) {
        this.$toast("请输入正确的身份证号码",1000);
        return;
       }
      else if (ID_number.length == 18 && !(/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(ID_number))) {
        this.$toast("请输入正确的身份证号码",1000);
        return ;
       }else if(!(/^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/.test(user_name))){
        this.$toast("请输入正确的姓名",1000);
        return ;
       }else{
         var uid = sessionStorage.getItem("uid");
         var obj={uid:uid,ID_number:ID_number,user_name:user_name};
          this.axios.get("user/update",{params:obj}).then(result=>{
          if(result.data.code==200){  
            console.log(result);
           this.$router.push("./housting");
          }else{
             this.$messagebox("提示","身份证号或姓名有误");
           }
      }) 
       }
    }
  }
}
</script>
<style scoped>
.mint-header{
   background-color:#fafafa;
   color:#000;
   letter-spacing:1px;
   box-shadow:0px 0.5px 1px #b2b2b2;
   font-weight:900;
   height:40px;
 }
 .mint-button.myButton{
   background-color:#ff9c1a;
   padding:0 15px;
   border-radius:20px;
   height:28px;
   color:#fff;
 }
</style>