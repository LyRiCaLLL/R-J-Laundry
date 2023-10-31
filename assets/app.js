const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');
const navhover = document.querySelector('.a.active');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
  
});


window.addEventListener('scroll', function() {
  let nav = document.querySelector('.nav');
  if (window.pageYOffset > nav.offsetTop) {
    nav.classList.add('fixed');
  } else {
    nav.classList.remove('fixed');
    
  }
});


