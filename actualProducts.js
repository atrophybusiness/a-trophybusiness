function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Add a scroll event listener to trigger the pulse animation
window.addEventListener('scroll', () => {
  const serviceItems = document.querySelectorAll('.service-item1, .service-item2, .service-item3, .service-item4');
  
  serviceItems.forEach(item => {
    if (isInViewport(item) && !item.classList.contains('pulsed')) {
      item.classList.add('pulse');  // Trigger pulse animation
      item.classList.add('pulsed'); // Prevent repeating the pulse animation
      setTimeout(() => {
        item.classList.remove('pulse'); // Remove the pulse class after animation completes
      }, 1600); // Duration of the pulse animation
    }
  });
});

// Added Scripting For Email Form ZW

const serviceItems = document.querySelectorAll('.services .service-item1, .services .service-item2, .services .service-item3, .services .service-item4');

serviceItems.forEach(item => {
item.addEventListener('click', function() {

  const serviceName = this.querySelector('label').textContent;

  document.getElementById('serviceName').value = serviceName;
  
  document.querySelector('.contact-form-container').style.display = 'block';
});
});

document.querySelector('.contact-form').addEventListener('submit', function(event) {
event.preventDefault(); // Prevent form submission

const name = document.querySelector('#name').value;
const userEmail = document.querySelector('#email').value;
const message = document.querySelector('#message').value;

const serviceName = document.querySelector('#serviceName').value;

const ownerEmail = "teribair12@gmail.com";

const emailBody = `Service I'm Interested In: ${serviceName}\n\nMessage: ${message}`;

const mailtoLink = `mailto:${ownerEmail}?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(emailBody)}&cc=${encodeURIComponent(userEmail)}`;

window.location.href = mailtoLink;
});

function closeForm() {
document.querySelector('.contact-form-container').style.display = 'none';
}