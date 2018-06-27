const teamMember = document.querySelectorAll('.team__member');

if (teamMember) {
  const isElementInViewport = el => {
    let rect = el.getBoundingClientRect();

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const scrollToElement = el => {
    let bodyRect = document.body.getBoundingClientRect();
    let elRect = el.getBoundingClientRect();
    window.scroll({
      top: elRect.top - bodyRect.top - 20,
      behavior: 'smooth'
    });
  };

  teamMember.forEach(member => {
    member.addEventListener('click', e => {
      const activeMember = member.classList.contains('active');
      if (activeMember) {
        member.classList.remove('active');
      } else {
        if (document.getElementsByClassName('team__member active').length) {
          teamMember.forEach(activeMember => {
            activeMember.classList.remove('active');
          });

          setTimeout(function() {
            member.classList.add('active');
          }, 200);
          setTimeout(function() {
            if (!isElementInViewport(member)) {
              scrollToElement(member);
            }
          }, 300);
        } else {
          member.classList.add('active');
          setTimeout(function() {
            if (!isElementInViewport(member)) {
              scrollToElement(member);
            }
          }, 300);
        }
      }
    });
  });
}
