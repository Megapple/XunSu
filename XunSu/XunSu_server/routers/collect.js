const express=require("express");
const router=express.Router();
const pool=require("../pool");
router.get("/insert",(req,res)=>{
    var obj=req.query;
        var sql="INSERT INTO collected VALUES (NULL, ?, ?, ?, ?, ?, ?, ?)";
        pool.query(sql,[obj.uid,obj.lid,obj.title,obj.img,obj.htType,obj.tenant,obj.bedroom],(err,result)=>{
          if(err) throw(err);
            // res.send({code:0});
              res.send({code:200,msg:result});
        })
 })
 router.get("/select",(req,res)=>{
    var obj=req.query;
        var sql="SELECT * FROM collected WHERE couid=?";
        pool.query(sql,[obj.uid],(err,result)=>{
          if(err) throw(err);
          if(result.length>0){
            res.send({code:200,msg:result});
          }else{
              res.send({code:300,msg:"没有找到"})
          }
            // res.send({code:0});
            
        })
 })
 router.get("/delete",(req,res)=>{
    var obj=req.query;
        var sql="DELETE FROM collected WHERE colid=?";
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
 router.get("/iscollect",(req,res)=>{
  var obj=req.query;
      var sql="SELECT * FROM collected WHERE couid=?";
      pool.query(sql,[obj.uid],(err,result)=>{
        if(err) throw(err);
          if (result.length>0)
          {
            res.send({code:200,msg:result});
            console.log(result)
          }else{
            res.send({code:301,msg:'没有收藏'});
          }
      })
})
module.exports=router;