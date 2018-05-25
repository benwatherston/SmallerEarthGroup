const sliderWrap = document.querySelectorAll('.slider__dots--wrap');

$('.block__slider--wrap').on('init', function(
  event,
  slick,
  currentSlide,
  nextSlide
) {
  sliderWrap.forEach((dotsWrap, index) => {
    let createDot = index => {
      let node = document.createElement('span');
      node.classList.add('slider__dots--item');
      node.setAttribute('data-slide', index);
      if (index == 0) {
        node.classList.add('active');
      }
      dotsWrap.appendChild(node);
    };
    for (var index = 0; index < slick.slideCount; index++) {
      createDot(index);
    }

    const allDots = document.querySelectorAll('.slider__dots--item');

    allDots.forEach(singleDot => {
      singleDot.addEventListener(
        'click',
        () => {
          $('.block__slider--wrap').slick(
            'slickGoTo',
            this.getAttribute('data-slide'),
            0
          );
        },
        false
      );
    });
  });
});

$('.block__slider--wrap').on('afterChange', function(
  event,
  slick,
  currentSlide,
  nextSlide
) {
  let curSlide = currentSlide ? currentSlide : 0;
  let allDots = document.querySelectorAll('.slider__dots--item');

  allDots.forEach(dot => {
    dot.classList.remove('active');
  });

  let active = document.querySelectorAll(`[data-slide="${curSlide}"]`);
  active.forEach(a => {
    a.classList.add('active');
  });
});
