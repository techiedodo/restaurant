$(document).ready(function(){
  var $lastPosition = 0;
  $(window).scroll(function(){
    // Check to see if mobile
    function isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    // If not mobile, then allow for disappearing nav
    if (!isMobile()) {
      $position = $(window).scrollTop();
      if ($position > $lastPosition) {
        $("nav").fadeOut();
      } else if ($lastPosition - $position > 5) {
        $("nav").fadeIn();
      }
      $lastPosition = $position;
      $('.collapse').css('display', 'none !important');
    }

    var wScroll = $(this).scrollTop();
    setTimeout(function(){
      if(wScroll > $('#main').offset().top+150){
        $('.food-item a').css('opacity', '1');
      };
      // alert('working');
    }, 950);
    if(wScroll > 250){
      $('nav').addClass('color-menu');
    } else {
      $('nav').removeClass('color-menu');
    }
  });
});
