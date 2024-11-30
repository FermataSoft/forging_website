<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Use this on server with .env file
/* require $_SERVER['DOCUMENT_ROOT'].'/vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable($_SERVER['DOCUMENT_ROOT']);
$dotenv->load(); */

require __DIR__ . '/plugins/PHPMailer-master/src/Exception.php';
require __DIR__ . '/plugins/PHPMailer-master/src/PHPMailer.php';
require __DIR__ . '/plugins/PHPMailer-master/src/SMTP.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', __DIR__ . '/plugins/PHPMailer-master/language/');
$mail->IsHTML(true);

$address_from = $_ENV['MAIL_ADDRESS_FROM'];
$address_to   = $_ENV['MAIL_ADDRESS_TO'];
$host         = $_ENV['MAIL_HOST'];
$username     = $_ENV['MAIL_USERNAME'];
$password     = $_ENV['MAIL_PASSWORD'];
$port         = $_ENV['MAIL_PORT'];

try {
    $mail->isSMTP();
    $mail->Host       = $host;
    $mail->SMTPAuth   = true;
    $mail->Username   = $username;
    $mail->Password   = $password;
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = $port;

    // От кого письмо
    $mail->setFrom($address_from, 'Интерьер Сталь');
    // Кому отправить
    $mail->addAddress($address_to);

    // Content
    $mail->isHTML(true);
    $mail->Subject = 'Интерьер Сталь [Форма обратной связи]';
    $body = "Данное письмо отправлено с сайта {$_SERVER['SERVER_NAME']}";

    if (trim(!empty($_POST['name']))) {
        $body .= '<p><strong>Имя:</strong> ' . $_POST['name'] . '</p>';
    }
    if (trim(!empty($_POST['email']))) {
        $body .= '<p><strong>E-mail:</strong> ' . $_POST['email'] . '</p>';
    }
    if (trim(!empty($_POST['subject']))) {
        $body .= '<p><strong>Тема:</strong> ' . $_POST['subject'] . '</p>';
    }
    if (trim(!empty($_POST['message']))) {
        $body .= '<p><strong>Сообщение:</strong> ' . $_POST['message'] . '</p>';
    }

    $mail->Body = $body;
    $mail->send();

    $message = 'Сообщение отправлено!';
} catch (Exception $e) {
    $message = 'Ошибка отправки';
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
