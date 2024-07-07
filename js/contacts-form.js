document.addEventListener('htmx:afterSwap', function(event) {
  if (event.detail.target.querySelector('.contacts__form')) {
      const form = document.querySelector('.contacts__form');
      const nameInput = document.querySelector('.contacts__input--name');
      const phoneInput = document.querySelector('.contacts__input--phone');
      const emailInput = document.querySelector('.contacts__input--email');
      const submitButton = document.querySelector('.contacts__submit');
      const errorMessage = document.querySelector('.error-message');

      submitButton.addEventListener('click', function(event) {
          event.preventDefault();

          // Очистка ошибок
          clearErrors();

          // Валидация полей
          let valid = true;

          if (nameInput.value.trim() === '') {
              showError(nameInput, 'Name is required.');
              valid = false;
          }

          if (!validatePhone(phoneInput.value.trim())) {
              showError(phoneInput, 'Invalid phone number.');
              valid = false;
          }

          if (!validateEmail(emailInput.value.trim())) {
              showError(emailInput, 'Invalid email address.');
              valid = false;
          }

          if (valid) {
              // Вывод данных формы в консоль
              const formData = new FormData(form);
              const formObject = {};
              formData.forEach((value, key) => {
                  formObject[key] = value;
              });
              console.log('Form Data:', formObject);

              // Показ сообщения об успешной отправке
              errorMessage.textContent = 'Form data logged in console!';
              errorMessage.style.color = 'green';
              form.reset();
          }
      });

      function showError(input, message) {
          input.classList.add('contacts__input--error');
          const error = document.createElement('div');
          error.classList.add('error');
          error.textContent = message;
          input.parentNode.insertBefore(error, input.nextSibling);
      }

      function clearErrors() {
          const errors = document.querySelectorAll('.error');
          errors.forEach(error => error.remove());
          const inputs = document.querySelectorAll('.contacts__input');
          inputs.forEach(input => input.classList.remove('contacts__input--error'));
          errorMessage.textContent = '';
      }

      function validatePhone(phone) {
          // Простая проверка телефона (например, формат 123-456-7890)
          const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
          return phonePattern.test(phone);
      }

      function validateEmail(email) {
          // Простая проверка email
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailPattern.test(email);
      }
  }
});
