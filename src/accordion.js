const accordionHeader = document.querySelectorAll('.accordion__header');

if (accordionHeader) {
  accordionHeader.forEach(header => {
    header.addEventListener('click', e => {
      const accordionParent = header.parentElement.classList.contains('active');
      if (accordionParent) {
        header.parentElement.classList.remove('active');
      } else {
        header.parentElement.classList.add('active');
      }
    });
  });
}
