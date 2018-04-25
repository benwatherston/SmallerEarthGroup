// Open Main Navigation
document.querySelector("#navigation_open").addEventListener(
  "click",
  function() {
    document.querySelector(".navigation").classList.add("active");
    freeze();
    if (window.outerWidth >= 1024) {
      document.querySelector("#navigation__search--input").focus();
    }
  },
  false
);

// Close Main Navigation
document.querySelector("#navigation_close").addEventListener(
  "click",
  function() {
    document.querySelector(".navigation").classList.remove("active");
    unFreeze();
  },
  false
);

// Main Navigation items click event
const navItems = document.querySelectorAll(".navigation__nav--item_parent");
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
document
  .querySelector("#navigation__search--input")
  .addEventListener("input", function(e) {
    if (e.target.value.length > 0) {
      document.querySelector(".navigation__search").classList.add("active");
    } else {
      document.querySelector(".navigation__search").classList.remove("active");
    }
  });
