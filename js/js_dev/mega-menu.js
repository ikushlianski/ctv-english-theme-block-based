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
(function ($, Drupal) {

  $(document).ready(function(){

    // initially, reposition the submenu blocks to have absolute position
    // let navMenuDivPosition = $(".nav-menu-div").offset();
    // let subMenuBlockTop = navMenuDivPosition.top;
    // let subMenuBlockLeft = navMenuDivPosition.left;
    // let navMenuDivHeight = $(".nav-menu-div").height();
    // $(".menu-attach-block-wrapper").css({top:`${navMenuDivPosition.top + navMenuDivHeight}px`, left: `${navMenuDivPosition.left}px`});

    // TODO: on scroll, resize to fit .nav-menu-div

    var timer;

    $("a.attached-block").on("mouseenter", function() {
      // clearTimeout(timer);
      openSubmenu();

      let thisBlockImgWidth = $(this).siblings(".menu-attach-block-wrapper").children(".block").find('img').first().width();
      $(this).siblings(".menu-attach-block-wrapper").children(".block").find('img').first().height(thisBlockImgWidth/16*9);
      let thisBlockImgHeight = $(this).siblings(".menu-attach-block-wrapper").children(".block").find('img').first().height();

      $(this).siblings(".menu-attach-block-wrapper").children(".block").find('img').each(function(item){
        $(this).height(thisBlockImgWidth/16*9);
      });
      // console.log("timer cleared on attached-block");
    });
    // .on("mouseleave", function() {
    //     timer = setTimeout(
    //       closeSubmenu
    //     , 1000);
    // });

    $(".menu-attach-block-wrapper > .block ")
    // .on("mouseenter", function() {
    //   clearTimeout(timer);
    //   //console.log("timer cleared on menu-attach-block-wrapper");
    //   openSubmenu();
    // });
    .on("mouseleave", function() {
      //console.log("mouse leaving .menu-attach-block-wrapper .block");

      closeSubmenu();
    });


    function openSubmenu() {
      $(".menu-attach-block-wrapper").addClass("open");
      $("#main-wrapper").css("filter", "brightness(0.5)");
    }
    function closeSubmenu() {
      $(".menu-attach-block-wrapper").removeClass("open");
      $("#main-wrapper").css("filter", "brightness(1)");
    }

    // var timer;
    // // on hover, show the respective menu
    // $(".attached-block").hover(function(){
    //   if( $(window).width() > 767 ) {
    //     clearTimeout(timer);
    //     $(this).find('.menu-attach-block-wrapper .block').fadeIn(100);
    //   }
    // });
    //
    // $(".attached-block").mouseleave(function(){
    //   if( $(window).width() > 767 ) {
    //     timer = setTimeout(function(){
    //       $(this).find('.menu-attach-block-wrapper .block').fadeOut(100);
    //     }, 500);
    //     timer();
    //   }
    // });

  });

})(jQuery, Drupal);
