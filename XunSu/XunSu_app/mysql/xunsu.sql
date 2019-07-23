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
  `remark` VARCHAR(100) default NULL,         #介绍
  `ID_number` VARCHAR(20) default NULL       #证件号
);

/**插入数据**/



/**房源信息**/
DROP TABLE IF EXISTS `leaseroom`;
CREATE TABLE `leaseroom` (
  `lid` INT(11) PRIMARY KEY auto_increment, 
  `uid` INT(11) default NULL,               #客户编号   
  `time` DATETIME default NULL,             #发布时间
  `title` VARCHAR(50) default '',           #标题
  `describe` VARCHAR(500) default NULL,     #房源描述
  `price` FLOAT default NULL,               #价格
  `holidayPrice` FLOAT default NULL,        #节假日价格
  `img` VARCHAR(500) default '',            #图片
  `province` VARCHAR(20) default NULL,      #省
  `city` VARCHAR(20) default NULL,          #市
  `houseDistrict` VARCHAR(20) default NULL, #县
  `houseStreet` VARCHAR(20) default NULL,   #街道
  `address` VARCHAR(100) default '',        #位置
  `htType` VARCHAR(10) default NULL,        #租房类型（1-整套出租，2-单间出租，3-合住房间）  
  `tenant` INT(3) default NULL,             #房客人数（宜住几人）
  `bedroom` INT(3) default NULL,            #房源户型（卧室个数）
  `bed` INT(3) default NULL,                #床个数（共几张）
  `bedSize` VARCHAR(10) default NULL,       #床大小（大床，小床）
  `toilet`  VARCHAR(10) default NULL,       #true-独卫 false-公卫
  `area` VARCHAR(10) default NULL,          #房屋面积
  CONSTRAINT `uid` FOREIGN KEY (`uid`) REFERENCES `users` (`uid`)
);

/**插入数据**/
-- INSERT INTO `leaseroom` VALUES ('30', '24', '25', '1', '2013-10-21 18:18:10', '天上人间','天上人间房源' '99',  'upload/0743c74fba660e2099d6d03e87ed8db3.jpg', '郑州市二七区南区', '郑州市二七区南区  A栋15楼');

/**配套设施**/
DROP TABLE IF EXISTS `facility`;
CREATE TABLE `facility`(
  `faid` INT(11) PRIMARY KEY auto_increment, 
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
  `waterDispenser` BOOLEAN, #饮水机
  `bathtub` BOOLEAN,       #浴缸
  `centralHeating` BOOLEAN, #暖气
  `airport` BOOLEAN,        #接机服务
  `baggage` BOOLEAN,         #行李寄存  
  `wakeup` BOOLEAN,        #叫醒服务   
  `monotype` BOOLEAN,       #影拓服务  
  `orderfood` BOOLEAN,     #叫餐服务       
  `wash` BOOLEAN,          #洗衣服务
   CONSTRAINT `fhtId` FOREIGN KEY (`fhtid`) REFERENCES `leaseroom` (`lid`)
);

/**预定须知**/
DROP TABLE IF EXISTS `needKnow`;
CREATE TABLE `needKnow`(
  `nid` INT(11) PRIMARY KEY auto_increment, 
  `fid` int(11) NOT NULL,
  `checkTime` INT NOT NULL,     #退订时是否宽松  1--宽松  2--适中  3--严格
  `minimumDay` INT NOT NULL,    #最少入住时间
  `pets` BOOLEAN,           #允许（不允许）携带宠物
  `cooking` BOOLEAN,        #允许（不允许）做饭
  `meeting`BOOLEAN,         #允许（不允许）聚会
  `smoke` BOOLEAN,          #允许（不允许）吸烟
  `oldMan` BOOLEAN,         #适合（不适合）老人
  `children` BOOLEAN,       #适合（不适合）儿童
  `infant` BOOLEAN,         #适合（不适合）婴幼儿
  CONSTRAINT `fid` FOREIGN KEY (`fid`) REFERENCES `leaseroom` (`lid`)
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
  `count` INT,          #购买数量
  `isChecked` BOOLEAN,  #是否已勾选，确定购买
  CONSTRAINT `riuid` FOREIGN KEY (`riuid`) REFERENCES `users` (`uid`)
);

/**用户订单**/
DROP TABLE IF EXISTS `roomOrder`;
CREATE TABLE `roomOrder`(
  `roid` INT PRIMARY KEY AUTO_INCREMENT,
  `rouid` INT(11),
  `status` INT,              #订单状态  1-等待付款  2-等待入住  3-已入住  4-已取消
  `homeCount` INT,           #订单数量
  `orderTime` datetime,      #下单时间
  `payTime` datetime,        #付款时间
  `joinTime` datetime,       #入住时间
  `leaveTime` datetime,      #离开时间
  CONSTRAINT `rouid` FOREIGN KEY (`rouid`) REFERENCES `users` (`uid`)
)AUTO_INCREMENT=10000000;

/**房源图片路径**/
CREATE TABLE homePic(
  `hid` INT(11) PRIMARY KEY auto_increment, 
  `homeid` INT,                 #房源编号
  `imgUrl` VARCHAR(128),             #图片路径
  FOREIGN KEY (`homeid`) REFERENCES `leaseroom` (`lid`)
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
INSERT INTO `users` (`uid`, `uname`, `upwd`, `phone`, `email`, `user_name`, `avatar`, `gender`, `remark`, `ID_number`) VALUES (NULL, '1', '111111', '3123131313', NULL, '1233', NULL, NULL, NULL, NULL);
INSERT INTO `users` (`uid`, `uname`, `upwd`, `phone`, `email`, `user_name`, `avatar`, `gender`, `remark`, `ID_number`) VALUES (NULL, '17622222222', '111111', '17622222222', NULL, '小红帽', '/images/avatar/1563471178300.jpeg', NULL, NULL, '610423199803061974');
INSERT INTO `users` (`uid`, `uname`, `upwd`, `phone`, `email`, `user_name`, `avatar`, `gender`, `remark`, `ID_number`) VALUES (NULL, '17622222222', '111111', '17622222222', NULL, '小红帽', '/images/avatar/1563471178300.jpeg', NULL, NULL, '610423199803061974');



INSERT INTO `leaseroom`  VALUES (NULL, '1', '2019-07-04 00:00:00', 'Stey 共享居住空间｢胡同里的设计酒店Studio｣步行可达故宫&王府井,适合差旅､年轻旅行者', '你好,欢迎回家!-王府井不仅是一个由先锋设计师打造的精品酒店,更是你旅途中的家,一个充满多元与活力的社区｡', '780', '780', '', '北京市','北京市','海淀区','王府井','王府井', '单间出租', '2', '1', '1','双人床', '独卫', '15');
INSERT INTO `leaseroom`VALUES (NULL, '1', '2019-02-03 00:00:00', '【桃可了Cola】茶室主题民宿 地铁口200米投影仪独立小院,地铁一站直达五四广场及各大景点', '这间房子的前身是一个茶室,位于一个幽静巷深的老房子一楼一室一厅带一个小院(房客享用整个房源)木板小院与四周的草木林给您呼唤出内心最深处的惬意平和,茶室现在升级搬去别的地方,于是就有了“茶居”｡房子的主题围绕茶文化所铺设,落地玻璃房的院子,在阳台晒着太阳,喝着茶再惬意不过了｡', '650', '650', '', '北京市','北京市','海淀区','王府井','王府井', '单间出租', '3', '1', '1', '双人床','独卫', '15');
INSERT INTO `leaseroom` VALUES 
(NULL, '3', '2019-02-03 00:00:00', '【奕25】地铁房,万达,五四广场,栈桥,八大关,啤酒博物馆,小鱼山,海底世界,奥帆中心,送旅行攻略', '距地铁站500米,可乘地铁游览青岛所有景点:五四广场,灯光秀,奥帆中心,海水浴场,极地海洋世界,八大关风景区,海底世界,崂山风景区,小鱼山,栈桥,啤酒博物馆,海军博物馆,火车站,火车北站等｡', '234', '234', '', '山东省','青岛市','市北区','新疆路','敦化路街道', '整套公寓', '3', '1', '1', '单人床','独卫', '60');



-- 设施
INSERT INTO `facility` VALUES (NULL,'1', '1', '1', '1', '1', '1', '0', '0', '0', '0', '1', '0', '0', '0', '1', '1', '1', '1','1','0','0','1','1','1');
INSERT INTO `facility` VALUES (NULL,'1', '2', '1', '1', '1', '1', '0', '0', '0', '0', '1', '0', '0', '0', '1', '1', '1', '1','1','0','0','1','1','1');
INSERT INTO `facility` VALUES (NULL,'1', '2', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0', '0', '0', '1', '1', '1', '1','1','0','0','1','1','1');
INSERT INTO `facility` VALUES (NULL,'3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0', '0', '0', '1', '1', '1', '1','1','0','0','1','1','1');
-- 房东要求

INSERT INTO `needKnow` VALUES (NULL,'1','2','1', '1', '1', '0', '1', '1', '0', '0');
INSERT INTO `needKnow` VALUES (NULL,'2','2','2', '1', '1', '0', '1', '1', '0', '0');
INSERT INTO `needKnow` VALUES (NULL,'2','2','3', '1', '1', '1', '1', '1', '0', '0');
INSERT INTO `needKnow` VALUES (NULL,'2','2','4', '1', '1', '1', '1', '1', '0', '0');


INSERT INTO `homepic` VALUES (NULL, '1', '/images/house/1a8cad81-5292-4d41-bb3d-68c67c32483b.jpg');
INSERT INTO `homepic` VALUES (NULL, '1', '/images/house/1efdaad6-dbe5-4ed9-94ef-1ce95214b3ec.jpg');
INSERT INTO `homepic` VALUES (NULL, '1', '/images/house/7d179cec-d038-40a5-ad42-c7cac8dd51f5.jpg');
INSERT INTO `homepic` VALUES (NULL, '1', '/images/house/4d5fd8ae-9622-440e-86cf-e774d7334363.jpg');
INSERT INTO `homepic` VALUES (NULL, '1', '/images/house/55ee0693-10c2-4f7b-b087-552119be4a80.jpg');
INSERT INTO `homepic` VALUES (NULL, '1', '/images/house/56cf291b-2f0a-4e84-b626-42f9c2bae321.jpg');
INSERT INTO `homepic` VALUES (NULL, '1', '/images/house/065d6932-54d6-4b41-b890-972061636d3c.jpg');
INSERT INTO `homepic` VALUES (NULL, '1', '/images/house/86fcf2e6-f0e5-41d6-ad23-3090d71af137.jpg');
INSERT INTO `homepic` VALUES (NULL, '1', '/images/house/769070ea-99f0-4ec0-a916-b444ef2ebcce.jpg');
INSERT INTO `homepic` VALUES (NULL, '1', '/images/house/b9a5feae-b7ce-4aee-b4bb-7416bd7a8521.jpg');
INSERT INTO `homepic` VALUES (NULL, '1', '/images/house/a76d63a1-d98e-4fff-9b94-e19f99efb3e6.jpg');
INSERT INTO `homepic` VALUES (NULL, '1', '/images/house/b159d3bf-7afc-4076-a7f9-dbd31cfc9a37.jpg');
INSERT INTO `homepic` VALUES (NULL, '1', '/images/house/c42e5398-0117-46fa-8436-33533b178763.jpg');
INSERT INTO `homepic` VALUES (NULL, '1', '/images/house/d5794be2-decd-4441-925b-57f98ed5af0f.jpg');
INSERT INTO `homepic` VALUES (NULL, '1', '/images/house/e57be7fb-dd2b-4a23-81b9-717b9b4764f1.jpg');
INSERT INTO `homepic` VALUES (NULL, '1', '/images/house/e69acad3-482f-4d82-bf9c-cc63a00ba0eb.jpg');
INSERT INTO `homepic` VALUES (NULL, '2', '/images/house/a52dc8b1-e8b8-47cf-8424-4b4ae6b8ddc8.jpg');
INSERT INTO `homepic` VALUES (NULL, '2', '/images/house/9cfc2dd3-7125-4c02-b613-658da6256e54.jpg');
INSERT INTO `homepic` VALUES (NULL, '2', '/images/house/17391c61-419e-4eb7-8ab6-3e885b7835c6.jpg');
INSERT INTO `homepic` VALUES (NULL, '2', '/images/house/30af9c24-ed64-453b-9b90-b4b6091d3ce5.jpg');
INSERT INTO `homepic` VALUES (NULL, '2', '/images/house/77af0b03-0105-4fc7-ac20-9985eaf2897d.jpg');
INSERT INTO `homepic` VALUES (NULL, '2', '/images/house/a012fd26-d7fd-430e-aa2f-32126a735fab.jpg');
INSERT INTO `homepic` VALUES (NULL, '2', '/images/house/aa33a222-6924-4d75-8bc4-c2523169d385.jpg');
INSERT INTO `homepic` VALUES (NULL, '2', '/images/house/b5f353e7-0330-4747-bc3b-b6219bc472f4.jpg');
INSERT INTO `homepic` VALUES (NULL, '2', '/images/house/f2b12504-f3ef-476d-8991-34e2eec2d289.jpg');
INSERT INTO `homepic` VALUES (NULL, '2', '/images/house/1352ae78-4763-4c29-a263-0bf23d821d65.jpg');
INSERT INTO `homepic` VALUES (NULL, '2', '/images/house/04b38ad8-e0ce-4739-ad79-2c1082a15751.jpg');
INSERT INTO `homepic` VALUES (NULL, '2', '/images/house/274e1994-d77a-4d89-b007-8f426998caea.jpg');
INSERT INTO `homepic` VALUES (NULL, '2', '/images/house/7df78041-24fd-4f2f-9d54-604fcc767c74.jpg');
INSERT INTO `homepic` VALUES (NULL, '3', '/images/house/dd91d52a-90a5-437f-8ab7-a154af864485.jpg');
INSERT INTO `homepic` VALUES (NULL, '3', '/images/house/003a8ada-ca4a-4cb1-b5db-d1a33873527d.jpg');
INSERT INTO `homepic` VALUES (NULL, '3', '/images/house/2f53c37c-5576-430c-91ce-5d7fbf9f837c.jpg');
INSERT INTO `homepic` VALUES (NULL, '3', '/images/house/625759bf-81d2-425c-8af8-14a0aeec21b1.jpg');
INSERT INTO `homepic` VALUES (NULL, '3', '/images/house/122db68c-9034-407e-b3f8-14046135170f.jpg');
INSERT INTO `homepic` VALUES (NULL, '3', '/images/house/75c258f3-cac2-4118-aac9-5c6809a640a7.jpg');
