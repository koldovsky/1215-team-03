const slides = [
    `<div class="our-partners_item">
        <img src="img/about-us/about-us_our-partners_bullseye.png" alt="Bullseye logo" class="our-partners_logo">
        <p class="our-partners_description"><strong>Bullseye Hotels Group</strong> accommodates us on land</p>
     </div>`,
    `<div class="our-partners_item">
        <img src="img/about-us/about-us_our-partners_norcold.webp" alt="Norcold logo" class="our-partners_logo">
        <p class="our-partners_description">Thanks to <strong>Norcold</strong> you don't need to clean anything</p>
     </div>`,
    `<div class="our-partners_item">
        <img src="img/about-us/about-us_our-partners_gear.webp" alt="Gear logo" class="our-partners_logo">
        <p class="our-partners_description"><strong>Gear Tours</strong> provides guided tours on land for our tourists</p>
     </div>`,
    `<div class="our-partners_item">
        <img src="img/about-us/about-us_our-partners_blue-state.webp" alt="Blue State Vintage logo" class="our-partners_logo">
        <p class="our-partners_description"><strong>Blue State Vintage</strong> replenishes the mini-bars of our guests</p>
     </div>`
];

let currentIdx = 0;

function renderSlide() {
    const slideContainer = document.querySelector('.our-partners_container');
    slideContainer.innerHTML = '';

    if (window.matchMedia('(max-width: 767px)').matches) {
        slideContainer.innerHTML = slides[currentIdx];
    } else if (window.matchMedia('(min-width: 768px) and (max-width: 1079px)').matches) {
        const secondSlideIdx = currentIdx + 1 >= slides.length ? 0 : currentIdx + 1;
        slideContainer.innerHTML = slides[currentIdx] + slides[secondSlideIdx];
    } else {
        for (let i = 0; i < slides.length; i++) {
            slideContainer.innerHTML += slides[i];
        }
    }
}

function nextSlide() {
    currentIdx = currentIdx + 1 >= slides.length ? 0 : currentIdx + 1;
    renderSlide();
}

function prevSlide() {
    currentIdx = currentIdx - 1 < 0 ? slides.length - 1 : currentIdx - 1;
    renderSlide();
}

const btnNext = document.querySelector('.about-us_partners-carousel__btn-next');
btnNext.addEventListener('click', nextSlide);

const btnPrev = document.querySelector('.about-us_partners-carousel__btn-prev');
btnPrev.addEventListener('click', prevSlide);

renderSlide();
window.addEventListener('resize', renderSlide);