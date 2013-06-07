
var toggleComments = function () {
    // Hide or show comments
	var comments = document.getElementsByTagName("i");
	// <i></i> is now a designated comment
	if(comments[0].style.display != "none") {
		for(var i=0; i<comments.length; i++) {
			comments[i].style.display = "none";
		}
	}
	else {
		for(var i=0; i<comments.length; i++) {
			comments[i].style.display = "inline";
		}
	}
    
};
var getCode = function () {
	// get what has been written, also convert it to base64
	return btoa(document.getElementById("fullcode").textContent);
}
var initAll = function () {
  // Make <b>'s editable
	var editables = document.getElementsByTagName("b");
	for(var i=0; i<editables.length; i++) {
		editables[i].setAttribute("contenteditable", "true");
	}
};
var clearCode = function () {
  // Clear the source code boxes with their example code
	var codes = document.getElementsByClassName("code");
	for(var i=0; i<codes.length; i++) {
		codes[i].innerHTML = "[placeholder]";
	}
};
var chAllToName = function() {
	// Change all of the <b></b> s' contents to BCOL (where it used to be BCOL)
	var name = document.getElementById("elname").innerHTML;
	var editables = document.getElementsByTagName("b");
	for(var i=0; i<editables.length; i++) {
		if(editables[i].innerHTML.search("BCOL") != -1)
			editables[i].innerHTML = editables[i].innerHTML.replace("BCOL", name);
	}
};
var toggleUnoComments = function() {
	// uno = un-obstructive
	// those comments are meant to not stab you in the eye
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
var save = function() {
  // manual save, generates data and opens a new window with it. 
	window.open("data:text/plain;base64," + getCode());
}



toggleUnoComments(); 