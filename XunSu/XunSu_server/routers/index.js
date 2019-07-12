const express=require("express")
const router=express.Router();
const pool=require("../pool");
//app.js: "/index"
//自己:          "/"
//完整地址: /index/
router.get("/",(req,res)=>{
  var sql=`SELECT * FROM xz_index_product where seq_recommended!=0 ORDER BY seq_recommended`;
  pool.query(sql,[],(err,result)=>{
    if(err){
      console.log(err);
      res.send({code:0});
    }else{
      res.send(result);
    }
  })
})

module.exports=router;