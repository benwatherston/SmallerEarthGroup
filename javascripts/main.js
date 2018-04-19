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