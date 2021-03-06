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
    // console.log(req.file.path);
    // console.log(req.body.test[0]);
    var uid=req.body.test;
    fs.readFile(req.file.path,(err,data)=>{
      if(err) {return res.send({code:0,msg:'上传失败'})}
      //声明图片名字为时间戳和随机数拼接成的，尽量保持唯一性
      let time=Date.now()+parseInt(Math.random()*999)+parseInt(Math.random()*2222);
      //扩展名
      let extname=req.file.mimetype.split('/')[1];
      //拼接成图片名
      let keepname=time+"."+extname;
      fs.writeFile(path.join(__dirname,'../public/images/avatar/'+keepname),data,(err)=>{
        if(err){return res.send({code:300,msg:'写入失败'})}
        // res.send({code:1,err:0,msg:'上传ok',data:'/images/avatar/'+keepname})
        var data='/images/avatar/'+keepname;
        var sql="UPDATE users SET avatar= ? WHERE users . uid= ?";
          pool.query(sql,[data,uid],function(err,result){
            if (err) throw err;
            if (result.affectedRows>0)
            {
              res.send({code:200,msg:'更改成功'});
            }else{
              res.send({code:301,msg:'更改失败'});
              }
            })
      })
    })
  })


  var image=multer({dest:'../public/images/house'})
  router.post('/imgs',image.single('files'),(req,res)=>{
    // console.log(req.file.path);
    // console.log(req.body.test[0]);
    var lid=req.body.lid;
    fs.readFile(req.file.path,(err,data)=>{
      if(err) {return res.send({code:0,msg:'上传失败'});}
      //声明图片名字为时间戳和随机数拼接成的，尽量保持唯一性
      let time=Date.now()+parseInt(Math.random()*999)+parseInt(Math.random()*2222);
      //扩展名
      let extname=req.file.mimetype.split('/')[1];
      //拼接成图片名
      let keepname=time+"."+extname;
      fs.writeFile(path.join(__dirname,'../public/images/house/'+keepname),data,(err)=>{
        if(err){return res.send('写入失败')}
        // res.send({code:1,err:0,msg:'上传ok',data:'/images/house/'+keepname})
        var data='/images/house/'+keepname;
        var sql="INSERT INTO `homepic` (`hid`, `homeid`, `imgurl`) VALUES (NULL, ?, ?);";
          pool.query(sql,[lid,data],function(err,result){
            if (err) throw err;
            if (result.affectedRows>0)
            {
              res.send({code:200,msg:data});
              return;
            }else{
              res.send({code:301,msg:'插入失败'});
              }
            })
      })
    })
  })

  //缩略图
  router.get('/thumbnail',(req,res)=>{
    var sql="UPDATE leaseroom SET img= ? WHERE lid= ?";
    var obj=req.query;
    pool.query(sql,[obj.imgurl,obj.lid],function(err,result){
      if(err) throw err;
      if (result.affectedRows>0)
            {
              res.send({code:200,msg:'插入成功'});
            }else{
              res.send({code:301,msg:'插入失败'});
              }
      })
  })
  module.exports=router;

