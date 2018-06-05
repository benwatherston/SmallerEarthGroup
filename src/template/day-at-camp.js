const daySlider = document.querySelector('#day_slider');

// Run on page after slick slider
const updateRangeSlider = () => {
  const getSlides = document.querySelectorAll('.slick-slide');
  daySlider.max = getSlides.length - 1;
};

// Search - hide search text when text is entered
const goToSlider = () => {
  daySlider.addEventListener('input', e => {
    return e.target.value;
  });
};

$(function() {
  var $carousel = $('.block__slider--wrap');

  $carousel.slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.slick-prev'),
    nextArrow: $('.slick-next'),
    waitForAnimate: false,
    lazyLoad: 'progressive'
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
