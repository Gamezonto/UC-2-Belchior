document.addEventListener('DOMContentLoaded', () => {
  const slide = document.querySelector('.carousel-slide');
  const slides = document.querySelectorAll('.carousel-item');
  const dots = document.querySelectorAll('.dot');
  let currentIndex = 0;
  const intervalTime = 3000; // Tempo entre as trocas de imagem (em ms)
  let slideInterval;

  function goToSlide(index) {
      slide.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach(dot => dot.classList.remove('active'));
      dots[index].classList.add('active');
  }

  function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      goToSlide(currentIndex);
  }

  function startCarousel() {
      slideInterval = setInterval(nextSlide, intervalTime);
  }

  function stopCarousel() {
      clearInterval(slideInterval);
  }

  goToSlide(currentIndex);
  startCarousel();

  // Optional: Add event listeners for dots if you want to make them clickable
  dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
          currentIndex = index;
          goToSlide(currentIndex);
          stopCarousel();
          startCarousel();
      });
  });
});