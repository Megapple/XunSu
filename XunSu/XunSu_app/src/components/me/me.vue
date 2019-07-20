<template>
  <div>
    <div class="myheader">
        <h2>我的界面</h2>
    </div>

    <mt-button @click="imhouster"  size="large" class="imhouster">我是房东</mt-button>  
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
    imhouster(){
      this.$router.push("./housting");
    }
  }
}
</script>
<style scoped>
.imhouster{
  position:absolute;
  bottom:0;
  left:0;
}
</style>
