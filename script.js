const slides = document.querySelector('.slides');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const slideCount = document.querySelectorAll('.slide').length;
let currentIndex = 0;

function updateSlidePosition() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prev.addEventListener('click', () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : slideCount - 1;
  updateSlidePosition();
});

next.addEventListener('click', () => {
  currentIndex = (currentIndex < slideCount - 1) ? currentIndex + 1 : 0;
  updateSlidePosition();
});