// Variables
<<<<<<< HEAD
const nav = document.querySelector('.navigation');
const navOpen = document.querySelector('#navigation_open');
const navClose = document.querySelector('#navigation_close');
const navItems = document.querySelectorAll('.navigation__nav--item_parent');
const navSearch = document.querySelector('.navigation__search');
const navSearchInput = document.querySelector('#navigation__search--input');
=======
const nav = document.querySelector(".navigation");
const navOpen = document.querySelector("#navigation_open");
const navClose = document.querySelector("#navigation_close");
const navItems = document.querySelectorAll(".navigation__nav--item_parent");
const navSearch = document.querySelector(".navigation__search");
const navSearchInput = document.querySelector("#navigation__search--input");
>>>>>>> 4013ce3be012f2508d28a49341ac85d475f10792

// Open Main Navigation
if (navOpen) {
  navOpen.addEventListener(
<<<<<<< HEAD
    'click',
    () => {
      nav.classList.add('active');
=======
    "click",
    function() {
      nav.classList.add("active");
>>>>>>> 4013ce3be012f2508d28a49341ac85d475f10792
      freeze();
      if (window.outerWidth >= 1024) {
        if (navSearchInput) {
          navSearchInput.focus();
        }
      }
    },
    false
  );
}

// Close Main Navigation
if (navClose) {
  navClose.addEventListener(
<<<<<<< HEAD
    'click',
    () => {
      nav.classList.remove('active');
=======
    "click",
    function() {
      nav.classList.remove("active");
>>>>>>> 4013ce3be012f2508d28a49341ac85d475f10792
      unFreeze();
    },
    false
  );
}

// Main Navigation items click event

navItems.forEach(item => {
<<<<<<< HEAD
  item.addEventListener('click', e => {
    const result = item.parentElement.classList.contains('active');

    if (result) {
      item.parentElement.classList.remove('active');
    } else {
      navItems.forEach(items => {
        items.parentElement.classList.remove('active');
      });
      e.target.parentElement.classList.add('active');
=======
  item.addEventListener("click", function(e) {
    const result = item.parentElement.classList.contains("active");

    if (result) {
      item.parentElement.classList.remove("active");
    } else {
      navItems.forEach(items => {
        items.parentElement.classList.remove("active");
      });
      e.target.parentElement.classList.add("active");
>>>>>>> 4013ce3be012f2508d28a49341ac85d475f10792
    }
  });
});

// Search - hide search text when text is entered
if (navSearchInput) {
<<<<<<< HEAD
  navSearchInput.addEventListener('input', e => {
    if (e.target.value.length > 0) {
      navSearch.classList.add('active');
    } else {
      navSearch.classList.remove('active');
=======
  navSearchInput.addEventListener("input", function(e) {
    if (e.target.value.length > 0) {
      navSearch.classList.add("active");
    } else {
      navSearch.classList.remove("active");
>>>>>>> 4013ce3be012f2508d28a49341ac85d475f10792
    }
  });
}
