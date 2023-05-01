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


// img slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


  // navi sections


// Get all sections
const sections = document.querySelectorAll("section");

// Get navigation menu
const navMenu = document.querySelector("nav");

// Set initial active section
let activeSection = 0;

// Get the height of the navigation menu
const navHeight = navMenu.offsetHeight;

// Add event listener to the window object for scrolling
window.addEventListener("scroll", () => {
  // Get the current scroll position
  const scrollPosition = window.pageYOffset;

  // Loop through all sections
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    // Check if the current scroll position is within the bounds of the current section
    if (
      scrollPosition >= sectionTop - navHeight &&
      scrollPosition < sectionTop + sectionHeight - navHeight
    ) {
      // Set the active section
      activeSection = i;

      // Exit the loop
      break;
    }
  }

  // Get all navigation links
  const navLinks = document.querySelectorAll(".nav__link a");

  // Remove the "active" class from all navigation links
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });

  // Add the "active" class to the navigation link of the active section
  navLinks[activeSection].classList.add("active");
});
