<?php

include ('micap.config.php');

try {
  $dbh = new PDO("mysql:host=$hostname;dbname=$dbname", $username, $password);

  $stmt = $dbh->prepare("SELECT * FROM micap");

  $stmt-> execute();

  $result = $stmt -> fetchAll();

  echo json_ensode($result);

?>
