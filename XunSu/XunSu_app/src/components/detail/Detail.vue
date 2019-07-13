<template>
  <div id="container" style="background-color:tomato">
    <!-- mintui Header栏start -->
    <mt-header id="header" class="opa-light" fixed>
      <router-link to="/" slot="left">
        <mt-button class="iconfont icon-fanhuijiantou"></mt-button>
      </router-link>
      <!-- text-hidden:属性默认文本隐藏 cool:属性控制显示/隐藏 -->
      <mt-button class="iconfont text-hidden cool" slot="left" @click="house">房型</mt-button>
      <mt-button class="iconfont text-hidden cool" slot="left" @click="com">评论</mt-button>
      <mt-button class="iconfont text-hidden cool" slot="left" @click="fac">设施</mt-button>
      <mt-button class="iconfont icon-xihuan" slot="right"></mt-button>
      <mt-button class="iconfont icon-fenxiang" slot="right"></mt-button>
      <mt-button class="iconfont icon-gengduo" slot="right"></mt-button>
    </mt-header>
    <!-- mintui Header栏end -->
    <!-- mintui 轮播图start -->
    <mt-swipe :show-indicators="false">
      <mt-swipe-item><img src="../../assets/img/1.jpg"></mt-swipe-item>
      <mt-swipe-item><img src="../../assets/img/2.jpg"></mt-swipe-item>
      <mt-swipe-item><img src="../../assets/img/3.jpg"></mt-swipe-item>
    </mt-swipe>
    <!-- mintui 轮播图end -->
    <!-- 轮播图小图标 start-->
    <span id="carImg" class="iconfont icon-iconset0149" v-text="carImg">&nbsp;</span>
    <!-- 轮播图小图标 end -->
    <!-- 详情页主界面 start -->
    <div id="main">
      <!-- 评论标签 start -->
      <div id="viewCom" @click="viewCom()">
        <span id="vc1" v-text="grade"></span>
        <hr>
        <span id="vc2" v-text="gradeText"></span>  
      </div>
      <!-- 评论标签 end -->
      <!-- 标题及标签 start -->
      <div id="f1">
        <span id="title" v-text="title"></span>
        <br>
        <span id="tag" v-for="(tag,i) of tags" v-text="tag" :key=i></span>
      </div>
      <!-- 标题及标签 end -->
      <!-- 地图模块 start -->
      <div id="map" @click="mapModel()">
        <div id="mapText">
          <span v-for="(text,i) of mapTexts" v-text="text" :key=i></span>
        </div>
        <div id="mapIcon" class="iconfont icon-map"></div>
      </div>
      <!-- 地图模块 end -->
      <!-- VIP礼遇 start -->
      <div id="vip">
        <div class="iconfont icon-huiyuan-"></div>
        <div>
          <span v-text="goldVip"></span>
          <br>
          <span v-for="(gvr,i) of goldVipRight" v-text="gvr" :key=i @click="vipPage()"></span>
        </div>
      </div>
      <!-- VIP礼遇 end -->
      <!-- 日历 start -->
      <div id="date" @click="openPicker">
        <mt-datetime-picker
          v-model="pickerVisible"
          type="date"
          ref="picker"
          year-format="{value} 年"
          month-format="{value} 月"
          date-format="{value} 日">
        </mt-datetime-picker>
      </div>
      <!-- 日历 end -->
      <div id="house">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum tenetur officia voluptatibus  praesentium consequatur ab vel temporibus aut quae dicta, cupiditate vero nihil eligendi iure,   possimus cumque saepe quasi? Praesentium maxime eius dolorum, non tempore laborum   exercitationem aut optio repellat veritatis nemo eaque veniam perferendis eos libero. Deserunt  adipisci dolore saepe reprehenderit alias recusandae ipsa, quos earum corrupti sed mollitia  nemo, tempora ipsam. Sed facere placeat aliquam impedit similique vero iure dolorum eos  excepturi. Saepe, repellat. Consequuntur incidunt saepe qui, nesciunt fugit ea nostrum aperiam   cum dignissimos laborum illo libero accusantium iusto, repellat et temporibus, modi similique   commodi obcaecati. Rem soluta pariatur aliquam fugiat iure, perferendis ducimus? Sint repellat  repudiandae numquam ad consectetur voluptatibus maiores? Debitis quidem, accusantium odit  sapiente est aliquam, esse repudiandae expedita cupiditate amet voluptatibus aut voluptate   error nesciunt atque sunt, eveniet magni. Mollitia repudiandae voluptatibus reiciendis porro.   Nemo, accusantium dolore necessitatibus tenetur maxime labore mollitia omnis asperiores quidem  molestiae maiores excepturi inventore accusamus error sed dolor quas eaque voluptatibus  consectetur ut suscipit laboriosam! Est, et dolorum ea excepturi reiciendis eaque quaerat hic  optio nam sequi. Excepturi voluptates sed natus veniam cumque magni velit, minima laboriosam,  odit libero adipisci architecto ducimus, nam ea ad quaerat. Necessitatibus, numquam?
      </div>
      <div id="comment">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque quam eaque facere consectetur   itaque, voluptate totam aperiam odit expedita libero rerum illum modi architecto quos vitae   tempore perferendis est natus nulla magnam error culpa! Nostrum explicabo aspernatur  blanditiis veritatis amet. Eaque facere, maxime nam repellat sunt et at voluptatum recusandae  labore dolorum error cum delectus minima vitae odio quo in quisquam consequatur fuga eos!  Perferendis, recusandae nemo inventore eligendi provident mollitia rerum exercitationem eaque  dolores beatae voluptate odio sint dignissimos! Ratione officia repellat accusantium natus   iusto repudiandae nobis a, voluptatem culpa. Deleniti ipsam vero laborum vel magnam voluptatum  fuga! Officiis, fugiat quo. Consequuntur impedit laboriosam, inventore facere modi quis maxime   vitae vel, sapiente placeat fuga ad cumque veritatis tenetur accusantium qui cupiditate autem   ipsa optio iure saepe magnam officia possimus! Earum consectetur cumque doloribus mollitia,   alias porro enim consequatur, cum veritatis odit perferendis ab harum. Earum neque est soluta   saepe error recusandae, corrupti maiores sequi numquam aperiam nostrum ex pariatur, porro   mollitia quasi! Aspernatur autem ad soluta est suscipit itaque accusamus, voluptates repellat   ut ullam, vero iusto odit mollitia consequuntur odio laborum nisi tempore nam? Quas   consequuntur id quod error! Odit numquam dolor esse recusandae maiores in obcaecati qui   tenetur.
      </div>
      <div id="fac">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident architecto ducimus, vitae rem dolor, perferendis similique odit eum voluptatum rerum atque modi? Aperiam commodi, consequuntur odit ad provident ullam nisi enim odio laborum veritatis ex ipsa magnam voluptatibus deserunt explicabo eius amet temporibus fugiat similique sint aut labore numquam totam. Consequatur quasi inventore nostrum maiores debitis amet eum accusamus dicta cupiditate facere quaerat harum voluptate vero eligendi quis, natus, quam magni sit aliquid? Voluptatem ab praesentium impedit, blanditiis obcaecati aspernatur ipsa deserunt? Delectus quae assumenda cumque ducimus impedit quis, quidem veniam illo voluptatum unde corporis iusto veritatis magnam id, itaque atque fugiat vitae, nemo sed esse enim maiores corrupti earum. Ex magni provident ea voluptates! Ab, aperiam illo! Accusamus beatae odio aperiam exercitationem doloremque, laborum numquam autem, rerum impedit nulla cumque animi placeat nam similique, perspiciatis at commodi asperiores! Quasi esse, iure odio animi ad error adipisci quos, veniam voluptates assumenda voluptatem omnis, commodi tempore quae placeat a quisquam ex. Minima, error tenetur. Dolores asperiores maxime error natus labore voluptatem, nesciunt suscipit ea mollitia magni commodi quia libero voluptatum numquam optio vero dicta id aliquam iure minima? Quae, iure rerum? Perspiciatis officiis illo quibusdam, similique magnam eum reiciendis voluptate quaerat nesciunt alias optio iure repellendus animi officia nam sint expedita vero tempora libero! Necessitatibus, suscipit tempore. Praesentium veritatis autem eos tempore, aliquam error rerum! Magni dicta doloremque labore sit ad sint dolorum eos placeat explicabo alias beatae modi officiis corrupti enim vero et perspiciatis neque quidem, dolore, error asperiores voluptas nulla minus! Vero repellat recusandae autem, tempore et inventore voluptatibus voluptas deleniti? Veniam asperiores nesciunt ad, corporis nulla necessitatibus dolorum placeat unde quam tenetur doloribus ut consectetur recusandae incidunt est quibusdam quod quos ab iusto reiciendis fugit consequuntur quae itaque expedita. Modi repudiandae non, minima nemo voluptates doloribus deserunt est.
      </div>
      
    </div>
    <!-- 详情页主界面 end -->
    <!-- 页尾广告 start -->
    <div id="footer">
      <div>
        <div>
          <span class="iconfont icon-dunpaibaoxianrenzheng_o"></span>
          <p>123</p>
        </div>
        <div>
          <span></span>
          <p>123</p>
        </div>
        <div>
          <span></span>
          <p>123</p>
        </div>
      </div>
      <div v-text="tel"></div>
    </div>
    <!-- 页尾广告 end -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      scroll:"",
      carImg:3,
      title:"寻宿·达内山客栈",
      tags:["珠海环绕","雅致庭院","怀旧风格"],
      grade:5.0,
      gradeText:"宿客说",
      mapTexts:["距高新国际1.0KM","达内山风景区外 | 达内山","高新区科技路168号"],
      goldVip:"您是金卡会员 本人预订本人入住可享",
      goldVipRight:["预订95折","免押金","欢迎卡片","13点退房"],
      pickerVisible:"",
      //页尾广告
      tel:"会员专属热线:400-400-4000"
    }
  },
  methods:{
    //Header样式
    navChange(){
      var header=document.getElementById("header")
      var htext=document.getElementsByClassName("cool");
      this.scroll=window.scrollY;
      if(this.scroll>100){
        header.className="mint-header opa-dark is-fixed";
        for(var h of htext){
          h.className="mint-button iconfont mint-button--default mint-button--normal cool"
        }
      }else{
        header.className="mint-header opa-light is-fixed";
        for(var h of htext){
          h.className="mint-button iconfont text-hidden mint-button--default mint-button--normal cool"
        }
      }
    },
    //跳转房型
    house(){
      document.querySelector("#house").scrollIntoView(true)
    },
    //跳转评论
    com(){
      document.querySelector("#comment").scrollIntoView(true)
    },
    //跳转配套设施
    fac(){
      document.querySelector("#fac").scrollIntoView(true)
    },
    //页头跳转评论
    viewCom(){
      this.$toast("跳转评论咯")
    },
    //页头地图模块
    mapModel(){
      this.$toast("正在跳转地图模块..1%")
    },
    //vip权益页面
    vipPage(){
      this.$toast("跳转vip权益页面..1%,用mint-ui popup")
    },
    //日期选择器
    openPicker(){
      this.$refs.picker.open();
    }
  },
  //锚点跳转在挂载后添加事件受VUE管辖才可以获取scrollY属性的值
  mounted() {
    window.addEventListener("scroll",this.navChange);
  },
}
</script>

<style scoped>
  img{
    width:100%;
  }
  .opa-light{
    background:rgba(255,255,255, 0);
    color:#ffffff;
  }
  .opa-dark{
    background:rgba(255,255,255,1);
    color:#000000;
  }
  .iconfont{
    font-size:16px;
    margin-left: 10px;
  }
  .text-hidden{
    color:rgba(255,255,255,0);
  }
  .mint-swipe{
    height:211px;
  }
  #carImg{
    width:10%;
    height:20px;
    display: block;
    position: absolute;
    top:160px;
    z-index: 1;
    color:white;
    font-size:14px;
    text-align: center;
    line-height:20px;
    background-color: rgba(0,0,0, 0.5);
    border-radius: 3px;
  }
  #main{
    background: white;
    border-radius:10px;
    position:relative;
    top:-25px;
    padding:0 10px;
  }
  #viewCom{
    position:absolute;
    top:-5px;
    left:80%;
    color:white;
    text-align: center;
    background:linear-gradient(to bottom,white 0%,rgba(245,156,26,0.8) 10%,rgba(245,156,26,1) 100%);
    width:50px;
    height:72px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom-left-radius:40%;
    border-bottom-right-radius:40%;
    padding:0 3px;
    box-sizing: border-box;
  }
  #vc1{
    display:block;
    padding-top:5px;
    font-size:20px;
  }
  #vc2{
    font-size:12px;
  }
  #f1,#map{
    margin:10px 0;
    border-bottom: 1px solid rgba(0,0,0, 0.3);
  }
  #title{
    font:20px bolder;
    margin-left:5px;
    box-sizing: border-box;
  }
  #tag{
    box-sizing: border-box;
    display:inline-block;
    font-size:12px;
    color:rgba(0,0,0, 0.3);
    margin:10px 0 10px 5px;
    padding:2px;
    border:1px solid rgba(0,0,0, 0.3);
    border-radius: 5px;
  }
  #map>div{
    margin:0;
    display: inline-block;
  }
  #map>div>span:not(:first-child),
  #vip>div>span:not(:first-child){
    color:rgba(0,0,0, 0.5);
  }
  #map>div>span{
    display:block;
    font-size:14px;
  }
  #mapText{
    width:75%;
  }
  #mapIcon{
    width:20%;
    font-size:40px;
    color:rgba(245,156,26,1);
    text-align: center;
    padding-left:18px;
    box-sizing:border-box;
    height:57px;
  }
  #vip,#date{
    width:100%;
    height:50px;
    background:rgba(245,156,26,0.7);
    border-radius:8px;
    /* line-height:70px; */
  }
  #date{
    margin-top:10px;
    background:beige;
  }
  #vip>div{
    display:inline-block;
    font-size:12px;
  }
  #vip>div:first-child{
    width:20%;
    font-size:40px;
    color:antiquewhite;
    margin-left:10px;
  }
  #vip>div:last-child{
    width:75%;
  }
  #vip>div:last-child>span:not(:first-child){
    margin-right:4px;
  }
  #footer{
    width:100%;
    height:100px;
    background:#cccccc;
    padding:0;
    position:absolute;
  }
</style>

