"use strict";!function(i,t){i(window).load(function(){var t=["block-views-bc4d82ca41b3690bfc18d1f53c06d20c","recommended-content-tabs","block-views-editor-s-picks-block","block-views-mega-menu-politics-block"],e=["block-views-bc4d82ca41b3690bfc18d1f53c06d20c","block-views-editor-s-picks-block"];i(".block").each(function(){var e=i(this).attr("id");if(!t.indexOf(e)>=0){var o=i(this).find("img").first().width();i(this).find(".views-row").first().width();i(this).find("img").first().height(o/16*9);i(this).find("img").first().height();i(this).find("img").each(function(t){i(this).width()==o?i(this).height(o/16*9):(i(this).css({flexBasis:o}),i(this).height(i(this).width()/16*9))})}}),i(".page-taxonomy-term .view-taxonomy-term .views-field-field-image").each(function(){var t=i(this).find("img").first().width();i(this).find("img").each(function(e){i(this).height(t/16*9)})}),i(".block").each(function(){var o=i(this).attr("id");if(t.indexOf(o)>=0&&e.indexOf(o)>=0){var n=i(this).find("img").first().width();i(this).find("img").first().height();i(this).find("img").each(function(t){i(this).width()==n?i(this).height(n/16*12):(i(this).width(n),i(this).height(i(this).width()/16*12))})}}),i(".tab-content > .tab-pane").each(function(){i(this).hasClass("active")||(i(this).css("display","block"),i(this).find(".block").each(function(){var t=i(this).find("img").first().width();i(this).find("img").first().height(t/16*9);i(this).find("img").first().height();i(this).find("img").each(function(e){i(this).width()==t?i(this).height(t/16*9):(i(this).width(t),i(this).height(i(this).width()/16*9))})}),i(this).css("display",""))})}),Modernizr.objectfit||i(".view img").each(function(){i(this).css({width:"100%"})})}(jQuery,Drupal),function(i,t){t.behaviors.my_custom_behavior={attach:function(i,t){}},i(document).ready(function(){function t(){for(var t=arguments.length,e=Array(t),o=0;o<t;o++)e[o]=arguments[o];Array.prototype.slice.apply(arguments).forEach(function(t){i(".block ."+t+" .views-row").length<2&&i("."+t).parents(".block").hide()})}function e(t,e){if(e){i("."+e+" ."+t+":last-of-type").each(function(t){var e=i(this).width();i(this).siblings().length>0&&i(this).prev().width()+30<e&&i(this).hide()})}else{i("."+t+":last-of-type").each(function(t){var e=i(this).width();i(this).siblings().length>0&&i(this).prev().width()+30<e&&i(this).hide()})}}t("view-more-from-same-story","view-more-from-same-theme","view-more-from-same-person"),e("views-row","view-more-from-same-theme"),e("views-row","view-more-from-same-story"),e("views-row","view-more-from-same-person"),i(".views-row").hover(function(){i(this).children(".views-field-title").find("a").css({color:"#ef5223"})}),i(".views-row").mouseleave(function(){i(this).children(".views-field-title").find("a").css({color:""})})})}(jQuery,Drupal),function(i,t){t.behaviors.my_custom_behavior={attach:function(i,t){}},i(document).ready(function(){i(".carousel").carousel({interval:!1})})}(jQuery,Drupal),function(i,t){t.behaviors.my_custom_behavior={attach:function(i,t){}},i(document).ready(function(){i(".itemLink").hover(function(){i(this).siblings(".itemTitle").children(".itemTitleText").css({textDecoration:"underline"})}),i(".itemLink").mouseleave(function(){i(this).siblings(".itemTitle").children(".itemTitleText").css({textDecoration:"none"})})})}(jQuery,Drupal),function(i,t){t.behaviors.my_custom_behavior={attach:function(i,t){}},i(document).ready(function(){})}(jQuery,Drupal),function(i,t){i(document).ready(function(){function t(t){t.siblings(".menu-attach-block-wrapper").addClass("open"),i(window).width()>767&&i("#main-wrapper").css("filter","brightness(0.5)")}function e(t){t.siblings(".menu-attach-block-wrapper").removeClass("open"),i(window).width()>767&&i("#main-wrapper").css("filter","brightness(1)")}function o(t){t.parent(".menu-attach-block-wrapper").removeClass("open"),i(window).width()>767&&i("#main-wrapper").css("filter","brightness(1)")}i(".menu-attach-block-wrapper").width(i(".nav-menu-div").first().width()),i(window).resize(function(){var t=i(".nav-menu-div").first().width();i(".menu-attach-block-wrapper").width(t)});var n;i("a.attached-block").on("mouseenter",function(){clearTimeout(n),i(this).parent(".attached-block").siblings().each(function(){i(this).find(".menu-attach-block-wrapper").removeClass("open")}),t(i(this));var e=i(this).siblings(".menu-attach-block-wrapper").children(".block").find("img").first().width();i(this).siblings(".menu-attach-block-wrapper").children(".block").find("img").first().height(e/16*9);i(this).siblings(".menu-attach-block-wrapper").children(".block").find("img").first().height();i(this).siblings(".menu-attach-block-wrapper").children(".block").find("img").each(function(t){i(this).height(e/16*9)})}),i("a.attached-block").on("mouseleave",function(){var t=i(this);n=setTimeout(function(){e(t)},1e3)}),i(".menu-attach-block-wrapper > .block ").on("mouseenter",function(){clearTimeout(n)}),i(".menu-attach-block-wrapper > .block ").on("mouseleave",function(){o(i(this))})})}(jQuery,Drupal),function(i,t){t.behaviors.my_custom_behavior={attach:function(i,t){}},i(document).ready(function(){i(".region-sitemap-nav").removeAttr("style"),i(".toggle").on("click",function(){i(".nav-menu-div, .nav-group, #main-wrapper").toggleClass("toggled-on"),i(this).toggleClass("fa-bars").toggleClass("fa-times")}),i(".nav-group .toggle_largeScreens").on("click",function(){i(".region-sitemap-nav").toggleClass("toggled-on"),i(".region-sitemap-nav").hasClass("toggled-on")?i("body").css({overflow:"hidden"}):i("body").css({overflow:"auto"})}),i(".region-sitemap-nav .toggle_largeScreens").on("click",function(){i(".region-sitemap-nav").toggleClass("toggled-on"),i(".region-sitemap-nav").hasClass("toggled-on")?i("body").css({overflow:"hidden"}):i("body").css({overflow:"auto"})}),i(window).width()>768&&(i(".login-menu").appendTo(".login-menu-hider"),i(".login-menu").css({}),i(".login-menu-hider").children().length>0&&i(".login-menu-hider-link").show()),i(window).on("click",function(t){i(".login-menu").hasClass("toggled-on")&&"login-menu-hider"!=t.target.className&&(i(".login-menu").removeClass("toggled-on"),t.stopPropagation())}),i(".login-menu-hider").on("click",function(t){i(".login-menu").hasClass("toggled-on")||(i(".login-menu").addClass("toggled-on"),t.stopPropagation())});var t=0;if(i(window).scroll(function(e){if("fixed"==i(".nav-group").css("position")){var o=i(this).scrollTop();o>t&&o>100?i(".nav-group").hasClass("toggled-on")||i(".nav-group").fadeOut(100):i(".nav-group").hasClass("toggled-on")||i(".nav-group").fadeIn(100),t=o}}),i("body").hasClass("logged-in")){var e=i("div.toolbar").height();"fixed"==i(".nav-group").css("position")&&i(".nav-group").css({top:e})}})}(jQuery,Drupal),function(i,t){t.behaviors.my_custom_behavior={attach:function(i,t){}},i(document).ready(function(){if(0!=i("#sidebar-first").length){var t=function(){return!!i("#toolbar")},e=i("#sidebar-first .section").eq(0),o=i("#sidebar-first .section").children().first().eq(0),n=o.width(),s=o.height(),a=(o.offset().top,i(".node .content").height()),r=i(".node .content").offset().top+a,c=i("#sidebar-first .section").height(),h=i("#sidebar-first .section").offset().top+c,l=i("#toolbar").height();if(o.width(n),a<c)for(;a<e.height();)e.children().last().hide();i(window).on("scroll",function(){a>1.75*c&&(i(window).scrollTop()>=h?i(window).scrollTop()<r-s-l?o.hasClass("sticky")||(o.addClass("sticky"),t()&&o.css({top:o.scrollTop()+l})):(o.addClass("at-bottom"),o.css({top:r-s})):(o.removeClass("sticky"),o.css({top:0})),i(window).scrollTop()<r-s-l&&o.hasClass("sticky")&&o.hasClass("at-bottom")&&(o.removeClass("at-bottom"),t()?o.css({top:o.scrollTop()+l}):o.css({top:0})),i(window).scrollTop()<=c&&o.hasClass("sticky")&&o.removeClass("sticky"))})}})}(jQuery,Drupal),function(i,t){t.behaviors.my_custom_behavior={attach:function(i,t){}},i(document).ready(function(){})}(jQuery,Drupal);