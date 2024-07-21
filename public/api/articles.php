<?php
try {
  $dbName = getenv("DB_NAME");
  $user = getenv("DB_USER");
  $password = getenv("DB_PASSWORD");
  echo $password;
  $host = getenv("DB_HOST");
  $connect = new PDO("mysql:host={$host};dbname={$dbName};charset=utf8", $user, $password);
  $received_data = json_decode(file_get_contents("php://input"), true);
  $result = [];

  if (!empty($_GET['action']) && $_GET['action'] === 'fetch-all') {
    $query = "SELECT *
              FROM articles
              ORDER BY id DESC";
  }

  if (empty($_GET['query'])) {
    echo 'Request error: query parameter "query" is empty!';
  } else {
    $query = $_GET['query'];
  }

  $statement = $connect->query($query);

  while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {

    $result[] = $row;
  }

  echo json_encode($result);
} catch (PDOException $e) {
  echo "Database error: " . $e->getMessage();
}
