<<<<<<< HEAD
"use strict";$(function(){$(".video--iframe").magnificPopup({type:"iframe"})}),$(function(){var e=$(".block__slider--wrap");e.slick({infinite:!1,slidesToShow:1,slidesToScroll:1,prevArrow:$(".slick-prev"),nextArrow:$(".slick-next"),waitForAnimate:1,lazyLoad:"ondemand"}),updateRangeSlider(),daySlider.addEventListener("input",function(e){$(".block__slider--wrap").slick("slickGoTo",e.target.value,0)},!1),e.on("beforeChange",function(e,i,n,r){day_slider.value=r})});
=======
"use strict";$(function(){$(".video--iframe").magnificPopup({type:"iframe"})}),$(function(){var e=$(".block__slider--wrap");e.slick({infinite:!1,slidesToShow:1,slidesToScroll:1,prevArrow:$(".slick-prev"),nextArrow:$(".slick-next"),adaptiveHeight:!0,waitForAnimate:1}),updateRangeSlider(),daySlider.addEventListener("input",function(e){$(".block__slider--wrap").slick("slickGoTo",e.target.value,0)},!1),e.on("beforeChange",function(e,i,r,n){day_slider.value=n})});
>>>>>>> 4013ce3be012f2508d28a49341ac85d475f10792
