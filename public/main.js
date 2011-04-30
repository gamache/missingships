// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
$(document).ready(function(){
  window.onpopstate = function(event) {
    if (event.state && event.state.title) {
      $('#left').html(event.state.html);
      document.title = event.state.title;
      $('#nav a').removeClass('active');
      $('#'+event.state.id).addClass('active');
    }
  };

  $('#nav a').click(function(){
    var page = $(this).attr('href').replace(/^\//,'');
    if (page == '') return true; // tumblr feed js doesn't work with ajax

    var name = $(this).html();
    var title = 'Missing Ships - ' + name;

    $.ajax({
      url: '/'+page,
      data: {partial: true},
      success: function(data){
        $('#left').html(data);
        $('#nav a').removeClass('active');
        $(this).addClass('active');
        document.title = title;
        if (window.history && window.history.pushState)
          window.history.pushState({ title: title, 
                                     html: data,
                                     id: 'nav_'+name },
                                   title, 
                                   '/'+page);
      }
    });

    return false;
  });

});
