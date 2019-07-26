const express=require("express");
const router=express.Router();
const pool=require("../pool");
//增加订单
router.get("/insert",(req,res)=>{
    var obj=req.query;
        var sql="INSERT INTO roomItem VALUES (NULL, ?, ?, ?, ?, ?, ?, ?)";
        pool.query(sql,[obj.uid,obj.lid,obj.title,obj.img,obj.htType,obj.tenant,obj.bedroom],(err,result)=>{
          if(err) throw(err);
            // res.send({code:0});
            console.log(1)
              res.send(result);
        })
 })
 //查找订单
 router.get("/select",(req,res)=>{
    var obj=req.query;
        var sql="SELECT * FROM roomItem WHERE rouid=?";
        pool.query(sql,[obj.uid],(err,result)=>{
          if(err) throw(err);
            // res.send({code:0});
            res.send(result);
        })
 })

 //删除订单
 router.get("/delete",(req,res)=>{
    var obj=req.query;
        var sql="DELETE FROM roomItem WHERE rolid=?";
        pool.query(sql,[obj.lid],(err,result)=>{
          if(err) throw(err);
            if (result.affectedRows>0)
            {
              res.send({code:200,msg:'删除成功'});
            }else{
              res.send({code:301,msg:'删除失败'});
              }
        })
 })
module.exports=router;