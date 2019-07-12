<template>
 <div>
    <h2>寻宿网注册</h2>
    <mt-field :state="phoneNumState" type="number" v-model="phoneNum" placeholder="请输入您的手机号"></mt-field>

    <mt-field :state="codeState" type="number" v-model="code"  placeholder="验证码">

    <span @click.stop = "sendCode">{{ codeStr }}</span>

    </mt-field>

    <mt-field :state="passwordState" type="password" v-model="password" placeholder="密码:不能少于6位"></mt-field>

    <div class="signinBtn" @click = "register">注&nbsp;&nbsp;册</div>
 </div>
</template>
<script>
 export default {
  data () {
    return {
      phoneNumState:"",
      codeState:""
    }
  },
  methods: {
    sendCode(){
     var url="login";
     var obj= {phoneNum:phone,password:upwd};
     axios.get(url,{params:obj})
      .then((res) => {
        console.log(res.data)
        // if (res.data.state == 0) {
        //   this.phoneNumState = 'warning'
        //   Toast('该手机号已经注册，请直接登录')
        // } else {
        //   this.admincode = res.data.code
        //   if (this.flag) {
        //   this.startTime(20)
        //   }
        // }
      })
      .catch((err) => {
      console.log(err)
      })
    }
  },
  watch:{
    phoneNum(newVal,oldVal){
      if(tools.isPoneAvailable(newVal)){
        this.phoneNumState='success';
      }else{
        this.passwordState='error';
      }
      if(newVue==""){
        this.passwordState="";
      }
    },
    code(newVal,oldVal){
      if(newVue.length==4 && newVal==this.admincode){
        this.codeState='success';
      }else{
        this.codeState='error';
      }
      if(newVue==""){
        this.codeState="";
      }
    }
  }
 }
</script>
<style scoped>
</style>