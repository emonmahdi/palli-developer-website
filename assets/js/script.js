// document.addEventListener("DOMContentLoaded", function () {
//     const scrollLinks = document.querySelectorAll("nav a");

//     scrollLinks.forEach(link => {
//         link.addEventListener("click", function (e) {
//             e.preventDefault();
//             const targetId = this.getAttribute("href").substring(1);
//             const targetSection = document.getElementById(targetId);
            
//             if (targetSection) {
//                 window.scrollTo({
//                     top: targetSection.offsetTop - 70,
//                     behavior: "smooth"
//                 });
//             }
//         });
//     });
// });



// ===============

const navbar = document.querySelector('.navbar');
const sectionToShowNavbarAfter = document.querySelector('.hero'); // The section after which navbar becomes sticky
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  let scrollTop = window.scrollY;
  
  // If the page is not at the top and we scroll past the section, show the sticky navbar
  if (scrollTop > sectionToShowNavbarAfter.offsetTop) {
    navbar.classList.add('sticky-nav');
  } else {
    navbar.classList.remove('sticky-nav');
  }

  // Always show the navbar if you're scrolling past the section
  if (scrollTop > sectionToShowNavbarAfter.offsetTop) {
    navbar.style.top = '0'; // Keep navbar visible when scrolling down
  }
});

