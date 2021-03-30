const validateForm = () => {
  const form = document.querySelector('form');

  if (form) {
    const inputs = form.querySelectorAll('input');

    const validateInputs = () => {
      inputs.forEach((element) => {
        addEventListener('input', () => {
          if (!element.validity.valid) {
            element.parentElement.classList.add('form__field--error');
          } else {
            element.parentElement.classList.remove('form__field--error');
          }
        });
      });
    };

    validateInputs();
    form.addEventListener('submit', validateInputs);
  }
};

export {validateForm};
