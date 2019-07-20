<template>
 <div>
  <mt-header title="寻宿网注册">
      <router-link to="/Home" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <h2>寻宿网注册</h2>
    <mt-field :state="phoneNumState" label="手机号" type="phone" v-model="phoneNum" placeholder="请输入您的手机号" class="mtInput"></mt-field>

    <mt-field label="验证码" type="captcha" v-model="captcha"  placeholder="输入验证码">
    

    <!-- <span @click.stop = "sendCode">{{ codeStr }}</span>-->
    <mt-button class="rgin" size="small" @click.stop = "sendCode">{{codemsg}}</mt-button>
    </mt-field>
    

    <mt-field label="密 码" type="password" v-model="password" placeholder="密码不能少于6位"></mt-field>

    <mt-button @click = "register" size="large" class="rig">注&nbsp;&nbsp;册</mt-button>
    <router-link  :to="{path:'/login'}" >跳转登陆界面</router-link>
 </div>
</template>
<script>
 export default {
  data () {
    return {
      phoneNumState:"",
      codeState:"",
      phoneNum:"",
      captcha:"",
      password:"",
      codemsg:"发送验证码"
    }
  },
  methods: {
    verify(){
      
    },
    sendCode(){
      var phone=this.phoneNum;
      var reg=/^1[3456789]\d{9}$/i;
      if(phone.length==0){
        this.$toast("请输入手机号",1000);
        return;
      }else if(!reg.test(phone)){
        this.$toast("手机格式不正确",1000);
        return;
      }
      var url="user/signinSelect";
      var obj= {phone:phone};
      this.axios.get(url,{params:obj})
        .then((result) => { 
          if (result.data.code == 0) {
            this.$toast('该手机号已经注册，请直接登录',1000);
            return;
          } else {
            this.codemsg="发送成功，请等待..";
            console.log(result.data);
            // this.admincode = res.data.code
            // if (this.flag) {
            // this.startTime(20)
          }
        })
      .catch((err) => {
      console.log(err)
      })
    },
    register(){
      var phone=this.phoneNum;
      var password=this.password;
      var captcha=this.captcha;
      var reg=/^1[3456789]\d{9}$/i;
      var pass=/^[a-zA-Z0-9_]{6,18}$/i;
      if(phone.length==0){
        this.$toast("请输入手机号",1000);
        return;
      }else if(password.length==0){
        this.$toast("请输入密码",1000);
        return;
      }else if(captcha.length==0){
        this.$toast("请输入验证码",1000);
        return;
      }else if(!reg.test(phone)){
        this.$toast("手机格式不正确",1000);
        return;
      }else if(!pass.test(password)){
        this.$toast("密码格式不正确",1000);
        return;
      }
      var url="user/signin";
      var obj= {phone:phone,upwd:password};
      this.axios.get(url,{params:obj})
        .then((result) => { 
          if (result.data.code == 0) {
            this.$toast('该手机号已经注册，请直接登录',1000);
            return;
          } else {
            console.log(result.data)
            this.$router.push('./me')
            return;
            // this.admincode = res.data.code
            // if (this.flag) {
            // this.startTime(20)
          }
        })
      .catch((err) => {
      console.log(err)
      })
    }
  }
  // watch:{
  //   phoneNum(newVal,oldVal){
  //     if(tools.isPoneAvailable(newVal)){
  //       this.phoneNumState='success';
  //     }else{
  //       this.passwordState='error';
  //     }
  //     if(newVue==""){
  //       this.passwordState="";
  //     }
  //   },
  //   code(newVal,oldVal){
  //     if(newVue.length==4 && newVal==this.admincode){
  //       this.codeState='success';
  //     }else{
  //       this.codeState='error';
  //     }
  //     if(newVue==""){
  //       this.codeState="";
  //     }
  //   }
  // }
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