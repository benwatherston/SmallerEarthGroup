const collapseHeader = document.querySelectorAll(
  '.block__collapse .block__title--wrap'
);

if (collapseHeader) {
  collapseHeader.forEach(header => {
    header.addEventListener('click', e => {
      const collapseParent = header.parentElement.classList.contains('active');
      if (collapseParent) {
        header.parentElement.classList.remove('active');
      } else {
        header.parentElement.classList.add('active');
      }
    });
  });
}
