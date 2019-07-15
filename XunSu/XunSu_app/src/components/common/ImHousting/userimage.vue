<template>
  <div class="body">
    <mt-header title="上传图片">
      <router-link to="/housting" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <input type="file" accept="image/*;capture=camera" value="调用相机">调用相机</input>   <!--调用相机 -->
    <input type="file" accept="image/*" multiple>   <!--调用相册-->
    <mt-button type="primary">选择要上传的图片</mt-button>
    
    
  </div>
</template>
<script>
export default {
  data(){
    return {
      
    } 
  },
  methods:{
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
</style>