<template>
    <div class="orderPay">
        <!-- 页面标题 -->
        <div class="header">
        <mt-header title="订单支付">
            <router-link to="/Pay" slot="left">
                <mt-button class="iconfont icon-return">返回</mt-button>
            </router-link>
        </mt-header>
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
<style scoped>
    .mint-header{
      background-color: #FDC822;
      height:55px;
      font-size:16px;
  }
</style>


