// Variables
<<<<<<< HEAD
const cookieClose = document.querySelector('#cookie__close');
const cookieWrap = document.querySelector('#cookie__wrap');
const getCookie = localStorage.getItem('cookie');
=======
const cookieClose = document.querySelector("#cookie__close");
const cookieWrap = document.querySelector("#cookie__wrap");
const getCookie = localStorage.getItem("cookie");
>>>>>>> 4013ce3be012f2508d28a49341ac85d475f10792

// Cookie
if (cookieClose) {
  cookieClose.addEventListener(
<<<<<<< HEAD
    'click',
    () => {
      cookieWrap.style.display = 'none';
      localStorage.setItem('cookie', true);
=======
    "click",
    function() {
      cookieWrap.style.display = "none";
      localStorage.setItem("cookie", true);
>>>>>>> 4013ce3be012f2508d28a49341ac85d475f10792
    },
    false
  );
}

// Check for cookie
if (!getCookie) {
<<<<<<< HEAD
  cookieWrap.classList.add('active');
=======
  cookieWrap.classList.add("active");
>>>>>>> 4013ce3be012f2508d28a49341ac85d475f10792
}
