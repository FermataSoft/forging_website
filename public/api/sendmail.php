<?php
// $_SERVER['DOCUMENT_ROOT'] . "/pathTo"
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/plugins/PHPMailer-master/src/Exception.php';
require __DIR__ . '/plugins/PHPMailer-master/src/PHPMailer.php';
require __DIR__ . '/plugins/PHPMailer-master/src/SMTP.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', __DIR__ . '/plugins/PHPMailer-master/language/');
$mail->IsHTML(true);

try {
    $mail->isSMTP();
    $mail->Host       = 'smtp.yandex.ru';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'subneck@yandex.by';
    $mail->Password   = 'MAIL_PASSWORD';
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;

    // От кого письмо
    $mail->setFrom('subneck@yandex.by', 'Интерьер Сталь');
    // Кому отправить
    $mail->addAddress('subneck@gmail.com');

    // Content
    $mail->isHTML(true);
    $mail->Subject = 'Интерьер Сталь [Форма обратной связи]';
    $body = 'Данное письмо отправлено с сайта interierstal.by';

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
