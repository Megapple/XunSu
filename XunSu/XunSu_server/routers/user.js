const express=require("express")
const router=express.Router();
const pool=require("../pool");

  //登录
  router.get('/login',function(req,res){
    var $uname=req.query.uname;
    var $upwd=req.query.upwd;
    var str="SELECT * FROM xz_user WHERE uname=? and upwd= ?";
    if (!obj.uname)
    {
      res.send({code:401,msg:'uname required'});
      return;
    }
      if (!obj.upwd)
    {
      res.send({code:402,msg:'upwd required'});
      return;
    }
      pool.query(str,[$uname,$upwd],function(err,result){	 
        if (err) throw err;
        if (result.length>0)
        {
          res.send({code:200,msg:'login success'});
        }else{
          res.send({code:301,msg:'login false'}) ;
        }
      })
    })
    //注册
    router.get('/signin',function(req,res){
      var obj=req.query,i=400;
      var str="INSERT INTO xz_index_product set ?";
      for(var key in obj){
        i++;
        if (!obj[key])
        { res.send({code:400,msg:key+' required'});
        return;
        }
      }
      pool.query(str,[obj],function(err,result){
        if(err) throw err;
        if (result.affectedRows>0)
        {
          res.send({code:200,msg:'insert success'})
        }else{
          res.send({code:301,msg:'insert false'})
          }
      })
    })
  // //3.用户更改
  // router.get('/update',function(req,res){
  //     var obj=req.query;
  //     var i=400;
  //     var sql='UPDATE xz_user SET phone=?,email=?,user_name=?,gender=? WHERE uid=?';
  //     //遍历对象属性，获取所有的属性
  //     for (var key in obj)
  //     {
  //       i++;
  //       //console.log(key,obj[key]);
  //       //判断属性值是否为空
  //       if (!obj[key])
  //       {
  //         res.send({code:i,msg:key+' required'});
  //         return;
  //       }
  //     }
  //     pool.query(sql,[
  //       obj.phone,
  //       obj.email,
  //       obj.user_name,
  //       obj.gender,
  //       obj.uid
  //       ],function(err,result){
  //       if (err) throw err;
  //       if (result.affectedRows>0)
  //       {
  //         res.send({code:200,msg:'更改成功'});
  //       }else{
  //         res.send({code:301,msg:'更改失败'});
  //         }
  //       })
  // })
  // //4.用户检索
  // router.get('/detail',function(req,res){
  //   var obj=req.query;
  //   if (!obj.uid)
  //   {
  //     res.send({code:401,msg:'uid ruquired'});
  //     return;
  //   }
  //   //执行sql语句
  //   pool.query('SELECT * FROM xz_user WHERE uid=?',[obj.uid],function(err,result){
  //     if(err) throw err;
  //   if (result.length>0)
  //   {
  //        res.send({code:200,msg:result})
  //   }else{
  //      res.send({code:301,msg:'detai err'})
  //      }
    
  //   });
  // })
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