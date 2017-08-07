$(document).ready(function() {
  $(".indicator").css({
    "background-color": "#11749E"
  });
  $(".nav-wrapper").css({
    padding: "15px"
  });

  $(".button-collapse").sideNav();
  $(".scroll_down").click(function() {

  });

  $(".feature-icon").hover(function() {
    $(this).toggleClass("z-depth-2");
  });

  $(".parallax").parallax();
});

  $(".collapsible").collapsible();
  $(".materialboxed").materialbox();

  $(".carousel.carousel-slider").carousel({ fullWidth: true });

  $('.member-box').hover(function(){
    $('.member-info').toggleClass('is-hovered')
  });
