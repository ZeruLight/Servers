<?php

if (isset($_GET['key'])) {
	$platform = "00";
	// PS3 override stub
	if ($_SERVER['HTTP_HOST'] == 'ps3.zerulight.cc') {
		$platform = "51";
	}
	header(sprintf('Content-Disposition: inline; filename="MHFUP_%s.DAT"', $platform));
	header('Content-Length: '.filesize(sprintf('key%s.txt', $platform)));
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
