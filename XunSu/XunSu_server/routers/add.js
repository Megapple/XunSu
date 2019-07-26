const express=require("express");
const router=express.Router();
const pool=require("../pool");
//添加入住人信息
console.log(pool);
router.get("/Add",(req,res)=>{
    console.log(pool);
    var id=req.body.id;
    var name=req.body.name;
    var phone=req.body.phone;
    var credentials=req.body.credentials;
    var cardid=req.body.cardid;
    var sql="INSERT INTO add_guest_msg VALUES ('NULL','123','151615','1','5')";
    pool.query(sql,(result,err)=>{
    if(err) throw err;
    console.log(result);
    if(result.affectedRows>0){
        res.send({code:200,msg:"添加成功"})
    }else{
        res.send({code:401,mgs :"添加失败"})
    }
   
})
})


module.exports=router;