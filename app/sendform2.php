<?php
//Сбор данных из полей формы. 
$name = $_POST['name'];// Берём данные из input c атрибутом name="name"
$phone = str_replace("+", "", $_POST['phone']);  // Берём данные из input c атрибутом name="phone"
$citizenship = $_POST['citizenship']; // Берём данные из input c атрибутом name="mail"
$age = $_POST['age']; // Берём данные из input c атрибутом name="mail"
$address = $_POST['address']; // Берём данные из input c атрибутом name="mail"
$position = $_POST['position']; // Берём данные из input c атрибутом name="mail"
$comment = $_POST['comment']; // Берём данные из input c атрибутом name="mail"

$token = "961615825:AAEoRf-UDkAFB7BXG1LKTC5-6C4BgG8LaYs"; // Тут пишем токен
$chat_id = "-367886163"; // Тут пишем ID группы, куда будут отправляться сообщения
$sitename = "mama-doma.by работа"; //Указываем название сайта

$arr = array(

  'С сайта: ' => $sitename,
  'Дата: ' => date('d-m-Y H:i:s'),
  'Имя: ' => $name,
  'Телефон: %2B' => $phone,
  'Гражданство: ' => $citizenship,
  'Возраст: ' => $age,
  'Адрес: ' => $address,
  'Должность: ' => $position,
  'Комментарий: ' => $comment,

);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

?>