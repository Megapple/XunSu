<template>
   
       <div class="contacts_Msg">
        <!-- 页面标题 -->
        <mt-header title="常用入住人信息" fixed>
            <router-link to="/Order" slot="left">
                <mt-button class="iconfont icon-return">返回</mt-button>
            </router-link>
        </mt-header>
        <div style="margin-top:68px"></div>
        <div class="msg">
            <div>
                <p>1</p>
            </div>
            <div>
                <p>姓名:
                    <span>张三</span>
                </p>
                <p>联系方式:
                    <span>15829905864</span>
                    </p>
                <p>证件号码:
                    <span>6132265153145312315</span>
                </p>
            </div>
            <div>
                <mt-button>删除</mt-button><br>
                


            </div>


        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
}
</script>
<style scoped>
.contacts_Msg{
   
    width: 100%;
}
.mint-header{
      background-color: rgb(245, 156, 26);
      height:55px;
      font-size:16px;
      
  }
  .mint-button-text{
      color:#fff
  }
  .msg{
      background: #f7f7f7;
      display: flex;
      justify-content:space-around;
      border:1px solid #eee;
      margin:10px;
      border-radius: 10px;
      align-items: center;
  }
</style>
