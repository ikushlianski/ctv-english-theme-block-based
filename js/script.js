"use strict";!function(o,i){i.behaviors.my_custom_behavior={attach:function(o,i){}},o(document).ready(function(){o(".block").each(function(){var i=o(this).find("img").first().width();o(this).find("img").each(function(t){o(this).height(i/16*9)})}),o(".page-taxonomy-term .views-field-field-image").each(function(){var i=o(this).find("img").first().width();o(this).find("img").each(function(t){o(this).height(i/16*9)})})})}(jQuery,Drupal),function(o,i){i.behaviors.my_custom_behavior={attach:function(o,i){}},o(document).ready(function(){function i(i){o(".block ."+i+" .views-row").length<2&&o("."+i).parents(".block").hide()}function t(i,t){if(t){o("."+t+" ."+i+":last-of-type").each(function(i){var t=o(this).width();o(this).siblings().length>0&&o(this).prev().width()+30<t&&o(this).hide()})}else{o("."+i+":last-of-type").each(function(i){var t=o(this).width();o(this).siblings().length>0&&o(this).prev().width()+30<t&&o(this).hide()})}}i("view-more-from-same-story"),t("views-row","view-more-from-same-theme"),t("views-row","view-more-from-same-story"),t("views-row","view-more-from-same-person")})}(jQuery,Drupal),function(o,i){i.behaviors.my_custom_behavior={attach:function(o,i){}},o(document).ready(function(){var i=o(".mainImage").height();o(".mainImageContainer").height(i)})}(jQuery,Drupal),function(o,i){i.behaviors.my_custom_behavior={attach:function(o,i){}},o(document).ready(function(){o(".region-sitemap-nav").removeAttr("style"),o(".toggle").on("click",function(){o(".nav-menu-div, .nav-group, #main-wrapper").toggleClass("toggled-on"),o(this).toggleClass("fa-bars").toggleClass("fa-times")}),o(".nav-group .toggle_largeScreens").on("click",function(){o(".region-sitemap-nav").toggleClass("toggled-on"),o(".region-sitemap-nav").hasClass("toggled-on")?o("body").css({overflow:"hidden"}):o("body").css({overflow:"auto"})}),o(".region-sitemap-nav .toggle_largeScreens").on("click",function(){o(".region-sitemap-nav").toggleClass("toggled-on"),o(".region-sitemap-nav").hasClass("toggled-on")?o("body").css({overflow:"hidden"}):o("body").css({overflow:"auto"})}),o(window).width()>768&&(o(".login-menu").appendTo(".login-menu-hider"),o(".login-menu-hider").children().length>0&&o(".login-menu-hider").show()),o(window).on("click",function(i){o(".login-menu").hasClass("toggled-on")&&"login-menu-hider"!=i.target.className&&(o(".login-menu").removeClass("toggled-on"),i.stopPropagation())}),o(".login-menu-hider").on("click",function(i){o(".login-menu").hasClass("toggled-on")||(o(".login-menu").addClass("toggled-on"),i.stopPropagation())});var i=0;if(o(window).scroll(function(t){if("fixed"==o(".nav-group").css("position")){var e=o(this).scrollTop();e>i&&e>100?o(".nav-group").hasClass("toggled-on")||o(".nav-group").fadeOut(100):o(".nav-group").hasClass("toggled-on")||o(".nav-group").fadeIn(100),i=e}}),o("body").hasClass("logged-in")){var t=o("div.toolbar").height();"fixed"==o(".nav-group").css("position")&&o(".nav-group").css({top:t})}})}(jQuery,Drupal),function(o,i){i.behaviors.my_custom_behavior={attach:function(o,i){}},o(document).ready(function(){if(0!=o("#sidebar-first").length){var i=function(){return!!o("#toolbar")},t=o("#sidebar-first .section").eq(0),e=o("#sidebar-first .section").children().first().eq(0),s=e.width(),n=e.height(),a=(e.offset().top,o(".node .content").height()),r=o(".node .content").offset().top+a,l=o("#sidebar-first .section").height(),c=o("#sidebar-first .section").offset().top+l,h=o("#toolbar").height();if(e.width(s),a<l)for(;a<t.height();)t.children().last().hide();o(window).on("scroll",function(){a>l&&(o(window).scrollTop()>=c?o(window).scrollTop()<r-n-h?e.hasClass("sticky")||(e.addClass("sticky"),i()&&e.css({top:e.scrollTop()+h})):(e.addClass("at-bottom"),e.css({top:r-n})):(e.removeClass("sticky"),e.css({top:0})),o(window).scrollTop()<r-n-h&&e.hasClass("sticky")&&e.hasClass("at-bottom")&&(e.removeClass("at-bottom"),i()?e.css({top:e.scrollTop()+h}):e.css({top:0})),o(window).scrollTop()<=l&&e.hasClass("sticky")&&e.removeClass("sticky"))})}})}(jQuery,Drupal);