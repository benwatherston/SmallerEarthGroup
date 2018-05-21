$(function() {
  $(".block__slider--wrap").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $(".slick-prev"),
    nextArrow: $(".slick-next"),
    lazyLoad: "ondemand",
    dots: true
  });
});
