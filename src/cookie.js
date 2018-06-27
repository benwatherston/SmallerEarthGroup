// Variables
const cookieClose = document.querySelector('#cookie__close');
const cookieWrap = document.querySelector('#cookie__wrap');
const getCookie = localStorage.getItem('cookie');

// Cookie
if (cookieClose) {
  cookieClose.addEventListener(
    'click',
    () => {
      cookieWrap.style.display = 'none';
      localStorage.setItem('cookie', true);
    },
    false
  );
}

// Check for cookie
if (!getCookie && cookieWrap) {
  cookieWrap.classList.add('active');
}
