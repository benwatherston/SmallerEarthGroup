// Variables
const nav = document.querySelector(".navigation");
const navOpen = document.querySelector("#navigation_open");
const navClose = document.querySelector("#navigation_close");
const navItems = document.querySelectorAll(".navigation__nav--item_parent");
const navSearch = document.querySelector(".navigation__search");
const navSearchInput = document.querySelector("#navigation__search--input");

// Open Main Navigation
if (navOpen) {
  navOpen.addEventListener(
    "click",
    function() {
      nav.classList.add("active");
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
    "click",
    function() {
      nav.classList.remove("active");
      unFreeze();
    },
    false
  );
}

// Main Navigation items click event

navItems.forEach(item => {
  item.addEventListener("click", function(e) {
    const result = item.parentElement.classList.contains("active");

    if (result) {
      item.parentElement.classList.remove("active");
    } else {
      navItems.forEach(items => {
        items.parentElement.classList.remove("active");
      });
      e.target.parentElement.classList.add("active");
    }
  });
});

// Search - hide search text when text is entered
if (navSearchInput) {
  navSearchInput.addEventListener("input", function(e) {
    if (e.target.value.length > 0) {
      navSearch.classList.add("active");
    } else {
      navSearch.classList.remove("active");
    }
  });
}
