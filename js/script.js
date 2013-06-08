
var toggleComments = function () {
    // Hide or show comments
	$("i:visible").hide("fast"); 
  $("i:hidden").show("fast");
    
};
var getCode = function () {
	// get what has been written, also convert it to base64
  // also the only place I use jquery in <3
  // comments still aren't hidden!
	return btoa($("#fullcode:visible").text());
}
var initAll = function () {
  $("b").attr("contenteditable", "true");
};
var clearCode = function () {
  $(".code").html("[placeholder]");
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
	$("i").each(function(_,each) { 
    if ($(each).hasClass("uno")) 
      $(each).removeClass("uno"); 
    else 
      $(each).addClass("uno"); 
  });
};
var save = function() {
  // manual save, generates data and opens a new window with it. 
	window.open("data:text/plain;base64," + getCode());
}



toggleUnoComments(); 