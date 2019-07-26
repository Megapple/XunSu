const express=require("express")
const router=express.Router();
const pool=require("../pool");
//app.js: "/index"
//自己:          "/"
//完整地址: /index/
router.get("/",(req,res)=>{
  var sql=`SELECT * FROM leaseroom`;
  pool.query(sql,[],(err,result)=>{
    if(err) throw(err);
      // res.send({code:0});
        res.send(result);
  })
})
module.exports=router;