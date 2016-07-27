<?php
	header("Content-type:application/json;charset=utf-8");
	 error_reporting(E_ALL ^ E_DEPRECATED);
	// 	//选择数据库
	 require_once('connect.php');
	$newstitle=addslashes(htmlspecialchars($_GET['newstitle']));
	$newsimg=addslashes(htmlspecialchars($_GET['newsimg']));
	$newscontent=addslashes(htmlspecialchars($_GET['newscontent']));
	$newsclass=addslashes(htmlspecialchars($_GET['newsclass']));
	$newsaddtime=addslashes(htmlspecialchars($_GET['newsaddtime']));

	$sql="INSERT INTO `news`(`newstitle`, `newsimg`, `newscontent`, `class`,`addtime`) VALUES ('".$newstitle."','".$newsimg."','".$newscontent."','".$newsclass."','".$newsaddtime."')";

	$result=mysql_query($sql);
		
?>