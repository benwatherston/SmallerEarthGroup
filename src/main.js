// Remove Overlay + Open elements
document.querySelector(".overlay").addEventListener(
  "click",
  function(e) {
    document.querySelector(".navigation").classList.remove("active");
    document.querySelector(".contact__modal--wrap").classList.remove("active");
    unFreeze();
  },
  false
);

// Escape key
document.onkeydown = function(evt) {
  evt = evt || window.event;
  if (evt.keyCode == 27) {
    document.querySelector(".navigation").classList.remove("active");
    document.querySelector(".contact__modal--wrap").classList.remove("active");
    unFreeze();
  }
};

document.querySelector("#top").addEventListener(
  "click",
  function() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  },
  false
);
