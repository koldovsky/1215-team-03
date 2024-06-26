document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById('menu__toggle');
    const navMenuWrapper = document.querySelector('.header__nav-menu-wrapper');
  
    menuToggle.addEventListener('change', function() {
      if (menuToggle.checked) {
        navMenuWrapper.style.display = 'flex';
      } else {
        navMenuWrapper.style.display = 'none';
      }
    });
  });
  