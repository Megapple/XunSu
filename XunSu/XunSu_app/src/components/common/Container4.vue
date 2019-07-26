<template>
<div>
    <div class="citys">
        <div class="first" >
        <div class="dali" @click="add" v-for="(item,i) of list.slice(0,4)" :key="i">
            <img :src="'http://127.0.0.1:3000/'+item.img">
            <div>
            <span>{{item.title}}</span>
            <span>{{"¥"+item.price}}</span>
             <i >{{grade[i]}}</i>
            </div>
        </div>
        </div>  
    </div>
    <mt-button @click="cityadd">查看更多厦门酒店 ></mt-button>
</div>
</template>
<script>
export default {
    data(){
        return{
            grade:["5.0分","4.8分","4.9分","4.7分"],
            list:[]
        }
    },
    props:{
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
    position: relative;
}
.dali>div span:first-child{
    font-size:13px;
    color:#5f5e5ec2;
}
.dali>div span:nth-child(2),.dali i{
    color:rgb(255, 145, 0);
    position: absolute;
    top:38px;left:15px;
}
.dali i{
    font-size:10px;
    position: absolute;
    top:38px;
    left:120px;
}
.dali>div{ 
    width:100%;
    text-align: left;
    margin-top:5px;
    padding:5px 10px;
    position: absolute;
    top:60%;
}
.mint-button--normal{
    margin:10px 110px;
    padding:4px 15px;
    height:25px;
    width:150px;
    border-radius: 50px;
    background-color:rgba(221, 221, 221, 0.534);
    font-size: 13px;
}
</style>
