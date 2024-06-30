const crewSlides = [
  `<div class="crew-services__options-option">
    <img
      class="crew-services__option-image"
      src="img/our-services/our-service_captain-only.webp"
      alt="Captain only"
    />
    <p class="crew-services__subtitle">Captain-only</p>
    <p class="crew-services__description">
      If you are ready to learn yachting, moor the vessel, tie knots and much
      more, then this option is for you! A proficient and charismatic captain
      will teach you yachting and tell stories about sailing.
    </p>
  </div>`,
  `<div class="crew-services__options-option">
    <img
      class="crew-services__option-image"
      src="img/our-services/our-service_captain-skipper.webp"
      alt="Captain and skipper"
    />
    <p class="crew-services__subtitle">Captain & Skipper</p>
    <p class="crew-services__description">
      Skipper and captain will take care of everything connected with the yacht.
      Docking, sailing, knots tying - you don't need to think about it. Just
      have fun on the yacht, sunbathe and swim in the harbors.
    </p>
  </div>`,
  `<div class="crew-services__options-option">
    <img
      class="crew-services__option-image"
      src="img/our-services/our-service_all-inclusive.jpg"
      alt="All inclusive"
    />
    <p class="crew-services__subtitle">All Inclusive</p>
    <p class="crew-services__description">
      Don't want to lift a finger? This is the best option for you. It includes
      a captain, skipper, cook, waiters and even housemaids to make you trip a
      really luxury experience. Get aboard and enjoy your vacation!
    </p>
  </div>`,
];

let curInd = 0;

function renderCrewServicesSlide() {
  const slideContainer = document.querySelector(".crew-services__options");
  slideContainer.innerHTML = "";

  if (window.matchMedia("(max-width: 765px)").matches) {
    slideContainer.innerHTML = crewSlides[curInd];
  } else if (
    window.matchMedia("(min-width: 766px) and (max-width: 1079px)").matches
  ) {
    const secondSlideIdx = curInd + 1 >= crewSlides.length ? 0 : curInd + 1;
    slideContainer.innerHTML = crewSlides[curInd] + crewSlides[secondSlideIdx];
  } else {
    for (let i = 0; i < crewSlides.length; i++) {
      slideContainer.innerHTML += crewSlides[i];
    }
  }
  renderIndicators();
}

function renderIndicators() {
  let indicatorsHtml = "";
  for (let i = 0; i < crewSlides.length; i++) {
    if (i === curInd) {
      indicatorsHtml += ' <btn class="crew-services__radio-active"></btn>';
    } else {
      indicatorsHtml += '<btn class="crew-services__radio"></btn>';
    }
  }
  const indicatorsContainer = document.querySelector(
    ".crew-services__radio-buttons"
  );
  indicatorsContainer.innerHTML = indicatorsHtml;
  addIndicatorsEventListeners();
}

function addIndicatorsEventListeners() {
  const indicators = document.querySelectorAll(
    ".crew-services__radio-buttons .crew-services__radio"
  );
  indicators.forEach((indicator, idx) => {
    indicator.addEventListener("click", () => {
      curInd = idx;
      renderCrewServicesSlide();
    });
  });
}

function nextCrewServicesSlide() {
  curInd = curInd + 1 >= crewSlides.length ? 0 : curInd + 1;
  renderCrewServicesSlide();
}

function prevCrewServicesSlide() {
  curInd = curInd - 1 < 0 ? crewSlides.length - 1 : curInd - 1;
  renderCrewServicesSlide();
}

const btnPrev = document.querySelector(".crew-services__prev-option");
btnPrev.addEventListener("click", prevCrewServicesSlide);

const btnNext = document.querySelector(".crew-services__next-option");
btnNext.addEventListener("click", nextCrewServicesSlide);

renderCrewServicesSlide();
window.addEventListener("resize", renderCrewServicesSlide);
