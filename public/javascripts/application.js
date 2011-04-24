// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
$(document).ready(function(){

  $('#nav a').click(function(){
    var page = $(this).attr('href').replace(/^\//,'');
    if (page == '') return true; // tumblr feed js doesn't work with ajax

    var title = 'Missing Ships - ' + $(this).html();
    if (window.history && history.pushState) 
      window.history.pushState('hi mom!', title, '/'+page);
    document.title = title;

    $.ajax({
      url: page,
      data: {partial: true},
      success: function(data){
        $('#left').html(data);
      }
    });
    return false;
  });

});
