<template>
 <div>
    <!-- 顶部轮播 -->
 <mt-swipe :auto="2000">
  <mt-swipe-item v-for="(item,i) of items" :key="i">
    <a :href="item.href" rel="external nofollow">
       <img :src="require('../assets/img/1.jpg')" class="img"/>
    </a>
  </mt-swipe-item>
    <mt-swipe-item v-for="(item,i) of items" :key="i">
    <a :href="item.href" rel="external nofollow">
       <img :src="require('../assets/img/2.jpg')" class="img"/>
    </a>
  </mt-swipe-item>
 </mt-swipe>
 <!-- 搜索框 -->
 <div class="searchdiv clearfix">
    <input placeholder="搜索目的地/酒店" class="search"/>
    <img :src="require('../assets/img/glass.png')"  class="searchImg "/>
    <span>|</span>
    <div class="location">
      <a href="#">
        <img :src="require('../assets/img/option.png')"  class="locationImg"/>
        <span class="locationtxt">搜附近</span>
      </a>
    </div>
 </div>
 <div class="index clearfix">
    <div class="city">
        <mt-button size="small" v-for="(item,i) of lists" :key="i" @click="setActive" :data-idx="i">{{item}}
        </mt-button>
    </div>
    <div>
    <mt-tab-container v-model="active">
        <mt-tab-container-item id="tab1">
            <container :img_dali1="require('../assets/img/dlgc.jpg')" 
            :img_dali2="require('../assets/img/dlyc.jpg')" 
            :img_dali3="require('../assets/img/dljz.jpg')"
            :img_dali4="require('../assets/img/dljr.jpg')" ></container>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab2">
            <container2 :img_hz1="require('../assets/img/hzbj.jpg')" 
            :img_hz2="require('../assets/img/hzmj.jpg')"
            :img_hz3="require('../assets/img/hzys.jpg')"
            :img_hz4="require('../assets/img/hzxh.jpg')"></container2>
        </mt-tab-container-item>        
        <mt-tab-container-item id="tab3">
            <container3 :img_cd1="require('../assets/img/cdqs2.jpg')" 
            :img_cd2="require('../assets/img/cdsx1.jpg')"
            :img_cd3="require('../assets/img/cdsx2.jpg')"
            :img_cd4="require('../assets/img/cdcz.jpg')"></container3>
        </mt-tab-container-item>        
        <mt-tab-container-item id="tab4">
            <container4 :img_gl1="require('../assets/img/yszj.jpg')" 
            :img_gl2="require('../assets/img/ysgs.jpg')"
            :img_gl3="require('../assets/img/yswb.jpg')"
            :img_gl4="require('../assets/img/ysxs.jpg')"></container4>
        </mt-tab-container-item>
    </mt-tab-container>
    </div>
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ullam optio tenetur labore ex enim dolorem ea blanditiis veniam ipsam. Ipsa maiores voluptates dolorum cumque iusto accusantium magni officiis eaque.
    Debitis pariatur explicabo odit obcaecati architecto alias nisi commodi laudantium molestiae ex eos suscipit quod, adipisci iure, delectus natus dicta rerum illum modi ullam iste autem dignissimos! Architecto, cum voluptatum?
    Quam ipsum reiciendis libero laboriosam aliquam facilis tempora qui ratione maxime voluptates natus laborum quaerat molestiae distinctio dolorem dolore commodi magnam blanditiis laudantium alias, consequuntur veritatis. Placeat molestiae voluptatum ea.
    Iusto temporibus ipsa cupiditate laudantium laboriosam natus hic, aperiam quo. Eum totam deserunt fuga veritatis, asperiores sapiente, ab dicta optio nemo ipsum mollitia veniam voluptas delectus, ipsa perferendis voluptatem nihil.
    Ullam maiores obcaecati explicabo velit officia beatae! Fuga ipsa cum consequuntur cupiditate nam, sit eaque nostrum distinctio dolorem quibusdam sequi magni? Vero sed, mollitia maiores fuga maxime suscipit ratione quibusdam!
    Consectetur quia quam reprehenderit officia explicabo fugit ipsam quas ipsum doloremque! Magni distinctio dolorem officiis est similique, saepe eveniet deserunt perspiciatis. Laborum porro debitis reprehenderit suscipit iusto libero veniam quae?
    Distinctio error enim porro cupiditate esse expedita doloremque similique itaque modi voluptas. Quos cupiditate distinctio sequi sunt consectetur hic saepe veniam nostrum maxime minima officiis, eveniet accusamus, facilis aliquam delectus!
    Cumque, labore. Maiores nobis molestiae iusto, quasi unde distinctio? Sint, aliquid. Delectus, aliquam molestias expedita voluptatem dignissimos quasi modi libero sit, cum corporis unde repellat, omnis facere exercitationem accusamus eius.
    Quis, fugiat laudantium aut neque beatae doloremque eos, repudiandae similique iusto est, tempore aliquam labore aliquid libero? Aliquid quasi eveniet sunt natus, commodi laudantium facilis a et, explicabo vero nihil!
    Eum qui totam voluptas eveniet. Impedit magni cumque a quia veritatis nemo dolorum, dolor numquam nostrum ipsam rerum. Labore magni magnam eligendi, voluptates iste cumque minus necessitatibus incidunt soluta aut.
    </div>
  </div>
 <!--底部导航栏-->
 <mt-tabbar v-model="selected" fixed>
     <mt-tab-item id="hotel">
        <img src="../assets/img/hotel.png" alt="">
        <span>酒店</span>
     </mt-tab-item>
     <mt-tab-item id="trip">
        <img src="../assets/img/trip1.png" alt="">
         旅途
     </mt-tab-item>
     <mt-tab-item id="order">
        <img src="../assets/img/order1.png" alt="">
         订单
     </mt-tab-item>
     <mt-tab-item id="me">
        <img src="../assets/img/me1.png" alt="">
         会员
     </mt-tab-item>
 </mt-tabbar>
</div>
</template>
<script>
// 导入城市子组件
import Container from "./common/Container.vue"
import Container2 from "./common/Container2.vue"
import Container3 from "./common/Container3.vue"
import Container4 from "./common/Container4.vue"
export default {
   components: {
       "container":Container,
       "container2":Container2,
       "container3":Container3,
       "container4":Container4,
   },
   data(){
       return{
           lists:["大理","杭州","成都","桂林"],
           active:"tab1",
           selected:"hotel",
           items: [
            {title: '你的名字',
            href: 'http://google.com',   
            url: 'http://127.0.0.1:3000/img/'
            }, 
            {title: '我的名字',
            href: 'http://baidu.com',   
            url: 'http://127.0.0.1:3000/img/'
            }],

       }
   },
   methods:{
        setActive(e){
            var idx=parseInt(e.target.dataset.idx);
            console.log(idx,typeof idx)
            this.active="tab"+(idx+1)
        }
   }
 }
</script>
<style>
*{margin:0;padding:0px;}
body{
    background-color:#f5f5f56e;
}
/* 轮播 */
 .mint-swipe { height: 218px;}
 .img {width: 100%;}
 /* 轮播下标 */
.mint-swipe-indicator{margin:23px 3px ;}
.mint-swipe-indicator.is-active{background:rgb(255, 145, 0);opacity:0.6;}
/* 搜索框 */
.searchdiv{
    width:85%;   
    height:40px;
    display:flex;
    justify-content:space-around;
    background-color:rgba(255, 255, 255);
    border-radius: 50%;
    box-shadow: 0 0 30px #b8bbbf;
    margin:-20px 29px;
    position:relative;
    z-index:10;
}
.clearfix::after{
    content:"";
    display: block;
    clear:both;
}
.search{
    width:100%;
    height:40px;
    border:0;
    padding:0 30px;
    border-radius: 30px;
    color:#ccc;
}
.searchImg{
    width:20px;height:20px;
    position:absolute;
    top:12px; left:10px;
    }
.searchdiv>span{
    position: absolute;
    top:13px;right:95px;
    color:#ccc;
}
.location{display: flex;}
.locationImg{
    width:25px;height:25px;
    position: absolute;
    top:10px;right:65px;
    }
.locationtxt{
    font-size:14px;color:#ccc;
    position: absolute;
    top:12px;right:20px;
}
/* 城市 */ 
.index{
    margin-top:40px;
}
.mint-button--small{
    height:22px;
    margin:0 15px;
    padding:0 15px;
    font-size:12px;
}
.mint-button{
    border-radius: 9px;
}

</style>