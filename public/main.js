// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
$(document).ready(function(){
  window.onpopstate = function(event) {
    if (event.state && event.state.title) {
      $('#left').html(event.state.html);
      document.title = event.state.title;
    }
  };

  $('#nav a').click(function(){
    var page = $(this).attr('href').replace(/^\//,'');
    if (page == '') return true; // tumblr feed js doesn't work with ajax

    var title = 'Missing Ships - ' + $(this).html();

    $.ajax({
      url: '/'+page,
      data: {partial: true},
      success: function(data){
        $('#left').html(data);
        document.title = title;
        if (window.history && window.history.pushState)
          window.history.pushState({title: title, html: $('#left').html()},
                                   title, '/'+page);
      }
    });

    return false;
  });

});
