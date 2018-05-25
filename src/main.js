// Variables
<<<<<<< HEAD
const overlay = document.querySelector('.overlay');
const backToTop = document.querySelector('#top');
=======
const overlay = document.querySelector(".overlay");
const backToTop = document.querySelector("#top");
>>>>>>> 4013ce3be012f2508d28a49341ac85d475f10792

// Remove Overlay + Open elements
if (overlay) {
  overlay.addEventListener(
<<<<<<< HEAD
    'click',
    e => {
      nav.classList.remove('active');
      if (contactModal) {
        contactModal.classList.remove('active');
=======
    "click",
    function(e) {
      nav.classList.remove("active");
      if (contactModal) {
        contactModal.classList.remove("active");
>>>>>>> 4013ce3be012f2508d28a49341ac85d475f10792
      }
      unFreeze();
    },
    false
  );
}

// Escape key
<<<<<<< HEAD
document.onkeydown = evt => {
  evt = evt || window.event;
  if (evt.keyCode == 27) {
    nav.classList.remove('active');
    if (contactModal) {
      contactModal.classList.remove('active');
=======
document.onkeydown = function(evt) {
  evt = evt || window.event;
  if (evt.keyCode == 27) {
    nav.classList.remove("active");
    if (contactModal) {
      contactModal.classList.remove("active");
>>>>>>> 4013ce3be012f2508d28a49341ac85d475f10792
    }
    unFreeze();
  }
};

// Back to top
if (backToTop) {
  backToTop.addEventListener(
<<<<<<< HEAD
    'click',
    () => {
      window.scroll({
        top: 0,
        behavior: 'smooth'
=======
    "click",
    function() {
      // document.body.scrollTop = document.documentElement.scrollTop = 0;
      window.scroll({
        top: 0,
        behavior: "smooth"
>>>>>>> 4013ce3be012f2508d28a49341ac85d475f10792
      });
    },
    false
  );
}
