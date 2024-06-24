<?php
try {
  $dbName = "interiorsteel";
  $user = "root";
  $password = "root";
  // $connect = new PDO("mysql:host=localhost;dbname=subneckgm2", "subneckgm2", "25Legansubn");
  $connect = new PDO("mysql:host=mysql;dbname={$dbName}", $user, $password);

  $received_data = json_decode(file_get_contents("php://input"), true);

  $result = [];

  if ($_GET['action'] === 'fetch-all') {

    $query = $_GET['query'] ?? "SELECT *
              FROM articles
              ORDER BY id DESC";

    $statement = $connect->query($query);

    while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {

      $result[] = $row;
    }

    echo json_encode($result);
  }
} catch (PDOException $e) {
  echo "Database error: " . $e->getMessage();
}
