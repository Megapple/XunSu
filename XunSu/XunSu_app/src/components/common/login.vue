<template>
 <div>
     <mt-header title="寻宿网登陆">
      <router-link to="" slot="left">
        <mt-button icon="back"  @click.native="$router.back(-1)"></mt-button>
      </router-link>
    </mt-header>
    <div class="content">
    <h2 class="h2">寻宿网登陆</h2>
    <van-cell-group>
      <van-field
        label="用户名"
        left-icon="contact"
        v-model="phone"
        placeholder="请输入您的手机号"
      />
      <van-field
        label="密码"
        left-icon="closed-eye"
        v-model="upwd"
        type="password"
        placeholder="密码不能少于6位"
      />
    </van-cell-group>
    <!-- <mt-field label="手机号" type="phone" v-model="phone" placeholder="请输入您的手机号"></mt-field> -->
    <!-- <span @click.stop = "sendCode">{{ codeStr }}</span>-->
    

    <!-- <mt-field label="密 码" type="password" v-model="upwd" placeholder="密码不能少于6位"></mt-field> -->

    <mt-button @click = "login" size="large" class="rig">登&nbsp;&nbsp;陆</mt-button>
     <mt-button @click = "tosingin" class="singin">点我注册 &gt;</mt-button>
 </div>
 </div>
</template>
<script>
 export default {
  name:"login",
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
            sessionStorage.setItem("uid",result.data.msg[0].uid);
          var uid = sessionStorage.getItem("uid");
           this.$router.push("./home");
          }else{
             this.$messagebox("提示","手机号或密码有误");
           }
      }) 
    },
    tosingin(){
      this.$router.push('./signin');
    }
  },
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
  background-color:#ff9c1a;
  color:#fff;
}
.content{
  width:90%;
  margin:auto;
  text-align:center;
}
.van-cell-group{
  margin-top:60px;
}
.h2{
  margin-top:50px;
  color:#ff9c1a;
}
.singin{
  color:#ff9c1a;
  border-width:0;
  letter-spacing: 2px;
  margin-top:20px;
  margin-left:180px;
  font-size:14px;
  background-color:rgba(0,0,0,0);
}
</style>