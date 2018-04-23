'use strict';

document.getElementById('cookie__close').addEventListener("click", function () {
  document.getElementById('cookie__wrap').style.display = "none";
}, false);

document.getElementById('speech--open').addEventListener("click", function () {
  document.getElementById('speech--wrap').classList.add("active");
}, false);

document.getElementById('speech--close').addEventListener("click", function () {
  document.getElementById('speech--wrap').classList.remove("active");
}, false);

document.getElementById('navigation_open').addEventListener("click", function () {
  document.querySelector('.navigation').classList.add("active");
  document.querySelector('.overlay').classList.add("active");
}, false);

document.querySelector('#navigation_close').addEventListener("click", function () {
  document.querySelector('.navigation').classList.remove("active");
  document.querySelector('.overlay').classList.remove("active");
}, false);

document.querySelector('.overlay').addEventListener("click", function (e) {
  document.querySelector('.navigation').classList.remove("active");
  e.target.classList.remove("active");
}, false);

// NAVIGATION
var navItems = document.querySelectorAll('.navigation__nav--item_parent');
navItems.forEach(function (item) {
  item.addEventListener("click", function (e) {

    var result = item.parentElement.classList.contains("active");

    if (result) {
      item.parentElement.classList.remove("active");
    } else {
      navItems.forEach(function (items) {
        items.parentElement.classList.remove("active");
      });
      item.parentElement.classList.add("active");
    }
  });
});