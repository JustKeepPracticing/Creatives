$(document).ready(function() {
  $(".indicator").css({
    "background-color": "#11749E"
  });
  $(".nav-wrapper").css({
    padding: "15px"
  });

  $(".button-collapse").sideNav();

  $(".scroll_down").on('click',function() {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $("#target").offset().top
    }, 2000);
  });

  });

  $(".feature-icon").hover(function() {
    $(this).toggleClass("z-depth-2");
  });

  $(".parallax").parallax();

  $(".collapsible").collapsible();
  $(".materialboxed").materialbox();

  $(".carousel.carousel-slider").carousel({ fullWidth: true });

  $('.member-box').hover(function(){
    $(this).find('.member-info').toggleClass('is-hovered')
  });
