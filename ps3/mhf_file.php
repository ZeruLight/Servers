<?php

if (isset($_GET['key'])) {
	header('Content-Disposition: inline; filename="MHFUP_51.DAT"');
	header('Content-Length: ' . filesize('key.txt'));
	header('Connection: close');
	header('Content-Type: application/octet-stream');
	readfile('key.txt');
}

if (isset($_GET['chk']) || isset($_GET['chksha'])) {
	header('Content-Length: ' . filesize('chk.txt'));
	header('Connection: close');
	header('Content-Type: application/octet-stream');
	readfile('chk.txt');
}
