<?php
//Сбор данных из полей формы. 
$name = $_POST['name'];// Берём данные из input c атрибутом name="name"
$time = $_POST['time'];// Берём данные из input c атрибутом name="name"
$select = $_POST['selectRestoran'];// Берём данные из input c атрибутом name="name"
$phone = str_replace("+", "", $_POST['phone']);  // Берём данные из input c атрибутом name="phone"
$feedback = $_POST['feedback']; // Берём данные из input c атрибутом name="mail"

$token = "961615825:AAEoRf-UDkAFB7BXG1LKTC5-6C4BgG8LaYs"; // Тут пишем токен
$chat_id = "-1001413646466"; // Тут пишем ID группы, куда будут отправляться сообщения
$sitename = "mama-doma.by отзыв"; //Указываем название сайта

$arr = array(
  'Дата: ' => date('d-m-Y H:i:s'),
  'Имя: ' => $name,
  'Дата и время посещения: ' => $time,
  'Выбор ресторана: ' => $select,
  'Телефон: %2B' => $phone,
  'Отзыв: ' => $feedback
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$msg="
Имя: $name
Дата и время посещения: $time
Выбор ресторана: $select
Телефон: $phone
Отзыв: $feedback";

mail("mamadomainfo@gmail.com", "Отзывы с сайта mamadoma.by", $msg, "From: mamadomainfo@gmail.com");

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

?>