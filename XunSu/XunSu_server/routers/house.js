const express=require("express")
const router=express.Router();
const pool=require("../pool");

// //1.添加商品
// router.get('/reg',function(req,res){
// 	var obj=req.query,i=400;
// 	for(var key in obj){
// 	  i++;
// 	  if (!obj[key])
// 	  { res.send({code:400,msg:key+' required'});
// 	  return;
// 	  }
// 	}
// 	pool.query('INSERT INTO xz_index_product set ?',[obj],function(err,result){
// 		if(err) throw err;
// 		if (result.affectedRows>0)
// 		{
// 			res.send({code:200,msg:'insert success'})
// 		}else{
// 			res.send({code:401,msg:'insert false'})
// 			}
// 	})
		
// });
// //2.删除商品
// router.get('/delete',function(req,res){
// 	var obj=req.query;
// 	if (!obj.pid)
// 	{
// 		res.send({code:401,mag:'pid required'});
// 		return;
// 	}
// 	pool.query('DELETE FROM xz_index_product WHERE pid=?',[obj.pid],function(err,result){
// 		if(err)throw err;
// 		if (result.affectedRows>0)
// 		{
// 			res.send({code:200,msg:'delete success'});
// 		}else{
// 			res.send({code:401,msg:'delete false'});
// 		}
// 	})
// });
// //3.更改商品
// router.post('/update',function(req,res){
// 	var obj=req.body,i=400;
// 	for (var key in obj){
// 		if (!obj[key])
// 		{
// 			i++;
// 			res.send({code:i,mag:key+' required'});
// 			return;
// 		}
// 	}
// 	pool.query('UPDATE xz_index_product SET title=?,price=?,details=? WHERE pid=?',[obj.title,obj.price,obj.details,obj.pid]),function(err,result){
// 		if(err) throw err;
//         if (result.affectedRows>0)
//         {
// 			res.send({code:200,msg:'update success'});
//         }else{
// 			res.send({code:400,msg:'update false'});
// 		}
// 	}
// })
// //4.查找商品
// 	router.get('/select',function(req,res){
// 		var obj=req.query;
// 		if (!obj.pid)
// 		{
// 			res.send({code:400,msg:'pid required'});
// 			return;
// 		}
// 		pool.query('SELECT * FROM xz_index_product WHERE ?',[obj.pid],function(err,result){
// 			if(err) throw err;
// 			if (result.length>0)
// 			{
// 				res.send(result);
				
// 			}else{
// 				res.send({code:400,msg:'select false'});
// 			}
// 		})
// 	});
// //5.检索商品
// 	router.get('/list',function(req,res){
// 		var obj=req.query;
// 		if (!obj.pno)
// 		{
// 			res.send({code:400,msg:'pno required'});
// 			return;
// 		}
// 		if (!obj.count)
// 		{
// 			res.send({code:400,msg:'count required'});
// 			return;
// 		}
// 		var a=(obj.pno-1)*obj.count;
// 		pool.query('SELECT * FROM xz_index_product LIMIT ?,?',[a,parseInt(obj.count)],function(err,result){
// 			if(err)throw err;
// 			res.send(result);
// 		});
// 	})


module.exports=router;