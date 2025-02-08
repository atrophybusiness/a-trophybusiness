document.addEventListener("DOMContentLoaded", function() {
  
  document.querySelectorAll('label').forEach(function(label) {
    label.remove();
  });

  const buttons = document.querySelectorAll('.tab-button');
  const contents = document.querySelectorAll('.tab-content');
  
  buttons[0].classList.add('active');
  contents[0].classList.add('active');
  
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const targetTab = this.getAttribute('data-tab');
  
      buttons.forEach(btn => btn.classList.remove('active'));
      contents.forEach(content => content.classList.remove('active'));
  
      this.classList.add('active');
      document.getElementById('content-' + targetTab).classList.add('active');
    });
  });
  
  const images = document.querySelectorAll('.ImagesContainer .Image');

  images.forEach(imageDiv => {
    imageDiv.addEventListener('click', function() {

      const productImage = this.querySelector('img').src;

      document.getElementById('productImage').value = productImage;
      
      document.querySelector('.contact-form-container').style.display = 'block';
    });
  });

  document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.querySelector('#name').value;
    const userEmail = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    const productImage = document.querySelector('#productImage').value;

    const ownerEmail = "teribair12@gmail.com";

    const emailBody = `Product Image: ${productImage}\n\nMessage: ${message}%0D%0A%0D%0ARegards,%0D%0A${name}`;

    const mailtoLink = `mailto:${ownerEmail}?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(emailBody)}&cc=${encodeURIComponent(userEmail)}`;

    window.location.href = mailtoLink;
  });
});

function closeForm() {
  document.querySelector('.contact-form-container').style.display = 'none';
}