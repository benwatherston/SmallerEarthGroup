// Variables
const overlay = document.querySelector('.overlay');
const backToTop = document.querySelector('#back-to-top');
const styleguideTop = document.querySelector('#styleguide-top');
const code = document.querySelectorAll('pre textarea');

// Remove Overlay + Open elements
if (overlay) {
  overlay.addEventListener(
    'click',
    e => {
      nav.classList.remove('active');
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

// Back to top
if (styleguideTop) {
  styleguideTop.addEventListener(
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

if (code) {
  code.forEach(c => {
    c.style.height = `${c.scrollHeight}px`;
    c.addEventListener('click', e => {
      const copyText = e.target.innerText;
      const codeParent = e.target.parentElement;
      const msg = document.createElement('span');

      e.target.select();
      document.execCommand('copy');

      msg.classList.add('message');
      msg.textContent = 'Code Copied';
      codeParent.appendChild(msg);
      setTimeout(function() {
        codeParent.removeChild(msg);
      }, 5000);
    });
  });
}
