<template>
<div>
     <mt-header title="收藏" class="collect_header">
           <router-link to="/Detail" slot="left">      
              <mt-button icon="back"></mt-button>
           </router-link>
       </mt-header>   
   <div class="collect" v-if="show">
       <img src="../../assets/img/shijiehenda.png" alt="" class="collect_img">
       <a href="#" class="collect_a" @click="collect">您还没有收藏哦，快去添加你喜欢的民宿吧</a>
   </div>
   <div class="collect">
       <div class="content" v-for="(item,index) of list" :key="index">
           <h2 class="h2">{{item.ctitle}}</h2>
           <van-image
            width="13rem"
            height="8rem"
            fit="cover"
            :src="'http://127.0.0.1:3000/'+item.cimg"
            class="img-style"/>
            <div class="msg">
                <span>{{item.cbedroom}}间卧室</span>
                <span class="lef">可住{{item.ctenant}}人</span>
                <span class="rig">{{item.chtType}}</span>
            </div>
       </div>
   </div>
</div>
</template>
<script>
export default {
   data(){
       return{
           show:"",
           list:[]
       }
   },
   created:function(){
       var uid=sessionStorage.getItem("uid");
       var obj={uid:uid};
       this.axios.get("collect/select", { params: obj }).then(result => {
            if (result.data.code == 200) {
                this.$toast("找到了",1000);
                console.log(result.data)
                this.list=result.data.msg;
                this.show=false;
            }else{
                console.log(333)
                this.show=true;
            } 
         });
   },
   methods:{
       collect(){
           this.$router.push("./login")
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
    /* margin-left:180px; */
    display: block;
    color:#b8bbbf;
    text-align:center;
    }
.collect{
    padding-top:20px;
     /* width:90%;  */
     margin:auto;
}
.content{
    background-color:#eee;
    text-align:center;
    /* padding:10px 10px 40px 10px; */
    position:relative;
    margin-bottom:10px;
    height:200px;
}
.rig{
/* right:20px; */
border-radius:10px;
border:1px solid rgb(253, 131, 131);
padding:1px 10px;
color:rgb(255, 131, 131);
}
.lef{
    /* position:absolute;
    top:50px;
    right:10px; */
}
.msg{
    position:absolute;
    right:20px;
    display:flex;
    justify-content: space-around;
    flex-direction:column;
    height:130px;
}
.van-image{
    border-radius:10px;
    overflow: hidden;
    position: absolute;
    top:50px;
    left:20px;
}
.h2{
    font-size:18px;
    text-align: left;
    padding-left:30px;
    padding-top:10px;
}
</style>
