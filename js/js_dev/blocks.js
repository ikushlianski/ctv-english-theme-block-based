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

    // Hide block if one resulting item is present
    function hideBlocksWithOneResult(blockclass) {
      if( $(`.block .${blockclass} .views-row`).length < 2 ) {
        $(`.${blockclass}`).parents('.block').hide();
      }
    }
    hideBlocksWithOneResult('view-more-from-same-story');

    // standard fix to remove dangling last flex items
    function fixLastFlexItemBug(itemClass, parentClass){
			if (!parentClass) {
				let lastFlexItems = $(`.${itemClass}:last-of-type`);
				lastFlexItems.each(function(index){
					// let lastFlexItem = lastFlexItems.eq(index);
					let lastFlexItemWidth = $(this).width();
					if ( ($(this).siblings().length > 0) && ($(this).prev().width() + 30 < lastFlexItemWidth) ) {
							$(this).hide();
					}
				});
			} else {
				let lastFlexItems = $(`.${parentClass} .${itemClass}:last-of-type`);
				lastFlexItems.each(function(index){
					// let lastFlexItem = lastFlexItems.eq(index);
					let lastFlexItemWidth = $(this).width();
					if ( ($(this).siblings().length > 0) && ($(this).prev().width() + 30 < lastFlexItemWidth) ) {
							$(this).hide();
					}
				});
			}
		}
    fixLastFlexItemBug('views-row', 'view-more-from-same-theme');
    fixLastFlexItemBug('views-row', 'view-more-from-same-story');
    fixLastFlexItemBug('views-row', 'view-more-from-same-person');

  });

})(jQuery, Drupal);
