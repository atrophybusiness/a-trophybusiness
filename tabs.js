document.addEventListener('DOMContentLoaded', function() {

    document.querySelectorAll('label').forEach(function(label) {
      label.remove();
    });

    const buttons = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.tab-content');
  
    // Initial state: Show content of the first button
    buttons[0].classList.add('active');
    contents[0].classList.add('active');
  
    // Add event listeners for button clicks
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        const targetTab = this.getAttribute('data-tab');
  
        // Remove active class from all buttons and contents
        buttons.forEach(btn => btn.classList.remove('active'));
        contents.forEach(content => content.classList.remove('active'));
  
        // Add active class to clicked button and corresponding content
        this.classList.add('active');
        document.getElementById('content-' + targetTab).classList.add('active');
      });
    });
  });