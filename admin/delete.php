<?php
	header("Content-type:application/json;charset=utf-8");
	 error_reporting(E_ALL ^ E_DEPRECATED);
	// 	//选择数据库
	 require_once('connect.php');
	$mynewsid = $_GET['mynewsid'];
	$deletesql = "delete from news where newsid='$mynewsid'";
	if(mysql_query($deletesql)){
		echo "<script>alert('删除文章成功');</script>";
	}else{
		echo "<script>alert('删除文章失败');</script>";
	}
	?>