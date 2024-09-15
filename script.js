// Add an event listener to the window resize event
window.addEventListener('resize', handleResize);

// Function to handle scaling dynamically when the window is resized
function handleResize() {
  const width = window.innerWidth;
  const body = document.body;
  
  if (width <= 480) {
    body.style.fontSize = '14px';  // Adjust font size for small screens
    document.querySelector('header h1').style.fontSize = '24px';
    document.querySelector('nav ul li a').style.fontSize = '16px';
  } else if (width <= 768) {
    body.style.fontSize = '16px';  // Adjust for tablet-sized screens
    document.querySelector('header h1').style.fontSize = '28px';
    document.querySelector('nav ul li a').style.fontSize = '18px';
  } else {
    body.style.fontSize = '18px';  // Adjust for larger screens
    document.querySelector('header h1').style.fontSize = '36px';
    document.querySelector('nav ul li a').style.fontSize = '20px';
  }
}
handleResize();
