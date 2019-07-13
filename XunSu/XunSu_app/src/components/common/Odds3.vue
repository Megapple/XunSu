<template>
<div>
    <div class="citys">
        <div class="first">
        <div class="gl">
            <img :src="img_gl1">
            <div>
            <span>{{subtitle}}</span>
            <span>{{price}}</span>
            <i>{{grade}}</i>
            </div>
        </div>
        <div class="gl">
            <img :src="img_gl2" >
            <div>
            <span>{{subtitle}}</span>
            <span>{{price}}</span>
            <i>{{grade}}</i>
            </div>
        </div>  
        </div>  
        <div class="first">   
        <div class="gl">
            <img :src="img_gl3" >
            <div>
            <span>{{subtitle}}</span>
            <span>{{price}}</span>
            <i>{{grade}}</i>
            </div>
        </div>        
        <div class="gl">
            <img :src="img_gl4" >
            <div>
            <span>{{subtitle}}</span>
            <span>{{price}}</span>
            <i>{{grade}}</i>
            </div>
        </div>
        </div>  
    </div>
</div>
</template>
<script>
export default {
    data(){
        return{
            subtitle:"花筑·阳朔西街忆景酒店",
            price:"¥341",
            grade:"5.0分",
        }
    },
    props:{
        img_gl1:{default:""},
        img_gl2:{default:""},
        img_gl3:{default:""},
        img_gl4:{default:""},
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
.gl{
    width:160px;height:170px;
    display: flex;
    flex-flow: column;
    background-color:#f5f5f5;
    box-shadow: 0 0 10px #b8bbbf;
    border-radius: 10px;
    margin:3px 9px;
}
.gl>div span:first-child{
    font-size:13px;
    color:#5f5e5ec2;
   
}
.gl>div span:nth-child(2){
    color:rgb(255, 145, 0);
    float:left; 
    margin-top: 15px;
    margin-left:9px;
}
.gl i{font-size:10px;color:rgb(255, 145, 0);float:right; margin-top: 15px;margin-right:9px;}
.gl>div{ 
    margin-top:5px;
    padding:5px 10px;
} 
.mint-button--normal{
    margin:18px 95px;
    width:50%;height:25px;
    border-radius: 50px;
    background-color:rgba(221, 221, 221, 0.534);
}
.mint-button-text>a{font-size:14px;text-decoration: none;color:#707274;}  
</style>