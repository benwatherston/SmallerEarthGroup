<<<<<<< HEAD
const daySlider = document.querySelector('#day_slider');

// Run on page after slick slider
const updateRangeSlider = () => {
  const getSlides = document.querySelectorAll('.slick-slide');
=======
const daySlider = document.querySelector("#day_slider");

// Run on page after slick slider
const updateRangeSlider = () => {
  const getSlides = document.querySelectorAll(".slick-slide");
>>>>>>> 4013ce3be012f2508d28a49341ac85d475f10792
  daySlider.max = getSlides.length - 1;
};

// Search - hide search text when text is entered
const goToSlider = () => {
<<<<<<< HEAD
  daySlider.addEventListener('input', e => {
=======
  daySlider.addEventListener("input", function(e) {
>>>>>>> 4013ce3be012f2508d28a49341ac85d475f10792
    return e.target.value;
  });
};
