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
             <mt-button class="nex" @click="tonext">发布房源</mt-button>
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
            // var file=fileList[0].file;
            var lid=this.$route.query.lid;
            fileList.forEach((file,index)=>{
                var formData = new FormData();
                formData.append("lid",lid);
                    formData.append('files', file.file, file.file.name);
                    // console.log(file);
                    return this.axios.post("http://127.0.0.1:3000/upload/imgs",formData,{header:{"content-type":"multipart/form-data"}}).then((result)=>{
                    if(result.data.code==200){
                        this.$toast("房源发布成功",1000);
                        // console.log(11);
                        if(index==0){
                            console.log(11)
                            console.log(result.data.msg)
                            var url="upload/thumbnail";
                            var imgurl=result.data.msg;
                            var obj={imgurl:imgurl,lid:lid};
                            this.axios.get(url,{params:obj}).then(result=>{
                                // console.log(result.data)
                            })
                        }
                        this.$router.push(`/House?lid=${lid}`);
                        // this.details();
                    }else{
                        this.$toast("房源发布失败",1000);
                    }
                    })  

            })
             
        },
       afterRead(file) {
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
