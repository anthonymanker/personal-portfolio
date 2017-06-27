$(document).ready(function() {
  
  //jQuery to collapse the navbar on scroll
  $(window).scroll(function() {
      if ($(".navbar").offset().top > 50) {
          $(".navbar-fixed-top").addClass("top-nav-collapse");
      } else {
          $(".navbar-fixed-top").removeClass("top-nav-collapse");
      }
  });

  //jQuery for page scrolling feature - requires jQuery Easing plugin
  $(function() {
      $('a.page-scroll').bind('click', function(event) {
          var $anchor = $(this);
          $('html, body').stop().animate({
              scrollTop: $($anchor.attr('href')).offset().top
          }, 1500, 'easeInOutExpo');
          event.preventDefault();
      });
  });

  //jQuery to highlight social buttons when the mouse hovers them
  $('.socials')
    .on('mouseenter', function() {
      $(this).css('background', '#E1E1E1')
    })
    .on('mouseleave', function() {
      $(this).css('background', 'transparent')
    });

});