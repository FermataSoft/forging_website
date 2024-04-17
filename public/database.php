<?php

$dbName = "interriorsteel.images";
$user = "root";
$password = "root";
// $connect = new PDO("mysql:host=localhost;dbname=***REMOVED***", "***REMOVED***", "***REMOVED***");
$connect = new PDO("mysql:host=localhost;dbname={$dbName}", $user, $password);

$received_data = json_decode(file_get_contents("php://input"), true);

$result = [];

if ($received_data->action === 'fetch-all' || $_GET['action'] === 'fetch-all') {

  if ($received_data->query) {
    $query = $received_data->query;
  } else {
    $query = "SELECT *
            FROM images
            ORDER BY id DESC";
  }

  $statement = $connect->query($query);

  while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {

    $result[] = $row;
  }

  echo json_encode($result);
}
