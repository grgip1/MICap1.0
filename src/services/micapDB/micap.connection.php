<?php

include ('micap.config.php');

$user= $_POST['username'];
$pwd = $_POST['password']

try {
  $dbh = new PDO("mysql:host=$hostname;dbname=$dbname", $username, $password);

  $stmt = $dbh->prepare("SELECT staff.* FROM staff, credential WHERE staff.staffID = credential.staffID AND credential.hashed_password LIKE sha(:password) AND staff.username=:username");

?>
