// Variables
const body = document.querySelector("body");

const freeze = function() {
  overlay.classList.add("active");
  body.classList.add("freeze");
};

const unFreeze = function() {
  overlay.classList.remove("active");
  body.classList.remove("freeze");
};
