<template>
   <div class="collect">
       <mt-header title="收藏">
           <router-link to="/Home" slot="left">      
              <mt-button icon="back"></mt-button>
           </router-link>
       </mt-header>   
       <img src="../../assets/img/shijiehenda.png" alt="" class="collect_img">
       <a href="#" class="collect_a">快去添加你喜欢的民宿吧</a>
   </div>
</template>
<script>
export default {
   data(){
       return{}
   }
}
</script>

<style scoped>
.collect_img{
    width:250px; 
    height:400px;
    margin-top:50px;
    margin-bottom:10px;
    margin-left:60px;
    box-shadow: 0 0 10px #b8bbbf;
} 
.collect_a{
    margin-left:180px;color:#ccc;
    }
</style>
