let slides = document.querySelectorAll('.hero__slide')
const prevBtn = document.querySelector('.hero__slide-prev')
const nextBtn = document.querySelector('.hero__slide-next')

let currentSlide = 0

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${(i - index) * 100}%)`
  })
}

const prevSlide = () => {
  currentSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1
  showSlide(currentSlide)
}

const nextSlide = () => {
  currentSlide++
  if (currentSlide >= slides.length) {
    currentSlide = 0
  }
  showSlide(currentSlide)
}

prevBtn.addEventListener('click', prevSlide)
nextBtn.addEventListener('click', nextSlide)

setInterval(nextSlide, 5000)

showSlide(currentSlide)
