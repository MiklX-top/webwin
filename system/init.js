include("modules/modules.js");
include("system/gui.js");


function include(url) {
	var script = document.createElement('script');
	script.src = url;
	document.getElementsByTagName('head')[0].appendChild(script);
}
function addCssToDom(url) {
    style = document.createElement('link');
    style.rel   = 'stylesheet';
    style.type  = 'text/css';
    style.href  = url;
    document.head.appendChild(style);
}