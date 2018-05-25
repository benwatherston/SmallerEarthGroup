$(function() {
<<<<<<< HEAD
  $('.block__slider--wrap').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.slick-prev'),
    nextArrow: $('.slick-next'),
    lazyLoad: 'progressive',
    adaptiveHeight: true
=======
  $(".block__slider--wrap").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $(".slick-prev"),
    nextArrow: $(".slick-next"),
    adaptiveHeight: true,
    lazyLoad: "ondemand"
>>>>>>> 4013ce3be012f2508d28a49341ac85d475f10792
  });
});
