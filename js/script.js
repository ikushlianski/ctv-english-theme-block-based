"use strict";!function(e,i){i.behaviors.my_custom_behavior={attach:function(e,i){}},e(document).ready(function(){e(".block").each(function(){var i=e(this).find("img").first().width();e(this).find("img").first().height(i/16*9);e(this).find("img").first().height();e(this).find("img").each(function(o){e(this).width()==i?e(this).height(i/16*9):(e(this).width(i),e(this).height(e(this).width()/16*9))})}),e(".page-taxonomy-term .view-taxonomy-term .views-field-field-image").each(function(){var i=e(this).find("img").first().width();e(this).find("img").each(function(o){e(this).height(i/16*9)})})})}(jQuery,Drupal),function(e,i){i.behaviors.my_custom_behavior={attach:function(e,i){}},e(document).ready(function(){function i(){for(var i=arguments.length,o=Array(i),t=0;t<i;t++)o[t]=arguments[t];Array.prototype.slice.apply(arguments).forEach(function(i){e(".block ."+i+" .views-row").length<2&&e("."+i).parents(".block").hide()})}function o(i,o){if(o){e("."+o+" ."+i+":last-of-type").each(function(i){var o=e(this).width();e(this).siblings().length>0&&e(this).prev().width()+30<o&&e(this).hide()})}else{e("."+i+":last-of-type").each(function(i){var o=e(this).width();e(this).siblings().length>0&&e(this).prev().width()+30<o&&e(this).hide()})}}if(i("view-more-from-same-story","view-more-from-same-theme","view-more-from-same-person"),o("views-row","view-more-from-same-theme"),o("views-row","view-more-from-same-story"),o("views-row","view-more-from-same-person"),e("#content-recommended .section").height()<e("#sidebar-recommended .section").height())do{e("#sidebar-recommended .section").children().each(function(){e(this).find(".views-row").last().remove(),e("#content-recommended .section").height(),e("#sidebar-recommended .section").height()})}while(e("#content-recommended .section").height()<e("#sidebar-recommended .section").height());e(".views-row").hover(function(){e(this).children(".views-field-title").find("a").css({color:"#ef5223"})}),e(".views-row").mouseleave(function(){e(this).children(".views-field-title").find("a").css({color:""})})})}(jQuery,Drupal),function(e,i){i.behaviors.my_custom_behavior={attach:function(e,i){}},e(document).ready(function(){e(".itemLink").hover(function(){e(this).siblings(".itemTitle").children(".itemTitleText").css({textDecoration:"underline"})}),e(".itemLink").mouseleave(function(){e(this).siblings(".itemTitle").children(".itemTitleText").css({textDecoration:"none"})})})}(jQuery,Drupal),function(e,i){i.behaviors.my_custom_behavior={attach:function(e,i){}},e(document).ready(function(){var i=e(".mainImage").height();e(".mainImageContainer").height(i)})}(jQuery,Drupal),function(e,i){i.behaviors.my_custom_behavior={attach:function(e,i){}},e(document).ready(function(){e(".region-sitemap-nav").removeAttr("style"),e(".toggle").on("click",function(){e(".nav-menu-div, .nav-group, #main-wrapper").toggleClass("toggled-on"),e(this).toggleClass("fa-bars").toggleClass("fa-times")}),e(".nav-group .toggle_largeScreens").on("click",function(){e(".region-sitemap-nav").toggleClass("toggled-on"),e(".region-sitemap-nav").hasClass("toggled-on")?e("body").css({overflow:"hidden"}):e("body").css({overflow:"auto"})}),e(".region-sitemap-nav .toggle_largeScreens").on("click",function(){e(".region-sitemap-nav").toggleClass("toggled-on"),e(".region-sitemap-nav").hasClass("toggled-on")?e("body").css({overflow:"hidden"}):e("body").css({overflow:"auto"})}),e(window).width()>768&&(e(".login-menu").appendTo(".login-menu-hider"),e(".login-menu").css({}),e(".login-menu-hider").children().length>0&&e(".login-menu-hider-link").show()),e(window).on("click",function(i){e(".login-menu").hasClass("toggled-on")&&"login-menu-hider"!=i.target.className&&(e(".login-menu").removeClass("toggled-on"),i.stopPropagation())}),e(".login-menu-hider").on("click",function(i){e(".login-menu").hasClass("toggled-on")||(e(".login-menu").addClass("toggled-on"),i.stopPropagation())});var i=0;if(e(window).scroll(function(o){if("fixed"==e(".nav-group").css("position")){var t=e(this).scrollTop();t>i&&t>100?e(".nav-group").hasClass("toggled-on")||e(".nav-group").fadeOut(100):e(".nav-group").hasClass("toggled-on")||e(".nav-group").fadeIn(100),i=t}}),e("body").hasClass("logged-in")){var o=e("div.toolbar").height();"fixed"==e(".nav-group").css("position")&&e(".nav-group").css({top:o})}})}(jQuery,Drupal),function(e,i){i.behaviors.my_custom_behavior={attach:function(e,i){}},e(document).ready(function(){if(0!=e("#sidebar-first").length){var i=function(){return!!e("#toolbar")},o=e("#sidebar-first .section").eq(0),t=e("#sidebar-first .section").children().first().eq(0),n=t.width(),s=t.height(),a=(t.offset().top,e(".node .content").height()),r=e(".node .content").offset().top+a,c=e("#sidebar-first .section").height(),h=e("#sidebar-first .section").offset().top+c,l=e("#toolbar").height();if(t.width(n),a<c)for(;a<o.height();)o.children().last().hide();e(window).on("scroll",function(){a>1.5*c&&(e(window).scrollTop()>=h?e(window).scrollTop()<r-s-l?t.hasClass("sticky")||(t.addClass("sticky"),i()&&t.css({top:t.scrollTop()+l})):(t.addClass("at-bottom"),t.css({top:r-s})):(t.removeClass("sticky"),t.css({top:0})),e(window).scrollTop()<r-s-l&&t.hasClass("sticky")&&t.hasClass("at-bottom")&&(t.removeClass("at-bottom"),i()?t.css({top:t.scrollTop()+l}):t.css({top:0})),e(window).scrollTop()<=c&&t.hasClass("sticky")&&t.removeClass("sticky"))})}})}(jQuery,Drupal),function(e,i){i.behaviors.my_custom_behavior={attach:function(e,i){}},e(document).ready(function(){})}(jQuery,Drupal);