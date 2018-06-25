const subNavItems = document.querySelectorAll('.sub__navigation--item');
const subNavWrap = document.querySelector('.sub__navigation--wrap');

let subNavItemsWidth = 0;

if (subNavItems && subNavWrap) {
  subNavItems.forEach(item => {
    subNavItemsWidth += item.offsetWidth;
  });

  function subNav() {
    if (window.innerWidth < subNavItemsWidth) {
      subNavWrap.classList.add('has--scroll');
    } else {
      subNavWrap.classList.remove('has--scroll');
    }
  }

  subNav();

  window.addEventListener('resize', function() {
    subNav();
  });
}
