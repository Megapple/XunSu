<template>
    <div class="order-container">
        <mt-header title="订单">
            <router-link to="/" slot="left">
                <mt-button icon="back" >返回</mt-button>
            </router-link>
                <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <div class="order-box">
            <div class="order-detail" v-if="lid">
                <div class="title">
                    <p>酒店住宿</p>
                    <p>已完成</p>
                </div>
                <div class="content">
                    <p v-text="title">酒店名称:希尔顿酒店</p>
                    <p v-text="bed">预定房型:大床房 共1间</p>
                    <p>入离日期:07.14至07.15 共1晚</p>
                </div>
                <div class="foot">
                    <p>支付金额</p>
                    <p v-text="price"></p>
                </div>
                <p style="text-align:right;">
                    <mt-button @click="againReserve" type="primary">再次预定</mt-button>
                </p>
            </div>
            <div class="order1" v-else>
                <img src="../../assets/Orderimage/order_background_image.jpg" alt="">
                <h4 style="color:gray">您还没有订单哦!!</h4>
                <mt-button size="large" @click="go">客官这边请</mt-button>
            </div>
        </div>
        
    
    </div>
</template>
<script>
export default {
    data(){
        return{
            lid:0,
            title:"",
            bed:"",
            price:""
        }//return 结束
    },//data 结束
    methods:{
            backIndex(){
                this.MessageBox.confirm("取消预定","客观您不再想想吗");
            },
           go() {
               this.$router.push('/Home');

           },
           againReserve(){
               this.$router.push('/Orderdetail');
           },
            init(){
              var url="house/select";
              this.axios.get(url,{
                params:{lid:this.lid}
              })
              .then(result=>{
                console.log(result.data);
                //填充标题
                this.title=result.data.leaseroom.title;
                this.price="¥"+result.data.leaseroom.price;
                this.bed=result.data.leaseroom.bedSize;
              })
            },         
        },
    created(){
            this.lid=this.$route.query.lid;
            console.log(this.lid);
            this.init();
        }

    
}
</script>
<style scoped>

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
.order-detail{
    padding:10px 3%;
    margin:15px 3%;
    background-color:#eee;
    border-radius:5px;
    color:#000;
}
.order-detail .title,.order-detail .foot{
    display: flex;
    justify-content: space-between;
}
.order-detail .content{
    line-height:32px;
}
.order-box p{
    margin:0;
    padding:0;
    line-height: 2;
    
}
.mint-button--primary {
    color: #fff;
    background-color: rgb(245, 156, 26);
    height: 32px;
    width: 202px;
}
</style>


