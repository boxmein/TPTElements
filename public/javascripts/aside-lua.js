
$("#addprop").click(function() { 
  $("#propertyList").append($('<li class="propline"><span onclick="$(this).parent().remove()" class="close">[X]</span> elements.property(el, "<b>Name</b>", "<b>AWSM</b>")</li>').find('b').attr('contentEditable', 'true').end());
});

$("#tclone").click(function() {$("#cloneToggle").toggle('fast');});
$("#tgraphics").click(function() {$("#graphicsFunc").toggle('fast');});
$("#tupdate").click(function() {$("#updateFunc").toggle('fast');});
$("#tmodloader").click(function() {$("#cracker64").toggle('fast');});

getCode = function () {
  // without this you can only save once per refresh
  $("#codetemp").remove();
  var g; 
  $(document.body).append((g = $('<div id="codetemp" style="display: none">'+$('#code').html()+'</div>')));

  // remove comments
  g.find("i").remove(); 

  // special togglable elements
  if ($("#graphicsFunc").is(":hidden"))
    g.find("#graphicsFunc").remove(); 
  if ($("#updateFunc").is(":hidden"))
    g.find("#updateFunc").remove(); 
  if ($("#cracker64").is(":hidden"))
    g.find("#cracker64").remove(); 


  return btoa(g.text().replace(/\[X\]/g, "\n"));
};
