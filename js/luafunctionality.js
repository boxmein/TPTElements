var addPropertyLine = function() {
	var g = document.getElementById("propertyList");
	g.innerHTML += "\nelements.property(el, \"<b>[Property]</b>\", \"<b>[Value]</b>\") ";
}
var toggleElement = function(id) {
	document.getElementById(id).style.visibility = 
	document.getElementById(id).style.visibility == "visible" ? "hidden" : "visible";
}