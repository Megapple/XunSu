<template>
    <div class="order-container">
        <mt-header title="订单">
            <!-- <router-link to="/" slot="left">
                <mt-button icon="back" >返回</mt-button>
            </router-link>
                <mt-button icon="more" slot="right"></mt-button> -->
        </mt-header>
        <div v-if="login">
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
        <div v-if="!login" class="login">
            <img src="../../assets/img/341315072.png" alt="" class="loginimg"> 
            <p>登录后才能查看订单</p> 
            <mt-button @click="gologin">登 录</mt-button>
        </div>
    <Tabbar :selected="selected"></Tabbar>
    
    </div>
</template>
<script>
import Tabbar from "../tabbar";
export default {
    components:{
        Tabbar
    },
    data(){
        return{
            lid:0,
            title:"",
            login:"",
            bed:"",
            price:"",
            selected:"order"
        }//return 结束
    },//data 结束
    methods:{
            backIndex(){
                this.MessageBox.confirm("取消预定","客观您不再想想吗");
            },
           go() {
               this.$router.push('/Home');

           },
           gologin(){
               this.$router.push('/login');
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
         console.log(124234234)
        console.log(sessionStorage.getItem("uid"))
        if (sessionStorage.getItem("uid")) {
        //本地存储中是否有token(uid)数据
        this.login=true;
        // var uid = sessionStorage.getItem("uid");
        // var obj = { uid: uid };
        // this.axios.get("collect/select", { params: obj }).then(result => {
        //     if (result.data.code == 200) {
        //     this.list = result.data.msg;
        //     this.show = false;
        //     } else {
        //     this.show = true;
        //     }
        console.log(1)
        // });
        } else {
        //next可以传递一个路由对象作为参数 表示需要跳转到的页面
        this.login=false;
        // router.push('/login');
        console.log(2)
        }
            // this.lid=this.$route.query.lid;
            // console.log(this.lid);
            // this.init();
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
.login{
    text-align:center;
    margin-top:50px;
    color:rgb(148, 148, 148);
    letter-spacing: 1px;
}
.loginimg{
    width:100%;
}
.login .mint-button{
    background-color:rgb(245, 156, 26);
    color:#fff;
    padding:0px 50px;
    border-radius:10px;
}
</style>


