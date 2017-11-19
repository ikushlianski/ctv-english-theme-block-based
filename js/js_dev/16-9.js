(function ($, Drupal) {

  // To understand behaviors, see https://drupal.org/node/756722#behaviors
  Drupal.behaviors.my_custom_behavior = {
    attach: function (context, settings) {

      // Place your code here.

    }
  };

  $(document).ready(function(){
    // make related news' images 16:9
    $('.block').each(function(){
      let thisBlockImgWidth = $(this).find('img').first().width();
      $(this).find('img').each(function(item){
        $(this).height(thisBlockImgWidth/16*9);
      });
    });

    // make view items' images in taxonomy 16:9
    $('.page-taxonomy-term .views-field-field-image').each(function(){
      let thisViewImgWidth = $(this).find('img').first().width();
      $(this).find('img').each(function(item){
        $(this).height(thisViewImgWidth /16 * 9);
      });
    });

  });

})(jQuery, Drupal);
