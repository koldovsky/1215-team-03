const title = document.querySelector(".header__hero-title");
const button = document.querySelector(".header__button__let-us-sail");

title.classList.add("reset");
button.classList.add("reset");

setTimeout(() => {
  title.classList.remove("reset");
  button.classList.remove("reset");
  title.classList.add("visible");
  button.classList.add("visible");
}, 10);
