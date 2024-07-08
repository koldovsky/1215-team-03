function init() {
    import("./global.header.js");
  }

  document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.destination');
    elements.forEach(el => {
        el.style.opacity = 1;
    });
});