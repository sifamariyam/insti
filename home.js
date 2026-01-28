// slider.js

document.addEventListener("DOMContentLoaded", function () {
  const slidesToShow = 3;
  const track = document.querySelector('.s6_sub1_sliders');
  const slides = track.querySelectorAll('.slide');
  let slideIndex = 0;

  function updateSlider(idx) {
    const viewportWidth = track.clientWidth;
    const cardW = viewportWidth / slidesToShow;
    const maxIndex = slides.length - slidesToShow;
    slideIndex = Math.max(0, Math.min(idx, maxIndex));
    const offset = -(slideIndex * cardW);
    track.style.transform = `translateX(${offset}px)`;
  }

  window.changeSlide = function (step) {
    updateSlider(slideIndex + step);
  };

  window.addEventListener('resize', () => updateSlider(slideIndex));
  updateSlider(slideIndex);
});
