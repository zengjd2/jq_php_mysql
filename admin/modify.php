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
	$newsid=addslashes(htmlspecialchars($_GET['newsid']));
	// $sql="update news set newstitle=".$newstitle.", newsimg=".$newsimg.", newscontent=".$newscontent.", class=".$newsclass.",addtime=".$newsaddtime." where newid= '".$newid."'";
	 // $newstitle=$_GET['newstitle'];
	 // $newscontent=$_GET['newscontent'];
	 // $newsclass=$_GET['newsclass'];
	 // $newsaddtime=$_GET['newsaddtime'];
	 // $newsid=$_GET['newsid'];
	 $sql="update news set newstitle='$newstitle', newsimg='$newsimg',newscontent='$newscontent', class='$newsclass',addtime='$newsaddtime'where newsid= '$newsid'";
	$updatesql=mysql_query($sql);
	if(mysql_query($updatesql)){
		echo "<script>alert('修改文章成功');</script>";
	}else{
		echo "<script>alert('修改文章失败');</script>";
	}
		
?>