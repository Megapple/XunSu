const express=require("express")
const router=express.Router();
const pool=require("../pool");
const fs=require('fs');
const path=require('path');
var multer=require("multer");

  //登录
  router.get('/login',function(req,res){
    var $phone=req.query.phone;
    var $upwd=req.query.upwd;
    var str="SELECT * FROM users WHERE phone=? and upwd= ?";
      pool.query(str,[$phone,$upwd],function(err,result){	 
        if (err) throw err;
        if (result.length==0)
        {
          res.send({code:-1,msg:"用户名或密码有误"});
        }else{
          req.session.uid=result[0].id;
          res.send({code:1,msg:result});
        }
      })
    })
    //注册
    router.get('/signin',function(req,res){
      var $phone=req.query.phone;
      var str="SELECT * FROM users WHERE phone=?";
      pool.query(str,[$phone],function(err,result){
        if (err) throw err;
        if(result.length>0){
          res.send({code:0,msg:'hased phone'})
        }else{
          var obj=req.query;
          var str="INSERT INTO users set ?";
          pool.query(str,[obj],function(err,result){
            if(err) throw err;
            if (result.affectedRows>0)
            {
              res.send({code:200,msg:'signin success'})
            }else{
              res.send({code:301,msg:'signin false'})
              }
          })
        }
      })
    })
    router.get('/signinSelect',function(req,res){
      var $phone=req.query.phone;
      var str="SELECT * FROM users WHERE phone=?";
      pool.query(str,[$phone],function(err,result){
        if (err) throw err;
        if(result.length>0){
          res.send({code:0,msg:'hased phone'})
        }else{
          res.send({code:1,msg:'phone true'})
        }
      })
    })
  //3.用户更改
  router.get('/update',function(req,res){
      var obj=req.query;
      var sql="UPDATE users SET user_name= ?,ID_number= ? WHERE uid= ?";
      pool.query(sql,[
        obj.user_name,
        obj.ID_number,
        obj.uid
        ],function(err,result){
        if (err) throw err;
        if (result.affectedRows>0)
        {
          res.send({code:200,msg:'更改成功'});
        }else{
          res.send({code:301,msg:'更改失败'});
          }
        })
  })
  //个人资料修改
  var images=multer({dest:'../public/images/avatar'})
  router.post('/updateuser',images.single('test'),function(req,res){
    var obj=req.body;
    if(req.file==undefined){
      var sql="UPDATE users SET uname= ?,email= ? ,gender=?,remark=? WHERE uid= ?";
            pool.query(sql,[
              obj.test[2],
              obj.test[3],
              obj.test[4],
              obj.test[5],
              obj.test[1]
              ],function(err,result){
              if (err) throw err;
              if (result.affectedRows>0)
              {
                res.send({code:200,msg:'更改成功'});
              }else{
                res.send({code:301,msg:'更改失败'});
                }
              })
    }else{
      pool.query("SELECT * FROM users WHERE uid=?",[obj.test[0]],(err,result)=>{
        if(err) throw err;
        console.log(result)
        var url="public"+result[0].avatar;
        if(result[0].avatar){
          console.log(1)
          fs.unlink(url,(err) => {
            if (err) throw err;
          });
        }
        fs.readFile(req.file.path,(err,data)=>{
          if(err) {return res.send({code:0,msg:'上传失败'})}
          let time=Date.now()+parseInt(Math.random()*999)+parseInt(Math.random()*2222);
          let extname=req.file.mimetype.split('/')[1];
          let keepname=time+"."+extname;
          fs.writeFile(path.join(__dirname,'../public/images/avatar/'+keepname),data,(err)=>{
            if(err){return res.send({code:300,msg:'写入失败'})}
            var data='/images/avatar/'+keepname;
            var sql="UPDATE users SET uname= ?,email= ? ,avatar=?,gender=?,remark=? WHERE uid= ?";
            var arr=[obj.uname,obj.email,data,obj.gender,obj.remark]
            pool.query(sql,[
              obj.test[1],
              obj.test[2],
              data,
              obj.test[3],
              obj.test[4],
              obj.test[0]
              ],function(err,result){
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
    }
})
  //插入省市县

  //4.用户检索
  router.get('/detail',function(req,res){
    var uid=req.query[0];
    //执行sql语句
    pool.query('SELECT * FROM users WHERE uid=?',[uid],function(err,result){
      if(err) throw err;
    if (result.length>0)
    {
     res.send({code:200,msg:result})
    }else{
       res.send({code:301,msg:'detai err'})
    }
    });
  })
  // //5.设置用户列表
  // router.get('/list',function(req,res){
  //   var obj=req.query;
  //   if (!obj.pno)
  //   {
  //     obj.pno=1;
  //   }
  //   if (!obj.count)
  //   {
  //     obj.count=3;
  //   }
  //   pool.query('SELECT * FROM xz_user LIMIT ?,?',[(obj.pno-1)*obj.count,parseInt(obj.count)],function(err,result){
  //     if(err) throw err;
  //   res.send(result);
  //     });
  //   })
  // //6.删除
  // router.get('/delete',function(req,res){
  //   var obj=req.query;
  //   if (!obj.uid)
  //   {
  //     res.send({code:401,msg:'uid required'});
  //     return;
  //   }
  //   pool.query('DELETE FROM xz_user WHERE uid=?',[obj.uid],function(err,result){
  //    if(err) throw err;
  //    console.log(result);
  //    if (result.affectedRows>0)
  //    {
  //      res.send({code:200,msg:'delete succes'});
  //    }else{
  //        res.send({code:301,msg:'delete err'})
  //    }
     
  //   })
  // })



module.exports=router;