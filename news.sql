-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016-06-10 06:54:29
-- 服务器版本： 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `phplesson`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE IF NOT EXISTS `news` (
  `newsid` int(11) NOT NULL AUTO_INCREMENT,
  `newstitle` varchar(100) NOT NULL,
  `newsimg` text NOT NULL,
  `newscontent` text NOT NULL,
  `class` varchar(20) NOT NULL,
  `addtime` varchar(200) NOT NULL,
  PRIMARY KEY (`newsid`),
  KEY `newstitle` (`newstitle`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COMMENT='新闻表' AUTO_INCREMENT=192 ;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`newsid`, `newstitle`, `newsimg`, `newscontent`, `class`, `addtime`) VALUES
(143, '这是一条推荐新闻', 'http://img4.imgtn.bdimg.com/it/u=2069772251,887234171&fm=206&gp=0.jpg', '我买了预购，守望先锋今天压力测试了。', '推荐', '2016-05-03'),
(150, '魏则西事件', 'http://s1.jikexueyuan.com/common/images/logo_c8caff4.png', '“百度不死，纠纷未已”。', '推荐', '2016-05-03'),
(153, '魏则西事件', 'http://s1.jikexueyuan.com/common/images/logo_c8caff4.png', '“百度不死，纠纷未已”。', '本地', '2016-05-03'),
(155, '魏则西事件d', 'http://s1.jikexueyuan.com/common/images/logo_c8caff4.png', '''“百度不死，纠纷未已”。''d''''', '图片', '2016-05-03'),
(157, '魏则西事件%''''', 'http://s1.jikexueyuan.com/common/images/logo_c8caff4.png', '“百度不死，纠纷未已”。谁不信''''''''''''''''', '图片', '2016-05-03'),
(178, '第第三条推荐！ 炉石传说上古之神的低语上线啦！', 'http://www.sinaimg.cn/dy/slidenews/2_img/2016_23/789_1813955_409603.jpg', '嘿，小伙子们，看看谁来啦！古神的低语上线了', '百家', '2016-05-03'),
(179, '这是一条推荐新闻', 'http://img4.imgtn.bdimg.com/it/u=2069772251,887234171&fm=206&gp=0.jpg', '守望先锋今天压力测试了。我买了预购，但是要上班.', '本地', '2016-05-03'),
(183, '我是一个来试试的家伙', 'http://gimg1.bitautoimg.com/ResourceFiles/0/3/211/20160408105505718.jpg', '百家http://gimg1.bitautoimg.c', '百家', '2016-06-09'),
(187, '又是一条推荐新闻---暗黑3的第六赛季开始了！', 'http://s1.jikexueyuan.com/common/images/logo_c8caff4.png', '暗黑3第六赛季开始了。我开了个DH，刷刷刷。', '本地', '2016-05-01'),
(189, '这是一条推荐新闻', 'http://img4.imgtn.bdimg.com/it/u=2069772251,887234171&fm=206&gp=0.jpg', '我买了预购，守望先锋今天压力测试了。', '推荐', '2016-05-03');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
