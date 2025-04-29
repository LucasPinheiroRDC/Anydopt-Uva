
function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');
}

let currentSlide = 0;
  
    function moveSlide(direction) {
      const track = document.querySelector('.carousel-track');
      const items = document.querySelectorAll('.carousel-item');
      const totalSlides = items.length;
  
      currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  
      track.style.transform = `translateX(-${currentSlide * 100}%)`;
    }