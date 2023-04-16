<?php

if (isset($_GET['key'])) {
	$platform = "00";
	if ($_SERVER['HTTP_HOST'] == 'srv-mhf-ps3.capcom-networks.jp') {
		$platform = "51";
	}
	header(sprintf('Content-Disposition: inline; filename="MHFUP_%s.DAT"', $platform));
	header('Content-Length: '.filesize('key.txt'));
	header('Connection: close');
	header('Content-Type: application/octet-stream');
	readfile(sprintf('key%s.txt', $platform));
}

if (isset($_GET['chk'])||isset($_GET['chksha'])) {
	header('Content-Length: '.filesize('chk.txt'));
	header('Connection: close');
	header('Content-Type: application/octet-stream');
	readfile('chk.txt');
}
