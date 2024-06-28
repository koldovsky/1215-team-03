document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.travels-img img');

    images.forEach(image => {
        image.addEventListener('mouseenter', function() {
            image.style.transform = 'scale(1.1)';
        });

        image.addEventListener('mouseleave', function() {
            image.style.transform = 'scale(1)';
        });
    });
});