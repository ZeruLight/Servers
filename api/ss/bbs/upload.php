<?php

header('Content-Length: '.filesize('resp.txt'));
header('Connection: close');
header('Content-Type: text/xml; charset=UTF-8');
readfile('resp.txt');

$discord_webhook_url = "";

$json_data = [
    "content" => "",
    "file" => curl_file_create($_FILES["img"]["tmp_name"], $_FILES["img"]["type"], $_FILES["img"]["name"])
];

$data = array("content" => "", "username" => "hook", "files" => curl_file_create($_FILES["img"]["tmp_name"]));

$curl = curl_init($discord_webhook_url);
curl_setopt($curl, CURLOPT_POST, 1);
curl_setopt($curl, CURLOPT_HTTPHEADER, array('Content-Type: multipart/form-data'));
curl_setopt($curl, CURLOPT_POSTFIELDS, $json_data);
curl_exec($curl);