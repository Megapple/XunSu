SET NAMES UTF8;
DROP DATABASE IF EXISTS XUNSU;
CREATE DATABASE XUNSU CHARSET=UTF8;
USE XUNSU;

/**用户**/
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `uid` INT(11) PRIMARY KEY NOT NULL auto_increment,
  `uname` VARCHAR(20) default NULL,          #用户名
  `upwd` VARCHAR(20) NOT NULL,               #密码
  `phone` VARCHAR(20) NOT NULL,              #手机
  `email` VARCHAR(30) default NULL,          #邮箱
  `user_name` VARCHAR(32) default NULL,      #用户姓名，如王小明
  `avatar` VARCHAR(128) default NULL,        #头像图片路径
  `gender` INT default NULL,                 #性别  0-女  1-男
  `remark` VARCHAR(100) default NULL         #介绍
);

/**插入数据**/
/**省**/
DROP TABLE IF EXISTS `province`;
CREATE TABLE `province` (
  `prid` INT(11) PRIMARY KEY NOT NULL auto_increment,
  `prname` VARCHAR(20) NOT NULL
);
/**市**/
DROP TABLE IF EXISTS `city`;
CREATE TABLE `city` (
  `ciid` INT(11) PRIMARY KEY NOT NULL auto_increment,
  `ciname` VARCHAR(20) NOT NULL
);
/**县**/
DROP TABLE IF EXISTS `contry`;
CREATE TABLE `contry` (
  `coid` INT(11) PRIMARY KEY NOT NULL auto_increment,
  `coname` VARCHAR(20) NOT NULL
);

/**区.县信息**/
DROP TABLE IF EXISTS `houseDistrict`;
CREATE TABLE `houseDistrict` (
  `did` INT(11) PRIMARY KEY NOT NULL auto_increment,
  `dname` VARCHAR(20) NOT NULL
);

/**街道信息表**/
DROP TABLE IF EXISTS `houseStreet`;
CREATE TABLE `houseStreet` (
  `streetId` INT(11) PRIMARY KEY NOT NULL auto_increment,
  `sname` VARCHAR(20) NOT NULL,
  `sdid` INT(11), 
  FOREIGN KEY(`sdid`) REFERENCES `houseDistrict`(`did`)
);

/**房屋类型**/
DROP TABLE IF EXISTS `houseType`;
CREATE TABLE `houseType` (
  `htId` INT(11) PRIMARY KEY NOT NULL auto_increment,
  `htType` INT NOT NULL     #租房类型（1-整套出租，2-单间出租，3-合住房间）              
);

/**房源信息**/
DROP TABLE IF EXISTS `leaseroom`;
CREATE TABLE `leaseroom` (
  `lid` INT(11) PRIMARY KEY NOT NULL auto_increment, 
  `uid` INT(11) default NULL,            #客户编号   
  `streetId` INT(11) NOT NULL,               #街道编号   
  `htid` INT(11) NOT NULL,                   #房屋类型编号
  `time` DATETIME default NULL,          #发布时间
  `title` VARCHAR(30) default '',        #标题
  `describe` VARCHAR(500) default NULL,  #房源描述
  `price` FLOAT default NULL,            #价格
  `img` VARCHAR(500) default '',         #图片
  `address` VARCHAR(100) default '',     #位置
  `tenant` INT(3) NOT NULL,            #房客人数（宜住几人）
  `bedroom` INT(3) NOT NULL,           #房源户型（卧室个数）
  `bed` INT(3) NOT NULL,                #床个数（共几张）
  CONSTRAINT `uid` FOREIGN KEY (`uid`) REFERENCES `users` (`uid`),
  CONSTRAINT `streetId` FOREIGN KEY (`streetId`) REFERENCES `houseStreet` (`streetId`),
  CONSTRAINT `htid` FOREIGN KEY (`htid`) REFERENCES `houseType` (`htid`)
);

/**插入数据**/
-- INSERT INTO `leaseroom` VALUES ('30', '24', '25', '1', '2013-10-21 18:18:10', '天上人间','天上人间房源' '99',  'upload/0743c74fba660e2099d6d03e87ed8db3.jpg', '郑州市二七区南区', '郑州市二七区南区  A栋15楼');

/**配套设施**/
DROP TABLE IF EXISTS `facility`;
CREATE TABLE `facility`(
  `fid` int(11) PRIMARY KEY NOT NULL auto_increment,
  `fhtid` INT(11) NOT NULL,  #房源编号
  `wifi` BOOLEAN,          #无线网络
  `hotShower` BOOLEAN,     #热水淋浴
  `airCondition`BOOLEAN,   #空调
  `television` BOOLEAN,    #电视
  `elevator` BOOLEAN,      #电梯
  `entranceGuard` BOOLEAN, #门禁系统
  `washer` BOOLEAN,        #洗衣机
  `freezer` BOOLEAN,       #冰箱
  `parkingSpace` BOOLEAN,  #停车位
  `wiredNetwork` BOOLEAN,  #有线网络
  `slipper` BOOLEAN,      #拖鞋
  `toiletThings` BOOLEAN,  #牙具
  `washcloth` BOOLEAN,     #毛巾
  `bathProduct` BOOLEAN,   #洗浴，洗发水
  `water dispenser` BOOLEAN, #饮水机
  `bathtub` BOOLEAN,       #浴缸
  `centralHeating` BOOLEAN, #暖气
   CONSTRAINT `fhtId` FOREIGN KEY (`fhtid`) REFERENCES `houseType` (`htid`)
);

/**预定须知**/
DROP TABLE IF EXISTS `needKnow`;
CREATE TABLE `needKnow`(
  `fid` int(11) NOT NULL,
  `checkTime1` INT NOT NULL,     #入住前几天可以100%退款
  `checkTime2` INT NOT NULL,     #入住前几天可以50%退款
  CONSTRAINT `fid` FOREIGN KEY (`fid`) REFERENCES `facility` (`fid`)
);
/**房东要求**/
DROP TABLE IF EXISTS `landlordRequire`;
CREATE TABLE `landlordRequire`(
  `luid` INT(11) NOT NULL,
  `lfid` INT(11) NOT NULL,
  `pets` BOOLEAN,           #允许（不允许）携带宠物
  `cooking` BOOLEAN,        #允许（不允许）做饭
  `meeting`BOOLEAN,         #允许（不允许）聚会
  `smoke` BOOLEAN,          #允许（不允许）吸烟
  `oldMan` BOOLEAN,         #适合（不适合）老人
  `children` BOOLEAN,       #适合（不适合）儿童
  `infant` BOOLEAN,         #适合（不适合）婴幼儿
  CONSTRAINT `lfid` FOREIGN KEY (`lfid`) REFERENCES `facility` (`fid`),
  CONSTRAINT `luid` FOREIGN KEY (`luid`) REFERENCES `users` (`uid`)
);



/**选择房间**/
DROP TABLE IF EXISTS `chooseroom`;
CREATE TABLE `chooseroom` (
  `id` INT(11) PRIMARY KEY NOT NULL auto_increment,
  `cuid` INT(11) NOT NULL,
  `checkIn` datetime default NULL,  #准备入住时间
  `checkOut` datetime default NULL, #准备退房时间 
  CONSTRAINT `cuid` FOREIGN KEY (`cuid`) REFERENCES `users` (`uid`)
);



/**订单中心**/
DROP TABLE IF EXISTS `roomItem`;
CREATE TABLE `roomItem`(
  `riid` INT PRIMARY KEY AUTO_INCREMENT,
  `riuid` INT(11),      #用户编号
  `rifid` INT(11),      #商品编号
  `count` INT,          #购买数量
  `isChecked` BOOLEAN,  #是否已勾选，确定购买
  CONSTRAINT `rifid` FOREIGN KEY (`rifid`) REFERENCES `facility` (`fid`),
  CONSTRAINT `riuid` FOREIGN KEY (`riuid`) REFERENCES `users` (`uid`)
);

/**用户订单**/
DROP TABLE IF EXISTS `roomOrder`;
CREATE TABLE `roomOrder`(
  `roid` INT PRIMARY KEY AUTO_INCREMENT,
  `rouid` INT(11),
  `rofid` INT(11),
  `status` INT,             #订单状态  1-等待付款  2-等待入住  3-已入住  4-已取消
  `homeCount` INT,              #订单数量
  `orderTime` datetime,      #下单时间
  `payTime` datetime,        #付款时间
  `joinTime` datetime,       #入住时间
  `leaveTime` datetime,       #离开时间
  CONSTRAINT `rofid` FOREIGN KEY (`rofid`) REFERENCES `facility` (`fid`),
  CONSTRAINT `rouid` FOREIGN KEY (`rouid`) REFERENCES `users` (`uid`)
)AUTO_INCREMENT=10000000;

/**房源图片路径**/
CREATE TABLE homePic(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  homeid INT,                 #房源编号
  imgUrl VARCHAR(128)             #图片路径
);
/**评论表**/
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment`(
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `fit` INT,  
  `content` VARCHAR(255),   #评论内容
  `toUid` INT               #评论用户id
);
/**回复表**/
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment`(
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `fit` INT,  
  `replyId` INT,            #回复目标id
  `content` VARCHAR(255),   #回复内容
  `fromUid` INT             #回复用户id
);

/*******************/
/******数据导入******/
/*******************/

/**房源类型**/
INSERT INTO houseType VALUES
(NULL,1),
(NULL,2),
(NULL,3);