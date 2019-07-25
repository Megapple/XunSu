const express=require("express");
const router=express.Router();
const pool=require("../pool");
//添加入住人信息

router.post("/AddMsg",(req,res)=>{
    var sql="INSERT INTO 'add_guest_msg' ('id','name','phone','credentials','cardid')";
pool.query(sql,[id,name,phone,credentials,cardid],(result,err)=>{
    if(err) throw err;
    if(result.affectedRows>0){
        res.send({code:200,msg:"添加成功"})
    }else{
        res.send({code:401,mgs :"添加失败"})
    }
})
})


module.exports=router;