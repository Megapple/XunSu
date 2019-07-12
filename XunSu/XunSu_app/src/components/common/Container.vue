<template>
<div>
    <div class="citys">
        <div class="first">
        <div class="dali">
            <img :src="img_dali1">
            <div>
            <span>{{subtitle}}</span>
            <span>{{price}}</span>
            <i>{{grade}}</i>
            </div>
        </div>
        <div class="dali">
            <img :src="img_dali2" >
            <div>
            <span>{{subtitle}}</span>
            <span>{{price}}</span>
            <i>{{grade}}</i>
            </div>
        </div>  
        </div>  
        <div class="first">   
        <div class="dali">
            <img :src="img_dali3" >
            <div>
            <span>{{subtitle}}</span>
            <span>{{price}}</span>
            <i>{{grade}}</i>
            </div>
        </div>        
        <div class="dali">
            <img :src="img_dali4" >
            <div>
            <span>{{subtitle}}</span>
            <span>{{price}}</span>
            <i>{{grade}}</i>
            </div>
        </div>
        </div>  
    </div>
    <mt-button><a href="#">查看更多大理酒店 ></a></mt-button>
</div>
</template>
<script>
export default {
    data(){
        return{
            subtitle:"花筑·大理古城银月客栈",
            price:"¥304",
            grade:"5.0分",
        }
    },
    props:{
        img_dali1:{default:""},
        img_dali2:{default:""},
        img_dali3:{default:""},
        img_dali4:{default:""},
    }
}
</script>
<style>
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
    padding: 4px 10px;
}
.dali{
    width:160px;height:160px;
    display: flex;
    flex-flow: column;
    background-color:#f5f5f5;
    box-shadow: 0 0 10px #b8bbbf;
    border-radius: 10px;
    margin:0 10px;
}
.dali>div span:first-child{
    font-size:13px;
    color:#5f5e5ec2;
   
}
.dali>div span:nth-child(2){
    color:rgb(255, 145, 0);
    float:left; 
    margin-top: 10px;
    margin-left:9px;
}
.dali i{font-size:10px;color:rgb(255, 145, 0);float:right; margin-top: 10px;margin-right:9px;}
.dali>div{ 
    margin-top:5px;
    padding:5px 0;
}
.mint-button--normal{
    margin-top:10px;
    width:50%;height:25px;
    border-radius: 50px;
}
.mint-button--normal{background-color:rgba(221, 221, 221, 0.534);}
.mint-button-text>a{font-size:14px;text-decoration: none;color:#707274;}
</style>
