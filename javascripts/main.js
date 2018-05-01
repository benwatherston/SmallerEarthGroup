"use strict";

// Variables
var body = document.querySelector("body");

var freeze = function freeze() {
  overlay.classList.add("active");
  body.classList.add("freeze");
};

var unFreeze = function unFreeze() {
  overlay.classList.remove("active");
  body.classList.remove("freeze");
};

// Variables
var overlay = document.querySelector(".overlay");
var backToTop = document.querySelector("#top");

// Remove Overlay + Open elements
if (overlay) {
  overlay.addEventListener("click", function (e) {
    nav.classList.remove("active");
    if (contactModal) {
      contactModal.classList.remove("active");
    }
    unFreeze();
  }, false);
}

// Escape key
document.onkeydown = function (evt) {
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
  backToTop.addEventListener("click", function () {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }, false);
}

// Variables
var nav = document.querySelector(".navigation");
var navOpen = document.querySelector("#navigation_open");
var navClose = document.querySelector("#navigation_close");
var navItems = document.querySelectorAll(".navigation__nav--item_parent");
var navSearch = document.querySelector(".navigation__search");
var navSearchInput = document.querySelector("#navigation__search--input");

// Open Main Navigation
if (navOpen) {
  navOpen.addEventListener("click", function () {
    nav.classList.add("active");
    freeze();
    if (window.outerWidth >= 1024) {
      if (navSearchInput) {
        navSearchInput.focus();
      }
    }
  }, false);
}

// Close Main Navigation
if (navClose) {
  navClose.addEventListener("click", function () {
    nav.classList.remove("active");
    unFreeze();
  }, false);
}

// Main Navigation items click event

navItems.forEach(function (item) {
  item.addEventListener("click", function (e) {
    var result = item.parentElement.classList.contains("active");

    if (result) {
      item.parentElement.classList.remove("active");
    } else {
      navItems.forEach(function (items) {
        items.parentElement.classList.remove("active");
      });
      e.target.parentElement.classList.add("active");
    }
  });
});

// Search - hide search text when text is entered
if (navSearchInput) {
  navSearchInput.addEventListener("input", function (e) {
    if (e.target.value.length > 0) {
      navSearch.classList.add("active");
    } else {
      navSearch.classList.remove("active");
    }
  });
}

// Variables
var speechOpen = document.querySelector("#speech--open");
var speechClose = document.querySelector("#speech--close");
var speechWrap = document.querySelector("#speech--wrap");

var contactOpen = document.querySelector("#contact--open");
var contactClose = document.querySelector("#contact--close");
var contactModal = document.querySelector(".contact__modal--wrap");
var contactModalActive = document.querySelector(".contact__modal--wrap.active");

// Open Mobile Mini Menu
if (speechOpen) {
  speechOpen.addEventListener("click", function () {
    speechWrap.classList.add("active");
  }, false);
}

// Close Mobile Mini Menu
if (speechClose) {
  speechClose.addEventListener("click", function () {
    speechWrap.classList.remove("active");
  }, false);
}
// Open Contact Modal
if (contactOpen) {
  contactOpen.addEventListener("click", function (e) {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    contactModal.classList.add("active");
    overlay.classList.add("active");
  }, false);
}

// Open Contact Modal
if (contactClose) {
  contactClose.addEventListener("click", function () {
    if (contactModal) {
      contactModal.classList.remove("active");
    }
    overlay.classList.remove("active");
  }, false);
}

// Close Contact Modal on resize
body.onresize = function () {
  if (contactModalActive && window.outerWidth >= 480) {
    if (contactModal) {
      contactModal.classList.remove("active");
    }
    overlay.classList.remove("active");
  }
};

// Variables
var cookieClose = document.querySelector("#cookie__close");
var cookieWrap = document.querySelector("#cookie__wrap");
var getCookie = localStorage.getItem("cookie");

// Cookie
if (cookieClose) {
  cookieClose.addEventListener("click", function () {
    cookieWrap.style.display = "none";
    localStorage.setItem("cookie", true);
  }, false);
}

// Check for cookie
if (!getCookie) {
  cookieWrap.classList.add("active");
}