<?php
$method = $_SERVER['REQUEST_METHOD'];

$_POST = json_decode(file_get_contents("php://input"), true);

foreach ( $_POST as $key => $value ) {
    $message .= "
    <tr style='background-color: #f8f8f8;'>
      <td style='padding: 10px; border: #e2dddd 1px solid;'><b>$key</b></td>
      <td style='padding: 10px; border: #e2dddd 1px solid;'>$value</td>
    </tr>
    ";
}

$message = "<table style='width: 100%;'>$message</table>";


$headers = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type: text/html; charset=utf-8" . PHP_EOL .
'From: Coffee Machines for Rent <Почта@gmail.com>' . PHP_EOL .
'Reply-To: Почта@gmail.com' . PHP_EOL;


print mail('Ваша почта', 'Заказ с "Название"', $message, $headers );