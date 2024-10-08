<?php
// Use this on server with .env file
/* require $_SERVER['DOCUMENT_ROOT'].'/vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable($_SERVER['DOCUMENT_ROOT']);
$dotenv->load(); */

try {
  $dbName = $_ENV["DB_NAME"];
  $user = $_ENV["DB_USER"];
  $password = $_ENV["DB_PASSWORD"];
  $host = $_ENV["DB_HOST"];
  $connect = new PDO("mysql:host={$host};dbname={$dbName};charset=utf8", $user, $password);
  $received_data = json_decode(file_get_contents("php://input"), true);
  $result = [];
  $query;

  if (!empty($_GET['action']) && $_GET['action'] === 'fetch-all') {
    $query = "SELECT *
              FROM images
              ORDER BY id DESC";
  } else {
    if (empty($_GET['query'])) {
      echo 'Request error: query parameter "query" is empty!';
      return;
    } else {
      $query = $_GET['query'];
    }
  }

  $statement = $connect->query($query);

  while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {

    $result[] = $row;
  }

  echo json_encode($result);
} catch (PDOException $e) {
  echo "Database error: " . $e->getMessage();
}
