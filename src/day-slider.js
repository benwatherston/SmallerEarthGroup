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
