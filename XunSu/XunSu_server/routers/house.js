const express = require("express");
const router = express.Router();
const pool = require("../pool");


//1.插入房源
router.get('/reg', function (req, res) {
  var area = req.query.area; //面积
  var bedroom = req.query.bedroom; //几室
  var bed = req.query.bed;   //几床
  var bedSize = req.query.bedSize;
  var toilet = req.query.toilet;  //卫生间
  var htType = req.query.htType;  //整套出租
  var tenant = req.query.tenant;  //几人
  var uid = req.query.uid;
  var str = "INSERT INTO `leaseroom` (`lid`, `uid`, `time`, `title`, `describe`, `price`, `img`, `address`, `htType`, `tenant`, `bedroom`, `bed`,`bedSize`, `toilet`, `area`) VALUES (NULL, ?, NULL, '', NULL, NULL, '', '', ?, ?, ?,?, ?, ?, ?)";
  pool.query(str, [uid, htType, tenant, bedroom, bed, bedSize, toilet, area], function (err, result) {
    if (err) throw err;
    if (result.affectedRows > 0) {
      res.send({ code: 200, msg: result });
    } else {
      res.send({ code: 401, msg: 'false' });
    }
  })
})
//修改房源
router.get('/update', function (req, res) {
  var str = "UPDATE leaseroom SET province=?,city=?,houseDistrict=?,houseStreet=?,address=? WHERE lid=?";
  pool.query(str, [req.query.prname, req.query.ciname, req.query.dname, req.query.sname, req.query.address, req.query.lid], function (err, result) {
    if (err) throw err;
    if (result.affectedRows > 0) {
      res.send({ code: 200, msg: 'true' });
    } else {
      res.send({ code: 401, msg: 'false' });
    }
  })
})
//插入设施
router.get('/facility', function (req, res) {
  var lid = req.query.lid;
  var m = req.query.sum;
  pool.query('SELECT * FROM facility WHERE fhtid=?', [lid], function (err, result) {
    if (err) throw err;
    if (result.length > 0) {
      m.push(lid);
      pool.query("UPDATE `facility` SET `wifi` = ?, `hotShower` = ?, `airCondition` = ?, `television` = ?, `elevator` = ?, `entranceGuard` = ?, `washer` = ?, `freezer` = ?, `parkingSpace` = ?, `wiredNetwork` = ?, `slipper` = ?, `toiletThings` = ?, `washcloth` = ?, `bathProduct` = ?, `waterDispenser` = ?, `bathtub` = ?, `centralHeating` = ?, `airport` = ?, `baggage` = ?, `wakeup` = ?, `monotype` = ?, `orderfood` = ?, `wash` = ? WHERE `fhtid` = ?", m, function (err, result) {
        if (err) throw err;
        if (result.affectedRows > 0) {
          res.send({ code: 200, msg: result });
        } else {
          res.send({ code: 401, msg: 'false' });
        }
      })
    } else {
      var str = "INSERT INTO `facility` VALUES (NULL,?, ?)";
      pool.query(str, [lid, req.query.sum], function (err, result) {
        if (err) throw err;
        if (result.affectedRows > 0) {
          res.send({ code: 200, msg: result });
        } else {
          res.send({ code: 401, msg: 'false' });
        }
      })
    }
  })
})
router.get('/title', function (req, res) {
  var str = "UPDATE leaseroom SET `title`=?,`describe`=? ,`detail`=? WHERE `lid`=?";
  console.log(req.query)
  pool.query(str, [req.query.title, req.query.describe, req.query.detail,req.query.lid], function (err, result) {
    if (err) throw err;
    if (result.affectedRows > 0) {
      res.send({ code: 200, msg: 'true' });
    } else {
      res.send({ code: 401, msg: 'false' });
    }
  })
})
//插入价格
router.get('/needKnow', function (req, res) {
  var lid = req.query.lid;
  var price1 = req.query.price1;
  var price2 = req.query.price2;
  var needknow = req.query.needknow;  //入住须知
  var minimumDay = req.query.minimumDay; //最少入住天数
  var checkTime = req.query.checkTime; //入住时是否宽松1-宽松2-适中3-严格
  // var num=[lid,checkTime,minimumDay];
  var num = [lid, checkTime, minimumDay].concat(needknow);
  var str = "INSERT INTO needKnow VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  var str2 = "UPDATE leaseroom SET `price`=?,`holidayPrice`=? WHERE `lid`=?";
  pool.query(str2, [price1, price2, lid], function (err, result) {
    if (err) throw err;
    if (result.affectedRows > 0) {
      pool.query(str, num, function (err, result) {
        if (err) throw err;
        if (result.affectedRows > 0) {
          res.send({ code: 200, msg: result });
        } else {
          res.send({ code: 401, msg: 'false' });
        }
      })
    } else {
      res.send({ code: 401, msg: 'false' });
    }
  })
})
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
//查找房源信息
router.get('/select', function (req, res) {
  var lid = req.query.lid;
  console.log(lid);
  var output = {
    leaseroom: {},
    facility: [],
    needKnow: [],
    homePic: []
  }
  if (lid !== undefined) {
    var sql1 = `select * from leaseroom where lid=?`;
    pool.query(sql1, [lid], (err, result) => {
      if (err) console.log(err);
      output.leaseroom = result[0];
      console.log(output.leaseroom);
      var uid = output.leaseroom.uid;
      console.log(lid);
      var sql2 = `select * from facility where fhtid=?`;
      pool.query(sql2, [lid], (err, result) => {
        if (err) console.log(err);
        output.facility = result;
        var sql3 = `select * from needKnow where fid=?`
        pool.query(sql3, [lid], (err, result) => {
          if (err) console.log(err);
          output.needKnow = result;
          var sql4 = `select * from homePic where homeid=?`
          pool.query(sql4, [lid], (err, result) => {
            if (err) console.log(err);
            output.homePic = result;
            res.send(output);
          })
        })
      })
    })
  } else {
    res.send(output);
  }
});
//检索uid里面的Lid
router.get('/myhouse', function (req, res) {
  console.log(req.query)
  var uid = req.query.uid;
  var output = {
    user: {},
    leaseroom: [],
    homePic: []
  }
  if (uid !== undefined) {
    var sql1 = `select * from users where uid=?`;
    pool.query(sql1, [uid], (err, result) => {
      if (err) console.log(err);
      output.user = result[0];
      console.log(output.user);
      var sql2 = `select * from leaseroom where uid=?`;
      pool.query(sql2, [uid], (err, result) => {
        if (err) console.log(err);
        var obj = output.leaseroom = result;
        var i = 0;
        for (var key of obj) {
          var sql3 = `select imgurl from homePic where homeid= ?`;
          var m = key.lid;
          pool.query(sql3, [m], (err, result) => {
            if (err) console.log(err);
            output.homePic.push(result[0]);
            i++;
            if (i == obj.length) {
              res.send({ code: 200, msg: output });
            }
          })
        }
      })
    })
  } else {
    res.send(output);
  }
});

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


module.exports = router;