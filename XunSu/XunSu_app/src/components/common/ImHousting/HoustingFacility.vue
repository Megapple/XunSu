<template>
  <div>
  <div class="body">
    <mt-header title="房源设施">
      <router-link to="/housting" slot="left">
        <mt-button icon="back" class="back"></mt-button>
      </router-link>
    </mt-header>
     <div class="content">
       <h4>综合设施</h4>
       <div class="clearfix chunk">
       <van-checkbox-group v-model="result">
          <van-checkbox
            v-for="(item,index) in list"
            :key="index"
            :name="index"
            class="list"
            checked-color="#ff9c1a"
          >
            {{ item }}
          </van-checkbox>
        </van-checkbox-group>
       </div> 
       <h4>服务设施</h4>
       <div class="clearfix chunk">
        <van-checkbox-group v-model="checked">
          <van-checkbox
            v-for="(item,index) in subs"
            :key="index"
            :name="index"
            class="list"
            checked-color="#ff9c1a"
          >
            {{ item }}
          </van-checkbox>
        </van-checkbox-group>
       </div>
         
     </div>
    </div>
    <mt-button class="tonext" size="large" @click="tonext">确定并前往下一页</mt-button>  
  </div> 
</template>

<script>
export default {
  data(){
    return {
      list:[
        'Wi-Fi',
        '热水淋浴',
        '空调',
        '电视',
        '电梯',
        '门禁系统',
        '洗衣机',
        '冰箱',
        '停车位',
        '有线网络',
        '拖鞋',
        '牙具',
        '毛巾',
        '洗浴，洗发水',
        '饮水机',
        '浴缸',
        '暖气',],
        subs:[
          '接机服务',
          '行李寄存',
          '叫醒服务',
          '影拓服务',
          '叫餐服务',
          '洗衣服务'
        ],
        result:[],
        s:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        n:[0,0,0,0,0,0],
        checked:[]
    }
  },
  methods:{
    tonext(){
      var r=this.result;
      var c=this.checked;
      for(var key in r){
        var num=r[key];
        this.s[num]=1;
      }
       for(var key in c){
        var num=c[key];
        console.log(c[key])
        this.n[num]=1;
      }
       var sum = this.s.concat(this.n); 
       console.log(sum)
       var lid=this.$route.query.lid;
      var url="house/facility";
      var lid=this.$route.query.lid;
      // var address=this.plot+this.specific;
      var obj= {lid,sum};
      this.axios.get(url,{params:obj}).then(result=>{
          if(result.data.code==200){  
            this.$toast('房源设施添加成功',1000);
           this.$router.push(`/HoustIntroduce?lid=${lid}`);
          }else{
             this.$messagebox("提示","提交错误，请重新提交");
           }
      }) 

    }
  
  }
}
</script>
<style scoped>
  .mint-header{
   background-color:rgba(255,255,255,0);
   color:#ff9c1a;
   letter-spacing:1px;
   height:40px;
 }
 .mint-header .mint-header-title{
  font-weight:bold;
 }
 .body{
    width: 100%;
    background-color: #f5f5f5;
    padding-bottom:20px;
 }
 .content{
   width:90%;
   margin:30px auto;
 }
.list{
  font-size:14px;
  padding:10px;
  width:40%;
  float:left;
}
.clearfix:after{
  clear:both;
  content:"";
  display:block;
}
.tonext{
  font-size:16px;
  background-color:#ff9c1a;
  color:#fff;
  position:fixed;
  bottom:0;
}
.chunk{
  margin-top:10px;
  border-radius:10px;
  background-color:#fff;
}
</style>