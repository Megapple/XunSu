<template>
    <div class="body">
        <mt-header title="选择照片">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
            <div class="content">
                <h4>最多上传20张照片(20/{{i}})</h4>
                 <van-uploader :after-read="afterRead" v-model="fileList" multiple :max-count="20" capture/>
            </div>
    <mt-tabbar v-model="selected" class="bottom">
         <mt-tab-item id="tab2">
             <mt-button class="nex" @click="tonext">存储并前往下一页</mt-button>
        </mt-tab-item>
    </mt-tabbar> 
    </div>
</template>
<script>
export default {
    data(){
        return {
         selected:"",
         fileList: [] ,
         i:1
        }
    },
    methods:{
        tonext(){
            var fileList=this.fileList;
            var formData = new FormData();
            var lid=this.$route.query.lid;
            for(var i=0;i<fileList.length;i++){
                formData.append("file",fileList[i].file);
                console.log(fileList[i].file)
            }
             formData.append("lid",lid);
             return this.axios.post("http://127.0.0.1:3000/upload/imgs",formData,{header:{"content-type":"multipart/form-data"}}).then((result)=>{
            if(result.data.code==200){
                this.$toast("上传成功",1000);
                this.details();
            }else{
                this.$toast("上传失败",1000);
            }
             })
        },
       afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file)
        console.log(this.fileList[1].file.name)
         this.i=this.fileList.length;

        },
        beforeRead(file) {
            if (file.type !== 'image/jpeg') {
                Toast('请上传 jpg 格式图片');
                return false;
            }
            return true;
            },

            // 返回 Promise
            asyncBeforeRead(file) {
            return new Promise((resolve, reject) => {
                if (file.type !== 'image/jpeg') {
                Toast('请上传 jpg 格式图片');
                reject();
                } else {
                resolve();
                }
            });
        }
    }
}
</script>
<style>
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
    min-height:600px;
 }
 .content{
   width:90%;
   margin:30px auto;
 }
 .mint-button.nex{
   width:60%;
   height:33px;
   font-size:16px;
   background-color:#ff9c1a;
   color:#fff;
   border-radius:20px;  

 }
 .bottom{
   position:fixed;
 }
/* .image_upload{  height: 60px; width: 60px;background: red} */
.van-uploader__preview{
    margin-left:10px;
    margin-right:20px;
} 
.van-uploader__upload{
    margin-left:10px;
} 
</style>
