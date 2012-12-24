/*global document */
var addPropertyLine = function () {
	var propList = document.getElementById("propertyList");
    var listElem = document.createElement("li");
    listElem.innerHTML = "elements.property(el, \"<b contenteditable="true">[Property]</b>\", \"[Value\")";
};

var toggleElement = function (elementid) {
    var d = document.getElementById(elementid);
    d.style.visibility = d.style.visibility === "hidden" ? "visible" : "hidden";
};