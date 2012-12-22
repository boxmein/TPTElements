var addPropertyLine = function () {
    'use strict';
    // Adds another property-setting line
	var g = document.getElementById("propertyList");
	g.innerHTML += "\nelements.property(el, \"<b contenteditable=\"true\">[Property]</b>\", \"<b>[Value]</b>\") ";
	g.appendChild(g);
};

var toggleElement = function (elementid) {
    var d = document.getElementById(elementid);
    d.style.visibility = d.style.visibility=="hidden" ? "visible" : "hidden";
};