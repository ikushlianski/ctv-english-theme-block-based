(function ($, Drupal) {


  $(document).ready(function(){

    let blocksToExcludeFrom16_9 = [
      "block-views-bc4d82ca41b3690bfc18d1f53c06d20c",
      "block-views-editor-s-picks-block"
    ];

    // make related news' images 16:9
    $('.block').each(function(){

      let currentElemId = $(this).attr("id");

      if ( ! blocksToExcludeFrom16_9.includes(currentElemId) ) {
        let thisBlockImgWidth = $(this).find('img').first().width();
        $(this).find('img').first().height(thisBlockImgWidth/16*9);
        let thisBlockImgHeight = $(this).find('img').first().height();

        $(this).find('img').each(function(item){
          if ($(this).width() == thisBlockImgWidth) {
            $(this).height(thisBlockImgWidth/16*9);
          } else {
            $(this).width(thisBlockImgWidth);
            $(this).height($(this).width()/16*9);
          }
        });
      } else {
        let thisBlockImgWidth = $(this).find('img').first().width();
        let thisBlockImgHeight = $(this).find('img').first().height();
        $(this).find('img').each(function(item){
          if ($(this).width() == thisBlockImgWidth) {
            $(this).height(thisBlockImgWidth/16*12);
          } else {
            $(this).width(thisBlockImgWidth);
            $(this).height($(this).width()/16*12);
          }
        });
      }
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
