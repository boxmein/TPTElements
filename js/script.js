
var toggleComments = function () {
    // Hide or show comments
	$("i:visible").hide("fast"); 
  $("i:hidden").show("fast");
    
};
var getCode = function () {
	// get what has been written, also convert it to base64
  // also the only place I use jquery in <3
  // comments still aren't hidden!
  $(document.body).append($('<div id="codetemp" style="display: none">'+$('#fullcode').html()+'</div>'));
	var g = $("#codetemp"); 
  g.find("i").remove(); 
  return btoa(g.text());
};

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

var save = function() {
  // manual save, generates data and opens a new window with it. 
	window.open("data:text/plain;base64," + getCode());
};



toggleUnoComments(); 