<?php
	header("Content-type:application/json;charset=utf-8");
	 error_reporting(E_ALL ^ E_DEPRECATED);
	// 	//选择数据库
	 require_once('connect.php');
	  	$newsclass = $_GET['class'];
	  $sql="select * from news where class='".$newsclass."'";
	 $result=mysql_query($sql);
	  $arr=array();
	 while($row = mysql_fetch_assoc($result))
	  {array_push($arr,array("newstitle"=>$row['newstitle'],"newsimg"=>$row['newsimg'],"newscontent"=>$row['newscontent'],"newsaddtime"=>$row['addtime'],"newsid"=>$row['newsid'],"newsclass"=>$row['class']));
	 };
	echo json_encode($arr);
		
?>