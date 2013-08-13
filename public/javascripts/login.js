$('#login input [type="text"], #login input[type="password"]')
.focus(function() { 
if ($(this).val().toLowerCase() == "username" || $(this).val() == 'clara oswin oswald') {
  $(this).val('');
}});