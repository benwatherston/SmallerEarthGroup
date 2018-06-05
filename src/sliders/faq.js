$(function() {
  $('.faq__wrap').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.faq-prev'),
    nextArrow: $('.faq-next'),
    adaptiveHeight: true,
    waitForAnimate: 1,
    dots: true
  });
});
