//引入第三方模块
const express = require("express");
const cors = require("cors");
const session = require("express-session");

//引入路由模块
const index=require("./routers/index");
const user=require("./routers/user");

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
 //静态目录
 server.use(express.static("public"))
 server.listen(3000);
 
 //路由器管理路由
server.use("/index",index)
server.use("/user",user)
