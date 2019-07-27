const express=require("express");
const router=express.Router();
const pool=require("../pool");
// router.get("/",(req,res)=>{
//      var output = {
//          leaseroom: [],
//          user: []
//        }
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
//     var sql=`SELECT * FROM leaseroom`;
//     pool.query(sql,[],(err,result)=>{
//       if(err) throw(err);
//         output.leaseroom=result;
//         // res.send({code:0});
//           res.send(result);
//     })
// })
router.get('/home', function (req, res) {
  var output = {
    user: [],
    leaseroom: [],
    homePic: []
  }
    var sql1 = `select * from users`;
    pool.query(sql1, (err, result) => {
      if (err) console.log(err);
      output.user = result;
      console.log(output.user);
      var sql2 = `select * from leaseroom`;
      pool.query(sql2, (err, result) => {
        if (err) console.log(err);
        output.leaseroom = result;
          var sql3 = `select imgurl from homePic`;
          pool.query(sql3, (err, result) => {
            if (err) console.log(err);
            output.homePic=result;
            res.send({ code: 200, msg: output });
          })
      })
    })

});

module.exports=router;