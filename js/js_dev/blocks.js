(function ($, Drupal) {

  // To understand behaviors, see https://drupal.org/node/756722#behaviors
  Drupal.behaviors.my_custom_behavior = {
    attach: function (context, settings) {

      // Place your code here.

    }
  };

  $(document).ready(function(){

    // Hide block if one resulting item is present
    function hideBlocksWithOneResult(...blockclass) {
			let args = Array.prototype.slice.apply(arguments);
			args.forEach(function(item){
				if( $(`.block .${item} .views-row`).length < 2 ) {
	        $(`.${item}`).parents('.block').hide();
	      }
			});
    }
    hideBlocksWithOneResult('view-more-from-same-story', 'view-more-from-same-theme', 'view-more-from-same-person');

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
