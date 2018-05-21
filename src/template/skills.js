const accordionHeader = document.querySelectorAll(".accordion__header");

accordionHeader.forEach(header => {
  header.addEventListener("click", function(e) {
    const accordionParent = header.parentElement.classList.contains("active");
    if (accordionParent) {
      header.parentElement.classList.remove("active");
    } else {
      header.parentElement.classList.add("active");
    }
  });
});

$(function() {
  $(".faq__wrap").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $(".slick-prev"),
    nextArrow: $(".slick-next"),
    adaptiveHeight: true,
    waitForAnimate: 1
  });
});
