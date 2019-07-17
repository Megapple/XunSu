<template>
<div>
    <div class="citys">
        <div class="first">
        <div class="cd">
            <img :src="img_cd1">
            <div>
            <span>{{subtitle}}</span>
            <span>{{price}}</span>
            <i>{{grade}}</i>
            </div>
        </div>
        <div class="cd">
            <img :src="img_cd2" >
            <div>
            <span>{{subtitle}}</span>
            <span>{{price}}</span>
            <i>{{grade}}</i>
            </div>
        </div>  
        </div>  
        <div class="first">   
        <div class="cd">
            <img :src="img_cd3" >
            <div>
            <span>{{subtitle}}</span>
            <span>{{price}}</span>
            <i>{{grade}}</i>
            </div>
        </div>        
        <div class="cd">
            <img :src="img_cd4" >
            <div>
            <span>{{subtitle}}</span>
            <span>{{price}}</span>
            <i>{{grade}}</i>
            </div>
        </div>
        </div>  
    </div>
    <mt-button><a href="#">查看更多成都酒店 ></a></mt-button>
</div>
</template>
<script>
export default {
    data(){
        return{
            subtitle:"花筑·成都索性酒店(成都熊猫基地店)",
            price:"¥277",
            grade:"5.0分",
        }
    },
    props:{
        img_cd1:{default:""},
        img_cd2:{default:""},
        img_cd3:{default:""},
        img_cd4:{default:""},
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
.cd{
    width:160px;height:170px;
    display: flex;
    flex-flow: column;
    background-color:#f5f5f5;
    box-shadow: 0 0 10px #b8bbbf;
    border-radius: 10px;
    margin:3px 9px;
}
.cd>div span:first-child{
    font-size:13px;
    color:#5f5e5ec2;
   
}
.cd>div span:nth-child(2){
    color:rgb(255, 145, 0);
    float:left; 
    margin-top: 22px;
    margin-left:5px;
}
.cd i{font-size:10px;color:rgb(255, 145, 0);float:right; margin-top: 5px;margin-right:5px;}
.cd>div{ 
    margin-top:5px;
    padding:5px 10px;
}
/deep/ .mint-button--normal{
    margin:10px 110px;
    height:25px;
    border-radius: 50px;
    background-color:rgba(221, 221, 221, 0.534);
}
/deep/ .mint-button-text>a{font-size:14px;text-decoration: none;color:#707274;}
</style>
