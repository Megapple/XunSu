<template>
  <div id="container">
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
      <div id="vip"  @click="vipPage()">
        <div class="iconfont icon-huiyuan-"></div>
        <div>
          <span v-text="goldVip"></span>
          <br>
          <span v-for="(gvr,i) of goldVipRight" v-text="gvr" :key=i ></span>
          <mt-popup  v-model="popupVisible" position="right" closeOnClickModal>
            <div id="vipPage">
              <div>
                <span id="vipTitle">您当前是金卡会员</span>
              </div>
              <div>
                <span id="vipsTitle">入住酒店可以享受以下权益</span>
              </div>
              <div>
                <ul id="vipTable">
                  <li class="iconfont icon-iconfontzhizuobiaozhunbduan16"></li>
                  <li>预订95折</li>
                  <li class="iconfont icon-jinyongyajin"></li>
                  <li>免押金</li>
                  <li class="iconfont icon-icon-test"></li>
                  <li>欢迎卡片</li>
                  <li class="iconfont icon-shijianzhongbiao"></li>
                  <li>13点退房</li>
                  <li class="iconfont icon-huiyuan-"></li>
                  <li>生日礼遇</li>
                  <li class="iconfont icon-right-1"></li>
                  <li>预订保留</li>
                  <li class="iconfont icon-hservice"></li>
                  <li>会员百宝箱</li>
                  <li class="iconfont icon--yinliao"></li>
                  <li>饮品/果盘</li>
                </ul>
              </div>
            </div>
          </mt-popup>
        </div>
      </div>
      <!-- VIP礼遇 end -->
      <!-- 日历 start -->
      <div id="date" @click="openPicker">
        <!-- <mt-datetime-picker
          v-model="pickerVisible"
          type="date"
          ref="picker"
          year-format="{value} 年"
          month-format="{value} 月"
          date-format="{value} 日">
        </mt-datetime-picker> -->
      </div>
      <!-- 日历 end -->
      <div id="house" >
        <div class="house_module" v-for="(r,i) of room" :key=i>
          <div class="house_img">
            <img src="../../assets/img/shijiehenda.png" alt="">
          </div>
          <div class="house_detail">
            <div>
              <span id="room_title" v-text="r.title"></span>
            </div>
            <div>
              <span id="room_bed" v-text="r.bed"></span>
              <span id="room_area" v-text="r.area"></span>
              <span id="room_peo" v-text="`可住${r.peo}人`"></span>
            </div>
            <div>
              <span class="room_tag" v-text="r.tag1"></span>
              <span class="room_tag" v-text="r.tag2"></span>
            </div>
          </div>
          <div class="house_price">
            <span>￥</span>
            <span v-text="r.price"></span>
            <span>起</span>
          </div>
        </div>
      </div>
      <div id="comment"></div>
      <!-- 配套服务模块 -->
      <mt-navbar id="fac" v-model="selected">
        <mt-tab-item id="fac1">设施服务</mt-tab-item>
        <mt-tab-item id="fac2">入住政策</mt-tab-item>
        <mt-tab-item id="fac3">位置周边</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="fac1">
          <div>
            <div>
              <div>
              <span class="iconfont icon-jiudian"></span>
              <span>综合设施</span>
              </div>
              <div>
                <span class="iconfont icon-right-1" v-for="(sup,i) of sups" :key=i v-text="sup"></span>
              </div>
            </div>
            <div>
              <div>
              <span class="iconfont icon-manager"></span>
              <span>服务项目</span>
              </div>
              <div>
                <span class="iconfont icon-right-1" v-for="(ser,i) of sers" :key=i v-text="ser"></span>
              </div>
            </div>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="fac2">
          <div class="policy">
            <ul>
              <li class="ptitle">入离时间</li>
              <li>
                <span class="iconfont icon-shijianzhongbiao"></span>
                <span>入住:&nbsp;14:00以后</span>
                <span class="iconfont icon-shijianzhongbiao"></span>
                <span>退房:&nbsp;12:00之前</span>
              </li>
            </ul>
            <ul>
              <li class="ptitle">入住政策</li>
              <li>·&nbsp;酒店于入住当天14:00办理入住,如提前到达酒店,视酒店客房情况决定是否给予提前入住</li>
              <li>·&nbsp;官网预订入住保留时间为入住时间第二天中午12:00</li>
              <li>·&nbsp;金卡,白金,钻石,黑金会员本人入住最晚退房时间分别为下午13:00,14:00,15:00,15:00(视客房供应情况而定)</li>
            </ul>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="fac3">
          <div id="ambitus">
            <div>
              <div>最近机场</div>
              <span>西安咸阳国际机场</span>
              <span>距离42.6km</span>
            </div>
            <div>
              <div>最近火车站</div>
              <span>西安火车站</span>
              <span>距离12.3kn</span>
            </div>
            <div>
              <div>最近汽车站</div>
              <span>西安城南客运站</span>
              <span>距离7.7km</span>
            </div>
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
      <!-- 配套服务模块 -->
    </div>
    <!-- 详情页主界面 end -->
    <!-- 页尾广告 start -->
    <div id="footer">
      <div>
        <div v-for="(item,i) of footers" :key=i>
          <span :class=item.c></span>
          <p v-text="item.t"></p>
        </div>
      </div>
      <div>
        <span v-text="tel"></span>
      </div>
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
      popupVisible:false,
      pickerVisible:"",
      //房型数据
      room:[
        {title:"慧然大床房",bed:"两张床",area:"20m²",peo:"2",tag1:"情侣优选",tag2:"蜜月推荐",price:699},
        {title:"慧然大床房",bed:"两张床",area:"20m²",peo:"2",tag1:"情侣优选",tag2:"蜜月推荐",price:699},
        {title:"慧然大床房",bed:"两张床",area:"20m²",peo:"2",tag1:"情侣优选",tag2:"蜜月推荐",price:699},
        {title:"慧然大床房",bed:"两张床",area:"20m²",peo:"2",tag1:"情侣优选",tag2:"蜜月推荐",price:699},
        {title:"慧然大床房",bed:"两张床",area:"20m²",peo:"2",tag1:"情侣优选",tag2:"蜜月推荐",price:699}
      ],
      //配套服务tabbar
      selected:"fac1",
      //页尾广告
      tel:"会员专属热线:400-400-4000",
      footers:[
        {c:"iconfont icon-dunpaibaoxianrenzheng_o",t:"官网预订享低价保证"},
        {c:"iconfont icon-manager",t:"入住享金牌服务保障"},
        {c:"iconfont icon-kefu",t:"贴心服务7*24小时"}
      ],
      //配套设施数组
      sups:["停车场","免费WIFI","餐厅","庭院","洗衣房","会议厅","咖啡厅","公共厨房"],
      //配套服务数组
      sers:["接机服务","行李寄存","叫醒服务","中文服务","影印服务","叫餐服务","旅游咨询","洗衣服务"]
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
      this.$router.push("/DetailMap")
    },
    //vip权益页面
    vipPage(){
      if(!this.popupVisible){
        this.popupVisible=true;
      }else{
        this.popupVisible=false;
      }
    },
    //日期选择器
    openPicker(e){
      // e.stopPropagation;
      // this.$refs.picker.open();
      this.$toast("日期模块施工升级中...")
    },
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
  /* 导航栏CSS start */
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
  /* 导航栏CSS end */
  .mint-swipe{
    height:211px;
  }
  /* 标题地图会员CSS start */
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
      border-top-left-radius :10px;
      border-top-right-radius :10px;
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
      font-weight:100;
      color:rgba(0,0,0, 0.7);
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
  /* 标题地图会员CSS end */
  /* vip模块CSS start */
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
    #vipPage{
      height:100%;
      width:100%;
      background:beige;
    }
    .mint-popup{
      background:#f6f6f6;
      height:100%;
      width:100;
    }
    div.v-modal{
      opacity:0;
    }
    #vipTitle,
    #vipsTitle{
      display:block;
      text-align:center;
      font-size:16px;
      padding:10px;
      box-sizing:border-box;
      color:rgba(245,156,26,0.6);
    }
    #vipsTitle{
      font-size:12px;
    }
    #vipTable{
      margin-top:20px;
    }
    #vipTable>li{
      margin:10px 0;
      text-align:center;
      font-size:20px;
      color:rgba(245,156,26,0.6);
    }
    #vipTable>li:nth-child(){
      font-size:12px;
    }
  /* vip模块CSS end */
  /* 页尾广告CSS start */
    #footer{
      width:100%;
      height:120px;
      background:#cccccc;
      padding:0;
      position:absolute;
    }
    #footer>div{
      display:flex;
    }
    #footer>div>div{
      padding:10px 0;
      justify-content: space-between;
      width:125px;
      color:rgba(0,0,0, 0.5);
      text-align:center;
      box-sizing: border-box;
    }
    #footer>div>div>span{
      display:block;
      margin:0;
      font-size:25px;
      text-align:center;
    }
    #footer>div>div>p{
      margin:0 27.5px;
      font-size:12px;
      width:70px;
    }
    #footer>div+div{
      font-size:12px;
      display:block;
      text-align:center;
      color:rgba(0,0,0, 0.5);
    }
  /* 页尾广告CSS end */
  /* 房型CSS样式 start */
    #house{
      margin-top:10px;
      background:#f5f5f5;
    }
    .house_module{
      display:flex;
      padding:10px;
    }
    .house_img{
      width:25%;
      height:110px;
    }
    .house_img>img{
      height:110px;
      border-radius:10px;
    }
    .house_detail{
      width:50%;
      margin-left:10px;
    }
    #room_title{
      display:block;
      font-size:16px;
      font-weight:bolder;
      margin-bottom:5%;
    }
    #room_bed,
    #room_area,
    #room_peo{
      display:inline-block;
      font-size:14px;
      margin-bottom:5%;
    }
    .room_tag{
      display:inline-block;
      font-size:12px;
      font-weight:100;
      color:rgba(245,156,26);
      width:40%;
      margin-top:23%;
      border:1px solid rgba(0,0,0, 0.5);
      text-align:center;
      border-radius:10%;
    }
    .house_price{
      width:25%;
      margin-left:10px;
      text-align:end;
      display:flex;
      justify-content:end;
      align-items:flex-end;
    }
    .house_price>span{
      width:100%;
      text-align:center;
      font-size:14px;
      color:rgba(245,156,26,1);
    }
    .house_price>span:nth-child(2){
      font-size:20px;
      line-height:20px;
    }
    .house_price>span:last-child{
      color:#cccccc;
      font-weight:100;
    }
  /* 房型CSS样式 end */
  /* 底部展示栏CSS start */
    .mint-navbar .mint-tab-item.is-selected {
      border-bottom: 3px solid rgba(245,156,26,1);
      color:rgba(245,156,26,1);
      margin-bottom: -3px;
      font-weight: bolder;
    }
    .mint-navbar .mint-tab-item{
      color:rgba(245,156,26,0.8);
    }
    .mint-tab-container-item>div{
      margin-top:3px;
      padding:10px;
      background:#f5f5f5;
      box-sizing: border-box;
    }
  /* 底部展示栏CSS end */
  /* 设施服务CSS样式 start */
    .mint-tab-container-item>div>div{
      display:flex;
    }
    .mint-tab-container-item>div>div:first-child{
      border-bottom:1px solid rgba(0,0,0, 0.3);
    }
    .mint-tab-container-item>div>div>div{
      width:20%;
      text-align:center;
      box-sizing:border-box;
      padding:3px;
    }
    .mint-tab-container-item>div>div>div:first-child>span:first-child{
      display:block;
      width:20px;
      margin:0 16px 0 16px;
      font-size:30px;
      text-align:center;
    }
    .mint-tab-container-item>div>div>div>span+span{
      display:block;
      font-size:12px;
    }
    .mint-tab-container-item>div>div>div+div{
      display:flex;
      justify-content:space-between;
      flex-wrap:wrap;
      width:80%;
    }
    .mint-tab-container-item>div>div>div+div>span{
      font-size:12px;
      margin:2px 1px 2px 10px;
      width:120px;
      height:14px;
      text-align:start;
    }
  /* 设施服务CSS样式 end */
  /* 入住政策CSS样式 start */
    .policy>ul{
      list-style:none;
      font-size:12px;
      padding:0;
      margin:0;
    }
    .policy>ul>li{
      margin:8px 5px;
    }
    .ptitle{
      font-size:14px;
      font-weight: bolder;
    }
  /* 入住政策CSS样式 end */
  /* 位置周边CSS样式 start */
    #ambitus{
      margin-bottom:10px;
      box-sizing:border-box;
    }
    #ambitus>div{
      display:block;
      border:0;
    }
    #ambitus>div:not(:first-child){
      border-top:1px solid rgba(0,0,0, 0.3);
    }
    #ambitus>div>div{
      width:100%;
      display:block;
      text-align: start;
      font-size:14px;
      font-weight:bolder;
      padding:2px;
    }
    #ambitus>div>span{
      display:inline-block;
      font-size:12px;
      padding:2px;
      width:48%;
    }
    #ambitus>div>span+span{
      text-align:end;
    }
  /* 位置周边CSS样式 end */
</style>

