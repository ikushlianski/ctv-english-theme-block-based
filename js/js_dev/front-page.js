(function ($, Drupal) {

  // To understand behaviors, see https://drupal.org/node/756722#behaviors
  Drupal.behaviors.my_custom_behavior = {
    attach: function (context, settings) {

      // Place your code here.

    }
  };

  $(document).ready(function(){

    $(".itemLink").hover(function(){
      $(this).siblings(".itemTitle").children(".itemTitleText").css({"textDecoration":"underline"});
    });
    $(".itemLink").mouseleave(function(){
      $(this).siblings(".itemTitle").children(".itemTitleText").css({"textDecoration":"none"});
    });

    $(".fp-block .views-row").hover(function(){
      $(this).children(".views-field-title").find("a").css({"color":"#ef5223"});
    });
    $(".fp-block .views-row").mouseleave(function(){
      $(this).children(".views-field-title").find("a").css({"color":""});
    });

  });

})(jQuery, Drupal);
