const form = document.getElementById('sail-form');
const inputs = form.querySelectorAll('.our-fleet-form__input, .our-fleet-form__select');

const textInput = form.querySelector('.our-fleet-form__input[type="text"]');
textInput.addEventListener('input', function(event) {
        this.value = this.value.replace(/[^a-zA-Z]/g, '');
    });

const telInput = form.querySelector('.our-fleet-form__input[type="tel"]');
telInput.addEventListener('input', function(event) {
        this.value = this.value.replace(/[^0-9]/g, '');
    });

form.addEventListener('submit', function (event) {
  event.preventDefault();
  let valid = true;
  inputs.forEach((input) => {
    if (
      input.tagName.toLowerCase() === 'select' &&
      input.value === 'Choose your trip'
    ) {
      input.classList.add('error');
      valid = false;
    } else if (!input.value) {
      input.classList.add('error');
      valid = false;
    } else {
      input.classList.remove('error');
    }
  });
  if (valid) {
    const submitBtn = form.querySelector('.our-fleet-form__submit');
        submitBtn.classList.add('submitted');
        submitBtn.value = 'Form submitted successfully!';
        form.reset();
        setTimeout(() => {
          submitBtn.classList.remove('submitted');
          submitBtn.value = "Send a Request";
        }, 2000);
  }
});

inputs.forEach((input) => {
  input.addEventListener('input', function () {
    if (input.value) {
      input.classList.remove('error');
    }
  });
});
