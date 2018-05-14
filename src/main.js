// Variables
const overlay = document.querySelector(".overlay");
const backToTop = document.querySelector("#top");

// Remove Overlay + Open elements
if (overlay) {
  overlay.addEventListener(
    "click",
    function(e) {
      nav.classList.remove("active");
      if (contactModal) {
        contactModal.classList.remove("active");
      }
      unFreeze();
    },
    false
  );
}

// Escape key
document.onkeydown = function(evt) {
  evt = evt || window.event;
  if (evt.keyCode == 27) {
    nav.classList.remove("active");
    if (contactModal) {
      contactModal.classList.remove("active");
    }
    unFreeze();
  }
};

// Back to top
if (backToTop) {
  backToTop.addEventListener(
    "click",
    function() {
      // document.body.scrollTop = document.documentElement.scrollTop = 0;
      window.scroll({
        top: 0,
        behavior: "smooth"
      });
    },
    false
  );
}
