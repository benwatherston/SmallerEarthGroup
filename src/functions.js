const freeze = function() {
  document.querySelector(".overlay").classList.add("active");
  document.querySelector("body").classList.add("freeze");
};

const unFreeze = function() {
  document.querySelector(".overlay").classList.remove("active");
  document.querySelector("body").classList.remove("freeze");
};
