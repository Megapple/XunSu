<template>
  <div>
    <div id="container"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods:{
    init:function() {
      // 创建地图
      var map = new qq.maps.Map(document.getElementById("container"), {
        center: new qq.maps.LatLng(34.233170,108.905150),      // 地图的中心地理坐标
        zoom: 20,     // 地图缩放级别
        mapStyleId: 'style1'  // 该key绑定的style1对应于经典地图样式，若未绑定将弹出无权限提示窗
      });
    }
  },
  mounted(){
    this.init()
  }
}
</script>

<style scoped>
#container{
    min-width:375px;
    min-height:667px;
}
</style>


