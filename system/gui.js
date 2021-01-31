document.documentElement.innerHTML = "";


function addHtml(html) {
	document.documentElement.innerHTML += html;
};
function addToPanel(html) {
	document.getElementById('panel').innerHTML += html;
};
var guiPanelInitFuncs = [];
for( i = 0; i < modules.length; i++) {
	if(modules[i]["type"] == 'fullScreen') {
		include("modules/" + modules[i]["name"] + "/script.js");
		addCssToDom("modules/" + modules[i]["name"] + "/style.css");
	}
	else if(modules[i]["type"] == 'panel') {
		
		include("modules/" + modules[i]["name"] + "/script.js");
		addCssToDom("modules/" + modules[i]["name"] + "/style.css");
		//document.addEventListener('keydown', function() {
			guiPanelInitFuncs.push('' + modules[i]["name"] + 'Init()');
		//});
	}
};
window.setTimeout(function() {
	for( i = 0; i < guiPanelInitFuncs.length; i++) {
		addToPanel(eval(guiPanelInitFuncs[i]));		
	}
},3000);