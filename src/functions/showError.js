const emailInput = document.querySelector("#email");
const emailError = document.querySelector("#email + span.error");
const countryInput = document.querySelector("#country");
const countryError = document.querySelector("#country + span.error");
const passwordInput = document.querySelector("#password");
const passwordError = document.querySelector("#password + span.error");
const passwordConfirmationInput = document.querySelector(
  "#password-confirmation"
);
const passwordConfirmationInputError = document.querySelector(
  "#password-confirmation + span.error"
);

const showError = () => {
  if (emailInput.validity.valueMissing) {
    emailError.textContent = "You need to enter e-mail adress.";
    emailError.className = "error active";
  } else if (emailInput.validity.typeMismatch) {
    emailError.textContent = "Entered value needs to be an e-mail adress.";
    emailError.className = "error active";
  }

  if (countryInput.validity.valueMissing) {
    countryError.textContent = "You need to enter country.";
    countryError.className = "error active";
  } else if (countryInput.validity.tooShort) {
    countryError.textContent = "Your country name is too short.";
    countryError.className = "error active";
  }

  if (passwordInput.validity.valueMissing) {
    passwordError.textContent = "You need to enter password.";
    passwordError.className = "error active";
    passwordInput.classname = "invalid";
  }

  if (passwordConfirmationInput.value != passwordInput.value) {
    passwordConfirmationInputError.textContent = "Passwords must match";
    passwordConfirmationInputError.className = "error active";
    passwordConfirmationInput.classname = "invalid";
  }
};

export { showError };
