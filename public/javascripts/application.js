// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

$('#nav > li > a').click(function(){
  var page = $(this).attr('href');
  $.ajax({
    url: page,
    success: function(data){
      $('#left').html(data);
    }
  });
  return false;
});
