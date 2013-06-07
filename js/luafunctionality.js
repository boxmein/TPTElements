var addPropertyLine = function() {
	// Adds one of those silly lines (damn lines and their silliness...)
	var g = document.getElementById("propertyList");
	g.innerHTML += '\nelements.property(el, "<b contenteditable="true">[Property]</b>", "<b contenteditable="true">[Value]</b>") ';
  // Note I can't remove them tho, unless...
}
var toggleElement = function(id) {
	// Utility function for the functionality/graphics function and the cloning line.
	document.getElementById(id).style.display = 
	document.getElementById(id).style.display == "none" ? "block" : "none";
}