const customSelectBtn = document.querySelectorAll('.custom__select--btn');

if (customSelectBtn) {
  customSelectBtn.forEach(btn => {
    btn.addEventListener('click', e => {
      const accordionParent = btn.parentElement.classList.contains('active');
      if (accordionParent) {
        btn.parentElement.classList.remove('active');
      } else {
        btn.parentElement.classList.add('active');
      }
    });
  });
}
