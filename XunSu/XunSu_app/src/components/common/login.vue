<template>
 <div>
     <mt-header title="寻宿网登陆">
      <router-link to="/housting" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div>
    <h2>寻宿网登陆</h2>
    <mt-field label="手机号" type="phone" v-model="phone" placeholder="请输入您的手机号"></mt-field>
    <!-- <span @click.stop = "sendCode">{{ codeStr }}</span>-->
    

    <mt-field label="密 码" type="password" v-model="upwd" placeholder="密码不能少于6位"></mt-field>

    <mt-button @click = "login" size="large" class="rig">登&nbsp;&nbsp;陆</mt-button>
    <router-link  :to="{path:'/signin'}" >未注册的手机号点此注册</router-link>
 </div>
 </div>
</template>
<script>
 export default {
  data () {
    return {
      phone:"",
      upwd:""
    }
  },
  methods:{
     login(){
        var phone=this.phone;
        var upwd=this.upwd;
      var reg=/^[a-z0-9_]{3,12}$/i; 
      if(!reg.test(phone)){
        this.$toast("手机号格式不正确",1000);
        return;
      }
      if(!reg.test(upwd)){
        this.$toast("密码格式不正确",1000);
        return;
      }
      var url="user/login";
      var obj= {phone:phone,upwd:upwd};
      this.axios.get(url,{params:obj}).then(result=>{
          if(result.data.code>0){  
            console.log(result);
            sessionStorage.setItem("uid",result.data.msg[0].uid);
            var uid = sessionStorage.getItem("uid");
            console.log(uid);
           this.$router.push("./housting");
          }else{
             this.$messagebox("提示","手机号或密码有误");
           }
      }) 
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
.rig{
  width:300px;
  margin:auto;
  margin-top:50px;
}
</style>