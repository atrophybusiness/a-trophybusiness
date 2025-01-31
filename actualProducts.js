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