// JavaScript Document
function onInfoFrameLoaded(){
	frames['info_area'].window.focus();
	var _ua = navigator.userAgent;
	if (_ua.indexOf('MHF-') == -1) {
		frames['info_area'].document.body.style.overflowX = 'hidden';
	}
}