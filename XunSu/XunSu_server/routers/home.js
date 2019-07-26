const express=require("express");
const router=express.Router();
const pool=require("../pool");
router.get("/",(req,res)=>{
  var sql=`SELECT * FROM homePic`;
  pool.query(sql,[],(err,result)=>{
     if(err) throw (err);
     res.send(result)
  })
})
module.exports=router;