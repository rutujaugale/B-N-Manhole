<?php

	$name= $_POST['name'];
	$address =$_POST['address'];
	$phone= $_POST['phone'];
	$email= $_POST['email'];
	$password= $_POST['password'];
	$cpassword= $_POST['cpassword'];

	//connect db
	$conn = new mysqli('localhost','root','','bnmanhole');
	if($conn->connect_error){
		die('connection failed :'$conn->connect_error);
	}
	else{
		$stmt=$conn->prepare("insert into signup(name,address,phone,email,password,cpassword) values(?,?,?,?,?,?)");
		$stmt->bind_param("ssisss",$name, $address, $phone, $email, $password, $cpassword);
		$stmt->execute();
		echo"registration successfull...";
		$stmt->close();
		$conn->close();
	}

?>