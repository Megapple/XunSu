const express=require("express")
const router=express.Router();
const pool=require("../pool");
const fs=require('fs');
const path=require('path');
var multer=require("multer");

  //上传图片接口

   //生成的图片放入images文件夹中
  var images=multer({dest:'../public/images/avatar'})
  router.post('/img',images.single('test'),(req,res)=>{
    console.log(req.file);
    fs.readFile(req.file.path,(err,data)=>{
      if(err) {return res.send('上传失败')}
      //声明图片名字为时间戳和随机数拼接成的，尽量保持唯一性
      let time=Date.now()+parseInt(Math.random()*999)+parseInt(Math.random()*2222);
      //扩展名
      let extname=req.file.mimetype.split('/')[1];
      //拼接成图片名
      let keepname=time+"."+extname;

      fs.writeFile(path.join(__dirname,'../public/images/avatar/'+keepname),data,(err)=>{
        if(err){return res.send('写入失败')}
        res.send({err:0,msg:'上传ok',data:'/images/avatar/'+keepname})
      })
    })
  })
  module.exports=router;

