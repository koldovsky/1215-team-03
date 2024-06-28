const images = document.querySelectorAll(".destination-place__image");
const lightbox = document.querySelector(".destinations__lightbox");
const lightboxImage = document.querySelector(".destinations__lightbox-image");
const prevButton = document.querySelector(".destinations__lightbox__btn-prev");
const nextButton = document.querySelector(".destinations__lightbox__btn-next");
let currentIndex = 0;

function updateLightbox(index) {
  const imageSrc = images[index].src;
  const imageAlt = images[index].alt;
  lightboxImage.src = imageSrc;
  lightboxImage.alt = imageAlt;
  currentIndex = index;

  prevButton.style.visibility = currentIndex === 0 ? "hidden" : "visible";
  nextButton.style.visibility =
    currentIndex === images.length - 1 ? "hidden" : "visible";
}

images.forEach((image, index) => {
  image.addEventListener("click", () => {
    updateLightbox(index);
    lightbox.style.display = "flex";
  });
});

lightbox.addEventListener("click", (event) => {
  if (!(event.target === prevButton || event.target === nextButton)) {
    lightbox.style.display = "none";
  }
});

prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    updateLightbox(currentIndex - 1);
  }
});

nextButton.addEventListener("click", () => {
  if (currentIndex < images.length - 1) {
    updateLightbox(currentIndex + 1);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    lightbox.style.display = "none";
  }
  else if (event.key === "ArrowLeft"){
    if (currentIndex > 0) {
        updateLightbox(currentIndex - 1);
      }
  }
  else if (event.key === "ArrowRight"){
    if (currentIndex < images.length - 1) {
        updateLightbox(currentIndex + 1);
      }
  }
});
