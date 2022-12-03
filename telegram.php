<?php

/* https://api.telegram.org/bot5609776173:AAHqbmmmXY9-VDymzT1bKqDIn9t6U0T9Erw/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$token = "5609776173:AAHqbmmmXY9-VDymzT1bKqDIn9t6U0T9Erw";
$chat_id = "-717310466,";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
} else {
  echo "Error";
}
?>