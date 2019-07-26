<template>
<div>
    <div class="citys">
        <div class="first">
        <div class="hz">
            <img :src="img_hz1">
            <div>
            <span>{{subtitle}}</span>
            <span>{{price}}</span>
            <i>{{grade}}</i>
            </div>
        </div>
        <div class="hz">
            <img :src="img_hz2" >
            <div>
            <span>{{subtitle}}</span>
            <span>{{price}}</span>
            <i>{{grade}}</i>
            </div>
        </div>  
        </div>  
        <div class="first">   
        <div class="hz">
            <img :src="img_hz3" >
            <div>
            <span>{{subtitle}}</span>
            <span>{{price}}</span>
            <i>{{grade}}</i>
            </div>
        </div>        
        <div class="hz">
            <img :src="img_hz4" >
            <div>
            <span>{{subtitle}}</span>
            <span>{{price}}</span>
            <i>{{grade}}</i>
            </div>
        </div>
        </div>  
    </div>
    <mt-button>查看更多杭州酒店 ></mt-button>
</div>
</template>
<script>
export default {
    data(){
        return{
            subtitle:"花筑·杭州毕竟西湖民宿",
            price:"¥459",
            grade:"5.0分",
        }
    },
    props:{
        img_hz4:{default:""},
        img_hz3:{default:""},
        img_hz2:{default:""},
        img_hz1:{default:""},
    }
}
</script>
<style scoped>
.citys{
    width:100%;
    display: flex;
    flex-flow: column;
    margin-top:10px;
}  
.citys img{
    width:100%;height:100px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}
.first{
    width:400px;
    display: flex;
    padding: 8px 10px;
}
.hz{
    width:160px;height:170px;
    display: flex;
    flex-flow: column;
    background-color:#f5f5f5;
    box-shadow: 0 0 10px #b8bbbf;
    border-radius: 10px;
    margin:3px 9px;
}
.hz>div span:first-child{
    font-size:13px;
    color:#5f5e5ec2;
}
.hz>div span:nth-child(2){
    color:rgb(255, 145, 0);
    float:left; 
    margin-top: 15px;
    margin-left:9px;
}
.hz i{font-size:10px;color:rgb(255, 145, 0);float:right; margin-top: 15px;margin-right:9px;}
.hz>div{ 
    margin-top:5px;
    padding:5px 10px;
}  
.mint-button--normal{
    margin:10px 110px;
    height:25px; 
    border-radius: 50px;
    background-color:rgba(221, 221, 221, 0.534);
}
.mint-button-text{font-size:14px;text-decoration: none;color:#707274;}
</style>
