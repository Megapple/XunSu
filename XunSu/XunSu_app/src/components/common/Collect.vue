<template>
<div>
   <div class="collect">
       <mt-header title="收藏" class="collect_header">
           <router-link to="/Detail" slot="left">      
              <mt-button icon="back"></mt-button>
           </router-link>
       </mt-header>   
       <img src="../../assets/img/shijiehenda.png" alt="" class="collect_img">
       <a href="#" class="collect_a" @click="collect">快去添加你喜欢的民宿吧</a>
   </div>
</div>
</template>
<script>
export default {
   data(){
       return{
       }
   },
   methods:{
       collect(){
           this.$router.push("./Detail")
       }
   }
   
}
</script>

<style scoped>
.collect_header.mint-header{
    height:55px;
    background-color:rgb(245, 156, 26);
    font-size:17px;
}
.collect_img{
    width:250px; 
    height:400px;
    margin-top:50px;
    margin-bottom:10px;
    margin-left:60px;
    box-shadow: 0 0 15px #b8bbbf;
} 
.collect_a{
    margin-left:180px;color:#b8bbbf;
    }
</style>
