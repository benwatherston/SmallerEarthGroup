// Variables
const overlay = document.querySelector('.overlay');
const backToTop = document.querySelector('#top');

// Remove Overlay + Open elements
if (overlay) {
  overlay.addEventListener(
    'click',
    e => {
      nav.classList.remove('active');
      if (contactModal) {
        contactModal.classList.remove('active');
      }
      unFreeze();
    },
    false
  );
}

// Escape key
document.onkeydown = evt => {
  evt = evt || window.event;
  if (evt.keyCode == 27) {
    nav.classList.remove('active');
    if (contactModal) {
      contactModal.classList.remove('active');
    }
    unFreeze();
  }
};

// Back to top
if (backToTop) {
  backToTop.addEventListener(
    'click',
    () => {
      window.scroll({
        top: 0,
        behavior: 'smooth'
      });
    },
    false
  );
}
