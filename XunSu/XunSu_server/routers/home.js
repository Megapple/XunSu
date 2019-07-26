const express=require("express");
const router=express.Router();
const pool=require("../pool");
router.get("/",(req,res)=>{
//     var output = {
//         leaseroom: [],
//         homePic: []
//       }
//   var sql=`SELECT * FROM leaseroom`;
//   pool.query(sql,[],(err,result)=>{     
//       console.log(result)
//      if(err) throw (err);
//      output.leaseroom = result;
//      var lid = output.leaseroom.lid;
//      var sql2=`SELECT * FROM WHERE homeid=?`
//      pool.query(sql2,[lid],(err,result=>{
//          if(err)throw err;
//          this.homePic=result;
//          res.send(result)
//          return;
//      }))
//   })
    var sql=`SELECT * FROM leaseroom`;
    pool.query(sql,[],(err,result)=>{
      if(err) throw(err);
        // res.send({code:0});
          res.send(result);
    })
})
module.exports=router;