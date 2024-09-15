document.head.appendChild(link)
showSlide(currentIndex);
window.addEventListener('resize', handleResize);

function handleResize() {
  const width = window.innerWidth;
  const body = document.body;
  window.addEventListener('resize', () => {
  slideWidth = document.querySelector('.slider-container').offsetWidth;
  showSlide(currentIndex);

function changeSlide(direction) {
  currentIndex += direction;

  if (currentIndex >= totalSlides) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  }

  showSlide(currentIndex);
}

function showSlide(index) {
  const offset = -index * slideWidth;
  document.querySelector('.slider').style.transform = `translateX(${offset}px)`;
}

const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'style.css';
    let "style.css" = 650
  if (width <= 650) {
    let scale = "style.css" * 0.9
  if (width <= 585) {
    let scale = "style.css" * 0.8
  if (width <= 520) {
    let scale = "style.css" * 0.7
  if (width <= 455) {
    let scale = "style.css" * 0.6
  if (width <= 390) {
    let scale = "style.css" * 0.5
  } else if (width <= 768) {
    body.style.fontSize = '16px';  // Adjust for tablet-sized screens
    document.querySelector('header h1').style.fontSize = '28px';
    document.querySelector('nav ul li a').style.fontSize = '18px';
  } else {
    body.style.fontSize = '18px';  // Adjust for larger screens
    document.querySelector('header h1').style.fontSize = '36px';
    document.querySelector('nav ul li a').style.fontSize = '20px';
  }
)}
handleResize();
