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
      let thisBlockImgHeight = $(this).find('img').first().height();
      $(this).find('img').each(function(item){
        if ( !$(this).parents('.block').is("#block-views-latest-from-tourism-block") ) {
          if ($(this).width() == thisBlockImgWidth) {
            $(this).height(thisBlockImgWidth/16*9);
          } else {
            $(this).height($(this).width()/16*9);
          }
        } else {
          let thisBlockImgW = $(this).parents(".block").find('img').first().width();
          let thisBlockImgH = $(this).parents(".block").find('img').first().height();
          $(this).height(thisBlockImgH);
        }
      });
    });

    // make view items' images in taxonomy 16:9
    $('.page-taxonomy-term .view-taxonomy-term .views-field-field-image').each(function(){
      let thisViewImgWidth = $(this).find('img').first().width();
      $(this).find('img').each(function(item){
        $(this).height(thisViewImgWidth /16 * 9);
      });
    });

  });

})(jQuery, Drupal);
