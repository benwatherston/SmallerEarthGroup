$(function() {
  $('.faq__wrap').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.slick-prev'),
    nextArrow: $('.slick-next'),
    adaptiveHeight: true,
    waitForAnimate: 1,
    dots: true
  });
});
