$(function() {
<<<<<<< HEAD
  var $carousel = $('.block__slider--wrap');
=======
  var $carousel = $(".block__slider--wrap");
>>>>>>> 4013ce3be012f2508d28a49341ac85d475f10792

  $carousel.slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
<<<<<<< HEAD
    prevArrow: $('.slick-prev'),
    nextArrow: $('.slick-next'),
    waitForAnimate: 1,
    lazyLoad: 'ondemand'
=======
    prevArrow: $(".slick-prev"),
    nextArrow: $(".slick-next"),
    adaptiveHeight: true,
    waitForAnimate: 1,
    lazyLoad: "ondemand"
>>>>>>> 4013ce3be012f2508d28a49341ac85d475f10792
  });

  updateRangeSlider();

  daySlider.addEventListener(
<<<<<<< HEAD
    'input',
    e => {
      $('.block__slider--wrap').slick('slickGoTo', e.target.value, 0);
=======
    "input",
    function(e) {
      $(".block__slider--wrap").slick("slickGoTo", e.target.value, 0);
>>>>>>> 4013ce3be012f2508d28a49341ac85d475f10792
    },
    false
  );

<<<<<<< HEAD
  $carousel.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
=======
  $carousel.on("beforeChange", function(event, slick, currentSlide, nextSlide) {
>>>>>>> 4013ce3be012f2508d28a49341ac85d475f10792
    day_slider.value = nextSlide;
  });
});
