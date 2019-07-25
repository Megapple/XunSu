<template>
<div>
    <div class="citys">
        <div class="first">
        <div class="dali" @click="add">
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
            <a href="#"><img :src="img_dali4" ></a>
            <div>
            <span>{{subtitle}}</span>
            <span>{{price}}</span>
            <i>{{grade}}</i>
            </div>
        </div>
        </div>  
    </div>
    <mt-button @click="cityadd"><a href="#">查看更多大理酒店 ></a></mt-button>
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
        add:{type:Function},
        cityadd:{type:Function}
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
.dali{
    width:160px;height:170px;
    display: flex;
    flex-flow: column;
    background-color:#f5f5f5;
    box-shadow: 0 0 10px #b8bbbf;
    border-radius: 10px;
    margin:3px 9px;
}
.dali>div span:first-child{
    font-size:13px;
    color:#5f5e5ec2;
   
}
.dali>div span:nth-child(2){
    color:rgb(255, 145, 0);
    float:left; 
    margin-top: 15px;
    margin-left:9px;
}
.dali i{font-size:10px;color:rgb(255, 145, 0);float:right; margin-top: 15px;margin-right:9px;}
.dali>div{ 
    margin-top:5px;
    padding:5px 10px;
}
.mint-button--normal{
    margin:10px 110px;
    height:25px;
    border-radius: 50px;
    background-color:rgba(221, 221, 221, 0.534);
}
.mint-button-text>a{font-size:14px;text-decoration: none;color:#707274;}
</style>
