var addPropertyLine = function() {
  $("#propertyList").html($("#propertyList").html()+'\n<span class="propline">elements.property(el, <b contenteditable="true">"[Property]"</b>, <b contenteditable="true">"[Value]"</b>)</span>');
}
var toggleElement = function(id) {
	// Utility function for the functionality/graphics function and the cloning line.
	$("#"+id+":visible").hide("fast"); 
  $("#"+id+":hidden").show("fast"); 
}


