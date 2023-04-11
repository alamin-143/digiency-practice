var config = document.querySelector('.project-container');
var mixer = mixitup(config);

$(document).ready(function (){
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    $(window).on('scroll',function() {    
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
         $(".sticky").removeClass("sticky-menu");
        }else{
         $(".sticky").addClass("sticky-menu");
        }
       });
           //  for scroll up
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '<i class="fa-solid fa-arrow-up"></i>', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });

    // mobile menu 
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991"
      });

})