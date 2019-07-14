<template>
    <div class="order-container">
        <mt-header title="订单">
            <router-link to="Detail" slot="left">
                <mt-button icon="back" >返回</mt-button>
            </router-link>
                <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <div class="order1">
            <img src="../../assets/Orderimage/order_background_image.jpg" alt="">
            <h4 style="color:gray">您还没有订单哦!!</h4>
            <mt-button size="large" @click="go">客官这边请</mt-button>
        </div>
    
    </div>
</template>
<script>
export default {
    data(){
        return{

        }//return 结束
    },//data 结束
    methods:{
            backIndex(){
                this.MessageBox.confirm("取消预定","客观您不再想想吗");
            },
           go() {
               this.$router.push('/');

           }
        }

    
}
</script>
<style scrop>

.mint-header{
    height: 55px;
    width: 100%;
    padding: 12px;

    background-color:rgb(245, 156, 26);
}
.mint-header-title{
    font-size:20px;
    color:black;
}
.order1{
    margin-top:75px;
     text-align: center;
}
.mint-button--large{
    background-color:rgb(245, 156, 26);
    color:bisque;
    
}
.mint-button--large {
    display: block;
    width: 83%;
    margin-left: 26px;
}
</style>


