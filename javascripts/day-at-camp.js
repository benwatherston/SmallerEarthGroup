"use strict";$(function(){$(".video--iframe").magnificPopup({type:"iframe"})}),$(function(){var e=$(".block__slider--wrap");e.slick({infinite:!1,slidesToShow:1,slidesToScroll:1,prevArrow:$(".slick-prev"),nextArrow:$(".slick-next"),waitForAnimate:!1,lazyLoad:"progressive"}),updateRangeSlider(),daySlider.addEventListener("input",function(e){$(".block__slider--wrap").slick("slickGoTo",e.target.value,0)},!1),e.on("beforeChange",function(e,i,r,o){day_slider.value=o})});