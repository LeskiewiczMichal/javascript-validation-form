import { showError } from "./showError";

const passwordInput = document.querySelector("#password");
const passwordError = document.querySelector("#password + span.error");
const passwordConfirmationInput = document.querySelector(
  "#password-confirmation"
);
const passwordConfirmationInputError = document.querySelector(
  "#password-confirmation + span.error"
);
let passwordValid = false;
let passwordConfirmation = false;

const confirmPasswordInputs = () => {
  const passwordRGEX = /^.*(?=.{6,})(?=.*\d)(?=.*[a-zA-Z]).*$/g;
  if (!passwordRGEX.test(passwordInput.value)) {
    passwordError.textContent = "REGEX BAD";
    passwordError.className = "error active";
    passwordInput.className = "invalid";
    passwordValid = false;
  } else if (passwordInput.validity.valid) {
    passwordError.textContent = "";
    passwordError.className = "error";
    passwordInput.className = "valid";
    passwordValid = true;
  } else {
    showError();
  }

  if (passwordConfirmationInput.value !== passwordInput.value) {
    showError();
    passwordConfirmation = false;
    passwordConfirmationInput.className = "invalid";
  } else if (passwordConfirmationInput.validity.valid) {
    passwordConfirmationInputError.textContent = "";
    passwordConfirmationInputError.className = "error";
    passwordConfirmation = true;
    passwordConfirmationInput.className = "valid";
  } else {
    showError();
  }

  return { passwordValid, passwordConfirmation };
};

export { confirmPasswordInputs };
