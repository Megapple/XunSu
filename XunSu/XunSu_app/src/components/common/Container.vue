<template>
<div>
    <div class="citys">
        <div class="first" >
        <div class="dali" @click="add" v-for="(item,i) of list" :key="i">
            <img :src="'http://127.0.0.1:3000/'+item.imgurl">
            <div>
            <span>{{subtitle}}</span>
            <span>{{price}}</span>
            <i>{{grade}}</i>
            </div>
        </div>
        <!-- <div class="dali">
            <img :src="'http://127.0.0.1:3000/'+item.imgurl">
            <div>
            <span>{{subtitle}}</span>
            <span>{{price}}</span>
            <i>{{grade}}</i>
            </div>
        </div>   -->
        </div>  
        <!-- <div class="first">   
        <div class="dali">
            <img :src="'http://127.0.0.1:3000/'+item.imgurl">
            <div>
            <span>{{subtitle}}</span>
            <span>{{price}}</span>
            <i>{{grade}}</i>
            </div>
        </div>        
        <div class="dali">
           <img :src="'http://127.0.0.1:3000/'+item.imgurl" >
            <div>
            <span>{{subtitle}}</span>
            <span>{{price}}</span>
            <i>{{grade}}</i>
            </div>
        </div>
        </div>   -->
    </div>
    <mt-button @click="cityadd">查看更多大理酒店 ></mt-button>
</div>
</template>
<script>
export default {
    data(){
        return{
            subtitle:"花筑·大理古城银月客栈",
            price:"¥304",
            grade:"5.0分",
            list:[]
        }
    },
    props:{
        img_dali1:{default:""},
        img_dali2:{default:""},
        img_dali3:{default:""},
        img_dali4:{default:""},
        add:{type:Function},
        cityadd:{type:Function}
    },
    methods:{
       loadMore(){
           var url="home";
           this.axios.get(url).then(result=>{
               console.log(result.data)
               this.list=result.data;
           })

       }
    },
    created() {
        this.loadMore();
    },
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
    flex-flow: wrap;
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
.mint-button-text{font-size:13px;text-decoration: none;color:#707274;}
</style>
