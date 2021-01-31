function panelclockInit() {
	window.setTimeout(function() {panelClock()}, 3000)
	return '<div  id="panelClock" class="panelClock">00:00:00</div>';
}
function panelClock() {
	time = new Date();
	clock = time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds();
	document.getElementById('panelClock').innerHTML = clock;
	window.setTimeout(function() {panelClock()}, 1000)
}
//addHtml("<div class='panel' id='panel'></div>");