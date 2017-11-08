/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document) {



  // To understand behaviors, see https://drupal.org/node/756722#behaviors
  Drupal.behaviors.my_custom_behavior = {
    attach: function (context, settings) {

      // Place your code here.

    }
  };

  $(document).ready(function(){

    // menu toggle behavior
    $('.toggle').on('click', function () {
      $('.nav-menu-div, .nav-group, #main-wrapper').toggleClass('toggled-on');
      $(this).toggleClass('fa-bars').toggleClass('fa-times');
    });


    // hide menu on scroll down and show on scroll up
    var lastScrollTop = 0;
    $(window).scroll(function(event){
      var st = $(this).scrollTop();
      if (st > lastScrollTop && st > 100){
        // downscroll code
        if (!$('.nav-group').hasClass('toggled-on')) {$('.nav-group').fadeOut(100);}
      } else {
        // upscroll code
        if (!$('.nav-group').hasClass('toggled-on')) {$('.nav-group').fadeIn(100);}
      }
      lastScrollTop = st;
    });


    // move top-fixed menu under toolbar if user logged in
    if ($('body').hasClass('logged-in')) {
      var toolbarHeight = $('div.toolbar').height();
      $(".nav-group").css({"top":toolbarHeight});
      // $(".messages").css({"marginTop":toolbarHeight});
    }

    // make main image 16:9
    var mainImgWidth = $(".mainImageContainer").width();
    $(".mainImageContainer").height(mainImgWidth/16*9);
  });

})(jQuery, Drupal, this, this.document);
