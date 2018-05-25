$(function() {
  var $carousel = $('.block__slider--wrap');

  $carousel.slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.slick-prev'),
    nextArrow: $('.slick-next'),
    waitForAnimate: 1,
    lazyLoad: 'ondemand'
  });

  updateRangeSlider();

  daySlider.addEventListener(
    'input',
    e => {
      $('.block__slider--wrap').slick('slickGoTo', e.target.value, 0);
    },
    false
  );

  $carousel.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    day_slider.value = nextSlide;
  });
});
