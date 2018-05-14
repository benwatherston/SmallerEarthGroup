// Variables
const body = document.querySelector("body");

const freeze = () => {
  overlay.classList.add("active");
  body.classList.add("freeze");
};

const unFreeze = () => {
  overlay.classList.remove("active");
  body.classList.remove("freeze");
};
