<template>
    <div class="order-container">
        <mt-header title="订单">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
                <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <div class="order1">
            <img src="../../assets/Orderimage/order_background_image.jpg" alt="">
            <h4 style="color:gray">您还没有订单哦!!</h4>
            <mt-button size="large">客官这边请</mt-button>
        </div>
    
    </div>
</template>
<script>
export default {
    data(){
        return{

        }//return 结束
    }//data 结束
}
</script>
<style scrop>
    .order-container{
  

}
.mint-header{
    height: 55px;
    width: 374px;
    padding: 12px;
    margin-left: -7px;
    margin-top: -7px;
    background-color:#3BD86C;
}
.mint-header-title{
    font-size:20px;
    color:black;
}
.order1{
    margin-top:75px;
     
}
.mint-button--large{
    background-color:#3BD86C;
    color:bisque;
    margin-top: 50px;
}
    
</style>


