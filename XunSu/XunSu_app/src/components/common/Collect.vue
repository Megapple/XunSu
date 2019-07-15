<template>
<div>
   <div class="collect">
       <button>收藏</button>
       <button>分组管理</button>
   </div>
   <!-- <div class="collect_img"><img src="../../assets/img/picture/dnkss.png" alt="" ></div> -->
</div>
</template>
<script>
export default {
   data(){
       return{}
   }
}
</script>

<style>
.collect{
    width:100%;height:55px;
    line-height: 55px;
    background-color: rgb(245, 156, 26);
    text-align: center;
}
.collect button{
    font:18px 楷体;color:#f5f5f5;
    background-color: rgb(245, 156, 26); 
    border:0;
    margin:0 10px;
    }
.collect_img{
    width:200px; height:200px;
    background:#ff0;
	position:absolute;
	top:50%;left:50%;
	transform:translate(-100px,-100px);
}
</style>
