const navLinks = document.querySelectorAll('.nav-menu .nav-link');
const menuOpenButton = document.querySelector('#menu-open-button');
const menuCloseButton = document.querySelector('#menu-close-button');

document.querySelector('.contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  const name = document.querySelector('.contact-form input[type="text"]').value;
  const userEmail = document.querySelector('.contact-form input[type="email"]').value;
  const message = document.querySelector('.contact-form textarea').value;

  // Website owner's email
  const ownerEmail = "teribair12@gmail.com"; // Change this to the actual owner's email

  // Construct email body
  const emailBody = `${message}%0D%0A%0D%0ARegards,%0D%0A${name}`;

  // Create mailto link
  const mailtoLink = `mailto:${ownerEmail}?subject=Message from ${name}&body=${emailBody}&cc=${userEmail}`;

  // Open email client
  window.location.href = mailtoLink;
});


menuOpenButton.addEventListener('click', () => {
    // Toggle mobile menu
  document.body.classList.toggle('show-mobile-menu');
});

menuCloseButton.addEventListener('click', () => menuOpenButton.click());

navLinks.forEach(link => {
  link.addEventListener('click', () => menuOpenButton.click());
});

// Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },

  
});