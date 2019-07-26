<template>
  <div>
    <div id="back">
      <span class="iconfont icon-fanhuijiantou" @click="back()"></span>
      <span v-text="title"></span>
    </div>
    <div id="container"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title:"",
      lid:""
    }
  },
  methods:{
    init:function() {
      // 创建地图
      var map = new qq.maps.Map(document.getElementById("container"), {
        center: new qq.maps.LatLng(34.233170,108.905150),      // 地图的中心地理坐标
        zoom: 20,     // 地图缩放级别
        mapStyleId: 'style 1 白浅'  // 该key绑定的style1对应于经典地图样式，若未绑定将弹出无权限提示窗
      });
    },
    back(){
      this.$router.push({path:"./Detail",query:{lid:this.lid}})
    }
  },
  created(){
    this.lid=this.$route.query.lid;
    this.title=this.$route.query.title;
  },
  mounted(){
    this.init()
  }
}
</script>

<style scoped>
#container{
    min-width:375px;
    min-height:627px;
}
#back{
  width:100%;
  height:40px;
  line-height:40px;
  /* display:flex; */
  /* justify-content: center; */
  background:rgba(245,156,26,1);
  color:white;
}
#back>span{
  /* width:10%; */
  height:40px;
  float:left;
  margin-left:20px;
}
#back>span+span{
  width:65%;
  text-align: center;
}
</style>


