var toggleComments = function() {
	var comments = document.getElementsByTagName("i");
	if(comments[0].style.visibility != "hidden") {
		for(var i=0; i<comments.length; i++) {
			comments[i].style.visibility = "hidden";
		}
	}
	else {
		for(var i=0; i<comments.length; i++) {
			comments[i].style.visibility = "visible";
		}
	}
};
var initEditable = function() {
	var editables = document.getElementsByTagName("b");
	for(var i=0; i<editables.length; i++) {
		editables[i].setAttribute("contenteditable", "true");
	}
};
var clearCode = function() {
	var codes = document.getElementsByClassName("code");
	for(var i=0; i<codes.length; i++) {
		codes[i].innerHTML = "[placeholder]";
	}
};
var chAllToName = function() {
	var name = document.getElementById("elname").innerHTML;
	console.log("Replacing all BCOL with "+ name);
	var editables = document.getElementsByTagName("b");
	for(var i=0; i<editables.length; i++) {
		if(editables[i].innerHTML.search("BCOL") != -1)
			editables[i].innerHTML = editables[i].innerHTML.replace("BCOL", name);
	}
	console.log("Replacing ended.");
};
var toggleUnoComments = function() {
	var comments = document.getElementsByTagName("i");
	for(var i=0; i<comments.length; i++) {
			if(comments[i].className != "uno")
				comments[i].className = "uno";
			else
				comments[i].className = "";
		}
};