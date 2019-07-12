//引入第三方模块
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const session = require("express-session");
const bodyParser = require('body-parser');

//引入路由模块
const index=require("./routes/index");

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
 //body-parser中间件
 app.use(bodyParser.urlencoded({extended:false}));
 //静态目录
 server.use(express.static("public"))
 server.listen(3000);
 
 //路由器管理路由
app.use("/index",index)
