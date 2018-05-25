// Variables
const speechOpen = document.querySelector("#speech--open");
const speechClose = document.querySelector("#speech--close");
const speechWrap = document.querySelector("#speech--wrap");

const contactOpen = document.querySelector("#contact--open");
const contactClose = document.querySelector("#contact--close");
const contactModal = document.querySelector(".contact__modal--wrap");
const contactModalActive = document.querySelector(
  ".contact__modal--wrap.active"
);

// Open Mobile Mini Menu
if (speechOpen) {
  speechOpen.addEventListener(
    "click",
    function() {
      speechWrap.classList.add("active");
    },
    false
  );
}

// Close Mobile Mini Menu
if (speechClose) {
  speechClose.addEventListener(
    "click",
    function() {
      speechWrap.classList.remove("active");
    },
    false
  );
}
// Open Contact Modal
if (contactOpen) {
  contactOpen.addEventListener(
    "click",
    function(e) {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
      contactModal.classList.add("active");
      overlay.classList.add("active");
    },
    false
  );
}

// Open Contact Modal
if (contactClose) {
  contactClose.addEventListener(
    "click",
    function() {
      if (contactModal) {
        contactModal.classList.remove("active");
      }
      overlay.classList.remove("active");
    },
    false
  );
}

// Close Contact Modal on resize
body.onresize = function() {
  if (contactModalActive && window.outerWidth >= 480) {
    if (contactModal) {
      contactModal.classList.remove("active");
    }
    overlay.classList.remove("active");
  }
};
