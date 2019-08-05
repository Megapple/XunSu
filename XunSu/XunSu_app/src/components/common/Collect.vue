<template>
  <div>
    <mt-header title="收藏" class="collect_header">
      <!-- <router-link to="" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link> -->
    </mt-header>
    <div v-if="login">
      <div class="collect" v-if="show">
        <img src="../../assets/img/shijiehenda.png" alt class="collect_img" />
        <a href="#" class="collect_a" @click="collect">您还没有收藏哦，快去添加你喜欢的民宿吧</a>
      </div>
      <div class="collect">
        <div class="content" v-for="(item,index) of list" :key="index">
          <h2 class="h2">{{item.ctitle}}</h2>
          <van-image
            width="13rem"
            height="8rem"
            fit="cover"
            :src="'http://127.0.0.1:3000'+item.cimg"
            class="img-style"
          />
          <van-icon name="like" class="delete" @click="coldelete(item.colid)"/>
          <div class="msg">
            <span>{{item.cbedroom}}间卧室</span>
            <span class="lef">可住{{item.ctenant}}人</span>
            <van-tag color="#f2826a">{{item.chtType}}</van-tag>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!login" class="login">
        <img src="../../assets/img/341315072.png" alt="" class="loginimg"> 
        <p>您还没登录，登录后再来收藏吧</p> 
        <mt-button @click="collect">登 录</mt-button>
    </div>
    <Tabbar :selected="selected"></Tabbar>
  </div>
</template>
<script>
import Tabbar from "../tabbar";
import { Dialog } from 'vant'
export default {
  components: {
    Tabbar,
    [Dialog.Component.name]: Dialog.Component
  },
  data() {
    return {
      show: "",
      login:"",
      list: [],
      selected: "collect"
    };
  },
  created: function() {
    if (sessionStorage.getItem("uid")) {
      //本地存储中是否有token(uid)数据
    this.login=true;
      var uid = sessionStorage.getItem("uid");
      var obj = { uid: uid };
      this.axios.get("collect/select", { params: obj }).then(result => {
        if (result.data.code == 200) {
          this.list = result.data.msg;
          this.show = false;
        } else {
          this.show = true;
        }
      });
    } else {
      //next可以传递一个路由对象作为参数 表示需要跳转到的页面
     this.login=false;
      // router.push('/login');
    }
  },
  methods: {
    collect() {
      this.$router.push("./login");
    },
    coldelete(colid){
      Dialog.confirm({
        title: '提示',
        message: '确定要取消收藏吗'
      }).then(() => {
        // on confirm
          var obj={lid:colid};
          this.axios.get("collect/delete", { params: obj }).then(result => {
            if (result.data.code == 200) {
              this.$toast("取消收藏",1000);
            } 
        });
        this.$router.push('/Collect2');
      }).catch(() => {
        // on cancel
      });
    }
  }
};
</script>

<style scoped>
.collect_header.mint-header {
  height: 55px;
  background-color: rgb(245, 156, 26);
  font-size: 17px;
}
.collect_img {
  width: 250px;
  height: 400px;
  margin-top: 50px;
  margin-bottom: 10px;
  margin-left: 60px;
  box-shadow: 0 0 15px #b8bbbf;
}
.collect_a {
  /* margin-left:180px; */
  display: block;
  color: #b8bbbf;
  text-align: center;
}
.collect {
  padding-top: 20px;
  /* width:90%;  */
  margin: auto;
  width:90%;
}
.content {
  background-color: #eee;
  text-align: center;
  /* padding:10px 10px 40px 10px; */
  position: relative;
  margin-bottom: 10px;
  height: 200px;
  border-radius:20px;
  font-size:14px;
}

.msg {
  position: absolute;
  right: 20px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding-top:20px;
  height:100px;
}
.van-image {
  border-radius: 10px;
  overflow: hidden;
  position: absolute;
  top: 50px;
  left: 20px;
}
.h2 {
  font-size: 18px;
  text-align: left;
  padding-left: 30px;
  padding-top: 10px;
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
.delete.van-icon{
  position: absolute;
  right:20px;
  top:20px;
  font-size:22px;
  color:rgb(255, 168, 53);
}
</style>
