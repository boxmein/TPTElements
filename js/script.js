/*global document, window*/
var toggleComments = function () {
    // Hide or show comments
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
var initAll = function () {
    // Make content boxes editable
	var editables = document.getElementsByTagName("b");
	for(var i=0; i<editables.length; i++) {
		editables[i].setAttribute("contenteditable", "true");
	}
	toggleUnoComments(); // Make comments dark at the start
};
var clearCode = function () {
    // Clear code boxes below
	var codes = document.getElementsByClassName("code");
	for(var i=0; i<codes.length; i++) {
		codes[i].innerHTML = "[placeholder]";
	}
};
var chAllToName = function() {
	var name = document.getElementById("elname").innerHTML;
	var editables = document.getElementsByTagName("b");
	for(var i=0; i<editables.length; i++) {
		if(editables[i].innerHTML.search("BCOL") != -1)
			editables[i].innerHTML = editables[i].innerHTML.replace("BCOL", name);
	}
};
var toggleUnoComments = function() {
	var comments = document.getElementsByTagName("i");
    if(comments[0].className != "uno") {
        for(var i=0; i<comments.length; i++) {
				comments[i].className = "uno";
        }
    }
    else if(comments[0].className == "uno") {
        for(var i=0; i<comments.length; i++) {
				comments[i].className = "";
        }
    }
    
};