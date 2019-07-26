//引入第三方模块
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const bodyParser=require('body-parser');
//图片
// var multer=require('multer');



//引入路由模块
const index=require("./routers/index");
const user=require("./routers/user");
const house=require("./routers/house");
const home=require("./routers/home");

 //跨域
 var server = express();
 server.use(cors({
   origin:["http://127.0.0.1:8080",
   "http://localhost:8080"],
   credentials:true
 }))
 //session
 server.use(session({
   secret:"128位字符串",
   resave:true,
   saveUninitialized:true
 }))
 //post
 server.use(bodyParser.urlencoded({
	extended:false
}));
server.use(bodyParser.json())
 //静态目录
 server.use(express.static("public"))
 server.listen(3000);
 
 //路由器管理路由
server.use("/index",index)
server.use("/user",user)
server.use("/house",house)
server.use("/home",home)
// //图片保存
const upload=require('./routers/upload');
server.use('/upload',upload);
server.listen(80,()=>console.log("服务器开启"))
