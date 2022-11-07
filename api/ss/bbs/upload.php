<?php

if (!array_key_exists('img', $_FILES)) {
	throw new Exception('No file');
}

$discord_webhook_url = '';

$json_data = [
    'content' => '',
	'username' => 'BBS Bot',
    'file' => curl_file_create($_FILES['img']['tmp_name'], $_FILES['img']['type'], $_FILES['img']['name'])
];

$curl = curl_init($discord_webhook_url);
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_HTTPHEADER, array('Content-Type: multipart/form-data'));
curl_setopt($curl, CURLOPT_POSTFIELDS, $json_data);
curl_exec($curl);
curl_close($curl);

header('Content-Length: '.filesize('resp.txt'));
header('Connection: close');
header('Content-Type: text/xml; charset=UTF-8');

readfile('resp.txt');