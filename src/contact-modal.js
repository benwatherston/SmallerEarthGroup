// Open Mobile Mini Menu
document.querySelector("#speech--open").addEventListener(
  "click",
  function() {
    document.querySelector("#speech--wrap").classList.add("active");
  },
  false
);

// Close Mobile Mini Menu
document.querySelector("#speech--close").addEventListener(
  "click",
  function() {
    document.querySelector("#speech--wrap").classList.remove("active");
  },
  false
);

// Open Contact Modal
document.querySelector("#contact--open").addEventListener(
  "click",
  function(e) {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    document.querySelector(".contact__modal--wrap").classList.add("active");
    document.querySelector(".overlay").classList.add("active");
  },
  false
);
// Open Contact Modal
document.querySelector("#contact--close").addEventListener(
  "click",
  function() {
    document.querySelector(".contact__modal--wrap").classList.remove("active");
    document.querySelector(".overlay").classList.remove("active");
  },
  false
);

// Close Contact Modal on resize
document.querySelector("body").onresize = function() {
  if (
    document.querySelector(".contact__modal--wrap.active") &&
    window.outerWidth >= 480
  ) {
    document.querySelector(".contact__modal--wrap").classList.remove("active");
    document.querySelector(".overlay").classList.remove("active");
  }
};
