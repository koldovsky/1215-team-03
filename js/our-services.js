function init() {
  import("./global.header.js");
  import("./our-services.spectacular-destinations-lightbox.js");
  import("./our-services.accomodation-options.js");
  import("./our-services.crew-services.js");
  if (typeof fetchAccommodations === "function") {
    fetchAccommodations();
} else {
    console.error("Function fetchAccommodations is not defined.");
}
}

const totalPartials = document.querySelectorAll(
  '[hx-trigger="load"], [data-hx-trigger="load"]'
).length;
let loadedPartialsCount = 0;

document.body.addEventListener("htmx:afterOnLoad", () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) init();
});
